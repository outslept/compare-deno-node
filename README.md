# Deno vs Node.js: Built-in API comparison

Updated Nov 16, 2026 • Node.js [v27.0.0-alpha.0.1.0](https://github.com/nodejs/node/releases/tag/v27.0.0-alpha.0.1.0) • Deno [v2.9.8](https://github.com/denoland/deno/releases/tag/v2.9.8)+[e7b39eb](https://github.com/denoland/deno/commit/e7b39eb) (canary, release, x86_64-unknown-linux-gnu)

**Total (61):** ✅ Identical: 10 · ⚠️ Differs: 47 · ❌ Node-only: 4

## Differences (`-` Node.js / `+` Deno)

### ❌ Node-only (4)
- [`net/promises`](#net-promises) · - [`node:ffi`](#ffi) · - [`node:sea`](#sea) · - [`node:vfs`](#vfs)

### ⚠️ API Differences (47)

<details>
  <summary><code>assert</code> (<a href="#assert">full output ↓</a>)</summary>

```diff
- AssertionError: class AssertionError extends Error
+ AssertionError: class AssertionError extends h
+ CallTracker: ƒ deprecated(length: 0)
+ default.strict.CallTracker: [Circular]
```
</details>

<details>
  <summary><code>assert/strict</code> (<a href="#assert-strict">full output ↓</a>)</summary>

```diff
- Assert: ƒ Assert(length: 1)
- AssertionError: class AssertionError extends Error
+ AssertionError: class AssertionError extends h
- deepEqual: ƒ deepStrictEqual(length: 2)
+ deepEqual: ƒ deepEqual(length: 2)
- deepStrictEqual: [Circular]
+ deepStrictEqual: ƒ deepStrictEqual(length: 2)
+ default.CallTracker: ƒ deprecated(length: 0)
+ default.ok.Assert: [Circular]
+ default.ok.AssertionError: [Circular]
+ default.ok.CallTracker: [Circular]
+ default.ok.deepEqual: [Circular]
+ default.ok.deepStrictEqual: [Circular]
+ default.ok.doesNotMatch: [Circular]
+ default.ok.doesNotReject: [Circular]
+ default.ok.doesNotThrow: [Circular]
+ default.ok.equal: ƒ equal(length: 2)
+ default.ok.fail: [Circular]
+ default.ok.ifError: [Circular]
+ default.ok.match: [Circular]
+ default.ok.notDeepEqual: ƒ notDeepEqual(length: 2)
+ default.ok.notDeepStrictEqual: [Circular]
+ default.ok.notEqual: ƒ notEqual(length: 2)
+ default.ok.notStrictEqual: [Circular]
+ default.ok.ok: [Circular]
+ default.ok.partialDeepStrictEqual: ƒ partialDeepStrictEqual(length: 2)
+ default.ok.rejects: async ƒ rejects(length: 1)
+ default.ok.strict: [Circular]
+ default.ok.strictEqual: [Circular]
+ default.ok.throws: ƒ throws(length: 1)
```
</details>

<details>
  <summary><code>async_hooks</code> (<a href="#async_hooks">full output ↓</a>)</summary>

```diff
- asyncWrapProviders.ARGON2REQUEST: 60
- asyncWrapProviders.CHECKPRIMEREQUEST: 55
+ asyncWrapProviders.CHECKPRIMEREQUEST: 49
- asyncWrapProviders.CIPHERREQUEST: 61
+ asyncWrapProviders.CIPHERREQUEST: 54
- asyncWrapProviders.DERIVEBITSREQUEST: 62
+ asyncWrapProviders.DERIVEBITSREQUEST: 55
- asyncWrapProviders.DTLS_ENDPOINT: 21
- asyncWrapProviders.DTLS_SESSION: 22
- asyncWrapProviders.FSREQPROMISE: 10
+ asyncWrapProviders.FSREQPROMISE: 9
- asyncWrapProviders.GETADDRINFOREQWRAP: 11
+ asyncWrapProviders.GETADDRINFOREQWRAP: 10
- asyncWrapProviders.GETNAMEINFOREQWRAP: 12
+ asyncWrapProviders.GETNAMEINFOREQWRAP: 11
- asyncWrapProviders.GLOBREQUEST: 9
- asyncWrapProviders.HASHREQUEST: 63
+ asyncWrapProviders.HASHREQUEST: 56
- asyncWrapProviders.HEAPSNAPSHOT: 13
+ asyncWrapProviders.HEAPSNAPSHOT: 12
- asyncWrapProviders.HTTP2PING: 16
+ asyncWrapProviders.HTTP2PING: 15
- asyncWrapProviders.HTTP2SESSION: 14
+ asyncWrapProviders.HTTP2SESSION: 13
- asyncWrapProviders.HTTP2SETTINGS: 17
+ asyncWrapProviders.HTTP2SETTINGS: 16
- asyncWrapProviders.HTTP2STREAM: 15
+ asyncWrapProviders.HTTP2STREAM: 14
- asyncWrapProviders.HTTPCLIENTREQUEST: 19
+ asyncWrapProviders.HTTPCLIENTREQUEST: 18
- asyncWrapProviders.HTTPINCOMINGMESSAGE: 18
+ asyncWrapProviders.HTTPINCOMINGMESSAGE: 17
- asyncWrapProviders.JSSTREAM: 23
+ asyncWrapProviders.JSSTREAM: 19
+ asyncWrapProviders.JSUDPWRAP: 20
- asyncWrapProviders.KEYEXPORTREQUEST: 59
+ asyncWrapProviders.KEYEXPORTREQUEST: 53
- asyncWrapProviders.KEYGENREQUEST: 58
+ asyncWrapProviders.KEYGENREQUEST: 52
- asyncWrapProviders.KEYPAIRGENREQUEST: 57
+ asyncWrapProviders.KEYPAIRGENREQUEST: 51
- asyncWrapProviders.LOCKS: 20
- asyncWrapProviders.MESSAGEPORT: 24
+ asyncWrapProviders.MESSAGEPORT: 21
- asyncWrapProviders.PBKDF2REQUEST: 56
+ asyncWrapProviders.PBKDF2REQUEST: 50
- asyncWrapProviders.PIPECONNECTWRAP: 25
+ asyncWrapProviders.PIPECONNECTWRAP: 22
- asyncWrapProviders.PIPESERVERWRAP: 26
+ asyncWrapProviders.PIPESERVERWRAP: 23
- asyncWrapProviders.PIPEWRAP: 27
+ asyncWrapProviders.PIPEWRAP: 24
- asyncWrapProviders.PROCESSWRAP: 28
+ asyncWrapProviders.PROCESSWRAP: 25
- asyncWrapProviders.PROMISE: 29
+ asyncWrapProviders.PROMISE: 26
- asyncWrapProviders.QUERYWRAP: 30
+ asyncWrapProviders.QUERYWRAP: 27
- asyncWrapProviders.QUIC_ENDPOINT: 31
+ asyncWrapProviders.QUIC_ENDPOINT: 28
- asyncWrapProviders.QUIC_LOGSTREAM: 32
+ asyncWrapProviders.QUIC_LOGSTREAM: 29
+ asyncWrapProviders.QUIC_PACKET: 30
- asyncWrapProviders.QUIC_SESSION: 33
+ asyncWrapProviders.QUIC_SESSION: 31
- asyncWrapProviders.QUIC_STREAM: 34
+ asyncWrapProviders.QUIC_STREAM: 32
- asyncWrapProviders.QUIC_UDP: 35
+ asyncWrapProviders.QUIC_UDP: 33
- asyncWrapProviders.RANDOMBYTESREQUEST: 64
+ asyncWrapProviders.RANDOMBYTESREQUEST: 57
- asyncWrapProviders.RANDOMPRIMEREQUEST: 65
+ asyncWrapProviders.RANDOMPRIMEREQUEST: 58
- asyncWrapProviders.SCRYPTREQUEST: 66
+ asyncWrapProviders.SCRYPTREQUEST: 59
- asyncWrapProviders.SHUTDOWNWRAP: 36
+ asyncWrapProviders.SHUTDOWNWRAP: 34
- asyncWrapProviders.SIGINTWATCHDOG: 46
+ asyncWrapProviders.SIGINTWATCHDOG: 44
- asyncWrapProviders.SIGNALWRAP: 37
+ asyncWrapProviders.SIGNALWRAP: 35
- asyncWrapProviders.SIGNREQUEST: 67
+ asyncWrapProviders.SIGNREQUEST: 60
- asyncWrapProviders.STATWATCHER: 38
+ asyncWrapProviders.STATWATCHER: 36
- asyncWrapProviders.STREAMPIPE: 39
+ asyncWrapProviders.STREAMPIPE: 37
- asyncWrapProviders.TCPCONNECTWRAP: 40
+ asyncWrapProviders.TCPCONNECTWRAP: 38
- asyncWrapProviders.TCPSERVERWRAP: 41
+ asyncWrapProviders.TCPSERVERWRAP: 39
- asyncWrapProviders.TCPWRAP: 42
+ asyncWrapProviders.TCPWRAP: 40
- asyncWrapProviders.TLSWRAP: 68
+ asyncWrapProviders.TLSWRAP: 61
- asyncWrapProviders.TTYWRAP: 43
+ asyncWrapProviders.TTYWRAP: 41
- asyncWrapProviders.UDPSENDWRAP: 44
+ asyncWrapProviders.UDPSENDWRAP: 42
- asyncWrapProviders.UDPWRAP: 45
+ asyncWrapProviders.UDPWRAP: 43
- asyncWrapProviders.VERIFYREQUEST: 69
+ asyncWrapProviders.VERIFYREQUEST: 62
- asyncWrapProviders.WORKER: 47
+ asyncWrapProviders.WORKER: 45
- asyncWrapProviders.WORKERCPUPROFILE: 48
- asyncWrapProviders.WORKERCPUUSAGE: 49
- asyncWrapProviders.WORKERHEAPPROFILE: 50
- asyncWrapProviders.WORKERHEAPSNAPSHOT: 51
+ asyncWrapProviders.WORKERHEAPSNAPSHOT: 46
- asyncWrapProviders.WORKERHEAPSTATISTICS: 52
- asyncWrapProviders.WRITEWRAP: 53
+ asyncWrapProviders.WRITEWRAP: 47
- asyncWrapProviders.ZLIB: 54
+ asyncWrapProviders.ZLIB: 48
```
</details>

<details>
  <summary><code>buffer</code> (<a href="#buffer">full output ↓</a>)</summary>

```diff
- Buffer.Symbol(kIsEncodingSymbol): [Circular]
- Buffer.allocUnsafe: ƒ allocUnsafe(length: 2)
+ Buffer.allocUnsafe: ƒ allocUnsafe(length: 1)
- Buffer.allocUnsafeSlow: ƒ allocUnsafeSlow(length: 2)
+ Buffer.allocUnsafeSlow: ƒ allocUnsafeSlow(length: 1)
- Buffer.poolSize: 65536
+ Buffer.poolSize: 8192
- Buffer.stringLength: ƒ stringLength(length: 1)
+ SlowBuffer: [Circular]
+ default.utf8Write: ƒ utf8Write(length: 3)
- isLatin1: [Circular]
```
</details>

<details>
  <summary><code>child_process</code> (<a href="#child_process">full output ↓</a>)</summary>

```diff
- ChildProcess: ƒ ChildProcess(length: 0)
+ ChildProcess: class ChildProcess extends Oe
- _forkChild: ƒ _forkChild(length: 2)
```
</details>

<details>
  <summary><code>cluster</code> (<a href="#cluster">full output ↓</a>)</summary>

```diff
- _events: [Object: null prototype]
- _eventsCount: 0
- _maxListeners: undefined
- default.Symbol(shapeMode): false
+ worker: undefined
```
</details>

<details>
  <summary><code>console</code> (<a href="#console">full output ↓</a>)</summary>

```diff
- context: ƒ context(length: 1)
- createTask: ƒ createTask(length: 0)
+ default.Symbol(isConsoleInstance): true
+ indentLevel: 0
```
</details>

<details>
  <summary><code>constants</code> (<a href="#constants">full output ↓</a>)</summary>

```diff
+ ALPN_ENABLED: 1
+ BROTLI_DECODE: 8
+ BROTLI_DECODER_ERROR_ALLOC_BLOCK_TYPE_TREES: -30
+ BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MAP: -25
+ BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MODES: -21
+ BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_1: -26
+ BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_2: -27
+ BROTLI_DECODER_ERROR_ALLOC_TREE_GROUPS: -22
+ BROTLI_DECODER_ERROR_DICTIONARY_NOT_SET: -19
+ BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_1: -9
+ BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_2: -10
+ BROTLI_DECODER_ERROR_FORMAT_CL_SPACE: -6
+ BROTLI_DECODER_ERROR_FORMAT_CONTEXT_MAP_REPEAT: -8
+ BROTLI_DECODER_ERROR_FORMAT_DICTIONARY: -12
+ BROTLI_DECODER_ERROR_FORMAT_DISTANCE: -16
+ BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_META_NIBBLE: -3
+ BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_NIBBLE: -1
+ BROTLI_DECODER_ERROR_FORMAT_HUFFMAN_SPACE: -7
+ BROTLI_DECODER_ERROR_FORMAT_PADDING_1: -14
+ BROTLI_DECODER_ERROR_FORMAT_PADDING_2: -15
+ BROTLI_DECODER_ERROR_FORMAT_RESERVED: -2
+ BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_ALPHABET: -4
+ BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_SAME: -5
+ BROTLI_DECODER_ERROR_FORMAT_TRANSFORM: -11
+ BROTLI_DECODER_ERROR_FORMAT_WINDOW_BITS: -13
+ BROTLI_DECODER_ERROR_INVALID_ARGUMENTS: -20
+ BROTLI_DECODER_ERROR_UNREACHABLE: -31
+ BROTLI_DECODER_NEEDS_MORE_INPUT: 2
+ BROTLI_DECODER_NEEDS_MORE_OUTPUT: 3
+ BROTLI_DECODER_NO_ERROR: 0
+ BROTLI_DECODER_PARAM_DISABLE_RING_BUFFER_REALLOCATION: 0
+ BROTLI_DECODER_PARAM_LARGE_WINDOW: 1
+ BROTLI_DECODER_RESULT_ERROR: 0
+ BROTLI_DECODER_RESULT_NEEDS_MORE_INPUT: 2
+ BROTLI_DECODER_RESULT_NEEDS_MORE_OUTPUT: 3
+ BROTLI_DECODER_RESULT_SUCCESS: 1
+ BROTLI_DECODER_SUCCESS: 1
+ BROTLI_DEFAULT_MODE: 0
+ BROTLI_DEFAULT_QUALITY: 11
+ BROTLI_DEFAULT_WINDOW: 22
+ BROTLI_ENCODE: 9
+ BROTLI_LARGE_MAX_WINDOW_BITS: 30
+ BROTLI_MAX_INPUT_BLOCK_BITS: 24
+ BROTLI_MAX_QUALITY: 11
+ BROTLI_MAX_WINDOW_BITS: 24
+ BROTLI_MIN_INPUT_BLOCK_BITS: 16
+ BROTLI_MIN_QUALITY: 0
+ BROTLI_MIN_WINDOW_BITS: 10
+ BROTLI_MODE_FONT: 2
+ BROTLI_MODE_GENERIC: 0
+ BROTLI_MODE_TEXT: 1
+ BROTLI_OPERATION_EMIT_METADATA: 3
+ BROTLI_OPERATION_FINISH: 2
+ BROTLI_OPERATION_FLUSH: 1
+ BROTLI_OPERATION_PROCESS: 0
+ BROTLI_PARAM_DISABLE_LITERAL_CONTEXT_MODELING: 4
+ BROTLI_PARAM_LARGE_WINDOW: 6
+ BROTLI_PARAM_LGBLOCK: 3
+ BROTLI_PARAM_LGWIN: 2
+ BROTLI_PARAM_MODE: 0
+ BROTLI_PARAM_NDIRECT: 8
+ BROTLI_PARAM_NPOSTFIX: 7
+ BROTLI_PARAM_QUALITY: 1
+ BROTLI_PARAM_SIZE_HINT: 5
+ DEFLATE: 1
+ DEFLATERAW: 5
+ ENGINE_METHOD_ALL: 65535
+ ENGINE_METHOD_CIPHERS: 64
+ ENGINE_METHOD_DH: 4
+ ENGINE_METHOD_DIGESTS: 128
+ ENGINE_METHOD_DSA: 2
+ ENGINE_METHOD_EC: 2048
+ ENGINE_METHOD_NONE: 0
+ ENGINE_METHOD_PKEY_ASN1_METHS: 1024
+ ENGINE_METHOD_PKEY_METHS: 512
+ ENGINE_METHOD_RAND: 8
+ ENGINE_METHOD_RSA: 1
+ GUNZIP: 4
+ GZIP: 3
+ INFLATE: 2
+ INFLATERAW: 6
- OPENSSL_VERSION_NUMBER: 1074790400
+ OPENSSL_VERSION_NUMBER: 269488319
- O_DIRECT: 16384
- O_NOATIME: 262144
+ O_SYMLINK: undefined
+ SIGUNUSED: 31
- SSL_OP_ALL: 2147485760
+ SSL_OP_ALL: 2147485780
+ SSL_OP_EPHEMERAL_RSA: 0
+ SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER: 0
+ SSL_OP_MICROSOFT_SESS_ID_BUG: 0
+ SSL_OP_MSIE_SSLV2_RSA_PADDING: 0
+ SSL_OP_NETSCAPE_CA_DN_BUG: 0
+ SSL_OP_NETSCAPE_CHALLENGE_BUG: 0
+ SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG: 0
+ SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG: 0
+ SSL_OP_PKCS1_CHECK_1: 0
+ SSL_OP_PKCS1_CHECK_2: 0
+ SSL_OP_SINGLE_DH_USE: 0
+ SSL_OP_SINGLE_ECDH_USE: 0
+ SSL_OP_SSLEAY_080_CLIENT_DH_BUG: 0
+ SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG: 0
+ SSL_OP_TLS_BLOCK_PADDING_BUG: 0
+ SSL_OP_TLS_D5_BUG: 0
+ UNZIP: 7
- UV_FS_O_RANDOM: 0
- UV_FS_O_SEQUENTIAL: 0
- UV_FS_O_SHORT_LIVED: 0
- UV_FS_O_TEMPORARY: 0
+ ZLIB_VERNUM: 4784
+ Z_BEST_COMPRESSION: 9
+ Z_BEST_SPEED: 1
+ Z_BLOCK: 5
+ Z_BUF_ERROR: -5
+ Z_DATA_ERROR: -3
+ Z_DEFAULT_CHUNK: 16384
+ Z_DEFAULT_COMPRESSION: -1
+ Z_DEFAULT_LEVEL: -1
+ Z_DEFAULT_MEMLEVEL: 8
+ Z_DEFAULT_STRATEGY: 0
+ Z_DEFAULT_WINDOWBITS: 15
+ Z_ERRNO: -1
+ Z_FILTERED: 1
+ Z_FINISH: 4
+ Z_FIXED: 4
+ Z_FULL_FLUSH: 3
+ Z_HUFFMAN_ONLY: 2
+ Z_MAX_CHUNK: Infinity
+ Z_MAX_LEVEL: 9
+ Z_MAX_MEMLEVEL: 9
+ Z_MAX_WINDOWBITS: 15
+ Z_MEM_ERROR: -4
+ Z_MIN_CHUNK: 64
+ Z_MIN_LEVEL: -1
+ Z_MIN_MEMLEVEL: 1
+ Z_MIN_WINDOWBITS: 8
+ Z_NEED_DICT: 2
+ Z_NO_COMPRESSION: 0
+ Z_NO_FLUSH: 0
+ Z_OK: 0
+ Z_PARTIAL_FLUSH: 1
+ Z_RLE: 3
+ Z_STREAM_END: 1
+ Z_STREAM_ERROR: -2
+ Z_SYNC_FLUSH: 2
+ Z_VERSION_ERROR: -6
+ default.ZSTD_COMPRESS: 10
+ default.ZSTD_DECOMPRESS: 11
+ default.ZSTD_btlazy2: 6
+ default.ZSTD_btopt: 7
+ default.ZSTD_btultra: 8
+ default.ZSTD_btultra2: 9
+ default.ZSTD_c_chainLog: 103
+ default.ZSTD_c_checksumFlag: 201
+ default.ZSTD_c_compressionLevel: 100
+ default.ZSTD_c_contentSizeFlag: 200
+ default.ZSTD_c_dictIDFlag: 202
+ default.ZSTD_c_enableLongDistanceMatching: 160
+ default.ZSTD_c_hashLog: 102
+ default.ZSTD_c_jobSize: 241
+ default.ZSTD_c_ldmBucketSizeLog: 163
+ default.ZSTD_c_ldmHashLog: 161
+ default.ZSTD_c_ldmHashRateLog: 164
+ default.ZSTD_c_ldmMinMatch: 162
+ default.ZSTD_c_minMatch: 105
+ default.ZSTD_c_nbWorkers: 240
+ default.ZSTD_c_overlapLog: 242
+ default.ZSTD_c_searchLog: 104
+ default.ZSTD_c_strategy: 107
+ default.ZSTD_c_targetLength: 106
+ default.ZSTD_c_windowLog: 101
+ default.ZSTD_d_windowLogMax: 100
+ default.ZSTD_dfast: 2
+ default.ZSTD_e_continue: 0
+ default.ZSTD_e_end: 2
+ default.ZSTD_e_flush: 1
+ default.ZSTD_fast: 1
+ default.ZSTD_greedy: 3
+ default.ZSTD_lazy: 4
+ default.ZSTD_lazy2: 5
```
</details>

<details>
  <summary><code>crypto</code> (<a href="#crypto">full output ↓</a>)</summary>

```diff
- argon2: ƒ argon2(length: 3)
- argon2Sync: ƒ argon2Sync(length: 2)
- constants: [Object: null prototype]
+ constants: {}
+ constants.ALPN_ENABLED: 1
+ constants.ENGINE_METHOD_ALL: 65535
+ constants.ENGINE_METHOD_CIPHERS: 64
+ constants.ENGINE_METHOD_DH: 4
+ constants.ENGINE_METHOD_DIGESTS: 128
+ constants.ENGINE_METHOD_DSA: 2
+ constants.ENGINE_METHOD_EC: 2048
+ constants.ENGINE_METHOD_NONE: 0
+ constants.ENGINE_METHOD_PKEY_ASN1_METHS: 1024
+ constants.ENGINE_METHOD_PKEY_METHS: 512
+ constants.ENGINE_METHOD_RAND: 8
+ constants.ENGINE_METHOD_RSA: 1
- constants.OPENSSL_VERSION_NUMBER: 1074790400
+ constants.OPENSSL_VERSION_NUMBER: 269488319
- constants.SSL_OP_ALL: 2147485760
+ constants.SSL_OP_ALL: 2147485780
+ constants.SSL_OP_EPHEMERAL_RSA: 0
+ constants.SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER: 0
+ constants.SSL_OP_MICROSOFT_SESS_ID_BUG: 0
+ constants.SSL_OP_MSIE_SSLV2_RSA_PADDING: 0
+ constants.SSL_OP_NETSCAPE_CA_DN_BUG: 0
+ constants.SSL_OP_NETSCAPE_CHALLENGE_BUG: 0
+ constants.SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG: 0
+ constants.SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG: 0
+ constants.SSL_OP_PKCS1_CHECK_1: 0
+ constants.SSL_OP_PKCS1_CHECK_2: 0
+ constants.SSL_OP_SINGLE_DH_USE: 0
+ constants.SSL_OP_SINGLE_ECDH_USE: 0
+ constants.SSL_OP_SSLEAY_080_CLIENT_DH_BUG: 0
+ constants.SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG: 0
+ constants.SSL_OP_TLS_BLOCK_PADDING_BUG: 0
+ constants.SSL_OP_TLS_D5_BUG: 0
- constants.defaultCipherList: "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA2…"
- createMac: ƒ createMac(length: 3)
- decapsulate: ƒ decapsulate(length: 3)
- encapsulate: [Circular]
- generateX509Certificate: [Circular]
- generateX509CertificateSync: [Circular]
- getMacs: [Circular]
- parsePKCS12: [Circular]
+ pseudoRandomBytes: [Circular]
- randomUUIDv7: [Circular]
+ setEngine: [Circular]
```
</details>

<details>
  <summary><code>diagnostics_channel</code> (<a href="#diagnostics_channel">full output ↓</a>)</summary>

```diff
- BoundedChannel: class BoundedChannel
- boundedChannel: ƒ boundedChannel(length: 1)
```
</details>

<details>
  <summary><code>dns</code> (<a href="#dns">full output ↓</a>)</summary>

```diff
- ADDRCONFIG: 32
+ ADDRCONFIG: 64
- ALL: 16
+ ALL: 32
- V4MAPPED: 8
+ V4MAPPED: 16
- default.promises.Resolver: class Resolver extends ResolverBase
+ default.promises.Resolver: class Resolver extends y
- default.promises.getServers: ƒ bound getServers(length: 0)
+ default.promises.getServers: ƒ getServers(length: 0)
- default.promises.resolve: ƒ bound resolve(length: 2)
+ default.promises.resolve: ƒ resolve(length: 2)
- default.promises.resolve4: ƒ bound queryA(length: 2)
+ default.promises.resolve4: ƒ resolve4(length: 2)
- default.promises.resolve6: ƒ bound queryAaaa(length: 2)
+ default.promises.resolve6: ƒ resolve6(length: 2)
- default.promises.resolveAny: ƒ bound queryAny(length: 2)
+ default.promises.resolveAny: ƒ resolveAny(length: 1)
- default.promises.resolveCaa: ƒ bound queryCaa(length: 2)
+ default.promises.resolveCaa: ƒ resolveCaa(length: 1)
- default.promises.resolveCname: ƒ bound queryCname(length: 2)
+ default.promises.resolveCname: ƒ resolveCname(length: 1)
- default.promises.resolveMx: ƒ bound queryMx(length: 2)
+ default.promises.resolveMx: ƒ resolveMx(length: 1)
- default.promises.resolveNaptr: ƒ bound queryNaptr(length: 2)
+ default.promises.resolveNaptr: ƒ resolveNaptr(length: 1)
- default.promises.resolveNs: ƒ bound queryNs(length: 2)
+ default.promises.resolveNs: ƒ resolveNs(length: 1)
- default.promises.resolvePtr: ƒ bound queryPtr(length: 2)
+ default.promises.resolvePtr: ƒ resolvePtr(length: 1)
- default.promises.resolveSoa: ƒ bound querySoa(length: 2)
+ default.promises.resolveSoa: ƒ resolveSoa(length: 1)
- default.promises.resolveSrv: ƒ bound querySrv(length: 2)
+ default.promises.resolveSrv: ƒ resolveSrv(length: 1)
- default.promises.resolveTlsa: ƒ bound queryTlsa(length: 2)
- default.promises.resolveTxt: ƒ bound queryTxt(length: 2)
+ default.promises.resolveTxt: ƒ resolveTxt(length: 1)
- default.promises.reverse: ƒ bound getHostByAddr(length: 2)
+ default.promises.reverse: ƒ reverse(length: 1)
- default.promises.setServers: ƒ defaultResolverSetServers(length: 1)
+ default.promises.setServers: ƒ setServers(length: 1)
- resolveTlsa: [Circular]
```
</details>

<details>
  <summary><code>dns/promises</code> (<a href="#dns-promises">full output ↓</a>)</summary>

```diff
- resolveTlsa: [Circular]
```
</details>

<details>
  <summary><code>domain</code> (<a href="#domain">full output ↓</a>)</summary>

```diff
- create: ƒ createDomain(length: 0)
+ create: ƒ create(length: 0)
- createDomain: [Circular]
+ createDomain: ƒ createDomain(length: 0)
```
</details>

<details>
  <summary><code>events</code> (<a href="#events">full output ↓</a>)</summary>

```diff
- captureRejections: false
- init: [Circular]
- usingDomains: true
```
</details>

<details>
  <summary><code>fs</code> (<a href="#fs">full output ↓</a>)</summary>

```diff
+ BigIntStats: ƒ BigIntStats(length: 14)
+ CFISBIS: ƒ CFISBIS(length: 2)
- FileReadStream: [Circular]
- FileWriteStream: [Circular]
+ SyncWriteStream: [Circular]
+ constants.O_SYMLINK: undefined
- constants.UV_FS_O_RANDOM: 0
- constants.UV_FS_O_SEQUENTIAL: 0
- constants.UV_FS_O_SHORT_LIVED: 0
- constants.UV_FS_O_TEMPORARY: 0
+ convertFileInfoToBigIntStats: ƒ convertFileInfoToBigIntStats(length: 1)
+ convertFileInfoToStats: ƒ convertFileInfoToStats(length: 1)
- default.promises.access: async ƒ access(length: 1)
+ default.promises.access: ƒ (length: 0)
- default.promises.appendFile: async ƒ appendFile(length: 3)
+ default.promises.appendFile: ƒ appendFilePromise(length: 3)
- default.promises.chmod: async ƒ chmod(length: 2)
+ default.promises.chmod: ƒ (length: 0)
- default.promises.chown: async ƒ chown(length: 3)
+ default.promises.chown: ƒ (length: 0)
- default.promises.copyFile: async ƒ copyFile(length: 3)
+ default.promises.copyFile: ƒ copyFile(length: 4)
- default.promises.cp: async ƒ cp(length: 3)
+ default.promises.cp: async ƒ cpPromise(length: 3)
- default.promises.glob: async ƒ glob(length: 2)
+ default.promises.glob: ƒ globPromise(length: 2)
- default.promises.lchmod: async ƒ lchmod(length: 2)
+ default.promises.lchmod: ƒ (length: 0)
- default.promises.lchown: async ƒ lchown(length: 3)
+ default.promises.lchown: ƒ (length: 0)
- default.promises.link: async ƒ link(length: 2)
+ default.promises.link: ƒ (length: 0)
- default.promises.lstat: async ƒ lstat(length: 1)
+ default.promises.lstat: ƒ lstat(length: 3)
- default.promises.lutimes: async ƒ lutimes(length: 3)
+ default.promises.lutimes: ƒ lutimes(length: 4)
- default.promises.mkdir: async ƒ mkdir(length: 2)
+ default.promises.mkdir: ƒ (length: 0)
- default.promises.mkdtemp: async ƒ mkdtemp(length: 2)
+ default.promises.mkdtemp: ƒ (length: 0)
- default.promises.mkdtempDisposable: async ƒ mkdtempDisposable(length: 2)
+ default.promises.mkdtempDisposable: async ƒ mkdtempDisposablePromise(length: 2)
- default.promises.mkstemp: async ƒ mkstemp(length: 2)
- default.promises.open: async ƒ open(length: 3)
+ default.promises.open: ƒ openPromise(length: 1)
- default.promises.opendir: ƒ opendir(length: 3)
+ default.promises.opendir: ƒ (length: 0)
- default.promises.readFile: async ƒ readFile(length: 2)
+ default.promises.readFile: ƒ readFilePromise(length: 2)
- default.promises.readdir: async ƒ readdir(length: 2)
+ default.promises.readdir: ƒ readdir(length: 3)
- default.promises.readlink: async ƒ readlink(length: 2)
+ default.promises.readlink: ƒ (length: 0)
- default.promises.realpath: async ƒ realpath(length: 2)
+ default.promises.realpath: ƒ (length: 0)
- default.promises.rename: async ƒ rename(length: 2)
+ default.promises.rename: ƒ (length: 0)
- default.promises.rm: async ƒ rm(length: 2)
+ default.promises.rm: ƒ (length: 0)
- default.promises.rmdir: async ƒ rmdir(length: 2)
+ default.promises.rmdir: ƒ (length: 0)
- default.promises.stat: async ƒ stat(length: 1)
+ default.promises.stat: ƒ (length: 0)
- default.promises.statfs: async ƒ statfs(length: 1)
+ default.promises.statfs: ƒ (length: 0)
- default.promises.symlink: async ƒ symlink(length: 3)
+ default.promises.symlink: ƒ (length: 0)
- default.promises.truncate: async ƒ truncate(length: 1)
+ default.promises.truncate: async ƒ truncatePromise(length: 2)
- default.promises.unlink: async ƒ unlink(length: 1)
+ default.promises.unlink: ƒ (length: 0)
- default.promises.utimes: async ƒ utimes(length: 3)
+ default.promises.utimes: ƒ (length: 0)
- default.promises.watch: async ƒ _watch(length: 1)
+ default.promises.watch: ƒ watch(length: 0)
- default.promises.writeFile: async ƒ writeFile(length: 3)
+ default.promises.writeFile: ƒ writeFilePromise(length: 3)
- default.realpath.native: ƒ (length: 3)
+ default.realpath.native: ƒ realpath_native(length: 3)
- default.realpathSync.native: ƒ (length: 2)
+ default.realpathSync.native: ƒ realpathSync_native(length: 2)
- mkstemp: [Circular]
- mkstempSync: [Circular]
- openAsBlobSync: [Circular]
+ readFilePromise: [Circular]
+ readlinkPromise: [Circular]
+ readvPromise: [Circular]
+ watchPromise: [Circular]
```
</details>

<details>
  <summary><code>fs/promises</code> (<a href="#fs-promises">full output ↓</a>)</summary>

```diff
- access: async ƒ access(length: 1)
+ access: ƒ (length: 0)
- appendFile: async ƒ appendFile(length: 3)
+ appendFile: ƒ appendFilePromise(length: 3)
- chmod: async ƒ chmod(length: 2)
+ chmod: ƒ (length: 0)
- chown: async ƒ chown(length: 3)
+ chown: ƒ (length: 0)
+ constants.O_SYMLINK: undefined
- constants.UV_FS_O_RANDOM: 0
- constants.UV_FS_O_SEQUENTIAL: 0
- constants.UV_FS_O_SHORT_LIVED: 0
- constants.UV_FS_O_TEMPORARY: 0
- copyFile: async ƒ copyFile(length: 3)
+ copyFile: ƒ copyFile(length: 4)
- cp: async ƒ cp(length: 3)
+ cp: async ƒ cpPromise(length: 3)
- mkstemp: [Circular]
```
</details>

<details>
  <summary><code>http</code> (<a href="#http">full output ↓</a>)</summary>

```diff
- CloseEvent: class extends Event
- MessageEvent: [Circular]
+ ServerImpl: [Circular]
- WebSocket: [Circular]
- default.globalAgent.Symbol(shapeMode): false
- default.globalAgent.options.proxyEnv: undefined
- default.validateHeaderName.withoutStackTrace: ƒ (length: 2)
+ default.validateHeaderName.withoutStackTrace: ƒ __node_internal_(length: 2)
- default.validateHeaderValue.withoutStackTrace: ƒ (length: 3)
+ default.validateHeaderValue.withoutStackTrace: ƒ __node_internal_(length: 2)
- isValidHeaderName: [Circular]
- isValidHeaderValue: [Circular]
- setGlobalProxyFromEnv: [Circular]
- websocketMask: [Circular]
- websocketUnmask: [Circular]
```
</details>

<details>
  <summary><code>http2</code> (<a href="#http2">full output ↓</a>)</summary>

```diff
+ ClientHttp2Session: class ClientHttp2Session extends Http2Session
+ Http2Session: [Circular]
+ Http2Stream: [Circular]
+ ServerHttp2Session: [Circular]
+ addAbortListener: ƒ addAbortListener(length: 2)
- constants.DEFAULT_SETTINGS_INITIAL_WINDOW_SIZE: 4194304
+ constants.DEFAULT_SETTINGS_INITIAL_WINDOW_SIZE: 65535
+ constants.ENABLE_CONNECT_PROTOCOL: 8
+ constants.ENABLE_PUSH: 2
+ constants.HEADER_TABLE_SIZE: 1
- constants.HTTP2_METHOD_ACL: "ACL"
- constants.HTTP2_METHOD_BASELINE_CONTROL: "BASELINE-CONTROL"
- constants.HTTP2_METHOD_BIND: "BIND"
- constants.HTTP2_METHOD_CHECKIN: "CHECKIN"
- constants.HTTP2_METHOD_CHECKOUT: "CHECKOUT"
- constants.HTTP2_METHOD_COPY: "COPY"
- constants.HTTP2_METHOD_LABEL: "LABEL"
- constants.HTTP2_METHOD_LINK: "LINK"
- constants.HTTP2_METHOD_LOCK: "LOCK"
- constants.HTTP2_METHOD_MERGE: "MERGE"
- constants.HTTP2_METHOD_MKACTIVITY: "MKACTIVITY"
- constants.HTTP2_METHOD_MKCALENDAR: "MKCALENDAR"
- constants.HTTP2_METHOD_MKCOL: "MKCOL"
- constants.HTTP2_METHOD_MKREDIRECTREF: "MKREDIRECTREF"
- constants.HTTP2_METHOD_MKWORKSPACE: "MKWORKSPACE"
- constants.HTTP2_METHOD_MOVE: "MOVE"
- constants.HTTP2_METHOD_OPTIONS: "OPTIONS"
- constants.HTTP2_METHOD_ORDERPATCH: "ORDERPATCH"
- constants.HTTP2_METHOD_PATCH: "PATCH"
- constants.HTTP2_METHOD_POST: "POST"
- constants.HTTP2_METHOD_PRI: "PRI"
- constants.HTTP2_METHOD_PROPFIND: "PROPFIND"
- constants.HTTP2_METHOD_PROPPATCH: "PROPPATCH"
- constants.HTTP2_METHOD_PUT: "PUT"
- constants.HTTP2_METHOD_REBIND: "REBIND"
- constants.HTTP2_METHOD_REPORT: "REPORT"
- constants.HTTP2_METHOD_SEARCH: "SEARCH"
- constants.HTTP2_METHOD_TRACE: "TRACE"
- constants.HTTP2_METHOD_UNBIND: "UNBIND"
- constants.HTTP2_METHOD_UNCHECKOUT: "UNCHECKOUT"
- constants.HTTP2_METHOD_UNLINK: "UNLINK"
- constants.HTTP2_METHOD_UNLOCK: "UNLOCK"
- constants.HTTP2_METHOD_UPDATE: "UPDATE"
- constants.HTTP2_METHOD_UPDATEREDIRECTREF: "UPDATEREDIRECTREF"
- constants.HTTP2_METHOD_VERSION_CONTROL: "VERSION-CONTROL"
- constants.HTTP_STATUS_ACCEPTED: 202
- constants.HTTP_STATUS_ALREADY_REPORTED: 208
- constants.HTTP_STATUS_BAD_GATEWAY: 502
- constants.HTTP_STATUS_BAD_REQUEST: 400
- constants.HTTP_STATUS_BANDWIDTH_LIMIT_EXCEEDED: 509
- constants.HTTP_STATUS_CONFLICT: 409
- constants.HTTP_STATUS_CREATED: 201
- constants.HTTP_STATUS_FAILED_DEPENDENCY: 424
- constants.HTTP_STATUS_FORBIDDEN: 403
- constants.HTTP_STATUS_FOUND: 302
- constants.HTTP_STATUS_GATEWAY_TIMEOUT: 504
- constants.HTTP_STATUS_GONE: 410
- constants.HTTP_STATUS_HTTP_VERSION_NOT_SUPPORTED: 505
- constants.HTTP_STATUS_IM_USED: 226
- constants.HTTP_STATUS_INSUFFICIENT_STORAGE: 507
- constants.HTTP_STATUS_INTERNAL_SERVER_ERROR: 500
- constants.HTTP_STATUS_LENGTH_REQUIRED: 411
- constants.HTTP_STATUS_LOCKED: 423
- constants.HTTP_STATUS_LOOP_DETECTED: 508
- constants.HTTP_STATUS_MOVED_PERMANENTLY: 301
- constants.HTTP_STATUS_MULTIPLE_CHOICES: 300
- constants.HTTP_STATUS_MULTI_STATUS: 207
- constants.HTTP_STATUS_NETWORK_AUTHENTICATION_REQUIRED: 511
- constants.HTTP_STATUS_NON_AUTHORITATIVE_INFORMATION: 203
- constants.HTTP_STATUS_NOT_ACCEPTABLE: 406
- constants.HTTP_STATUS_NOT_EXTENDED: 510
- constants.HTTP_STATUS_NOT_FOUND: 404
- constants.HTTP_STATUS_NOT_IMPLEMENTED: 501
- constants.HTTP_STATUS_PARTIAL_CONTENT: 206
- constants.HTTP_STATUS_PAYLOAD_TOO_LARGE: 413
- constants.HTTP_STATUS_PAYMENT_REQUIRED: 402
- constants.HTTP_STATUS_PERMANENT_REDIRECT: 308
- constants.HTTP_STATUS_PRECONDITION_FAILED: 412
- constants.HTTP_STATUS_PRECONDITION_REQUIRED: 428
- constants.HTTP_STATUS_PROCESSING: 102
- constants.HTTP_STATUS_PROXY_AUTHENTICATION_REQUIRED: 407
- constants.HTTP_STATUS_RANGE_NOT_SATISFIABLE: 416
- constants.HTTP_STATUS_REQUEST_HEADER_FIELDS_TOO_LARGE: 431
- constants.HTTP_STATUS_REQUEST_TIMEOUT: 408
- constants.HTTP_STATUS_SEE_OTHER: 303
- constants.HTTP_STATUS_SERVICE_UNAVAILABLE: 503
- constants.HTTP_STATUS_TEAPOT: 418
- constants.HTTP_STATUS_TEMPORARY_REDIRECT: 307
- constants.HTTP_STATUS_TOO_EARLY: 425
- constants.HTTP_STATUS_TOO_MANY_REQUESTS: 429
- constants.HTTP_STATUS_UNAUTHORIZED: 401
- constants.HTTP_STATUS_UNAVAILABLE_FOR_LEGAL_REASONS: 451
- constants.HTTP_STATUS_UNPROCESSABLE_ENTITY: 422
- constants.HTTP_STATUS_UNSUPPORTED_MEDIA_TYPE: 415
- constants.HTTP_STATUS_UPGRADE_REQUIRED: 426
- constants.HTTP_STATUS_URI_TOO_LONG: 414
- constants.HTTP_STATUS_USE_PROXY: 305
- constants.HTTP_STATUS_VARIANT_ALSO_NEGOTIATES: 506
+ constants.INITIAL_WINDOW_SIZE: 4
+ constants.MAX_CONCURRENT_STREAMS: 3
+ constants.MAX_FRAME_SIZE: 5
+ constants.MAX_HEADER_LIST_SIZE: 6
+ constants.NGHTTP2_ERR_DEFERRED: -508
+ constants.NGHTTP2_ERR_INVALID_ARGUMENT: -501
+ constants.NGHTTP2_ERR_NOMEM: -901
+ constants.NGHTTP2_ERR_STREAM_CLOSED: -510
+ constants.NGHTTP2_ERR_STREAM_ID_NOT_AVAILABLE: -509
+ constants.NGHTTP2_HCAT_HEADERS: 3
+ constants.NGHTTP2_HCAT_PUSH_RESPONSE: 2
+ constants.NGHTTP2_HCAT_REQUEST: 0
+ constants.NGHTTP2_HCAT_RESPONSE: 1
+ constants.NGHTTP2_NV_FLAG_NONE: 0
+ constants.NGHTTP2_NV_FLAG_NO_INDEX: 1
+ constants.STREAM_OPTION_EMPTY_PAYLOAD: 1
+ constants.STREAM_OPTION_GET_TRAILERS: 2
```
</details>

<details>
  <summary><code>https</code> (<a href="#https">full output ↓</a>)</summary>

```diff
- default.globalAgent.Symbol(shapeMode): false
- default.globalAgent.options.proxyEnv: undefined
```
</details>

<details>
  <summary><code>inspector</code> (<a href="#inspector">full output ↓</a>)</summary>

```diff
- NetworkResources: [Circular]
- close: ƒ _debugEnd(length: 0)
+ close: ƒ close(length: 0)
```
</details>

<details>
  <summary><code>inspector/promises</code> (<a href="#inspector-promises">full output ↓</a>)</summary>

```diff
- NetworkResources: [Circular]
- close: ƒ _debugEnd(length: 0)
+ close: ƒ close(length: 0)
```
</details>

<details>
  <summary><code>module</code> (<a href="#module">full output ↓</a>)</summary>

```diff
- _findPath: ƒ (length: 3)
+ _findPath: ƒ (length: 4)
+ _stat: ƒ op_require_stat(length: 2)
- constants: [Object: null prototype]
- enableCompileCache: [Circular]
- flushCompileCache: [Circular]
+ getBuiltinModule: ƒ getBuiltinModule(length: 1)
- getCompileCacheDir: [Circular]
- getSourceMapsSupport: [Circular]
- register: [Circular]
+ register: ƒ register(length: 3)
- setSourceMapsSupport: [Circular]
+ wrap: ƒ wrap(length: 1)
```
</details>

<details>
  <summary><code>net</code> (<a href="#net">full output ↓</a>)</summary>

```diff
- BlockList.PRIVATE_RANGES: {}
- BoundSocket: class BoundSocket
- _TransferredBoundSocket: ƒ _TransferredBoundSocket(length: 0)
- _createServerHandle: ƒ createServerHandle(length: 5)
+ _createServerHandle: ƒ _createServerHandle(length: 5)
- _normalizeArgs: ƒ normalizeArgs(length: 1)
+ _normalizeArgs: ƒ _normalizeArgs(length: 1)
- promises: [Circular]
```
</details>

<details>
  <summary><code>node:sqlite</code> (<a href="#sqlite">full output ↓</a>)</summary>

```diff
- Database: ƒ Database(length: 0)
- DatabaseSync: [Circular]
+ DatabaseSync: ƒ DatabaseSync(length: 2)
- Session: [Circular]
- Statement: [Circular]
```
</details>

<details>
  <summary><code>node:test</code> (<a href="#test">full output ↓</a>)</summary>

```diff
- after: ƒ (length: 2)
+ after: ƒ after(length: 2)
- afterEach: ƒ (length: 2)
+ afterEach: ƒ afterEach(length: 2)
- assert: [Object: null prototype]
- before: ƒ (length: 2)
+ before: ƒ before(length: 2)
- beforeEach: ƒ (length: 2)
+ beforeEach: ƒ beforeEach(length: 2)
- default: ƒ test(length: 3)
+ default: ƒ test(length: 4)
- default.describe.expectFailure: ƒ (length: 3)
- default.describe.only: ƒ (length: 3)
+ default.describe.only: ƒ only(length: 3)
- default.describe.skip: ƒ (length: 3)
+ default.describe.skip: ƒ skip(length: 3)
- default.describe.todo: ƒ (length: 3)
+ default.describe.todo: ƒ todo(length: 3)
+ default.mock.fn: ƒ fn(length: 3)
+ default.mock.getter: ƒ getter(length: 4)
+ default.mock.method: ƒ method(length: 4)
+ default.mock.module: ƒ mockModule(length: 1)
+ default.mock.property: ƒ property(length: 3)
+ default.mock.reset: ƒ reset(length: 0)
+ default.mock.restoreAll: ƒ restoreAll(length: 0)
+ default.mock.setter: ƒ setter(length: 4)
+ default.mock.timers: {}
- expectFailure: [Circular]
- only: [Circular]
- skip: [Circular]
- snapshot: [Circular]
- todo: [Circular]
```
</details>

<details>
  <summary><code>os</code> (<a href="#os">full output ↓</a>)</summary>

```diff
- availableParallelism: ƒ (length: 0)
+ availableParallelism: ƒ availableParallelism(length: 0)
- constants: [Object: null prototype]
+ constants: {}
+ constants.UV_UDP_IPV6ONLY: 2
- constants.dlopen: [Object: null prototype]
+ constants.dlopen: {}
- constants.errno: [Object: null prototype]
+ constants.errno: {}
- constants.priority: [Object: null prototype]
+ constants.priority: {}
- constants.signals: [Object: null prototype]
+ constants.signals: {}
+ constants.signals.SIGUNUSED: 31
- default.homedir.withoutStackTrace: ƒ checkError(length: 0)
- default.hostname.withoutStackTrace: ƒ checkError(length: 0)
- default.uptime.withoutStackTrace: ƒ checkError(length: 0)
```
</details>

<details>
  <summary><code>path</code> (<a href="#path">full output ↓</a>)</summary>

```diff
- basename: ƒ basename(length: 2)
+ basename: ƒ basename(length: 1)
+ common: ƒ common(length: 1)
- default.win32.basename: ƒ basename(length: 2)
+ default.win32.basename: ƒ basename(length: 1)
- default.win32.format: ƒ bound _format(length: 1)
+ default.win32.format: ƒ format(length: 1)
```
</details>

<details>
  <summary><code>path/posix</code> (<a href="#path-posix">full output ↓</a>)</summary>

```diff
- basename: ƒ basename(length: 2)
+ basename: ƒ basename(length: 1)
- default.win32.basename: ƒ basename(length: 2)
+ default.win32.basename: ƒ basename(length: 1)
- default.win32.format: ƒ bound _format(length: 1)
+ default.win32.format: ƒ format(length: 1)
- matchesGlob: [Circular]
```
</details>

<details>
  <summary><code>path/win32</code> (<a href="#path-win32">full output ↓</a>)</summary>

```diff
- basename: ƒ basename(length: 2)
+ basename: ƒ basename(length: 1)
- default.posix.basename: ƒ basename(length: 2)
+ default.posix.basename: ƒ basename(length: 1)
- default.posix.format: ƒ bound _format(length: 1)
+ default.posix.format: ƒ format(length: 1)
- matchesGlob: [Circular]
```
</details>

<details>
  <summary><code>perf_hooks</code> (<a href="#perf_hooks">full output ↓</a>)</summary>

```diff
- Performance: [Circular]
- PerformanceMark: [Circular]
- PerformanceMeasure: [Circular]
- PerformanceResourceTiming: [Circular]
+ constants.NODE_PERFORMANCE_ENTRY_TYPE_DNS: 7
+ constants.NODE_PERFORMANCE_ENTRY_TYPE_FUNCTION: 4
+ constants.NODE_PERFORMANCE_ENTRY_TYPE_GC: 3
+ constants.NODE_PERFORMANCE_ENTRY_TYPE_HTTP: 6
+ constants.NODE_PERFORMANCE_ENTRY_TYPE_HTTP2: 5
+ constants.NODE_PERFORMANCE_ENTRY_TYPE_MARK: 1
+ constants.NODE_PERFORMANCE_ENTRY_TYPE_MEASURE: 2
+ constants.NODE_PERFORMANCE_ENTRY_TYPE_NET: 8
+ constants.NODE_PERFORMANCE_ENTRY_TYPE_NODE: 0
- constants.NODE_PERFORMANCE_GC_FLAGS_ALL_AVAILABLE_GARBAGE: 16
- constants.NODE_PERFORMANCE_GC_FLAGS_ALL_EXTERNAL_MEMORY: 32
- constants.NODE_PERFORMANCE_GC_FLAGS_CONSTRUCT_RETAINED: 2
- constants.NODE_PERFORMANCE_GC_FLAGS_FORCED: 4
- constants.NODE_PERFORMANCE_GC_FLAGS_NO: 0
- constants.NODE_PERFORMANCE_GC_FLAGS_SCHEDULE_IDLE: 64
- constants.NODE_PERFORMANCE_GC_FLAGS_SYNCHRONOUS_PHANTOM_PROCESSING: 8
- constants.NODE_PERFORMANCE_GC_INCREMENTAL: 8
- constants.NODE_PERFORMANCE_GC_MAJOR: 4
- constants.NODE_PERFORMANCE_GC_MINOR: 1
- constants.NODE_PERFORMANCE_GC_MINOR_MARK_SWEEP: 2
- constants.NODE_PERFORMANCE_GC_WEAKCB: 16
- createSlidingWindowHistogram: ƒ createSlidingWindowHistogram(length: 1)
- default.performance.Symbol(kEvents): undefined
- default.performance.Symbol(kHandlers): undefined
- default.performance.Symbol(performance): true
+ default.performance.eventLoopUtilization: [Circular]
+ default.performance.markResourceTiming: ƒ (length: 0)
+ default.performance.nodeTiming: {}
+ default.performance.timerify: ƒ timerify(length: 1)
+ enqueueNodePerformanceEntry: ƒ enqueueNodePerformanceEntry(length: 1)
- importHistogram: [Circular]
```
</details>

<details>
  <summary><code>process</code> (<a href="#process">full output ↓</a>)</summary>

```diff
- _debugEnd: ƒ _debugEnd(length: 0)
- _debugProcess: ƒ _debugProcess(length: 0)
- _eval: "(async function probe(modules) {\n  const pad = \"    \";\n  const inspect = (val, indent = \"\", cache = …"
- _events: [Object: null prototype]
- _eventsCount: 3
- _exiting: false
- _fatalException: ƒ (length: 2)
- _getActiveHandles: ƒ _getActiveHandles(length: 0)
- _getActiveRequests: ƒ _getActiveRequests(length: 0)
- _kill: ƒ _kill(length: 0)
- _linkedBinding: ƒ _linkedBinding(length: 1)
- _maxListeners: undefined
- _preload_modules: {}
- _rawDebug: ƒ _rawDebug(length: 0)
- _startProfilerIdleNotifier: ƒ (length: 0)
- _stopProfilerIdleNotifier: ƒ (length: 0)
- _tickCallback: ƒ runNextTicks(length: 0)
- addUncaughtExceptionCaptureCallback: ƒ addUncaughtExceptionCaptureCallback(length: 1)
- argv0: "node"
+ argv0: "deno"
- binding: ƒ binding(length: 1)
- chdir: ƒ (length: 1)
+ chdir: ƒ chdir(length: 1)
- config: {}
- cwd: ƒ wrappedCwd(length: 0)
+ cwd: ƒ cwd(length: 0)
- debugPort: 9229
- default.Symbol(shapeMode): false
- default.features.dtls: false
- default.features.openssl_is_boringssl: false
+ default.features.openssl_is_boringssl: true
- default.features.typescript: "strip"
+ default.features.typescript: "transform"
- default.hrtime.bigint: ƒ hrtimeBigInt(length: 0)
+ default.hrtime.bigint: ƒ (length: 0)
+ default.mainModule: undefined
- default.memoryUsage.rss: ƒ rss(length: 0)
+ default.memoryUsage.rss: ƒ (length: 0)
+ default.noDeprecation: false
- default.stderr.Symbol(async_id_symbol): 2
- default.stderr.Symbol(kBuffer): null
- default.stderr.Symbol(kBufferCb): null
- default.stderr.Symbol(kBufferGen): null
- default.stderr.Symbol(kBytesRead): 0
- default.stderr.Symbol(kBytesWritten): 0
- default.stderr.Symbol(kHandle): Pipe
- default.stderr.Symbol(kSetKeepAlive): false
- default.stderr.Symbol(kSetKeepAliveInitialDelay): 0
- default.stderr.Symbol(kSetNoDelay): false
- default.stderr.Symbol(kSetTOS): undefined
- default.stderr.Symbol(lastWriteQueueSize): 0
- default.stderr.Symbol(shapeMode): true
- default.stderr.Symbol(timeout): null
- default.stderr._closeAfterHandlingError: false
- default.stderr._destroy: ƒ dummyDestroy(length: 2)
+ default.stderr._destroy: ƒ destroy(length: 2)
- default.stderr._events.data: undefined
- default.stderr._events.end: ƒ onReadableStreamEnd(length: 0)
- default.stderr._events.readable: undefined
- default.stderr._eventsCount: 1
- default.stderr._hadError: false
- default.stderr._host: null
- default.stderr._parent: null
- default.stderr._pendingData: null
- default.stderr._pendingEncoding: ""
- default.stderr._readableState: ReadableState
- default.stderr._server: null
- default.stderr._sockname: null
- default.stderr._type: "pipe"
- default.stderr._writableState.Symbol(kState): 17564420
- default.stderr._writableState.onwrite: ƒ (length: 1)
+ default.stderr._writableState.onwrite: ƒ bound onwrite(length: 1)
+ default.stderr._write: ƒ write(length: 3)
- default.stderr.allowHalfOpen: false
+ default.stderr.columns: undefined
- default.stderr.connecting: false
+ default.stderr.getColorDepth: ƒ value(length: 0)
+ default.stderr.getWindowSize: ƒ value(length: 0)
+ default.stderr.hasColors: ƒ value(length: 2)
+ default.stderr.isTTY: false
+ default.stderr.rows: undefined
- default.stderr.server: null
- default.stdin.Symbol(async_id_symbol): 9
- default.stdin.Symbol(kBuffer): null
- default.stdin.Symbol(kBufferCb): null
- default.stdin.Symbol(kBufferGen): null
- default.stdin.Symbol(kBytesRead): 0
- default.stdin.Symbol(kBytesWritten): 0
- default.stdin.Symbol(kHandle): Pipe
- default.stdin.Symbol(kSetKeepAlive): false
- default.stdin.Symbol(kSetKeepAliveInitialDelay): 0
- default.stdin.Symbol(kSetNoDelay): false
- default.stdin.Symbol(kSetTOS): undefined
- default.stdin.Symbol(lastWriteQueueSize): 0
- default.stdin.Symbol(shapeMode): true
- default.stdin.Symbol(timeout): null
- default.stdin._closeAfterHandlingError: false
- default.stdin._events.close: undefined
+ default.stdin._events.close: ƒ (length: 0)
- default.stdin._events.end: [Circular]
+ default.stdin._events.end: undefined
- default.stdin._hadError: false
+ default.stdin._handle: {}
- default.stdin._host: null
+ default.stdin._isRawMode: false
- default.stdin._parent: null
- default.stdin._pendingData: null
- default.stdin._pendingEncoding: ""
+ default.stdin._read: ƒ _read(length: 1)
- default.stdin._readableState.fastChunk: null
- default.stdin._readableState.pipeOnData: null
- default.stdin._readableState.pipePause: null
- default.stdin._server: null
- default.stdin._sockname: null
- default.stdin._writableState.onwrite: ƒ (length: 1)
+ default.stdin._writableState.onwrite: ƒ bound onwrite(length: 1)
- default.stdin.connecting: false
+ default.stdin.isRaw: false
+ default.stdin.isTTY: false
- default.stdin.server: null
+ default.stdin.setRawMode: ƒ (length: 1)
- default.stdout.Symbol(async_id_symbol): 6
- default.stdout.Symbol(kBuffer): null
- default.stdout.Symbol(kBufferCb): null
- default.stdout.Symbol(kBufferGen): null
- default.stdout.Symbol(kBytesRead): 0
- default.stdout.Symbol(kBytesWritten): 0
- default.stdout.Symbol(kHandle): Pipe
- default.stdout.Symbol(kSetKeepAlive): false
- default.stdout.Symbol(kSetKeepAliveInitialDelay): 0
- default.stdout.Symbol(kSetNoDelay): false
- default.stdout.Symbol(kSetTOS): undefined
- default.stdout.Symbol(lastWriteQueueSize): 0
- default.stdout.Symbol(shapeMode): true
- default.stdout.Symbol(timeout): null
- default.stdout._closeAfterHandlingError: false
- default.stdout._destroy: [Circular]
+ default.stdout._destroy: ƒ destroy(length: 2)
- default.stdout._events.data: undefined
- default.stdout._events.end: [Circular]
- default.stdout._events.readable: undefined
- default.stdout._eventsCount: 1
- default.stdout._hadError: false
- default.stdout._host: null
- default.stdout._parent: null
- default.stdout._pendingData: null
- default.stdout._pendingEncoding: ""
- default.stdout._readableState: ReadableState
- default.stdout._server: null
- default.stdout._sockname: null
- default.stdout._type: "pipe"
- default.stdout._writableState.Symbol(kState): 17564420
- default.stdout._writableState.onwrite: ƒ (length: 1)
+ default.stdout._writableState.onwrite: ƒ bound onwrite(length: 1)
+ default.stdout._write: ƒ write(length: 3)
- default.stdout.allowHalfOpen: false
+ default.stdout.columns: undefined
- default.stdout.connecting: false
+ default.stdout.getColorDepth: ƒ value(length: 0)
+ default.stdout.getWindowSize: ƒ value(length: 0)
+ default.stdout.hasColors: ƒ value(length: 2)
+ default.stdout.isTTY: false
+ default.stdout.rows: undefined
- default.stdout.server: null
- default.versions.acorn: "8.19.0"
- default.versions.ada: "4.0.0"
- default.versions.amaro: "1.3.0"
- default.versions.ares: "1.34.9"
+ default.versions.ares: "1.34.6"
- default.versions.brotli: "1.2.1"
+ default.versions.brotli: "1.2.0"
+ default.versions.deno: "2.9.8+e7b39eb"
- default.versions.libffi: "3.8.0"
- default.versions.lief: "1.0.0"
- default.versions.llhttp: "9.4.4"
+ default.versions.llhttp: "9.4.1"
- default.versions.merve: "1.2.2"
- default.versions.modules: "153"
+ default.versions.modules: "147"
- default.versions.nbytes: "0.1.4"
- default.versions.ncrypto: "0.0.1"
- default.versions.nghttp2: "1.71.0"
+ default.versions.nghttp2: "1.69.0"
- default.versions.node: "27.0.0-alpha.0.1.0"
+ default.versions.node: "26.5.1"
- default.versions.openssl: "4.1.0"
+ default.versions.openssl: "3.0.7+quic"
- default.versions.simdjson: "5.1.1"
- default.versions.simdutf: "7.7.0"
- default.versions.sqlite: "3.54.1"
+ default.versions.sqlite: "3.53.1"
+ default.versions.typescript: "6.0.3"
- default.versions.tz: "2026e"
+ default.versions.tz: "2026b"
- default.versions.undici: "8.12.4"
- default.versions.uvwasi: "0.0.23"
- default.versions.v8: "15.6.75.50-node.11"
+ default.versions.v8: "15.0.245.2-rusty"
- default.versions.zlib: "1.3.2.1-motley-9f9f52c"
+ default.versions.zlib: "1.3.1-e00f703"
- default.versions.zstd: "1.5.7"
- domain: undefined
- execPath: "/opt/hostedtoolcache/node/27.0.0-alpha.0.1.0/x64/bin/node"
+ execPath: "/opt/hostedtoolcache/deno/0.0.0-e7b39ebd55c85aaf6a29290c1f5a99e2e21e09dd/x64/deno"
- execve: [Circular]
- exitCode: undefined
- features: [Circular]
- finalization: [Circular]
- getBuiltinModule: [Circular]
+ getBuiltinModule: ƒ getBuiltinModule(length: 1)
- getgroups: [Circular]
- hasUncaughtExceptionCaptureCallback: [Circular]
- initgroups: [Circular]
- moduleLoadList: [Circular]
- openStdin: [Circular]
- pid: 2392
+ pid: 2393
- reallyExit: [Circular]
- ref: [Circular]
- release: [Circular]
+ removeAllListeners: ƒ (length: 1)
+ removeListener: ƒ (length: 2)
- report: [Circular]
+ report: {}
+ report.compact: false
+ report.directory: ""
+ report.filename: ""
+ report.getReport: ƒ getReport(length: 1)
+ report.reportOnFatalError: false
+ report.reportOnSignal: false
+ report.reportOnUncaughtException: false
+ report.signal: "SIGUSR2"
+ report.writeReport: ƒ writeReport(length: 2)
- setSourceMapsEnabled: [Circular]
- setUncaughtExceptionCaptureCallback: [Circular]
- setgroups: [Circular]
- sourceMapsEnabled: false
- title: "node"
- unref: [Circular]
- uptime: [Circular]
- version: "v27.0.0-alpha.0.1.0"
+ version: "v26.5.1"
```
</details>

<details>
  <summary><code>querystring</code> (<a href="#querystring">full output ↓</a>)</summary>

```diff
- decode: ƒ parse(length: 4)
+ decode: ƒ parse(length: 1)
```
</details>

<details>
  <summary><code>readline</code> (<a href="#readline">full output ↓</a>)</summary>

```diff
- default.promises.Interface: class Interface extends _Interface
+ default.promises.Interface: class Interface extends i
```
</details>

<details>
  <summary><code>repl</code> (<a href="#repl">full output ↓</a>)</summary>

```diff
+ _builtinLibs: {}
+ builtinModules: [Circular]
+ default.writer.options.currentDepth: 0
+ default.writer.options.escapeSequences: true
+ default.writer.options.indentLevel: 0
+ default.writer.options.indentationLvl: 0
+ default.writer.options.inspect: ƒ inspect(length: 2)
+ default.writer.options.iterableLimit: Infinity
- default.writer.options.numericSeparator: false
+ default.writer.options.quotes: {}
+ default.writer.options.stylize: ƒ stylizeNoColor(length: 1)
+ default.writer.options.trailingComma: false
- isValidSyntax: [Circular]
- writer: [Circular]
```
</details>

<details>
  <summary><code>stream</code> (<a href="#stream">full output ↓</a>)</summary>

```diff
- _isArrayBufferView: ƒ isView(length: 1)
+ _isArrayBufferView: ƒ isArrayBufferView(length: 1)
+ default.Writable.kForceStableState: Symbol(kForceStableState)
+ default.promises.default: {}
```
</details>

<details>
  <summary><code>stream/web</code> (<a href="#stream-web">full output ↓</a>)</summary>

```diff
- ReadableStreamTee: [Circular]
```
</details>

<details>
  <summary><code>sys</code> (<a href="#sys">full output ↓</a>)</summary>

```diff
- _errnoException: ƒ _errnoException(length: 0)
- _exceptionWithHostPort: ƒ _exceptionWithHostPort(length: 0)
- _extend: ƒ deprecated(length: 2)
+ _extend: ƒ _extend(length: 2)
- debounce: ƒ debounce(length: 2)
- default.inspect.colors: [Object: null prototype]
+ default.inspect.colors: {}
- default.inspect.styles.regexp: ƒ highlightRegExp(length: 1)
+ default.inspect.styles.regexp: "red"
- default.inspect.styles.regexp.colors: {}
- default.types.isAnyArrayBuffer: ƒ (length: 0)
+ default.types.isAnyArrayBuffer: ƒ isAnyArrayBuffer(length: 1)
- default.types.isArgumentsObject: ƒ (length: 0)
+ default.types.isArgumentsObject: ƒ isArgumentsObject(length: 1)
- default.types.isArrayBuffer: ƒ (length: 0)
+ default.types.isArrayBuffer: ƒ isArrayBuffer(length: 1)
- default.types.isArrayBufferView: ƒ isView(length: 1)
+ default.types.isArrayBufferView: ƒ isArrayBufferView(length: 1)
- default.types.isAsyncFunction: ƒ (length: 0)
+ default.types.isAsyncFunction: ƒ isAsyncFunction(length: 1)
- default.types.isBigIntObject: ƒ (length: 0)
+ default.types.isBigIntObject: ƒ isBigIntObject(length: 1)
- default.types.isBooleanObject: ƒ (length: 0)
+ default.types.isBooleanObject: ƒ isBooleanObject(length: 1)
- default.types.isBoxedPrimitive: ƒ (length: 0)
+ default.types.isBoxedPrimitive: ƒ isBoxedPrimitive(length: 1)
- default.types.isDate: ƒ (length: 0)
+ default.types.isDate: ƒ isDate(length: 1)
- default.types.isExternal: ƒ (length: 0)
- default.types.isGeneratorFunction: ƒ (length: 0)
+ default.types.isGeneratorFunction: ƒ isGeneratorFunction(length: 1)
- default.types.isGeneratorObject: ƒ (length: 0)
+ default.types.isGeneratorObject: ƒ isGeneratorObject(length: 1)
- default.types.isMap: ƒ (length: 0)
+ default.types.isMap: ƒ isMap(length: 1)
- default.types.isMapIterator: ƒ (length: 0)
+ default.types.isMapIterator: ƒ isMapIterator(length: 1)
- default.types.isModuleNamespaceObject: ƒ (length: 0)
+ default.types.isModuleNamespaceObject: ƒ isModuleNamespaceObject(length: 1)
- default.types.isNativeError: ƒ (length: 0)
+ default.types.isNativeError: ƒ isNativeError(length: 1)
- default.types.isNumberObject: ƒ (length: 0)
+ default.types.isNumberObject: ƒ isNumberObject(length: 1)
- default.types.isPromise: ƒ (length: 0)
+ default.types.isPromise: ƒ isPromise(length: 1)
- default.types.isProxy: ƒ (length: 0)
+ default.types.isProxy: ƒ isProxy(length: 1)
- default.types.isRegExp: ƒ (length: 0)
+ default.types.isRegExp: ƒ isRegExp(length: 1)
- default.types.isSet: ƒ (length: 0)
+ default.types.isSet: ƒ isSet(length: 1)
- default.types.isSetIterator: ƒ (length: 0)
+ default.types.isSetIterator: ƒ isSetIterator(length: 1)
- default.types.isSharedArrayBuffer: ƒ (length: 0)
+ default.types.isSharedArrayBuffer: ƒ isSharedArrayBuffer(length: 1)
- default.types.isStringObject: ƒ (length: 0)
+ default.types.isStringObject: ƒ isStringObject(length: 1)
- default.types.isSymbolObject: ƒ (length: 0)
+ default.types.isSymbolObject: ƒ isSymbolObject(length: 1)
- default.types.isWeakMap: ƒ (length: 0)
+ default.types.isWeakMap: ƒ isWeakMap(length: 1)
- default.types.isWeakSet: ƒ (length: 0)
+ default.types.isWeakSet: ƒ isWeakSet(length: 1)
- isPartialDeepStrictEqual: [Circular]
+ log: [Circular]
- markPromiseAsHandled: [Circular]
+ queryObjects: [Circular]
- throttle: [Circular]
```
</details>

<details>
  <summary><code>timers</code> (<a href="#timers">full output ↓</a>)</summary>

```diff
- default.promises.scheduler.Symbol(kScheduler): true
- default.promises.setInterval: async ƒ setInterval(length: 2)
+ default.promises.setInterval: async ƒ setIntervalAsync(length: 2)
```
</details>

<details>
  <summary><code>timers/promises</code> (<a href="#timers-promises">full output ↓</a>)</summary>

```diff
- default.scheduler.Symbol(kScheduler): true
```
</details>

<details>
  <summary><code>tls</code> (<a href="#tls">full output ↓</a>)</summary>

```diff
+ CryptoStream: class CryptoStream
- DEFAULT_CIPHERS: "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA2…"
+ DEFAULT_CIPHERS: "AES256-GCM-SHA384:AES128-GCM-SHA256:TLS_CHACHA20_POLY1305_SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE…"
- SecureContext: [Circular]
+ SecurePair: [Circular]
- createSecureContext: ƒ createSecureContext(length: 1)
+ createSecureContext: ƒ createSecureContext(length: 0)
+ createSecurePair: ƒ createSecurePair(length: 0)
- getCertificateCompressionAlgorithms: [Circular]
```
</details>

<details>
  <summary><code>url</code> (<a href="#url">full output ↓</a>)</summary>

```diff
- URLPattern: [Circular]
```
</details>

<details>
  <summary><code>util</code> (<a href="#util">full output ↓</a>)</summary>

```diff
- _errnoException: ƒ _errnoException(length: 0)
- _exceptionWithHostPort: ƒ _exceptionWithHostPort(length: 0)
- _extend: ƒ deprecated(length: 2)
+ _extend: ƒ _extend(length: 2)
- debounce: ƒ debounce(length: 2)
- default.inspect.colors: [Object: null prototype]
+ default.inspect.colors: {}
- default.inspect.styles.regexp: ƒ highlightRegExp(length: 1)
+ default.inspect.styles.regexp: "red"
- default.inspect.styles.regexp.colors: {}
- default.types.isAnyArrayBuffer: ƒ (length: 0)
+ default.types.isAnyArrayBuffer: ƒ isAnyArrayBuffer(length: 1)
- default.types.isArgumentsObject: ƒ (length: 0)
+ default.types.isArgumentsObject: ƒ isArgumentsObject(length: 1)
- default.types.isArrayBuffer: ƒ (length: 0)
+ default.types.isArrayBuffer: ƒ isArrayBuffer(length: 1)
- default.types.isArrayBufferView: ƒ isView(length: 1)
+ default.types.isArrayBufferView: ƒ isArrayBufferView(length: 1)
- default.types.isAsyncFunction: ƒ (length: 0)
+ default.types.isAsyncFunction: ƒ isAsyncFunction(length: 1)
- default.types.isBigIntObject: ƒ (length: 0)
+ default.types.isBigIntObject: ƒ isBigIntObject(length: 1)
- default.types.isBooleanObject: ƒ (length: 0)
+ default.types.isBooleanObject: ƒ isBooleanObject(length: 1)
- default.types.isBoxedPrimitive: ƒ (length: 0)
+ default.types.isBoxedPrimitive: ƒ isBoxedPrimitive(length: 1)
- default.types.isDate: ƒ (length: 0)
+ default.types.isDate: ƒ isDate(length: 1)
- default.types.isExternal: ƒ (length: 0)
- default.types.isGeneratorFunction: ƒ (length: 0)
+ default.types.isGeneratorFunction: ƒ isGeneratorFunction(length: 1)
- default.types.isGeneratorObject: ƒ (length: 0)
+ default.types.isGeneratorObject: ƒ isGeneratorObject(length: 1)
- default.types.isMap: ƒ (length: 0)
+ default.types.isMap: ƒ isMap(length: 1)
- default.types.isMapIterator: ƒ (length: 0)
+ default.types.isMapIterator: ƒ isMapIterator(length: 1)
- default.types.isModuleNamespaceObject: ƒ (length: 0)
+ default.types.isModuleNamespaceObject: ƒ isModuleNamespaceObject(length: 1)
- default.types.isNativeError: ƒ (length: 0)
+ default.types.isNativeError: ƒ isNativeError(length: 1)
- default.types.isNumberObject: ƒ (length: 0)
+ default.types.isNumberObject: ƒ isNumberObject(length: 1)
- default.types.isPromise: ƒ (length: 0)
+ default.types.isPromise: ƒ isPromise(length: 1)
- default.types.isProxy: ƒ (length: 0)
+ default.types.isProxy: ƒ isProxy(length: 1)
- default.types.isRegExp: ƒ (length: 0)
+ default.types.isRegExp: ƒ isRegExp(length: 1)
- default.types.isSet: ƒ (length: 0)
+ default.types.isSet: ƒ isSet(length: 1)
- default.types.isSetIterator: ƒ (length: 0)
+ default.types.isSetIterator: ƒ isSetIterator(length: 1)
- default.types.isSharedArrayBuffer: ƒ (length: 0)
+ default.types.isSharedArrayBuffer: ƒ isSharedArrayBuffer(length: 1)
- default.types.isStringObject: ƒ (length: 0)
+ default.types.isStringObject: ƒ isStringObject(length: 1)
- default.types.isSymbolObject: ƒ (length: 0)
+ default.types.isSymbolObject: ƒ isSymbolObject(length: 1)
- default.types.isWeakMap: ƒ (length: 0)
+ default.types.isWeakMap: ƒ isWeakMap(length: 1)
- default.types.isWeakSet: ƒ (length: 0)
+ default.types.isWeakSet: ƒ isWeakSet(length: 1)
- isPartialDeepStrictEqual: [Circular]
+ log: [Circular]
- markPromiseAsHandled: [Circular]
+ queryObjects: [Circular]
- throttle: [Circular]
```
</details>

<details>
  <summary><code>util/types</code> (<a href="#util-types">full output ↓</a>)</summary>

```diff
- isExternal: [Circular]
```
</details>

<details>
  <summary><code>v8</code> (<a href="#v8">full output ↓</a>)</summary>

```diff
- default.promiseHooks.createHook: ƒ createHook(length: 0)
+ default.promiseHooks.createHook: ƒ createHook(length: 1)
- default.promiseHooks.onAfter: ƒ (length: 1)
+ default.promiseHooks.onAfter: ƒ onAfter(length: 1)
- default.promiseHooks.onBefore: ƒ (length: 1)
+ default.promiseHooks.onBefore: ƒ onBefore(length: 1)
- default.promiseHooks.onInit: ƒ (length: 1)
+ default.promiseHooks.onInit: ƒ onInit(length: 1)
- default.promiseHooks.onSettled: ƒ (length: 1)
+ default.promiseHooks.onSettled: ƒ onSettled(length: 1)
- default.startupSnapshot.addDeserializeCallback: ƒ addDeserializeCallback(length: 2)
+ default.startupSnapshot.addDeserializeCallback: ƒ startupSnapshotAddDeserializeCallback(length: 2)
- default.startupSnapshot.addSerializeCallback: ƒ addSerializeCallback(length: 2)
+ default.startupSnapshot.addSerializeCallback: ƒ startupSnapshotAddSerializeCallback(length: 2)
- default.startupSnapshot.isBuildingSnapshot: ƒ isBuildingSnapshot(length: 0)
+ default.startupSnapshot.isBuildingSnapshot: ƒ startupSnapshotIsBuildingSnapshot(length: 0)
- default.startupSnapshot.setDeserializeMainFunction: ƒ setDeserializeMainFunction(length: 2)
+ default.startupSnapshot.setDeserializeMainFunction: ƒ startupSnapshotSetDeserializeMainFunction(length: 2)
- getCppHeapStatistics: [Circular]
- isStringOneByteRepresentation: [Circular]
- promiseHooks: [Circular]
- setHeapProfileNearHeapLimit: [Circular]
- startCpuProfile: [Circular]
- startHeapProfile: [Circular]
```
</details>

<details>
  <summary><code>vm</code> (<a href="#vm">full output ↓</a>)</summary>

```diff
+ Module: [Circular]
+ SourceTextModule: [Circular]
+ SyntheticModule: [Circular]
- constants.DONT_CONTEXTIFY: Symbol(vm_context_no_contextify)
+ constants.DONT_CONTEXTIFY: Symbol(DONT_CONTEXTIFY)
- constants.USE_MAIN_CONTEXT_DEFAULT_LOADER: Symbol(vm_dynamic_import_main_context_default)
+ constants.USE_MAIN_CONTEXT_DEFAULT_LOADER: Symbol(USE_MAIN_CONTEXT_DEFAULT_LOADER)
```
</details>

<details>
  <summary><code>worker_threads</code> (<a href="#worker_threads">full output ↓</a>)</summary>

```diff
- BroadcastChannel: class BroadcastChannel extends EventTarget
+ BroadcastChannel: class BroadcastChannel extends Pe
```
</details>

<details>
  <summary><code>zlib</code> (<a href="#zlib">full output ↓</a>)</summary>

```diff
- BrotliCompress: class BrotliCompress extends Brotli
+ BrotliCompress: ƒ BrotliCompress(length: 1)
- BrotliDecompress: class BrotliDecompress extends Brotli
+ BrotliDecompress: ƒ BrotliDecompress(length: 1)
+ DEFLATE: 1
+ DEFLATERAW: 5
+ GUNZIP: 4
+ GZIP: 3
+ INFLATE: 2
+ INFLATERAW: 6
+ UNZIP: 7
+ ZLIB_VERNUM: 4784
+ ZSTD_COMPRESS: 10
+ ZSTD_DECOMPRESS: 11
+ ZSTD_btlazy2: 6
+ ZSTD_btopt: 7
+ ZSTD_btultra: 8
+ ZSTD_btultra2: 9
+ ZSTD_c_chainLog: 103
+ ZSTD_c_checksumFlag: 201
+ ZSTD_c_compressionLevel: 100
+ ZSTD_c_contentSizeFlag: 200
+ ZSTD_c_dictIDFlag: 202
+ ZSTD_c_enableLongDistanceMatching: 160
+ ZSTD_c_hashLog: 102
+ ZSTD_c_jobSize: 241
+ ZSTD_c_ldmBucketSizeLog: 163
+ ZSTD_c_ldmHashLog: 161
+ ZSTD_c_ldmHashRateLog: 164
+ ZSTD_c_ldmMinMatch: 162
+ ZSTD_c_minMatch: 105
+ ZSTD_c_nbWorkers: 240
+ ZSTD_c_overlapLog: 242
+ ZSTD_c_searchLog: 104
+ ZSTD_c_strategy: 107
+ ZSTD_c_targetLength: 106
+ ZSTD_c_windowLog: 101
+ ZSTD_d_windowLogMax: 100
+ ZSTD_dfast: 2
+ ZSTD_e_continue: 0
+ ZSTD_e_end: 2
+ ZSTD_e_flush: 1
+ ZSTD_fast: 1
+ ZSTD_greedy: 3
+ ZSTD_lazy: 4
+ ZSTD_lazy2: 5
+ Z_BEST_COMPRESSION: 9
+ Z_BEST_SPEED: 1
+ Z_BLOCK: 5
+ Z_BUF_ERROR: -5
+ Z_DATA_ERROR: -3
+ Z_DEFAULT_CHUNK: 16384
+ Z_DEFAULT_COMPRESSION: -1
+ Z_DEFAULT_LEVEL: -1
+ Z_DEFAULT_MEMLEVEL: 8
+ Z_DEFAULT_STRATEGY: 0
+ Z_DEFAULT_WINDOWBITS: 15
+ Z_ERRNO: -1
+ Z_FILTERED: 1
+ Z_FINISH: 4
+ Z_FIXED: 4
+ Z_FULL_FLUSH: 3
+ Z_HUFFMAN_ONLY: 2
+ Z_MAX_CHUNK: Infinity
+ Z_MAX_LEVEL: 9
+ Z_MAX_MEMLEVEL: 9
+ Z_MAX_WINDOWBITS: 15
+ Z_MEM_ERROR: -4
+ Z_MIN_CHUNK: 64
+ Z_MIN_LEVEL: -1
+ Z_MIN_MEMLEVEL: 1
+ Z_MIN_WINDOWBITS: 8
+ Z_NEED_DICT: 2
+ Z_NO_COMPRESSION: 0
+ Z_NO_FLUSH: 0
+ Z_OK: 0
+ Z_PARTIAL_FLUSH: 1
+ Z_RLE: 3
+ Z_STREAM_END: 1
+ Z_STREAM_ERROR: -2
+ Z_SYNC_FLUSH: 2
+ Z_VERSION_ERROR: -6
- ZipBuffer: [Circular]
- ZipEntry: [Circular]
- ZipFile: [Circular]
- constants: [Object: null prototype]
+ constants: {}
- constants.BROTLI_DECODER_ERROR_COMPOUND_DICTIONARY: -18
- constants.BROTLI_DECODER_ERROR_FORMAT_BLOCK_SWITCH: -17
- constants.ZLIB_VERNUM: 4897
+ constants.ZLIB_VERNUM: 4784
- constants.ZSTD_CLEVEL_DEFAULT: 3
- constants.ZSTD_c_jobSize: 401
+ constants.ZSTD_c_jobSize: 241
- constants.ZSTD_c_nbWorkers: 400
+ constants.ZSTD_c_nbWorkers: 240
- constants.ZSTD_c_overlapLog: 402
+ constants.ZSTD_c_overlapLog: 242
- constants.ZSTD_error_GENERIC: 1
- constants.ZSTD_error_checksum_wrong: 22
- constants.ZSTD_error_corruption_detected: 20
- constants.ZSTD_error_dictionaryCreation_failed: 34
- constants.ZSTD_error_dictionary_corrupted: 30
- constants.ZSTD_error_dictionary_wrong: 32
- constants.ZSTD_error_dstBuffer_null: 74
- constants.ZSTD_error_dstSize_tooSmall: 70
- constants.ZSTD_error_frameParameter_unsupported: 14
- constants.ZSTD_error_frameParameter_windowTooLarge: 16
- constants.ZSTD_error_init_missing: 62
- constants.ZSTD_error_literals_headerWrong: 24
- constants.ZSTD_error_maxSymbolValue_tooLarge: 46
- constants.ZSTD_error_maxSymbolValue_tooSmall: 48
- constants.ZSTD_error_memory_allocation: 64
- constants.ZSTD_error_noForwardProgress_destFull: 80
- constants.ZSTD_error_noForwardProgress_inputEmpty: 82
- constants.ZSTD_error_no_error: 0
- constants.ZSTD_error_parameter_combination_unsupported: 41
- constants.ZSTD_error_parameter_outOfBound: 42
- constants.ZSTD_error_parameter_unsupported: 40
- constants.ZSTD_error_prefix_unknown: 10
- constants.ZSTD_error_srcSize_wrong: 72
- constants.ZSTD_error_stabilityCondition_notRespected: 50
- constants.ZSTD_error_stage_wrong: 60
- constants.ZSTD_error_tableLog_tooLarge: 44
- constants.ZSTD_error_version_unsupported: 12
- constants.ZSTD_error_workSpace_tooSmall: 66
- crc32c: ƒ crc32c(length: 1)
- createBrotliCompress: ƒ createBrotliCompress(length: 1)
+ createBrotliCompress: ƒ value(length: 1)
- createBrotliDecompress: ƒ createBrotliDecompress(length: 1)
+ createBrotliDecompress: ƒ value(length: 1)
- createDeflate: ƒ createDeflate(length: 1)
+ createDeflate: ƒ value(length: 1)
- createDeflateRaw: ƒ createDeflateRaw(length: 1)
+ createDeflateRaw: ƒ value(length: 1)
- createGunzip: ƒ createGunzip(length: 1)
+ createGunzip: ƒ value(length: 1)
- createGzip: ƒ createGzip(length: 1)
+ createGzip: ƒ value(length: 1)
- createInflate: ƒ createInflate(length: 1)
+ createInflate: ƒ value(length: 1)
- createInflateRaw: ƒ createInflateRaw(length: 1)
+ createInflateRaw: ƒ value(length: 1)
- createUnzip: ƒ createUnzip(length: 1)
+ createUnzip: ƒ value(length: 1)
- createZipArchive: ƒ (length: 0)
- createZipArchiveSync: ƒ (length: 0)
- createZstdCompress: ƒ createZstdCompress(length: 1)
+ createZstdCompress: ƒ value(length: 1)
- createZstdDecompress: ƒ createZstdDecompress(length: 1)
+ createZstdDecompress: ƒ value(length: 1)
- getMaxZipContentSize: [Circular]
- setMaxZipContentSize: [Circular]
- zipFiles: [Circular]
```
</details>

## Full module details

<details id="assert">
  <summary><code>assert</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    Assert: <ref *2> ƒ Assert(length: 1) {},
    AssertionError: <ref *3> class AssertionError extends Error {},
    deepEqual: <ref *4> ƒ deepEqual(length: 2) {},
    deepStrictEqual: <ref *5> ƒ deepStrictEqual(length: 2) {},
    default: ƒ assert(length: 0) {
        Assert: [Circular: *2],
        AssertionError: [Circular: *3],
        deepEqual: [Circular: *4],
        deepStrictEqual: [Circular: *5],
        doesNotMatch: <ref *7> ƒ doesNotMatch(length: 2) {},
        doesNotReject: <ref *8> async ƒ doesNotReject(length: 1) {},
        doesNotThrow: <ref *9> ƒ doesNotThrow(length: 1) {},
        equal: <ref *10> ƒ equal(length: 2) {},
        fail: <ref *11> ƒ fail(length: 1) {},
        ifError: <ref *12> ƒ ifError(length: 1) {},
        match: <ref *13> ƒ match(length: 2) {},
        notDeepEqual: <ref *14> ƒ notDeepEqual(length: 2) {},
        notDeepStrictEqual: <ref *15> ƒ notDeepStrictEqual(length: 2) {},
        notEqual: <ref *16> ƒ notEqual(length: 2) {},
        notStrictEqual: <ref *17> ƒ notStrictEqual(length: 2) {},
        ok: <ref *18> ƒ ok(length: 0) {},
        partialDeepStrictEqual: <ref *19> ƒ partialDeepStrictEqual(length: 2) {},
        rejects: <ref *20> async ƒ rejects(length: 1) {},
        strict: <ref *21> ƒ strict(length: 0) {
            Assert: [Circular: *2],
            AssertionError: [Circular: *3],
            deepEqual: [Circular: *5],
            deepStrictEqual: [Circular: *5],
            doesNotMatch: [Circular: *7],
            doesNotReject: [Circular: *8],
            doesNotThrow: [Circular: *9],
            equal: <ref *22> ƒ strictEqual(length: 2) {},
            fail: [Circular: *11],
            ifError: [Circular: *12],
            match: [Circular: *13],
            notDeepEqual: [Circular: *15],
            notDeepStrictEqual: [Circular: *15],
            notEqual: [Circular: *17],
            notStrictEqual: [Circular: *17],
            ok: [Circular: *18],
            partialDeepStrictEqual: [Circular: *19],
            rejects: [Circular: *20],
            strict: [Circular: *21],
            strictEqual: [Circular: *22],
            throws: <ref *23> ƒ throws(length: 1) {}
        },
        strictEqual: [Circular: *22],
        throws: [Circular: *23]
    },
    doesNotMatch: [Circular: *7],
    doesNotReject: [Circular: *8],
    doesNotThrow: [Circular: *9],
    equal: [Circular: *10],
    fail: [Circular: *11],
    ifError: [Circular: *12],
    match: [Circular: *13],
    notDeepEqual: [Circular: *14],
    notDeepStrictEqual: [Circular: *15],
    notEqual: [Circular: *16],
    notStrictEqual: [Circular: *17],
    ok: [Circular: *18],
    partialDeepStrictEqual: [Circular: *19],
    rejects: [Circular: *20],
    strict: [Circular: *21],
    strictEqual: [Circular: *22],
    throws: [Circular: *23]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    Assert: <ref *2> ƒ Assert(length: 1) {},
    AssertionError: <ref *3> class AssertionError extends h {},
    CallTracker: <ref *4> ƒ deprecated(length: 0) {},
    deepEqual: <ref *5> ƒ deepEqual(length: 2) {},
    deepStrictEqual: <ref *6> ƒ deepStrictEqual(length: 2) {},
    default: <ref *7> ƒ assert(length: 0) {
        Assert: [Circular: *2],
        AssertionError: [Circular: *3],
        CallTracker: [Circular: *4],
        deepEqual: [Circular: *5],
        deepStrictEqual: [Circular: *6],
        doesNotMatch: <ref *8> ƒ doesNotMatch(length: 2) {},
        doesNotReject: <ref *9> async ƒ doesNotReject(length: 1) {},
        doesNotThrow: <ref *10> ƒ doesNotThrow(length: 1) {},
        equal: <ref *11> ƒ equal(length: 2) {},
        fail: <ref *12> ƒ fail(length: 5) {},
        ifError: <ref *13> ƒ ifError(length: 1) {},
        match: <ref *14> ƒ match(length: 2) {},
        notDeepEqual: <ref *15> ƒ notDeepEqual(length: 2) {},
        notDeepStrictEqual: <ref *16> ƒ notDeepStrictEqual(length: 2) {},
        notEqual: <ref *17> ƒ notEqual(length: 2) {},
        notStrictEqual: <ref *18> ƒ notStrictEqual(length: 2) {},
        ok: [Circular: *7],
        partialDeepStrictEqual: <ref *19> ƒ partialDeepStrictEqual(length: 2) {},
        rejects: <ref *20> async ƒ rejects(length: 1) {},
        strict: <ref *21> ƒ strict(length: 0) {
            Assert: [Circular: *2],
            AssertionError: [Circular: *3],
            CallTracker: [Circular: *4],
            deepEqual: [Circular: *6],
            deepStrictEqual: [Circular: *6],
            doesNotMatch: [Circular: *8],
            doesNotReject: [Circular: *9],
            doesNotThrow: [Circular: *10],
            equal: <ref *22> ƒ strictEqual(length: 2) {},
            fail: [Circular: *12],
            ifError: [Circular: *13],
            match: [Circular: *14],
            notDeepEqual: [Circular: *16],
            notDeepStrictEqual: [Circular: *16],
            notEqual: [Circular: *18],
            notStrictEqual: [Circular: *18],
            ok: [Circular: *7],
            partialDeepStrictEqual: [Circular: *19],
            rejects: [Circular: *20],
            strict: [Circular: *21],
            strictEqual: [Circular: *22],
            throws: <ref *23> ƒ throws(length: 1) {}
        },
        strictEqual: [Circular: *22],
        throws: [Circular: *23]
    },
    doesNotMatch: [Circular: *8],
    doesNotReject: [Circular: *9],
    doesNotThrow: [Circular: *10],
    equal: [Circular: *11],
    fail: [Circular: *12],
    ifError: [Circular: *13],
    match: [Circular: *14],
    notDeepEqual: [Circular: *15],
    notDeepStrictEqual: [Circular: *16],
    notEqual: [Circular: *17],
    notStrictEqual: [Circular: *18],
    ok: [Circular: *7],
    partialDeepStrictEqual: [Circular: *19],
    rejects: [Circular: *20],
    strict: [Circular: *21],
    strictEqual: [Circular: *22],
    throws: [Circular: *23]
}
```

</td>
    </tr>
  </table>
</details>

<details id="assert-strict">
  <summary><code>assert/strict</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    Assert: <ref *2> ƒ Assert(length: 1) {},
    AssertionError: <ref *3> class AssertionError extends Error {},
    deepEqual: <ref *4> ƒ deepStrictEqual(length: 2) {},
    deepStrictEqual: [Circular: *4],
    default: <ref *5> ƒ strict(length: 0) {
        Assert: [Circular: *2],
        AssertionError: [Circular: *3],
        deepEqual: [Circular: *4],
        deepStrictEqual: [Circular: *4],
        doesNotMatch: <ref *6> ƒ doesNotMatch(length: 2) {},
        doesNotReject: <ref *7> async ƒ doesNotReject(length: 1) {},
        doesNotThrow: <ref *8> ƒ doesNotThrow(length: 1) {},
        equal: <ref *9> ƒ strictEqual(length: 2) {},
        fail: <ref *10> ƒ fail(length: 1) {},
        ifError: <ref *11> ƒ ifError(length: 1) {},
        match: <ref *12> ƒ match(length: 2) {},
        notDeepEqual: <ref *13> ƒ notDeepStrictEqual(length: 2) {},
        notDeepStrictEqual: [Circular: *13],
        notEqual: <ref *14> ƒ notStrictEqual(length: 2) {},
        notStrictEqual: [Circular: *14],
        ok: <ref *15> ƒ ok(length: 0) {},
        partialDeepStrictEqual: <ref *16> ƒ partialDeepStrictEqual(length: 2) {},
        rejects: <ref *17> async ƒ rejects(length: 1) {},
        strict: [Circular: *5],
        strictEqual: [Circular: *9],
        throws: <ref *18> ƒ throws(length: 1) {}
    },
    doesNotMatch: [Circular: *6],
    doesNotReject: [Circular: *7],
    doesNotThrow: [Circular: *8],
    equal: [Circular: *9],
    fail: [Circular: *10],
    ifError: [Circular: *11],
    match: [Circular: *12],
    notDeepEqual: [Circular: *13],
    notDeepStrictEqual: [Circular: *13],
    notEqual: [Circular: *14],
    notStrictEqual: [Circular: *14],
    ok: [Circular: *15],
    partialDeepStrictEqual: [Circular: *16],
    rejects: [Circular: *17],
    strict: [Circular: *5],
    strictEqual: [Circular: *9],
    throws: [Circular: *18]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    AssertionError: <ref *2> class AssertionError extends h {},
    deepEqual: <ref *3> ƒ deepEqual(length: 2) {},
    deepStrictEqual: <ref *4> ƒ deepStrictEqual(length: 2) {},
    default: <ref *5> ƒ strict(length: 0) {
        Assert: <ref *6> ƒ Assert(length: 1) {},
        AssertionError: [Circular: *2],
        CallTracker: <ref *7> ƒ deprecated(length: 0) {},
        deepEqual: [Circular: *4],
        deepStrictEqual: [Circular: *4],
        doesNotMatch: <ref *8> ƒ doesNotMatch(length: 2) {},
        doesNotReject: <ref *9> async ƒ doesNotReject(length: 1) {},
        doesNotThrow: <ref *10> ƒ doesNotThrow(length: 1) {},
        equal: <ref *11> ƒ strictEqual(length: 2) {},
        fail: <ref *12> ƒ fail(length: 5) {},
        ifError: <ref *13> ƒ ifError(length: 1) {},
        match: <ref *14> ƒ match(length: 2) {},
        notDeepEqual: <ref *15> ƒ notDeepStrictEqual(length: 2) {},
        notDeepStrictEqual: [Circular: *15],
        notEqual: <ref *16> ƒ notStrictEqual(length: 2) {},
        notStrictEqual: [Circular: *16],
        ok: <ref *17> ƒ assert(length: 0) {
            Assert: [Circular: *6],
            AssertionError: [Circular: *2],
            CallTracker: [Circular: *7],
            deepEqual: [Circular: *3],
            deepStrictEqual: [Circular: *4],
            doesNotMatch: [Circular: *8],
            doesNotReject: [Circular: *9],
            doesNotThrow: [Circular: *10],
            equal: <ref *18> ƒ equal(length: 2) {},
            fail: [Circular: *12],
            ifError: [Circular: *13],
            match: [Circular: *14],
            notDeepEqual: <ref *19> ƒ notDeepEqual(length: 2) {},
            notDeepStrictEqual: [Circular: *15],
            notEqual: <ref *20> ƒ notEqual(length: 2) {},
            notStrictEqual: [Circular: *16],
            ok: [Circular: *17],
            partialDeepStrictEqual: <ref *21> ƒ partialDeepStrictEqual(length: 2) {},
            rejects: <ref *22> async ƒ rejects(length: 1) {},
            strict: [Circular: *5],
            strictEqual: [Circular: *11],
            throws: <ref *23> ƒ throws(length: 1) {}
        },
        partialDeepStrictEqual: [Circular: *21],
        rejects: [Circular: *22],
        strict: [Circular: *5],
        strictEqual: [Circular: *11],
        throws: [Circular: *23]
    },
    doesNotMatch: [Circular: *8],
    doesNotReject: [Circular: *9],
    doesNotThrow: [Circular: *10],
    equal: [Circular: *18],
    fail: [Circular: *12],
    ifError: [Circular: *13],
    match: [Circular: *14],
    notDeepEqual: [Circular: *19],
    notDeepStrictEqual: [Circular: *15],
    notEqual: [Circular: *20],
    notStrictEqual: [Circular: *16],
    ok: [Circular: *17],
    partialDeepStrictEqual: [Circular: *21],
    rejects: [Circular: *22],
    strict: [Circular: *5],
    strictEqual: [Circular: *11],
    throws: [Circular: *23]
}
```

</td>
    </tr>
  </table>
</details>

<details id="async_hooks">
  <summary><code>async_hooks</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    AsyncLocalStorage: <ref *2> class AsyncLocalStorage {},
    AsyncResource: <ref *3> class AsyncResource {},
    asyncWrapProviders: <ref *4> [Object: null prototype] {
        ARGON2REQUEST: 60,
        BLOBREADER: 6,
        CHECKPRIMEREQUEST: 55,
        CIPHERREQUEST: 61,
        DERIVEBITSREQUEST: 62,
        DIRHANDLE: 1,
        DNSCHANNEL: 2,
        DTLS_ENDPOINT: 21,
        DTLS_SESSION: 22,
        ELDHISTOGRAM: 3,
        FILEHANDLE: 4,
        FILEHANDLECLOSEREQ: 5,
        FSEVENTWRAP: 7,
        FSREQCALLBACK: 8,
        FSREQPROMISE: 10,
        GETADDRINFOREQWRAP: 11,
        GETNAMEINFOREQWRAP: 12,
        GLOBREQUEST: 9,
        HASHREQUEST: 63,
        HEAPSNAPSHOT: 13,
        HTTP2PING: 16,
        HTTP2SESSION: 14,
        HTTP2SETTINGS: 17,
        HTTP2STREAM: 15,
        HTTPCLIENTREQUEST: 19,
        HTTPINCOMINGMESSAGE: 18,
        JSSTREAM: 23,
        KEYEXPORTREQUEST: 59,
        KEYGENREQUEST: 58,
        KEYPAIRGENREQUEST: 57,
        LOCKS: 20,
        MESSAGEPORT: 24,
        NONE: 0,
        PBKDF2REQUEST: 56,
        PIPECONNECTWRAP: 25,
        PIPESERVERWRAP: 26,
        PIPEWRAP: 27,
        PROCESSWRAP: 28,
        PROMISE: 29,
        QUERYWRAP: 30,
        QUIC_ENDPOINT: 31,
        QUIC_LOGSTREAM: 32,
        QUIC_SESSION: 33,
        QUIC_STREAM: 34,
        QUIC_UDP: 35,
        RANDOMBYTESREQUEST: 64,
        RANDOMPRIMEREQUEST: 65,
        SCRYPTREQUEST: 66,
        SHUTDOWNWRAP: 36,
        SIGINTWATCHDOG: 46,
        SIGNALWRAP: 37,
        SIGNREQUEST: 67,
        STATWATCHER: 38,
        STREAMPIPE: 39,
        TCPCONNECTWRAP: 40,
        TCPSERVERWRAP: 41,
        TCPWRAP: 42,
        TLSWRAP: 68,
        TTYWRAP: 43,
        UDPSENDWRAP: 44,
        UDPWRAP: 45,
        VERIFYREQUEST: 69,
        WORKER: 47,
        WORKERCPUPROFILE: 48,
        WORKERCPUUSAGE: 49,
        WORKERHEAPPROFILE: 50,
        WORKERHEAPSNAPSHOT: 51,
        WORKERHEAPSTATISTICS: 52,
        WRITEWRAP: 53,
        ZLIB: 54
    },
    createHook: <ref *5> ƒ createHook(length: 1) {},
    default: {
        [get] AsyncLocalStorage: [Circular: *2],
        AsyncResource: [Circular: *3],
        asyncWrapProviders: [Circular: *4],
        createHook: [Circular: *5],
        executionAsyncId: <ref *7> ƒ executionAsyncId(length: 0) {},
        executionAsyncResource: <ref *8> ƒ executionAsyncResource(length: 0) {},
        triggerAsyncId: <ref *9> ƒ triggerAsyncId(length: 0) {}
    },
    executionAsyncId: [Circular: *7],
    executionAsyncResource: [Circular: *8],
    triggerAsyncId: [Circular: *9]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    AsyncLocalStorage: <ref *2> class AsyncLocalStorage {},
    AsyncResource: <ref *3> class AsyncResource {},
    asyncWrapProviders: <ref *4> [Object: null prototype] {
        BLOBREADER: 6,
        CHECKPRIMEREQUEST: 49,
        CIPHERREQUEST: 54,
        DERIVEBITSREQUEST: 55,
        DIRHANDLE: 1,
        DNSCHANNEL: 2,
        ELDHISTOGRAM: 3,
        FILEHANDLE: 4,
        FILEHANDLECLOSEREQ: 5,
        FSEVENTWRAP: 7,
        FSREQCALLBACK: 8,
        FSREQPROMISE: 9,
        GETADDRINFOREQWRAP: 10,
        GETNAMEINFOREQWRAP: 11,
        HASHREQUEST: 56,
        HEAPSNAPSHOT: 12,
        HTTP2PING: 15,
        HTTP2SESSION: 13,
        HTTP2SETTINGS: 16,
        HTTP2STREAM: 14,
        HTTPCLIENTREQUEST: 18,
        HTTPINCOMINGMESSAGE: 17,
        JSSTREAM: 19,
        JSUDPWRAP: 20,
        KEYEXPORTREQUEST: 53,
        KEYGENREQUEST: 52,
        KEYPAIRGENREQUEST: 51,
        MESSAGEPORT: 21,
        NONE: 0,
        PBKDF2REQUEST: 50,
        PIPECONNECTWRAP: 22,
        PIPESERVERWRAP: 23,
        PIPEWRAP: 24,
        PROCESSWRAP: 25,
        PROMISE: 26,
        QUERYWRAP: 27,
        QUIC_ENDPOINT: 28,
        QUIC_LOGSTREAM: 29,
        QUIC_PACKET: 30,
        QUIC_SESSION: 31,
        QUIC_STREAM: 32,
        QUIC_UDP: 33,
        RANDOMBYTESREQUEST: 57,
        RANDOMPRIMEREQUEST: 58,
        SCRYPTREQUEST: 59,
        SHUTDOWNWRAP: 34,
        SIGINTWATCHDOG: 44,
        SIGNALWRAP: 35,
        SIGNREQUEST: 60,
        STATWATCHER: 36,
        STREAMPIPE: 37,
        TCPCONNECTWRAP: 38,
        TCPSERVERWRAP: 39,
        TCPWRAP: 40,
        TLSWRAP: 61,
        TTYWRAP: 41,
        UDPSENDWRAP: 42,
        UDPWRAP: 43,
        VERIFYREQUEST: 62,
        WORKER: 45,
        WORKERHEAPSNAPSHOT: 46,
        WRITEWRAP: 47,
        ZLIB: 48
    },
    createHook: <ref *5> ƒ createHook(length: 1) {},
    default: {
        AsyncLocalStorage: [Circular: *2],
        AsyncResource: [Circular: *3],
        asyncWrapProviders: [Circular: *4],
        createHook: [Circular: *5],
        executionAsyncId: <ref *7> ƒ executionAsyncId(length: 0) {},
        executionAsyncResource: <ref *8> ƒ executionAsyncResource(length: 0) {},
        triggerAsyncId: <ref *9> ƒ triggerAsyncId(length: 0) {}
    },
    executionAsyncId: [Circular: *7],
    executionAsyncResource: [Circular: *8],
    triggerAsyncId: [Circular: *9]
}
```

</td>
    </tr>
  </table>
</details>

<details id="buffer">
  <summary><code>buffer</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    atob: <ref *2> ƒ atob(length: 1) {},
    Blob: <ref *3> class Blob {},
    btoa: <ref *4> ƒ btoa(length: 1) {},
    Buffer: <ref *5> ƒ Buffer(length: 3) {
        alloc: ƒ alloc(length: 3) {},
        allocUnsafe: ƒ allocUnsafe(length: 2) {},
        allocUnsafeSlow: ƒ allocUnsafeSlow(length: 2) {},
        byteLength: ƒ byteLength(length: 2) {},
        compare: ƒ compare(length: 2) {},
        concat: ƒ concat(length: 2) {},
        copyBytesFrom: ƒ copyBytesFrom(length: 3) {},
        from: ƒ from(length: 3) {},
        isBuffer: ƒ isBuffer(length: 1) {},
        isEncoding: <ref *15> ƒ isEncoding(length: 1) {},
        of: ƒ of(length: 0) {},
        poolSize: 65536,
        stringLength: ƒ stringLength(length: 1) {},
        Symbol(kIsEncodingSymbol): [Circular: *15]
    },
    constants: <ref *18> {
        MAX_LENGTH: 9007199254740991,
        MAX_STRING_LENGTH: 536870888
    },
    default: {
        atob: [Circular: *2],
        Blob: [Circular: *3],
        btoa: [Circular: *4],
        Buffer: [Circular: *5],
        constants: [Circular: *18],
        File: <ref *20> class File extends Blob {},
        [get/set] INSPECT_MAX_BYTES: 50,
        isAscii: <ref *21> ƒ isAscii(length: 1) {},
        isLatin1: <ref *22> ƒ isLatin1(length: 1) {},
        isUtf8: <ref *23> ƒ isUtf8(length: 1) {},
        kMaxLength: 9007199254740991,
        kStringMaxLength: 536870888,
        resolveObjectURL: <ref *24> ƒ resolveObjectURL(length: 1) {},
        transcode: <ref *25> ƒ transcode(length: 3) {}
    },
    File: [Circular: *20],
    INSPECT_MAX_BYTES: 50,
    isAscii: [Circular: *21],
    isLatin1: [Circular: *22],
    isUtf8: [Circular: *23],
    kMaxLength: 9007199254740991,
    kStringMaxLength: 536870888,
    resolveObjectURL: [Circular: *24],
    transcode: [Circular: *25]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    atob: <ref *2> ƒ atob(length: 1) {},
    Blob: <ref *3> class Blob {},
    btoa: <ref *4> ƒ btoa(length: 1) {},
    Buffer: <ref *5> ƒ Buffer(length: 3) {
        alloc: ƒ alloc(length: 3) {},
        allocUnsafe: ƒ allocUnsafe(length: 1) {},
        allocUnsafeSlow: ƒ allocUnsafeSlow(length: 1) {},
        byteLength: ƒ byteLength(length: 2) {},
        compare: ƒ compare(length: 2) {},
        concat: ƒ concat(length: 2) {},
        copyBytesFrom: ƒ copyBytesFrom(length: 3) {},
        from: ƒ from(length: 3) {},
        isBuffer: ƒ isBuffer(length: 1) {},
        isEncoding: ƒ isEncoding(length: 1) {},
        of: ƒ of(length: 0) {},
        poolSize: 8192
    },
    constants: <ref *17> {
        MAX_LENGTH: 9007199254740991,
        MAX_STRING_LENGTH: 536870888
    },
    default: {
        atob: [Circular: *2],
        Blob: [Circular: *3],
        btoa: [Circular: *4],
        Buffer: [Circular: *5],
        constants: [Circular: *17],
        File: <ref *19> class File extends Blob {},
        [get/set] INSPECT_MAX_BYTES: 50,
        isAscii: <ref *20> ƒ isAscii(length: 1) {},
        isUtf8: <ref *21> ƒ isUtf8(length: 1) {},
        kMaxLength: 9007199254740991,
        kStringMaxLength: 536870888,
        resolveObjectURL: <ref *22> ƒ resolveObjectURL(length: 1) {},
        SlowBuffer: <ref *23> ƒ SlowBuffer(length: 1) {},
        transcode: <ref *24> ƒ transcode(length: 3) {},
        utf8Write: ƒ utf8Write(length: 3) {}
    },
    File: [Circular: *19],
    INSPECT_MAX_BYTES: 50,
    isAscii: [Circular: *20],
    isUtf8: [Circular: *21],
    kMaxLength: 9007199254740991,
    kStringMaxLength: 536870888,
    resolveObjectURL: [Circular: *22],
    SlowBuffer: [Circular: *23],
    transcode: [Circular: *24]
}
```

</td>
    </tr>
  </table>
</details>

<details id="child_process">
  <summary><code>child_process</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    _forkChild: <ref *2> ƒ _forkChild(length: 2) {},
    ChildProcess: <ref *3> ƒ ChildProcess(length: 0) {},
    default: {
        _forkChild: [Circular: *2],
        ChildProcess: [Circular: *3],
        exec: <ref *5> ƒ exec(length: 3) {},
        execFile: <ref *6> ƒ execFile(length: 4) {},
        execFileSync: <ref *7> ƒ execFileSync(length: 3) {},
        execSync: <ref *8> ƒ execSync(length: 2) {},
        fork: <ref *9> ƒ fork(length: 1) {},
        spawn: <ref *10> ƒ spawn(length: 3) {},
        spawnSync: <ref *11> ƒ spawnSync(length: 3) {}
    },
    exec: [Circular: *5],
    execFile: [Circular: *6],
    execFileSync: [Circular: *7],
    execSync: [Circular: *8],
    fork: [Circular: *9],
    spawn: [Circular: *10],
    spawnSync: [Circular: *11]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    ChildProcess: <ref *2> class ChildProcess extends Oe {},
    default: {
        ChildProcess: [Circular: *2],
        exec: <ref *4> ƒ exec(length: 3) {},
        execFile: <ref *5> ƒ execFile(length: 4) {},
        execFileSync: <ref *6> ƒ execFileSync(length: 3) {},
        execSync: <ref *7> ƒ execSync(length: 2) {},
        fork: <ref *8> ƒ fork(length: 3) {},
        spawn: <ref *9> ƒ spawn(length: 3) {},
        spawnSync: <ref *10> ƒ spawnSync(length: 3) {}
    },
    exec: [Circular: *4],
    execFile: [Circular: *5],
    execFileSync: [Circular: *6],
    execSync: [Circular: *7],
    fork: [Circular: *8],
    spawn: [Circular: *9],
    spawnSync: [Circular: *10]
}
```

</td>
    </tr>
  </table>
</details>

<details id="cluster">
  <summary><code>cluster</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    _events: <ref *2> [Object: null prototype] {},
    _eventsCount: 0,
    _maxListeners: undefined,
    default: EventEmitter {
        _events: [Circular: *2],
        _eventsCount: 0,
        _maxListeners: undefined,
        disconnect: <ref *4> ƒ (length: 1) {},
        fork: <ref *5> ƒ (length: 1) {},
        isMaster: true,
        isPrimary: true,
        isWorker: false,
        SCHED_NONE: 1,
        SCHED_RR: 2,
        schedulingPolicy: 2,
        settings: <ref *6> {},
        setupMaster: <ref *7> ƒ (length: 1) {},
        setupPrimary: [Circular: *7],
        Symbol(kCapture): false,
        Symbol(shapeMode): false,
        Worker: <ref *8> ƒ Worker(length: 1) {},
        workers: <ref *9> {}
    },
    disconnect: [Circular: *4],
    fork: [Circular: *5],
    isMaster: true,
    isPrimary: true,
    isWorker: false,
    SCHED_NONE: 1,
    SCHED_RR: 2,
    schedulingPolicy: 2,
    settings: [Circular: *6],
    setupMaster: [Circular: *7],
    setupPrimary: [Circular: *7],
    Worker: [Circular: *8],
    workers: [Circular: *9]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    default: EventEmitter {
        _events: [Object: null prototype] {},
        _eventsCount: 0,
        _maxListeners: undefined,
        disconnect: <ref *4> ƒ (length: 1) {},
        fork: <ref *5> ƒ (length: 1) {},
        isMaster: true,
        isPrimary: true,
        isWorker: false,
        SCHED_NONE: 1,
        SCHED_RR: 2,
        schedulingPolicy: 2,
        settings: <ref *6> {},
        setupMaster: <ref *7> ƒ (length: 1) {},
        setupPrimary: [Circular: *7],
        Symbol(kCapture): false,
        Worker: <ref *8> ƒ Worker(length: 1) {},
        workers: <ref *9> {}
    },
    disconnect: [Circular: *4],
    fork: [Circular: *5],
    isMaster: true,
    isPrimary: true,
    isWorker: false,
    SCHED_NONE: 1,
    SCHED_RR: 2,
    schedulingPolicy: 2,
    settings: [Circular: *6],
    setupMaster: [Circular: *7],
    setupPrimary: [Circular: *7],
    worker: undefined,
    Worker: [Circular: *8],
    workers: [Circular: *9]
}
```

</td>
    </tr>
  </table>
</details>

<details id="console">
  <summary><code>console</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    assert: <ref *2> ƒ assert(length: 0) {},
    clear: <ref *3> ƒ clear(length: 0) {},
    Console: <ref *4> ƒ Console(length: 1) {},
    context: <ref *5> ƒ context(length: 1) {},
    count: <ref *6> ƒ count(length: 0) {},
    countReset: <ref *7> ƒ countReset(length: 0) {},
    createTask: <ref *8> ƒ createTask(length: 0) {},
    debug: <ref *9> ƒ debug(length: 0) {},
    default: {
        assert: [Circular: *2],
        clear: [Circular: *3],
        Console: [Circular: *4],
        context: [Circular: *5],
        count: [Circular: *6],
        countReset: [Circular: *7],
        createTask: [Circular: *8],
        debug: [Circular: *9],
        dir: <ref *11> ƒ dir(length: 0) {},
        dirxml: <ref *12> ƒ dirxml(length: 0) {},
        error: <ref *13> ƒ error(length: 0) {},
        group: <ref *14> ƒ group(length: 0) {},
        groupCollapsed: <ref *15> ƒ groupCollapsed(length: 0) {},
        groupEnd: <ref *16> ƒ groupEnd(length: 0) {},
        info: <ref *17> ƒ info(length: 0) {},
        log: <ref *18> ƒ log(length: 0) {},
        profile: <ref *19> ƒ profile(length: 0) {},
        profileEnd: <ref *20> ƒ profileEnd(length: 0) {},
        table: <ref *21> ƒ table(length: 0) {},
        time: <ref *22> ƒ time(length: 0) {},
        timeEnd: <ref *23> ƒ timeEnd(length: 0) {},
        timeLog: <ref *24> ƒ timeLog(length: 0) {},
        timeStamp: <ref *25> ƒ timeStamp(length: 0) {},
        trace: <ref *26> ƒ trace(length: 0) {},
        warn: <ref *27> ƒ warn(length: 0) {}
    },
    dir: [Circular: *11],
    dirxml: [Circular: *12],
    error: [Circular: *13],
    group: [Circular: *14],
    groupCollapsed: [Circular: *15],
    groupEnd: [Circular: *16],
    info: [Circular: *17],
    log: [Circular: *18],
    profile: [Circular: *19],
    profileEnd: [Circular: *20],
    table: [Circular: *21],
    time: [Circular: *22],
    timeEnd: [Circular: *23],
    timeLog: [Circular: *24],
    timeStamp: [Circular: *25],
    trace: [Circular: *26],
    warn: [Circular: *27]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    assert: <ref *2> ƒ assert(length: 0) {},
    clear: <ref *3> ƒ clear(length: 0) {},
    Console: <ref *4> ƒ Console(length: 1) {},
    count: <ref *5> ƒ count(length: 0) {},
    countReset: <ref *6> ƒ countReset(length: 0) {},
    debug: <ref *7> ƒ debug(length: 0) {},
    default: {
        assert: [Circular: *2],
        clear: [Circular: *3],
        Console: [Circular: *4],
        context: ƒ context(length: 1) {},
        count: [Circular: *5],
        countReset: [Circular: *6],
        createTask: ƒ createTask(length: 0) {},
        debug: [Circular: *7],
        dir: <ref *11> ƒ dir(length: 0) {},
        dirxml: <ref *12> ƒ dirxml(length: 0) {},
        error: <ref *13> ƒ error(length: 0) {},
        group: <ref *14> ƒ group(length: 0) {},
        groupCollapsed: <ref *15> ƒ groupCollapsed(length: 0) {},
        groupEnd: <ref *16> ƒ groupEnd(length: 0) {},
        indentLevel: 0,
        info: <ref *17> ƒ info(length: 0) {},
        log: <ref *18> ƒ log(length: 0) {},
        profile: <ref *19> ƒ profile(length: 0) {},
        profileEnd: <ref *20> ƒ profileEnd(length: 0) {},
        Symbol(isConsoleInstance): true,
        table: <ref *21> ƒ table(length: 0) {},
        time: <ref *22> ƒ time(length: 0) {},
        timeEnd: <ref *23> ƒ timeEnd(length: 0) {},
        timeLog: <ref *24> ƒ timeLog(length: 0) {},
        timeStamp: <ref *25> ƒ timeStamp(length: 0) {},
        trace: <ref *26> ƒ trace(length: 0) {},
        warn: <ref *27> ƒ warn(length: 0) {}
    },
    dir: [Circular: *11],
    dirxml: [Circular: *12],
    error: [Circular: *13],
    group: [Circular: *14],
    groupCollapsed: [Circular: *15],
    groupEnd: [Circular: *16],
    indentLevel: 0,
    info: [Circular: *17],
    log: [Circular: *18],
    profile: [Circular: *19],
    profileEnd: [Circular: *20],
    table: [Circular: *21],
    time: [Circular: *22],
    timeEnd: [Circular: *23],
    timeLog: [Circular: *24],
    timeStamp: [Circular: *25],
    trace: [Circular: *26],
    warn: [Circular: *27]
}
```

</td>
    </tr>
  </table>
</details>

<details id="constants">
  <summary><code>constants</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    COPYFILE_EXCL: 1,
    COPYFILE_FICLONE: 2,
    COPYFILE_FICLONE_FORCE: 4,
    default: {
        COPYFILE_EXCL: 1,
        COPYFILE_FICLONE: 2,
        COPYFILE_FICLONE_FORCE: 4,
        defaultCoreCipherList: "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA2…",
        DH_CHECK_P_NOT_PRIME: 1,
        DH_CHECK_P_NOT_SAFE_PRIME: 2,
        DH_NOT_SUITABLE_GENERATOR: 8,
        DH_UNABLE_TO_CHECK_GENERATOR: 4,
        E2BIG: 7,
        EACCES: 13,
        EADDRINUSE: 98,
        EADDRNOTAVAIL: 99,
        EAFNOSUPPORT: 97,
        EAGAIN: 11,
        EALREADY: 114,
        EBADF: 9,
        EBADMSG: 74,
        EBUSY: 16,
        ECANCELED: 125,
        ECHILD: 10,
        ECONNABORTED: 103,
        ECONNREFUSED: 111,
        ECONNRESET: 104,
        EDEADLK: 35,
        EDESTADDRREQ: 89,
        EDOM: 33,
        EDQUOT: 122,
        EEXIST: 17,
        EFAULT: 14,
        EFBIG: 27,
        EHOSTUNREACH: 113,
        EIDRM: 43,
        EILSEQ: 84,
        EINPROGRESS: 115,
        EINTR: 4,
        EINVAL: 22,
        EIO: 5,
        EISCONN: 106,
        EISDIR: 21,
        ELOOP: 40,
        EMFILE: 24,
        EMLINK: 31,
        EMSGSIZE: 90,
        EMULTIHOP: 72,
        ENAMETOOLONG: 36,
        ENETDOWN: 100,
        ENETRESET: 102,
        ENETUNREACH: 101,
        ENFILE: 23,
        ENOBUFS: 105,
        ENODATA: 61,
        ENODEV: 19,
        ENOENT: 2,
        ENOEXEC: 8,
        ENOLCK: 37,
        ENOLINK: 67,
        ENOMEM: 12,
        ENOMSG: 42,
        ENOPROTOOPT: 92,
        ENOSPC: 28,
        ENOSR: 63,
        ENOSTR: 60,
        ENOSYS: 38,
        ENOTCONN: 107,
        ENOTDIR: 20,
        ENOTEMPTY: 39,
        ENOTSOCK: 88,
        ENOTSUP: 95,
        ENOTTY: 25,
        ENXIO: 6,
        EOPNOTSUPP: 95,
        EOVERFLOW: 75,
        EPERM: 1,
        EPIPE: 32,
        EPROTO: 71,
        EPROTONOSUPPORT: 93,
        EPROTOTYPE: 91,
        ERANGE: 34,
        EROFS: 30,
        ESPIPE: 29,
        ESRCH: 3,
        ESTALE: 116,
        ETIME: 62,
        ETIMEDOUT: 110,
        ETXTBSY: 26,
        EWOULDBLOCK: 11,
        EXDEV: 18,
        F_OK: 0,
        O_APPEND: 1024,
        O_CREAT: 64,
        O_DIRECT: 16384,
        O_DIRECTORY: 65536,
        O_DSYNC: 4096,
        O_EXCL: 128,
        O_NOATIME: 262144,
        O_NOCTTY: 256,
        O_NOFOLLOW: 131072,
        O_NONBLOCK: 2048,
        O_RDONLY: 0,
        O_RDWR: 2,
        O_SYNC: 1052672,
        O_TRUNC: 512,
        O_WRONLY: 1,
        OPENSSL_VERSION_NUMBER: 1074790400,
        POINT_CONVERSION_COMPRESSED: 2,
        POINT_CONVERSION_HYBRID: 6,
        POINT_CONVERSION_UNCOMPRESSED: 4,
        PRIORITY_ABOVE_NORMAL: -7,
        PRIORITY_BELOW_NORMAL: 10,
        PRIORITY_HIGH: -14,
        PRIORITY_HIGHEST: -20,
        PRIORITY_LOW: 19,
        PRIORITY_NORMAL: 0,
        R_OK: 4,
        RSA_NO_PADDING: 3,
        RSA_PKCS1_OAEP_PADDING: 4,
        RSA_PKCS1_PADDING: 1,
        RSA_PKCS1_PSS_PADDING: 6,
        RSA_PSS_SALTLEN_AUTO: -2,
        RSA_PSS_SALTLEN_DIGEST: -1,
        RSA_PSS_SALTLEN_MAX_SIGN: -2,
        RSA_SSLV23_PADDING: 2,
        RSA_X931_PADDING: 5,
        RTLD_DEEPBIND: 8,
        RTLD_GLOBAL: 256,
        RTLD_LAZY: 1,
        RTLD_LOCAL: 0,
        RTLD_NOW: 2,
        S_IFBLK: 24576,
        S_IFCHR: 8192,
        S_IFDIR: 16384,
        S_IFIFO: 4096,
        S_IFLNK: 40960,
        S_IFMT: 61440,
        S_IFREG: 32768,
        S_IFSOCK: 49152,
        S_IRGRP: 32,
        S_IROTH: 4,
        S_IRUSR: 256,
        S_IRWXG: 56,
        S_IRWXO: 7,
        S_IRWXU: 448,
        S_IWGRP: 16,
        S_IWOTH: 2,
        S_IWUSR: 128,
        S_IXGRP: 8,
        S_IXOTH: 1,
        S_IXUSR: 64,
        SIGABRT: 6,
        SIGALRM: 14,
        SIGBUS: 7,
        SIGCHLD: 17,
        SIGCONT: 18,
        SIGFPE: 8,
        SIGHUP: 1,
        SIGILL: 4,
        SIGINT: 2,
        SIGIO: 29,
        SIGIOT: 6,
        SIGKILL: 9,
        SIGPIPE: 13,
        SIGPOLL: 29,
        SIGPROF: 27,
        SIGPWR: 30,
        SIGQUIT: 3,
        SIGSEGV: 11,
        SIGSTKFLT: 16,
        SIGSTOP: 19,
        SIGSYS: 31,
        SIGTERM: 15,
        SIGTRAP: 5,
        SIGTSTP: 20,
        SIGTTIN: 21,
        SIGTTOU: 22,
        SIGURG: 23,
        SIGUSR1: 10,
        SIGUSR2: 12,
        SIGVTALRM: 26,
        SIGWINCH: 28,
        SIGXCPU: 24,
        SIGXFSZ: 25,
        SSL_OP_ALL: 2147485760,
        SSL_OP_ALLOW_NO_DHE_KEX: 1024,
        SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: 262144,
        SSL_OP_CIPHER_SERVER_PREFERENCE: 4194304,
        SSL_OP_CISCO_ANYCONNECT: 32768,
        SSL_OP_COOKIE_EXCHANGE: 8192,
        SSL_OP_CRYPTOPRO_TLSEXT_BUG: 2147483648,
        SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: 2048,
        SSL_OP_LEGACY_SERVER_CONNECT: 4,
        SSL_OP_NO_COMPRESSION: 131072,
        SSL_OP_NO_ENCRYPT_THEN_MAC: 524288,
        SSL_OP_NO_QUERY_MTU: 4096,
        SSL_OP_NO_RENEGOTIATION: 1073741824,
        SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: 65536,
        SSL_OP_NO_SSLv2: 0,
        SSL_OP_NO_SSLv3: 33554432,
        SSL_OP_NO_TICKET: 16384,
        SSL_OP_NO_TLSv1: 67108864,
        SSL_OP_NO_TLSv1_1: 268435456,
        SSL_OP_NO_TLSv1_2: 134217728,
        SSL_OP_NO_TLSv1_3: 536870912,
        SSL_OP_PRIORITIZE_CHACHA: 2097152,
        SSL_OP_TLS_ROLLBACK_BUG: 8388608,
        TLS1_1_VERSION: 770,
        TLS1_2_VERSION: 771,
        TLS1_3_VERSION: 772,
        TLS1_VERSION: 769,
        UV_DIRENT_BLOCK: 7,
        UV_DIRENT_CHAR: 6,
        UV_DIRENT_DIR: 2,
        UV_DIRENT_FIFO: 4,
        UV_DIRENT_FILE: 1,
        UV_DIRENT_LINK: 3,
        UV_DIRENT_SOCKET: 5,
        UV_DIRENT_UNKNOWN: 0,
        UV_FS_COPYFILE_EXCL: 1,
        UV_FS_COPYFILE_FICLONE: 2,
        UV_FS_COPYFILE_FICLONE_FORCE: 4,
        UV_FS_O_FILEMAP: 0,
        UV_FS_O_RANDOM: 0,
        UV_FS_O_SEQUENTIAL: 0,
        UV_FS_O_SHORT_LIVED: 0,
        UV_FS_O_TEMPORARY: 0,
        UV_FS_SYMLINK_DIR: 1,
        UV_FS_SYMLINK_JUNCTION: 2,
        W_OK: 2,
        X_OK: 1
    },
    defaultCoreCipherList: "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA2…",
    DH_CHECK_P_NOT_PRIME: 1,
    DH_CHECK_P_NOT_SAFE_PRIME: 2,
    DH_NOT_SUITABLE_GENERATOR: 8,
    DH_UNABLE_TO_CHECK_GENERATOR: 4,
    E2BIG: 7,
    EACCES: 13,
    EADDRINUSE: 98,
    EADDRNOTAVAIL: 99,
    EAFNOSUPPORT: 97,
    EAGAIN: 11,
    EALREADY: 114,
    EBADF: 9,
    EBADMSG: 74,
    EBUSY: 16,
    ECANCELED: 125,
    ECHILD: 10,
    ECONNABORTED: 103,
    ECONNREFUSED: 111,
    ECONNRESET: 104,
    EDEADLK: 35,
    EDESTADDRREQ: 89,
    EDOM: 33,
    EDQUOT: 122,
    EEXIST: 17,
    EFAULT: 14,
    EFBIG: 27,
    EHOSTUNREACH: 113,
    EIDRM: 43,
    EILSEQ: 84,
    EINPROGRESS: 115,
    EINTR: 4,
    EINVAL: 22,
    EIO: 5,
    EISCONN: 106,
    EISDIR: 21,
    ELOOP: 40,
    EMFILE: 24,
    EMLINK: 31,
    EMSGSIZE: 90,
    EMULTIHOP: 72,
    ENAMETOOLONG: 36,
    ENETDOWN: 100,
    ENETRESET: 102,
    ENETUNREACH: 101,
    ENFILE: 23,
    ENOBUFS: 105,
    ENODATA: 61,
    ENODEV: 19,
    ENOENT: 2,
    ENOEXEC: 8,
    ENOLCK: 37,
    ENOLINK: 67,
    ENOMEM: 12,
    ENOMSG: 42,
    ENOPROTOOPT: 92,
    ENOSPC: 28,
    ENOSR: 63,
    ENOSTR: 60,
    ENOSYS: 38,
    ENOTCONN: 107,
    ENOTDIR: 20,
    ENOTEMPTY: 39,
    ENOTSOCK: 88,
    ENOTSUP: 95,
    ENOTTY: 25,
    ENXIO: 6,
    EOPNOTSUPP: 95,
    EOVERFLOW: 75,
    EPERM: 1,
    EPIPE: 32,
    EPROTO: 71,
    EPROTONOSUPPORT: 93,
    EPROTOTYPE: 91,
    ERANGE: 34,
    EROFS: 30,
    ESPIPE: 29,
    ESRCH: 3,
    ESTALE: 116,
    ETIME: 62,
    ETIMEDOUT: 110,
    ETXTBSY: 26,
    EWOULDBLOCK: 11,
    EXDEV: 18,
    F_OK: 0,
    O_APPEND: 1024,
    O_CREAT: 64,
    O_DIRECT: 16384,
    O_DIRECTORY: 65536,
    O_DSYNC: 4096,
    O_EXCL: 128,
    O_NOATIME: 262144,
    O_NOCTTY: 256,
    O_NOFOLLOW: 131072,
    O_NONBLOCK: 2048,
    O_RDONLY: 0,
    O_RDWR: 2,
    O_SYNC: 1052672,
    O_TRUNC: 512,
    O_WRONLY: 1,
    OPENSSL_VERSION_NUMBER: 1074790400,
    POINT_CONVERSION_COMPRESSED: 2,
    POINT_CONVERSION_HYBRID: 6,
    POINT_CONVERSION_UNCOMPRESSED: 4,
    PRIORITY_ABOVE_NORMAL: -7,
    PRIORITY_BELOW_NORMAL: 10,
    PRIORITY_HIGH: -14,
    PRIORITY_HIGHEST: -20,
    PRIORITY_LOW: 19,
    PRIORITY_NORMAL: 0,
    R_OK: 4,
    RSA_NO_PADDING: 3,
    RSA_PKCS1_OAEP_PADDING: 4,
    RSA_PKCS1_PADDING: 1,
    RSA_PKCS1_PSS_PADDING: 6,
    RSA_PSS_SALTLEN_AUTO: -2,
    RSA_PSS_SALTLEN_DIGEST: -1,
    RSA_PSS_SALTLEN_MAX_SIGN: -2,
    RSA_SSLV23_PADDING: 2,
    RSA_X931_PADDING: 5,
    RTLD_DEEPBIND: 8,
    RTLD_GLOBAL: 256,
    RTLD_LAZY: 1,
    RTLD_LOCAL: 0,
    RTLD_NOW: 2,
    S_IFBLK: 24576,
    S_IFCHR: 8192,
    S_IFDIR: 16384,
    S_IFIFO: 4096,
    S_IFLNK: 40960,
    S_IFMT: 61440,
    S_IFREG: 32768,
    S_IFSOCK: 49152,
    S_IRGRP: 32,
    S_IROTH: 4,
    S_IRUSR: 256,
    S_IRWXG: 56,
    S_IRWXO: 7,
    S_IRWXU: 448,
    S_IWGRP: 16,
    S_IWOTH: 2,
    S_IWUSR: 128,
    S_IXGRP: 8,
    S_IXOTH: 1,
    S_IXUSR: 64,
    SIGABRT: 6,
    SIGALRM: 14,
    SIGBUS: 7,
    SIGCHLD: 17,
    SIGCONT: 18,
    SIGFPE: 8,
    SIGHUP: 1,
    SIGILL: 4,
    SIGINT: 2,
    SIGIO: 29,
    SIGIOT: 6,
    SIGKILL: 9,
    SIGPIPE: 13,
    SIGPOLL: 29,
    SIGPROF: 27,
    SIGPWR: 30,
    SIGQUIT: 3,
    SIGSEGV: 11,
    SIGSTKFLT: 16,
    SIGSTOP: 19,
    SIGSYS: 31,
    SIGTERM: 15,
    SIGTRAP: 5,
    SIGTSTP: 20,
    SIGTTIN: 21,
    SIGTTOU: 22,
    SIGURG: 23,
    SIGUSR1: 10,
    SIGUSR2: 12,
    SIGVTALRM: 26,
    SIGWINCH: 28,
    SIGXCPU: 24,
    SIGXFSZ: 25,
    SSL_OP_ALL: 2147485760,
    SSL_OP_ALLOW_NO_DHE_KEX: 1024,
    SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: 262144,
    SSL_OP_CIPHER_SERVER_PREFERENCE: 4194304,
    SSL_OP_CISCO_ANYCONNECT: 32768,
    SSL_OP_COOKIE_EXCHANGE: 8192,
    SSL_OP_CRYPTOPRO_TLSEXT_BUG: 2147483648,
    SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: 2048,
    SSL_OP_LEGACY_SERVER_CONNECT: 4,
    SSL_OP_NO_COMPRESSION: 131072,
    SSL_OP_NO_ENCRYPT_THEN_MAC: 524288,
    SSL_OP_NO_QUERY_MTU: 4096,
    SSL_OP_NO_RENEGOTIATION: 1073741824,
    SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: 65536,
    SSL_OP_NO_SSLv2: 0,
    SSL_OP_NO_SSLv3: 33554432,
    SSL_OP_NO_TICKET: 16384,
    SSL_OP_NO_TLSv1: 67108864,
    SSL_OP_NO_TLSv1_1: 268435456,
    SSL_OP_NO_TLSv1_2: 134217728,
    SSL_OP_NO_TLSv1_3: 536870912,
    SSL_OP_PRIORITIZE_CHACHA: 2097152,
    SSL_OP_TLS_ROLLBACK_BUG: 8388608,
    TLS1_1_VERSION: 770,
    TLS1_2_VERSION: 771,
    TLS1_3_VERSION: 772,
    TLS1_VERSION: 769,
    UV_DIRENT_BLOCK: 7,
    UV_DIRENT_CHAR: 6,
    UV_DIRENT_DIR: 2,
    UV_DIRENT_FIFO: 4,
    UV_DIRENT_FILE: 1,
    UV_DIRENT_LINK: 3,
    UV_DIRENT_SOCKET: 5,
    UV_DIRENT_UNKNOWN: 0,
    UV_FS_COPYFILE_EXCL: 1,
    UV_FS_COPYFILE_FICLONE: 2,
    UV_FS_COPYFILE_FICLONE_FORCE: 4,
    UV_FS_O_FILEMAP: 0,
    UV_FS_O_RANDOM: 0,
    UV_FS_O_SEQUENTIAL: 0,
    UV_FS_O_SHORT_LIVED: 0,
    UV_FS_O_TEMPORARY: 0,
    UV_FS_SYMLINK_DIR: 1,
    UV_FS_SYMLINK_JUNCTION: 2,
    W_OK: 2,
    X_OK: 1
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    ALPN_ENABLED: 1,
    BROTLI_DECODE: 8,
    BROTLI_DECODER_ERROR_ALLOC_BLOCK_TYPE_TREES: -30,
    BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MAP: -25,
    BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MODES: -21,
    BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_1: -26,
    BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_2: -27,
    BROTLI_DECODER_ERROR_ALLOC_TREE_GROUPS: -22,
    BROTLI_DECODER_ERROR_DICTIONARY_NOT_SET: -19,
    BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_1: -9,
    BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_2: -10,
    BROTLI_DECODER_ERROR_FORMAT_CL_SPACE: -6,
    BROTLI_DECODER_ERROR_FORMAT_CONTEXT_MAP_REPEAT: -8,
    BROTLI_DECODER_ERROR_FORMAT_DICTIONARY: -12,
    BROTLI_DECODER_ERROR_FORMAT_DISTANCE: -16,
    BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_META_NIBBLE: -3,
    BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_NIBBLE: -1,
    BROTLI_DECODER_ERROR_FORMAT_HUFFMAN_SPACE: -7,
    BROTLI_DECODER_ERROR_FORMAT_PADDING_1: -14,
    BROTLI_DECODER_ERROR_FORMAT_PADDING_2: -15,
    BROTLI_DECODER_ERROR_FORMAT_RESERVED: -2,
    BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_ALPHABET: -4,
    BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_SAME: -5,
    BROTLI_DECODER_ERROR_FORMAT_TRANSFORM: -11,
    BROTLI_DECODER_ERROR_FORMAT_WINDOW_BITS: -13,
    BROTLI_DECODER_ERROR_INVALID_ARGUMENTS: -20,
    BROTLI_DECODER_ERROR_UNREACHABLE: -31,
    BROTLI_DECODER_NEEDS_MORE_INPUT: 2,
    BROTLI_DECODER_NEEDS_MORE_OUTPUT: 3,
    BROTLI_DECODER_NO_ERROR: 0,
    BROTLI_DECODER_PARAM_DISABLE_RING_BUFFER_REALLOCATION: 0,
    BROTLI_DECODER_PARAM_LARGE_WINDOW: 1,
    BROTLI_DECODER_RESULT_ERROR: 0,
    BROTLI_DECODER_RESULT_NEEDS_MORE_INPUT: 2,
    BROTLI_DECODER_RESULT_NEEDS_MORE_OUTPUT: 3,
    BROTLI_DECODER_RESULT_SUCCESS: 1,
    BROTLI_DECODER_SUCCESS: 1,
    BROTLI_DEFAULT_MODE: 0,
    BROTLI_DEFAULT_QUALITY: 11,
    BROTLI_DEFAULT_WINDOW: 22,
    BROTLI_ENCODE: 9,
    BROTLI_LARGE_MAX_WINDOW_BITS: 30,
    BROTLI_MAX_INPUT_BLOCK_BITS: 24,
    BROTLI_MAX_QUALITY: 11,
    BROTLI_MAX_WINDOW_BITS: 24,
    BROTLI_MIN_INPUT_BLOCK_BITS: 16,
    BROTLI_MIN_QUALITY: 0,
    BROTLI_MIN_WINDOW_BITS: 10,
    BROTLI_MODE_FONT: 2,
    BROTLI_MODE_GENERIC: 0,
    BROTLI_MODE_TEXT: 1,
    BROTLI_OPERATION_EMIT_METADATA: 3,
    BROTLI_OPERATION_FINISH: 2,
    BROTLI_OPERATION_FLUSH: 1,
    BROTLI_OPERATION_PROCESS: 0,
    BROTLI_PARAM_DISABLE_LITERAL_CONTEXT_MODELING: 4,
    BROTLI_PARAM_LARGE_WINDOW: 6,
    BROTLI_PARAM_LGBLOCK: 3,
    BROTLI_PARAM_LGWIN: 2,
    BROTLI_PARAM_MODE: 0,
    BROTLI_PARAM_NDIRECT: 8,
    BROTLI_PARAM_NPOSTFIX: 7,
    BROTLI_PARAM_QUALITY: 1,
    BROTLI_PARAM_SIZE_HINT: 5,
    COPYFILE_EXCL: 1,
    COPYFILE_FICLONE: 2,
    COPYFILE_FICLONE_FORCE: 4,
    default: {
        ALPN_ENABLED: 1,
        BROTLI_DECODE: 8,
        BROTLI_DECODER_ERROR_ALLOC_BLOCK_TYPE_TREES: -30,
        BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MAP: -25,
        BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MODES: -21,
        BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_1: -26,
        BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_2: -27,
        BROTLI_DECODER_ERROR_ALLOC_TREE_GROUPS: -22,
        BROTLI_DECODER_ERROR_DICTIONARY_NOT_SET: -19,
        BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_1: -9,
        BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_2: -10,
        BROTLI_DECODER_ERROR_FORMAT_CL_SPACE: -6,
        BROTLI_DECODER_ERROR_FORMAT_CONTEXT_MAP_REPEAT: -8,
        BROTLI_DECODER_ERROR_FORMAT_DICTIONARY: -12,
        BROTLI_DECODER_ERROR_FORMAT_DISTANCE: -16,
        BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_META_NIBBLE: -3,
        BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_NIBBLE: -1,
        BROTLI_DECODER_ERROR_FORMAT_HUFFMAN_SPACE: -7,
        BROTLI_DECODER_ERROR_FORMAT_PADDING_1: -14,
        BROTLI_DECODER_ERROR_FORMAT_PADDING_2: -15,
        BROTLI_DECODER_ERROR_FORMAT_RESERVED: -2,
        BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_ALPHABET: -4,
        BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_SAME: -5,
        BROTLI_DECODER_ERROR_FORMAT_TRANSFORM: -11,
        BROTLI_DECODER_ERROR_FORMAT_WINDOW_BITS: -13,
        BROTLI_DECODER_ERROR_INVALID_ARGUMENTS: -20,
        BROTLI_DECODER_ERROR_UNREACHABLE: -31,
        BROTLI_DECODER_NEEDS_MORE_INPUT: 2,
        BROTLI_DECODER_NEEDS_MORE_OUTPUT: 3,
        BROTLI_DECODER_NO_ERROR: 0,
        BROTLI_DECODER_PARAM_DISABLE_RING_BUFFER_REALLOCATION: 0,
        BROTLI_DECODER_PARAM_LARGE_WINDOW: 1,
        BROTLI_DECODER_RESULT_ERROR: 0,
        BROTLI_DECODER_RESULT_NEEDS_MORE_INPUT: 2,
        BROTLI_DECODER_RESULT_NEEDS_MORE_OUTPUT: 3,
        BROTLI_DECODER_RESULT_SUCCESS: 1,
        BROTLI_DECODER_SUCCESS: 1,
        BROTLI_DEFAULT_MODE: 0,
        BROTLI_DEFAULT_QUALITY: 11,
        BROTLI_DEFAULT_WINDOW: 22,
        BROTLI_ENCODE: 9,
        BROTLI_LARGE_MAX_WINDOW_BITS: 30,
        BROTLI_MAX_INPUT_BLOCK_BITS: 24,
        BROTLI_MAX_QUALITY: 11,
        BROTLI_MAX_WINDOW_BITS: 24,
        BROTLI_MIN_INPUT_BLOCK_BITS: 16,
        BROTLI_MIN_QUALITY: 0,
        BROTLI_MIN_WINDOW_BITS: 10,
        BROTLI_MODE_FONT: 2,
        BROTLI_MODE_GENERIC: 0,
        BROTLI_MODE_TEXT: 1,
        BROTLI_OPERATION_EMIT_METADATA: 3,
        BROTLI_OPERATION_FINISH: 2,
        BROTLI_OPERATION_FLUSH: 1,
        BROTLI_OPERATION_PROCESS: 0,
        BROTLI_PARAM_DISABLE_LITERAL_CONTEXT_MODELING: 4,
        BROTLI_PARAM_LARGE_WINDOW: 6,
        BROTLI_PARAM_LGBLOCK: 3,
        BROTLI_PARAM_LGWIN: 2,
        BROTLI_PARAM_MODE: 0,
        BROTLI_PARAM_NDIRECT: 8,
        BROTLI_PARAM_NPOSTFIX: 7,
        BROTLI_PARAM_QUALITY: 1,
        BROTLI_PARAM_SIZE_HINT: 5,
        COPYFILE_EXCL: 1,
        COPYFILE_FICLONE: 2,
        COPYFILE_FICLONE_FORCE: 4,
        defaultCoreCipherList: "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA2…",
        DEFLATE: 1,
        DEFLATERAW: 5,
        DH_CHECK_P_NOT_PRIME: 1,
        DH_CHECK_P_NOT_SAFE_PRIME: 2,
        DH_NOT_SUITABLE_GENERATOR: 8,
        DH_UNABLE_TO_CHECK_GENERATOR: 4,
        E2BIG: 7,
        EACCES: 13,
        EADDRINUSE: 98,
        EADDRNOTAVAIL: 99,
        EAFNOSUPPORT: 97,
        EAGAIN: 11,
        EALREADY: 114,
        EBADF: 9,
        EBADMSG: 74,
        EBUSY: 16,
        ECANCELED: 125,
        ECHILD: 10,
        ECONNABORTED: 103,
        ECONNREFUSED: 111,
        ECONNRESET: 104,
        EDEADLK: 35,
        EDESTADDRREQ: 89,
        EDOM: 33,
        EDQUOT: 122,
        EEXIST: 17,
        EFAULT: 14,
        EFBIG: 27,
        EHOSTUNREACH: 113,
        EIDRM: 43,
        EILSEQ: 84,
        EINPROGRESS: 115,
        EINTR: 4,
        EINVAL: 22,
        EIO: 5,
        EISCONN: 106,
        EISDIR: 21,
        ELOOP: 40,
        EMFILE: 24,
        EMLINK: 31,
        EMSGSIZE: 90,
        EMULTIHOP: 72,
        ENAMETOOLONG: 36,
        ENETDOWN: 100,
        ENETRESET: 102,
        ENETUNREACH: 101,
        ENFILE: 23,
        ENGINE_METHOD_ALL: 65535,
        ENGINE_METHOD_CIPHERS: 64,
        ENGINE_METHOD_DH: 4,
        ENGINE_METHOD_DIGESTS: 128,
        ENGINE_METHOD_DSA: 2,
        ENGINE_METHOD_EC: 2048,
        ENGINE_METHOD_NONE: 0,
        ENGINE_METHOD_PKEY_ASN1_METHS: 1024,
        ENGINE_METHOD_PKEY_METHS: 512,
        ENGINE_METHOD_RAND: 8,
        ENGINE_METHOD_RSA: 1,
        ENOBUFS: 105,
        ENODATA: 61,
        ENODEV: 19,
        ENOENT: 2,
        ENOEXEC: 8,
        ENOLCK: 37,
        ENOLINK: 67,
        ENOMEM: 12,
        ENOMSG: 42,
        ENOPROTOOPT: 92,
        ENOSPC: 28,
        ENOSR: 63,
        ENOSTR: 60,
        ENOSYS: 38,
        ENOTCONN: 107,
        ENOTDIR: 20,
        ENOTEMPTY: 39,
        ENOTSOCK: 88,
        ENOTSUP: 95,
        ENOTTY: 25,
        ENXIO: 6,
        EOPNOTSUPP: 95,
        EOVERFLOW: 75,
        EPERM: 1,
        EPIPE: 32,
        EPROTO: 71,
        EPROTONOSUPPORT: 93,
        EPROTOTYPE: 91,
        ERANGE: 34,
        EROFS: 30,
        ESPIPE: 29,
        ESRCH: 3,
        ESTALE: 116,
        ETIME: 62,
        ETIMEDOUT: 110,
        ETXTBSY: 26,
        EWOULDBLOCK: 11,
        EXDEV: 18,
        F_OK: 0,
        GUNZIP: 4,
        GZIP: 3,
        INFLATE: 2,
        INFLATERAW: 6,
        O_APPEND: 1024,
        O_CREAT: 64,
        O_DIRECT: 16384,
        O_DIRECTORY: 65536,
        O_DSYNC: 4096,
        O_EXCL: 128,
        O_NOATIME: 262144,
        O_NOCTTY: 256,
        O_NOFOLLOW: 131072,
        O_NONBLOCK: 2048,
        O_RDONLY: 0,
        O_RDWR: 2,
        O_SYMLINK: undefined,
        O_SYNC: 1052672,
        O_TRUNC: 512,
        O_WRONLY: 1,
        OPENSSL_VERSION_NUMBER: 269488319,
        POINT_CONVERSION_COMPRESSED: 2,
        POINT_CONVERSION_HYBRID: 6,
        POINT_CONVERSION_UNCOMPRESSED: 4,
        PRIORITY_ABOVE_NORMAL: -7,
        PRIORITY_BELOW_NORMAL: 10,
        PRIORITY_HIGH: -14,
        PRIORITY_HIGHEST: -20,
        PRIORITY_LOW: 19,
        PRIORITY_NORMAL: 0,
        R_OK: 4,
        RSA_NO_PADDING: 3,
        RSA_PKCS1_OAEP_PADDING: 4,
        RSA_PKCS1_PADDING: 1,
        RSA_PKCS1_PSS_PADDING: 6,
        RSA_PSS_SALTLEN_AUTO: -2,
        RSA_PSS_SALTLEN_DIGEST: -1,
        RSA_PSS_SALTLEN_MAX_SIGN: -2,
        RSA_SSLV23_PADDING: 2,
        RSA_X931_PADDING: 5,
        RTLD_DEEPBIND: 8,
        RTLD_GLOBAL: 256,
        RTLD_LAZY: 1,
        RTLD_LOCAL: 0,
        RTLD_NOW: 2,
        S_IFBLK: 24576,
        S_IFCHR: 8192,
        S_IFDIR: 16384,
        S_IFIFO: 4096,
        S_IFLNK: 40960,
        S_IFMT: 61440,
        S_IFREG: 32768,
        S_IFSOCK: 49152,
        S_IRGRP: 32,
        S_IROTH: 4,
        S_IRUSR: 256,
        S_IRWXG: 56,
        S_IRWXO: 7,
        S_IRWXU: 448,
        S_IWGRP: 16,
        S_IWOTH: 2,
        S_IWUSR: 128,
        S_IXGRP: 8,
        S_IXOTH: 1,
        S_IXUSR: 64,
        SIGABRT: 6,
        SIGALRM: 14,
        SIGBUS: 7,
        SIGCHLD: 17,
        SIGCONT: 18,
        SIGFPE: 8,
        SIGHUP: 1,
        SIGILL: 4,
        SIGINT: 2,
        SIGIO: 29,
        SIGIOT: 6,
        SIGKILL: 9,
        SIGPIPE: 13,
        SIGPOLL: 29,
        SIGPROF: 27,
        SIGPWR: 30,
        SIGQUIT: 3,
        SIGSEGV: 11,
        SIGSTKFLT: 16,
        SIGSTOP: 19,
        SIGSYS: 31,
        SIGTERM: 15,
        SIGTRAP: 5,
        SIGTSTP: 20,
        SIGTTIN: 21,
        SIGTTOU: 22,
        SIGUNUSED: 31,
        SIGURG: 23,
        SIGUSR1: 10,
        SIGUSR2: 12,
        SIGVTALRM: 26,
        SIGWINCH: 28,
        SIGXCPU: 24,
        SIGXFSZ: 25,
        SSL_OP_ALL: 2147485780,
        SSL_OP_ALLOW_NO_DHE_KEX: 1024,
        SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: 262144,
        SSL_OP_CIPHER_SERVER_PREFERENCE: 4194304,
        SSL_OP_CISCO_ANYCONNECT: 32768,
        SSL_OP_COOKIE_EXCHANGE: 8192,
        SSL_OP_CRYPTOPRO_TLSEXT_BUG: 2147483648,
        SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: 2048,
        SSL_OP_EPHEMERAL_RSA: 0,
        SSL_OP_LEGACY_SERVER_CONNECT: 4,
        SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER: 0,
        SSL_OP_MICROSOFT_SESS_ID_BUG: 0,
        SSL_OP_MSIE_SSLV2_RSA_PADDING: 0,
        SSL_OP_NETSCAPE_CA_DN_BUG: 0,
        SSL_OP_NETSCAPE_CHALLENGE_BUG: 0,
        SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG: 0,
        SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG: 0,
        SSL_OP_NO_COMPRESSION: 131072,
        SSL_OP_NO_ENCRYPT_THEN_MAC: 524288,
        SSL_OP_NO_QUERY_MTU: 4096,
        SSL_OP_NO_RENEGOTIATION: 1073741824,
        SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: 65536,
        SSL_OP_NO_SSLv2: 0,
        SSL_OP_NO_SSLv3: 33554432,
        SSL_OP_NO_TICKET: 16384,
        SSL_OP_NO_TLSv1: 67108864,
        SSL_OP_NO_TLSv1_1: 268435456,
        SSL_OP_NO_TLSv1_2: 134217728,
        SSL_OP_NO_TLSv1_3: 536870912,
        SSL_OP_PKCS1_CHECK_1: 0,
        SSL_OP_PKCS1_CHECK_2: 0,
        SSL_OP_PRIORITIZE_CHACHA: 2097152,
        SSL_OP_SINGLE_DH_USE: 0,
        SSL_OP_SINGLE_ECDH_USE: 0,
        SSL_OP_SSLEAY_080_CLIENT_DH_BUG: 0,
        SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG: 0,
        SSL_OP_TLS_BLOCK_PADDING_BUG: 0,
        SSL_OP_TLS_D5_BUG: 0,
        SSL_OP_TLS_ROLLBACK_BUG: 8388608,
        TLS1_1_VERSION: 770,
        TLS1_2_VERSION: 771,
        TLS1_3_VERSION: 772,
        TLS1_VERSION: 769,
        UNZIP: 7,
        UV_DIRENT_BLOCK: 7,
        UV_DIRENT_CHAR: 6,
        UV_DIRENT_DIR: 2,
        UV_DIRENT_FIFO: 4,
        UV_DIRENT_FILE: 1,
        UV_DIRENT_LINK: 3,
        UV_DIRENT_SOCKET: 5,
        UV_DIRENT_UNKNOWN: 0,
        UV_FS_COPYFILE_EXCL: 1,
        UV_FS_COPYFILE_FICLONE: 2,
        UV_FS_COPYFILE_FICLONE_FORCE: 4,
        UV_FS_O_FILEMAP: 0,
        UV_FS_SYMLINK_DIR: 1,
        UV_FS_SYMLINK_JUNCTION: 2,
        W_OK: 2,
        X_OK: 1,
        Z_BEST_COMPRESSION: 9,
        Z_BEST_SPEED: 1,
        Z_BLOCK: 5,
        Z_BUF_ERROR: -5,
        Z_DATA_ERROR: -3,
        Z_DEFAULT_CHUNK: 16384,
        Z_DEFAULT_COMPRESSION: -1,
        Z_DEFAULT_LEVEL: -1,
        Z_DEFAULT_MEMLEVEL: 8,
        Z_DEFAULT_STRATEGY: 0,
        Z_DEFAULT_WINDOWBITS: 15,
        Z_ERRNO: -1,
        Z_FILTERED: 1,
        Z_FINISH: 4,
        Z_FIXED: 4,
        Z_FULL_FLUSH: 3,
        Z_HUFFMAN_ONLY: 2,
        Z_MAX_CHUNK: Infinity,
        Z_MAX_LEVEL: 9,
        Z_MAX_MEMLEVEL: 9,
        Z_MAX_WINDOWBITS: 15,
        Z_MEM_ERROR: -4,
        Z_MIN_CHUNK: 64,
        Z_MIN_LEVEL: -1,
        Z_MIN_MEMLEVEL: 1,
        Z_MIN_WINDOWBITS: 8,
        Z_NEED_DICT: 2,
        Z_NO_COMPRESSION: 0,
        Z_NO_FLUSH: 0,
        Z_OK: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_RLE: 3,
        Z_STREAM_END: 1,
        Z_STREAM_ERROR: -2,
        Z_SYNC_FLUSH: 2,
        Z_VERSION_ERROR: -6,
        ZLIB_VERNUM: 4784,
        ZSTD_btlazy2: 6,
        ZSTD_btopt: 7,
        ZSTD_btultra: 8,
        ZSTD_btultra2: 9,
        ZSTD_c_chainLog: 103,
        ZSTD_c_checksumFlag: 201,
        ZSTD_c_compressionLevel: 100,
        ZSTD_c_contentSizeFlag: 200,
        ZSTD_c_dictIDFlag: 202,
        ZSTD_c_enableLongDistanceMatching: 160,
        ZSTD_c_hashLog: 102,
        ZSTD_c_jobSize: 241,
        ZSTD_c_ldmBucketSizeLog: 163,
        ZSTD_c_ldmHashLog: 161,
        ZSTD_c_ldmHashRateLog: 164,
        ZSTD_c_ldmMinMatch: 162,
        ZSTD_c_minMatch: 105,
        ZSTD_c_nbWorkers: 240,
        ZSTD_c_overlapLog: 242,
        ZSTD_c_searchLog: 104,
        ZSTD_c_strategy: 107,
        ZSTD_c_targetLength: 106,
        ZSTD_c_windowLog: 101,
        ZSTD_COMPRESS: 10,
        ZSTD_d_windowLogMax: 100,
        ZSTD_DECOMPRESS: 11,
        ZSTD_dfast: 2,
        ZSTD_e_continue: 0,
        ZSTD_e_end: 2,
        ZSTD_e_flush: 1,
        ZSTD_fast: 1,
        ZSTD_greedy: 3,
        ZSTD_lazy: 4,
        ZSTD_lazy2: 5
    },
    defaultCoreCipherList: "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA2…",
    DEFLATE: 1,
    DEFLATERAW: 5,
    DH_CHECK_P_NOT_PRIME: 1,
    DH_CHECK_P_NOT_SAFE_PRIME: 2,
    DH_NOT_SUITABLE_GENERATOR: 8,
    DH_UNABLE_TO_CHECK_GENERATOR: 4,
    E2BIG: 7,
    EACCES: 13,
    EADDRINUSE: 98,
    EADDRNOTAVAIL: 99,
    EAFNOSUPPORT: 97,
    EAGAIN: 11,
    EALREADY: 114,
    EBADF: 9,
    EBADMSG: 74,
    EBUSY: 16,
    ECANCELED: 125,
    ECHILD: 10,
    ECONNABORTED: 103,
    ECONNREFUSED: 111,
    ECONNRESET: 104,
    EDEADLK: 35,
    EDESTADDRREQ: 89,
    EDOM: 33,
    EDQUOT: 122,
    EEXIST: 17,
    EFAULT: 14,
    EFBIG: 27,
    EHOSTUNREACH: 113,
    EIDRM: 43,
    EILSEQ: 84,
    EINPROGRESS: 115,
    EINTR: 4,
    EINVAL: 22,
    EIO: 5,
    EISCONN: 106,
    EISDIR: 21,
    ELOOP: 40,
    EMFILE: 24,
    EMLINK: 31,
    EMSGSIZE: 90,
    EMULTIHOP: 72,
    ENAMETOOLONG: 36,
    ENETDOWN: 100,
    ENETRESET: 102,
    ENETUNREACH: 101,
    ENFILE: 23,
    ENGINE_METHOD_ALL: 65535,
    ENGINE_METHOD_CIPHERS: 64,
    ENGINE_METHOD_DH: 4,
    ENGINE_METHOD_DIGESTS: 128,
    ENGINE_METHOD_DSA: 2,
    ENGINE_METHOD_EC: 2048,
    ENGINE_METHOD_NONE: 0,
    ENGINE_METHOD_PKEY_ASN1_METHS: 1024,
    ENGINE_METHOD_PKEY_METHS: 512,
    ENGINE_METHOD_RAND: 8,
    ENGINE_METHOD_RSA: 1,
    ENOBUFS: 105,
    ENODATA: 61,
    ENODEV: 19,
    ENOENT: 2,
    ENOEXEC: 8,
    ENOLCK: 37,
    ENOLINK: 67,
    ENOMEM: 12,
    ENOMSG: 42,
    ENOPROTOOPT: 92,
    ENOSPC: 28,
    ENOSR: 63,
    ENOSTR: 60,
    ENOSYS: 38,
    ENOTCONN: 107,
    ENOTDIR: 20,
    ENOTEMPTY: 39,
    ENOTSOCK: 88,
    ENOTSUP: 95,
    ENOTTY: 25,
    ENXIO: 6,
    EOPNOTSUPP: 95,
    EOVERFLOW: 75,
    EPERM: 1,
    EPIPE: 32,
    EPROTO: 71,
    EPROTONOSUPPORT: 93,
    EPROTOTYPE: 91,
    ERANGE: 34,
    EROFS: 30,
    ESPIPE: 29,
    ESRCH: 3,
    ESTALE: 116,
    ETIME: 62,
    ETIMEDOUT: 110,
    ETXTBSY: 26,
    EWOULDBLOCK: 11,
    EXDEV: 18,
    F_OK: 0,
    GUNZIP: 4,
    GZIP: 3,
    INFLATE: 2,
    INFLATERAW: 6,
    O_APPEND: 1024,
    O_CREAT: 64,
    O_DIRECTORY: 65536,
    O_DSYNC: 4096,
    O_EXCL: 128,
    O_NOCTTY: 256,
    O_NOFOLLOW: 131072,
    O_NONBLOCK: 2048,
    O_RDONLY: 0,
    O_RDWR: 2,
    O_SYMLINK: undefined,
    O_SYNC: 1052672,
    O_TRUNC: 512,
    O_WRONLY: 1,
    OPENSSL_VERSION_NUMBER: 269488319,
    POINT_CONVERSION_COMPRESSED: 2,
    POINT_CONVERSION_HYBRID: 6,
    POINT_CONVERSION_UNCOMPRESSED: 4,
    PRIORITY_ABOVE_NORMAL: -7,
    PRIORITY_BELOW_NORMAL: 10,
    PRIORITY_HIGH: -14,
    PRIORITY_HIGHEST: -20,
    PRIORITY_LOW: 19,
    PRIORITY_NORMAL: 0,
    R_OK: 4,
    RSA_NO_PADDING: 3,
    RSA_PKCS1_OAEP_PADDING: 4,
    RSA_PKCS1_PADDING: 1,
    RSA_PKCS1_PSS_PADDING: 6,
    RSA_PSS_SALTLEN_AUTO: -2,
    RSA_PSS_SALTLEN_DIGEST: -1,
    RSA_PSS_SALTLEN_MAX_SIGN: -2,
    RSA_SSLV23_PADDING: 2,
    RSA_X931_PADDING: 5,
    RTLD_DEEPBIND: 8,
    RTLD_GLOBAL: 256,
    RTLD_LAZY: 1,
    RTLD_LOCAL: 0,
    RTLD_NOW: 2,
    S_IFBLK: 24576,
    S_IFCHR: 8192,
    S_IFDIR: 16384,
    S_IFIFO: 4096,
    S_IFLNK: 40960,
    S_IFMT: 61440,
    S_IFREG: 32768,
    S_IFSOCK: 49152,
    S_IRGRP: 32,
    S_IROTH: 4,
    S_IRUSR: 256,
    S_IRWXG: 56,
    S_IRWXO: 7,
    S_IRWXU: 448,
    S_IWGRP: 16,
    S_IWOTH: 2,
    S_IWUSR: 128,
    S_IXGRP: 8,
    S_IXOTH: 1,
    S_IXUSR: 64,
    SIGABRT: 6,
    SIGALRM: 14,
    SIGBUS: 7,
    SIGCHLD: 17,
    SIGCONT: 18,
    SIGFPE: 8,
    SIGHUP: 1,
    SIGILL: 4,
    SIGINT: 2,
    SIGIO: 29,
    SIGIOT: 6,
    SIGKILL: 9,
    SIGPIPE: 13,
    SIGPOLL: 29,
    SIGPROF: 27,
    SIGPWR: 30,
    SIGQUIT: 3,
    SIGSEGV: 11,
    SIGSTKFLT: 16,
    SIGSTOP: 19,
    SIGSYS: 31,
    SIGTERM: 15,
    SIGTRAP: 5,
    SIGTSTP: 20,
    SIGTTIN: 21,
    SIGTTOU: 22,
    SIGUNUSED: 31,
    SIGURG: 23,
    SIGUSR1: 10,
    SIGUSR2: 12,
    SIGVTALRM: 26,
    SIGWINCH: 28,
    SIGXCPU: 24,
    SIGXFSZ: 25,
    SSL_OP_ALL: 2147485780,
    SSL_OP_ALLOW_NO_DHE_KEX: 1024,
    SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: 262144,
    SSL_OP_CIPHER_SERVER_PREFERENCE: 4194304,
    SSL_OP_CISCO_ANYCONNECT: 32768,
    SSL_OP_COOKIE_EXCHANGE: 8192,
    SSL_OP_CRYPTOPRO_TLSEXT_BUG: 2147483648,
    SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: 2048,
    SSL_OP_EPHEMERAL_RSA: 0,
    SSL_OP_LEGACY_SERVER_CONNECT: 4,
    SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER: 0,
    SSL_OP_MICROSOFT_SESS_ID_BUG: 0,
    SSL_OP_MSIE_SSLV2_RSA_PADDING: 0,
    SSL_OP_NETSCAPE_CA_DN_BUG: 0,
    SSL_OP_NETSCAPE_CHALLENGE_BUG: 0,
    SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG: 0,
    SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG: 0,
    SSL_OP_NO_COMPRESSION: 131072,
    SSL_OP_NO_ENCRYPT_THEN_MAC: 524288,
    SSL_OP_NO_QUERY_MTU: 4096,
    SSL_OP_NO_RENEGOTIATION: 1073741824,
    SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: 65536,
    SSL_OP_NO_SSLv2: 0,
    SSL_OP_NO_SSLv3: 33554432,
    SSL_OP_NO_TICKET: 16384,
    SSL_OP_NO_TLSv1: 67108864,
    SSL_OP_NO_TLSv1_1: 268435456,
    SSL_OP_NO_TLSv1_2: 134217728,
    SSL_OP_NO_TLSv1_3: 536870912,
    SSL_OP_PKCS1_CHECK_1: 0,
    SSL_OP_PKCS1_CHECK_2: 0,
    SSL_OP_PRIORITIZE_CHACHA: 2097152,
    SSL_OP_SINGLE_DH_USE: 0,
    SSL_OP_SINGLE_ECDH_USE: 0,
    SSL_OP_SSLEAY_080_CLIENT_DH_BUG: 0,
    SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG: 0,
    SSL_OP_TLS_BLOCK_PADDING_BUG: 0,
    SSL_OP_TLS_D5_BUG: 0,
    SSL_OP_TLS_ROLLBACK_BUG: 8388608,
    TLS1_1_VERSION: 770,
    TLS1_2_VERSION: 771,
    TLS1_3_VERSION: 772,
    TLS1_VERSION: 769,
    UNZIP: 7,
    UV_DIRENT_BLOCK: 7,
    UV_DIRENT_CHAR: 6,
    UV_DIRENT_DIR: 2,
    UV_DIRENT_FIFO: 4,
    UV_DIRENT_FILE: 1,
    UV_DIRENT_LINK: 3,
    UV_DIRENT_SOCKET: 5,
    UV_DIRENT_UNKNOWN: 0,
    UV_FS_COPYFILE_EXCL: 1,
    UV_FS_COPYFILE_FICLONE: 2,
    UV_FS_COPYFILE_FICLONE_FORCE: 4,
    UV_FS_O_FILEMAP: 0,
    UV_FS_SYMLINK_DIR: 1,
    UV_FS_SYMLINK_JUNCTION: 2,
    W_OK: 2,
    X_OK: 1,
    Z_BEST_COMPRESSION: 9,
    Z_BEST_SPEED: 1,
    Z_BLOCK: 5,
    Z_BUF_ERROR: -5,
    Z_DATA_ERROR: -3,
    Z_DEFAULT_CHUNK: 16384,
    Z_DEFAULT_COMPRESSION: -1,
    Z_DEFAULT_LEVEL: -1,
    Z_DEFAULT_MEMLEVEL: 8,
    Z_DEFAULT_STRATEGY: 0,
    Z_DEFAULT_WINDOWBITS: 15,
    Z_ERRNO: -1,
    Z_FILTERED: 1,
    Z_FINISH: 4,
    Z_FIXED: 4,
    Z_FULL_FLUSH: 3,
    Z_HUFFMAN_ONLY: 2,
    Z_MAX_CHUNK: Infinity,
    Z_MAX_LEVEL: 9,
    Z_MAX_MEMLEVEL: 9,
    Z_MAX_WINDOWBITS: 15,
    Z_MEM_ERROR: -4,
    Z_MIN_CHUNK: 64,
    Z_MIN_LEVEL: -1,
    Z_MIN_MEMLEVEL: 1,
    Z_MIN_WINDOWBITS: 8,
    Z_NEED_DICT: 2,
    Z_NO_COMPRESSION: 0,
    Z_NO_FLUSH: 0,
    Z_OK: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_RLE: 3,
    Z_STREAM_END: 1,
    Z_STREAM_ERROR: -2,
    Z_SYNC_FLUSH: 2,
    Z_VERSION_ERROR: -6,
    ZLIB_VERNUM: 4784
}
```

</td>
    </tr>
  </table>
</details>

<details id="crypto">
  <summary><code>crypto</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    argon2: <ref *2> ƒ argon2(length: 3) {},
    argon2Sync: <ref *3> ƒ argon2Sync(length: 2) {},
    Certificate: <ref *4> ƒ Certificate(length: 0) {
        exportChallenge: ƒ exportChallenge(length: 2) {},
        exportPublicKey: ƒ exportPublicKey(length: 2) {},
        verifySpkac: ƒ verifySpkac(length: 2) {}
    },
    checkPrime: <ref *8> ƒ checkPrime(length: 1) {},
    checkPrimeSync: <ref *9> ƒ checkPrimeSync(length: 1) {},
    Cipheriv: <ref *10> ƒ Cipheriv(length: 4) {},
    constants: <ref *11> [Object: null prototype] {
        [get/set] defaultCipherList: "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA2…",
        defaultCoreCipherList: "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA2…",
        DH_CHECK_P_NOT_PRIME: 1,
        DH_CHECK_P_NOT_SAFE_PRIME: 2,
        DH_NOT_SUITABLE_GENERATOR: 8,
        DH_UNABLE_TO_CHECK_GENERATOR: 4,
        OPENSSL_VERSION_NUMBER: 1074790400,
        POINT_CONVERSION_COMPRESSED: 2,
        POINT_CONVERSION_HYBRID: 6,
        POINT_CONVERSION_UNCOMPRESSED: 4,
        RSA_NO_PADDING: 3,
        RSA_PKCS1_OAEP_PADDING: 4,
        RSA_PKCS1_PADDING: 1,
        RSA_PKCS1_PSS_PADDING: 6,
        RSA_PSS_SALTLEN_AUTO: -2,
        RSA_PSS_SALTLEN_DIGEST: -1,
        RSA_PSS_SALTLEN_MAX_SIGN: -2,
        RSA_SSLV23_PADDING: 2,
        RSA_X931_PADDING: 5,
        SSL_OP_ALL: 2147485760,
        SSL_OP_ALLOW_NO_DHE_KEX: 1024,
        SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: 262144,
        SSL_OP_CIPHER_SERVER_PREFERENCE: 4194304,
        SSL_OP_CISCO_ANYCONNECT: 32768,
        SSL_OP_COOKIE_EXCHANGE: 8192,
        SSL_OP_CRYPTOPRO_TLSEXT_BUG: 2147483648,
        SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: 2048,
        SSL_OP_LEGACY_SERVER_CONNECT: 4,
        SSL_OP_NO_COMPRESSION: 131072,
        SSL_OP_NO_ENCRYPT_THEN_MAC: 524288,
        SSL_OP_NO_QUERY_MTU: 4096,
        SSL_OP_NO_RENEGOTIATION: 1073741824,
        SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: 65536,
        SSL_OP_NO_SSLv2: 0,
        SSL_OP_NO_SSLv3: 33554432,
        SSL_OP_NO_TICKET: 16384,
        SSL_OP_NO_TLSv1: 67108864,
        SSL_OP_NO_TLSv1_1: 268435456,
        SSL_OP_NO_TLSv1_2: 134217728,
        SSL_OP_NO_TLSv1_3: 536870912,
        SSL_OP_PRIORITIZE_CHACHA: 2097152,
        SSL_OP_TLS_ROLLBACK_BUG: 8388608,
        TLS1_1_VERSION: 770,
        TLS1_2_VERSION: 771,
        TLS1_3_VERSION: 772,
        TLS1_VERSION: 769
    },
    createCipheriv: <ref *12> ƒ createCipheriv(length: 4) {},
    createDecipheriv: <ref *13> ƒ createDecipheriv(length: 4) {},
    createDiffieHellman: <ref *14> ƒ createDiffieHellman(length: 4) {},
    createDiffieHellmanGroup: <ref *15> ƒ createDiffieHellmanGroup(length: 1) {},
    createECDH: <ref *16> ƒ createECDH(length: 1) {},
    createHash: <ref *17> ƒ createHash(length: 2) {},
    createHmac: <ref *18> ƒ createHmac(length: 3) {},
    createMac: <ref *19> ƒ createMac(length: 3) {},
    createPrivateKey: <ref *20> ƒ createPrivateKey(length: 1) {},
    createPublicKey: <ref *21> ƒ createPublicKey(length: 1) {},
    createSecretKey: <ref *22> ƒ createSecretKey(length: 2) {},
    createSign: <ref *23> ƒ createSign(length: 2) {},
    createVerify: <ref *24> ƒ createVerify(length: 2) {},
    decapsulate: <ref *25> ƒ decapsulate(length: 3) {},
    Decipheriv: <ref *26> ƒ Decipheriv(length: 4) {},
    default: {
        argon2: [Circular: *2],
        argon2Sync: [Circular: *3],
        Certificate: [Circular: *4],
        checkPrime: [Circular: *8],
        checkPrimeSync: [Circular: *9],
        Cipheriv: [Circular: *10],
        constants: [Circular: *11],
        createCipheriv: [Circular: *12],
        createDecipheriv: [Circular: *13],
        createDiffieHellman: [Circular: *14],
        createDiffieHellmanGroup: [Circular: *15],
        createECDH: [Circular: *16],
        createHash: [Circular: *17],
        createHmac: [Circular: *18],
        createMac: [Circular: *19],
        createPrivateKey: [Circular: *20],
        createPublicKey: [Circular: *21],
        createSecretKey: [Circular: *22],
        createSign: [Circular: *23],
        createVerify: [Circular: *24],
        decapsulate: [Circular: *25],
        Decipheriv: [Circular: *26],
        diffieHellman: <ref *28> ƒ diffieHellman(length: 2) {},
        DiffieHellman: <ref *29> ƒ DiffieHellman(length: 4) {},
        DiffieHellmanGroup: <ref *30> ƒ DiffieHellmanGroup(length: 1) {},
        ECDH: <ref *31> ƒ ECDH(length: 1) {
            convertKey: ƒ convertKey(length: 5) {}
        },
        encapsulate: <ref *33> ƒ encapsulate(length: 2) {},
        generateKey: <ref *34> ƒ generateKey(length: 3) {},
        generateKeyPair: <ref *35> ƒ generateKeyPair(length: 3) {},
        generateKeyPairSync: <ref *36> ƒ generateKeyPairSync(length: 2) {},
        generateKeySync: <ref *37> ƒ generateKeySync(length: 2) {},
        generatePrime: <ref *38> ƒ generatePrime(length: 3) {},
        generatePrimeSync: <ref *39> ƒ generatePrimeSync(length: 1) {},
        generateX509Certificate: <ref *40> ƒ generateX509Certificate(length: 2) {},
        generateX509CertificateSync: <ref *41> ƒ generateX509CertificateSync(length: 1) {},
        getCipherInfo: <ref *42> ƒ getCipherInfo(length: 1) {},
        getCiphers: <ref *43> ƒ (length: 0) {},
        getCurves: <ref *44> ƒ (length: 0) {},
        getDiffieHellman: [Circular: *15],
        getFips: <ref *45> ƒ getFips(length: 0) {},
        getHashes: <ref *46> ƒ (length: 0) {},
        getMacs: <ref *47> ƒ (length: 0) {},
        [get] getRandomValues: <ref *48> ƒ getRandomValues(length: 1) {},
        hash: <ref *49> ƒ hash(length: 3) {},
        Hash: <ref *50> ƒ deprecated(length: 2) {},
        hkdf: <ref *51> ƒ hkdf(length: 6) {},
        hkdfSync: <ref *52> ƒ hkdfSync(length: 5) {},
        Hmac: <ref *53> ƒ deprecated(length: 3) {},
        KeyObject: <ref *54> class KeyObject extends NativeKeyObject {},
        parsePKCS12: <ref *55> ƒ parsePKCS12(length: 1) {},
        pbkdf2: <ref *56> ƒ pbkdf2(length: 6) {},
        pbkdf2Sync: <ref *57> ƒ pbkdf2Sync(length: 5) {},
        privateDecrypt: <ref *58> ƒ (length: 2) {},
        privateEncrypt: <ref *59> ƒ (length: 2) {},
        publicDecrypt: <ref *60> ƒ (length: 2) {},
        publicEncrypt: <ref *61> ƒ (length: 2) {},
        randomBytes: <ref *62> ƒ randomBytes(length: 2) {},
        randomFill: <ref *63> ƒ randomFill(length: 4) {},
        randomFillSync: <ref *64> ƒ randomFillSync(length: 1) {},
        randomInt: <ref *65> ƒ randomInt(length: 3) {},
        randomUUID: <ref *66> ƒ randomUUID(length: 1) {},
        randomUUIDv7: <ref *67> ƒ randomUUIDv7(length: 1) {},
        scrypt: <ref *68> ƒ scrypt(length: 4) {},
        scryptSync: <ref *69> ƒ scryptSync(length: 3) {},
        secureHeapUsed: <ref *70> ƒ secureHeapUsed(length: 0) {},
        setFips: <ref *71> ƒ setFips(length: 1) {},
        sign: <ref *72> ƒ signOneShot(length: 4) {},
        Sign: <ref *73> ƒ Sign(length: 2) {},
        [get] subtle: <ref *74> SubtleCrypto {},
        timingSafeEqual: <ref *75> ƒ (length: 0) {},
        verify: <ref *76> ƒ verifyOneShot(length: 5) {},
        Verify: <ref *77> ƒ Verify(length: 2) {},
        [get] webcrypto: <ref *78> Crypto {},
        X509Certificate: <ref *79> class X509Certificate {}
    },
    diffieHellman: [Circular: *28],
    DiffieHellman: [Circular: *29],
    DiffieHellmanGroup: [Circular: *30],
    ECDH: [Circular: *31],
    encapsulate: [Circular: *33],
    generateKey: [Circular: *34],
    generateKeyPair: [Circular: *35],
    generateKeyPairSync: [Circular: *36],
    generateKeySync: [Circular: *37],
    generatePrime: [Circular: *38],
    generatePrimeSync: [Circular: *39],
    generateX509Certificate: [Circular: *40],
    generateX509CertificateSync: [Circular: *41],
    getCipherInfo: [Circular: *42],
    getCiphers: [Circular: *43],
    getCurves: [Circular: *44],
    getDiffieHellman: [Circular: *15],
    getFips: [Circular: *45],
    getHashes: [Circular: *46],
    getMacs: [Circular: *47],
    getRandomValues: [Circular: *48],
    hash: [Circular: *49],
    Hash: [Circular: *50],
    hkdf: [Circular: *51],
    hkdfSync: [Circular: *52],
    Hmac: [Circular: *53],
    KeyObject: [Circular: *54],
    parsePKCS12: [Circular: *55],
    pbkdf2: [Circular: *56],
    pbkdf2Sync: [Circular: *57],
    privateDecrypt: [Circular: *58],
    privateEncrypt: [Circular: *59],
    publicDecrypt: [Circular: *60],
    publicEncrypt: [Circular: *61],
    randomBytes: [Circular: *62],
    randomFill: [Circular: *63],
    randomFillSync: [Circular: *64],
    randomInt: [Circular: *65],
    randomUUID: [Circular: *66],
    randomUUIDv7: [Circular: *67],
    scrypt: [Circular: *68],
    scryptSync: [Circular: *69],
    secureHeapUsed: [Circular: *70],
    setFips: [Circular: *71],
    sign: [Circular: *72],
    Sign: [Circular: *73],
    subtle: [Circular: *74],
    timingSafeEqual: [Circular: *75],
    verify: [Circular: *76],
    Verify: [Circular: *77],
    webcrypto: [Circular: *78],
    X509Certificate: [Circular: *79]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    Certificate: <ref *2> ƒ Certificate(length: 0) {
        exportChallenge: ƒ exportChallenge(length: 2) {},
        exportPublicKey: ƒ exportPublicKey(length: 2) {},
        verifySpkac: ƒ verifySpkac(length: 2) {}
    },
    checkPrime: <ref *6> ƒ checkPrime(length: 1) {},
    checkPrimeSync: <ref *7> ƒ checkPrimeSync(length: 1) {},
    Cipheriv: <ref *8> ƒ Cipheriv(length: 4) {},
    constants: <ref *9> {
        ALPN_ENABLED: 1,
        defaultCoreCipherList: "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA2…",
        DH_CHECK_P_NOT_PRIME: 1,
        DH_CHECK_P_NOT_SAFE_PRIME: 2,
        DH_NOT_SUITABLE_GENERATOR: 8,
        DH_UNABLE_TO_CHECK_GENERATOR: 4,
        ENGINE_METHOD_ALL: 65535,
        ENGINE_METHOD_CIPHERS: 64,
        ENGINE_METHOD_DH: 4,
        ENGINE_METHOD_DIGESTS: 128,
        ENGINE_METHOD_DSA: 2,
        ENGINE_METHOD_EC: 2048,
        ENGINE_METHOD_NONE: 0,
        ENGINE_METHOD_PKEY_ASN1_METHS: 1024,
        ENGINE_METHOD_PKEY_METHS: 512,
        ENGINE_METHOD_RAND: 8,
        ENGINE_METHOD_RSA: 1,
        OPENSSL_VERSION_NUMBER: 269488319,
        POINT_CONVERSION_COMPRESSED: 2,
        POINT_CONVERSION_HYBRID: 6,
        POINT_CONVERSION_UNCOMPRESSED: 4,
        RSA_NO_PADDING: 3,
        RSA_PKCS1_OAEP_PADDING: 4,
        RSA_PKCS1_PADDING: 1,
        RSA_PKCS1_PSS_PADDING: 6,
        RSA_PSS_SALTLEN_AUTO: -2,
        RSA_PSS_SALTLEN_DIGEST: -1,
        RSA_PSS_SALTLEN_MAX_SIGN: -2,
        RSA_SSLV23_PADDING: 2,
        RSA_X931_PADDING: 5,
        SSL_OP_ALL: 2147485780,
        SSL_OP_ALLOW_NO_DHE_KEX: 1024,
        SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: 262144,
        SSL_OP_CIPHER_SERVER_PREFERENCE: 4194304,
        SSL_OP_CISCO_ANYCONNECT: 32768,
        SSL_OP_COOKIE_EXCHANGE: 8192,
        SSL_OP_CRYPTOPRO_TLSEXT_BUG: 2147483648,
        SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: 2048,
        SSL_OP_EPHEMERAL_RSA: 0,
        SSL_OP_LEGACY_SERVER_CONNECT: 4,
        SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER: 0,
        SSL_OP_MICROSOFT_SESS_ID_BUG: 0,
        SSL_OP_MSIE_SSLV2_RSA_PADDING: 0,
        SSL_OP_NETSCAPE_CA_DN_BUG: 0,
        SSL_OP_NETSCAPE_CHALLENGE_BUG: 0,
        SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG: 0,
        SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG: 0,
        SSL_OP_NO_COMPRESSION: 131072,
        SSL_OP_NO_ENCRYPT_THEN_MAC: 524288,
        SSL_OP_NO_QUERY_MTU: 4096,
        SSL_OP_NO_RENEGOTIATION: 1073741824,
        SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: 65536,
        SSL_OP_NO_SSLv2: 0,
        SSL_OP_NO_SSLv3: 33554432,
        SSL_OP_NO_TICKET: 16384,
        SSL_OP_NO_TLSv1: 67108864,
        SSL_OP_NO_TLSv1_1: 268435456,
        SSL_OP_NO_TLSv1_2: 134217728,
        SSL_OP_NO_TLSv1_3: 536870912,
        SSL_OP_PKCS1_CHECK_1: 0,
        SSL_OP_PKCS1_CHECK_2: 0,
        SSL_OP_PRIORITIZE_CHACHA: 2097152,
        SSL_OP_SINGLE_DH_USE: 0,
        SSL_OP_SINGLE_ECDH_USE: 0,
        SSL_OP_SSLEAY_080_CLIENT_DH_BUG: 0,
        SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG: 0,
        SSL_OP_TLS_BLOCK_PADDING_BUG: 0,
        SSL_OP_TLS_D5_BUG: 0,
        SSL_OP_TLS_ROLLBACK_BUG: 8388608,
        TLS1_1_VERSION: 770,
        TLS1_2_VERSION: 771,
        TLS1_3_VERSION: 772,
        TLS1_VERSION: 769
    },
    createCipheriv: <ref *10> ƒ createCipheriv(length: 4) {},
    createDecipheriv: <ref *11> ƒ createDecipheriv(length: 4) {},
    createDiffieHellman: <ref *12> ƒ createDiffieHellman(length: 4) {},
    createDiffieHellmanGroup: <ref *13> ƒ createDiffieHellmanGroup(length: 1) {},
    createECDH: <ref *14> ƒ createECDH(length: 1) {},
    createHash: <ref *15> ƒ createHash(length: 2) {},
    createHmac: <ref *16> ƒ createHmac(length: 3) {},
    createPrivateKey: <ref *17> ƒ createPrivateKey(length: 1) {},
    createPublicKey: <ref *18> ƒ createPublicKey(length: 1) {},
    createSecretKey: <ref *19> ƒ createSecretKey(length: 2) {},
    createSign: <ref *20> ƒ createSign(length: 2) {},
    createVerify: <ref *21> ƒ createVerify(length: 2) {},
    Decipheriv: <ref *22> ƒ Decipheriv(length: 4) {},
    default: {
        Certificate: [Circular: *2],
        checkPrime: [Circular: *6],
        checkPrimeSync: [Circular: *7],
        Cipheriv: [Circular: *8],
        constants: [Circular: *9],
        createCipheriv: [Circular: *10],
        createDecipheriv: [Circular: *11],
        createDiffieHellman: [Circular: *12],
        createDiffieHellmanGroup: [Circular: *13],
        createECDH: [Circular: *14],
        createHash: [Circular: *15],
        createHmac: [Circular: *16],
        createPrivateKey: [Circular: *17],
        createPublicKey: [Circular: *18],
        createSecretKey: [Circular: *19],
        createSign: [Circular: *20],
        createVerify: [Circular: *21],
        Decipheriv: [Circular: *22],
        diffieHellman: <ref *24> ƒ diffieHellman(length: 2) {},
        DiffieHellman: <ref *25> ƒ DiffieHellman(length: 4) {},
        DiffieHellmanGroup: <ref *26> ƒ DiffieHellmanGroup(length: 1) {},
        ECDH: <ref *27> ƒ ECDH(length: 1) {
            convertKey: ƒ convertKey(length: 5) {}
        },
        generateKey: <ref *29> ƒ generateKey(length: 3) {},
        generateKeyPair: <ref *30> ƒ generateKeyPair(length: 3) {},
        generateKeyPairSync: <ref *31> ƒ generateKeyPairSync(length: 2) {},
        generateKeySync: <ref *32> ƒ generateKeySync(length: 2) {},
        generatePrime: <ref *33> ƒ generatePrime(length: 1) {},
        generatePrimeSync: <ref *34> ƒ generatePrimeSync(length: 1) {},
        getCipherInfo: <ref *35> ƒ getCipherInfo(length: 2) {},
        getCiphers: <ref *36> ƒ getCiphers(length: 0) {},
        getCurves: <ref *37> ƒ getCurves(length: 0) {},
        getDiffieHellman: [Circular: *13],
        getFips: <ref *38> ƒ getFipsCrypto(length: 0) {},
        getHashes: <ref *39> ƒ getHashes(length: 0) {},
        getRandomValues: <ref *40> ƒ getRandomValues(length: 1) {},
        hash: <ref *41> ƒ hash(length: 2) {},
        Hash: <ref *42> ƒ deprecated(length: 2) {},
        hkdf: <ref *43> ƒ hkdf(length: 6) {},
        hkdfSync: <ref *44> ƒ hkdfSync(length: 5) {},
        Hmac: <ref *45> ƒ deprecated(length: 3) {},
        KeyObject: <ref *46> class KeyObject {},
        pbkdf2: <ref *47> ƒ pbkdf2(length: 6) {},
        pbkdf2Sync: <ref *48> ƒ pbkdf2Sync(length: 5) {},
        privateDecrypt: <ref *49> ƒ privateDecrypt(length: 2) {},
        privateEncrypt: <ref *50> ƒ privateEncrypt(length: 2) {},
        publicDecrypt: <ref *51> ƒ publicDecrypt(length: 2) {},
        publicEncrypt: <ref *52> ƒ publicEncrypt(length: 2) {},
        randomBytes: <ref *53> ƒ randomBytes(length: 2) {},
        randomFill: <ref *54> ƒ randomFill(length: 4) {},
        randomFillSync: <ref *55> ƒ randomFillSync(length: 1) {},
        randomInt: <ref *56> ƒ randomInt(length: 3) {},
        randomUUID: <ref *57> ƒ randomUUID(length: 1) {},
        scrypt: <ref *58> ƒ scrypt(length: 5) {},
        scryptSync: <ref *59> ƒ scryptSync(length: 4) {},
        secureHeapUsed: <ref *60> ƒ secureHeapUsed(length: 0) {},
        setEngine: <ref *61> ƒ setEngine(length: 2) {},
        setFips: <ref *62> ƒ setFipsCrypto(length: 1) {},
        sign: <ref *63> ƒ signOneShot(length: 4) {},
        Sign: <ref *64> ƒ Sign(length: 2) {},
        subtle: <ref *65> SubtleCrypto {
            Symbol([[webidl.brand]]): Symbol([[webidl.brand]])
        },
        timingSafeEqual: <ref *66> ƒ timingSafeEqual(length: 2) {},
        verify: <ref *67> ƒ verifyOneShot(length: 5) {},
        Verify: <ref *68> ƒ Verify(length: 2) {},
        webcrypto: <ref *69> Crypto {
            Symbol([[webidl.brand]]): Symbol([[webidl.brand]])
        },
        X509Certificate: <ref *70> class X509Certificate {}
    },
    diffieHellman: [Circular: *24],
    DiffieHellman: [Circular: *25],
    DiffieHellmanGroup: [Circular: *26],
    ECDH: [Circular: *27],
    generateKey: [Circular: *29],
    generateKeyPair: [Circular: *30],
    generateKeyPairSync: [Circular: *31],
    generateKeySync: [Circular: *32],
    generatePrime: [Circular: *33],
    generatePrimeSync: [Circular: *34],
    getCipherInfo: [Circular: *35],
    getCiphers: [Circular: *36],
    getCurves: [Circular: *37],
    getDiffieHellman: [Circular: *13],
    getFips: [Circular: *38],
    getHashes: [Circular: *39],
    getRandomValues: [Circular: *40],
    hash: [Circular: *41],
    Hash: [Circular: *42],
    hkdf: [Circular: *43],
    hkdfSync: [Circular: *44],
    Hmac: [Circular: *45],
    KeyObject: [Circular: *46],
    pbkdf2: [Circular: *47],
    pbkdf2Sync: [Circular: *48],
    privateDecrypt: [Circular: *49],
    privateEncrypt: [Circular: *50],
    pseudoRandomBytes: [Circular: *53],
    publicDecrypt: [Circular: *51],
    publicEncrypt: [Circular: *52],
    randomBytes: [Circular: *53],
    randomFill: [Circular: *54],
    randomFillSync: [Circular: *55],
    randomInt: [Circular: *56],
    randomUUID: [Circular: *57],
    scrypt: [Circular: *58],
    scryptSync: [Circular: *59],
    secureHeapUsed: [Circular: *60],
    setEngine: [Circular: *61],
    setFips: [Circular: *62],
    sign: [Circular: *63],
    Sign: [Circular: *64],
    subtle: [Circular: *65],
    timingSafeEqual: [Circular: *66],
    verify: [Circular: *67],
    Verify: [Circular: *68],
    webcrypto: [Circular: *69],
    X509Certificate: [Circular: *70]
}
```

</td>
    </tr>
  </table>
</details>

<details id="dgram">
  <summary><code>dgram</code> — ✅ Identical</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    createSocket: <ref *2> ƒ createSocket(length: 2) {},
    default: {
        createSocket: [Circular: *2],
        Socket: <ref *4> ƒ Socket(length: 2) {}
    },
    Socket: [Circular: *4]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    createSocket: <ref *2> ƒ createSocket(length: 2) {},
    default: {
        createSocket: [Circular: *2],
        Socket: <ref *4> class Socket extends m {}
    },
    Socket: [Circular: *4]
}
```

</td>
    </tr>
  </table>
</details>

<details id="diagnostics_channel">
  <summary><code>diagnostics_channel</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    boundedChannel: <ref *2> ƒ boundedChannel(length: 1) {},
    BoundedChannel: <ref *3> class BoundedChannel {},
    channel: <ref *4> ƒ channel(length: 1) {},
    Channel: <ref *5> class Channel {},
    default: {
        boundedChannel: [Circular: *2],
        BoundedChannel: [Circular: *3],
        channel: [Circular: *4],
        Channel: [Circular: *5],
        hasSubscribers: <ref *7> ƒ hasSubscribers(length: 1) {},
        subscribe: <ref *8> ƒ subscribe(length: 2) {},
        tracingChannel: <ref *9> ƒ tracingChannel(length: 1) {},
        unsubscribe: <ref *10> ƒ unsubscribe(length: 2) {}
    },
    hasSubscribers: [Circular: *7],
    subscribe: [Circular: *8],
    tracingChannel: [Circular: *9],
    unsubscribe: [Circular: *10]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    channel: <ref *2> ƒ channel(length: 1) {},
    Channel: <ref *3> class Channel {},
    default: {
        channel: [Circular: *2],
        Channel: [Circular: *3],
        hasSubscribers: <ref *5> ƒ hasSubscribers(length: 1) {},
        subscribe: <ref *6> ƒ subscribe(length: 2) {},
        tracingChannel: <ref *7> ƒ tracingChannel(length: 1) {},
        unsubscribe: <ref *8> ƒ unsubscribe(length: 2) {}
    },
    hasSubscribers: [Circular: *5],
    subscribe: [Circular: *6],
    tracingChannel: [Circular: *7],
    unsubscribe: [Circular: *8]
}
```

</td>
    </tr>
  </table>
</details>

<details id="dns">
  <summary><code>dns</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    ADDRCONFIG: 32,
    ADDRGETNETWORKPARAMS: "EADDRGETNETWORKPARAMS",
    ALL: 16,
    BADFAMILY: "EBADFAMILY",
    BADFLAGS: "EBADFLAGS",
    BADHINTS: "EBADHINTS",
    BADNAME: "EBADNAME",
    BADQUERY: "EBADQUERY",
    BADRESP: "EBADRESP",
    BADSTR: "EBADSTR",
    CANCELLED: "ECANCELLED",
    CONNREFUSED: "ECONNREFUSED",
    default: {
        ADDRCONFIG: 32,
        ADDRGETNETWORKPARAMS: "EADDRGETNETWORKPARAMS",
        ALL: 16,
        BADFAMILY: "EBADFAMILY",
        BADFLAGS: "EBADFLAGS",
        BADHINTS: "EBADHINTS",
        BADNAME: "EBADNAME",
        BADQUERY: "EBADQUERY",
        BADRESP: "EBADRESP",
        BADSTR: "EBADSTR",
        CANCELLED: "ECANCELLED",
        CONNREFUSED: "ECONNREFUSED",
        DESTRUCTION: "EDESTRUCTION",
        EOF: "EOF",
        FILE: "EFILE",
        FORMERR: "EFORMERR",
        getDefaultResultOrder: <ref *3> ƒ getDefaultResultOrder(length: 0) {},
        getServers: <ref *4> ƒ bound getServers(length: 0) {},
        LOADIPHLPAPI: "ELOADIPHLPAPI",
        lookup: <ref *5> ƒ lookup(length: 3) {},
        lookupService: <ref *6> ƒ lookupService(length: 3) {},
        NODATA: "ENODATA",
        NOMEM: "ENOMEM",
        NONAME: "ENONAME",
        NOTFOUND: "ENOTFOUND",
        NOTIMP: "ENOTIMP",
        NOTINITIALIZED: "ENOTINITIALIZED",
        [get] promises: <ref *7> {
            ADDRGETNETWORKPARAMS: "EADDRGETNETWORKPARAMS",
            BADFAMILY: "EBADFAMILY",
            BADFLAGS: "EBADFLAGS",
            BADHINTS: "EBADHINTS",
            BADNAME: "EBADNAME",
            BADQUERY: "EBADQUERY",
            BADRESP: "EBADRESP",
            BADSTR: "EBADSTR",
            CANCELLED: "ECANCELLED",
            CONNREFUSED: "ECONNREFUSED",
            DESTRUCTION: "EDESTRUCTION",
            EOF: "EOF",
            FILE: "EFILE",
            FORMERR: "EFORMERR",
            getDefaultResultOrder: [Circular: *3],
            getServers: ƒ bound getServers(length: 0) {},
            LOADIPHLPAPI: "ELOADIPHLPAPI",
            lookup: ƒ lookup(length: 2) {},
            lookupService: ƒ lookupService(length: 2) {},
            NODATA: "ENODATA",
            NOMEM: "ENOMEM",
            NONAME: "ENONAME",
            NOTFOUND: "ENOTFOUND",
            NOTIMP: "ENOTIMP",
            NOTINITIALIZED: "ENOTINITIALIZED",
            REFUSED: "EREFUSED",
            resolve: ƒ bound resolve(length: 2) {},
            resolve4: ƒ bound queryA(length: 2) {},
            resolve6: ƒ bound queryAaaa(length: 2) {},
            resolveAny: ƒ bound queryAny(length: 2) {},
            resolveCaa: ƒ bound queryCaa(length: 2) {},
            resolveCname: ƒ bound queryCname(length: 2) {},
            resolveMx: ƒ bound queryMx(length: 2) {},
            resolveNaptr: ƒ bound queryNaptr(length: 2) {},
            resolveNs: ƒ bound queryNs(length: 2) {},
            resolvePtr: ƒ bound queryPtr(length: 2) {},
            Resolver: class Resolver extends ResolverBase {},
            resolveSoa: ƒ bound querySoa(length: 2) {},
            resolveSrv: ƒ bound querySrv(length: 2) {},
            resolveTlsa: ƒ bound queryTlsa(length: 2) {},
            resolveTxt: ƒ bound queryTxt(length: 2) {},
            reverse: ƒ bound getHostByAddr(length: 2) {},
            SERVFAIL: "ESERVFAIL",
            setDefaultResultOrder: <ref *27> ƒ setDefaultResultOrder(length: 1) {},
            setServers: ƒ defaultResolverSetServers(length: 1) {},
            TIMEOUT: "ETIMEOUT"
        },
        REFUSED: "EREFUSED",
        resolve: <ref *29> ƒ bound resolve(length: 3) {},
        resolve4: <ref *30> ƒ bound queryA(length: 2) {},
        resolve6: <ref *31> ƒ bound queryAaaa(length: 2) {},
        resolveAny: <ref *32> ƒ bound queryAny(length: 2) {},
        resolveCaa: <ref *33> ƒ bound queryCaa(length: 2) {},
        resolveCname: <ref *34> ƒ bound queryCname(length: 2) {},
        resolveMx: <ref *35> ƒ bound queryMx(length: 2) {},
        resolveNaptr: <ref *36> ƒ bound queryNaptr(length: 2) {},
        resolveNs: <ref *37> ƒ bound queryNs(length: 2) {},
        resolvePtr: <ref *38> ƒ bound queryPtr(length: 2) {},
        Resolver: <ref *39> class Resolver extends ResolverBase {},
        resolveSoa: <ref *40> ƒ bound querySoa(length: 2) {},
        resolveSrv: <ref *41> ƒ bound querySrv(length: 2) {},
        resolveTlsa: <ref *42> ƒ bound queryTlsa(length: 2) {},
        resolveTxt: <ref *43> ƒ bound queryTxt(length: 2) {},
        reverse: <ref *44> ƒ bound getHostByAddr(length: 2) {},
        SERVFAIL: "ESERVFAIL",
        setDefaultResultOrder: [Circular: *27],
        setServers: <ref *45> ƒ defaultResolverSetServers(length: 1) {},
        TIMEOUT: "ETIMEOUT",
        V4MAPPED: 8
    },
    DESTRUCTION: "EDESTRUCTION",
    EOF: "EOF",
    FILE: "EFILE",
    FORMERR: "EFORMERR",
    getDefaultResultOrder: [Circular: *3],
    getServers: [Circular: *4],
    LOADIPHLPAPI: "ELOADIPHLPAPI",
    lookup: [Circular: *5],
    lookupService: [Circular: *6],
    NODATA: "ENODATA",
    NOMEM: "ENOMEM",
    NONAME: "ENONAME",
    NOTFOUND: "ENOTFOUND",
    NOTIMP: "ENOTIMP",
    NOTINITIALIZED: "ENOTINITIALIZED",
    promises: [Circular: *7],
    REFUSED: "EREFUSED",
    resolve: [Circular: *29],
    resolve4: [Circular: *30],
    resolve6: [Circular: *31],
    resolveAny: [Circular: *32],
    resolveCaa: [Circular: *33],
    resolveCname: [Circular: *34],
    resolveMx: [Circular: *35],
    resolveNaptr: [Circular: *36],
    resolveNs: [Circular: *37],
    resolvePtr: [Circular: *38],
    Resolver: [Circular: *39],
    resolveSoa: [Circular: *40],
    resolveSrv: [Circular: *41],
    resolveTlsa: [Circular: *42],
    resolveTxt: [Circular: *43],
    reverse: [Circular: *44],
    SERVFAIL: "ESERVFAIL",
    setDefaultResultOrder: [Circular: *27],
    setServers: [Circular: *45],
    TIMEOUT: "ETIMEOUT",
    V4MAPPED: 8
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    ADDRCONFIG: 64,
    ADDRGETNETWORKPARAMS: "EADDRGETNETWORKPARAMS",
    ALL: 32,
    BADFAMILY: "EBADFAMILY",
    BADFLAGS: "EBADFLAGS",
    BADHINTS: "EBADHINTS",
    BADNAME: "EBADNAME",
    BADQUERY: "EBADQUERY",
    BADRESP: "EBADRESP",
    BADSTR: "EBADSTR",
    CANCELLED: "ECANCELLED",
    CONNREFUSED: "ECONNREFUSED",
    default: {
        ADDRCONFIG: 64,
        ADDRGETNETWORKPARAMS: "EADDRGETNETWORKPARAMS",
        ALL: 32,
        BADFAMILY: "EBADFAMILY",
        BADFLAGS: "EBADFLAGS",
        BADHINTS: "EBADHINTS",
        BADNAME: "EBADNAME",
        BADQUERY: "EBADQUERY",
        BADRESP: "EBADRESP",
        BADSTR: "EBADSTR",
        CANCELLED: "ECANCELLED",
        CONNREFUSED: "ECONNREFUSED",
        DESTRUCTION: "EDESTRUCTION",
        EOF: "EOF",
        FILE: "EFILE",
        FORMERR: "EFORMERR",
        getDefaultResultOrder: <ref *3> ƒ getDefaultDnsOrder(length: 0) {},
        getServers: <ref *4> ƒ getServers(length: 0) {},
        LOADIPHLPAPI: "ELOADIPHLPAPI",
        lookup: <ref *5> ƒ lookup(length: 3) {},
        lookupService: <ref *6> ƒ lookupService(length: 3) {},
        NODATA: "ENODATA",
        NOMEM: "ENOMEM",
        NONAME: "ENONAME",
        NOTFOUND: "ENOTFOUND",
        NOTIMP: "ENOTIMP",
        NOTINITIALIZED: "ENOTINITIALIZED",
        promises: <ref *7> {
            ADDRGETNETWORKPARAMS: "EADDRGETNETWORKPARAMS",
            BADFAMILY: "EBADFAMILY",
            BADFLAGS: "EBADFLAGS",
            BADHINTS: "EBADHINTS",
            BADNAME: "EBADNAME",
            BADQUERY: "EBADQUERY",
            BADRESP: "EBADRESP",
            BADSTR: "EBADSTR",
            CANCELLED: "ECANCELLED",
            CONNREFUSED: "ECONNREFUSED",
            DESTRUCTION: "EDESTRUCTION",
            EOF: "EOF",
            FILE: "EFILE",
            FORMERR: "EFORMERR",
            getDefaultResultOrder: [Circular: *3],
            getServers: ƒ getServers(length: 0) {},
            LOADIPHLPAPI: "ELOADIPHLPAPI",
            lookup: ƒ lookup(length: 2) {},
            lookupService: ƒ lookupService(length: 2) {},
            NODATA: "ENODATA",
            NOMEM: "ENOMEM",
            NONAME: "ENONAME",
            NOTFOUND: "ENOTFOUND",
            NOTIMP: "ENOTIMP",
            NOTINITIALIZED: "ENOTINITIALIZED",
            REFUSED: "EREFUSED",
            resolve: ƒ resolve(length: 2) {},
            resolve4: ƒ resolve4(length: 2) {},
            resolve6: ƒ resolve6(length: 2) {},
            resolveAny: ƒ resolveAny(length: 1) {},
            resolveCaa: ƒ resolveCaa(length: 1) {},
            resolveCname: ƒ resolveCname(length: 1) {},
            resolveMx: ƒ resolveMx(length: 1) {},
            resolveNaptr: ƒ resolveNaptr(length: 1) {},
            resolveNs: ƒ resolveNs(length: 1) {},
            resolvePtr: ƒ resolvePtr(length: 1) {},
            Resolver: class Resolver extends y {},
            resolveSoa: ƒ resolveSoa(length: 1) {},
            resolveSrv: ƒ resolveSrv(length: 1) {},
            resolveTxt: ƒ resolveTxt(length: 1) {},
            reverse: ƒ reverse(length: 1) {},
            SERVFAIL: "ESERVFAIL",
            setDefaultResultOrder: <ref *26> ƒ setDefaultResultOrder(length: 1) {},
            setServers: <ref *27> ƒ setServers(length: 1) {},
            TIMEOUT: "ETIMEOUT"
        },
        REFUSED: "EREFUSED",
        resolve: <ref *28> ƒ resolve(length: 3) {},
        resolve4: <ref *29> ƒ resolve4(length: 3) {},
        resolve6: <ref *30> ƒ resolve6(length: 3) {},
        resolveAny: <ref *31> ƒ resolveAny(length: 0) {},
        resolveCaa: <ref *32> ƒ resolveCaa(length: 0) {},
        resolveCname: <ref *33> ƒ resolveCname(length: 0) {},
        resolveMx: <ref *34> ƒ resolveMx(length: 0) {},
        resolveNaptr: <ref *35> ƒ resolveNaptr(length: 0) {},
        resolveNs: <ref *36> ƒ resolveNs(length: 0) {},
        resolvePtr: <ref *37> ƒ resolvePtr(length: 0) {},
        Resolver: <ref *38> class Resolver extends g {},
        resolveSoa: <ref *39> ƒ resolveSoa(length: 0) {},
        resolveSrv: <ref *40> ƒ resolveSrv(length: 0) {},
        resolveTxt: <ref *41> ƒ resolveTxt(length: 0) {},
        reverse: <ref *42> ƒ reverse(length: 0) {},
        SERVFAIL: "ESERVFAIL",
        setDefaultResultOrder: [Circular: *26],
        setServers: [Circular: *27],
        TIMEOUT: "ETIMEOUT",
        V4MAPPED: 16
    },
    DESTRUCTION: "EDESTRUCTION",
    EOF: "EOF",
    FILE: "EFILE",
    FORMERR: "EFORMERR",
    getDefaultResultOrder: [Circular: *3],
    getServers: [Circular: *4],
    LOADIPHLPAPI: "ELOADIPHLPAPI",
    lookup: [Circular: *5],
    lookupService: [Circular: *6],
    NODATA: "ENODATA",
    NOMEM: "ENOMEM",
    NONAME: "ENONAME",
    NOTFOUND: "ENOTFOUND",
    NOTIMP: "ENOTIMP",
    NOTINITIALIZED: "ENOTINITIALIZED",
    promises: [Circular: *7],
    REFUSED: "EREFUSED",
    resolve: [Circular: *28],
    resolve4: [Circular: *29],
    resolve6: [Circular: *30],
    resolveAny: [Circular: *31],
    resolveCaa: [Circular: *32],
    resolveCname: [Circular: *33],
    resolveMx: [Circular: *34],
    resolveNaptr: [Circular: *35],
    resolveNs: [Circular: *36],
    resolvePtr: [Circular: *37],
    Resolver: [Circular: *38],
    resolveSoa: [Circular: *39],
    resolveSrv: [Circular: *40],
    resolveTxt: [Circular: *41],
    reverse: [Circular: *42],
    SERVFAIL: "ESERVFAIL",
    setDefaultResultOrder: [Circular: *26],
    setServers: [Circular: *27],
    TIMEOUT: "ETIMEOUT",
    V4MAPPED: 16
}
```

</td>
    </tr>
  </table>
</details>

<details id="dns-promises">
  <summary><code>dns/promises</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    ADDRGETNETWORKPARAMS: "EADDRGETNETWORKPARAMS",
    BADFAMILY: "EBADFAMILY",
    BADFLAGS: "EBADFLAGS",
    BADHINTS: "EBADHINTS",
    BADNAME: "EBADNAME",
    BADQUERY: "EBADQUERY",
    BADRESP: "EBADRESP",
    BADSTR: "EBADSTR",
    CANCELLED: "ECANCELLED",
    CONNREFUSED: "ECONNREFUSED",
    default: {
        ADDRGETNETWORKPARAMS: "EADDRGETNETWORKPARAMS",
        BADFAMILY: "EBADFAMILY",
        BADFLAGS: "EBADFLAGS",
        BADHINTS: "EBADHINTS",
        BADNAME: "EBADNAME",
        BADQUERY: "EBADQUERY",
        BADRESP: "EBADRESP",
        BADSTR: "EBADSTR",
        CANCELLED: "ECANCELLED",
        CONNREFUSED: "ECONNREFUSED",
        DESTRUCTION: "EDESTRUCTION",
        EOF: "EOF",
        FILE: "EFILE",
        FORMERR: "EFORMERR",
        getDefaultResultOrder: <ref *3> ƒ getDefaultResultOrder(length: 0) {},
        getServers: <ref *4> ƒ bound getServers(length: 0) {},
        LOADIPHLPAPI: "ELOADIPHLPAPI",
        lookup: <ref *5> ƒ lookup(length: 2) {},
        lookupService: <ref *6> ƒ lookupService(length: 2) {},
        NODATA: "ENODATA",
        NOMEM: "ENOMEM",
        NONAME: "ENONAME",
        NOTFOUND: "ENOTFOUND",
        NOTIMP: "ENOTIMP",
        NOTINITIALIZED: "ENOTINITIALIZED",
        REFUSED: "EREFUSED",
        resolve: <ref *7> ƒ bound resolve(length: 2) {},
        resolve4: <ref *8> ƒ bound queryA(length: 2) {},
        resolve6: <ref *9> ƒ bound queryAaaa(length: 2) {},
        resolveAny: <ref *10> ƒ bound queryAny(length: 2) {},
        resolveCaa: <ref *11> ƒ bound queryCaa(length: 2) {},
        resolveCname: <ref *12> ƒ bound queryCname(length: 2) {},
        resolveMx: <ref *13> ƒ bound queryMx(length: 2) {},
        resolveNaptr: <ref *14> ƒ bound queryNaptr(length: 2) {},
        resolveNs: <ref *15> ƒ bound queryNs(length: 2) {},
        resolvePtr: <ref *16> ƒ bound queryPtr(length: 2) {},
        Resolver: <ref *17> class Resolver extends ResolverBase {},
        resolveSoa: <ref *18> ƒ bound querySoa(length: 2) {},
        resolveSrv: <ref *19> ƒ bound querySrv(length: 2) {},
        resolveTlsa: <ref *20> ƒ bound queryTlsa(length: 2) {},
        resolveTxt: <ref *21> ƒ bound queryTxt(length: 2) {},
        reverse: <ref *22> ƒ bound getHostByAddr(length: 2) {},
        SERVFAIL: "ESERVFAIL",
        setDefaultResultOrder: <ref *23> ƒ setDefaultResultOrder(length: 1) {},
        setServers: <ref *24> ƒ defaultResolverSetServers(length: 1) {},
        TIMEOUT: "ETIMEOUT"
    },
    DESTRUCTION: "EDESTRUCTION",
    EOF: "EOF",
    FILE: "EFILE",
    FORMERR: "EFORMERR",
    getDefaultResultOrder: [Circular: *3],
    getServers: [Circular: *4],
    LOADIPHLPAPI: "ELOADIPHLPAPI",
    lookup: [Circular: *5],
    lookupService: [Circular: *6],
    NODATA: "ENODATA",
    NOMEM: "ENOMEM",
    NONAME: "ENONAME",
    NOTFOUND: "ENOTFOUND",
    NOTIMP: "ENOTIMP",
    NOTINITIALIZED: "ENOTINITIALIZED",
    REFUSED: "EREFUSED",
    resolve: [Circular: *7],
    resolve4: [Circular: *8],
    resolve6: [Circular: *9],
    resolveAny: [Circular: *10],
    resolveCaa: [Circular: *11],
    resolveCname: [Circular: *12],
    resolveMx: [Circular: *13],
    resolveNaptr: [Circular: *14],
    resolveNs: [Circular: *15],
    resolvePtr: [Circular: *16],
    Resolver: [Circular: *17],
    resolveSoa: [Circular: *18],
    resolveSrv: [Circular: *19],
    resolveTlsa: [Circular: *20],
    resolveTxt: [Circular: *21],
    reverse: [Circular: *22],
    SERVFAIL: "ESERVFAIL",
    setDefaultResultOrder: [Circular: *23],
    setServers: [Circular: *24],
    TIMEOUT: "ETIMEOUT"
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    ADDRGETNETWORKPARAMS: "EADDRGETNETWORKPARAMS",
    BADFAMILY: "EBADFAMILY",
    BADFLAGS: "EBADFLAGS",
    BADHINTS: "EBADHINTS",
    BADNAME: "EBADNAME",
    BADQUERY: "EBADQUERY",
    BADRESP: "EBADRESP",
    BADSTR: "EBADSTR",
    CANCELLED: "ECANCELLED",
    CONNREFUSED: "ECONNREFUSED",
    default: {
        ADDRGETNETWORKPARAMS: "EADDRGETNETWORKPARAMS",
        BADFAMILY: "EBADFAMILY",
        BADFLAGS: "EBADFLAGS",
        BADHINTS: "EBADHINTS",
        BADNAME: "EBADNAME",
        BADQUERY: "EBADQUERY",
        BADRESP: "EBADRESP",
        BADSTR: "EBADSTR",
        CANCELLED: "ECANCELLED",
        CONNREFUSED: "ECONNREFUSED",
        DESTRUCTION: "EDESTRUCTION",
        EOF: "EOF",
        FILE: "EFILE",
        FORMERR: "EFORMERR",
        getDefaultResultOrder: <ref *3> ƒ getDefaultDnsOrder(length: 0) {},
        getServers: <ref *4> ƒ getServers(length: 0) {},
        LOADIPHLPAPI: "ELOADIPHLPAPI",
        lookup: <ref *5> ƒ lookup(length: 2) {},
        lookupService: <ref *6> ƒ lookupService(length: 2) {},
        NODATA: "ENODATA",
        NOMEM: "ENOMEM",
        NONAME: "ENONAME",
        NOTFOUND: "ENOTFOUND",
        NOTIMP: "ENOTIMP",
        NOTINITIALIZED: "ENOTINITIALIZED",
        REFUSED: "EREFUSED",
        resolve: <ref *7> ƒ resolve(length: 2) {},
        resolve4: <ref *8> ƒ resolve4(length: 2) {},
        resolve6: <ref *9> ƒ resolve6(length: 2) {},
        resolveAny: <ref *10> ƒ resolveAny(length: 1) {},
        resolveCaa: <ref *11> ƒ resolveCaa(length: 1) {},
        resolveCname: <ref *12> ƒ resolveCname(length: 1) {},
        resolveMx: <ref *13> ƒ resolveMx(length: 1) {},
        resolveNaptr: <ref *14> ƒ resolveNaptr(length: 1) {},
        resolveNs: <ref *15> ƒ resolveNs(length: 1) {},
        resolvePtr: <ref *16> ƒ resolvePtr(length: 1) {},
        Resolver: <ref *17> class Resolver extends y {},
        resolveSoa: <ref *18> ƒ resolveSoa(length: 1) {},
        resolveSrv: <ref *19> ƒ resolveSrv(length: 1) {},
        resolveTxt: <ref *20> ƒ resolveTxt(length: 1) {},
        reverse: <ref *21> ƒ reverse(length: 1) {},
        SERVFAIL: "ESERVFAIL",
        setDefaultResultOrder: <ref *22> ƒ setDefaultResultOrder(length: 1) {},
        setServers: <ref *23> ƒ setServers(length: 1) {},
        TIMEOUT: "ETIMEOUT"
    },
    DESTRUCTION: "EDESTRUCTION",
    EOF: "EOF",
    FILE: "EFILE",
    FORMERR: "EFORMERR",
    getDefaultResultOrder: [Circular: *3],
    getServers: [Circular: *4],
    LOADIPHLPAPI: "ELOADIPHLPAPI",
    lookup: [Circular: *5],
    lookupService: [Circular: *6],
    NODATA: "ENODATA",
    NOMEM: "ENOMEM",
    NONAME: "ENONAME",
    NOTFOUND: "ENOTFOUND",
    NOTIMP: "ENOTIMP",
    NOTINITIALIZED: "ENOTINITIALIZED",
    REFUSED: "EREFUSED",
    resolve: [Circular: *7],
    resolve4: [Circular: *8],
    resolve6: [Circular: *9],
    resolveAny: [Circular: *10],
    resolveCaa: [Circular: *11],
    resolveCname: [Circular: *12],
    resolveMx: [Circular: *13],
    resolveNaptr: [Circular: *14],
    resolveNs: [Circular: *15],
    resolvePtr: [Circular: *16],
    Resolver: [Circular: *17],
    resolveSoa: [Circular: *18],
    resolveSrv: [Circular: *19],
    resolveTxt: [Circular: *20],
    reverse: [Circular: *21],
    SERVFAIL: "ESERVFAIL",
    setDefaultResultOrder: [Circular: *22],
    setServers: [Circular: *23],
    TIMEOUT: "ETIMEOUT"
}
```

</td>
    </tr>
  </table>
</details>

<details id="domain">
  <summary><code>domain</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    _stack: [],
    active: null,
    create: <ref *3> ƒ createDomain(length: 0) {},
    createDomain: [Circular: *3],
    default: {
        [get/set] _stack: [],
        active: null,
        create: [Circular: *3],
        createDomain: [Circular: *3],
        Domain: <ref *6> class Domain extends EventEmitter {}
    },
    Domain: [Circular: *6]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    _stack: <ref *2> [],
    active: null,
    create: <ref *3> ƒ create(length: 0) {},
    createDomain: <ref *4> ƒ createDomain(length: 0) {},
    default: {
        _stack: [Circular: *2],
        active: null,
        create: [Circular: *3],
        createDomain: [Circular: *4],
        Domain: <ref *6> class Domain extends g {}
    },
    Domain: [Circular: *6]
}
```

</td>
    </tr>
  </table>
</details>

<details id="events">
  <summary><code>events</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    addAbortListener: <ref *2> ƒ addAbortListener(length: 2) {},
    captureRejections: false,
    captureRejectionSymbol: Symbol(nodejs.rejection),
    default: <ref *3> ƒ EventEmitter(length: 1) {
        addAbortListener: [Circular: *2],
        [get/set] captureRejections: false,
        captureRejectionSymbol: Symbol(nodejs.rejection),
        [get/set] defaultMaxListeners: 10,
        errorMonitor: Symbol(events.errorMonitor),
        EventEmitter: [Circular: *3],
        [get] EventEmitterAsyncResource: <ref *4> class EventEmitterAsyncResource extends EventEmitter {},
        getEventListeners: <ref *5> ƒ getEventListeners(length: 2) {},
        getMaxListeners: <ref *6> ƒ getMaxListeners(length: 1) {},
        init: <ref *7> ƒ (length: 1) {},
        listenerCount: <ref *8> ƒ listenerCount(length: 2) {},
        on: <ref *9> ƒ on(length: 2) {},
        once: <ref *10> async ƒ once(length: 2) {},
        setMaxListeners: <ref *11> ƒ (length: 0) {},
        usingDomains: true
    },
    defaultMaxListeners: 10,
    errorMonitor: Symbol(events.errorMonitor),
    EventEmitter: [Circular: *3],
    EventEmitterAsyncResource: [Circular: *4],
    getEventListeners: [Circular: *5],
    getMaxListeners: [Circular: *6],
    init: [Circular: *7],
    listenerCount: [Circular: *8],
    on: [Circular: *9],
    once: [Circular: *10],
    setMaxListeners: [Circular: *11],
    usingDomains: true
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    addAbortListener: <ref *2> ƒ addAbortListener(length: 2) {},
    captureRejectionSymbol: Symbol(nodejs.rejection),
    default: <ref *3> ƒ EventEmitter(length: 1) {
        addAbortListener: [Circular: *2],
        [get/set] captureRejections: false,
        captureRejectionSymbol: Symbol(nodejs.rejection),
        [get/set] defaultMaxListeners: 10,
        errorMonitor: Symbol(events.errorMonitor),
        EventEmitter: [Circular: *3],
        [get] EventEmitterAsyncResource: <ref *4> class EventEmitterAsyncResource extends EventEmitter {},
        getEventListeners: <ref *5> ƒ getEventListeners(length: 2) {},
        getMaxListeners: <ref *6> ƒ getMaxListeners(length: 1) {},
        init: ƒ (length: 1) {},
        listenerCount: <ref *8> ƒ listenerCount(length: 2) {},
        on: <ref *9> ƒ on(length: 2) {},
        once: <ref *10> async ƒ once(length: 2) {},
        setMaxListeners: <ref *11> ƒ setMaxListeners(length: 0) {},
        usingDomains: false
    },
    defaultMaxListeners: 10,
    errorMonitor: Symbol(events.errorMonitor),
    EventEmitter: [Circular: *3],
    EventEmitterAsyncResource: [Circular: *4],
    getEventListeners: [Circular: *5],
    getMaxListeners: [Circular: *6],
    listenerCount: [Circular: *8],
    on: [Circular: *9],
    once: [Circular: *10],
    setMaxListeners: [Circular: *11]
}
```

</td>
    </tr>
  </table>
</details>

<details id="fs">
  <summary><code>fs</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    _toUnixTimestamp: <ref *2> ƒ toUnixTimestamp(length: 1) {},
    access: <ref *3> ƒ access(length: 3) {},
    accessSync: <ref *4> ƒ accessSync(length: 2) {},
    appendFile: <ref *5> ƒ appendFile(length: 4) {},
    appendFileSync: <ref *6> ƒ appendFileSync(length: 3) {},
    chmod: <ref *7> ƒ chmod(length: 3) {},
    chmodSync: <ref *8> ƒ chmodSync(length: 2) {},
    chown: <ref *9> ƒ chown(length: 4) {},
    chownSync: <ref *10> ƒ chownSync(length: 3) {},
    close: <ref *11> ƒ close(length: 1) {},
    closeSync: <ref *12> ƒ closeSync(length: 1) {},
    constants: <ref *13> [Object: null prototype] {
        COPYFILE_EXCL: 1,
        COPYFILE_FICLONE: 2,
        COPYFILE_FICLONE_FORCE: 4,
        F_OK: 0,
        O_APPEND: 1024,
        O_CREAT: 64,
        O_DIRECT: 16384,
        O_DIRECTORY: 65536,
        O_DSYNC: 4096,
        O_EXCL: 128,
        O_NOATIME: 262144,
        O_NOCTTY: 256,
        O_NOFOLLOW: 131072,
        O_NONBLOCK: 2048,
        O_RDONLY: 0,
        O_RDWR: 2,
        O_SYNC: 1052672,
        O_TRUNC: 512,
        O_WRONLY: 1,
        R_OK: 4,
        S_IFBLK: 24576,
        S_IFCHR: 8192,
        S_IFDIR: 16384,
        S_IFIFO: 4096,
        S_IFLNK: 40960,
        S_IFMT: 61440,
        S_IFREG: 32768,
        S_IFSOCK: 49152,
        S_IRGRP: 32,
        S_IROTH: 4,
        S_IRUSR: 256,
        S_IRWXG: 56,
        S_IRWXO: 7,
        S_IRWXU: 448,
        S_IWGRP: 16,
        S_IWOTH: 2,
        S_IWUSR: 128,
        S_IXGRP: 8,
        S_IXOTH: 1,
        S_IXUSR: 64,
        UV_DIRENT_BLOCK: 7,
        UV_DIRENT_CHAR: 6,
        UV_DIRENT_DIR: 2,
        UV_DIRENT_FIFO: 4,
        UV_DIRENT_FILE: 1,
        UV_DIRENT_LINK: 3,
        UV_DIRENT_SOCKET: 5,
        UV_DIRENT_UNKNOWN: 0,
        UV_FS_COPYFILE_EXCL: 1,
        UV_FS_COPYFILE_FICLONE: 2,
        UV_FS_COPYFILE_FICLONE_FORCE: 4,
        UV_FS_O_FILEMAP: 0,
        UV_FS_O_RANDOM: 0,
        UV_FS_O_SEQUENTIAL: 0,
        UV_FS_O_SHORT_LIVED: 0,
        UV_FS_O_TEMPORARY: 0,
        UV_FS_SYMLINK_DIR: 1,
        UV_FS_SYMLINK_JUNCTION: 2,
        W_OK: 2,
        X_OK: 1
    },
    copyFile: <ref *14> ƒ copyFile(length: 4) {},
    copyFileSync: <ref *15> ƒ copyFileSync(length: 3) {},
    cp: <ref *16> ƒ cp(length: 4) {},
    cpSync: <ref *17> ƒ cpSync(length: 3) {},
    createReadStream: <ref *18> ƒ createReadStream(length: 2) {},
    createWriteStream: <ref *19> ƒ createWriteStream(length: 2) {},
    default: {
        _toUnixTimestamp: [Circular: *2],
        access: [Circular: *3],
        accessSync: [Circular: *4],
        appendFile: [Circular: *5],
        appendFileSync: [Circular: *6],
        chmod: [Circular: *7],
        chmodSync: [Circular: *8],
        chown: [Circular: *9],
        chownSync: [Circular: *10],
        close: [Circular: *11],
        closeSync: [Circular: *12],
        constants: [Circular: *13],
        copyFile: [Circular: *14],
        copyFileSync: [Circular: *15],
        cp: [Circular: *16],
        cpSync: [Circular: *17],
        createReadStream: [Circular: *18],
        createWriteStream: [Circular: *19],
        Dir: <ref *21> class Dir {},
        Dirent: <ref *22> class Dirent {},
        exists: <ref *23> ƒ exists(length: 2) {},
        existsSync: <ref *24> ƒ existsSync(length: 1) {},
        fchmod: <ref *25> ƒ fchmod(length: 3) {},
        fchmodSync: <ref *26> ƒ fchmodSync(length: 2) {},
        fchown: <ref *27> ƒ fchown(length: 4) {},
        fchownSync: <ref *28> ƒ fchownSync(length: 3) {},
        fdatasync: <ref *29> ƒ fdatasync(length: 2) {},
        fdatasyncSync: <ref *30> ƒ fdatasyncSync(length: 1) {},
        [get/set] FileReadStream: <ref *31> ƒ ReadStream(length: 2) {},
        [get/set] FileWriteStream: <ref *32> ƒ WriteStream(length: 2) {},
        fstat: <ref *33> ƒ fstat(length: 1) {},
        fstatSync: <ref *34> ƒ fstatSync(length: 1) {},
        fsync: <ref *35> ƒ fsync(length: 2) {},
        fsyncSync: <ref *36> ƒ fsyncSync(length: 1) {},
        ftruncate: <ref *37> ƒ ftruncate(length: 1) {},
        ftruncateSync: <ref *38> ƒ ftruncateSync(length: 1) {},
        futimes: <ref *39> ƒ futimes(length: 4) {},
        futimesSync: <ref *40> ƒ futimesSync(length: 3) {},
        glob: <ref *41> ƒ glob(length: 3) {},
        globSync: <ref *42> ƒ globSync(length: 2) {},
        lchmod: undefined,
        lchmodSync: undefined,
        lchown: <ref *43> ƒ lchown(length: 4) {},
        lchownSync: <ref *44> ƒ lchownSync(length: 3) {},
        link: <ref *45> ƒ link(length: 3) {},
        linkSync: <ref *46> ƒ linkSync(length: 2) {},
        lstat: <ref *47> ƒ lstat(length: 1) {},
        lstatSync: <ref *48> ƒ lstatSync(length: 1) {},
        lutimes: <ref *49> ƒ lutimes(length: 4) {},
        lutimesSync: <ref *50> ƒ lutimesSync(length: 3) {},
        mkdir: <ref *51> ƒ mkdir(length: 3) {},
        mkdirSync: <ref *52> ƒ mkdirSync(length: 2) {},
        mkdtemp: <ref *53> ƒ mkdtemp(length: 3) {},
        mkdtempDisposableSync: <ref *54> ƒ mkdtempDisposableSync(length: 2) {},
        mkdtempSync: <ref *55> ƒ mkdtempSync(length: 2) {},
        mkstemp: <ref *56> ƒ mkstemp(length: 3) {},
        mkstempSync: <ref *57> ƒ mkstempSync(length: 2) {},
        open: <ref *58> ƒ open(length: 4) {},
        openAsBlob: <ref *59> ƒ openAsBlob(length: 1) {},
        openAsBlobSync: <ref *60> ƒ openAsBlobSync(length: 1) {},
        opendir: <ref *61> ƒ opendir(length: 3) {},
        opendirSync: <ref *62> ƒ opendirSync(length: 2) {},
        openSync: <ref *63> ƒ openSync(length: 3) {},
        [get] promises: <ref *64> {
            access: async ƒ access(length: 1) {},
            appendFile: async ƒ appendFile(length: 3) {},
            chmod: async ƒ chmod(length: 2) {},
            chown: async ƒ chown(length: 3) {},
            constants: [Circular: *13],
            copyFile: async ƒ copyFile(length: 3) {},
            cp: async ƒ cp(length: 3) {},
            glob: async ƒ glob(length: 2) {},
            lchmod: async ƒ lchmod(length: 2) {},
            lchown: async ƒ lchown(length: 3) {},
            link: async ƒ link(length: 2) {},
            lstat: async ƒ lstat(length: 1) {},
            lutimes: async ƒ lutimes(length: 3) {},
            mkdir: async ƒ mkdir(length: 2) {},
            mkdtemp: async ƒ mkdtemp(length: 2) {},
            mkdtempDisposable: async ƒ mkdtempDisposable(length: 2) {},
            mkstemp: async ƒ mkstemp(length: 2) {},
            open: async ƒ open(length: 3) {},
            opendir: ƒ opendir(length: 3) {},
            readdir: async ƒ readdir(length: 2) {},
            readFile: async ƒ readFile(length: 2) {},
            readlink: async ƒ readlink(length: 2) {},
            realpath: async ƒ realpath(length: 2) {},
            rename: async ƒ rename(length: 2) {},
            rm: async ƒ rm(length: 2) {},
            rmdir: async ƒ rmdir(length: 2) {},
            stat: async ƒ stat(length: 1) {},
            statfs: async ƒ statfs(length: 1) {},
            symlink: async ƒ symlink(length: 3) {},
            truncate: async ƒ truncate(length: 1) {},
            unlink: async ƒ unlink(length: 1) {},
            utimes: async ƒ utimes(length: 3) {},
            watch: async ƒ _watch(length: 1) {},
            writeFile: async ƒ writeFile(length: 3) {}
        },
        read: <ref *98> ƒ read(length: 6) {},
        readdir: <ref *99> ƒ readdir(length: 3) {},
        readdirSync: <ref *100> ƒ readdirSync(length: 2) {},
        readFile: <ref *101> ƒ readFile(length: 3) {},
        readFileSync: <ref *102> ƒ readFileSync(length: 2) {},
        readlink: <ref *103> ƒ readlink(length: 3) {},
        readlinkSync: <ref *104> ƒ readlinkSync(length: 2) {},
        [get/set] ReadStream: [Circular: *31],
        readSync: <ref *105> ƒ readSync(length: 5) {},
        readv: <ref *106> ƒ readv(length: 4) {},
        readvSync: <ref *107> ƒ readvSync(length: 3) {},
        realpath: <ref *108> ƒ realpath(length: 3) {
            native: ƒ (length: 3) {}
        },
        realpathSync: <ref *110> ƒ realpathSync(length: 2) {
            native: ƒ (length: 2) {}
        },
        rename: <ref *112> ƒ rename(length: 3) {},
        renameSync: <ref *113> ƒ renameSync(length: 2) {},
        rm: <ref *114> ƒ rm(length: 3) {},
        rmdir: <ref *115> ƒ rmdir(length: 3) {},
        rmdirSync: <ref *116> ƒ rmdirSync(length: 2) {},
        rmSync: <ref *117> ƒ rmSync(length: 2) {},
        stat: <ref *118> ƒ stat(length: 1) {},
        statfs: <ref *119> ƒ statfs(length: 1) {},
        statfsSync: <ref *120> ƒ statfsSync(length: 1) {},
        Stats: <ref *121> ƒ deprecated(length: 18) {},
        statSync: <ref *122> ƒ statSync(length: 1) {},
        symlink: <ref *123> ƒ symlink(length: 4) {},
        symlinkSync: <ref *124> ƒ symlinkSync(length: 3) {},
        truncate: <ref *125> ƒ truncate(length: 3) {},
        truncateSync: <ref *126> ƒ truncateSync(length: 2) {},
        unlink: <ref *127> ƒ unlink(length: 2) {},
        unlinkSync: <ref *128> ƒ unlinkSync(length: 1) {},
        unwatchFile: <ref *129> ƒ unwatchFile(length: 2) {},
        [get] Utf8Stream: <ref *130> class Utf8Stream extends EventEmitter {},
        utimes: <ref *131> ƒ utimes(length: 4) {},
        utimesSync: <ref *132> ƒ utimesSync(length: 3) {},
        watch: <ref *133> ƒ watch(length: 3) {},
        watchFile: <ref *134> ƒ watchFile(length: 3) {},
        write: <ref *135> ƒ write(length: 6) {},
        writeFile: <ref *136> ƒ writeFile(length: 4) {},
        writeFileSync: <ref *137> ƒ writeFileSync(length: 3) {},
        [get/set] WriteStream: [Circular: *32],
        writeSync: <ref *138> ƒ writeSync(length: 5) {},
        writev: <ref *139> ƒ writev(length: 4) {},
        writevSync: <ref *140> ƒ writevSync(length: 3) {}
    },
    Dir: [Circular: *21],
    Dirent: [Circular: *22],
    exists: [Circular: *23],
    existsSync: [Circular: *24],
    fchmod: [Circular: *25],
    fchmodSync: [Circular: *26],
    fchown: [Circular: *27],
    fchownSync: [Circular: *28],
    fdatasync: [Circular: *29],
    fdatasyncSync: [Circular: *30],
    FileReadStream: [Circular: *31],
    FileWriteStream: [Circular: *32],
    fstat: [Circular: *33],
    fstatSync: [Circular: *34],
    fsync: [Circular: *35],
    fsyncSync: [Circular: *36],
    ftruncate: [Circular: *37],
    ftruncateSync: [Circular: *38],
    futimes: [Circular: *39],
    futimesSync: [Circular: *40],
    glob: [Circular: *41],
    globSync: [Circular: *42],
    lchmod: undefined,
    lchmodSync: undefined,
    lchown: [Circular: *43],
    lchownSync: [Circular: *44],
    link: [Circular: *45],
    linkSync: [Circular: *46],
    lstat: [Circular: *47],
    lstatSync: [Circular: *48],
    lutimes: [Circular: *49],
    lutimesSync: [Circular: *50],
    mkdir: [Circular: *51],
    mkdirSync: [Circular: *52],
    mkdtemp: [Circular: *53],
    mkdtempDisposableSync: [Circular: *54],
    mkdtempSync: [Circular: *55],
    mkstemp: [Circular: *56],
    mkstempSync: [Circular: *57],
    open: [Circular: *58],
    openAsBlob: [Circular: *59],
    openAsBlobSync: [Circular: *60],
    opendir: [Circular: *61],
    opendirSync: [Circular: *62],
    openSync: [Circular: *63],
    promises: [Circular: *64],
    read: [Circular: *98],
    readdir: [Circular: *99],
    readdirSync: [Circular: *100],
    readFile: [Circular: *101],
    readFileSync: [Circular: *102],
    readlink: [Circular: *103],
    readlinkSync: [Circular: *104],
    ReadStream: [Circular: *31],
    readSync: [Circular: *105],
    readv: [Circular: *106],
    readvSync: [Circular: *107],
    realpath: [Circular: *108],
    realpathSync: [Circular: *110],
    rename: [Circular: *112],
    renameSync: [Circular: *113],
    rm: [Circular: *114],
    rmdir: [Circular: *115],
    rmdirSync: [Circular: *116],
    rmSync: [Circular: *117],
    stat: [Circular: *118],
    statfs: [Circular: *119],
    statfsSync: [Circular: *120],
    Stats: [Circular: *121],
    statSync: [Circular: *122],
    symlink: [Circular: *123],
    symlinkSync: [Circular: *124],
    truncate: [Circular: *125],
    truncateSync: [Circular: *126],
    unlink: [Circular: *127],
    unlinkSync: [Circular: *128],
    unwatchFile: [Circular: *129],
    Utf8Stream: [Circular: *130],
    utimes: [Circular: *131],
    utimesSync: [Circular: *132],
    watch: [Circular: *133],
    watchFile: [Circular: *134],
    write: [Circular: *135],
    writeFile: [Circular: *136],
    writeFileSync: [Circular: *137],
    WriteStream: [Circular: *32],
    writeSync: [Circular: *138],
    writev: [Circular: *139],
    writevSync: [Circular: *140]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    _toUnixTimestamp: <ref *2> ƒ toUnixTimestamp(length: 1) {},
    access: <ref *3> ƒ access(length: 3) {},
    accessSync: <ref *4> ƒ accessSync(length: 2) {},
    appendFile: <ref *5> ƒ appendFile(length: 4) {},
    appendFileSync: <ref *6> ƒ appendFileSync(length: 3) {},
    BigIntStats: <ref *7> ƒ BigIntStats(length: 14) {},
    CFISBIS: <ref *8> ƒ CFISBIS(length: 2) {},
    chmod: <ref *9> ƒ chmod(length: 3) {},
    chmodSync: <ref *10> ƒ chmodSync(length: 2) {},
    chown: <ref *11> ƒ chown(length: 4) {},
    chownSync: <ref *12> ƒ chownSync(length: 3) {},
    close: <ref *13> ƒ close(length: 1) {},
    closeSync: <ref *14> ƒ closeSync(length: 1) {},
    constants: <ref *15> [Object: null prototype] {
        COPYFILE_EXCL: 1,
        COPYFILE_FICLONE: 2,
        COPYFILE_FICLONE_FORCE: 4,
        F_OK: 0,
        O_APPEND: 1024,
        O_CREAT: 64,
        O_DIRECT: 16384,
        O_DIRECTORY: 65536,
        O_DSYNC: 4096,
        O_EXCL: 128,
        O_NOATIME: 262144,
        O_NOCTTY: 256,
        O_NOFOLLOW: 131072,
        O_NONBLOCK: 2048,
        O_RDONLY: 0,
        O_RDWR: 2,
        O_SYMLINK: undefined,
        O_SYNC: 1052672,
        O_TRUNC: 512,
        O_WRONLY: 1,
        R_OK: 4,
        S_IFBLK: 24576,
        S_IFCHR: 8192,
        S_IFDIR: 16384,
        S_IFIFO: 4096,
        S_IFLNK: 40960,
        S_IFMT: 61440,
        S_IFREG: 32768,
        S_IFSOCK: 49152,
        S_IRGRP: 32,
        S_IROTH: 4,
        S_IRUSR: 256,
        S_IRWXG: 56,
        S_IRWXO: 7,
        S_IRWXU: 448,
        S_IWGRP: 16,
        S_IWOTH: 2,
        S_IWUSR: 128,
        S_IXGRP: 8,
        S_IXOTH: 1,
        S_IXUSR: 64,
        UV_DIRENT_BLOCK: 7,
        UV_DIRENT_CHAR: 6,
        UV_DIRENT_DIR: 2,
        UV_DIRENT_FIFO: 4,
        UV_DIRENT_FILE: 1,
        UV_DIRENT_LINK: 3,
        UV_DIRENT_SOCKET: 5,
        UV_DIRENT_UNKNOWN: 0,
        UV_FS_COPYFILE_EXCL: 1,
        UV_FS_COPYFILE_FICLONE: 2,
        UV_FS_COPYFILE_FICLONE_FORCE: 4,
        UV_FS_O_FILEMAP: 0,
        UV_FS_SYMLINK_DIR: 1,
        UV_FS_SYMLINK_JUNCTION: 2,
        W_OK: 2,
        X_OK: 1
    },
    convertFileInfoToBigIntStats: <ref *16> ƒ convertFileInfoToBigIntStats(length: 1) {},
    convertFileInfoToStats: <ref *17> ƒ convertFileInfoToStats(length: 1) {},
    copyFile: <ref *18> ƒ copyFile(length: 4) {},
    copyFileSync: <ref *19> ƒ copyFileSync(length: 3) {},
    cp: <ref *20> ƒ cp(length: 4) {},
    cpSync: <ref *21> ƒ cpSync(length: 3) {},
    createReadStream: <ref *22> ƒ createReadStream(length: 2) {},
    createWriteStream: <ref *23> ƒ createWriteStream(length: 2) {},
    default: {
        _toUnixTimestamp: [Circular: *2],
        access: [Circular: *3],
        accessSync: [Circular: *4],
        appendFile: [Circular: *5],
        appendFileSync: [Circular: *6],
        BigIntStats: [Circular: *7],
        CFISBIS: [Circular: *8],
        chmod: [Circular: *9],
        chmodSync: [Circular: *10],
        chown: [Circular: *11],
        chownSync: [Circular: *12],
        close: [Circular: *13],
        closeSync: [Circular: *14],
        constants: [Circular: *15],
        convertFileInfoToBigIntStats: [Circular: *16],
        convertFileInfoToStats: [Circular: *17],
        copyFile: [Circular: *18],
        copyFileSync: [Circular: *19],
        cp: [Circular: *20],
        cpSync: [Circular: *21],
        [get/set] createReadStream: [Circular: *22],
        [get/set] createWriteStream: [Circular: *23],
        Dir: <ref *25> class Dir {},
        Dirent: <ref *26> class Dirent {},
        exists: <ref *27> ƒ exists(length: 2) {},
        existsSync: <ref *28> ƒ existsSync(length: 1) {},
        fchmod: <ref *29> ƒ fchmod(length: 3) {},
        fchmodSync: <ref *30> ƒ fchmodSync(length: 2) {},
        fchown: <ref *31> ƒ fchown(length: 4) {},
        fchownSync: <ref *32> ƒ fchownSync(length: 3) {},
        fdatasync: <ref *33> ƒ fdatasync(length: 2) {},
        fdatasyncSync: <ref *34> ƒ fdatasyncSync(length: 1) {},
        fstat: <ref *35> ƒ fstat(length: 3) {},
        fstatSync: <ref *36> ƒ fstatSync(length: 2) {},
        fsync: <ref *37> ƒ fsync(length: 2) {},
        fsyncSync: <ref *38> ƒ fsyncSync(length: 1) {},
        ftruncate: <ref *39> ƒ ftruncate(length: 1) {},
        ftruncateSync: <ref *40> ƒ ftruncateSync(length: 1) {},
        futimes: <ref *41> ƒ futimes(length: 4) {},
        futimesSync: <ref *42> ƒ futimesSync(length: 3) {},
        glob: <ref *43> ƒ glob(length: 2) {},
        globSync: <ref *44> ƒ globSync(length: 1) {},
        lchmod: undefined,
        lchmodSync: undefined,
        lchown: <ref *45> ƒ lchown(length: 4) {},
        lchownSync: <ref *46> ƒ lchownSync(length: 3) {},
        link: <ref *47> ƒ link(length: 3) {},
        linkSync: <ref *48> ƒ linkSync(length: 2) {},
        lstat: <ref *49> ƒ lstat(length: 3) {},
        lstatSync: <ref *50> ƒ lstatSync(length: 2) {},
        lutimes: <ref *51> ƒ lutimes(length: 4) {},
        lutimesSync: <ref *52> ƒ lutimesSync(length: 3) {},
        mkdir: <ref *53> ƒ mkdir(length: 3) {},
        mkdirSync: <ref *54> ƒ mkdirSync(length: 2) {},
        mkdtemp: <ref *55> ƒ mkdtemp(length: 3) {},
        mkdtempDisposableSync: <ref *56> ƒ mkdtempDisposableSync(length: 2) {},
        mkdtempSync: <ref *57> ƒ mkdtempSync(length: 2) {},
        open: <ref *58> ƒ open(length: 4) {},
        openAsBlob: <ref *59> ƒ openAsBlob(length: 1) {},
        opendir: <ref *60> ƒ opendir(length: 3) {},
        opendirSync: <ref *61> ƒ opendirSync(length: 2) {},
        openSync: <ref *62> ƒ openSync(length: 1) {},
        [get/set] promises: <ref *63> {
            access: ƒ (length: 0) {},
            appendFile: ƒ appendFilePromise(length: 3) {},
            chmod: ƒ (length: 0) {},
            chown: ƒ (length: 0) {},
            constants: [Circular: *15],
            copyFile: ƒ copyFile(length: 4) {},
            cp: async ƒ cpPromise(length: 3) {},
            glob: ƒ globPromise(length: 2) {},
            lchmod: ƒ (length: 0) {},
            lchown: ƒ (length: 0) {},
            link: ƒ (length: 0) {},
            lstat: ƒ lstat(length: 3) {},
            lutimes: ƒ lutimes(length: 4) {},
            mkdir: ƒ (length: 0) {},
            mkdtemp: ƒ (length: 0) {},
            mkdtempDisposable: async ƒ mkdtempDisposablePromise(length: 2) {},
            open: ƒ openPromise(length: 1) {},
            opendir: ƒ (length: 0) {},
            readdir: ƒ readdir(length: 3) {},
            readFile: ƒ readFilePromise(length: 2) {},
            readlink: ƒ (length: 0) {},
            realpath: ƒ (length: 0) {},
            rename: ƒ (length: 0) {},
            rm: ƒ (length: 0) {},
            rmdir: ƒ (length: 0) {},
            stat: ƒ (length: 0) {},
            statfs: ƒ (length: 0) {},
            symlink: ƒ (length: 0) {},
            truncate: async ƒ truncatePromise(length: 2) {},
            unlink: ƒ (length: 0) {},
            utimes: ƒ (length: 0) {},
            watch: ƒ watch(length: 0) {},
            writeFile: ƒ writeFilePromise(length: 3) {}
        },
        read: <ref *96> ƒ read(length: 6) {},
        readdir: <ref *97> ƒ readdir(length: 3) {},
        readdirSync: <ref *98> ƒ readdirSync(length: 2) {},
        readFile: <ref *99> ƒ readFile(length: 3) {},
        readFilePromise: <ref *100> ƒ readFilePromise(length: 2) {},
        readFileSync: <ref *101> ƒ readFileSync(length: 2) {},
        readlink: <ref *102> ƒ readlink(length: 3) {},
        readlinkPromise: <ref *103> ƒ readlink(length: 3) {},
        readlinkSync: <ref *104> ƒ readlinkSync(length: 2) {},
        [get/set] ReadStream: <ref *105> ƒ ReadStream(length: 2) {},
        readSync: <ref *106> ƒ readSync(length: 5) {},
        readv: <ref *107> ƒ readv(length: 4) {},
        readvPromise: <ref *108> ƒ readvPromise(length: 3) {},
        readvSync: <ref *109> ƒ readvSync(length: 2) {},
        realpath: <ref *110> ƒ realpath(length: 3) {
            native: ƒ realpath_native(length: 3) {}
        },
        realpathSync: <ref *112> ƒ realpathSync(length: 2) {
            native: ƒ realpathSync_native(length: 2) {}
        },
        rename: <ref *114> ƒ rename(length: 3) {},
        renameSync: <ref *115> ƒ renameSync(length: 2) {},
        rm: <ref *116> ƒ rm(length: 3) {},
        rmdir: <ref *117> ƒ rmdir(length: 3) {},
        rmdirSync: <ref *118> ƒ rmdirSync(length: 2) {},
        rmSync: <ref *119> ƒ rmSync(length: 2) {},
        stat: <ref *120> ƒ stat(length: 1) {},
        statfs: <ref *121> ƒ statfs(length: 3) {},
        statfsSync: <ref *122> ƒ statfsSync(length: 2) {},
        Stats: <ref *123> ƒ deprecated(length: 14) {},
        statSync: <ref *124> ƒ statSync(length: 1) {},
        symlink: <ref *125> ƒ symlink(length: 4) {},
        symlinkSync: <ref *126> ƒ symlinkSync(length: 3) {},
        SyncWriteStream: <ref *127> ƒ SyncWriteStream(length: 2) {},
        truncate: <ref *128> ƒ truncate(length: 1) {},
        truncateSync: <ref *129> ƒ truncateSync(length: 1) {},
        unlink: <ref *130> ƒ unlink(length: 2) {},
        unlinkSync: <ref *131> ƒ unlinkSync(length: 1) {},
        unwatchFile: <ref *132> ƒ unwatchFile(length: 2) {},
        [get] Utf8Stream: <ref *133> class Utf8Stream extends r {},
        utimes: <ref *134> ƒ utimes(length: 4) {},
        utimesSync: <ref *135> ƒ utimesSync(length: 3) {},
        watch: <ref *136> ƒ watch(length: 3) {},
        watchFile: <ref *137> ƒ watchFile(length: 3) {},
        watchPromise: <ref *138> ƒ watchPromise(length: 2) {},
        write: <ref *139> ƒ write(length: 6) {},
        writeFile: <ref *140> ƒ writeFile(length: 4) {},
        writeFileSync: <ref *141> ƒ writeFileSync(length: 3) {},
        [get/set] WriteStream: <ref *142> ƒ WriteStream(length: 2) {},
        writeSync: <ref *143> ƒ writeSync(length: 5) {},
        writev: <ref *144> ƒ writev(length: 4) {},
        writevSync: <ref *145> ƒ writevSync(length: 3) {}
    },
    Dir: [Circular: *25],
    Dirent: [Circular: *26],
    exists: [Circular: *27],
    existsSync: [Circular: *28],
    fchmod: [Circular: *29],
    fchmodSync: [Circular: *30],
    fchown: [Circular: *31],
    fchownSync: [Circular: *32],
    fdatasync: [Circular: *33],
    fdatasyncSync: [Circular: *34],
    fstat: [Circular: *35],
    fstatSync: [Circular: *36],
    fsync: [Circular: *37],
    fsyncSync: [Circular: *38],
    ftruncate: [Circular: *39],
    ftruncateSync: [Circular: *40],
    futimes: [Circular: *41],
    futimesSync: [Circular: *42],
    glob: [Circular: *43],
    globSync: [Circular: *44],
    lchmod: undefined,
    lchmodSync: undefined,
    lchown: [Circular: *45],
    lchownSync: [Circular: *46],
    link: [Circular: *47],
    linkSync: [Circular: *48],
    lstat: [Circular: *49],
    lstatSync: [Circular: *50],
    lutimes: [Circular: *51],
    lutimesSync: [Circular: *52],
    mkdir: [Circular: *53],
    mkdirSync: [Circular: *54],
    mkdtemp: [Circular: *55],
    mkdtempDisposableSync: [Circular: *56],
    mkdtempSync: [Circular: *57],
    open: [Circular: *58],
    openAsBlob: [Circular: *59],
    opendir: [Circular: *60],
    opendirSync: [Circular: *61],
    openSync: [Circular: *62],
    promises: [Circular: *63],
    read: [Circular: *96],
    readdir: [Circular: *97],
    readdirSync: [Circular: *98],
    readFile: [Circular: *99],
    readFilePromise: [Circular: *100],
    readFileSync: [Circular: *101],
    readlink: [Circular: *102],
    readlinkPromise: [Circular: *103],
    readlinkSync: [Circular: *104],
    ReadStream: [Circular: *105],
    readSync: [Circular: *106],
    readv: [Circular: *107],
    readvPromise: [Circular: *108],
    readvSync: [Circular: *109],
    realpath: [Circular: *110],
    realpathSync: [Circular: *112],
    rename: [Circular: *114],
    renameSync: [Circular: *115],
    rm: [Circular: *116],
    rmdir: [Circular: *117],
    rmdirSync: [Circular: *118],
    rmSync: [Circular: *119],
    stat: [Circular: *120],
    statfs: [Circular: *121],
    statfsSync: [Circular: *122],
    Stats: [Circular: *123],
    statSync: [Circular: *124],
    symlink: [Circular: *125],
    symlinkSync: [Circular: *126],
    SyncWriteStream: [Circular: *127],
    truncate: [Circular: *128],
    truncateSync: [Circular: *129],
    unlink: [Circular: *130],
    unlinkSync: [Circular: *131],
    unwatchFile: [Circular: *132],
    Utf8Stream: [Circular: *133],
    utimes: [Circular: *134],
    utimesSync: [Circular: *135],
    watch: [Circular: *136],
    watchFile: [Circular: *137],
    watchPromise: [Circular: *138],
    write: [Circular: *139],
    writeFile: [Circular: *140],
    writeFileSync: [Circular: *141],
    WriteStream: [Circular: *142],
    writeSync: [Circular: *143],
    writev: [Circular: *144],
    writevSync: [Circular: *145]
}
```

</td>
    </tr>
  </table>
</details>

<details id="fs-promises">
  <summary><code>fs/promises</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    access: <ref *2> async ƒ access(length: 1) {},
    appendFile: <ref *3> async ƒ appendFile(length: 3) {},
    chmod: <ref *4> async ƒ chmod(length: 2) {},
    chown: <ref *5> async ƒ chown(length: 3) {},
    constants: <ref *6> [Object: null prototype] {
        COPYFILE_EXCL: 1,
        COPYFILE_FICLONE: 2,
        COPYFILE_FICLONE_FORCE: 4,
        F_OK: 0,
        O_APPEND: 1024,
        O_CREAT: 64,
        O_DIRECT: 16384,
        O_DIRECTORY: 65536,
        O_DSYNC: 4096,
        O_EXCL: 128,
        O_NOATIME: 262144,
        O_NOCTTY: 256,
        O_NOFOLLOW: 131072,
        O_NONBLOCK: 2048,
        O_RDONLY: 0,
        O_RDWR: 2,
        O_SYNC: 1052672,
        O_TRUNC: 512,
        O_WRONLY: 1,
        R_OK: 4,
        S_IFBLK: 24576,
        S_IFCHR: 8192,
        S_IFDIR: 16384,
        S_IFIFO: 4096,
        S_IFLNK: 40960,
        S_IFMT: 61440,
        S_IFREG: 32768,
        S_IFSOCK: 49152,
        S_IRGRP: 32,
        S_IROTH: 4,
        S_IRUSR: 256,
        S_IRWXG: 56,
        S_IRWXO: 7,
        S_IRWXU: 448,
        S_IWGRP: 16,
        S_IWOTH: 2,
        S_IWUSR: 128,
        S_IXGRP: 8,
        S_IXOTH: 1,
        S_IXUSR: 64,
        UV_DIRENT_BLOCK: 7,
        UV_DIRENT_CHAR: 6,
        UV_DIRENT_DIR: 2,
        UV_DIRENT_FIFO: 4,
        UV_DIRENT_FILE: 1,
        UV_DIRENT_LINK: 3,
        UV_DIRENT_SOCKET: 5,
        UV_DIRENT_UNKNOWN: 0,
        UV_FS_COPYFILE_EXCL: 1,
        UV_FS_COPYFILE_FICLONE: 2,
        UV_FS_COPYFILE_FICLONE_FORCE: 4,
        UV_FS_O_FILEMAP: 0,
        UV_FS_O_RANDOM: 0,
        UV_FS_O_SEQUENTIAL: 0,
        UV_FS_O_SHORT_LIVED: 0,
        UV_FS_O_TEMPORARY: 0,
        UV_FS_SYMLINK_DIR: 1,
        UV_FS_SYMLINK_JUNCTION: 2,
        W_OK: 2,
        X_OK: 1
    },
    copyFile: <ref *7> async ƒ copyFile(length: 3) {},
    cp: <ref *8> async ƒ cp(length: 3) {},
    default: {
        access: [Circular: *2],
        appendFile: [Circular: *3],
        chmod: [Circular: *4],
        chown: [Circular: *5],
        constants: [Circular: *6],
        copyFile: [Circular: *7],
        cp: [Circular: *8],
        glob: <ref *10> async ƒ glob(length: 2) {},
        lchmod: <ref *11> async ƒ lchmod(length: 2) {},
        lchown: <ref *12> async ƒ lchown(length: 3) {},
        link: <ref *13> async ƒ link(length: 2) {},
        lstat: <ref *14> async ƒ lstat(length: 1) {},
        lutimes: <ref *15> async ƒ lutimes(length: 3) {},
        mkdir: <ref *16> async ƒ mkdir(length: 2) {},
        mkdtemp: <ref *17> async ƒ mkdtemp(length: 2) {},
        mkdtempDisposable: <ref *18> async ƒ mkdtempDisposable(length: 2) {},
        mkstemp: <ref *19> async ƒ mkstemp(length: 2) {},
        open: <ref *20> async ƒ open(length: 3) {},
        opendir: <ref *21> ƒ opendir(length: 3) {},
        readdir: <ref *22> async ƒ readdir(length: 2) {},
        readFile: <ref *23> async ƒ readFile(length: 2) {},
        readlink: <ref *24> async ƒ readlink(length: 2) {},
        realpath: <ref *25> async ƒ realpath(length: 2) {},
        rename: <ref *26> async ƒ rename(length: 2) {},
        rm: <ref *27> async ƒ rm(length: 2) {},
        rmdir: <ref *28> async ƒ rmdir(length: 2) {},
        stat: <ref *29> async ƒ stat(length: 1) {},
        statfs: <ref *30> async ƒ statfs(length: 1) {},
        symlink: <ref *31> async ƒ symlink(length: 3) {},
        truncate: <ref *32> async ƒ truncate(length: 1) {},
        unlink: <ref *33> async ƒ unlink(length: 1) {},
        utimes: <ref *34> async ƒ utimes(length: 3) {},
        watch: <ref *35> async ƒ _watch(length: 1) {},
        writeFile: <ref *36> async ƒ writeFile(length: 3) {}
    },
    glob: [Circular: *10],
    lchmod: [Circular: *11],
    lchown: [Circular: *12],
    link: [Circular: *13],
    lstat: [Circular: *14],
    lutimes: [Circular: *15],
    mkdir: [Circular: *16],
    mkdtemp: [Circular: *17],
    mkdtempDisposable: [Circular: *18],
    mkstemp: [Circular: *19],
    open: [Circular: *20],
    opendir: [Circular: *21],
    readdir: [Circular: *22],
    readFile: [Circular: *23],
    readlink: [Circular: *24],
    realpath: [Circular: *25],
    rename: [Circular: *26],
    rm: [Circular: *27],
    rmdir: [Circular: *28],
    stat: [Circular: *29],
    statfs: [Circular: *30],
    symlink: [Circular: *31],
    truncate: [Circular: *32],
    unlink: [Circular: *33],
    utimes: [Circular: *34],
    watch: [Circular: *35],
    writeFile: [Circular: *36]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    access: <ref *2> ƒ (length: 0) {},
    appendFile: <ref *3> ƒ appendFilePromise(length: 3) {},
    chmod: <ref *4> ƒ (length: 0) {},
    chown: <ref *5> ƒ (length: 0) {},
    constants: <ref *6> [Object: null prototype] {
        COPYFILE_EXCL: 1,
        COPYFILE_FICLONE: 2,
        COPYFILE_FICLONE_FORCE: 4,
        F_OK: 0,
        O_APPEND: 1024,
        O_CREAT: 64,
        O_DIRECT: 16384,
        O_DIRECTORY: 65536,
        O_DSYNC: 4096,
        O_EXCL: 128,
        O_NOATIME: 262144,
        O_NOCTTY: 256,
        O_NOFOLLOW: 131072,
        O_NONBLOCK: 2048,
        O_RDONLY: 0,
        O_RDWR: 2,
        O_SYMLINK: undefined,
        O_SYNC: 1052672,
        O_TRUNC: 512,
        O_WRONLY: 1,
        R_OK: 4,
        S_IFBLK: 24576,
        S_IFCHR: 8192,
        S_IFDIR: 16384,
        S_IFIFO: 4096,
        S_IFLNK: 40960,
        S_IFMT: 61440,
        S_IFREG: 32768,
        S_IFSOCK: 49152,
        S_IRGRP: 32,
        S_IROTH: 4,
        S_IRUSR: 256,
        S_IRWXG: 56,
        S_IRWXO: 7,
        S_IRWXU: 448,
        S_IWGRP: 16,
        S_IWOTH: 2,
        S_IWUSR: 128,
        S_IXGRP: 8,
        S_IXOTH: 1,
        S_IXUSR: 64,
        UV_DIRENT_BLOCK: 7,
        UV_DIRENT_CHAR: 6,
        UV_DIRENT_DIR: 2,
        UV_DIRENT_FIFO: 4,
        UV_DIRENT_FILE: 1,
        UV_DIRENT_LINK: 3,
        UV_DIRENT_SOCKET: 5,
        UV_DIRENT_UNKNOWN: 0,
        UV_FS_COPYFILE_EXCL: 1,
        UV_FS_COPYFILE_FICLONE: 2,
        UV_FS_COPYFILE_FICLONE_FORCE: 4,
        UV_FS_O_FILEMAP: 0,
        UV_FS_SYMLINK_DIR: 1,
        UV_FS_SYMLINK_JUNCTION: 2,
        W_OK: 2,
        X_OK: 1
    },
    copyFile: <ref *7> ƒ copyFile(length: 4) {},
    cp: <ref *8> async ƒ cpPromise(length: 3) {},
    default: {
        access: [Circular: *2],
        appendFile: [Circular: *3],
        chmod: [Circular: *4],
        chown: [Circular: *5],
        constants: [Circular: *6],
        copyFile: [Circular: *7],
        cp: [Circular: *8],
        glob: <ref *10> ƒ globPromise(length: 2) {},
        lchmod: <ref *11> ƒ (length: 0) {},
        lchown: <ref *12> ƒ (length: 0) {},
        link: <ref *13> ƒ (length: 0) {},
        lstat: <ref *14> ƒ lstat(length: 3) {},
        lutimes: <ref *15> ƒ lutimes(length: 4) {},
        mkdir: <ref *16> ƒ (length: 0) {},
        mkdtemp: <ref *17> ƒ (length: 0) {},
        mkdtempDisposable: <ref *18> async ƒ mkdtempDisposablePromise(length: 2) {},
        open: <ref *19> ƒ openPromise(length: 1) {},
        opendir: <ref *20> ƒ (length: 0) {},
        readdir: <ref *21> ƒ readdir(length: 3) {},
        readFile: <ref *22> ƒ readFilePromise(length: 2) {},
        readlink: <ref *23> ƒ (length: 0) {},
        realpath: <ref *24> ƒ (length: 0) {},
        rename: <ref *25> ƒ (length: 0) {},
        rm: <ref *26> ƒ (length: 0) {},
        rmdir: <ref *27> ƒ (length: 0) {},
        stat: <ref *28> ƒ (length: 0) {},
        statfs: <ref *29> ƒ (length: 0) {},
        symlink: <ref *30> ƒ (length: 0) {},
        truncate: <ref *31> async ƒ truncatePromise(length: 2) {},
        unlink: <ref *32> ƒ (length: 0) {},
        utimes: <ref *33> ƒ (length: 0) {},
        watch: <ref *34> ƒ watch(length: 0) {},
        writeFile: <ref *35> ƒ writeFilePromise(length: 3) {}
    },
    glob: [Circular: *10],
    lchmod: [Circular: *11],
    lchown: [Circular: *12],
    link: [Circular: *13],
    lstat: [Circular: *14],
    lutimes: [Circular: *15],
    mkdir: [Circular: *16],
    mkdtemp: [Circular: *17],
    mkdtempDisposable: [Circular: *18],
    open: [Circular: *19],
    opendir: [Circular: *20],
    readdir: [Circular: *21],
    readFile: [Circular: *22],
    readlink: [Circular: *23],
    realpath: [Circular: *24],
    rename: [Circular: *25],
    rm: [Circular: *26],
    rmdir: [Circular: *27],
    stat: [Circular: *28],
    statfs: [Circular: *29],
    symlink: [Circular: *30],
    truncate: [Circular: *31],
    unlink: [Circular: *32],
    utimes: [Circular: *33],
    watch: [Circular: *34],
    writeFile: [Circular: *35]
}
```

</td>
    </tr>
  </table>
</details>

<details id="http">
  <summary><code>http</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    _connectionListener: <ref *2> ƒ connectionListener(length: 1) {},
    Agent: <ref *3> ƒ Agent(length: 1) {
        defaultMaxSockets: Infinity
    },
    ClientRequest: <ref *4> ƒ ClientRequest(length: 3) {},
    CloseEvent: <ref *5> class extends Event {},
    createServer: <ref *6> ƒ createServer(length: 2) {},
    default: {
        _connectionListener: [Circular: *2],
        Agent: [Circular: *3],
        ClientRequest: [Circular: *4],
        [get] CloseEvent: [Circular: *5],
        createServer: [Circular: *6],
        get: <ref *8> ƒ get(length: 3) {},
        [get/set] globalAgent: <ref *9> Agent {
            _events: [Object: null prototype] {
                free: ƒ (length: 2) {},
                newListener: ƒ maybeEnableKeylog(length: 1) {}
            },
            _eventsCount: 2,
            _maxListeners: undefined,
            agentKeepAliveTimeoutBuffer: 1000,
            defaultPort: 80,
            freeSockets: [Object: null prototype] {},
            keepAlive: true,
            keepAliveMsecs: 1000,
            maxFreeSockets: 256,
            maxSockets: Infinity,
            maxTotalSockets: Infinity,
            options: [Object: null prototype] {
                keepAlive: true,
                noDelay: true,
                path: null,
                proxyEnv: undefined,
                scheduling: "lifo",
                timeout: 5000
            },
            protocol: "http:",
            requests: [Object: null prototype] {},
            scheduling: "lifo",
            sockets: [Object: null prototype] {},
            Symbol(kCapture): false,
            Symbol(shapeMode): false,
            totalSocketCount: 0
        },
        IncomingMessage: <ref *17> ƒ IncomingMessage(length: 1) {},
        isValidHeaderName: <ref *18> ƒ isValidHeaderName(length: 1) {},
        isValidHeaderValue: <ref *19> ƒ isValidHeaderValue(length: 2) {},
        [get] maxHeaderSize: 16384,
        [get] MessageEvent: <ref *20> class _MessageEvent extends Event {},
        METHODS: <ref *21> [
            "ACL",
            "BIND",
            "CHECKOUT",
            "CONNECT",
            "COPY",
            "DELETE",
            "GET",
            "HEAD",
            "LINK",
            "LOCK",
            "M-SEARCH",
            "MERGE",
            "MKACTIVITY",
            "MKCALENDAR",
            "MKCOL",
            "MOVE",
            "NOTIFY",
            "OPTIONS",
            "PATCH",
            "POST",
            "PROPFIND",
            "PROPPATCH",
            "PURGE",
            "PUT",
            "QUERY",
            "REBIND",
            "REPORT",
            "SEARCH",
            "SOURCE",
            "SUBSCRIBE",
            "TRACE",
            "UNBIND",
            "UNLINK",
            "UNLOCK",
            "UNSUBSCRIBE"
        ],
        OutgoingMessage: <ref *22> ƒ OutgoingMessage(length: 1) {},
        request: <ref *23> ƒ request(length: 3) {},
        Server: <ref *24> ƒ Server(length: 2) {},
        ServerResponse: <ref *25> ƒ ServerResponse(length: 2) {},
        setGlobalProxyFromEnv: <ref *26> ƒ setGlobalProxyFromEnv(length: 0) {},
        setMaxIdleHTTPParsers: <ref *27> ƒ setMaxIdleHTTPParsers(length: 1) {},
        STATUS_CODES: <ref *28> {
            100: "Continue",
            101: "Switching Protocols",
            102: "Processing",
            103: "Early Hints",
            200: "OK",
            201: "Created",
            202: "Accepted",
            203: "Non-Authoritative Information",
            204: "No Content",
            205: "Reset Content",
            206: "Partial Content",
            207: "Multi-Status",
            208: "Already Reported",
            226: "IM Used",
            300: "Multiple Choices",
            301: "Moved Permanently",
            302: "Found",
            303: "See Other",
            304: "Not Modified",
            305: "Use Proxy",
            307: "Temporary Redirect",
            308: "Permanent Redirect",
            400: "Bad Request",
            401: "Unauthorized",
            402: "Payment Required",
            403: "Forbidden",
            404: "Not Found",
            405: "Method Not Allowed",
            406: "Not Acceptable",
            407: "Proxy Authentication Required",
            408: "Request Timeout",
            409: "Conflict",
            410: "Gone",
            411: "Length Required",
            412: "Precondition Failed",
            413: "Payload Too Large",
            414: "URI Too Long",
            415: "Unsupported Media Type",
            416: "Range Not Satisfiable",
            417: "Expectation Failed",
            418: "I'm a Teapot",
            421: "Misdirected Request",
            422: "Unprocessable Entity",
            423: "Locked",
            424: "Failed Dependency",
            425: "Too Early",
            426: "Upgrade Required",
            428: "Precondition Required",
            429: "Too Many Requests",
            431: "Request Header Fields Too Large",
            451: "Unavailable For Legal Reasons",
            500: "Internal Server Error",
            501: "Not Implemented",
            502: "Bad Gateway",
            503: "Service Unavailable",
            504: "Gateway Timeout",
            505: "HTTP Version Not Supported",
            506: "Variant Also Negotiates",
            507: "Insufficient Storage",
            508: "Loop Detected",
            509: "Bandwidth Limit Exceeded",
            510: "Not Extended",
            511: "Network Authentication Required"
        },
        validateHeaderName: <ref *29> ƒ validateHeaderName(length: 0) {
            withoutStackTrace: ƒ (length: 2) {}
        },
        validateHeaderValue: <ref *31> ƒ validateHeaderValue(length: 0) {
            withoutStackTrace: ƒ (length: 3) {}
        },
        [get] WebSocket: <ref *33> class _WebSocket extends EventTarget {
            CLOSED: 3,
            CLOSING: 2,
            CONNECTING: 0,
            OPEN: 1
        },
        websocketMask: <ref *34> ƒ websocketMask(length: 5) {},
        websocketUnmask: <ref *35> ƒ websocketUnmask(length: 2) {}
    },
    get: [Circular: *8],
    globalAgent: [Circular: *9],
    IncomingMessage: [Circular: *17],
    isValidHeaderName: [Circular: *18],
    isValidHeaderValue: [Circular: *19],
    maxHeaderSize: 16384,
    MessageEvent: [Circular: *20],
    METHODS: [Circular: *21],
    OutgoingMessage: [Circular: *22],
    request: [Circular: *23],
    Server: [Circular: *24],
    ServerResponse: [Circular: *25],
    setGlobalProxyFromEnv: [Circular: *26],
    setMaxIdleHTTPParsers: [Circular: *27],
    STATUS_CODES: [Circular: *28],
    validateHeaderName: [Circular: *29],
    validateHeaderValue: [Circular: *31],
    WebSocket: [Circular: *33],
    websocketMask: [Circular: *34],
    websocketUnmask: [Circular: *35]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    _connectionListener: <ref *2> ƒ connectionListener(length: 1) {},
    Agent: <ref *3> ƒ Agent(length: 1) {
        defaultMaxSockets: Infinity
    },
    ClientRequest: <ref *4> ƒ ClientRequest(length: 3) {},
    createServer: <ref *5> ƒ createServer(length: 2) {},
    default: {
        _connectionListener: [Circular: *2],
        Agent: [Circular: *3],
        ClientRequest: [Circular: *4],
        createServer: [Circular: *5],
        get: <ref *7> ƒ get(length: 0) {},
        [get/set] globalAgent: <ref *8> Agent {
            _events: [Object: null prototype] {
                free: ƒ (length: 2) {},
                newListener: ƒ maybeEnableKeylog(length: 1) {}
            },
            _eventsCount: 2,
            _maxListeners: undefined,
            agentKeepAliveTimeoutBuffer: 1000,
            defaultPort: 80,
            freeSockets: [Object: null prototype] {},
            keepAlive: true,
            keepAliveMsecs: 1000,
            maxFreeSockets: 256,
            maxSockets: Infinity,
            maxTotalSockets: Infinity,
            options: [Object: null prototype] {
                keepAlive: true,
                noDelay: true,
                path: null,
                scheduling: "lifo",
                timeout: 5000
            },
            protocol: "http:",
            requests: [Object: null prototype] {},
            scheduling: "lifo",
            sockets: [Object: null prototype] {},
            Symbol(kCapture): false,
            totalSocketCount: 0
        },
        IncomingMessage: <ref *16> ƒ IncomingMessage(length: 2) {},
        maxHeaderSize: 16384,
        METHODS: <ref *17> [
            "ACL",
            "BIND",
            "CHECKOUT",
            "CONNECT",
            "COPY",
            "DELETE",
            "GET",
            "HEAD",
            "LINK",
            "LOCK",
            "M-SEARCH",
            "MERGE",
            "MKACTIVITY",
            "MKCALENDAR",
            "MKCOL",
            "MOVE",
            "NOTIFY",
            "OPTIONS",
            "PATCH",
            "POST",
            "PROPFIND",
            "PROPPATCH",
            "PURGE",
            "PUT",
            "QUERY",
            "REBIND",
            "REPORT",
            "SEARCH",
            "SOURCE",
            "SUBSCRIBE",
            "TRACE",
            "UNBIND",
            "UNLINK",
            "UNLOCK",
            "UNSUBSCRIBE"
        ],
        OutgoingMessage: <ref *18> ƒ OutgoingMessage(length: 1) {},
        request: <ref *19> ƒ request(length: 0) {},
        Server: <ref *20> ƒ Server(length: 2) {},
        ServerImpl: [Circular: *20],
        ServerResponse: <ref *21> ƒ ServerResponse(length: 2) {},
        setGlobalProxyFromEnv: ƒ setGlobalProxyFromEnv(length: 1) {},
        setMaxIdleHTTPParsers: <ref *23> ƒ setMaxIdleHTTPParsers(length: 1) {},
        STATUS_CODES: <ref *24> {
            100: "Continue",
            101: "Switching Protocols",
            102: "Processing",
            103: "Early Hints",
            200: "OK",
            201: "Created",
            202: "Accepted",
            203: "Non-Authoritative Information",
            204: "No Content",
            205: "Reset Content",
            206: "Partial Content",
            207: "Multi-Status",
            208: "Already Reported",
            226: "IM Used",
            300: "Multiple Choices",
            301: "Moved Permanently",
            302: "Found",
            303: "See Other",
            304: "Not Modified",
            305: "Use Proxy",
            307: "Temporary Redirect",
            308: "Permanent Redirect",
            400: "Bad Request",
            401: "Unauthorized",
            402: "Payment Required",
            403: "Forbidden",
            404: "Not Found",
            405: "Method Not Allowed",
            406: "Not Acceptable",
            407: "Proxy Authentication Required",
            408: "Request Timeout",
            409: "Conflict",
            410: "Gone",
            411: "Length Required",
            412: "Precondition Failed",
            413: "Payload Too Large",
            414: "URI Too Long",
            415: "Unsupported Media Type",
            416: "Range Not Satisfiable",
            417: "Expectation Failed",
            418: "I'm a Teapot",
            421: "Misdirected Request",
            422: "Unprocessable Entity",
            423: "Locked",
            424: "Failed Dependency",
            425: "Too Early",
            426: "Upgrade Required",
            428: "Precondition Required",
            429: "Too Many Requests",
            431: "Request Header Fields Too Large",
            451: "Unavailable For Legal Reasons",
            500: "Internal Server Error",
            501: "Not Implemented",
            502: "Bad Gateway",
            503: "Service Unavailable",
            504: "Gateway Timeout",
            505: "HTTP Version Not Supported",
            506: "Variant Also Negotiates",
            507: "Insufficient Storage",
            508: "Loop Detected",
            509: "Bandwidth Limit Exceeded",
            510: "Not Extended",
            511: "Network Authentication Required"
        },
        validateHeaderName: <ref *25> ƒ __node_internal_(length: 0) {
            withoutStackTrace: ƒ __node_internal_(length: 2) {}
        },
        validateHeaderValue: <ref *27> ƒ __node_internal_(length: 0) {
            withoutStackTrace: ƒ __node_internal_(length: 2) {}
        }
    },
    get: [Circular: *7],
    globalAgent: [Circular: *8],
    IncomingMessage: [Circular: *16],
    maxHeaderSize: 16384,
    METHODS: [Circular: *17],
    OutgoingMessage: [Circular: *18],
    request: [Circular: *19],
    Server: [Circular: *20],
    ServerImpl: [Circular: *20],
    ServerResponse: [Circular: *21],
    setMaxIdleHTTPParsers: [Circular: *23],
    STATUS_CODES: [Circular: *24],
    validateHeaderName: [Circular: *25],
    validateHeaderValue: [Circular: *27]
}
```

</td>
    </tr>
  </table>
</details>

<details id="http2">
  <summary><code>http2</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    connect: <ref *2> ƒ connect(length: 3) {},
    constants: <ref *3> {
        DEFAULT_SETTINGS_ENABLE_CONNECT_PROTOCOL: 0,
        DEFAULT_SETTINGS_ENABLE_PUSH: 1,
        DEFAULT_SETTINGS_HEADER_TABLE_SIZE: 4096,
        DEFAULT_SETTINGS_INITIAL_WINDOW_SIZE: 4194304,
        DEFAULT_SETTINGS_MAX_CONCURRENT_STREAMS: 4294967295,
        DEFAULT_SETTINGS_MAX_FRAME_SIZE: 16384,
        DEFAULT_SETTINGS_MAX_HEADER_LIST_SIZE: 65535,
        HTTP_STATUS_ACCEPTED: 202,
        HTTP_STATUS_ALREADY_REPORTED: 208,
        HTTP_STATUS_BAD_GATEWAY: 502,
        HTTP_STATUS_BAD_REQUEST: 400,
        HTTP_STATUS_BANDWIDTH_LIMIT_EXCEEDED: 509,
        HTTP_STATUS_CONFLICT: 409,
        HTTP_STATUS_CONTINUE: 100,
        HTTP_STATUS_CREATED: 201,
        HTTP_STATUS_EARLY_HINTS: 103,
        HTTP_STATUS_EXPECTATION_FAILED: 417,
        HTTP_STATUS_FAILED_DEPENDENCY: 424,
        HTTP_STATUS_FORBIDDEN: 403,
        HTTP_STATUS_FOUND: 302,
        HTTP_STATUS_GATEWAY_TIMEOUT: 504,
        HTTP_STATUS_GONE: 410,
        HTTP_STATUS_HTTP_VERSION_NOT_SUPPORTED: 505,
        HTTP_STATUS_IM_USED: 226,
        HTTP_STATUS_INSUFFICIENT_STORAGE: 507,
        HTTP_STATUS_INTERNAL_SERVER_ERROR: 500,
        HTTP_STATUS_LENGTH_REQUIRED: 411,
        HTTP_STATUS_LOCKED: 423,
        HTTP_STATUS_LOOP_DETECTED: 508,
        HTTP_STATUS_METHOD_NOT_ALLOWED: 405,
        HTTP_STATUS_MISDIRECTED_REQUEST: 421,
        HTTP_STATUS_MOVED_PERMANENTLY: 301,
        HTTP_STATUS_MULTI_STATUS: 207,
        HTTP_STATUS_MULTIPLE_CHOICES: 300,
        HTTP_STATUS_NETWORK_AUTHENTICATION_REQUIRED: 511,
        HTTP_STATUS_NO_CONTENT: 204,
        HTTP_STATUS_NON_AUTHORITATIVE_INFORMATION: 203,
        HTTP_STATUS_NOT_ACCEPTABLE: 406,
        HTTP_STATUS_NOT_EXTENDED: 510,
        HTTP_STATUS_NOT_FOUND: 404,
        HTTP_STATUS_NOT_IMPLEMENTED: 501,
        HTTP_STATUS_NOT_MODIFIED: 304,
        HTTP_STATUS_OK: 200,
        HTTP_STATUS_PARTIAL_CONTENT: 206,
        HTTP_STATUS_PAYLOAD_TOO_LARGE: 413,
        HTTP_STATUS_PAYMENT_REQUIRED: 402,
        HTTP_STATUS_PERMANENT_REDIRECT: 308,
        HTTP_STATUS_PRECONDITION_FAILED: 412,
        HTTP_STATUS_PRECONDITION_REQUIRED: 428,
        HTTP_STATUS_PROCESSING: 102,
        HTTP_STATUS_PROXY_AUTHENTICATION_REQUIRED: 407,
        HTTP_STATUS_RANGE_NOT_SATISFIABLE: 416,
        HTTP_STATUS_REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
        HTTP_STATUS_REQUEST_TIMEOUT: 408,
        HTTP_STATUS_RESET_CONTENT: 205,
        HTTP_STATUS_SEE_OTHER: 303,
        HTTP_STATUS_SERVICE_UNAVAILABLE: 503,
        HTTP_STATUS_SWITCHING_PROTOCOLS: 101,
        HTTP_STATUS_TEAPOT: 418,
        HTTP_STATUS_TEMPORARY_REDIRECT: 307,
        HTTP_STATUS_TOO_EARLY: 425,
        HTTP_STATUS_TOO_MANY_REQUESTS: 429,
        HTTP_STATUS_UNAUTHORIZED: 401,
        HTTP_STATUS_UNAVAILABLE_FOR_LEGAL_REASONS: 451,
        HTTP_STATUS_UNPROCESSABLE_ENTITY: 422,
        HTTP_STATUS_UNSUPPORTED_MEDIA_TYPE: 415,
        HTTP_STATUS_UPGRADE_REQUIRED: 426,
        HTTP_STATUS_URI_TOO_LONG: 414,
        HTTP_STATUS_USE_PROXY: 305,
        HTTP_STATUS_VARIANT_ALSO_NEGOTIATES: 506,
        HTTP2_HEADER_ACCEPT: "accept",
        HTTP2_HEADER_ACCEPT_CHARSET: "accept-charset",
        HTTP2_HEADER_ACCEPT_ENCODING: "accept-encoding",
        HTTP2_HEADER_ACCEPT_LANGUAGE: "accept-language",
        HTTP2_HEADER_ACCEPT_RANGES: "accept-ranges",
        HTTP2_HEADER_ACCESS_CONTROL_ALLOW_CREDENTIALS: "access-control-allow-credentials",
        HTTP2_HEADER_ACCESS_CONTROL_ALLOW_HEADERS: "access-control-allow-headers",
        HTTP2_HEADER_ACCESS_CONTROL_ALLOW_METHODS: "access-control-allow-methods",
        HTTP2_HEADER_ACCESS_CONTROL_ALLOW_ORIGIN: "access-control-allow-origin",
        HTTP2_HEADER_ACCESS_CONTROL_EXPOSE_HEADERS: "access-control-expose-headers",
        HTTP2_HEADER_ACCESS_CONTROL_MAX_AGE: "access-control-max-age",
        HTTP2_HEADER_ACCESS_CONTROL_REQUEST_HEADERS: "access-control-request-headers",
        HTTP2_HEADER_ACCESS_CONTROL_REQUEST_METHOD: "access-control-request-method",
        HTTP2_HEADER_AGE: "age",
        HTTP2_HEADER_ALLOW: "allow",
        HTTP2_HEADER_ALT_SVC: "alt-svc",
        HTTP2_HEADER_AUTHORITY: ":authority",
        HTTP2_HEADER_AUTHORIZATION: "authorization",
        HTTP2_HEADER_CACHE_CONTROL: "cache-control",
        HTTP2_HEADER_CONNECTION: "connection",
        HTTP2_HEADER_CONTENT_DISPOSITION: "content-disposition",
        HTTP2_HEADER_CONTENT_ENCODING: "content-encoding",
        HTTP2_HEADER_CONTENT_LANGUAGE: "content-language",
        HTTP2_HEADER_CONTENT_LENGTH: "content-length",
        HTTP2_HEADER_CONTENT_LOCATION: "content-location",
        HTTP2_HEADER_CONTENT_MD5: "content-md5",
        HTTP2_HEADER_CONTENT_RANGE: "content-range",
        HTTP2_HEADER_CONTENT_SECURITY_POLICY: "content-security-policy",
        HTTP2_HEADER_CONTENT_TYPE: "content-type",
        HTTP2_HEADER_COOKIE: "cookie",
        HTTP2_HEADER_DATE: "date",
        HTTP2_HEADER_DNT: "dnt",
        HTTP2_HEADER_EARLY_DATA: "early-data",
        HTTP2_HEADER_ETAG: "etag",
        HTTP2_HEADER_EXPECT: "expect",
        HTTP2_HEADER_EXPECT_CT: "expect-ct",
        HTTP2_HEADER_EXPIRES: "expires",
        HTTP2_HEADER_FORWARDED: "forwarded",
        HTTP2_HEADER_FROM: "from",
        HTTP2_HEADER_HOST: "host",
        HTTP2_HEADER_HTTP2_SETTINGS: "http2-settings",
        HTTP2_HEADER_IF_MATCH: "if-match",
        HTTP2_HEADER_IF_MODIFIED_SINCE: "if-modified-since",
        HTTP2_HEADER_IF_NONE_MATCH: "if-none-match",
        HTTP2_HEADER_IF_RANGE: "if-range",
        HTTP2_HEADER_IF_UNMODIFIED_SINCE: "if-unmodified-since",
        HTTP2_HEADER_KEEP_ALIVE: "keep-alive",
        HTTP2_HEADER_LAST_MODIFIED: "last-modified",
        HTTP2_HEADER_LINK: "link",
        HTTP2_HEADER_LOCATION: "location",
        HTTP2_HEADER_MAX_FORWARDS: "max-forwards",
        HTTP2_HEADER_METHOD: ":method",
        HTTP2_HEADER_ORIGIN: "origin",
        HTTP2_HEADER_PATH: ":path",
        HTTP2_HEADER_PREFER: "prefer",
        HTTP2_HEADER_PRIORITY: "priority",
        HTTP2_HEADER_PROTOCOL: ":protocol",
        HTTP2_HEADER_PROXY_AUTHENTICATE: "proxy-authenticate",
        HTTP2_HEADER_PROXY_AUTHORIZATION: "proxy-authorization",
        HTTP2_HEADER_PROXY_CONNECTION: "proxy-connection",
        HTTP2_HEADER_PURPOSE: "purpose",
        HTTP2_HEADER_RANGE: "range",
        HTTP2_HEADER_REFERER: "referer",
        HTTP2_HEADER_REFRESH: "refresh",
        HTTP2_HEADER_RETRY_AFTER: "retry-after",
        HTTP2_HEADER_SCHEME: ":scheme",
        HTTP2_HEADER_SERVER: "server",
        HTTP2_HEADER_SET_COOKIE: "set-cookie",
        HTTP2_HEADER_STATUS: ":status",
        HTTP2_HEADER_STRICT_TRANSPORT_SECURITY: "strict-transport-security",
        HTTP2_HEADER_TE: "te",
        HTTP2_HEADER_TIMING_ALLOW_ORIGIN: "timing-allow-origin",
        HTTP2_HEADER_TK: "tk",
        HTTP2_HEADER_TRAILER: "trailer",
        HTTP2_HEADER_TRANSFER_ENCODING: "transfer-encoding",
        HTTP2_HEADER_UPGRADE: "upgrade",
        HTTP2_HEADER_UPGRADE_INSECURE_REQUESTS: "upgrade-insecure-requests",
        HTTP2_HEADER_USER_AGENT: "user-agent",
        HTTP2_HEADER_VARY: "vary",
        HTTP2_HEADER_VIA: "via",
        HTTP2_HEADER_WARNING: "warning",
        HTTP2_HEADER_WWW_AUTHENTICATE: "www-authenticate",
        HTTP2_HEADER_X_CONTENT_TYPE_OPTIONS: "x-content-type-options",
        HTTP2_HEADER_X_FORWARDED_FOR: "x-forwarded-for",
        HTTP2_HEADER_X_FRAME_OPTIONS: "x-frame-options",
        HTTP2_HEADER_X_XSS_PROTECTION: "x-xss-protection",
        HTTP2_METHOD_ACL: "ACL",
        HTTP2_METHOD_BASELINE_CONTROL: "BASELINE-CONTROL",
        HTTP2_METHOD_BIND: "BIND",
        HTTP2_METHOD_CHECKIN: "CHECKIN",
        HTTP2_METHOD_CHECKOUT: "CHECKOUT",
        HTTP2_METHOD_CONNECT: "CONNECT",
        HTTP2_METHOD_COPY: "COPY",
        HTTP2_METHOD_DELETE: "DELETE",
        HTTP2_METHOD_GET: "GET",
        HTTP2_METHOD_HEAD: "HEAD",
        HTTP2_METHOD_LABEL: "LABEL",
        HTTP2_METHOD_LINK: "LINK",
        HTTP2_METHOD_LOCK: "LOCK",
        HTTP2_METHOD_MERGE: "MERGE",
        HTTP2_METHOD_MKACTIVITY: "MKACTIVITY",
        HTTP2_METHOD_MKCALENDAR: "MKCALENDAR",
        HTTP2_METHOD_MKCOL: "MKCOL",
        HTTP2_METHOD_MKREDIRECTREF: "MKREDIRECTREF",
        HTTP2_METHOD_MKWORKSPACE: "MKWORKSPACE",
        HTTP2_METHOD_MOVE: "MOVE",
        HTTP2_METHOD_OPTIONS: "OPTIONS",
        HTTP2_METHOD_ORDERPATCH: "ORDERPATCH",
        HTTP2_METHOD_PATCH: "PATCH",
        HTTP2_METHOD_POST: "POST",
        HTTP2_METHOD_PRI: "PRI",
        HTTP2_METHOD_PROPFIND: "PROPFIND",
        HTTP2_METHOD_PROPPATCH: "PROPPATCH",
        HTTP2_METHOD_PUT: "PUT",
        HTTP2_METHOD_REBIND: "REBIND",
        HTTP2_METHOD_REPORT: "REPORT",
        HTTP2_METHOD_SEARCH: "SEARCH",
        HTTP2_METHOD_TRACE: "TRACE",
        HTTP2_METHOD_UNBIND: "UNBIND",
        HTTP2_METHOD_UNCHECKOUT: "UNCHECKOUT",
        HTTP2_METHOD_UNLINK: "UNLINK",
        HTTP2_METHOD_UNLOCK: "UNLOCK",
        HTTP2_METHOD_UPDATE: "UPDATE",
        HTTP2_METHOD_UPDATEREDIRECTREF: "UPDATEREDIRECTREF",
        HTTP2_METHOD_VERSION_CONTROL: "VERSION-CONTROL",
        MAX_INITIAL_WINDOW_SIZE: 2147483647,
        MAX_MAX_FRAME_SIZE: 16777215,
        MIN_MAX_FRAME_SIZE: 16384,
        NGHTTP2_CANCEL: 8,
        NGHTTP2_COMPRESSION_ERROR: 9,
        NGHTTP2_CONNECT_ERROR: 10,
        NGHTTP2_DEFAULT_WEIGHT: 16,
        NGHTTP2_ENHANCE_YOUR_CALM: 11,
        NGHTTP2_ERR_FRAME_SIZE_ERROR: -522,
        NGHTTP2_FLAG_ACK: 1,
        NGHTTP2_FLAG_END_HEADERS: 4,
        NGHTTP2_FLAG_END_STREAM: 1,
        NGHTTP2_FLAG_NONE: 0,
        NGHTTP2_FLAG_PADDED: 8,
        NGHTTP2_FLAG_PRIORITY: 32,
        NGHTTP2_FLOW_CONTROL_ERROR: 3,
        NGHTTP2_FRAME_SIZE_ERROR: 6,
        NGHTTP2_HTTP_1_1_REQUIRED: 13,
        NGHTTP2_INADEQUATE_SECURITY: 12,
        NGHTTP2_INTERNAL_ERROR: 2,
        NGHTTP2_NO_ERROR: 0,
        NGHTTP2_PROTOCOL_ERROR: 1,
        NGHTTP2_REFUSED_STREAM: 7,
        NGHTTP2_SESSION_CLIENT: 1,
        NGHTTP2_SESSION_SERVER: 0,
        NGHTTP2_SETTINGS_ENABLE_CONNECT_PROTOCOL: 8,
        NGHTTP2_SETTINGS_ENABLE_PUSH: 2,
        NGHTTP2_SETTINGS_HEADER_TABLE_SIZE: 1,
        NGHTTP2_SETTINGS_INITIAL_WINDOW_SIZE: 4,
        NGHTTP2_SETTINGS_MAX_CONCURRENT_STREAMS: 3,
        NGHTTP2_SETTINGS_MAX_FRAME_SIZE: 5,
        NGHTTP2_SETTINGS_MAX_HEADER_LIST_SIZE: 6,
        NGHTTP2_SETTINGS_TIMEOUT: 4,
        NGHTTP2_STREAM_CLOSED: 5,
        NGHTTP2_STREAM_STATE_CLOSED: 7,
        NGHTTP2_STREAM_STATE_HALF_CLOSED_LOCAL: 5,
        NGHTTP2_STREAM_STATE_HALF_CLOSED_REMOTE: 6,
        NGHTTP2_STREAM_STATE_IDLE: 1,
        NGHTTP2_STREAM_STATE_OPEN: 2,
        NGHTTP2_STREAM_STATE_RESERVED_LOCAL: 3,
        NGHTTP2_STREAM_STATE_RESERVED_REMOTE: 4,
        PADDING_STRATEGY_ALIGNED: 1,
        PADDING_STRATEGY_CALLBACK: 1,
        PADDING_STRATEGY_MAX: 2,
        PADDING_STRATEGY_NONE: 0
    },
    createSecureServer: <ref *4> ƒ createSecureServer(length: 2) {},
    createServer: <ref *5> ƒ createServer(length: 2) {},
    default: {
        connect: [Circular: *2],
        constants: [Circular: *3],
        createSecureServer: [Circular: *4],
        createServer: [Circular: *5],
        getDefaultSettings: <ref *7> ƒ getDefaultSettings(length: 0) {},
        getPackedSettings: <ref *8> ƒ getPackedSettings(length: 1) {},
        getUnpackedSettings: <ref *9> ƒ getUnpackedSettings(length: 1) {},
        Http2ServerRequest: <ref *10> class Http2ServerRequest extends Readable {},
        Http2ServerResponse: <ref *11> class Http2ServerResponse extends Stream {},
        performServerHandshake: <ref *12> ƒ performServerHandshake(length: 1) {},
        sensitiveHeaders: Symbol(sensitiveHeaders)
    },
    getDefaultSettings: [Circular: *7],
    getPackedSettings: [Circular: *8],
    getUnpackedSettings: [Circular: *9],
    Http2ServerRequest: [Circular: *10],
    Http2ServerResponse: [Circular: *11],
    performServerHandshake: [Circular: *12],
    sensitiveHeaders: Symbol(sensitiveHeaders)
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    addAbortListener: <ref *2> ƒ addAbortListener(length: 2) {},
    ClientHttp2Session: <ref *3> class ClientHttp2Session extends Http2Session {},
    connect: <ref *4> ƒ connect(length: 3) {},
    constants: <ref *5> {
        DEFAULT_SETTINGS_ENABLE_CONNECT_PROTOCOL: 0,
        DEFAULT_SETTINGS_ENABLE_PUSH: 1,
        DEFAULT_SETTINGS_HEADER_TABLE_SIZE: 4096,
        DEFAULT_SETTINGS_INITIAL_WINDOW_SIZE: 65535,
        DEFAULT_SETTINGS_MAX_CONCURRENT_STREAMS: 4294967295,
        DEFAULT_SETTINGS_MAX_FRAME_SIZE: 16384,
        DEFAULT_SETTINGS_MAX_HEADER_LIST_SIZE: 65535,
        ENABLE_CONNECT_PROTOCOL: 8,
        ENABLE_PUSH: 2,
        HEADER_TABLE_SIZE: 1,
        HTTP_STATUS_CONTINUE: 100,
        HTTP_STATUS_EARLY_HINTS: 103,
        HTTP_STATUS_EXPECTATION_FAILED: 417,
        HTTP_STATUS_METHOD_NOT_ALLOWED: 405,
        HTTP_STATUS_MISDIRECTED_REQUEST: 421,
        HTTP_STATUS_NO_CONTENT: 204,
        HTTP_STATUS_NOT_MODIFIED: 304,
        HTTP_STATUS_OK: 200,
        HTTP_STATUS_RESET_CONTENT: 205,
        HTTP_STATUS_SWITCHING_PROTOCOLS: 101,
        HTTP2_HEADER_ACCEPT: "accept",
        HTTP2_HEADER_ACCEPT_CHARSET: "accept-charset",
        HTTP2_HEADER_ACCEPT_ENCODING: "accept-encoding",
        HTTP2_HEADER_ACCEPT_LANGUAGE: "accept-language",
        HTTP2_HEADER_ACCEPT_RANGES: "accept-ranges",
        HTTP2_HEADER_ACCESS_CONTROL_ALLOW_CREDENTIALS: "access-control-allow-credentials",
        HTTP2_HEADER_ACCESS_CONTROL_ALLOW_HEADERS: "access-control-allow-headers",
        HTTP2_HEADER_ACCESS_CONTROL_ALLOW_METHODS: "access-control-allow-methods",
        HTTP2_HEADER_ACCESS_CONTROL_ALLOW_ORIGIN: "access-control-allow-origin",
        HTTP2_HEADER_ACCESS_CONTROL_EXPOSE_HEADERS: "access-control-expose-headers",
        HTTP2_HEADER_ACCESS_CONTROL_MAX_AGE: "access-control-max-age",
        HTTP2_HEADER_ACCESS_CONTROL_REQUEST_HEADERS: "access-control-request-headers",
        HTTP2_HEADER_ACCESS_CONTROL_REQUEST_METHOD: "access-control-request-method",
        HTTP2_HEADER_AGE: "age",
        HTTP2_HEADER_ALLOW: "allow",
        HTTP2_HEADER_ALT_SVC: "alt-svc",
        HTTP2_HEADER_AUTHORITY: ":authority",
        HTTP2_HEADER_AUTHORIZATION: "authorization",
        HTTP2_HEADER_CACHE_CONTROL: "cache-control",
        HTTP2_HEADER_CONNECTION: "connection",
        HTTP2_HEADER_CONTENT_DISPOSITION: "content-disposition",
        HTTP2_HEADER_CONTENT_ENCODING: "content-encoding",
        HTTP2_HEADER_CONTENT_LANGUAGE: "content-language",
        HTTP2_HEADER_CONTENT_LENGTH: "content-length",
        HTTP2_HEADER_CONTENT_LOCATION: "content-location",
        HTTP2_HEADER_CONTENT_MD5: "content-md5",
        HTTP2_HEADER_CONTENT_RANGE: "content-range",
        HTTP2_HEADER_CONTENT_SECURITY_POLICY: "content-security-policy",
        HTTP2_HEADER_CONTENT_TYPE: "content-type",
        HTTP2_HEADER_COOKIE: "cookie",
        HTTP2_HEADER_DATE: "date",
        HTTP2_HEADER_DNT: "dnt",
        HTTP2_HEADER_EARLY_DATA: "early-data",
        HTTP2_HEADER_ETAG: "etag",
        HTTP2_HEADER_EXPECT: "expect",
        HTTP2_HEADER_EXPECT_CT: "expect-ct",
        HTTP2_HEADER_EXPIRES: "expires",
        HTTP2_HEADER_FORWARDED: "forwarded",
        HTTP2_HEADER_FROM: "from",
        HTTP2_HEADER_HOST: "host",
        HTTP2_HEADER_HTTP2_SETTINGS: "http2-settings",
        HTTP2_HEADER_IF_MATCH: "if-match",
        HTTP2_HEADER_IF_MODIFIED_SINCE: "if-modified-since",
        HTTP2_HEADER_IF_NONE_MATCH: "if-none-match",
        HTTP2_HEADER_IF_RANGE: "if-range",
        HTTP2_HEADER_IF_UNMODIFIED_SINCE: "if-unmodified-since",
        HTTP2_HEADER_KEEP_ALIVE: "keep-alive",
        HTTP2_HEADER_LAST_MODIFIED: "last-modified",
        HTTP2_HEADER_LINK: "link",
        HTTP2_HEADER_LOCATION: "location",
        HTTP2_HEADER_MAX_FORWARDS: "max-forwards",
        HTTP2_HEADER_METHOD: ":method",
        HTTP2_HEADER_ORIGIN: "origin",
        HTTP2_HEADER_PATH: ":path",
        HTTP2_HEADER_PREFER: "prefer",
        HTTP2_HEADER_PRIORITY: "priority",
        HTTP2_HEADER_PROTOCOL: ":protocol",
        HTTP2_HEADER_PROXY_AUTHENTICATE: "proxy-authenticate",
        HTTP2_HEADER_PROXY_AUTHORIZATION: "proxy-authorization",
        HTTP2_HEADER_PROXY_CONNECTION: "proxy-connection",
        HTTP2_HEADER_PURPOSE: "purpose",
        HTTP2_HEADER_RANGE: "range",
        HTTP2_HEADER_REFERER: "referer",
        HTTP2_HEADER_REFRESH: "refresh",
        HTTP2_HEADER_RETRY_AFTER: "retry-after",
        HTTP2_HEADER_SCHEME: ":scheme",
        HTTP2_HEADER_SERVER: "server",
        HTTP2_HEADER_SET_COOKIE: "set-cookie",
        HTTP2_HEADER_STATUS: ":status",
        HTTP2_HEADER_STRICT_TRANSPORT_SECURITY: "strict-transport-security",
        HTTP2_HEADER_TE: "te",
        HTTP2_HEADER_TIMING_ALLOW_ORIGIN: "timing-allow-origin",
        HTTP2_HEADER_TK: "tk",
        HTTP2_HEADER_TRAILER: "trailer",
        HTTP2_HEADER_TRANSFER_ENCODING: "transfer-encoding",
        HTTP2_HEADER_UPGRADE: "upgrade",
        HTTP2_HEADER_UPGRADE_INSECURE_REQUESTS: "upgrade-insecure-requests",
        HTTP2_HEADER_USER_AGENT: "user-agent",
        HTTP2_HEADER_VARY: "vary",
        HTTP2_HEADER_VIA: "via",
        HTTP2_HEADER_WARNING: "warning",
        HTTP2_HEADER_WWW_AUTHENTICATE: "www-authenticate",
        HTTP2_HEADER_X_CONTENT_TYPE_OPTIONS: "x-content-type-options",
        HTTP2_HEADER_X_FORWARDED_FOR: "x-forwarded-for",
        HTTP2_HEADER_X_FRAME_OPTIONS: "x-frame-options",
        HTTP2_HEADER_X_XSS_PROTECTION: "x-xss-protection",
        HTTP2_METHOD_CONNECT: "CONNECT",
        HTTP2_METHOD_DELETE: "DELETE",
        HTTP2_METHOD_GET: "GET",
        HTTP2_METHOD_HEAD: "HEAD",
        INITIAL_WINDOW_SIZE: 4,
        MAX_CONCURRENT_STREAMS: 3,
        MAX_FRAME_SIZE: 5,
        MAX_HEADER_LIST_SIZE: 6,
        MAX_INITIAL_WINDOW_SIZE: 2147483647,
        MAX_MAX_FRAME_SIZE: 16777215,
        MIN_MAX_FRAME_SIZE: 16384,
        NGHTTP2_CANCEL: 8,
        NGHTTP2_COMPRESSION_ERROR: 9,
        NGHTTP2_CONNECT_ERROR: 10,
        NGHTTP2_DEFAULT_WEIGHT: 16,
        NGHTTP2_ENHANCE_YOUR_CALM: 11,
        NGHTTP2_ERR_DEFERRED: -508,
        NGHTTP2_ERR_FRAME_SIZE_ERROR: -522,
        NGHTTP2_ERR_INVALID_ARGUMENT: -501,
        NGHTTP2_ERR_NOMEM: -901,
        NGHTTP2_ERR_STREAM_CLOSED: -510,
        NGHTTP2_ERR_STREAM_ID_NOT_AVAILABLE: -509,
        NGHTTP2_FLAG_ACK: 1,
        NGHTTP2_FLAG_END_HEADERS: 4,
        NGHTTP2_FLAG_END_STREAM: 1,
        NGHTTP2_FLAG_NONE: 0,
        NGHTTP2_FLAG_PADDED: 8,
        NGHTTP2_FLAG_PRIORITY: 32,
        NGHTTP2_FLOW_CONTROL_ERROR: 3,
        NGHTTP2_FRAME_SIZE_ERROR: 6,
        NGHTTP2_HCAT_HEADERS: 3,
        NGHTTP2_HCAT_PUSH_RESPONSE: 2,
        NGHTTP2_HCAT_REQUEST: 0,
        NGHTTP2_HCAT_RESPONSE: 1,
        NGHTTP2_HTTP_1_1_REQUIRED: 13,
        NGHTTP2_INADEQUATE_SECURITY: 12,
        NGHTTP2_INTERNAL_ERROR: 2,
        NGHTTP2_NO_ERROR: 0,
        NGHTTP2_NV_FLAG_NO_INDEX: 1,
        NGHTTP2_NV_FLAG_NONE: 0,
        NGHTTP2_PROTOCOL_ERROR: 1,
        NGHTTP2_REFUSED_STREAM: 7,
        NGHTTP2_SESSION_CLIENT: 1,
        NGHTTP2_SESSION_SERVER: 0,
        NGHTTP2_SETTINGS_ENABLE_CONNECT_PROTOCOL: 8,
        NGHTTP2_SETTINGS_ENABLE_PUSH: 2,
        NGHTTP2_SETTINGS_HEADER_TABLE_SIZE: 1,
        NGHTTP2_SETTINGS_INITIAL_WINDOW_SIZE: 4,
        NGHTTP2_SETTINGS_MAX_CONCURRENT_STREAMS: 3,
        NGHTTP2_SETTINGS_MAX_FRAME_SIZE: 5,
        NGHTTP2_SETTINGS_MAX_HEADER_LIST_SIZE: 6,
        NGHTTP2_SETTINGS_TIMEOUT: 4,
        NGHTTP2_STREAM_CLOSED: 5,
        NGHTTP2_STREAM_STATE_CLOSED: 7,
        NGHTTP2_STREAM_STATE_HALF_CLOSED_LOCAL: 5,
        NGHTTP2_STREAM_STATE_HALF_CLOSED_REMOTE: 6,
        NGHTTP2_STREAM_STATE_IDLE: 1,
        NGHTTP2_STREAM_STATE_OPEN: 2,
        NGHTTP2_STREAM_STATE_RESERVED_LOCAL: 3,
        NGHTTP2_STREAM_STATE_RESERVED_REMOTE: 4,
        PADDING_STRATEGY_ALIGNED: 1,
        PADDING_STRATEGY_CALLBACK: 1,
        PADDING_STRATEGY_MAX: 2,
        PADDING_STRATEGY_NONE: 0,
        STREAM_OPTION_EMPTY_PAYLOAD: 1,
        STREAM_OPTION_GET_TRAILERS: 2
    },
    createSecureServer: <ref *6> ƒ createSecureServer(length: 2) {},
    createServer: <ref *7> ƒ createServer(length: 2) {},
    default: {
        addAbortListener: [Circular: *2],
        ClientHttp2Session: [Circular: *3],
        connect: [Circular: *4],
        constants: [Circular: *5],
        createSecureServer: [Circular: *6],
        createServer: [Circular: *7],
        getDefaultSettings: <ref *9> ƒ getDefaultSettings(length: 0) {},
        getPackedSettings: <ref *10> ƒ getPackedSettings(length: 1) {},
        getUnpackedSettings: <ref *11> ƒ getUnpackedSettings(length: 1) {},
        Http2ServerRequest: <ref *12> class Http2ServerRequest extends C().Readable {},
        Http2ServerResponse: <ref *13> class Http2ServerResponse extends C().default {},
        Http2Session: <ref *14> class Http2Session extends nt {},
        Http2Stream: <ref *15> class Http2Stream extends Ge {},
        performServerHandshake: <ref *16> ƒ performServerHandshake(length: 1) {},
        sensitiveHeaders: Symbol(sensitiveHeaders),
        ServerHttp2Session: <ref *17> class ServerHttp2Session extends Http2Session {}
    },
    getDefaultSettings: [Circular: *9],
    getPackedSettings: [Circular: *10],
    getUnpackedSettings: [Circular: *11],
    Http2ServerRequest: [Circular: *12],
    Http2ServerResponse: [Circular: *13],
    Http2Session: [Circular: *14],
    Http2Stream: [Circular: *15],
    performServerHandshake: [Circular: *16],
    sensitiveHeaders: Symbol(sensitiveHeaders),
    ServerHttp2Session: [Circular: *17]
}
```

</td>
    </tr>
  </table>
</details>

<details id="https">
  <summary><code>https</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    Agent: <ref *2> ƒ Agent(length: 1) {},
    createServer: <ref *3> ƒ createServer(length: 2) {},
    default: {
        Agent: [Circular: *2],
        createServer: [Circular: *3],
        get: <ref *5> ƒ get(length: 3) {},
        globalAgent: <ref *6> Agent {
            _events: [Object: null prototype] {
                free: ƒ (length: 2) {},
                newListener: ƒ maybeEnableKeylog(length: 1) {}
            },
            _eventsCount: 2,
            _maxListeners: undefined,
            _sessionCache: {
                list: [],
                map: {}
            },
            agentKeepAliveTimeoutBuffer: 1000,
            defaultPort: 443,
            freeSockets: [Object: null prototype] {},
            keepAlive: true,
            keepAliveMsecs: 1000,
            maxCachedSessions: 100,
            maxFreeSockets: 256,
            maxSockets: Infinity,
            maxTotalSockets: Infinity,
            options: [Object: null prototype] {
                defaultPort: 443,
                keepAlive: true,
                noDelay: true,
                path: null,
                protocol: "https:",
                proxyEnv: undefined,
                scheduling: "lifo",
                timeout: 5000
            },
            protocol: "https:",
            requests: [Object: null prototype] {},
            scheduling: "lifo",
            sockets: [Object: null prototype] {},
            Symbol(kCapture): false,
            Symbol(shapeMode): false,
            totalSocketCount: 0
        },
        request: <ref *17> ƒ request(length: 0) {},
        Server: <ref *18> ƒ Server(length: 2) {}
    },
    get: [Circular: *5],
    globalAgent: [Circular: *6],
    request: [Circular: *17],
    Server: [Circular: *18]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    Agent: <ref *2> ƒ Agent(length: 1) {},
    createServer: <ref *3> ƒ createServer(length: 2) {},
    default: {
        Agent: [Circular: *2],
        createServer: [Circular: *3],
        get: <ref *5> ƒ get(length: 0) {},
        [get/set] globalAgent: <ref *6> Agent {
            _events: [Object: null prototype] {
                free: ƒ (length: 2) {},
                newListener: ƒ maybeEnableKeylog(length: 1) {}
            },
            _eventsCount: 2,
            _maxListeners: undefined,
            _sessionCache: {
                list: [],
                map: {}
            },
            agentKeepAliveTimeoutBuffer: 1000,
            defaultPort: 443,
            freeSockets: [Object: null prototype] {},
            keepAlive: true,
            keepAliveMsecs: 1000,
            maxCachedSessions: 100,
            maxFreeSockets: 256,
            maxSockets: Infinity,
            maxTotalSockets: Infinity,
            options: [Object: null prototype] {
                defaultPort: 443,
                keepAlive: true,
                noDelay: true,
                path: null,
                protocol: "https:",
                scheduling: "lifo",
                timeout: 5000
            },
            protocol: "https:",
            requests: [Object: null prototype] {},
            scheduling: "lifo",
            sockets: [Object: null prototype] {},
            Symbol(kCapture): false,
            totalSocketCount: 0
        },
        request: <ref *17> ƒ node:https:request(length: 0) {},
        Server: <ref *18> ƒ Server(length: 2) {}
    },
    get: [Circular: *5],
    globalAgent: [Circular: *6],
    request: [Circular: *17],
    Server: [Circular: *18]
}
```

</td>
    </tr>
  </table>
</details>

<details id="inspector">
  <summary><code>inspector</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    close: <ref *2> ƒ _debugEnd(length: 0) {},
    console: <ref *3> {
        assert: ƒ assert(length: 0) {},
        clear: ƒ clear(length: 0) {},
        context: ƒ context(length: 1) {},
        count: ƒ count(length: 0) {},
        countReset: ƒ countReset(length: 0) {},
        debug: ƒ debug(length: 0) {},
        dir: ƒ dir(length: 0) {},
        dirxml: ƒ dirxml(length: 0) {},
        error: ƒ error(length: 0) {},
        group: ƒ group(length: 0) {},
        groupCollapsed: ƒ groupCollapsed(length: 0) {},
        groupEnd: ƒ groupEnd(length: 0) {},
        info: ƒ info(length: 0) {},
        log: ƒ log(length: 0) {},
        profile: ƒ profile(length: 0) {},
        profileEnd: ƒ profileEnd(length: 0) {},
        table: ƒ table(length: 0) {},
        time: ƒ time(length: 0) {},
        timeEnd: ƒ timeEnd(length: 0) {},
        timeLog: ƒ timeLog(length: 0) {},
        timeStamp: ƒ timeStamp(length: 0) {},
        trace: ƒ trace(length: 0) {},
        warn: ƒ warn(length: 0) {}
    },
    default: {
        close: [Circular: *2],
        console: [Circular: *3],
        DOMStorage: <ref *28> {
            domStorageItemAdded: ƒ domStorageItemAdded(length: 1) {},
            domStorageItemRemoved: ƒ domStorageItemRemoved(length: 1) {},
            domStorageItemsCleared: ƒ domStorageItemsCleared(length: 1) {},
            domStorageItemUpdated: ƒ domStorageItemUpdated(length: 1) {},
            registerStorage: ƒ registerStorage(length: 1) {}
        },
        Network: <ref *34> {
            dataReceived: ƒ dataReceived(length: 1) {},
            dataSent: ƒ dataSent(length: 1) {},
            loadingFailed: ƒ loadingFailed(length: 1) {},
            loadingFinished: ƒ loadingFinished(length: 1) {},
            requestWillBeSent: ƒ requestWillBeSent(length: 1) {},
            responseReceived: ƒ responseReceived(length: 1) {},
            webSocketClosed: ƒ webSocketClosed(length: 1) {},
            webSocketCreated: ƒ webSocketCreated(length: 1) {},
            webSocketHandshakeResponseReceived: ƒ webSocketHandshakeResponseReceived(length: 1) {}
        },
        NetworkResources: <ref *44> {
            put: ƒ put(length: 2) {}
        },
        open: <ref *46> ƒ inspectorOpen(length: 3) {},
        Session: <ref *47> class Session extends EventEmitter {},
        url: <ref *48> ƒ url(length: 0) {},
        waitForDebugger: <ref *49> ƒ inspectorWaitForDebugger(length: 0) {}
    },
    DOMStorage: [Circular: *28],
    Network: [Circular: *34],
    NetworkResources: [Circular: *44],
    open: [Circular: *46],
    Session: [Circular: *47],
    url: [Circular: *48],
    waitForDebugger: [Circular: *49]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    close: <ref *2> ƒ close(length: 0) {},
    console: <ref *3> {
        assert: ƒ assert(length: 0) {},
        clear: ƒ clear(length: 0) {},
        context: ƒ context(length: 1) {},
        count: ƒ count(length: 0) {},
        countReset: ƒ countReset(length: 0) {},
        debug: ƒ debug(length: 0) {},
        dir: ƒ dir(length: 0) {},
        dirxml: ƒ dirxml(length: 0) {},
        error: ƒ error(length: 0) {},
        group: ƒ group(length: 0) {},
        groupCollapsed: ƒ groupCollapsed(length: 0) {},
        groupEnd: ƒ groupEnd(length: 0) {},
        info: ƒ info(length: 0) {},
        log: ƒ log(length: 0) {},
        profile: ƒ profile(length: 0) {},
        profileEnd: ƒ profileEnd(length: 0) {},
        table: ƒ table(length: 0) {},
        time: ƒ time(length: 0) {},
        timeEnd: ƒ timeEnd(length: 0) {},
        timeLog: ƒ timeLog(length: 0) {},
        timeStamp: ƒ timeStamp(length: 0) {},
        trace: ƒ trace(length: 0) {},
        warn: ƒ warn(length: 0) {}
    },
    default: {
        close: [Circular: *2],
        console: [Circular: *3],
        DOMStorage: <ref *28> {
            domStorageItemAdded: ƒ domStorageItemAdded(length: 1) {},
            domStorageItemRemoved: ƒ domStorageItemRemoved(length: 1) {},
            domStorageItemsCleared: ƒ domStorageItemsCleared(length: 1) {},
            domStorageItemUpdated: ƒ domStorageItemUpdated(length: 1) {},
            registerStorage: ƒ registerStorage(length: 1) {}
        },
        Network: <ref *34> {
            dataReceived: ƒ dataReceived(length: 1) {},
            dataSent: ƒ dataSent(length: 1) {},
            loadingFailed: ƒ loadingFailed(length: 1) {},
            loadingFinished: ƒ loadingFinished(length: 1) {},
            requestWillBeSent: ƒ requestWillBeSent(length: 1) {},
            responseReceived: ƒ responseReceived(length: 1) {},
            webSocketClosed: ƒ webSocketClosed(length: 1) {},
            webSocketCreated: ƒ webSocketCreated(length: 1) {},
            webSocketHandshakeResponseReceived: ƒ webSocketHandshakeResponseReceived(length: 1) {}
        },
        open: <ref *44> ƒ open(length: 3) {},
        Session: <ref *45> class Session extends h {},
        url: <ref *46> ƒ url(length: 0) {},
        waitForDebugger: <ref *47> ƒ waitForDebugger(length: 0) {}
    },
    DOMStorage: [Circular: *28],
    Network: [Circular: *34],
    open: [Circular: *44],
    Session: [Circular: *45],
    url: [Circular: *46],
    waitForDebugger: [Circular: *47]
}
```

</td>
    </tr>
  </table>
</details>

<details id="inspector-promises">
  <summary><code>inspector/promises</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    close: <ref *2> ƒ _debugEnd(length: 0) {},
    console: <ref *3> {
        assert: ƒ assert(length: 0) {},
        clear: ƒ clear(length: 0) {},
        context: ƒ context(length: 1) {},
        count: ƒ count(length: 0) {},
        countReset: ƒ countReset(length: 0) {},
        debug: ƒ debug(length: 0) {},
        dir: ƒ dir(length: 0) {},
        dirxml: ƒ dirxml(length: 0) {},
        error: ƒ error(length: 0) {},
        group: ƒ group(length: 0) {},
        groupCollapsed: ƒ groupCollapsed(length: 0) {},
        groupEnd: ƒ groupEnd(length: 0) {},
        info: ƒ info(length: 0) {},
        log: ƒ log(length: 0) {},
        profile: ƒ profile(length: 0) {},
        profileEnd: ƒ profileEnd(length: 0) {},
        table: ƒ table(length: 0) {},
        time: ƒ time(length: 0) {},
        timeEnd: ƒ timeEnd(length: 0) {},
        timeLog: ƒ timeLog(length: 0) {},
        timeStamp: ƒ timeStamp(length: 0) {},
        trace: ƒ trace(length: 0) {},
        warn: ƒ warn(length: 0) {}
    },
    default: {
        close: [Circular: *2],
        console: [Circular: *3],
        DOMStorage: <ref *28> {
            domStorageItemAdded: ƒ domStorageItemAdded(length: 1) {},
            domStorageItemRemoved: ƒ domStorageItemRemoved(length: 1) {},
            domStorageItemsCleared: ƒ domStorageItemsCleared(length: 1) {},
            domStorageItemUpdated: ƒ domStorageItemUpdated(length: 1) {},
            registerStorage: ƒ registerStorage(length: 1) {}
        },
        Network: <ref *34> {
            dataReceived: ƒ dataReceived(length: 1) {},
            dataSent: ƒ dataSent(length: 1) {},
            loadingFailed: ƒ loadingFailed(length: 1) {},
            loadingFinished: ƒ loadingFinished(length: 1) {},
            requestWillBeSent: ƒ requestWillBeSent(length: 1) {},
            responseReceived: ƒ responseReceived(length: 1) {},
            webSocketClosed: ƒ webSocketClosed(length: 1) {},
            webSocketCreated: ƒ webSocketCreated(length: 1) {},
            webSocketHandshakeResponseReceived: ƒ webSocketHandshakeResponseReceived(length: 1) {}
        },
        NetworkResources: <ref *44> {
            put: ƒ put(length: 2) {}
        },
        open: <ref *46> ƒ inspectorOpen(length: 3) {},
        Session: <ref *47> class Session extends inspector.Session {},
        url: <ref *48> ƒ url(length: 0) {},
        waitForDebugger: <ref *49> ƒ inspectorWaitForDebugger(length: 0) {}
    },
    DOMStorage: [Circular: *28],
    Network: [Circular: *34],
    NetworkResources: [Circular: *44],
    open: [Circular: *46],
    Session: [Circular: *47],
    url: [Circular: *48],
    waitForDebugger: [Circular: *49]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    close: <ref *2> ƒ close(length: 0) {},
    console: <ref *3> {
        assert: ƒ assert(length: 0) {},
        clear: ƒ clear(length: 0) {},
        context: ƒ context(length: 1) {},
        count: ƒ count(length: 0) {},
        countReset: ƒ countReset(length: 0) {},
        debug: ƒ debug(length: 0) {},
        dir: ƒ dir(length: 0) {},
        dirxml: ƒ dirxml(length: 0) {},
        error: ƒ error(length: 0) {},
        group: ƒ group(length: 0) {},
        groupCollapsed: ƒ groupCollapsed(length: 0) {},
        groupEnd: ƒ groupEnd(length: 0) {},
        info: ƒ info(length: 0) {},
        log: ƒ log(length: 0) {},
        profile: ƒ profile(length: 0) {},
        profileEnd: ƒ profileEnd(length: 0) {},
        table: ƒ table(length: 0) {},
        time: ƒ time(length: 0) {},
        timeEnd: ƒ timeEnd(length: 0) {},
        timeLog: ƒ timeLog(length: 0) {},
        timeStamp: ƒ timeStamp(length: 0) {},
        trace: ƒ trace(length: 0) {},
        warn: ƒ warn(length: 0) {}
    },
    default: {
        close: [Circular: *2],
        console: [Circular: *3],
        DOMStorage: <ref *28> {
            domStorageItemAdded: ƒ domStorageItemAdded(length: 1) {},
            domStorageItemRemoved: ƒ domStorageItemRemoved(length: 1) {},
            domStorageItemsCleared: ƒ domStorageItemsCleared(length: 1) {},
            domStorageItemUpdated: ƒ domStorageItemUpdated(length: 1) {},
            registerStorage: ƒ registerStorage(length: 1) {}
        },
        Network: <ref *34> {
            dataReceived: ƒ dataReceived(length: 1) {},
            dataSent: ƒ dataSent(length: 1) {},
            loadingFailed: ƒ loadingFailed(length: 1) {},
            loadingFinished: ƒ loadingFinished(length: 1) {},
            requestWillBeSent: ƒ requestWillBeSent(length: 1) {},
            responseReceived: ƒ responseReceived(length: 1) {},
            webSocketClosed: ƒ webSocketClosed(length: 1) {},
            webSocketCreated: ƒ webSocketCreated(length: 1) {},
            webSocketHandshakeResponseReceived: ƒ webSocketHandshakeResponseReceived(length: 1) {}
        },
        open: <ref *44> ƒ open(length: 3) {},
        Session: <ref *45> class Session extends r.Session {},
        url: <ref *46> ƒ url(length: 0) {},
        waitForDebugger: <ref *47> ƒ waitForDebugger(length: 0) {}
    },
    DOMStorage: [Circular: *28],
    Network: [Circular: *34],
    open: [Circular: *44],
    Session: [Circular: *45],
    url: [Circular: *46],
    waitForDebugger: [Circular: *47]
}
```

</td>
    </tr>
  </table>
</details>

<details id="module">
  <summary><code>module</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    _cache: <ref *2> [Object: null prototype] {},
    _extensions: <ref *3> [Object: null prototype] {
        .js: ƒ (length: 2) {},
        .json: ƒ (length: 2) {},
        .node: ƒ (length: 2) {}
    },
    _findPath: <ref *7> ƒ (length: 3) {},
    _initPaths: <ref *8> ƒ (length: 0) {},
    _load: <ref *9> ƒ (length: 3) {},
    _nodeModulePaths: <ref *10> ƒ (length: 1) {},
    _pathCache: <ref *11> [Object: null prototype] {},
    _preloadModules: <ref *12> ƒ (length: 1) {},
    _resolveFilename: <ref *13> ƒ (length: 4) {},
    _resolveLookupPaths: <ref *14> ƒ (length: 2) {},
    builtinModules: <ref *15> [
        "_http_agent",
        "_http_client",
        "_http_common",
        "_http_incoming",
        "_http_outgoing",
        "_http_server",
        "assert",
        "assert/strict",
        "async_hooks",
        "buffer",
        "child_process",
        "cluster",
        "console",
        "constants",
        "crypto",
        "dgram",
        "diagnostics_channel",
        "dns",
        "dns/promises",
        "domain",
        "events",
        "fs",
        "fs/promises",
        "http",
        "http2",
        "https",
        "inspector",
        "inspector/promises",
        "module",
        "net",
        "net/promises",
        "os",
        "path",
        "path/posix",
        "path/win32",
        "perf_hooks",
        "process",
        "punycode",
        "querystring",
        "readline",
        "readline/promises",
        "repl",
        "stream",
        "stream/consumers",
        "stream/promises",
        "stream/web",
        "string_decoder",
        "sys",
        "timers",
        "timers/promises",
        "tls",
        "trace_events",
        "tty",
        "url",
        "util",
        "util/types",
        "v8",
        "vm",
        "wasi",
        "worker_threads",
        "zlib",
        "node:ffi",
        "node:sea",
        "node:sqlite",
        "node:test",
        "node:test/reporters",
        "node:vfs"
    ],
    constants: <ref *16> [Object: null prototype] {
        compileCacheStatus: [Object: null prototype] {
            ALREADY_ENABLED: 2,
            DISABLED: 3,
            ENABLED: 1,
            FAILED: 0
        }
    },
    createRequire: <ref *18> ƒ createRequire(length: 1) {},
    default: <ref *19> ƒ Module(length: 0) {
        _cache: [Circular: *2],
        _extensions: [Circular: *3],
        _findPath: [Circular: *7],
        _initPaths: [Circular: *8],
        _load: [Circular: *9],
        _nodeModulePaths: [Circular: *10],
        _pathCache: [Circular: *11],
        _preloadModules: [Circular: *12],
        _resolveFilename: [Circular: *13],
        _resolveLookupPaths: [Circular: *14],
        builtinModules: [Circular: *15],
        constants: [Circular: *16],
        createRequire: [Circular: *18],
        enableCompileCache: <ref *20> ƒ enableCompileCache(length: 1) {},
        findPackageJSON: <ref *21> ƒ findPackageJSON(length: 1) {},
        findSourceMap: <ref *22> ƒ findSourceMap(length: 1) {},
        flushCompileCache: <ref *23> ƒ flushCompileCache(length: 0) {},
        getCompileCacheDir: <ref *24> ƒ getCompileCacheDir(length: 0) {},
        getSourceMapsSupport: <ref *25> ƒ getSourceMapsSupport(length: 0) {},
        globalPaths: <ref *26> [
            "/home/runner/.node_modules",
            "/home/runner/.node_libraries",
            "/opt/hostedtoolcache/node/27.0.0-alpha.0.1.0/x64/lib/node"
        ],
        isBuiltin: <ref *27> ƒ isBuiltin(length: 1) {},
        Module: [Circular: *19],
        register: <ref *28> ƒ register(length: 1) {},
        registerHooks: <ref *29> ƒ registerHooks(length: 1) {},
        runMain: <ref *30> ƒ executeUserEntryPoint(length: 0) {},
        setSourceMapsSupport: <ref *31> ƒ setSourceMapsSupport(length: 1) {},
        SourceMap: <ref *32> class SourceMap {},
        stripTypeScriptTypes: <ref *33> ƒ stripTypeScriptTypes(length: 1) {},
        syncBuiltinESMExports: <ref *34> ƒ syncBuiltinESMExports(length: 0) {}
    },
    enableCompileCache: [Circular: *20],
    findPackageJSON: [Circular: *21],
    findSourceMap: [Circular: *22],
    flushCompileCache: [Circular: *23],
    getCompileCacheDir: [Circular: *24],
    getSourceMapsSupport: [Circular: *25],
    globalPaths: [Circular: *26],
    isBuiltin: [Circular: *27],
    Module: [Circular: *19],
    register: [Circular: *28],
    registerHooks: [Circular: *29],
    runMain: [Circular: *30],
    setSourceMapsSupport: [Circular: *31],
    SourceMap: [Circular: *32],
    stripTypeScriptTypes: [Circular: *33],
    syncBuiltinESMExports: [Circular: *34]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    _cache: <ref *2> [Object: null prototype] {},
    _extensions: <ref *3> [Object: null prototype] {
        .cjs: ƒ loadCjs(length: 2) {},
        .js: ƒ (length: 2) {},
        .json: ƒ (length: 2) {},
        .mjs: <ref *7> ƒ loadESMFromCJS(length: 3) {},
        .node: ƒ (length: 2) {},
        .wasm: [Circular: *7]
    },
    _findPath: <ref *9> ƒ (length: 4) {},
    _initPaths: <ref *10> ƒ (length: 0) {},
    _load: <ref *11> ƒ (length: 3) {},
    _nodeModulePaths: <ref *12> ƒ (length: 1) {},
    _pathCache: <ref *13> [Object: null prototype] {},
    _preloadModules: <ref *14> ƒ (length: 1) {},
    _resolveFilename: <ref *15> ƒ (length: 4) {},
    _resolveLookupPaths: <ref *16> ƒ (length: 2) {},
    _stat: ƒ op_require_stat(length: 2) {},
    builtinModules: <ref *18> [
        "buffer",
        "console",
        "diagnostics_channel",
        "events",
        "module",
        "path/posix",
        "path/win32",
        "path",
        "sys",
        "url",
        "util",
        "worker_threads",
        "assert",
        "async_hooks",
        "cluster",
        "constants",
        "dns",
        "dns/promises",
        "domain",
        "fs",
        "os",
        "punycode",
        "string_decoder",
        "timers",
        "timers/promises",
        "util/types",
        "vm",
        "_http_agent",
        "_http_common",
        "_http_outgoing",
        "_http_server",
        "http",
        "http2",
        "https",
        "child_process",
        "crypto",
        "dgram",
        "zlib",
        "tls",
        "_tls_common",
        "_tls_wrap",
        "repl",
        "fs/promises",
        "node:test/reporters",
        "assert/strict",
        "readline",
        "readline/promises",
        "stream/web",
        "net",
        "process",
        "stream",
        "stream/consumers",
        "stream/promises",
        "tty",
        "inspector",
        "inspector/promises",
        "perf_hooks",
        "querystring",
        "node:sqlite",
        "node:test",
        "trace_events",
        "v8",
        "wasi",
        "_stream_duplex",
        "_stream_passthrough",
        "_stream_readable",
        "_stream_transform",
        "_stream_writable"
    ],
    createRequire: <ref *19> ƒ createRequire(length: 1) {},
    default: <ref *20> ƒ Module(length: 0) {
        _cache: [Circular: *2],
        _extensions: [Circular: *3],
        _findPath: [Circular: *9],
        _initPaths: [Circular: *10],
        _load: [Circular: *11],
        _nodeModulePaths: [Circular: *12],
        _pathCache: [Circular: *13],
        _preloadModules: [Circular: *14],
        _resolveFilename: [Circular: *15],
        _resolveLookupPaths: [Circular: *16],
        builtinModules: [Circular: *18],
        createRequire: [Circular: *19],
        findPackageJSON: <ref *21> ƒ findPackageJSON(length: 1) {},
        findSourceMap: <ref *22> ƒ findSourceMap(length: 1) {},
        globalPaths: <ref *23> [],
        isBuiltin: <ref *24> ƒ isBuiltin(length: 1) {},
        Module: [Circular: *20],
        registerHooks: <ref *25> ƒ registerHooks(length: 1) {},
        runMain: <ref *26> ƒ (length: 0) {},
        SourceMap: <ref *27> class SourceMap {},
        stripTypeScriptTypes: <ref *28> ƒ stripTypeScriptTypes(length: 1) {},
        syncBuiltinESMExports: <ref *29> ƒ syncBuiltinESMExports(length: 0) {}
    },
    findPackageJSON: [Circular: *21],
    findSourceMap: [Circular: *22],
    getBuiltinModule: ƒ getBuiltinModule(length: 1) {},
    globalPaths: [Circular: *23],
    isBuiltin: [Circular: *24],
    Module: [Circular: *20],
    register: ƒ register(length: 3) {},
    registerHooks: [Circular: *25],
    runMain: [Circular: *26],
    SourceMap: [Circular: *27],
    stripTypeScriptTypes: [Circular: *28],
    syncBuiltinESMExports: [Circular: *29],
    wrap: ƒ wrap(length: 1) {}
}
```

</td>
    </tr>
  </table>
</details>

<details id="net">
  <summary><code>net</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    _createServerHandle: <ref *2> ƒ createServerHandle(length: 5) {},
    _normalizeArgs: <ref *3> ƒ normalizeArgs(length: 1) {},
    _TransferredBoundSocket: <ref *4> ƒ _TransferredBoundSocket(length: 0) {},
    BlockList: <ref *5> class BlockList {
        PRIVATE_RANGES: [
            "10.0.0.0/8",
            "172.16.0.0/12",
            "192.168.0.0/16",
            "127.0.0.0/8",
            "::1/128",
            "169.254.0.0/16",
            "fe80::/10",
            "fc00::/7"
        ]
    },
    BoundSocket: <ref *7> class BoundSocket {},
    connect: <ref *8> ƒ connect(length: 0) {},
    createConnection: [Circular: *8],
    createServer: <ref *9> ƒ createServer(length: 2) {},
    default: {
        _createServerHandle: [Circular: *2],
        _normalizeArgs: [Circular: *3],
        _TransferredBoundSocket: [Circular: *4],
        [get] BlockList: [Circular: *5],
        BoundSocket: [Circular: *7],
        connect: [Circular: *8],
        createConnection: [Circular: *8],
        createServer: [Circular: *9],
        getDefaultAutoSelectFamily: <ref *11> ƒ getDefaultAutoSelectFamily(length: 0) {},
        getDefaultAutoSelectFamilyAttemptTimeout: <ref *12> ƒ getDefaultAutoSelectFamilyAttemptTimeout(length: 0) {},
        isIP: <ref *13> ƒ isIP(length: 1) {},
        isIPv4: <ref *14> ƒ isIPv4(length: 1) {},
        isIPv6: <ref *15> ƒ isIPv6(length: 1) {},
        [get] promises: <ref *16> {
            [get] BlockList: [Circular: *5],
            connect: async ƒ connect(length: 0) {},
            [get] isIP: [Circular: *13],
            [get] isIPv4: [Circular: *14],
            [get] isIPv6: [Circular: *15],
            listen: async ƒ listen(length: 0) {},
            [get] SocketAddress: <ref *19> class SocketAddress {}
        },
        Server: <ref *20> ƒ Server(length: 2) {},
        setDefaultAutoSelectFamily: <ref *21> ƒ setDefaultAutoSelectFamily(length: 1) {},
        setDefaultAutoSelectFamilyAttemptTimeout: <ref *22> ƒ setDefaultAutoSelectFamilyAttemptTimeout(length: 1) {},
        Socket: <ref *23> ƒ Socket(length: 1) {},
        [get] SocketAddress: [Circular: *19],
        Stream: [Circular: *23]
    },
    getDefaultAutoSelectFamily: [Circular: *11],
    getDefaultAutoSelectFamilyAttemptTimeout: [Circular: *12],
    isIP: [Circular: *13],
    isIPv4: [Circular: *14],
    isIPv6: [Circular: *15],
    promises: [Circular: *16],
    Server: [Circular: *20],
    setDefaultAutoSelectFamily: [Circular: *21],
    setDefaultAutoSelectFamilyAttemptTimeout: [Circular: *22],
    Socket: [Circular: *23],
    SocketAddress: [Circular: *19],
    Stream: [Circular: *23]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    _createServerHandle: <ref *2> ƒ _createServerHandle(length: 5) {},
    _normalizeArgs: <ref *3> ƒ _normalizeArgs(length: 1) {},
    BlockList: <ref *4> class BlockList {},
    connect: <ref *5> ƒ connect(length: 0) {},
    createConnection: [Circular: *5],
    createServer: <ref *6> ƒ createServer(length: 2) {},
    default: {
        _createServerHandle: [Circular: *2],
        _normalizeArgs: [Circular: *3],
        BlockList: [Circular: *4],
        connect: [Circular: *5],
        createConnection: [Circular: *5],
        createServer: [Circular: *6],
        getDefaultAutoSelectFamily: <ref *8> ƒ getDefaultAutoSelectFamily(length: 0) {},
        getDefaultAutoSelectFamilyAttemptTimeout: <ref *9> ƒ getDefaultAutoSelectFamilyAttemptTimeout(length: 0) {},
        isIP: <ref *10> ƒ isIP(length: 1) {},
        isIPv4: <ref *11> ƒ isIPv4(length: 1) {},
        isIPv6: <ref *12> ƒ isIPv6(length: 1) {},
        Server: <ref *13> ƒ Server(length: 2) {},
        setDefaultAutoSelectFamily: <ref *14> ƒ setDefaultAutoSelectFamily(length: 1) {},
        setDefaultAutoSelectFamilyAttemptTimeout: <ref *15> ƒ setDefaultAutoSelectFamilyAttemptTimeout(length: 1) {},
        Socket: <ref *16> ƒ Socket(length: 1) {},
        SocketAddress: <ref *17> class SocketAddress {},
        Stream: [Circular: *16]
    },
    getDefaultAutoSelectFamily: [Circular: *8],
    getDefaultAutoSelectFamilyAttemptTimeout: [Circular: *9],
    isIP: [Circular: *10],
    isIPv4: [Circular: *11],
    isIPv6: [Circular: *12],
    Server: [Circular: *13],
    setDefaultAutoSelectFamily: [Circular: *14],
    setDefaultAutoSelectFamilyAttemptTimeout: [Circular: *15],
    Socket: [Circular: *16],
    SocketAddress: [Circular: *17],
    Stream: [Circular: *16]
}
```

</td>
    </tr>
  </table>
</details>

<details id="net-promises">
  <summary><code>net/promises</code> — ❌ Node-only</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    BlockList: <ref *2> class BlockList {
        PRIVATE_RANGES: [
            "10.0.0.0/8",
            "172.16.0.0/12",
            "192.168.0.0/16",
            "127.0.0.0/8",
            "::1/128",
            "169.254.0.0/16",
            "fe80::/10",
            "fc00::/7"
        ]
    },
    connect: <ref *4> async ƒ connect(length: 0) {},
    default: {
        [get] BlockList: [Circular: *2],
        connect: [Circular: *4],
        [get] isIP: <ref *6> ƒ isIP(length: 1) {},
        [get] isIPv4: <ref *7> ƒ isIPv4(length: 1) {},
        [get] isIPv6: <ref *8> ƒ isIPv6(length: 1) {},
        listen: <ref *9> async ƒ listen(length: 0) {},
        [get] SocketAddress: <ref *10> class SocketAddress {}
    },
    isIP: [Circular: *6],
    isIPv4: [Circular: *7],
    isIPv6: [Circular: *8],
    listen: [Circular: *9],
    SocketAddress: [Circular: *10]
}
```

</td>
      <td valign="top">

```js
Error importing module: No such built-in module: node:net/promises
```

</td>
    </tr>
  </table>
</details>

<details id="ffi">
  <summary><code>node:ffi</code> — ❌ Node-only</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    default: {
        dlclose: <ref *3> ƒ dlclose(length: 1) {},
        dlopen: <ref *4> ƒ dlopen(length: 2) {},
        dlsym: <ref *5> ƒ dlsym(length: 2) {},
        DynamicLibrary: <ref *6> ƒ DynamicLibrary(length: 1) {},
        exportArrayBuffer: <ref *7> ƒ exportArrayBuffer(length: 3) {},
        exportArrayBufferView: <ref *8> ƒ exportArrayBufferView(length: 3) {},
        exportBuffer: <ref *9> ƒ exportBuffer(length: 3) {},
        exportString: <ref *10> ƒ exportString(length: 3) {},
        getCurrentEventLoop: <ref *11> ƒ getCurrentEventLoop(length: 0) {},
        getFloat32: <ref *12> ƒ getFloat32(length: 0) {},
        getFloat64: <ref *13> ƒ getFloat64(length: 0) {},
        getInt16: <ref *14> ƒ getInt16(length: 0) {},
        getInt32: <ref *15> ƒ getInt32(length: 0) {},
        getInt64: <ref *16> ƒ getInt64(length: 0) {},
        getInt8: <ref *17> ƒ getInt8(length: 0) {},
        getRawPointer: <ref *18> ƒ getRawPointer(length: 0) {},
        getUint16: <ref *19> ƒ getUint16(length: 0) {},
        getUint32: <ref *20> ƒ getUint32(length: 0) {},
        getUint64: <ref *21> ƒ getUint64(length: 0) {},
        getUint8: <ref *22> ƒ getUint8(length: 0) {},
        setFloat32: <ref *23> ƒ setFloat32(length: 0) {},
        setFloat64: <ref *24> ƒ setFloat64(length: 0) {},
        setInt16: <ref *25> ƒ setInt16(length: 0) {},
        setInt32: <ref *26> ƒ setInt32(length: 0) {},
        setInt64: <ref *27> ƒ setInt64(length: 0) {},
        setInt8: <ref *28> ƒ setInt8(length: 0) {},
        setUint16: <ref *29> ƒ setUint16(length: 0) {},
        setUint32: <ref *30> ƒ setUint32(length: 0) {},
        setUint64: <ref *31> ƒ setUint64(length: 0) {},
        setUint8: <ref *32> ƒ setUint8(length: 0) {},
        suffix: "so",
        toArrayBuffer: <ref *33> ƒ toArrayBuffer(length: 0) {},
        toBuffer: <ref *34> ƒ toBuffer(length: 0) {},
        toString: <ref *35> ƒ toString(length: 0) {},
        types: <ref *36> [Object: null prototype] {
            ARRAY_BUFFER: "arraybuffer",
            BOOL: "bool",
            BUFFER: "buffer",
            CHAR: "char",
            DOUBLE: "double",
            FLOAT: "float",
            FLOAT_32: "float32",
            FLOAT_64: "float64",
            FUNCTION: "function",
            INT_16: "int16",
            INT_32: "int32",
            INT_64: "int64",
            INT_8: "int8",
            POINTER: "pointer",
            STRING: "string",
            UINT_16: "uint16",
            UINT_32: "uint32",
            UINT_64: "uint64",
            UINT_8: "uint8",
            VOID: "void"
        }
    },
    dlclose: [Circular: *3],
    dlopen: [Circular: *4],
    dlsym: [Circular: *5],
    DynamicLibrary: [Circular: *6],
    exportArrayBuffer: [Circular: *7],
    exportArrayBufferView: [Circular: *8],
    exportBuffer: [Circular: *9],
    exportString: [Circular: *10],
    getCurrentEventLoop: [Circular: *11],
    getFloat32: [Circular: *12],
    getFloat64: [Circular: *13],
    getInt16: [Circular: *14],
    getInt32: [Circular: *15],
    getInt64: [Circular: *16],
    getInt8: [Circular: *17],
    getRawPointer: [Circular: *18],
    getUint16: [Circular: *19],
    getUint32: [Circular: *20],
    getUint64: [Circular: *21],
    getUint8: [Circular: *22],
    setFloat32: [Circular: *23],
    setFloat64: [Circular: *24],
    setInt16: [Circular: *25],
    setInt32: [Circular: *26],
    setInt64: [Circular: *27],
    setInt8: [Circular: *28],
    setUint16: [Circular: *29],
    setUint32: [Circular: *30],
    setUint64: [Circular: *31],
    setUint8: [Circular: *32],
    suffix: "so",
    toArrayBuffer: [Circular: *33],
    toBuffer: [Circular: *34],
    toString: [Circular: *35],
    types: [Circular: *36]
}
```

</td>
      <td valign="top">

```js
Error importing module: No such built-in module: node:ffi
```

</td>
    </tr>
  </table>
</details>

<details id="sea">
  <summary><code>node:sea</code> — ❌ Node-only</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    default: {
        getAsset: <ref *3> ƒ getAsset(length: 2) {},
        getAssetAsBlob: <ref *4> ƒ getAssetAsBlob(length: 2) {},
        getAssetKeys: <ref *5> ƒ getAssetKeys(length: 0) {},
        getRawAsset: <ref *6> ƒ getRawAsset(length: 1) {},
        isSea: <ref *7> ƒ isSea(length: 0) {}
    },
    getAsset: [Circular: *3],
    getAssetAsBlob: [Circular: *4],
    getAssetKeys: [Circular: *5],
    getRawAsset: [Circular: *6],
    isSea: [Circular: *7]
}
```

</td>
      <td valign="top">

```js
Error importing module: No such built-in module: node:sea
```

</td>
    </tr>
  </table>
</details>

<details id="sqlite">
  <summary><code>node:sqlite</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    backup: <ref *2> ƒ backup(length: 2) {},
    constants: <ref *3> {
        SQLITE_ALTER_TABLE: 26,
        SQLITE_ANALYZE: 28,
        SQLITE_ATTACH: 24,
        SQLITE_CHANGESET_ABORT: 2,
        SQLITE_CHANGESET_CONFLICT: 3,
        SQLITE_CHANGESET_CONSTRAINT: 4,
        SQLITE_CHANGESET_DATA: 1,
        SQLITE_CHANGESET_FOREIGN_KEY: 5,
        SQLITE_CHANGESET_NOTFOUND: 2,
        SQLITE_CHANGESET_OMIT: 0,
        SQLITE_CHANGESET_REPLACE: 1,
        SQLITE_COPY: 0,
        SQLITE_CREATE_INDEX: 1,
        SQLITE_CREATE_TABLE: 2,
        SQLITE_CREATE_TEMP_INDEX: 3,
        SQLITE_CREATE_TEMP_TABLE: 4,
        SQLITE_CREATE_TEMP_TRIGGER: 5,
        SQLITE_CREATE_TEMP_VIEW: 6,
        SQLITE_CREATE_TRIGGER: 7,
        SQLITE_CREATE_VIEW: 8,
        SQLITE_CREATE_VTABLE: 29,
        SQLITE_DELETE: 9,
        SQLITE_DENY: 1,
        SQLITE_DETACH: 25,
        SQLITE_DROP_INDEX: 10,
        SQLITE_DROP_TABLE: 11,
        SQLITE_DROP_TEMP_INDEX: 12,
        SQLITE_DROP_TEMP_TABLE: 13,
        SQLITE_DROP_TEMP_TRIGGER: 14,
        SQLITE_DROP_TEMP_VIEW: 15,
        SQLITE_DROP_TRIGGER: 16,
        SQLITE_DROP_VIEW: 17,
        SQLITE_DROP_VTABLE: 30,
        SQLITE_FUNCTION: 31,
        SQLITE_IGNORE: 2,
        SQLITE_INSERT: 18,
        SQLITE_OK: 0,
        SQLITE_PRAGMA: 19,
        SQLITE_READ: 20,
        SQLITE_RECURSIVE: 33,
        SQLITE_REINDEX: 27,
        SQLITE_SAVEPOINT: 32,
        SQLITE_SELECT: 21,
        SQLITE_TRANSACTION: 22,
        SQLITE_UPDATE: 23
    },
    Database: <ref *4> ƒ Database(length: 0) {},
    DatabaseSync: [Circular: *4],
    default: {
        backup: [Circular: *2],
        constants: [Circular: *3],
        Database: [Circular: *4],
        DatabaseSync: [Circular: *4],
        Session: <ref *6> ƒ Session(length: 0) {},
        Statement: <ref *7> ƒ Statement(length: 0) {},
        StatementSync: [Circular: *7]
    },
    Session: [Circular: *6],
    Statement: [Circular: *7],
    StatementSync: [Circular: *7]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    backup: <ref *2> ƒ backup(length: 2) {},
    constants: <ref *3> {
        SQLITE_ALTER_TABLE: 26,
        SQLITE_ANALYZE: 28,
        SQLITE_ATTACH: 24,
        SQLITE_CHANGESET_ABORT: 2,
        SQLITE_CHANGESET_CONFLICT: 3,
        SQLITE_CHANGESET_CONSTRAINT: 4,
        SQLITE_CHANGESET_DATA: 1,
        SQLITE_CHANGESET_FOREIGN_KEY: 5,
        SQLITE_CHANGESET_NOTFOUND: 2,
        SQLITE_CHANGESET_OMIT: 0,
        SQLITE_CHANGESET_REPLACE: 1,
        SQLITE_COPY: 0,
        SQLITE_CREATE_INDEX: 1,
        SQLITE_CREATE_TABLE: 2,
        SQLITE_CREATE_TEMP_INDEX: 3,
        SQLITE_CREATE_TEMP_TABLE: 4,
        SQLITE_CREATE_TEMP_TRIGGER: 5,
        SQLITE_CREATE_TEMP_VIEW: 6,
        SQLITE_CREATE_TRIGGER: 7,
        SQLITE_CREATE_VIEW: 8,
        SQLITE_CREATE_VTABLE: 29,
        SQLITE_DELETE: 9,
        SQLITE_DENY: 1,
        SQLITE_DETACH: 25,
        SQLITE_DROP_INDEX: 10,
        SQLITE_DROP_TABLE: 11,
        SQLITE_DROP_TEMP_INDEX: 12,
        SQLITE_DROP_TEMP_TABLE: 13,
        SQLITE_DROP_TEMP_TRIGGER: 14,
        SQLITE_DROP_TEMP_VIEW: 15,
        SQLITE_DROP_TRIGGER: 16,
        SQLITE_DROP_VIEW: 17,
        SQLITE_DROP_VTABLE: 30,
        SQLITE_FUNCTION: 31,
        SQLITE_IGNORE: 2,
        SQLITE_INSERT: 18,
        SQLITE_OK: 0,
        SQLITE_PRAGMA: 19,
        SQLITE_READ: 20,
        SQLITE_RECURSIVE: 33,
        SQLITE_REINDEX: 27,
        SQLITE_SAVEPOINT: 32,
        SQLITE_SELECT: 21,
        SQLITE_TRANSACTION: 22,
        SQLITE_UPDATE: 23
    },
    DatabaseSync: <ref *4> ƒ DatabaseSync(length: 2) {},
    default: {
        backup: [Circular: *2],
        constants: [Circular: *3],
        DatabaseSync: [Circular: *4],
        StatementSync: <ref *6> ƒ StatementSync(length: 1) {}
    },
    StatementSync: [Circular: *6]
}
```

</td>
    </tr>
  </table>
</details>

<details id="test">
  <summary><code>node:test</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    after: <ref *2> ƒ (length: 2) {},
    afterEach: <ref *3> ƒ (length: 2) {},
    assert: <ref *4> [Object: null prototype] {
        register: ƒ register(length: 2) {}
    },
    before: <ref *6> ƒ (length: 2) {},
    beforeEach: <ref *7> ƒ (length: 2) {},
    default: <ref *8> ƒ test(length: 3) {
        after: [Circular: *2],
        afterEach: [Circular: *3],
        [get] assert: [Circular: *4],
        before: [Circular: *6],
        beforeEach: [Circular: *7],
        describe: <ref *9> ƒ test(length: 3) {
            expectFailure: ƒ (length: 3) {},
            only: ƒ (length: 3) {},
            skip: ƒ (length: 3) {},
            todo: ƒ (length: 3) {}
        },
        expectFailure: <ref *14> ƒ (length: 3) {},
        getTestContext: <ref *15> ƒ getTestContext(length: 0) {},
        it: [Circular: *8],
        [get] mock: <ref *16> MockTracker {},
        only: <ref *17> ƒ (length: 3) {},
        run: <ref *18> ƒ run(length: 0) {},
        skip: <ref *19> ƒ (length: 3) {},
        [get] snapshot: <ref *20> [Object: null prototype] {
            setDefaultSnapshotSerializers: ƒ setDefaultSnapshotSerializers(length: 1) {},
            setResolveSnapshotPath: ƒ setResolveSnapshotPath(length: 1) {}
        },
        suite: [Circular: *9],
        test: [Circular: *8],
        todo: <ref *23> ƒ (length: 3) {}
    },
    describe: [Circular: *9],
    expectFailure: [Circular: *14],
    getTestContext: [Circular: *15],
    it: [Circular: *8],
    mock: [Circular: *16],
    only: [Circular: *17],
    run: [Circular: *18],
    skip: [Circular: *19],
    snapshot: [Circular: *20],
    suite: [Circular: *9],
    test: [Circular: *8],
    todo: [Circular: *23]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    after: <ref *2> ƒ after(length: 2) {},
    afterEach: <ref *3> ƒ afterEach(length: 2) {},
    before: <ref *4> ƒ before(length: 2) {},
    beforeEach: <ref *5> ƒ beforeEach(length: 2) {},
    default: <ref *6> ƒ test(length: 4) {
        after: [Circular: *2],
        afterEach: [Circular: *3],
        before: [Circular: *4],
        beforeEach: [Circular: *5],
        describe: <ref *7> ƒ suite(length: 4) {
            only: ƒ only(length: 3) {},
            skip: ƒ skip(length: 3) {},
            todo: ƒ todo(length: 3) {}
        },
        expectFailure: ƒ expectFailure(length: 3) {},
        getTestContext: <ref *12> ƒ getTestContext(length: 0) {},
        it: [Circular: *6],
        mock: <ref *13> {
            fn: ƒ fn(length: 3) {},
            getter: ƒ getter(length: 4) {},
            method: ƒ method(length: 4) {},
            module: ƒ mockModule(length: 1) {},
            property: ƒ property(length: 3) {},
            reset: ƒ reset(length: 0) {},
            restoreAll: ƒ restoreAll(length: 0) {},
            setter: ƒ setter(length: 4) {},
            timers: {
                enable: ƒ enable(length: 1) {},
                reset: ƒ reset(length: 0) {},
                runAll: ƒ runAll(length: 0) {},
                setTime: ƒ setTime(length: 1) {},
                Symbol(Symbol.dispose): ƒ [Symbol.dispose](length: 0) {},
                tick: ƒ tick(length: 1) {}
            }
        },
        only: ƒ only(length: 3) {},
        run: <ref *30> ƒ run(length: 1) {},
        skip: ƒ skip(length: 3) {},
        suite: [Circular: *7],
        test: [Circular: *6],
        todo: ƒ todo(length: 3) {}
    },
    describe: [Circular: *7],
    getTestContext: [Circular: *12],
    it: [Circular: *6],
    mock: [Circular: *13],
    run: [Circular: *30],
    suite: [Circular: *7],
    test: [Circular: *6]
}
```

</td>
    </tr>
  </table>
</details>

<details id="test-reporters">
  <summary><code>node:test/reporters</code> — ✅ Identical</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    default: {
        [get] dot: <ref *3> async ƒ dot(length: 1) {},
        [get] junit: <ref *4> async ƒ junitReporter(length: 1) {},
        lcov: <ref *5> ƒ lcov(length: 0) {},
        spec: <ref *6> ƒ spec(length: 0) {},
        [get] tap: <ref *7> async ƒ tapReporter(length: 1) {}
    },
    dot: [Circular: *3],
    junit: [Circular: *4],
    lcov: [Circular: *5],
    spec: [Circular: *6],
    tap: [Circular: *7]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    default: [Object: null prototype] {
        dot: <ref *3> async ƒ dot(length: 1) {},
        junit: <ref *4> async ƒ junit(length: 1) {},
        lcov: <ref *5> ƒ reporterConstructorWrapper(length: 0) {},
        spec: <ref *6> ƒ reporterConstructorWrapper(length: 0) {},
        tap: <ref *7> async ƒ tap(length: 1) {}
    },
    dot: [Circular: *3],
    junit: [Circular: *4],
    lcov: [Circular: *5],
    spec: [Circular: *6],
    tap: [Circular: *7]
}
```

</td>
    </tr>
  </table>
</details>

<details id="vfs">
  <summary><code>node:vfs</code> — ❌ Node-only</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    ComposableProvider: <ref *2> class ComposableProvider extends VirtualProvider {},
    create: <ref *3> ƒ create(length: 2) {},
    default: {
        ComposableProvider: [Circular: *2],
        create: [Circular: *3],
        MemoryProvider: <ref *5> class MemoryProvider extends VirtualProvider {},
        RealFSProvider: <ref *6> class RealFSProvider extends VirtualProvider {},
        registerProvider: <ref *7> ƒ registerProvider(length: 1) {},
        vfsBase: <ref *8> ƒ vfsBase(length: 0) {},
        VirtualFileSystem: <ref *9> class VirtualFileSystem {},
        VirtualProvider: <ref *10> class VirtualProvider {},
        ZipProvider: <ref *11> class ZipProvider extends VirtualProvider {}
    },
    MemoryProvider: [Circular: *5],
    RealFSProvider: [Circular: *6],
    registerProvider: [Circular: *7],
    vfsBase: [Circular: *8],
    VirtualFileSystem: [Circular: *9],
    VirtualProvider: [Circular: *10],
    ZipProvider: [Circular: *11]
}
```

</td>
      <td valign="top">

```js
Error importing module: No such built-in module: node:vfs
```

</td>
    </tr>
  </table>
</details>

<details id="os">
  <summary><code>os</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    arch: <ref *2> ƒ arch(length: 0) {
        Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
    },
    availableParallelism: <ref *4> ƒ (length: 0) {
        Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
    },
    constants: <ref *6> [Object: null prototype] {
        dlopen: [Object: null prototype] {
            RTLD_DEEPBIND: 8,
            RTLD_GLOBAL: 256,
            RTLD_LAZY: 1,
            RTLD_LOCAL: 0,
            RTLD_NOW: 2
        },
        errno: [Object: null prototype] {
            E2BIG: 7,
            EACCES: 13,
            EADDRINUSE: 98,
            EADDRNOTAVAIL: 99,
            EAFNOSUPPORT: 97,
            EAGAIN: 11,
            EALREADY: 114,
            EBADF: 9,
            EBADMSG: 74,
            EBUSY: 16,
            ECANCELED: 125,
            ECHILD: 10,
            ECONNABORTED: 103,
            ECONNREFUSED: 111,
            ECONNRESET: 104,
            EDEADLK: 35,
            EDESTADDRREQ: 89,
            EDOM: 33,
            EDQUOT: 122,
            EEXIST: 17,
            EFAULT: 14,
            EFBIG: 27,
            EHOSTUNREACH: 113,
            EIDRM: 43,
            EILSEQ: 84,
            EINPROGRESS: 115,
            EINTR: 4,
            EINVAL: 22,
            EIO: 5,
            EISCONN: 106,
            EISDIR: 21,
            ELOOP: 40,
            EMFILE: 24,
            EMLINK: 31,
            EMSGSIZE: 90,
            EMULTIHOP: 72,
            ENAMETOOLONG: 36,
            ENETDOWN: 100,
            ENETRESET: 102,
            ENETUNREACH: 101,
            ENFILE: 23,
            ENOBUFS: 105,
            ENODATA: 61,
            ENODEV: 19,
            ENOENT: 2,
            ENOEXEC: 8,
            ENOLCK: 37,
            ENOLINK: 67,
            ENOMEM: 12,
            ENOMSG: 42,
            ENOPROTOOPT: 92,
            ENOSPC: 28,
            ENOSR: 63,
            ENOSTR: 60,
            ENOSYS: 38,
            ENOTCONN: 107,
            ENOTDIR: 20,
            ENOTEMPTY: 39,
            ENOTSOCK: 88,
            ENOTSUP: 95,
            ENOTTY: 25,
            ENXIO: 6,
            EOPNOTSUPP: 95,
            EOVERFLOW: 75,
            EPERM: 1,
            EPIPE: 32,
            EPROTO: 71,
            EPROTONOSUPPORT: 93,
            EPROTOTYPE: 91,
            ERANGE: 34,
            EROFS: 30,
            ESPIPE: 29,
            ESRCH: 3,
            ESTALE: 116,
            ETIME: 62,
            ETIMEDOUT: 110,
            ETXTBSY: 26,
            EWOULDBLOCK: 11,
            EXDEV: 18
        },
        priority: [Object: null prototype] {
            PRIORITY_ABOVE_NORMAL: -7,
            PRIORITY_BELOW_NORMAL: 10,
            PRIORITY_HIGH: -14,
            PRIORITY_HIGHEST: -20,
            PRIORITY_LOW: 19,
            PRIORITY_NORMAL: 0
        },
        signals: [Object: null prototype] {
            SIGABRT: 6,
            SIGALRM: 14,
            SIGBUS: 7,
            SIGCHLD: 17,
            SIGCONT: 18,
            SIGFPE: 8,
            SIGHUP: 1,
            SIGILL: 4,
            SIGINT: 2,
            SIGIO: 29,
            SIGIOT: 6,
            SIGKILL: 9,
            SIGPIPE: 13,
            SIGPOLL: 29,
            SIGPROF: 27,
            SIGPWR: 30,
            SIGQUIT: 3,
            SIGSEGV: 11,
            SIGSTKFLT: 16,
            SIGSTOP: 19,
            SIGSYS: 31,
            SIGTERM: 15,
            SIGTRAP: 5,
            SIGTSTP: 20,
            SIGTTIN: 21,
            SIGTTOU: 22,
            SIGURG: 23,
            SIGUSR1: 10,
            SIGUSR2: 12,
            SIGVTALRM: 26,
            SIGWINCH: 28,
            SIGXCPU: 24,
            SIGXFSZ: 25
        },
        UV_UDP_REUSEADDR: 4
    },
    cpus: <ref *11> ƒ cpus(length: 0) {},
    default: {
        arch: [Circular: *2],
        availableParallelism: [Circular: *4],
        constants: [Circular: *6],
        cpus: [Circular: *11],
        devNull: "/dev/null",
        endianness: <ref *13> ƒ endianness(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        EOL: "\n",
        freemem: <ref *15> ƒ (length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        getPriority: <ref *17> ƒ getPriority(length: 1) {},
        homedir: <ref *18> ƒ wrappedFn(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {},
            withoutStackTrace: ƒ checkError(length: 0) {}
        },
        hostname: <ref *21> ƒ wrappedFn(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {},
            withoutStackTrace: ƒ checkError(length: 0) {}
        },
        loadavg: <ref *24> ƒ loadavg(length: 0) {},
        machine: <ref *25> ƒ getMachine(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        networkInterfaces: <ref *27> ƒ networkInterfaces(length: 0) {},
        platform: <ref *28> ƒ platform(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        release: <ref *30> ƒ getOSRelease(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        setPriority: <ref *32> ƒ setPriority(length: 2) {},
        tmpdir: <ref *33> ƒ tmpdir(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        totalmem: <ref *35> ƒ (length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        type: <ref *37> ƒ getOSType(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        uptime: <ref *39> ƒ wrappedFn(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {},
            withoutStackTrace: ƒ checkError(length: 0) {}
        },
        userInfo: <ref *42> ƒ userInfo(length: 1) {},
        version: <ref *43> ƒ getOSVersion(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        }
    },
    devNull: "/dev/null",
    endianness: [Circular: *13],
    EOL: "\n",
    freemem: [Circular: *15],
    getPriority: [Circular: *17],
    homedir: [Circular: *18],
    hostname: [Circular: *21],
    loadavg: [Circular: *24],
    machine: [Circular: *25],
    networkInterfaces: [Circular: *27],
    platform: [Circular: *28],
    release: [Circular: *30],
    setPriority: [Circular: *32],
    tmpdir: [Circular: *33],
    totalmem: [Circular: *35],
    type: [Circular: *37],
    uptime: [Circular: *39],
    userInfo: [Circular: *42],
    version: [Circular: *43]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    arch: <ref *2> ƒ arch(length: 0) {
        Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
    },
    availableParallelism: <ref *4> ƒ availableParallelism(length: 0) {
        Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
    },
    constants: <ref *6> {
        dlopen: {
            RTLD_DEEPBIND: 8,
            RTLD_GLOBAL: 256,
            RTLD_LAZY: 1,
            RTLD_LOCAL: 0,
            RTLD_NOW: 2
        },
        errno: {
            E2BIG: 7,
            EACCES: 13,
            EADDRINUSE: 98,
            EADDRNOTAVAIL: 99,
            EAFNOSUPPORT: 97,
            EAGAIN: 11,
            EALREADY: 114,
            EBADF: 9,
            EBADMSG: 74,
            EBUSY: 16,
            ECANCELED: 125,
            ECHILD: 10,
            ECONNABORTED: 103,
            ECONNREFUSED: 111,
            ECONNRESET: 104,
            EDEADLK: 35,
            EDESTADDRREQ: 89,
            EDOM: 33,
            EDQUOT: 122,
            EEXIST: 17,
            EFAULT: 14,
            EFBIG: 27,
            EHOSTUNREACH: 113,
            EIDRM: 43,
            EILSEQ: 84,
            EINPROGRESS: 115,
            EINTR: 4,
            EINVAL: 22,
            EIO: 5,
            EISCONN: 106,
            EISDIR: 21,
            ELOOP: 40,
            EMFILE: 24,
            EMLINK: 31,
            EMSGSIZE: 90,
            EMULTIHOP: 72,
            ENAMETOOLONG: 36,
            ENETDOWN: 100,
            ENETRESET: 102,
            ENETUNREACH: 101,
            ENFILE: 23,
            ENOBUFS: 105,
            ENODATA: 61,
            ENODEV: 19,
            ENOENT: 2,
            ENOEXEC: 8,
            ENOLCK: 37,
            ENOLINK: 67,
            ENOMEM: 12,
            ENOMSG: 42,
            ENOPROTOOPT: 92,
            ENOSPC: 28,
            ENOSR: 63,
            ENOSTR: 60,
            ENOSYS: 38,
            ENOTCONN: 107,
            ENOTDIR: 20,
            ENOTEMPTY: 39,
            ENOTSOCK: 88,
            ENOTSUP: 95,
            ENOTTY: 25,
            ENXIO: 6,
            EOPNOTSUPP: 95,
            EOVERFLOW: 75,
            EPERM: 1,
            EPIPE: 32,
            EPROTO: 71,
            EPROTONOSUPPORT: 93,
            EPROTOTYPE: 91,
            ERANGE: 34,
            EROFS: 30,
            ESPIPE: 29,
            ESRCH: 3,
            ESTALE: 116,
            ETIME: 62,
            ETIMEDOUT: 110,
            ETXTBSY: 26,
            EWOULDBLOCK: 11,
            EXDEV: 18
        },
        priority: {
            PRIORITY_ABOVE_NORMAL: -7,
            PRIORITY_BELOW_NORMAL: 10,
            PRIORITY_HIGH: -14,
            PRIORITY_HIGHEST: -20,
            PRIORITY_LOW: 19,
            PRIORITY_NORMAL: 0
        },
        signals: {
            SIGABRT: 6,
            SIGALRM: 14,
            SIGBUS: 7,
            SIGCHLD: 17,
            SIGCONT: 18,
            SIGFPE: 8,
            SIGHUP: 1,
            SIGILL: 4,
            SIGINT: 2,
            SIGIO: 29,
            SIGIOT: 6,
            SIGKILL: 9,
            SIGPIPE: 13,
            SIGPOLL: 29,
            SIGPROF: 27,
            SIGPWR: 30,
            SIGQUIT: 3,
            SIGSEGV: 11,
            SIGSTKFLT: 16,
            SIGSTOP: 19,
            SIGSYS: 31,
            SIGTERM: 15,
            SIGTRAP: 5,
            SIGTSTP: 20,
            SIGTTIN: 21,
            SIGTTOU: 22,
            SIGUNUSED: 31,
            SIGURG: 23,
            SIGUSR1: 10,
            SIGUSR2: 12,
            SIGVTALRM: 26,
            SIGWINCH: 28,
            SIGXCPU: 24,
            SIGXFSZ: 25
        },
        UV_UDP_IPV6ONLY: 2,
        UV_UDP_REUSEADDR: 4
    },
    cpus: <ref *11> ƒ cpus(length: 0) {},
    default: {
        arch: [Circular: *2],
        availableParallelism: [Circular: *4],
        constants: [Circular: *6],
        cpus: [Circular: *11],
        devNull: "/dev/null",
        endianness: <ref *13> ƒ endianness(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        EOL: "\n",
        freemem: <ref *15> ƒ freemem(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        getPriority: <ref *17> ƒ getPriority(length: 0) {},
        homedir: <ref *18> ƒ homedir(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        hostname: <ref *20> ƒ hostname(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        loadavg: <ref *22> ƒ loadavg(length: 0) {},
        machine: <ref *23> ƒ machine(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        networkInterfaces: <ref *25> ƒ networkInterfaces(length: 0) {},
        platform: <ref *26> ƒ platform(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        release: <ref *28> ƒ release(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        setPriority: <ref *30> ƒ setPriority(length: 2) {},
        tmpdir: <ref *31> ƒ tmpdir(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        totalmem: <ref *33> ƒ totalmem(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        type: <ref *35> ƒ type(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        uptime: <ref *37> ƒ uptime(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        },
        userInfo: <ref *39> ƒ userInfo(length: 0) {},
        version: <ref *40> ƒ version(length: 0) {
            Symbol(Symbol.toPrimitive): ƒ (length: 0) {}
        }
    },
    devNull: "/dev/null",
    endianness: [Circular: *13],
    EOL: "\n",
    freemem: [Circular: *15],
    getPriority: [Circular: *17],
    homedir: [Circular: *18],
    hostname: [Circular: *20],
    loadavg: [Circular: *22],
    machine: [Circular: *23],
    networkInterfaces: [Circular: *25],
    platform: [Circular: *26],
    release: [Circular: *28],
    setPriority: [Circular: *30],
    tmpdir: [Circular: *31],
    totalmem: [Circular: *33],
    type: [Circular: *35],
    uptime: [Circular: *37],
    userInfo: [Circular: *39],
    version: [Circular: *40]
}
```

</td>
    </tr>
  </table>
</details>

<details id="path">
  <summary><code>path</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    _makeLong: <ref *2> ƒ toNamespacedPath(length: 1) {},
    basename: <ref *3> ƒ basename(length: 2) {},
    default: <ref *4> {
        _makeLong: [Circular: *2],
        basename: [Circular: *3],
        delimiter: ":",
        dirname: <ref *5> ƒ dirname(length: 1) {},
        extname: <ref *6> ƒ extname(length: 1) {},
        format: <ref *7> ƒ bound _format(length: 1) {},
        isAbsolute: <ref *8> ƒ isAbsolute(length: 1) {},
        join: <ref *9> ƒ join(length: 0) {},
        matchesGlob: <ref *10> ƒ matchesGlob(length: 2) {},
        normalize: <ref *11> ƒ normalize(length: 1) {},
        parse: <ref *12> ƒ parse(length: 1) {},
        posix: [Circular: *4],
        relative: <ref *13> ƒ relative(length: 2) {},
        resolve: <ref *14> ƒ resolve(length: 0) {},
        sep: "/",
        toNamespacedPath: [Circular: *2],
        win32: <ref *15> {
            _makeLong: <ref *16> ƒ toNamespacedPath(length: 1) {},
            basename: ƒ basename(length: 2) {},
            delimiter: ";",
            dirname: ƒ dirname(length: 1) {},
            extname: ƒ extname(length: 1) {},
            format: ƒ bound _format(length: 1) {},
            isAbsolute: ƒ isAbsolute(length: 1) {},
            join: ƒ join(length: 0) {},
            matchesGlob: ƒ matchesGlob(length: 2) {},
            normalize: ƒ normalize(length: 1) {},
            parse: ƒ parse(length: 1) {},
            posix: [Circular: *4],
            relative: ƒ relative(length: 2) {},
            resolve: ƒ resolve(length: 0) {},
            sep: "\\",
            toNamespacedPath: [Circular: *16],
            win32: [Circular: *15]
        }
    },
    delimiter: ":",
    dirname: [Circular: *5],
    extname: [Circular: *6],
    format: [Circular: *7],
    isAbsolute: [Circular: *8],
    join: [Circular: *9],
    matchesGlob: [Circular: *10],
    normalize: [Circular: *11],
    parse: [Circular: *12],
    posix: [Circular: *4],
    relative: [Circular: *13],
    resolve: [Circular: *14],
    sep: "/",
    toNamespacedPath: [Circular: *2],
    win32: [Circular: *15]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    _makeLong: <ref *2> ƒ toNamespacedPath(length: 1) {},
    basename: <ref *3> ƒ basename(length: 1) {},
    common: ƒ common(length: 1) {},
    default: <ref *5> {
        _makeLong: [Circular: *2],
        basename: [Circular: *3],
        delimiter: ":",
        dirname: <ref *6> ƒ dirname(length: 1) {},
        extname: <ref *7> ƒ extname(length: 1) {},
        format: <ref *8> ƒ format(length: 1) {},
        isAbsolute: <ref *9> ƒ isAbsolute(length: 1) {},
        join: <ref *10> ƒ join(length: 0) {},
        matchesGlob: <ref *11> ƒ matchesGlob(length: 2) {},
        normalize: <ref *12> ƒ normalize(length: 1) {},
        parse: <ref *13> ƒ parse(length: 1) {},
        posix: [Circular: *5],
        relative: <ref *14> ƒ relative(length: 2) {},
        resolve: <ref *15> ƒ resolve(length: 0) {},
        sep: "/",
        toNamespacedPath: [Circular: *2],
        win32: <ref *16> {
            _makeLong: <ref *17> ƒ toNamespacedPath(length: 1) {},
            basename: ƒ basename(length: 1) {},
            delimiter: ";",
            dirname: ƒ dirname(length: 1) {},
            extname: ƒ extname(length: 1) {},
            format: ƒ format(length: 1) {},
            isAbsolute: ƒ isAbsolute(length: 1) {},
            join: ƒ join(length: 0) {},
            matchesGlob: ƒ matchesGlob(length: 2) {},
            normalize: ƒ normalize(length: 1) {},
            parse: ƒ parse(length: 1) {},
            posix: [Circular: *5],
            relative: ƒ relative(length: 2) {},
            resolve: ƒ resolve(length: 0) {},
            sep: "\\",
            toNamespacedPath: [Circular: *17],
            win32: [Circular: *16]
        }
    },
    delimiter: ":",
    dirname: [Circular: *6],
    extname: [Circular: *7],
    format: [Circular: *8],
    isAbsolute: [Circular: *9],
    join: [Circular: *10],
    matchesGlob: [Circular: *11],
    normalize: [Circular: *12],
    parse: [Circular: *13],
    posix: [Circular: *5],
    relative: [Circular: *14],
    resolve: [Circular: *15],
    sep: "/",
    toNamespacedPath: [Circular: *2],
    win32: [Circular: *16]
}
```

</td>
    </tr>
  </table>
</details>

<details id="path-posix">
  <summary><code>path/posix</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    _makeLong: <ref *2> ƒ toNamespacedPath(length: 1) {},
    basename: <ref *3> ƒ basename(length: 2) {},
    default: <ref *4> {
        _makeLong: [Circular: *2],
        basename: [Circular: *3],
        delimiter: ":",
        dirname: <ref *5> ƒ dirname(length: 1) {},
        extname: <ref *6> ƒ extname(length: 1) {},
        format: <ref *7> ƒ bound _format(length: 1) {},
        isAbsolute: <ref *8> ƒ isAbsolute(length: 1) {},
        join: <ref *9> ƒ join(length: 0) {},
        matchesGlob: <ref *10> ƒ matchesGlob(length: 2) {},
        normalize: <ref *11> ƒ normalize(length: 1) {},
        parse: <ref *12> ƒ parse(length: 1) {},
        posix: [Circular: *4],
        relative: <ref *13> ƒ relative(length: 2) {},
        resolve: <ref *14> ƒ resolve(length: 0) {},
        sep: "/",
        toNamespacedPath: [Circular: *2],
        win32: <ref *15> {
            _makeLong: <ref *16> ƒ toNamespacedPath(length: 1) {},
            basename: ƒ basename(length: 2) {},
            delimiter: ";",
            dirname: ƒ dirname(length: 1) {},
            extname: ƒ extname(length: 1) {},
            format: ƒ bound _format(length: 1) {},
            isAbsolute: ƒ isAbsolute(length: 1) {},
            join: ƒ join(length: 0) {},
            matchesGlob: ƒ matchesGlob(length: 2) {},
            normalize: ƒ normalize(length: 1) {},
            parse: ƒ parse(length: 1) {},
            posix: [Circular: *4],
            relative: ƒ relative(length: 2) {},
            resolve: ƒ resolve(length: 0) {},
            sep: "\\",
            toNamespacedPath: [Circular: *16],
            win32: [Circular: *15]
        }
    },
    delimiter: ":",
    dirname: [Circular: *5],
    extname: [Circular: *6],
    format: [Circular: *7],
    isAbsolute: [Circular: *8],
    join: [Circular: *9],
    matchesGlob: [Circular: *10],
    normalize: [Circular: *11],
    parse: [Circular: *12],
    posix: [Circular: *4],
    relative: [Circular: *13],
    resolve: [Circular: *14],
    sep: "/",
    toNamespacedPath: [Circular: *2],
    win32: [Circular: *15]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    _makeLong: <ref *2> ƒ toNamespacedPath(length: 1) {},
    basename: <ref *3> ƒ basename(length: 1) {},
    default: <ref *4> {
        _makeLong: [Circular: *2],
        basename: [Circular: *3],
        delimiter: ":",
        dirname: <ref *5> ƒ dirname(length: 1) {},
        extname: <ref *6> ƒ extname(length: 1) {},
        format: <ref *7> ƒ format(length: 1) {},
        isAbsolute: <ref *8> ƒ isAbsolute(length: 1) {},
        join: <ref *9> ƒ join(length: 0) {},
        matchesGlob: ƒ matchesGlob(length: 2) {},
        normalize: <ref *11> ƒ normalize(length: 1) {},
        parse: <ref *12> ƒ parse(length: 1) {},
        posix: [Circular: *4],
        relative: <ref *13> ƒ relative(length: 2) {},
        resolve: <ref *14> ƒ resolve(length: 0) {},
        sep: "/",
        toNamespacedPath: [Circular: *2],
        win32: <ref *15> {
            _makeLong: <ref *16> ƒ toNamespacedPath(length: 1) {},
            basename: ƒ basename(length: 1) {},
            delimiter: ";",
            dirname: ƒ dirname(length: 1) {},
            extname: ƒ extname(length: 1) {},
            format: ƒ format(length: 1) {},
            isAbsolute: ƒ isAbsolute(length: 1) {},
            join: ƒ join(length: 0) {},
            matchesGlob: ƒ matchesGlob(length: 2) {},
            normalize: ƒ normalize(length: 1) {},
            parse: ƒ parse(length: 1) {},
            posix: [Circular: *4],
            relative: ƒ relative(length: 2) {},
            resolve: ƒ resolve(length: 0) {},
            sep: "\\",
            toNamespacedPath: [Circular: *16],
            win32: [Circular: *15]
        }
    },
    delimiter: ":",
    dirname: [Circular: *5],
    extname: [Circular: *6],
    format: [Circular: *7],
    isAbsolute: [Circular: *8],
    join: [Circular: *9],
    normalize: [Circular: *11],
    parse: [Circular: *12],
    posix: [Circular: *4],
    relative: [Circular: *13],
    resolve: [Circular: *14],
    sep: "/",
    toNamespacedPath: [Circular: *2],
    win32: [Circular: *15]
}
```

</td>
    </tr>
  </table>
</details>

<details id="path-win32">
  <summary><code>path/win32</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    _makeLong: <ref *2> ƒ toNamespacedPath(length: 1) {},
    basename: <ref *3> ƒ basename(length: 2) {},
    default: <ref *4> {
        _makeLong: [Circular: *2],
        basename: [Circular: *3],
        delimiter: ";",
        dirname: <ref *5> ƒ dirname(length: 1) {},
        extname: <ref *6> ƒ extname(length: 1) {},
        format: <ref *7> ƒ bound _format(length: 1) {},
        isAbsolute: <ref *8> ƒ isAbsolute(length: 1) {},
        join: <ref *9> ƒ join(length: 0) {},
        matchesGlob: <ref *10> ƒ matchesGlob(length: 2) {},
        normalize: <ref *11> ƒ normalize(length: 1) {},
        parse: <ref *12> ƒ parse(length: 1) {},
        posix: <ref *13> {
            _makeLong: <ref *14> ƒ toNamespacedPath(length: 1) {},
            basename: ƒ basename(length: 2) {},
            delimiter: ":",
            dirname: ƒ dirname(length: 1) {},
            extname: ƒ extname(length: 1) {},
            format: ƒ bound _format(length: 1) {},
            isAbsolute: ƒ isAbsolute(length: 1) {},
            join: ƒ join(length: 0) {},
            matchesGlob: ƒ matchesGlob(length: 2) {},
            normalize: ƒ normalize(length: 1) {},
            parse: ƒ parse(length: 1) {},
            posix: [Circular: *13],
            relative: ƒ relative(length: 2) {},
            resolve: ƒ resolve(length: 0) {},
            sep: "/",
            toNamespacedPath: [Circular: *14],
            win32: [Circular: *4]
        },
        relative: <ref *26> ƒ relative(length: 2) {},
        resolve: <ref *27> ƒ resolve(length: 0) {},
        sep: "\\",
        toNamespacedPath: [Circular: *2],
        win32: [Circular: *4]
    },
    delimiter: ";",
    dirname: [Circular: *5],
    extname: [Circular: *6],
    format: [Circular: *7],
    isAbsolute: [Circular: *8],
    join: [Circular: *9],
    matchesGlob: [Circular: *10],
    normalize: [Circular: *11],
    parse: [Circular: *12],
    posix: [Circular: *13],
    relative: [Circular: *26],
    resolve: [Circular: *27],
    sep: "\\",
    toNamespacedPath: [Circular: *2],
    win32: [Circular: *4]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    _makeLong: <ref *2> ƒ toNamespacedPath(length: 1) {},
    basename: <ref *3> ƒ basename(length: 1) {},
    default: <ref *4> {
        _makeLong: [Circular: *2],
        basename: [Circular: *3],
        delimiter: ";",
        dirname: <ref *5> ƒ dirname(length: 1) {},
        extname: <ref *6> ƒ extname(length: 1) {},
        format: <ref *7> ƒ format(length: 1) {},
        isAbsolute: <ref *8> ƒ isAbsolute(length: 1) {},
        join: <ref *9> ƒ join(length: 0) {},
        matchesGlob: ƒ matchesGlob(length: 2) {},
        normalize: <ref *11> ƒ normalize(length: 1) {},
        parse: <ref *12> ƒ parse(length: 1) {},
        posix: <ref *13> {
            _makeLong: <ref *14> ƒ toNamespacedPath(length: 1) {},
            basename: ƒ basename(length: 1) {},
            delimiter: ":",
            dirname: ƒ dirname(length: 1) {},
            extname: ƒ extname(length: 1) {},
            format: ƒ format(length: 1) {},
            isAbsolute: ƒ isAbsolute(length: 1) {},
            join: ƒ join(length: 0) {},
            matchesGlob: ƒ matchesGlob(length: 2) {},
            normalize: ƒ normalize(length: 1) {},
            parse: ƒ parse(length: 1) {},
            posix: [Circular: *13],
            relative: ƒ relative(length: 2) {},
            resolve: ƒ resolve(length: 0) {},
            sep: "/",
            toNamespacedPath: [Circular: *14],
            win32: [Circular: *4]
        },
        relative: <ref *26> ƒ relative(length: 2) {},
        resolve: <ref *27> ƒ resolve(length: 0) {},
        sep: "\\",
        toNamespacedPath: [Circular: *2],
        win32: [Circular: *4]
    },
    delimiter: ";",
    dirname: [Circular: *5],
    extname: [Circular: *6],
    format: [Circular: *7],
    isAbsolute: [Circular: *8],
    join: [Circular: *9],
    normalize: [Circular: *11],
    parse: [Circular: *12],
    posix: [Circular: *13],
    relative: [Circular: *26],
    resolve: [Circular: *27],
    sep: "\\",
    toNamespacedPath: [Circular: *2],
    win32: [Circular: *4]
}
```

</td>
    </tr>
  </table>
</details>

<details id="perf_hooks">
  <summary><code>perf_hooks</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    constants: <ref *2> {
        NODE_PERFORMANCE_GC_FLAGS_ALL_AVAILABLE_GARBAGE: 16,
        NODE_PERFORMANCE_GC_FLAGS_ALL_EXTERNAL_MEMORY: 32,
        NODE_PERFORMANCE_GC_FLAGS_CONSTRUCT_RETAINED: 2,
        NODE_PERFORMANCE_GC_FLAGS_FORCED: 4,
        NODE_PERFORMANCE_GC_FLAGS_NO: 0,
        NODE_PERFORMANCE_GC_FLAGS_SCHEDULE_IDLE: 64,
        NODE_PERFORMANCE_GC_FLAGS_SYNCHRONOUS_PHANTOM_PROCESSING: 8,
        NODE_PERFORMANCE_GC_INCREMENTAL: 8,
        NODE_PERFORMANCE_GC_MAJOR: 4,
        NODE_PERFORMANCE_GC_MINOR: 1,
        NODE_PERFORMANCE_GC_MINOR_MARK_SWEEP: 2,
        NODE_PERFORMANCE_GC_WEAKCB: 16
    },
    createHistogram: <ref *3> ƒ createHistogram(length: 0) {},
    createSlidingWindowHistogram: <ref *4> ƒ createSlidingWindowHistogram(length: 1) {},
    default: {
        constants: [Circular: *2],
        createHistogram: [Circular: *3],
        createSlidingWindowHistogram: [Circular: *4],
        eventLoopUtilization: <ref *6> ƒ eventLoopUtilization(length: 2) {},
        importHistogram: <ref *7> ƒ importHistogram(length: 1) {},
        monitorEventLoopDelay: <ref *8> ƒ monitorEventLoopDelay(length: 0) {},
        performance: <ref *9> Performance {
            Symbol(events.maxEventTargetListeners): 10,
            Symbol(events.maxEventTargetListenersWarned): false,
            Symbol(kEvents): undefined,
            Symbol(kHandlers): undefined,
            Symbol(performance): true
        },
        Performance: <ref *10> class Performance extends EventTarget {},
        PerformanceEntry: <ref *11> class PerformanceEntry {},
        PerformanceMark: <ref *12> class PerformanceMark extends PerformanceEntry {},
        PerformanceMeasure: <ref *13> class PerformanceMeasure extends PerformanceEntry {},
        PerformanceObserver: <ref *14> class PerformanceObserver {},
        PerformanceObserverEntryList: <ref *15> class PerformanceObserverEntryList {},
        PerformanceResourceTiming: <ref *16> class PerformanceResourceTiming extends PerformanceEntry {},
        timerify: <ref *17> ƒ timerify(length: 1) {}
    },
    eventLoopUtilization: [Circular: *6],
    importHistogram: [Circular: *7],
    monitorEventLoopDelay: [Circular: *8],
    performance: [Circular: *9],
    Performance: [Circular: *10],
    PerformanceEntry: [Circular: *11],
    PerformanceMark: [Circular: *12],
    PerformanceMeasure: [Circular: *13],
    PerformanceObserver: [Circular: *14],
    PerformanceObserverEntryList: [Circular: *15],
    PerformanceResourceTiming: [Circular: *16],
    timerify: [Circular: *17]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    constants: <ref *2> {
        NODE_PERFORMANCE_ENTRY_TYPE_DNS: 7,
        NODE_PERFORMANCE_ENTRY_TYPE_FUNCTION: 4,
        NODE_PERFORMANCE_ENTRY_TYPE_GC: 3,
        NODE_PERFORMANCE_ENTRY_TYPE_HTTP: 6,
        NODE_PERFORMANCE_ENTRY_TYPE_HTTP2: 5,
        NODE_PERFORMANCE_ENTRY_TYPE_MARK: 1,
        NODE_PERFORMANCE_ENTRY_TYPE_MEASURE: 2,
        NODE_PERFORMANCE_ENTRY_TYPE_NET: 8,
        NODE_PERFORMANCE_ENTRY_TYPE_NODE: 0
    },
    createHistogram: <ref *3> ƒ createHistogram(length: 0) {},
    default: {
        constants: [Circular: *2],
        createHistogram: [Circular: *3],
        eventLoopUtilization: <ref *5> ƒ eventLoopUtilization(length: 0) {},
        monitorEventLoopDelay: <ref *6> ƒ monitorEventLoopDelay(length: 0) {},
        performance: <ref *7> Performance {
            eventLoopUtilization: [Circular: *5],
            markResourceTiming: ƒ (length: 0) {},
            nodeTiming: {},
            Symbol([[webidl.brand]]): Symbol([[webidl.brand]]),
            timerify: <ref *10> ƒ timerify(length: 1) {}
        },
        PerformanceEntry: <ref *11> class PerformanceEntry {},
        PerformanceObserver: <ref *12> class PerformanceObserver extends A {},
        PerformanceObserverEntryList: <ref *13> class PerformanceObserverEntryList {},
        timerify: [Circular: *10]
    },
    enqueueNodePerformanceEntry: ƒ enqueueNodePerformanceEntry(length: 1) {},
    eventLoopUtilization: [Circular: *5],
    monitorEventLoopDelay: [Circular: *6],
    performance: [Circular: *7],
    PerformanceEntry: [Circular: *11],
    PerformanceObserver: [Circular: *12],
    PerformanceObserverEntryList: [Circular: *13],
    timerify: [Circular: *10]
}
```

</td>
    </tr>
  </table>
</details>

<details id="process">
  <summary><code>process</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    _debugEnd: <ref *2> ƒ _debugEnd(length: 0) {},
    _debugProcess: <ref *3> ƒ _debugProcess(length: 0) {},
    _eval: "(async function probe(modules) {\n  const pad = \"    \";\n  const inspect = (val, indent = \"\", cache = …",
    _events: <ref *4> [Object: null prototype] {
        newListener: [
            ƒ startListeningIfSignal(length: 1) {},
            ƒ (length: 2) {}
        ],
        removeListener: [
            ƒ stopListeningIfSignal(length: 1) {},
            ƒ (length: 2) {}
        ],
        warning: ƒ onWarning(length: 1) {}
    },
    _eventsCount: 3,
    _exiting: false,
    _fatalException: <ref *12> ƒ (length: 2) {},
    _getActiveHandles: <ref *13> ƒ _getActiveHandles(length: 0) {},
    _getActiveRequests: <ref *14> ƒ _getActiveRequests(length: 0) {},
    _kill: <ref *15> ƒ _kill(length: 0) {},
    _linkedBinding: <ref *16> ƒ _linkedBinding(length: 1) {},
    _maxListeners: undefined,
    _preload_modules: <ref *17> [],
    _rawDebug: <ref *18> ƒ _rawDebug(length: 0) {},
    _startProfilerIdleNotifier: <ref *19> ƒ (length: 0) {},
    _stopProfilerIdleNotifier: <ref *20> ƒ (length: 0) {},
    _tickCallback: <ref *21> ƒ runNextTicks(length: 0) {},
    abort: <ref *22> ƒ abort(length: 0) {},
    addUncaughtExceptionCaptureCallback: <ref *23> ƒ addUncaughtExceptionCaptureCallback(length: 1) {},
    allowedNodeEnvironmentFlags: <ref *24> NodeEnvironmentFlagsSet {
        Symbol(internal properties): {
            array: [
                "--experimental-abortcontroller",
                "--experimental-report",
                "--experimental-modules",
                "--http-parser",
                "--experimental-fetch",
                "--experimental-quic",
                "--disable-sigusr1",
                "--no-disable-sigusr1",
                "--allow-wasi",
                "--no-allow-wasi",
                "--input-type",
                "--jitless",
                "--experimental-sqlite",
                "--no-experimental-sqlite",
                "--allow-inspector",
                "--no-allow-inspector",
                "--experimental-web-worker",
                "--no-experimental-web-worker",
                "--experimental-addon-modules",
                "--no-experimental-addon-modules",
                "--test-coverage-functions",
                "--expose-gc",
                "--experimental-loader",
                "--allow-net",
                "--no-allow-net",
                "--experimental-require-module",
                "--no-experimental-require-module",
                "--watch",
                "--no-watch",
                "--bench-reporter",
                "--preserve-symlinks-main",
                "--no-preserve-symlinks-main",
                "--allow-fs-write",
                "--allow-child-process",
                "--no-allow-child-process",
                "--allow-ffi",
                "--no-allow-ffi",
                "--permission-audit",
                "--no-permission-audit",
                "--trace-require-module",
                "--experimental-import-meta-resolve",
                "--no-experimental-import-meta-resolve",
                "--allow-worker",
                "--no-allow-worker",
                "--experimental-vm-modules",
                "--no-experimental-vm-modules",
                "--experimental-ffi",
                "--no-experimental-ffi",
                "--experimental-wasi-unstable-preview1",
                "--test-randomize",
                "--no-test-randomize",
                "--test-coverage-include",
                "--test-coverage-exclude",
                "--inspect-publish-uid",
                "--inspect-brk",
                "--no-inspect-brk",
                "--inspect-port",
                "--trace-exit",
                "--no-trace-exit",
                "--allow-fs-read",
                "--experimental-package-map",
                "--experimental-top-level-await",
                "--report-on-signal",
                "--no-report-on-signal",
                "--cpu-prof-dir",
                "--enable-etw-stack-walking",
                "--max-old-space-size",
                "--perf-basic-prof",
                "--inspect-wait",
                "--no-inspect-wait",
                "--perf-prof",
                "--track-heap-objects",
                "--no-track-heap-objects",
                "--max-heap-size",
                "--worker-snapshot",
                "--no-worker-snapshot",
                "--experimental-dtls",
                "--watch-path",
                "--max-old-space-size-percentage",
                "--extra-info-on-fatal-exception",
                "--no-extra-info-on-fatal-exception",
                "--stack-trace-limit",
                "--network-family-autoselection",
                "--no-network-family-autoselection",
                "--allow-env",
                "--report-signal",
                "--abort-on-uncaught-exception",
                "--test-random-seed",
                "--tls-min-v1.0",
                "--no-tls-min-v1.0",
                "--interpreted-frames-native-stack",
                "--inspect",
                "--no-inspect",
                "--report-uncaught-exception",
                "--no-report-uncaught-exception",
                "--cpu-prof-name",
                "--tls-min-v1.2",
                "--no-tls-min-v1.2",
                "--experimental-import-text",
                "--no-experimental-import-text",
                "--trace-promises",
                "--no-trace-promises",
                "--experimental-shadow-realm",
                "--no-experimental-shadow-realm",
                "--max-semi-space-size",
                "--perf-prof-unwinding-info",
                "--force-context-aware",
                "--no-force-context-aware",
                "--experimental-print-required-tla",
                "--no-experimental-print-required-tla",
                "--use-system-ca",
                "--no-use-system-ca",
                "--warnings",
                "--no-warnings",
                "--perf-basic-prof-only-functions",
                "--tls-max-v1.3",
                "--no-tls-max-v1.3",
                "--experimental-repl-await",
                "--test-coverage-include-all",
                "--no-test-coverage-include-all",
                "--trace-env-native-stack",
                "--no-trace-env-native-stack",
                "--report-exclude-network",
                "--no-report-exclude-network",
                "--tls-max-v1.2",
                "--no-tls-max-v1.2",
                "--permission",
                "--no-permission",
                "--heap-prof",
                "--no-heap-prof",
                "--heap-prof-dir",
                "--bench-name-pattern",
                "--disallow-code-generation-from-strings",
                "--title",
                "--allow-fs-vfs",
                "--no-allow-fs-vfs",
                "--bench-samples",
                "--test-coverage-lines",
                "--use-largepages",
                "--import",
                "--localstorage-file",
                "--trace-sigint",
                "--no-trace-sigint",
                "--experimental-json-modules",
                "--experimental-bench",
                "--no-experimental-bench",
                "--secure-heap-min",
                "--enable-fips-indicator-events",
                "--no-enable-fips-indicator-events",
                "--allow-openssl-store",
                "--no-allow-openssl-store",
                "--redirect-warnings",
                "--max-http-header-size",
                "--test-name-pattern",
                "--test-isolation",
                "--entry-url",
                "--no-entry-url",
                "--test-rerun-failures",
                "--trace-env",
                "--no-trace-env",
                "--openssl-shared-config",
                "--no-openssl-shared-config",
                "--heap-prof-interval",
                "--cpu-prof-interval",
                "--disable-proto",
                "--cpu-prof",
                "--no-cpu-prof",
                "--zero-fill-buffers",
                "--no-zero-fill-buffers",
                "--experimental-worker",
                "--test-shard",
                "--use-bundled-ca",
                "--no-use-bundled-ca",
                "--experimental-global-webcrypto",
                "--trace-event-categories",
                "--force-fips",
                "--no-force-fips",
                "--experimental-webstorage",
                "--no-experimental-webstorage",
                "--openssl-legacy-provider",
                "--no-openssl-legacy-provider",
                "--v8-pool-size",
                "--trace-sync-io",
                "--no-trace-sync-io",
                "--report-compact",
                "--no-report-compact",
                "--debug-arraybuffer-allocations",
                "--no-debug-arraybuffer-allocations",
                "--addons",
                "--no-addons",
                "--node-memory-debug",
                "--experimental-specifier-resolution",
                "--test-reporter-destination",
                "--trace-event-file-pattern",
                "--trace-env-js-stack",
                "--no-trace-env-js-stack",
                "--disable-wasm-trap-handler",
                "--no-disable-wasm-trap-handler",
                "--snapshot-blob",
                "--unhandled-rejections",
                "--test-coverage-branches",
                "--network-family-autoselection-attempt-timeout",
                "--report-dir",
                "--tls-min-v1.3",
                "--no-tls-min-v1.3",
                "--experimental-websocket",
                "--enable-fips",
                "--no-enable-fips",
                "--test-global-setup",
                "--report-on-fatalerror",
                "--no-report-on-fatalerror",
                "--diagnostic-dir",
                "--trace-uncaught",
                "--no-trace-uncaught",
                "--openssl-config",
                "--bench-warmup",
                "--enable-source-maps",
                "--no-enable-source-maps",
                "--report-filename",
                "--tls-cipher-list",
                "--experimental-wasm-modules",
                "--use-openssl-ca",
                "--no-use-openssl-ca",
                "--tls-min-v1.1",
                "--no-tls-min-v1.1",
                "--experimental-global-navigator",
                "--no-experimental-global-navigator",
                "--node-snapshot",
                "--no-node-snapshot",
                "--icu-data-dir",
                "--frozen-intrinsics",
                "--no-frozen-intrinsics",
                "--heap-prof-name",
                "--preserve-symlinks",
                "--no-preserve-symlinks",
                "--secure-heap",
                "--test-reporter",
                "--experimental-eventsource",
                "--no-experimental-eventsource",
                "--use-env-proxy",
                "--no-use-env-proxy",
                "--test-skip-pattern",
                "--force-node-api-uncaught-exceptions-policy",
                "--no-force-node-api-uncaught-exceptions-policy",
                "--deprecation",
                "--no-deprecation",
                "--global-search-paths",
                "--no-global-search-paths",
                "--watch-kill-signal",
                "--trace-warnings",
                "--no-trace-warnings",
                "--insecure-http-parser",
                "--no-insecure-http-parser",
                "--watch-preserve-output",
                "--no-watch-preserve-output",
                "--bench-isolation",
                "--disable-warning",
                "--heapsnapshot-near-heap-limit",
                "--heapsnapshot-signal",
                "--experimental-vfs",
                "--no-experimental-vfs",
                "--report-exclude-env",
                "--no-report-exclude-env",
                "--experimental-global-customevent",
                "--bench-reporter-destination",
                "--force-async-hooks-checks",
                "--no-force-async-hooks-checks",
                "--strip-types",
                "--no-strip-types",
                "--pending-deprecation",
                "--no-pending-deprecation",
                "--dns-result-order",
                "--test-only",
                "--no-test-only",
                "--experimental-stream-iter",
                "--no-experimental-stream-iter",
                "--require-module",
                "--no-require-module",
                "--conditions",
                "--experimental-detect-module",
                "--no-experimental-detect-module",
                "--allow-addons",
                "--no-allow-addons",
                "--test-forbid-only",
                "--no-test-forbid-only",
                "--tls-keylog",
                "--throw-deprecation",
                "--no-throw-deprecation",
                "--trace-deprecation",
                "--no-trace-deprecation",
                "--require",
                "--verify-base-objects",
                "--no-verify-base-objects",
                "--experimental-strip-private-modules",
                "--no-experimental-strip-private-modules",
                "--napi-modules",
                "--trace-tls",
                "--no-trace-tls",
                "--enable-network-family-autoselection",
                "--force-fips",
                "--report-directory",
                "--es-module-specifier-resolution",
                "--inspect",
                "--loader",
                "--debug-port",
                "--experimental-test-isolation",
                "--inspect-brk",
                "-r",
                "--trace-events-enabled",
                "--experimental-strip-types",
                "-C",
                "--prof-process",
                "--inspect-wait",
                "--webstorage"
            ]
        }
    },
    arch: "x64",
    argv: <ref *27> [
        "/opt/hostedtoolcache/node/27.0.0-alpha.0.1.0/x64/bin/node"
    ],
    argv0: "node",
    availableMemory: <ref *28> ƒ availableMemory(length: 0) {},
    binding: <ref *29> ƒ binding(length: 1) {},
    chdir: <ref *30> ƒ (length: 1) {},
    config: <ref *31> {
        target_defaults: {
            cflags: [],
            conditions: [],
            configurations: {
                Debug: {},
                Release: {}
            },
            default_configuration: "Release",
            defines: [
                "NODE_OPENSSL_CONF_NAME=nodejs_conf",
                "ICU_NO_USER_DATA_OVERRIDE"
            ],
            include_dirs: [],
            libraries: []
        },
        variables: {
            asan: 0,
            build_type%: "Release",
            cargo_cross_compiling: 0,
            cargo_rust_target: "",
            clang: 1,
            control_flow_guard: false,
            coverage: false,
            dcheck_always_on: 0,
            debug_nghttp2: false,
            debug_node: false,
            debug_symbols: false,
            enable_lto: false,
            enable_pgo_generate: false,
            enable_pgo_use: false,
            enable_thin_lto: false,
            error_on_warn: false,
            force_dynamic_crt: 0,
            host_arch: "x64",
            icu_data_in: "../../deps/icu-tmp/icudt78l.dat",
            icu_endianness: "l",
            icu_gyp_path: "tools/icu/icu-generic.gyp",
            icu_path: "deps/icu-small",
            icu_small: false,
            icu_system: false,
            icu_ver_major: "78",
            libdir: "lib",
            llvm_version: "20.1",
            lto_jobs: "",
            napi_build_version: "10",
            node_builtin_shareable_builtins: [
                "deps/undici/undici.js",
                "deps/amaro/dist/internal.js"
            ],
            node_byteorder: "little",
            node_cctest_sources: [
                "test/cctest/inspector/test_network_requests_buffer.cc",
                "test/cctest/inspector/test_node_protocol.cc",
                "test/cctest/node_test_fixture.cc",
                "test/cctest/test_aliased_buffer.cc",
                "test/cctest/test_base64.cc",
                "test/cctest/test_base_object_ptr.cc",
                "test/cctest/test_cppgc.cc",
                "test/cctest/test_dataqueue.cc",
                "test/cctest/test_diagnostics_channel.cc",
                "test/cctest/test_env_permission.cc",
                "test/cctest/test_environment.cc",
                "test/cctest/test_environment_shared_isolate.cc",
                "test/cctest/test_inspector_socket.cc",
                "test/cctest/test_inspector_socket_server.cc",
                "test/cctest/test_json_utils.cc",
                "test/cctest/test_linked_binding.cc",
                "test/cctest/test_lru_cache.cc",
                "test/cctest/test_node_api.cc",
                "test/cctest/test_node_crypto.cc",
                "test/cctest/test_node_crypto_env.cc",
                "test/cctest/test_node_file.cc",
                "test/cctest/test_node_file_mkstemp.cc",
                "test/cctest/test_node_ipc_serdes.cc",
                "test/cctest/test_node_postmortem_metadata.cc",
                "test/cctest/test_node_task_runner.cc",
                "test/cctest/test_path.cc",
                "test/cctest/test_per_process.cc",
                "test/cctest/test_platform.cc",
                "test/cctest/test_quic_arena.cc",
                "test/cctest/test_quic_cid.cc",
                "test/cctest/test_quic_error.cc",
                "test/cctest/test_quic_preferredaddress.cc",
                "test/cctest/test_quic_tokenbucket.cc",
                "test/cctest/test_quic_tokens.cc",
                "test/cctest/test_report.cc",
                "test/cctest/test_sockaddr.cc",
                "test/cctest/test_string_bytes.cc",
                "test/cctest/test_trace_event.cc",
                "test/cctest/test_traced_value.cc",
                "test/cctest/test_util.cc",
                "test/cctest/node_test_fixture.h"
            ],
            node_debug_lib: false,
            node_enable_d8: false,
            node_enable_experimentals: false,
            node_enable_v8_vtunejit: false,
            node_enable_v8debughelper: false,
            node_enable_v8windbg: false,
            node_install_corepack: false,
            node_install_npm: true,
            node_library_files: [
                "lib/_http_agent.js",
                "lib/_http_client.js",
                "lib/_http_common.js",
                "lib/_http_incoming.js",
                "lib/_http_outgoing.js",
                "lib/_http_server.js",
                "lib/assert.js",
                "lib/assert/strict.js",
                "lib/async_hooks.js",
                "lib/bench.js",
                "lib/bench/reporters.js",
                "lib/buffer.js",
                "lib/child_process.js",
                "lib/cluster.js",
                "lib/console.js",
                "lib/constants.js",
                "lib/crypto.js",
                "lib/dgram.js",
                "lib/diagnostics_channel.js",
                "lib/dns.js",
                "lib/dns/promises.js",
                "lib/domain.js",
                "lib/dtls.js",
                "lib/events.js",
                "lib/ffi.js",
                "lib/fs.js",
                "lib/fs/promises.js",
                "lib/http.js",
                "lib/http2.js",
                "lib/https.js",
                "lib/inspector.js",
                "lib/inspector/promises.js",
                "lib/internal/abort_controller.js",
                "lib/internal/assert.js",
                "lib/internal/assert/assertion_error.js",
                "lib/internal/assert/myers_diff.js",
                "lib/internal/assert/utils.js",
                "lib/internal/async_context_frame.js",
                "lib/internal/async_hooks.js",
                "lib/internal/async_local_storage/async_context_frame.js",
                "lib/internal/async_local_storage/run_scope.js",
                "lib/internal/bench_runner/benchmark.js",
                "lib/internal/bench_runner/benchmarks_stream.js",
                "lib/internal/bench_runner/cli.js",
                "lib/internal/bench_runner/harness.js",
                "lib/internal/bench_runner/reporter/json.js",
                "lib/internal/bench_runner/reporter/spec.js",
                "lib/internal/bench_runner/runner.js",
                "lib/internal/blob.js",
                "lib/internal/blocklist.js",
                "lib/internal/bootstrap/node.js",
                "lib/internal/bootstrap/realm.js",
                "lib/internal/bootstrap/shadow_realm.js",
                "lib/internal/bootstrap/switches/does_not_own_process_state.js",
                "lib/internal/bootstrap/switches/does_own_process_state.js",
                "lib/internal/bootstrap/switches/is_main_thread.js",
                "lib/internal/bootstrap/switches/is_not_main_thread.js",
                "lib/internal/bootstrap/web/exposed-wildcard.js",
                "lib/internal/bootstrap/web/exposed-window-or-worker.js",
                "lib/internal/buffer.js",
                "lib/internal/child_process.js",
                "lib/internal/child_process/serialization.js",
                "lib/internal/cli_table.js",
                "lib/internal/cluster/child.js",
                "lib/internal/cluster/primary.js",
                "lib/internal/cluster/round_robin_handle.js",
                "lib/internal/cluster/shared_handle.js",
                "lib/internal/cluster/utils.js",
                "lib/internal/cluster/worker.js",
                "lib/internal/console/constructor.js",
                "lib/internal/console/global.js",
                "lib/internal/constants.js",
                "lib/internal/crypto/aes.js",
                "lib/internal/crypto/argon2.js",
                "lib/internal/crypto/certificate.js",
                "lib/internal/crypto/cfrg.js",
                "lib/internal/crypto/chacha20_poly1305.js",
                "lib/internal/crypto/cipher.js",
                "lib/internal/crypto/diffiehellman.js",
                "lib/internal/crypto/ec.js",
                "lib/internal/crypto/hash.js",
                "lib/internal/crypto/hashnames.js",
                "lib/internal/crypto/hkdf.js",
                "lib/internal/crypto/kem.js",
                "lib/internal/crypto/kem_hybrids.js",
                "lib/internal/crypto/keygen.js",
                "lib/internal/crypto/keys.js",
                "lib/internal/crypto/mac.js",
                "lib/internal/crypto/ml_dsa.js",
                "lib/internal/crypto/ml_kem.js",
                "lib/internal/crypto/pbkdf2.js",
                "lib/internal/crypto/provider_mac.js",
                "lib/internal/crypto/random.js",
                "lib/internal/crypto/rsa.js",
                "lib/internal/crypto/scrypt.js",
                "lib/internal/crypto/sig.js",
                "lib/internal/crypto/util.js",
                "lib/internal/crypto/webcrypto.js",
                "lib/internal/crypto/webcrypto_util.js",
                "lib/internal/crypto/webidl.js",
                "lib/internal/crypto/x509.js",
                "lib/internal/crypto/x509_generation.js",
                "lib/internal/data_url.js",
                "lib/internal/debugger/inspect.js",
                "lib/internal/debugger/inspect_client.js",
                "lib/internal/debugger/inspect_helpers.js",
                "lib/internal/debugger/inspect_probe.js",
                "lib/internal/debugger/inspect_repl.js",
                "lib/internal/dgram.js",
                "lib/internal/dns/callback_resolver.js",
                "lib/internal/dns/promises.js",
                "lib/internal/dns/utils.js",
                "lib/internal/dtls/dtls.js",
                "lib/internal/dtls/state.js",
                "lib/internal/dtls/stats.js",
                "lib/internal/dtls/symbols.js",
                "lib/internal/encoding.js",
                "lib/internal/encoding/single-byte.js",
                "lib/internal/encoding/util.js",
                "lib/internal/error_serdes.js",
                "lib/internal/errors.js",
                "lib/internal/errors/error_source.js",
                "lib/internal/event_target.js",
                "lib/internal/events/abort_listener.js",
                "lib/internal/events/symbols.js",
                "lib/internal/ffi-shared-buffer.js",
                "lib/internal/ffi/fast-api.js",
                "lib/internal/ffi/vfs.js",
                "lib/internal/file.js",
                "lib/internal/fixed_queue.js",
                "lib/internal/freelist.js",
                "lib/internal/freeze_intrinsics.js",
                "lib/internal/fs/cp/cp-sync.js",
                "lib/internal/fs/cp/cp.js",
                "lib/internal/fs/dir.js",
                "lib/internal/fs/glob.js",
                "lib/internal/fs/promises.js",
                "lib/internal/fs/read/context.js",
                "lib/internal/fs/recursive_watch.js",
                "lib/internal/fs/rimraf.js",
                "lib/internal/fs/streams.js",
                "lib/internal/fs/sync_write_stream.js",
                "lib/internal/fs/utils.js",
                "lib/internal/fs/watchers.js",
                "lib/internal/heap_utils.js",
                "lib/internal/histogram.js",
                "lib/internal/http.js",
                "lib/internal/http/agent.js",
                "lib/internal/http/client.js",
                "lib/internal/http/common.js",
                "lib/internal/http/incoming.js",
                "lib/internal/http/outgoing.js",
                "lib/internal/http/server.js",
                "lib/internal/http2/compat.js",
                "lib/internal/http2/core.js",
                "lib/internal/http2/util.js",
                "lib/internal/inspector/network.js",
                "lib/internal/inspector/network_http.js",
                "lib/internal/inspector/network_http2.js",
                "lib/internal/inspector/network_resources.js",
                "lib/internal/inspector/network_undici.js",
                "lib/internal/inspector/webstorage.js",
                "lib/internal/inspector_async_hook.js",
                "lib/internal/inspector_network_tracking.js",
                "lib/internal/js_stream_socket.js",
                "lib/internal/legacy/processbinding.js",
                "lib/internal/linkedlist.js",
                "lib/internal/locks.js",
                "lib/internal/main/bench_runner.js",
                "lib/internal/main/check_syntax.js",
                "lib/internal/main/embedding.js",
                "lib/internal/main/eval_stdin.js",
                "lib/internal/main/eval_string.js",
                "lib/internal/main/inspect.js",
                "lib/internal/main/mksnapshot.js",
                "lib/internal/main/print_help.js",
                "lib/internal/main/prof_process.js",
                "lib/internal/main/repl.js",
                "lib/internal/main/run_main_module.js",
                "lib/internal/main/test_runner.js",
                "lib/internal/main/watch_mode.js",
                "lib/internal/main/worker_thread.js",
                "lib/internal/mime.js",
                "lib/internal/modules/cjs/loader.js",
                "lib/internal/modules/customization_hooks.js",
                "lib/internal/modules/esm/assert.js",
                "lib/internal/modules/esm/create_dynamic_module.js",
                "lib/internal/modules/esm/get_format.js",
                "lib/internal/modules/esm/hooks.js",
                "lib/internal/modules/esm/load.js",
                "lib/internal/modules/esm/loader.js",
                "lib/internal/modules/esm/module_job.js",
                "lib/internal/modules/esm/module_map.js",
                "lib/internal/modules/esm/resolve.js",
                "lib/internal/modules/esm/shared_constants.js",
                "lib/internal/modules/esm/translators.js",
                "lib/internal/modules/esm/utils.js",
                "lib/internal/modules/esm/worker.js",
                "lib/internal/modules/helpers.js",
                "lib/internal/modules/package_json_reader.js",
                "lib/internal/modules/package_map.js",
                "lib/internal/modules/run_main.js",
                "lib/internal/modules/typescript.js",
                "lib/internal/navigator.js",
                "lib/internal/net.js",
                "lib/internal/net/promises.js",
                "lib/internal/options.js",
                "lib/internal/per_context/domexception.js",
                "lib/internal/per_context/messageport.js",
                "lib/internal/per_context/primordials.js",
                "lib/internal/perf/event_loop_delay.js",
                "lib/internal/perf/event_loop_utilization.js",
                "lib/internal/perf/nodetiming.js",
                "lib/internal/perf/observe.js",
                "lib/internal/perf/performance.js",
                "lib/internal/perf/performance_entry.js",
                "lib/internal/perf/resource_timing.js",
                "lib/internal/perf/timerify.js",
                "lib/internal/perf/usertiming.js",
                "lib/internal/perf/utils.js",
                "lib/internal/priority_queue.js",
                "lib/internal/process/execution.js",
                "lib/internal/process/finalization.js",
                "lib/internal/process/per_thread.js",
                "lib/internal/process/permission.js",
                "lib/internal/process/pre_execution.js",
                "lib/internal/process/promises.js",
                "lib/internal/process/report.js",
                "lib/internal/process/signal.js",
                "lib/internal/process/task_queues.js",
                "lib/internal/process/warning.js",
                "lib/internal/process/worker_thread_only.js",
                "lib/internal/promise_hooks.js",
                "lib/internal/querystring.js",
                "lib/internal/quic/diagnostics.js",
                "lib/internal/quic/quic.js",
                "lib/internal/quic/state.js",
                "lib/internal/quic/stats.js",
                "lib/internal/quic/symbols.js",
                "lib/internal/readline/callbacks.js",
                "lib/internal/readline/emitKeypressEvents.js",
                "lib/internal/readline/interface.js",
                "lib/internal/readline/promises.js",
                "lib/internal/readline/utils.js",
                "lib/internal/repl.js",
                "lib/internal/repl/completion.js",
                "lib/internal/repl/eval.js",
                "lib/internal/repl/highlight.js",
                "lib/internal/repl/history.js",
                "lib/internal/repl/inspector.js",
                "lib/internal/repl/transform.js",
                "lib/internal/repl/utils.js",
                "lib/internal/socket_list.js",
                "lib/internal/socketaddress.js",
                "lib/internal/source_map/prepare_stack_trace.js",
                "lib/internal/source_map/source_map.js",
                "lib/internal/source_map/source_map_cache.js",
                "lib/internal/source_map/source_map_cache_map.js",
                "lib/internal/stream_base_commons.js",
                "lib/internal/streams/add-abort-signal.js",
                "lib/internal/streams/compose.js",
                "lib/internal/streams/destroy.js",
                "lib/internal/streams/duplex.js",
                "lib/internal/streams/duplexify.js",
                "lib/internal/streams/duplexpair.js",
                "lib/internal/streams/end-of-stream.js",
                "lib/internal/streams/fast-utf8-stream.js",
                "lib/internal/streams/from.js",
                "lib/internal/streams/iter/broadcast.js",
                "lib/internal/streams/iter/classic.js",
                "lib/internal/streams/iter/consumers.js",
                "lib/internal/streams/iter/duplex.js",
                "lib/internal/streams/iter/from.js",
                "lib/internal/streams/iter/pull.js",
                "lib/internal/streams/iter/push.js",
                "lib/internal/streams/iter/ringbuffer.js",
                "lib/internal/streams/iter/share.js",
                "lib/internal/streams/iter/transform.js",
                "lib/internal/streams/iter/types.js",
                "lib/internal/streams/iter/utils.js",
                "lib/internal/streams/iter/webidl.js",
                "lib/internal/streams/lazy_transform.js",
                "lib/internal/streams/legacy.js",
                "lib/internal/streams/operators.js",
                "lib/internal/streams/passthrough.js",
                "lib/internal/streams/pipeline.js",
                "lib/internal/streams/readable.js",
                "lib/internal/streams/state.js",
                "lib/internal/streams/transform.js",
                "lib/internal/streams/utils.js",
                "lib/internal/streams/writable.js",
                "lib/internal/test/binding.js",
                "lib/internal/test/transfer.js",
                "lib/internal/test_runner/assert.js",
                "lib/internal/test_runner/coverage.js",
                "lib/internal/test_runner/harness.js",
                "lib/internal/test_runner/mock/loader.js",
                "lib/internal/test_runner/mock/mock.js",
                "lib/internal/test_runner/mock/mock_timers.js",
                "lib/internal/test_runner/reporter/dot.js",
                "lib/internal/test_runner/reporter/junit.js",
                "lib/internal/test_runner/reporter/lcov.js",
                "lib/internal/test_runner/reporter/rerun.js",
                "lib/internal/test_runner/reporter/spec.js",
                "lib/internal/test_runner/reporter/tap.js",
                "lib/internal/test_runner/reporter/utils.js",
                "lib/internal/test_runner/reporter/v8-serializer.js",
                "lib/internal/test_runner/runner.js",
                "lib/internal/test_runner/snapshot.js",
                "lib/internal/test_runner/tag_filter.js",
                "lib/internal/test_runner/test.js",
                "lib/internal/test_runner/tests_stream.js",
                "lib/internal/test_runner/utils.js",
                "lib/internal/timers.js",
                "lib/internal/tls/common.js",
                "lib/internal/tls/secure-context.js",
                "lib/internal/tls/wrap.js",
                "lib/internal/trace_events.js",
                "lib/internal/trace_events_async_hooks.js",
                "lib/internal/tty.js",
                "lib/internal/url.js",
                "lib/internal/util.js",
                "lib/internal/util/colors.js",
                "lib/internal/util/comparisons.js",
                "lib/internal/util/debounce.js",
                "lib/internal/util/debuglog.js",
                "lib/internal/util/diff.js",
                "lib/internal/util/inspect.js",
                "lib/internal/util/inspector.js",
                "lib/internal/util/parse_args/parse_args.js",
                "lib/internal/util/parse_args/utils.js",
                "lib/internal/util/throttle.js",
                "lib/internal/util/trace_sigint.js",
                "lib/internal/util/types.js",
                "lib/internal/v8/cpu_profiler.js",
                "lib/internal/v8/heap_profile.js",
                "lib/internal/v8/startup_snapshot.js",
                "lib/internal/v8_prof_polyfill.js",
                "lib/internal/validators.js",
                "lib/internal/vfs/dir.js",
                "lib/internal/vfs/errors.js",
                "lib/internal/vfs/fd.js",
                "lib/internal/vfs/file_handle.js",
                "lib/internal/vfs/file_system.js",
                "lib/internal/vfs/provider.js",
                "lib/internal/vfs/provider_registry.js",
                "lib/internal/vfs/providers/composable.js",
                "lib/internal/vfs/providers/memory.js",
                "lib/internal/vfs/providers/real.js",
                "lib/internal/vfs/providers/sea.js",
                "lib/internal/vfs/providers/ziparchive.js",
                "lib/internal/vfs/root.js",
                "lib/internal/vfs/router.js",
                "lib/internal/vfs/sea.js",
                "lib/internal/vfs/sea_compile_cache.js",
                "lib/internal/vfs/setup.js",
                "lib/internal/vfs/stats.js",
                "lib/internal/vfs/streams.js",
                "lib/internal/vfs/watcher.js",
                "lib/internal/vm.js",
                "lib/internal/vm/module.js",
                "lib/internal/wasm_web_api.js",
                "lib/internal/watch_mode/files_watcher.js",
                "lib/internal/watchdog.js",
                "lib/internal/webidl.js",
                "lib/internal/webstorage.js",
                "lib/internal/webstreams/adapters.js",
                "lib/internal/webstreams/compression.js",
                "lib/internal/webstreams/encoding.js",
                "lib/internal/webstreams/queuingstrategies.js",
                "lib/internal/webstreams/readablestream.js",
                "lib/internal/webstreams/transfer.js",
                "lib/internal/webstreams/transformstream.js",
                "lib/internal/webstreams/util.js",
                "lib/internal/webstreams/writablestream.js",
                "lib/internal/webworker.js",
                "lib/internal/worker.js",
                "lib/internal/worker/clone_dom_exception.js",
                "lib/internal/worker/io.js",
                "lib/internal/worker/js_transferable.js",
                "lib/internal/worker/messaging.js",
                "lib/internal/zip.js",
                "lib/internal/zip/archive.js",
                "lib/internal/zip/binary.js",
                "lib/internal/zip/buffer.js",
                "lib/internal/zip/compression.js",
                "lib/internal/zip/constants.js",
                "lib/internal/zip/content-size.js",
                "lib/internal/zip/dos.js",
                "lib/internal/zip/entry.js",
                "lib/internal/zip/extra-fields.js",
                "lib/internal/zip/file.js",
                "lib/internal/zip/fs-util.js",
                "lib/internal/zip/header-builders.js",
                "lib/internal/zip/headers.js",
                "lib/module.js",
                "lib/net.js",
                "lib/net/promises.js",
                "lib/os.js",
                "lib/path.js",
                "lib/path/posix.js",
                "lib/path/win32.js",
                "lib/perf_hooks.js",
                "lib/process.js",
                "lib/punycode.js",
                "lib/querystring.js",
                "lib/quic.js",
                "lib/readline.js",
                "lib/readline/promises.js",
                "lib/repl.js",
                "lib/sea.js",
                "lib/sqlite.js",
                "lib/stream.js",
                "lib/stream/consumers.js",
                "lib/stream/iter.js",
                "lib/stream/promises.js",
                "lib/stream/web.js",
                "lib/string_decoder.js",
                "lib/sys.js",
                "lib/test.js",
                "lib/test/reporters.js",
                "lib/timers.js",
                "lib/timers/promises.js",
                "lib/tls.js",
                "lib/trace_events.js",
                "lib/tty.js",
                "lib/url.js",
                "lib/util.js",
                "lib/util/types.js",
                "lib/v8.js",
                "lib/vfs.js",
                "lib/vm.js",
                "lib/wasi.js",
                "lib/worker_threads.js",
                "lib/zlib.js",
                "lib/zlib/iter.js"
            ],
            node_module_version: 153,
            node_no_browser_globals: false,
            node_prefix: "/",
            node_release_urlbase: "https://nodejs.org/download/release/",
            node_section_ordering_info: "",
            node_shared: false,
            node_shared_abseil: false,
            node_shared_ada: false,
            node_shared_brotli: false,
            node_shared_cares: false,
            node_shared_ffi: false,
            node_shared_gtest: false,
            node_shared_gtest_libraries: [],
            node_shared_hdr_histogram: false,
            node_shared_highway: false,
            node_shared_http_parser: false,
            node_shared_libuv: false,
            node_shared_libuv_include_dirs: [],
            node_shared_lief: false,
            node_shared_merve: false,
            node_shared_nbytes: false,
            node_shared_nghttp2: false,
            node_shared_nghttp3: false,
            node_shared_ngtcp2: false,
            node_shared_openssl: false,
            node_shared_openssl_include_dirs: [],
            node_shared_perfetto: false,
            node_shared_simdjson: false,
            node_shared_simdutf: false,
            node_shared_sqlite: false,
            node_shared_sqlite_include_dirs: [],
            node_shared_temporal_capi: false,
            node_shared_uvwasi: false,
            node_shared_zlib: false,
            node_shared_zlib_include_dirs: [],
            node_shared_zstd: false,
            node_tag: "",
            node_target_type: "executable",
            node_use_amaro: true,
            node_use_bundled_v8: true,
            node_use_dtls: false,
            node_use_ffi: true,
            node_use_lief: true,
            node_use_node_code_cache: true,
            node_use_node_snapshot: true,
            node_use_openssl: true,
            node_use_quic: false,
            node_use_sqlite: true,
            node_use_v8_platform: true,
            node_with_ltcg: false,
            node_without_node_options: false,
            node_write_snapshot_as_array_literals: false,
            openssl_is_boringssl: false,
            openssl_is_fips: false,
            openssl_version: 1074790415,
            ossfuzz: false,
            shlib_suffix: "so.153",
            single_executable_application: true,
            suppress_all_error_on_warn: false,
            target_arch: "x64",
            ubsan: 0,
            use_ccache_win: 0,
            use_prefix_to_find_headers: false,
            v8_enable_31bit_smis_on_64bit_arch: 0,
            v8_enable_extensible_ro_snapshot: 0,
            v8_enable_external_code_space: 0,
            v8_enable_gdbjit: 1,
            v8_enable_hugepage: 0,
            v8_enable_i18n_support: 1,
            v8_enable_inspector: 1,
            v8_enable_javascript_promise_hooks: 1,
            v8_enable_lite_mode: 0,
            v8_enable_maglev: 1,
            v8_enable_object_print: 1,
            v8_enable_pointer_compression: 0,
            v8_enable_pointer_compression_shared_cage: 0,
            v8_enable_sandbox: 0,
            v8_enable_short_builtin_calls: 1,
            v8_enable_temporal_support: 1,
            v8_enable_temporal_systemicu: 1,
            v8_enable_v8_checks: 0,
            v8_enable_wasm_simd256_revec: 1,
            v8_enable_webassembly: 1,
            v8_optimized_debug: 1,
            v8_promise_internal_field_count: 1,
            v8_random_seed: 0,
            v8_trace_maps: 0,
            v8_use_perfetto: 0,
            v8_use_siphash: 1,
            want_separate_host_toolset: 0
        }
    },
    constrainedMemory: <ref *50> ƒ constrainedMemory(length: 0) {},
    cpuUsage: <ref *51> ƒ cpuUsage(length: 1) {},
    cwd: <ref *52> ƒ wrappedCwd(length: 0) {},
    debugPort: 9229,
    default: process {
        _debugEnd: [Circular: *2],
        _debugProcess: [Circular: *3],
        _eval: "(async function probe(modules) {\n  const pad = \"    \";\n  const inspect = (val, indent = \"\", cache = …",
        _events: [Circular: *4],
        _eventsCount: 3,
        [get/set] _exiting: false,
        _fatalException: [Circular: *12],
        _getActiveHandles: [Circular: *13],
        _getActiveRequests: [Circular: *14],
        _kill: [Circular: *15],
        _linkedBinding: [Circular: *16],
        _maxListeners: undefined,
        _preload_modules: [Circular: *17],
        _rawDebug: [Circular: *18],
        _startProfilerIdleNotifier: [Circular: *19],
        _stopProfilerIdleNotifier: [Circular: *20],
        _tickCallback: [Circular: *21],
        abort: [Circular: *22],
        addUncaughtExceptionCaptureCallback: [Circular: *23],
        allowedNodeEnvironmentFlags: [Circular: *24],
        arch: "x64",
        argv: [Circular: *27],
        argv0: "node",
        availableMemory: [Circular: *28],
        binding: [Circular: *29],
        chdir: [Circular: *30],
        config: [Circular: *31],
        constrainedMemory: [Circular: *50],
        cpuUsage: [Circular: *51],
        cwd: [Circular: *52],
        debugPort: 9229,
        dlopen: <ref *54> ƒ dlopen(length: 0) {},
        [get/set] domain: undefined,
        emitWarning: <ref *55> ƒ emitWarning(length: 4) {},
        env: <ref *56>  {
            _: "/opt/hostedtoolcache/node/27.0.0-alpha.0.1.0/x64/bin/node",
            ACCEPT_EULA: "Y",
            ACTIONS_ORCHESTRATION_ID: "837c1b83-13bf-4f16-b9db-5ce540c53158.comparison.__default",
            ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE: "/opt/actionarchivecache",
            ACTIONS_RUNNER_RETURN_JOB_RESULT_FOR_HOSTED: "1",
            AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache",
            ANDROID_HOME: "/usr/local/lib/android/sdk",
            ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/27.3.13750724",
            ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/27.3.13750724",
            ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/30.0.16248370",
            ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/27.3.13750724",
            ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk",
            ANT_HOME: "/usr/share/ant",
            AZURE_EXTENSION_DIR: "/opt/az/azcliextensions",
            BOOTSTRAP_HASKELL_NONINTERACTIVE: "1",
            CHROME_BIN: "/usr/bin/google-chrome",
            CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64",
            CI: "true",
            DEBIAN_FRONTEND: "noninteractive",
            DOTNET_MULTILEVEL_LOOKUP: "0",
            DOTNET_NOLOGO: "1",
            DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1",
            EDGEWEBDRIVER: "/usr/local/share/edge_driver",
            ENABLE_RUNNER_TRACING: "true",
            GECKOWEBDRIVER: "/usr/local/share/gecko_driver",
            GHCUP_INSTALL_BASE_PREFIX: "/usr/local",
            GITHUB_ACTION: "__run",
            GITHUB_ACTION_REF: "",
            GITHUB_ACTION_REPOSITORY: "",
            GITHUB_ACTIONS: "true",
            GITHUB_ACTOR: "outslept",
            GITHUB_ACTOR_ID: "135520429",
            GITHUB_API_URL: "https://api.github.com",
            GITHUB_ARTIFACTS: "/home/runner/work/_temp/_runner_file_commands/artifacts_b634a0e6-f006-4e10-b9b6-a3b16546f6a8",
            GITHUB_ARTIFACTS_LIST: "/home/runner/work/_temp/_runner_file_commands/artifacts_list_b634a0e6-f006-4e10-b9b6-a3b16546f6a8",
            GITHUB_BASE_REF: "",
            GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_b634a0e6-f006-4e10-b9b6-a3b16546f6a8",
            GITHUB_EVENT_NAME: "workflow_dispatch",
            GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json",
            GITHUB_GRAPHQL_URL: "https://api.github.com/graphql",
            GITHUB_HEAD_REF: "",
            GITHUB_JOB: "comparison",
            GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_b634a0e6-f006-4e10-b9b6-a3b16546f6a8",
            GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_b634a0e6-f006-4e10-b9b6-a3b16546f6a8",
            GITHUB_REF: "refs/heads/main",
            GITHUB_REF_NAME: "main",
            GITHUB_REF_PROTECTED: "true",
            GITHUB_REF_TYPE: "branch",
            GITHUB_REPOSITORY: "outslept/compare-deno-node",
            GITHUB_REPOSITORY_ID: "1034352965",
            GITHUB_REPOSITORY_OWNER: "outslept",
            GITHUB_REPOSITORY_OWNER_ID: "135520429",
            GITHUB_RETENTION_DAYS: "90",
            GITHUB_RUN_ATTEMPT: "1",
            GITHUB_RUN_ID: "43869631852",
            GITHUB_RUN_NUMBER: "73",
            GITHUB_SERVER_URL: "https://github.com",
            GITHUB_SHA: "1cb1f84e2fb5aa1e6856fafcd98ed3042cbe587f",
            GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_b634a0e6-f006-4e10-b9b6-a3b16546f6a8",
            GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_b634a0e6-f006-4e10-b9b6-a3b16546f6a8",
            GITHUB_TRIGGERING_ACTOR: "outslept",
            GITHUB_WORKFLOW: "Comparison",
            GITHUB_WORKFLOW_REF: "outslept/compare-deno-node/.github/workflows/compare.yml@refs/heads/main",
            GITHUB_WORKFLOW_SHA: "1cb1f84e2fb5aa1e6856fafcd98ed3042cbe587f",
            GITHUB_WORKSPACE: "/home/runner/work/compare-deno-node/compare-deno-node",
            GOROOT_1_24_X64: "/opt/hostedtoolcache/go/1.24.13/x64",
            GOROOT_1_25_X64: "/opt/hostedtoolcache/go/1.25.14/x64",
            GOROOT_1_26_X64: "/opt/hostedtoolcache/go/1.26.11/x64",
            GRADLE_HOME: "/usr/share/gradle-9.9.1",
            HCA_CLOUD_PROVIDER: "aws",
            HOME: "/home/runner",
            HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650",
            HOMEBREW_NO_AUTO_UPDATE: "1",
            ImageOS: "ubuntu26",
            ImageVersion: "20261111.82.6",
            INVOCATION_ID: "277e1f14af1049b2970bc7313e7cd426",
            JAVA_HOME: "/usr/lib/jvm/temurin-25-jdk-amd64",
            JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64",
            JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64",
            JAVA_HOME_21_X64: "/usr/lib/jvm/temurin-21-jdk-amd64",
            JAVA_HOME_25_X64: "/usr/lib/jvm/temurin-25-jdk-amd64",
            JOURNAL_STREAM: "10:18706",
            LANG: "C.UTF-8",
            LOGNAME: "runner",
            MEMORY_PRESSURE_WATCH: "/sys/fs/cgroup/system.slice/hosted-compute-agent.service/memory.pressure",
            MEMORY_PRESSURE_WRITE: "c29tZSAyMDAwMDAgMjAwMDAwMAA=",
            NVM_DIR: "/home/runner/.nvm",
            PATH: "/home/runner/.deno/bin:/opt/hostedtoolcache/deno/0.0.0-e7b39ebd55c85aaf6a29290c1f5a99e2e21e09dd/x64:…",
            PIPX_BIN_DIR: "/opt/pipx_bin",
            PIPX_HOME: "/opt/pipx",
            POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-Linux",
            PSModulePath: "/root/.local/share/powershell/Modules:/usr/local/share/powershell/Modules:/opt/microsoft/powershell/…",
            PWD: "/home/runner/work/compare-deno-node/compare-deno-node",
            RUNNER_ARCH: "X64",
            RUNNER_ENVIRONMENT: "github-hosted",
            RUNNER_NAME: "GitHub Actions 1000004609",
            RUNNER_OS: "Linux",
            RUNNER_TEMP: "/home/runner/work/_temp",
            RUNNER_TOOL_CACHE: "/opt/hostedtoolcache",
            RUNNER_TRACKING_ID: "github_9aceb7e9-2860-49a0-ba63-c7801889ccbf",
            RUNNER_WORKSPACE: "/home/runner/work/compare-deno-node",
            SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar",
            SHELL: "/bin/bash",
            SHLVL: "1",
            SWIFT_PATH: "/usr/share/swift/usr/bin",
            SYSTEMD_EXEC_PID: "1942",
            USE_BAZEL_FALLBACK_VERSION: "silent:",
            USER: "runner",
            VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg",
            XDG_CONFIG_HOME: "/home/runner/.config",
            XDG_RUNTIME_DIR: "/run/user/1001"
        },
        execArgv: <ref *57> [
            "--input-type=module",
            "-e",
            "(async function probe(modules) {\n  const pad = \"    \";\n  const inspect = (val, indent = \"\", cache = …"
        ],
        execPath: "/opt/hostedtoolcache/node/27.0.0-alpha.0.1.0/x64/bin/node",
        execve: <ref *58> ƒ execve(length: 1) {},
        exit: <ref *59> ƒ exit(length: 1) {},
        [get/set] exitCode: undefined,
        features: <ref *60> {
            [get] cached_builtins: true,
            debug: false,
            [get] dtls: false,
            inspector: true,
            ipv6: true,
            openssl_is_boringssl: false,
            [get] quic: false,
            [get] require_module: true,
            tls: true,
            tls_alpn: true,
            tls_ocsp: true,
            tls_sni: true,
            [get] typescript: "strip",
            uv: true
        },
        [get/set] finalization: <ref *61> {
            register: ƒ register(length: 2) {},
            registerBeforeExit: ƒ registerBeforeExit(length: 2) {},
            unregister: ƒ unregister(length: 1) {}
        },
        getActiveResourcesInfo: <ref *65> ƒ getActiveResourcesInfo(length: 0) {},
        getBuiltinModule: <ref *66> ƒ getBuiltinModule(length: 1) {},
        getegid: <ref *67> ƒ getegid(length: 0) {},
        geteuid: <ref *68> ƒ geteuid(length: 0) {},
        getgid: <ref *69> ƒ getgid(length: 0) {},
        getgroups: <ref *70> ƒ getgroups(length: 0) {},
        getuid: <ref *71> ƒ getuid(length: 0) {},
        hasUncaughtExceptionCaptureCallback: <ref *72> ƒ hasUncaughtExceptionCaptureCallback(length: 0) {},
        hrtime: <ref *73> ƒ hrtime(length: 1) {
            bigint: ƒ hrtimeBigInt(length: 0) {}
        },
        initgroups: <ref *75> ƒ initgroups(length: 2) {},
        kill: <ref *76> ƒ kill(length: 2) {},
        loadEnvFile: <ref *77> ƒ loadEnvFile(length: 0) {},
        memoryUsage: <ref *78> ƒ memoryUsage(length: 0) {
            rss: ƒ rss(length: 0) {}
        },
        moduleLoadList: <ref *80> [
            "Internal Binding builtins",
            "Internal Binding module_wrap",
            "Internal Binding errors",
            "NativeModule internal/assert",
            "Internal Binding util",
            "NativeModule internal/errors",
            "Internal Binding config",
            "Internal Binding timers",
            "Internal Binding task_queue",
            "Internal Binding async_wrap",
            "Internal Binding symbols",
            "NativeModule internal/async_hooks",
            "Internal Binding constants",
            "Internal Binding types",
            "Internal Binding options",
            "NativeModule internal/options",
            "Internal Binding string_decoder",
            "NativeModule internal/util",
            "NativeModule internal/util/types",
            "NativeModule internal/validators",
            "NativeModule internal/linkedlist",
            "NativeModule internal/priority_queue",
            "NativeModule util/types",
            "Internal Binding buffer",
            "NativeModule internal/buffer",
            "Internal Binding icu",
            "NativeModule internal/util/inspect",
            "Internal Binding trace_events",
            "NativeModule internal/constants",
            "NativeModule internal/trace_events",
            "NativeModule internal/util/debuglog",
            "Internal Binding async_context_frame",
            "NativeModule internal/async_context_frame",
            "NativeModule internal/timers",
            "NativeModule internal/events/abort_listener",
            "NativeModule events",
            "Internal Binding mksnapshot",
            "NativeModule internal/v8/startup_snapshot",
            "NativeModule buffer",
            "NativeModule internal/webidl",
            "Internal Binding messaging",
            "NativeModule internal/worker/js_transferable",
            "Internal Binding diagnostics_channel",
            "NativeModule diagnostics_channel",
            "Internal Binding process_methods",
            "NativeModule internal/process/per_thread",
            "Internal Binding credentials",
            "NativeModule internal/fixed_queue",
            "NativeModule internal/process/promises",
            "NativeModule async_hooks",
            "NativeModule internal/process/task_queues",
            "NativeModule timers",
            "NativeModule path",
            "Internal Binding url_pattern",
            "NativeModule internal/querystring",
            "NativeModule querystring",
            "Internal Binding url",
            "NativeModule internal/url",
            "Internal Binding contextify",
            "NativeModule internal/vm",
            "NativeModule internal/process/execution",
            "NativeModule internal/process/warning",
            "Internal Binding fs",
            "NativeModule internal/fs/utils",
            "Internal Binding permission",
            "NativeModule internal/process/permission",
            "NativeModule fs",
            "NativeModule internal/source_map/source_map_cache",
            "Internal Binding modules",
            "NativeModule internal/modules/helpers",
            "NativeModule internal/console/constructor",
            "NativeModule internal/console/global",
            "NativeModule internal/util/inspector",
            "Internal Binding inspector",
            "NativeModule internal/streams/utils",
            "NativeModule util",
            "Internal Binding performance",
            "NativeModule internal/perf/utils",
            "NativeModule internal/event_target",
            "Internal Binding blob",
            "Internal Binding wasm_web_api",
            "NativeModule internal/process/signal",
            "NativeModule internal/modules/customization_hooks",
            "NativeModule internal/modules/package_json_reader",
            "NativeModule internal/modules/package_map",
            "NativeModule internal/modules/cjs/loader",
            "NativeModule internal/modules/esm/utils",
            "Internal Binding encoding_binding",
            "NativeModule url",
            "NativeModule internal/modules/esm/assert",
            "NativeModule internal/modules/esm/module_map",
            "NativeModule internal/modules/esm/module_job",
            "NativeModule internal/modules/esm/get_format",
            "NativeModule internal/modules/esm/load",
            "Internal Binding cjs_lexer",
            "NativeModule internal/modules/esm/translators",
            "NativeModule internal/modules/esm/resolve",
            "NativeModule internal/modules/esm/loader",
            "NativeModule internal/mime",
            "NativeModule internal/data_url",
            "NativeModule internal/modules/typescript",
            "NativeModule internal/encoding/single-byte",
            "NativeModule internal/encoding/util",
            "NativeModule internal/encoding",
            "NativeModule internal/blob",
            "NativeModule internal/net",
            "NativeModule internal/dns/utils",
            "NativeModule internal/streams/state",
            "NativeModule internal/streams/destroy",
            "NativeModule internal/streams/end-of-stream",
            "NativeModule internal/streams/legacy",
            "NativeModule internal/streams/add-abort-signal",
            "NativeModule string_decoder",
            "NativeModule internal/streams/from",
            "NativeModule internal/streams/readable",
            "NativeModule internal/streams/writable",
            "NativeModule stream",
            "NativeModule internal/inspector_async_hook",
            "Internal Binding worker",
            "NativeModule internal/modules/run_main",
            "NativeModule internal/process/pre_execution",
            "Internal Binding uv",
            "Internal Binding cares_wrap",
            "Internal Binding stream_wrap",
            "Internal Binding tcp_wrap",
            "Internal Binding pipe_wrap",
            "NativeModule internal/stream_base_commons",
            "NativeModule internal/perf/performance_entry",
            "NativeModule internal/perf/observe",
            "NativeModule internal/streams/duplex",
            "NativeModule net",
            "NativeModule internal/util/colors",
            "NativeModule internal/assert/myers_diff",
            "NativeModule internal/assert/assertion_error",
            "NativeModule internal/errors/error_source",
            "NativeModule internal/assert/utils",
            "NativeModule assert",
            "NativeModule assert/strict",
            "NativeModule internal/async_local_storage/run_scope",
            "NativeModule internal/async_local_storage/async_context_frame",
            "NativeModule internal/file",
            "Internal Binding udp_wrap",
            "NativeModule internal/dgram",
            "NativeModule dgram",
            "Internal Binding process_wrap",
            "Internal Binding tty_wrap",
            "NativeModule internal/socket_list",
            "Internal Binding spawn_sync",
            "NativeModule internal/child_process",
            "NativeModule child_process",
            "NativeModule internal/cluster/utils",
            "NativeModule internal/cluster/round_robin_handle",
            "NativeModule internal/cluster/shared_handle",
            "NativeModule internal/cluster/worker",
            "NativeModule internal/cluster/primary",
            "NativeModule cluster",
            "NativeModule console",
            "NativeModule constants",
            "Internal Binding crypto",
            "NativeModule internal/crypto/random",
            "NativeModule internal/crypto/hashnames",
            "NativeModule internal/crypto/util",
            "NativeModule internal/crypto/keys",
            "NativeModule internal/crypto/argon2",
            "NativeModule internal/crypto/pbkdf2",
            "NativeModule internal/crypto/scrypt",
            "NativeModule internal/crypto/hkdf",
            "NativeModule internal/crypto/keygen",
            "NativeModule internal/crypto/diffiehellman",
            "NativeModule internal/streams/transform",
            "NativeModule internal/streams/lazy_transform",
            "NativeModule internal/crypto/cipher",
            "NativeModule internal/crypto/sig",
            "NativeModule internal/crypto/hash",
            "NativeModule internal/crypto/provider_mac",
            "NativeModule internal/crypto/x509",
            "NativeModule internal/crypto/certificate",
            "NativeModule internal/crypto/kem",
            "NativeModule crypto",
            "NativeModule internal/crypto/webcrypto",
            "NativeModule internal/dns/callback_resolver",
            "NativeModule dns",
            "NativeModule internal/dns/promises",
            "NativeModule dns/promises",
            "NativeModule domain",
            "Internal Binding fs_dir",
            "NativeModule internal/fs/dir",
            "Internal Binding fs_event_wrap",
            "NativeModule internal/fs/watchers",
            "NativeModule internal/fs/recursive_watch",
            "NativeModule internal/readline/utils",
            "NativeModule internal/readline/callbacks",
            "Internal Binding os",
            "NativeModule os",
            "NativeModule internal/repl/history",
            "NativeModule internal/readline/interface",
            "NativeModule internal/fs/promises",
            "NativeModule internal/fs/streams",
            "NativeModule internal/streams/fast-utf8-stream",
            "NativeModule fs/promises",
            "NativeModule internal/http",
            "NativeModule internal/http/agent",
            "Internal Binding http_parser",
            "NativeModule internal/freelist",
            "NativeModule internal/abort_controller",
            "NativeModule internal/http/incoming",
            "NativeModule internal/http/common",
            "NativeModule internal/http/outgoing",
            "NativeModule internal/http/client",
            "NativeModule internal/http/server",
            "NativeModule http",
            "NativeModule internal/streams/pipeline",
            "NativeModule internal/tls/secure-context",
            "NativeModule internal/tls/common",
            "Internal Binding js_stream",
            "NativeModule internal/js_stream_socket",
            "Internal Binding tls_wrap",
            "NativeModule internal/tls/wrap",
            "NativeModule tls",
            "Internal Binding http2",
            "NativeModule internal/http2/util",
            "NativeModule internal/http2/compat",
            "Internal Binding stream_pipe",
            "NativeModule internal/http2/core",
            "NativeModule http2",
            "Internal Binding zlib",
            "NativeModule internal/zip/constants",
            "NativeModule internal/zip/binary",
            "NativeModule internal/zip/extra-fields",
            "NativeModule internal/zip/dos",
            "NativeModule internal/zip/headers",
            "NativeModule internal/zip/header-builders",
            "NativeModule internal/streams/compose",
            "NativeModule internal/zip/compression",
            "NativeModule internal/zip/fs-util",
            "NativeModule internal/zip/content-size",
            "NativeModule internal/zip/entry",
            "NativeModule internal/zip/archive",
            "NativeModule internal/zip/buffer",
            "NativeModule internal/zip/file",
            "NativeModule internal/zip",
            "NativeModule zlib",
            "NativeModule internal/perf/resource_timing",
            "NativeModule internal/perf/nodetiming",
            "NativeModule internal/perf/usertiming",
            "NativeModule internal/perf/event_loop_utilization",
            "NativeModule internal/histogram",
            "NativeModule internal/perf/timerify",
            "NativeModule internal/perf/performance",
            "NativeModule internal/perf/event_loop_delay",
            "NativeModule perf_hooks",
            "NativeModule internal/worker/io",
            "NativeModule internal/worker/messaging",
            "NativeModule internal/worker",
            "NativeModule worker_threads",
            "NativeModule internal/webstreams/util",
            "NativeModule internal/webstreams/writablestream",
            "NativeModule internal/webstreams/readablestream",
            "NativeModule internal/webstreams/transformstream",
            "NativeModule internal/webstreams/queuingstrategies",
            "NativeModule internal/webstreams/encoding",
            "NativeModule internal/webstreams/adapters",
            "NativeModule internal/webstreams/compression",
            "NativeModule stream/web",
            "NativeModule internal/streams/passthrough",
            "NativeModule internal/deps/undici/undici",
            "NativeModule https",
            "NativeModule internal/inspector/network_resources",
            "NativeModule inspector",
            "NativeModule inspector/promises",
            "NativeModule internal/source_map/source_map",
            "NativeModule module",
            "Internal Binding block_list",
            "NativeModule internal/socketaddress",
            "NativeModule internal/blocklist",
            "NativeModule internal/net/promises",
            "NativeModule net/promises",
            "Internal Binding ffi",
            "NativeModule internal/ffi-shared-buffer",
            "NativeModule internal/ffi/fast-api",
            "NativeModule internal/ffi/vfs",
            "NativeModule ffi",
            "Internal Binding sea",
            "NativeModule sea",
            "Internal Binding sqlite",
            "NativeModule sqlite",
            "NativeModule timers/promises",
            "NativeModule internal/test_runner/mock/mock_timers",
            "NativeModule internal/test_runner/mock/loader",
            "NativeModule internal/test_runner/mock/mock",
            "NativeModule internal/test_runner/tag_filter",
            "NativeModule internal/test_runner/tests_stream",
            "NativeModule internal/test_runner/utils",
            "NativeModule internal/test_runner/test",
            "NativeModule internal/test_runner/reporter/rerun",
            "NativeModule internal/test_runner/harness",
            "Internal Binding serdes",
            "Internal Binding v8",
            "NativeModule internal/v8/heap_profile",
            "NativeModule internal/v8/cpu_profiler",
            "Internal Binding profiler",
            "Internal Binding heap_utils",
            "Internal Binding internal_only_v8",
            "NativeModule internal/heap_utils",
            "NativeModule internal/promise_hooks",
            "NativeModule v8",
            "NativeModule internal/error_serdes",
            "NativeModule internal/watch_mode/files_watcher",
            "Internal Binding glob",
            "NativeModule internal/fs/glob",
            "NativeModule internal/test_runner/runner",
            "NativeModule test",
            "NativeModule vm",
            "NativeModule internal/test_runner/snapshot",
            "NativeModule internal/util/comparisons",
            "NativeModule internal/test_runner/assert",
            "NativeModule test/reporters",
            "NativeModule internal/test_runner/reporter/utils",
            "NativeModule internal/test_runner/reporter/dot",
            "NativeModule internal/test_runner/reporter/junit",
            "NativeModule internal/test_runner/reporter/tap",
            "NativeModule internal/vfs/errors",
            "NativeModule internal/vfs/provider",
            "NativeModule internal/vfs/file_handle",
            "NativeModule internal/vfs/watcher",
            "NativeModule internal/vfs/stats",
            "NativeModule internal/vfs/providers/memory",
            "NativeModule internal/vfs/router",
            "NativeModule internal/vfs/fd",
            "NativeModule internal/vfs/streams",
            "NativeModule internal/vfs/dir",
            "NativeModule internal/vfs/file_system",
            "NativeModule internal/vfs/providers/composable",
            "NativeModule internal/vfs/providers/real",
            "NativeModule internal/vfs/providers/ziparchive",
            "NativeModule internal/vfs/provider_registry",
            "NativeModule vfs",
            "NativeModule path/posix",
            "NativeModule path/win32",
            "NativeModule process",
            "NativeModule internal/process/finalization",
            "Internal Binding report",
            "NativeModule internal/process/report"
        ],
        nextTick: <ref *81> ƒ nextTick(length: 1) {},
        openStdin: <ref *82> ƒ (length: 0) {},
        pid: 2392,
        platform: "linux",
        ppid: 2385,
        reallyExit: <ref *83> ƒ reallyExit(length: 0) {},
        ref: <ref *84> ƒ ref(length: 1) {},
        release: <ref *85> {
            headersUrl: "https://nodejs.org/download/release/v27.0.0-alpha.0.1.0/node-v27.0.0-alpha.0.1.0-headers.tar.gz",
            name: "node",
            sourceUrl: "https://nodejs.org/download/release/v27.0.0-alpha.0.1.0/node-v27.0.0-alpha.0.1.0.tar.gz"
        },
        [get] report: <ref *86> {
            [get/set] compact: false,
            [get/set] directory: "",
            [get/set] excludeEnv: false,
            [get/set] excludeNetwork: false,
            [get/set] filename: "",
            getReport: ƒ getReport(length: 1) {},
            [get/set] reportOnFatalError: false,
            [get/set] reportOnSignal: false,
            [get/set] reportOnUncaughtException: false,
            [get/set] signal: "SIGUSR2",
            writeReport: ƒ writeReport(length: 2) {}
        },
        resourceUsage: <ref *89> ƒ resourceUsage(length: 0) {},
        setegid: <ref *90> ƒ (length: 1) {},
        seteuid: <ref *91> ƒ (length: 1) {},
        setgid: <ref *92> ƒ (length: 1) {},
        setgroups: <ref *93> ƒ setgroups(length: 1) {},
        setSourceMapsEnabled: <ref *94> ƒ setSourceMapsEnabled(length: 1) {},
        setuid: <ref *95> ƒ (length: 1) {},
        setUncaughtExceptionCaptureCallback: <ref *96> ƒ setUncaughtExceptionCaptureCallback(length: 1) {},
        [get] sourceMapsEnabled: false,
        [get] stderr: <ref *97> Socket {
            _closeAfterHandlingError: false,
            _destroy: <ref *98> ƒ dummyDestroy(length: 2) {},
            _events: {
                close: undefined,
                data: undefined,
                drain: undefined,
                end: <ref *100> ƒ onReadableStreamEnd(length: 0) {},
                error: undefined,
                finish: undefined,
                prefinish: undefined,
                readable: undefined
            },
            _eventsCount: 1,
            _hadError: false,
            _host: null,
            _isStdio: true,
            _maxListeners: undefined,
            _parent: null,
            _pendingData: null,
            _pendingEncoding: "",
            _readableState: ReadableState {
                awaitDrainWriters: null,
                buffer: [],
                bufferIndex: 0,
                fastChunk: null,
                highWaterMark: 65536,
                length: 0,
                pipeOnData: null,
                pipePause: null,
                pipes: [],
                readable: false,
                Symbol(kState): 1054468
            },
            _server: null,
            _sockname: null,
            _type: "pipe",
            _writableState: WritableState {
                bufferedIndex: 0,
                corked: 0,
                highWaterMark: 65536,
                length: 0,
                onwrite: ƒ (length: 1) {},
                pendingcb: 0,
                Symbol(kBufferedValue): null,
                Symbol(kState): 17564420,
                writelen: 0
            },
            allowHalfOpen: false,
            connecting: false,
            destroySoon: <ref *106> ƒ (length: 2) {},
            fd: 2,
            server: null,
            Symbol(async_id_symbol): 2,
            Symbol(kBuffer): null,
            Symbol(kBufferCb): null,
            Symbol(kBufferGen): null,
            Symbol(kBytesRead): 0,
            Symbol(kBytesWritten): 0,
            Symbol(kCapture): false,
            Symbol(kHandle): Pipe {
                Symbol(owner_symbol): [Circular: *97]
            },
            Symbol(kSetKeepAlive): false,
            Symbol(kSetKeepAliveInitialDelay): 0,
            Symbol(kSetNoDelay): false,
            Symbol(kSetTOS): undefined,
            Symbol(lastWriteQueueSize): 0,
            Symbol(shapeMode): true,
            Symbol(timeout): null
        },
        [get] stdin: <ref *108> Socket {
            _closeAfterHandlingError: false,
            _events: {
                close: undefined,
                data: undefined,
                drain: undefined,
                end: [Circular: *100],
                error: undefined,
                finish: undefined,
                pause: ƒ (length: 0) {},
                prefinish: undefined,
                readable: undefined
            },
            _eventsCount: 2,
            _hadError: false,
            _host: null,
            _maxListeners: undefined,
            _parent: null,
            _pendingData: null,
            _pendingEncoding: "",
            _readableState: ReadableState {
                awaitDrainWriters: null,
                buffer: [],
                bufferIndex: 0,
                fastChunk: null,
                highWaterMark: 65536,
                length: 0,
                pipeOnData: null,
                pipePause: null,
                pipes: [],
                Symbol(kState): 1052932
            },
            _server: null,
            _sockname: null,
            _writableState: WritableState {
                bufferedIndex: 0,
                corked: 0,
                highWaterMark: 65536,
                length: 0,
                onwrite: ƒ (length: 1) {},
                pendingcb: 0,
                Symbol(kBufferedValue): null,
                Symbol(kState): 1093415684,
                writelen: 0
            },
            allowHalfOpen: false,
            connecting: false,
            fd: 0,
            server: null,
            Symbol(async_id_symbol): 9,
            Symbol(kBuffer): null,
            Symbol(kBufferCb): null,
            Symbol(kBufferGen): null,
            Symbol(kBytesRead): 0,
            Symbol(kBytesWritten): 0,
            Symbol(kCapture): false,
            Symbol(kHandle): Pipe {
                reading: false,
                Symbol(owner_symbol): [Circular: *108]
            },
            Symbol(kSetKeepAlive): false,
            Symbol(kSetKeepAliveInitialDelay): 0,
            Symbol(kSetNoDelay): false,
            Symbol(kSetTOS): undefined,
            Symbol(lastWriteQueueSize): 0,
            Symbol(shapeMode): true,
            Symbol(timeout): null
        },
        [get] stdout: <ref *117> Socket {
            _closeAfterHandlingError: false,
            _destroy: [Circular: *98],
            _events: {
                close: undefined,
                data: undefined,
                drain: undefined,
                end: [Circular: *100],
                error: undefined,
                finish: undefined,
                prefinish: undefined,
                readable: undefined
            },
            _eventsCount: 1,
            _hadError: false,
            _host: null,
            _isStdio: true,
            _maxListeners: undefined,
            _parent: null,
            _pendingData: null,
            _pendingEncoding: "",
            _readableState: ReadableState {
                awaitDrainWriters: null,
                buffer: [],
                bufferIndex: 0,
                fastChunk: null,
                highWaterMark: 65536,
                length: 0,
                pipeOnData: null,
                pipePause: null,
                pipes: [],
                readable: false,
                Symbol(kState): 1054468
            },
            _server: null,
            _sockname: null,
            _type: "pipe",
            _writableState: WritableState {
                bufferedIndex: 0,
                corked: 0,
                highWaterMark: 65536,
                length: 0,
                onwrite: ƒ (length: 1) {},
                pendingcb: 0,
                Symbol(kBufferedValue): null,
                Symbol(kState): 17564420,
                writelen: 0
            },
            allowHalfOpen: false,
            connecting: false,
            destroySoon: [Circular: *106],
            fd: 1,
            server: null,
            Symbol(async_id_symbol): 6,
            Symbol(kBuffer): null,
            Symbol(kBufferCb): null,
            Symbol(kBufferGen): null,
            Symbol(kBytesRead): 0,
            Symbol(kBytesWritten): 0,
            Symbol(kCapture): false,
            Symbol(kHandle): Pipe {
                Symbol(owner_symbol): [Circular: *117]
            },
            Symbol(kSetKeepAlive): false,
            Symbol(kSetKeepAliveInitialDelay): 0,
            Symbol(kSetNoDelay): false,
            Symbol(kSetTOS): undefined,
            Symbol(lastWriteQueueSize): 0,
            Symbol(shapeMode): true,
            Symbol(timeout): null
        },
        Symbol(kCapture): false,
        Symbol(shapeMode): false,
        threadCpuUsage: <ref *125> ƒ threadCpuUsage(length: 1) {},
        title: "node",
        umask: <ref *126> ƒ wrappedUmask(length: 1) {},
        unref: <ref *127> ƒ unref(length: 1) {},
        uptime: <ref *128> ƒ uptime(length: 0) {},
        version: "v27.0.0-alpha.0.1.0",
        versions: <ref *129> {
            acorn: "8.19.0",
            ada: "4.0.0",
            amaro: "1.3.0",
            ares: "1.34.9",
            brotli: "1.2.1",
            cldr: "48.0",
            icu: "78.3",
            libffi: "3.8.0",
            lief: "1.0.0",
            llhttp: "9.4.4",
            merve: "1.2.2",
            modules: "153",
            napi: "10",
            nbytes: "0.1.4",
            ncrypto: "0.0.1",
            nghttp2: "1.71.0",
            nghttp3: "",
            ngtcp2: "",
            node: "27.0.0-alpha.0.1.0",
            openssl: "4.1.0",
            simdjson: "5.1.1",
            simdutf: "7.7.0",
            sqlite: "3.54.1",
            tz: "2026e",
            undici: "8.12.4",
            unicode: "17.0",
            uv: "1.52.1",
            uvwasi: "0.0.23",
            v8: "15.6.75.50-node.11",
            zlib: "1.3.2.1-motley-9f9f52c",
            zstd: "1.5.7"
        }
    },
    dlopen: [Circular: *54],
    domain: undefined,
    emitWarning: [Circular: *55],
    env: [Circular: *56],
    execArgv: [Circular: *57],
    execPath: "/opt/hostedtoolcache/node/27.0.0-alpha.0.1.0/x64/bin/node",
    execve: [Circular: *58],
    exit: [Circular: *59],
    exitCode: undefined,
    features: [Circular: *60],
    finalization: [Circular: *61],
    getActiveResourcesInfo: [Circular: *65],
    getBuiltinModule: [Circular: *66],
    getegid: [Circular: *67],
    geteuid: [Circular: *68],
    getgid: [Circular: *69],
    getgroups: [Circular: *70],
    getuid: [Circular: *71],
    hasUncaughtExceptionCaptureCallback: [Circular: *72],
    hrtime: [Circular: *73],
    initgroups: [Circular: *75],
    kill: [Circular: *76],
    loadEnvFile: [Circular: *77],
    memoryUsage: [Circular: *78],
    moduleLoadList: [Circular: *80],
    nextTick: [Circular: *81],
    openStdin: [Circular: *82],
    pid: 2392,
    platform: "linux",
    ppid: 2385,
    reallyExit: [Circular: *83],
    ref: [Circular: *84],
    release: [Circular: *85],
    report: [Circular: *86],
    resourceUsage: [Circular: *89],
    setegid: [Circular: *90],
    seteuid: [Circular: *91],
    setgid: [Circular: *92],
    setgroups: [Circular: *93],
    setSourceMapsEnabled: [Circular: *94],
    setuid: [Circular: *95],
    setUncaughtExceptionCaptureCallback: [Circular: *96],
    sourceMapsEnabled: false,
    stderr: [Circular: *97],
    stdin: [Circular: *108],
    stdout: [Circular: *117],
    threadCpuUsage: [Circular: *125],
    title: "node",
    umask: [Circular: *126],
    unref: [Circular: *127],
    uptime: [Circular: *128],
    version: "v27.0.0-alpha.0.1.0",
    versions: [Circular: *129]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    abort: <ref *2> ƒ abort(length: 0) {},
    allowedNodeEnvironmentFlags: NodeEnvironmentFlagsSet {
        Symbol(internal properties): {
            array: [
                "--track-heap-objects",
                "--no-track-heap-objects",
                "--node-snapshot",
                "--no-node-snapshot",
                "--require",
                "--max-old-space-size",
                "--trace-exit",
                "--no-trace-exit",
                "--disallow-code-generation-from-strings",
                "--experimental-json-modules",
                "--no-experimental-json-modules",
                "--interpreted-frames-native-stack",
                "--inspect-brk",
                "--no-inspect-brk",
                "--trace-tls",
                "--no-trace-tls",
                "--stack-trace-limit",
                "--experimental-repl-await",
                "--no-experimental-repl-await",
                "--preserve-symlinks",
                "--no-preserve-symlinks",
                "--report-uncaught-exception",
                "--no-report-uncaught-exception",
                "--experimental-modules",
                "--no-experimental-modules",
                "--report-signal",
                "--jitless",
                "--inspect-port",
                "--heapsnapshot-near-heap-limit",
                "--tls-keylog",
                "--force-context-aware",
                "--no-force-context-aware",
                "--napi-modules",
                "--abort-on-uncaught-exception",
                "--diagnostic-dir",
                "--verify-base-objects",
                "--no-verify-base-objects",
                "--unhandled-rejections",
                "--perf-basic-prof",
                "--trace-atomics-wait",
                "--no-trace-atomics-wait",
                "--deprecation",
                "--no-deprecation",
                "--perf-basic-prof-only-functions",
                "--perf-prof",
                "--max-http-header-size",
                "--report-on-signal",
                "--no-report-on-signal",
                "--throw-deprecation",
                "--no-throw-deprecation",
                "--warnings",
                "--no-warnings",
                "--force-fips",
                "--no-force-fips",
                "--pending-deprecation",
                "--no-pending-deprecation",
                "--input-type",
                "--tls-max-v1.3",
                "--no-tls-max-v1.3",
                "--tls-min-v1.2",
                "--no-tls-min-v1.2",
                "--inspect",
                "--no-inspect",
                "--heapsnapshot-signal",
                "--trace-warnings",
                "--no-trace-warnings",
                "--trace-event-categories",
                "--experimental-worker",
                "--tls-max-v1.2",
                "--no-tls-max-v1.2",
                "--perf-prof-unwinding-info",
                "--preserve-symlinks-main",
                "--no-preserve-symlinks-main",
                "--policy-integrity",
                "--experimental-wasm-modules",
                "--no-experimental-wasm-modules",
                "--node-memory-debug",
                "--inspect-publish-uid",
                "--tls-min-v1.3",
                "--no-tls-min-v1.3",
                "--experimental-specifier-resolution",
                "--secure-heap",
                "--tls-min-v1.0",
                "--no-tls-min-v1.0",
                "--redirect-warnings",
                "--experimental-report",
                "--trace-event-file-pattern",
                "--trace-uncaught",
                "--no-trace-uncaught",
                "--experimental-loader",
                "--http-parser",
                "--dns-result-order",
                "--trace-sigint",
                "--no-trace-sigint",
                "--secure-heap-min",
                "--enable-fips",
                "--no-enable-fips",
                "--enable-source-maps",
                "--no-enable-source-maps",
                "--insecure-http-parser",
                "--no-insecure-http-parser",
                "--use-openssl-ca",
                "--no-use-openssl-ca",
                "--use-system-ca",
                "--no-use-system-ca",
                "--tls-cipher-list",
                "--experimental-top-level-await",
                "--no-experimental-top-level-await",
                "--openssl-config",
                "--icu-data-dir",
                "--v8-pool-size",
                "--report-on-fatalerror",
                "--no-report-on-fatalerror",
                "--title",
                "--tls-min-v1.1",
                "--no-tls-min-v1.1",
                "--report-filename",
                "--trace-deprecation",
                "--no-trace-deprecation",
                "--report-compact",
                "--no-report-compact",
                "--experimental-policy",
                "--experimental-import-meta-resolve",
                "--no-experimental-import-meta-resolve",
                "--zero-fill-buffers",
                "--no-zero-fill-buffers",
                "--report-dir",
                "--use-bundled-ca",
                "--no-use-bundled-ca",
                "--experimental-vm-modules",
                "--no-experimental-vm-modules",
                "--force-async-hooks-checks",
                "--no-force-async-hooks-checks",
                "--frozen-intrinsics",
                "--no-frozen-intrinsics",
                "--huge-max-old-generation-size",
                "--disable-proto",
                "--debug-arraybuffer-allocations",
                "--no-debug-arraybuffer-allocations",
                "--conditions",
                "--experimental-wasi-unstable-preview1",
                "--no-experimental-wasi-unstable-preview1",
                "--trace-sync-io",
                "--no-trace-sync-io",
                "--use-largepages",
                "--experimental-abortcontroller",
                "--debug-port",
                "--es-module-specifier-resolution",
                "--prof-process",
                "-C",
                "--loader",
                "--report-directory",
                "-r",
                "--trace-events-enabled"
            ]
        }
    },
    arch: "x64",
    argv: <ref *6> [
        "/opt/hostedtoolcache/deno/0.0.0-e7b39ebd55c85aaf6a29290c1f5a99e2e21e09dd/x64/deno",
        "/home/runner/work/compare-deno-node/compare-deno-node/$deno$eval.mts"
    ],
    argv0: "deno",
    availableMemory: <ref *7> ƒ availableMemory(length: 0) {},
    chdir: <ref *8> ƒ chdir(length: 1) {},
    constrainedMemory: <ref *9> ƒ constrainedMemory(length: 0) {},
    cpuUsage: <ref *10> ƒ cpuUsage(length: 1) {},
    cwd: <ref *11> ƒ cwd(length: 0) {},
    default: process {
        _debugEnd: ƒ _debugEnd(length: 0) {},
        _debugProcess: ƒ _debugProcess(length: 1) {},
        _eval: undefined,
        _events: [Object: null prototype] {
            newListener: [
                ƒ (length: 1) {},
                ƒ (length: 2) {}
            ],
            removeListener: [
                ƒ (length: 1) {},
                ƒ (length: 2) {}
            ],
            warning: ƒ onWarning(length: 1) {}
        },
        _eventsCount: 3,
        _exiting: false,
        _fatalException: ƒ (length: 2) {},
        _getActiveHandles: ƒ getActiveHandles(length: 0) {},
        _getActiveRequests: ƒ getActiveRequests(length: 0) {},
        _kill: ƒ _kill(length: 2) {},
        _maxListeners: undefined,
        _rawDebug: ƒ (length: 0) {},
        abort: [Circular: *2],
        argv: [Circular: *6],
        availableMemory: [Circular: *7],
        binding: ƒ (length: 1) {},
        chdir: [Circular: *8],
        constrainedMemory: [Circular: *9],
        cpuUsage: [Circular: *10],
        cwd: [Circular: *11],
        [get/set] debugPort: 9229,
        dlopen: <ref *29> ƒ dlopen(length: 3) {},
        emitWarning: <ref *30> ƒ emitWarning(length: 4) {},
        env: <ref *31> {
            _: "/opt/hostedtoolcache/node/27.0.0-alpha.0.1.0/x64/bin/node",
            ACCEPT_EULA: "Y",
            ACTIONS_ORCHESTRATION_ID: "837c1b83-13bf-4f16-b9db-5ce540c53158.comparison.__default",
            ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE: "/opt/actionarchivecache",
            ACTIONS_RUNNER_RETURN_JOB_RESULT_FOR_HOSTED: "1",
            AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache",
            ANDROID_HOME: "/usr/local/lib/android/sdk",
            ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/27.3.13750724",
            ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/27.3.13750724",
            ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/30.0.16248370",
            ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/27.3.13750724",
            ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk",
            ANT_HOME: "/usr/share/ant",
            AZURE_EXTENSION_DIR: "/opt/az/azcliextensions",
            BOOTSTRAP_HASKELL_NONINTERACTIVE: "1",
            CHROME_BIN: "/usr/bin/google-chrome",
            CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64",
            CI: "true",
            DEBIAN_FRONTEND: "noninteractive",
            DOTNET_MULTILEVEL_LOOKUP: "0",
            DOTNET_NOLOGO: "1",
            DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1",
            EDGEWEBDRIVER: "/usr/local/share/edge_driver",
            ENABLE_RUNNER_TRACING: "true",
            GECKOWEBDRIVER: "/usr/local/share/gecko_driver",
            GHCUP_INSTALL_BASE_PREFIX: "/usr/local",
            GITHUB_ACTION: "__run",
            GITHUB_ACTION_REF: "",
            GITHUB_ACTION_REPOSITORY: "",
            GITHUB_ACTIONS: "true",
            GITHUB_ACTOR: "outslept",
            GITHUB_ACTOR_ID: "135520429",
            GITHUB_API_URL: "https://api.github.com",
            GITHUB_ARTIFACTS: "/home/runner/work/_temp/_runner_file_commands/artifacts_b634a0e6-f006-4e10-b9b6-a3b16546f6a8",
            GITHUB_ARTIFACTS_LIST: "/home/runner/work/_temp/_runner_file_commands/artifacts_list_b634a0e6-f006-4e10-b9b6-a3b16546f6a8",
            GITHUB_BASE_REF: "",
            GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_b634a0e6-f006-4e10-b9b6-a3b16546f6a8",
            GITHUB_EVENT_NAME: "workflow_dispatch",
            GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json",
            GITHUB_GRAPHQL_URL: "https://api.github.com/graphql",
            GITHUB_HEAD_REF: "",
            GITHUB_JOB: "comparison",
            GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_b634a0e6-f006-4e10-b9b6-a3b16546f6a8",
            GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_b634a0e6-f006-4e10-b9b6-a3b16546f6a8",
            GITHUB_REF: "refs/heads/main",
            GITHUB_REF_NAME: "main",
            GITHUB_REF_PROTECTED: "true",
            GITHUB_REF_TYPE: "branch",
            GITHUB_REPOSITORY: "outslept/compare-deno-node",
            GITHUB_REPOSITORY_ID: "1034352965",
            GITHUB_REPOSITORY_OWNER: "outslept",
            GITHUB_REPOSITORY_OWNER_ID: "135520429",
            GITHUB_RETENTION_DAYS: "90",
            GITHUB_RUN_ATTEMPT: "1",
            GITHUB_RUN_ID: "43869631852",
            GITHUB_RUN_NUMBER: "73",
            GITHUB_SERVER_URL: "https://github.com",
            GITHUB_SHA: "1cb1f84e2fb5aa1e6856fafcd98ed3042cbe587f",
            GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_b634a0e6-f006-4e10-b9b6-a3b16546f6a8",
            GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_b634a0e6-f006-4e10-b9b6-a3b16546f6a8",
            GITHUB_TRIGGERING_ACTOR: "outslept",
            GITHUB_WORKFLOW: "Comparison",
            GITHUB_WORKFLOW_REF: "outslept/compare-deno-node/.github/workflows/compare.yml@refs/heads/main",
            GITHUB_WORKFLOW_SHA: "1cb1f84e2fb5aa1e6856fafcd98ed3042cbe587f",
            GITHUB_WORKSPACE: "/home/runner/work/compare-deno-node/compare-deno-node",
            GOROOT_1_24_X64: "/opt/hostedtoolcache/go/1.24.13/x64",
            GOROOT_1_25_X64: "/opt/hostedtoolcache/go/1.25.14/x64",
            GOROOT_1_26_X64: "/opt/hostedtoolcache/go/1.26.11/x64",
            GRADLE_HOME: "/usr/share/gradle-9.9.1",
            HCA_CLOUD_PROVIDER: "aws",
            HOME: "/home/runner",
            HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650",
            HOMEBREW_NO_AUTO_UPDATE: "1",
            ImageOS: "ubuntu26",
            ImageVersion: "20261111.82.6",
            INVOCATION_ID: "277e1f14af1049b2970bc7313e7cd426",
            JAVA_HOME: "/usr/lib/jvm/temurin-25-jdk-amd64",
            JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64",
            JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64",
            JAVA_HOME_21_X64: "/usr/lib/jvm/temurin-21-jdk-amd64",
            JAVA_HOME_25_X64: "/usr/lib/jvm/temurin-25-jdk-amd64",
            JOURNAL_STREAM: "10:18706",
            LANG: "C.UTF-8",
            LOGNAME: "runner",
            MEMORY_PRESSURE_WATCH: "/sys/fs/cgroup/system.slice/hosted-compute-agent.service/memory.pressure",
            MEMORY_PRESSURE_WRITE: "c29tZSAyMDAwMDAgMjAwMDAwMAA=",
            NVM_DIR: "/home/runner/.nvm",
            PATH: "/home/runner/.deno/bin:/opt/hostedtoolcache/deno/0.0.0-e7b39ebd55c85aaf6a29290c1f5a99e2e21e09dd/x64:…",
            PIPX_BIN_DIR: "/opt/pipx_bin",
            PIPX_HOME: "/opt/pipx",
            POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-Linux",
            PSModulePath: "/root/.local/share/powershell/Modules:/usr/local/share/powershell/Modules:/opt/microsoft/powershell/…",
            PWD: "/home/runner/work/compare-deno-node/compare-deno-node",
            RUNNER_ARCH: "X64",
            RUNNER_ENVIRONMENT: "github-hosted",
            RUNNER_NAME: "GitHub Actions 1000004609",
            RUNNER_OS: "Linux",
            RUNNER_TEMP: "/home/runner/work/_temp",
            RUNNER_TOOL_CACHE: "/opt/hostedtoolcache",
            RUNNER_TRACKING_ID: "github_9aceb7e9-2860-49a0-ba63-c7801889ccbf",
            RUNNER_WORKSPACE: "/home/runner/work/compare-deno-node",
            SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar",
            SHELL: "/bin/bash",
            SHLVL: "1",
            SWIFT_PATH: "/usr/share/swift/usr/bin",
            SYSTEMD_EXEC_PID: "1942",
            USE_BAZEL_FALLBACK_VERSION: "silent:",
            USER: "runner",
            VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg",
            XDG_CONFIG_HOME: "/home/runner/.config",
            XDG_RUNTIME_DIR: "/run/user/1001"
        },
        execArgv: <ref *32> [],
        exit: <ref *33> ƒ exit(length: 1) {},
        features: {
            cached_builtins: true,
            debug: false,
            inspector: true,
            ipv6: true,
            openssl_is_boringssl: true,
            quic: false,
            require_module: true,
            tls: true,
            tls_alpn: true,
            tls_ocsp: true,
            tls_sni: true,
            [get] typescript: "transform",
            uv: true
        },
        getActiveResourcesInfo: <ref *35> ƒ getActiveResourcesInfo(length: 0) {},
        [get/set] getBuiltinModule: ƒ getBuiltinModule(length: 1) {},
        getegid: <ref *37> ƒ getegid(length: 0) {},
        geteuid: <ref *38> ƒ geteuid(length: 0) {},
        getgid: <ref *39> ƒ getgid(length: 0) {},
        getgroups: ƒ (length: 0) {},
        getuid: <ref *41> ƒ getuid(length: 0) {},
        hasUncaughtExceptionCaptureCallback: ƒ (length: 0) {},
        hrtime: <ref *43> ƒ hrtime(length: 1) {
            bigint: ƒ (length: 0) {}
        },
        kill: <ref *45> ƒ kill(length: 1) {},
        loadEnvFile: <ref *46> ƒ loadEnvFile(length: 0) {},
        mainModule: undefined,
        memoryUsage: <ref *47> ƒ memoryUsage(length: 0) {
            rss: ƒ (length: 0) {}
        },
        moduleLoadList: [],
        nextTick: <ref *50> ƒ nextTick(length: 1) {},
        noDeprecation: false,
        openStdin: ƒ (length: 0) {},
        reallyExit: ƒ (length: 1) {},
        resourceUsage: <ref *53> ƒ resourceUsage(length: 0) {},
        setegid: <ref *54> ƒ (length: 1) {},
        seteuid: <ref *55> ƒ (length: 1) {},
        setgid: <ref *56> ƒ (length: 1) {},
        setSourceMapsEnabled: ƒ (length: 1) {},
        setuid: <ref *58> ƒ (length: 1) {},
        setUncaughtExceptionCaptureCallback: ƒ (length: 1) {},
        [get] sourceMapsEnabled: true,
        [get/set] stderr: <ref *60> Writable {
            _destroy: ƒ destroy(length: 2) {},
            _events: {
                close: undefined,
                drain: undefined,
                error: undefined,
                finish: undefined,
                prefinish: undefined
            },
            _isStdio: true,
            _maxListeners: undefined,
            _writableState: WritableState {
                bufferedIndex: 0,
                corked: 0,
                highWaterMark: 65536,
                length: 0,
                onwrite: ƒ bound onwrite(length: 1) {},
                pendingcb: 0,
                Symbol(kBufferedValue): null,
                writelen: 0
            },
            _write: ƒ write(length: 3) {},
            [get/set] columns: undefined,
            destroySoon: <ref *66> ƒ (length: 2) {},
            fd: 2,
            getColorDepth: ƒ value(length: 0) {},
            getWindowSize: ƒ value(length: 0) {},
            hasColors: ƒ value(length: 2) {},
            [get/set] isTTY: false,
            [get] rows: undefined,
            Symbol(kCapture): false
        },
        [get/set] stdin: <ref *70> Duplex {
            _events: {
                close: ƒ (length: 0) {},
                data: undefined,
                drain: undefined,
                end: undefined,
                error: undefined,
                finish: undefined,
                pause: ƒ (length: 0) {},
                prefinish: undefined,
                readable: undefined
            },
            _eventsCount: 2,
            _handle: {
                close: ƒ close(length: 1) {},
                getAsyncId: ƒ getAsyncId(length: 0) {},
                ref: ƒ ref(length: 0) {},
                unref: ƒ unref(length: 0) {}
            },
            _isRawMode: false,
            _maxListeners: undefined,
            _read: ƒ _read(length: 1) {},
            _readableState: ReadableState {
                awaitDrainWriters: null,
                buffer: [],
                bufferIndex: 0,
                highWaterMark: 65536,
                length: 0,
                pipes: [],
                Symbol(kState): 1052932
            },
            _writableState: WritableState {
                bufferedIndex: 0,
                corked: 0,
                highWaterMark: 65536,
                length: 0,
                onwrite: ƒ bound onwrite(length: 1) {},
                pendingcb: 0,
                Symbol(kBufferedValue): null,
                Symbol(kState): 1093415684,
                writelen: 0
            },
            allowHalfOpen: false,
            fd: 0,
            [get] isRaw: false,
            [get/set] isTTY: false,
            setRawMode: ƒ (length: 1) {},
            Symbol(kCapture): false
        },
        [get/set] stdout: <ref *86> Writable {
            _destroy: ƒ destroy(length: 2) {},
            _events: {
                close: undefined,
                drain: undefined,
                error: undefined,
                finish: undefined,
                prefinish: undefined
            },
            _isStdio: true,
            _maxListeners: undefined,
            _writableState: WritableState {
                bufferedIndex: 0,
                corked: 0,
                highWaterMark: 65536,
                length: 0,
                onwrite: ƒ bound onwrite(length: 1) {},
                pendingcb: 0,
                Symbol(kBufferedValue): null,
                writelen: 0
            },
            _write: ƒ write(length: 3) {},
            [get/set] columns: undefined,
            destroySoon: [Circular: *66],
            fd: 1,
            getColorDepth: ƒ value(length: 0) {},
            getWindowSize: ƒ value(length: 0) {},
            hasColors: ƒ value(length: 2) {},
            [get/set] isTTY: false,
            [get] rows: undefined,
            Symbol(kCapture): false
        },
        Symbol(kCapture): false,
        threadCpuUsage: <ref *95> ƒ threadCpuUsage(length: 1) {},
        umask: <ref *96> ƒ umask(length: 1) {},
        uptime: ƒ (length: 0) {},
        version: "v26.5.1",
        versions: <ref *98> {
            ares: "1.34.6",
            brotli: "1.2.0",
            cldr: "48.0",
            deno: "2.9.8+e7b39eb",
            icu: "78.3",
            llhttp: "9.4.1",
            modules: "147",
            napi: "10",
            nghttp2: "1.69.0",
            nghttp3: "",
            ngtcp2: "",
            node: "26.5.1",
            openssl: "3.0.7+quic",
            sqlite: "3.53.1",
            typescript: "6.0.3",
            tz: "2026b",
            unicode: "17.0",
            uv: "1.52.1",
            v8: "15.0.245.2-rusty",
            zlib: "1.3.1-e00f703"
        }
    },
    dlopen: [Circular: *29],
    emitWarning: [Circular: *30],
    env: [Circular: *31],
    execArgv: [Circular: *32],
    execPath: "/opt/hostedtoolcache/deno/0.0.0-e7b39ebd55c85aaf6a29290c1f5a99e2e21e09dd/x64/deno",
    exit: [Circular: *33],
    getActiveResourcesInfo: [Circular: *35],
    getBuiltinModule: ƒ getBuiltinModule(length: 1) {},
    getegid: [Circular: *37],
    geteuid: [Circular: *38],
    getgid: [Circular: *39],
    getuid: [Circular: *41],
    hrtime: [Circular: *43],
    kill: [Circular: *45],
    loadEnvFile: [Circular: *46],
    memoryUsage: [Circular: *47],
    nextTick: [Circular: *50],
    pid: 2393,
    platform: "linux",
    ppid: 2385,
    removeAllListeners: ƒ (length: 1) {},
    removeListener: ƒ (length: 2) {},
    report: {
        compact: false,
        directory: "",
        filename: "",
        getReport: ƒ getReport(length: 1) {},
        reportOnFatalError: false,
        reportOnSignal: false,
        reportOnUncaughtException: false,
        signal: "SIGUSR2",
        writeReport: ƒ writeReport(length: 2) {}
    },
    resourceUsage: [Circular: *53],
    setegid: [Circular: *54],
    seteuid: [Circular: *55],
    setgid: [Circular: *56],
    setuid: [Circular: *58],
    stderr: [Circular: *60],
    stdin: [Circular: *70],
    stdout: [Circular: *86],
    threadCpuUsage: [Circular: *95],
    umask: [Circular: *96],
    version: "v26.5.1",
    versions: [Circular: *98]
}
```

</td>
    </tr>
  </table>
</details>

<details id="punycode">
  <summary><code>punycode</code> — ✅ Identical</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    decode: <ref *2> ƒ decode(length: 1) {},
    default: {
        decode: [Circular: *2],
        encode: <ref *4> ƒ encode(length: 1) {},
        toASCII: <ref *5> ƒ toASCII(length: 1) {},
        toUnicode: <ref *6> ƒ toUnicode(length: 1) {},
        ucs2: <ref *7> {
            decode: ƒ ucs2decode(length: 1) {},
            encode: ƒ ucs2encode(length: 1) {}
        },
        version: "2.1.0"
    },
    encode: [Circular: *4],
    toASCII: [Circular: *5],
    toUnicode: [Circular: *6],
    ucs2: [Circular: *7],
    version: "2.1.0"
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    decode: <ref *2> ƒ decode(length: 1) {},
    default: {
        decode: [Circular: *2],
        encode: <ref *4> ƒ encode(length: 1) {},
        toASCII: <ref *5> ƒ toASCII(length: 1) {},
        toUnicode: <ref *6> ƒ toUnicode(length: 1) {},
        ucs2: <ref *7> {
            decode: ƒ ucs2decode(length: 1) {},
            encode: ƒ ucs2encode(length: 1) {}
        },
        version: "2.1.0"
    },
    encode: [Circular: *4],
    toASCII: [Circular: *5],
    toUnicode: [Circular: *6],
    ucs2: [Circular: *7],
    version: "2.1.0"
}
```

</td>
    </tr>
  </table>
</details>

<details id="querystring">
  <summary><code>querystring</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    decode: <ref *2> ƒ parse(length: 4) {},
    default: {
        decode: [Circular: *2],
        encode: <ref *4> ƒ stringify(length: 4) {},
        escape: <ref *5> ƒ qsEscape(length: 1) {},
        parse: [Circular: *2],
        stringify: [Circular: *4],
        unescape: <ref *6> ƒ qsUnescape(length: 2) {},
        unescapeBuffer: <ref *7> ƒ unescapeBuffer(length: 2) {}
    },
    encode: [Circular: *4],
    escape: [Circular: *5],
    parse: [Circular: *2],
    stringify: [Circular: *4],
    unescape: [Circular: *6],
    unescapeBuffer: [Circular: *7]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    decode: <ref *2> ƒ parse(length: 1) {},
    default: {
        decode: [Circular: *2],
        encode: <ref *4> ƒ stringify(length: 4) {},
        escape: <ref *5> ƒ qsEscape(length: 1) {},
        parse: [Circular: *2],
        stringify: [Circular: *4],
        unescape: <ref *6> ƒ qsUnescape(length: 1) {},
        unescapeBuffer: <ref *7> ƒ unescapeBuffer(length: 1) {}
    },
    encode: [Circular: *4],
    escape: [Circular: *5],
    parse: [Circular: *2],
    stringify: [Circular: *4],
    unescape: [Circular: *6],
    unescapeBuffer: [Circular: *7]
}
```

</td>
    </tr>
  </table>
</details>

<details id="readline">
  <summary><code>readline</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    clearLine: <ref *2> ƒ clearLine(length: 3) {},
    clearScreenDown: <ref *3> ƒ clearScreenDown(length: 2) {},
    createInterface: <ref *4> ƒ createInterface(length: 4) {},
    cursorTo: <ref *5> ƒ cursorTo(length: 4) {},
    default: {
        clearLine: [Circular: *2],
        clearScreenDown: [Circular: *3],
        createInterface: [Circular: *4],
        cursorTo: [Circular: *5],
        emitKeypressEvents: <ref *7> ƒ emitKeypressEvents(length: 1) {},
        Interface: <ref *8> ƒ Interface(length: 4) {},
        moveCursor: <ref *9> ƒ moveCursor(length: 4) {},
        promises: <ref *10> {
            createInterface: ƒ createInterface(length: 4) {},
            Interface: class Interface extends _Interface {},
            Readline: class Readline {}
        }
    },
    emitKeypressEvents: [Circular: *7],
    Interface: [Circular: *8],
    moveCursor: [Circular: *9],
    promises: [Circular: *10]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    clearLine: <ref *2> ƒ clearLine(length: 3) {},
    clearScreenDown: <ref *3> ƒ clearScreenDown(length: 2) {},
    createInterface: <ref *4> ƒ createInterface(length: 4) {},
    cursorTo: <ref *5> ƒ cursorTo(length: 4) {},
    default: {
        clearLine: [Circular: *2],
        clearScreenDown: [Circular: *3],
        createInterface: [Circular: *4],
        cursorTo: [Circular: *5],
        emitKeypressEvents: <ref *7> ƒ emitKeypressEvents(length: 1) {},
        Interface: <ref *8> ƒ Interface(length: 4) {},
        moveCursor: <ref *9> ƒ moveCursor(length: 4) {},
        promises: <ref *10> {
            createInterface: ƒ createInterface(length: 4) {},
            Interface: class Interface extends i {},
            Readline: class Readline {}
        }
    },
    emitKeypressEvents: [Circular: *7],
    Interface: [Circular: *8],
    moveCursor: [Circular: *9],
    promises: [Circular: *10]
}
```

</td>
    </tr>
  </table>
</details>

<details id="readline-promises">
  <summary><code>readline/promises</code> — ✅ Identical</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    createInterface: <ref *2> ƒ createInterface(length: 4) {},
    default: {
        createInterface: [Circular: *2],
        Interface: <ref *4> class Interface extends _Interface {},
        Readline: <ref *5> class Readline {}
    },
    Interface: [Circular: *4],
    Readline: [Circular: *5]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    createInterface: <ref *2> ƒ createInterface(length: 4) {},
    default: {
        createInterface: [Circular: *2],
        Interface: <ref *4> class Interface extends i {},
        Readline: <ref *5> class Readline {}
    },
    Interface: [Circular: *4],
    Readline: [Circular: *5]
}
```

</td>
    </tr>
  </table>
</details>

<details id="repl">
  <summary><code>repl</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    default: {
        isValidSyntax: <ref *3> ƒ isValidSyntax(length: 1) {},
        Recoverable: <ref *4> class Recoverable extends SyntaxError {},
        REPL_MODE_SLOPPY: Symbol(repl-sloppy),
        REPL_MODE_STRICT: Symbol(repl-strict),
        REPLServer: <ref *5> class REPLServer extends Interface {},
        start: <ref *6> ƒ start(length: 6) {},
        writer: <ref *7> ƒ writer(length: 1) {
            options: {
                breakLength: 80,
                colors: false,
                compact: 3,
                customInspect: true,
                depth: 2,
                getters: false,
                maxArrayLength: 100,
                maxStringLength: 10000,
                numericSeparator: false,
                showHidden: false,
                showProxy: true,
                sorted: false
            }
        }
    },
    isValidSyntax: [Circular: *3],
    Recoverable: [Circular: *4],
    REPL_MODE_SLOPPY: Symbol(repl-sloppy),
    REPL_MODE_STRICT: Symbol(repl-strict),
    REPLServer: [Circular: *5],
    start: [Circular: *6],
    writer: [Circular: *7]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    _builtinLibs: <ref *2> [
        "assert",
        "async_hooks",
        "buffer",
        "child_process",
        "cluster",
        "console",
        "constants",
        "crypto",
        "dgram",
        "diagnostics_channel",
        "dns",
        "domain",
        "events",
        "fs",
        "http",
        "http2",
        "https",
        "inspector",
        "module",
        "net",
        "os",
        "path",
        "perf_hooks",
        "process",
        "punycode",
        "querystring",
        "readline",
        "repl",
        "stream",
        "string_decoder",
        "sys",
        "timers",
        "tls",
        "trace_events",
        "tty",
        "url",
        "util",
        "v8",
        "vm",
        "wasi",
        "worker_threads",
        "zlib"
    ],
    builtinModules: [Circular: *2],
    default: {
        _builtinLibs: [Circular: *2],
        builtinModules: [Circular: *2],
        Recoverable: <ref *4> class Recoverable extends H {},
        REPL_MODE_SLOPPY: Symbol(repl-sloppy),
        REPL_MODE_STRICT: Symbol(repl-strict),
        REPLServer: <ref *5> class REPLServer extends U {},
        start: <ref *6> ƒ start(length: 6) {},
        writer: ƒ writer(length: 1) {
            options: {
                breakLength: 80,
                colors: false,
                compact: 3,
                currentDepth: 0,
                customInspect: true,
                depth: 2,
                escapeSequences: true,
                getters: false,
                indentationLvl: 0,
                indentLevel: 0,
                inspect: ƒ inspect(length: 2) {
                    colors: {
                        bgBlack: [
                            40,
                            49
                        ],
                        bgBlue: [
                            44,
                            49
                        ],
                        bgBlueBright: [
                            104,
                            49
                        ],
                        bgCyan: [
                            46,
                            49
                        ],
                        bgCyanBright: [
                            106,
                            49
                        ],
                        bgGray: [
                            100,
                            49
                        ],
                        bgGreen: [
                            42,
                            49
                        ],
                        bgGreenBright: [
                            102,
                            49
                        ],
                        bgMagenta: [
                            45,
                            49
                        ],
                        bgMagentaBright: [
                            105,
                            49
                        ],
                        bgRed: [
                            41,
                            49
                        ],
                        bgRedBright: [
                            101,
                            49
                        ],
                        bgWhite: [
                            47,
                            49
                        ],
                        bgWhiteBright: [
                            107,
                            49
                        ],
                        bgYellow: [
                            43,
                            49
                        ],
                        bgYellowBright: [
                            103,
                            49
                        ],
                        black: [
                            30,
                            39
                        ],
                        blink: [
                            5,
                            25
                        ],
                        blue: [
                            34,
                            39
                        ],
                        blueBright: [
                            94,
                            39
                        ],
                        bold: [
                            1,
                            22
                        ],
                        cyan: [
                            36,
                            39
                        ],
                        cyanBright: [
                            96,
                            39
                        ],
                        dim: [
                            2,
                            22
                        ],
                        doubleunderline: [
                            21,
                            24
                        ],
                        framed: [
                            51,
                            54
                        ],
                        gray: [
                            90,
                            39
                        ],
                        green: [
                            32,
                            39
                        ],
                        greenBright: [
                            92,
                            39
                        ],
                        hidden: [
                            8,
                            28
                        ],
                        inverse: [
                            7,
                            27
                        ],
                        italic: [
                            3,
                            23
                        ],
                        magenta: [
                            35,
                            39
                        ],
                        magentaBright: [
                            95,
                            39
                        ],
                        overlined: [
                            53,
                            55
                        ],
                        red: [
                            31,
                            39
                        ],
                        redBright: [
                            91,
                            39
                        ],
                        reset: [
                            0,
                            0
                        ],
                        strikethrough: [
                            9,
                            29
                        ],
                        underline: [
                            4,
                            24
                        ],
                        white: [
                            37,
                            39
                        ],
                        whiteBright: [
                            97,
                            39
                        ],
                        yellow: [
                            33,
                            39
                        ],
                        yellowBright: [
                            93,
                            39
                        ]
                    },
                    custom: Symbol(nodejs.util.inspect.custom),
                    styles: [Object: null prototype] {
                        bigint: "yellow",
                        boolean: "yellow",
                        date: "magenta",
                        module: "underline",
                        null: "bold",
                        number: "yellow",
                        regexp: "red",
                        special: "cyan",
                        string: "green",
                        symbol: "green",
                        undefined: "grey"
                    }
                },
                iterableLimit: Infinity,
                maxArrayLength: 100,
                maxStringLength: 10000,
                quotes: [
                    "'",
                    "\"",
                    "`"
                ],
                showHidden: false,
                showProxy: true,
                sorted: false,
                stylize: ƒ stylizeNoColor(length: 1) {},
                trailingComma: false
            }
        }
    },
    Recoverable: [Circular: *4],
    REPL_MODE_SLOPPY: Symbol(repl-sloppy),
    REPL_MODE_STRICT: Symbol(repl-strict),
    REPLServer: [Circular: *5],
    start: [Circular: *6]
}
```

</td>
    </tr>
  </table>
</details>

<details id="stream">
  <summary><code>stream</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    _isArrayBufferView: <ref *2> ƒ isView(length: 1) {},
    _isUint8Array: <ref *3> ƒ isUint8Array(length: 1) {},
    _uint8ArrayToBuffer: <ref *4> ƒ _uint8ArrayToBuffer(length: 1) {},
    addAbortSignal: <ref *5> ƒ addAbortSignal(length: 2) {},
    compose: <ref *6> ƒ compose(length: 0) {},
    default: <ref *7> ƒ Stream(length: 1) {
        _isArrayBufferView: [Circular: *2],
        _isUint8Array: [Circular: *3],
        _uint8ArrayToBuffer: [Circular: *4],
        addAbortSignal: [Circular: *5],
        compose: [Circular: *6],
        destroy: <ref *8> ƒ destroyer(length: 2) {},
        Duplex: <ref *9> ƒ Duplex(length: 1) {
            from: ƒ (length: 1) {},
            fromWeb: ƒ (length: 2) {},
            toWeb: ƒ (length: 2) {}
        },
        duplexPair: <ref *13> ƒ duplexPair(length: 1) {},
        finished: <ref *14> ƒ eos(length: 3) {
            [get] Symbol(nodejs.util.promisify.custom): <ref *15> ƒ finished(length: 2) {}
        },
        getDefaultHighWaterMark: <ref *16> ƒ getDefaultHighWaterMark(length: 1) {},
        isDestroyed: <ref *17> ƒ isDestroyed(length: 1) {},
        isDisturbed: <ref *18> ƒ isDisturbed(length: 1) {},
        isErrored: <ref *19> ƒ isErrored(length: 1) {},
        isReadable: <ref *20> ƒ isReadable(length: 1) {},
        isWritable: <ref *21> ƒ isWritable(length: 1) {},
        PassThrough: <ref *22> ƒ PassThrough(length: 1) {},
        pipeline: <ref *23> ƒ pipeline(length: 0) {
            [get] Symbol(nodejs.util.promisify.custom): <ref *24> ƒ pipeline(length: 0) {}
        },
        [get] promises: <ref *25> {
            finished: [Circular: *15],
            pipeline: [Circular: *24]
        },
        Readable: <ref *26> ƒ Readable(length: 1) {
            _fromList: ƒ fromList(length: 2) {},
            from: ƒ (length: 2) {},
            fromWeb: ƒ (length: 2) {},
            ReadableState: ƒ ReadableState(length: 3) {},
            toWeb: ƒ (length: 2) {},
            wrap: ƒ (length: 2) {}
        },
        setDefaultHighWaterMark: <ref *33> ƒ setDefaultHighWaterMark(length: 2) {},
        Stream: [Circular: *7],
        Transform: <ref *34> ƒ Transform(length: 1) {},
        Writable: <ref *35> ƒ Writable(length: 1) {
            fromWeb: ƒ (length: 2) {},
            toWeb: ƒ (length: 1) {},
            WritableState: ƒ WritableState(length: 3) {}
        }
    },
    destroy: [Circular: *8],
    Duplex: [Circular: *9],
    duplexPair: [Circular: *13],
    finished: [Circular: *14],
    getDefaultHighWaterMark: [Circular: *16],
    isDestroyed: [Circular: *17],
    isDisturbed: [Circular: *18],
    isErrored: [Circular: *19],
    isReadable: [Circular: *20],
    isWritable: [Circular: *21],
    PassThrough: [Circular: *22],
    pipeline: [Circular: *23],
    promises: [Circular: *25],
    Readable: [Circular: *26],
    setDefaultHighWaterMark: [Circular: *33],
    Stream: [Circular: *7],
    Transform: [Circular: *34],
    Writable: [Circular: *35]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    _isArrayBufferView: <ref *2> ƒ isArrayBufferView(length: 1) {},
    _isUint8Array: <ref *3> ƒ isUint8Array(length: 1) {},
    _uint8ArrayToBuffer: <ref *4> ƒ _uint8ArrayToBuffer(length: 1) {},
    addAbortSignal: <ref *5> ƒ addAbortSignal(length: 2) {},
    compose: <ref *6> ƒ compose(length: 0) {},
    default: <ref *7> ƒ Stream(length: 1) {
        _isArrayBufferView: [Circular: *2],
        _isUint8Array: [Circular: *3],
        _uint8ArrayToBuffer: [Circular: *4],
        addAbortSignal: [Circular: *5],
        compose: [Circular: *6],
        destroy: <ref *8> ƒ destroyer(length: 2) {},
        Duplex: <ref *9> ƒ Duplex(length: 1) {
            from: ƒ (length: 1) {},
            fromWeb: ƒ (length: 2) {},
            toWeb: ƒ (length: 2) {}
        },
        duplexPair: <ref *13> ƒ duplexPair(length: 1) {},
        finished: <ref *14> ƒ eos(length: 3) {
            [get] Symbol(nodejs.util.promisify.custom): <ref *15> ƒ finished(length: 2) {}
        },
        getDefaultHighWaterMark: <ref *16> ƒ getDefaultHighWaterMark(length: 1) {},
        isDestroyed: <ref *17> ƒ isDestroyed(length: 1) {},
        isDisturbed: <ref *18> ƒ isDisturbed(length: 1) {},
        isErrored: <ref *19> ƒ isErrored(length: 1) {},
        isReadable: <ref *20> ƒ isReadable(length: 1) {},
        isWritable: <ref *21> ƒ isWritable(length: 1) {},
        PassThrough: <ref *22> ƒ PassThrough(length: 1) {},
        pipeline: <ref *23> ƒ pipeline(length: 0) {
            [get] Symbol(nodejs.util.promisify.custom): <ref *24> ƒ pipeline(length: 0) {}
        },
        [get] promises: <ref *25> [Object: null prototype] {
            default: {
                finished: [Circular: *15],
                pipeline: [Circular: *24]
            },
            finished: [Circular: *15],
            pipeline: [Circular: *24]
        },
        Readable: <ref *27> ƒ Readable(length: 1) {
            _fromList: ƒ fromList(length: 2) {},
            from: ƒ (length: 2) {},
            fromWeb: ƒ (length: 2) {},
            ReadableState: ƒ ReadableState(length: 3) {},
            toWeb: ƒ (length: 2) {},
            wrap: ƒ (length: 2) {}
        },
        setDefaultHighWaterMark: <ref *34> ƒ setDefaultHighWaterMark(length: 2) {},
        Stream: [Circular: *7],
        Transform: <ref *35> ƒ Transform(length: 1) {},
        Writable: <ref *36> ƒ Writable(length: 1) {
            fromWeb: ƒ (length: 2) {},
            kForceStableState: Symbol(kForceStableState),
            toWeb: ƒ (length: 1) {},
            WritableState: ƒ WritableState(length: 3) {}
        }
    },
    destroy: [Circular: *8],
    Duplex: [Circular: *9],
    duplexPair: [Circular: *13],
    finished: [Circular: *14],
    getDefaultHighWaterMark: [Circular: *16],
    isDestroyed: [Circular: *17],
    isDisturbed: [Circular: *18],
    isErrored: [Circular: *19],
    isReadable: [Circular: *20],
    isWritable: [Circular: *21],
    PassThrough: [Circular: *22],
    pipeline: [Circular: *23],
    promises: [Circular: *25],
    Readable: [Circular: *27],
    setDefaultHighWaterMark: [Circular: *34],
    Stream: [Circular: *7],
    Transform: [Circular: *35],
    Writable: [Circular: *36]
}
```

</td>
    </tr>
  </table>
</details>

<details id="stream-consumers">
  <summary><code>stream/consumers</code> — ✅ Identical</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    arrayBuffer: <ref *2> async ƒ arrayBuffer(length: 1) {},
    blob: <ref *3> async ƒ blob(length: 1) {},
    buffer: <ref *4> async ƒ buffer(length: 1) {},
    bytes: <ref *5> async ƒ bytes(length: 1) {},
    default: {
        arrayBuffer: [Circular: *2],
        blob: [Circular: *3],
        buffer: [Circular: *4],
        bytes: [Circular: *5],
        json: <ref *7> async ƒ json(length: 1) {},
        text: <ref *8> async ƒ text(length: 1) {}
    },
    json: [Circular: *7],
    text: [Circular: *8]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    arrayBuffer: <ref *2> async ƒ arrayBuffer(length: 1) {},
    blob: <ref *3> async ƒ blob(length: 1) {},
    buffer: <ref *4> async ƒ buffer(length: 1) {},
    bytes: <ref *5> async ƒ bytes(length: 1) {},
    default: {
        arrayBuffer: [Circular: *2],
        blob: [Circular: *3],
        buffer: [Circular: *4],
        bytes: [Circular: *5],
        json: <ref *7> async ƒ json(length: 1) {},
        text: <ref *8> async ƒ text(length: 1) {}
    },
    json: [Circular: *7],
    text: [Circular: *8]
}
```

</td>
    </tr>
  </table>
</details>

<details id="stream-promises">
  <summary><code>stream/promises</code> — ✅ Identical</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    default: {
        finished: <ref *3> ƒ finished(length: 2) {},
        pipeline: <ref *4> ƒ pipeline(length: 0) {}
    },
    finished: [Circular: *3],
    pipeline: [Circular: *4]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    default: {
        finished: <ref *3> ƒ finished(length: 2) {},
        pipeline: <ref *4> ƒ pipeline(length: 0) {}
    },
    finished: [Circular: *3],
    pipeline: [Circular: *4]
}
```

</td>
    </tr>
  </table>
</details>

<details id="stream-web">
  <summary><code>stream/web</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    ByteLengthQueuingStrategy: <ref *2> class ByteLengthQueuingStrategy {},
    CompressionStream: <ref *3> class CompressionStream {},
    CountQueuingStrategy: <ref *4> class CountQueuingStrategy {},
    DecompressionStream: <ref *5> class DecompressionStream {},
    default: {
        ByteLengthQueuingStrategy: [Circular: *2],
        CompressionStream: [Circular: *3],
        CountQueuingStrategy: [Circular: *4],
        DecompressionStream: [Circular: *5],
        ReadableByteStreamController: <ref *7> class ReadableByteStreamController {},
        ReadableStream: <ref *8> class ReadableStream {
            from: ƒ from(length: 1) {}
        },
        ReadableStreamBYOBReader: <ref *10> class ReadableStreamBYOBReader {},
        ReadableStreamBYOBRequest: <ref *11> class ReadableStreamBYOBRequest {},
        ReadableStreamDefaultController: <ref *12> class ReadableStreamDefaultController {},
        ReadableStreamDefaultReader: <ref *13> class ReadableStreamDefaultReader {},
        ReadableStreamTee: <ref *14> ƒ ReadableStreamTee(length: 1) {},
        TextDecoderStream: <ref *15> class TextDecoderStream {},
        TextEncoderStream: <ref *16> class TextEncoderStream {},
        TransformStream: <ref *17> class TransformStream {},
        TransformStreamDefaultController: <ref *18> class TransformStreamDefaultController {},
        WritableStream: <ref *19> class WritableStream {},
        WritableStreamDefaultController: <ref *20> class WritableStreamDefaultController {},
        WritableStreamDefaultWriter: <ref *21> class WritableStreamDefaultWriter {}
    },
    ReadableByteStreamController: [Circular: *7],
    ReadableStream: [Circular: *8],
    ReadableStreamBYOBReader: [Circular: *10],
    ReadableStreamBYOBRequest: [Circular: *11],
    ReadableStreamDefaultController: [Circular: *12],
    ReadableStreamDefaultReader: [Circular: *13],
    ReadableStreamTee: [Circular: *14],
    TextDecoderStream: [Circular: *15],
    TextEncoderStream: [Circular: *16],
    TransformStream: [Circular: *17],
    TransformStreamDefaultController: [Circular: *18],
    WritableStream: [Circular: *19],
    WritableStreamDefaultController: [Circular: *20],
    WritableStreamDefaultWriter: [Circular: *21]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    ByteLengthQueuingStrategy: <ref *2> class ByteLengthQueuingStrategy {},
    CompressionStream: <ref *3> class CompressionStream {},
    CountQueuingStrategy: <ref *4> class CountQueuingStrategy {},
    DecompressionStream: <ref *5> class DecompressionStream {},
    default: {
        ByteLengthQueuingStrategy: [Circular: *2],
        CompressionStream: [Circular: *3],
        CountQueuingStrategy: [Circular: *4],
        DecompressionStream: [Circular: *5],
        ReadableByteStreamController: <ref *7> class ReadableByteStreamController {},
        ReadableStream: <ref *8> class ReadableStream {
            from: ƒ from(length: 1) {}
        },
        ReadableStreamBYOBReader: <ref *10> class ReadableStreamBYOBReader {},
        ReadableStreamBYOBRequest: <ref *11> class ReadableStreamBYOBRequest {},
        ReadableStreamDefaultController: <ref *12> class ReadableStreamDefaultController {},
        ReadableStreamDefaultReader: <ref *13> class ReadableStreamDefaultReader {},
        TextDecoderStream: <ref *14> class TextDecoderStream {},
        TextEncoderStream: <ref *15> class TextEncoderStream {},
        TransformStream: <ref *16> class TransformStream {},
        TransformStreamDefaultController: <ref *17> class TransformStreamDefaultController {},
        WritableStream: <ref *18> class WritableStream {},
        WritableStreamDefaultController: <ref *19> class WritableStreamDefaultController {},
        WritableStreamDefaultWriter: <ref *20> class WritableStreamDefaultWriter {}
    },
    ReadableByteStreamController: [Circular: *7],
    ReadableStream: [Circular: *8],
    ReadableStreamBYOBReader: [Circular: *10],
    ReadableStreamBYOBRequest: [Circular: *11],
    ReadableStreamDefaultController: [Circular: *12],
    ReadableStreamDefaultReader: [Circular: *13],
    TextDecoderStream: [Circular: *14],
    TextEncoderStream: [Circular: *15],
    TransformStream: [Circular: *16],
    TransformStreamDefaultController: [Circular: *17],
    WritableStream: [Circular: *18],
    WritableStreamDefaultController: [Circular: *19],
    WritableStreamDefaultWriter: [Circular: *20]
}
```

</td>
    </tr>
  </table>
</details>

<details id="string_decoder">
  <summary><code>string_decoder</code> — ✅ Identical</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    default: {
        StringDecoder: <ref *3> ƒ StringDecoder(length: 1) {}
    },
    StringDecoder: [Circular: *3]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    default: {
        StringDecoder: <ref *3> ƒ StringDecoder(length: 1) {}
    },
    StringDecoder: [Circular: *3]
}
```

</td>
    </tr>
  </table>
</details>

<details id="sys">
  <summary><code>sys</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    _errnoException: <ref *2> ƒ _errnoException(length: 0) {},
    _exceptionWithHostPort: <ref *3> ƒ _exceptionWithHostPort(length: 0) {},
    _extend: <ref *4> ƒ deprecated(length: 2) {},
    aborted: <ref *5> async ƒ aborted(length: 2) {},
    callbackify: <ref *6> ƒ callbackify(length: 1) {},
    convertProcessSignalToExitCode: <ref *7> ƒ convertProcessSignalToExitCode(length: 1) {},
    debounce: <ref *8> ƒ debounce(length: 2) {},
    debug: <ref *9> ƒ debuglog(length: 2) {},
    debuglog: [Circular: *9],
    default: {
        _errnoException: [Circular: *2],
        _exceptionWithHostPort: [Circular: *3],
        _extend: [Circular: *4],
        [get] aborted: [Circular: *5],
        callbackify: [Circular: *6],
        convertProcessSignalToExitCode: [Circular: *7],
        [get] debounce: [Circular: *8],
        debug: [Circular: *9],
        debuglog: [Circular: *9],
        deprecate: <ref *11> ƒ deprecate(length: 3) {},
        diff: <ref *12> ƒ diff(length: 2) {},
        format: <ref *13> ƒ format(length: 0) {},
        formatWithOptions: <ref *14> ƒ formatWithOptions(length: 1) {},
        getCallSites: <ref *15> ƒ getCallSites(length: 0) {},
        getSystemErrorMap: <ref *16> ƒ getSystemErrorMap(length: 0) {},
        getSystemErrorMessage: <ref *17> ƒ getSystemErrorMessage(length: 1) {},
        getSystemErrorName: <ref *18> ƒ getSystemErrorName(length: 1) {},
        inherits: <ref *19> ƒ inherits(length: 2) {},
        inspect: <ref *20> ƒ inspect(length: 2) {
            colors: [Object: null prototype] {
                bgBlack: [
                    40,
                    49
                ],
                bgBlue: [
                    44,
                    49
                ],
                bgBlueBright: [
                    104,
                    49
                ],
                bgCyan: [
                    46,
                    49
                ],
                bgCyanBright: [
                    106,
                    49
                ],
                bgGray: [
                    100,
                    49
                ],
                bgGreen: [
                    42,
                    49
                ],
                bgGreenBright: [
                    102,
                    49
                ],
                bgMagenta: [
                    45,
                    49
                ],
                bgMagentaBright: [
                    105,
                    49
                ],
                bgRed: [
                    41,
                    49
                ],
                bgRedBright: [
                    101,
                    49
                ],
                bgWhite: [
                    47,
                    49
                ],
                bgWhiteBright: [
                    107,
                    49
                ],
                bgYellow: [
                    43,
                    49
                ],
                bgYellowBright: [
                    103,
                    49
                ],
                black: [
                    30,
                    39
                ],
                blink: [
                    5,
                    25
                ],
                blue: [
                    34,
                    39
                ],
                blueBright: [
                    94,
                    39
                ],
                bold: [
                    1,
                    22
                ],
                cyan: [
                    36,
                    39
                ],
                cyanBright: [
                    96,
                    39
                ],
                dim: [
                    2,
                    22
                ],
                doubleunderline: [
                    21,
                    24
                ],
                framed: [
                    51,
                    54
                ],
                gray: [
                    90,
                    39
                ],
                green: [
                    32,
                    39
                ],
                greenBright: [
                    92,
                    39
                ],
                hidden: [
                    8,
                    28
                ],
                inverse: [
                    7,
                    27
                ],
                italic: [
                    3,
                    23
                ],
                magenta: [
                    35,
                    39
                ],
                magentaBright: [
                    95,
                    39
                ],
                overlined: [
                    53,
                    55
                ],
                red: [
                    31,
                    39
                ],
                redBright: [
                    91,
                    39
                ],
                reset: [
                    0,
                    0
                ],
                strikethrough: [
                    9,
                    29
                ],
                underline: [
                    4,
                    24
                ],
                white: [
                    37,
                    39
                ],
                whiteBright: [
                    97,
                    39
                ],
                yellow: [
                    33,
                    39
                ],
                yellowBright: [
                    93,
                    39
                ]
            },
            custom: Symbol(nodejs.util.inspect.custom),
            styles: [Object: null prototype] {
                bigint: "yellow",
                boolean: "yellow",
                date: "magenta",
                module: "underline",
                null: "bold",
                number: "yellow",
                regexp: ƒ highlightRegExp(length: 1) {
                    colors: [
                        "green",
                        "red",
                        "yellow",
                        "cyan",
                        "magenta"
                    ]
                },
                special: "cyan",
                string: "green",
                symbol: "green",
                undefined: "grey"
            }
        },
        isArray: <ref *69> ƒ deprecated(length: 1) {},
        isDeepStrictEqual: <ref *70> ƒ isDeepStrictEqual(length: 3) {},
        isPartialDeepStrictEqual: <ref *71> ƒ isPartialDeepStrictEqual(length: 2) {},
        markPromiseAsHandled: <ref *72> ƒ markPromiseAsHandled(length: 1) {},
        MIMEParams: <ref *73> class MIMEParams {},
        MIMEType: <ref *74> class MIMEType {},
        parseArgs: <ref *75> ƒ parseArgs(length: 0) {},
        parseEnv: <ref *76> ƒ parseEnv(length: 1) {},
        promisify: <ref *77> ƒ promisify(length: 1) {
            custom: Symbol(nodejs.util.promisify.custom)
        },
        setTraceSigInt: <ref *78> ƒ setTraceSigInt(length: 1) {},
        stripVTControlCharacters: <ref *79> ƒ stripVTControlCharacters(length: 1) {},
        styleText: <ref *80> ƒ styleText(length: 3) {},
        TextDecoder: <ref *81> class TextDecoder {},
        TextEncoder: <ref *82> class TextEncoder {},
        [get] throttle: <ref *83> ƒ throttle(length: 3) {},
        toUSVString: <ref *84> ƒ toUSVString(length: 1) {},
        [get] transferableAbortController: <ref *85> ƒ transferableAbortController(length: 0) {},
        [get] transferableAbortSignal: <ref *86> ƒ transferableAbortSignal(length: 1) {},
        types: <ref *87> {
            isAnyArrayBuffer: ƒ (length: 0) {},
            isArgumentsObject: ƒ (length: 0) {},
            isArrayBuffer: ƒ (length: 0) {},
            isArrayBufferView: ƒ isView(length: 1) {},
            isAsyncFunction: ƒ (length: 0) {},
            isBigInt64Array: ƒ isBigInt64Array(length: 1) {},
            isBigIntObject: ƒ (length: 0) {},
            isBigUint64Array: ƒ isBigUint64Array(length: 1) {},
            isBooleanObject: ƒ (length: 0) {},
            isBoxedPrimitive: ƒ (length: 0) {},
            isCryptoKey: ƒ isCryptoKey(length: 1) {},
            isDataView: ƒ isDataView(length: 1) {},
            isDate: ƒ (length: 0) {},
            isExternal: ƒ (length: 0) {},
            isFloat16Array: ƒ isFloat16Array(length: 1) {},
            isFloat32Array: ƒ isFloat32Array(length: 1) {},
            isFloat64Array: ƒ isFloat64Array(length: 1) {},
            isGeneratorFunction: ƒ (length: 0) {},
            isGeneratorObject: ƒ (length: 0) {},
            isInt16Array: ƒ isInt16Array(length: 1) {},
            isInt32Array: ƒ isInt32Array(length: 1) {},
            isInt8Array: ƒ isInt8Array(length: 1) {},
            isKeyObject: ƒ isKeyObject(length: 1) {},
            isMap: ƒ (length: 0) {},
            isMapIterator: ƒ (length: 0) {},
            isModuleNamespaceObject: ƒ (length: 0) {},
            isNativeError: ƒ (length: 0) {},
            isNumberObject: ƒ (length: 0) {},
            isPromise: ƒ (length: 0) {},
            isProxy: ƒ (length: 0) {},
            isRegExp: ƒ (length: 0) {},
            isSet: ƒ (length: 0) {},
            isSetIterator: ƒ (length: 0) {},
            isSharedArrayBuffer: ƒ (length: 0) {},
            isStringObject: ƒ (length: 0) {},
            isSymbolObject: ƒ (length: 0) {},
            isTypedArray: ƒ isTypedArray(length: 1) {},
            isUint16Array: ƒ isUint16Array(length: 1) {},
            isUint32Array: ƒ isUint32Array(length: 1) {},
            isUint8Array: ƒ isUint8Array(length: 1) {},
            isUint8ClampedArray: ƒ isUint8ClampedArray(length: 1) {},
            isWeakMap: ƒ (length: 0) {},
            isWeakSet: ƒ (length: 0) {}
        }
    },
    deprecate: [Circular: *11],
    diff: [Circular: *12],
    format: [Circular: *13],
    formatWithOptions: [Circular: *14],
    getCallSites: [Circular: *15],
    getSystemErrorMap: [Circular: *16],
    getSystemErrorMessage: [Circular: *17],
    getSystemErrorName: [Circular: *18],
    inherits: [Circular: *19],
    inspect: [Circular: *20],
    isArray: [Circular: *69],
    isDeepStrictEqual: [Circular: *70],
    isPartialDeepStrictEqual: [Circular: *71],
    markPromiseAsHandled: [Circular: *72],
    MIMEParams: [Circular: *73],
    MIMEType: [Circular: *74],
    parseArgs: [Circular: *75],
    parseEnv: [Circular: *76],
    promisify: [Circular: *77],
    setTraceSigInt: [Circular: *78],
    stripVTControlCharacters: [Circular: *79],
    styleText: [Circular: *80],
    TextDecoder: [Circular: *81],
    TextEncoder: [Circular: *82],
    throttle: [Circular: *83],
    toUSVString: [Circular: *84],
    transferableAbortController: [Circular: *85],
    transferableAbortSignal: [Circular: *86],
    types: [Circular: *87]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    _extend: <ref *2> ƒ _extend(length: 2) {},
    aborted: <ref *3> async ƒ aborted(length: 2) {},
    callbackify: <ref *4> ƒ callbackify(length: 1) {},
    convertProcessSignalToExitCode: <ref *5> ƒ convertProcessSignalToExitCode(length: 1) {},
    debug: <ref *6> ƒ debuglog(length: 2) {},
    debuglog: [Circular: *6],
    default: {
        _extend: [Circular: *2],
        aborted: [Circular: *3],
        callbackify: [Circular: *4],
        convertProcessSignalToExitCode: [Circular: *5],
        debug: [Circular: *6],
        debuglog: [Circular: *6],
        deprecate: <ref *8> ƒ deprecate(length: 3) {},
        diff: <ref *9> ƒ diff(length: 2) {},
        format: <ref *10> ƒ format(length: 0) {},
        formatWithOptions: <ref *11> ƒ formatWithOptions(length: 1) {},
        getCallSites: <ref *12> ƒ getCallSites(length: 0) {},
        getSystemErrorMap: <ref *13> ƒ getSystemErrorMap(length: 0) {},
        getSystemErrorMessage: <ref *14> ƒ getSystemErrorMessage(length: 1) {},
        getSystemErrorName: <ref *15> ƒ getSystemErrorName(length: 1) {},
        inherits: <ref *16> ƒ inherits(length: 2) {},
        inspect: <ref *17> ƒ inspect(length: 2) {
            colors: {
                bgBlack: [
                    40,
                    49
                ],
                bgBlue: [
                    44,
                    49
                ],
                bgBlueBright: [
                    104,
                    49
                ],
                bgCyan: [
                    46,
                    49
                ],
                bgCyanBright: [
                    106,
                    49
                ],
                bgGray: [
                    100,
                    49
                ],
                bgGreen: [
                    42,
                    49
                ],
                bgGreenBright: [
                    102,
                    49
                ],
                bgMagenta: [
                    45,
                    49
                ],
                bgMagentaBright: [
                    105,
                    49
                ],
                bgRed: [
                    41,
                    49
                ],
                bgRedBright: [
                    101,
                    49
                ],
                bgWhite: [
                    47,
                    49
                ],
                bgWhiteBright: [
                    107,
                    49
                ],
                bgYellow: [
                    43,
                    49
                ],
                bgYellowBright: [
                    103,
                    49
                ],
                black: [
                    30,
                    39
                ],
                blink: [
                    5,
                    25
                ],
                blue: [
                    34,
                    39
                ],
                blueBright: [
                    94,
                    39
                ],
                bold: [
                    1,
                    22
                ],
                cyan: [
                    36,
                    39
                ],
                cyanBright: [
                    96,
                    39
                ],
                dim: [
                    2,
                    22
                ],
                doubleunderline: [
                    21,
                    24
                ],
                framed: [
                    51,
                    54
                ],
                gray: [
                    90,
                    39
                ],
                green: [
                    32,
                    39
                ],
                greenBright: [
                    92,
                    39
                ],
                hidden: [
                    8,
                    28
                ],
                inverse: [
                    7,
                    27
                ],
                italic: [
                    3,
                    23
                ],
                magenta: [
                    35,
                    39
                ],
                magentaBright: [
                    95,
                    39
                ],
                overlined: [
                    53,
                    55
                ],
                red: [
                    31,
                    39
                ],
                redBright: [
                    91,
                    39
                ],
                reset: [
                    0,
                    0
                ],
                strikethrough: [
                    9,
                    29
                ],
                underline: [
                    4,
                    24
                ],
                white: [
                    37,
                    39
                ],
                whiteBright: [
                    97,
                    39
                ],
                yellow: [
                    33,
                    39
                ],
                yellowBright: [
                    93,
                    39
                ]
            },
            custom: Symbol(nodejs.util.inspect.custom),
            styles: [Object: null prototype] {
                bigint: "yellow",
                boolean: "yellow",
                date: "magenta",
                module: "underline",
                null: "bold",
                number: "yellow",
                regexp: "red",
                special: "cyan",
                string: "green",
                symbol: "green",
                undefined: "grey"
            }
        },
        isArray: <ref *64> ƒ isArray(length: 1) {},
        isDeepStrictEqual: <ref *65> ƒ isDeepStrictEqual(length: 3) {},
        log: <ref *66> ƒ log(length: 0) {},
        MIMEParams: <ref *67> class MIMEParams {},
        MIMEType: <ref *68> class MIMEType {},
        parseArgs: <ref *69> ƒ parseArgs(length: 0) {},
        parseEnv: <ref *70> ƒ parseEnv(length: 1) {},
        promisify: <ref *71> ƒ promisify(length: 1) {
            custom: Symbol(nodejs.util.promisify.custom)
        },
        queryObjects: <ref *72> ƒ queryObjects(length: 2) {},
        setTraceSigInt: <ref *73> ƒ setTraceSigInt(length: 1) {},
        stripVTControlCharacters: <ref *74> ƒ stripVTControlCharacters(length: 1) {},
        styleText: <ref *75> ƒ styleText(length: 3) {},
        TextDecoder: <ref *76> class TextDecoder {},
        TextEncoder: <ref *77> class TextEncoder {},
        toUSVString: <ref *78> ƒ toUSVString(length: 1) {},
        transferableAbortController: <ref *79> ƒ transferableAbortController(length: 0) {},
        transferableAbortSignal: <ref *80> ƒ transferableAbortSignal(length: 1) {},
        types: <ref *81> {
            isAnyArrayBuffer: ƒ isAnyArrayBuffer(length: 1) {},
            isArgumentsObject: ƒ isArgumentsObject(length: 1) {},
            isArrayBuffer: ƒ isArrayBuffer(length: 1) {},
            isArrayBufferView: ƒ isArrayBufferView(length: 1) {},
            isAsyncFunction: ƒ isAsyncFunction(length: 1) {},
            isBigInt64Array: ƒ isBigInt64Array(length: 1) {},
            isBigIntObject: ƒ isBigIntObject(length: 1) {},
            isBigUint64Array: ƒ isBigUint64Array(length: 1) {},
            isBooleanObject: ƒ isBooleanObject(length: 1) {},
            isBoxedPrimitive: ƒ isBoxedPrimitive(length: 1) {},
            isCryptoKey: ƒ isCryptoKey(length: 1) {},
            isDataView: ƒ isDataView(length: 1) {},
            isDate: ƒ isDate(length: 1) {},
            isFloat16Array: ƒ isFloat16Array(length: 1) {},
            isFloat32Array: ƒ isFloat32Array(length: 1) {},
            isFloat64Array: ƒ isFloat64Array(length: 1) {},
            isGeneratorFunction: ƒ isGeneratorFunction(length: 1) {},
            isGeneratorObject: ƒ isGeneratorObject(length: 1) {},
            isInt16Array: ƒ isInt16Array(length: 1) {},
            isInt32Array: ƒ isInt32Array(length: 1) {},
            isInt8Array: ƒ isInt8Array(length: 1) {},
            isKeyObject: ƒ isKeyObject(length: 1) {},
            isMap: ƒ isMap(length: 1) {},
            isMapIterator: ƒ isMapIterator(length: 1) {},
            isModuleNamespaceObject: ƒ isModuleNamespaceObject(length: 1) {},
            isNativeError: ƒ isNativeError(length: 1) {},
            isNumberObject: ƒ isNumberObject(length: 1) {},
            isPromise: ƒ isPromise(length: 1) {},
            isProxy: ƒ isProxy(length: 1) {},
            isRegExp: ƒ isRegExp(length: 1) {},
            isSet: ƒ isSet(length: 1) {},
            isSetIterator: ƒ isSetIterator(length: 1) {},
            isSharedArrayBuffer: ƒ isSharedArrayBuffer(length: 1) {},
            isStringObject: ƒ isStringObject(length: 1) {},
            isSymbolObject: ƒ isSymbolObject(length: 1) {},
            isTypedArray: ƒ isTypedArray(length: 1) {},
            isUint16Array: ƒ isUint16Array(length: 1) {},
            isUint32Array: ƒ isUint32Array(length: 1) {},
            isUint8Array: ƒ isUint8Array(length: 1) {},
            isUint8ClampedArray: ƒ isUint8ClampedArray(length: 1) {},
            isWeakMap: ƒ isWeakMap(length: 1) {},
            isWeakSet: ƒ isWeakSet(length: 1) {}
        }
    },
    deprecate: [Circular: *8],
    diff: [Circular: *9],
    format: [Circular: *10],
    formatWithOptions: [Circular: *11],
    getCallSites: [Circular: *12],
    getSystemErrorMap: [Circular: *13],
    getSystemErrorMessage: [Circular: *14],
    getSystemErrorName: [Circular: *15],
    inherits: [Circular: *16],
    inspect: [Circular: *17],
    isArray: [Circular: *64],
    isDeepStrictEqual: [Circular: *65],
    log: [Circular: *66],
    MIMEParams: [Circular: *67],
    MIMEType: [Circular: *68],
    parseArgs: [Circular: *69],
    parseEnv: [Circular: *70],
    promisify: [Circular: *71],
    queryObjects: [Circular: *72],
    setTraceSigInt: [Circular: *73],
    stripVTControlCharacters: [Circular: *74],
    styleText: [Circular: *75],
    TextDecoder: [Circular: *76],
    TextEncoder: [Circular: *77],
    toUSVString: [Circular: *78],
    transferableAbortController: [Circular: *79],
    transferableAbortSignal: [Circular: *80],
    types: [Circular: *81]
}
```

</td>
    </tr>
  </table>
</details>

<details id="timers">
  <summary><code>timers</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    clearImmediate: <ref *2> ƒ clearImmediate(length: 1) {},
    clearInterval: <ref *3> ƒ clearInterval(length: 1) {},
    clearTimeout: <ref *4> ƒ clearTimeout(length: 1) {},
    default: {
        clearImmediate: [Circular: *2],
        clearInterval: [Circular: *3],
        clearTimeout: [Circular: *4],
        [get] promises: <ref *6> {
            scheduler: Scheduler {
                Symbol(kScheduler): true
            },
            setImmediate: <ref *8> ƒ setImmediate(length: 1) {},
            setInterval: async ƒ setInterval(length: 2) {},
            setTimeout: <ref *10> ƒ setTimeout(length: 2) {}
        },
        setImmediate: <ref *11> ƒ setImmediate(length: 1) {
            [get] Symbol(nodejs.util.promisify.custom): [Circular: *8]
        },
        setInterval: <ref *12> ƒ setInterval(length: 2) {},
        setTimeout: <ref *13> ƒ setTimeout(length: 2) {
            [get] Symbol(nodejs.util.promisify.custom): [Circular: *10]
        }
    },
    promises: [Circular: *6],
    setImmediate: [Circular: *11],
    setInterval: [Circular: *12],
    setTimeout: [Circular: *13]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    clearImmediate: <ref *2> ƒ clearImmediate(length: 1) {},
    clearInterval: <ref *3> ƒ clearInterval(length: 1) {},
    clearTimeout: <ref *4> ƒ clearTimeout(length: 1) {},
    default: {
        clearImmediate: [Circular: *2],
        clearInterval: [Circular: *3],
        clearTimeout: [Circular: *4],
        promises: <ref *6> {
            scheduler: Scheduler {},
            setImmediate: <ref *8> ƒ setImmediate(length: 1) {},
            setInterval: async ƒ setIntervalAsync(length: 2) {},
            setTimeout: <ref *10> ƒ setTimeout(length: 2) {}
        },
        setImmediate: <ref *11> ƒ setImmediate(length: 1) {
            [get] Symbol(nodejs.util.promisify.custom): [Circular: *8]
        },
        setInterval: <ref *12> ƒ setInterval(length: 2) {},
        setTimeout: <ref *13> ƒ setTimeout(length: 2) {
            [get] Symbol(nodejs.util.promisify.custom): [Circular: *10]
        },
        Symbol(Deno.internal.node.mockTimers): ƒ [Deno.internal.node.mockTimers](length: 1) {}
    },
    promises: [Circular: *6],
    setImmediate: [Circular: *11],
    setInterval: [Circular: *12],
    setTimeout: [Circular: *13]
}
```

</td>
    </tr>
  </table>
</details>

<details id="timers-promises">
  <summary><code>timers/promises</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    default: {
        scheduler: <ref *3> Scheduler {
            Symbol(kScheduler): true
        },
        setImmediate: <ref *4> ƒ setImmediate(length: 1) {},
        setInterval: <ref *5> async ƒ setInterval(length: 2) {},
        setTimeout: <ref *6> ƒ setTimeout(length: 2) {}
    },
    scheduler: [Circular: *3],
    setImmediate: [Circular: *4],
    setInterval: [Circular: *5],
    setTimeout: [Circular: *6]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    default: {
        scheduler: <ref *3> Scheduler {},
        setImmediate: <ref *4> ƒ setImmediate(length: 1) {},
        setInterval: <ref *5> async ƒ setIntervalAsync(length: 2) {},
        setTimeout: <ref *6> ƒ setTimeout(length: 2) {}
    },
    scheduler: [Circular: *3],
    setImmediate: [Circular: *4],
    setInterval: [Circular: *5],
    setTimeout: [Circular: *6]
}
```

</td>
    </tr>
  </table>
</details>

<details id="tls">
  <summary><code>tls</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    checkServerIdentity: <ref *2> ƒ checkServerIdentity(length: 2) {},
    CLIENT_RENEG_LIMIT: 3,
    CLIENT_RENEG_WINDOW: 600,
    connect: <ref *3> ƒ connect(length: 0) {},
    convertALPNProtocols: <ref *4> ƒ convertALPNProtocols(length: 2) {},
    createSecureContext: <ref *5> ƒ createSecureContext(length: 1) {},
    createServer: <ref *6> ƒ createServer(length: 2) {},
    default: {
        checkServerIdentity: [Circular: *2],
        CLIENT_RENEG_LIMIT: 3,
        CLIENT_RENEG_WINDOW: 600,
        connect: [Circular: *3],
        convertALPNProtocols: [Circular: *4],
        createSecureContext: [Circular: *5],
        createServer: [Circular: *6],
        DEFAULT_CIPHERS: "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA2…",
        DEFAULT_ECDH_CURVE: "auto",
        DEFAULT_MAX_VERSION: "TLSv1.3",
        DEFAULT_MIN_VERSION: "TLSv1.2",
        getCACertificates: <ref *8> ƒ getCACertificates(length: 0) {},
        getCertificateCompressionAlgorithms: <ref *9> ƒ (length: 0) {},
        getCiphers: <ref *10> ƒ (length: 0) {},
        [get] rootCertificates: <ref *11> [
            "-----BEGIN CERTIFICATE-----\nMIICiTCCAg+gAwIBAgIQH0evqmIAcFBUTAGem2OZKjAKBggqhkjOPQQDAzCBhTELMAkGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIIEFTCCAv2gAwIBAgIGSUEs5AAQMA0GCSqGSIb3DQEBCwUAMIGnMQswCQYDVQQGEwJIVTER…",
            "-----BEGIN CERTIFICATE-----\nMIIECjCCAvKgAwIBAgIJAMJ+QwRORz8ZMA0GCSqGSIb3DQEBCwUAMIGCMQswCQYDVQQGEwJI…",
            "-----BEGIN CERTIFICATE-----\nMIIDXzCCAkegAwIBAgILBAAAAAABIVhTCKIwDQYJKoZIhvcNAQELBQAwTDEgMB4GA1UECxMX…",
            "-----BEGIN CERTIFICATE-----\nMIIF8TCCA9mgAwIBAgIQALC3WhZIX7/hy/WL1xnmfTANBgkqhkiG9w0BAQsFADA4MQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIDxTCCAq2gAwIBAgIBADANBgkqhkiG9w0BAQsFADCBgzELMAkGA1UEBhMCVVMxEDAOBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIID3TCCAsWgAwIBAgIBADANBgkqhkiG9w0BAQsFADCBjzELMAkGA1UEBhMCVVMxEDAOBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIID7zCCAtegAwIBAgIBADANBgkqhkiG9w0BAQsFADCBmDELMAkGA1UEBhMCVVMxEDAOBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIDuzCCAqOgAwIBAgIDBETAMA0GCSqGSIb3DQEBBQUAMH4xCzAJBgNVBAYTAlBMMSIwIAYD…",
            "-----BEGIN CERTIFICATE-----\nMIIDezCCAmOgAwIBAgIBATANBgkqhkiG9w0BAQUFADBfMQswCQYDVQQGEwJUVzESMBAGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIIDdzCCAl+gAwIBAgIBADANBgkqhkiG9w0BAQsFADBdMQswCQYDVQQGEwJKUDElMCMGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIIFuzCCA6OgAwIBAgIIVwoRl0LE48wwDQYJKoZIhvcNAQELBQAwazELMAkGA1UEBhMCSVQx…",
            "-----BEGIN CERTIFICATE-----\nMIIFWTCCA0GgAwIBAgIBAjANBgkqhkiG9w0BAQsFADBOMQswCQYDVQQGEwJOTzEdMBsGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIIFWTCCA0GgAwIBAgIBAjANBgkqhkiG9w0BAQsFADBOMQswCQYDVQQGEwJOTzEdMBsGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIIDwzCCAqugAwIBAgIBATANBgkqhkiG9w0BAQsFADCBgjELMAkGA1UEBhMCREUxKzApBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIEMzCCAxugAwIBAgIDCYPzMA0GCSqGSIb3DQEBCwUAME0xCzAJBgNVBAYTAkRFMRUwEwYD…",
            "-----BEGIN CERTIFICATE-----\nMIIEQzCCAyugAwIBAgIDCYP0MA0GCSqGSIb3DQEBCwUAMFAxCzAJBgNVBAYTAkRFMRUwEwYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFaTCCA1GgAwIBAgIJAJK4iNuwisFjMA0GCSqGSIb3DQEBCwUAMFIxCzAJBgNVBAYTAlNL…",
            "-----BEGIN CERTIFICATE-----\nMIIH0zCCBbugAwIBAgIIXsO3pkN/pOAwDQYJKoZIhvcNAQEFBQAwQjESMBAGA1UEAwwJQUND…",
            "-----BEGIN CERTIFICATE-----\nMIIFQTCCAymgAwIBAgICDL4wDQYJKoZIhvcNAQELBQAwUTELMAkGA1UEBhMCVFcxEjAQBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIDwzCCAqugAwIBAgIBATANBgkqhkiG9w0BAQsFADCBgjELMAkGA1UEBhMCREUxKzApBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIFYDCCA0igAwIBAgIUeFhfLq0sGUvjNwc1NBMotZbUZZMwDQYJKoZIhvcNAQELBQAwSDEL…",
            "-----BEGIN CERTIFICATE-----\nMIIFYDCCA0igAwIBAgIURFc0JFuBiZs18s64KztbpybwdSgwDQYJKoZIhvcNAQELBQAwSDEL…",
            "-----BEGIN CERTIFICATE-----\nMIIFYDCCA0igAwIBAgIULvWbAiin23r/1aOp7r0DoM8Sah0wDQYJKoZIhvcNAQELBQAwSDEL…",
            "-----BEGIN CERTIFICATE-----\nMIIDljCCAn6gAwIBAgIQC5McOtY5Z+pnI7/Dr5r0SzANBgkqhkiG9w0BAQsFADBlMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIICRjCCAc2gAwIBAgIQC6Fa+h3foLVJRK/NJKBs7DAKBggqhkjOPQQDAzBlMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIDjjCCAnagAwIBAgIQAzrx5qcRqaC7KGSxHQn65TANBgkqhkiG9w0BAQsFADBhMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIICPzCCAcWgAwIBAgIQBVVWvPJepDU1w6QP1atFcjAKBggqhkjOPQQDAzBhMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIFkDCCA3igAwIBAgIQBZsbV56OITLiOQe9p3d1XDANBgkqhkiG9w0BAQwFADBiMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIF2DCCA8CgAwIBAgIQTKr5yttjb+Af907YWwOGnTANBgkqhkiG9w0BAQwFADCBhTELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIIF3jCCA8agAwIBAgIQAf1tMPyjylGoG7xkDjUDLTANBgkqhkiG9w0BAQwFADCBiDELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIICjzCCAhWgAwIBAgIQXIuZxVqUxdJxVt7NiYDMJjAKBggqhkjOPQQDAzCBiDELMAkGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIICHjCCAaSgAwIBAgIRYFlJ4CYuu1X5CneKcflK2GwwCgYIKoZIzj0EAwMwUDEkMCIGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIIFYDCCA0igAwIBAgIQCgFCgAAAAUUjyES1AAAAAjANBgkqhkiG9w0BAQsFADBKMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFZjCCA06gAwIBAgIQCgFCgAAAAUUjz0Z8AAAAAjANBgkqhkiG9w0BAQsFADBNMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFjTCCA3WgAwIBAgIEGErM1jANBgkqhkiG9w0BAQsFADBWMQswCQYDVQQGEwJDTjEwMC4G…",
            "-----BEGIN CERTIFICATE-----\nMIIDtTCCAp2gAwIBAgIQdrEgUnTwhYdGs/gjGvbCwDANBgkqhkiG9w0BAQsFADBtMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIDcjCCAlqgAwIBAgIUPopdB+xV0jLVt+O2XwHrLdzk1uQwDQYJKoZIhvcNAQELBQAwUTEL…",
            "-----BEGIN CERTIFICATE-----\nMIIF0jCCA7qgAwIBAgIQIdbQSk8lD8kyN/yqXhKN6TANBgkqhkiG9w0BAQ0FADCBgDELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIIGCzCCA/OgAwIBAgIBADANBgkqhkiG9w0BAQsFADCBpjELMAkGA1UEBhMCR1IxDzANBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIICwzCCAkqgAwIBAgIBADAKBggqhkjOPQQDAjCBqjELMAkGA1UEBhMCR1IxDzANBgNVBAcT…",
            "-----BEGIN CERTIFICATE-----\nMIIFazCCA1OgAwIBAgIRAIIQz7DSQONZRGPgu2OCiwAwDQYJKoZIhvcNAQELBQAwTzELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIIFgzCCA2ugAwIBAgIPXZONMGc2yAYdGsdUhGkHMA0GCSqGSIb3DQEBCwUAMDsxCzAJBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIDQTCCAimgAwIBAgITBmyfz5m/jAo54vB4ikPmljZbyjANBgkqhkiG9w0BAQsFADA5MQsw…",
            "-----BEGIN CERTIFICATE-----\nMIIFQTCCAymgAwIBAgITBmyf0pY1hp8KD+WGePhbJruKNzANBgkqhkiG9w0BAQwFADA5MQsw…",
            "-----BEGIN CERTIFICATE-----\nMIIBtjCCAVugAwIBAgITBmyf1XSXNmY/Owua2eiedgPySjAKBggqhkjOPQQDAjA5MQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIB8jCCAXigAwIBAgITBmyf18G7EEwpQ+Vxe3ssyBrBDjAKBggqhkjOPQQDAzA5MQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIEYzCCA0ugAwIBAgIBATANBgkqhkiG9w0BAQsFADCB0jELMAkGA1UEBhMCVFIxGDAWBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIFiDCCA3CgAwIBAgIIfQmX/vBH6nowDQYJKoZIhvcNAQELBQAwYjELMAkGA1UEBhMCQ04x…",
            "-----BEGIN CERTIFICATE-----\nMIIF3TCCA8WgAwIBAgIIeyyb0xaAMpkwDQYJKoZIhvcNAQELBQAwfDELMAkGA1UEBhMCVVMx…",
            "-----BEGIN CERTIFICATE-----\nMIICjTCCAhSgAwIBAgIIdebfy8FoW6gwCgYIKoZIzj0EAwIwfDELMAkGA1UEBhMCVVMxDjAM…",
            "-----BEGIN CERTIFICATE-----\nMIIF6zCCA9OgAwIBAgIIVrYpzTS8ePYwDQYJKoZIhvcNAQELBQAwgYIxCzAJBgNVBAYTAlVT…",
            "-----BEGIN CERTIFICATE-----\nMIIClDCCAhqgAwIBAgIILCmcWxbtBZUwCgYIKoZIzj0EAwIwfzELMAkGA1UEBhMCVVMxDjAM…",
            "-----BEGIN CERTIFICATE-----\nMIIFgzCCA2ugAwIBAgIORea7A4Mzw4VlSOb/RVEwDQYJKoZIhvcNAQEMBQAwTDEgMB4GA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIICaTCCAe+gAwIBAgIQISpWDK7aDKtARb8roi066jAKBggqhkjOPQQDAzBtMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIFRjCCAy6gAwIBAgIQXd+x2lqj7V2+WmUgZQOQ7zANBgkqhkiG9w0BAQsFADA9MQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFWjCCA0KgAwIBAgIQT9Irj/VkyDOeTzRYZiNwYDANBgkqhkiG9w0BAQsFADBHMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIGWzCCBEOgAwIBAgIRAMrpG4nxVQMNo+ZBbcTjpuEwDQYJKoZIhvcNAQELBQAwWjELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIIDlDCCAnygAwIBAgIKMfXkYgxsWO3W2DANBgkqhkiG9w0BAQsFADBnMQswCQYDVQQGEwJJ…",
            "-----BEGIN CERTIFICATE-----\nMIIFzzCCA7egAwIBAgIUCBZfikyl7ADJk0DfxMauI7gcWqQwDQYJKoZIhvcNAQELBQAwbzEL…",
            "-----BEGIN CERTIFICATE-----\nMIICWTCCAd+gAwIBAgIQZvI9r4fei7FK6gxXMQHC7DAKBggqhkjOPQQDAzBlMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIFqDCCA5CgAwIBAgIQHtOXCV/YtLNHcB6qvn9FszANBgkqhkiG9w0BAQwFADBlMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIICQDCCAeWgAwIBAgIMAVRI7yH9l1kN9QQKMAoGCCqGSM49BAMCMHExCzAJBgNVBAYTAkhV…",
            "-----BEGIN CERTIFICATE-----\nMIIFRzCCAy+gAwIBAgIJEQA0tk7GNi02MA0GCSqGSIb3DQEBCwUAMEExCzAJBgNVBAYTAlJP…",
            "-----BEGIN CERTIFICATE-----\nMIIFojCCA4qgAwIBAgIUAZQwHqIL3fXFMyqxQ0Rx+NZQTQ0wDQYJKoZIhvcNAQEMBQAwaTEL…",
            "-----BEGIN CERTIFICATE-----\nMIICbjCCAfOgAwIBAgIQYvYybOXE42hcG2LdnC6dlTAKBggqhkjOPQQDAzB4MQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIFWjCCA0KgAwIBAgISEdK7udcjGJ5AXwqdLdDfJWfRMA0GCSqGSIb3DQEBDAUAMEYxCzAJ…",
            "-----BEGIN CERTIFICATE-----\nMIICCzCCAZGgAwIBAgISEdK7ujNu1LzmJGjFDYQdmOhDMAoGCCqGSM49BAMDMEYxCzAJBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIF7zCCA9egAwIBAgIIDdPjvGz5a7EwDQYJKoZIhvcNAQELBQAwgYQxEjAQBgNVBAUTCUc2…",
            "-----BEGIN CERTIFICATE-----\nMIICZTCCAeugAwIBAgIQeI8nXIESUiClBNAt3bpz9DAKBggqhkjOPQQDAzB0MQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIFwDCCA6igAwIBAgIQHr9ZULjJgDdMBvfrVU+17TANBgkqhkiG9w0BAQ0FADB6MQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFszCCA5ugAwIBAgIUEwLV4kBMkkaGFmddtLu7sms+/BMwDQYJKoZIhvcNAQELBQAwYTEL…",
            "-----BEGIN CERTIFICATE-----\nMIIFpDCCA4ygAwIBAgIQOcqTHO9D88aOk8f0ZIk4fjANBgkqhkiG9w0BAQsFADBsMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIICVDCCAdugAwIBAgIQZ3SdjXfYO2rbIvT/WeK/zjAKBggqhkjOPQQDAzBsMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIGFDCCA/ygAwIBAgIIG3Dp0v+ubHEwDQYJKoZIhvcNAQELBQAwUTELMAkGA1UEBhMCRVMx…",
            "-----BEGIN CERTIFICATE-----\nMIICDzCCAZWgAwIBAgIUbmq8WapTvpg5Z6LSa6Q75m0c1towCgYIKoZIzj0EAwMwRzELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIIFVjCCAz6gAwIBAgIUQ+NxE9izWRRdt86M/TX9b7wFjUUwDQYJKoZIhvcNAQELBQAwQzEL…",
            "-----BEGIN CERTIFICATE-----\nMIICGzCCAaGgAwIBAgIQQdKd0XLq7qeAwSxs6S+HUjAKBggqhkjOPQQDAzBPMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIFajCCA1KgAwIBAgIQLd2szmKXlKFD6LDNdmpeYDANBgkqhkiG9w0BAQsFADBPMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIB3DCCAYOgAwIBAgINAgPlfvU/k/2lCSGypjAKBggqhkjOPQQDAjBQMSQwIgYDVQQLExtH…",
            "-----BEGIN CERTIFICATE-----\nMIIFVzCCAz+gAwIBAgINAgPlk28xsBNJiGuiFzANBgkqhkiG9w0BAQwFADBHMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIICCTCCAY6gAwIBAgINAgPluILrIPglJ209ZjAKBggqhkjOPQQDAzBHMQswCQYDVQQGEwJV…",
            "-----BEGIN CERTIFICATE-----\nMIICCTCCAY6gAwIBAgINAgPlwGjvYxqccpBQUjAKBggqhkjOPQQDAzBHMQswCQYDVQQGEwJV…",
            "-----BEGIN CERTIFICATE-----\nMIIFdDCCA1ygAwIBAgIPAWdfJ9b+euPkrL4JWwWeMA0GCSqGSIb3DQEBCwUAMEQxCzAJBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIC2zCCAmCgAwIBAgIQfMmPK4TX3+oPyWWa00tNljAKBggqhkjOPQQDAzBIMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIC2zCCAmCgAwIBAgIQXwJB13qHfEwDo6yWjfv/0DAKBggqhkjOPQQDAzBIMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIICGTCCAZ+gAwIBAgIQCeCTZaz32ci5PhwLBCou8zAKBggqhkjOPQQDAzBOMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIFZjCCA06gAwIBAgIQCPm0eKj6ftpqMzeJ3nzPijANBgkqhkiG9w0BAQwFADBNMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFRzCCAy+gAwIBAgIRAI4P+UuQcWhlM1T01EQ5t+AwDQYJKoZIhvcNAQELBQAwPTELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIIB9zCCAX2gAwIBAgIQBiUzsUcDMydc+Y2aub/M+DAKBggqhkjOPQQDAzA9MQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIICODCCAb6gAwIBAgIJANZdm7N4gS7rMAoGCCqGSM49BAMDMGExCzAJBgNVBAYTAkpQMSUw…",
            "-----BEGIN CERTIFICATE-----\nMIIFdDCCA1ygAwIBAgIQVW9l47TZkGobCdFsPsBsIDANBgkqhkiG9w0BAQsFADBUMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIICJTCCAaugAwIBAgIQLBcIfWQqwP6FGFkGz7RK6zAKBggqhkjOPQQDAzBUMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIICOjCCAcGgAwIBAgIQQvLM2htpN0RfFf51KBC49DAKBggqhkjOPQQDAzBfMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIFijCCA3KgAwIBAgIQdY39i658BwD6qSWn4cetFDANBgkqhkiG9w0BAQwFADBfMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFiTCCA3GgAwIBAgIQb77arXO9CEDii02+1PdbkTANBgkqhkiG9w0BAQsFADBOMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIICOjCCAcCgAwIBAgIQFAP1q/s3ixdAW+JDsqXRxDAKBggqhkjOPQQDAzBOMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIICFTCCAZugAwIBAgIQPZg7pmY9kGP3fiZXOATvADAKBggqhkjOPQQDAzBMMS4wLAYDVQQD…",
            "-----BEGIN CERTIFICATE-----\nMIIFZDCCA0ygAwIBAgIQU9XP5hmTC/srBRLYwiqipDANBgkqhkiG9w0BAQwFADBMMS4wLAYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFpTCCA42gAwIBAgIUZPYOZXdhaqs7tOqFhLuxibhxkw8wDQYJKoZIhvcNAQEMBQAwWjEL…",
            "-----BEGIN CERTIFICATE-----\nMIICVTCCAdygAwIBAgIUTyNkuI6XY57GU4HBdk7LKnQV1tcwCgYIKoZIzj0EAwMwWjELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIICQjCCAcmgAwIBAgIQNjqWjMlcsljN0AFdxeVXADAKBggqhkjOPQQDAzBjMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIFszCCA5ugAwIBAgIQIZxULej27HF3+k7ow3BXlzANBgkqhkiG9w0BAQwFADBjMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFjTCCA3WgAwIBAgIQQAE0jMIAAAAAAAAAATzyxjANBgkqhkiG9w0BAQwFADBQMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFcjCCA1qgAwIBAgIUZNtaDCBO6Ncpd8hQJ6JaJ90t8sswDQYJKoZIhvcNAQEMBQAwUTEL…",
            "-----BEGIN CERTIFICATE-----\nMIICIzCCAamgAwIBAgIUFhXHw9hJp75pDIqI7fBw+d23PocwCgYIKoZIzj0EAwMwUTELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIIFqTCCA5GgAwIBAgIQczswBEhb2U14LnNLyaHcZjANBgkqhkiG9w0BAQ0FADBIMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIICMTCCAbegAwIBAgIUNnThTXxlE8msg1UloD5Sfi9QaMcwCgYIKoZIzj0EAwMwWDELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIIFgDCCA2igAwIBAgIUHBjYz+VTPyI1RlNUJDxsR9FcSpwwDQYJKoZIhvcNAQEMBQAwWDEL…",
            "-----BEGIN CERTIFICATE-----\nMIIFqTCCA5GgAwIBAgIQaSYJfoBLTKCnjHhiU19abzANBgkqhkiG9w0BAQ0FADBIMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFkzCCA3ugAwIBAgIUQ/oMX04bgBhE79G0TzUfRPSA7cswDQYJKoZIhvcNAQELBQAwUTEL…",
            "-----BEGIN CERTIFICATE-----\nMIICNTCCAbqgAwIBAgIQI/nD1jWvjyhLH/BU6n6XnTAKBggqhkjOPQQDAzBLMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIFgzCCA2ugAwIBAgIQVaXZZ5Qoxu0M+ifdWwFNGDANBgkqhkiG9w0BAQwFADBLMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIICzzCCAjGgAwIBAgINAOhvGHvWOWuYSkmYCjAKBggqhkjOPQQDBDB1MQswCQYDVQQGEwJI…",
            "-----BEGIN CERTIFICATE-----\nMIIFmjCCA4KgAwIBAgIJAO6JNNDLgOCyMA0GCSqGSIb3DQEBDAUAMFoxCzAJBgNVBAYTAkpQ…",
            "-----BEGIN CERTIFICATE-----\nMIICTDCCAdGgAwIBAgIJAIF6LO+PI3pEMAoGCCqGSM49BAMDMFoxCzAJBgNVBAYTAkpQMSYw…",
            "-----BEGIN CERTIFICATE-----\nMIICMjCCAbegAwIBAgIPAYvSIlRjTQSLbOVHH9K1MAoGCCqGSM49BAMDMEoxCzAJBgNVBAYT…",
            "-----BEGIN CERTIFICATE-----\nMIIFgjCCA2qgAwIBAgIPAYvSUKtCVSxHWr2h3BrFMA0GCSqGSIb3DQEBDAUAMEsxCzAJBgNV…"
        ],
        SecureContext: <ref *12> ƒ SecureContext(length: 4) {},
        Server: <ref *13> ƒ Server(length: 2) {},
        setDefaultCACertificates: <ref *14> ƒ setDefaultCACertificates(length: 1) {},
        TLSSocket: <ref *15> ƒ TLSSocket(length: 2) {}
    },
    DEFAULT_CIPHERS: "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA2…",
    DEFAULT_ECDH_CURVE: "auto",
    DEFAULT_MAX_VERSION: "TLSv1.3",
    DEFAULT_MIN_VERSION: "TLSv1.2",
    getCACertificates: [Circular: *8],
    getCertificateCompressionAlgorithms: [Circular: *9],
    getCiphers: [Circular: *10],
    rootCertificates: [Circular: *11],
    SecureContext: [Circular: *12],
    Server: [Circular: *13],
    setDefaultCACertificates: [Circular: *14],
    TLSSocket: [Circular: *15]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    checkServerIdentity: <ref *2> ƒ checkServerIdentity(length: 2) {},
    CLIENT_RENEG_LIMIT: 3,
    CLIENT_RENEG_WINDOW: 600,
    connect: <ref *3> ƒ connect(length: 0) {},
    convertALPNProtocols: <ref *4> ƒ convertALPNProtocols(length: 2) {},
    createSecureContext: <ref *5> ƒ createSecureContext(length: 0) {},
    createSecurePair: <ref *6> ƒ createSecurePair(length: 0) {},
    createServer: <ref *7> ƒ createServer(length: 2) {},
    CryptoStream: <ref *8> class CryptoStream {},
    default: {
        checkServerIdentity: [Circular: *2],
        CLIENT_RENEG_LIMIT: 3,
        CLIENT_RENEG_WINDOW: 600,
        connect: [Circular: *3],
        convertALPNProtocols: [Circular: *4],
        createSecureContext: [Circular: *5],
        createSecurePair: [Circular: *6],
        createServer: [Circular: *7],
        CryptoStream: [Circular: *8],
        DEFAULT_CIPHERS: "AES256-GCM-SHA384:AES128-GCM-SHA256:TLS_CHACHA20_POLY1305_SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE…",
        DEFAULT_ECDH_CURVE: "auto",
        [get/set] DEFAULT_MAX_VERSION: "TLSv1.3",
        [get/set] DEFAULT_MIN_VERSION: "TLSv1.2",
        getCACertificates: <ref *10> ƒ getCACertificates(length: 0) {},
        getCiphers: <ref *11> ƒ getCiphers(length: 0) {},
        [get] rootCertificates: <ref *12> [
            "-----BEGIN CERTIFICATE-----\nMIICGTCCAZ+gAwIBAgIQCeCTZaz32ci5PhwLBCou8zAKBggqhkjOPQQDAzBOMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIFqTCCA5GgAwIBAgIQczswBEhb2U14LnNLyaHcZjANBgkqhkiG9w0BAQ0FADBIMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFgDCCA2igAwIBAgIUHBjYz+VTPyI1RlNUJDxsR9FcSpwwDQYJKoZIhvcNAQEMBQAwWDEL…",
            "-----BEGIN CERTIFICATE-----\nMIIC2zCCAmCgAwIBAgIQXwJB13qHfEwDo6yWjfv/0DAKBggqhkjOPQQDAzBIMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIICMjCCAbegAwIBAgIPAYvSIlRjTQSLbOVHH9K1MAoGCCqGSM49BAMDMEoxCzAJBgNVBAYT…",
            "-----BEGIN CERTIFICATE-----\nMIIDczCCAlugAwIBAgILAK7PALrEzzL4Q7IwDQYJKoZIhvcNAQELBQAwVjELMAkGA1UEBhMC…",
            "-----BEGIN CERTIFICATE-----\nMIIFmjCCA4KgAwIBAgIJAO6JNNDLgOCyMA0GCSqGSIb3DQEBDAUAMFoxCzAJBgNVBAYTAkpQ…",
            "-----BEGIN CERTIFICATE-----\nMIICiTCCAg+gAwIBAgIQH0evqmIAcFBUTAGem2OZKjAKBggqhkjOPQQDAzCBhTELMAkGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIICHjCCAaSgAwIBAgIRYFlJ4CYuu1X5CneKcflK2GwwCgYIKoZIzj0EAwMwUDEkMCIGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIIBtjCCAVugAwIBAgITBmyf1XSXNmY/Owua2eiedgPySjAKBggqhkjOPQQDAjA5MQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFkzCCA3ugAwIBAgIUQ/oMX04bgBhE79G0TzUfRPSA7cswDQYJKoZIhvcNAQELBQAwUTEL…",
            "-----BEGIN CERTIFICATE-----\nMIIFQTCCAymgAwIBAgITBmyf0pY1hp8KD+WGePhbJruKNzANBgkqhkiG9w0BAQwFADA5MQsw…",
            "-----BEGIN CERTIFICATE-----\nMIIClDCCAhqgAwIBAgIILCmcWxbtBZUwCgYIKoZIzj0EAwIwfzELMAkGA1UEBhMCVVMxDjAM…",
            "-----BEGIN CERTIFICATE-----\nMIIFdDCCA1ygAwIBAgIPAWdfJ9b+euPkrL4JWwWeMA0GCSqGSIb3DQEBCwUAMEQxCzAJBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIF8TCCA9mgAwIBAgIQALC3WhZIX7/hy/WL1xnmfTANBgkqhkiG9w0BAQsFADA4MQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFgzCCA2ugAwIBAgIORea7A4Mzw4VlSOb/RVEwDQYJKoZIhvcNAQEMBQAwTDEgMB4GA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIID3TCCAsWgAwIBAgIBADANBgkqhkiG9w0BAQsFADCBjzELMAkGA1UEBhMCVVMxEDAOBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIFszCCA5ugAwIBAgIUEwLV4kBMkkaGFmddtLu7sms+/BMwDQYJKoZIhvcNAQELBQAwYTEL…",
            "-----BEGIN CERTIFICATE-----\nMIIF6zCCA9OgAwIBAgIIVrYpzTS8ePYwDQYJKoZIhvcNAQELBQAwgYIxCzAJBgNVBAYTAlVT…",
            "-----BEGIN CERTIFICATE-----\nMIIFZjCCA06gAwIBAgIQCgFCgAAAAUUjz0Z8AAAAAjANBgkqhkiG9w0BAQsFADBNMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIICDzCCAZWgAwIBAgIUbmq8WapTvpg5Z6LSa6Q75m0c1towCgYIKoZIzj0EAwMwRzELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIICPzCCAcWgAwIBAgIQBVVWvPJepDU1w6QP1atFcjAKBggqhkjOPQQDAzBhMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIICjTCCAhSgAwIBAgIIdebfy8FoW6gwCgYIKoZIzj0EAwIwfDELMAkGA1UEBhMCVVMxDjAM…",
            "-----BEGIN CERTIFICATE-----\nMIICCTCCAY6gAwIBAgINAgPlwGjvYxqccpBQUjAKBggqhkjOPQQDAzBHMQswCQYDVQQGEwJV…",
            "-----BEGIN CERTIFICATE-----\nMIICCTCCAY6gAwIBAgINAgPluILrIPglJ209ZjAKBggqhkjOPQQDAzBHMQswCQYDVQQGEwJV…",
            "-----BEGIN CERTIFICATE-----\nMIICWTCCAd+gAwIBAgIQZvI9r4fei7FK6gxXMQHC7DAKBggqhkjOPQQDAzBlMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIFZjCCA06gAwIBAgIQCPm0eKj6ftpqMzeJ3nzPijANBgkqhkiG9w0BAQwFADBNMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIECjCCAvKgAwIBAgIJAMJ+QwRORz8ZMA0GCSqGSIb3DQEBCwUAMIGCMQswCQYDVQQGEwJI…",
            "-----BEGIN CERTIFICATE-----\nMIIFjTCCA3WgAwIBAgIQQAE0jMIAAAAAAAAAATzyxjANBgkqhkiG9w0BAQwFADBQMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIICVDCCAdugAwIBAgIQZ3SdjXfYO2rbIvT/WeK/zjAKBggqhkjOPQQDAzBsMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIDlDCCAnygAwIBAgIKMfXkYgxsWO3W2DANBgkqhkiG9w0BAQsFADBnMQswCQYDVQQGEwJJ…",
            "-----BEGIN CERTIFICATE-----\nMIICwzCCAkqgAwIBAgIBADAKBggqhkjOPQQDAjCBqjELMAkGA1UEBhMCR1IxDzANBgNVBAcT…",
            "-----BEGIN CERTIFICATE-----\nMIIDxTCCAq2gAwIBAgIBADANBgkqhkiG9w0BAQsFADCBgzELMAkGA1UEBhMCVVMxEDAOBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIEYzCCA0ugAwIBAgIBATANBgkqhkiG9w0BAQsFADCB0jELMAkGA1UEBhMCVFIxGDAWBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIEMzCCAxugAwIBAgIDCYPzMA0GCSqGSIb3DQEBCwUAME0xCzAJBgNVBAYTAkRFMRUwEwYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFcjCCA1qgAwIBAgIUZNtaDCBO6Ncpd8hQJ6JaJ90t8sswDQYJKoZIhvcNAQEMBQAwUTEL…",
            "-----BEGIN CERTIFICATE-----\nMIIFWjCCA0KgAwIBAgISEdK7udcjGJ5AXwqdLdDfJWfRMA0GCSqGSIb3DQEBDAUAMEYxCzAJ…",
            "-----BEGIN CERTIFICATE-----\nMIICjzCCAhWgAwIBAgIQXIuZxVqUxdJxVt7NiYDMJjAKBggqhkjOPQQDAzCBiDELMAkGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIIDdzCCAl+gAwIBAgIBADANBgkqhkiG9w0BAQsFADBdMQswCQYDVQQGEwJKUDElMCMGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIIF2DCCA8CgAwIBAgIQTKr5yttjb+Af907YWwOGnTANBgkqhkiG9w0BAQwFADCBhTELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIIFkDCCA3igAwIBAgIQBZsbV56OITLiOQe9p3d1XDANBgkqhkiG9w0BAQwFADBiMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIICbjCCAfOgAwIBAgIQYvYybOXE42hcG2LdnC6dlTAKBggqhkjOPQQDAzB4MQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIFuzCCA6OgAwIBAgIIVwoRl0LE48wwDQYJKoZIhvcNAQELBQAwazELMAkGA1UEBhMCSVQx…",
            "-----BEGIN CERTIFICATE-----\nMIID7zCCAtegAwIBAgIBADANBgkqhkiG9w0BAQsFADCBmDELMAkGA1UEBhMCVVMxEDAOBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIICJTCCAaugAwIBAgIQLBcIfWQqwP6FGFkGz7RK6zAKBggqhkjOPQQDAzBUMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIICQjCCAcmgAwIBAgIQNjqWjMlcsljN0AFdxeVXADAKBggqhkjOPQQDAzBjMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIGFDCCA/ygAwIBAgIIG3Dp0v+ubHEwDQYJKoZIhvcNAQELBQAwUTELMAkGA1UEBhMCRVMx…",
            "-----BEGIN CERTIFICATE-----\nMIIFQTCCAymgAwIBAgICDL4wDQYJKoZIhvcNAQELBQAwUTELMAkGA1UEBhMCVFcxEjAQBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIFzzCCA7egAwIBAgIUCBZfikyl7ADJk0DfxMauI7gcWqQwDQYJKoZIhvcNAQELBQAwbzEL…",
            "-----BEGIN CERTIFICATE-----\nMIIDuzCCAqOgAwIBAgIDBETAMA0GCSqGSIb3DQEBBQUAMH4xCzAJBgNVBAYTAlBMMSIwIAYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFjTCCA3WgAwIBAgIEGErM1jANBgkqhkiG9w0BAQsFADBWMQswCQYDVQQGEwJDTjEwMC4G…",
            "-----BEGIN CERTIFICATE-----\nMIIFYDCCA0igAwIBAgIQCgFCgAAAAUUjyES1AAAAAjANBgkqhkiG9w0BAQsFADBKMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFRzCCAy+gAwIBAgIJEQA0tk7GNi02MA0GCSqGSIb3DQEBCwUAMEExCzAJBgNVBAYTAlJP…",
            "-----BEGIN CERTIFICATE-----\nMIICGzCCAaGgAwIBAgIQQdKd0XLq7qeAwSxs6S+HUjAKBggqhkjOPQQDAzBPMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIICTDCCAdGgAwIBAgIJAIF6LO+PI3pEMAoGCCqGSM49BAMDMFoxCzAJBgNVBAYTAkpQMSYw…",
            "-----BEGIN CERTIFICATE-----\nMIICZTCCAeugAwIBAgIQeI8nXIESUiClBNAt3bpz9DAKBggqhkjOPQQDAzB0MQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIDtTCCAp2gAwIBAgIQdrEgUnTwhYdGs/gjGvbCwDANBgkqhkiG9w0BAQsFADBtMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIEFTCCAv2gAwIBAgIGSUEs5AAQMA0GCSqGSIb3DQEBCwUAMIGnMQswCQYDVQQGEwJIVTER…",
            "-----BEGIN CERTIFICATE-----\nMIIFRzCCAy+gAwIBAgIRAI4P+UuQcWhlM1T01EQ5t+AwDQYJKoZIhvcNAQELBQAwPTELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIIFijCCA3KgAwIBAgIQdY39i658BwD6qSWn4cetFDANBgkqhkiG9w0BAQwFADBfMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIDljCCAn6gAwIBAgIQC5McOtY5Z+pnI7/Dr5r0SzANBgkqhkiG9w0BAQsFADBlMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIICRjCCAc2gAwIBAgIQC6Fa+h3foLVJRK/NJKBs7DAKBggqhkjOPQQDAzBlMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIFZDCCA0ygAwIBAgIQU9XP5hmTC/srBRLYwiqipDANBgkqhkiG9w0BAQwFADBMMS4wLAYD…",
            "-----BEGIN CERTIFICATE-----\nMIICaTCCAe+gAwIBAgIQISpWDK7aDKtARb8roi066jAKBggqhkjOPQQDAzBtMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIF3TCCA8WgAwIBAgIIeyyb0xaAMpkwDQYJKoZIhvcNAQELBQAwfDELMAkGA1UEBhMCVVMx…",
            "-----BEGIN CERTIFICATE-----\nMIIFYDCCA0igAwIBAgIULvWbAiin23r/1aOp7r0DoM8Sah0wDQYJKoZIhvcNAQELBQAwSDEL…",
            "-----BEGIN CERTIFICATE-----\nMIIFojCCA4qgAwIBAgIUAZQwHqIL3fXFMyqxQ0Rx+NZQTQ0wDQYJKoZIhvcNAQEMBQAwaTEL…",
            "-----BEGIN CERTIFICATE-----\nMIIFVjCCAz6gAwIBAgIUQ+NxE9izWRRdt86M/TX9b7wFjUUwDQYJKoZIhvcNAQELBQAwQzEL…",
            "-----BEGIN CERTIFICATE-----\nMIIFYDCCA0igAwIBAgIUeFhfLq0sGUvjNwc1NBMotZbUZZMwDQYJKoZIhvcNAQELBQAwSDEL…",
            "-----BEGIN CERTIFICATE-----\nMIIFqTCCA5GgAwIBAgIQaSYJfoBLTKCnjHhiU19abzANBgkqhkiG9w0BAQ0FADBIMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIDQTCCAimgAwIBAgITBmyfz5m/jAo54vB4ikPmljZbyjANBgkqhkiG9w0BAQsFADA5MQsw…",
            "-----BEGIN CERTIFICATE-----\nMIIFiTCCA3GgAwIBAgIQb77arXO9CEDii02+1PdbkTANBgkqhkiG9w0BAQsFADBOMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFYDCCA0igAwIBAgIURFc0JFuBiZs18s64KztbpybwdSgwDQYJKoZIhvcNAQELBQAwSDEL…",
            "-----BEGIN CERTIFICATE-----\nMIIDwzCCAqugAwIBAgIBATANBgkqhkiG9w0BAQsFADCBgjELMAkGA1UEBhMCREUxKzApBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIFazCCA1OgAwIBAgIRAIIQz7DSQONZRGPgu2OCiwAwDQYJKoZIhvcNAQELBQAwTzELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIIFWTCCA0GgAwIBAgIBAjANBgkqhkiG9w0BAQsFADBOMQswCQYDVQQGEwJOTzEdMBsGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIIH0zCCBbugAwIBAgIIXsO3pkN/pOAwDQYJKoZIhvcNAQEFBQAwQjESMBAGA1UEAwwJQUND…",
            "-----BEGIN CERTIFICATE-----\nMIIFgzCCA2ugAwIBAgIQVaXZZ5Qoxu0M+ifdWwFNGDANBgkqhkiG9w0BAQwFADBLMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFRjCCAy6gAwIBAgIQXd+x2lqj7V2+WmUgZQOQ7zANBgkqhkiG9w0BAQsFADA9MQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIGCzCCA/OgAwIBAgIBADANBgkqhkiG9w0BAQsFADCBpjELMAkGA1UEBhMCR1IxDzANBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIDcjCCAlqgAwIBAgIUPopdB+xV0jLVt+O2XwHrLdzk1uQwDQYJKoZIhvcNAQELBQAwUTEL…",
            "-----BEGIN CERTIFICATE-----\nMIIB3DCCAYOgAwIBAgINAgPlfvU/k/2lCSGypjAKBggqhkjOPQQDAjBQMSQwIgYDVQQLExtH…",
            "-----BEGIN CERTIFICATE-----\nMIICFTCCAZugAwIBAgIQPZg7pmY9kGP3fiZXOATvADAKBggqhkjOPQQDAzBMMS4wLAYDVQQD…",
            "-----BEGIN CERTIFICATE-----\nMIIB9zCCAX2gAwIBAgIQBiUzsUcDMydc+Y2aub/M+DAKBggqhkjOPQQDAzA9MQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIICzzCCAjGgAwIBAgINAOhvGHvWOWuYSkmYCjAKBggqhkjOPQQDBDB1MQswCQYDVQQGEwJI…",
            "-----BEGIN CERTIFICATE-----\nMIIF0jCCA7qgAwIBAgIQIdbQSk8lD8kyN/yqXhKN6TANBgkqhkiG9w0BAQ0FADCBgDELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIICKzCCAbGgAwIBAgIKe3G2gla4EnycqDAKBggqhkjOPQQDAzBaMQswCQYDVQQGEwJVUzET…",
            "-----BEGIN CERTIFICATE-----\nMIICVTCCAdygAwIBAgIUTyNkuI6XY57GU4HBdk7LKnQV1tcwCgYIKoZIzj0EAwMwWjELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIICQDCCAeWgAwIBAgIMAVRI7yH9l1kN9QQKMAoGCCqGSM49BAMCMHExCzAJBgNVBAYTAkhV…",
            "-----BEGIN CERTIFICATE-----\nMIIDezCCAmOgAwIBAgIBATANBgkqhkiG9w0BAQUFADBfMQswCQYDVQQGEwJUVzESMBAGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIIFiDCCA3CgAwIBAgIIfQmX/vBH6nowDQYJKoZIhvcNAQELBQAwYjELMAkGA1UEBhMCQ04x…",
            "-----BEGIN CERTIFICATE-----\nMIICMTCCAbegAwIBAgIUNnThTXxlE8msg1UloD5Sfi9QaMcwCgYIKoZIzj0EAwMwWDELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIICOjCCAcCgAwIBAgIQFAP1q/s3ixdAW+JDsqXRxDAKBggqhkjOPQQDAzBOMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIFqDCCA5CgAwIBAgIQHtOXCV/YtLNHcB6qvn9FszANBgkqhkiG9w0BAQwFADBlMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIICOjCCAcGgAwIBAgIQQvLM2htpN0RfFf51KBC49DAKBggqhkjOPQQDAzBfMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIDjjCCAnagAwIBAgIQAzrx5qcRqaC7KGSxHQn65TANBgkqhkiG9w0BAQsFADBhMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIDXzCCAkegAwIBAgILBAAAAAABIVhTCKIwDQYJKoZIhvcNAQELBQAwTDEgMB4GA1UECxMX…",
            "-----BEGIN CERTIFICATE-----\nMIICCzCCAZGgAwIBAgISEdK7ujNu1LzmJGjFDYQdmOhDMAoGCCqGSM49BAMDMEYxCzAJBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIFgjCCA2qgAwIBAgIPAYvSUKtCVSxHWr2h3BrFMA0GCSqGSIb3DQEBDAUAMEsxCzAJBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIFWjCCA0KgAwIBAgIQT9Irj/VkyDOeTzRYZiNwYDANBgkqhkiG9w0BAQsFADBHMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIGWzCCBEOgAwIBAgIRAMrpG4nxVQMNo+ZBbcTjpuEwDQYJKoZIhvcNAQELBQAwWjELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIIFVzCCAz+gAwIBAgINAgPlk28xsBNJiGuiFzANBgkqhkiG9w0BAQwFADBHMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIFpDCCA4ygAwIBAgIQOcqTHO9D88aOk8f0ZIk4fjANBgkqhkiG9w0BAQsFADBsMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFpTCCA42gAwIBAgIUZPYOZXdhaqs7tOqFhLuxibhxkw8wDQYJKoZIhvcNAQEMBQAwWjEL…",
            "-----BEGIN CERTIFICATE-----\nMIIFaTCCA1GgAwIBAgIJAJK4iNuwisFjMA0GCSqGSIb3DQEBCwUAMFIxCzAJBgNVBAYTAlNL…",
            "-----BEGIN CERTIFICATE-----\nMIIB8jCCAXigAwIBAgITBmyf18G7EEwpQ+Vxe3ssyBrBDjAKBggqhkjOPQQDAzA5MQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIC2zCCAmCgAwIBAgIQfMmPK4TX3+oPyWWa00tNljAKBggqhkjOPQQDAzBIMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIICODCCAb6gAwIBAgIJANZdm7N4gS7rMAoGCCqGSM49BAMDMGExCzAJBgNVBAYTAkpQMSUw…",
            "-----BEGIN CERTIFICATE-----\nMIICIzCCAamgAwIBAgIUFhXHw9hJp75pDIqI7fBw+d23PocwCgYIKoZIzj0EAwMwUTELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIIF3jCCA8agAwIBAgIQAf1tMPyjylGoG7xkDjUDLTANBgkqhkiG9w0BAQwFADCBiDELMAkG…",
            "-----BEGIN CERTIFICATE-----\nMIIFgzCCA2ugAwIBAgIPXZONMGc2yAYdGsdUhGkHMA0GCSqGSIb3DQEBCwUAMDsxCzAJBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIFWTCCA0GgAwIBAgIBAjANBgkqhkiG9w0BAQsFADBOMQswCQYDVQQGEwJOTzEdMBsGA1UE…",
            "-----BEGIN CERTIFICATE-----\nMIIEQzCCAyugAwIBAgIDCYP0MA0GCSqGSIb3DQEBCwUAMFAxCzAJBgNVBAYTAkRFMRUwEwYD…",
            "-----BEGIN CERTIFICATE-----\nMIICNTCCAbqgAwIBAgIQI/nD1jWvjyhLH/BU6n6XnTAKBggqhkjOPQQDAzBLMQswCQYDVQQG…",
            "-----BEGIN CERTIFICATE-----\nMIIFszCCA5ugAwIBAgIQIZxULej27HF3+k7ow3BXlzANBgkqhkiG9w0BAQwFADBjMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFajCCA1KgAwIBAgIQLd2szmKXlKFD6LDNdmpeYDANBgkqhkiG9w0BAQsFADBPMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIFdDCCA1ygAwIBAgIQVW9l47TZkGobCdFsPsBsIDANBgkqhkiG9w0BAQsFADBUMQswCQYD…",
            "-----BEGIN CERTIFICATE-----\nMIIF7zCCA9egAwIBAgIIDdPjvGz5a7EwDQYJKoZIhvcNAQELBQAwgYQxEjAQBgNVBAUTCUc2…",
            "-----BEGIN CERTIFICATE-----\nMIIDwzCCAqugAwIBAgIBATANBgkqhkiG9w0BAQsFADCBgjELMAkGA1UEBhMCREUxKzApBgNV…",
            "-----BEGIN CERTIFICATE-----\nMIIFwDCCA6igAwIBAgIQHr9ZULjJgDdMBvfrVU+17TANBgkqhkiG9w0BAQ0FADB6MQswCQYD…"
        ],
        SecurePair: <ref *13> class SecurePair {},
        Server: <ref *14> ƒ Server(length: 2) {},
        setDefaultCACertificates: <ref *15> ƒ setDefaultCACertificates(length: 1) {},
        TLSSocket: <ref *16> ƒ TLSSocket(length: 2) {}
    },
    DEFAULT_CIPHERS: "AES256-GCM-SHA384:AES128-GCM-SHA256:TLS_CHACHA20_POLY1305_SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE…",
    DEFAULT_ECDH_CURVE: "auto",
    DEFAULT_MAX_VERSION: "TLSv1.3",
    DEFAULT_MIN_VERSION: "TLSv1.2",
    getCACertificates: [Circular: *10],
    getCiphers: [Circular: *11],
    rootCertificates: [Circular: *12],
    SecurePair: [Circular: *13],
    Server: [Circular: *14],
    setDefaultCACertificates: [Circular: *15],
    TLSSocket: [Circular: *16]
}
```

</td>
    </tr>
  </table>
</details>

<details id="trace_events">
  <summary><code>trace_events</code> — ✅ Identical</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    createTracing: <ref *2> ƒ createTracing(length: 1) {},
    default: {
        createTracing: [Circular: *2],
        getEnabledCategories: <ref *4> ƒ getEnabledCategories(length: 0) {}
    },
    getEnabledCategories: [Circular: *4]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    createTracing: <ref *2> ƒ createTracing(length: 1) {},
    default: {
        createTracing: [Circular: *2],
        getEnabledCategories: <ref *4> ƒ getEnabledCategories(length: 0) {}
    },
    getEnabledCategories: [Circular: *4]
}
```

</td>
    </tr>
  </table>
</details>

<details id="tty">
  <summary><code>tty</code> — ✅ Identical</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    default: {
        isatty: <ref *3> ƒ isatty(length: 1) {},
        ReadStream: <ref *4> ƒ ReadStream(length: 2) {},
        WriteStream: <ref *5> ƒ WriteStream(length: 1) {}
    },
    isatty: [Circular: *3],
    ReadStream: [Circular: *4],
    WriteStream: [Circular: *5]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    default: {
        isatty: <ref *3> ƒ isatty(length: 1) {},
        ReadStream: <ref *4> ƒ ReadStream(length: 2) {},
        WriteStream: <ref *5> ƒ WriteStream(length: 1) {}
    },
    isatty: [Circular: *3],
    ReadStream: [Circular: *4],
    WriteStream: [Circular: *5]
}
```

</td>
    </tr>
  </table>
</details>

<details id="url">
  <summary><code>url</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    default: {
        domainToASCII: <ref *3> ƒ domainToASCII(length: 1) {},
        domainToUnicode: <ref *4> ƒ domainToUnicode(length: 1) {},
        fileURLToPath: <ref *5> ƒ fileURLToPath(length: 1) {},
        fileURLToPathBuffer: <ref *6> ƒ fileURLToPathBuffer(length: 1) {},
        format: <ref *7> ƒ urlFormat(length: 2) {},
        parse: <ref *8> ƒ urlParse(length: 3) {},
        pathToFileURL: <ref *9> ƒ pathToFileURL(length: 2) {},
        resolve: <ref *10> ƒ urlResolve(length: 2) {},
        resolveObject: <ref *11> ƒ urlResolveObject(length: 2) {},
        Url: <ref *12> ƒ Url(length: 0) {},
        URL: <ref *13> class URL {
            canParse: ƒ canParse(length: 1) {},
            createObjectURL: ƒ createObjectURL(length: 1) {},
            parse: ƒ parse(length: 1) {},
            revokeObjectURL: ƒ revokeObjectURL(length: 1) {}
        },
        URLPattern: <ref *18> ƒ URLPattern(length: 0) {},
        URLSearchParams: <ref *19> class URLSearchParams {},
        urlToHttpOptions: <ref *20> ƒ urlToHttpOptions(length: 1) {}
    },
    domainToASCII: [Circular: *3],
    domainToUnicode: [Circular: *4],
    fileURLToPath: [Circular: *5],
    fileURLToPathBuffer: [Circular: *6],
    format: [Circular: *7],
    parse: [Circular: *8],
    pathToFileURL: [Circular: *9],
    resolve: [Circular: *10],
    resolveObject: [Circular: *11],
    Url: [Circular: *12],
    URL: [Circular: *13],
    URLPattern: [Circular: *18],
    URLSearchParams: [Circular: *19],
    urlToHttpOptions: [Circular: *20]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    default: {
        domainToASCII: <ref *3> ƒ domainToASCII(length: 1) {},
        domainToUnicode: <ref *4> ƒ domainToUnicode(length: 1) {},
        fileURLToPath: <ref *5> ƒ fileURLToPath(length: 1) {},
        fileURLToPathBuffer: <ref *6> ƒ fileURLToPathBuffer(length: 1) {},
        format: <ref *7> ƒ format(length: 2) {},
        parse: <ref *8> ƒ parse(length: 3) {},
        pathToFileURL: <ref *9> ƒ pathToFileURL(length: 1) {},
        resolve: <ref *10> ƒ resolve(length: 2) {},
        resolveObject: <ref *11> ƒ resolveObject(length: 2) {},
        Url: <ref *12> class Url {},
        URL: <ref *13> class URL {
            canParse: ƒ canParse(length: 1) {},
            createObjectURL: ƒ createObjectURL(length: 1) {},
            parse: ƒ parse(length: 1) {},
            revokeObjectURL: ƒ revokeObjectURL(length: 1) {}
        },
        URLSearchParams: <ref *18> class URLSearchParams {},
        urlToHttpOptions: <ref *19> ƒ urlToHttpOptions(length: 1) {}
    },
    domainToASCII: [Circular: *3],
    domainToUnicode: [Circular: *4],
    fileURLToPath: [Circular: *5],
    fileURLToPathBuffer: [Circular: *6],
    format: [Circular: *7],
    parse: [Circular: *8],
    pathToFileURL: [Circular: *9],
    resolve: [Circular: *10],
    resolveObject: [Circular: *11],
    Url: [Circular: *12],
    URL: [Circular: *13],
    URLSearchParams: [Circular: *18],
    urlToHttpOptions: [Circular: *19]
}
```

</td>
    </tr>
  </table>
</details>

<details id="util">
  <summary><code>util</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    _errnoException: <ref *2> ƒ _errnoException(length: 0) {},
    _exceptionWithHostPort: <ref *3> ƒ _exceptionWithHostPort(length: 0) {},
    _extend: <ref *4> ƒ deprecated(length: 2) {},
    aborted: <ref *5> async ƒ aborted(length: 2) {},
    callbackify: <ref *6> ƒ callbackify(length: 1) {},
    convertProcessSignalToExitCode: <ref *7> ƒ convertProcessSignalToExitCode(length: 1) {},
    debounce: <ref *8> ƒ debounce(length: 2) {},
    debug: <ref *9> ƒ debuglog(length: 2) {},
    debuglog: [Circular: *9],
    default: {
        _errnoException: [Circular: *2],
        _exceptionWithHostPort: [Circular: *3],
        _extend: [Circular: *4],
        [get] aborted: [Circular: *5],
        callbackify: [Circular: *6],
        convertProcessSignalToExitCode: [Circular: *7],
        [get] debounce: [Circular: *8],
        debug: [Circular: *9],
        debuglog: [Circular: *9],
        deprecate: <ref *11> ƒ deprecate(length: 3) {},
        diff: <ref *12> ƒ diff(length: 2) {},
        format: <ref *13> ƒ format(length: 0) {},
        formatWithOptions: <ref *14> ƒ formatWithOptions(length: 1) {},
        getCallSites: <ref *15> ƒ getCallSites(length: 0) {},
        getSystemErrorMap: <ref *16> ƒ getSystemErrorMap(length: 0) {},
        getSystemErrorMessage: <ref *17> ƒ getSystemErrorMessage(length: 1) {},
        getSystemErrorName: <ref *18> ƒ getSystemErrorName(length: 1) {},
        inherits: <ref *19> ƒ inherits(length: 2) {},
        inspect: <ref *20> ƒ inspect(length: 2) {
            colors: [Object: null prototype] {
                bgBlack: [
                    40,
                    49
                ],
                bgBlue: [
                    44,
                    49
                ],
                bgBlueBright: [
                    104,
                    49
                ],
                bgCyan: [
                    46,
                    49
                ],
                bgCyanBright: [
                    106,
                    49
                ],
                bgGray: [
                    100,
                    49
                ],
                bgGreen: [
                    42,
                    49
                ],
                bgGreenBright: [
                    102,
                    49
                ],
                bgMagenta: [
                    45,
                    49
                ],
                bgMagentaBright: [
                    105,
                    49
                ],
                bgRed: [
                    41,
                    49
                ],
                bgRedBright: [
                    101,
                    49
                ],
                bgWhite: [
                    47,
                    49
                ],
                bgWhiteBright: [
                    107,
                    49
                ],
                bgYellow: [
                    43,
                    49
                ],
                bgYellowBright: [
                    103,
                    49
                ],
                black: [
                    30,
                    39
                ],
                blink: [
                    5,
                    25
                ],
                blue: [
                    34,
                    39
                ],
                blueBright: [
                    94,
                    39
                ],
                bold: [
                    1,
                    22
                ],
                cyan: [
                    36,
                    39
                ],
                cyanBright: [
                    96,
                    39
                ],
                dim: [
                    2,
                    22
                ],
                doubleunderline: [
                    21,
                    24
                ],
                framed: [
                    51,
                    54
                ],
                gray: [
                    90,
                    39
                ],
                green: [
                    32,
                    39
                ],
                greenBright: [
                    92,
                    39
                ],
                hidden: [
                    8,
                    28
                ],
                inverse: [
                    7,
                    27
                ],
                italic: [
                    3,
                    23
                ],
                magenta: [
                    35,
                    39
                ],
                magentaBright: [
                    95,
                    39
                ],
                overlined: [
                    53,
                    55
                ],
                red: [
                    31,
                    39
                ],
                redBright: [
                    91,
                    39
                ],
                reset: [
                    0,
                    0
                ],
                strikethrough: [
                    9,
                    29
                ],
                underline: [
                    4,
                    24
                ],
                white: [
                    37,
                    39
                ],
                whiteBright: [
                    97,
                    39
                ],
                yellow: [
                    33,
                    39
                ],
                yellowBright: [
                    93,
                    39
                ]
            },
            custom: Symbol(nodejs.util.inspect.custom),
            styles: [Object: null prototype] {
                bigint: "yellow",
                boolean: "yellow",
                date: "magenta",
                module: "underline",
                null: "bold",
                number: "yellow",
                regexp: ƒ highlightRegExp(length: 1) {
                    colors: [
                        "green",
                        "red",
                        "yellow",
                        "cyan",
                        "magenta"
                    ]
                },
                special: "cyan",
                string: "green",
                symbol: "green",
                undefined: "grey"
            }
        },
        isArray: <ref *69> ƒ deprecated(length: 1) {},
        isDeepStrictEqual: <ref *70> ƒ isDeepStrictEqual(length: 3) {},
        isPartialDeepStrictEqual: <ref *71> ƒ isPartialDeepStrictEqual(length: 2) {},
        markPromiseAsHandled: <ref *72> ƒ markPromiseAsHandled(length: 1) {},
        MIMEParams: <ref *73> class MIMEParams {},
        MIMEType: <ref *74> class MIMEType {},
        parseArgs: <ref *75> ƒ parseArgs(length: 0) {},
        parseEnv: <ref *76> ƒ parseEnv(length: 1) {},
        promisify: <ref *77> ƒ promisify(length: 1) {
            custom: Symbol(nodejs.util.promisify.custom)
        },
        setTraceSigInt: <ref *78> ƒ setTraceSigInt(length: 1) {},
        stripVTControlCharacters: <ref *79> ƒ stripVTControlCharacters(length: 1) {},
        styleText: <ref *80> ƒ styleText(length: 3) {},
        TextDecoder: <ref *81> class TextDecoder {},
        TextEncoder: <ref *82> class TextEncoder {},
        [get] throttle: <ref *83> ƒ throttle(length: 3) {},
        toUSVString: <ref *84> ƒ toUSVString(length: 1) {},
        [get] transferableAbortController: <ref *85> ƒ transferableAbortController(length: 0) {},
        [get] transferableAbortSignal: <ref *86> ƒ transferableAbortSignal(length: 1) {},
        types: <ref *87> {
            isAnyArrayBuffer: ƒ (length: 0) {},
            isArgumentsObject: ƒ (length: 0) {},
            isArrayBuffer: ƒ (length: 0) {},
            isArrayBufferView: ƒ isView(length: 1) {},
            isAsyncFunction: ƒ (length: 0) {},
            isBigInt64Array: ƒ isBigInt64Array(length: 1) {},
            isBigIntObject: ƒ (length: 0) {},
            isBigUint64Array: ƒ isBigUint64Array(length: 1) {},
            isBooleanObject: ƒ (length: 0) {},
            isBoxedPrimitive: ƒ (length: 0) {},
            isCryptoKey: ƒ isCryptoKey(length: 1) {},
            isDataView: ƒ isDataView(length: 1) {},
            isDate: ƒ (length: 0) {},
            isExternal: ƒ (length: 0) {},
            isFloat16Array: ƒ isFloat16Array(length: 1) {},
            isFloat32Array: ƒ isFloat32Array(length: 1) {},
            isFloat64Array: ƒ isFloat64Array(length: 1) {},
            isGeneratorFunction: ƒ (length: 0) {},
            isGeneratorObject: ƒ (length: 0) {},
            isInt16Array: ƒ isInt16Array(length: 1) {},
            isInt32Array: ƒ isInt32Array(length: 1) {},
            isInt8Array: ƒ isInt8Array(length: 1) {},
            isKeyObject: ƒ isKeyObject(length: 1) {},
            isMap: ƒ (length: 0) {},
            isMapIterator: ƒ (length: 0) {},
            isModuleNamespaceObject: ƒ (length: 0) {},
            isNativeError: ƒ (length: 0) {},
            isNumberObject: ƒ (length: 0) {},
            isPromise: ƒ (length: 0) {},
            isProxy: ƒ (length: 0) {},
            isRegExp: ƒ (length: 0) {},
            isSet: ƒ (length: 0) {},
            isSetIterator: ƒ (length: 0) {},
            isSharedArrayBuffer: ƒ (length: 0) {},
            isStringObject: ƒ (length: 0) {},
            isSymbolObject: ƒ (length: 0) {},
            isTypedArray: ƒ isTypedArray(length: 1) {},
            isUint16Array: ƒ isUint16Array(length: 1) {},
            isUint32Array: ƒ isUint32Array(length: 1) {},
            isUint8Array: ƒ isUint8Array(length: 1) {},
            isUint8ClampedArray: ƒ isUint8ClampedArray(length: 1) {},
            isWeakMap: ƒ (length: 0) {},
            isWeakSet: ƒ (length: 0) {}
        }
    },
    deprecate: [Circular: *11],
    diff: [Circular: *12],
    format: [Circular: *13],
    formatWithOptions: [Circular: *14],
    getCallSites: [Circular: *15],
    getSystemErrorMap: [Circular: *16],
    getSystemErrorMessage: [Circular: *17],
    getSystemErrorName: [Circular: *18],
    inherits: [Circular: *19],
    inspect: [Circular: *20],
    isArray: [Circular: *69],
    isDeepStrictEqual: [Circular: *70],
    isPartialDeepStrictEqual: [Circular: *71],
    markPromiseAsHandled: [Circular: *72],
    MIMEParams: [Circular: *73],
    MIMEType: [Circular: *74],
    parseArgs: [Circular: *75],
    parseEnv: [Circular: *76],
    promisify: [Circular: *77],
    setTraceSigInt: [Circular: *78],
    stripVTControlCharacters: [Circular: *79],
    styleText: [Circular: *80],
    TextDecoder: [Circular: *81],
    TextEncoder: [Circular: *82],
    throttle: [Circular: *83],
    toUSVString: [Circular: *84],
    transferableAbortController: [Circular: *85],
    transferableAbortSignal: [Circular: *86],
    types: [Circular: *87]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    _extend: <ref *2> ƒ _extend(length: 2) {},
    aborted: <ref *3> async ƒ aborted(length: 2) {},
    callbackify: <ref *4> ƒ callbackify(length: 1) {},
    convertProcessSignalToExitCode: <ref *5> ƒ convertProcessSignalToExitCode(length: 1) {},
    debug: <ref *6> ƒ debuglog(length: 2) {},
    debuglog: [Circular: *6],
    default: {
        _extend: [Circular: *2],
        aborted: [Circular: *3],
        callbackify: [Circular: *4],
        convertProcessSignalToExitCode: [Circular: *5],
        debug: [Circular: *6],
        debuglog: [Circular: *6],
        deprecate: <ref *8> ƒ deprecate(length: 3) {},
        diff: <ref *9> ƒ diff(length: 2) {},
        format: <ref *10> ƒ format(length: 0) {},
        formatWithOptions: <ref *11> ƒ formatWithOptions(length: 1) {},
        getCallSites: <ref *12> ƒ getCallSites(length: 0) {},
        getSystemErrorMap: <ref *13> ƒ getSystemErrorMap(length: 0) {},
        getSystemErrorMessage: <ref *14> ƒ getSystemErrorMessage(length: 1) {},
        getSystemErrorName: <ref *15> ƒ getSystemErrorName(length: 1) {},
        inherits: <ref *16> ƒ inherits(length: 2) {},
        inspect: <ref *17> ƒ inspect(length: 2) {
            colors: {
                bgBlack: [
                    40,
                    49
                ],
                bgBlue: [
                    44,
                    49
                ],
                bgBlueBright: [
                    104,
                    49
                ],
                bgCyan: [
                    46,
                    49
                ],
                bgCyanBright: [
                    106,
                    49
                ],
                bgGray: [
                    100,
                    49
                ],
                bgGreen: [
                    42,
                    49
                ],
                bgGreenBright: [
                    102,
                    49
                ],
                bgMagenta: [
                    45,
                    49
                ],
                bgMagentaBright: [
                    105,
                    49
                ],
                bgRed: [
                    41,
                    49
                ],
                bgRedBright: [
                    101,
                    49
                ],
                bgWhite: [
                    47,
                    49
                ],
                bgWhiteBright: [
                    107,
                    49
                ],
                bgYellow: [
                    43,
                    49
                ],
                bgYellowBright: [
                    103,
                    49
                ],
                black: [
                    30,
                    39
                ],
                blink: [
                    5,
                    25
                ],
                blue: [
                    34,
                    39
                ],
                blueBright: [
                    94,
                    39
                ],
                bold: [
                    1,
                    22
                ],
                cyan: [
                    36,
                    39
                ],
                cyanBright: [
                    96,
                    39
                ],
                dim: [
                    2,
                    22
                ],
                doubleunderline: [
                    21,
                    24
                ],
                framed: [
                    51,
                    54
                ],
                gray: [
                    90,
                    39
                ],
                green: [
                    32,
                    39
                ],
                greenBright: [
                    92,
                    39
                ],
                hidden: [
                    8,
                    28
                ],
                inverse: [
                    7,
                    27
                ],
                italic: [
                    3,
                    23
                ],
                magenta: [
                    35,
                    39
                ],
                magentaBright: [
                    95,
                    39
                ],
                overlined: [
                    53,
                    55
                ],
                red: [
                    31,
                    39
                ],
                redBright: [
                    91,
                    39
                ],
                reset: [
                    0,
                    0
                ],
                strikethrough: [
                    9,
                    29
                ],
                underline: [
                    4,
                    24
                ],
                white: [
                    37,
                    39
                ],
                whiteBright: [
                    97,
                    39
                ],
                yellow: [
                    33,
                    39
                ],
                yellowBright: [
                    93,
                    39
                ]
            },
            custom: Symbol(nodejs.util.inspect.custom),
            styles: [Object: null prototype] {
                bigint: "yellow",
                boolean: "yellow",
                date: "magenta",
                module: "underline",
                null: "bold",
                number: "yellow",
                regexp: "red",
                special: "cyan",
                string: "green",
                symbol: "green",
                undefined: "grey"
            }
        },
        isArray: <ref *64> ƒ isArray(length: 1) {},
        isDeepStrictEqual: <ref *65> ƒ isDeepStrictEqual(length: 3) {},
        log: <ref *66> ƒ log(length: 0) {},
        MIMEParams: <ref *67> class MIMEParams {},
        MIMEType: <ref *68> class MIMEType {},
        parseArgs: <ref *69> ƒ parseArgs(length: 0) {},
        parseEnv: <ref *70> ƒ parseEnv(length: 1) {},
        promisify: <ref *71> ƒ promisify(length: 1) {
            custom: Symbol(nodejs.util.promisify.custom)
        },
        queryObjects: <ref *72> ƒ queryObjects(length: 2) {},
        setTraceSigInt: <ref *73> ƒ setTraceSigInt(length: 1) {},
        stripVTControlCharacters: <ref *74> ƒ stripVTControlCharacters(length: 1) {},
        styleText: <ref *75> ƒ styleText(length: 3) {},
        TextDecoder: <ref *76> class TextDecoder {},
        TextEncoder: <ref *77> class TextEncoder {},
        toUSVString: <ref *78> ƒ toUSVString(length: 1) {},
        transferableAbortController: <ref *79> ƒ transferableAbortController(length: 0) {},
        transferableAbortSignal: <ref *80> ƒ transferableAbortSignal(length: 1) {},
        types: <ref *81> {
            isAnyArrayBuffer: ƒ isAnyArrayBuffer(length: 1) {},
            isArgumentsObject: ƒ isArgumentsObject(length: 1) {},
            isArrayBuffer: ƒ isArrayBuffer(length: 1) {},
            isArrayBufferView: ƒ isArrayBufferView(length: 1) {},
            isAsyncFunction: ƒ isAsyncFunction(length: 1) {},
            isBigInt64Array: ƒ isBigInt64Array(length: 1) {},
            isBigIntObject: ƒ isBigIntObject(length: 1) {},
            isBigUint64Array: ƒ isBigUint64Array(length: 1) {},
            isBooleanObject: ƒ isBooleanObject(length: 1) {},
            isBoxedPrimitive: ƒ isBoxedPrimitive(length: 1) {},
            isCryptoKey: ƒ isCryptoKey(length: 1) {},
            isDataView: ƒ isDataView(length: 1) {},
            isDate: ƒ isDate(length: 1) {},
            isFloat16Array: ƒ isFloat16Array(length: 1) {},
            isFloat32Array: ƒ isFloat32Array(length: 1) {},
            isFloat64Array: ƒ isFloat64Array(length: 1) {},
            isGeneratorFunction: ƒ isGeneratorFunction(length: 1) {},
            isGeneratorObject: ƒ isGeneratorObject(length: 1) {},
            isInt16Array: ƒ isInt16Array(length: 1) {},
            isInt32Array: ƒ isInt32Array(length: 1) {},
            isInt8Array: ƒ isInt8Array(length: 1) {},
            isKeyObject: ƒ isKeyObject(length: 1) {},
            isMap: ƒ isMap(length: 1) {},
            isMapIterator: ƒ isMapIterator(length: 1) {},
            isModuleNamespaceObject: ƒ isModuleNamespaceObject(length: 1) {},
            isNativeError: ƒ isNativeError(length: 1) {},
            isNumberObject: ƒ isNumberObject(length: 1) {},
            isPromise: ƒ isPromise(length: 1) {},
            isProxy: ƒ isProxy(length: 1) {},
            isRegExp: ƒ isRegExp(length: 1) {},
            isSet: ƒ isSet(length: 1) {},
            isSetIterator: ƒ isSetIterator(length: 1) {},
            isSharedArrayBuffer: ƒ isSharedArrayBuffer(length: 1) {},
            isStringObject: ƒ isStringObject(length: 1) {},
            isSymbolObject: ƒ isSymbolObject(length: 1) {},
            isTypedArray: ƒ isTypedArray(length: 1) {},
            isUint16Array: ƒ isUint16Array(length: 1) {},
            isUint32Array: ƒ isUint32Array(length: 1) {},
            isUint8Array: ƒ isUint8Array(length: 1) {},
            isUint8ClampedArray: ƒ isUint8ClampedArray(length: 1) {},
            isWeakMap: ƒ isWeakMap(length: 1) {},
            isWeakSet: ƒ isWeakSet(length: 1) {}
        }
    },
    deprecate: [Circular: *8],
    diff: [Circular: *9],
    format: [Circular: *10],
    formatWithOptions: [Circular: *11],
    getCallSites: [Circular: *12],
    getSystemErrorMap: [Circular: *13],
    getSystemErrorMessage: [Circular: *14],
    getSystemErrorName: [Circular: *15],
    inherits: [Circular: *16],
    inspect: [Circular: *17],
    isArray: [Circular: *64],
    isDeepStrictEqual: [Circular: *65],
    log: [Circular: *66],
    MIMEParams: [Circular: *67],
    MIMEType: [Circular: *68],
    parseArgs: [Circular: *69],
    parseEnv: [Circular: *70],
    promisify: [Circular: *71],
    queryObjects: [Circular: *72],
    setTraceSigInt: [Circular: *73],
    stripVTControlCharacters: [Circular: *74],
    styleText: [Circular: *75],
    TextDecoder: [Circular: *76],
    TextEncoder: [Circular: *77],
    toUSVString: [Circular: *78],
    transferableAbortController: [Circular: *79],
    transferableAbortSignal: [Circular: *80],
    types: [Circular: *81]
}
```

</td>
    </tr>
  </table>
</details>

<details id="util-types">
  <summary><code>util/types</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    default: {
        isAnyArrayBuffer: <ref *3> ƒ (length: 0) {},
        isArgumentsObject: <ref *4> ƒ (length: 0) {},
        isArrayBuffer: <ref *5> ƒ (length: 0) {},
        isArrayBufferView: <ref *6> ƒ isView(length: 1) {},
        isAsyncFunction: <ref *7> ƒ (length: 0) {},
        isBigInt64Array: <ref *8> ƒ isBigInt64Array(length: 1) {},
        isBigIntObject: <ref *9> ƒ (length: 0) {},
        isBigUint64Array: <ref *10> ƒ isBigUint64Array(length: 1) {},
        isBooleanObject: <ref *11> ƒ (length: 0) {},
        isBoxedPrimitive: <ref *12> ƒ (length: 0) {},
        isCryptoKey: <ref *13> ƒ isCryptoKey(length: 1) {},
        isDataView: <ref *14> ƒ isDataView(length: 1) {},
        isDate: <ref *15> ƒ (length: 0) {},
        isExternal: <ref *16> ƒ (length: 0) {},
        isFloat16Array: <ref *17> ƒ isFloat16Array(length: 1) {},
        isFloat32Array: <ref *18> ƒ isFloat32Array(length: 1) {},
        isFloat64Array: <ref *19> ƒ isFloat64Array(length: 1) {},
        isGeneratorFunction: <ref *20> ƒ (length: 0) {},
        isGeneratorObject: <ref *21> ƒ (length: 0) {},
        isInt16Array: <ref *22> ƒ isInt16Array(length: 1) {},
        isInt32Array: <ref *23> ƒ isInt32Array(length: 1) {},
        isInt8Array: <ref *24> ƒ isInt8Array(length: 1) {},
        isKeyObject: <ref *25> ƒ isKeyObject(length: 1) {},
        isMap: <ref *26> ƒ (length: 0) {},
        isMapIterator: <ref *27> ƒ (length: 0) {},
        isModuleNamespaceObject: <ref *28> ƒ (length: 0) {},
        isNativeError: <ref *29> ƒ (length: 0) {},
        isNumberObject: <ref *30> ƒ (length: 0) {},
        isPromise: <ref *31> ƒ (length: 0) {},
        isProxy: <ref *32> ƒ (length: 0) {},
        isRegExp: <ref *33> ƒ (length: 0) {},
        isSet: <ref *34> ƒ (length: 0) {},
        isSetIterator: <ref *35> ƒ (length: 0) {},
        isSharedArrayBuffer: <ref *36> ƒ (length: 0) {},
        isStringObject: <ref *37> ƒ (length: 0) {},
        isSymbolObject: <ref *38> ƒ (length: 0) {},
        isTypedArray: <ref *39> ƒ isTypedArray(length: 1) {},
        isUint16Array: <ref *40> ƒ isUint16Array(length: 1) {},
        isUint32Array: <ref *41> ƒ isUint32Array(length: 1) {},
        isUint8Array: <ref *42> ƒ isUint8Array(length: 1) {},
        isUint8ClampedArray: <ref *43> ƒ isUint8ClampedArray(length: 1) {},
        isWeakMap: <ref *44> ƒ (length: 0) {},
        isWeakSet: <ref *45> ƒ (length: 0) {}
    },
    isAnyArrayBuffer: [Circular: *3],
    isArgumentsObject: [Circular: *4],
    isArrayBuffer: [Circular: *5],
    isArrayBufferView: [Circular: *6],
    isAsyncFunction: [Circular: *7],
    isBigInt64Array: [Circular: *8],
    isBigIntObject: [Circular: *9],
    isBigUint64Array: [Circular: *10],
    isBooleanObject: [Circular: *11],
    isBoxedPrimitive: [Circular: *12],
    isCryptoKey: [Circular: *13],
    isDataView: [Circular: *14],
    isDate: [Circular: *15],
    isExternal: [Circular: *16],
    isFloat16Array: [Circular: *17],
    isFloat32Array: [Circular: *18],
    isFloat64Array: [Circular: *19],
    isGeneratorFunction: [Circular: *20],
    isGeneratorObject: [Circular: *21],
    isInt16Array: [Circular: *22],
    isInt32Array: [Circular: *23],
    isInt8Array: [Circular: *24],
    isKeyObject: [Circular: *25],
    isMap: [Circular: *26],
    isMapIterator: [Circular: *27],
    isModuleNamespaceObject: [Circular: *28],
    isNativeError: [Circular: *29],
    isNumberObject: [Circular: *30],
    isPromise: [Circular: *31],
    isProxy: [Circular: *32],
    isRegExp: [Circular: *33],
    isSet: [Circular: *34],
    isSetIterator: [Circular: *35],
    isSharedArrayBuffer: [Circular: *36],
    isStringObject: [Circular: *37],
    isSymbolObject: [Circular: *38],
    isTypedArray: [Circular: *39],
    isUint16Array: [Circular: *40],
    isUint32Array: [Circular: *41],
    isUint8Array: [Circular: *42],
    isUint8ClampedArray: [Circular: *43],
    isWeakMap: [Circular: *44],
    isWeakSet: [Circular: *45]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    default: {
        isAnyArrayBuffer: <ref *3> ƒ isAnyArrayBuffer(length: 1) {},
        isArgumentsObject: <ref *4> ƒ isArgumentsObject(length: 1) {},
        isArrayBuffer: <ref *5> ƒ isArrayBuffer(length: 1) {},
        isArrayBufferView: <ref *6> ƒ isArrayBufferView(length: 1) {},
        isAsyncFunction: <ref *7> ƒ isAsyncFunction(length: 1) {},
        isBigInt64Array: <ref *8> ƒ isBigInt64Array(length: 1) {},
        isBigIntObject: <ref *9> ƒ isBigIntObject(length: 1) {},
        isBigUint64Array: <ref *10> ƒ isBigUint64Array(length: 1) {},
        isBooleanObject: <ref *11> ƒ isBooleanObject(length: 1) {},
        isBoxedPrimitive: <ref *12> ƒ isBoxedPrimitive(length: 1) {},
        isCryptoKey: <ref *13> ƒ isCryptoKey(length: 1) {},
        isDataView: <ref *14> ƒ isDataView(length: 1) {},
        isDate: <ref *15> ƒ isDate(length: 1) {},
        isFloat16Array: <ref *16> ƒ isFloat16Array(length: 1) {},
        isFloat32Array: <ref *17> ƒ isFloat32Array(length: 1) {},
        isFloat64Array: <ref *18> ƒ isFloat64Array(length: 1) {},
        isGeneratorFunction: <ref *19> ƒ isGeneratorFunction(length: 1) {},
        isGeneratorObject: <ref *20> ƒ isGeneratorObject(length: 1) {},
        isInt16Array: <ref *21> ƒ isInt16Array(length: 1) {},
        isInt32Array: <ref *22> ƒ isInt32Array(length: 1) {},
        isInt8Array: <ref *23> ƒ isInt8Array(length: 1) {},
        isKeyObject: <ref *24> ƒ isKeyObject(length: 1) {},
        isMap: <ref *25> ƒ isMap(length: 1) {},
        isMapIterator: <ref *26> ƒ isMapIterator(length: 1) {},
        isModuleNamespaceObject: <ref *27> ƒ isModuleNamespaceObject(length: 1) {},
        isNativeError: <ref *28> ƒ isNativeError(length: 1) {},
        isNumberObject: <ref *29> ƒ isNumberObject(length: 1) {},
        isPromise: <ref *30> ƒ isPromise(length: 1) {},
        isProxy: <ref *31> ƒ isProxy(length: 1) {},
        isRegExp: <ref *32> ƒ isRegExp(length: 1) {},
        isSet: <ref *33> ƒ isSet(length: 1) {},
        isSetIterator: <ref *34> ƒ isSetIterator(length: 1) {},
        isSharedArrayBuffer: <ref *35> ƒ isSharedArrayBuffer(length: 1) {},
        isStringObject: <ref *36> ƒ isStringObject(length: 1) {},
        isSymbolObject: <ref *37> ƒ isSymbolObject(length: 1) {},
        isTypedArray: <ref *38> ƒ isTypedArray(length: 1) {},
        isUint16Array: <ref *39> ƒ isUint16Array(length: 1) {},
        isUint32Array: <ref *40> ƒ isUint32Array(length: 1) {},
        isUint8Array: <ref *41> ƒ isUint8Array(length: 1) {},
        isUint8ClampedArray: <ref *42> ƒ isUint8ClampedArray(length: 1) {},
        isWeakMap: <ref *43> ƒ isWeakMap(length: 1) {},
        isWeakSet: <ref *44> ƒ isWeakSet(length: 1) {}
    },
    isAnyArrayBuffer: [Circular: *3],
    isArgumentsObject: [Circular: *4],
    isArrayBuffer: [Circular: *5],
    isArrayBufferView: [Circular: *6],
    isAsyncFunction: [Circular: *7],
    isBigInt64Array: [Circular: *8],
    isBigIntObject: [Circular: *9],
    isBigUint64Array: [Circular: *10],
    isBooleanObject: [Circular: *11],
    isBoxedPrimitive: [Circular: *12],
    isCryptoKey: [Circular: *13],
    isDataView: [Circular: *14],
    isDate: [Circular: *15],
    isFloat16Array: [Circular: *16],
    isFloat32Array: [Circular: *17],
    isFloat64Array: [Circular: *18],
    isGeneratorFunction: [Circular: *19],
    isGeneratorObject: [Circular: *20],
    isInt16Array: [Circular: *21],
    isInt32Array: [Circular: *22],
    isInt8Array: [Circular: *23],
    isKeyObject: [Circular: *24],
    isMap: [Circular: *25],
    isMapIterator: [Circular: *26],
    isModuleNamespaceObject: [Circular: *27],
    isNativeError: [Circular: *28],
    isNumberObject: [Circular: *29],
    isPromise: [Circular: *30],
    isProxy: [Circular: *31],
    isRegExp: [Circular: *32],
    isSet: [Circular: *33],
    isSetIterator: [Circular: *34],
    isSharedArrayBuffer: [Circular: *35],
    isStringObject: [Circular: *36],
    isSymbolObject: [Circular: *37],
    isTypedArray: [Circular: *38],
    isUint16Array: [Circular: *39],
    isUint32Array: [Circular: *40],
    isUint8Array: [Circular: *41],
    isUint8ClampedArray: [Circular: *42],
    isWeakMap: [Circular: *43],
    isWeakSet: [Circular: *44]
}
```

</td>
    </tr>
  </table>
</details>

<details id="v8">
  <summary><code>v8</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    cachedDataVersionTag: <ref *2> ƒ cachedDataVersionTag(length: 0) {},
    default: {
        cachedDataVersionTag: [Circular: *2],
        DefaultDeserializer: <ref *4> class DefaultDeserializer extends Deserializer {},
        DefaultSerializer: <ref *5> class DefaultSerializer extends Serializer {},
        deserialize: <ref *6> ƒ deserialize(length: 1) {},
        Deserializer: <ref *7> ƒ Deserializer(length: 1) {},
        GCProfiler: <ref *8> class GCProfiler {},
        getCppHeapStatistics: <ref *9> ƒ getCppHeapStatistics(length: 0) {},
        getHeapCodeStatistics: <ref *10> ƒ getHeapCodeStatistics(length: 0) {},
        getHeapSnapshot: <ref *11> ƒ getHeapSnapshot(length: 1) {},
        getHeapSpaceStatistics: <ref *12> ƒ getHeapSpaceStatistics(length: 0) {},
        getHeapStatistics: <ref *13> ƒ getHeapStatistics(length: 0) {},
        isStringOneByteRepresentation: <ref *14> ƒ isStringOneByteRepresentation(length: 1) {},
        promiseHooks: <ref *15> {
            createHook: ƒ createHook(length: 0) {},
            onAfter: ƒ (length: 1) {},
            onBefore: ƒ (length: 1) {},
            onInit: ƒ (length: 1) {},
            onSettled: ƒ (length: 1) {}
        },
        queryObjects: <ref *21> ƒ queryObjects(length: 1) {},
        serialize: <ref *22> ƒ serialize(length: 1) {},
        Serializer: <ref *23> ƒ Serializer(length: 0) {},
        setFlagsFromString: <ref *24> ƒ setFlagsFromString(length: 1) {},
        setHeapProfileNearHeapLimit: <ref *25> ƒ setHeapProfileNearHeapLimit(length: 1) {},
        setHeapSnapshotNearHeapLimit: <ref *26> ƒ setHeapSnapshotNearHeapLimit(length: 1) {},
        startCpuProfile: <ref *27> ƒ startCpuProfile(length: 1) {},
        startHeapProfile: <ref *28> ƒ startHeapProfile(length: 1) {},
        startupSnapshot: <ref *29> {
            addDeserializeCallback: ƒ addDeserializeCallback(length: 2) {},
            addSerializeCallback: ƒ addSerializeCallback(length: 2) {},
            isBuildingSnapshot: ƒ isBuildingSnapshot(length: 0) {},
            setDeserializeMainFunction: ƒ setDeserializeMainFunction(length: 2) {}
        },
        stopCoverage: <ref *34> ƒ stopCoverage(length: 0) {},
        takeCoverage: <ref *35> ƒ takeCoverage(length: 0) {},
        writeHeapSnapshot: <ref *36> ƒ writeHeapSnapshot(length: 2) {}
    },
    DefaultDeserializer: [Circular: *4],
    DefaultSerializer: [Circular: *5],
    deserialize: [Circular: *6],
    Deserializer: [Circular: *7],
    GCProfiler: [Circular: *8],
    getCppHeapStatistics: [Circular: *9],
    getHeapCodeStatistics: [Circular: *10],
    getHeapSnapshot: [Circular: *11],
    getHeapSpaceStatistics: [Circular: *12],
    getHeapStatistics: [Circular: *13],
    isStringOneByteRepresentation: [Circular: *14],
    promiseHooks: [Circular: *15],
    queryObjects: [Circular: *21],
    serialize: [Circular: *22],
    Serializer: [Circular: *23],
    setFlagsFromString: [Circular: *24],
    setHeapProfileNearHeapLimit: [Circular: *25],
    setHeapSnapshotNearHeapLimit: [Circular: *26],
    startCpuProfile: [Circular: *27],
    startHeapProfile: [Circular: *28],
    startupSnapshot: [Circular: *29],
    stopCoverage: [Circular: *34],
    takeCoverage: [Circular: *35],
    writeHeapSnapshot: [Circular: *36]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    cachedDataVersionTag: <ref *2> ƒ cachedDataVersionTag(length: 0) {},
    default: {
        cachedDataVersionTag: [Circular: *2],
        DefaultDeserializer: <ref *4> class DefaultDeserializer extends Deserializer {},
        DefaultSerializer: <ref *5> class DefaultSerializer extends Serializer {},
        deserialize: <ref *6> ƒ deserialize(length: 1) {},
        Deserializer: <ref *7> class Deserializer {},
        GCProfiler: <ref *8> class GCProfiler {},
        getHeapCodeStatistics: <ref *9> ƒ getHeapCodeStatistics(length: 0) {},
        getHeapSnapshot: <ref *10> ƒ getHeapSnapshot(length: 1) {},
        getHeapSpaceStatistics: <ref *11> ƒ getHeapSpaceStatistics(length: 0) {},
        getHeapStatistics: <ref *12> ƒ getHeapStatistics(length: 0) {},
        promiseHooks: {
            createHook: ƒ createHook(length: 1) {},
            onAfter: ƒ onAfter(length: 1) {},
            onBefore: ƒ onBefore(length: 1) {},
            onInit: ƒ onInit(length: 1) {},
            onSettled: ƒ onSettled(length: 1) {}
        },
        queryObjects: <ref *19> ƒ queryObjects(length: 1) {},
        serialize: <ref *20> ƒ serialize(length: 1) {},
        Serializer: <ref *21> class Serializer {},
        setFlagsFromString: <ref *22> ƒ setFlagsFromString(length: 1) {},
        setHeapSnapshotNearHeapLimit: <ref *23> ƒ setHeapSnapshotNearHeapLimit(length: 1) {},
        startupSnapshot: <ref *24> {
            addDeserializeCallback: ƒ startupSnapshotAddDeserializeCallback(length: 2) {},
            addSerializeCallback: ƒ startupSnapshotAddSerializeCallback(length: 2) {},
            isBuildingSnapshot: ƒ startupSnapshotIsBuildingSnapshot(length: 0) {},
            setDeserializeMainFunction: ƒ startupSnapshotSetDeserializeMainFunction(length: 2) {}
        },
        stopCoverage: <ref *29> ƒ stopCoverage(length: 0) {},
        takeCoverage: <ref *30> ƒ takeCoverage(length: 0) {},
        writeHeapSnapshot: <ref *31> ƒ writeHeapSnapshot(length: 2) {}
    },
    DefaultDeserializer: [Circular: *4],
    DefaultSerializer: [Circular: *5],
    deserialize: [Circular: *6],
    Deserializer: [Circular: *7],
    GCProfiler: [Circular: *8],
    getHeapCodeStatistics: [Circular: *9],
    getHeapSnapshot: [Circular: *10],
    getHeapSpaceStatistics: [Circular: *11],
    getHeapStatistics: [Circular: *12],
    queryObjects: [Circular: *19],
    serialize: [Circular: *20],
    Serializer: [Circular: *21],
    setFlagsFromString: [Circular: *22],
    setHeapSnapshotNearHeapLimit: [Circular: *23],
    startupSnapshot: [Circular: *24],
    stopCoverage: [Circular: *29],
    takeCoverage: [Circular: *30],
    writeHeapSnapshot: [Circular: *31]
}
```

</td>
    </tr>
  </table>
</details>

<details id="vm">
  <summary><code>vm</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    compileFunction: <ref *2> ƒ compileFunction(length: 2) {},
    constants: <ref *3> [Object: null prototype] {
        DONT_CONTEXTIFY: Symbol(vm_context_no_contextify),
        USE_MAIN_CONTEXT_DEFAULT_LOADER: Symbol(vm_dynamic_import_main_context_default)
    },
    createContext: <ref *4> ƒ createContext(length: 0) {},
    createScript: <ref *5> ƒ createScript(length: 2) {},
    default: {
        compileFunction: [Circular: *2],
        constants: [Circular: *3],
        createContext: [Circular: *4],
        createScript: [Circular: *5],
        isContext: <ref *7> ƒ isContext(length: 1) {},
        measureMemory: <ref *8> ƒ measureMemory(length: 0) {},
        runInContext: <ref *9> ƒ runInContext(length: 3) {},
        runInNewContext: <ref *10> ƒ runInNewContext(length: 3) {},
        runInThisContext: <ref *11> ƒ runInThisContext(length: 2) {},
        Script: <ref *12> class Script extends ContextifyScript {}
    },
    isContext: [Circular: *7],
    measureMemory: [Circular: *8],
    runInContext: [Circular: *9],
    runInNewContext: [Circular: *10],
    runInThisContext: [Circular: *11],
    Script: [Circular: *12]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    compileFunction: <ref *2> ƒ compileFunction(length: 2) {},
    constants: <ref *3> [Object: null prototype] {
        DONT_CONTEXTIFY: Symbol(DONT_CONTEXTIFY),
        USE_MAIN_CONTEXT_DEFAULT_LOADER: Symbol(USE_MAIN_CONTEXT_DEFAULT_LOADER)
    },
    createContext: <ref *4> ƒ createContext(length: 0) {},
    createScript: <ref *5> ƒ createScript(length: 2) {},
    default: {
        compileFunction: [Circular: *2],
        constants: [Circular: *3],
        createContext: [Circular: *4],
        createScript: [Circular: *5],
        isContext: <ref *7> ƒ isContext(length: 1) {},
        measureMemory: <ref *8> ƒ measureMemory(length: 1) {},
        Module: <ref *9> class Module {},
        runInContext: <ref *10> ƒ runInContext(length: 3) {},
        runInNewContext: <ref *11> ƒ runInNewContext(length: 3) {},
        runInThisContext: <ref *12> ƒ runInThisContext(length: 2) {},
        Script: <ref *13> class Script {},
        SourceTextModule: <ref *14> class SourceTextModule extends Module {},
        SyntheticModule: <ref *15> class SyntheticModule extends Module {}
    },
    isContext: [Circular: *7],
    measureMemory: [Circular: *8],
    Module: [Circular: *9],
    runInContext: [Circular: *10],
    runInNewContext: [Circular: *11],
    runInThisContext: [Circular: *12],
    Script: [Circular: *13],
    SourceTextModule: [Circular: *14],
    SyntheticModule: [Circular: *15]
}
```

</td>
    </tr>
  </table>
</details>

<details id="wasi">
  <summary><code>wasi</code> — ✅ Identical</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    default: {
        WASI: <ref *3> class WASI {}
    },
    WASI: [Circular: *3]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    default: {
        WASI: <ref *3> class WASI {}
    },
    WASI: [Circular: *3]
}
```

</td>
    </tr>
  </table>
</details>

<details id="worker_threads">
  <summary><code>worker_threads</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    BroadcastChannel: <ref *2> class BroadcastChannel extends EventTarget {},
    default: {
        BroadcastChannel: [Circular: *2],
        getEnvironmentData: <ref *4> ƒ getEnvironmentData(length: 1) {},
        isInternalThread: false,
        isMainThread: true,
        isMarkedAsUntransferable: <ref *5> ƒ isMarkedAsUntransferable(length: 1) {},
        locks: <ref *6> LockManager {},
        markAsUncloneable: <ref *7> ƒ markAsUncloneable(length: 1) {},
        markAsUntransferable: <ref *8> ƒ markAsUntransferable(length: 1) {},
        MessageChannel: <ref *9> ƒ MessageChannel(length: 0) {},
        MessagePort: <ref *10> ƒ MessagePort(length: 0) {},
        moveMessagePortToContext: <ref *11> ƒ moveMessagePortToContext(length: 0) {},
        parentPort: null,
        postMessageToThread: <ref *12> async ƒ postMessageToThread(length: 4) {},
        receiveMessageOnPort: <ref *13> ƒ receiveMessageOnPort(length: 1) {},
        resourceLimits: <ref *14> {},
        setEnvironmentData: <ref *15> ƒ setEnvironmentData(length: 2) {},
        SHARE_ENV: Symbol(nodejs.worker_threads.SHARE_ENV),
        threadId: 0,
        threadName: "",
        Worker: <ref *16> class Worker extends EventEmitter {},
        workerData: null
    },
    getEnvironmentData: [Circular: *4],
    isInternalThread: false,
    isMainThread: true,
    isMarkedAsUntransferable: [Circular: *5],
    locks: [Circular: *6],
    markAsUncloneable: [Circular: *7],
    markAsUntransferable: [Circular: *8],
    MessageChannel: [Circular: *9],
    MessagePort: [Circular: *10],
    moveMessagePortToContext: [Circular: *11],
    parentPort: null,
    postMessageToThread: [Circular: *12],
    receiveMessageOnPort: [Circular: *13],
    resourceLimits: [Circular: *14],
    setEnvironmentData: [Circular: *15],
    SHARE_ENV: Symbol(nodejs.worker_threads.SHARE_ENV),
    threadId: 0,
    threadName: "",
    Worker: [Circular: *16],
    workerData: null
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    BroadcastChannel: <ref *2> class BroadcastChannel extends Pe {},
    default: {
        BroadcastChannel: [Circular: *2],
        getEnvironmentData: <ref *4> ƒ getEnvironmentData(length: 1) {},
        isInternalThread: false,
        isMainThread: true,
        isMarkedAsUntransferable: <ref *5> ƒ isMarkedAsUntransferable(length: 1) {},
        locks: <ref *6> LockManager {
            Symbol([[webidl.brand]]): Symbol([[webidl.brand]])
        },
        markAsUncloneable: <ref *7> ƒ markAsUncloneable(length: 1) {},
        markAsUntransferable: <ref *8> ƒ markAsUntransferable(length: 1) {},
        MessageChannel: <ref *9> ƒ NodeMessageChannel(length: 0) {},
        MessagePort: <ref *10> ƒ MessagePort(length: 0) {},
        moveMessagePortToContext: <ref *11> ƒ moveMessagePortToContext(length: 2) {},
        parentPort: null,
        postMessageToThread: <ref *12> ƒ postMessageToThread(length: 4) {},
        receiveMessageOnPort: <ref *13> ƒ receiveMessageOnPort(length: 1) {},
        resourceLimits: <ref *14> {},
        setEnvironmentData: <ref *15> ƒ setEnvironmentData(length: 2) {},
        SHARE_ENV: Symbol(nodejs.worker_threads.SHARE_ENV),
        threadId: 0,
        threadName: "",
        Worker: <ref *16> class NodeWorker extends je {},
        workerData: null
    },
    getEnvironmentData: [Circular: *4],
    isInternalThread: false,
    isMainThread: true,
    isMarkedAsUntransferable: [Circular: *5],
    locks: [Circular: *6],
    markAsUncloneable: [Circular: *7],
    markAsUntransferable: [Circular: *8],
    MessageChannel: [Circular: *9],
    MessagePort: [Circular: *10],
    moveMessagePortToContext: [Circular: *11],
    parentPort: null,
    postMessageToThread: [Circular: *12],
    receiveMessageOnPort: [Circular: *13],
    resourceLimits: [Circular: *14],
    setEnvironmentData: [Circular: *15],
    SHARE_ENV: Symbol(nodejs.worker_threads.SHARE_ENV),
    threadId: 0,
    threadName: "",
    Worker: [Circular: *16],
    workerData: null
}
```

</td>
    </tr>
  </table>
</details>

<details id="zlib">
  <summary><code>zlib</code> — ⚠️ Differs</summary>
  <table>
    <tr><th>Node.js</th><th>Deno</th></tr>
    <tr>
      <td valign="top">

```js
[Object: null prototype] {
    brotliCompress: <ref *2> ƒ asyncBufferWrapper(length: 3) {},
    BrotliCompress: <ref *3> class BrotliCompress extends Brotli {},
    brotliCompressSync: <ref *4> ƒ syncBufferWrapper(length: 2) {},
    brotliDecompress: <ref *5> ƒ asyncBufferWrapper(length: 3) {},
    BrotliDecompress: <ref *6> class BrotliDecompress extends Brotli {},
    brotliDecompressSync: <ref *7> ƒ syncBufferWrapper(length: 2) {},
    codes: <ref *8> {
        -1: "Z_ERRNO",
        -2: "Z_STREAM_ERROR",
        -3: "Z_DATA_ERROR",
        -4: "Z_MEM_ERROR",
        -5: "Z_BUF_ERROR",
        -6: "Z_VERSION_ERROR",
        0: "Z_OK",
        1: "Z_STREAM_END",
        2: "Z_NEED_DICT",
        Z_BUF_ERROR: -5,
        Z_DATA_ERROR: -3,
        Z_ERRNO: -1,
        Z_MEM_ERROR: -4,
        Z_NEED_DICT: 2,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_STREAM_ERROR: -2,
        Z_VERSION_ERROR: -6
    },
    constants: <ref *9> [Object: null prototype] {
        BROTLI_DECODE: 8,
        BROTLI_DECODER_ERROR_ALLOC_BLOCK_TYPE_TREES: -30,
        BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MAP: -25,
        BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MODES: -21,
        BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_1: -26,
        BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_2: -27,
        BROTLI_DECODER_ERROR_ALLOC_TREE_GROUPS: -22,
        BROTLI_DECODER_ERROR_COMPOUND_DICTIONARY: -18,
        BROTLI_DECODER_ERROR_DICTIONARY_NOT_SET: -19,
        BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_1: -9,
        BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_2: -10,
        BROTLI_DECODER_ERROR_FORMAT_BLOCK_SWITCH: -17,
        BROTLI_DECODER_ERROR_FORMAT_CL_SPACE: -6,
        BROTLI_DECODER_ERROR_FORMAT_CONTEXT_MAP_REPEAT: -8,
        BROTLI_DECODER_ERROR_FORMAT_DICTIONARY: -12,
        BROTLI_DECODER_ERROR_FORMAT_DISTANCE: -16,
        BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_META_NIBBLE: -3,
        BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_NIBBLE: -1,
        BROTLI_DECODER_ERROR_FORMAT_HUFFMAN_SPACE: -7,
        BROTLI_DECODER_ERROR_FORMAT_PADDING_1: -14,
        BROTLI_DECODER_ERROR_FORMAT_PADDING_2: -15,
        BROTLI_DECODER_ERROR_FORMAT_RESERVED: -2,
        BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_ALPHABET: -4,
        BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_SAME: -5,
        BROTLI_DECODER_ERROR_FORMAT_TRANSFORM: -11,
        BROTLI_DECODER_ERROR_FORMAT_WINDOW_BITS: -13,
        BROTLI_DECODER_ERROR_INVALID_ARGUMENTS: -20,
        BROTLI_DECODER_ERROR_UNREACHABLE: -31,
        BROTLI_DECODER_NEEDS_MORE_INPUT: 2,
        BROTLI_DECODER_NEEDS_MORE_OUTPUT: 3,
        BROTLI_DECODER_NO_ERROR: 0,
        BROTLI_DECODER_PARAM_DISABLE_RING_BUFFER_REALLOCATION: 0,
        BROTLI_DECODER_PARAM_LARGE_WINDOW: 1,
        BROTLI_DECODER_RESULT_ERROR: 0,
        BROTLI_DECODER_RESULT_NEEDS_MORE_INPUT: 2,
        BROTLI_DECODER_RESULT_NEEDS_MORE_OUTPUT: 3,
        BROTLI_DECODER_RESULT_SUCCESS: 1,
        BROTLI_DECODER_SUCCESS: 1,
        BROTLI_DEFAULT_MODE: 0,
        BROTLI_DEFAULT_QUALITY: 11,
        BROTLI_DEFAULT_WINDOW: 22,
        BROTLI_ENCODE: 9,
        BROTLI_LARGE_MAX_WINDOW_BITS: 30,
        BROTLI_MAX_INPUT_BLOCK_BITS: 24,
        BROTLI_MAX_QUALITY: 11,
        BROTLI_MAX_WINDOW_BITS: 24,
        BROTLI_MIN_INPUT_BLOCK_BITS: 16,
        BROTLI_MIN_QUALITY: 0,
        BROTLI_MIN_WINDOW_BITS: 10,
        BROTLI_MODE_FONT: 2,
        BROTLI_MODE_GENERIC: 0,
        BROTLI_MODE_TEXT: 1,
        BROTLI_OPERATION_EMIT_METADATA: 3,
        BROTLI_OPERATION_FINISH: 2,
        BROTLI_OPERATION_FLUSH: 1,
        BROTLI_OPERATION_PROCESS: 0,
        BROTLI_PARAM_DISABLE_LITERAL_CONTEXT_MODELING: 4,
        BROTLI_PARAM_LARGE_WINDOW: 6,
        BROTLI_PARAM_LGBLOCK: 3,
        BROTLI_PARAM_LGWIN: 2,
        BROTLI_PARAM_MODE: 0,
        BROTLI_PARAM_NDIRECT: 8,
        BROTLI_PARAM_NPOSTFIX: 7,
        BROTLI_PARAM_QUALITY: 1,
        BROTLI_PARAM_SIZE_HINT: 5,
        DEFLATE: 1,
        DEFLATERAW: 5,
        GUNZIP: 4,
        GZIP: 3,
        INFLATE: 2,
        INFLATERAW: 6,
        UNZIP: 7,
        Z_BEST_COMPRESSION: 9,
        Z_BEST_SPEED: 1,
        Z_BLOCK: 5,
        Z_BUF_ERROR: -5,
        Z_DATA_ERROR: -3,
        Z_DEFAULT_CHUNK: 16384,
        Z_DEFAULT_COMPRESSION: -1,
        Z_DEFAULT_LEVEL: -1,
        Z_DEFAULT_MEMLEVEL: 8,
        Z_DEFAULT_STRATEGY: 0,
        Z_DEFAULT_WINDOWBITS: 15,
        Z_ERRNO: -1,
        Z_FILTERED: 1,
        Z_FINISH: 4,
        Z_FIXED: 4,
        Z_FULL_FLUSH: 3,
        Z_HUFFMAN_ONLY: 2,
        Z_MAX_CHUNK: Infinity,
        Z_MAX_LEVEL: 9,
        Z_MAX_MEMLEVEL: 9,
        Z_MAX_WINDOWBITS: 15,
        Z_MEM_ERROR: -4,
        Z_MIN_CHUNK: 64,
        Z_MIN_LEVEL: -1,
        Z_MIN_MEMLEVEL: 1,
        Z_MIN_WINDOWBITS: 8,
        Z_NEED_DICT: 2,
        Z_NO_COMPRESSION: 0,
        Z_NO_FLUSH: 0,
        Z_OK: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_RLE: 3,
        Z_STREAM_END: 1,
        Z_STREAM_ERROR: -2,
        Z_SYNC_FLUSH: 2,
        Z_VERSION_ERROR: -6,
        ZLIB_VERNUM: 4897,
        ZSTD_btlazy2: 6,
        ZSTD_btopt: 7,
        ZSTD_btultra: 8,
        ZSTD_btultra2: 9,
        ZSTD_c_chainLog: 103,
        ZSTD_c_checksumFlag: 201,
        ZSTD_c_compressionLevel: 100,
        ZSTD_c_contentSizeFlag: 200,
        ZSTD_c_dictIDFlag: 202,
        ZSTD_c_enableLongDistanceMatching: 160,
        ZSTD_c_hashLog: 102,
        ZSTD_c_jobSize: 401,
        ZSTD_c_ldmBucketSizeLog: 163,
        ZSTD_c_ldmHashLog: 161,
        ZSTD_c_ldmHashRateLog: 164,
        ZSTD_c_ldmMinMatch: 162,
        ZSTD_c_minMatch: 105,
        ZSTD_c_nbWorkers: 400,
        ZSTD_c_overlapLog: 402,
        ZSTD_c_searchLog: 104,
        ZSTD_c_strategy: 107,
        ZSTD_c_targetLength: 106,
        ZSTD_c_windowLog: 101,
        ZSTD_CLEVEL_DEFAULT: 3,
        ZSTD_COMPRESS: 10,
        ZSTD_d_windowLogMax: 100,
        ZSTD_DECOMPRESS: 11,
        ZSTD_dfast: 2,
        ZSTD_e_continue: 0,
        ZSTD_e_end: 2,
        ZSTD_e_flush: 1,
        ZSTD_error_checksum_wrong: 22,
        ZSTD_error_corruption_detected: 20,
        ZSTD_error_dictionary_corrupted: 30,
        ZSTD_error_dictionary_wrong: 32,
        ZSTD_error_dictionaryCreation_failed: 34,
        ZSTD_error_dstBuffer_null: 74,
        ZSTD_error_dstSize_tooSmall: 70,
        ZSTD_error_frameParameter_unsupported: 14,
        ZSTD_error_frameParameter_windowTooLarge: 16,
        ZSTD_error_GENERIC: 1,
        ZSTD_error_init_missing: 62,
        ZSTD_error_literals_headerWrong: 24,
        ZSTD_error_maxSymbolValue_tooLarge: 46,
        ZSTD_error_maxSymbolValue_tooSmall: 48,
        ZSTD_error_memory_allocation: 64,
        ZSTD_error_no_error: 0,
        ZSTD_error_noForwardProgress_destFull: 80,
        ZSTD_error_noForwardProgress_inputEmpty: 82,
        ZSTD_error_parameter_combination_unsupported: 41,
        ZSTD_error_parameter_outOfBound: 42,
        ZSTD_error_parameter_unsupported: 40,
        ZSTD_error_prefix_unknown: 10,
        ZSTD_error_srcSize_wrong: 72,
        ZSTD_error_stabilityCondition_notRespected: 50,
        ZSTD_error_stage_wrong: 60,
        ZSTD_error_tableLog_tooLarge: 44,
        ZSTD_error_version_unsupported: 12,
        ZSTD_error_workSpace_tooSmall: 66,
        ZSTD_fast: 1,
        ZSTD_greedy: 3,
        ZSTD_lazy: 4,
        ZSTD_lazy2: 5
    },
    crc32: <ref *10> ƒ crc32(length: 1) {},
    crc32c: <ref *11> ƒ crc32c(length: 1) {},
    createBrotliCompress: <ref *12> ƒ createBrotliCompress(length: 1) {},
    createBrotliDecompress: <ref *13> ƒ createBrotliDecompress(length: 1) {},
    createDeflate: <ref *14> ƒ createDeflate(length: 1) {},
    createDeflateRaw: <ref *15> ƒ createDeflateRaw(length: 1) {},
    createGunzip: <ref *16> ƒ createGunzip(length: 1) {},
    createGzip: <ref *17> ƒ createGzip(length: 1) {},
    createInflate: <ref *18> ƒ createInflate(length: 1) {},
    createInflateRaw: <ref *19> ƒ createInflateRaw(length: 1) {},
    createUnzip: <ref *20> ƒ createUnzip(length: 1) {},
    createZipArchive: <ref *21> ƒ (length: 0) {},
    createZipArchiveSync: <ref *22> ƒ (length: 0) {},
    createZstdCompress: <ref *23> ƒ createZstdCompress(length: 1) {},
    createZstdDecompress: <ref *24> ƒ createZstdDecompress(length: 1) {},
    default: {
        brotliCompress: [Circular: *2],
        BrotliCompress: [Circular: *3],
        brotliCompressSync: [Circular: *4],
        brotliDecompress: [Circular: *5],
        BrotliDecompress: [Circular: *6],
        brotliDecompressSync: [Circular: *7],
        codes: [Circular: *8],
        constants: [Circular: *9],
        crc32: [Circular: *10],
        crc32c: [Circular: *11],
        createBrotliCompress: [Circular: *12],
        createBrotliDecompress: [Circular: *13],
        createDeflate: [Circular: *14],
        createDeflateRaw: [Circular: *15],
        createGunzip: [Circular: *16],
        createGzip: [Circular: *17],
        createInflate: [Circular: *18],
        createInflateRaw: [Circular: *19],
        createUnzip: [Circular: *20],
        createZipArchive: [Circular: *21],
        createZipArchiveSync: [Circular: *22],
        createZstdCompress: [Circular: *23],
        createZstdDecompress: [Circular: *24],
        deflate: <ref *26> ƒ asyncBufferWrapper(length: 3) {},
        Deflate: <ref *27> class Deflate extends Zlib {},
        deflateRaw: <ref *28> ƒ asyncBufferWrapper(length: 3) {},
        DeflateRaw: <ref *29> class DeflateRaw extends Zlib {},
        deflateRawSync: <ref *30> ƒ syncBufferWrapper(length: 2) {},
        deflateSync: <ref *31> ƒ syncBufferWrapper(length: 2) {},
        getMaxZipContentSize: <ref *32> ƒ (length: 0) {},
        gunzip: <ref *33> ƒ asyncBufferWrapper(length: 3) {},
        Gunzip: <ref *34> class Gunzip extends Zlib {},
        gunzipSync: <ref *35> ƒ syncBufferWrapper(length: 2) {},
        gzip: <ref *36> ƒ asyncBufferWrapper(length: 3) {},
        Gzip: <ref *37> class Gzip extends Zlib {},
        gzipSync: <ref *38> ƒ syncBufferWrapper(length: 2) {},
        inflate: <ref *39> ƒ asyncBufferWrapper(length: 3) {},
        Inflate: <ref *40> class Inflate extends Zlib {},
        inflateRaw: <ref *41> ƒ asyncBufferWrapper(length: 3) {},
        InflateRaw: <ref *42> class InflateRaw extends Zlib {},
        inflateRawSync: <ref *43> ƒ syncBufferWrapper(length: 2) {},
        inflateSync: <ref *44> ƒ syncBufferWrapper(length: 2) {},
        setMaxZipContentSize: <ref *45> ƒ (length: 0) {},
        unzip: <ref *46> ƒ asyncBufferWrapper(length: 3) {},
        Unzip: <ref *47> class Unzip extends Zlib {},
        unzipSync: <ref *48> ƒ syncBufferWrapper(length: 2) {},
        ZipBuffer: <ref *49> class ExperimentalZipBuffer extends ZipBuffer {},
        ZipEntry: <ref *50> class ExperimentalZipEntry extends ZipEntry {},
        ZipFile: <ref *51> class ExperimentalZipFile extends ZipFile {},
        zipFiles: <ref *52> ƒ (length: 0) {},
        zstdCompress: <ref *53> ƒ asyncBufferWrapper(length: 3) {},
        ZstdCompress: <ref *54> class ZstdCompress extends Zstd {},
        zstdCompressSync: <ref *55> ƒ syncBufferWrapper(length: 2) {},
        zstdDecompress: <ref *56> ƒ asyncBufferWrapper(length: 3) {},
        ZstdDecompress: <ref *57> class ZstdDecompress extends Zstd {},
        zstdDecompressSync: <ref *58> ƒ syncBufferWrapper(length: 2) {}
    },
    deflate: [Circular: *26],
    Deflate: [Circular: *27],
    deflateRaw: [Circular: *28],
    DeflateRaw: [Circular: *29],
    deflateRawSync: [Circular: *30],
    deflateSync: [Circular: *31],
    getMaxZipContentSize: [Circular: *32],
    gunzip: [Circular: *33],
    Gunzip: [Circular: *34],
    gunzipSync: [Circular: *35],
    gzip: [Circular: *36],
    Gzip: [Circular: *37],
    gzipSync: [Circular: *38],
    inflate: [Circular: *39],
    Inflate: [Circular: *40],
    inflateRaw: [Circular: *41],
    InflateRaw: [Circular: *42],
    inflateRawSync: [Circular: *43],
    inflateSync: [Circular: *44],
    setMaxZipContentSize: [Circular: *45],
    unzip: [Circular: *46],
    Unzip: [Circular: *47],
    unzipSync: [Circular: *48],
    ZipBuffer: [Circular: *49],
    ZipEntry: [Circular: *50],
    ZipFile: [Circular: *51],
    zipFiles: [Circular: *52],
    zstdCompress: [Circular: *53],
    ZstdCompress: [Circular: *54],
    zstdCompressSync: [Circular: *55],
    zstdDecompress: [Circular: *56],
    ZstdDecompress: [Circular: *57],
    zstdDecompressSync: [Circular: *58]
}
```

</td>
      <td valign="top">

```js
[Object: null prototype] {
    brotliCompress: <ref *2> ƒ asyncBufferWrapper(length: 3) {},
    BrotliCompress: <ref *3> ƒ BrotliCompress(length: 1) {},
    brotliCompressSync: <ref *4> ƒ syncBufferWrapper(length: 2) {},
    brotliDecompress: <ref *5> ƒ asyncBufferWrapper(length: 3) {},
    BrotliDecompress: <ref *6> ƒ BrotliDecompress(length: 1) {},
    brotliDecompressSync: <ref *7> ƒ syncBufferWrapper(length: 2) {},
    codes: <ref *8> {
        -1: "Z_ERRNO",
        -2: "Z_STREAM_ERROR",
        -3: "Z_DATA_ERROR",
        -4: "Z_MEM_ERROR",
        -5: "Z_BUF_ERROR",
        -6: "Z_VERSION_ERROR",
        0: "Z_OK",
        1: "Z_STREAM_END",
        2: "Z_NEED_DICT",
        Z_BUF_ERROR: -5,
        Z_DATA_ERROR: -3,
        Z_ERRNO: -1,
        Z_MEM_ERROR: -4,
        Z_NEED_DICT: 2,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_STREAM_ERROR: -2,
        Z_VERSION_ERROR: -6
    },
    constants: <ref *9> {
        BROTLI_DECODE: 8,
        BROTLI_DECODER_ERROR_ALLOC_BLOCK_TYPE_TREES: -30,
        BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MAP: -25,
        BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MODES: -21,
        BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_1: -26,
        BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_2: -27,
        BROTLI_DECODER_ERROR_ALLOC_TREE_GROUPS: -22,
        BROTLI_DECODER_ERROR_DICTIONARY_NOT_SET: -19,
        BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_1: -9,
        BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_2: -10,
        BROTLI_DECODER_ERROR_FORMAT_CL_SPACE: -6,
        BROTLI_DECODER_ERROR_FORMAT_CONTEXT_MAP_REPEAT: -8,
        BROTLI_DECODER_ERROR_FORMAT_DICTIONARY: -12,
        BROTLI_DECODER_ERROR_FORMAT_DISTANCE: -16,
        BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_META_NIBBLE: -3,
        BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_NIBBLE: -1,
        BROTLI_DECODER_ERROR_FORMAT_HUFFMAN_SPACE: -7,
        BROTLI_DECODER_ERROR_FORMAT_PADDING_1: -14,
        BROTLI_DECODER_ERROR_FORMAT_PADDING_2: -15,
        BROTLI_DECODER_ERROR_FORMAT_RESERVED: -2,
        BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_ALPHABET: -4,
        BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_SAME: -5,
        BROTLI_DECODER_ERROR_FORMAT_TRANSFORM: -11,
        BROTLI_DECODER_ERROR_FORMAT_WINDOW_BITS: -13,
        BROTLI_DECODER_ERROR_INVALID_ARGUMENTS: -20,
        BROTLI_DECODER_ERROR_UNREACHABLE: -31,
        BROTLI_DECODER_NEEDS_MORE_INPUT: 2,
        BROTLI_DECODER_NEEDS_MORE_OUTPUT: 3,
        BROTLI_DECODER_NO_ERROR: 0,
        BROTLI_DECODER_PARAM_DISABLE_RING_BUFFER_REALLOCATION: 0,
        BROTLI_DECODER_PARAM_LARGE_WINDOW: 1,
        BROTLI_DECODER_RESULT_ERROR: 0,
        BROTLI_DECODER_RESULT_NEEDS_MORE_INPUT: 2,
        BROTLI_DECODER_RESULT_NEEDS_MORE_OUTPUT: 3,
        BROTLI_DECODER_RESULT_SUCCESS: 1,
        BROTLI_DECODER_SUCCESS: 1,
        BROTLI_DEFAULT_MODE: 0,
        BROTLI_DEFAULT_QUALITY: 11,
        BROTLI_DEFAULT_WINDOW: 22,
        BROTLI_ENCODE: 9,
        BROTLI_LARGE_MAX_WINDOW_BITS: 30,
        BROTLI_MAX_INPUT_BLOCK_BITS: 24,
        BROTLI_MAX_QUALITY: 11,
        BROTLI_MAX_WINDOW_BITS: 24,
        BROTLI_MIN_INPUT_BLOCK_BITS: 16,
        BROTLI_MIN_QUALITY: 0,
        BROTLI_MIN_WINDOW_BITS: 10,
        BROTLI_MODE_FONT: 2,
        BROTLI_MODE_GENERIC: 0,
        BROTLI_MODE_TEXT: 1,
        BROTLI_OPERATION_EMIT_METADATA: 3,
        BROTLI_OPERATION_FINISH: 2,
        BROTLI_OPERATION_FLUSH: 1,
        BROTLI_OPERATION_PROCESS: 0,
        BROTLI_PARAM_DISABLE_LITERAL_CONTEXT_MODELING: 4,
        BROTLI_PARAM_LARGE_WINDOW: 6,
        BROTLI_PARAM_LGBLOCK: 3,
        BROTLI_PARAM_LGWIN: 2,
        BROTLI_PARAM_MODE: 0,
        BROTLI_PARAM_NDIRECT: 8,
        BROTLI_PARAM_NPOSTFIX: 7,
        BROTLI_PARAM_QUALITY: 1,
        BROTLI_PARAM_SIZE_HINT: 5,
        DEFLATE: 1,
        DEFLATERAW: 5,
        GUNZIP: 4,
        GZIP: 3,
        INFLATE: 2,
        INFLATERAW: 6,
        UNZIP: 7,
        Z_BEST_COMPRESSION: 9,
        Z_BEST_SPEED: 1,
        Z_BLOCK: 5,
        Z_BUF_ERROR: -5,
        Z_DATA_ERROR: -3,
        Z_DEFAULT_CHUNK: 16384,
        Z_DEFAULT_COMPRESSION: -1,
        Z_DEFAULT_LEVEL: -1,
        Z_DEFAULT_MEMLEVEL: 8,
        Z_DEFAULT_STRATEGY: 0,
        Z_DEFAULT_WINDOWBITS: 15,
        Z_ERRNO: -1,
        Z_FILTERED: 1,
        Z_FINISH: 4,
        Z_FIXED: 4,
        Z_FULL_FLUSH: 3,
        Z_HUFFMAN_ONLY: 2,
        Z_MAX_CHUNK: Infinity,
        Z_MAX_LEVEL: 9,
        Z_MAX_MEMLEVEL: 9,
        Z_MAX_WINDOWBITS: 15,
        Z_MEM_ERROR: -4,
        Z_MIN_CHUNK: 64,
        Z_MIN_LEVEL: -1,
        Z_MIN_MEMLEVEL: 1,
        Z_MIN_WINDOWBITS: 8,
        Z_NEED_DICT: 2,
        Z_NO_COMPRESSION: 0,
        Z_NO_FLUSH: 0,
        Z_OK: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_RLE: 3,
        Z_STREAM_END: 1,
        Z_STREAM_ERROR: -2,
        Z_SYNC_FLUSH: 2,
        Z_VERSION_ERROR: -6,
        ZLIB_VERNUM: 4784,
        ZSTD_btlazy2: 6,
        ZSTD_btopt: 7,
        ZSTD_btultra: 8,
        ZSTD_btultra2: 9,
        ZSTD_c_chainLog: 103,
        ZSTD_c_checksumFlag: 201,
        ZSTD_c_compressionLevel: 100,
        ZSTD_c_contentSizeFlag: 200,
        ZSTD_c_dictIDFlag: 202,
        ZSTD_c_enableLongDistanceMatching: 160,
        ZSTD_c_hashLog: 102,
        ZSTD_c_jobSize: 241,
        ZSTD_c_ldmBucketSizeLog: 163,
        ZSTD_c_ldmHashLog: 161,
        ZSTD_c_ldmHashRateLog: 164,
        ZSTD_c_ldmMinMatch: 162,
        ZSTD_c_minMatch: 105,
        ZSTD_c_nbWorkers: 240,
        ZSTD_c_overlapLog: 242,
        ZSTD_c_searchLog: 104,
        ZSTD_c_strategy: 107,
        ZSTD_c_targetLength: 106,
        ZSTD_c_windowLog: 101,
        ZSTD_COMPRESS: 10,
        ZSTD_d_windowLogMax: 100,
        ZSTD_DECOMPRESS: 11,
        ZSTD_dfast: 2,
        ZSTD_e_continue: 0,
        ZSTD_e_end: 2,
        ZSTD_e_flush: 1,
        ZSTD_fast: 1,
        ZSTD_greedy: 3,
        ZSTD_lazy: 4,
        ZSTD_lazy2: 5
    },
    crc32: <ref *10> ƒ crc32(length: 1) {},
    createBrotliCompress: <ref *11> ƒ value(length: 1) {},
    createBrotliDecompress: <ref *12> ƒ value(length: 1) {},
    createDeflate: <ref *13> ƒ value(length: 1) {},
    createDeflateRaw: <ref *14> ƒ value(length: 1) {},
    createGunzip: <ref *15> ƒ value(length: 1) {},
    createGzip: <ref *16> ƒ value(length: 1) {},
    createInflate: <ref *17> ƒ value(length: 1) {},
    createInflateRaw: <ref *18> ƒ value(length: 1) {},
    createUnzip: <ref *19> ƒ value(length: 1) {},
    createZstdCompress: <ref *20> ƒ value(length: 1) {},
    createZstdDecompress: <ref *21> ƒ value(length: 1) {},
    default: {
        brotliCompress: [Circular: *2],
        BrotliCompress: [Circular: *3],
        brotliCompressSync: [Circular: *4],
        brotliDecompress: [Circular: *5],
        BrotliDecompress: [Circular: *6],
        brotliDecompressSync: [Circular: *7],
        codes: [Circular: *8],
        constants: [Circular: *9],
        crc32: [Circular: *10],
        createBrotliCompress: [Circular: *11],
        createBrotliDecompress: [Circular: *12],
        createDeflate: [Circular: *13],
        createDeflateRaw: [Circular: *14],
        createGunzip: [Circular: *15],
        createGzip: [Circular: *16],
        createInflate: [Circular: *17],
        createInflateRaw: [Circular: *18],
        createUnzip: [Circular: *19],
        createZstdCompress: [Circular: *20],
        createZstdDecompress: [Circular: *21],
        deflate: <ref *23> ƒ asyncBufferWrapper(length: 3) {},
        Deflate: <ref *24> ƒ Deflate(length: 1) {},
        DEFLATE: 1,
        deflateRaw: <ref *25> ƒ asyncBufferWrapper(length: 3) {},
        DeflateRaw: <ref *26> ƒ DeflateRaw(length: 1) {},
        DEFLATERAW: 5,
        deflateRawSync: <ref *27> ƒ syncBufferWrapper(length: 2) {},
        deflateSync: <ref *28> ƒ syncBufferWrapper(length: 2) {},
        gunzip: <ref *29> ƒ asyncBufferWrapper(length: 3) {},
        Gunzip: <ref *30> ƒ Gunzip(length: 1) {},
        GUNZIP: 4,
        gunzipSync: <ref *31> ƒ syncBufferWrapper(length: 2) {},
        gzip: <ref *32> ƒ asyncBufferWrapper(length: 3) {},
        Gzip: <ref *33> ƒ Gzip(length: 1) {},
        GZIP: 3,
        gzipSync: <ref *34> ƒ syncBufferWrapper(length: 2) {},
        inflate: <ref *35> ƒ asyncBufferWrapper(length: 3) {},
        Inflate: <ref *36> ƒ Inflate(length: 1) {},
        INFLATE: 2,
        inflateRaw: <ref *37> ƒ asyncBufferWrapper(length: 3) {},
        InflateRaw: <ref *38> ƒ InflateRaw(length: 1) {},
        INFLATERAW: 6,
        inflateRawSync: <ref *39> ƒ syncBufferWrapper(length: 2) {},
        inflateSync: <ref *40> ƒ syncBufferWrapper(length: 2) {},
        unzip: <ref *41> ƒ asyncBufferWrapper(length: 3) {},
        Unzip: <ref *42> ƒ Unzip(length: 1) {},
        UNZIP: 7,
        unzipSync: <ref *43> ƒ syncBufferWrapper(length: 2) {},
        Z_BEST_COMPRESSION: 9,
        Z_BEST_SPEED: 1,
        Z_BLOCK: 5,
        Z_BUF_ERROR: -5,
        Z_DATA_ERROR: -3,
        Z_DEFAULT_CHUNK: 16384,
        Z_DEFAULT_COMPRESSION: -1,
        Z_DEFAULT_LEVEL: -1,
        Z_DEFAULT_MEMLEVEL: 8,
        Z_DEFAULT_STRATEGY: 0,
        Z_DEFAULT_WINDOWBITS: 15,
        Z_ERRNO: -1,
        Z_FILTERED: 1,
        Z_FINISH: 4,
        Z_FIXED: 4,
        Z_FULL_FLUSH: 3,
        Z_HUFFMAN_ONLY: 2,
        Z_MAX_CHUNK: Infinity,
        Z_MAX_LEVEL: 9,
        Z_MAX_MEMLEVEL: 9,
        Z_MAX_WINDOWBITS: 15,
        Z_MEM_ERROR: -4,
        Z_MIN_CHUNK: 64,
        Z_MIN_LEVEL: -1,
        Z_MIN_MEMLEVEL: 1,
        Z_MIN_WINDOWBITS: 8,
        Z_NEED_DICT: 2,
        Z_NO_COMPRESSION: 0,
        Z_NO_FLUSH: 0,
        Z_OK: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_RLE: 3,
        Z_STREAM_END: 1,
        Z_STREAM_ERROR: -2,
        Z_SYNC_FLUSH: 2,
        Z_VERSION_ERROR: -6,
        ZLIB_VERNUM: 4784,
        ZSTD_btlazy2: 6,
        ZSTD_btopt: 7,
        ZSTD_btultra: 8,
        ZSTD_btultra2: 9,
        ZSTD_c_chainLog: 103,
        ZSTD_c_checksumFlag: 201,
        ZSTD_c_compressionLevel: 100,
        ZSTD_c_contentSizeFlag: 200,
        ZSTD_c_dictIDFlag: 202,
        ZSTD_c_enableLongDistanceMatching: 160,
        ZSTD_c_hashLog: 102,
        ZSTD_c_jobSize: 241,
        ZSTD_c_ldmBucketSizeLog: 163,
        ZSTD_c_ldmHashLog: 161,
        ZSTD_c_ldmHashRateLog: 164,
        ZSTD_c_ldmMinMatch: 162,
        ZSTD_c_minMatch: 105,
        ZSTD_c_nbWorkers: 240,
        ZSTD_c_overlapLog: 242,
        ZSTD_c_searchLog: 104,
        ZSTD_c_strategy: 107,
        ZSTD_c_targetLength: 106,
        ZSTD_c_windowLog: 101,
        ZSTD_COMPRESS: 10,
        ZSTD_d_windowLogMax: 100,
        ZSTD_DECOMPRESS: 11,
        ZSTD_dfast: 2,
        ZSTD_e_continue: 0,
        ZSTD_e_end: 2,
        ZSTD_e_flush: 1,
        ZSTD_fast: 1,
        ZSTD_greedy: 3,
        ZSTD_lazy: 4,
        ZSTD_lazy2: 5,
        zstdCompress: <ref *44> ƒ asyncBufferWrapper(length: 3) {},
        ZstdCompress: <ref *45> class ZstdCompress extends Zstd {},
        zstdCompressSync: <ref *46> ƒ syncBufferWrapper(length: 2) {},
        zstdDecompress: <ref *47> ƒ asyncBufferWrapper(length: 3) {},
        ZstdDecompress: <ref *48> class ZstdDecompress extends Zstd {},
        zstdDecompressSync: <ref *49> ƒ syncBufferWrapper(length: 2) {}
    },
    deflate: [Circular: *23],
    Deflate: [Circular: *24],
    DEFLATE: 1,
    deflateRaw: [Circular: *25],
    DeflateRaw: [Circular: *26],
    DEFLATERAW: 5,
    deflateRawSync: [Circular: *27],
    deflateSync: [Circular: *28],
    gunzip: [Circular: *29],
    Gunzip: [Circular: *30],
    GUNZIP: 4,
    gunzipSync: [Circular: *31],
    gzip: [Circular: *32],
    Gzip: [Circular: *33],
    GZIP: 3,
    gzipSync: [Circular: *34],
    inflate: [Circular: *35],
    Inflate: [Circular: *36],
    INFLATE: 2,
    inflateRaw: [Circular: *37],
    InflateRaw: [Circular: *38],
    INFLATERAW: 6,
    inflateRawSync: [Circular: *39],
    inflateSync: [Circular: *40],
    unzip: [Circular: *41],
    Unzip: [Circular: *42],
    UNZIP: 7,
    unzipSync: [Circular: *43],
    Z_BEST_COMPRESSION: 9,
    Z_BEST_SPEED: 1,
    Z_BLOCK: 5,
    Z_BUF_ERROR: -5,
    Z_DATA_ERROR: -3,
    Z_DEFAULT_CHUNK: 16384,
    Z_DEFAULT_COMPRESSION: -1,
    Z_DEFAULT_LEVEL: -1,
    Z_DEFAULT_MEMLEVEL: 8,
    Z_DEFAULT_STRATEGY: 0,
    Z_DEFAULT_WINDOWBITS: 15,
    Z_ERRNO: -1,
    Z_FILTERED: 1,
    Z_FINISH: 4,
    Z_FIXED: 4,
    Z_FULL_FLUSH: 3,
    Z_HUFFMAN_ONLY: 2,
    Z_MAX_CHUNK: Infinity,
    Z_MAX_LEVEL: 9,
    Z_MAX_MEMLEVEL: 9,
    Z_MAX_WINDOWBITS: 15,
    Z_MEM_ERROR: -4,
    Z_MIN_CHUNK: 64,
    Z_MIN_LEVEL: -1,
    Z_MIN_MEMLEVEL: 1,
    Z_MIN_WINDOWBITS: 8,
    Z_NEED_DICT: 2,
    Z_NO_COMPRESSION: 0,
    Z_NO_FLUSH: 0,
    Z_OK: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_RLE: 3,
    Z_STREAM_END: 1,
    Z_STREAM_ERROR: -2,
    Z_SYNC_FLUSH: 2,
    Z_VERSION_ERROR: -6,
    ZLIB_VERNUM: 4784,
    ZSTD_btlazy2: 6,
    ZSTD_btopt: 7,
    ZSTD_btultra: 8,
    ZSTD_btultra2: 9,
    ZSTD_c_chainLog: 103,
    ZSTD_c_checksumFlag: 201,
    ZSTD_c_compressionLevel: 100,
    ZSTD_c_contentSizeFlag: 200,
    ZSTD_c_dictIDFlag: 202,
    ZSTD_c_enableLongDistanceMatching: 160,
    ZSTD_c_hashLog: 102,
    ZSTD_c_jobSize: 241,
    ZSTD_c_ldmBucketSizeLog: 163,
    ZSTD_c_ldmHashLog: 161,
    ZSTD_c_ldmHashRateLog: 164,
    ZSTD_c_ldmMinMatch: 162,
    ZSTD_c_minMatch: 105,
    ZSTD_c_nbWorkers: 240,
    ZSTD_c_overlapLog: 242,
    ZSTD_c_searchLog: 104,
    ZSTD_c_strategy: 107,
    ZSTD_c_targetLength: 106,
    ZSTD_c_windowLog: 101,
    ZSTD_COMPRESS: 10,
    ZSTD_d_windowLogMax: 100,
    ZSTD_DECOMPRESS: 11,
    ZSTD_dfast: 2,
    ZSTD_e_continue: 0,
    ZSTD_e_end: 2,
    ZSTD_e_flush: 1,
    ZSTD_fast: 1,
    ZSTD_greedy: 3,
    ZSTD_lazy: 4,
    ZSTD_lazy2: 5,
    zstdCompress: [Circular: *44],
    ZstdCompress: [Circular: *45],
    zstdCompressSync: [Circular: *46],
    zstdDecompress: [Circular: *47],
    ZstdDecompress: [Circular: *48],
    zstdDecompressSync: [Circular: *49]
}
```

</td>
    </tr>
  </table>
</details>

## Credits
Adapted from [compare-bun-node](https://github.com/privatenumber/compare-bun-node/) by [@privatenumber](https://github.com/privatenumber).
