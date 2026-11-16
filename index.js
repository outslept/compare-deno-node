import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import fs from "node:fs/promises";
import { builtinModules } from "node:module";
import { promisify } from "node:util";

const exec = promisify(execFile);

async function probe(modules) {
  const pad = "    ";
  const inspect = (val, indent = "", cache = new Map()) => {
    if (val === undefined || val === null) return String(val);
    const t = typeof val;
    if (t === "string") return JSON.stringify(val.length > 100 ? `${val.slice(0, 100)}…` : val);
    if (t === "bigint") return `${val}n`;
    if (t !== "object" && t !== "function") return val.toString();
    if (cache.has(val)) return `[Circular: *${cache.get(val)}]`;

    const id = cache.size + 1;
    cache.set(val, id);
    let out = `<ref *${id}> `;

    if (val instanceof RegExp) {
      out += val.toString();
    } else if (Array.isArray(val)) {
      const items = val.map((v) => `${indent + pad}${inspect(v, indent + pad, cache)}`);
      out += items.length ? `[\n${items.join(",\n")}\n${indent}]` : "[]";
    } else {
      if (t === "function") {
        const s = val.toString();
        out +=
          s.startsWith("class ") && s.endsWith("}")
            ? `class ${s.slice(6, s.indexOf("{")).trim()} `
            : `${s.startsWith("async ") ? "async ƒ" : "ƒ"} ${val.name || ""}(length: ${val.length}) `;
      } else if (val.constructor !== Object) {
        out += val.constructor ? `${val.constructor.name} ` : "[Object: null prototype] ";
      }

      const keys = Reflect.ownKeys(val).sort((a, b) => String(a).localeCompare(String(b)));
      const entries = keys.flatMap((k) => {
        const d = Object.getOwnPropertyDescriptor(val, k);
        if (!d?.enumerable) return [];
        const gs = [d.get && "get", d.set && "set"].filter(Boolean).join("/");
        try {
          const v = inspect(val[k], indent + pad, cache).trim();
          return [`${indent + pad}${gs ? `[${gs}] ` : ""}${String(k)}: ${v}`];
        } catch (e) {
          return [`${indent + pad}${String(k)}: [Error accessing: ${e.message}]`];
        }
      });
      out += entries.length ? `{\n${entries.join(",\n")}\n${indent}}` : "{}";
    }

    if (!indent) {
      for (const refId of cache.values()) {
        if (!out.includes(`[Circular: *${refId}]`)) out = out.replaceAll(`<ref *${refId}> `, "");
      }
    }
    return out.replaceAll("\u0000", "");
  };

  const results = {};
  for (const m of modules) {
    try {
      results[m] = { ok: true, out: inspect(await import(m.startsWith("node:") ? m : `node:${m}`)) };
    } catch (e) {
      results[m] = { ok: false, out: `Error importing module: ${e.message}` };
    }
  }
  console.log(JSON.stringify(results));
}

const toPaths = (out) => {
  const map = new Map(), stack = [];
  for (const line of out.split("\n").slice(1, -1)) {
    const depth = line.search(/\S/) >> 2;
    const m = line.trim().replace(/,$/, "").match(/^(?:\[[^\]]+\]\s+)?([^":]+):\s*(.+)$/);
    if (!m) continue;
    stack.length = depth - 1;
    stack.push(m[1]);
    const val = m[2]
      .replace(/^<ref \*\d+>\s*/, "")
      .replace(/\[Circular: \*\d+\]/g, "[Circular]")
      .replace(/\s*(?:\{\}|\[\]|\{|\[)$/, "");
    map.set(stack.join("."), val || "{}");
  }
  return map;
};

const diffPaths = (nOut, dOut) => {
  const nMap = toPaths(nOut), dMap = toPaths(dOut);
  const keys = [...new Set([...nMap.keys(), ...dMap.keys()])].sort();
  const lines = [];
  for (const k of keys) {
    const nVal = nMap.get(k), dVal = dMap.get(k);
    if (nVal === dVal) continue;
    if (k === "default" && (nVal === "{}" || dVal === "{}")) continue;
    if (k.startsWith("default.") && (nMap.has(k.slice(8)) || dMap.has(k.slice(8)))) continue;
    const parent = k.includes(".") ? k.slice(0, k.lastIndexOf(".")) : "";
    if (dVal === undefined) {
      if (!parent || dMap.has(parent)) lines.push(`- ${k}: ${nVal}`);
    } else if (nVal === undefined) {
      if (!parent || nMap.has(parent)) lines.push(`+ ${k}: ${dVal}`);
    } else {
      lines.push(`- ${k}: ${nVal}`, `+ ${k}: ${dVal}`);
    }
  }
  return lines.join("\n");
};

const selfTest = {};
const origLog = console.log;
console.log = (s) => Object.assign(selfTest, JSON.parse(s));
await probe(["path", "non_existent_builtin_xyz"]);
console.log = origLog;
assert.equal(selfTest.path.ok, true);
assert.equal(selfTest.non_existent_builtin_xyz.ok, false);
assert.equal(
  diffPaths(
    "{\n    a: {\n        x: 1\n    },\n    b: 2,\n    default: {\n        b: 2\n    }\n}",
    "{\n    a: {}\n}",
  ),
  "- a.x: 1\n- b: 2",
);

const modules = builtinModules.filter((m) => !m.startsWith("_")).sort();
const script = `(${probe.toString()})(${JSON.stringify(modules)})`;
const maxBuffer = 32 * 1024 * 1024;

const [nodeRun, denoRun, denoVer] = await Promise.all([
  exec("node", ["--input-type=module", "-e", script], { maxBuffer }),
  exec("deno", ["eval", script], { maxBuffer }),
  exec("deno", ["--version"]),
]);

const nodeData = JSON.parse(nodeRun.stdout.trim().split("\n").pop());
const denoData = JSON.parse(denoRun.stdout.trim().split("\n").pop());

const nodeVersion = `[${process.version}](https://github.com/nodejs/node/releases/tag/${process.version})`;
const denoLine = denoVer.stdout.split("\n")[0].trim();
const denoMatch = denoLine.match(/^deno\s+([0-9.]+)(?:\+([a-f0-9]+))?(?:\s+\((.+?)\))?$/i);
const denoVersion = denoMatch
  ? `Deno [v${denoMatch[1]}](https://github.com/denoland/deno/releases/tag/v${denoMatch[1]})` +
    (denoMatch[2] ? `+[${denoMatch[2].slice(0, 7)}](https://github.com/denoland/deno/commit/${denoMatch[2]})` : "") +
    (denoMatch[3] ? ` (${denoMatch[3]})` : "")
  : denoLine;

const date = new Date().toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" });

const rows = modules.map((m) => {
  const n = nodeData[m], d = denoData[m];
  const diff = n.ok && d.ok && n.out !== d.out ? diffPaths(n.out, d.out) : "";
  const status =
    n.ok && d.ok
      ? n.out === d.out || !diff
        ? "✅ Identical"
        : "⚠️ Differs"
      : n.ok
        ? "❌ Node-only"
        : "🦕 Deno-only";
  return {
    m,
    slug: m.replace(/^node:/, "").replace(/[^a-z0-9_-]+/gi, "-").toLowerCase(),
    status,
    diff,
    nOut: n.out,
    dOut: d.out,
  };
});

const count = (prefix) => rows.filter((r) => r.status.startsWith(prefix)).length;
const nodeOnly = rows.filter((r) => r.status.startsWith("❌"));
const differs = rows.filter((r) => r.status.startsWith("⚠️"));

const diffSection = [
  nodeOnly.length &&
    `### ❌ Node-only (${nodeOnly.length})\n` +
      nodeOnly.map((r) => `- [\`${r.m}\`](#${r.slug})`).join(" · "),
  differs.length &&
    `### ⚠️ API Differences (${differs.length})\n\n` +
      differs
        .map(
          (r) => `<details>
  <summary><code>${r.m}</code> (<a href="#${r.slug}">full output ↓</a>)</summary>

\`\`\`diff
${r.diff}
\`\`\`
</details>`,
        )
        .join("\n\n"),
]
  .filter(Boolean)
  .join("\n\n");

const fullDetails = rows
  .map(
    (r) => `<details id="${r.slug}">
  <summary><code>${r.m}</code> — ${r.status}</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">\n\n\`\`\`js\n${r.nOut}\n\`\`\`\n\n</td>
      <td valign="top">\n\n\`\`\`js\n${r.dOut}\n\`\`\`\n\n</td>
    </tr>
  </table>
</details>`,
  )
  .join("\n\n");

const readme = `# Deno vs Node.js: Built-in API comparison

Updated ${date} • Node.js ${nodeVersion} • ${denoVersion}

**Total (${rows.length}):** ✅ Identical: ${count("✅")} · ⚠️ Differs: ${count("⚠️")} · ❌ Node-only: ${count("❌")}

## Differences (\`-\` Node.js / \`+\` Deno)

${diffSection}

## Full module details

${fullDetails}

## Credits
Adapted from [compare-bun-node](https://github.com/privatenumber/compare-bun-node/) by [@privatenumber](https://github.com/privatenumber).
`;

await fs.writeFile("README.md", readme);
console.log(`✓ Generated README.md for ${rows.length} modules`);
