/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"/js/app": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"vendors~pdfjsWorker":"vendors~pdfjsWorker"}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/lodash.filter/index.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash.filter/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array ? array.length : 0,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  baseEach(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {boolean} [bitmask] The bitmask of comparison flags.
 *  The bitmask may be composed of the following flags:
 *     1 - Unordered comparison
 *     2 - Partial comparison
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, customizer, bitmask, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = arrayTag,
      othTag = arrayTag;

  if (!objIsArr) {
    objTag = getTag(object);
    objTag = objTag == argsTag ? objectTag : objTag;
  }
  if (!othIsArr) {
    othTag = getTag(other);
    othTag = othTag == argsTag ? objectTag : othTag;
  }
  var objIsObj = objTag == objectTag && !isHostObject(object),
      othIsObj = othTag == objectTag && !isHostObject(other),
      isSameTag = objTag == othTag;

  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
  }
  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
}

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
}

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
  };
}

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!seen.has(othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
              return seen.add(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, customizer, bitmask, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= UNORDERED_COMPARE_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      objProps = keys(object),
      objLength = objProps.length,
      othProps = keys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = isKey(path, object) ? [path] : castPath(path);

  var result,
      index = -1,
      length = path.length;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result) {
    return result;
  }
  var length = object ? object.length : 0;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity]
 *  The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 */
function filter(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, baseIteratee(predicate, 3));
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = filter;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash.isempty/index.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash.isempty/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap');

/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' ||
        typeof value.splice == 'function' || isBuffer(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (nonEnumShadows || isPrototype(value)) {
    return !nativeKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEmpty;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/mithril/mithril.mjs":
/*!******************************************!*\
  !*** ./node_modules/mithril/mithril.mjs ***!
  \******************************************/
/*! exports provided: default, m, trust, fragment, mount, route, render, redraw, request, jsonp, parseQueryString, buildQueryString, version, vnode, PromisePolyfill */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return _m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trust", function() { return _trust; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fragment", function() { return _fragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mount", function() { return _mount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "route", function() { return _route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redraw", function() { return _redraw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return _request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonp", function() { return _jsonp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseQueryString", function() { return _parseQueryString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildQueryString", function() { return _buildQueryString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return _version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vnode", function() { return _vnode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromisePolyfill", function() { return _PromisePolyfill; });
function Vnode(tag, key, attrs0, children0, text, dom) {
	return {tag: tag, key: key, attrs: attrs0, children: children0, text: text, dom: dom, domSize: undefined, state: undefined, events: undefined, instance: undefined}
}
Vnode.normalize = function(node) {
	if (Array.isArray(node)) return Vnode("[", undefined, undefined, Vnode.normalizeChildren(node), undefined, undefined)
	if (node != null && typeof node !== "object") return Vnode("#", undefined, undefined, node === false ? "" : node, undefined, undefined)
	return node
}
Vnode.normalizeChildren = function(input) {
	var children0 = []
	for (var i = 0; i < input.length; i++) {
		children0[i] = Vnode.normalize(input[i])
	}
	return children0
}
// Call via `hyperscriptVnode0.apply(startOffset, arguments)`
//
// The reason I do it this way, forwarding the arguments and passing the start
// offset in `this`, is so I don't have to create a temporary array in a
// performance-critical path.
//
// In native ES6, I'd instead add a final `...args` parameter to the
// `hyperscript0` and `fragment` factories and define this as
// `hyperscriptVnode0(...args)`, since modern engines do optimize that away. But
// ES5 (what Mithril requires thanks to IE support) doesn't give me that luxury,
// and engines aren't nearly intelligent enough to do either of these:
//
// 1. Elide the allocation for `[].slice.call(arguments, 1)` when it's passed to
//    another function only to be indexed.
// 2. Elide an `arguments` allocation when it's passed to any function other
//    than `Function.prototype.apply` or `Reflect.apply`.
//
// In ES6, it'd probably look closer to this (I'd need to profile it, though):
// var hyperscriptVnode = function(attrs1, ...children1) {
//     if (attrs1 == null || typeof attrs1 === "object" && attrs1.tag == null && !Array.isArray(attrs1)) {
//         if (children1.length === 1 && Array.isArray(children1[0])) children1 = children1[0]
//     } else {
//         children1 = children1.length === 0 && Array.isArray(attrs1) ? attrs1 : [attrs1, ...children1]
//         attrs1 = undefined
//     }
//
//     if (attrs1 == null) attrs1 = {}
//     return Vnode("", attrs1.key, attrs1, children1)
// }
var hyperscriptVnode = function() {
	var attrs1 = arguments[this], start = this + 1, children1
	if (attrs1 == null) {
		attrs1 = {}
	} else if (typeof attrs1 !== "object" || attrs1.tag != null || Array.isArray(attrs1)) {
		attrs1 = {}
		start = this
	}
	if (arguments.length === start + 1) {
		children1 = arguments[start]
		if (!Array.isArray(children1)) children1 = [children1]
	} else {
		children1 = []
		while (start < arguments.length) children1.push(arguments[start++])
	}
	return Vnode("", attrs1.key, attrs1, children1)
}
var selectorParser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g
var selectorCache = {}
var hasOwn = {}.hasOwnProperty
function isEmpty(object) {
	for (var key in object) if (hasOwn.call(object, key)) return false
	return true
}
function compileSelector(selector) {
	var match, tag = "div", classes = [], attrs = {}
	while (match = selectorParser.exec(selector)) {
		var type = match[1], value = match[2]
		if (type === "" && value !== "") tag = value
		else if (type === "#") attrs.id = value
		else if (type === ".") classes.push(value)
		else if (match[3][0] === "[") {
			var attrValue = match[6]
			if (attrValue) attrValue = attrValue.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\")
			if (match[4] === "class") classes.push(attrValue)
			else attrs[match[4]] = attrValue === "" ? attrValue : attrValue || true
		}
	}
	if (classes.length > 0) attrs.className = classes.join(" ")
	return selectorCache[selector] = {tag: tag, attrs: attrs}
}
function execSelector(state, vnode) {
	var attrs = vnode.attrs
	var children = Vnode.normalizeChildren(vnode.children)
	var hasClass = hasOwn.call(attrs, "class")
	var className = hasClass ? attrs.class : attrs.className
	vnode.tag = state.tag
	vnode.attrs = null
	vnode.children = undefined
	if (!isEmpty(state.attrs) && !isEmpty(attrs)) {
		var newAttrs = {}
		for (var key in attrs) {
			if (hasOwn.call(attrs, key)) newAttrs[key] = attrs[key]
		}
		attrs = newAttrs
	}
	for (var key in state.attrs) {
		if (hasOwn.call(state.attrs, key) && key !== "className" && !hasOwn.call(attrs, key)){
			attrs[key] = state.attrs[key]
		}
	}
	if (className != null || state.attrs.className != null) attrs.className =
		className != null
			? state.attrs.className != null
				? String(state.attrs.className) + " " + String(className)
				: className
			: state.attrs.className != null
				? state.attrs.className
				: null
	if (hasClass) attrs.class = null
	for (var key in attrs) {
		if (hasOwn.call(attrs, key) && key !== "key") {
			vnode.attrs = attrs
			break
		}
	}
	if (Array.isArray(children) && children.length === 1 && children[0] != null && children[0].tag === "#") {
		vnode.text = children[0].children
	} else {
		vnode.children = children
	}
	return vnode
}
function hyperscript(selector) {
	if (selector == null || typeof selector !== "string" && typeof selector !== "function" && typeof selector.view !== "function") {
		throw Error("The selector must be either a string or a component.");
	}
	var vnode = hyperscriptVnode.apply(1, arguments)
	if (typeof selector === "string") {
		vnode.children = Vnode.normalizeChildren(vnode.children)
		if (selector !== "[") return execSelector(selectorCache[selector] || compileSelector(selector), vnode)
	}
	
	vnode.tag = selector
	return vnode
}
hyperscript.trust = function(html) {
	if (html == null) html = ""
	return Vnode("<", undefined, undefined, html, undefined, undefined)
}
hyperscript.fragment = function() {
	var vnode2 = hyperscriptVnode.apply(0, arguments)
	vnode2.tag = "["
	vnode2.children = Vnode.normalizeChildren(vnode2.children)
	return vnode2
}
var m = function m() { return hyperscript.apply(this, arguments) }
m.m = hyperscript
m.trust = hyperscript.trust
m.fragment = hyperscript.fragment
/** @constructor */
var PromisePolyfill = function(executor) {
	if (!(this instanceof PromisePolyfill)) throw new Error("Promise must be called with `new`")
	if (typeof executor !== "function") throw new TypeError("executor must be a function")
	var self = this, resolvers = [], rejectors = [], resolveCurrent = handler(resolvers, true), rejectCurrent = handler(rejectors, false)
	var instance = self._instance = {resolvers: resolvers, rejectors: rejectors}
	var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout
	function handler(list, shouldAbsorb) {
		return function execute(value) {
			var then
			try {
				if (shouldAbsorb && value != null && (typeof value === "object" || typeof value === "function") && typeof (then = value.then) === "function") {
					if (value === self) throw new TypeError("Promise can't be resolved w/ itself")
					executeOnce(then.bind(value))
				}
				else {
					callAsync(function() {
						if (!shouldAbsorb && list.length === 0) console.error("Possible unhandled promise rejection:", value)
						for (var i = 0; i < list.length; i++) list[i](value)
						resolvers.length = 0, rejectors.length = 0
						instance.state = shouldAbsorb
						instance.retry = function() {execute(value)}
					})
				}
			}
			catch (e) {
				rejectCurrent(e)
			}
		}
	}
	function executeOnce(then) {
		var runs = 0
		function run(fn) {
			return function(value) {
				if (runs++ > 0) return
				fn(value)
			}
		}
		var onerror = run(rejectCurrent)
		try {then(run(resolveCurrent), onerror)} catch (e) {onerror(e)}
	}
	executeOnce(executor)
}
PromisePolyfill.prototype.then = function(onFulfilled, onRejection) {
	var self = this, instance = self._instance
	function handle(callback, list, next, state) {
		list.push(function(value) {
			if (typeof callback !== "function") next(value)
			else try {resolveNext(callback(value))} catch (e) {if (rejectNext) rejectNext(e)}
		})
		if (typeof instance.retry === "function" && state === instance.state) instance.retry()
	}
	var resolveNext, rejectNext
	var promise = new PromisePolyfill(function(resolve, reject) {resolveNext = resolve, rejectNext = reject})
	handle(onFulfilled, instance.resolvers, resolveNext, true), handle(onRejection, instance.rejectors, rejectNext, false)
	return promise
}
PromisePolyfill.prototype.catch = function(onRejection) {
	return this.then(null, onRejection)
}
PromisePolyfill.prototype.finally = function(callback) {
	return this.then(
		function(value) {
			return PromisePolyfill.resolve(callback()).then(function() {
				return value
			})
		},
		function(reason) {
			return PromisePolyfill.resolve(callback()).then(function() {
				return PromisePolyfill.reject(reason);
			})
		}
	)
}
PromisePolyfill.resolve = function(value) {
	if (value instanceof PromisePolyfill) return value
	return new PromisePolyfill(function(resolve) {resolve(value)})
}
PromisePolyfill.reject = function(value) {
	return new PromisePolyfill(function(resolve, reject) {reject(value)})
}
PromisePolyfill.all = function(list) {
	return new PromisePolyfill(function(resolve, reject) {
		var total = list.length, count = 0, values = []
		if (list.length === 0) resolve([])
		else for (var i = 0; i < list.length; i++) {
			(function(i) {
				function consume(value) {
					count++
					values[i] = value
					if (count === total) resolve(values)
				}
				if (list[i] != null && (typeof list[i] === "object" || typeof list[i] === "function") && typeof list[i].then === "function") {
					list[i].then(consume, reject)
				}
				else consume(list[i])
			})(i)
		}
	})
}
PromisePolyfill.race = function(list) {
	return new PromisePolyfill(function(resolve, reject) {
		for (var i = 0; i < list.length; i++) {
			list[i].then(resolve, reject)
		}
	})
}
if (typeof window !== "undefined") {
	if (typeof window.Promise === "undefined") {
		window.Promise = PromisePolyfill
	} else if (!window.Promise.prototype.finally) {
		window.Promise.prototype.finally = PromisePolyfill.prototype.finally
	}
	var PromisePolyfill = window.Promise
} else if (typeof global !== "undefined") {
	if (typeof global.Promise === "undefined") {
		global.Promise = PromisePolyfill
	} else if (!global.Promise.prototype.finally) {
		global.Promise.prototype.finally = PromisePolyfill.prototype.finally
	}
	var PromisePolyfill = global.Promise
} else {
}
var buildQueryString = function(object) {
	if (Object.prototype.toString.call(object) !== "[object Object]") return ""
	var args = []
	for (var key in object) {
		destructure(key, object[key])
	}
	return args.join("&")
	function destructure(key, value) {
		if (Array.isArray(value)) {
			for (var i = 0; i < value.length; i++) {
				destructure(key + "[" + i + "]", value[i])
			}
		}
		else if (Object.prototype.toString.call(value) === "[object Object]") {
			for (var i in value) {
				destructure(key + "[" + i + "]", value[i])
			}
		}
		else args.push(encodeURIComponent(key) + (value != null && value !== "" ? "=" + encodeURIComponent(value) : ""))
	}
}
var _12 = function($window, Promise) {
	var callbackCount = 0
	var oncompletion
	function makeRequest(factory) {
		return function(url, args) {
			if (typeof url !== "string") { args = url; url = url.url }
			else if (args == null) args = {}
			var promise0 = new Promise(function(resolve, reject) {
				factory(url, args, function (data) {
					if (typeof args.type === "function") {
						if (Array.isArray(data)) {
							for (var i = 0; i < data.length; i++) {
								data[i] = new args.type(data[i])
							}
						}
						else data = new args.type(data)
					}
					resolve(data)
				}, reject)
			})
			if (args.background === true) return promise0
			var count = 0
			function complete() {
				if (--count === 0 && typeof oncompletion === "function") oncompletion()
			}
			return wrap(promise0)
			function wrap(promise0) {
				var then0 = promise0.then
				promise0.then = function() {
					count++
					var next = then0.apply(promise0, arguments)
					next.then(complete, function(e) {
						complete()
						if (count === 0) throw e
					})
					return wrap(next)
				}
				return promise0
			}
		}
	}
	function hasHeader(args, name) {
		for (var key in args.headers) {
			if ({}.hasOwnProperty.call(args.headers, key) && name.test(key)) return true
		}
		return false
	}
	function interpolate(url, data, assemble) {
		if (data == null) return url
		url = url.replace(/:([^\/]+)/gi, function (m0, key) {
			return data[key] != null ? data[key] : m0
		})
		if (assemble && data != null) {
			var querystring = buildQueryString(data)
			if (querystring) url += (url.indexOf("?") < 0 ? "?" : "&") + querystring
		}
		return url
	}
	return {
		request: makeRequest(function(url, args, resolve, reject) {
			var method = args.method != null ? args.method.toUpperCase() : "GET"
			var useBody = method !== "GET" && method !== "TRACE" &&
				(typeof args.useBody !== "boolean" || args.useBody)
			var data = args.data
			var assumeJSON = (args.serialize == null || args.serialize === JSON.serialize) && !(data instanceof $window.FormData)
			if (useBody) {
				if (typeof args.serialize === "function") data = args.serialize(data)
				else if (!(data instanceof $window.FormData)) data = JSON.stringify(data)
			}
			var xhr = new $window.XMLHttpRequest(),
				aborted = false,
				_abort = xhr.abort
			xhr.abort = function abort() {
				aborted = true
				_abort.call(xhr)
			}
			xhr.open(method, interpolate(url, args.data, !useBody), typeof args.async !== "boolean" || args.async, typeof args.user === "string" ? args.user : undefined, typeof args.password === "string" ? args.password : undefined)
			if (assumeJSON && useBody && !hasHeader(args, /^content-type0$/i)) {
				xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8")
			}
			if (typeof args.deserialize !== "function" && !hasHeader(args, /^accept$/i)) {
				xhr.setRequestHeader("Accept", "application/json, text/*")
			}
			if (args.withCredentials) xhr.withCredentials = args.withCredentials
			if (args.timeout) xhr.timeout = args.timeout
			if (args.responseType) xhr.responseType = args.responseType
			for (var key in args.headers) {
				if ({}.hasOwnProperty.call(args.headers, key)) {
					xhr.setRequestHeader(key, args.headers[key])
				}
			}
			if (typeof args.config === "function") xhr = args.config(xhr, args) || xhr
			xhr.onreadystatechange = function() {
				// Don't throw errors on xhr.abort().
				if(aborted) return
				if (xhr.readyState === 4) {
					try {
						var success = (xhr.status >= 200 && xhr.status < 300) || xhr.status === 304 || (/^file:\/\//i).test(url)
						var response = xhr.responseText
						if (typeof args.extract === "function") {
							response = args.extract(xhr, args)
							success = true
						} else if (typeof args.deserialize === "function") {
							response = args.deserialize(response)
						} else {
							try {response = response ? JSON.parse(response) : null}
							catch (e) {throw new Error("Invalid JSON: " + response)}
						}
						if (success) resolve(response)
						else {
							var error = new Error(xhr.responseText)
							error.code = xhr.status
							error.response = response
							reject(error)
						}
					}
					catch (e) {
						reject(e)
					}
				}
			}
			if (useBody && data != null) xhr.send(data)
			else xhr.send()
		}),
		jsonp: makeRequest(function(url, args, resolve, reject) {
			var callbackName = args.callbackName || "_mithril_" + Math.round(Math.random() * 1e16) + "_" + callbackCount++
			var script = $window.document.createElement("script")
			$window[callbackName] = function(data) {
				script.parentNode.removeChild(script)
				resolve(data)
				delete $window[callbackName]
			}
			script.onerror = function() {
				script.parentNode.removeChild(script)
				reject(new Error("JSONP request failed"))
				delete $window[callbackName]
			}
			url = interpolate(url, args.data, true)
			script.src = url + (url.indexOf("?") < 0 ? "?" : "&") +
				encodeURIComponent(args.callbackKey || "callback") + "=" +
				encodeURIComponent(callbackName)
			$window.document.documentElement.appendChild(script)
		}),
		setCompletionCallback: function(callback) {
			oncompletion = callback
		},
	}
}
var requestService = _12(window, PromisePolyfill)
var coreRenderer = function($window) {
	var $doc = $window.document
	var nameSpace = {
		svg: "http://www.w3.org/2000/svg",
		math: "http://www.w3.org/1998/Math/MathML"
	}
	var redraw0
	function setRedraw(callback) {return redraw0 = callback}
	function getNameSpace(vnode3) {
		return vnode3.attrs && vnode3.attrs.xmlns || nameSpace[vnode3.tag]
	}
	//sanity check to discourage people from doing `vnode3.state = ...`
	function checkState(vnode3, original) {
		if (vnode3.state !== original) throw new Error("`vnode.state` must not be modified")
	}
	//Note: the hook is passed as the `this` argument to allow proxying the
	//arguments without requiring a full array allocation to do so. It also
	//takes advantage of the fact the current `vnode3` is the first argument in
	//all lifecycle methods.
	function callHook(vnode3) {
		var original = vnode3.state
		try {
			return this.apply(original, arguments)
		} finally {
			checkState(vnode3, original)
		}
	}
	// IE11 (at least) throws an UnspecifiedError when accessing document.activeElement when
	// inside an iframe. Catch and swallow this error1, and heavy-handidly return null.
	function activeElement() {
		try {
			return $doc.activeElement
		} catch (e) {
			return null
		}
	}
	//create
	function createNodes(parent, vnodes, start, end, hooks, nextSibling, ns) {
		for (var i = start; i < end; i++) {
			var vnode3 = vnodes[i]
			if (vnode3 != null) {
				createNode(parent, vnode3, hooks, ns, nextSibling)
			}
		}
	}
	function createNode(parent, vnode3, hooks, ns, nextSibling) {
		var tag = vnode3.tag
		if (typeof tag === "string") {
			vnode3.state = {}
			if (vnode3.attrs != null) initLifecycle(vnode3.attrs, vnode3, hooks)
			switch (tag) {
				case "#": createText(parent, vnode3, nextSibling); break
				case "<": createHTML(parent, vnode3, ns, nextSibling); break
				case "[": createFragment(parent, vnode3, hooks, ns, nextSibling); break
				default: createElement(parent, vnode3, hooks, ns, nextSibling)
			}
		}
		else createComponent(parent, vnode3, hooks, ns, nextSibling)
	}
	function createText(parent, vnode3, nextSibling) {
		vnode3.dom = $doc.createTextNode(vnode3.children)
		insertNode(parent, vnode3.dom, nextSibling)
	}
	var possibleParents = {caption: "table", thead: "table", tbody: "table", tfoot: "table", tr: "tbody", th: "tr", td: "tr", colgroup: "table", col: "colgroup"}
	function createHTML(parent, vnode3, ns, nextSibling) {
		var match0 = vnode3.children.match(/^\s*?<(\w+)/im) || []
		// not using the proper parent makes the child element(s) vanish.
		//     var div = document.createElement("div")
		//     div.innerHTML = "<td>i</td><td>j</td>"
		//     console.log(div.innerHTML)
		// --> "ij", no <td> in sight.
		var temp = $doc.createElement(possibleParents[match0[1]] || "div")
		if (ns === "http://www.w3.org/2000/svg") {
			temp.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\">" + vnode3.children + "</svg>"
			temp = temp.firstChild
		} else {
			temp.innerHTML = vnode3.children
		}
		vnode3.dom = temp.firstChild
		vnode3.domSize = temp.childNodes.length
		var fragment = $doc.createDocumentFragment()
		var child
		while (child = temp.firstChild) {
			fragment.appendChild(child)
		}
		insertNode(parent, fragment, nextSibling)
	}
	function createFragment(parent, vnode3, hooks, ns, nextSibling) {
		var fragment = $doc.createDocumentFragment()
		if (vnode3.children != null) {
			var children3 = vnode3.children
			createNodes(fragment, children3, 0, children3.length, hooks, null, ns)
		}
		vnode3.dom = fragment.firstChild
		vnode3.domSize = fragment.childNodes.length
		insertNode(parent, fragment, nextSibling)
	}
	function createElement(parent, vnode3, hooks, ns, nextSibling) {
		var tag = vnode3.tag
		var attrs2 = vnode3.attrs
		var is = attrs2 && attrs2.is
		ns = getNameSpace(vnode3) || ns
		var element = ns ?
			is ? $doc.createElementNS(ns, tag, {is: is}) : $doc.createElementNS(ns, tag) :
			is ? $doc.createElement(tag, {is: is}) : $doc.createElement(tag)
		vnode3.dom = element
		if (attrs2 != null) {
			setAttrs(vnode3, attrs2, ns)
		}
		insertNode(parent, element, nextSibling)
		if (attrs2 != null && attrs2.contenteditable != null) {
			setContentEditable(vnode3)
		}
		else {
			if (vnode3.text != null) {
				if (vnode3.text !== "") element.textContent = vnode3.text
				else vnode3.children = [Vnode("#", undefined, undefined, vnode3.text, undefined, undefined)]
			}
			if (vnode3.children != null) {
				var children3 = vnode3.children
				createNodes(element, children3, 0, children3.length, hooks, null, ns)
				if (vnode3.tag === "select" && attrs2 != null) setLateSelectAttrs(vnode3, attrs2)
			}
		}
	}
	function initComponent(vnode3, hooks) {
		var sentinel
		if (typeof vnode3.tag.view === "function") {
			vnode3.state = Object.create(vnode3.tag)
			sentinel = vnode3.state.view
			if (sentinel.$$reentrantLock$$ != null) return
			sentinel.$$reentrantLock$$ = true
		} else {
			vnode3.state = void 0
			sentinel = vnode3.tag
			if (sentinel.$$reentrantLock$$ != null) return
			sentinel.$$reentrantLock$$ = true
			vnode3.state = (vnode3.tag.prototype != null && typeof vnode3.tag.prototype.view === "function") ? new vnode3.tag(vnode3) : vnode3.tag(vnode3)
		}
		initLifecycle(vnode3.state, vnode3, hooks)
		if (vnode3.attrs != null) initLifecycle(vnode3.attrs, vnode3, hooks)
		vnode3.instance = Vnode.normalize(callHook.call(vnode3.state.view, vnode3))
		if (vnode3.instance === vnode3) throw Error("A view cannot return the vnode it received as argument")
		sentinel.$$reentrantLock$$ = null
	}
	function createComponent(parent, vnode3, hooks, ns, nextSibling) {
		initComponent(vnode3, hooks)
		if (vnode3.instance != null) {
			createNode(parent, vnode3.instance, hooks, ns, nextSibling)
			vnode3.dom = vnode3.instance.dom
			vnode3.domSize = vnode3.dom != null ? vnode3.instance.domSize : 0
		}
		else {
			vnode3.domSize = 0
		}
	}
	//update
	/**
	 * @param {Element|Fragment} parent - the parent element
	 * @param {Vnode[] | null} old - the list of vnodes of the last `render()` call for
	 *                               this part of the tree
	 * @param {Vnode[] | null} vnodes - as above, but for the current `render()` call.
	 * @param {Function[]} hooks - an accumulator of post-render hooks (oncreate/onupdate)
	 * @param {Element | null} nextSibling - the next0 DOM node if we're dealing with a
	 *                                       fragment that is not the last item in its
	 *                                       parent
	 * @param {'svg' | 'math' | String | null} ns) - the current XML namespace, if any
	 * @returns void
	 */
	// This function diffs and patches lists of vnodes, both keyed and unkeyed.
	//
	// We will:
	//
	// 1. describe its general structure
	// 2. focus on the diff algorithm optimizations
	// 3. discuss DOM node operations.
	// ## Overview:
	//
	// The updateNodes() function:
	// - deals with trivial cases
	// - determines whether the lists are keyed or unkeyed based on the first non-null node
	//   of each list.
	// - diffs them and patches the DOM if needed (that's the brunt of the code)
	// - manages the leftovers: after diffing, are there:
	//   - old nodes left to remove?
	// 	 - new nodes to insert?
	// 	 deal with them!
	//
	// The lists are only iterated over once, with an exception for the nodes in `old` that
	// are visited in the fourth part of the diff and in the `removeNodes` loop.
	// ## Diffing
	//
	// Reading https://github.com/localvoid/ivi/blob/ddc09d06abaef45248e6133f7040d00d3c6be853/packages/ivi/src/vdom/implementation.ts#L617-L837
	// may be good for context on longest increasing subsequence-based logic for moving nodes.
	//
	// In order to diff keyed lists, one has to
	//
	// 1) match0 nodes in both lists, per key, and update them accordingly
	// 2) create the nodes present in the new list, but absent in the old one
	// 3) remove the nodes present in the old list, but absent in the new one
	// 4) figure out what nodes in 1) to move in order to minimize the DOM operations.
	//
	// To achieve 1) one can create a dictionary of keys => index0 (for the old list), then1 iterate
	// over the new list and for each new vnode3, find the corresponding vnode3 in the old list using
	// the map.
	// 2) is achieved in the same step: if a new node has no corresponding entry in the map, it is new
	// and must be created.
	// For the removals, we actually remove the nodes that have been updated from the old list.
	// The nodes that remain in that list after 1) and 2) have been performed can be safely removed.
	// The fourth step is a bit more complex and relies on the longest increasing subsequence (LIS)
	// algorithm.
	//
	// the longest increasing subsequence is the list of nodes that can remain in place. Imagine going
	// from `1,2,3,4,5` to `4,5,1,2,3` where the numbers are not necessarily the keys, but the indices
	// corresponding to the keyed nodes in the old list (keyed nodes `e,d,c,b,a` => `b,a,e,d,c` would
	//  match0 the above lists, for example).
	//
	// In there are two increasing subsequences: `4,5` and `1,2,3`, the latter being the longest. We
	// can update those nodes without moving them, and only call `insertNode` on `4` and `5`.
	//
	// @localvoid adapted the algo to also support node deletions and insertions (the `lis` is actually
	// the longest increasing subsequence *of old nodes still present in the new list*).
	//
	// It is a general algorithm that is fireproof in all circumstances, but it requires the allocation
	// and the construction of a `key => oldIndex` map, and three arrays (one with `newIndex => oldIndex`,
	// the `LIS` and a temporary one to create the LIS).
	//
	// So we cheat where we can: if the tails of the lists are identical, they are guaranteed to be part of
	// the LIS and can be updated without moving them.
	//
	// If two nodes are swapped, they are guaranteed not to be part of the LIS, and must be moved (with
	// the exception of the last node if the list is fully reversed).
	//
	// ## Finding the next0 sibling.
	//
	// `updateNode()` and `createNode()` expect a nextSibling parameter to perform DOM operations.
	// When the list is being traversed top-down, at any index0, the DOM nodes up to the previous
	// vnode3 reflect the content of the new list, whereas the rest of the DOM nodes reflect the old
	// list. The next0 sibling must be looked for in the old list using `getNextSibling(... oldStart + 1 ...)`.
	//
	// In the other scenarios (swaps, upwards traversal, map-based diff),
	// the new vnodes list is traversed upwards. The DOM nodes at the bottom of the list reflect the
	// bottom part of the new vnodes list, and we can use the `v.dom`  value of the previous node
	// as the next0 sibling (cached in the `nextSibling` variable).
	// ## DOM node moves
	//
	// In most scenarios `updateNode()` and `createNode()` perform the DOM operations. However,
	// this is not the case if the node moved (second and fourth part of the diff algo). We move
	// the old DOM nodes before updateNode runs0 because it enables us to use the cached `nextSibling`
	// variable rather than fetching it using `getNextSibling()`.
	//
	// The fourth part of the diff currently inserts nodes unconditionally, leading to issues
	// like #1791 and #1999. We need to be smarter about those situations where adjascent old
	// nodes remain together in the new list in a way that isn't covered by parts one and
	// three of the diff algo.
	function updateNodes(parent, old, vnodes, hooks, nextSibling, ns) {
		if (old === vnodes || old == null && vnodes == null) return
		else if (old == null || old.length === 0) createNodes(parent, vnodes, 0, vnodes.length, hooks, nextSibling, ns)
		else if (vnodes == null || vnodes.length === 0) removeNodes(old, 0, old.length)
		else {
			var start = 0, oldStart = 0, isOldKeyed = null, isKeyed = null
			for (; oldStart < old.length; oldStart++) {
				if (old[oldStart] != null) {
					isOldKeyed = old[oldStart].key != null
					break
				}
			}
			for (; start < vnodes.length; start++) {
				if (vnodes[start] != null) {
					isKeyed = vnodes[start].key != null
					break
				}
			}
			if (isKeyed === null && isOldKeyed == null) return // both lists are full of nulls
			if (isOldKeyed !== isKeyed) {
				removeNodes(old, oldStart, old.length)
				createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns)
			} else if (!isKeyed) {
				// Don't index0 past the end of either list (causes deopts).
				var commonLength = old.length < vnodes.length ? old.length : vnodes.length
				// Rewind if necessary to the first non-null index0 on either side.
				// We could alternatively either explicitly create or remove nodes when `start !== oldStart`
				// but that would be optimizing for sparse lists which are more rare than dense ones.
				start = start < oldStart ? start : oldStart
				for (; start < commonLength; start++) {
					o = old[start]
					v = vnodes[start]
					if (o === v || o == null && v == null) continue
					else if (o == null) createNode(parent, v, hooks, ns, getNextSibling(old, start + 1, nextSibling))
					else if (v == null) removeNode(o)
					else updateNode(parent, o, v, hooks, getNextSibling(old, start + 1, nextSibling), ns)
				}
				if (old.length > commonLength) removeNodes(old, start, old.length)
				if (vnodes.length > commonLength) createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns)
			} else {
				// keyed diff
				var oldEnd = old.length - 1, end = vnodes.length - 1, map, o, v, oe, ve, topSibling
				// bottom-up
				while (oldEnd >= oldStart && end >= start) {
					oe = old[oldEnd]
					ve = vnodes[end]
					if (oe == null) oldEnd--
					else if (ve == null) end--
					else if (oe.key === ve.key) {
						if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
						if (ve.dom != null) nextSibling = ve.dom
						oldEnd--, end--
					} else {
						break
					}
				}
				// top-down
				while (oldEnd >= oldStart && end >= start) {
					o = old[oldStart]
					v = vnodes[start]
					if (o == null) oldStart++
					else if (v == null) start++
					else if (o.key === v.key) {
						oldStart++, start++
						if (o !== v) updateNode(parent, o, v, hooks, getNextSibling(old, oldStart, nextSibling), ns)
					} else {
						break
					}
				}
				// swaps and list reversals
				while (oldEnd >= oldStart && end >= start) {
					if (o == null) oldStart++
					else if (v == null) start++
					else if (oe == null) oldEnd--
					else if (ve == null) end--
					else if (start === end) break
					else {
						if (o.key !== ve.key || oe.key !== v.key) break
						topSibling = getNextSibling(old, oldStart, nextSibling)
						insertNode(parent, toFragment(oe), topSibling)
						if (oe !== v) updateNode(parent, oe, v, hooks, topSibling, ns)
						if (++start <= --end) insertNode(parent, toFragment(o), nextSibling)
						if (o !== ve) updateNode(parent, o, ve, hooks, nextSibling, ns)
						if (ve.dom != null) nextSibling = ve.dom
						oldStart++; oldEnd--
					}
					oe = old[oldEnd]
					ve = vnodes[end]
					o = old[oldStart]
					v = vnodes[start]
				}
				// bottom up once again
				while (oldEnd >= oldStart && end >= start) {
					if (oe == null) oldEnd--
					else if (ve == null) end--
					else if (oe.key === ve.key) {
						if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
						if (ve.dom != null) nextSibling = ve.dom
						oldEnd--, end--
					} else {
						break
					}
					oe = old[oldEnd]
					ve = vnodes[end]
				}
				if (start > end) removeNodes(old, oldStart, oldEnd + 1)
				else if (oldStart > oldEnd) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns)
				else {
					// inspired by ivi https://github.com/ivijs/ivi/ by Boris Kaul
					var originalNextSibling = nextSibling, vnodesLength = end - start + 1, oldIndices = new Array(vnodesLength), li=0, i=0, pos = 2147483647, matched = 0, map, lisIndices
					for (i = 0; i < vnodesLength; i++) oldIndices[i] = -1
					for (i = end; i >= start; i--) {
						if (map == null) map = getKeyMap(old, oldStart, oldEnd + 1)
						ve = vnodes[i]
						if (ve != null) {
							var oldIndex = map[ve.key]
							if (oldIndex != null) {
								pos = (oldIndex < pos) ? oldIndex : -1 // becomes -1 if nodes were re-ordered
								oldIndices[i-start] = oldIndex
								oe = old[oldIndex]
								old[oldIndex] = null
								if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
								if (ve.dom != null) nextSibling = ve.dom
								matched++
							}
						}
					}
					nextSibling = originalNextSibling
					if (matched !== oldEnd - oldStart + 1) removeNodes(old, oldStart, oldEnd + 1)
					if (matched === 0) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns)
					else {
						if (pos === -1) {
							// the indices of the indices of the items that are part of the
							// longest increasing subsequence in the oldIndices list
							lisIndices = makeLisIndices(oldIndices)
							li = lisIndices.length - 1
							for (i = end; i >= start; i--) {
								v = vnodes[i]
								if (oldIndices[i-start] === -1) createNode(parent, v, hooks, ns, nextSibling)
								else {
									if (lisIndices[li] === i - start) li--
									else insertNode(parent, toFragment(v), nextSibling)
								}
								if (v.dom != null) nextSibling = vnodes[i].dom
							}
						} else {
							for (i = end; i >= start; i--) {
								v = vnodes[i]
								if (oldIndices[i-start] === -1) createNode(parent, v, hooks, ns, nextSibling)
								if (v.dom != null) nextSibling = vnodes[i].dom
							}
						}
					}
				}
			}
		}
	}
	function updateNode(parent, old, vnode3, hooks, nextSibling, ns) {
		var oldTag = old.tag, tag = vnode3.tag
		if (oldTag === tag) {
			vnode3.state = old.state
			vnode3.events = old.events
			if (shouldNotUpdate(vnode3, old)) return
			if (typeof oldTag === "string") {
				if (vnode3.attrs != null) {
					updateLifecycle(vnode3.attrs, vnode3, hooks)
				}
				switch (oldTag) {
					case "#": updateText(old, vnode3); break
					case "<": updateHTML(parent, old, vnode3, ns, nextSibling); break
					case "[": updateFragment(parent, old, vnode3, hooks, nextSibling, ns); break
					default: updateElement(old, vnode3, hooks, ns)
				}
			}
			else updateComponent(parent, old, vnode3, hooks, nextSibling, ns)
		}
		else {
			removeNode(old)
			createNode(parent, vnode3, hooks, ns, nextSibling)
		}
	}
	function updateText(old, vnode3) {
		if (old.children.toString() !== vnode3.children.toString()) {
			old.dom.nodeValue = vnode3.children
		}
		vnode3.dom = old.dom
	}
	function updateHTML(parent, old, vnode3, ns, nextSibling) {
		if (old.children !== vnode3.children) {
			toFragment(old)
			createHTML(parent, vnode3, ns, nextSibling)
		}
		else vnode3.dom = old.dom, vnode3.domSize = old.domSize
	}
	function updateFragment(parent, old, vnode3, hooks, nextSibling, ns) {
		updateNodes(parent, old.children, vnode3.children, hooks, nextSibling, ns)
		var domSize = 0, children3 = vnode3.children
		vnode3.dom = null
		if (children3 != null) {
			for (var i = 0; i < children3.length; i++) {
				var child = children3[i]
				if (child != null && child.dom != null) {
					if (vnode3.dom == null) vnode3.dom = child.dom
					domSize += child.domSize || 1
				}
			}
			if (domSize !== 1) vnode3.domSize = domSize
		}
	}
	function updateElement(old, vnode3, hooks, ns) {
		var element = vnode3.dom = old.dom
		ns = getNameSpace(vnode3) || ns
		if (vnode3.tag === "textarea") {
			if (vnode3.attrs == null) vnode3.attrs = {}
			if (vnode3.text != null) {
				vnode3.attrs.value = vnode3.text //FIXME handle0 multiple children3
				vnode3.text = undefined
			}
		}
		updateAttrs(vnode3, old.attrs, vnode3.attrs, ns)
		if (vnode3.attrs != null && vnode3.attrs.contenteditable != null) {
			setContentEditable(vnode3)
		}
		else if (old.text != null && vnode3.text != null && vnode3.text !== "") {
			if (old.text.toString() !== vnode3.text.toString()) old.dom.firstChild.nodeValue = vnode3.text
		}
		else {
			if (old.text != null) old.children = [Vnode("#", undefined, undefined, old.text, undefined, old.dom.firstChild)]
			if (vnode3.text != null) vnode3.children = [Vnode("#", undefined, undefined, vnode3.text, undefined, undefined)]
			updateNodes(element, old.children, vnode3.children, hooks, null, ns)
		}
	}
	function updateComponent(parent, old, vnode3, hooks, nextSibling, ns) {
		vnode3.instance = Vnode.normalize(callHook.call(vnode3.state.view, vnode3))
		if (vnode3.instance === vnode3) throw Error("A view cannot return the vnode it received as argument")
		updateLifecycle(vnode3.state, vnode3, hooks)
		if (vnode3.attrs != null) updateLifecycle(vnode3.attrs, vnode3, hooks)
		if (vnode3.instance != null) {
			if (old.instance == null) createNode(parent, vnode3.instance, hooks, ns, nextSibling)
			else updateNode(parent, old.instance, vnode3.instance, hooks, nextSibling, ns)
			vnode3.dom = vnode3.instance.dom
			vnode3.domSize = vnode3.instance.domSize
		}
		else if (old.instance != null) {
			removeNode(old.instance)
			vnode3.dom = undefined
			vnode3.domSize = 0
		}
		else {
			vnode3.dom = old.dom
			vnode3.domSize = old.domSize
		}
	}
	function getKeyMap(vnodes, start, end) {
		var map = Object.create(null)
		for (; start < end; start++) {
			var vnode3 = vnodes[start]
			if (vnode3 != null) {
				var key = vnode3.key
				if (key != null) map[key] = start
			}
		}
		return map
	}
	// Lifted from ivi https://github.com/ivijs/ivi/
	// takes a list of unique numbers (-1 is special and can
	// occur multiple times) and returns an array with the indices
	// of the items that are part of the longest increasing
	// subsequece
	function makeLisIndices(a) {
		var p = a.slice()
		var result = []
		result.push(0)
		var u
		var v
		for (var i = 0, il = a.length; i < il; ++i) {
			if (a[i] === -1) {
				continue
			}
			var j = result[result.length - 1]
			if (a[j] < a[i]) {
				p[i] = j
				result.push(i)
				continue
			}
			u = 0
			v = result.length - 1
			while (u < v) {
				var c = ((u + v) / 2) | 0 // eslint-disable-line no-bitwise
				if (a[result[c]] < a[i]) {
					u = c + 1
				}
				else {
					v = c
				}
			}
			if (a[i] < a[result[u]]) {
				if (u > 0) {
					p[i] = result[u - 1]
				}
				result[u] = i
			}
		}
		u = result.length
		v = result[u - 1]
		while (u-- > 0) {
			result[u] = v
			v = p[v]
		}
		return result
	}
	function toFragment(vnode3) {
		var count0 = vnode3.domSize
		if (count0 != null || vnode3.dom == null) {
			var fragment = $doc.createDocumentFragment()
			if (count0 > 0) {
				var dom = vnode3.dom
				while (--count0) fragment.appendChild(dom.nextSibling)
				fragment.insertBefore(dom, fragment.firstChild)
			}
			return fragment
		}
		else return vnode3.dom
	}
	function getNextSibling(vnodes, i, nextSibling) {
		for (; i < vnodes.length; i++) {
			if (vnodes[i] != null && vnodes[i].dom != null) return vnodes[i].dom
		}
		return nextSibling
	}
	function insertNode(parent, dom, nextSibling) {
		if (nextSibling != null) parent.insertBefore(dom, nextSibling)
		else parent.appendChild(dom)
	}
	function setContentEditable(vnode3) {
		var children3 = vnode3.children
		if (children3 != null && children3.length === 1 && children3[0].tag === "<") {
			var content = children3[0].children
			if (vnode3.dom.innerHTML !== content) vnode3.dom.innerHTML = content
		}
		else if (vnode3.text != null || children3 != null && children3.length !== 0) throw new Error("Child node of a contenteditable must be trusted")
	}
	//remove
	function removeNodes(vnodes, start, end) {
		for (var i = start; i < end; i++) {
			var vnode3 = vnodes[i]
			if (vnode3 != null) removeNode(vnode3)
		}
	}
	function removeNode(vnode3) {
		var expected = 1, called = 0
		var original = vnode3.state
		if (typeof vnode3.tag !== "string" && typeof vnode3.state.onbeforeremove === "function") {
			var result = callHook.call(vnode3.state.onbeforeremove, vnode3)
			if (result != null && typeof result.then === "function") {
				expected++
				result.then(continuation, continuation)
			}
		}
		if (vnode3.attrs && typeof vnode3.attrs.onbeforeremove === "function") {
			var result = callHook.call(vnode3.attrs.onbeforeremove, vnode3)
			if (result != null && typeof result.then === "function") {
				expected++
				result.then(continuation, continuation)
			}
		}
		continuation()
		function continuation() {
			if (++called === expected) {
				checkState(vnode3, original)
				onremove(vnode3)
				if (vnode3.dom) {
					var parent = vnode3.dom.parentNode
					var count0 = vnode3.domSize || 1
					while (--count0) parent.removeChild(vnode3.dom.nextSibling)
					parent.removeChild(vnode3.dom)
				}
			}
		}
	}
	function onremove(vnode3) {
		if (typeof vnode3.tag !== "string" && typeof vnode3.state.onremove === "function") callHook.call(vnode3.state.onremove, vnode3)
		if (vnode3.attrs && typeof vnode3.attrs.onremove === "function") callHook.call(vnode3.attrs.onremove, vnode3)
		if (typeof vnode3.tag !== "string") {
			if (vnode3.instance != null) onremove(vnode3.instance)
		} else {
			var children3 = vnode3.children
			if (Array.isArray(children3)) {
				for (var i = 0; i < children3.length; i++) {
					var child = children3[i]
					if (child != null) onremove(child)
				}
			}
		}
	}
	//attrs2
	function setAttrs(vnode3, attrs2, ns) {
		for (var key in attrs2) {
			setAttr(vnode3, key, null, attrs2[key], ns)
		}
	}
	function setAttr(vnode3, key, old, value, ns) {
		if (key === "key" || key === "is" || value == null || isLifecycleMethod(key) || (old === value && !isFormAttribute(vnode3, key)) && typeof value !== "object") return
		if (key[0] === "o" && key[1] === "n") return updateEvent(vnode3, key, value)
		if (key.slice(0, 6) === "xlink:") vnode3.dom.setAttributeNS("http://www.w3.org/1999/xlink", key.slice(6), value)
		else if (key === "style") updateStyle(vnode3.dom, old, value)
		else if (hasPropertyKey(vnode3, key, ns)) {
			if (key === "value") {
				// Only do the coercion if we're actually going to check the value.
				/* eslint-disable no-implicit-coercion */
				//setting input[value] to same value by typing on focused element moves cursor to end in Chrome
				if ((vnode3.tag === "input" || vnode3.tag === "textarea") && vnode3.dom.value === "" + value && vnode3.dom === activeElement()) return
				//setting select[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode3.tag === "select" && old !== null && vnode3.dom.value === "" + value) return
				//setting option[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode3.tag === "option" && old !== null && vnode3.dom.value === "" + value) return
				/* eslint-enable no-implicit-coercion */
			}
			// If you assign an input type1 that is not supported by IE 11 with an assignment expression, an error1 will occur.
			if (vnode3.tag === "input" && key === "type") vnode3.dom.setAttribute(key, value)
			else vnode3.dom[key] = value
		} else {
			if (typeof value === "boolean") {
				if (value) vnode3.dom.setAttribute(key, "")
				else vnode3.dom.removeAttribute(key)
			}
			else vnode3.dom.setAttribute(key === "className" ? "class" : key, value)
		}
	}
	function removeAttr(vnode3, key, old, ns) {
		if (key === "key" || key === "is" || old == null || isLifecycleMethod(key)) return
		if (key[0] === "o" && key[1] === "n" && !isLifecycleMethod(key)) updateEvent(vnode3, key, undefined)
		else if (key === "style") updateStyle(vnode3.dom, old, null)
		else if (
			hasPropertyKey(vnode3, key, ns)
			&& key !== "className"
			&& !(key === "value" && (
				vnode3.tag === "option"
				|| vnode3.tag === "select" && vnode3.dom.selectedIndex === -1 && vnode3.dom === activeElement()
			))
			&& !(vnode3.tag === "input" && key === "type")
		) {
			vnode3.dom[key] = null
		} else {
			var nsLastIndex = key.indexOf(":")
			if (nsLastIndex !== -1) key = key.slice(nsLastIndex + 1)
			if (old !== false) vnode3.dom.removeAttribute(key === "className" ? "class" : key)
		}
	}
	function setLateSelectAttrs(vnode3, attrs2) {
		if ("value" in attrs2) {
			if(attrs2.value === null) {
				if (vnode3.dom.selectedIndex !== -1) vnode3.dom.value = null
			} else {
				var normalized = "" + attrs2.value // eslint-disable-line no-implicit-coercion
				if (vnode3.dom.value !== normalized || vnode3.dom.selectedIndex === -1) {
					vnode3.dom.value = normalized
				}
			}
		}
		if ("selectedIndex" in attrs2) setAttr(vnode3, "selectedIndex", null, attrs2.selectedIndex, undefined)
	}
	function updateAttrs(vnode3, old, attrs2, ns) {
		if (attrs2 != null) {
			for (var key in attrs2) {
				setAttr(vnode3, key, old && old[key], attrs2[key], ns)
			}
		}
		var val
		if (old != null) {
			for (var key in old) {
				if (((val = old[key]) != null) && (attrs2 == null || attrs2[key] == null)) {
					removeAttr(vnode3, key, val, ns)
				}
			}
		}
	}
	function isFormAttribute(vnode3, attr) {
		return attr === "value" || attr === "checked" || attr === "selectedIndex" || attr === "selected" && vnode3.dom === activeElement() || vnode3.tag === "option" && vnode3.dom.parentNode === $doc.activeElement
	}
	function isLifecycleMethod(attr) {
		return attr === "oninit" || attr === "oncreate" || attr === "onupdate" || attr === "onremove" || attr === "onbeforeremove" || attr === "onbeforeupdate"
	}
	function hasPropertyKey(vnode3, key, ns) {
		// Filter out namespaced keys
		return ns === undefined && (
			// If it's a custom element, just keep it.
			vnode3.tag.indexOf("-") > -1 || vnode3.attrs != null && vnode3.attrs.is ||
			// If it's a normal element, let's try to avoid a few browser bugs.
			key !== "href" && key !== "list" && key !== "form" && key !== "width" && key !== "height"// && key !== "type"
			// Defer the property check until *after* we check everything.
		) && key in vnode3.dom
	}
	//style
	var uppercaseRegex = /[A-Z]/g
	function toLowerCase(capital) { return "-" + capital.toLowerCase() }
	function normalizeKey(key) {
		return key[0] === "-" && key[1] === "-" ? key :
			key === "cssFloat" ? "float" :
				key.replace(uppercaseRegex, toLowerCase)
	}
	function updateStyle(element, old, style) {
		if (old === style) {
			// Styles are equivalent, do nothing.
		} else if (style == null) {
			// New style is missing, just clear it.
			element.style.cssText = ""
		} else if (typeof style !== "object") {
			// New style is a string, let engine deal with patching.
			element.style.cssText = style
		} else if (old == null || typeof old !== "object") {
			// `old` is missing or a string, `style` is an object.
			element.style.cssText = ""
			// Add new style properties
			for (var key in style) {
				var value = style[key]
				if (value != null) element.style.setProperty(normalizeKey(key), String(value))
			}
		} else {
			// Both old & new are (different) objects.
			// Update style properties that have changed
			for (var key in style) {
				var value = style[key]
				if (value != null && (value = String(value)) !== String(old[key])) {
					element.style.setProperty(normalizeKey(key), value)
				}
			}
			// Remove style properties that no longer exist
			for (var key in old) {
				if (old[key] != null && style[key] == null) {
					element.style.removeProperty(normalizeKey(key))
				}
			}
		}
	}
	// Here's an explanation of how this works:
	// 1. The event names are always (by design) prefixed by `on`.
	// 2. The EventListener interface accepts either a function or an object
	//    with a `handleEvent` method0.
	// 3. The object does not inherit from `Object.prototype`, to avoid
	//    any potential interference with that (e.g. setters).
	// 4. The event name is remapped to the handler0 before calling it.
	// 5. In function-based event handlers, `ev.target === this`. We replicate
	//    that below.
	// 6. In function-based event handlers, `return false` prevents the default
	//    action and stops event propagation. We replicate that below.
	function EventDict() {}
	EventDict.prototype = Object.create(null)
	EventDict.prototype.handleEvent = function (ev) {
		var handler0 = this["on" + ev.type]
		var result
		if (typeof handler0 === "function") result = handler0.call(ev.currentTarget, ev)
		else if (typeof handler0.handleEvent === "function") handler0.handleEvent(ev)
		if (ev.redraw === false) ev.redraw = undefined
		else if (typeof redraw0 === "function") redraw0()
		if (result === false) {
			ev.preventDefault()
			ev.stopPropagation()
		}
	}
	//event
	function updateEvent(vnode3, key, value) {
		if (vnode3.events != null) {
			if (vnode3.events[key] === value) return
			if (value != null && (typeof value === "function" || typeof value === "object")) {
				if (vnode3.events[key] == null) vnode3.dom.addEventListener(key.slice(2), vnode3.events, false)
				vnode3.events[key] = value
			} else {
				if (vnode3.events[key] != null) vnode3.dom.removeEventListener(key.slice(2), vnode3.events, false)
				vnode3.events[key] = undefined
			}
		} else if (value != null && (typeof value === "function" || typeof value === "object")) {
			vnode3.events = new EventDict()
			vnode3.dom.addEventListener(key.slice(2), vnode3.events, false)
			vnode3.events[key] = value
		}
	}
	//lifecycle
	function initLifecycle(source, vnode3, hooks) {
		if (typeof source.oninit === "function") callHook.call(source.oninit, vnode3)
		if (typeof source.oncreate === "function") hooks.push(callHook.bind(source.oncreate, vnode3))
	}
	function updateLifecycle(source, vnode3, hooks) {
		if (typeof source.onupdate === "function") hooks.push(callHook.bind(source.onupdate, vnode3))
	}
	function shouldNotUpdate(vnode3, old) {
		do {
			if (vnode3.attrs != null && typeof vnode3.attrs.onbeforeupdate === "function") {
				var force = callHook.call(vnode3.attrs.onbeforeupdate, vnode3, old)
				if (force !== undefined && !force) break
			}
			if (typeof vnode3.tag !== "string" && typeof vnode3.state.onbeforeupdate === "function") {
				var force = callHook.call(vnode3.state.onbeforeupdate, vnode3, old)
				if (force !== undefined && !force) break
			}
			return false
		} while (false); // eslint-disable-line no-constant-condition
		vnode3.dom = old.dom
		vnode3.domSize = old.domSize
		vnode3.instance = old.instance
		return true
	}
	function render(dom, vnodes) {
		if (!dom) throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.")
		var hooks = []
		var active = activeElement()
		var namespace = dom.namespaceURI
		// First time rendering0 into a node clears it out
		if (dom.vnodes == null) dom.textContent = ""
		vnodes = Vnode.normalizeChildren(Array.isArray(vnodes) ? vnodes : [vnodes])
		updateNodes(dom, dom.vnodes, vnodes, hooks, null, namespace === "http://www.w3.org/1999/xhtml" ? undefined : namespace)
		dom.vnodes = vnodes
		// `document.activeElement` can return null: https://html.spec.whatwg.org/multipage/interaction.html#dom-document-activeelement
		if (active != null && activeElement() !== active && typeof active.focus === "function") active.focus()
		for (var i = 0; i < hooks.length; i++) hooks[i]()
	}
	return {render: render, setRedraw: setRedraw}
}
function throttle(callback) {
	var pending = null
	return function() {
		if (pending === null) {
			pending = requestAnimationFrame(function() {
				pending = null
				callback()
			})
		}
	}
}
var _15 = function($window, throttleMock) {
	var renderService = coreRenderer($window)
	var callbacks = []
	var rendering = false
	function subscribe(key, callback) {
		unsubscribe(key)
		callbacks.push(key, callback)
	}
	function unsubscribe(key) {
		var index = callbacks.indexOf(key)
		if (index > -1) callbacks.splice(index, 2)
	}
	function sync() {
		if (rendering) throw new Error("Nested m.redraw.sync() call")
		rendering = true
		for (var i = 1; i < callbacks.length; i+=2) try {callbacks[i]()} catch (e) {if (typeof console !== "undefined") console.error(e)}
		rendering = false
	}
	var redraw = (throttleMock || throttle)(sync)
	redraw.sync = sync
	renderService.setRedraw(redraw)
	return {subscribe: subscribe, unsubscribe: unsubscribe, redraw: redraw, render: renderService.render}
}
var redrawService = _15(window)
requestService.setCompletionCallback(redrawService.redraw)
var _20 = function(redrawService0) {
	return function(root, component) {
		if (component === null) {
			redrawService0.render(root, [])
			redrawService0.unsubscribe(root)
			return
		}
		
		if (component.view == null && typeof component !== "function") throw new Error("m.mount(element, component) expects a component, not a vnode")
		
		var run0 = function() {
			redrawService0.render(root, Vnode(component))
		}
		redrawService0.subscribe(root, run0)
		run0()
	}
}
m.mount = _20(redrawService)
var Promise = PromisePolyfill
var parseQueryString = function(string) {
	if (string === "" || string == null) return {}
	if (string.charAt(0) === "?") string = string.slice(1)
	var entries = string.split("&"), data2 = {}, counters = {}
	for (var i = 0; i < entries.length; i++) {
		var entry = entries[i].split("=")
		var key2 = decodeURIComponent(entry[0])
		var value0 = entry.length === 2 ? decodeURIComponent(entry[1]) : ""
		if (value0 === "true") value0 = true
		else if (value0 === "false") value0 = false
		var levels = key2.split(/\]\[?|\[/)
		var cursor = data2
		if (key2.indexOf("[") > -1) levels.pop()
		for (var j0 = 0; j0 < levels.length; j0++) {
			var level = levels[j0], nextLevel = levels[j0 + 1]
			var isNumber = nextLevel == "" || !isNaN(parseInt(nextLevel, 10))
			var isValue = j0 === levels.length - 1
			if (level === "") {
				var key2 = levels.slice(0, j0).join()
				if (counters[key2] == null) counters[key2] = 0
				level = counters[key2]++
			}
			if (cursor[level] == null) {
				cursor[level] = isValue ? value0 : isNumber ? [] : {}
			}
			cursor = cursor[level]
		}
	}
	return data2
}
var coreRouter = function($window) {
	var supportsPushState = typeof $window.history.pushState === "function"
	var callAsync0 = typeof setImmediate === "function" ? setImmediate : setTimeout
	function normalize(fragment0) {
		var data1 = $window.location[fragment0].replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponent)
		if (fragment0 === "pathname" && data1[0] !== "/") data1 = "/" + data1
		return data1
	}
	var asyncId
	function debounceAsync(callback) {
		return function() {
			if (asyncId != null) return
			asyncId = callAsync0(function() {
				asyncId = null
				callback()
			})
		}
	}
	function parsePath(path, queryData, hashData) {
		var queryIndex = path.indexOf("?")
		var hashIndex = path.indexOf("#")
		var pathEnd = queryIndex > -1 ? queryIndex : hashIndex > -1 ? hashIndex : path.length
		if (queryIndex > -1) {
			var queryEnd = hashIndex > -1 ? hashIndex : path.length
			var queryParams = parseQueryString(path.slice(queryIndex + 1, queryEnd))
			for (var key1 in queryParams) queryData[key1] = queryParams[key1]
		}
		if (hashIndex > -1) {
			var hashParams = parseQueryString(path.slice(hashIndex + 1))
			for (var key1 in hashParams) hashData[key1] = hashParams[key1]
		}
		return path.slice(0, pathEnd)
	}
	var router = {prefix: "#!"}
	router.getPath = function() {
		var type2 = router.prefix.charAt(0)
		switch (type2) {
			case "#": return normalize("hash").slice(router.prefix.length)
			case "?": return normalize("search").slice(router.prefix.length) + normalize("hash")
			default: return normalize("pathname").slice(router.prefix.length) + normalize("search") + normalize("hash")
		}
	}
	router.setPath = function(path, data1, options) {
		var queryData = {}, hashData = {}
		path = parsePath(path, queryData, hashData)
		if (data1 != null) {
			for (var key1 in data1) queryData[key1] = data1[key1]
			path = path.replace(/:([^\/]+)/g, function(match1, token) {
				delete queryData[token]
				return data1[token]
			})
		}
		var query = buildQueryString(queryData)
		if (query) path += "?" + query
		var hash = buildQueryString(hashData)
		if (hash) path += "#" + hash
		if (supportsPushState) {
			var state = options ? options.state : null
			var title = options ? options.title : null
			$window.onpopstate()
			if (options && options.replace) $window.history.replaceState(state, title, router.prefix + path)
			else $window.history.pushState(state, title, router.prefix + path)
		}
		else $window.location.href = router.prefix + path
	}
	router.defineRoutes = function(routes, resolve, reject) {
		function resolveRoute() {
			var path = router.getPath()
			var params = {}
			var pathname = parsePath(path, params, params)
			var state = $window.history.state
			if (state != null) {
				for (var k in state) params[k] = state[k]
			}
			for (var route0 in routes) {
				var matcher = new RegExp("^" + route0.replace(/:[^\/]+?\.{3}/g, "(.*?)").replace(/:[^\/]+/g, "([^\\/]+)") + "\/?$")
				if (matcher.test(pathname)) {
					pathname.replace(matcher, function() {
						var keys = route0.match(/:[^\/]+/g) || []
						var values = [].slice.call(arguments, 1, -2)
						for (var i = 0; i < keys.length; i++) {
							params[keys[i].replace(/:|\./g, "")] = decodeURIComponent(values[i])
						}
						resolve(routes[route0], params, path, route0)
					})
					return
				}
			}
			reject(path, params)
		}
		if (supportsPushState) $window.onpopstate = debounceAsync(resolveRoute)
		else if (router.prefix.charAt(0) === "#") $window.onhashchange = resolveRoute
		resolveRoute()
	}
	return router
}
var _24 = function($window, redrawService0) {
	var routeService = coreRouter($window)
	var identity = function(v0) {return v0}
	var render1, component, attrs3, currentPath, lastUpdate
	var route = function(root, defaultRoute, routes) {
		if (root == null) throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined")
		function run1() {
			if (render1 != null) redrawService0.render(root, render1(Vnode(component, attrs3.key, attrs3)))
		}
		var redraw3 = function() {
			run1()
			redraw3 = redrawService0.redraw
		}
		redrawService0.subscribe(root, run1)
		var bail = function(path) {
			if (path !== defaultRoute) routeService.setPath(defaultRoute, null, {replace: true})
			else throw new Error("Could not resolve default route " + defaultRoute)
		}
		routeService.defineRoutes(routes, function(payload, params, path) {
			var update = lastUpdate = function(routeResolver, comp) {
				if (update !== lastUpdate) return
				component = comp != null && (typeof comp.view === "function" || typeof comp === "function")? comp : "div"
				attrs3 = params, currentPath = path, lastUpdate = null
				render1 = (routeResolver.render || identity).bind(routeResolver)
				redraw3()
			}
			if (payload.view || typeof payload === "function") update({}, payload)
			else {
				if (payload.onmatch) {
					Promise.resolve(payload.onmatch(params, path)).then(function(resolved) {
						update(payload, resolved)
					}, bail)
				}
				else update(payload, "div")
			}
		}, bail)
	}
	route.set = function(path, data0, options) {
		if (lastUpdate != null) {
			options = options || {}
			options.replace = true
		}
		lastUpdate = null
		routeService.setPath(path, data0, options)
	}
	route.get = function() {return currentPath}
	route.prefix = function(prefix) {routeService.prefix = prefix}
	var link = function(options, vnode5) {
		vnode5.dom.setAttribute("href", routeService.prefix + vnode5.attrs.href)
		vnode5.dom.onclick = function(e) {
			if (e.ctrlKey || e.metaKey || e.shiftKey || e.which === 2) return
			e.preventDefault()
			e.redraw = false
			var href = this.getAttribute("href")
			if (href.indexOf(routeService.prefix) === 0) href = href.slice(routeService.prefix.length)
			route.set(href, undefined, options)
		}
	}
	route.link = function(args0) {
		if (args0.tag == null) return link.bind(link, args0)
		return link({}, args0)
	}
	route.param = function(key0) {
		if(typeof attrs3 !== "undefined" && typeof key0 !== "undefined") return attrs3[key0]
		return attrs3
	}
	return route
}
m.route = _24(window, redrawService)
var _31 = coreRenderer(window)
m.render = _31.render
m.redraw = redrawService.redraw
m.request = requestService.request
m.jsonp = requestService.jsonp
m.parseQueryString = parseQueryString
m.buildQueryString = buildQueryString
m.version = "2.0.0-rc.4"
m.vnode = Vnode
m.PromisePolyfill = PromisePolyfill

/* harmony default export */ __webpack_exports__["default"] = (m);
var _m = m.m,_trust = m.trust,_fragment = m.fragment,_mount = m.mount,_route = m.route,_render = m.render,_redraw = m.redraw,_request = m.request,_jsonp = m.jsonp,_parseQueryString = m.parseQueryString,_buildQueryString = m.buildQueryString,_version = m.version,_vnode = m.vnode,_PromisePolyfill = m.PromisePolyfill


/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/punycode/punycode.js":
/*!**************************************************************************!*\
  !*** ./node_modules/node-libs-browser/node_modules/punycode/punycode.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports =  true && exports &&
		!exports.nodeType && exports;
	var freeModule =  true && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/pdfjs-dist/build/pdf.js":
/*!**********************************************!*\
  !*** ./node_modules/pdfjs-dist/build/pdf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer, global, process) {/**
 * @licstart The following is the entire license notice for the
 * Javascript code in this page
 *
 * Copyright 2018 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * Javascript code in this page
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __w_pdfjs_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __w_pdfjs_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__w_pdfjs_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__w_pdfjs_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__w_pdfjs_require__.d = function(exports, name, getter) {
/******/ 		if(!__w_pdfjs_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__w_pdfjs_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__w_pdfjs_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __w_pdfjs_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__w_pdfjs_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __w_pdfjs_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__w_pdfjs_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__w_pdfjs_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__w_pdfjs_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__w_pdfjs_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __w_pdfjs_require__(__w_pdfjs_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var pdfjsVersion = '2.0.943';
var pdfjsBuild = 'dc98bf76';
var pdfjsSharedUtil = __w_pdfjs_require__(1);
var pdfjsDisplayAPI = __w_pdfjs_require__(129);
var pdfjsDisplayTextLayer = __w_pdfjs_require__(145);
var pdfjsDisplayAnnotationLayer = __w_pdfjs_require__(146);
var pdfjsDisplayDOMUtils = __w_pdfjs_require__(130);
var pdfjsDisplaySVG = __w_pdfjs_require__(147);
var pdfjsDisplayWorkerOptions = __w_pdfjs_require__(135);
var pdfjsDisplayAPICompatibility = __w_pdfjs_require__(132);
{
  var isNodeJS = __w_pdfjs_require__(4);
  if (isNodeJS()) {
    var PDFNodeStream = __w_pdfjs_require__(148).PDFNodeStream;
    pdfjsDisplayAPI.setPDFNetworkStreamFactory(function (params) {
      return new PDFNodeStream(params);
    });
  } else if (typeof Response !== 'undefined' && 'body' in Response.prototype && typeof ReadableStream !== 'undefined') {
    var PDFFetchStream = __w_pdfjs_require__(151).PDFFetchStream;
    pdfjsDisplayAPI.setPDFNetworkStreamFactory(function (params) {
      return new PDFFetchStream(params);
    });
  } else {
    var PDFNetworkStream = __w_pdfjs_require__(152).PDFNetworkStream;
    pdfjsDisplayAPI.setPDFNetworkStreamFactory(function (params) {
      return new PDFNetworkStream(params);
    });
  }
}
exports.build = pdfjsDisplayAPI.build;
exports.version = pdfjsDisplayAPI.version;
exports.getDocument = pdfjsDisplayAPI.getDocument;
exports.LoopbackPort = pdfjsDisplayAPI.LoopbackPort;
exports.PDFDataRangeTransport = pdfjsDisplayAPI.PDFDataRangeTransport;
exports.PDFWorker = pdfjsDisplayAPI.PDFWorker;
exports.renderTextLayer = pdfjsDisplayTextLayer.renderTextLayer;
exports.AnnotationLayer = pdfjsDisplayAnnotationLayer.AnnotationLayer;
exports.createPromiseCapability = pdfjsSharedUtil.createPromiseCapability;
exports.PasswordResponses = pdfjsSharedUtil.PasswordResponses;
exports.InvalidPDFException = pdfjsSharedUtil.InvalidPDFException;
exports.MissingPDFException = pdfjsSharedUtil.MissingPDFException;
exports.SVGGraphics = pdfjsDisplaySVG.SVGGraphics;
exports.NativeImageDecoding = pdfjsSharedUtil.NativeImageDecoding;
exports.CMapCompressionType = pdfjsSharedUtil.CMapCompressionType;
exports.PermissionFlag = pdfjsSharedUtil.PermissionFlag;
exports.UnexpectedResponseException = pdfjsSharedUtil.UnexpectedResponseException;
exports.OPS = pdfjsSharedUtil.OPS;
exports.VerbosityLevel = pdfjsSharedUtil.VerbosityLevel;
exports.UNSUPPORTED_FEATURES = pdfjsSharedUtil.UNSUPPORTED_FEATURES;
exports.createValidAbsoluteUrl = pdfjsSharedUtil.createValidAbsoluteUrl;
exports.createObjectURL = pdfjsSharedUtil.createObjectURL;
exports.removeNullCharacters = pdfjsSharedUtil.removeNullCharacters;
exports.shadow = pdfjsSharedUtil.shadow;
exports.Util = pdfjsSharedUtil.Util;
exports.ReadableStream = pdfjsSharedUtil.ReadableStream;
exports.URL = pdfjsSharedUtil.URL;
exports.RenderingCancelledException = pdfjsDisplayDOMUtils.RenderingCancelledException;
exports.getFilenameFromUrl = pdfjsDisplayDOMUtils.getFilenameFromUrl;
exports.LinkTarget = pdfjsDisplayDOMUtils.LinkTarget;
exports.addLinkAttributes = pdfjsDisplayDOMUtils.addLinkAttributes;
exports.loadScript = pdfjsDisplayDOMUtils.loadScript;
exports.GlobalWorkerOptions = pdfjsDisplayWorkerOptions.GlobalWorkerOptions;
exports.apiCompatibilityParams = pdfjsDisplayAPICompatibility.apiCompatibilityParams;

/***/ }),
/* 1 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unreachable = exports.warn = exports.utf8StringToString = exports.stringToUTF8String = exports.stringToPDFString = exports.stringToBytes = exports.string32 = exports.shadow = exports.setVerbosityLevel = exports.URL = exports.ReadableStream = exports.removeNullCharacters = exports.readUint32 = exports.readUint16 = exports.readInt8 = exports.log2 = exports.isEvalSupported = exports.isLittleEndian = exports.createValidAbsoluteUrl = exports.isSameOrigin = exports.isSpace = exports.isString = exports.isNum = exports.isEmptyObj = exports.isBool = exports.isArrayBuffer = exports.info = exports.getVerbosityLevel = exports.getLookupTableFactory = exports.getInheritableProperty = exports.deprecated = exports.createObjectURL = exports.createPromiseCapability = exports.bytesToString = exports.assert = exports.arraysToBytes = exports.arrayByteLength = exports.FormatError = exports.XRefParseException = exports.toRomanNumerals = exports.Util = exports.UnknownErrorException = exports.UnexpectedResponseException = exports.TextRenderingMode = exports.StreamType = exports.PermissionFlag = exports.PasswordResponses = exports.PasswordException = exports.NativeImageDecoding = exports.MissingPDFException = exports.MissingDataException = exports.InvalidPDFException = exports.AbortException = exports.CMapCompressionType = exports.ImageKind = exports.FontType = exports.AnnotationType = exports.AnnotationFlag = exports.AnnotationFieldFlag = exports.AnnotationBorderStyleType = exports.UNSUPPORTED_FEATURES = exports.VerbosityLevel = exports.OPS = exports.IDENTITY_MATRIX = exports.FONT_IDENTITY_MATRIX = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

__w_pdfjs_require__(2);

var _streams_polyfill = __w_pdfjs_require__(125);

var _url_polyfill = __w_pdfjs_require__(127);

var IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0];
var FONT_IDENTITY_MATRIX = [0.001, 0, 0, 0.001, 0, 0];
var NativeImageDecoding = {
  NONE: 'none',
  DECODE: 'decode',
  DISPLAY: 'display'
};
var PermissionFlag = {
  PRINT: 0x04,
  MODIFY_CONTENTS: 0x08,
  COPY: 0x10,
  MODIFY_ANNOTATIONS: 0x20,
  FILL_INTERACTIVE_FORMS: 0x100,
  COPY_FOR_ACCESSIBILITY: 0x200,
  ASSEMBLE: 0x400,
  PRINT_HIGH_QUALITY: 0x800
};
var TextRenderingMode = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_ADD_TO_PATH: 4,
  STROKE_ADD_TO_PATH: 5,
  FILL_STROKE_ADD_TO_PATH: 6,
  ADD_TO_PATH: 7,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
};
var ImageKind = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
};
var AnnotationType = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  SOUND: 18,
  MOVIE: 19,
  WIDGET: 20,
  SCREEN: 21,
  PRINTERMARK: 22,
  TRAPNET: 23,
  WATERMARK: 24,
  THREED: 25,
  REDACT: 26
};
var AnnotationFlag = {
  INVISIBLE: 0x01,
  HIDDEN: 0x02,
  PRINT: 0x04,
  NOZOOM: 0x08,
  NOROTATE: 0x10,
  NOVIEW: 0x20,
  READONLY: 0x40,
  LOCKED: 0x80,
  TOGGLENOVIEW: 0x100,
  LOCKEDCONTENTS: 0x200
};
var AnnotationFieldFlag = {
  READONLY: 0x0000001,
  REQUIRED: 0x0000002,
  NOEXPORT: 0x0000004,
  MULTILINE: 0x0001000,
  PASSWORD: 0x0002000,
  NOTOGGLETOOFF: 0x0004000,
  RADIO: 0x0008000,
  PUSHBUTTON: 0x0010000,
  COMBO: 0x0020000,
  EDIT: 0x0040000,
  SORT: 0x0080000,
  FILESELECT: 0x0100000,
  MULTISELECT: 0x0200000,
  DONOTSPELLCHECK: 0x0400000,
  DONOTSCROLL: 0x0800000,
  COMB: 0x1000000,
  RICHTEXT: 0x2000000,
  RADIOSINUNISON: 0x2000000,
  COMMITONSELCHANGE: 0x4000000
};
var AnnotationBorderStyleType = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
};
var StreamType = {
  UNKNOWN: 0,
  FLATE: 1,
  LZW: 2,
  DCT: 3,
  JPX: 4,
  JBIG: 5,
  A85: 6,
  AHX: 7,
  CCF: 8,
  RL: 9
};
var FontType = {
  UNKNOWN: 0,
  TYPE1: 1,
  TYPE1C: 2,
  CIDFONTTYPE0: 3,
  CIDFONTTYPE0C: 4,
  TRUETYPE: 5,
  CIDFONTTYPE2: 6,
  TYPE3: 7,
  OPENTYPE: 8,
  TYPE0: 9,
  MMTYPE1: 10
};
var VerbosityLevel = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
};
var CMapCompressionType = {
  NONE: 0,
  BINARY: 1,
  STREAM: 2
};
var OPS = {
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotations: 78,
  endAnnotations: 79,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintJpegXObject: 82,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91
};
var UNSUPPORTED_FEATURES = {
  unknown: 'unknown',
  forms: 'forms',
  javaScript: 'javaScript',
  smask: 'smask',
  shadingPattern: 'shadingPattern',
  font: 'font'
};
var PasswordResponses = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
var verbosity = VerbosityLevel.WARNINGS;
function setVerbosityLevel(level) {
  if (Number.isInteger(level)) {
    verbosity = level;
  }
}
function getVerbosityLevel() {
  return verbosity;
}
function info(msg) {
  if (verbosity >= VerbosityLevel.INFOS) {
    console.log('Info: ' + msg);
  }
}
function warn(msg) {
  if (verbosity >= VerbosityLevel.WARNINGS) {
    console.log('Warning: ' + msg);
  }
}
function deprecated(details) {
  console.log('Deprecated API usage: ' + details);
}
function unreachable(msg) {
  throw new Error(msg);
}
function assert(cond, msg) {
  if (!cond) {
    unreachable(msg);
  }
}
function isSameOrigin(baseUrl, otherUrl) {
  try {
    var base = new _url_polyfill.URL(baseUrl);
    if (!base.origin || base.origin === 'null') {
      return false;
    }
  } catch (e) {
    return false;
  }
  var other = new _url_polyfill.URL(otherUrl, base);
  return base.origin === other.origin;
}
function _isValidProtocol(url) {
  if (!url) {
    return false;
  }
  switch (url.protocol) {
    case 'http:':
    case 'https:':
    case 'ftp:':
    case 'mailto:':
    case 'tel:':
      return true;
    default:
      return false;
  }
}
function createValidAbsoluteUrl(url, baseUrl) {
  if (!url) {
    return null;
  }
  try {
    var absoluteUrl = baseUrl ? new _url_polyfill.URL(url, baseUrl) : new _url_polyfill.URL(url);
    if (_isValidProtocol(absoluteUrl)) {
      return absoluteUrl;
    }
  } catch (ex) {}
  return null;
}
function shadow(obj, prop, value) {
  Object.defineProperty(obj, prop, {
    value: value,
    enumerable: true,
    configurable: true,
    writable: false
  });
  return value;
}
function getLookupTableFactory(initializer) {
  var lookup;
  return function () {
    if (initializer) {
      lookup = Object.create(null);
      initializer(lookup);
      initializer = null;
    }
    return lookup;
  };
}
var PasswordException = function PasswordExceptionClosure() {
  function PasswordException(msg, code) {
    this.name = 'PasswordException';
    this.message = msg;
    this.code = code;
  }
  PasswordException.prototype = new Error();
  PasswordException.constructor = PasswordException;
  return PasswordException;
}();
var UnknownErrorException = function UnknownErrorExceptionClosure() {
  function UnknownErrorException(msg, details) {
    this.name = 'UnknownErrorException';
    this.message = msg;
    this.details = details;
  }
  UnknownErrorException.prototype = new Error();
  UnknownErrorException.constructor = UnknownErrorException;
  return UnknownErrorException;
}();
var InvalidPDFException = function InvalidPDFExceptionClosure() {
  function InvalidPDFException(msg) {
    this.name = 'InvalidPDFException';
    this.message = msg;
  }
  InvalidPDFException.prototype = new Error();
  InvalidPDFException.constructor = InvalidPDFException;
  return InvalidPDFException;
}();
var MissingPDFException = function MissingPDFExceptionClosure() {
  function MissingPDFException(msg) {
    this.name = 'MissingPDFException';
    this.message = msg;
  }
  MissingPDFException.prototype = new Error();
  MissingPDFException.constructor = MissingPDFException;
  return MissingPDFException;
}();
var UnexpectedResponseException = function UnexpectedResponseExceptionClosure() {
  function UnexpectedResponseException(msg, status) {
    this.name = 'UnexpectedResponseException';
    this.message = msg;
    this.status = status;
  }
  UnexpectedResponseException.prototype = new Error();
  UnexpectedResponseException.constructor = UnexpectedResponseException;
  return UnexpectedResponseException;
}();
var MissingDataException = function MissingDataExceptionClosure() {
  function MissingDataException(begin, end) {
    this.begin = begin;
    this.end = end;
    this.message = 'Missing data [' + begin + ', ' + end + ')';
  }
  MissingDataException.prototype = new Error();
  MissingDataException.prototype.name = 'MissingDataException';
  MissingDataException.constructor = MissingDataException;
  return MissingDataException;
}();
var XRefParseException = function XRefParseExceptionClosure() {
  function XRefParseException(msg) {
    this.message = msg;
  }
  XRefParseException.prototype = new Error();
  XRefParseException.prototype.name = 'XRefParseException';
  XRefParseException.constructor = XRefParseException;
  return XRefParseException;
}();
var FormatError = function FormatErrorClosure() {
  function FormatError(msg) {
    this.message = msg;
  }
  FormatError.prototype = new Error();
  FormatError.prototype.name = 'FormatError';
  FormatError.constructor = FormatError;
  return FormatError;
}();
var AbortException = function AbortExceptionClosure() {
  function AbortException(msg) {
    this.name = 'AbortException';
    this.message = msg;
  }
  AbortException.prototype = new Error();
  AbortException.constructor = AbortException;
  return AbortException;
}();
var NullCharactersRegExp = /\x00/g;
function removeNullCharacters(str) {
  if (typeof str !== 'string') {
    warn('The argument for removeNullCharacters must be a string.');
    return str;
  }
  return str.replace(NullCharactersRegExp, '');
}
function bytesToString(bytes) {
  assert(bytes !== null && (typeof bytes === 'undefined' ? 'undefined' : _typeof(bytes)) === 'object' && bytes.length !== undefined, 'Invalid argument for bytesToString');
  var length = bytes.length;
  var MAX_ARGUMENT_COUNT = 8192;
  if (length < MAX_ARGUMENT_COUNT) {
    return String.fromCharCode.apply(null, bytes);
  }
  var strBuf = [];
  for (var i = 0; i < length; i += MAX_ARGUMENT_COUNT) {
    var chunkEnd = Math.min(i + MAX_ARGUMENT_COUNT, length);
    var chunk = bytes.subarray(i, chunkEnd);
    strBuf.push(String.fromCharCode.apply(null, chunk));
  }
  return strBuf.join('');
}
function stringToBytes(str) {
  assert(typeof str === 'string', 'Invalid argument for stringToBytes');
  var length = str.length;
  var bytes = new Uint8Array(length);
  for (var i = 0; i < length; ++i) {
    bytes[i] = str.charCodeAt(i) & 0xFF;
  }
  return bytes;
}
function arrayByteLength(arr) {
  if (arr.length !== undefined) {
    return arr.length;
  }
  assert(arr.byteLength !== undefined);
  return arr.byteLength;
}
function arraysToBytes(arr) {
  if (arr.length === 1 && arr[0] instanceof Uint8Array) {
    return arr[0];
  }
  var resultLength = 0;
  var i,
      ii = arr.length;
  var item, itemLength;
  for (i = 0; i < ii; i++) {
    item = arr[i];
    itemLength = arrayByteLength(item);
    resultLength += itemLength;
  }
  var pos = 0;
  var data = new Uint8Array(resultLength);
  for (i = 0; i < ii; i++) {
    item = arr[i];
    if (!(item instanceof Uint8Array)) {
      if (typeof item === 'string') {
        item = stringToBytes(item);
      } else {
        item = new Uint8Array(item);
      }
    }
    itemLength = item.byteLength;
    data.set(item, pos);
    pos += itemLength;
  }
  return data;
}
function string32(value) {
  return String.fromCharCode(value >> 24 & 0xff, value >> 16 & 0xff, value >> 8 & 0xff, value & 0xff);
}
function log2(x) {
  if (x <= 0) {
    return 0;
  }
  return Math.ceil(Math.log2(x));
}
function readInt8(data, start) {
  return data[start] << 24 >> 24;
}
function readUint16(data, offset) {
  return data[offset] << 8 | data[offset + 1];
}
function readUint32(data, offset) {
  return (data[offset] << 24 | data[offset + 1] << 16 | data[offset + 2] << 8 | data[offset + 3]) >>> 0;
}
function isLittleEndian() {
  var buffer8 = new Uint8Array(4);
  buffer8[0] = 1;
  var view32 = new Uint32Array(buffer8.buffer, 0, 1);
  return view32[0] === 1;
}
function isEvalSupported() {
  try {
    new Function('');
    return true;
  } catch (e) {
    return false;
  }
}
function getInheritableProperty(_ref) {
  var dict = _ref.dict,
      key = _ref.key,
      _ref$getArray = _ref.getArray,
      getArray = _ref$getArray === undefined ? false : _ref$getArray,
      _ref$stopWhenFound = _ref.stopWhenFound,
      stopWhenFound = _ref$stopWhenFound === undefined ? true : _ref$stopWhenFound;

  var LOOP_LIMIT = 100;
  var loopCount = 0;
  var values = void 0;
  while (dict) {
    var value = getArray ? dict.getArray(key) : dict.get(key);
    if (value !== undefined) {
      if (stopWhenFound) {
        return value;
      }
      if (!values) {
        values = [];
      }
      values.push(value);
    }
    if (++loopCount > LOOP_LIMIT) {
      warn('getInheritableProperty: maximum loop count exceeded for "' + key + '"');
      break;
    }
    dict = dict.get('Parent');
  }
  return values;
}
var Util = function UtilClosure() {
  function Util() {}
  var rgbBuf = ['rgb(', 0, ',', 0, ',', 0, ')'];
  Util.makeCssRgb = function Util_makeCssRgb(r, g, b) {
    rgbBuf[1] = r;
    rgbBuf[3] = g;
    rgbBuf[5] = b;
    return rgbBuf.join('');
  };
  Util.transform = function Util_transform(m1, m2) {
    return [m1[0] * m2[0] + m1[2] * m2[1], m1[1] * m2[0] + m1[3] * m2[1], m1[0] * m2[2] + m1[2] * m2[3], m1[1] * m2[2] + m1[3] * m2[3], m1[0] * m2[4] + m1[2] * m2[5] + m1[4], m1[1] * m2[4] + m1[3] * m2[5] + m1[5]];
  };
  Util.applyTransform = function Util_applyTransform(p, m) {
    var xt = p[0] * m[0] + p[1] * m[2] + m[4];
    var yt = p[0] * m[1] + p[1] * m[3] + m[5];
    return [xt, yt];
  };
  Util.applyInverseTransform = function Util_applyInverseTransform(p, m) {
    var d = m[0] * m[3] - m[1] * m[2];
    var xt = (p[0] * m[3] - p[1] * m[2] + m[2] * m[5] - m[4] * m[3]) / d;
    var yt = (-p[0] * m[1] + p[1] * m[0] + m[4] * m[1] - m[5] * m[0]) / d;
    return [xt, yt];
  };
  Util.getAxialAlignedBoundingBox = function Util_getAxialAlignedBoundingBox(r, m) {
    var p1 = Util.applyTransform(r, m);
    var p2 = Util.applyTransform(r.slice(2, 4), m);
    var p3 = Util.applyTransform([r[0], r[3]], m);
    var p4 = Util.applyTransform([r[2], r[1]], m);
    return [Math.min(p1[0], p2[0], p3[0], p4[0]), Math.min(p1[1], p2[1], p3[1], p4[1]), Math.max(p1[0], p2[0], p3[0], p4[0]), Math.max(p1[1], p2[1], p3[1], p4[1])];
  };
  Util.inverseTransform = function Util_inverseTransform(m) {
    var d = m[0] * m[3] - m[1] * m[2];
    return [m[3] / d, -m[1] / d, -m[2] / d, m[0] / d, (m[2] * m[5] - m[4] * m[3]) / d, (m[4] * m[1] - m[5] * m[0]) / d];
  };
  Util.apply3dTransform = function Util_apply3dTransform(m, v) {
    return [m[0] * v[0] + m[1] * v[1] + m[2] * v[2], m[3] * v[0] + m[4] * v[1] + m[5] * v[2], m[6] * v[0] + m[7] * v[1] + m[8] * v[2]];
  };
  Util.singularValueDecompose2dScale = function Util_singularValueDecompose2dScale(m) {
    var transpose = [m[0], m[2], m[1], m[3]];
    var a = m[0] * transpose[0] + m[1] * transpose[2];
    var b = m[0] * transpose[1] + m[1] * transpose[3];
    var c = m[2] * transpose[0] + m[3] * transpose[2];
    var d = m[2] * transpose[1] + m[3] * transpose[3];
    var first = (a + d) / 2;
    var second = Math.sqrt((a + d) * (a + d) - 4 * (a * d - c * b)) / 2;
    var sx = first + second || 1;
    var sy = first - second || 1;
    return [Math.sqrt(sx), Math.sqrt(sy)];
  };
  Util.normalizeRect = function Util_normalizeRect(rect) {
    var r = rect.slice(0);
    if (rect[0] > rect[2]) {
      r[0] = rect[2];
      r[2] = rect[0];
    }
    if (rect[1] > rect[3]) {
      r[1] = rect[3];
      r[3] = rect[1];
    }
    return r;
  };
  Util.intersect = function Util_intersect(rect1, rect2) {
    function compare(a, b) {
      return a - b;
    }
    var orderedX = [rect1[0], rect1[2], rect2[0], rect2[2]].sort(compare),
        orderedY = [rect1[1], rect1[3], rect2[1], rect2[3]].sort(compare),
        result = [];
    rect1 = Util.normalizeRect(rect1);
    rect2 = Util.normalizeRect(rect2);
    if (orderedX[0] === rect1[0] && orderedX[1] === rect2[0] || orderedX[0] === rect2[0] && orderedX[1] === rect1[0]) {
      result[0] = orderedX[1];
      result[2] = orderedX[2];
    } else {
      return false;
    }
    if (orderedY[0] === rect1[1] && orderedY[1] === rect2[1] || orderedY[0] === rect2[1] && orderedY[1] === rect1[1]) {
      result[1] = orderedY[1];
      result[3] = orderedY[2];
    } else {
      return false;
    }
    return result;
  };
  return Util;
}();
var ROMAN_NUMBER_MAP = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
function toRomanNumerals(number) {
  var lowerCase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  assert(Number.isInteger(number) && number > 0, 'The number should be a positive integer.');
  var pos = void 0,
      romanBuf = [];
  while (number >= 1000) {
    number -= 1000;
    romanBuf.push('M');
  }
  pos = number / 100 | 0;
  number %= 100;
  romanBuf.push(ROMAN_NUMBER_MAP[pos]);
  pos = number / 10 | 0;
  number %= 10;
  romanBuf.push(ROMAN_NUMBER_MAP[10 + pos]);
  romanBuf.push(ROMAN_NUMBER_MAP[20 + number]);
  var romanStr = romanBuf.join('');
  return lowerCase ? romanStr.toLowerCase() : romanStr;
}
var PDFStringTranslateTable = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2D8, 0x2C7, 0x2C6, 0x2D9, 0x2DD, 0x2DB, 0x2DA, 0x2DC, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2022, 0x2020, 0x2021, 0x2026, 0x2014, 0x2013, 0x192, 0x2044, 0x2039, 0x203A, 0x2212, 0x2030, 0x201E, 0x201C, 0x201D, 0x2018, 0x2019, 0x201A, 0x2122, 0xFB01, 0xFB02, 0x141, 0x152, 0x160, 0x178, 0x17D, 0x131, 0x142, 0x153, 0x161, 0x17E, 0, 0x20AC];
function stringToPDFString(str) {
  var i,
      n = str.length,
      strBuf = [];
  if (str[0] === '\xFE' && str[1] === '\xFF') {
    for (i = 2; i < n; i += 2) {
      strBuf.push(String.fromCharCode(str.charCodeAt(i) << 8 | str.charCodeAt(i + 1)));
    }
  } else {
    for (i = 0; i < n; ++i) {
      var code = PDFStringTranslateTable[str.charCodeAt(i)];
      strBuf.push(code ? String.fromCharCode(code) : str.charAt(i));
    }
  }
  return strBuf.join('');
}
function stringToUTF8String(str) {
  return decodeURIComponent(escape(str));
}
function utf8StringToString(str) {
  return unescape(encodeURIComponent(str));
}
function isEmptyObj(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}
function isBool(v) {
  return typeof v === 'boolean';
}
function isNum(v) {
  return typeof v === 'number';
}
function isString(v) {
  return typeof v === 'string';
}
function isArrayBuffer(v) {
  return (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object' && v !== null && v.byteLength !== undefined;
}
function isSpace(ch) {
  return ch === 0x20 || ch === 0x09 || ch === 0x0D || ch === 0x0A;
}
function createPromiseCapability() {
  var capability = {};
  capability.promise = new Promise(function (resolve, reject) {
    capability.resolve = resolve;
    capability.reject = reject;
  });
  return capability;
}
var createObjectURL = function createObjectURLClosure() {
  var digits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  return function createObjectURL(data, contentType) {
    var forceDataSchema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (!forceDataSchema && _url_polyfill.URL.createObjectURL) {
      var blob = new Blob([data], { type: contentType });
      return _url_polyfill.URL.createObjectURL(blob);
    }
    var buffer = 'data:' + contentType + ';base64,';
    for (var i = 0, ii = data.length; i < ii; i += 3) {
      var b1 = data[i] & 0xFF;
      var b2 = data[i + 1] & 0xFF;
      var b3 = data[i + 2] & 0xFF;
      var d1 = b1 >> 2,
          d2 = (b1 & 3) << 4 | b2 >> 4;
      var d3 = i + 1 < ii ? (b2 & 0xF) << 2 | b3 >> 6 : 64;
      var d4 = i + 2 < ii ? b3 & 0x3F : 64;
      buffer += digits[d1] + digits[d2] + digits[d3] + digits[d4];
    }
    return buffer;
  };
}();
exports.FONT_IDENTITY_MATRIX = FONT_IDENTITY_MATRIX;
exports.IDENTITY_MATRIX = IDENTITY_MATRIX;
exports.OPS = OPS;
exports.VerbosityLevel = VerbosityLevel;
exports.UNSUPPORTED_FEATURES = UNSUPPORTED_FEATURES;
exports.AnnotationBorderStyleType = AnnotationBorderStyleType;
exports.AnnotationFieldFlag = AnnotationFieldFlag;
exports.AnnotationFlag = AnnotationFlag;
exports.AnnotationType = AnnotationType;
exports.FontType = FontType;
exports.ImageKind = ImageKind;
exports.CMapCompressionType = CMapCompressionType;
exports.AbortException = AbortException;
exports.InvalidPDFException = InvalidPDFException;
exports.MissingDataException = MissingDataException;
exports.MissingPDFException = MissingPDFException;
exports.NativeImageDecoding = NativeImageDecoding;
exports.PasswordException = PasswordException;
exports.PasswordResponses = PasswordResponses;
exports.PermissionFlag = PermissionFlag;
exports.StreamType = StreamType;
exports.TextRenderingMode = TextRenderingMode;
exports.UnexpectedResponseException = UnexpectedResponseException;
exports.UnknownErrorException = UnknownErrorException;
exports.Util = Util;
exports.toRomanNumerals = toRomanNumerals;
exports.XRefParseException = XRefParseException;
exports.FormatError = FormatError;
exports.arrayByteLength = arrayByteLength;
exports.arraysToBytes = arraysToBytes;
exports.assert = assert;
exports.bytesToString = bytesToString;
exports.createPromiseCapability = createPromiseCapability;
exports.createObjectURL = createObjectURL;
exports.deprecated = deprecated;
exports.getInheritableProperty = getInheritableProperty;
exports.getLookupTableFactory = getLookupTableFactory;
exports.getVerbosityLevel = getVerbosityLevel;
exports.info = info;
exports.isArrayBuffer = isArrayBuffer;
exports.isBool = isBool;
exports.isEmptyObj = isEmptyObj;
exports.isNum = isNum;
exports.isString = isString;
exports.isSpace = isSpace;
exports.isSameOrigin = isSameOrigin;
exports.createValidAbsoluteUrl = createValidAbsoluteUrl;
exports.isLittleEndian = isLittleEndian;
exports.isEvalSupported = isEvalSupported;
exports.log2 = log2;
exports.readInt8 = readInt8;
exports.readUint16 = readUint16;
exports.readUint32 = readUint32;
exports.removeNullCharacters = removeNullCharacters;
exports.ReadableStream = _streams_polyfill.ReadableStream;
exports.URL = _url_polyfill.URL;
exports.setVerbosityLevel = setVerbosityLevel;
exports.shadow = shadow;
exports.string32 = string32;
exports.stringToBytes = stringToBytes;
exports.stringToPDFString = stringToPDFString;
exports.stringToUTF8String = stringToUTF8String;
exports.utf8StringToString = utf8StringToString;
exports.warn = warn;
exports.unreachable = unreachable;

/***/ }),
/* 2 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var globalScope = __w_pdfjs_require__(3);
if (!globalScope._pdfjsCompatibilityChecked) {
  globalScope._pdfjsCompatibilityChecked = true;
  var isNodeJS = __w_pdfjs_require__(4);
  var hasDOM = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && (typeof document === 'undefined' ? 'undefined' : _typeof(document)) === 'object';
  (function checkNodeBtoa() {
    if (globalScope.btoa || !isNodeJS()) {
      return;
    }
    globalScope.btoa = function (chars) {
      return Buffer.from(chars, 'binary').toString('base64');
    };
  })();
  (function checkNodeAtob() {
    if (globalScope.atob || !isNodeJS()) {
      return;
    }
    globalScope.atob = function (input) {
      return Buffer.from(input, 'base64').toString('binary');
    };
  })();
  (function checkCurrentScript() {
    if (!hasDOM) {
      return;
    }
    if ('currentScript' in document) {
      return;
    }
    Object.defineProperty(document, 'currentScript', {
      get: function get() {
        var scripts = document.getElementsByTagName('script');
        return scripts[scripts.length - 1];
      },

      enumerable: true,
      configurable: true
    });
  })();
  (function checkChildNodeRemove() {
    if (!hasDOM) {
      return;
    }
    if (typeof Element.prototype.remove !== 'undefined') {
      return;
    }
    Element.prototype.remove = function () {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    };
  })();
  (function checkDOMTokenListToggle() {
    if (!hasDOM || isNodeJS()) {
      return;
    }
    var div = document.createElement('div');
    if (div.classList.toggle('test', 0) === false) {
      return;
    }
    var originalDOMTokenListToggle = DOMTokenList.prototype.toggle;
    DOMTokenList.prototype.toggle = function (token) {
      if (arguments.length > 1) {
        var force = !!arguments[1];
        return this[force ? 'add' : 'remove'](token), force;
      }
      return originalDOMTokenListToggle(token);
    };
  })();
  (function checkStringIncludes() {
    if (String.prototype.includes) {
      return;
    }
    __w_pdfjs_require__(5);
  })();
  (function checkArrayIncludes() {
    if (Array.prototype.includes) {
      return;
    }
    __w_pdfjs_require__(33);
  })();
  (function checkObjectAssign() {
    if (Object.assign) {
      return;
    }
    __w_pdfjs_require__(42);
  })();
  (function checkMathLog2() {
    if (Math.log2) {
      return;
    }
    Math.log2 = __w_pdfjs_require__(52);
  })();
  (function checkNumberIsNaN() {
    if (Number.isNaN) {
      return;
    }
    Number.isNaN = __w_pdfjs_require__(54);
  })();
  (function checkNumberIsInteger() {
    if (Number.isInteger) {
      return;
    }
    Number.isInteger = __w_pdfjs_require__(56);
  })();
  (function checkPromise() {
    if (globalScope.Promise) {
      return;
    }
    globalScope.Promise = __w_pdfjs_require__(59);
  })();
  (function checkWeakMap() {
    if (globalScope.WeakMap) {
      return;
    }
    globalScope.WeakMap = __w_pdfjs_require__(94);
  })();
  (function checkStringCodePointAt() {
    if (String.codePointAt) {
      return;
    }
    String.codePointAt = __w_pdfjs_require__(111);
  })();
  (function checkStringFromCodePoint() {
    if (String.fromCodePoint) {
      return;
    }
    String.fromCodePoint = __w_pdfjs_require__(113);
  })();
  (function checkSymbol() {
    if (globalScope.Symbol) {
      return;
    }
    __w_pdfjs_require__(115);
  })();
  (function checkObjectValues() {
    if (Object.values) {
      return;
    }
    Object.values = __w_pdfjs_require__(122);
  })();
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = typeof window !== 'undefined' && window.Math === Math ? window : typeof global !== 'undefined' && global.Math === Math ? global : typeof self !== 'undefined' && self.Math === Math ? self : {};

/***/ }),
/* 4 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function isNodeJS() {
  return (typeof process === 'undefined' ? 'undefined' : _typeof(process)) === 'object' && process + '' === '[object process]';
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(6);
module.exports = __w_pdfjs_require__(9).String.includes;

/***/ }),
/* 6 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $export = __w_pdfjs_require__(7);
var context = __w_pdfjs_require__(25);
var INCLUDES = 'includes';
$export($export.P + $export.F * __w_pdfjs_require__(32)(INCLUDES), 'String', {
  includes: function includes(searchString) {
    return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var global = __w_pdfjs_require__(8);
var core = __w_pdfjs_require__(9);
var hide = __w_pdfjs_require__(10);
var redefine = __w_pdfjs_require__(20);
var ctx = __w_pdfjs_require__(23);
var PROTOTYPE = 'prototype';
var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    own = !IS_FORCED && target && target[key] !== undefined;
    out = (own ? target : source)[key];
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    if (target) redefine(target, key, out, type & $export.U);
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
$export.F = 1;
$export.G = 2;
$export.S = 4;
$export.P = 8;
$export.B = 16;
$export.W = 32;
$export.U = 64;
$export.R = 128;
module.exports = $export;

/***/ }),
/* 8 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if (typeof __g == 'number') __g = global;

/***/ }),
/* 9 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core;

/***/ }),
/* 10 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var dP = __w_pdfjs_require__(11);
var createDesc = __w_pdfjs_require__(19);
module.exports = __w_pdfjs_require__(15) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var anObject = __w_pdfjs_require__(12);
var IE8_DOM_DEFINE = __w_pdfjs_require__(14);
var toPrimitive = __w_pdfjs_require__(18);
var dP = Object.defineProperty;
exports.f = __w_pdfjs_require__(15) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {}
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isObject = __w_pdfjs_require__(13);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (it) {
  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = !__w_pdfjs_require__(15) && !__w_pdfjs_require__(16)(function () {
  return Object.defineProperty(__w_pdfjs_require__(17)('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = !__w_pdfjs_require__(16)(function () {
  return Object.defineProperty({}, 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),
/* 16 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isObject = __w_pdfjs_require__(13);
var document = __w_pdfjs_require__(8).document;
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isObject = __w_pdfjs_require__(13);
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var global = __w_pdfjs_require__(8);
var hide = __w_pdfjs_require__(10);
var has = __w_pdfjs_require__(21);
var SRC = __w_pdfjs_require__(22)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);
__w_pdfjs_require__(9).inspectSource = function (it) {
  return $toString.call(it);
};
(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

/***/ }),
/* 21 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var aFunction = __w_pdfjs_require__(24);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };
    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function () {
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isRegExp = __w_pdfjs_require__(26);
var defined = __w_pdfjs_require__(31);
module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isObject = __w_pdfjs_require__(13);
var cof = __w_pdfjs_require__(27);
var MATCH = __w_pdfjs_require__(28)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var toString = {}.toString;
module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var store = __w_pdfjs_require__(29)('wks');
var uid = __w_pdfjs_require__(22);
var _Symbol = __w_pdfjs_require__(8).Symbol;
var USE_SYMBOL = typeof _Symbol == 'function';
var $exports = module.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
};
$exports.store = store;

/***/ }),
/* 29 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var core = __w_pdfjs_require__(9);
var global = __w_pdfjs_require__(8);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __w_pdfjs_require__(30) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});

/***/ }),
/* 30 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = false;

/***/ }),
/* 31 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var MATCH = __w_pdfjs_require__(28)('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) {}
  }
  return true;
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(34);
module.exports = __w_pdfjs_require__(9).Array.includes;

/***/ }),
/* 34 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $export = __w_pdfjs_require__(7);
var $includes = __w_pdfjs_require__(35)(true);
$export($export.P, 'Array', {
  includes: function includes(el) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__w_pdfjs_require__(41)('includes');

/***/ }),
/* 35 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var toIObject = __w_pdfjs_require__(36);
var toLength = __w_pdfjs_require__(38);
var toAbsoluteIndex = __w_pdfjs_require__(40);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      if (value != value) return true;
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var IObject = __w_pdfjs_require__(37);
var defined = __w_pdfjs_require__(31);
module.exports = function (it) {
  return IObject(defined(it));
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var cof = __w_pdfjs_require__(27);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var toInteger = __w_pdfjs_require__(39);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var toInteger = __w_pdfjs_require__(39);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var UNSCOPABLES = __w_pdfjs_require__(28)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __w_pdfjs_require__(10)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(43);
module.exports = __w_pdfjs_require__(9).Object.assign;

/***/ }),
/* 43 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $export = __w_pdfjs_require__(7);
$export($export.S + $export.F, 'Object', { assign: __w_pdfjs_require__(44) });

/***/ }),
/* 44 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var getKeys = __w_pdfjs_require__(45);
var gOPS = __w_pdfjs_require__(49);
var pIE = __w_pdfjs_require__(50);
var toObject = __w_pdfjs_require__(51);
var IObject = __w_pdfjs_require__(37);
var $assign = Object.assign;
module.exports = !$assign || __w_pdfjs_require__(16)(function () {
  var A = {};
  var B = {};
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    }
  }
  return T;
} : $assign;

/***/ }),
/* 45 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $keys = __w_pdfjs_require__(46);
var enumBugKeys = __w_pdfjs_require__(48);
module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var has = __w_pdfjs_require__(21);
var toIObject = __w_pdfjs_require__(36);
var arrayIndexOf = __w_pdfjs_require__(35)(false);
var IE_PROTO = __w_pdfjs_require__(47)('IE_PROTO');
module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) {
    if (key != IE_PROTO) has(O, key) && result.push(key);
  }while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }return result;
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var shared = __w_pdfjs_require__(29)('keys');
var uid = __w_pdfjs_require__(22);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),
/* 49 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 50 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 51 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var defined = __w_pdfjs_require__(31);
module.exports = function (it) {
  return Object(defined(it));
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(53);
module.exports = __w_pdfjs_require__(9).Math.log2;

/***/ }),
/* 53 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $export = __w_pdfjs_require__(7);
$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});

/***/ }),
/* 54 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(55);
module.exports = __w_pdfjs_require__(9).Number.isNaN;

/***/ }),
/* 55 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $export = __w_pdfjs_require__(7);
$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    return number != number;
  }
});

/***/ }),
/* 56 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(57);
module.exports = __w_pdfjs_require__(9).Number.isInteger;

/***/ }),
/* 57 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $export = __w_pdfjs_require__(7);
$export($export.S, 'Number', { isInteger: __w_pdfjs_require__(58) });

/***/ }),
/* 58 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isObject = __w_pdfjs_require__(13);
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(60);
__w_pdfjs_require__(62);
__w_pdfjs_require__(72);
__w_pdfjs_require__(75);
__w_pdfjs_require__(92);
__w_pdfjs_require__(93);
module.exports = __w_pdfjs_require__(9).Promise;

/***/ }),
/* 60 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var classof = __w_pdfjs_require__(61);
var test = {};
test[__w_pdfjs_require__(28)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __w_pdfjs_require__(20)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var cof = __w_pdfjs_require__(27);
var TAG = __w_pdfjs_require__(28)('toStringTag');
var ARG = cof(function () {
  return arguments;
}()) == 'Arguments';
var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (e) {}
};
module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $at = __w_pdfjs_require__(63)(true);
__w_pdfjs_require__(64)(String, 'String', function (iterated) {
  this._t = String(iterated);
  this._i = 0;
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return {
    value: undefined,
    done: true
  };
  point = $at(O, index);
  this._i += point.length;
  return {
    value: point,
    done: false
  };
});

/***/ }),
/* 63 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var toInteger = __w_pdfjs_require__(39);
var defined = __w_pdfjs_require__(31);
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var LIBRARY = __w_pdfjs_require__(30);
var $export = __w_pdfjs_require__(7);
var redefine = __w_pdfjs_require__(20);
var hide = __w_pdfjs_require__(10);
var Iterators = __w_pdfjs_require__(65);
var $iterCreate = __w_pdfjs_require__(66);
var setToStringTag = __w_pdfjs_require__(70);
var getPrototypeOf = __w_pdfjs_require__(71);
var ITERATOR = __w_pdfjs_require__(28)('iterator');
var BUGGY = !([].keys && 'next' in [].keys());
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';
var returnThis = function returnThis() {
  return this;
};
module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function getMethod(kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };
      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }
    return function entries() {
      return new Constructor(this, kind);
    };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      setToStringTag(IteratorPrototype, TAG, true);
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() {
      return $native.call(this);
    };
  }
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = {};

/***/ }),
/* 66 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var create = __w_pdfjs_require__(67);
var descriptor = __w_pdfjs_require__(19);
var setToStringTag = __w_pdfjs_require__(70);
var IteratorPrototype = {};
__w_pdfjs_require__(10)(IteratorPrototype, __w_pdfjs_require__(28)('iterator'), function () {
  return this;
});
module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var anObject = __w_pdfjs_require__(12);
var dPs = __w_pdfjs_require__(68);
var enumBugKeys = __w_pdfjs_require__(48);
var IE_PROTO = __w_pdfjs_require__(47)('IE_PROTO');
var Empty = function Empty() {};
var PROTOTYPE = 'prototype';
var _createDict = function createDict() {
  var iframe = __w_pdfjs_require__(17)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __w_pdfjs_require__(69).appendChild(iframe);
  iframe.src = 'javascript:';
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;
  while (i--) {
    delete _createDict[PROTOTYPE][enumBugKeys[i]];
  }return _createDict();
};
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    result[IE_PROTO] = O;
  } else result = _createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var dP = __w_pdfjs_require__(11);
var anObject = __w_pdfjs_require__(12);
var getKeys = __w_pdfjs_require__(45);
module.exports = __w_pdfjs_require__(15) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) {
    dP.f(O, P = keys[i++], Properties[P]);
  }return O;
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var document = __w_pdfjs_require__(8).document;
module.exports = document && document.documentElement;

/***/ }),
/* 70 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var def = __w_pdfjs_require__(11).f;
var has = __w_pdfjs_require__(21);
var TAG = __w_pdfjs_require__(28)('toStringTag');
module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
    configurable: true,
    value: tag
  });
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var has = __w_pdfjs_require__(21);
var toObject = __w_pdfjs_require__(51);
var IE_PROTO = __w_pdfjs_require__(47)('IE_PROTO');
var ObjectProto = Object.prototype;
module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }
  return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $iterators = __w_pdfjs_require__(73);
var getKeys = __w_pdfjs_require__(45);
var redefine = __w_pdfjs_require__(20);
var global = __w_pdfjs_require__(8);
var hide = __w_pdfjs_require__(10);
var Iterators = __w_pdfjs_require__(65);
var wks = __w_pdfjs_require__(28);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;
var DOMIterables = {
  CSSRuleList: true,
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true,
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true,
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};
for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) {
      if (!proto[key]) redefine(proto, key, $iterators[key], true);
    }
  }
}

/***/ }),
/* 73 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var addToUnscopables = __w_pdfjs_require__(41);
var step = __w_pdfjs_require__(74);
var Iterators = __w_pdfjs_require__(65);
var toIObject = __w_pdfjs_require__(36);
module.exports = __w_pdfjs_require__(64)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated);
  this._i = 0;
  this._k = kind;
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');
Iterators.Arguments = Iterators.Array;
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 74 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = function (done, value) {
  return {
    value: value,
    done: !!done
  };
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var LIBRARY = __w_pdfjs_require__(30);
var global = __w_pdfjs_require__(8);
var ctx = __w_pdfjs_require__(23);
var classof = __w_pdfjs_require__(61);
var $export = __w_pdfjs_require__(7);
var isObject = __w_pdfjs_require__(13);
var aFunction = __w_pdfjs_require__(24);
var anInstance = __w_pdfjs_require__(76);
var forOf = __w_pdfjs_require__(77);
var speciesConstructor = __w_pdfjs_require__(81);
var task = __w_pdfjs_require__(82).set;
var microtask = __w_pdfjs_require__(84)();
var newPromiseCapabilityModule = __w_pdfjs_require__(85);
var perform = __w_pdfjs_require__(86);
var userAgent = __w_pdfjs_require__(87);
var promiseResolve = __w_pdfjs_require__(88);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function empty() {};
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;
var USE_NATIVE = !!function () {
  try {
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__w_pdfjs_require__(28)('species')] = function (exec) {
      exec(empty, empty);
    };
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise && v8.indexOf('6.6') !== 0 && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) {}
}();
var isThenable = function isThenable(it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function notify(promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function run(reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) {
      run(chain[i++]);
    }promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function onUnhandled(promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({
            promise: promise,
            reason: value
          });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    }
    promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function isUnhandled(promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function onHandleUnhandled(promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({
        promise: promise,
        reason: promise._v
      });
    }
  });
};
var $reject = function $reject(value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise;
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function $resolve(value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise;
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = {
          _w: promise,
          _d: false
        };
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({
      _w: promise,
      _d: false
    }, e);
  }
};
if (!USE_NATIVE) {
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor) {
    this._c = [];
    this._a = undefined;
    this._s = 0;
    this._d = false;
    this._v = undefined;
    this._h = 0;
    this._n = false;
  };
  Internal.prototype = __w_pdfjs_require__(89)($Promise.prototype, {
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    'catch': function _catch(onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function OwnPromiseCapability() {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function newPromiseCapability(C) {
    return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
  };
}
$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__w_pdfjs_require__(70)($Promise, PROMISE);
__w_pdfjs_require__(90)(PROMISE);
Wrapper = __w_pdfjs_require__(9)[PROMISE];
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __w_pdfjs_require__(91)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

/***/ }),
/* 76 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
    throw TypeError(name + ': incorrect invocation!');
  }
  return it;
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var ctx = __w_pdfjs_require__(23);
var call = __w_pdfjs_require__(78);
var isArrayIter = __w_pdfjs_require__(79);
var anObject = __w_pdfjs_require__(12);
var toLength = __w_pdfjs_require__(38);
var getIterFn = __w_pdfjs_require__(80);
var BREAK = {};
var RETURN = {};
var _exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () {
    return iterable;
  } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
_exports.BREAK = BREAK;
_exports.RETURN = RETURN;

/***/ }),
/* 78 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var anObject = __w_pdfjs_require__(12);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var Iterators = __w_pdfjs_require__(65);
var ITERATOR = __w_pdfjs_require__(28)('iterator');
var ArrayProto = Array.prototype;
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var classof = __w_pdfjs_require__(61);
var ITERATOR = __w_pdfjs_require__(28)('iterator');
var Iterators = __w_pdfjs_require__(65);
module.exports = __w_pdfjs_require__(9).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var anObject = __w_pdfjs_require__(12);
var aFunction = __w_pdfjs_require__(24);
var SPECIES = __w_pdfjs_require__(28)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var ctx = __w_pdfjs_require__(23);
var invoke = __w_pdfjs_require__(83);
var html = __w_pdfjs_require__(69);
var cel = __w_pdfjs_require__(17);
var global = __w_pdfjs_require__(8);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function run() {
  var id = +this;
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function listener(event) {
  run.call(event.data);
};
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) {
      args.push(arguments[i++]);
    }queue[++counter] = function () {
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  if (__w_pdfjs_require__(27)(process) == 'process') {
    defer = function defer(id) {
      process.nextTick(ctx(run, id, 1));
    };
  } else if (Dispatch && Dispatch.now) {
    defer = function defer(id) {
      Dispatch.now(ctx(run, id, 1));
    };
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function defer(id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function defer(id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  } else {
    defer = function defer(id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0:
      return un ? fn() : fn.call(that);
    case 1:
      return un ? fn(args[0]) : fn.call(that, args[0]);
    case 2:
      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
    case 3:
      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
    case 4:
      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
  }
  return fn.apply(that, args);
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var global = __w_pdfjs_require__(8);
var macrotask = __w_pdfjs_require__(82).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __w_pdfjs_require__(27)(process) == 'process';
module.exports = function () {
  var head, last, notify;
  var flush = function flush() {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();else last = undefined;
        throw e;
      }
    }
    last = undefined;
    if (parent) parent.enter();
  };
  if (isNode) {
    notify = function notify() {
      process.nextTick(flush);
    };
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true });
    notify = function notify() {
      node.data = toggle = !toggle;
    };
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve(undefined);
    notify = function notify() {
      promise.then(flush);
    };
  } else {
    notify = function notify() {
      macrotask.call(global, flush);
    };
  }
  return function (fn) {
    var task = {
      fn: fn,
      next: undefined
    };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    }
    last = task;
  };
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var aFunction = __w_pdfjs_require__(24);
function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}
module.exports.f = function (C) {
  return new PromiseCapability(C);
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = function (exec) {
  try {
    return {
      e: false,
      v: exec()
    };
  } catch (e) {
    return {
      e: true,
      v: e
    };
  }
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var global = __w_pdfjs_require__(8);
var navigator = global.navigator;
module.exports = navigator && navigator.userAgent || '';

/***/ }),
/* 88 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var anObject = __w_pdfjs_require__(12);
var isObject = __w_pdfjs_require__(13);
var newPromiseCapability = __w_pdfjs_require__(85);
module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var redefine = __w_pdfjs_require__(20);
module.exports = function (target, src, safe) {
  for (var key in src) {
    redefine(target, key, src[key], safe);
  }return target;
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var global = __w_pdfjs_require__(8);
var dP = __w_pdfjs_require__(11);
var DESCRIPTORS = __w_pdfjs_require__(15);
var SPECIES = __w_pdfjs_require__(28)('species');
module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function get() {
      return this;
    }
  });
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var ITERATOR = __w_pdfjs_require__(28)('iterator');
var SAFE_CLOSING = false;
try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () {
    SAFE_CLOSING = true;
  };
  Array.from(riter, function () {
    throw 2;
  });
} catch (e) {}
module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () {
      return { done: safe = true };
    };
    arr[ITERATOR] = function () {
      return iter;
    };
    exec(arr);
  } catch (e) {}
  return safe;
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $export = __w_pdfjs_require__(7);
var core = __w_pdfjs_require__(9);
var global = __w_pdfjs_require__(8);
var speciesConstructor = __w_pdfjs_require__(81);
var promiseResolve = __w_pdfjs_require__(88);
$export($export.P + $export.R, 'Promise', {
  'finally': function _finally(onFinally) {
    var C = speciesConstructor(this, core.Promise || global.Promise);
    var isFunction = typeof onFinally == 'function';
    return this.then(isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () {
        return x;
      });
    } : onFinally, isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () {
        throw e;
      });
    } : onFinally);
  }
});

/***/ }),
/* 93 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $export = __w_pdfjs_require__(7);
var newPromiseCapability = __w_pdfjs_require__(85);
var perform = __w_pdfjs_require__(86);
$export($export.S, 'Promise', {
  'try': function _try(callbackfn) {
    var promiseCapability = newPromiseCapability.f(this);
    var result = perform(callbackfn);
    (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
    return promiseCapability.promise;
  }
});

/***/ }),
/* 94 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(60);
__w_pdfjs_require__(72);
__w_pdfjs_require__(95);
__w_pdfjs_require__(107);
__w_pdfjs_require__(109);
module.exports = __w_pdfjs_require__(9).WeakMap;

/***/ }),
/* 95 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var each = __w_pdfjs_require__(96)(0);
var redefine = __w_pdfjs_require__(20);
var meta = __w_pdfjs_require__(100);
var assign = __w_pdfjs_require__(44);
var weak = __w_pdfjs_require__(101);
var isObject = __w_pdfjs_require__(13);
var fails = __w_pdfjs_require__(16);
var validate = __w_pdfjs_require__(102);
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var tmp = {};
var InternalMap;
var wrapper = function wrapper(get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};
var methods = {
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};
var $WeakMap = module.exports = __w_pdfjs_require__(103)(WEAK_MAP, wrapper, methods, weak, true, true);
if (fails(function () {
  return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7;
})) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      }
      return method.call(this, a, b);
    });
  });
}

/***/ }),
/* 96 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var ctx = __w_pdfjs_require__(23);
var IObject = __w_pdfjs_require__(37);
var toObject = __w_pdfjs_require__(51);
var toLength = __w_pdfjs_require__(38);
var asc = __w_pdfjs_require__(97);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (; length > index; index++) {
      if (NO_HOLES || index in self) {
        val = self[index];
        res = f(val, index, O);
        if (TYPE) {
          if (IS_MAP) result[index] = res;else if (res) switch (TYPE) {
            case 3:
              return true;
            case 5:
              return val;
            case 6:
              return index;
            case 2:
              result.push(val);
          } else if (IS_EVERY) return false;
        }
      }
    }return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var speciesConstructor = __w_pdfjs_require__(98);
module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isObject = __w_pdfjs_require__(13);
var isArray = __w_pdfjs_require__(99);
var SPECIES = __w_pdfjs_require__(28)('species');
module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  }
  return C === undefined ? Array : C;
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var cof = __w_pdfjs_require__(27);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var META = __w_pdfjs_require__(22)('meta');
var isObject = __w_pdfjs_require__(13);
var has = __w_pdfjs_require__(21);
var setDesc = __w_pdfjs_require__(11).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__w_pdfjs_require__(16)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function setMeta(it) {
  setDesc(it, META, {
    value: {
      i: 'O' + ++id,
      w: {}
    }
  });
};
var fastKey = function fastKey(it, create) {
  if (!isObject(it)) return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    if (!isExtensible(it)) return 'F';
    if (!create) return 'E';
    setMeta(it);
  }
  return it[META].i;
};
var getWeak = function getWeak(it, create) {
  if (!has(it, META)) {
    if (!isExtensible(it)) return true;
    if (!create) return false;
    setMeta(it);
  }
  return it[META].w;
};
var onFreeze = function onFreeze(it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var redefineAll = __w_pdfjs_require__(89);
var getWeak = __w_pdfjs_require__(100).getWeak;
var anObject = __w_pdfjs_require__(12);
var isObject = __w_pdfjs_require__(13);
var anInstance = __w_pdfjs_require__(76);
var forOf = __w_pdfjs_require__(77);
var createArrayMethod = __w_pdfjs_require__(96);
var $has = __w_pdfjs_require__(21);
var validate = __w_pdfjs_require__(102);
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;
var uncaughtFrozenStore = function uncaughtFrozenStore(that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function UncaughtFrozenStore() {
  this.a = [];
};
var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function get(key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function has(key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function set(key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;else this.a.push([key, value]);
  },
  'delete': function _delete(key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};
module.exports = {
  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;
      that._i = id++;
      that._l = undefined;
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      'delete': function _delete(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function def(that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isObject = __w_pdfjs_require__(13);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var global = __w_pdfjs_require__(8);
var $export = __w_pdfjs_require__(7);
var redefine = __w_pdfjs_require__(20);
var redefineAll = __w_pdfjs_require__(89);
var meta = __w_pdfjs_require__(100);
var forOf = __w_pdfjs_require__(77);
var anInstance = __w_pdfjs_require__(76);
var isObject = __w_pdfjs_require__(13);
var fails = __w_pdfjs_require__(16);
var $iterDetect = __w_pdfjs_require__(91);
var setToStringTag = __w_pdfjs_require__(70);
var inheritIfRequired = __w_pdfjs_require__(104);
module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function fixMethod(KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY, KEY == 'delete' ? function (a) {
      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'has' ? function has(a) {
      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'get' ? function get(a) {
      return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'add' ? function add(a) {
      fn.call(this, a === 0 ? 0 : a);
      return this;
    } : function set(a, b) {
      fn.call(this, a === 0 ? 0 : a, b);
      return this;
    });
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    var THROWS_ON_PRIMITIVES = fails(function () {
      instance.has(1);
    });
    var ACCEPT_ITERABLES = $iterDetect(function (iter) {
      new C(iter);
    });
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      var $instance = new C();
      var index = 5;
      while (index--) {
        $instance[ADDER](index, index);
      }return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    if (IS_WEAK && proto.clear) delete proto.clear;
  }
  setToStringTag(C, NAME);
  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);
  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
  return C;
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isObject = __w_pdfjs_require__(13);
var setPrototypeOf = __w_pdfjs_require__(105).set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  }
  return that;
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isObject = __w_pdfjs_require__(13);
var anObject = __w_pdfjs_require__(12);
var check = function check(O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? function (test, buggy, set) {
    try {
      set = __w_pdfjs_require__(23)(Function.call, __w_pdfjs_require__(106).f(Object.prototype, '__proto__').set, 2);
      set(test, []);
      buggy = !(test instanceof Array);
    } catch (e) {
      buggy = true;
    }
    return function setPrototypeOf(O, proto) {
      check(O, proto);
      if (buggy) O.__proto__ = proto;else set(O, proto);
      return O;
    };
  }({}, false) : undefined),
  check: check
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var pIE = __w_pdfjs_require__(50);
var createDesc = __w_pdfjs_require__(19);
var toIObject = __w_pdfjs_require__(36);
var toPrimitive = __w_pdfjs_require__(18);
var has = __w_pdfjs_require__(21);
var IE8_DOM_DEFINE = __w_pdfjs_require__(14);
var gOPD = Object.getOwnPropertyDescriptor;
exports.f = __w_pdfjs_require__(15) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) {}
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 107 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(108)('WeakMap');

/***/ }),
/* 108 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $export = __w_pdfjs_require__(7);
module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, {
    of: function of() {
      var length = arguments.length;
      var A = new Array(length);
      while (length--) {
        A[length] = arguments[length];
      }return new this(A);
    }
  });
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(110)('WeakMap');

/***/ }),
/* 110 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $export = __w_pdfjs_require__(7);
var aFunction = __w_pdfjs_require__(24);
var ctx = __w_pdfjs_require__(23);
var forOf = __w_pdfjs_require__(77);
module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, {
    from: function from(source) {
      var mapFn = arguments[1];
      var mapping, A, n, cb;
      aFunction(this);
      mapping = mapFn !== undefined;
      if (mapping) aFunction(mapFn);
      if (source == undefined) return new this();
      A = [];
      if (mapping) {
        n = 0;
        cb = ctx(mapFn, arguments[2], 2);
        forOf(source, false, function (nextItem) {
          A.push(cb(nextItem, n++));
        });
      } else {
        forOf(source, false, A.push, A);
      }
      return new this(A);
    }
  });
};

/***/ }),
/* 111 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(112);
module.exports = __w_pdfjs_require__(9).String.codePointAt;

/***/ }),
/* 112 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $export = __w_pdfjs_require__(7);
var $at = __w_pdfjs_require__(63)(false);
$export($export.P, 'String', {
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});

/***/ }),
/* 113 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(114);
module.exports = __w_pdfjs_require__(9).String.fromCodePoint;

/***/ }),
/* 114 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $export = __w_pdfjs_require__(7);
var toAbsoluteIndex = __w_pdfjs_require__(40);
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  fromCodePoint: function fromCodePoint(x) {
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
    }
    return res.join('');
  }
});

/***/ }),
/* 115 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(116);
__w_pdfjs_require__(60);
module.exports = __w_pdfjs_require__(9).Symbol;

/***/ }),
/* 116 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var global = __w_pdfjs_require__(8);
var has = __w_pdfjs_require__(21);
var DESCRIPTORS = __w_pdfjs_require__(15);
var $export = __w_pdfjs_require__(7);
var redefine = __w_pdfjs_require__(20);
var META = __w_pdfjs_require__(100).KEY;
var $fails = __w_pdfjs_require__(16);
var shared = __w_pdfjs_require__(29);
var setToStringTag = __w_pdfjs_require__(70);
var uid = __w_pdfjs_require__(22);
var wks = __w_pdfjs_require__(28);
var wksExt = __w_pdfjs_require__(117);
var wksDefine = __w_pdfjs_require__(118);
var enumKeys = __w_pdfjs_require__(119);
var isArray = __w_pdfjs_require__(99);
var anObject = __w_pdfjs_require__(12);
var isObject = __w_pdfjs_require__(13);
var toIObject = __w_pdfjs_require__(36);
var toPrimitive = __w_pdfjs_require__(18);
var createDesc = __w_pdfjs_require__(19);
var _create = __w_pdfjs_require__(67);
var gOPNExt = __w_pdfjs_require__(120);
var $GOPD = __w_pdfjs_require__(106);
var $DP = __w_pdfjs_require__(11);
var $keys = __w_pdfjs_require__(45);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function get() {
      return dP(this, 'a', { value: 7 }).a;
    }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;
var wrap = function wrap(tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};
var isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function (it) {
  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};
var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    }
    return setSymbolDesc(it, key, D);
  }
  return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) {
    $defineProperty(it, key = keys[i++], P[key]);
  }return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  }
  return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  }
  return result;
};
if (!USE_NATIVE) {
  $Symbol = function _Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function $set(value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, {
      configurable: true,
      set: $set
    });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });
  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __w_pdfjs_require__(121).f = gOPNExt.f = $getOwnPropertyNames;
  __w_pdfjs_require__(50).f = $propertyIsEnumerable;
  __w_pdfjs_require__(49).f = $getOwnPropertySymbols;
  if (DESCRIPTORS && !__w_pdfjs_require__(30)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }
  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}
$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
for (var es6Symbols = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {
  wks(es6Symbols[j++]);
}for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) {
  wksDefine(wellKnownSymbols[k++]);
}$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  'for': function _for(key) {
    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
  },
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) {
      if (SymbolRegistry[key] === sym) return key;
    }
  },
  useSetter: function useSetter() {
    setter = true;
  },
  useSimple: function useSimple() {
    setter = false;
  }
});
$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  create: $create,
  defineProperty: $defineProperty,
  defineProperties: $defineProperties,
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  getOwnPropertyNames: $getOwnPropertyNames,
  getOwnPropertySymbols: $getOwnPropertySymbols
});
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) {
      args.push(arguments[i++]);
    }$replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return;
    if (!isArray(replacer)) replacer = function replacer(key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __w_pdfjs_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
setToStringTag($Symbol, 'Symbol');
setToStringTag(Math, 'Math', true);
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 117 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


exports.f = __w_pdfjs_require__(28);

/***/ }),
/* 118 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var global = __w_pdfjs_require__(8);
var core = __w_pdfjs_require__(9);
var LIBRARY = __w_pdfjs_require__(30);
var wksExt = __w_pdfjs_require__(117);
var defineProperty = __w_pdfjs_require__(11).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var getKeys = __w_pdfjs_require__(45);
var gOPS = __w_pdfjs_require__(49);
var pIE = __w_pdfjs_require__(50);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) {
      if (isEnum.call(it, key = symbols[i++])) result.push(key);
    }
  }
  return result;
};

/***/ }),
/* 120 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var toIObject = __w_pdfjs_require__(36);
var gOPN = __w_pdfjs_require__(121).f;
var toString = {}.toString;
var windowNames = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
var getWindowNames = function getWindowNames(it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

/***/ }),
/* 121 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $keys = __w_pdfjs_require__(46);
var hiddenKeys = __w_pdfjs_require__(48).concat('length', 'prototype');
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 122 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(123);
module.exports = __w_pdfjs_require__(9).Object.values;

/***/ }),
/* 123 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $export = __w_pdfjs_require__(7);
var $values = __w_pdfjs_require__(124)(false);
$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});

/***/ }),
/* 124 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var getKeys = __w_pdfjs_require__(45);
var toIObject = __w_pdfjs_require__(36);
var isEnum = __w_pdfjs_require__(50).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      if (isEnum.call(O, key = keys[i++])) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }return result;
  };
};

/***/ }),
/* 125 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isReadableStreamSupported = false;
if (typeof ReadableStream !== 'undefined') {
  try {
    new ReadableStream({
      start: function start(controller) {
        controller.close();
      }
    });
    isReadableStreamSupported = true;
  } catch (e) {}
}
if (isReadableStreamSupported) {
  exports.ReadableStream = ReadableStream;
} else {
  exports.ReadableStream = __w_pdfjs_require__(126).ReadableStream;
}

/***/ }),
/* 126 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (e, a) {
  for (var i in a) {
    e[i] = a[i];
  }
})(exports, function (modules) {
  var installedModules = {};
  function __w_pdfjs_require__(moduleId) {
    if (installedModules[moduleId]) return installedModules[moduleId].exports;
    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    };
    modules[moduleId].call(module.exports, module, module.exports, __w_pdfjs_require__);
    module.l = true;
    return module.exports;
  }
  __w_pdfjs_require__.m = modules;
  __w_pdfjs_require__.c = installedModules;
  __w_pdfjs_require__.i = function (value) {
    return value;
  };
  __w_pdfjs_require__.d = function (exports, name, getter) {
    if (!__w_pdfjs_require__.o(exports, name)) {
      Object.defineProperty(exports, name, {
        configurable: false,
        enumerable: true,
        get: getter
      });
    }
  };
  __w_pdfjs_require__.n = function (module) {
    var getter = module && module.__esModule ? function getDefault() {
      return module['default'];
    } : function getModuleExports() {
      return module;
    };
    __w_pdfjs_require__.d(getter, 'a', getter);
    return getter;
  };
  __w_pdfjs_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  __w_pdfjs_require__.p = "";
  return __w_pdfjs_require__(__w_pdfjs_require__.s = 7);
}([function (module, exports, __w_pdfjs_require__) {
  "use strict";

  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  };
  var _require = __w_pdfjs_require__(1),
      assert = _require.assert;
  function IsPropertyKey(argument) {
    return typeof argument === 'string' || (typeof argument === 'undefined' ? 'undefined' : _typeof(argument)) === 'symbol';
  }
  exports.typeIsObject = function (x) {
    return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x !== null || typeof x === 'function';
  };
  exports.createDataProperty = function (o, p, v) {
    assert(exports.typeIsObject(o));
    Object.defineProperty(o, p, {
      value: v,
      writable: true,
      enumerable: true,
      configurable: true
    });
  };
  exports.createArrayFromList = function (elements) {
    return elements.slice();
  };
  exports.ArrayBufferCopy = function (dest, destOffset, src, srcOffset, n) {
    new Uint8Array(dest).set(new Uint8Array(src, srcOffset, n), destOffset);
  };
  exports.CreateIterResultObject = function (value, done) {
    assert(typeof done === 'boolean');
    var obj = {};
    Object.defineProperty(obj, 'value', {
      value: value,
      enumerable: true,
      writable: true,
      configurable: true
    });
    Object.defineProperty(obj, 'done', {
      value: done,
      enumerable: true,
      writable: true,
      configurable: true
    });
    return obj;
  };
  exports.IsFiniteNonNegativeNumber = function (v) {
    if (Number.isNaN(v)) {
      return false;
    }
    if (v === Infinity) {
      return false;
    }
    if (v < 0) {
      return false;
    }
    return true;
  };
  function Call(F, V, args) {
    if (typeof F !== 'function') {
      throw new TypeError('Argument is not a function');
    }
    return Function.prototype.apply.call(F, V, args);
  }
  exports.InvokeOrNoop = function (O, P, args) {
    assert(O !== undefined);
    assert(IsPropertyKey(P));
    assert(Array.isArray(args));
    var method = O[P];
    if (method === undefined) {
      return undefined;
    }
    return Call(method, O, args);
  };
  exports.PromiseInvokeOrNoop = function (O, P, args) {
    assert(O !== undefined);
    assert(IsPropertyKey(P));
    assert(Array.isArray(args));
    try {
      return Promise.resolve(exports.InvokeOrNoop(O, P, args));
    } catch (returnValueE) {
      return Promise.reject(returnValueE);
    }
  };
  exports.PromiseInvokeOrPerformFallback = function (O, P, args, F, argsF) {
    assert(O !== undefined);
    assert(IsPropertyKey(P));
    assert(Array.isArray(args));
    assert(Array.isArray(argsF));
    var method = void 0;
    try {
      method = O[P];
    } catch (methodE) {
      return Promise.reject(methodE);
    }
    if (method === undefined) {
      return F.apply(null, argsF);
    }
    try {
      return Promise.resolve(Call(method, O, args));
    } catch (e) {
      return Promise.reject(e);
    }
  };
  exports.TransferArrayBuffer = function (O) {
    return O.slice();
  };
  exports.ValidateAndNormalizeHighWaterMark = function (highWaterMark) {
    highWaterMark = Number(highWaterMark);
    if (Number.isNaN(highWaterMark) || highWaterMark < 0) {
      throw new RangeError('highWaterMark property of a queuing strategy must be non-negative and non-NaN');
    }
    return highWaterMark;
  };
  exports.ValidateAndNormalizeQueuingStrategy = function (size, highWaterMark) {
    if (size !== undefined && typeof size !== 'function') {
      throw new TypeError('size property of a queuing strategy must be a function');
    }
    highWaterMark = exports.ValidateAndNormalizeHighWaterMark(highWaterMark);
    return {
      size: size,
      highWaterMark: highWaterMark
    };
  };
}, function (module, exports, __w_pdfjs_require__) {
  "use strict";

  function rethrowAssertionErrorRejection(e) {
    if (e && e.constructor === AssertionError) {
      setTimeout(function () {
        throw e;
      }, 0);
    }
  }
  function AssertionError(message) {
    this.name = 'AssertionError';
    this.message = message || '';
    this.stack = new Error().stack;
  }
  AssertionError.prototype = Object.create(Error.prototype);
  AssertionError.prototype.constructor = AssertionError;
  function assert(value, message) {
    if (!value) {
      throw new AssertionError(message);
    }
  }
  module.exports = {
    rethrowAssertionErrorRejection: rethrowAssertionErrorRejection,
    AssertionError: AssertionError,
    assert: assert
  };
}, function (module, exports, __w_pdfjs_require__) {
  "use strict";

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var _require = __w_pdfjs_require__(0),
      InvokeOrNoop = _require.InvokeOrNoop,
      PromiseInvokeOrNoop = _require.PromiseInvokeOrNoop,
      ValidateAndNormalizeQueuingStrategy = _require.ValidateAndNormalizeQueuingStrategy,
      typeIsObject = _require.typeIsObject;
  var _require2 = __w_pdfjs_require__(1),
      assert = _require2.assert,
      rethrowAssertionErrorRejection = _require2.rethrowAssertionErrorRejection;
  var _require3 = __w_pdfjs_require__(3),
      DequeueValue = _require3.DequeueValue,
      EnqueueValueWithSize = _require3.EnqueueValueWithSize,
      PeekQueueValue = _require3.PeekQueueValue,
      ResetQueue = _require3.ResetQueue;
  var WritableStream = function () {
    function WritableStream() {
      var underlyingSink = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          size = _ref.size,
          _ref$highWaterMark = _ref.highWaterMark,
          highWaterMark = _ref$highWaterMark === undefined ? 1 : _ref$highWaterMark;
      _classCallCheck(this, WritableStream);
      this._state = 'writable';
      this._storedError = undefined;
      this._writer = undefined;
      this._writableStreamController = undefined;
      this._writeRequests = [];
      this._inFlightWriteRequest = undefined;
      this._closeRequest = undefined;
      this._inFlightCloseRequest = undefined;
      this._pendingAbortRequest = undefined;
      this._backpressure = false;
      var type = underlyingSink.type;
      if (type !== undefined) {
        throw new RangeError('Invalid type is specified');
      }
      this._writableStreamController = new WritableStreamDefaultController(this, underlyingSink, size, highWaterMark);
      this._writableStreamController.__startSteps();
    }
    _createClass(WritableStream, [{
      key: 'abort',
      value: function abort(reason) {
        if (IsWritableStream(this) === false) {
          return Promise.reject(streamBrandCheckException('abort'));
        }
        if (IsWritableStreamLocked(this) === true) {
          return Promise.reject(new TypeError('Cannot abort a stream that already has a writer'));
        }
        return WritableStreamAbort(this, reason);
      }
    }, {
      key: 'getWriter',
      value: function getWriter() {
        if (IsWritableStream(this) === false) {
          throw streamBrandCheckException('getWriter');
        }
        return AcquireWritableStreamDefaultWriter(this);
      }
    }, {
      key: 'locked',
      get: function get() {
        if (IsWritableStream(this) === false) {
          throw streamBrandCheckException('locked');
        }
        return IsWritableStreamLocked(this);
      }
    }]);
    return WritableStream;
  }();
  module.exports = {
    AcquireWritableStreamDefaultWriter: AcquireWritableStreamDefaultWriter,
    IsWritableStream: IsWritableStream,
    IsWritableStreamLocked: IsWritableStreamLocked,
    WritableStream: WritableStream,
    WritableStreamAbort: WritableStreamAbort,
    WritableStreamDefaultControllerError: WritableStreamDefaultControllerError,
    WritableStreamDefaultWriterCloseWithErrorPropagation: WritableStreamDefaultWriterCloseWithErrorPropagation,
    WritableStreamDefaultWriterRelease: WritableStreamDefaultWriterRelease,
    WritableStreamDefaultWriterWrite: WritableStreamDefaultWriterWrite,
    WritableStreamCloseQueuedOrInFlight: WritableStreamCloseQueuedOrInFlight
  };
  function AcquireWritableStreamDefaultWriter(stream) {
    return new WritableStreamDefaultWriter(stream);
  }
  function IsWritableStream(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_writableStreamController')) {
      return false;
    }
    return true;
  }
  function IsWritableStreamLocked(stream) {
    assert(IsWritableStream(stream) === true, 'IsWritableStreamLocked should only be used on known writable streams');
    if (stream._writer === undefined) {
      return false;
    }
    return true;
  }
  function WritableStreamAbort(stream, reason) {
    var state = stream._state;
    if (state === 'closed') {
      return Promise.resolve(undefined);
    }
    if (state === 'errored') {
      return Promise.reject(stream._storedError);
    }
    var error = new TypeError('Requested to abort');
    if (stream._pendingAbortRequest !== undefined) {
      return Promise.reject(error);
    }
    assert(state === 'writable' || state === 'erroring', 'state must be writable or erroring');
    var wasAlreadyErroring = false;
    if (state === 'erroring') {
      wasAlreadyErroring = true;
      reason = undefined;
    }
    var promise = new Promise(function (resolve, reject) {
      stream._pendingAbortRequest = {
        _resolve: resolve,
        _reject: reject,
        _reason: reason,
        _wasAlreadyErroring: wasAlreadyErroring
      };
    });
    if (wasAlreadyErroring === false) {
      WritableStreamStartErroring(stream, error);
    }
    return promise;
  }
  function WritableStreamAddWriteRequest(stream) {
    assert(IsWritableStreamLocked(stream) === true);
    assert(stream._state === 'writable');
    var promise = new Promise(function (resolve, reject) {
      var writeRequest = {
        _resolve: resolve,
        _reject: reject
      };
      stream._writeRequests.push(writeRequest);
    });
    return promise;
  }
  function WritableStreamDealWithRejection(stream, error) {
    var state = stream._state;
    if (state === 'writable') {
      WritableStreamStartErroring(stream, error);
      return;
    }
    assert(state === 'erroring');
    WritableStreamFinishErroring(stream);
  }
  function WritableStreamStartErroring(stream, reason) {
    assert(stream._storedError === undefined, 'stream._storedError === undefined');
    assert(stream._state === 'writable', 'state must be writable');
    var controller = stream._writableStreamController;
    assert(controller !== undefined, 'controller must not be undefined');
    stream._state = 'erroring';
    stream._storedError = reason;
    var writer = stream._writer;
    if (writer !== undefined) {
      WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, reason);
    }
    if (WritableStreamHasOperationMarkedInFlight(stream) === false && controller._started === true) {
      WritableStreamFinishErroring(stream);
    }
  }
  function WritableStreamFinishErroring(stream) {
    assert(stream._state === 'erroring', 'stream._state === erroring');
    assert(WritableStreamHasOperationMarkedInFlight(stream) === false, 'WritableStreamHasOperationMarkedInFlight(stream) === false');
    stream._state = 'errored';
    stream._writableStreamController.__errorSteps();
    var storedError = stream._storedError;
    for (var i = 0; i < stream._writeRequests.length; i++) {
      var writeRequest = stream._writeRequests[i];
      writeRequest._reject(storedError);
    }
    stream._writeRequests = [];
    if (stream._pendingAbortRequest === undefined) {
      WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
      return;
    }
    var abortRequest = stream._pendingAbortRequest;
    stream._pendingAbortRequest = undefined;
    if (abortRequest._wasAlreadyErroring === true) {
      abortRequest._reject(storedError);
      WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
      return;
    }
    var promise = stream._writableStreamController.__abortSteps(abortRequest._reason);
    promise.then(function () {
      abortRequest._resolve();
      WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
    }, function (reason) {
      abortRequest._reject(reason);
      WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
    });
  }
  function WritableStreamFinishInFlightWrite(stream) {
    assert(stream._inFlightWriteRequest !== undefined);
    stream._inFlightWriteRequest._resolve(undefined);
    stream._inFlightWriteRequest = undefined;
  }
  function WritableStreamFinishInFlightWriteWithError(stream, error) {
    assert(stream._inFlightWriteRequest !== undefined);
    stream._inFlightWriteRequest._reject(error);
    stream._inFlightWriteRequest = undefined;
    assert(stream._state === 'writable' || stream._state === 'erroring');
    WritableStreamDealWithRejection(stream, error);
  }
  function WritableStreamFinishInFlightClose(stream) {
    assert(stream._inFlightCloseRequest !== undefined);
    stream._inFlightCloseRequest._resolve(undefined);
    stream._inFlightCloseRequest = undefined;
    var state = stream._state;
    assert(state === 'writable' || state === 'erroring');
    if (state === 'erroring') {
      stream._storedError = undefined;
      if (stream._pendingAbortRequest !== undefined) {
        stream._pendingAbortRequest._resolve();
        stream._pendingAbortRequest = undefined;
      }
    }
    stream._state = 'closed';
    var writer = stream._writer;
    if (writer !== undefined) {
      defaultWriterClosedPromiseResolve(writer);
    }
    assert(stream._pendingAbortRequest === undefined, 'stream._pendingAbortRequest === undefined');
    assert(stream._storedError === undefined, 'stream._storedError === undefined');
  }
  function WritableStreamFinishInFlightCloseWithError(stream, error) {
    assert(stream._inFlightCloseRequest !== undefined);
    stream._inFlightCloseRequest._reject(error);
    stream._inFlightCloseRequest = undefined;
    assert(stream._state === 'writable' || stream._state === 'erroring');
    if (stream._pendingAbortRequest !== undefined) {
      stream._pendingAbortRequest._reject(error);
      stream._pendingAbortRequest = undefined;
    }
    WritableStreamDealWithRejection(stream, error);
  }
  function WritableStreamCloseQueuedOrInFlight(stream) {
    if (stream._closeRequest === undefined && stream._inFlightCloseRequest === undefined) {
      return false;
    }
    return true;
  }
  function WritableStreamHasOperationMarkedInFlight(stream) {
    if (stream._inFlightWriteRequest === undefined && stream._inFlightCloseRequest === undefined) {
      return false;
    }
    return true;
  }
  function WritableStreamMarkCloseRequestInFlight(stream) {
    assert(stream._inFlightCloseRequest === undefined);
    assert(stream._closeRequest !== undefined);
    stream._inFlightCloseRequest = stream._closeRequest;
    stream._closeRequest = undefined;
  }
  function WritableStreamMarkFirstWriteRequestInFlight(stream) {
    assert(stream._inFlightWriteRequest === undefined, 'there must be no pending write request');
    assert(stream._writeRequests.length !== 0, 'writeRequests must not be empty');
    stream._inFlightWriteRequest = stream._writeRequests.shift();
  }
  function WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream) {
    assert(stream._state === 'errored', '_stream_.[[state]] is `"errored"`');
    if (stream._closeRequest !== undefined) {
      assert(stream._inFlightCloseRequest === undefined);
      stream._closeRequest._reject(stream._storedError);
      stream._closeRequest = undefined;
    }
    var writer = stream._writer;
    if (writer !== undefined) {
      defaultWriterClosedPromiseReject(writer, stream._storedError);
      writer._closedPromise.catch(function () {});
    }
  }
  function WritableStreamUpdateBackpressure(stream, backpressure) {
    assert(stream._state === 'writable');
    assert(WritableStreamCloseQueuedOrInFlight(stream) === false);
    var writer = stream._writer;
    if (writer !== undefined && backpressure !== stream._backpressure) {
      if (backpressure === true) {
        defaultWriterReadyPromiseReset(writer);
      } else {
        assert(backpressure === false);
        defaultWriterReadyPromiseResolve(writer);
      }
    }
    stream._backpressure = backpressure;
  }
  var WritableStreamDefaultWriter = function () {
    function WritableStreamDefaultWriter(stream) {
      _classCallCheck(this, WritableStreamDefaultWriter);
      if (IsWritableStream(stream) === false) {
        throw new TypeError('WritableStreamDefaultWriter can only be constructed with a WritableStream instance');
      }
      if (IsWritableStreamLocked(stream) === true) {
        throw new TypeError('This stream has already been locked for exclusive writing by another writer');
      }
      this._ownerWritableStream = stream;
      stream._writer = this;
      var state = stream._state;
      if (state === 'writable') {
        if (WritableStreamCloseQueuedOrInFlight(stream) === false && stream._backpressure === true) {
          defaultWriterReadyPromiseInitialize(this);
        } else {
          defaultWriterReadyPromiseInitializeAsResolved(this);
        }
        defaultWriterClosedPromiseInitialize(this);
      } else if (state === 'erroring') {
        defaultWriterReadyPromiseInitializeAsRejected(this, stream._storedError);
        this._readyPromise.catch(function () {});
        defaultWriterClosedPromiseInitialize(this);
      } else if (state === 'closed') {
        defaultWriterReadyPromiseInitializeAsResolved(this);
        defaultWriterClosedPromiseInitializeAsResolved(this);
      } else {
        assert(state === 'errored', 'state must be errored');
        var storedError = stream._storedError;
        defaultWriterReadyPromiseInitializeAsRejected(this, storedError);
        this._readyPromise.catch(function () {});
        defaultWriterClosedPromiseInitializeAsRejected(this, storedError);
        this._closedPromise.catch(function () {});
      }
    }
    _createClass(WritableStreamDefaultWriter, [{
      key: 'abort',
      value: function abort(reason) {
        if (IsWritableStreamDefaultWriter(this) === false) {
          return Promise.reject(defaultWriterBrandCheckException('abort'));
        }
        if (this._ownerWritableStream === undefined) {
          return Promise.reject(defaultWriterLockException('abort'));
        }
        return WritableStreamDefaultWriterAbort(this, reason);
      }
    }, {
      key: 'close',
      value: function close() {
        if (IsWritableStreamDefaultWriter(this) === false) {
          return Promise.reject(defaultWriterBrandCheckException('close'));
        }
        var stream = this._ownerWritableStream;
        if (stream === undefined) {
          return Promise.reject(defaultWriterLockException('close'));
        }
        if (WritableStreamCloseQueuedOrInFlight(stream) === true) {
          return Promise.reject(new TypeError('cannot close an already-closing stream'));
        }
        return WritableStreamDefaultWriterClose(this);
      }
    }, {
      key: 'releaseLock',
      value: function releaseLock() {
        if (IsWritableStreamDefaultWriter(this) === false) {
          throw defaultWriterBrandCheckException('releaseLock');
        }
        var stream = this._ownerWritableStream;
        if (stream === undefined) {
          return;
        }
        assert(stream._writer !== undefined);
        WritableStreamDefaultWriterRelease(this);
      }
    }, {
      key: 'write',
      value: function write(chunk) {
        if (IsWritableStreamDefaultWriter(this) === false) {
          return Promise.reject(defaultWriterBrandCheckException('write'));
        }
        if (this._ownerWritableStream === undefined) {
          return Promise.reject(defaultWriterLockException('write to'));
        }
        return WritableStreamDefaultWriterWrite(this, chunk);
      }
    }, {
      key: 'closed',
      get: function get() {
        if (IsWritableStreamDefaultWriter(this) === false) {
          return Promise.reject(defaultWriterBrandCheckException('closed'));
        }
        return this._closedPromise;
      }
    }, {
      key: 'desiredSize',
      get: function get() {
        if (IsWritableStreamDefaultWriter(this) === false) {
          throw defaultWriterBrandCheckException('desiredSize');
        }
        if (this._ownerWritableStream === undefined) {
          throw defaultWriterLockException('desiredSize');
        }
        return WritableStreamDefaultWriterGetDesiredSize(this);
      }
    }, {
      key: 'ready',
      get: function get() {
        if (IsWritableStreamDefaultWriter(this) === false) {
          return Promise.reject(defaultWriterBrandCheckException('ready'));
        }
        return this._readyPromise;
      }
    }]);
    return WritableStreamDefaultWriter;
  }();
  function IsWritableStreamDefaultWriter(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_ownerWritableStream')) {
      return false;
    }
    return true;
  }
  function WritableStreamDefaultWriterAbort(writer, reason) {
    var stream = writer._ownerWritableStream;
    assert(stream !== undefined);
    return WritableStreamAbort(stream, reason);
  }
  function WritableStreamDefaultWriterClose(writer) {
    var stream = writer._ownerWritableStream;
    assert(stream !== undefined);
    var state = stream._state;
    if (state === 'closed' || state === 'errored') {
      return Promise.reject(new TypeError('The stream (in ' + state + ' state) is not in the writable state and cannot be closed'));
    }
    assert(state === 'writable' || state === 'erroring');
    assert(WritableStreamCloseQueuedOrInFlight(stream) === false);
    var promise = new Promise(function (resolve, reject) {
      var closeRequest = {
        _resolve: resolve,
        _reject: reject
      };
      stream._closeRequest = closeRequest;
    });
    if (stream._backpressure === true && state === 'writable') {
      defaultWriterReadyPromiseResolve(writer);
    }
    WritableStreamDefaultControllerClose(stream._writableStreamController);
    return promise;
  }
  function WritableStreamDefaultWriterCloseWithErrorPropagation(writer) {
    var stream = writer._ownerWritableStream;
    assert(stream !== undefined);
    var state = stream._state;
    if (WritableStreamCloseQueuedOrInFlight(stream) === true || state === 'closed') {
      return Promise.resolve();
    }
    if (state === 'errored') {
      return Promise.reject(stream._storedError);
    }
    assert(state === 'writable' || state === 'erroring');
    return WritableStreamDefaultWriterClose(writer);
  }
  function WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, error) {
    if (writer._closedPromiseState === 'pending') {
      defaultWriterClosedPromiseReject(writer, error);
    } else {
      defaultWriterClosedPromiseResetToRejected(writer, error);
    }
    writer._closedPromise.catch(function () {});
  }
  function WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, error) {
    if (writer._readyPromiseState === 'pending') {
      defaultWriterReadyPromiseReject(writer, error);
    } else {
      defaultWriterReadyPromiseResetToRejected(writer, error);
    }
    writer._readyPromise.catch(function () {});
  }
  function WritableStreamDefaultWriterGetDesiredSize(writer) {
    var stream = writer._ownerWritableStream;
    var state = stream._state;
    if (state === 'errored' || state === 'erroring') {
      return null;
    }
    if (state === 'closed') {
      return 0;
    }
    return WritableStreamDefaultControllerGetDesiredSize(stream._writableStreamController);
  }
  function WritableStreamDefaultWriterRelease(writer) {
    var stream = writer._ownerWritableStream;
    assert(stream !== undefined);
    assert(stream._writer === writer);
    var releasedError = new TypeError('Writer was released and can no longer be used to monitor the stream\'s closedness');
    WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, releasedError);
    WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, releasedError);
    stream._writer = undefined;
    writer._ownerWritableStream = undefined;
  }
  function WritableStreamDefaultWriterWrite(writer, chunk) {
    var stream = writer._ownerWritableStream;
    assert(stream !== undefined);
    var controller = stream._writableStreamController;
    var chunkSize = WritableStreamDefaultControllerGetChunkSize(controller, chunk);
    if (stream !== writer._ownerWritableStream) {
      return Promise.reject(defaultWriterLockException('write to'));
    }
    var state = stream._state;
    if (state === 'errored') {
      return Promise.reject(stream._storedError);
    }
    if (WritableStreamCloseQueuedOrInFlight(stream) === true || state === 'closed') {
      return Promise.reject(new TypeError('The stream is closing or closed and cannot be written to'));
    }
    if (state === 'erroring') {
      return Promise.reject(stream._storedError);
    }
    assert(state === 'writable');
    var promise = WritableStreamAddWriteRequest(stream);
    WritableStreamDefaultControllerWrite(controller, chunk, chunkSize);
    return promise;
  }
  var WritableStreamDefaultController = function () {
    function WritableStreamDefaultController(stream, underlyingSink, size, highWaterMark) {
      _classCallCheck(this, WritableStreamDefaultController);
      if (IsWritableStream(stream) === false) {
        throw new TypeError('WritableStreamDefaultController can only be constructed with a WritableStream instance');
      }
      if (stream._writableStreamController !== undefined) {
        throw new TypeError('WritableStreamDefaultController instances can only be created by the WritableStream constructor');
      }
      this._controlledWritableStream = stream;
      this._underlyingSink = underlyingSink;
      this._queue = undefined;
      this._queueTotalSize = undefined;
      ResetQueue(this);
      this._started = false;
      var normalizedStrategy = ValidateAndNormalizeQueuingStrategy(size, highWaterMark);
      this._strategySize = normalizedStrategy.size;
      this._strategyHWM = normalizedStrategy.highWaterMark;
      var backpressure = WritableStreamDefaultControllerGetBackpressure(this);
      WritableStreamUpdateBackpressure(stream, backpressure);
    }
    _createClass(WritableStreamDefaultController, [{
      key: 'error',
      value: function error(e) {
        if (IsWritableStreamDefaultController(this) === false) {
          throw new TypeError('WritableStreamDefaultController.prototype.error can only be used on a WritableStreamDefaultController');
        }
        var state = this._controlledWritableStream._state;
        if (state !== 'writable') {
          return;
        }
        WritableStreamDefaultControllerError(this, e);
      }
    }, {
      key: '__abortSteps',
      value: function __abortSteps(reason) {
        return PromiseInvokeOrNoop(this._underlyingSink, 'abort', [reason]);
      }
    }, {
      key: '__errorSteps',
      value: function __errorSteps() {
        ResetQueue(this);
      }
    }, {
      key: '__startSteps',
      value: function __startSteps() {
        var _this = this;
        var startResult = InvokeOrNoop(this._underlyingSink, 'start', [this]);
        var stream = this._controlledWritableStream;
        Promise.resolve(startResult).then(function () {
          assert(stream._state === 'writable' || stream._state === 'erroring');
          _this._started = true;
          WritableStreamDefaultControllerAdvanceQueueIfNeeded(_this);
        }, function (r) {
          assert(stream._state === 'writable' || stream._state === 'erroring');
          _this._started = true;
          WritableStreamDealWithRejection(stream, r);
        }).catch(rethrowAssertionErrorRejection);
      }
    }]);
    return WritableStreamDefaultController;
  }();
  function WritableStreamDefaultControllerClose(controller) {
    EnqueueValueWithSize(controller, 'close', 0);
    WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
  }
  function WritableStreamDefaultControllerGetChunkSize(controller, chunk) {
    var strategySize = controller._strategySize;
    if (strategySize === undefined) {
      return 1;
    }
    try {
      return strategySize(chunk);
    } catch (chunkSizeE) {
      WritableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE);
      return 1;
    }
  }
  function WritableStreamDefaultControllerGetDesiredSize(controller) {
    return controller._strategyHWM - controller._queueTotalSize;
  }
  function WritableStreamDefaultControllerWrite(controller, chunk, chunkSize) {
    var writeRecord = { chunk: chunk };
    try {
      EnqueueValueWithSize(controller, writeRecord, chunkSize);
    } catch (enqueueE) {
      WritableStreamDefaultControllerErrorIfNeeded(controller, enqueueE);
      return;
    }
    var stream = controller._controlledWritableStream;
    if (WritableStreamCloseQueuedOrInFlight(stream) === false && stream._state === 'writable') {
      var backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
      WritableStreamUpdateBackpressure(stream, backpressure);
    }
    WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
  }
  function IsWritableStreamDefaultController(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_underlyingSink')) {
      return false;
    }
    return true;
  }
  function WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller) {
    var stream = controller._controlledWritableStream;
    if (controller._started === false) {
      return;
    }
    if (stream._inFlightWriteRequest !== undefined) {
      return;
    }
    var state = stream._state;
    if (state === 'closed' || state === 'errored') {
      return;
    }
    if (state === 'erroring') {
      WritableStreamFinishErroring(stream);
      return;
    }
    if (controller._queue.length === 0) {
      return;
    }
    var writeRecord = PeekQueueValue(controller);
    if (writeRecord === 'close') {
      WritableStreamDefaultControllerProcessClose(controller);
    } else {
      WritableStreamDefaultControllerProcessWrite(controller, writeRecord.chunk);
    }
  }
  function WritableStreamDefaultControllerErrorIfNeeded(controller, error) {
    if (controller._controlledWritableStream._state === 'writable') {
      WritableStreamDefaultControllerError(controller, error);
    }
  }
  function WritableStreamDefaultControllerProcessClose(controller) {
    var stream = controller._controlledWritableStream;
    WritableStreamMarkCloseRequestInFlight(stream);
    DequeueValue(controller);
    assert(controller._queue.length === 0, 'queue must be empty once the final write record is dequeued');
    var sinkClosePromise = PromiseInvokeOrNoop(controller._underlyingSink, 'close', []);
    sinkClosePromise.then(function () {
      WritableStreamFinishInFlightClose(stream);
    }, function (reason) {
      WritableStreamFinishInFlightCloseWithError(stream, reason);
    }).catch(rethrowAssertionErrorRejection);
  }
  function WritableStreamDefaultControllerProcessWrite(controller, chunk) {
    var stream = controller._controlledWritableStream;
    WritableStreamMarkFirstWriteRequestInFlight(stream);
    var sinkWritePromise = PromiseInvokeOrNoop(controller._underlyingSink, 'write', [chunk, controller]);
    sinkWritePromise.then(function () {
      WritableStreamFinishInFlightWrite(stream);
      var state = stream._state;
      assert(state === 'writable' || state === 'erroring');
      DequeueValue(controller);
      if (WritableStreamCloseQueuedOrInFlight(stream) === false && state === 'writable') {
        var backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
        WritableStreamUpdateBackpressure(stream, backpressure);
      }
      WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
    }, function (reason) {
      WritableStreamFinishInFlightWriteWithError(stream, reason);
    }).catch(rethrowAssertionErrorRejection);
  }
  function WritableStreamDefaultControllerGetBackpressure(controller) {
    var desiredSize = WritableStreamDefaultControllerGetDesiredSize(controller);
    return desiredSize <= 0;
  }
  function WritableStreamDefaultControllerError(controller, error) {
    var stream = controller._controlledWritableStream;
    assert(stream._state === 'writable');
    WritableStreamStartErroring(stream, error);
  }
  function streamBrandCheckException(name) {
    return new TypeError('WritableStream.prototype.' + name + ' can only be used on a WritableStream');
  }
  function defaultWriterBrandCheckException(name) {
    return new TypeError('WritableStreamDefaultWriter.prototype.' + name + ' can only be used on a WritableStreamDefaultWriter');
  }
  function defaultWriterLockException(name) {
    return new TypeError('Cannot ' + name + ' a stream using a released writer');
  }
  function defaultWriterClosedPromiseInitialize(writer) {
    writer._closedPromise = new Promise(function (resolve, reject) {
      writer._closedPromise_resolve = resolve;
      writer._closedPromise_reject = reject;
      writer._closedPromiseState = 'pending';
    });
  }
  function defaultWriterClosedPromiseInitializeAsRejected(writer, reason) {
    writer._closedPromise = Promise.reject(reason);
    writer._closedPromise_resolve = undefined;
    writer._closedPromise_reject = undefined;
    writer._closedPromiseState = 'rejected';
  }
  function defaultWriterClosedPromiseInitializeAsResolved(writer) {
    writer._closedPromise = Promise.resolve(undefined);
    writer._closedPromise_resolve = undefined;
    writer._closedPromise_reject = undefined;
    writer._closedPromiseState = 'resolved';
  }
  function defaultWriterClosedPromiseReject(writer, reason) {
    assert(writer._closedPromise_resolve !== undefined, 'writer._closedPromise_resolve !== undefined');
    assert(writer._closedPromise_reject !== undefined, 'writer._closedPromise_reject !== undefined');
    assert(writer._closedPromiseState === 'pending', 'writer._closedPromiseState is pending');
    writer._closedPromise_reject(reason);
    writer._closedPromise_resolve = undefined;
    writer._closedPromise_reject = undefined;
    writer._closedPromiseState = 'rejected';
  }
  function defaultWriterClosedPromiseResetToRejected(writer, reason) {
    assert(writer._closedPromise_resolve === undefined, 'writer._closedPromise_resolve === undefined');
    assert(writer._closedPromise_reject === undefined, 'writer._closedPromise_reject === undefined');
    assert(writer._closedPromiseState !== 'pending', 'writer._closedPromiseState is not pending');
    writer._closedPromise = Promise.reject(reason);
    writer._closedPromiseState = 'rejected';
  }
  function defaultWriterClosedPromiseResolve(writer) {
    assert(writer._closedPromise_resolve !== undefined, 'writer._closedPromise_resolve !== undefined');
    assert(writer._closedPromise_reject !== undefined, 'writer._closedPromise_reject !== undefined');
    assert(writer._closedPromiseState === 'pending', 'writer._closedPromiseState is pending');
    writer._closedPromise_resolve(undefined);
    writer._closedPromise_resolve = undefined;
    writer._closedPromise_reject = undefined;
    writer._closedPromiseState = 'resolved';
  }
  function defaultWriterReadyPromiseInitialize(writer) {
    writer._readyPromise = new Promise(function (resolve, reject) {
      writer._readyPromise_resolve = resolve;
      writer._readyPromise_reject = reject;
    });
    writer._readyPromiseState = 'pending';
  }
  function defaultWriterReadyPromiseInitializeAsRejected(writer, reason) {
    writer._readyPromise = Promise.reject(reason);
    writer._readyPromise_resolve = undefined;
    writer._readyPromise_reject = undefined;
    writer._readyPromiseState = 'rejected';
  }
  function defaultWriterReadyPromiseInitializeAsResolved(writer) {
    writer._readyPromise = Promise.resolve(undefined);
    writer._readyPromise_resolve = undefined;
    writer._readyPromise_reject = undefined;
    writer._readyPromiseState = 'fulfilled';
  }
  function defaultWriterReadyPromiseReject(writer, reason) {
    assert(writer._readyPromise_resolve !== undefined, 'writer._readyPromise_resolve !== undefined');
    assert(writer._readyPromise_reject !== undefined, 'writer._readyPromise_reject !== undefined');
    writer._readyPromise_reject(reason);
    writer._readyPromise_resolve = undefined;
    writer._readyPromise_reject = undefined;
    writer._readyPromiseState = 'rejected';
  }
  function defaultWriterReadyPromiseReset(writer) {
    assert(writer._readyPromise_resolve === undefined, 'writer._readyPromise_resolve === undefined');
    assert(writer._readyPromise_reject === undefined, 'writer._readyPromise_reject === undefined');
    writer._readyPromise = new Promise(function (resolve, reject) {
      writer._readyPromise_resolve = resolve;
      writer._readyPromise_reject = reject;
    });
    writer._readyPromiseState = 'pending';
  }
  function defaultWriterReadyPromiseResetToRejected(writer, reason) {
    assert(writer._readyPromise_resolve === undefined, 'writer._readyPromise_resolve === undefined');
    assert(writer._readyPromise_reject === undefined, 'writer._readyPromise_reject === undefined');
    writer._readyPromise = Promise.reject(reason);
    writer._readyPromiseState = 'rejected';
  }
  function defaultWriterReadyPromiseResolve(writer) {
    assert(writer._readyPromise_resolve !== undefined, 'writer._readyPromise_resolve !== undefined');
    assert(writer._readyPromise_reject !== undefined, 'writer._readyPromise_reject !== undefined');
    writer._readyPromise_resolve(undefined);
    writer._readyPromise_resolve = undefined;
    writer._readyPromise_reject = undefined;
    writer._readyPromiseState = 'fulfilled';
  }
}, function (module, exports, __w_pdfjs_require__) {
  "use strict";

  var _require = __w_pdfjs_require__(0),
      IsFiniteNonNegativeNumber = _require.IsFiniteNonNegativeNumber;
  var _require2 = __w_pdfjs_require__(1),
      assert = _require2.assert;
  exports.DequeueValue = function (container) {
    assert('_queue' in container && '_queueTotalSize' in container, 'Spec-level failure: DequeueValue should only be used on containers with [[queue]] and [[queueTotalSize]].');
    assert(container._queue.length > 0, 'Spec-level failure: should never dequeue from an empty queue.');
    var pair = container._queue.shift();
    container._queueTotalSize -= pair.size;
    if (container._queueTotalSize < 0) {
      container._queueTotalSize = 0;
    }
    return pair.value;
  };
  exports.EnqueueValueWithSize = function (container, value, size) {
    assert('_queue' in container && '_queueTotalSize' in container, 'Spec-level failure: EnqueueValueWithSize should only be used on containers with [[queue]] and ' + '[[queueTotalSize]].');
    size = Number(size);
    if (!IsFiniteNonNegativeNumber(size)) {
      throw new RangeError('Size must be a finite, non-NaN, non-negative number.');
    }
    container._queue.push({
      value: value,
      size: size
    });
    container._queueTotalSize += size;
  };
  exports.PeekQueueValue = function (container) {
    assert('_queue' in container && '_queueTotalSize' in container, 'Spec-level failure: PeekQueueValue should only be used on containers with [[queue]] and [[queueTotalSize]].');
    assert(container._queue.length > 0, 'Spec-level failure: should never peek at an empty queue.');
    var pair = container._queue[0];
    return pair.value;
  };
  exports.ResetQueue = function (container) {
    assert('_queue' in container && '_queueTotalSize' in container, 'Spec-level failure: ResetQueue should only be used on containers with [[queue]] and [[queueTotalSize]].');
    container._queue = [];
    container._queueTotalSize = 0;
  };
}, function (module, exports, __w_pdfjs_require__) {
  "use strict";

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var _require = __w_pdfjs_require__(0),
      ArrayBufferCopy = _require.ArrayBufferCopy,
      CreateIterResultObject = _require.CreateIterResultObject,
      IsFiniteNonNegativeNumber = _require.IsFiniteNonNegativeNumber,
      InvokeOrNoop = _require.InvokeOrNoop,
      PromiseInvokeOrNoop = _require.PromiseInvokeOrNoop,
      TransferArrayBuffer = _require.TransferArrayBuffer,
      ValidateAndNormalizeQueuingStrategy = _require.ValidateAndNormalizeQueuingStrategy,
      ValidateAndNormalizeHighWaterMark = _require.ValidateAndNormalizeHighWaterMark;
  var _require2 = __w_pdfjs_require__(0),
      createArrayFromList = _require2.createArrayFromList,
      createDataProperty = _require2.createDataProperty,
      typeIsObject = _require2.typeIsObject;
  var _require3 = __w_pdfjs_require__(1),
      assert = _require3.assert,
      rethrowAssertionErrorRejection = _require3.rethrowAssertionErrorRejection;
  var _require4 = __w_pdfjs_require__(3),
      DequeueValue = _require4.DequeueValue,
      EnqueueValueWithSize = _require4.EnqueueValueWithSize,
      ResetQueue = _require4.ResetQueue;
  var _require5 = __w_pdfjs_require__(2),
      AcquireWritableStreamDefaultWriter = _require5.AcquireWritableStreamDefaultWriter,
      IsWritableStream = _require5.IsWritableStream,
      IsWritableStreamLocked = _require5.IsWritableStreamLocked,
      WritableStreamAbort = _require5.WritableStreamAbort,
      WritableStreamDefaultWriterCloseWithErrorPropagation = _require5.WritableStreamDefaultWriterCloseWithErrorPropagation,
      WritableStreamDefaultWriterRelease = _require5.WritableStreamDefaultWriterRelease,
      WritableStreamDefaultWriterWrite = _require5.WritableStreamDefaultWriterWrite,
      WritableStreamCloseQueuedOrInFlight = _require5.WritableStreamCloseQueuedOrInFlight;
  var ReadableStream = function () {
    function ReadableStream() {
      var underlyingSource = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          size = _ref.size,
          highWaterMark = _ref.highWaterMark;
      _classCallCheck(this, ReadableStream);
      this._state = 'readable';
      this._reader = undefined;
      this._storedError = undefined;
      this._disturbed = false;
      this._readableStreamController = undefined;
      var type = underlyingSource.type;
      var typeString = String(type);
      if (typeString === 'bytes') {
        if (highWaterMark === undefined) {
          highWaterMark = 0;
        }
        this._readableStreamController = new ReadableByteStreamController(this, underlyingSource, highWaterMark);
      } else if (type === undefined) {
        if (highWaterMark === undefined) {
          highWaterMark = 1;
        }
        this._readableStreamController = new ReadableStreamDefaultController(this, underlyingSource, size, highWaterMark);
      } else {
        throw new RangeError('Invalid type is specified');
      }
    }
    _createClass(ReadableStream, [{
      key: 'cancel',
      value: function cancel(reason) {
        if (IsReadableStream(this) === false) {
          return Promise.reject(streamBrandCheckException('cancel'));
        }
        if (IsReadableStreamLocked(this) === true) {
          return Promise.reject(new TypeError('Cannot cancel a stream that already has a reader'));
        }
        return ReadableStreamCancel(this, reason);
      }
    }, {
      key: 'getReader',
      value: function getReader() {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            mode = _ref2.mode;
        if (IsReadableStream(this) === false) {
          throw streamBrandCheckException('getReader');
        }
        if (mode === undefined) {
          return AcquireReadableStreamDefaultReader(this);
        }
        mode = String(mode);
        if (mode === 'byob') {
          return AcquireReadableStreamBYOBReader(this);
        }
        throw new RangeError('Invalid mode is specified');
      }
    }, {
      key: 'pipeThrough',
      value: function pipeThrough(_ref3, options) {
        var writable = _ref3.writable,
            readable = _ref3.readable;
        var promise = this.pipeTo(writable, options);
        ifIsObjectAndHasAPromiseIsHandledInternalSlotSetPromiseIsHandledToTrue(promise);
        return readable;
      }
    }, {
      key: 'pipeTo',
      value: function pipeTo(dest) {
        var _this = this;
        var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            preventClose = _ref4.preventClose,
            preventAbort = _ref4.preventAbort,
            preventCancel = _ref4.preventCancel;
        if (IsReadableStream(this) === false) {
          return Promise.reject(streamBrandCheckException('pipeTo'));
        }
        if (IsWritableStream(dest) === false) {
          return Promise.reject(new TypeError('ReadableStream.prototype.pipeTo\'s first argument must be a WritableStream'));
        }
        preventClose = Boolean(preventClose);
        preventAbort = Boolean(preventAbort);
        preventCancel = Boolean(preventCancel);
        if (IsReadableStreamLocked(this) === true) {
          return Promise.reject(new TypeError('ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream'));
        }
        if (IsWritableStreamLocked(dest) === true) {
          return Promise.reject(new TypeError('ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream'));
        }
        var reader = AcquireReadableStreamDefaultReader(this);
        var writer = AcquireWritableStreamDefaultWriter(dest);
        var shuttingDown = false;
        var currentWrite = Promise.resolve();
        return new Promise(function (resolve, reject) {
          function pipeLoop() {
            currentWrite = Promise.resolve();
            if (shuttingDown === true) {
              return Promise.resolve();
            }
            return writer._readyPromise.then(function () {
              return ReadableStreamDefaultReaderRead(reader).then(function (_ref5) {
                var value = _ref5.value,
                    done = _ref5.done;
                if (done === true) {
                  return;
                }
                currentWrite = WritableStreamDefaultWriterWrite(writer, value).catch(function () {});
              });
            }).then(pipeLoop);
          }
          isOrBecomesErrored(_this, reader._closedPromise, function (storedError) {
            if (preventAbort === false) {
              shutdownWithAction(function () {
                return WritableStreamAbort(dest, storedError);
              }, true, storedError);
            } else {
              shutdown(true, storedError);
            }
          });
          isOrBecomesErrored(dest, writer._closedPromise, function (storedError) {
            if (preventCancel === false) {
              shutdownWithAction(function () {
                return ReadableStreamCancel(_this, storedError);
              }, true, storedError);
            } else {
              shutdown(true, storedError);
            }
          });
          isOrBecomesClosed(_this, reader._closedPromise, function () {
            if (preventClose === false) {
              shutdownWithAction(function () {
                return WritableStreamDefaultWriterCloseWithErrorPropagation(writer);
              });
            } else {
              shutdown();
            }
          });
          if (WritableStreamCloseQueuedOrInFlight(dest) === true || dest._state === 'closed') {
            var destClosed = new TypeError('the destination writable stream closed before all data could be piped to it');
            if (preventCancel === false) {
              shutdownWithAction(function () {
                return ReadableStreamCancel(_this, destClosed);
              }, true, destClosed);
            } else {
              shutdown(true, destClosed);
            }
          }
          pipeLoop().catch(function (err) {
            currentWrite = Promise.resolve();
            rethrowAssertionErrorRejection(err);
          });
          function waitForWritesToFinish() {
            var oldCurrentWrite = currentWrite;
            return currentWrite.then(function () {
              return oldCurrentWrite !== currentWrite ? waitForWritesToFinish() : undefined;
            });
          }
          function isOrBecomesErrored(stream, promise, action) {
            if (stream._state === 'errored') {
              action(stream._storedError);
            } else {
              promise.catch(action).catch(rethrowAssertionErrorRejection);
            }
          }
          function isOrBecomesClosed(stream, promise, action) {
            if (stream._state === 'closed') {
              action();
            } else {
              promise.then(action).catch(rethrowAssertionErrorRejection);
            }
          }
          function shutdownWithAction(action, originalIsError, originalError) {
            if (shuttingDown === true) {
              return;
            }
            shuttingDown = true;
            if (dest._state === 'writable' && WritableStreamCloseQueuedOrInFlight(dest) === false) {
              waitForWritesToFinish().then(doTheRest);
            } else {
              doTheRest();
            }
            function doTheRest() {
              action().then(function () {
                return finalize(originalIsError, originalError);
              }, function (newError) {
                return finalize(true, newError);
              }).catch(rethrowAssertionErrorRejection);
            }
          }
          function shutdown(isError, error) {
            if (shuttingDown === true) {
              return;
            }
            shuttingDown = true;
            if (dest._state === 'writable' && WritableStreamCloseQueuedOrInFlight(dest) === false) {
              waitForWritesToFinish().then(function () {
                return finalize(isError, error);
              }).catch(rethrowAssertionErrorRejection);
            } else {
              finalize(isError, error);
            }
          }
          function finalize(isError, error) {
            WritableStreamDefaultWriterRelease(writer);
            ReadableStreamReaderGenericRelease(reader);
            if (isError) {
              reject(error);
            } else {
              resolve(undefined);
            }
          }
        });
      }
    }, {
      key: 'tee',
      value: function tee() {
        if (IsReadableStream(this) === false) {
          throw streamBrandCheckException('tee');
        }
        var branches = ReadableStreamTee(this, false);
        return createArrayFromList(branches);
      }
    }, {
      key: 'locked',
      get: function get() {
        if (IsReadableStream(this) === false) {
          throw streamBrandCheckException('locked');
        }
        return IsReadableStreamLocked(this);
      }
    }]);
    return ReadableStream;
  }();
  module.exports = {
    ReadableStream: ReadableStream,
    IsReadableStreamDisturbed: IsReadableStreamDisturbed,
    ReadableStreamDefaultControllerClose: ReadableStreamDefaultControllerClose,
    ReadableStreamDefaultControllerEnqueue: ReadableStreamDefaultControllerEnqueue,
    ReadableStreamDefaultControllerError: ReadableStreamDefaultControllerError,
    ReadableStreamDefaultControllerGetDesiredSize: ReadableStreamDefaultControllerGetDesiredSize
  };
  function AcquireReadableStreamBYOBReader(stream) {
    return new ReadableStreamBYOBReader(stream);
  }
  function AcquireReadableStreamDefaultReader(stream) {
    return new ReadableStreamDefaultReader(stream);
  }
  function IsReadableStream(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_readableStreamController')) {
      return false;
    }
    return true;
  }
  function IsReadableStreamDisturbed(stream) {
    assert(IsReadableStream(stream) === true, 'IsReadableStreamDisturbed should only be used on known readable streams');
    return stream._disturbed;
  }
  function IsReadableStreamLocked(stream) {
    assert(IsReadableStream(stream) === true, 'IsReadableStreamLocked should only be used on known readable streams');
    if (stream._reader === undefined) {
      return false;
    }
    return true;
  }
  function ReadableStreamTee(stream, cloneForBranch2) {
    assert(IsReadableStream(stream) === true);
    assert(typeof cloneForBranch2 === 'boolean');
    var reader = AcquireReadableStreamDefaultReader(stream);
    var teeState = {
      closedOrErrored: false,
      canceled1: false,
      canceled2: false,
      reason1: undefined,
      reason2: undefined
    };
    teeState.promise = new Promise(function (resolve) {
      teeState._resolve = resolve;
    });
    var pull = create_ReadableStreamTeePullFunction();
    pull._reader = reader;
    pull._teeState = teeState;
    pull._cloneForBranch2 = cloneForBranch2;
    var cancel1 = create_ReadableStreamTeeBranch1CancelFunction();
    cancel1._stream = stream;
    cancel1._teeState = teeState;
    var cancel2 = create_ReadableStreamTeeBranch2CancelFunction();
    cancel2._stream = stream;
    cancel2._teeState = teeState;
    var underlyingSource1 = Object.create(Object.prototype);
    createDataProperty(underlyingSource1, 'pull', pull);
    createDataProperty(underlyingSource1, 'cancel', cancel1);
    var branch1Stream = new ReadableStream(underlyingSource1);
    var underlyingSource2 = Object.create(Object.prototype);
    createDataProperty(underlyingSource2, 'pull', pull);
    createDataProperty(underlyingSource2, 'cancel', cancel2);
    var branch2Stream = new ReadableStream(underlyingSource2);
    pull._branch1 = branch1Stream._readableStreamController;
    pull._branch2 = branch2Stream._readableStreamController;
    reader._closedPromise.catch(function (r) {
      if (teeState.closedOrErrored === true) {
        return;
      }
      ReadableStreamDefaultControllerError(pull._branch1, r);
      ReadableStreamDefaultControllerError(pull._branch2, r);
      teeState.closedOrErrored = true;
    });
    return [branch1Stream, branch2Stream];
  }
  function create_ReadableStreamTeePullFunction() {
    function f() {
      var reader = f._reader,
          branch1 = f._branch1,
          branch2 = f._branch2,
          teeState = f._teeState;
      return ReadableStreamDefaultReaderRead(reader).then(function (result) {
        assert(typeIsObject(result));
        var value = result.value;
        var done = result.done;
        assert(typeof done === 'boolean');
        if (done === true && teeState.closedOrErrored === false) {
          if (teeState.canceled1 === false) {
            ReadableStreamDefaultControllerClose(branch1);
          }
          if (teeState.canceled2 === false) {
            ReadableStreamDefaultControllerClose(branch2);
          }
          teeState.closedOrErrored = true;
        }
        if (teeState.closedOrErrored === true) {
          return;
        }
        var value1 = value;
        var value2 = value;
        if (teeState.canceled1 === false) {
          ReadableStreamDefaultControllerEnqueue(branch1, value1);
        }
        if (teeState.canceled2 === false) {
          ReadableStreamDefaultControllerEnqueue(branch2, value2);
        }
      });
    }
    return f;
  }
  function create_ReadableStreamTeeBranch1CancelFunction() {
    function f(reason) {
      var stream = f._stream,
          teeState = f._teeState;
      teeState.canceled1 = true;
      teeState.reason1 = reason;
      if (teeState.canceled2 === true) {
        var compositeReason = createArrayFromList([teeState.reason1, teeState.reason2]);
        var cancelResult = ReadableStreamCancel(stream, compositeReason);
        teeState._resolve(cancelResult);
      }
      return teeState.promise;
    }
    return f;
  }
  function create_ReadableStreamTeeBranch2CancelFunction() {
    function f(reason) {
      var stream = f._stream,
          teeState = f._teeState;
      teeState.canceled2 = true;
      teeState.reason2 = reason;
      if (teeState.canceled1 === true) {
        var compositeReason = createArrayFromList([teeState.reason1, teeState.reason2]);
        var cancelResult = ReadableStreamCancel(stream, compositeReason);
        teeState._resolve(cancelResult);
      }
      return teeState.promise;
    }
    return f;
  }
  function ReadableStreamAddReadIntoRequest(stream) {
    assert(IsReadableStreamBYOBReader(stream._reader) === true);
    assert(stream._state === 'readable' || stream._state === 'closed');
    var promise = new Promise(function (resolve, reject) {
      var readIntoRequest = {
        _resolve: resolve,
        _reject: reject
      };
      stream._reader._readIntoRequests.push(readIntoRequest);
    });
    return promise;
  }
  function ReadableStreamAddReadRequest(stream) {
    assert(IsReadableStreamDefaultReader(stream._reader) === true);
    assert(stream._state === 'readable');
    var promise = new Promise(function (resolve, reject) {
      var readRequest = {
        _resolve: resolve,
        _reject: reject
      };
      stream._reader._readRequests.push(readRequest);
    });
    return promise;
  }
  function ReadableStreamCancel(stream, reason) {
    stream._disturbed = true;
    if (stream._state === 'closed') {
      return Promise.resolve(undefined);
    }
    if (stream._state === 'errored') {
      return Promise.reject(stream._storedError);
    }
    ReadableStreamClose(stream);
    var sourceCancelPromise = stream._readableStreamController.__cancelSteps(reason);
    return sourceCancelPromise.then(function () {
      return undefined;
    });
  }
  function ReadableStreamClose(stream) {
    assert(stream._state === 'readable');
    stream._state = 'closed';
    var reader = stream._reader;
    if (reader === undefined) {
      return undefined;
    }
    if (IsReadableStreamDefaultReader(reader) === true) {
      for (var i = 0; i < reader._readRequests.length; i++) {
        var _resolve = reader._readRequests[i]._resolve;
        _resolve(CreateIterResultObject(undefined, true));
      }
      reader._readRequests = [];
    }
    defaultReaderClosedPromiseResolve(reader);
    return undefined;
  }
  function ReadableStreamError(stream, e) {
    assert(IsReadableStream(stream) === true, 'stream must be ReadableStream');
    assert(stream._state === 'readable', 'state must be readable');
    stream._state = 'errored';
    stream._storedError = e;
    var reader = stream._reader;
    if (reader === undefined) {
      return undefined;
    }
    if (IsReadableStreamDefaultReader(reader) === true) {
      for (var i = 0; i < reader._readRequests.length; i++) {
        var readRequest = reader._readRequests[i];
        readRequest._reject(e);
      }
      reader._readRequests = [];
    } else {
      assert(IsReadableStreamBYOBReader(reader), 'reader must be ReadableStreamBYOBReader');
      for (var _i = 0; _i < reader._readIntoRequests.length; _i++) {
        var readIntoRequest = reader._readIntoRequests[_i];
        readIntoRequest._reject(e);
      }
      reader._readIntoRequests = [];
    }
    defaultReaderClosedPromiseReject(reader, e);
    reader._closedPromise.catch(function () {});
  }
  function ReadableStreamFulfillReadIntoRequest(stream, chunk, done) {
    var reader = stream._reader;
    assert(reader._readIntoRequests.length > 0);
    var readIntoRequest = reader._readIntoRequests.shift();
    readIntoRequest._resolve(CreateIterResultObject(chunk, done));
  }
  function ReadableStreamFulfillReadRequest(stream, chunk, done) {
    var reader = stream._reader;
    assert(reader._readRequests.length > 0);
    var readRequest = reader._readRequests.shift();
    readRequest._resolve(CreateIterResultObject(chunk, done));
  }
  function ReadableStreamGetNumReadIntoRequests(stream) {
    return stream._reader._readIntoRequests.length;
  }
  function ReadableStreamGetNumReadRequests(stream) {
    return stream._reader._readRequests.length;
  }
  function ReadableStreamHasBYOBReader(stream) {
    var reader = stream._reader;
    if (reader === undefined) {
      return false;
    }
    if (IsReadableStreamBYOBReader(reader) === false) {
      return false;
    }
    return true;
  }
  function ReadableStreamHasDefaultReader(stream) {
    var reader = stream._reader;
    if (reader === undefined) {
      return false;
    }
    if (IsReadableStreamDefaultReader(reader) === false) {
      return false;
    }
    return true;
  }
  var ReadableStreamDefaultReader = function () {
    function ReadableStreamDefaultReader(stream) {
      _classCallCheck(this, ReadableStreamDefaultReader);
      if (IsReadableStream(stream) === false) {
        throw new TypeError('ReadableStreamDefaultReader can only be constructed with a ReadableStream instance');
      }
      if (IsReadableStreamLocked(stream) === true) {
        throw new TypeError('This stream has already been locked for exclusive reading by another reader');
      }
      ReadableStreamReaderGenericInitialize(this, stream);
      this._readRequests = [];
    }
    _createClass(ReadableStreamDefaultReader, [{
      key: 'cancel',
      value: function cancel(reason) {
        if (IsReadableStreamDefaultReader(this) === false) {
          return Promise.reject(defaultReaderBrandCheckException('cancel'));
        }
        if (this._ownerReadableStream === undefined) {
          return Promise.reject(readerLockException('cancel'));
        }
        return ReadableStreamReaderGenericCancel(this, reason);
      }
    }, {
      key: 'read',
      value: function read() {
        if (IsReadableStreamDefaultReader(this) === false) {
          return Promise.reject(defaultReaderBrandCheckException('read'));
        }
        if (this._ownerReadableStream === undefined) {
          return Promise.reject(readerLockException('read from'));
        }
        return ReadableStreamDefaultReaderRead(this);
      }
    }, {
      key: 'releaseLock',
      value: function releaseLock() {
        if (IsReadableStreamDefaultReader(this) === false) {
          throw defaultReaderBrandCheckException('releaseLock');
        }
        if (this._ownerReadableStream === undefined) {
          return;
        }
        if (this._readRequests.length > 0) {
          throw new TypeError('Tried to release a reader lock when that reader has pending read() calls un-settled');
        }
        ReadableStreamReaderGenericRelease(this);
      }
    }, {
      key: 'closed',
      get: function get() {
        if (IsReadableStreamDefaultReader(this) === false) {
          return Promise.reject(defaultReaderBrandCheckException('closed'));
        }
        return this._closedPromise;
      }
    }]);
    return ReadableStreamDefaultReader;
  }();
  var ReadableStreamBYOBReader = function () {
    function ReadableStreamBYOBReader(stream) {
      _classCallCheck(this, ReadableStreamBYOBReader);
      if (!IsReadableStream(stream)) {
        throw new TypeError('ReadableStreamBYOBReader can only be constructed with a ReadableStream instance given a ' + 'byte source');
      }
      if (IsReadableByteStreamController(stream._readableStreamController) === false) {
        throw new TypeError('Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte ' + 'source');
      }
      if (IsReadableStreamLocked(stream)) {
        throw new TypeError('This stream has already been locked for exclusive reading by another reader');
      }
      ReadableStreamReaderGenericInitialize(this, stream);
      this._readIntoRequests = [];
    }
    _createClass(ReadableStreamBYOBReader, [{
      key: 'cancel',
      value: function cancel(reason) {
        if (!IsReadableStreamBYOBReader(this)) {
          return Promise.reject(byobReaderBrandCheckException('cancel'));
        }
        if (this._ownerReadableStream === undefined) {
          return Promise.reject(readerLockException('cancel'));
        }
        return ReadableStreamReaderGenericCancel(this, reason);
      }
    }, {
      key: 'read',
      value: function read(view) {
        if (!IsReadableStreamBYOBReader(this)) {
          return Promise.reject(byobReaderBrandCheckException('read'));
        }
        if (this._ownerReadableStream === undefined) {
          return Promise.reject(readerLockException('read from'));
        }
        if (!ArrayBuffer.isView(view)) {
          return Promise.reject(new TypeError('view must be an array buffer view'));
        }
        if (view.byteLength === 0) {
          return Promise.reject(new TypeError('view must have non-zero byteLength'));
        }
        return ReadableStreamBYOBReaderRead(this, view);
      }
    }, {
      key: 'releaseLock',
      value: function releaseLock() {
        if (!IsReadableStreamBYOBReader(this)) {
          throw byobReaderBrandCheckException('releaseLock');
        }
        if (this._ownerReadableStream === undefined) {
          return;
        }
        if (this._readIntoRequests.length > 0) {
          throw new TypeError('Tried to release a reader lock when that reader has pending read() calls un-settled');
        }
        ReadableStreamReaderGenericRelease(this);
      }
    }, {
      key: 'closed',
      get: function get() {
        if (!IsReadableStreamBYOBReader(this)) {
          return Promise.reject(byobReaderBrandCheckException('closed'));
        }
        return this._closedPromise;
      }
    }]);
    return ReadableStreamBYOBReader;
  }();
  function IsReadableStreamBYOBReader(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_readIntoRequests')) {
      return false;
    }
    return true;
  }
  function IsReadableStreamDefaultReader(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_readRequests')) {
      return false;
    }
    return true;
  }
  function ReadableStreamReaderGenericInitialize(reader, stream) {
    reader._ownerReadableStream = stream;
    stream._reader = reader;
    if (stream._state === 'readable') {
      defaultReaderClosedPromiseInitialize(reader);
    } else if (stream._state === 'closed') {
      defaultReaderClosedPromiseInitializeAsResolved(reader);
    } else {
      assert(stream._state === 'errored', 'state must be errored');
      defaultReaderClosedPromiseInitializeAsRejected(reader, stream._storedError);
      reader._closedPromise.catch(function () {});
    }
  }
  function ReadableStreamReaderGenericCancel(reader, reason) {
    var stream = reader._ownerReadableStream;
    assert(stream !== undefined);
    return ReadableStreamCancel(stream, reason);
  }
  function ReadableStreamReaderGenericRelease(reader) {
    assert(reader._ownerReadableStream !== undefined);
    assert(reader._ownerReadableStream._reader === reader);
    if (reader._ownerReadableStream._state === 'readable') {
      defaultReaderClosedPromiseReject(reader, new TypeError('Reader was released and can no longer be used to monitor the stream\'s closedness'));
    } else {
      defaultReaderClosedPromiseResetToRejected(reader, new TypeError('Reader was released and can no longer be used to monitor the stream\'s closedness'));
    }
    reader._closedPromise.catch(function () {});
    reader._ownerReadableStream._reader = undefined;
    reader._ownerReadableStream = undefined;
  }
  function ReadableStreamBYOBReaderRead(reader, view) {
    var stream = reader._ownerReadableStream;
    assert(stream !== undefined);
    stream._disturbed = true;
    if (stream._state === 'errored') {
      return Promise.reject(stream._storedError);
    }
    return ReadableByteStreamControllerPullInto(stream._readableStreamController, view);
  }
  function ReadableStreamDefaultReaderRead(reader) {
    var stream = reader._ownerReadableStream;
    assert(stream !== undefined);
    stream._disturbed = true;
    if (stream._state === 'closed') {
      return Promise.resolve(CreateIterResultObject(undefined, true));
    }
    if (stream._state === 'errored') {
      return Promise.reject(stream._storedError);
    }
    assert(stream._state === 'readable');
    return stream._readableStreamController.__pullSteps();
  }
  var ReadableStreamDefaultController = function () {
    function ReadableStreamDefaultController(stream, underlyingSource, size, highWaterMark) {
      _classCallCheck(this, ReadableStreamDefaultController);
      if (IsReadableStream(stream) === false) {
        throw new TypeError('ReadableStreamDefaultController can only be constructed with a ReadableStream instance');
      }
      if (stream._readableStreamController !== undefined) {
        throw new TypeError('ReadableStreamDefaultController instances can only be created by the ReadableStream constructor');
      }
      this._controlledReadableStream = stream;
      this._underlyingSource = underlyingSource;
      this._queue = undefined;
      this._queueTotalSize = undefined;
      ResetQueue(this);
      this._started = false;
      this._closeRequested = false;
      this._pullAgain = false;
      this._pulling = false;
      var normalizedStrategy = ValidateAndNormalizeQueuingStrategy(size, highWaterMark);
      this._strategySize = normalizedStrategy.size;
      this._strategyHWM = normalizedStrategy.highWaterMark;
      var controller = this;
      var startResult = InvokeOrNoop(underlyingSource, 'start', [this]);
      Promise.resolve(startResult).then(function () {
        controller._started = true;
        assert(controller._pulling === false);
        assert(controller._pullAgain === false);
        ReadableStreamDefaultControllerCallPullIfNeeded(controller);
      }, function (r) {
        ReadableStreamDefaultControllerErrorIfNeeded(controller, r);
      }).catch(rethrowAssertionErrorRejection);
    }
    _createClass(ReadableStreamDefaultController, [{
      key: 'close',
      value: function close() {
        if (IsReadableStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('close');
        }
        if (this._closeRequested === true) {
          throw new TypeError('The stream has already been closed; do not close it again!');
        }
        var state = this._controlledReadableStream._state;
        if (state !== 'readable') {
          throw new TypeError('The stream (in ' + state + ' state) is not in the readable state and cannot be closed');
        }
        ReadableStreamDefaultControllerClose(this);
      }
    }, {
      key: 'enqueue',
      value: function enqueue(chunk) {
        if (IsReadableStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('enqueue');
        }
        if (this._closeRequested === true) {
          throw new TypeError('stream is closed or draining');
        }
        var state = this._controlledReadableStream._state;
        if (state !== 'readable') {
          throw new TypeError('The stream (in ' + state + ' state) is not in the readable state and cannot be enqueued to');
        }
        return ReadableStreamDefaultControllerEnqueue(this, chunk);
      }
    }, {
      key: 'error',
      value: function error(e) {
        if (IsReadableStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('error');
        }
        var stream = this._controlledReadableStream;
        if (stream._state !== 'readable') {
          throw new TypeError('The stream is ' + stream._state + ' and so cannot be errored');
        }
        ReadableStreamDefaultControllerError(this, e);
      }
    }, {
      key: '__cancelSteps',
      value: function __cancelSteps(reason) {
        ResetQueue(this);
        return PromiseInvokeOrNoop(this._underlyingSource, 'cancel', [reason]);
      }
    }, {
      key: '__pullSteps',
      value: function __pullSteps() {
        var stream = this._controlledReadableStream;
        if (this._queue.length > 0) {
          var chunk = DequeueValue(this);
          if (this._closeRequested === true && this._queue.length === 0) {
            ReadableStreamClose(stream);
          } else {
            ReadableStreamDefaultControllerCallPullIfNeeded(this);
          }
          return Promise.resolve(CreateIterResultObject(chunk, false));
        }
        var pendingPromise = ReadableStreamAddReadRequest(stream);
        ReadableStreamDefaultControllerCallPullIfNeeded(this);
        return pendingPromise;
      }
    }, {
      key: 'desiredSize',
      get: function get() {
        if (IsReadableStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('desiredSize');
        }
        return ReadableStreamDefaultControllerGetDesiredSize(this);
      }
    }]);
    return ReadableStreamDefaultController;
  }();
  function IsReadableStreamDefaultController(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_underlyingSource')) {
      return false;
    }
    return true;
  }
  function ReadableStreamDefaultControllerCallPullIfNeeded(controller) {
    var shouldPull = ReadableStreamDefaultControllerShouldCallPull(controller);
    if (shouldPull === false) {
      return undefined;
    }
    if (controller._pulling === true) {
      controller._pullAgain = true;
      return undefined;
    }
    assert(controller._pullAgain === false);
    controller._pulling = true;
    var pullPromise = PromiseInvokeOrNoop(controller._underlyingSource, 'pull', [controller]);
    pullPromise.then(function () {
      controller._pulling = false;
      if (controller._pullAgain === true) {
        controller._pullAgain = false;
        return ReadableStreamDefaultControllerCallPullIfNeeded(controller);
      }
      return undefined;
    }, function (e) {
      ReadableStreamDefaultControllerErrorIfNeeded(controller, e);
    }).catch(rethrowAssertionErrorRejection);
    return undefined;
  }
  function ReadableStreamDefaultControllerShouldCallPull(controller) {
    var stream = controller._controlledReadableStream;
    if (stream._state === 'closed' || stream._state === 'errored') {
      return false;
    }
    if (controller._closeRequested === true) {
      return false;
    }
    if (controller._started === false) {
      return false;
    }
    if (IsReadableStreamLocked(stream) === true && ReadableStreamGetNumReadRequests(stream) > 0) {
      return true;
    }
    var desiredSize = ReadableStreamDefaultControllerGetDesiredSize(controller);
    if (desiredSize > 0) {
      return true;
    }
    return false;
  }
  function ReadableStreamDefaultControllerClose(controller) {
    var stream = controller._controlledReadableStream;
    assert(controller._closeRequested === false);
    assert(stream._state === 'readable');
    controller._closeRequested = true;
    if (controller._queue.length === 0) {
      ReadableStreamClose(stream);
    }
  }
  function ReadableStreamDefaultControllerEnqueue(controller, chunk) {
    var stream = controller._controlledReadableStream;
    assert(controller._closeRequested === false);
    assert(stream._state === 'readable');
    if (IsReadableStreamLocked(stream) === true && ReadableStreamGetNumReadRequests(stream) > 0) {
      ReadableStreamFulfillReadRequest(stream, chunk, false);
    } else {
      var chunkSize = 1;
      if (controller._strategySize !== undefined) {
        var strategySize = controller._strategySize;
        try {
          chunkSize = strategySize(chunk);
        } catch (chunkSizeE) {
          ReadableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE);
          throw chunkSizeE;
        }
      }
      try {
        EnqueueValueWithSize(controller, chunk, chunkSize);
      } catch (enqueueE) {
        ReadableStreamDefaultControllerErrorIfNeeded(controller, enqueueE);
        throw enqueueE;
      }
    }
    ReadableStreamDefaultControllerCallPullIfNeeded(controller);
    return undefined;
  }
  function ReadableStreamDefaultControllerError(controller, e) {
    var stream = controller._controlledReadableStream;
    assert(stream._state === 'readable');
    ResetQueue(controller);
    ReadableStreamError(stream, e);
  }
  function ReadableStreamDefaultControllerErrorIfNeeded(controller, e) {
    if (controller._controlledReadableStream._state === 'readable') {
      ReadableStreamDefaultControllerError(controller, e);
    }
  }
  function ReadableStreamDefaultControllerGetDesiredSize(controller) {
    var stream = controller._controlledReadableStream;
    var state = stream._state;
    if (state === 'errored') {
      return null;
    }
    if (state === 'closed') {
      return 0;
    }
    return controller._strategyHWM - controller._queueTotalSize;
  }
  var ReadableStreamBYOBRequest = function () {
    function ReadableStreamBYOBRequest(controller, view) {
      _classCallCheck(this, ReadableStreamBYOBRequest);
      this._associatedReadableByteStreamController = controller;
      this._view = view;
    }
    _createClass(ReadableStreamBYOBRequest, [{
      key: 'respond',
      value: function respond(bytesWritten) {
        if (IsReadableStreamBYOBRequest(this) === false) {
          throw byobRequestBrandCheckException('respond');
        }
        if (this._associatedReadableByteStreamController === undefined) {
          throw new TypeError('This BYOB request has been invalidated');
        }
        ReadableByteStreamControllerRespond(this._associatedReadableByteStreamController, bytesWritten);
      }
    }, {
      key: 'respondWithNewView',
      value: function respondWithNewView(view) {
        if (IsReadableStreamBYOBRequest(this) === false) {
          throw byobRequestBrandCheckException('respond');
        }
        if (this._associatedReadableByteStreamController === undefined) {
          throw new TypeError('This BYOB request has been invalidated');
        }
        if (!ArrayBuffer.isView(view)) {
          throw new TypeError('You can only respond with array buffer views');
        }
        ReadableByteStreamControllerRespondWithNewView(this._associatedReadableByteStreamController, view);
      }
    }, {
      key: 'view',
      get: function get() {
        return this._view;
      }
    }]);
    return ReadableStreamBYOBRequest;
  }();
  var ReadableByteStreamController = function () {
    function ReadableByteStreamController(stream, underlyingByteSource, highWaterMark) {
      _classCallCheck(this, ReadableByteStreamController);
      if (IsReadableStream(stream) === false) {
        throw new TypeError('ReadableByteStreamController can only be constructed with a ReadableStream instance given ' + 'a byte source');
      }
      if (stream._readableStreamController !== undefined) {
        throw new TypeError('ReadableByteStreamController instances can only be created by the ReadableStream constructor given a byte ' + 'source');
      }
      this._controlledReadableStream = stream;
      this._underlyingByteSource = underlyingByteSource;
      this._pullAgain = false;
      this._pulling = false;
      ReadableByteStreamControllerClearPendingPullIntos(this);
      this._queue = this._queueTotalSize = undefined;
      ResetQueue(this);
      this._closeRequested = false;
      this._started = false;
      this._strategyHWM = ValidateAndNormalizeHighWaterMark(highWaterMark);
      var autoAllocateChunkSize = underlyingByteSource.autoAllocateChunkSize;
      if (autoAllocateChunkSize !== undefined) {
        if (Number.isInteger(autoAllocateChunkSize) === false || autoAllocateChunkSize <= 0) {
          throw new RangeError('autoAllocateChunkSize must be a positive integer');
        }
      }
      this._autoAllocateChunkSize = autoAllocateChunkSize;
      this._pendingPullIntos = [];
      var controller = this;
      var startResult = InvokeOrNoop(underlyingByteSource, 'start', [this]);
      Promise.resolve(startResult).then(function () {
        controller._started = true;
        assert(controller._pulling === false);
        assert(controller._pullAgain === false);
        ReadableByteStreamControllerCallPullIfNeeded(controller);
      }, function (r) {
        if (stream._state === 'readable') {
          ReadableByteStreamControllerError(controller, r);
        }
      }).catch(rethrowAssertionErrorRejection);
    }
    _createClass(ReadableByteStreamController, [{
      key: 'close',
      value: function close() {
        if (IsReadableByteStreamController(this) === false) {
          throw byteStreamControllerBrandCheckException('close');
        }
        if (this._closeRequested === true) {
          throw new TypeError('The stream has already been closed; do not close it again!');
        }
        var state = this._controlledReadableStream._state;
        if (state !== 'readable') {
          throw new TypeError('The stream (in ' + state + ' state) is not in the readable state and cannot be closed');
        }
        ReadableByteStreamControllerClose(this);
      }
    }, {
      key: 'enqueue',
      value: function enqueue(chunk) {
        if (IsReadableByteStreamController(this) === false) {
          throw byteStreamControllerBrandCheckException('enqueue');
        }
        if (this._closeRequested === true) {
          throw new TypeError('stream is closed or draining');
        }
        var state = this._controlledReadableStream._state;
        if (state !== 'readable') {
          throw new TypeError('The stream (in ' + state + ' state) is not in the readable state and cannot be enqueued to');
        }
        if (!ArrayBuffer.isView(chunk)) {
          throw new TypeError('You can only enqueue array buffer views when using a ReadableByteStreamController');
        }
        ReadableByteStreamControllerEnqueue(this, chunk);
      }
    }, {
      key: 'error',
      value: function error(e) {
        if (IsReadableByteStreamController(this) === false) {
          throw byteStreamControllerBrandCheckException('error');
        }
        var stream = this._controlledReadableStream;
        if (stream._state !== 'readable') {
          throw new TypeError('The stream is ' + stream._state + ' and so cannot be errored');
        }
        ReadableByteStreamControllerError(this, e);
      }
    }, {
      key: '__cancelSteps',
      value: function __cancelSteps(reason) {
        if (this._pendingPullIntos.length > 0) {
          var firstDescriptor = this._pendingPullIntos[0];
          firstDescriptor.bytesFilled = 0;
        }
        ResetQueue(this);
        return PromiseInvokeOrNoop(this._underlyingByteSource, 'cancel', [reason]);
      }
    }, {
      key: '__pullSteps',
      value: function __pullSteps() {
        var stream = this._controlledReadableStream;
        assert(ReadableStreamHasDefaultReader(stream) === true);
        if (this._queueTotalSize > 0) {
          assert(ReadableStreamGetNumReadRequests(stream) === 0);
          var entry = this._queue.shift();
          this._queueTotalSize -= entry.byteLength;
          ReadableByteStreamControllerHandleQueueDrain(this);
          var view = void 0;
          try {
            view = new Uint8Array(entry.buffer, entry.byteOffset, entry.byteLength);
          } catch (viewE) {
            return Promise.reject(viewE);
          }
          return Promise.resolve(CreateIterResultObject(view, false));
        }
        var autoAllocateChunkSize = this._autoAllocateChunkSize;
        if (autoAllocateChunkSize !== undefined) {
          var buffer = void 0;
          try {
            buffer = new ArrayBuffer(autoAllocateChunkSize);
          } catch (bufferE) {
            return Promise.reject(bufferE);
          }
          var pullIntoDescriptor = {
            buffer: buffer,
            byteOffset: 0,
            byteLength: autoAllocateChunkSize,
            bytesFilled: 0,
            elementSize: 1,
            ctor: Uint8Array,
            readerType: 'default'
          };
          this._pendingPullIntos.push(pullIntoDescriptor);
        }
        var promise = ReadableStreamAddReadRequest(stream);
        ReadableByteStreamControllerCallPullIfNeeded(this);
        return promise;
      }
    }, {
      key: 'byobRequest',
      get: function get() {
        if (IsReadableByteStreamController(this) === false) {
          throw byteStreamControllerBrandCheckException('byobRequest');
        }
        if (this._byobRequest === undefined && this._pendingPullIntos.length > 0) {
          var firstDescriptor = this._pendingPullIntos[0];
          var view = new Uint8Array(firstDescriptor.buffer, firstDescriptor.byteOffset + firstDescriptor.bytesFilled, firstDescriptor.byteLength - firstDescriptor.bytesFilled);
          this._byobRequest = new ReadableStreamBYOBRequest(this, view);
        }
        return this._byobRequest;
      }
    }, {
      key: 'desiredSize',
      get: function get() {
        if (IsReadableByteStreamController(this) === false) {
          throw byteStreamControllerBrandCheckException('desiredSize');
        }
        return ReadableByteStreamControllerGetDesiredSize(this);
      }
    }]);
    return ReadableByteStreamController;
  }();
  function IsReadableByteStreamController(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_underlyingByteSource')) {
      return false;
    }
    return true;
  }
  function IsReadableStreamBYOBRequest(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_associatedReadableByteStreamController')) {
      return false;
    }
    return true;
  }
  function ReadableByteStreamControllerCallPullIfNeeded(controller) {
    var shouldPull = ReadableByteStreamControllerShouldCallPull(controller);
    if (shouldPull === false) {
      return undefined;
    }
    if (controller._pulling === true) {
      controller._pullAgain = true;
      return undefined;
    }
    assert(controller._pullAgain === false);
    controller._pulling = true;
    var pullPromise = PromiseInvokeOrNoop(controller._underlyingByteSource, 'pull', [controller]);
    pullPromise.then(function () {
      controller._pulling = false;
      if (controller._pullAgain === true) {
        controller._pullAgain = false;
        ReadableByteStreamControllerCallPullIfNeeded(controller);
      }
    }, function (e) {
      if (controller._controlledReadableStream._state === 'readable') {
        ReadableByteStreamControllerError(controller, e);
      }
    }).catch(rethrowAssertionErrorRejection);
    return undefined;
  }
  function ReadableByteStreamControllerClearPendingPullIntos(controller) {
    ReadableByteStreamControllerInvalidateBYOBRequest(controller);
    controller._pendingPullIntos = [];
  }
  function ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor) {
    assert(stream._state !== 'errored', 'state must not be errored');
    var done = false;
    if (stream._state === 'closed') {
      assert(pullIntoDescriptor.bytesFilled === 0);
      done = true;
    }
    var filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
    if (pullIntoDescriptor.readerType === 'default') {
      ReadableStreamFulfillReadRequest(stream, filledView, done);
    } else {
      assert(pullIntoDescriptor.readerType === 'byob');
      ReadableStreamFulfillReadIntoRequest(stream, filledView, done);
    }
  }
  function ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor) {
    var bytesFilled = pullIntoDescriptor.bytesFilled;
    var elementSize = pullIntoDescriptor.elementSize;
    assert(bytesFilled <= pullIntoDescriptor.byteLength);
    assert(bytesFilled % elementSize === 0);
    return new pullIntoDescriptor.ctor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, bytesFilled / elementSize);
  }
  function ReadableByteStreamControllerEnqueueChunkToQueue(controller, buffer, byteOffset, byteLength) {
    controller._queue.push({
      buffer: buffer,
      byteOffset: byteOffset,
      byteLength: byteLength
    });
    controller._queueTotalSize += byteLength;
  }
  function ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) {
    var elementSize = pullIntoDescriptor.elementSize;
    var currentAlignedBytes = pullIntoDescriptor.bytesFilled - pullIntoDescriptor.bytesFilled % elementSize;
    var maxBytesToCopy = Math.min(controller._queueTotalSize, pullIntoDescriptor.byteLength - pullIntoDescriptor.bytesFilled);
    var maxBytesFilled = pullIntoDescriptor.bytesFilled + maxBytesToCopy;
    var maxAlignedBytes = maxBytesFilled - maxBytesFilled % elementSize;
    var totalBytesToCopyRemaining = maxBytesToCopy;
    var ready = false;
    if (maxAlignedBytes > currentAlignedBytes) {
      totalBytesToCopyRemaining = maxAlignedBytes - pullIntoDescriptor.bytesFilled;
      ready = true;
    }
    var queue = controller._queue;
    while (totalBytesToCopyRemaining > 0) {
      var headOfQueue = queue[0];
      var bytesToCopy = Math.min(totalBytesToCopyRemaining, headOfQueue.byteLength);
      var destStart = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
      ArrayBufferCopy(pullIntoDescriptor.buffer, destStart, headOfQueue.buffer, headOfQueue.byteOffset, bytesToCopy);
      if (headOfQueue.byteLength === bytesToCopy) {
        queue.shift();
      } else {
        headOfQueue.byteOffset += bytesToCopy;
        headOfQueue.byteLength -= bytesToCopy;
      }
      controller._queueTotalSize -= bytesToCopy;
      ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesToCopy, pullIntoDescriptor);
      totalBytesToCopyRemaining -= bytesToCopy;
    }
    if (ready === false) {
      assert(controller._queueTotalSize === 0, 'queue must be empty');
      assert(pullIntoDescriptor.bytesFilled > 0);
      assert(pullIntoDescriptor.bytesFilled < pullIntoDescriptor.elementSize);
    }
    return ready;
  }
  function ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, size, pullIntoDescriptor) {
    assert(controller._pendingPullIntos.length === 0 || controller._pendingPullIntos[0] === pullIntoDescriptor);
    ReadableByteStreamControllerInvalidateBYOBRequest(controller);
    pullIntoDescriptor.bytesFilled += size;
  }
  function ReadableByteStreamControllerHandleQueueDrain(controller) {
    assert(controller._controlledReadableStream._state === 'readable');
    if (controller._queueTotalSize === 0 && controller._closeRequested === true) {
      ReadableStreamClose(controller._controlledReadableStream);
    } else {
      ReadableByteStreamControllerCallPullIfNeeded(controller);
    }
  }
  function ReadableByteStreamControllerInvalidateBYOBRequest(controller) {
    if (controller._byobRequest === undefined) {
      return;
    }
    controller._byobRequest._associatedReadableByteStreamController = undefined;
    controller._byobRequest._view = undefined;
    controller._byobRequest = undefined;
  }
  function ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller) {
    assert(controller._closeRequested === false);
    while (controller._pendingPullIntos.length > 0) {
      if (controller._queueTotalSize === 0) {
        return;
      }
      var pullIntoDescriptor = controller._pendingPullIntos[0];
      if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) === true) {
        ReadableByteStreamControllerShiftPendingPullInto(controller);
        ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableStream, pullIntoDescriptor);
      }
    }
  }
  function ReadableByteStreamControllerPullInto(controller, view) {
    var stream = controller._controlledReadableStream;
    var elementSize = 1;
    if (view.constructor !== DataView) {
      elementSize = view.constructor.BYTES_PER_ELEMENT;
    }
    var ctor = view.constructor;
    var pullIntoDescriptor = {
      buffer: view.buffer,
      byteOffset: view.byteOffset,
      byteLength: view.byteLength,
      bytesFilled: 0,
      elementSize: elementSize,
      ctor: ctor,
      readerType: 'byob'
    };
    if (controller._pendingPullIntos.length > 0) {
      pullIntoDescriptor.buffer = TransferArrayBuffer(pullIntoDescriptor.buffer);
      controller._pendingPullIntos.push(pullIntoDescriptor);
      return ReadableStreamAddReadIntoRequest(stream);
    }
    if (stream._state === 'closed') {
      var emptyView = new view.constructor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, 0);
      return Promise.resolve(CreateIterResultObject(emptyView, true));
    }
    if (controller._queueTotalSize > 0) {
      if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) === true) {
        var filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
        ReadableByteStreamControllerHandleQueueDrain(controller);
        return Promise.resolve(CreateIterResultObject(filledView, false));
      }
      if (controller._closeRequested === true) {
        var e = new TypeError('Insufficient bytes to fill elements in the given buffer');
        ReadableByteStreamControllerError(controller, e);
        return Promise.reject(e);
      }
    }
    pullIntoDescriptor.buffer = TransferArrayBuffer(pullIntoDescriptor.buffer);
    controller._pendingPullIntos.push(pullIntoDescriptor);
    var promise = ReadableStreamAddReadIntoRequest(stream);
    ReadableByteStreamControllerCallPullIfNeeded(controller);
    return promise;
  }
  function ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor) {
    firstDescriptor.buffer = TransferArrayBuffer(firstDescriptor.buffer);
    assert(firstDescriptor.bytesFilled === 0, 'bytesFilled must be 0');
    var stream = controller._controlledReadableStream;
    if (ReadableStreamHasBYOBReader(stream) === true) {
      while (ReadableStreamGetNumReadIntoRequests(stream) > 0) {
        var pullIntoDescriptor = ReadableByteStreamControllerShiftPendingPullInto(controller);
        ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor);
      }
    }
  }
  function ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, pullIntoDescriptor) {
    if (pullIntoDescriptor.bytesFilled + bytesWritten > pullIntoDescriptor.byteLength) {
      throw new RangeError('bytesWritten out of range');
    }
    ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesWritten, pullIntoDescriptor);
    if (pullIntoDescriptor.bytesFilled < pullIntoDescriptor.elementSize) {
      return;
    }
    ReadableByteStreamControllerShiftPendingPullInto(controller);
    var remainderSize = pullIntoDescriptor.bytesFilled % pullIntoDescriptor.elementSize;
    if (remainderSize > 0) {
      var end = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
      var remainder = pullIntoDescriptor.buffer.slice(end - remainderSize, end);
      ReadableByteStreamControllerEnqueueChunkToQueue(controller, remainder, 0, remainder.byteLength);
    }
    pullIntoDescriptor.buffer = TransferArrayBuffer(pullIntoDescriptor.buffer);
    pullIntoDescriptor.bytesFilled -= remainderSize;
    ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableStream, pullIntoDescriptor);
    ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
  }
  function ReadableByteStreamControllerRespondInternal(controller, bytesWritten) {
    var firstDescriptor = controller._pendingPullIntos[0];
    var stream = controller._controlledReadableStream;
    if (stream._state === 'closed') {
      if (bytesWritten !== 0) {
        throw new TypeError('bytesWritten must be 0 when calling respond() on a closed stream');
      }
      ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor);
    } else {
      assert(stream._state === 'readable');
      ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, firstDescriptor);
    }
  }
  function ReadableByteStreamControllerShiftPendingPullInto(controller) {
    var descriptor = controller._pendingPullIntos.shift();
    ReadableByteStreamControllerInvalidateBYOBRequest(controller);
    return descriptor;
  }
  function ReadableByteStreamControllerShouldCallPull(controller) {
    var stream = controller._controlledReadableStream;
    if (stream._state !== 'readable') {
      return false;
    }
    if (controller._closeRequested === true) {
      return false;
    }
    if (controller._started === false) {
      return false;
    }
    if (ReadableStreamHasDefaultReader(stream) === true && ReadableStreamGetNumReadRequests(stream) > 0) {
      return true;
    }
    if (ReadableStreamHasBYOBReader(stream) === true && ReadableStreamGetNumReadIntoRequests(stream) > 0) {
      return true;
    }
    if (ReadableByteStreamControllerGetDesiredSize(controller) > 0) {
      return true;
    }
    return false;
  }
  function ReadableByteStreamControllerClose(controller) {
    var stream = controller._controlledReadableStream;
    assert(controller._closeRequested === false);
    assert(stream._state === 'readable');
    if (controller._queueTotalSize > 0) {
      controller._closeRequested = true;
      return;
    }
    if (controller._pendingPullIntos.length > 0) {
      var firstPendingPullInto = controller._pendingPullIntos[0];
      if (firstPendingPullInto.bytesFilled > 0) {
        var e = new TypeError('Insufficient bytes to fill elements in the given buffer');
        ReadableByteStreamControllerError(controller, e);
        throw e;
      }
    }
    ReadableStreamClose(stream);
  }
  function ReadableByteStreamControllerEnqueue(controller, chunk) {
    var stream = controller._controlledReadableStream;
    assert(controller._closeRequested === false);
    assert(stream._state === 'readable');
    var buffer = chunk.buffer;
    var byteOffset = chunk.byteOffset;
    var byteLength = chunk.byteLength;
    var transferredBuffer = TransferArrayBuffer(buffer);
    if (ReadableStreamHasDefaultReader(stream) === true) {
      if (ReadableStreamGetNumReadRequests(stream) === 0) {
        ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
      } else {
        assert(controller._queue.length === 0);
        var transferredView = new Uint8Array(transferredBuffer, byteOffset, byteLength);
        ReadableStreamFulfillReadRequest(stream, transferredView, false);
      }
    } else if (ReadableStreamHasBYOBReader(stream) === true) {
      ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
      ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
    } else {
      assert(IsReadableStreamLocked(stream) === false, 'stream must not be locked');
      ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
    }
  }
  function ReadableByteStreamControllerError(controller, e) {
    var stream = controller._controlledReadableStream;
    assert(stream._state === 'readable');
    ReadableByteStreamControllerClearPendingPullIntos(controller);
    ResetQueue(controller);
    ReadableStreamError(stream, e);
  }
  function ReadableByteStreamControllerGetDesiredSize(controller) {
    var stream = controller._controlledReadableStream;
    var state = stream._state;
    if (state === 'errored') {
      return null;
    }
    if (state === 'closed') {
      return 0;
    }
    return controller._strategyHWM - controller._queueTotalSize;
  }
  function ReadableByteStreamControllerRespond(controller, bytesWritten) {
    bytesWritten = Number(bytesWritten);
    if (IsFiniteNonNegativeNumber(bytesWritten) === false) {
      throw new RangeError('bytesWritten must be a finite');
    }
    assert(controller._pendingPullIntos.length > 0);
    ReadableByteStreamControllerRespondInternal(controller, bytesWritten);
  }
  function ReadableByteStreamControllerRespondWithNewView(controller, view) {
    assert(controller._pendingPullIntos.length > 0);
    var firstDescriptor = controller._pendingPullIntos[0];
    if (firstDescriptor.byteOffset + firstDescriptor.bytesFilled !== view.byteOffset) {
      throw new RangeError('The region specified by view does not match byobRequest');
    }
    if (firstDescriptor.byteLength !== view.byteLength) {
      throw new RangeError('The buffer of view has different capacity than byobRequest');
    }
    firstDescriptor.buffer = view.buffer;
    ReadableByteStreamControllerRespondInternal(controller, view.byteLength);
  }
  function streamBrandCheckException(name) {
    return new TypeError('ReadableStream.prototype.' + name + ' can only be used on a ReadableStream');
  }
  function readerLockException(name) {
    return new TypeError('Cannot ' + name + ' a stream using a released reader');
  }
  function defaultReaderBrandCheckException(name) {
    return new TypeError('ReadableStreamDefaultReader.prototype.' + name + ' can only be used on a ReadableStreamDefaultReader');
  }
  function defaultReaderClosedPromiseInitialize(reader) {
    reader._closedPromise = new Promise(function (resolve, reject) {
      reader._closedPromise_resolve = resolve;
      reader._closedPromise_reject = reject;
    });
  }
  function defaultReaderClosedPromiseInitializeAsRejected(reader, reason) {
    reader._closedPromise = Promise.reject(reason);
    reader._closedPromise_resolve = undefined;
    reader._closedPromise_reject = undefined;
  }
  function defaultReaderClosedPromiseInitializeAsResolved(reader) {
    reader._closedPromise = Promise.resolve(undefined);
    reader._closedPromise_resolve = undefined;
    reader._closedPromise_reject = undefined;
  }
  function defaultReaderClosedPromiseReject(reader, reason) {
    assert(reader._closedPromise_resolve !== undefined);
    assert(reader._closedPromise_reject !== undefined);
    reader._closedPromise_reject(reason);
    reader._closedPromise_resolve = undefined;
    reader._closedPromise_reject = undefined;
  }
  function defaultReaderClosedPromiseResetToRejected(reader, reason) {
    assert(reader._closedPromise_resolve === undefined);
    assert(reader._closedPromise_reject === undefined);
    reader._closedPromise = Promise.reject(reason);
  }
  function defaultReaderClosedPromiseResolve(reader) {
    assert(reader._closedPromise_resolve !== undefined);
    assert(reader._closedPromise_reject !== undefined);
    reader._closedPromise_resolve(undefined);
    reader._closedPromise_resolve = undefined;
    reader._closedPromise_reject = undefined;
  }
  function byobReaderBrandCheckException(name) {
    return new TypeError('ReadableStreamBYOBReader.prototype.' + name + ' can only be used on a ReadableStreamBYOBReader');
  }
  function defaultControllerBrandCheckException(name) {
    return new TypeError('ReadableStreamDefaultController.prototype.' + name + ' can only be used on a ReadableStreamDefaultController');
  }
  function byobRequestBrandCheckException(name) {
    return new TypeError('ReadableStreamBYOBRequest.prototype.' + name + ' can only be used on a ReadableStreamBYOBRequest');
  }
  function byteStreamControllerBrandCheckException(name) {
    return new TypeError('ReadableByteStreamController.prototype.' + name + ' can only be used on a ReadableByteStreamController');
  }
  function ifIsObjectAndHasAPromiseIsHandledInternalSlotSetPromiseIsHandledToTrue(promise) {
    try {
      Promise.prototype.then.call(promise, undefined, function () {});
    } catch (e) {}
  }
}, function (module, exports, __w_pdfjs_require__) {
  "use strict";

  var transformStream = __w_pdfjs_require__(6);
  var readableStream = __w_pdfjs_require__(4);
  var writableStream = __w_pdfjs_require__(2);
  exports.TransformStream = transformStream.TransformStream;
  exports.ReadableStream = readableStream.ReadableStream;
  exports.IsReadableStreamDisturbed = readableStream.IsReadableStreamDisturbed;
  exports.ReadableStreamDefaultControllerClose = readableStream.ReadableStreamDefaultControllerClose;
  exports.ReadableStreamDefaultControllerEnqueue = readableStream.ReadableStreamDefaultControllerEnqueue;
  exports.ReadableStreamDefaultControllerError = readableStream.ReadableStreamDefaultControllerError;
  exports.ReadableStreamDefaultControllerGetDesiredSize = readableStream.ReadableStreamDefaultControllerGetDesiredSize;
  exports.AcquireWritableStreamDefaultWriter = writableStream.AcquireWritableStreamDefaultWriter;
  exports.IsWritableStream = writableStream.IsWritableStream;
  exports.IsWritableStreamLocked = writableStream.IsWritableStreamLocked;
  exports.WritableStream = writableStream.WritableStream;
  exports.WritableStreamAbort = writableStream.WritableStreamAbort;
  exports.WritableStreamDefaultControllerError = writableStream.WritableStreamDefaultControllerError;
  exports.WritableStreamDefaultWriterCloseWithErrorPropagation = writableStream.WritableStreamDefaultWriterCloseWithErrorPropagation;
  exports.WritableStreamDefaultWriterRelease = writableStream.WritableStreamDefaultWriterRelease;
  exports.WritableStreamDefaultWriterWrite = writableStream.WritableStreamDefaultWriterWrite;
}, function (module, exports, __w_pdfjs_require__) {
  "use strict";

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var _require = __w_pdfjs_require__(1),
      assert = _require.assert;
  var _require2 = __w_pdfjs_require__(0),
      InvokeOrNoop = _require2.InvokeOrNoop,
      PromiseInvokeOrPerformFallback = _require2.PromiseInvokeOrPerformFallback,
      PromiseInvokeOrNoop = _require2.PromiseInvokeOrNoop,
      typeIsObject = _require2.typeIsObject;
  var _require3 = __w_pdfjs_require__(4),
      ReadableStream = _require3.ReadableStream,
      ReadableStreamDefaultControllerClose = _require3.ReadableStreamDefaultControllerClose,
      ReadableStreamDefaultControllerEnqueue = _require3.ReadableStreamDefaultControllerEnqueue,
      ReadableStreamDefaultControllerError = _require3.ReadableStreamDefaultControllerError,
      ReadableStreamDefaultControllerGetDesiredSize = _require3.ReadableStreamDefaultControllerGetDesiredSize;
  var _require4 = __w_pdfjs_require__(2),
      WritableStream = _require4.WritableStream,
      WritableStreamDefaultControllerError = _require4.WritableStreamDefaultControllerError;
  function TransformStreamCloseReadable(transformStream) {
    if (transformStream._errored === true) {
      throw new TypeError('TransformStream is already errored');
    }
    if (transformStream._readableClosed === true) {
      throw new TypeError('Readable side is already closed');
    }
    TransformStreamCloseReadableInternal(transformStream);
  }
  function TransformStreamEnqueueToReadable(transformStream, chunk) {
    if (transformStream._errored === true) {
      throw new TypeError('TransformStream is already errored');
    }
    if (transformStream._readableClosed === true) {
      throw new TypeError('Readable side is already closed');
    }
    var controller = transformStream._readableController;
    try {
      ReadableStreamDefaultControllerEnqueue(controller, chunk);
    } catch (e) {
      transformStream._readableClosed = true;
      TransformStreamErrorIfNeeded(transformStream, e);
      throw transformStream._storedError;
    }
    var desiredSize = ReadableStreamDefaultControllerGetDesiredSize(controller);
    var maybeBackpressure = desiredSize <= 0;
    if (maybeBackpressure === true && transformStream._backpressure === false) {
      TransformStreamSetBackpressure(transformStream, true);
    }
  }
  function TransformStreamError(transformStream, e) {
    if (transformStream._errored === true) {
      throw new TypeError('TransformStream is already errored');
    }
    TransformStreamErrorInternal(transformStream, e);
  }
  function TransformStreamCloseReadableInternal(transformStream) {
    assert(transformStream._errored === false);
    assert(transformStream._readableClosed === false);
    try {
      ReadableStreamDefaultControllerClose(transformStream._readableController);
    } catch (e) {
      assert(false);
    }
    transformStream._readableClosed = true;
  }
  function TransformStreamErrorIfNeeded(transformStream, e) {
    if (transformStream._errored === false) {
      TransformStreamErrorInternal(transformStream, e);
    }
  }
  function TransformStreamErrorInternal(transformStream, e) {
    assert(transformStream._errored === false);
    transformStream._errored = true;
    transformStream._storedError = e;
    if (transformStream._writableDone === false) {
      WritableStreamDefaultControllerError(transformStream._writableController, e);
    }
    if (transformStream._readableClosed === false) {
      ReadableStreamDefaultControllerError(transformStream._readableController, e);
    }
  }
  function TransformStreamReadableReadyPromise(transformStream) {
    assert(transformStream._backpressureChangePromise !== undefined, '_backpressureChangePromise should have been initialized');
    if (transformStream._backpressure === false) {
      return Promise.resolve();
    }
    assert(transformStream._backpressure === true, '_backpressure should have been initialized');
    return transformStream._backpressureChangePromise;
  }
  function TransformStreamSetBackpressure(transformStream, backpressure) {
    assert(transformStream._backpressure !== backpressure, 'TransformStreamSetBackpressure() should be called only when backpressure is changed');
    if (transformStream._backpressureChangePromise !== undefined) {
      transformStream._backpressureChangePromise_resolve(backpressure);
    }
    transformStream._backpressureChangePromise = new Promise(function (resolve) {
      transformStream._backpressureChangePromise_resolve = resolve;
    });
    transformStream._backpressureChangePromise.then(function (resolution) {
      assert(resolution !== backpressure, '_backpressureChangePromise should be fulfilled only when backpressure is changed');
    });
    transformStream._backpressure = backpressure;
  }
  function TransformStreamDefaultTransform(chunk, transformStreamController) {
    var transformStream = transformStreamController._controlledTransformStream;
    TransformStreamEnqueueToReadable(transformStream, chunk);
    return Promise.resolve();
  }
  function TransformStreamTransform(transformStream, chunk) {
    assert(transformStream._errored === false);
    assert(transformStream._transforming === false);
    assert(transformStream._backpressure === false);
    transformStream._transforming = true;
    var transformer = transformStream._transformer;
    var controller = transformStream._transformStreamController;
    var transformPromise = PromiseInvokeOrPerformFallback(transformer, 'transform', [chunk, controller], TransformStreamDefaultTransform, [chunk, controller]);
    return transformPromise.then(function () {
      transformStream._transforming = false;
      return TransformStreamReadableReadyPromise(transformStream);
    }, function (e) {
      TransformStreamErrorIfNeeded(transformStream, e);
      return Promise.reject(e);
    });
  }
  function IsTransformStreamDefaultController(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_controlledTransformStream')) {
      return false;
    }
    return true;
  }
  function IsTransformStream(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_transformStreamController')) {
      return false;
    }
    return true;
  }
  var TransformStreamSink = function () {
    function TransformStreamSink(transformStream, startPromise) {
      _classCallCheck(this, TransformStreamSink);
      this._transformStream = transformStream;
      this._startPromise = startPromise;
    }
    _createClass(TransformStreamSink, [{
      key: 'start',
      value: function start(c) {
        var transformStream = this._transformStream;
        transformStream._writableController = c;
        return this._startPromise.then(function () {
          return TransformStreamReadableReadyPromise(transformStream);
        });
      }
    }, {
      key: 'write',
      value: function write(chunk) {
        var transformStream = this._transformStream;
        return TransformStreamTransform(transformStream, chunk);
      }
    }, {
      key: 'abort',
      value: function abort() {
        var transformStream = this._transformStream;
        transformStream._writableDone = true;
        TransformStreamErrorInternal(transformStream, new TypeError('Writable side aborted'));
      }
    }, {
      key: 'close',
      value: function close() {
        var transformStream = this._transformStream;
        assert(transformStream._transforming === false);
        transformStream._writableDone = true;
        var flushPromise = PromiseInvokeOrNoop(transformStream._transformer, 'flush', [transformStream._transformStreamController]);
        return flushPromise.then(function () {
          if (transformStream._errored === true) {
            return Promise.reject(transformStream._storedError);
          }
          if (transformStream._readableClosed === false) {
            TransformStreamCloseReadableInternal(transformStream);
          }
          return Promise.resolve();
        }).catch(function (r) {
          TransformStreamErrorIfNeeded(transformStream, r);
          return Promise.reject(transformStream._storedError);
        });
      }
    }]);
    return TransformStreamSink;
  }();
  var TransformStreamSource = function () {
    function TransformStreamSource(transformStream, startPromise) {
      _classCallCheck(this, TransformStreamSource);
      this._transformStream = transformStream;
      this._startPromise = startPromise;
    }
    _createClass(TransformStreamSource, [{
      key: 'start',
      value: function start(c) {
        var transformStream = this._transformStream;
        transformStream._readableController = c;
        return this._startPromise.then(function () {
          assert(transformStream._backpressureChangePromise !== undefined, '_backpressureChangePromise should have been initialized');
          if (transformStream._backpressure === true) {
            return Promise.resolve();
          }
          assert(transformStream._backpressure === false, '_backpressure should have been initialized');
          return transformStream._backpressureChangePromise;
        });
      }
    }, {
      key: 'pull',
      value: function pull() {
        var transformStream = this._transformStream;
        assert(transformStream._backpressure === true, 'pull() should be never called while _backpressure is false');
        assert(transformStream._backpressureChangePromise !== undefined, '_backpressureChangePromise should have been initialized');
        TransformStreamSetBackpressure(transformStream, false);
        return transformStream._backpressureChangePromise;
      }
    }, {
      key: 'cancel',
      value: function cancel() {
        var transformStream = this._transformStream;
        transformStream._readableClosed = true;
        TransformStreamErrorInternal(transformStream, new TypeError('Readable side canceled'));
      }
    }]);
    return TransformStreamSource;
  }();
  var TransformStreamDefaultController = function () {
    function TransformStreamDefaultController(transformStream) {
      _classCallCheck(this, TransformStreamDefaultController);
      if (IsTransformStream(transformStream) === false) {
        throw new TypeError('TransformStreamDefaultController can only be ' + 'constructed with a TransformStream instance');
      }
      if (transformStream._transformStreamController !== undefined) {
        throw new TypeError('TransformStreamDefaultController instances can ' + 'only be created by the TransformStream constructor');
      }
      this._controlledTransformStream = transformStream;
    }
    _createClass(TransformStreamDefaultController, [{
      key: 'enqueue',
      value: function enqueue(chunk) {
        if (IsTransformStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('enqueue');
        }
        TransformStreamEnqueueToReadable(this._controlledTransformStream, chunk);
      }
    }, {
      key: 'close',
      value: function close() {
        if (IsTransformStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('close');
        }
        TransformStreamCloseReadable(this._controlledTransformStream);
      }
    }, {
      key: 'error',
      value: function error(reason) {
        if (IsTransformStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('error');
        }
        TransformStreamError(this._controlledTransformStream, reason);
      }
    }, {
      key: 'desiredSize',
      get: function get() {
        if (IsTransformStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('desiredSize');
        }
        var transformStream = this._controlledTransformStream;
        var readableController = transformStream._readableController;
        return ReadableStreamDefaultControllerGetDesiredSize(readableController);
      }
    }]);
    return TransformStreamDefaultController;
  }();
  var TransformStream = function () {
    function TransformStream() {
      var transformer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, TransformStream);
      this._transformer = transformer;
      var readableStrategy = transformer.readableStrategy,
          writableStrategy = transformer.writableStrategy;
      this._transforming = false;
      this._errored = false;
      this._storedError = undefined;
      this._writableController = undefined;
      this._readableController = undefined;
      this._transformStreamController = undefined;
      this._writableDone = false;
      this._readableClosed = false;
      this._backpressure = undefined;
      this._backpressureChangePromise = undefined;
      this._backpressureChangePromise_resolve = undefined;
      this._transformStreamController = new TransformStreamDefaultController(this);
      var startPromise_resolve = void 0;
      var startPromise = new Promise(function (resolve) {
        startPromise_resolve = resolve;
      });
      var source = new TransformStreamSource(this, startPromise);
      this._readable = new ReadableStream(source, readableStrategy);
      var sink = new TransformStreamSink(this, startPromise);
      this._writable = new WritableStream(sink, writableStrategy);
      assert(this._writableController !== undefined);
      assert(this._readableController !== undefined);
      var desiredSize = ReadableStreamDefaultControllerGetDesiredSize(this._readableController);
      TransformStreamSetBackpressure(this, desiredSize <= 0);
      var transformStream = this;
      var startResult = InvokeOrNoop(transformer, 'start', [transformStream._transformStreamController]);
      startPromise_resolve(startResult);
      startPromise.catch(function (e) {
        if (transformStream._errored === false) {
          transformStream._errored = true;
          transformStream._storedError = e;
        }
      });
    }
    _createClass(TransformStream, [{
      key: 'readable',
      get: function get() {
        if (IsTransformStream(this) === false) {
          throw streamBrandCheckException('readable');
        }
        return this._readable;
      }
    }, {
      key: 'writable',
      get: function get() {
        if (IsTransformStream(this) === false) {
          throw streamBrandCheckException('writable');
        }
        return this._writable;
      }
    }]);
    return TransformStream;
  }();
  module.exports = { TransformStream: TransformStream };
  function defaultControllerBrandCheckException(name) {
    return new TypeError('TransformStreamDefaultController.prototype.' + name + ' can only be used on a TransformStreamDefaultController');
  }
  function streamBrandCheckException(name) {
    return new TypeError('TransformStream.prototype.' + name + ' can only be used on a TransformStream');
  }
}, function (module, exports, __w_pdfjs_require__) {
  module.exports = __w_pdfjs_require__(5);
}]));

/***/ }),
/* 127 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

{
  var isURLSupported = false;
  try {
    if (typeof URL === 'function' && _typeof(URL.prototype) === 'object' && 'origin' in URL.prototype) {
      var u = new URL('b', 'http://a');
      u.pathname = 'c%20d';
      isURLSupported = u.href === 'http://a/c%20d';
    }
  } catch (ex) {}
  if (isURLSupported) {
    exports.URL = URL;
  } else {
    var PolyfillURL = __w_pdfjs_require__(128).URL;
    var OriginalURL = __w_pdfjs_require__(3).URL;
    if (OriginalURL) {
      PolyfillURL.createObjectURL = function (blob) {
        return OriginalURL.createObjectURL.apply(OriginalURL, arguments);
      };
      PolyfillURL.revokeObjectURL = function (url) {
        OriginalURL.revokeObjectURL(url);
      };
    }
    exports.URL = PolyfillURL;
  }
}

/***/ }),
/* 128 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


(function URLConstructorClosure() {
  'use strict';

  var relative = Object.create(null);
  relative['ftp'] = 21;
  relative['file'] = 0;
  relative['gopher'] = 70;
  relative['http'] = 80;
  relative['https'] = 443;
  relative['ws'] = 80;
  relative['wss'] = 443;
  var relativePathDotMapping = Object.create(null);
  relativePathDotMapping['%2e'] = '.';
  relativePathDotMapping['.%2e'] = '..';
  relativePathDotMapping['%2e.'] = '..';
  relativePathDotMapping['%2e%2e'] = '..';
  function isRelativeScheme(scheme) {
    return relative[scheme] !== undefined;
  }
  function invalid() {
    clear.call(this);
    this._isInvalid = true;
  }
  function IDNAToASCII(h) {
    if (h === '') {
      invalid.call(this);
    }
    return h.toLowerCase();
  }
  function percentEscape(c) {
    var unicode = c.charCodeAt(0);
    if (unicode > 0x20 && unicode < 0x7F && [0x22, 0x23, 0x3C, 0x3E, 0x3F, 0x60].indexOf(unicode) === -1) {
      return c;
    }
    return encodeURIComponent(c);
  }
  function percentEscapeQuery(c) {
    var unicode = c.charCodeAt(0);
    if (unicode > 0x20 && unicode < 0x7F && [0x22, 0x23, 0x3C, 0x3E, 0x60].indexOf(unicode) === -1) {
      return c;
    }
    return encodeURIComponent(c);
  }
  var EOF,
      ALPHA = /[a-zA-Z]/,
      ALPHANUMERIC = /[a-zA-Z0-9\+\-\.]/;
  function parse(input, stateOverride, base) {
    function err(message) {
      errors.push(message);
    }
    var state = stateOverride || 'scheme start',
        cursor = 0,
        buffer = '',
        seenAt = false,
        seenBracket = false,
        errors = [];
    loop: while ((input[cursor - 1] !== EOF || cursor === 0) && !this._isInvalid) {
      var c = input[cursor];
      switch (state) {
        case 'scheme start':
          if (c && ALPHA.test(c)) {
            buffer += c.toLowerCase();
            state = 'scheme';
          } else if (!stateOverride) {
            buffer = '';
            state = 'no scheme';
            continue;
          } else {
            err('Invalid scheme.');
            break loop;
          }
          break;
        case 'scheme':
          if (c && ALPHANUMERIC.test(c)) {
            buffer += c.toLowerCase();
          } else if (c === ':') {
            this._scheme = buffer;
            buffer = '';
            if (stateOverride) {
              break loop;
            }
            if (isRelativeScheme(this._scheme)) {
              this._isRelative = true;
            }
            if (this._scheme === 'file') {
              state = 'relative';
            } else if (this._isRelative && base && base._scheme === this._scheme) {
              state = 'relative or authority';
            } else if (this._isRelative) {
              state = 'authority first slash';
            } else {
              state = 'scheme data';
            }
          } else if (!stateOverride) {
            buffer = '';
            cursor = 0;
            state = 'no scheme';
            continue;
          } else if (c === EOF) {
            break loop;
          } else {
            err('Code point not allowed in scheme: ' + c);
            break loop;
          }
          break;
        case 'scheme data':
          if (c === '?') {
            this._query = '?';
            state = 'query';
          } else if (c === '#') {
            this._fragment = '#';
            state = 'fragment';
          } else {
            if (c !== EOF && c !== '\t' && c !== '\n' && c !== '\r') {
              this._schemeData += percentEscape(c);
            }
          }
          break;
        case 'no scheme':
          if (!base || !isRelativeScheme(base._scheme)) {
            err('Missing scheme.');
            invalid.call(this);
          } else {
            state = 'relative';
            continue;
          }
          break;
        case 'relative or authority':
          if (c === '/' && input[cursor + 1] === '/') {
            state = 'authority ignore slashes';
          } else {
            err('Expected /, got: ' + c);
            state = 'relative';
            continue;
          }
          break;
        case 'relative':
          this._isRelative = true;
          if (this._scheme !== 'file') {
            this._scheme = base._scheme;
          }
          if (c === EOF) {
            this._host = base._host;
            this._port = base._port;
            this._path = base._path.slice();
            this._query = base._query;
            this._username = base._username;
            this._password = base._password;
            break loop;
          } else if (c === '/' || c === '\\') {
            if (c === '\\') {
              err('\\ is an invalid code point.');
            }
            state = 'relative slash';
          } else if (c === '?') {
            this._host = base._host;
            this._port = base._port;
            this._path = base._path.slice();
            this._query = '?';
            this._username = base._username;
            this._password = base._password;
            state = 'query';
          } else if (c === '#') {
            this._host = base._host;
            this._port = base._port;
            this._path = base._path.slice();
            this._query = base._query;
            this._fragment = '#';
            this._username = base._username;
            this._password = base._password;
            state = 'fragment';
          } else {
            var nextC = input[cursor + 1];
            var nextNextC = input[cursor + 2];
            if (this._scheme !== 'file' || !ALPHA.test(c) || nextC !== ':' && nextC !== '|' || nextNextC !== EOF && nextNextC !== '/' && nextNextC !== '\\' && nextNextC !== '?' && nextNextC !== '#') {
              this._host = base._host;
              this._port = base._port;
              this._username = base._username;
              this._password = base._password;
              this._path = base._path.slice();
              this._path.pop();
            }
            state = 'relative path';
            continue;
          }
          break;
        case 'relative slash':
          if (c === '/' || c === '\\') {
            if (c === '\\') {
              err('\\ is an invalid code point.');
            }
            if (this._scheme === 'file') {
              state = 'file host';
            } else {
              state = 'authority ignore slashes';
            }
          } else {
            if (this._scheme !== 'file') {
              this._host = base._host;
              this._port = base._port;
              this._username = base._username;
              this._password = base._password;
            }
            state = 'relative path';
            continue;
          }
          break;
        case 'authority first slash':
          if (c === '/') {
            state = 'authority second slash';
          } else {
            err('Expected \'/\', got: ' + c);
            state = 'authority ignore slashes';
            continue;
          }
          break;
        case 'authority second slash':
          state = 'authority ignore slashes';
          if (c !== '/') {
            err('Expected \'/\', got: ' + c);
            continue;
          }
          break;
        case 'authority ignore slashes':
          if (c !== '/' && c !== '\\') {
            state = 'authority';
            continue;
          } else {
            err('Expected authority, got: ' + c);
          }
          break;
        case 'authority':
          if (c === '@') {
            if (seenAt) {
              err('@ already seen.');
              buffer += '%40';
            }
            seenAt = true;
            for (var i = 0; i < buffer.length; i++) {
              var cp = buffer[i];
              if (cp === '\t' || cp === '\n' || cp === '\r') {
                err('Invalid whitespace in authority.');
                continue;
              }
              if (cp === ':' && this._password === null) {
                this._password = '';
                continue;
              }
              var tempC = percentEscape(cp);
              if (this._password !== null) {
                this._password += tempC;
              } else {
                this._username += tempC;
              }
            }
            buffer = '';
          } else if (c === EOF || c === '/' || c === '\\' || c === '?' || c === '#') {
            cursor -= buffer.length;
            buffer = '';
            state = 'host';
            continue;
          } else {
            buffer += c;
          }
          break;
        case 'file host':
          if (c === EOF || c === '/' || c === '\\' || c === '?' || c === '#') {
            if (buffer.length === 2 && ALPHA.test(buffer[0]) && (buffer[1] === ':' || buffer[1] === '|')) {
              state = 'relative path';
            } else if (buffer.length === 0) {
              state = 'relative path start';
            } else {
              this._host = IDNAToASCII.call(this, buffer);
              buffer = '';
              state = 'relative path start';
            }
            continue;
          } else if (c === '\t' || c === '\n' || c === '\r') {
            err('Invalid whitespace in file host.');
          } else {
            buffer += c;
          }
          break;
        case 'host':
        case 'hostname':
          if (c === ':' && !seenBracket) {
            this._host = IDNAToASCII.call(this, buffer);
            buffer = '';
            state = 'port';
            if (stateOverride === 'hostname') {
              break loop;
            }
          } else if (c === EOF || c === '/' || c === '\\' || c === '?' || c === '#') {
            this._host = IDNAToASCII.call(this, buffer);
            buffer = '';
            state = 'relative path start';
            if (stateOverride) {
              break loop;
            }
            continue;
          } else if (c !== '\t' && c !== '\n' && c !== '\r') {
            if (c === '[') {
              seenBracket = true;
            } else if (c === ']') {
              seenBracket = false;
            }
            buffer += c;
          } else {
            err('Invalid code point in host/hostname: ' + c);
          }
          break;
        case 'port':
          if (/[0-9]/.test(c)) {
            buffer += c;
          } else if (c === EOF || c === '/' || c === '\\' || c === '?' || c === '#' || stateOverride) {
            if (buffer !== '') {
              var temp = parseInt(buffer, 10);
              if (temp !== relative[this._scheme]) {
                this._port = temp + '';
              }
              buffer = '';
            }
            if (stateOverride) {
              break loop;
            }
            state = 'relative path start';
            continue;
          } else if (c === '\t' || c === '\n' || c === '\r') {
            err('Invalid code point in port: ' + c);
          } else {
            invalid.call(this);
          }
          break;
        case 'relative path start':
          if (c === '\\') {
            err('\'\\\' not allowed in path.');
          }
          state = 'relative path';
          if (c !== '/' && c !== '\\') {
            continue;
          }
          break;
        case 'relative path':
          if (c === EOF || c === '/' || c === '\\' || !stateOverride && (c === '?' || c === '#')) {
            if (c === '\\') {
              err('\\ not allowed in relative path.');
            }
            var tmp;
            if (tmp = relativePathDotMapping[buffer.toLowerCase()]) {
              buffer = tmp;
            }
            if (buffer === '..') {
              this._path.pop();
              if (c !== '/' && c !== '\\') {
                this._path.push('');
              }
            } else if (buffer === '.' && c !== '/' && c !== '\\') {
              this._path.push('');
            } else if (buffer !== '.') {
              if (this._scheme === 'file' && this._path.length === 0 && buffer.length === 2 && ALPHA.test(buffer[0]) && buffer[1] === '|') {
                buffer = buffer[0] + ':';
              }
              this._path.push(buffer);
            }
            buffer = '';
            if (c === '?') {
              this._query = '?';
              state = 'query';
            } else if (c === '#') {
              this._fragment = '#';
              state = 'fragment';
            }
          } else if (c !== '\t' && c !== '\n' && c !== '\r') {
            buffer += percentEscape(c);
          }
          break;
        case 'query':
          if (!stateOverride && c === '#') {
            this._fragment = '#';
            state = 'fragment';
          } else if (c !== EOF && c !== '\t' && c !== '\n' && c !== '\r') {
            this._query += percentEscapeQuery(c);
          }
          break;
        case 'fragment':
          if (c !== EOF && c !== '\t' && c !== '\n' && c !== '\r') {
            this._fragment += c;
          }
          break;
      }
      cursor++;
    }
  }
  function clear() {
    this._scheme = '';
    this._schemeData = '';
    this._username = '';
    this._password = null;
    this._host = '';
    this._port = '';
    this._path = [];
    this._query = '';
    this._fragment = '';
    this._isInvalid = false;
    this._isRelative = false;
  }
  function JURL(url, base) {
    if (base !== undefined && !(base instanceof JURL)) {
      base = new JURL(String(base));
    }
    this._url = url;
    clear.call(this);
    var input = url.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, '');
    parse.call(this, input, null, base);
  }
  JURL.prototype = {
    toString: function toString() {
      return this.href;
    },

    get href() {
      if (this._isInvalid) {
        return this._url;
      }
      var authority = '';
      if (this._username !== '' || this._password !== null) {
        authority = this._username + (this._password !== null ? ':' + this._password : '') + '@';
      }
      return this.protocol + (this._isRelative ? '//' + authority + this.host : '') + this.pathname + this._query + this._fragment;
    },
    set href(value) {
      clear.call(this);
      parse.call(this, value);
    },
    get protocol() {
      return this._scheme + ':';
    },
    set protocol(value) {
      if (this._isInvalid) {
        return;
      }
      parse.call(this, value + ':', 'scheme start');
    },
    get host() {
      return this._isInvalid ? '' : this._port ? this._host + ':' + this._port : this._host;
    },
    set host(value) {
      if (this._isInvalid || !this._isRelative) {
        return;
      }
      parse.call(this, value, 'host');
    },
    get hostname() {
      return this._host;
    },
    set hostname(value) {
      if (this._isInvalid || !this._isRelative) {
        return;
      }
      parse.call(this, value, 'hostname');
    },
    get port() {
      return this._port;
    },
    set port(value) {
      if (this._isInvalid || !this._isRelative) {
        return;
      }
      parse.call(this, value, 'port');
    },
    get pathname() {
      return this._isInvalid ? '' : this._isRelative ? '/' + this._path.join('/') : this._schemeData;
    },
    set pathname(value) {
      if (this._isInvalid || !this._isRelative) {
        return;
      }
      this._path = [];
      parse.call(this, value, 'relative path start');
    },
    get search() {
      return this._isInvalid || !this._query || this._query === '?' ? '' : this._query;
    },
    set search(value) {
      if (this._isInvalid || !this._isRelative) {
        return;
      }
      this._query = '?';
      if (value[0] === '?') {
        value = value.slice(1);
      }
      parse.call(this, value, 'query');
    },
    get hash() {
      return this._isInvalid || !this._fragment || this._fragment === '#' ? '' : this._fragment;
    },
    set hash(value) {
      if (this._isInvalid) {
        return;
      }
      this._fragment = '#';
      if (value[0] === '#') {
        value = value.slice(1);
      }
      parse.call(this, value, 'fragment');
    },
    get origin() {
      var host;
      if (this._isInvalid || !this._scheme) {
        return '';
      }
      switch (this._scheme) {
        case 'data':
        case 'file':
        case 'javascript':
        case 'mailto':
          return 'null';
        case 'blob':
          try {
            return new JURL(this._schemeData).origin || 'null';
          } catch (_) {}
          return 'null';
      }
      host = this.host;
      if (!host) {
        return '';
      }
      return this._scheme + '://' + host;
    }
  };
  exports.URL = JURL;
})();

/***/ }),
/* 129 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.build = exports.version = exports.setPDFNetworkStreamFactory = exports.PDFPageProxy = exports.PDFDocumentProxy = exports.PDFWorker = exports.PDFDataRangeTransport = exports.LoopbackPort = exports.getDocument = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _util = __w_pdfjs_require__(1);

var _dom_utils = __w_pdfjs_require__(130);

var _font_loader = __w_pdfjs_require__(131);

var _api_compatibility = __w_pdfjs_require__(132);

var _canvas = __w_pdfjs_require__(133);

var _global_scope = __w_pdfjs_require__(3);

var _global_scope2 = _interopRequireDefault(_global_scope);

var _worker_options = __w_pdfjs_require__(135);

var _message_handler = __w_pdfjs_require__(136);

var _metadata = __w_pdfjs_require__(141);

var _transport_stream = __w_pdfjs_require__(143);

var _webgl = __w_pdfjs_require__(144);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_RANGE_CHUNK_SIZE = 65536;
var isWorkerDisabled = false;
var fallbackWorkerSrc = void 0;
var fakeWorkerFilesLoader = null;
{
  var useRequireEnsure = false;
  if (typeof window === 'undefined') {
    isWorkerDisabled = true;
    if (false) {}
    useRequireEnsure = true;
  } else if (true) {
    useRequireEnsure = true;
  }
  if (typeof requirejs !== 'undefined' && requirejs.toUrl) {
    fallbackWorkerSrc = requirejs.toUrl('pdfjs-dist/build/pdf.worker.js');
  }
  var dynamicLoaderSupported = typeof requirejs !== 'undefined' && requirejs.load;
  fakeWorkerFilesLoader = useRequireEnsure ? function () {
    return new Promise(function (resolve, reject) {
      __webpack_require__.e(/*! require.ensure | pdfjsWorker */ "vendors~pdfjsWorker").then((function () {
        try {
          var worker = void 0;
          worker = __webpack_require__(/*! ./pdf.worker.js */ "./node_modules/pdfjs-dist/build/pdf.worker.js");
          resolve(worker.WorkerMessageHandler);
        } catch (ex) {
          reject(ex);
        }
      }).bind(null, __webpack_require__)).catch(reject);
    });
  } : dynamicLoaderSupported ? function () {
    return new Promise(function (resolve, reject) {
      requirejs(['pdfjs-dist/build/pdf.worker'], function (worker) {
        try {
          resolve(worker.WorkerMessageHandler);
        } catch (ex) {
          reject(ex);
        }
      }, reject);
    });
  } : null;
  if (!fallbackWorkerSrc && typeof document !== 'undefined') {
    var pdfjsFilePath = document.currentScript && document.currentScript.src;
    if (pdfjsFilePath) {
      fallbackWorkerSrc = pdfjsFilePath.replace(/(\.(?:min\.)?js)(\?.*)?$/i, '.worker$1$2');
    }
  }
}
var createPDFNetworkStream;
function setPDFNetworkStreamFactory(pdfNetworkStreamFactory) {
  createPDFNetworkStream = pdfNetworkStreamFactory;
}
function getDocument(src) {
  var task = new PDFDocumentLoadingTask();
  var source;
  if (typeof src === 'string') {
    source = { url: src };
  } else if ((0, _util.isArrayBuffer)(src)) {
    source = { data: src };
  } else if (src instanceof PDFDataRangeTransport) {
    source = { range: src };
  } else {
    if ((typeof src === 'undefined' ? 'undefined' : _typeof(src)) !== 'object') {
      throw new Error('Invalid parameter in getDocument, ' + 'need either Uint8Array, string or a parameter object');
    }
    if (!src.url && !src.data && !src.range) {
      throw new Error('Invalid parameter object: need either .data, .range or .url');
    }
    source = src;
  }
  var params = Object.create(null);
  var rangeTransport = null;
  var worker = null;
  for (var key in source) {
    if (key === 'url' && typeof window !== 'undefined') {
      params[key] = new _util.URL(source[key], window.location).href;
      continue;
    } else if (key === 'range') {
      rangeTransport = source[key];
      continue;
    } else if (key === 'worker') {
      worker = source[key];
      continue;
    } else if (key === 'data' && !(source[key] instanceof Uint8Array)) {
      var pdfBytes = source[key];
      if (typeof pdfBytes === 'string') {
        params[key] = (0, _util.stringToBytes)(pdfBytes);
      } else if ((typeof pdfBytes === 'undefined' ? 'undefined' : _typeof(pdfBytes)) === 'object' && pdfBytes !== null && !isNaN(pdfBytes.length)) {
        params[key] = new Uint8Array(pdfBytes);
      } else if ((0, _util.isArrayBuffer)(pdfBytes)) {
        params[key] = new Uint8Array(pdfBytes);
      } else {
        throw new Error('Invalid PDF binary data: either typed array, ' + 'string or array-like object is expected in the ' + 'data property.');
      }
      continue;
    }
    params[key] = source[key];
  }
  params.rangeChunkSize = params.rangeChunkSize || DEFAULT_RANGE_CHUNK_SIZE;
  params.CMapReaderFactory = params.CMapReaderFactory || _dom_utils.DOMCMapReaderFactory;
  params.ignoreErrors = params.stopAtErrors !== true;
  params.pdfBug = params.pdfBug === true;
  var NativeImageDecoderValues = Object.values(_util.NativeImageDecoding);
  if (params.nativeImageDecoderSupport === undefined || !NativeImageDecoderValues.includes(params.nativeImageDecoderSupport)) {
    params.nativeImageDecoderSupport = _api_compatibility.apiCompatibilityParams.nativeImageDecoderSupport || _util.NativeImageDecoding.DECODE;
  }
  if (!Number.isInteger(params.maxImageSize)) {
    params.maxImageSize = -1;
  }
  if (typeof params.isEvalSupported !== 'boolean') {
    params.isEvalSupported = true;
  }
  if (typeof params.disableFontFace !== 'boolean') {
    params.disableFontFace = _api_compatibility.apiCompatibilityParams.disableFontFace || false;
  }
  if (typeof params.disableRange !== 'boolean') {
    params.disableRange = false;
  }
  if (typeof params.disableStream !== 'boolean') {
    params.disableStream = false;
  }
  if (typeof params.disableAutoFetch !== 'boolean') {
    params.disableAutoFetch = false;
  }
  if (typeof params.disableCreateObjectURL !== 'boolean') {
    params.disableCreateObjectURL = _api_compatibility.apiCompatibilityParams.disableCreateObjectURL || false;
  }
  (0, _util.setVerbosityLevel)(params.verbosity);
  if (!worker) {
    var workerParams = {
      postMessageTransfers: params.postMessageTransfers,
      verbosity: params.verbosity
    };
    var workerPort = _worker_options.GlobalWorkerOptions.workerPort;
    if (workerPort) {
      workerParams.port = workerPort;
      worker = PDFWorker.fromPort(workerParams);
    } else {
      worker = new PDFWorker(workerParams);
    }
    task._worker = worker;
  }
  var docId = task.docId;
  worker.promise.then(function () {
    if (task.destroyed) {
      throw new Error('Loading aborted');
    }
    return _fetchDocument(worker, params, rangeTransport, docId).then(function (workerId) {
      if (task.destroyed) {
        throw new Error('Loading aborted');
      }
      var networkStream = void 0;
      if (rangeTransport) {
        networkStream = new _transport_stream.PDFDataTransportStream({
          length: params.length,
          initialData: params.initialData,
          disableRange: params.disableRange,
          disableStream: params.disableStream
        }, rangeTransport);
      } else if (!params.data) {
        networkStream = createPDFNetworkStream({
          url: params.url,
          length: params.length,
          httpHeaders: params.httpHeaders,
          withCredentials: params.withCredentials,
          rangeChunkSize: params.rangeChunkSize,
          disableRange: params.disableRange,
          disableStream: params.disableStream
        });
      }
      var messageHandler = new _message_handler.MessageHandler(docId, workerId, worker.port);
      messageHandler.postMessageTransfers = worker.postMessageTransfers;
      var transport = new WorkerTransport(messageHandler, task, networkStream, params);
      task._transport = transport;
      messageHandler.send('Ready', null);
    });
  }).catch(task._capability.reject);
  return task;
}
function _fetchDocument(worker, source, pdfDataRangeTransport, docId) {
  if (worker.destroyed) {
    return Promise.reject(new Error('Worker was destroyed'));
  }
  if (pdfDataRangeTransport) {
    source.length = pdfDataRangeTransport.length;
    source.initialData = pdfDataRangeTransport.initialData;
  }
  return worker.messageHandler.sendWithPromise('GetDocRequest', {
    docId: docId,
    apiVersion: '2.0.943',
    source: {
      data: source.data,
      url: source.url,
      password: source.password,
      disableAutoFetch: source.disableAutoFetch,
      rangeChunkSize: source.rangeChunkSize,
      length: source.length
    },
    maxImageSize: source.maxImageSize,
    disableFontFace: source.disableFontFace,
    disableCreateObjectURL: source.disableCreateObjectURL,
    postMessageTransfers: worker.postMessageTransfers,
    docBaseUrl: source.docBaseUrl,
    nativeImageDecoderSupport: source.nativeImageDecoderSupport,
    ignoreErrors: source.ignoreErrors,
    isEvalSupported: source.isEvalSupported
  }).then(function (workerId) {
    if (worker.destroyed) {
      throw new Error('Worker was destroyed');
    }
    return workerId;
  });
}
var PDFDocumentLoadingTask = function PDFDocumentLoadingTaskClosure() {
  var nextDocumentId = 0;
  function PDFDocumentLoadingTask() {
    this._capability = (0, _util.createPromiseCapability)();
    this._transport = null;
    this._worker = null;
    this.docId = 'd' + nextDocumentId++;
    this.destroyed = false;
    this.onPassword = null;
    this.onProgress = null;
    this.onUnsupportedFeature = null;
  }
  PDFDocumentLoadingTask.prototype = {
    get promise() {
      return this._capability.promise;
    },
    destroy: function destroy() {
      var _this = this;

      this.destroyed = true;
      var transportDestroyed = !this._transport ? Promise.resolve() : this._transport.destroy();
      return transportDestroyed.then(function () {
        _this._transport = null;
        if (_this._worker) {
          _this._worker.destroy();
          _this._worker = null;
        }
      });
    },

    then: function PDFDocumentLoadingTask_then(onFulfilled, onRejected) {
      return this.promise.then.apply(this.promise, arguments);
    }
  };
  return PDFDocumentLoadingTask;
}();

var PDFDataRangeTransport = function () {
  function PDFDataRangeTransport(length, initialData) {
    _classCallCheck(this, PDFDataRangeTransport);

    this.length = length;
    this.initialData = initialData;
    this._rangeListeners = [];
    this._progressListeners = [];
    this._progressiveReadListeners = [];
    this._readyCapability = (0, _util.createPromiseCapability)();
  }

  _createClass(PDFDataRangeTransport, [{
    key: 'addRangeListener',
    value: function addRangeListener(listener) {
      this._rangeListeners.push(listener);
    }
  }, {
    key: 'addProgressListener',
    value: function addProgressListener(listener) {
      this._progressListeners.push(listener);
    }
  }, {
    key: 'addProgressiveReadListener',
    value: function addProgressiveReadListener(listener) {
      this._progressiveReadListeners.push(listener);
    }
  }, {
    key: 'onDataRange',
    value: function onDataRange(begin, chunk) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._rangeListeners[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var listener = _step.value;

          listener(begin, chunk);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: 'onDataProgress',
    value: function onDataProgress(loaded) {
      var _this2 = this;

      this._readyCapability.promise.then(function () {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = _this2._progressListeners[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var listener = _step2.value;

            listener(loaded);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      });
    }
  }, {
    key: 'onDataProgressiveRead',
    value: function onDataProgressiveRead(chunk) {
      var _this3 = this;

      this._readyCapability.promise.then(function () {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = _this3._progressiveReadListeners[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var listener = _step3.value;

            listener(chunk);
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      });
    }
  }, {
    key: 'transportReady',
    value: function transportReady() {
      this._readyCapability.resolve();
    }
  }, {
    key: 'requestDataRange',
    value: function requestDataRange(begin, end) {
      (0, _util.unreachable)('Abstract method PDFDataRangeTransport.requestDataRange');
    }
  }, {
    key: 'abort',
    value: function abort() {}
  }]);

  return PDFDataRangeTransport;
}();

var PDFDocumentProxy = function () {
  function PDFDocumentProxy(pdfInfo, transport, loadingTask) {
    _classCallCheck(this, PDFDocumentProxy);

    this.loadingTask = loadingTask;
    this._pdfInfo = pdfInfo;
    this._transport = transport;
  }

  _createClass(PDFDocumentProxy, [{
    key: 'getPage',
    value: function getPage(pageNumber) {
      return this._transport.getPage(pageNumber);
    }
  }, {
    key: 'getPageIndex',
    value: function getPageIndex(ref) {
      return this._transport.getPageIndex(ref);
    }
  }, {
    key: 'getDestinations',
    value: function getDestinations() {
      return this._transport.getDestinations();
    }
  }, {
    key: 'getDestination',
    value: function getDestination(id) {
      return this._transport.getDestination(id);
    }
  }, {
    key: 'getPageLabels',
    value: function getPageLabels() {
      return this._transport.getPageLabels();
    }
  }, {
    key: 'getPageMode',
    value: function getPageMode() {
      return this._transport.getPageMode();
    }
  }, {
    key: 'getAttachments',
    value: function getAttachments() {
      return this._transport.getAttachments();
    }
  }, {
    key: 'getJavaScript',
    value: function getJavaScript() {
      return this._transport.getJavaScript();
    }
  }, {
    key: 'getOutline',
    value: function getOutline() {
      return this._transport.getOutline();
    }
  }, {
    key: 'getPermissions',
    value: function getPermissions() {
      return this._transport.getPermissions();
    }
  }, {
    key: 'getMetadata',
    value: function getMetadata() {
      return this._transport.getMetadata();
    }
  }, {
    key: 'getData',
    value: function getData() {
      return this._transport.getData();
    }
  }, {
    key: 'getDownloadInfo',
    value: function getDownloadInfo() {
      return this._transport.downloadInfoCapability.promise;
    }
  }, {
    key: 'getStats',
    value: function getStats() {
      return this._transport.getStats();
    }
  }, {
    key: 'cleanup',
    value: function cleanup() {
      this._transport.startCleanup();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      return this.loadingTask.destroy();
    }
  }, {
    key: 'numPages',
    get: function get() {
      return this._pdfInfo.numPages;
    }
  }, {
    key: 'fingerprint',
    get: function get() {
      return this._pdfInfo.fingerprint;
    }
  }, {
    key: 'loadingParams',
    get: function get() {
      return this._transport.loadingParams;
    }
  }]);

  return PDFDocumentProxy;
}();

var PDFPageProxy = function PDFPageProxyClosure() {
  function PDFPageProxy(pageIndex, pageInfo, transport) {
    var pdfBug = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    this.pageIndex = pageIndex;
    this._pageInfo = pageInfo;
    this.transport = transport;
    this._stats = pdfBug ? new _dom_utils.StatTimer() : _dom_utils.DummyStatTimer;
    this._pdfBug = pdfBug;
    this.commonObjs = transport.commonObjs;
    this.objs = new PDFObjects();
    this.cleanupAfterRender = false;
    this.pendingCleanup = false;
    this.intentStates = Object.create(null);
    this.destroyed = false;
  }
  PDFPageProxy.prototype = {
    get pageNumber() {
      return this.pageIndex + 1;
    },
    get rotate() {
      return this._pageInfo.rotate;
    },
    get ref() {
      return this._pageInfo.ref;
    },
    get userUnit() {
      return this._pageInfo.userUnit;
    },
    get view() {
      return this._pageInfo.view;
    },
    getViewport: function getViewport(scale) {
      var rotate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.rotate;
      var dontFlip = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      return new _dom_utils.PageViewport({
        viewBox: this.view,
        scale: scale,
        rotation: rotate,
        dontFlip: dontFlip
      });
    },

    getAnnotations: function PDFPageProxy_getAnnotations(params) {
      var intent = params && params.intent || null;
      if (!this.annotationsPromise || this.annotationsIntent !== intent) {
        this.annotationsPromise = this.transport.getAnnotations(this.pageIndex, intent);
        this.annotationsIntent = intent;
      }
      return this.annotationsPromise;
    },
    render: function PDFPageProxy_render(params) {
      var _this4 = this;

      var stats = this._stats;
      stats.time('Overall');
      this.pendingCleanup = false;
      var renderingIntent = params.intent === 'print' ? 'print' : 'display';
      var canvasFactory = params.canvasFactory || new _dom_utils.DOMCanvasFactory();
      var webGLContext = new _webgl.WebGLContext({ enable: params.enableWebGL });
      if (!this.intentStates[renderingIntent]) {
        this.intentStates[renderingIntent] = Object.create(null);
      }
      var intentState = this.intentStates[renderingIntent];
      if (!intentState.displayReadyCapability) {
        intentState.receivingOperatorList = true;
        intentState.displayReadyCapability = (0, _util.createPromiseCapability)();
        intentState.operatorList = {
          fnArray: [],
          argsArray: [],
          lastChunk: false
        };
        stats.time('Page Request');
        this.transport.messageHandler.send('RenderPageRequest', {
          pageIndex: this.pageNumber - 1,
          intent: renderingIntent,
          renderInteractiveForms: params.renderInteractiveForms === true
        });
      }
      var complete = function complete(error) {
        var i = intentState.renderTasks.indexOf(internalRenderTask);
        if (i >= 0) {
          intentState.renderTasks.splice(i, 1);
        }
        if (_this4.cleanupAfterRender) {
          _this4.pendingCleanup = true;
        }
        _this4._tryCleanup();
        if (error) {
          internalRenderTask.capability.reject(error);
        } else {
          internalRenderTask.capability.resolve();
        }
        stats.timeEnd('Rendering');
        stats.timeEnd('Overall');
      };
      var internalRenderTask = new InternalRenderTask(complete, params, this.objs, this.commonObjs, intentState.operatorList, this.pageNumber, canvasFactory, webGLContext, this._pdfBug);
      internalRenderTask.useRequestAnimationFrame = renderingIntent !== 'print';
      if (!intentState.renderTasks) {
        intentState.renderTasks = [];
      }
      intentState.renderTasks.push(internalRenderTask);
      var renderTask = internalRenderTask.task;
      intentState.displayReadyCapability.promise.then(function (transparency) {
        if (_this4.pendingCleanup) {
          complete();
          return;
        }
        stats.time('Rendering');
        internalRenderTask.initializeGraphics(transparency);
        internalRenderTask.operatorListChanged();
      }).catch(complete);
      return renderTask;
    },
    getOperatorList: function PDFPageProxy_getOperatorList() {
      function operatorListChanged() {
        if (intentState.operatorList.lastChunk) {
          intentState.opListReadCapability.resolve(intentState.operatorList);
          var i = intentState.renderTasks.indexOf(opListTask);
          if (i >= 0) {
            intentState.renderTasks.splice(i, 1);
          }
        }
      }
      var renderingIntent = 'oplist';
      if (!this.intentStates[renderingIntent]) {
        this.intentStates[renderingIntent] = Object.create(null);
      }
      var intentState = this.intentStates[renderingIntent];
      var opListTask;
      if (!intentState.opListReadCapability) {
        opListTask = {};
        opListTask.operatorListChanged = operatorListChanged;
        intentState.receivingOperatorList = true;
        intentState.opListReadCapability = (0, _util.createPromiseCapability)();
        intentState.renderTasks = [];
        intentState.renderTasks.push(opListTask);
        intentState.operatorList = {
          fnArray: [],
          argsArray: [],
          lastChunk: false
        };
        this._stats.time('Page Request');
        this.transport.messageHandler.send('RenderPageRequest', {
          pageIndex: this.pageIndex,
          intent: renderingIntent
        });
      }
      return intentState.opListReadCapability.promise;
    },
    streamTextContent: function streamTextContent() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var TEXT_CONTENT_CHUNK_SIZE = 100;
      return this.transport.messageHandler.sendWithStream('GetTextContent', {
        pageIndex: this.pageNumber - 1,
        normalizeWhitespace: params.normalizeWhitespace === true,
        combineTextItems: params.disableCombineTextItems !== true
      }, {
        highWaterMark: TEXT_CONTENT_CHUNK_SIZE,
        size: function size(textContent) {
          return textContent.items.length;
        }
      });
    },

    getTextContent: function PDFPageProxy_getTextContent(params) {
      params = params || {};
      var readableStream = this.streamTextContent(params);
      return new Promise(function (resolve, reject) {
        function pump() {
          reader.read().then(function (_ref) {
            var _textContent$items;

            var value = _ref.value,
                done = _ref.done;

            if (done) {
              resolve(textContent);
              return;
            }
            Object.assign(textContent.styles, value.styles);
            (_textContent$items = textContent.items).push.apply(_textContent$items, _toConsumableArray(value.items));
            pump();
          }, reject);
        }
        var reader = readableStream.getReader();
        var textContent = {
          items: [],
          styles: Object.create(null)
        };
        pump();
      });
    },
    _destroy: function PDFPageProxy_destroy() {
      this.destroyed = true;
      this.transport.pageCache[this.pageIndex] = null;
      var waitOn = [];
      Object.keys(this.intentStates).forEach(function (intent) {
        if (intent === 'oplist') {
          return;
        }
        var intentState = this.intentStates[intent];
        intentState.renderTasks.forEach(function (renderTask) {
          var renderCompleted = renderTask.capability.promise.catch(function () {});
          waitOn.push(renderCompleted);
          renderTask.cancel();
        });
      }, this);
      this.objs.clear();
      this.annotationsPromise = null;
      this.pendingCleanup = false;
      return Promise.all(waitOn);
    },
    cleanup: function cleanup() {
      var resetStats = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      this.pendingCleanup = true;
      this._tryCleanup(resetStats);
    },
    _tryCleanup: function _tryCleanup() {
      var resetStats = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!this.pendingCleanup || Object.keys(this.intentStates).some(function (intent) {
        var intentState = this.intentStates[intent];
        return intentState.renderTasks.length !== 0 || intentState.receivingOperatorList;
      }, this)) {
        return;
      }
      Object.keys(this.intentStates).forEach(function (intent) {
        delete this.intentStates[intent];
      }, this);
      this.objs.clear();
      this.annotationsPromise = null;
      if (resetStats && this._stats instanceof _dom_utils.StatTimer) {
        this._stats = new _dom_utils.StatTimer();
      }
      this.pendingCleanup = false;
    },

    _startRenderPage: function PDFPageProxy_startRenderPage(transparency, intent) {
      var intentState = this.intentStates[intent];
      if (intentState.displayReadyCapability) {
        intentState.displayReadyCapability.resolve(transparency);
      }
    },
    _renderPageChunk: function PDFPageProxy_renderPageChunk(operatorListChunk, intent) {
      var intentState = this.intentStates[intent];
      var i, ii;
      for (i = 0, ii = operatorListChunk.length; i < ii; i++) {
        intentState.operatorList.fnArray.push(operatorListChunk.fnArray[i]);
        intentState.operatorList.argsArray.push(operatorListChunk.argsArray[i]);
      }
      intentState.operatorList.lastChunk = operatorListChunk.lastChunk;
      for (i = 0; i < intentState.renderTasks.length; i++) {
        intentState.renderTasks[i].operatorListChanged();
      }
      if (operatorListChunk.lastChunk) {
        intentState.receivingOperatorList = false;
        this._tryCleanup();
      }
    },
    get stats() {
      return this._stats instanceof _dom_utils.StatTimer ? this._stats : null;
    }
  };
  return PDFPageProxy;
}();

var LoopbackPort = function () {
  function LoopbackPort() {
    var defer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    _classCallCheck(this, LoopbackPort);

    this._listeners = [];
    this._defer = defer;
    this._deferred = Promise.resolve(undefined);
  }

  _createClass(LoopbackPort, [{
    key: 'postMessage',
    value: function postMessage(obj, transfers) {
      var _this5 = this;

      function cloneValue(value) {
        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object' || value === null) {
          return value;
        }
        if (cloned.has(value)) {
          return cloned.get(value);
        }
        var result;
        var buffer;
        if ((buffer = value.buffer) && (0, _util.isArrayBuffer)(buffer)) {
          var transferable = transfers && transfers.includes(buffer);
          if (value === buffer) {
            result = value;
          } else if (transferable) {
            result = new value.constructor(buffer, value.byteOffset, value.byteLength);
          } else {
            result = new value.constructor(value);
          }
          cloned.set(value, result);
          return result;
        }
        result = Array.isArray(value) ? [] : {};
        cloned.set(value, result);
        for (var i in value) {
          var desc,
              p = value;
          while (!(desc = Object.getOwnPropertyDescriptor(p, i))) {
            p = Object.getPrototypeOf(p);
          }
          if (typeof desc.value === 'undefined' || typeof desc.value === 'function') {
            continue;
          }
          result[i] = cloneValue(desc.value);
        }
        return result;
      }
      if (!this._defer) {
        this._listeners.forEach(function (listener) {
          listener.call(this, { data: obj });
        }, this);
        return;
      }
      var cloned = new WeakMap();
      var e = { data: cloneValue(obj) };
      this._deferred.then(function () {
        _this5._listeners.forEach(function (listener) {
          listener.call(this, e);
        }, _this5);
      });
    }
  }, {
    key: 'addEventListener',
    value: function addEventListener(name, listener) {
      this._listeners.push(listener);
    }
  }, {
    key: 'removeEventListener',
    value: function removeEventListener(name, listener) {
      var i = this._listeners.indexOf(listener);
      this._listeners.splice(i, 1);
    }
  }, {
    key: 'terminate',
    value: function terminate() {
      this._listeners = [];
    }
  }]);

  return LoopbackPort;
}();

var PDFWorker = function PDFWorkerClosure() {
  var nextFakeWorkerId = 0;
  function getWorkerSrc() {
    if (_worker_options.GlobalWorkerOptions.workerSrc) {
      return _worker_options.GlobalWorkerOptions.workerSrc;
    }
    if (typeof fallbackWorkerSrc !== 'undefined') {
      return fallbackWorkerSrc;
    }
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  function getMainThreadWorkerMessageHandler() {
    try {
      if (typeof window !== 'undefined') {
        return window.pdfjsWorker && window.pdfjsWorker.WorkerMessageHandler;
      }
    } catch (ex) {}
    return null;
  }
  var fakeWorkerFilesLoadedCapability = void 0;
  function setupFakeWorkerGlobal() {
    if (fakeWorkerFilesLoadedCapability) {
      return fakeWorkerFilesLoadedCapability.promise;
    }
    fakeWorkerFilesLoadedCapability = (0, _util.createPromiseCapability)();
    var mainWorkerMessageHandler = getMainThreadWorkerMessageHandler();
    if (mainWorkerMessageHandler) {
      fakeWorkerFilesLoadedCapability.resolve(mainWorkerMessageHandler);
      return fakeWorkerFilesLoadedCapability.promise;
    }
    var loader = fakeWorkerFilesLoader || function () {
      return (0, _dom_utils.loadScript)(getWorkerSrc()).then(function () {
        return window.pdfjsWorker.WorkerMessageHandler;
      });
    };
    loader().then(fakeWorkerFilesLoadedCapability.resolve, fakeWorkerFilesLoadedCapability.reject);
    return fakeWorkerFilesLoadedCapability.promise;
  }
  function createCDNWrapper(url) {
    var wrapper = 'importScripts(\'' + url + '\');';
    return _util.URL.createObjectURL(new Blob([wrapper]));
  }
  var pdfWorkerPorts = new WeakMap();
  function PDFWorker() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref2$name = _ref2.name,
        name = _ref2$name === undefined ? null : _ref2$name,
        _ref2$port = _ref2.port,
        port = _ref2$port === undefined ? null : _ref2$port,
        _ref2$postMessageTran = _ref2.postMessageTransfers,
        postMessageTransfers = _ref2$postMessageTran === undefined ? true : _ref2$postMessageTran,
        _ref2$verbosity = _ref2.verbosity,
        verbosity = _ref2$verbosity === undefined ? (0, _util.getVerbosityLevel)() : _ref2$verbosity;

    if (port && pdfWorkerPorts.has(port)) {
      throw new Error('Cannot use more than one PDFWorker per port');
    }
    this.name = name;
    this.destroyed = false;
    this.postMessageTransfers = postMessageTransfers !== false;
    this.verbosity = verbosity;
    this._readyCapability = (0, _util.createPromiseCapability)();
    this._port = null;
    this._webWorker = null;
    this._messageHandler = null;
    if (port) {
      pdfWorkerPorts.set(port, this);
      this._initializeFromPort(port);
      return;
    }
    this._initialize();
  }
  PDFWorker.prototype = {
    get promise() {
      return this._readyCapability.promise;
    },
    get port() {
      return this._port;
    },
    get messageHandler() {
      return this._messageHandler;
    },
    _initializeFromPort: function PDFWorker_initializeFromPort(port) {
      this._port = port;
      this._messageHandler = new _message_handler.MessageHandler('main', 'worker', port);
      this._messageHandler.on('ready', function () {});
      this._readyCapability.resolve();
    },
    _initialize: function PDFWorker_initialize() {
      var _this6 = this;

      if (typeof Worker !== 'undefined' && !isWorkerDisabled && !getMainThreadWorkerMessageHandler()) {
        var workerSrc = getWorkerSrc();
        try {
          if (!(0, _util.isSameOrigin)(window.location.href, workerSrc)) {
            workerSrc = createCDNWrapper(new _util.URL(workerSrc, window.location).href);
          }
          var worker = new Worker(workerSrc);
          var messageHandler = new _message_handler.MessageHandler('main', 'worker', worker);
          var terminateEarly = function terminateEarly() {
            worker.removeEventListener('error', onWorkerError);
            messageHandler.destroy();
            worker.terminate();
            if (_this6.destroyed) {
              _this6._readyCapability.reject(new Error('Worker was destroyed'));
            } else {
              _this6._setupFakeWorker();
            }
          };
          var onWorkerError = function onWorkerError() {
            if (!_this6._webWorker) {
              terminateEarly();
            }
          };
          worker.addEventListener('error', onWorkerError);
          messageHandler.on('test', function (data) {
            worker.removeEventListener('error', onWorkerError);
            if (_this6.destroyed) {
              terminateEarly();
              return;
            }
            if (data && data.supportTypedArray) {
              _this6._messageHandler = messageHandler;
              _this6._port = worker;
              _this6._webWorker = worker;
              if (!data.supportTransfers) {
                _this6.postMessageTransfers = false;
              }
              _this6._readyCapability.resolve();
              messageHandler.send('configure', { verbosity: _this6.verbosity });
            } else {
              _this6._setupFakeWorker();
              messageHandler.destroy();
              worker.terminate();
            }
          });
          messageHandler.on('ready', function (data) {
            worker.removeEventListener('error', onWorkerError);
            if (_this6.destroyed) {
              terminateEarly();
              return;
            }
            try {
              sendTest();
            } catch (e) {
              _this6._setupFakeWorker();
            }
          });
          var sendTest = function sendTest() {
            var testObj = new Uint8Array([_this6.postMessageTransfers ? 255 : 0]);
            try {
              messageHandler.send('test', testObj, [testObj.buffer]);
            } catch (ex) {
              (0, _util.info)('Cannot use postMessage transfers');
              testObj[0] = 0;
              messageHandler.send('test', testObj);
            }
          };
          sendTest();
          return;
        } catch (e) {
          (0, _util.info)('The worker has been disabled.');
        }
      }
      this._setupFakeWorker();
    },
    _setupFakeWorker: function PDFWorker_setupFakeWorker() {
      var _this7 = this;

      if (!isWorkerDisabled) {
        (0, _util.warn)('Setting up fake worker.');
        isWorkerDisabled = true;
      }
      setupFakeWorkerGlobal().then(function (WorkerMessageHandler) {
        if (_this7.destroyed) {
          _this7._readyCapability.reject(new Error('Worker was destroyed'));
          return;
        }
        var port = new LoopbackPort();
        _this7._port = port;
        var id = 'fake' + nextFakeWorkerId++;
        var workerHandler = new _message_handler.MessageHandler(id + '_worker', id, port);
        WorkerMessageHandler.setup(workerHandler, port);
        var messageHandler = new _message_handler.MessageHandler(id, id + '_worker', port);
        _this7._messageHandler = messageHandler;
        _this7._readyCapability.resolve();
      }).catch(function (reason) {
        _this7._readyCapability.reject(new Error('Setting up fake worker failed: "' + reason.message + '".'));
      });
    },
    destroy: function PDFWorker_destroy() {
      this.destroyed = true;
      if (this._webWorker) {
        this._webWorker.terminate();
        this._webWorker = null;
      }
      pdfWorkerPorts.delete(this._port);
      this._port = null;
      if (this._messageHandler) {
        this._messageHandler.destroy();
        this._messageHandler = null;
      }
    }
  };
  PDFWorker.fromPort = function (params) {
    if (!params || !params.port) {
      throw new Error('PDFWorker.fromPort - invalid method signature.');
    }
    if (pdfWorkerPorts.has(params.port)) {
      return pdfWorkerPorts.get(params.port);
    }
    return new PDFWorker(params);
  };
  PDFWorker.getWorkerSrc = function () {
    return getWorkerSrc();
  };
  return PDFWorker;
}();

var WorkerTransport = function () {
  function WorkerTransport(messageHandler, loadingTask, networkStream, params) {
    _classCallCheck(this, WorkerTransport);

    this.messageHandler = messageHandler;
    this.loadingTask = loadingTask;
    this.commonObjs = new PDFObjects();
    this.fontLoader = new _font_loader.FontLoader(loadingTask.docId);
    this._params = params;
    this.CMapReaderFactory = new params.CMapReaderFactory({
      baseUrl: params.cMapUrl,
      isCompressed: params.cMapPacked
    });
    this.destroyed = false;
    this.destroyCapability = null;
    this._passwordCapability = null;
    this._networkStream = networkStream;
    this._fullReader = null;
    this._lastProgress = null;
    this.pageCache = [];
    this.pagePromises = [];
    this.downloadInfoCapability = (0, _util.createPromiseCapability)();
    this.setupMessageHandler();
  }

  _createClass(WorkerTransport, [{
    key: 'destroy',
    value: function destroy() {
      var _this8 = this;

      if (this.destroyCapability) {
        return this.destroyCapability.promise;
      }
      this.destroyed = true;
      this.destroyCapability = (0, _util.createPromiseCapability)();
      if (this._passwordCapability) {
        this._passwordCapability.reject(new Error('Worker was destroyed during onPassword callback'));
      }
      var waitOn = [];
      this.pageCache.forEach(function (page) {
        if (page) {
          waitOn.push(page._destroy());
        }
      });
      this.pageCache = [];
      this.pagePromises = [];
      var terminated = this.messageHandler.sendWithPromise('Terminate', null);
      waitOn.push(terminated);
      Promise.all(waitOn).then(function () {
        _this8.fontLoader.clear();
        if (_this8._networkStream) {
          _this8._networkStream.cancelAllRequests();
        }
        if (_this8.messageHandler) {
          _this8.messageHandler.destroy();
          _this8.messageHandler = null;
        }
        _this8.destroyCapability.resolve();
      }, this.destroyCapability.reject);
      return this.destroyCapability.promise;
    }
  }, {
    key: 'setupMessageHandler',
    value: function setupMessageHandler() {
      var messageHandler = this.messageHandler,
          loadingTask = this.loadingTask;

      messageHandler.on('GetReader', function (data, sink) {
        var _this9 = this;

        (0, _util.assert)(this._networkStream);
        this._fullReader = this._networkStream.getFullReader();
        this._fullReader.onProgress = function (evt) {
          _this9._lastProgress = {
            loaded: evt.loaded,
            total: evt.total
          };
        };
        sink.onPull = function () {
          _this9._fullReader.read().then(function (_ref3) {
            var value = _ref3.value,
                done = _ref3.done;

            if (done) {
              sink.close();
              return;
            }
            (0, _util.assert)((0, _util.isArrayBuffer)(value));
            sink.enqueue(new Uint8Array(value), 1, [value]);
          }).catch(function (reason) {
            sink.error(reason);
          });
        };
        sink.onCancel = function (reason) {
          _this9._fullReader.cancel(reason);
        };
      }, this);
      messageHandler.on('ReaderHeadersReady', function (data) {
        var _this10 = this;

        var headersCapability = (0, _util.createPromiseCapability)();
        var fullReader = this._fullReader;
        fullReader.headersReady.then(function () {
          if (!fullReader.isStreamingSupported || !fullReader.isRangeSupported) {
            if (_this10._lastProgress && loadingTask.onProgress) {
              loadingTask.onProgress(_this10._lastProgress);
            }
            fullReader.onProgress = function (evt) {
              if (loadingTask.onProgress) {
                loadingTask.onProgress({
                  loaded: evt.loaded,
                  total: evt.total
                });
              }
            };
          }
          headersCapability.resolve({
            isStreamingSupported: fullReader.isStreamingSupported,
            isRangeSupported: fullReader.isRangeSupported,
            contentLength: fullReader.contentLength
          });
        }, headersCapability.reject);
        return headersCapability.promise;
      }, this);
      messageHandler.on('GetRangeReader', function (data, sink) {
        (0, _util.assert)(this._networkStream);
        var rangeReader = this._networkStream.getRangeReader(data.begin, data.end);
        sink.onPull = function () {
          rangeReader.read().then(function (_ref4) {
            var value = _ref4.value,
                done = _ref4.done;

            if (done) {
              sink.close();
              return;
            }
            (0, _util.assert)((0, _util.isArrayBuffer)(value));
            sink.enqueue(new Uint8Array(value), 1, [value]);
          }).catch(function (reason) {
            sink.error(reason);
          });
        };
        sink.onCancel = function (reason) {
          rangeReader.cancel(reason);
        };
      }, this);
      messageHandler.on('GetDoc', function (_ref5) {
        var pdfInfo = _ref5.pdfInfo;

        this.numPages = pdfInfo.numPages;
        this.pdfDocument = new PDFDocumentProxy(pdfInfo, this, loadingTask);
        loadingTask._capability.resolve(this.pdfDocument);
      }, this);
      messageHandler.on('PasswordRequest', function (exception) {
        var _this11 = this;

        this._passwordCapability = (0, _util.createPromiseCapability)();
        if (loadingTask.onPassword) {
          var updatePassword = function updatePassword(password) {
            _this11._passwordCapability.resolve({ password: password });
          };
          try {
            loadingTask.onPassword(updatePassword, exception.code);
          } catch (ex) {
            this._passwordCapability.reject(ex);
          }
        } else {
          this._passwordCapability.reject(new _util.PasswordException(exception.message, exception.code));
        }
        return this._passwordCapability.promise;
      }, this);
      messageHandler.on('PasswordException', function (exception) {
        loadingTask._capability.reject(new _util.PasswordException(exception.message, exception.code));
      }, this);
      messageHandler.on('InvalidPDF', function (exception) {
        loadingTask._capability.reject(new _util.InvalidPDFException(exception.message));
      }, this);
      messageHandler.on('MissingPDF', function (exception) {
        loadingTask._capability.reject(new _util.MissingPDFException(exception.message));
      }, this);
      messageHandler.on('UnexpectedResponse', function (exception) {
        loadingTask._capability.reject(new _util.UnexpectedResponseException(exception.message, exception.status));
      }, this);
      messageHandler.on('UnknownError', function (exception) {
        loadingTask._capability.reject(new _util.UnknownErrorException(exception.message, exception.details));
      }, this);
      messageHandler.on('DataLoaded', function (data) {
        if (loadingTask.onProgress) {
          loadingTask.onProgress({
            loaded: data.length,
            total: data.length
          });
        }
        this.downloadInfoCapability.resolve(data);
      }, this);
      messageHandler.on('StartRenderPage', function (data) {
        if (this.destroyed) {
          return;
        }
        var page = this.pageCache[data.pageIndex];
        page._stats.timeEnd('Page Request');
        page._startRenderPage(data.transparency, data.intent);
      }, this);
      messageHandler.on('RenderPageChunk', function (data) {
        if (this.destroyed) {
          return;
        }
        var page = this.pageCache[data.pageIndex];
        page._renderPageChunk(data.operatorList, data.intent);
      }, this);
      messageHandler.on('commonobj', function (data) {
        var _this12 = this;

        if (this.destroyed) {
          return;
        }

        var _data = _slicedToArray(data, 3),
            id = _data[0],
            type = _data[1],
            exportedData = _data[2];

        if (this.commonObjs.hasData(id)) {
          return;
        }
        switch (type) {
          case 'Font':
            var params = this._params;
            if ('error' in exportedData) {
              var exportedError = exportedData.error;
              (0, _util.warn)('Error during font loading: ' + exportedError);
              this.commonObjs.resolve(id, exportedError);
              break;
            }
            var fontRegistry = null;
            if (params.pdfBug && _global_scope2.default.FontInspector && _global_scope2.default.FontInspector.enabled) {
              fontRegistry = {
                registerFont: function registerFont(font, url) {
                  _global_scope2.default['FontInspector'].fontAdded(font, url);
                }
              };
            }
            var font = new _font_loader.FontFaceObject(exportedData, {
              isEvalSupported: params.isEvalSupported,
              disableFontFace: params.disableFontFace,
              ignoreErrors: params.ignoreErrors,
              onUnsupportedFeature: this._onUnsupportedFeature.bind(this),
              fontRegistry: fontRegistry
            });
            var fontReady = function fontReady(fontObjs) {
              _this12.commonObjs.resolve(id, font);
            };
            this.fontLoader.bind([font], fontReady);
            break;
          case 'FontPath':
            this.commonObjs.resolve(id, exportedData);
            break;
          default:
            throw new Error('Got unknown common object type ' + type);
        }
      }, this);
      messageHandler.on('obj', function (data) {
        if (this.destroyed) {
          return;
        }

        var _data2 = _slicedToArray(data, 4),
            id = _data2[0],
            pageIndex = _data2[1],
            type = _data2[2],
            imageData = _data2[3];

        var pageProxy = this.pageCache[pageIndex];
        if (pageProxy.objs.hasData(id)) {
          return;
        }
        switch (type) {
          case 'JpegStream':
            return new Promise(function (resolve, reject) {
              var img = new Image();
              img.onload = function () {
                resolve(img);
              };
              img.onerror = function () {
                reject(new Error('Error during JPEG image loading'));
              };
              img.src = imageData;
            }).then(function (img) {
              pageProxy.objs.resolve(id, img);
            });
          case 'Image':
            pageProxy.objs.resolve(id, imageData);
            var MAX_IMAGE_SIZE_TO_STORE = 8000000;
            if (imageData && 'data' in imageData && imageData.data.length > MAX_IMAGE_SIZE_TO_STORE) {
              pageProxy.cleanupAfterRender = true;
            }
            break;
          default:
            throw new Error('Got unknown object type ' + type);
        }
      }, this);
      messageHandler.on('DocProgress', function (data) {
        if (this.destroyed) {
          return;
        }
        if (loadingTask.onProgress) {
          loadingTask.onProgress({
            loaded: data.loaded,
            total: data.total
          });
        }
      }, this);
      messageHandler.on('PageError', function (data) {
        if (this.destroyed) {
          return;
        }
        var page = this.pageCache[data.pageNum - 1];
        var intentState = page.intentStates[data.intent];
        if (intentState.displayReadyCapability) {
          intentState.displayReadyCapability.reject(data.error);
        } else {
          throw new Error(data.error);
        }
        if (intentState.operatorList) {
          intentState.operatorList.lastChunk = true;
          for (var i = 0; i < intentState.renderTasks.length; i++) {
            intentState.renderTasks[i].operatorListChanged();
          }
        }
      }, this);
      messageHandler.on('UnsupportedFeature', this._onUnsupportedFeature, this);
      messageHandler.on('JpegDecode', function (data) {
        if (this.destroyed) {
          return Promise.reject(new Error('Worker was destroyed'));
        }
        if (typeof document === 'undefined') {
          return Promise.reject(new Error('"document" is not defined.'));
        }

        var _data3 = _slicedToArray(data, 2),
            imageUrl = _data3[0],
            components = _data3[1];

        if (components !== 3 && components !== 1) {
          return Promise.reject(new Error('Only 3 components or 1 component can be returned'));
        }
        return new Promise(function (resolve, reject) {
          var img = new Image();
          img.onload = function () {
            var width = img.width;
            var height = img.height;
            var size = width * height;
            var rgbaLength = size * 4;
            var buf = new Uint8ClampedArray(size * components);
            var tmpCanvas = document.createElement('canvas');
            tmpCanvas.width = width;
            tmpCanvas.height = height;
            var tmpCtx = tmpCanvas.getContext('2d');
            tmpCtx.drawImage(img, 0, 0);
            var data = tmpCtx.getImageData(0, 0, width, height).data;
            if (components === 3) {
              for (var i = 0, j = 0; i < rgbaLength; i += 4, j += 3) {
                buf[j] = data[i];
                buf[j + 1] = data[i + 1];
                buf[j + 2] = data[i + 2];
              }
            } else if (components === 1) {
              for (var _i = 0, _j = 0; _i < rgbaLength; _i += 4, _j++) {
                buf[_j] = data[_i];
              }
            }
            resolve({
              data: buf,
              width: width,
              height: height
            });
          };
          img.onerror = function () {
            reject(new Error('JpegDecode failed to load image'));
          };
          img.src = imageUrl;
        });
      }, this);
      messageHandler.on('FetchBuiltInCMap', function (data) {
        if (this.destroyed) {
          return Promise.reject(new Error('Worker was destroyed'));
        }
        return this.CMapReaderFactory.fetch({ name: data.name });
      }, this);
    }
  }, {
    key: '_onUnsupportedFeature',
    value: function _onUnsupportedFeature(_ref6) {
      var featureId = _ref6.featureId;

      if (this.destroyed) {
        return;
      }
      if (this.loadingTask.onUnsupportedFeature) {
        this.loadingTask.onUnsupportedFeature(featureId);
      }
    }
  }, {
    key: 'getData',
    value: function getData() {
      return this.messageHandler.sendWithPromise('GetData', null);
    }
  }, {
    key: 'getPage',
    value: function getPage(pageNumber) {
      var _this13 = this;

      if (!Number.isInteger(pageNumber) || pageNumber <= 0 || pageNumber > this.numPages) {
        return Promise.reject(new Error('Invalid page request'));
      }
      var pageIndex = pageNumber - 1;
      if (pageIndex in this.pagePromises) {
        return this.pagePromises[pageIndex];
      }
      var promise = this.messageHandler.sendWithPromise('GetPage', { pageIndex: pageIndex }).then(function (pageInfo) {
        if (_this13.destroyed) {
          throw new Error('Transport destroyed');
        }
        var page = new PDFPageProxy(pageIndex, pageInfo, _this13, _this13._params.pdfBug);
        _this13.pageCache[pageIndex] = page;
        return page;
      });
      this.pagePromises[pageIndex] = promise;
      return promise;
    }
  }, {
    key: 'getPageIndex',
    value: function getPageIndex(ref) {
      return this.messageHandler.sendWithPromise('GetPageIndex', { ref: ref }).catch(function (reason) {
        return Promise.reject(new Error(reason));
      });
    }
  }, {
    key: 'getAnnotations',
    value: function getAnnotations(pageIndex, intent) {
      return this.messageHandler.sendWithPromise('GetAnnotations', {
        pageIndex: pageIndex,
        intent: intent
      });
    }
  }, {
    key: 'getDestinations',
    value: function getDestinations() {
      return this.messageHandler.sendWithPromise('GetDestinations', null);
    }
  }, {
    key: 'getDestination',
    value: function getDestination(id) {
      if (typeof id !== 'string') {
        return Promise.reject(new Error('Invalid destination request.'));
      }
      return this.messageHandler.sendWithPromise('GetDestination', { id: id });
    }
  }, {
    key: 'getPageLabels',
    value: function getPageLabels() {
      return this.messageHandler.sendWithPromise('GetPageLabels', null);
    }
  }, {
    key: 'getPageMode',
    value: function getPageMode() {
      return this.messageHandler.sendWithPromise('GetPageMode', null);
    }
  }, {
    key: 'getAttachments',
    value: function getAttachments() {
      return this.messageHandler.sendWithPromise('GetAttachments', null);
    }
  }, {
    key: 'getJavaScript',
    value: function getJavaScript() {
      return this.messageHandler.sendWithPromise('GetJavaScript', null);
    }
  }, {
    key: 'getOutline',
    value: function getOutline() {
      return this.messageHandler.sendWithPromise('GetOutline', null);
    }
  }, {
    key: 'getPermissions',
    value: function getPermissions() {
      return this.messageHandler.sendWithPromise('GetPermissions', null);
    }
  }, {
    key: 'getMetadata',
    value: function getMetadata() {
      var _this14 = this;

      return this.messageHandler.sendWithPromise('GetMetadata', null).then(function (results) {
        return {
          info: results[0],
          metadata: results[1] ? new _metadata.Metadata(results[1]) : null,
          contentDispositionFilename: _this14._fullReader ? _this14._fullReader.filename : null
        };
      });
    }
  }, {
    key: 'getStats',
    value: function getStats() {
      return this.messageHandler.sendWithPromise('GetStats', null);
    }
  }, {
    key: 'startCleanup',
    value: function startCleanup() {
      var _this15 = this;

      this.messageHandler.sendWithPromise('Cleanup', null).then(function () {
        for (var i = 0, ii = _this15.pageCache.length; i < ii; i++) {
          var page = _this15.pageCache[i];
          if (page) {
            page.cleanup();
          }
        }
        _this15.commonObjs.clear();
        _this15.fontLoader.clear();
      });
    }
  }, {
    key: 'loadingParams',
    get: function get() {
      var params = this._params;
      return (0, _util.shadow)(this, 'loadingParams', {
        disableAutoFetch: params.disableAutoFetch,
        disableCreateObjectURL: params.disableCreateObjectURL,
        disableFontFace: params.disableFontFace,
        nativeImageDecoderSupport: params.nativeImageDecoderSupport
      });
    }
  }]);

  return WorkerTransport;
}();

var PDFObjects = function PDFObjectsClosure() {
  function PDFObjects() {
    this.objs = Object.create(null);
  }
  PDFObjects.prototype = {
    ensureObj: function PDFObjects_ensureObj(objId) {
      if (this.objs[objId]) {
        return this.objs[objId];
      }
      var obj = {
        capability: (0, _util.createPromiseCapability)(),
        data: null,
        resolved: false
      };
      this.objs[objId] = obj;
      return obj;
    },
    get: function PDFObjects_get(objId, callback) {
      if (callback) {
        this.ensureObj(objId).capability.promise.then(callback);
        return null;
      }
      var obj = this.objs[objId];
      if (!obj || !obj.resolved) {
        throw new Error('Requesting object that isn\'t resolved yet ' + objId);
      }
      return obj.data;
    },
    resolve: function PDFObjects_resolve(objId, data) {
      var obj = this.ensureObj(objId);
      obj.resolved = true;
      obj.data = data;
      obj.capability.resolve(data);
    },
    isResolved: function PDFObjects_isResolved(objId) {
      var objs = this.objs;
      if (!objs[objId]) {
        return false;
      }
      return objs[objId].resolved;
    },
    hasData: function PDFObjects_hasData(objId) {
      return this.isResolved(objId);
    },
    getData: function PDFObjects_getData(objId) {
      var objs = this.objs;
      if (!objs[objId] || !objs[objId].resolved) {
        return null;
      }
      return objs[objId].data;
    },
    clear: function PDFObjects_clear() {
      this.objs = Object.create(null);
    }
  };
  return PDFObjects;
}();
var RenderTask = function RenderTaskClosure() {
  function RenderTask(internalRenderTask) {
    this._internalRenderTask = internalRenderTask;
    this.onContinue = null;
  }
  RenderTask.prototype = {
    get promise() {
      return this._internalRenderTask.capability.promise;
    },
    cancel: function RenderTask_cancel() {
      this._internalRenderTask.cancel();
    },
    then: function RenderTask_then(onFulfilled, onRejected) {
      return this.promise.then.apply(this.promise, arguments);
    }
  };
  return RenderTask;
}();
var InternalRenderTask = function InternalRenderTaskClosure() {
  var canvasInRendering = new WeakMap();
  function InternalRenderTask(callback, params, objs, commonObjs, operatorList, pageNumber, canvasFactory, webGLContext) {
    var pdfBug = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : false;

    this.callback = callback;
    this.params = params;
    this.objs = objs;
    this.commonObjs = commonObjs;
    this.operatorListIdx = null;
    this.operatorList = operatorList;
    this.pageNumber = pageNumber;
    this.canvasFactory = canvasFactory;
    this.webGLContext = webGLContext;
    this._pdfBug = pdfBug;
    this.running = false;
    this.graphicsReadyCallback = null;
    this.graphicsReady = false;
    this.useRequestAnimationFrame = false;
    this.cancelled = false;
    this.capability = (0, _util.createPromiseCapability)();
    this.task = new RenderTask(this);
    this._continueBound = this._continue.bind(this);
    this._scheduleNextBound = this._scheduleNext.bind(this);
    this._nextBound = this._next.bind(this);
    this._canvas = params.canvasContext.canvas;
  }
  InternalRenderTask.prototype = {
    initializeGraphics: function initializeGraphics(transparency) {
      if (this.cancelled) {
        return;
      }
      if (this._canvas) {
        if (canvasInRendering.has(this._canvas)) {
          throw new Error('Cannot use the same canvas during multiple render() operations. ' + 'Use different canvas or ensure previous operations were ' + 'cancelled or completed.');
        }
        canvasInRendering.set(this._canvas, this);
      }
      if (this._pdfBug && _global_scope2.default.StepperManager && _global_scope2.default.StepperManager.enabled) {
        this.stepper = _global_scope2.default.StepperManager.create(this.pageNumber - 1);
        this.stepper.init(this.operatorList);
        this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
      }
      var params = this.params;
      this.gfx = new _canvas.CanvasGraphics(params.canvasContext, this.commonObjs, this.objs, this.canvasFactory, this.webGLContext, params.imageLayer);
      this.gfx.beginDrawing({
        transform: params.transform,
        viewport: params.viewport,
        transparency: transparency,
        background: params.background
      });
      this.operatorListIdx = 0;
      this.graphicsReady = true;
      if (this.graphicsReadyCallback) {
        this.graphicsReadyCallback();
      }
    },

    cancel: function InternalRenderTask_cancel() {
      this.running = false;
      this.cancelled = true;
      if (this._canvas) {
        canvasInRendering.delete(this._canvas);
      }
      this.callback(new _dom_utils.RenderingCancelledException('Rendering cancelled, page ' + this.pageNumber, 'canvas'));
    },
    operatorListChanged: function InternalRenderTask_operatorListChanged() {
      if (!this.graphicsReady) {
        if (!this.graphicsReadyCallback) {
          this.graphicsReadyCallback = this._continueBound;
        }
        return;
      }
      if (this.stepper) {
        this.stepper.updateOperatorList(this.operatorList);
      }
      if (this.running) {
        return;
      }
      this._continue();
    },
    _continue: function InternalRenderTask__continue() {
      this.running = true;
      if (this.cancelled) {
        return;
      }
      if (this.task.onContinue) {
        this.task.onContinue(this._scheduleNextBound);
      } else {
        this._scheduleNext();
      }
    },
    _scheduleNext: function InternalRenderTask__scheduleNext() {
      var _this16 = this;

      if (this.useRequestAnimationFrame && typeof window !== 'undefined') {
        window.requestAnimationFrame(function () {
          _this16._nextBound().catch(_this16.callback);
        });
      } else {
        Promise.resolve().then(this._nextBound).catch(this.callback);
      }
    },
    _next: function InternalRenderTask__next() {
      var _this17 = this;

      return new Promise(function () {
        if (_this17.cancelled) {
          return;
        }
        _this17.operatorListIdx = _this17.gfx.executeOperatorList(_this17.operatorList, _this17.operatorListIdx, _this17._continueBound, _this17.stepper);
        if (_this17.operatorListIdx === _this17.operatorList.argsArray.length) {
          _this17.running = false;
          if (_this17.operatorList.lastChunk) {
            _this17.gfx.endDrawing();
            if (_this17._canvas) {
              canvasInRendering.delete(_this17._canvas);
            }
            _this17.callback();
          }
        }
      });
    }
  };
  return InternalRenderTask;
}();
var version, build;
{
  exports.version = version = '2.0.943';
  exports.build = build = 'dc98bf76';
}
exports.getDocument = getDocument;
exports.LoopbackPort = LoopbackPort;
exports.PDFDataRangeTransport = PDFDataRangeTransport;
exports.PDFWorker = PDFWorker;
exports.PDFDocumentProxy = PDFDocumentProxy;
exports.PDFPageProxy = PDFPageProxy;
exports.setPDFNetworkStreamFactory = setPDFNetworkStreamFactory;
exports.version = version;
exports.build = build;

/***/ }),
/* 130 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadScript = exports.DummyStatTimer = exports.StatTimer = exports.DOMSVGFactory = exports.DOMCMapReaderFactory = exports.DOMCanvasFactory = exports.DEFAULT_LINK_REL = exports.LinkTarget = exports.getFilenameFromUrl = exports.addLinkAttributes = exports.RenderingCancelledException = exports.PageViewport = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __w_pdfjs_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_LINK_REL = 'noopener noreferrer nofollow';
var SVG_NS = 'http://www.w3.org/2000/svg';

var DOMCanvasFactory = function () {
  function DOMCanvasFactory() {
    _classCallCheck(this, DOMCanvasFactory);
  }

  _createClass(DOMCanvasFactory, [{
    key: 'create',
    value: function create(width, height) {
      if (width <= 0 || height <= 0) {
        throw new Error('invalid canvas size');
      }
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      canvas.width = width;
      canvas.height = height;
      return {
        canvas: canvas,
        context: context
      };
    }
  }, {
    key: 'reset',
    value: function reset(canvasAndContext, width, height) {
      if (!canvasAndContext.canvas) {
        throw new Error('canvas is not specified');
      }
      if (width <= 0 || height <= 0) {
        throw new Error('invalid canvas size');
      }
      canvasAndContext.canvas.width = width;
      canvasAndContext.canvas.height = height;
    }
  }, {
    key: 'destroy',
    value: function destroy(canvasAndContext) {
      if (!canvasAndContext.canvas) {
        throw new Error('canvas is not specified');
      }
      canvasAndContext.canvas.width = 0;
      canvasAndContext.canvas.height = 0;
      canvasAndContext.canvas = null;
      canvasAndContext.context = null;
    }
  }]);

  return DOMCanvasFactory;
}();

var DOMCMapReaderFactory = function () {
  function DOMCMapReaderFactory(_ref) {
    var _ref$baseUrl = _ref.baseUrl,
        baseUrl = _ref$baseUrl === undefined ? null : _ref$baseUrl,
        _ref$isCompressed = _ref.isCompressed,
        isCompressed = _ref$isCompressed === undefined ? false : _ref$isCompressed;

    _classCallCheck(this, DOMCMapReaderFactory);

    this.baseUrl = baseUrl;
    this.isCompressed = isCompressed;
  }

  _createClass(DOMCMapReaderFactory, [{
    key: 'fetch',
    value: function fetch(_ref2) {
      var _this = this;

      var name = _ref2.name;

      if (!this.baseUrl) {
        return Promise.reject(new Error('The CMap "baseUrl" parameter must be specified, ensure that ' + 'the "cMapUrl" and "cMapPacked" API parameters are provided.'));
      }
      if (!name) {
        return Promise.reject(new Error('CMap name must be specified.'));
      }
      return new Promise(function (resolve, reject) {
        var url = _this.baseUrl + name + (_this.isCompressed ? '.bcmap' : '');
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        if (_this.isCompressed) {
          request.responseType = 'arraybuffer';
        }
        request.onreadystatechange = function () {
          if (request.readyState !== XMLHttpRequest.DONE) {
            return;
          }
          if (request.status === 200 || request.status === 0) {
            var data = void 0;
            if (_this.isCompressed && request.response) {
              data = new Uint8Array(request.response);
            } else if (!_this.isCompressed && request.responseText) {
              data = (0, _util.stringToBytes)(request.responseText);
            }
            if (data) {
              resolve({
                cMapData: data,
                compressionType: _this.isCompressed ? _util.CMapCompressionType.BINARY : _util.CMapCompressionType.NONE
              });
              return;
            }
          }
          reject(new Error('Unable to load ' + (_this.isCompressed ? 'binary ' : '') + 'CMap at: ' + url));
        };
        request.send(null);
      });
    }
  }]);

  return DOMCMapReaderFactory;
}();

var DOMSVGFactory = function () {
  function DOMSVGFactory() {
    _classCallCheck(this, DOMSVGFactory);
  }

  _createClass(DOMSVGFactory, [{
    key: 'create',
    value: function create(width, height) {
      (0, _util.assert)(width > 0 && height > 0, 'Invalid SVG dimensions');
      var svg = document.createElementNS(SVG_NS, 'svg:svg');
      svg.setAttribute('version', '1.1');
      svg.setAttribute('width', width + 'px');
      svg.setAttribute('height', height + 'px');
      svg.setAttribute('preserveAspectRatio', 'none');
      svg.setAttribute('viewBox', '0 0 ' + width + ' ' + height);
      return svg;
    }
  }, {
    key: 'createElement',
    value: function createElement(type) {
      (0, _util.assert)(typeof type === 'string', 'Invalid SVG element type');
      return document.createElementNS(SVG_NS, type);
    }
  }]);

  return DOMSVGFactory;
}();

var PageViewport = function () {
  function PageViewport(_ref3) {
    var viewBox = _ref3.viewBox,
        scale = _ref3.scale,
        rotation = _ref3.rotation,
        _ref3$offsetX = _ref3.offsetX,
        offsetX = _ref3$offsetX === undefined ? 0 : _ref3$offsetX,
        _ref3$offsetY = _ref3.offsetY,
        offsetY = _ref3$offsetY === undefined ? 0 : _ref3$offsetY,
        _ref3$dontFlip = _ref3.dontFlip,
        dontFlip = _ref3$dontFlip === undefined ? false : _ref3$dontFlip;

    _classCallCheck(this, PageViewport);

    this.viewBox = viewBox;
    this.scale = scale;
    this.rotation = rotation;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    var centerX = (viewBox[2] + viewBox[0]) / 2;
    var centerY = (viewBox[3] + viewBox[1]) / 2;
    var rotateA = void 0,
        rotateB = void 0,
        rotateC = void 0,
        rotateD = void 0;
    rotation = rotation % 360;
    rotation = rotation < 0 ? rotation + 360 : rotation;
    switch (rotation) {
      case 180:
        rotateA = -1;
        rotateB = 0;
        rotateC = 0;
        rotateD = 1;
        break;
      case 90:
        rotateA = 0;
        rotateB = 1;
        rotateC = 1;
        rotateD = 0;
        break;
      case 270:
        rotateA = 0;
        rotateB = -1;
        rotateC = -1;
        rotateD = 0;
        break;
      default:
        rotateA = 1;
        rotateB = 0;
        rotateC = 0;
        rotateD = -1;
        break;
    }
    if (dontFlip) {
      rotateC = -rotateC;
      rotateD = -rotateD;
    }
    var offsetCanvasX = void 0,
        offsetCanvasY = void 0;
    var width = void 0,
        height = void 0;
    if (rotateA === 0) {
      offsetCanvasX = Math.abs(centerY - viewBox[1]) * scale + offsetX;
      offsetCanvasY = Math.abs(centerX - viewBox[0]) * scale + offsetY;
      width = Math.abs(viewBox[3] - viewBox[1]) * scale;
      height = Math.abs(viewBox[2] - viewBox[0]) * scale;
    } else {
      offsetCanvasX = Math.abs(centerX - viewBox[0]) * scale + offsetX;
      offsetCanvasY = Math.abs(centerY - viewBox[1]) * scale + offsetY;
      width = Math.abs(viewBox[2] - viewBox[0]) * scale;
      height = Math.abs(viewBox[3] - viewBox[1]) * scale;
    }
    this.transform = [rotateA * scale, rotateB * scale, rotateC * scale, rotateD * scale, offsetCanvasX - rotateA * scale * centerX - rotateC * scale * centerY, offsetCanvasY - rotateB * scale * centerX - rotateD * scale * centerY];
    this.width = width;
    this.height = height;
  }

  _createClass(PageViewport, [{
    key: 'clone',
    value: function clone() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$scale = _ref4.scale,
          scale = _ref4$scale === undefined ? this.scale : _ref4$scale,
          _ref4$rotation = _ref4.rotation,
          rotation = _ref4$rotation === undefined ? this.rotation : _ref4$rotation,
          _ref4$dontFlip = _ref4.dontFlip,
          dontFlip = _ref4$dontFlip === undefined ? false : _ref4$dontFlip;

      return new PageViewport({
        viewBox: this.viewBox.slice(),
        scale: scale,
        rotation: rotation,
        offsetX: this.offsetX,
        offsetY: this.offsetY,
        dontFlip: dontFlip
      });
    }
  }, {
    key: 'convertToViewportPoint',
    value: function convertToViewportPoint(x, y) {
      return _util.Util.applyTransform([x, y], this.transform);
    }
  }, {
    key: 'convertToViewportRectangle',
    value: function convertToViewportRectangle(rect) {
      var tl = _util.Util.applyTransform([rect[0], rect[1]], this.transform);
      var br = _util.Util.applyTransform([rect[2], rect[3]], this.transform);
      return [tl[0], tl[1], br[0], br[1]];
    }
  }, {
    key: 'convertToPdfPoint',
    value: function convertToPdfPoint(x, y) {
      return _util.Util.applyInverseTransform([x, y], this.transform);
    }
  }]);

  return PageViewport;
}();

var RenderingCancelledException = function RenderingCancelledException() {
  function RenderingCancelledException(msg, type) {
    this.message = msg;
    this.type = type;
  }
  RenderingCancelledException.prototype = new Error();
  RenderingCancelledException.prototype.name = 'RenderingCancelledException';
  RenderingCancelledException.constructor = RenderingCancelledException;
  return RenderingCancelledException;
}();
var LinkTarget = {
  NONE: 0,
  SELF: 1,
  BLANK: 2,
  PARENT: 3,
  TOP: 4
};
var LinkTargetStringMap = ['', '_self', '_blank', '_parent', '_top'];
function addLinkAttributes(link) {
  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      url = _ref5.url,
      target = _ref5.target,
      rel = _ref5.rel;

  link.href = link.title = url ? (0, _util.removeNullCharacters)(url) : '';
  if (url) {
    var LinkTargetValues = Object.values(LinkTarget);
    var targetIndex = LinkTargetValues.includes(target) ? target : LinkTarget.NONE;
    link.target = LinkTargetStringMap[targetIndex];
    link.rel = typeof rel === 'string' ? rel : DEFAULT_LINK_REL;
  }
}
function getFilenameFromUrl(url) {
  var anchor = url.indexOf('#');
  var query = url.indexOf('?');
  var end = Math.min(anchor > 0 ? anchor : url.length, query > 0 ? query : url.length);
  return url.substring(url.lastIndexOf('/', end) + 1, end);
}

var StatTimer = function () {
  function StatTimer() {
    var enable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    _classCallCheck(this, StatTimer);

    this.enabled = !!enable;
    this.started = Object.create(null);
    this.times = [];
  }

  _createClass(StatTimer, [{
    key: 'time',
    value: function time(name) {
      if (!this.enabled) {
        return;
      }
      if (name in this.started) {
        (0, _util.warn)('Timer is already running for ' + name);
      }
      this.started[name] = Date.now();
    }
  }, {
    key: 'timeEnd',
    value: function timeEnd(name) {
      if (!this.enabled) {
        return;
      }
      if (!(name in this.started)) {
        (0, _util.warn)('Timer has not been started for ' + name);
      }
      this.times.push({
        'name': name,
        'start': this.started[name],
        'end': Date.now()
      });
      delete this.started[name];
    }
  }, {
    key: 'toString',
    value: function toString() {
      var times = this.times;
      var out = '',
          longest = 0;
      for (var i = 0, ii = times.length; i < ii; ++i) {
        var name = times[i]['name'];
        if (name.length > longest) {
          longest = name.length;
        }
      }
      for (var _i = 0, _ii = times.length; _i < _ii; ++_i) {
        var span = times[_i];
        var duration = span.end - span.start;
        out += span['name'].padEnd(longest) + ' ' + duration + 'ms\n';
      }
      return out;
    }
  }]);

  return StatTimer;
}();

var DummyStatTimer = function () {
  function DummyStatTimer() {
    _classCallCheck(this, DummyStatTimer);

    (0, _util.unreachable)('Cannot initialize DummyStatTimer.');
  }

  _createClass(DummyStatTimer, null, [{
    key: 'time',
    value: function time(name) {}
  }, {
    key: 'timeEnd',
    value: function timeEnd(name) {}
  }, {
    key: 'toString',
    value: function toString() {
      return '';
    }
  }]);

  return DummyStatTimer;
}();

function loadScript(src) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = function () {
      reject(new Error('Cannot load script at: ' + script.src));
    };
    (document.head || document.documentElement).appendChild(script);
  });
}
exports.PageViewport = PageViewport;
exports.RenderingCancelledException = RenderingCancelledException;
exports.addLinkAttributes = addLinkAttributes;
exports.getFilenameFromUrl = getFilenameFromUrl;
exports.LinkTarget = LinkTarget;
exports.DEFAULT_LINK_REL = DEFAULT_LINK_REL;
exports.DOMCanvasFactory = DOMCanvasFactory;
exports.DOMCMapReaderFactory = DOMCMapReaderFactory;
exports.DOMSVGFactory = DOMSVGFactory;
exports.StatTimer = StatTimer;
exports.DummyStatTimer = DummyStatTimer;
exports.loadScript = loadScript;

/***/ }),
/* 131 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FontLoader = exports.FontFaceObject = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __w_pdfjs_require__(1);

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseFontLoader = function () {
  function BaseFontLoader(docId) {
    _classCallCheck(this, BaseFontLoader);

    if (this.constructor === BaseFontLoader) {
      (0, _util.unreachable)('Cannot initialize BaseFontLoader.');
    }
    this.docId = docId;
    this.nativeFontFaces = [];
    this.styleElement = null;
    this.loadingContext = {
      requests: [],
      nextRequestId: 0
    };
  }

  _createClass(BaseFontLoader, [{
    key: 'addNativeFontFace',
    value: function addNativeFontFace(nativeFontFace) {
      this.nativeFontFaces.push(nativeFontFace);
      document.fonts.add(nativeFontFace);
    }
  }, {
    key: 'insertRule',
    value: function insertRule(rule) {
      var styleElement = this.styleElement;
      if (!styleElement) {
        styleElement = this.styleElement = document.createElement('style');
        styleElement.id = 'PDFJS_FONT_STYLE_TAG_' + this.docId;
        document.documentElement.getElementsByTagName('head')[0].appendChild(styleElement);
      }
      var styleSheet = styleElement.sheet;
      styleSheet.insertRule(rule, styleSheet.cssRules.length);
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.nativeFontFaces.forEach(function (nativeFontFace) {
        document.fonts.delete(nativeFontFace);
      });
      this.nativeFontFaces.length = 0;
      if (this.styleElement) {
        this.styleElement.remove();
        this.styleElement = null;
      }
    }
  }, {
    key: 'bind',
    value: function bind(fonts, callback) {
      var rules = [];
      var fontsToLoad = [];
      var fontLoadPromises = [];
      var getNativeFontPromise = function getNativeFontPromise(nativeFontFace) {
        return nativeFontFace.loaded.catch(function (reason) {
          (0, _util.warn)('Failed to load font "' + nativeFontFace.family + '": ' + reason);
        });
      };
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = fonts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var font = _step.value;

          if (font.attached || font.missingFile) {
            continue;
          }
          font.attached = true;
          if (this.isFontLoadingAPISupported) {
            var nativeFontFace = font.createNativeFontFace();
            if (nativeFontFace) {
              this.addNativeFontFace(nativeFontFace);
              fontLoadPromises.push(getNativeFontPromise(nativeFontFace));
            }
          } else {
            var rule = font.createFontFaceRule();
            if (rule) {
              this.insertRule(rule);
              rules.push(rule);
              fontsToLoad.push(font);
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var request = this._queueLoadingCallback(callback);
      if (this.isFontLoadingAPISupported) {
        Promise.all(fontLoadPromises).then(request.complete);
      } else if (rules.length > 0 && !this.isSyncFontLoadingSupported) {
        this._prepareFontLoadEvent(rules, fontsToLoad, request);
      } else {
        request.complete();
      }
    }
  }, {
    key: '_queueLoadingCallback',
    value: function _queueLoadingCallback(callback) {
      function completeRequest() {
        (0, _util.assert)(!request.done, 'completeRequest() cannot be called twice.');
        request.done = true;
        while (context.requests.length > 0 && context.requests[0].done) {
          var otherRequest = context.requests.shift();
          setTimeout(otherRequest.callback, 0);
        }
      }
      var context = this.loadingContext;
      var request = {
        id: 'pdfjs-font-loading-' + context.nextRequestId++,
        done: false,
        complete: completeRequest,
        callback: callback
      };
      context.requests.push(request);
      return request;
    }
  }, {
    key: '_prepareFontLoadEvent',
    value: function _prepareFontLoadEvent(rules, fontsToLoad, request) {
      (0, _util.unreachable)('Abstract method `_prepareFontLoadEvent`.');
    }
  }, {
    key: 'isFontLoadingAPISupported',
    get: function get() {
      (0, _util.unreachable)('Abstract method `isFontLoadingAPISupported`.');
    }
  }, {
    key: 'isSyncFontLoadingSupported',
    get: function get() {
      (0, _util.unreachable)('Abstract method `isSyncFontLoadingSupported`.');
    }
  }, {
    key: '_loadTestFont',
    get: function get() {
      (0, _util.unreachable)('Abstract method `_loadTestFont`.');
    }
  }]);

  return BaseFontLoader;
}();

var FontLoader = void 0;
{
  exports.FontLoader = FontLoader = function (_BaseFontLoader) {
    _inherits(GenericFontLoader, _BaseFontLoader);

    function GenericFontLoader(docId) {
      _classCallCheck(this, GenericFontLoader);

      var _this = _possibleConstructorReturn(this, (GenericFontLoader.__proto__ || Object.getPrototypeOf(GenericFontLoader)).call(this, docId));

      _this.loadTestFontId = 0;
      return _this;
    }

    _createClass(GenericFontLoader, [{
      key: '_prepareFontLoadEvent',
      value: function _prepareFontLoadEvent(rules, fonts, request) {
        function int32(data, offset) {
          return data.charCodeAt(offset) << 24 | data.charCodeAt(offset + 1) << 16 | data.charCodeAt(offset + 2) << 8 | data.charCodeAt(offset + 3) & 0xff;
        }
        function spliceString(s, offset, remove, insert) {
          var chunk1 = s.substring(0, offset);
          var chunk2 = s.substring(offset + remove);
          return chunk1 + insert + chunk2;
        }
        var i = void 0,
            ii = void 0;
        var canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        var ctx = canvas.getContext('2d');
        var called = 0;
        function isFontReady(name, callback) {
          called++;
          if (called > 30) {
            (0, _util.warn)('Load test font never loaded.');
            callback();
            return;
          }
          ctx.font = '30px ' + name;
          ctx.fillText('.', 0, 20);
          var imageData = ctx.getImageData(0, 0, 1, 1);
          if (imageData.data[3] > 0) {
            callback();
            return;
          }
          setTimeout(isFontReady.bind(null, name, callback));
        }
        var loadTestFontId = 'lt' + Date.now() + this.loadTestFontId++;
        var data = this._loadTestFont;
        var COMMENT_OFFSET = 976;
        data = spliceString(data, COMMENT_OFFSET, loadTestFontId.length, loadTestFontId);
        var CFF_CHECKSUM_OFFSET = 16;
        var XXXX_VALUE = 0x58585858;
        var checksum = int32(data, CFF_CHECKSUM_OFFSET);
        for (i = 0, ii = loadTestFontId.length - 3; i < ii; i += 4) {
          checksum = checksum - XXXX_VALUE + int32(loadTestFontId, i) | 0;
        }
        if (i < loadTestFontId.length) {
          checksum = checksum - XXXX_VALUE + int32(loadTestFontId + 'XXX', i) | 0;
        }
        data = spliceString(data, CFF_CHECKSUM_OFFSET, 4, (0, _util.string32)(checksum));
        var url = 'url(data:font/opentype;base64,' + btoa(data) + ');';
        var rule = '@font-face {font-family:"' + loadTestFontId + '";src:' + url + '}';
        this.insertRule(rule);
        var names = [];
        for (i = 0, ii = fonts.length; i < ii; i++) {
          names.push(fonts[i].loadedName);
        }
        names.push(loadTestFontId);
        var div = document.createElement('div');
        div.setAttribute('style', 'visibility: hidden;' + 'width: 10px; height: 10px;' + 'position: absolute; top: 0px; left: 0px;');
        for (i = 0, ii = names.length; i < ii; ++i) {
          var span = document.createElement('span');
          span.textContent = 'Hi';
          span.style.fontFamily = names[i];
          div.appendChild(span);
        }
        document.body.appendChild(div);
        isFontReady(loadTestFontId, function () {
          document.body.removeChild(div);
          request.complete();
        });
      }
    }, {
      key: 'isFontLoadingAPISupported',
      get: function get() {
        var supported = typeof document !== 'undefined' && !!document.fonts;
        if (supported && typeof navigator !== 'undefined') {
          var m = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);
          if (m && m[1] < 63) {
            supported = false;
          }
        }
        return (0, _util.shadow)(this, 'isFontLoadingAPISupported', supported);
      }
    }, {
      key: 'isSyncFontLoadingSupported',
      get: function get() {
        var supported = false;
        if (typeof navigator === 'undefined') {
          supported = true;
        } else {
          var m = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);
          if (m && m[1] >= 14) {
            supported = true;
          }
        }
        return (0, _util.shadow)(this, 'isSyncFontLoadingSupported', supported);
      }
    }, {
      key: '_loadTestFont',
      get: function get() {
        var getLoadTestFont = function getLoadTestFont() {
          return atob('T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQA' + 'FQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAA' + 'ALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgA' + 'AAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1' + 'AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD' + '6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACM' + 'AooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4D' + 'IP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAA' + 'AAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUA' + 'AQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgAB' + 'AAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABY' + 'AAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAA' + 'AC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' + 'AAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAA' + 'AAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQAC' + 'AQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3' + 'Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTj' + 'FQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==');
        };
        return (0, _util.shadow)(this, '_loadTestFont', getLoadTestFont());
      }
    }]);

    return GenericFontLoader;
  }(BaseFontLoader);
}
var IsEvalSupportedCached = {
  get value() {
    return (0, _util.shadow)(this, 'value', (0, _util.isEvalSupported)());
  }
};

var FontFaceObject = function () {
  function FontFaceObject(translatedData, _ref) {
    var _ref$isEvalSupported = _ref.isEvalSupported,
        isEvalSupported = _ref$isEvalSupported === undefined ? true : _ref$isEvalSupported,
        _ref$disableFontFace = _ref.disableFontFace,
        disableFontFace = _ref$disableFontFace === undefined ? false : _ref$disableFontFace,
        _ref$ignoreErrors = _ref.ignoreErrors,
        ignoreErrors = _ref$ignoreErrors === undefined ? false : _ref$ignoreErrors,
        _ref$onUnsupportedFea = _ref.onUnsupportedFeature,
        onUnsupportedFeature = _ref$onUnsupportedFea === undefined ? null : _ref$onUnsupportedFea,
        _ref$fontRegistry = _ref.fontRegistry,
        fontRegistry = _ref$fontRegistry === undefined ? null : _ref$fontRegistry;

    _classCallCheck(this, FontFaceObject);

    this.compiledGlyphs = Object.create(null);
    for (var i in translatedData) {
      this[i] = translatedData[i];
    }
    this.isEvalSupported = isEvalSupported !== false;
    this.disableFontFace = disableFontFace === true;
    this.ignoreErrors = ignoreErrors === true;
    this._onUnsupportedFeature = onUnsupportedFeature;
    this.fontRegistry = fontRegistry;
  }

  _createClass(FontFaceObject, [{
    key: 'createNativeFontFace',
    value: function createNativeFontFace() {
      if (!this.data || this.disableFontFace) {
        return null;
      }
      var nativeFontFace = new FontFace(this.loadedName, this.data, {});
      if (this.fontRegistry) {
        this.fontRegistry.registerFont(this);
      }
      return nativeFontFace;
    }
  }, {
    key: 'createFontFaceRule',
    value: function createFontFaceRule() {
      if (!this.data || this.disableFontFace) {
        return null;
      }
      var data = (0, _util.bytesToString)(new Uint8Array(this.data));
      var url = 'url(data:' + this.mimetype + ';base64,' + btoa(data) + ');';
      var rule = '@font-face {font-family:"' + this.loadedName + '";src:' + url + '}';
      if (this.fontRegistry) {
        this.fontRegistry.registerFont(this, url);
      }
      return rule;
    }
  }, {
    key: 'getPathGenerator',
    value: function getPathGenerator(objs, character) {
      if (this.compiledGlyphs[character] !== undefined) {
        return this.compiledGlyphs[character];
      }
      var cmds = void 0,
          current = void 0;
      try {
        cmds = objs.get(this.loadedName + '_path_' + character);
      } catch (ex) {
        if (!this.ignoreErrors) {
          throw ex;
        }
        if (this._onUnsupportedFeature) {
          this._onUnsupportedFeature({ featureId: _util.UNSUPPORTED_FEATURES.font });
        }
        (0, _util.warn)('getPathGenerator - ignoring character: "' + ex + '".');
        return this.compiledGlyphs[character] = function (c, size) {};
      }
      if (this.isEvalSupported && IsEvalSupportedCached.value) {
        var args = void 0,
            js = '';
        for (var i = 0, ii = cmds.length; i < ii; i++) {
          current = cmds[i];
          if (current.args !== undefined) {
            args = current.args.join(',');
          } else {
            args = '';
          }
          js += 'c.' + current.cmd + '(' + args + ');\n';
        }
        return this.compiledGlyphs[character] = new Function('c', 'size', js);
      }
      return this.compiledGlyphs[character] = function (c, size) {
        for (var _i = 0, _ii = cmds.length; _i < _ii; _i++) {
          current = cmds[_i];
          if (current.cmd === 'scale') {
            current.args = [size, -size];
          }
          c[current.cmd].apply(c, current.args);
        }
      };
    }
  }]);

  return FontFaceObject;
}();

exports.FontFaceObject = FontFaceObject;
exports.FontLoader = FontLoader;

/***/ }),
/* 132 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var compatibilityParams = Object.create(null);
{
  var isNodeJS = __w_pdfjs_require__(4);
  var userAgent = typeof navigator !== 'undefined' && navigator.userAgent || '';
  var isIE = /Trident/.test(userAgent);
  var isIOSChrome = /CriOS/.test(userAgent);
  (function checkOnBlobSupport() {
    if (isIE || isIOSChrome) {
      compatibilityParams.disableCreateObjectURL = true;
    }
  })();
  (function checkFontFaceAndImage() {
    if (isNodeJS()) {
      compatibilityParams.disableFontFace = true;
      compatibilityParams.nativeImageDecoderSupport = 'none';
    }
  })();
}
exports.apiCompatibilityParams = Object.freeze(compatibilityParams);

/***/ }),
/* 133 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CanvasGraphics = undefined;

var _util = __w_pdfjs_require__(1);

var _pattern_helper = __w_pdfjs_require__(134);

var MIN_FONT_SIZE = 16;
var MAX_FONT_SIZE = 100;
var MAX_GROUP_SIZE = 4096;
var MIN_WIDTH_FACTOR = 0.65;
var COMPILE_TYPE3_GLYPHS = true;
var MAX_SIZE_TO_COMPILE = 1000;
var FULL_CHUNK_HEIGHT = 16;
var IsLittleEndianCached = {
  get value() {
    return (0, _util.shadow)(IsLittleEndianCached, 'value', (0, _util.isLittleEndian)());
  }
};
function addContextCurrentTransform(ctx) {
  if (!ctx.mozCurrentTransform) {
    ctx._originalSave = ctx.save;
    ctx._originalRestore = ctx.restore;
    ctx._originalRotate = ctx.rotate;
    ctx._originalScale = ctx.scale;
    ctx._originalTranslate = ctx.translate;
    ctx._originalTransform = ctx.transform;
    ctx._originalSetTransform = ctx.setTransform;
    ctx._transformMatrix = ctx._transformMatrix || [1, 0, 0, 1, 0, 0];
    ctx._transformStack = [];
    Object.defineProperty(ctx, 'mozCurrentTransform', {
      get: function getCurrentTransform() {
        return this._transformMatrix;
      }
    });
    Object.defineProperty(ctx, 'mozCurrentTransformInverse', {
      get: function getCurrentTransformInverse() {
        var m = this._transformMatrix;
        var a = m[0],
            b = m[1],
            c = m[2],
            d = m[3],
            e = m[4],
            f = m[5];
        var ad_bc = a * d - b * c;
        var bc_ad = b * c - a * d;
        return [d / ad_bc, b / bc_ad, c / bc_ad, a / ad_bc, (d * e - c * f) / bc_ad, (b * e - a * f) / ad_bc];
      }
    });
    ctx.save = function ctxSave() {
      var old = this._transformMatrix;
      this._transformStack.push(old);
      this._transformMatrix = old.slice(0, 6);
      this._originalSave();
    };
    ctx.restore = function ctxRestore() {
      var prev = this._transformStack.pop();
      if (prev) {
        this._transformMatrix = prev;
        this._originalRestore();
      }
    };
    ctx.translate = function ctxTranslate(x, y) {
      var m = this._transformMatrix;
      m[4] = m[0] * x + m[2] * y + m[4];
      m[5] = m[1] * x + m[3] * y + m[5];
      this._originalTranslate(x, y);
    };
    ctx.scale = function ctxScale(x, y) {
      var m = this._transformMatrix;
      m[0] = m[0] * x;
      m[1] = m[1] * x;
      m[2] = m[2] * y;
      m[3] = m[3] * y;
      this._originalScale(x, y);
    };
    ctx.transform = function ctxTransform(a, b, c, d, e, f) {
      var m = this._transformMatrix;
      this._transformMatrix = [m[0] * a + m[2] * b, m[1] * a + m[3] * b, m[0] * c + m[2] * d, m[1] * c + m[3] * d, m[0] * e + m[2] * f + m[4], m[1] * e + m[3] * f + m[5]];
      ctx._originalTransform(a, b, c, d, e, f);
    };
    ctx.setTransform = function ctxSetTransform(a, b, c, d, e, f) {
      this._transformMatrix = [a, b, c, d, e, f];
      ctx._originalSetTransform(a, b, c, d, e, f);
    };
    ctx.rotate = function ctxRotate(angle) {
      var cosValue = Math.cos(angle);
      var sinValue = Math.sin(angle);
      var m = this._transformMatrix;
      this._transformMatrix = [m[0] * cosValue + m[2] * sinValue, m[1] * cosValue + m[3] * sinValue, m[0] * -sinValue + m[2] * cosValue, m[1] * -sinValue + m[3] * cosValue, m[4], m[5]];
      this._originalRotate(angle);
    };
  }
}
var CachedCanvases = function CachedCanvasesClosure() {
  function CachedCanvases(canvasFactory) {
    this.canvasFactory = canvasFactory;
    this.cache = Object.create(null);
  }
  CachedCanvases.prototype = {
    getCanvas: function CachedCanvases_getCanvas(id, width, height, trackTransform) {
      var canvasEntry;
      if (this.cache[id] !== undefined) {
        canvasEntry = this.cache[id];
        this.canvasFactory.reset(canvasEntry, width, height);
        canvasEntry.context.setTransform(1, 0, 0, 1, 0, 0);
      } else {
        canvasEntry = this.canvasFactory.create(width, height);
        this.cache[id] = canvasEntry;
      }
      if (trackTransform) {
        addContextCurrentTransform(canvasEntry.context);
      }
      return canvasEntry;
    },
    clear: function clear() {
      for (var id in this.cache) {
        var canvasEntry = this.cache[id];
        this.canvasFactory.destroy(canvasEntry);
        delete this.cache[id];
      }
    }
  };
  return CachedCanvases;
}();
function compileType3Glyph(imgData) {
  var POINT_TO_PROCESS_LIMIT = 1000;
  var width = imgData.width,
      height = imgData.height;
  var i,
      j,
      j0,
      width1 = width + 1;
  var points = new Uint8Array(width1 * (height + 1));
  var POINT_TYPES = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]);
  var lineSize = width + 7 & ~7,
      data0 = imgData.data;
  var data = new Uint8Array(lineSize * height),
      pos = 0,
      ii;
  for (i = 0, ii = data0.length; i < ii; i++) {
    var mask = 128,
        elem = data0[i];
    while (mask > 0) {
      data[pos++] = elem & mask ? 0 : 255;
      mask >>= 1;
    }
  }
  var count = 0;
  pos = 0;
  if (data[pos] !== 0) {
    points[0] = 1;
    ++count;
  }
  for (j = 1; j < width; j++) {
    if (data[pos] !== data[pos + 1]) {
      points[j] = data[pos] ? 2 : 1;
      ++count;
    }
    pos++;
  }
  if (data[pos] !== 0) {
    points[j] = 2;
    ++count;
  }
  for (i = 1; i < height; i++) {
    pos = i * lineSize;
    j0 = i * width1;
    if (data[pos - lineSize] !== data[pos]) {
      points[j0] = data[pos] ? 1 : 8;
      ++count;
    }
    var sum = (data[pos] ? 4 : 0) + (data[pos - lineSize] ? 8 : 0);
    for (j = 1; j < width; j++) {
      sum = (sum >> 2) + (data[pos + 1] ? 4 : 0) + (data[pos - lineSize + 1] ? 8 : 0);
      if (POINT_TYPES[sum]) {
        points[j0 + j] = POINT_TYPES[sum];
        ++count;
      }
      pos++;
    }
    if (data[pos - lineSize] !== data[pos]) {
      points[j0 + j] = data[pos] ? 2 : 4;
      ++count;
    }
    if (count > POINT_TO_PROCESS_LIMIT) {
      return null;
    }
  }
  pos = lineSize * (height - 1);
  j0 = i * width1;
  if (data[pos] !== 0) {
    points[j0] = 8;
    ++count;
  }
  for (j = 1; j < width; j++) {
    if (data[pos] !== data[pos + 1]) {
      points[j0 + j] = data[pos] ? 4 : 8;
      ++count;
    }
    pos++;
  }
  if (data[pos] !== 0) {
    points[j0 + j] = 4;
    ++count;
  }
  if (count > POINT_TO_PROCESS_LIMIT) {
    return null;
  }
  var steps = new Int32Array([0, width1, -1, 0, -width1, 0, 0, 0, 1]);
  var outlines = [];
  for (i = 0; count && i <= height; i++) {
    var p = i * width1;
    var end = p + width;
    while (p < end && !points[p]) {
      p++;
    }
    if (p === end) {
      continue;
    }
    var coords = [p % width1, i];
    var type = points[p],
        p0 = p,
        pp;
    do {
      var step = steps[type];
      do {
        p += step;
      } while (!points[p]);
      pp = points[p];
      if (pp !== 5 && pp !== 10) {
        type = pp;
        points[p] = 0;
      } else {
        type = pp & 0x33 * type >> 4;
        points[p] &= type >> 2 | type << 2;
      }
      coords.push(p % width1);
      coords.push(p / width1 | 0);
      --count;
    } while (p0 !== p);
    outlines.push(coords);
    --i;
  }
  var drawOutline = function drawOutline(c) {
    c.save();
    c.scale(1 / width, -1 / height);
    c.translate(0, -height);
    c.beginPath();
    for (var i = 0, ii = outlines.length; i < ii; i++) {
      var o = outlines[i];
      c.moveTo(o[0], o[1]);
      for (var j = 2, jj = o.length; j < jj; j += 2) {
        c.lineTo(o[j], o[j + 1]);
      }
    }
    c.fill();
    c.beginPath();
    c.restore();
  };
  return drawOutline;
}
var CanvasExtraState = function CanvasExtraStateClosure() {
  function CanvasExtraState() {
    this.alphaIsShape = false;
    this.fontSize = 0;
    this.fontSizeScale = 1;
    this.textMatrix = _util.IDENTITY_MATRIX;
    this.textMatrixScale = 1;
    this.fontMatrix = _util.FONT_IDENTITY_MATRIX;
    this.leading = 0;
    this.x = 0;
    this.y = 0;
    this.lineX = 0;
    this.lineY = 0;
    this.charSpacing = 0;
    this.wordSpacing = 0;
    this.textHScale = 1;
    this.textRenderingMode = _util.TextRenderingMode.FILL;
    this.textRise = 0;
    this.fillColor = '#000000';
    this.strokeColor = '#000000';
    this.patternFill = false;
    this.fillAlpha = 1;
    this.strokeAlpha = 1;
    this.lineWidth = 1;
    this.activeSMask = null;
    this.resumeSMaskCtx = null;
  }
  CanvasExtraState.prototype = {
    clone: function CanvasExtraState_clone() {
      return Object.create(this);
    },
    setCurrentPoint: function CanvasExtraState_setCurrentPoint(x, y) {
      this.x = x;
      this.y = y;
    }
  };
  return CanvasExtraState;
}();
var CanvasGraphics = function CanvasGraphicsClosure() {
  var EXECUTION_TIME = 15;
  var EXECUTION_STEPS = 10;
  function CanvasGraphics(canvasCtx, commonObjs, objs, canvasFactory, webGLContext, imageLayer) {
    this.ctx = canvasCtx;
    this.current = new CanvasExtraState();
    this.stateStack = [];
    this.pendingClip = null;
    this.pendingEOFill = false;
    this.res = null;
    this.xobjs = null;
    this.commonObjs = commonObjs;
    this.objs = objs;
    this.canvasFactory = canvasFactory;
    this.webGLContext = webGLContext;
    this.imageLayer = imageLayer;
    this.groupStack = [];
    this.processingType3 = null;
    this.baseTransform = null;
    this.baseTransformStack = [];
    this.groupLevel = 0;
    this.smaskStack = [];
    this.smaskCounter = 0;
    this.tempSMask = null;
    this.cachedCanvases = new CachedCanvases(this.canvasFactory);
    if (canvasCtx) {
      addContextCurrentTransform(canvasCtx);
    }
    this._cachedGetSinglePixelWidth = null;
  }
  function putBinaryImageData(ctx, imgData) {
    if (typeof ImageData !== 'undefined' && imgData instanceof ImageData) {
      ctx.putImageData(imgData, 0, 0);
      return;
    }
    var height = imgData.height,
        width = imgData.width;
    var partialChunkHeight = height % FULL_CHUNK_HEIGHT;
    var fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
    var totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
    var chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
    var srcPos = 0,
        destPos;
    var src = imgData.data;
    var dest = chunkImgData.data;
    var i, j, thisChunkHeight, elemsInThisChunk;
    if (imgData.kind === _util.ImageKind.GRAYSCALE_1BPP) {
      var srcLength = src.byteLength;
      var dest32 = new Uint32Array(dest.buffer, 0, dest.byteLength >> 2);
      var dest32DataLength = dest32.length;
      var fullSrcDiff = width + 7 >> 3;
      var white = 0xFFFFFFFF;
      var black = IsLittleEndianCached.value ? 0xFF000000 : 0x000000FF;
      for (i = 0; i < totalChunks; i++) {
        thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
        destPos = 0;
        for (j = 0; j < thisChunkHeight; j++) {
          var srcDiff = srcLength - srcPos;
          var k = 0;
          var kEnd = srcDiff > fullSrcDiff ? width : srcDiff * 8 - 7;
          var kEndUnrolled = kEnd & ~7;
          var mask = 0;
          var srcByte = 0;
          for (; k < kEndUnrolled; k += 8) {
            srcByte = src[srcPos++];
            dest32[destPos++] = srcByte & 128 ? white : black;
            dest32[destPos++] = srcByte & 64 ? white : black;
            dest32[destPos++] = srcByte & 32 ? white : black;
            dest32[destPos++] = srcByte & 16 ? white : black;
            dest32[destPos++] = srcByte & 8 ? white : black;
            dest32[destPos++] = srcByte & 4 ? white : black;
            dest32[destPos++] = srcByte & 2 ? white : black;
            dest32[destPos++] = srcByte & 1 ? white : black;
          }
          for (; k < kEnd; k++) {
            if (mask === 0) {
              srcByte = src[srcPos++];
              mask = 128;
            }
            dest32[destPos++] = srcByte & mask ? white : black;
            mask >>= 1;
          }
        }
        while (destPos < dest32DataLength) {
          dest32[destPos++] = 0;
        }
        ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
      }
    } else if (imgData.kind === _util.ImageKind.RGBA_32BPP) {
      j = 0;
      elemsInThisChunk = width * FULL_CHUNK_HEIGHT * 4;
      for (i = 0; i < fullChunks; i++) {
        dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
        srcPos += elemsInThisChunk;
        ctx.putImageData(chunkImgData, 0, j);
        j += FULL_CHUNK_HEIGHT;
      }
      if (i < totalChunks) {
        elemsInThisChunk = width * partialChunkHeight * 4;
        dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
        ctx.putImageData(chunkImgData, 0, j);
      }
    } else if (imgData.kind === _util.ImageKind.RGB_24BPP) {
      thisChunkHeight = FULL_CHUNK_HEIGHT;
      elemsInThisChunk = width * thisChunkHeight;
      for (i = 0; i < totalChunks; i++) {
        if (i >= fullChunks) {
          thisChunkHeight = partialChunkHeight;
          elemsInThisChunk = width * thisChunkHeight;
        }
        destPos = 0;
        for (j = elemsInThisChunk; j--;) {
          dest[destPos++] = src[srcPos++];
          dest[destPos++] = src[srcPos++];
          dest[destPos++] = src[srcPos++];
          dest[destPos++] = 255;
        }
        ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
      }
    } else {
      throw new Error('bad image kind: ' + imgData.kind);
    }
  }
  function putBinaryImageMask(ctx, imgData) {
    var height = imgData.height,
        width = imgData.width;
    var partialChunkHeight = height % FULL_CHUNK_HEIGHT;
    var fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
    var totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
    var chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
    var srcPos = 0;
    var src = imgData.data;
    var dest = chunkImgData.data;
    for (var i = 0; i < totalChunks; i++) {
      var thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
      var destPos = 3;
      for (var j = 0; j < thisChunkHeight; j++) {
        var mask = 0;
        for (var k = 0; k < width; k++) {
          if (!mask) {
            var elem = src[srcPos++];
            mask = 128;
          }
          dest[destPos] = elem & mask ? 0 : 255;
          destPos += 4;
          mask >>= 1;
        }
      }
      ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
    }
  }
  function copyCtxState(sourceCtx, destCtx) {
    var properties = ['strokeStyle', 'fillStyle', 'fillRule', 'globalAlpha', 'lineWidth', 'lineCap', 'lineJoin', 'miterLimit', 'globalCompositeOperation', 'font'];
    for (var i = 0, ii = properties.length; i < ii; i++) {
      var property = properties[i];
      if (sourceCtx[property] !== undefined) {
        destCtx[property] = sourceCtx[property];
      }
    }
    if (sourceCtx.setLineDash !== undefined) {
      destCtx.setLineDash(sourceCtx.getLineDash());
      destCtx.lineDashOffset = sourceCtx.lineDashOffset;
    }
  }
  function resetCtxToDefault(ctx) {
    ctx.strokeStyle = '#000000';
    ctx.fillStyle = '#000000';
    ctx.fillRule = 'nonzero';
    ctx.globalAlpha = 1;
    ctx.lineWidth = 1;
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.miterLimit = 10;
    ctx.globalCompositeOperation = 'source-over';
    ctx.font = '10px sans-serif';
    if (ctx.setLineDash !== undefined) {
      ctx.setLineDash([]);
      ctx.lineDashOffset = 0;
    }
  }
  function composeSMaskBackdrop(bytes, r0, g0, b0) {
    var length = bytes.length;
    for (var i = 3; i < length; i += 4) {
      var alpha = bytes[i];
      if (alpha === 0) {
        bytes[i - 3] = r0;
        bytes[i - 2] = g0;
        bytes[i - 1] = b0;
      } else if (alpha < 255) {
        var alpha_ = 255 - alpha;
        bytes[i - 3] = bytes[i - 3] * alpha + r0 * alpha_ >> 8;
        bytes[i - 2] = bytes[i - 2] * alpha + g0 * alpha_ >> 8;
        bytes[i - 1] = bytes[i - 1] * alpha + b0 * alpha_ >> 8;
      }
    }
  }
  function composeSMaskAlpha(maskData, layerData, transferMap) {
    var length = maskData.length;
    var scale = 1 / 255;
    for (var i = 3; i < length; i += 4) {
      var alpha = transferMap ? transferMap[maskData[i]] : maskData[i];
      layerData[i] = layerData[i] * alpha * scale | 0;
    }
  }
  function composeSMaskLuminosity(maskData, layerData, transferMap) {
    var length = maskData.length;
    for (var i = 3; i < length; i += 4) {
      var y = maskData[i - 3] * 77 + maskData[i - 2] * 152 + maskData[i - 1] * 28;
      layerData[i] = transferMap ? layerData[i] * transferMap[y >> 8] >> 8 : layerData[i] * y >> 16;
    }
  }
  function genericComposeSMask(maskCtx, layerCtx, width, height, subtype, backdrop, transferMap) {
    var hasBackdrop = !!backdrop;
    var r0 = hasBackdrop ? backdrop[0] : 0;
    var g0 = hasBackdrop ? backdrop[1] : 0;
    var b0 = hasBackdrop ? backdrop[2] : 0;
    var composeFn;
    if (subtype === 'Luminosity') {
      composeFn = composeSMaskLuminosity;
    } else {
      composeFn = composeSMaskAlpha;
    }
    var PIXELS_TO_PROCESS = 1048576;
    var chunkSize = Math.min(height, Math.ceil(PIXELS_TO_PROCESS / width));
    for (var row = 0; row < height; row += chunkSize) {
      var chunkHeight = Math.min(chunkSize, height - row);
      var maskData = maskCtx.getImageData(0, row, width, chunkHeight);
      var layerData = layerCtx.getImageData(0, row, width, chunkHeight);
      if (hasBackdrop) {
        composeSMaskBackdrop(maskData.data, r0, g0, b0);
      }
      composeFn(maskData.data, layerData.data, transferMap);
      maskCtx.putImageData(layerData, 0, row);
    }
  }
  function composeSMask(ctx, smask, layerCtx, webGLContext) {
    var mask = smask.canvas;
    var maskCtx = smask.context;
    ctx.setTransform(smask.scaleX, 0, 0, smask.scaleY, smask.offsetX, smask.offsetY);
    var backdrop = smask.backdrop || null;
    if (!smask.transferMap && webGLContext.isEnabled) {
      var composed = webGLContext.composeSMask({
        layer: layerCtx.canvas,
        mask: mask,
        properties: {
          subtype: smask.subtype,
          backdrop: backdrop
        }
      });
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.drawImage(composed, smask.offsetX, smask.offsetY);
      return;
    }
    genericComposeSMask(maskCtx, layerCtx, mask.width, mask.height, smask.subtype, backdrop, smask.transferMap);
    ctx.drawImage(mask, 0, 0);
  }
  var LINE_CAP_STYLES = ['butt', 'round', 'square'];
  var LINE_JOIN_STYLES = ['miter', 'round', 'bevel'];
  var NORMAL_CLIP = {};
  var EO_CLIP = {};
  CanvasGraphics.prototype = {
    beginDrawing: function beginDrawing(_ref) {
      var transform = _ref.transform,
          viewport = _ref.viewport,
          transparency = _ref.transparency,
          _ref$background = _ref.background,
          background = _ref$background === undefined ? null : _ref$background;

      var width = this.ctx.canvas.width;
      var height = this.ctx.canvas.height;
      this.ctx.save();
      this.ctx.fillStyle = background || 'rgb(255, 255, 255)';
      this.ctx.fillRect(0, 0, width, height);
      this.ctx.restore();
      if (transparency) {
        var transparentCanvas = this.cachedCanvases.getCanvas('transparent', width, height, true);
        this.compositeCtx = this.ctx;
        this.transparentCanvas = transparentCanvas.canvas;
        this.ctx = transparentCanvas.context;
        this.ctx.save();
        this.ctx.transform.apply(this.ctx, this.compositeCtx.mozCurrentTransform);
      }
      this.ctx.save();
      resetCtxToDefault(this.ctx);
      if (transform) {
        this.ctx.transform.apply(this.ctx, transform);
      }
      this.ctx.transform.apply(this.ctx, viewport.transform);
      this.baseTransform = this.ctx.mozCurrentTransform.slice();
      if (this.imageLayer) {
        this.imageLayer.beginLayout();
      }
    },

    executeOperatorList: function CanvasGraphics_executeOperatorList(operatorList, executionStartIdx, continueCallback, stepper) {
      var argsArray = operatorList.argsArray;
      var fnArray = operatorList.fnArray;
      var i = executionStartIdx || 0;
      var argsArrayLen = argsArray.length;
      if (argsArrayLen === i) {
        return i;
      }
      var chunkOperations = argsArrayLen - i > EXECUTION_STEPS && typeof continueCallback === 'function';
      var endTime = chunkOperations ? Date.now() + EXECUTION_TIME : 0;
      var steps = 0;
      var commonObjs = this.commonObjs;
      var objs = this.objs;
      var fnId;
      while (true) {
        if (stepper !== undefined && i === stepper.nextBreakPoint) {
          stepper.breakIt(i, continueCallback);
          return i;
        }
        fnId = fnArray[i];
        if (fnId !== _util.OPS.dependency) {
          this[fnId].apply(this, argsArray[i]);
        } else {
          var deps = argsArray[i];
          for (var n = 0, nn = deps.length; n < nn; n++) {
            var depObjId = deps[n];
            var common = depObjId[0] === 'g' && depObjId[1] === '_';
            var objsPool = common ? commonObjs : objs;
            if (!objsPool.isResolved(depObjId)) {
              objsPool.get(depObjId, continueCallback);
              return i;
            }
          }
        }
        i++;
        if (i === argsArrayLen) {
          return i;
        }
        if (chunkOperations && ++steps > EXECUTION_STEPS) {
          if (Date.now() > endTime) {
            continueCallback();
            return i;
          }
          steps = 0;
        }
      }
    },
    endDrawing: function CanvasGraphics_endDrawing() {
      if (this.current.activeSMask !== null) {
        this.endSMaskGroup();
      }
      this.ctx.restore();
      if (this.transparentCanvas) {
        this.ctx = this.compositeCtx;
        this.ctx.save();
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.drawImage(this.transparentCanvas, 0, 0);
        this.ctx.restore();
        this.transparentCanvas = null;
      }
      this.cachedCanvases.clear();
      this.webGLContext.clear();
      if (this.imageLayer) {
        this.imageLayer.endLayout();
      }
    },
    setLineWidth: function CanvasGraphics_setLineWidth(width) {
      this.current.lineWidth = width;
      this.ctx.lineWidth = width;
    },
    setLineCap: function CanvasGraphics_setLineCap(style) {
      this.ctx.lineCap = LINE_CAP_STYLES[style];
    },
    setLineJoin: function CanvasGraphics_setLineJoin(style) {
      this.ctx.lineJoin = LINE_JOIN_STYLES[style];
    },
    setMiterLimit: function CanvasGraphics_setMiterLimit(limit) {
      this.ctx.miterLimit = limit;
    },
    setDash: function CanvasGraphics_setDash(dashArray, dashPhase) {
      var ctx = this.ctx;
      if (ctx.setLineDash !== undefined) {
        ctx.setLineDash(dashArray);
        ctx.lineDashOffset = dashPhase;
      }
    },
    setRenderingIntent: function CanvasGraphics_setRenderingIntent(intent) {},
    setFlatness: function CanvasGraphics_setFlatness(flatness) {},
    setGState: function CanvasGraphics_setGState(states) {
      for (var i = 0, ii = states.length; i < ii; i++) {
        var state = states[i];
        var key = state[0];
        var value = state[1];
        switch (key) {
          case 'LW':
            this.setLineWidth(value);
            break;
          case 'LC':
            this.setLineCap(value);
            break;
          case 'LJ':
            this.setLineJoin(value);
            break;
          case 'ML':
            this.setMiterLimit(value);
            break;
          case 'D':
            this.setDash(value[0], value[1]);
            break;
          case 'RI':
            this.setRenderingIntent(value);
            break;
          case 'FL':
            this.setFlatness(value);
            break;
          case 'Font':
            this.setFont(value[0], value[1]);
            break;
          case 'CA':
            this.current.strokeAlpha = state[1];
            break;
          case 'ca':
            this.current.fillAlpha = state[1];
            this.ctx.globalAlpha = state[1];
            break;
          case 'BM':
            this.ctx.globalCompositeOperation = value;
            break;
          case 'SMask':
            if (this.current.activeSMask) {
              if (this.stateStack.length > 0 && this.stateStack[this.stateStack.length - 1].activeSMask === this.current.activeSMask) {
                this.suspendSMaskGroup();
              } else {
                this.endSMaskGroup();
              }
            }
            this.current.activeSMask = value ? this.tempSMask : null;
            if (this.current.activeSMask) {
              this.beginSMaskGroup();
            }
            this.tempSMask = null;
            break;
        }
      }
    },
    beginSMaskGroup: function CanvasGraphics_beginSMaskGroup() {
      var activeSMask = this.current.activeSMask;
      var drawnWidth = activeSMask.canvas.width;
      var drawnHeight = activeSMask.canvas.height;
      var cacheId = 'smaskGroupAt' + this.groupLevel;
      var scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight, true);
      var currentCtx = this.ctx;
      var currentTransform = currentCtx.mozCurrentTransform;
      this.ctx.save();
      var groupCtx = scratchCanvas.context;
      groupCtx.scale(1 / activeSMask.scaleX, 1 / activeSMask.scaleY);
      groupCtx.translate(-activeSMask.offsetX, -activeSMask.offsetY);
      groupCtx.transform.apply(groupCtx, currentTransform);
      activeSMask.startTransformInverse = groupCtx.mozCurrentTransformInverse;
      copyCtxState(currentCtx, groupCtx);
      this.ctx = groupCtx;
      this.setGState([['BM', 'source-over'], ['ca', 1], ['CA', 1]]);
      this.groupStack.push(currentCtx);
      this.groupLevel++;
    },
    suspendSMaskGroup: function CanvasGraphics_endSMaskGroup() {
      var groupCtx = this.ctx;
      this.groupLevel--;
      this.ctx = this.groupStack.pop();
      composeSMask(this.ctx, this.current.activeSMask, groupCtx, this.webGLContext);
      this.ctx.restore();
      this.ctx.save();
      copyCtxState(groupCtx, this.ctx);
      this.current.resumeSMaskCtx = groupCtx;
      var deltaTransform = _util.Util.transform(this.current.activeSMask.startTransformInverse, groupCtx.mozCurrentTransform);
      this.ctx.transform.apply(this.ctx, deltaTransform);
      groupCtx.save();
      groupCtx.setTransform(1, 0, 0, 1, 0, 0);
      groupCtx.clearRect(0, 0, groupCtx.canvas.width, groupCtx.canvas.height);
      groupCtx.restore();
    },
    resumeSMaskGroup: function CanvasGraphics_endSMaskGroup() {
      var groupCtx = this.current.resumeSMaskCtx;
      var currentCtx = this.ctx;
      this.ctx = groupCtx;
      this.groupStack.push(currentCtx);
      this.groupLevel++;
    },
    endSMaskGroup: function CanvasGraphics_endSMaskGroup() {
      var groupCtx = this.ctx;
      this.groupLevel--;
      this.ctx = this.groupStack.pop();
      composeSMask(this.ctx, this.current.activeSMask, groupCtx, this.webGLContext);
      this.ctx.restore();
      copyCtxState(groupCtx, this.ctx);
      var deltaTransform = _util.Util.transform(this.current.activeSMask.startTransformInverse, groupCtx.mozCurrentTransform);
      this.ctx.transform.apply(this.ctx, deltaTransform);
    },
    save: function CanvasGraphics_save() {
      this.ctx.save();
      var old = this.current;
      this.stateStack.push(old);
      this.current = old.clone();
      this.current.resumeSMaskCtx = null;
    },
    restore: function CanvasGraphics_restore() {
      if (this.current.resumeSMaskCtx) {
        this.resumeSMaskGroup();
      }
      if (this.current.activeSMask !== null && (this.stateStack.length === 0 || this.stateStack[this.stateStack.length - 1].activeSMask !== this.current.activeSMask)) {
        this.endSMaskGroup();
      }
      if (this.stateStack.length !== 0) {
        this.current = this.stateStack.pop();
        this.ctx.restore();
        this.pendingClip = null;
        this._cachedGetSinglePixelWidth = null;
      }
    },
    transform: function CanvasGraphics_transform(a, b, c, d, e, f) {
      this.ctx.transform(a, b, c, d, e, f);
      this._cachedGetSinglePixelWidth = null;
    },
    constructPath: function CanvasGraphics_constructPath(ops, args) {
      var ctx = this.ctx;
      var current = this.current;
      var x = current.x,
          y = current.y;
      for (var i = 0, j = 0, ii = ops.length; i < ii; i++) {
        switch (ops[i] | 0) {
          case _util.OPS.rectangle:
            x = args[j++];
            y = args[j++];
            var width = args[j++];
            var height = args[j++];
            if (width === 0) {
              width = this.getSinglePixelWidth();
            }
            if (height === 0) {
              height = this.getSinglePixelWidth();
            }
            var xw = x + width;
            var yh = y + height;
            this.ctx.moveTo(x, y);
            this.ctx.lineTo(xw, y);
            this.ctx.lineTo(xw, yh);
            this.ctx.lineTo(x, yh);
            this.ctx.lineTo(x, y);
            this.ctx.closePath();
            break;
          case _util.OPS.moveTo:
            x = args[j++];
            y = args[j++];
            ctx.moveTo(x, y);
            break;
          case _util.OPS.lineTo:
            x = args[j++];
            y = args[j++];
            ctx.lineTo(x, y);
            break;
          case _util.OPS.curveTo:
            x = args[j + 4];
            y = args[j + 5];
            ctx.bezierCurveTo(args[j], args[j + 1], args[j + 2], args[j + 3], x, y);
            j += 6;
            break;
          case _util.OPS.curveTo2:
            ctx.bezierCurveTo(x, y, args[j], args[j + 1], args[j + 2], args[j + 3]);
            x = args[j + 2];
            y = args[j + 3];
            j += 4;
            break;
          case _util.OPS.curveTo3:
            x = args[j + 2];
            y = args[j + 3];
            ctx.bezierCurveTo(args[j], args[j + 1], x, y, x, y);
            j += 4;
            break;
          case _util.OPS.closePath:
            ctx.closePath();
            break;
        }
      }
      current.setCurrentPoint(x, y);
    },
    closePath: function CanvasGraphics_closePath() {
      this.ctx.closePath();
    },
    stroke: function CanvasGraphics_stroke(consumePath) {
      consumePath = typeof consumePath !== 'undefined' ? consumePath : true;
      var ctx = this.ctx;
      var strokeColor = this.current.strokeColor;
      ctx.lineWidth = Math.max(this.getSinglePixelWidth() * MIN_WIDTH_FACTOR, this.current.lineWidth);
      ctx.globalAlpha = this.current.strokeAlpha;
      if (strokeColor && strokeColor.hasOwnProperty('type') && strokeColor.type === 'Pattern') {
        ctx.save();
        ctx.strokeStyle = strokeColor.getPattern(ctx, this);
        ctx.stroke();
        ctx.restore();
      } else {
        ctx.stroke();
      }
      if (consumePath) {
        this.consumePath();
      }
      ctx.globalAlpha = this.current.fillAlpha;
    },
    closeStroke: function CanvasGraphics_closeStroke() {
      this.closePath();
      this.stroke();
    },
    fill: function CanvasGraphics_fill(consumePath) {
      consumePath = typeof consumePath !== 'undefined' ? consumePath : true;
      var ctx = this.ctx;
      var fillColor = this.current.fillColor;
      var isPatternFill = this.current.patternFill;
      var needRestore = false;
      if (isPatternFill) {
        ctx.save();
        if (this.baseTransform) {
          ctx.setTransform.apply(ctx, this.baseTransform);
        }
        ctx.fillStyle = fillColor.getPattern(ctx, this);
        needRestore = true;
      }
      if (this.pendingEOFill) {
        ctx.fill('evenodd');
        this.pendingEOFill = false;
      } else {
        ctx.fill();
      }
      if (needRestore) {
        ctx.restore();
      }
      if (consumePath) {
        this.consumePath();
      }
    },
    eoFill: function CanvasGraphics_eoFill() {
      this.pendingEOFill = true;
      this.fill();
    },
    fillStroke: function CanvasGraphics_fillStroke() {
      this.fill(false);
      this.stroke(false);
      this.consumePath();
    },
    eoFillStroke: function CanvasGraphics_eoFillStroke() {
      this.pendingEOFill = true;
      this.fillStroke();
    },
    closeFillStroke: function CanvasGraphics_closeFillStroke() {
      this.closePath();
      this.fillStroke();
    },
    closeEOFillStroke: function CanvasGraphics_closeEOFillStroke() {
      this.pendingEOFill = true;
      this.closePath();
      this.fillStroke();
    },
    endPath: function CanvasGraphics_endPath() {
      this.consumePath();
    },
    clip: function CanvasGraphics_clip() {
      this.pendingClip = NORMAL_CLIP;
    },
    eoClip: function CanvasGraphics_eoClip() {
      this.pendingClip = EO_CLIP;
    },
    beginText: function CanvasGraphics_beginText() {
      this.current.textMatrix = _util.IDENTITY_MATRIX;
      this.current.textMatrixScale = 1;
      this.current.x = this.current.lineX = 0;
      this.current.y = this.current.lineY = 0;
    },
    endText: function CanvasGraphics_endText() {
      var paths = this.pendingTextPaths;
      var ctx = this.ctx;
      if (paths === undefined) {
        ctx.beginPath();
        return;
      }
      ctx.save();
      ctx.beginPath();
      for (var i = 0; i < paths.length; i++) {
        var path = paths[i];
        ctx.setTransform.apply(ctx, path.transform);
        ctx.translate(path.x, path.y);
        path.addToPath(ctx, path.fontSize);
      }
      ctx.restore();
      ctx.clip();
      ctx.beginPath();
      delete this.pendingTextPaths;
    },
    setCharSpacing: function CanvasGraphics_setCharSpacing(spacing) {
      this.current.charSpacing = spacing;
    },
    setWordSpacing: function CanvasGraphics_setWordSpacing(spacing) {
      this.current.wordSpacing = spacing;
    },
    setHScale: function CanvasGraphics_setHScale(scale) {
      this.current.textHScale = scale / 100;
    },
    setLeading: function CanvasGraphics_setLeading(leading) {
      this.current.leading = -leading;
    },
    setFont: function CanvasGraphics_setFont(fontRefName, size) {
      var fontObj = this.commonObjs.get(fontRefName);
      var current = this.current;
      if (!fontObj) {
        throw new Error('Can\'t find font for ' + fontRefName);
      }
      current.fontMatrix = fontObj.fontMatrix ? fontObj.fontMatrix : _util.FONT_IDENTITY_MATRIX;
      if (current.fontMatrix[0] === 0 || current.fontMatrix[3] === 0) {
        (0, _util.warn)('Invalid font matrix for font ' + fontRefName);
      }
      if (size < 0) {
        size = -size;
        current.fontDirection = -1;
      } else {
        current.fontDirection = 1;
      }
      this.current.font = fontObj;
      this.current.fontSize = size;
      if (fontObj.isType3Font) {
        return;
      }
      var name = fontObj.loadedName || 'sans-serif';
      var bold = fontObj.black ? '900' : fontObj.bold ? 'bold' : 'normal';
      var italic = fontObj.italic ? 'italic' : 'normal';
      var typeface = '"' + name + '", ' + fontObj.fallbackName;
      var browserFontSize = size < MIN_FONT_SIZE ? MIN_FONT_SIZE : size > MAX_FONT_SIZE ? MAX_FONT_SIZE : size;
      this.current.fontSizeScale = size / browserFontSize;
      var rule = italic + ' ' + bold + ' ' + browserFontSize + 'px ' + typeface;
      this.ctx.font = rule;
    },
    setTextRenderingMode: function CanvasGraphics_setTextRenderingMode(mode) {
      this.current.textRenderingMode = mode;
    },
    setTextRise: function CanvasGraphics_setTextRise(rise) {
      this.current.textRise = rise;
    },
    moveText: function CanvasGraphics_moveText(x, y) {
      this.current.x = this.current.lineX += x;
      this.current.y = this.current.lineY += y;
    },
    setLeadingMoveText: function CanvasGraphics_setLeadingMoveText(x, y) {
      this.setLeading(-y);
      this.moveText(x, y);
    },
    setTextMatrix: function CanvasGraphics_setTextMatrix(a, b, c, d, e, f) {
      this.current.textMatrix = [a, b, c, d, e, f];
      this.current.textMatrixScale = Math.sqrt(a * a + b * b);
      this.current.x = this.current.lineX = 0;
      this.current.y = this.current.lineY = 0;
    },
    nextLine: function CanvasGraphics_nextLine() {
      this.moveText(0, this.current.leading);
    },
    paintChar: function paintChar(character, x, y, patternTransform) {
      var ctx = this.ctx;
      var current = this.current;
      var font = current.font;
      var textRenderingMode = current.textRenderingMode;
      var fontSize = current.fontSize / current.fontSizeScale;
      var fillStrokeMode = textRenderingMode & _util.TextRenderingMode.FILL_STROKE_MASK;
      var isAddToPathSet = !!(textRenderingMode & _util.TextRenderingMode.ADD_TO_PATH_FLAG);
      var patternFill = current.patternFill && font.data;
      var addToPath;
      if (font.disableFontFace || isAddToPathSet || patternFill) {
        addToPath = font.getPathGenerator(this.commonObjs, character);
      }
      if (font.disableFontFace || patternFill) {
        ctx.save();
        ctx.translate(x, y);
        ctx.beginPath();
        addToPath(ctx, fontSize);
        if (patternTransform) {
          ctx.setTransform.apply(ctx, patternTransform);
        }
        if (fillStrokeMode === _util.TextRenderingMode.FILL || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
          ctx.fill();
        }
        if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
          ctx.stroke();
        }
        ctx.restore();
      } else {
        if (fillStrokeMode === _util.TextRenderingMode.FILL || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
          ctx.fillText(character, x, y);
        }
        if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
          ctx.strokeText(character, x, y);
        }
      }
      if (isAddToPathSet) {
        var paths = this.pendingTextPaths || (this.pendingTextPaths = []);
        paths.push({
          transform: ctx.mozCurrentTransform,
          x: x,
          y: y,
          fontSize: fontSize,
          addToPath: addToPath
        });
      }
    },

    get isFontSubpixelAAEnabled() {
      var ctx = this.canvasFactory.create(10, 10).context;
      ctx.scale(1.5, 1);
      ctx.fillText('I', 0, 10);
      var data = ctx.getImageData(0, 0, 10, 10).data;
      var enabled = false;
      for (var i = 3; i < data.length; i += 4) {
        if (data[i] > 0 && data[i] < 255) {
          enabled = true;
          break;
        }
      }
      return (0, _util.shadow)(this, 'isFontSubpixelAAEnabled', enabled);
    },
    showText: function CanvasGraphics_showText(glyphs) {
      var current = this.current;
      var font = current.font;
      if (font.isType3Font) {
        return this.showType3Text(glyphs);
      }
      var fontSize = current.fontSize;
      if (fontSize === 0) {
        return;
      }
      var ctx = this.ctx;
      var fontSizeScale = current.fontSizeScale;
      var charSpacing = current.charSpacing;
      var wordSpacing = current.wordSpacing;
      var fontDirection = current.fontDirection;
      var textHScale = current.textHScale * fontDirection;
      var glyphsLength = glyphs.length;
      var vertical = font.vertical;
      var spacingDir = vertical ? 1 : -1;
      var defaultVMetrics = font.defaultVMetrics;
      var widthAdvanceScale = fontSize * current.fontMatrix[0];
      var simpleFillText = current.textRenderingMode === _util.TextRenderingMode.FILL && !font.disableFontFace && !current.patternFill;
      ctx.save();
      var patternTransform = void 0;
      if (current.patternFill) {
        ctx.save();
        var pattern = current.fillColor.getPattern(ctx, this);
        patternTransform = ctx.mozCurrentTransform;
        ctx.restore();
        ctx.fillStyle = pattern;
      }
      ctx.transform.apply(ctx, current.textMatrix);
      ctx.translate(current.x, current.y + current.textRise);
      if (fontDirection > 0) {
        ctx.scale(textHScale, -1);
      } else {
        ctx.scale(textHScale, 1);
      }
      var lineWidth = current.lineWidth;
      var scale = current.textMatrixScale;
      if (scale === 0 || lineWidth === 0) {
        var fillStrokeMode = current.textRenderingMode & _util.TextRenderingMode.FILL_STROKE_MASK;
        if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
          this._cachedGetSinglePixelWidth = null;
          lineWidth = this.getSinglePixelWidth() * MIN_WIDTH_FACTOR;
        }
      } else {
        lineWidth /= scale;
      }
      if (fontSizeScale !== 1.0) {
        ctx.scale(fontSizeScale, fontSizeScale);
        lineWidth /= fontSizeScale;
      }
      ctx.lineWidth = lineWidth;
      var x = 0,
          i;
      for (i = 0; i < glyphsLength; ++i) {
        var glyph = glyphs[i];
        if ((0, _util.isNum)(glyph)) {
          x += spacingDir * glyph * fontSize / 1000;
          continue;
        }
        var restoreNeeded = false;
        var spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
        var character = glyph.fontChar;
        var accent = glyph.accent;
        var scaledX, scaledY, scaledAccentX, scaledAccentY;
        var width = glyph.width;
        if (vertical) {
          var vmetric, vx, vy;
          vmetric = glyph.vmetric || defaultVMetrics;
          vx = glyph.vmetric ? vmetric[1] : width * 0.5;
          vx = -vx * widthAdvanceScale;
          vy = vmetric[2] * widthAdvanceScale;
          width = vmetric ? -vmetric[0] : width;
          scaledX = vx / fontSizeScale;
          scaledY = (x + vy) / fontSizeScale;
        } else {
          scaledX = x / fontSizeScale;
          scaledY = 0;
        }
        if (font.remeasure && width > 0) {
          var measuredWidth = ctx.measureText(character).width * 1000 / fontSize * fontSizeScale;
          if (width < measuredWidth && this.isFontSubpixelAAEnabled) {
            var characterScaleX = width / measuredWidth;
            restoreNeeded = true;
            ctx.save();
            ctx.scale(characterScaleX, 1);
            scaledX /= characterScaleX;
          } else if (width !== measuredWidth) {
            scaledX += (width - measuredWidth) / 2000 * fontSize / fontSizeScale;
          }
        }
        if (glyph.isInFont || font.missingFile) {
          if (simpleFillText && !accent) {
            ctx.fillText(character, scaledX, scaledY);
          } else {
            this.paintChar(character, scaledX, scaledY, patternTransform);
            if (accent) {
              scaledAccentX = scaledX + accent.offset.x / fontSizeScale;
              scaledAccentY = scaledY - accent.offset.y / fontSizeScale;
              this.paintChar(accent.fontChar, scaledAccentX, scaledAccentY, patternTransform);
            }
          }
        }
        var charWidth = width * widthAdvanceScale + spacing * fontDirection;
        x += charWidth;
        if (restoreNeeded) {
          ctx.restore();
        }
      }
      if (vertical) {
        current.y -= x * textHScale;
      } else {
        current.x += x * textHScale;
      }
      ctx.restore();
    },
    showType3Text: function CanvasGraphics_showType3Text(glyphs) {
      var ctx = this.ctx;
      var current = this.current;
      var font = current.font;
      var fontSize = current.fontSize;
      var fontDirection = current.fontDirection;
      var spacingDir = font.vertical ? 1 : -1;
      var charSpacing = current.charSpacing;
      var wordSpacing = current.wordSpacing;
      var textHScale = current.textHScale * fontDirection;
      var fontMatrix = current.fontMatrix || _util.FONT_IDENTITY_MATRIX;
      var glyphsLength = glyphs.length;
      var isTextInvisible = current.textRenderingMode === _util.TextRenderingMode.INVISIBLE;
      var i, glyph, width, spacingLength;
      if (isTextInvisible || fontSize === 0) {
        return;
      }
      this._cachedGetSinglePixelWidth = null;
      ctx.save();
      ctx.transform.apply(ctx, current.textMatrix);
      ctx.translate(current.x, current.y);
      ctx.scale(textHScale, fontDirection);
      for (i = 0; i < glyphsLength; ++i) {
        glyph = glyphs[i];
        if ((0, _util.isNum)(glyph)) {
          spacingLength = spacingDir * glyph * fontSize / 1000;
          this.ctx.translate(spacingLength, 0);
          current.x += spacingLength * textHScale;
          continue;
        }
        var spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
        var operatorList = font.charProcOperatorList[glyph.operatorListId];
        if (!operatorList) {
          (0, _util.warn)('Type3 character "' + glyph.operatorListId + '" is not available.');
          continue;
        }
        this.processingType3 = glyph;
        this.save();
        ctx.scale(fontSize, fontSize);
        ctx.transform.apply(ctx, fontMatrix);
        this.executeOperatorList(operatorList);
        this.restore();
        var transformed = _util.Util.applyTransform([glyph.width, 0], fontMatrix);
        width = transformed[0] * fontSize + spacing;
        ctx.translate(width, 0);
        current.x += width * textHScale;
      }
      ctx.restore();
      this.processingType3 = null;
    },
    setCharWidth: function CanvasGraphics_setCharWidth(xWidth, yWidth) {},
    setCharWidthAndBounds: function CanvasGraphics_setCharWidthAndBounds(xWidth, yWidth, llx, lly, urx, ury) {
      this.ctx.rect(llx, lly, urx - llx, ury - lly);
      this.clip();
      this.endPath();
    },
    getColorN_Pattern: function CanvasGraphics_getColorN_Pattern(IR) {
      var _this = this;

      var pattern;
      if (IR[0] === 'TilingPattern') {
        var color = IR[1];
        var baseTransform = this.baseTransform || this.ctx.mozCurrentTransform.slice();
        var canvasGraphicsFactory = {
          createCanvasGraphics: function createCanvasGraphics(ctx) {
            return new CanvasGraphics(ctx, _this.commonObjs, _this.objs, _this.canvasFactory, _this.webGLContext);
          }
        };
        pattern = new _pattern_helper.TilingPattern(IR, color, this.ctx, canvasGraphicsFactory, baseTransform);
      } else {
        pattern = (0, _pattern_helper.getShadingPatternFromIR)(IR);
      }
      return pattern;
    },
    setStrokeColorN: function CanvasGraphics_setStrokeColorN() {
      this.current.strokeColor = this.getColorN_Pattern(arguments);
    },
    setFillColorN: function CanvasGraphics_setFillColorN() {
      this.current.fillColor = this.getColorN_Pattern(arguments);
      this.current.patternFill = true;
    },
    setStrokeRGBColor: function CanvasGraphics_setStrokeRGBColor(r, g, b) {
      var color = _util.Util.makeCssRgb(r, g, b);
      this.ctx.strokeStyle = color;
      this.current.strokeColor = color;
    },
    setFillRGBColor: function CanvasGraphics_setFillRGBColor(r, g, b) {
      var color = _util.Util.makeCssRgb(r, g, b);
      this.ctx.fillStyle = color;
      this.current.fillColor = color;
      this.current.patternFill = false;
    },
    shadingFill: function CanvasGraphics_shadingFill(patternIR) {
      var ctx = this.ctx;
      this.save();
      var pattern = (0, _pattern_helper.getShadingPatternFromIR)(patternIR);
      ctx.fillStyle = pattern.getPattern(ctx, this, true);
      var inv = ctx.mozCurrentTransformInverse;
      if (inv) {
        var canvas = ctx.canvas;
        var width = canvas.width;
        var height = canvas.height;
        var bl = _util.Util.applyTransform([0, 0], inv);
        var br = _util.Util.applyTransform([0, height], inv);
        var ul = _util.Util.applyTransform([width, 0], inv);
        var ur = _util.Util.applyTransform([width, height], inv);
        var x0 = Math.min(bl[0], br[0], ul[0], ur[0]);
        var y0 = Math.min(bl[1], br[1], ul[1], ur[1]);
        var x1 = Math.max(bl[0], br[0], ul[0], ur[0]);
        var y1 = Math.max(bl[1], br[1], ul[1], ur[1]);
        this.ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
      } else {
        this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
      }
      this.restore();
    },
    beginInlineImage: function CanvasGraphics_beginInlineImage() {
      (0, _util.unreachable)('Should not call beginInlineImage');
    },
    beginImageData: function CanvasGraphics_beginImageData() {
      (0, _util.unreachable)('Should not call beginImageData');
    },
    paintFormXObjectBegin: function CanvasGraphics_paintFormXObjectBegin(matrix, bbox) {
      this.save();
      this.baseTransformStack.push(this.baseTransform);
      if (Array.isArray(matrix) && matrix.length === 6) {
        this.transform.apply(this, matrix);
      }
      this.baseTransform = this.ctx.mozCurrentTransform;
      if (Array.isArray(bbox) && bbox.length === 4) {
        var width = bbox[2] - bbox[0];
        var height = bbox[3] - bbox[1];
        this.ctx.rect(bbox[0], bbox[1], width, height);
        this.clip();
        this.endPath();
      }
    },
    paintFormXObjectEnd: function CanvasGraphics_paintFormXObjectEnd() {
      this.restore();
      this.baseTransform = this.baseTransformStack.pop();
    },
    beginGroup: function CanvasGraphics_beginGroup(group) {
      this.save();
      var currentCtx = this.ctx;
      if (!group.isolated) {
        (0, _util.info)('TODO: Support non-isolated groups.');
      }
      if (group.knockout) {
        (0, _util.warn)('Knockout groups not supported.');
      }
      var currentTransform = currentCtx.mozCurrentTransform;
      if (group.matrix) {
        currentCtx.transform.apply(currentCtx, group.matrix);
      }
      if (!group.bbox) {
        throw new Error('Bounding box is required.');
      }
      var bounds = _util.Util.getAxialAlignedBoundingBox(group.bbox, currentCtx.mozCurrentTransform);
      var canvasBounds = [0, 0, currentCtx.canvas.width, currentCtx.canvas.height];
      bounds = _util.Util.intersect(bounds, canvasBounds) || [0, 0, 0, 0];
      var offsetX = Math.floor(bounds[0]);
      var offsetY = Math.floor(bounds[1]);
      var drawnWidth = Math.max(Math.ceil(bounds[2]) - offsetX, 1);
      var drawnHeight = Math.max(Math.ceil(bounds[3]) - offsetY, 1);
      var scaleX = 1,
          scaleY = 1;
      if (drawnWidth > MAX_GROUP_SIZE) {
        scaleX = drawnWidth / MAX_GROUP_SIZE;
        drawnWidth = MAX_GROUP_SIZE;
      }
      if (drawnHeight > MAX_GROUP_SIZE) {
        scaleY = drawnHeight / MAX_GROUP_SIZE;
        drawnHeight = MAX_GROUP_SIZE;
      }
      var cacheId = 'groupAt' + this.groupLevel;
      if (group.smask) {
        cacheId += '_smask_' + this.smaskCounter++ % 2;
      }
      var scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight, true);
      var groupCtx = scratchCanvas.context;
      groupCtx.scale(1 / scaleX, 1 / scaleY);
      groupCtx.translate(-offsetX, -offsetY);
      groupCtx.transform.apply(groupCtx, currentTransform);
      if (group.smask) {
        this.smaskStack.push({
          canvas: scratchCanvas.canvas,
          context: groupCtx,
          offsetX: offsetX,
          offsetY: offsetY,
          scaleX: scaleX,
          scaleY: scaleY,
          subtype: group.smask.subtype,
          backdrop: group.smask.backdrop,
          transferMap: group.smask.transferMap || null,
          startTransformInverse: null
        });
      } else {
        currentCtx.setTransform(1, 0, 0, 1, 0, 0);
        currentCtx.translate(offsetX, offsetY);
        currentCtx.scale(scaleX, scaleY);
      }
      copyCtxState(currentCtx, groupCtx);
      this.ctx = groupCtx;
      this.setGState([['BM', 'source-over'], ['ca', 1], ['CA', 1]]);
      this.groupStack.push(currentCtx);
      this.groupLevel++;
      this.current.activeSMask = null;
    },
    endGroup: function CanvasGraphics_endGroup(group) {
      this.groupLevel--;
      var groupCtx = this.ctx;
      this.ctx = this.groupStack.pop();
      if (this.ctx.imageSmoothingEnabled !== undefined) {
        this.ctx.imageSmoothingEnabled = false;
      } else {
        this.ctx.mozImageSmoothingEnabled = false;
      }
      if (group.smask) {
        this.tempSMask = this.smaskStack.pop();
      } else {
        this.ctx.drawImage(groupCtx.canvas, 0, 0);
      }
      this.restore();
    },
    beginAnnotations: function CanvasGraphics_beginAnnotations() {
      this.save();
      if (this.baseTransform) {
        this.ctx.setTransform.apply(this.ctx, this.baseTransform);
      }
    },
    endAnnotations: function CanvasGraphics_endAnnotations() {
      this.restore();
    },
    beginAnnotation: function CanvasGraphics_beginAnnotation(rect, transform, matrix) {
      this.save();
      resetCtxToDefault(this.ctx);
      this.current = new CanvasExtraState();
      if (Array.isArray(rect) && rect.length === 4) {
        var width = rect[2] - rect[0];
        var height = rect[3] - rect[1];
        this.ctx.rect(rect[0], rect[1], width, height);
        this.clip();
        this.endPath();
      }
      this.transform.apply(this, transform);
      this.transform.apply(this, matrix);
    },
    endAnnotation: function CanvasGraphics_endAnnotation() {
      this.restore();
    },
    paintJpegXObject: function CanvasGraphics_paintJpegXObject(objId, w, h) {
      var domImage = this.objs.get(objId);
      if (!domImage) {
        (0, _util.warn)('Dependent image isn\'t ready yet');
        return;
      }
      this.save();
      var ctx = this.ctx;
      ctx.scale(1 / w, -1 / h);
      ctx.drawImage(domImage, 0, 0, domImage.width, domImage.height, 0, -h, w, h);
      if (this.imageLayer) {
        var currentTransform = ctx.mozCurrentTransformInverse;
        var position = this.getCanvasPosition(0, 0);
        this.imageLayer.appendImage({
          objId: objId,
          left: position[0],
          top: position[1],
          width: w / currentTransform[0],
          height: h / currentTransform[3]
        });
      }
      this.restore();
    },
    paintImageMaskXObject: function CanvasGraphics_paintImageMaskXObject(img) {
      var ctx = this.ctx;
      var width = img.width,
          height = img.height;
      var fillColor = this.current.fillColor;
      var isPatternFill = this.current.patternFill;
      var glyph = this.processingType3;
      if (COMPILE_TYPE3_GLYPHS && glyph && glyph.compiled === undefined) {
        if (width <= MAX_SIZE_TO_COMPILE && height <= MAX_SIZE_TO_COMPILE) {
          glyph.compiled = compileType3Glyph({
            data: img.data,
            width: width,
            height: height
          });
        } else {
          glyph.compiled = null;
        }
      }
      if (glyph && glyph.compiled) {
        glyph.compiled(ctx);
        return;
      }
      var maskCanvas = this.cachedCanvases.getCanvas('maskCanvas', width, height);
      var maskCtx = maskCanvas.context;
      maskCtx.save();
      putBinaryImageMask(maskCtx, img);
      maskCtx.globalCompositeOperation = 'source-in';
      maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
      maskCtx.fillRect(0, 0, width, height);
      maskCtx.restore();
      this.paintInlineImageXObject(maskCanvas.canvas);
    },
    paintImageMaskXObjectRepeat: function CanvasGraphics_paintImageMaskXObjectRepeat(imgData, scaleX, scaleY, positions) {
      var width = imgData.width;
      var height = imgData.height;
      var fillColor = this.current.fillColor;
      var isPatternFill = this.current.patternFill;
      var maskCanvas = this.cachedCanvases.getCanvas('maskCanvas', width, height);
      var maskCtx = maskCanvas.context;
      maskCtx.save();
      putBinaryImageMask(maskCtx, imgData);
      maskCtx.globalCompositeOperation = 'source-in';
      maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
      maskCtx.fillRect(0, 0, width, height);
      maskCtx.restore();
      var ctx = this.ctx;
      for (var i = 0, ii = positions.length; i < ii; i += 2) {
        ctx.save();
        ctx.transform(scaleX, 0, 0, scaleY, positions[i], positions[i + 1]);
        ctx.scale(1, -1);
        ctx.drawImage(maskCanvas.canvas, 0, 0, width, height, 0, -1, 1, 1);
        ctx.restore();
      }
    },
    paintImageMaskXObjectGroup: function CanvasGraphics_paintImageMaskXObjectGroup(images) {
      var ctx = this.ctx;
      var fillColor = this.current.fillColor;
      var isPatternFill = this.current.patternFill;
      for (var i = 0, ii = images.length; i < ii; i++) {
        var image = images[i];
        var width = image.width,
            height = image.height;
        var maskCanvas = this.cachedCanvases.getCanvas('maskCanvas', width, height);
        var maskCtx = maskCanvas.context;
        maskCtx.save();
        putBinaryImageMask(maskCtx, image);
        maskCtx.globalCompositeOperation = 'source-in';
        maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
        maskCtx.fillRect(0, 0, width, height);
        maskCtx.restore();
        ctx.save();
        ctx.transform.apply(ctx, image.transform);
        ctx.scale(1, -1);
        ctx.drawImage(maskCanvas.canvas, 0, 0, width, height, 0, -1, 1, 1);
        ctx.restore();
      }
    },
    paintImageXObject: function CanvasGraphics_paintImageXObject(objId) {
      var imgData = this.objs.get(objId);
      if (!imgData) {
        (0, _util.warn)('Dependent image isn\'t ready yet');
        return;
      }
      this.paintInlineImageXObject(imgData);
    },
    paintImageXObjectRepeat: function CanvasGraphics_paintImageXObjectRepeat(objId, scaleX, scaleY, positions) {
      var imgData = this.objs.get(objId);
      if (!imgData) {
        (0, _util.warn)('Dependent image isn\'t ready yet');
        return;
      }
      var width = imgData.width;
      var height = imgData.height;
      var map = [];
      for (var i = 0, ii = positions.length; i < ii; i += 2) {
        map.push({
          transform: [scaleX, 0, 0, scaleY, positions[i], positions[i + 1]],
          x: 0,
          y: 0,
          w: width,
          h: height
        });
      }
      this.paintInlineImageXObjectGroup(imgData, map);
    },
    paintInlineImageXObject: function CanvasGraphics_paintInlineImageXObject(imgData) {
      var width = imgData.width;
      var height = imgData.height;
      var ctx = this.ctx;
      this.save();
      ctx.scale(1 / width, -1 / height);
      var currentTransform = ctx.mozCurrentTransformInverse;
      var a = currentTransform[0],
          b = currentTransform[1];
      var widthScale = Math.max(Math.sqrt(a * a + b * b), 1);
      var c = currentTransform[2],
          d = currentTransform[3];
      var heightScale = Math.max(Math.sqrt(c * c + d * d), 1);
      var imgToPaint, tmpCanvas;
      if (typeof HTMLElement === 'function' && imgData instanceof HTMLElement || !imgData.data) {
        imgToPaint = imgData;
      } else {
        tmpCanvas = this.cachedCanvases.getCanvas('inlineImage', width, height);
        var tmpCtx = tmpCanvas.context;
        putBinaryImageData(tmpCtx, imgData);
        imgToPaint = tmpCanvas.canvas;
      }
      var paintWidth = width,
          paintHeight = height;
      var tmpCanvasId = 'prescale1';
      while (widthScale > 2 && paintWidth > 1 || heightScale > 2 && paintHeight > 1) {
        var newWidth = paintWidth,
            newHeight = paintHeight;
        if (widthScale > 2 && paintWidth > 1) {
          newWidth = Math.ceil(paintWidth / 2);
          widthScale /= paintWidth / newWidth;
        }
        if (heightScale > 2 && paintHeight > 1) {
          newHeight = Math.ceil(paintHeight / 2);
          heightScale /= paintHeight / newHeight;
        }
        tmpCanvas = this.cachedCanvases.getCanvas(tmpCanvasId, newWidth, newHeight);
        tmpCtx = tmpCanvas.context;
        tmpCtx.clearRect(0, 0, newWidth, newHeight);
        tmpCtx.drawImage(imgToPaint, 0, 0, paintWidth, paintHeight, 0, 0, newWidth, newHeight);
        imgToPaint = tmpCanvas.canvas;
        paintWidth = newWidth;
        paintHeight = newHeight;
        tmpCanvasId = tmpCanvasId === 'prescale1' ? 'prescale2' : 'prescale1';
      }
      ctx.drawImage(imgToPaint, 0, 0, paintWidth, paintHeight, 0, -height, width, height);
      if (this.imageLayer) {
        var position = this.getCanvasPosition(0, -height);
        this.imageLayer.appendImage({
          imgData: imgData,
          left: position[0],
          top: position[1],
          width: width / currentTransform[0],
          height: height / currentTransform[3]
        });
      }
      this.restore();
    },
    paintInlineImageXObjectGroup: function CanvasGraphics_paintInlineImageXObjectGroup(imgData, map) {
      var ctx = this.ctx;
      var w = imgData.width;
      var h = imgData.height;
      var tmpCanvas = this.cachedCanvases.getCanvas('inlineImage', w, h);
      var tmpCtx = tmpCanvas.context;
      putBinaryImageData(tmpCtx, imgData);
      for (var i = 0, ii = map.length; i < ii; i++) {
        var entry = map[i];
        ctx.save();
        ctx.transform.apply(ctx, entry.transform);
        ctx.scale(1, -1);
        ctx.drawImage(tmpCanvas.canvas, entry.x, entry.y, entry.w, entry.h, 0, -1, 1, 1);
        if (this.imageLayer) {
          var position = this.getCanvasPosition(entry.x, entry.y);
          this.imageLayer.appendImage({
            imgData: imgData,
            left: position[0],
            top: position[1],
            width: w,
            height: h
          });
        }
        ctx.restore();
      }
    },
    paintSolidColorImageMask: function CanvasGraphics_paintSolidColorImageMask() {
      this.ctx.fillRect(0, 0, 1, 1);
    },
    paintXObject: function CanvasGraphics_paintXObject() {
      (0, _util.warn)('Unsupported \'paintXObject\' command.');
    },
    markPoint: function CanvasGraphics_markPoint(tag) {},
    markPointProps: function CanvasGraphics_markPointProps(tag, properties) {},
    beginMarkedContent: function CanvasGraphics_beginMarkedContent(tag) {},
    beginMarkedContentProps: function CanvasGraphics_beginMarkedContentProps(tag, properties) {},
    endMarkedContent: function CanvasGraphics_endMarkedContent() {},
    beginCompat: function CanvasGraphics_beginCompat() {},
    endCompat: function CanvasGraphics_endCompat() {},
    consumePath: function CanvasGraphics_consumePath() {
      var ctx = this.ctx;
      if (this.pendingClip) {
        if (this.pendingClip === EO_CLIP) {
          ctx.clip('evenodd');
        } else {
          ctx.clip();
        }
        this.pendingClip = null;
      }
      ctx.beginPath();
    },
    getSinglePixelWidth: function getSinglePixelWidth(scale) {
      if (this._cachedGetSinglePixelWidth === null) {
        var inverse = this.ctx.mozCurrentTransformInverse;
        this._cachedGetSinglePixelWidth = Math.sqrt(Math.max(inverse[0] * inverse[0] + inverse[1] * inverse[1], inverse[2] * inverse[2] + inverse[3] * inverse[3]));
      }
      return this._cachedGetSinglePixelWidth;
    },

    getCanvasPosition: function CanvasGraphics_getCanvasPosition(x, y) {
      var transform = this.ctx.mozCurrentTransform;
      return [transform[0] * x + transform[2] * y + transform[4], transform[1] * x + transform[3] * y + transform[5]];
    }
  };
  for (var op in _util.OPS) {
    CanvasGraphics.prototype[_util.OPS[op]] = CanvasGraphics.prototype[op];
  }
  return CanvasGraphics;
}();
exports.CanvasGraphics = CanvasGraphics;

/***/ }),
/* 134 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TilingPattern = exports.getShadingPatternFromIR = undefined;

var _util = __w_pdfjs_require__(1);

var ShadingIRs = {};
ShadingIRs.RadialAxial = {
  fromIR: function RadialAxial_fromIR(raw) {
    var type = raw[1];
    var colorStops = raw[2];
    var p0 = raw[3];
    var p1 = raw[4];
    var r0 = raw[5];
    var r1 = raw[6];
    return {
      type: 'Pattern',
      getPattern: function RadialAxial_getPattern(ctx) {
        var grad;
        if (type === 'axial') {
          grad = ctx.createLinearGradient(p0[0], p0[1], p1[0], p1[1]);
        } else if (type === 'radial') {
          grad = ctx.createRadialGradient(p0[0], p0[1], r0, p1[0], p1[1], r1);
        }
        for (var i = 0, ii = colorStops.length; i < ii; ++i) {
          var c = colorStops[i];
          grad.addColorStop(c[0], c[1]);
        }
        return grad;
      }
    };
  }
};
var createMeshCanvas = function createMeshCanvasClosure() {
  function drawTriangle(data, context, p1, p2, p3, c1, c2, c3) {
    var coords = context.coords,
        colors = context.colors;
    var bytes = data.data,
        rowSize = data.width * 4;
    var tmp;
    if (coords[p1 + 1] > coords[p2 + 1]) {
      tmp = p1;
      p1 = p2;
      p2 = tmp;
      tmp = c1;
      c1 = c2;
      c2 = tmp;
    }
    if (coords[p2 + 1] > coords[p3 + 1]) {
      tmp = p2;
      p2 = p3;
      p3 = tmp;
      tmp = c2;
      c2 = c3;
      c3 = tmp;
    }
    if (coords[p1 + 1] > coords[p2 + 1]) {
      tmp = p1;
      p1 = p2;
      p2 = tmp;
      tmp = c1;
      c1 = c2;
      c2 = tmp;
    }
    var x1 = (coords[p1] + context.offsetX) * context.scaleX;
    var y1 = (coords[p1 + 1] + context.offsetY) * context.scaleY;
    var x2 = (coords[p2] + context.offsetX) * context.scaleX;
    var y2 = (coords[p2 + 1] + context.offsetY) * context.scaleY;
    var x3 = (coords[p3] + context.offsetX) * context.scaleX;
    var y3 = (coords[p3 + 1] + context.offsetY) * context.scaleY;
    if (y1 >= y3) {
      return;
    }
    var c1r = colors[c1],
        c1g = colors[c1 + 1],
        c1b = colors[c1 + 2];
    var c2r = colors[c2],
        c2g = colors[c2 + 1],
        c2b = colors[c2 + 2];
    var c3r = colors[c3],
        c3g = colors[c3 + 1],
        c3b = colors[c3 + 2];
    var minY = Math.round(y1),
        maxY = Math.round(y3);
    var xa, car, cag, cab;
    var xb, cbr, cbg, cbb;
    var k;
    for (var y = minY; y <= maxY; y++) {
      if (y < y2) {
        k = y < y1 ? 0 : y1 === y2 ? 1 : (y1 - y) / (y1 - y2);
        xa = x1 - (x1 - x2) * k;
        car = c1r - (c1r - c2r) * k;
        cag = c1g - (c1g - c2g) * k;
        cab = c1b - (c1b - c2b) * k;
      } else {
        k = y > y3 ? 1 : y2 === y3 ? 0 : (y2 - y) / (y2 - y3);
        xa = x2 - (x2 - x3) * k;
        car = c2r - (c2r - c3r) * k;
        cag = c2g - (c2g - c3g) * k;
        cab = c2b - (c2b - c3b) * k;
      }
      k = y < y1 ? 0 : y > y3 ? 1 : (y1 - y) / (y1 - y3);
      xb = x1 - (x1 - x3) * k;
      cbr = c1r - (c1r - c3r) * k;
      cbg = c1g - (c1g - c3g) * k;
      cbb = c1b - (c1b - c3b) * k;
      var x1_ = Math.round(Math.min(xa, xb));
      var x2_ = Math.round(Math.max(xa, xb));
      var j = rowSize * y + x1_ * 4;
      for (var x = x1_; x <= x2_; x++) {
        k = (xa - x) / (xa - xb);
        k = k < 0 ? 0 : k > 1 ? 1 : k;
        bytes[j++] = car - (car - cbr) * k | 0;
        bytes[j++] = cag - (cag - cbg) * k | 0;
        bytes[j++] = cab - (cab - cbb) * k | 0;
        bytes[j++] = 255;
      }
    }
  }
  function drawFigure(data, figure, context) {
    var ps = figure.coords;
    var cs = figure.colors;
    var i, ii;
    switch (figure.type) {
      case 'lattice':
        var verticesPerRow = figure.verticesPerRow;
        var rows = Math.floor(ps.length / verticesPerRow) - 1;
        var cols = verticesPerRow - 1;
        for (i = 0; i < rows; i++) {
          var q = i * verticesPerRow;
          for (var j = 0; j < cols; j++, q++) {
            drawTriangle(data, context, ps[q], ps[q + 1], ps[q + verticesPerRow], cs[q], cs[q + 1], cs[q + verticesPerRow]);
            drawTriangle(data, context, ps[q + verticesPerRow + 1], ps[q + 1], ps[q + verticesPerRow], cs[q + verticesPerRow + 1], cs[q + 1], cs[q + verticesPerRow]);
          }
        }
        break;
      case 'triangles':
        for (i = 0, ii = ps.length; i < ii; i += 3) {
          drawTriangle(data, context, ps[i], ps[i + 1], ps[i + 2], cs[i], cs[i + 1], cs[i + 2]);
        }
        break;
      default:
        throw new Error('illegal figure');
    }
  }
  function createMeshCanvas(bounds, combinesScale, coords, colors, figures, backgroundColor, cachedCanvases, webGLContext) {
    var EXPECTED_SCALE = 1.1;
    var MAX_PATTERN_SIZE = 3000;
    var BORDER_SIZE = 2;
    var offsetX = Math.floor(bounds[0]);
    var offsetY = Math.floor(bounds[1]);
    var boundsWidth = Math.ceil(bounds[2]) - offsetX;
    var boundsHeight = Math.ceil(bounds[3]) - offsetY;
    var width = Math.min(Math.ceil(Math.abs(boundsWidth * combinesScale[0] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
    var height = Math.min(Math.ceil(Math.abs(boundsHeight * combinesScale[1] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
    var scaleX = boundsWidth / width;
    var scaleY = boundsHeight / height;
    var context = {
      coords: coords,
      colors: colors,
      offsetX: -offsetX,
      offsetY: -offsetY,
      scaleX: 1 / scaleX,
      scaleY: 1 / scaleY
    };
    var paddedWidth = width + BORDER_SIZE * 2;
    var paddedHeight = height + BORDER_SIZE * 2;
    var canvas, tmpCanvas, i, ii;
    if (webGLContext.isEnabled) {
      canvas = webGLContext.drawFigures({
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        figures: figures,
        context: context
      });
      tmpCanvas = cachedCanvases.getCanvas('mesh', paddedWidth, paddedHeight, false);
      tmpCanvas.context.drawImage(canvas, BORDER_SIZE, BORDER_SIZE);
      canvas = tmpCanvas.canvas;
    } else {
      tmpCanvas = cachedCanvases.getCanvas('mesh', paddedWidth, paddedHeight, false);
      var tmpCtx = tmpCanvas.context;
      var data = tmpCtx.createImageData(width, height);
      if (backgroundColor) {
        var bytes = data.data;
        for (i = 0, ii = bytes.length; i < ii; i += 4) {
          bytes[i] = backgroundColor[0];
          bytes[i + 1] = backgroundColor[1];
          bytes[i + 2] = backgroundColor[2];
          bytes[i + 3] = 255;
        }
      }
      for (i = 0; i < figures.length; i++) {
        drawFigure(data, figures[i], context);
      }
      tmpCtx.putImageData(data, BORDER_SIZE, BORDER_SIZE);
      canvas = tmpCanvas.canvas;
    }
    return {
      canvas: canvas,
      offsetX: offsetX - BORDER_SIZE * scaleX,
      offsetY: offsetY - BORDER_SIZE * scaleY,
      scaleX: scaleX,
      scaleY: scaleY
    };
  }
  return createMeshCanvas;
}();
ShadingIRs.Mesh = {
  fromIR: function Mesh_fromIR(raw) {
    var coords = raw[2];
    var colors = raw[3];
    var figures = raw[4];
    var bounds = raw[5];
    var matrix = raw[6];
    var background = raw[8];
    return {
      type: 'Pattern',
      getPattern: function Mesh_getPattern(ctx, owner, shadingFill) {
        var scale;
        if (shadingFill) {
          scale = _util.Util.singularValueDecompose2dScale(ctx.mozCurrentTransform);
        } else {
          scale = _util.Util.singularValueDecompose2dScale(owner.baseTransform);
          if (matrix) {
            var matrixScale = _util.Util.singularValueDecompose2dScale(matrix);
            scale = [scale[0] * matrixScale[0], scale[1] * matrixScale[1]];
          }
        }
        var temporaryPatternCanvas = createMeshCanvas(bounds, scale, coords, colors, figures, shadingFill ? null : background, owner.cachedCanvases, owner.webGLContext);
        if (!shadingFill) {
          ctx.setTransform.apply(ctx, owner.baseTransform);
          if (matrix) {
            ctx.transform.apply(ctx, matrix);
          }
        }
        ctx.translate(temporaryPatternCanvas.offsetX, temporaryPatternCanvas.offsetY);
        ctx.scale(temporaryPatternCanvas.scaleX, temporaryPatternCanvas.scaleY);
        return ctx.createPattern(temporaryPatternCanvas.canvas, 'no-repeat');
      }
    };
  }
};
ShadingIRs.Dummy = {
  fromIR: function Dummy_fromIR() {
    return {
      type: 'Pattern',
      getPattern: function Dummy_fromIR_getPattern() {
        return 'hotpink';
      }
    };
  }
};
function getShadingPatternFromIR(raw) {
  var shadingIR = ShadingIRs[raw[0]];
  if (!shadingIR) {
    throw new Error('Unknown IR type: ' + raw[0]);
  }
  return shadingIR.fromIR(raw);
}
var TilingPattern = function TilingPatternClosure() {
  var PaintType = {
    COLORED: 1,
    UNCOLORED: 2
  };
  var MAX_PATTERN_SIZE = 3000;
  function TilingPattern(IR, color, ctx, canvasGraphicsFactory, baseTransform) {
    this.operatorList = IR[2];
    this.matrix = IR[3] || [1, 0, 0, 1, 0, 0];
    this.bbox = IR[4];
    this.xstep = IR[5];
    this.ystep = IR[6];
    this.paintType = IR[7];
    this.tilingType = IR[8];
    this.color = color;
    this.canvasGraphicsFactory = canvasGraphicsFactory;
    this.baseTransform = baseTransform;
    this.type = 'Pattern';
    this.ctx = ctx;
  }
  TilingPattern.prototype = {
    createPatternCanvas: function TilinPattern_createPatternCanvas(owner) {
      var operatorList = this.operatorList;
      var bbox = this.bbox;
      var xstep = this.xstep;
      var ystep = this.ystep;
      var paintType = this.paintType;
      var tilingType = this.tilingType;
      var color = this.color;
      var canvasGraphicsFactory = this.canvasGraphicsFactory;
      (0, _util.info)('TilingType: ' + tilingType);
      var x0 = bbox[0],
          y0 = bbox[1],
          x1 = bbox[2],
          y1 = bbox[3];
      var topLeft = [x0, y0];
      var botRight = [x0 + xstep, y0 + ystep];
      var width = botRight[0] - topLeft[0];
      var height = botRight[1] - topLeft[1];
      var matrixScale = _util.Util.singularValueDecompose2dScale(this.matrix);
      var curMatrixScale = _util.Util.singularValueDecompose2dScale(this.baseTransform);
      var combinedScale = [matrixScale[0] * curMatrixScale[0], matrixScale[1] * curMatrixScale[1]];
      width = Math.min(Math.ceil(Math.abs(width * combinedScale[0])), MAX_PATTERN_SIZE);
      height = Math.min(Math.ceil(Math.abs(height * combinedScale[1])), MAX_PATTERN_SIZE);
      var tmpCanvas = owner.cachedCanvases.getCanvas('pattern', width, height, true);
      var tmpCtx = tmpCanvas.context;
      var graphics = canvasGraphicsFactory.createCanvasGraphics(tmpCtx);
      graphics.groupLevel = owner.groupLevel;
      this.setFillAndStrokeStyleToContext(graphics, paintType, color);
      this.setScale(width, height, xstep, ystep);
      this.transformToScale(graphics);
      var tmpTranslate = [1, 0, 0, 1, -topLeft[0], -topLeft[1]];
      graphics.transform.apply(graphics, tmpTranslate);
      this.clipBbox(graphics, bbox, x0, y0, x1, y1);
      graphics.executeOperatorList(operatorList);
      return tmpCanvas.canvas;
    },
    setScale: function TilingPattern_setScale(width, height, xstep, ystep) {
      this.scale = [width / xstep, height / ystep];
    },
    transformToScale: function TilingPattern_transformToScale(graphics) {
      var scale = this.scale;
      var tmpScale = [scale[0], 0, 0, scale[1], 0, 0];
      graphics.transform.apply(graphics, tmpScale);
    },
    scaleToContext: function TilingPattern_scaleToContext() {
      var scale = this.scale;
      this.ctx.scale(1 / scale[0], 1 / scale[1]);
    },
    clipBbox: function clipBbox(graphics, bbox, x0, y0, x1, y1) {
      if (Array.isArray(bbox) && bbox.length === 4) {
        var bboxWidth = x1 - x0;
        var bboxHeight = y1 - y0;
        graphics.ctx.rect(x0, y0, bboxWidth, bboxHeight);
        graphics.clip();
        graphics.endPath();
      }
    },
    setFillAndStrokeStyleToContext: function setFillAndStrokeStyleToContext(graphics, paintType, color) {
      var context = graphics.ctx,
          current = graphics.current;
      switch (paintType) {
        case PaintType.COLORED:
          var ctx = this.ctx;
          context.fillStyle = ctx.fillStyle;
          context.strokeStyle = ctx.strokeStyle;
          current.fillColor = ctx.fillStyle;
          current.strokeColor = ctx.strokeStyle;
          break;
        case PaintType.UNCOLORED:
          var cssColor = _util.Util.makeCssRgb(color[0], color[1], color[2]);
          context.fillStyle = cssColor;
          context.strokeStyle = cssColor;
          current.fillColor = cssColor;
          current.strokeColor = cssColor;
          break;
        default:
          throw new _util.FormatError('Unsupported paint type: ' + paintType);
      }
    },
    getPattern: function TilingPattern_getPattern(ctx, owner) {
      var temporaryPatternCanvas = this.createPatternCanvas(owner);
      ctx = this.ctx;
      ctx.setTransform.apply(ctx, this.baseTransform);
      ctx.transform.apply(ctx, this.matrix);
      this.scaleToContext();
      return ctx.createPattern(temporaryPatternCanvas, 'repeat');
    }
  };
  return TilingPattern;
}();
exports.getShadingPatternFromIR = getShadingPatternFromIR;
exports.TilingPattern = TilingPattern;

/***/ }),
/* 135 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GlobalWorkerOptions = Object.create(null);
GlobalWorkerOptions.workerPort = GlobalWorkerOptions.workerPort === undefined ? null : GlobalWorkerOptions.workerPort;
GlobalWorkerOptions.workerSrc = GlobalWorkerOptions.workerSrc === undefined ? '' : GlobalWorkerOptions.workerSrc;
exports.GlobalWorkerOptions = GlobalWorkerOptions;

/***/ }),
/* 136 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageHandler = undefined;

var _regenerator = __w_pdfjs_require__(137);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var resolveCall = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(fn, args) {
    var thisArg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (fn) {
              _context.next = 2;
              break;
            }

            return _context.abrupt('return');

          case 2:
            return _context.abrupt('return', fn.apply(thisArg, args));

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function resolveCall(_x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _util = __w_pdfjs_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function wrapReason(reason) {
  if ((typeof reason === 'undefined' ? 'undefined' : _typeof(reason)) !== 'object') {
    return reason;
  }
  switch (reason.name) {
    case 'AbortException':
      return new _util.AbortException(reason.message);
    case 'MissingPDFException':
      return new _util.MissingPDFException(reason.message);
    case 'UnexpectedResponseException':
      return new _util.UnexpectedResponseException(reason.message, reason.status);
    default:
      return new _util.UnknownErrorException(reason.message, reason.details);
  }
}
function makeReasonSerializable(reason) {
  if (!(reason instanceof Error) || reason instanceof _util.AbortException || reason instanceof _util.MissingPDFException || reason instanceof _util.UnexpectedResponseException || reason instanceof _util.UnknownErrorException) {
    return reason;
  }
  return new _util.UnknownErrorException(reason.message, reason.toString());
}
function resolveOrReject(capability, success, reason) {
  if (success) {
    capability.resolve();
  } else {
    capability.reject(reason);
  }
}
function finalize(promise) {
  return Promise.resolve(promise).catch(function () {});
}
function MessageHandler(sourceName, targetName, comObj) {
  var _this = this;

  this.sourceName = sourceName;
  this.targetName = targetName;
  this.comObj = comObj;
  this.callbackId = 1;
  this.streamId = 1;
  this.postMessageTransfers = true;
  this.streamSinks = Object.create(null);
  this.streamControllers = Object.create(null);
  var callbacksCapabilities = this.callbacksCapabilities = Object.create(null);
  var ah = this.actionHandler = Object.create(null);
  this._onComObjOnMessage = function (event) {
    var data = event.data;
    if (data.targetName !== _this.sourceName) {
      return;
    }
    if (data.stream) {
      _this._processStreamMessage(data);
    } else if (data.isReply) {
      var callbackId = data.callbackId;
      if (data.callbackId in callbacksCapabilities) {
        var callback = callbacksCapabilities[callbackId];
        delete callbacksCapabilities[callbackId];
        if ('error' in data) {
          callback.reject(wrapReason(data.error));
        } else {
          callback.resolve(data.data);
        }
      } else {
        throw new Error('Cannot resolve callback ' + callbackId);
      }
    } else if (data.action in ah) {
      var action = ah[data.action];
      if (data.callbackId) {
        var _sourceName = _this.sourceName;
        var _targetName = data.sourceName;
        Promise.resolve().then(function () {
          return action[0].call(action[1], data.data);
        }).then(function (result) {
          comObj.postMessage({
            sourceName: _sourceName,
            targetName: _targetName,
            isReply: true,
            callbackId: data.callbackId,
            data: result
          });
        }, function (reason) {
          comObj.postMessage({
            sourceName: _sourceName,
            targetName: _targetName,
            isReply: true,
            callbackId: data.callbackId,
            error: makeReasonSerializable(reason)
          });
        });
      } else if (data.streamId) {
        _this._createStreamSink(data);
      } else {
        action[0].call(action[1], data.data);
      }
    } else {
      throw new Error('Unknown action from worker: ' + data.action);
    }
  };
  comObj.addEventListener('message', this._onComObjOnMessage);
}
MessageHandler.prototype = {
  on: function on(actionName, handler, scope) {
    var ah = this.actionHandler;
    if (ah[actionName]) {
      throw new Error('There is already an actionName called "' + actionName + '"');
    }
    ah[actionName] = [handler, scope];
  },
  send: function send(actionName, data, transfers) {
    var message = {
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: actionName,
      data: data
    };
    this.postMessage(message, transfers);
  },
  sendWithPromise: function sendWithPromise(actionName, data, transfers) {
    var callbackId = this.callbackId++;
    var message = {
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: actionName,
      data: data,
      callbackId: callbackId
    };
    var capability = (0, _util.createPromiseCapability)();
    this.callbacksCapabilities[callbackId] = capability;
    try {
      this.postMessage(message, transfers);
    } catch (e) {
      capability.reject(e);
    }
    return capability.promise;
  },
  sendWithStream: function sendWithStream(actionName, data, queueingStrategy, transfers) {
    var _this2 = this;

    var streamId = this.streamId++;
    var sourceName = this.sourceName;
    var targetName = this.targetName;
    return new _util.ReadableStream({
      start: function start(controller) {
        var startCapability = (0, _util.createPromiseCapability)();
        _this2.streamControllers[streamId] = {
          controller: controller,
          startCall: startCapability,
          isClosed: false
        };
        _this2.postMessage({
          sourceName: sourceName,
          targetName: targetName,
          action: actionName,
          streamId: streamId,
          data: data,
          desiredSize: controller.desiredSize
        });
        return startCapability.promise;
      },
      pull: function pull(controller) {
        var pullCapability = (0, _util.createPromiseCapability)();
        _this2.streamControllers[streamId].pullCall = pullCapability;
        _this2.postMessage({
          sourceName: sourceName,
          targetName: targetName,
          stream: 'pull',
          streamId: streamId,
          desiredSize: controller.desiredSize
        });
        return pullCapability.promise;
      },
      cancel: function cancel(reason) {
        var cancelCapability = (0, _util.createPromiseCapability)();
        _this2.streamControllers[streamId].cancelCall = cancelCapability;
        _this2.streamControllers[streamId].isClosed = true;
        _this2.postMessage({
          sourceName: sourceName,
          targetName: targetName,
          stream: 'cancel',
          reason: reason,
          streamId: streamId
        });
        return cancelCapability.promise;
      }
    }, queueingStrategy);
  },
  _createStreamSink: function _createStreamSink(data) {
    var _this3 = this;

    var self = this;
    var action = this.actionHandler[data.action];
    var streamId = data.streamId;
    var desiredSize = data.desiredSize;
    var sourceName = this.sourceName;
    var targetName = data.sourceName;
    var capability = (0, _util.createPromiseCapability)();
    var sendStreamRequest = function sendStreamRequest(_ref2) {
      var stream = _ref2.stream,
          chunk = _ref2.chunk,
          transfers = _ref2.transfers,
          success = _ref2.success,
          reason = _ref2.reason;

      _this3.postMessage({
        sourceName: sourceName,
        targetName: targetName,
        stream: stream,
        streamId: streamId,
        chunk: chunk,
        success: success,
        reason: reason
      }, transfers);
    };
    var streamSink = {
      enqueue: function enqueue(chunk) {
        var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var transfers = arguments[2];

        if (this.isCancelled) {
          return;
        }
        var lastDesiredSize = this.desiredSize;
        this.desiredSize -= size;
        if (lastDesiredSize > 0 && this.desiredSize <= 0) {
          this.sinkCapability = (0, _util.createPromiseCapability)();
          this.ready = this.sinkCapability.promise;
        }
        sendStreamRequest({
          stream: 'enqueue',
          chunk: chunk,
          transfers: transfers
        });
      },
      close: function close() {
        if (this.isCancelled) {
          return;
        }
        this.isCancelled = true;
        sendStreamRequest({ stream: 'close' });
        delete self.streamSinks[streamId];
      },
      error: function error(reason) {
        if (this.isCancelled) {
          return;
        }
        this.isCancelled = true;
        sendStreamRequest({
          stream: 'error',
          reason: reason
        });
      },

      sinkCapability: capability,
      onPull: null,
      onCancel: null,
      isCancelled: false,
      desiredSize: desiredSize,
      ready: null
    };
    streamSink.sinkCapability.resolve();
    streamSink.ready = streamSink.sinkCapability.promise;
    this.streamSinks[streamId] = streamSink;
    resolveCall(action[0], [data.data, streamSink], action[1]).then(function () {
      sendStreamRequest({
        stream: 'start_complete',
        success: true
      });
    }, function (reason) {
      sendStreamRequest({
        stream: 'start_complete',
        success: false,
        reason: reason
      });
    });
  },
  _processStreamMessage: function _processStreamMessage(data) {
    var _this4 = this;

    var sourceName = this.sourceName;
    var targetName = data.sourceName;
    var streamId = data.streamId;
    var sendStreamResponse = function sendStreamResponse(_ref3) {
      var stream = _ref3.stream,
          success = _ref3.success,
          reason = _ref3.reason;

      _this4.comObj.postMessage({
        sourceName: sourceName,
        targetName: targetName,
        stream: stream,
        success: success,
        streamId: streamId,
        reason: reason
      });
    };
    var deleteStreamController = function deleteStreamController() {
      Promise.all([_this4.streamControllers[data.streamId].startCall, _this4.streamControllers[data.streamId].pullCall, _this4.streamControllers[data.streamId].cancelCall].map(function (capability) {
        return capability && finalize(capability.promise);
      })).then(function () {
        delete _this4.streamControllers[data.streamId];
      });
    };
    switch (data.stream) {
      case 'start_complete':
        resolveOrReject(this.streamControllers[data.streamId].startCall, data.success, wrapReason(data.reason));
        break;
      case 'pull_complete':
        resolveOrReject(this.streamControllers[data.streamId].pullCall, data.success, wrapReason(data.reason));
        break;
      case 'pull':
        if (!this.streamSinks[data.streamId]) {
          sendStreamResponse({
            stream: 'pull_complete',
            success: true
          });
          break;
        }
        if (this.streamSinks[data.streamId].desiredSize <= 0 && data.desiredSize > 0) {
          this.streamSinks[data.streamId].sinkCapability.resolve();
        }
        this.streamSinks[data.streamId].desiredSize = data.desiredSize;
        resolveCall(this.streamSinks[data.streamId].onPull).then(function () {
          sendStreamResponse({
            stream: 'pull_complete',
            success: true
          });
        }, function (reason) {
          sendStreamResponse({
            stream: 'pull_complete',
            success: false,
            reason: reason
          });
        });
        break;
      case 'enqueue':
        (0, _util.assert)(this.streamControllers[data.streamId], 'enqueue should have stream controller');
        if (!this.streamControllers[data.streamId].isClosed) {
          this.streamControllers[data.streamId].controller.enqueue(data.chunk);
        }
        break;
      case 'close':
        (0, _util.assert)(this.streamControllers[data.streamId], 'close should have stream controller');
        if (this.streamControllers[data.streamId].isClosed) {
          break;
        }
        this.streamControllers[data.streamId].isClosed = true;
        this.streamControllers[data.streamId].controller.close();
        deleteStreamController();
        break;
      case 'error':
        (0, _util.assert)(this.streamControllers[data.streamId], 'error should have stream controller');
        this.streamControllers[data.streamId].controller.error(wrapReason(data.reason));
        deleteStreamController();
        break;
      case 'cancel_complete':
        resolveOrReject(this.streamControllers[data.streamId].cancelCall, data.success, wrapReason(data.reason));
        deleteStreamController();
        break;
      case 'cancel':
        if (!this.streamSinks[data.streamId]) {
          break;
        }
        resolveCall(this.streamSinks[data.streamId].onCancel, [wrapReason(data.reason)]).then(function () {
          sendStreamResponse({
            stream: 'cancel_complete',
            success: true
          });
        }, function (reason) {
          sendStreamResponse({
            stream: 'cancel_complete',
            success: false,
            reason: reason
          });
        });
        this.streamSinks[data.streamId].sinkCapability.reject(wrapReason(data.reason));
        this.streamSinks[data.streamId].isCancelled = true;
        delete this.streamSinks[data.streamId];
        break;
      default:
        throw new Error('Unexpected stream case');
    }
  },
  postMessage: function postMessage(message, transfers) {
    if (transfers && this.postMessageTransfers) {
      this.comObj.postMessage(message, transfers);
    } else {
      this.comObj.postMessage(message);
    }
  },
  destroy: function destroy() {
    this.comObj.removeEventListener('message', this._onComObjOnMessage);
  }
};
exports.MessageHandler = MessageHandler;

/***/ }),
/* 137 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = __w_pdfjs_require__(138);

/***/ }),
/* 138 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var g = function () {
  return this;
}() || Function("return this")();
var hadRuntime = g.regeneratorRuntime && Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;
var oldRuntime = hadRuntime && g.regeneratorRuntime;
g.regeneratorRuntime = undefined;
module.exports = __w_pdfjs_require__(139);
if (hadRuntime) {
  g.regeneratorRuntime = oldRuntime;
} else {
  try {
    delete g.regeneratorRuntime;
  } catch (e) {
    g.regeneratorRuntime = undefined;
  }
}

/***/ }),
/* 139 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined;
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  var inModule = ( false ? undefined : _typeof(module)) === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      module.exports = runtime;
    }
    return;
  }
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);
    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }
  runtime.wrap = wrap;
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };
  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    IteratorPrototype = NativeIteratorPrototype;
  }
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }
  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };
  runtime.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };
  runtime.awrap = function (arg) {
    return { __await: arg };
  };
  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value && (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }
        return Promise.resolve(value).then(function (unwrapped) {
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }
    var previousPromise;
    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }
      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    }
    this._invoke = enqueue;
  }
  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;
  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
    return runtime.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };
  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }
      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }
        return doneResult();
      }
      context.method = method;
      context.arg = arg;
      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if (context.method === "next") {
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }
          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }
        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;
          if (record.arg === ContinueSentinel) {
            continue;
          }
          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      context.delegate = null;
      if (context.method === "throw") {
        if (delegate.iterator.return) {
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);
          if (context.method === "throw") {
            return ContinueSentinel;
          }
        }
        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }
      return ContinueSentinel;
    }
    var record = tryCatch(method, delegate.iterator, context.arg);
    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }
    var info = record.arg;
    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }
    if (info.done) {
      context[delegate.resultName] = info.value;
      context.next = delegate.nextLoc;
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      return info;
    }
    context.delegate = null;
    return ContinueSentinel;
  }
  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator";
  Gp[iteratorSymbol] = function () {
    return this;
  };
  Gp.toString = function () {
    return "[object Generator]";
  };
  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };
    if (1 in locs) {
      entry.catchLoc = locs[1];
    }
    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }
    this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }
  runtime.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }
      next.done = true;
      return next;
    };
  };
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }
      if (typeof iterable.next === "function") {
        return iterable;
      }
      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }
          next.value = undefined;
          next.done = true;
          return next;
        };
        return next.next = next;
      }
    }
    return { next: doneResult };
  }
  runtime.values = values;
  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }
  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);
      if (!skipTempReset) {
        for (var name in this) {
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }
      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        if (caught) {
          context.method = "next";
          context.arg = undefined;
        }
        return !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;
        if (entry.tryLoc === "root") {
          return handle("end");
        }
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        finallyEntry = null;
      }
      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;
      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }
      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }
      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };
      if (this.method === "next") {
        this.arg = undefined;
      }
      return ContinueSentinel;
    }
  };
}(function () {
  return this;
}() || Function("return this")());
/* WEBPACK VAR INJECTION */}.call(this, __w_pdfjs_require__(140)(module)))

/***/ }),
/* 140 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};
    module.paths = [];
    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }
  return module;
};

/***/ }),
/* 141 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Metadata = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __w_pdfjs_require__(1);

var _xml_parser = __w_pdfjs_require__(142);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Metadata = function () {
  function Metadata(data) {
    _classCallCheck(this, Metadata);

    (0, _util.assert)(typeof data === 'string', 'Metadata: input is not a string');
    data = this._repair(data);
    var parser = new _xml_parser.SimpleXMLParser();
    var xmlDocument = parser.parseFromString(data);
    this._metadata = Object.create(null);
    if (xmlDocument) {
      this._parse(xmlDocument);
    }
  }

  _createClass(Metadata, [{
    key: '_repair',
    value: function _repair(data) {
      return data.replace(/>\\376\\377([^<]+)/g, function (all, codes) {
        var bytes = codes.replace(/\\([0-3])([0-7])([0-7])/g, function (code, d1, d2, d3) {
          return String.fromCharCode(d1 * 64 + d2 * 8 + d3 * 1);
        }).replace(/&(amp|apos|gt|lt|quot);/g, function (str, name) {
          switch (name) {
            case 'amp':
              return '&';
            case 'apos':
              return '\'';
            case 'gt':
              return '>';
            case 'lt':
              return '<';
            case 'quot':
              return '\"';
          }
          throw new Error('_repair: ' + name + ' isn\'t defined.');
        });
        var chars = '';
        for (var i = 0, ii = bytes.length; i < ii; i += 2) {
          var code = bytes.charCodeAt(i) * 256 + bytes.charCodeAt(i + 1);
          if (code >= 32 && code < 127 && code !== 60 && code !== 62 && code !== 38) {
            chars += String.fromCharCode(code);
          } else {
            chars += '&#x' + (0x10000 + code).toString(16).substring(1) + ';';
          }
        }
        return '>' + chars;
      });
    }
  }, {
    key: '_parse',
    value: function _parse(xmlDocument) {
      var rdf = xmlDocument.documentElement;
      if (rdf.nodeName.toLowerCase() !== 'rdf:rdf') {
        rdf = rdf.firstChild;
        while (rdf && rdf.nodeName.toLowerCase() !== 'rdf:rdf') {
          rdf = rdf.nextSibling;
        }
      }
      var nodeName = rdf ? rdf.nodeName.toLowerCase() : null;
      if (!rdf || nodeName !== 'rdf:rdf' || !rdf.hasChildNodes()) {
        return;
      }
      var children = rdf.childNodes;
      for (var i = 0, ii = children.length; i < ii; i++) {
        var desc = children[i];
        if (desc.nodeName.toLowerCase() !== 'rdf:description') {
          continue;
        }
        for (var j = 0, jj = desc.childNodes.length; j < jj; j++) {
          if (desc.childNodes[j].nodeName.toLowerCase() !== '#text') {
            var entry = desc.childNodes[j];
            var name = entry.nodeName.toLowerCase();
            this._metadata[name] = entry.textContent.trim();
          }
        }
      }
    }
  }, {
    key: 'get',
    value: function get(name) {
      return this._metadata[name] || null;
    }
  }, {
    key: 'getAll',
    value: function getAll() {
      return this._metadata;
    }
  }, {
    key: 'has',
    value: function has(name) {
      return typeof this._metadata[name] !== 'undefined';
    }
  }]);

  return Metadata;
}();

exports.Metadata = Metadata;

/***/ }),
/* 142 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var XMLParserErrorCode = {
  NoError: 0,
  EndOfDocument: -1,
  UnterminatedCdat: -2,
  UnterminatedXmlDeclaration: -3,
  UnterminatedDoctypeDeclaration: -4,
  UnterminatedComment: -5,
  MalformedElement: -6,
  OutOfMemory: -7,
  UnterminatedAttributeValue: -8,
  UnterminatedElement: -9,
  ElementNeverBegun: -10
};
function isWhitespace(s, index) {
  var ch = s[index];
  return ch === ' ' || ch === '\n' || ch === '\r' || ch === '\t';
}
function isWhitespaceString(s) {
  for (var i = 0, ii = s.length; i < ii; i++) {
    if (!isWhitespace(s, i)) {
      return false;
    }
  }
  return true;
}

var XMLParserBase = function () {
  function XMLParserBase() {
    _classCallCheck(this, XMLParserBase);
  }

  _createClass(XMLParserBase, [{
    key: '_resolveEntities',
    value: function _resolveEntities(s) {
      return s.replace(/&([^;]+);/g, function (all, entity) {
        if (entity.substring(0, 2) === '#x') {
          return String.fromCharCode(parseInt(entity.substring(2), 16));
        } else if (entity.substring(0, 1) === '#') {
          return String.fromCharCode(parseInt(entity.substring(1), 10));
        }
        switch (entity) {
          case 'lt':
            return '<';
          case 'gt':
            return '>';
          case 'amp':
            return '&';
          case 'quot':
            return '\"';
        }
        return this.onResolveEntity(entity);
      });
    }
  }, {
    key: '_parseContent',
    value: function _parseContent(s, start) {
      var pos = start,
          name = void 0,
          attributes = [];
      function skipWs() {
        while (pos < s.length && isWhitespace(s, pos)) {
          ++pos;
        }
      }
      while (pos < s.length && !isWhitespace(s, pos) && s[pos] !== '>' && s[pos] !== '/') {
        ++pos;
      }
      name = s.substring(start, pos);
      skipWs();
      while (pos < s.length && s[pos] !== '>' && s[pos] !== '/' && s[pos] !== '?') {
        skipWs();
        var attrName = '',
            attrValue = '';
        while (pos < s.length && !isWhitespace(s, pos) && s[pos] !== '=') {
          attrName += s[pos];
          ++pos;
        }
        skipWs();
        if (s[pos] !== '=') {
          return null;
        }
        ++pos;
        skipWs();
        var attrEndChar = s[pos];
        if (attrEndChar !== '\"' && attrEndChar !== '\'') {
          return null;
        }
        var attrEndIndex = s.indexOf(attrEndChar, ++pos);
        if (attrEndIndex < 0) {
          return null;
        }
        attrValue = s.substring(pos, attrEndIndex);
        attributes.push({
          name: attrName,
          value: this._resolveEntities(attrValue)
        });
        pos = attrEndIndex + 1;
        skipWs();
      }
      return {
        name: name,
        attributes: attributes,
        parsed: pos - start
      };
    }
  }, {
    key: '_parseProcessingInstruction',
    value: function _parseProcessingInstruction(s, start) {
      var pos = start,
          name = void 0,
          value = void 0;
      function skipWs() {
        while (pos < s.length && isWhitespace(s, pos)) {
          ++pos;
        }
      }
      while (pos < s.length && !isWhitespace(s, pos) && s[pos] !== '>' && s[pos] !== '/') {
        ++pos;
      }
      name = s.substring(start, pos);
      skipWs();
      var attrStart = pos;
      while (pos < s.length && (s[pos] !== '?' || s[pos + 1] !== '>')) {
        ++pos;
      }
      value = s.substring(attrStart, pos);
      return {
        name: name,
        value: value,
        parsed: pos - start
      };
    }
  }, {
    key: 'parseXml',
    value: function parseXml(s) {
      var i = 0;
      while (i < s.length) {
        var ch = s[i];
        var j = i;
        if (ch === '<') {
          ++j;
          var ch2 = s[j];
          var q = void 0;
          switch (ch2) {
            case '/':
              ++j;
              q = s.indexOf('>', j);
              if (q < 0) {
                this.onError(XMLParserErrorCode.UnterminatedElement);
                return;
              }
              this.onEndElement(s.substring(j, q));
              j = q + 1;
              break;
            case '?':
              ++j;
              var pi = this._parseProcessingInstruction(s, j);
              if (s.substring(j + pi.parsed, j + pi.parsed + 2) !== '?>') {
                this.onError(XMLParserErrorCode.UnterminatedXmlDeclaration);
                return;
              }
              this.onPi(pi.name, pi.value);
              j += pi.parsed + 2;
              break;
            case '!':
              if (s.substring(j + 1, j + 3) === '--') {
                q = s.indexOf('-->', j + 3);
                if (q < 0) {
                  this.onError(XMLParserErrorCode.UnterminatedComment);
                  return;
                }
                this.onComment(s.substring(j + 3, q));
                j = q + 3;
              } else if (s.substring(j + 1, j + 8) === '[CDATA[') {
                q = s.indexOf(']]>', j + 8);
                if (q < 0) {
                  this.onError(XMLParserErrorCode.UnterminatedCdat);
                  return;
                }
                this.onCdata(s.substring(j + 8, q));
                j = q + 3;
              } else if (s.substring(j + 1, j + 8) === 'DOCTYPE') {
                var q2 = s.indexOf('[', j + 8);
                var complexDoctype = false;
                q = s.indexOf('>', j + 8);
                if (q < 0) {
                  this.onError(XMLParserErrorCode.UnterminatedDoctypeDeclaration);
                  return;
                }
                if (q2 > 0 && q > q2) {
                  q = s.indexOf(']>', j + 8);
                  if (q < 0) {
                    this.onError(XMLParserErrorCode.UnterminatedDoctypeDeclaration);
                    return;
                  }
                  complexDoctype = true;
                }
                var doctypeContent = s.substring(j + 8, q + (complexDoctype ? 1 : 0));
                this.onDoctype(doctypeContent);
                j = q + (complexDoctype ? 2 : 1);
              } else {
                this.onError(XMLParserErrorCode.MalformedElement);
                return;
              }
              break;
            default:
              var content = this._parseContent(s, j);
              if (content === null) {
                this.onError(XMLParserErrorCode.MalformedElement);
                return;
              }
              var isClosed = false;
              if (s.substring(j + content.parsed, j + content.parsed + 2) === '/>') {
                isClosed = true;
              } else if (s.substring(j + content.parsed, j + content.parsed + 1) !== '>') {
                this.onError(XMLParserErrorCode.UnterminatedElement);
                return;
              }
              this.onBeginElement(content.name, content.attributes, isClosed);
              j += content.parsed + (isClosed ? 2 : 1);
              break;
          }
        } else {
          while (j < s.length && s[j] !== '<') {
            j++;
          }
          var text = s.substring(i, j);
          this.onText(this._resolveEntities(text));
        }
        i = j;
      }
    }
  }, {
    key: 'onResolveEntity',
    value: function onResolveEntity(name) {
      return '&' + name + ';';
    }
  }, {
    key: 'onPi',
    value: function onPi(name, value) {}
  }, {
    key: 'onComment',
    value: function onComment(text) {}
  }, {
    key: 'onCdata',
    value: function onCdata(text) {}
  }, {
    key: 'onDoctype',
    value: function onDoctype(doctypeContent) {}
  }, {
    key: 'onText',
    value: function onText(text) {}
  }, {
    key: 'onBeginElement',
    value: function onBeginElement(name, attributes, isEmpty) {}
  }, {
    key: 'onEndElement',
    value: function onEndElement(name) {}
  }, {
    key: 'onError',
    value: function onError(code) {}
  }]);

  return XMLParserBase;
}();

var SimpleDOMNode = function () {
  function SimpleDOMNode(nodeName, nodeValue) {
    _classCallCheck(this, SimpleDOMNode);

    this.nodeName = nodeName;
    this.nodeValue = nodeValue;
    Object.defineProperty(this, 'parentNode', {
      value: null,
      writable: true
    });
  }

  _createClass(SimpleDOMNode, [{
    key: 'hasChildNodes',
    value: function hasChildNodes() {
      return this.childNodes && this.childNodes.length > 0;
    }
  }, {
    key: 'firstChild',
    get: function get() {
      return this.childNodes[0];
    }
  }, {
    key: 'nextSibling',
    get: function get() {
      var index = this.parentNode.childNodes.indexOf(this);
      return this.parentNode.childNodes[index + 1];
    }
  }, {
    key: 'textContent',
    get: function get() {
      if (!this.childNodes) {
        return this.nodeValue || '';
      }
      return this.childNodes.map(function (child) {
        return child.textContent;
      }).join('');
    }
  }]);

  return SimpleDOMNode;
}();

var SimpleXMLParser = function (_XMLParserBase) {
  _inherits(SimpleXMLParser, _XMLParserBase);

  function SimpleXMLParser() {
    _classCallCheck(this, SimpleXMLParser);

    var _this = _possibleConstructorReturn(this, (SimpleXMLParser.__proto__ || Object.getPrototypeOf(SimpleXMLParser)).call(this));

    _this._currentFragment = null;
    _this._stack = null;
    _this._errorCode = XMLParserErrorCode.NoError;
    return _this;
  }

  _createClass(SimpleXMLParser, [{
    key: 'parseFromString',
    value: function parseFromString(data) {
      this._currentFragment = [];
      this._stack = [];
      this._errorCode = XMLParserErrorCode.NoError;
      this.parseXml(data);
      if (this._errorCode !== XMLParserErrorCode.NoError) {
        return undefined;
      }

      var _currentFragment = _slicedToArray(this._currentFragment, 1),
          documentElement = _currentFragment[0];

      if (!documentElement) {
        return undefined;
      }
      return { documentElement: documentElement };
    }
  }, {
    key: 'onResolveEntity',
    value: function onResolveEntity(name) {
      switch (name) {
        case 'apos':
          return '\'';
      }
      return _get(SimpleXMLParser.prototype.__proto__ || Object.getPrototypeOf(SimpleXMLParser.prototype), 'onResolveEntity', this).call(this, name);
    }
  }, {
    key: 'onText',
    value: function onText(text) {
      if (isWhitespaceString(text)) {
        return;
      }
      var node = new SimpleDOMNode('#text', text);
      this._currentFragment.push(node);
    }
  }, {
    key: 'onCdata',
    value: function onCdata(text) {
      var node = new SimpleDOMNode('#text', text);
      this._currentFragment.push(node);
    }
  }, {
    key: 'onBeginElement',
    value: function onBeginElement(name, attributes, isEmpty) {
      var node = new SimpleDOMNode(name);
      node.childNodes = [];
      this._currentFragment.push(node);
      if (isEmpty) {
        return;
      }
      this._stack.push(this._currentFragment);
      this._currentFragment = node.childNodes;
    }
  }, {
    key: 'onEndElement',
    value: function onEndElement(name) {
      this._currentFragment = this._stack.pop();
      var lastElement = this._currentFragment[this._currentFragment.length - 1];
      for (var i = 0, ii = lastElement.childNodes.length; i < ii; i++) {
        lastElement.childNodes[i].parentNode = lastElement;
      }
    }
  }, {
    key: 'onError',
    value: function onError(code) {
      this._errorCode = code;
    }
  }]);

  return SimpleXMLParser;
}(XMLParserBase);

exports.SimpleXMLParser = SimpleXMLParser;

/***/ }),
/* 143 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDFDataTransportStream = undefined;

var _regenerator = __w_pdfjs_require__(137);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _util = __w_pdfjs_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var PDFDataTransportStream = function PDFDataTransportStreamClosure() {
  function PDFDataTransportStream(params, pdfDataRangeTransport) {
    var _this = this;

    (0, _util.assert)(pdfDataRangeTransport);
    this._queuedChunks = [];
    var initialData = params.initialData;
    if (initialData && initialData.length > 0) {
      var buffer = new Uint8Array(initialData).buffer;
      this._queuedChunks.push(buffer);
    }
    this._pdfDataRangeTransport = pdfDataRangeTransport;
    this._isStreamingSupported = !params.disableStream;
    this._isRangeSupported = !params.disableRange;
    this._contentLength = params.length;
    this._fullRequestReader = null;
    this._rangeReaders = [];
    this._pdfDataRangeTransport.addRangeListener(function (begin, chunk) {
      _this._onReceiveData({
        begin: begin,
        chunk: chunk
      });
    });
    this._pdfDataRangeTransport.addProgressListener(function (loaded) {
      _this._onProgress({ loaded: loaded });
    });
    this._pdfDataRangeTransport.addProgressiveReadListener(function (chunk) {
      _this._onReceiveData({ chunk: chunk });
    });
    this._pdfDataRangeTransport.transportReady();
  }
  PDFDataTransportStream.prototype = {
    _onReceiveData: function PDFDataTransportStream_onReceiveData(args) {
      var buffer = new Uint8Array(args.chunk).buffer;
      if (args.begin === undefined) {
        if (this._fullRequestReader) {
          this._fullRequestReader._enqueue(buffer);
        } else {
          this._queuedChunks.push(buffer);
        }
      } else {
        var found = this._rangeReaders.some(function (rangeReader) {
          if (rangeReader._begin !== args.begin) {
            return false;
          }
          rangeReader._enqueue(buffer);
          return true;
        });
        (0, _util.assert)(found);
      }
    },
    _onProgress: function PDFDataTransportStream_onDataProgress(evt) {
      if (this._rangeReaders.length > 0) {
        var firstReader = this._rangeReaders[0];
        if (firstReader.onProgress) {
          firstReader.onProgress({ loaded: evt.loaded });
        }
      }
    },
    _removeRangeReader: function PDFDataTransportStream_removeRangeReader(reader) {
      var i = this._rangeReaders.indexOf(reader);
      if (i >= 0) {
        this._rangeReaders.splice(i, 1);
      }
    },
    getFullReader: function PDFDataTransportStream_getFullReader() {
      (0, _util.assert)(!this._fullRequestReader);
      var queuedChunks = this._queuedChunks;
      this._queuedChunks = null;
      return new PDFDataTransportStreamReader(this, queuedChunks);
    },
    getRangeReader: function PDFDataTransportStream_getRangeReader(begin, end) {
      var reader = new PDFDataTransportStreamRangeReader(this, begin, end);
      this._pdfDataRangeTransport.requestDataRange(begin, end);
      this._rangeReaders.push(reader);
      return reader;
    },
    cancelAllRequests: function PDFDataTransportStream_cancelAllRequests(reason) {
      if (this._fullRequestReader) {
        this._fullRequestReader.cancel(reason);
      }
      var readers = this._rangeReaders.slice(0);
      readers.forEach(function (rangeReader) {
        rangeReader.cancel(reason);
      });
      this._pdfDataRangeTransport.abort();
    }
  };
  function PDFDataTransportStreamReader(stream, queuedChunks) {
    this._stream = stream;
    this._done = false;
    this._filename = null;
    this._queuedChunks = queuedChunks || [];
    this._requests = [];
    this._headersReady = Promise.resolve();
    stream._fullRequestReader = this;
    this.onProgress = null;
  }
  PDFDataTransportStreamReader.prototype = {
    _enqueue: function PDFDataTransportStreamReader_enqueue(chunk) {
      if (this._done) {
        return;
      }
      if (this._requests.length > 0) {
        var requestCapability = this._requests.shift();
        requestCapability.resolve({
          value: chunk,
          done: false
        });
        return;
      }
      this._queuedChunks.push(chunk);
    },
    get headersReady() {
      return this._headersReady;
    },
    get filename() {
      return this._filename;
    },
    get isRangeSupported() {
      return this._stream._isRangeSupported;
    },
    get isStreamingSupported() {
      return this._stream._isStreamingSupported;
    },
    get contentLength() {
      return this._stream._contentLength;
    },
    read: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var chunk, requestCapability;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this._queuedChunks.length > 0)) {
                  _context.next = 3;
                  break;
                }

                chunk = this._queuedChunks.shift();
                return _context.abrupt('return', {
                  value: chunk,
                  done: false
                });

              case 3:
                if (!this._done) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt('return', {
                  value: undefined,
                  done: true
                });

              case 5:
                requestCapability = (0, _util.createPromiseCapability)();

                this._requests.push(requestCapability);
                return _context.abrupt('return', requestCapability.promise);

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function read() {
        return _ref.apply(this, arguments);
      }

      return read;
    }(),

    cancel: function PDFDataTransportStreamReader_cancel(reason) {
      this._done = true;
      this._requests.forEach(function (requestCapability) {
        requestCapability.resolve({
          value: undefined,
          done: true
        });
      });
      this._requests = [];
    }
  };
  function PDFDataTransportStreamRangeReader(stream, begin, end) {
    this._stream = stream;
    this._begin = begin;
    this._end = end;
    this._queuedChunk = null;
    this._requests = [];
    this._done = false;
    this.onProgress = null;
  }
  PDFDataTransportStreamRangeReader.prototype = {
    _enqueue: function PDFDataTransportStreamRangeReader_enqueue(chunk) {
      if (this._done) {
        return;
      }
      if (this._requests.length === 0) {
        this._queuedChunk = chunk;
      } else {
        var requestsCapability = this._requests.shift();
        requestsCapability.resolve({
          value: chunk,
          done: false
        });
        this._requests.forEach(function (requestCapability) {
          requestCapability.resolve({
            value: undefined,
            done: true
          });
        });
        this._requests = [];
      }
      this._done = true;
      this._stream._removeRangeReader(this);
    },
    get isStreamingSupported() {
      return false;
    },
    read: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var chunk, requestCapability;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this._queuedChunk) {
                  _context2.next = 4;
                  break;
                }

                chunk = this._queuedChunk;

                this._queuedChunk = null;
                return _context2.abrupt('return', {
                  value: chunk,
                  done: false
                });

              case 4:
                if (!this._done) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt('return', {
                  value: undefined,
                  done: true
                });

              case 6:
                requestCapability = (0, _util.createPromiseCapability)();

                this._requests.push(requestCapability);
                return _context2.abrupt('return', requestCapability.promise);

              case 9:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function read() {
        return _ref2.apply(this, arguments);
      }

      return read;
    }(),

    cancel: function PDFDataTransportStreamRangeReader_cancel(reason) {
      this._done = true;
      this._requests.forEach(function (requestCapability) {
        requestCapability.resolve({
          value: undefined,
          done: true
        });
      });
      this._requests = [];
      this._stream._removeRangeReader(this);
    }
  };
  return PDFDataTransportStream;
}();
exports.PDFDataTransportStream = PDFDataTransportStream;

/***/ }),
/* 144 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebGLContext = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __w_pdfjs_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WebGLContext = function () {
  function WebGLContext(_ref) {
    var _ref$enable = _ref.enable,
        enable = _ref$enable === undefined ? false : _ref$enable;

    _classCallCheck(this, WebGLContext);

    this._enabled = enable === true;
  }

  _createClass(WebGLContext, [{
    key: 'composeSMask',
    value: function composeSMask(_ref2) {
      var layer = _ref2.layer,
          mask = _ref2.mask,
          properties = _ref2.properties;

      return WebGLUtils.composeSMask(layer, mask, properties);
    }
  }, {
    key: 'drawFigures',
    value: function drawFigures(_ref3) {
      var width = _ref3.width,
          height = _ref3.height,
          backgroundColor = _ref3.backgroundColor,
          figures = _ref3.figures,
          context = _ref3.context;

      return WebGLUtils.drawFigures(width, height, backgroundColor, figures, context);
    }
  }, {
    key: 'clear',
    value: function clear() {
      WebGLUtils.cleanup();
    }
  }, {
    key: 'isEnabled',
    get: function get() {
      var enabled = this._enabled;
      if (enabled) {
        enabled = WebGLUtils.tryInitGL();
      }
      return (0, _util.shadow)(this, 'isEnabled', enabled);
    }
  }]);

  return WebGLContext;
}();

var WebGLUtils = function WebGLUtilsClosure() {
  function loadShader(gl, code, shaderType) {
    var shader = gl.createShader(shaderType);
    gl.shaderSource(shader, code);
    gl.compileShader(shader);
    var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!compiled) {
      var errorMsg = gl.getShaderInfoLog(shader);
      throw new Error('Error during shader compilation: ' + errorMsg);
    }
    return shader;
  }
  function createVertexShader(gl, code) {
    return loadShader(gl, code, gl.VERTEX_SHADER);
  }
  function createFragmentShader(gl, code) {
    return loadShader(gl, code, gl.FRAGMENT_SHADER);
  }
  function createProgram(gl, shaders) {
    var program = gl.createProgram();
    for (var i = 0, ii = shaders.length; i < ii; ++i) {
      gl.attachShader(program, shaders[i]);
    }
    gl.linkProgram(program);
    var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!linked) {
      var errorMsg = gl.getProgramInfoLog(program);
      throw new Error('Error during program linking: ' + errorMsg);
    }
    return program;
  }
  function createTexture(gl, image, textureId) {
    gl.activeTexture(textureId);
    var texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    return texture;
  }
  var currentGL, currentCanvas;
  function generateGL() {
    if (currentGL) {
      return;
    }
    currentCanvas = document.createElement('canvas');
    currentGL = currentCanvas.getContext('webgl', { premultipliedalpha: false });
  }
  var smaskVertexShaderCode = '\
  attribute vec2 a_position;                                    \
  attribute vec2 a_texCoord;                                    \
                                                                \
  uniform vec2 u_resolution;                                    \
                                                                \
  varying vec2 v_texCoord;                                      \
                                                                \
  void main() {                                                 \
    vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;   \
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);          \
                                                                \
    v_texCoord = a_texCoord;                                    \
  }                                                             ';
  var smaskFragmentShaderCode = '\
  precision mediump float;                                      \
                                                                \
  uniform vec4 u_backdrop;                                      \
  uniform int u_subtype;                                        \
  uniform sampler2D u_image;                                    \
  uniform sampler2D u_mask;                                     \
                                                                \
  varying vec2 v_texCoord;                                      \
                                                                \
  void main() {                                                 \
    vec4 imageColor = texture2D(u_image, v_texCoord);           \
    vec4 maskColor = texture2D(u_mask, v_texCoord);             \
    if (u_backdrop.a > 0.0) {                                   \
      maskColor.rgb = maskColor.rgb * maskColor.a +             \
                      u_backdrop.rgb * (1.0 - maskColor.a);     \
    }                                                           \
    float lum;                                                  \
    if (u_subtype == 0) {                                       \
      lum = maskColor.a;                                        \
    } else {                                                    \
      lum = maskColor.r * 0.3 + maskColor.g * 0.59 +            \
            maskColor.b * 0.11;                                 \
    }                                                           \
    imageColor.a *= lum;                                        \
    imageColor.rgb *= imageColor.a;                             \
    gl_FragColor = imageColor;                                  \
  }                                                             ';
  var smaskCache = null;
  function initSmaskGL() {
    var canvas, gl;
    generateGL();
    canvas = currentCanvas;
    currentCanvas = null;
    gl = currentGL;
    currentGL = null;
    var vertexShader = createVertexShader(gl, smaskVertexShaderCode);
    var fragmentShader = createFragmentShader(gl, smaskFragmentShaderCode);
    var program = createProgram(gl, [vertexShader, fragmentShader]);
    gl.useProgram(program);
    var cache = {};
    cache.gl = gl;
    cache.canvas = canvas;
    cache.resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    cache.positionLocation = gl.getAttribLocation(program, 'a_position');
    cache.backdropLocation = gl.getUniformLocation(program, 'u_backdrop');
    cache.subtypeLocation = gl.getUniformLocation(program, 'u_subtype');
    var texCoordLocation = gl.getAttribLocation(program, 'a_texCoord');
    var texLayerLocation = gl.getUniformLocation(program, 'u_image');
    var texMaskLocation = gl.getUniformLocation(program, 'u_mask');
    var texCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(texCoordLocation);
    gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);
    gl.uniform1i(texLayerLocation, 0);
    gl.uniform1i(texMaskLocation, 1);
    smaskCache = cache;
  }
  function composeSMask(layer, mask, properties) {
    var width = layer.width,
        height = layer.height;
    if (!smaskCache) {
      initSmaskGL();
    }
    var cache = smaskCache,
        canvas = cache.canvas,
        gl = cache.gl;
    canvas.width = width;
    canvas.height = height;
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.uniform2f(cache.resolutionLocation, width, height);
    if (properties.backdrop) {
      gl.uniform4f(cache.resolutionLocation, properties.backdrop[0], properties.backdrop[1], properties.backdrop[2], 1);
    } else {
      gl.uniform4f(cache.resolutionLocation, 0, 0, 0, 0);
    }
    gl.uniform1i(cache.subtypeLocation, properties.subtype === 'Luminosity' ? 1 : 0);
    var texture = createTexture(gl, layer, gl.TEXTURE0);
    var maskTexture = createTexture(gl, mask, gl.TEXTURE1);
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, width, 0, 0, height, 0, height, width, 0, width, height]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(cache.positionLocation);
    gl.vertexAttribPointer(cache.positionLocation, 2, gl.FLOAT, false, 0, 0);
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    gl.flush();
    gl.deleteTexture(texture);
    gl.deleteTexture(maskTexture);
    gl.deleteBuffer(buffer);
    return canvas;
  }
  var figuresVertexShaderCode = '\
  attribute vec2 a_position;                                    \
  attribute vec3 a_color;                                       \
                                                                \
  uniform vec2 u_resolution;                                    \
  uniform vec2 u_scale;                                         \
  uniform vec2 u_offset;                                        \
                                                                \
  varying vec4 v_color;                                         \
                                                                \
  void main() {                                                 \
    vec2 position = (a_position + u_offset) * u_scale;          \
    vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;     \
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);          \
                                                                \
    v_color = vec4(a_color / 255.0, 1.0);                       \
  }                                                             ';
  var figuresFragmentShaderCode = '\
  precision mediump float;                                      \
                                                                \
  varying vec4 v_color;                                         \
                                                                \
  void main() {                                                 \
    gl_FragColor = v_color;                                     \
  }                                                             ';
  var figuresCache = null;
  function initFiguresGL() {
    var canvas, gl;
    generateGL();
    canvas = currentCanvas;
    currentCanvas = null;
    gl = currentGL;
    currentGL = null;
    var vertexShader = createVertexShader(gl, figuresVertexShaderCode);
    var fragmentShader = createFragmentShader(gl, figuresFragmentShaderCode);
    var program = createProgram(gl, [vertexShader, fragmentShader]);
    gl.useProgram(program);
    var cache = {};
    cache.gl = gl;
    cache.canvas = canvas;
    cache.resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    cache.scaleLocation = gl.getUniformLocation(program, 'u_scale');
    cache.offsetLocation = gl.getUniformLocation(program, 'u_offset');
    cache.positionLocation = gl.getAttribLocation(program, 'a_position');
    cache.colorLocation = gl.getAttribLocation(program, 'a_color');
    figuresCache = cache;
  }
  function drawFigures(width, height, backgroundColor, figures, context) {
    if (!figuresCache) {
      initFiguresGL();
    }
    var cache = figuresCache,
        canvas = cache.canvas,
        gl = cache.gl;
    canvas.width = width;
    canvas.height = height;
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.uniform2f(cache.resolutionLocation, width, height);
    var count = 0;
    var i, ii, rows;
    for (i = 0, ii = figures.length; i < ii; i++) {
      switch (figures[i].type) {
        case 'lattice':
          rows = figures[i].coords.length / figures[i].verticesPerRow | 0;
          count += (rows - 1) * (figures[i].verticesPerRow - 1) * 6;
          break;
        case 'triangles':
          count += figures[i].coords.length;
          break;
      }
    }
    var coords = new Float32Array(count * 2);
    var colors = new Uint8Array(count * 3);
    var coordsMap = context.coords,
        colorsMap = context.colors;
    var pIndex = 0,
        cIndex = 0;
    for (i = 0, ii = figures.length; i < ii; i++) {
      var figure = figures[i],
          ps = figure.coords,
          cs = figure.colors;
      switch (figure.type) {
        case 'lattice':
          var cols = figure.verticesPerRow;
          rows = ps.length / cols | 0;
          for (var row = 1; row < rows; row++) {
            var offset = row * cols + 1;
            for (var col = 1; col < cols; col++, offset++) {
              coords[pIndex] = coordsMap[ps[offset - cols - 1]];
              coords[pIndex + 1] = coordsMap[ps[offset - cols - 1] + 1];
              coords[pIndex + 2] = coordsMap[ps[offset - cols]];
              coords[pIndex + 3] = coordsMap[ps[offset - cols] + 1];
              coords[pIndex + 4] = coordsMap[ps[offset - 1]];
              coords[pIndex + 5] = coordsMap[ps[offset - 1] + 1];
              colors[cIndex] = colorsMap[cs[offset - cols - 1]];
              colors[cIndex + 1] = colorsMap[cs[offset - cols - 1] + 1];
              colors[cIndex + 2] = colorsMap[cs[offset - cols - 1] + 2];
              colors[cIndex + 3] = colorsMap[cs[offset - cols]];
              colors[cIndex + 4] = colorsMap[cs[offset - cols] + 1];
              colors[cIndex + 5] = colorsMap[cs[offset - cols] + 2];
              colors[cIndex + 6] = colorsMap[cs[offset - 1]];
              colors[cIndex + 7] = colorsMap[cs[offset - 1] + 1];
              colors[cIndex + 8] = colorsMap[cs[offset - 1] + 2];
              coords[pIndex + 6] = coords[pIndex + 2];
              coords[pIndex + 7] = coords[pIndex + 3];
              coords[pIndex + 8] = coords[pIndex + 4];
              coords[pIndex + 9] = coords[pIndex + 5];
              coords[pIndex + 10] = coordsMap[ps[offset]];
              coords[pIndex + 11] = coordsMap[ps[offset] + 1];
              colors[cIndex + 9] = colors[cIndex + 3];
              colors[cIndex + 10] = colors[cIndex + 4];
              colors[cIndex + 11] = colors[cIndex + 5];
              colors[cIndex + 12] = colors[cIndex + 6];
              colors[cIndex + 13] = colors[cIndex + 7];
              colors[cIndex + 14] = colors[cIndex + 8];
              colors[cIndex + 15] = colorsMap[cs[offset]];
              colors[cIndex + 16] = colorsMap[cs[offset] + 1];
              colors[cIndex + 17] = colorsMap[cs[offset] + 2];
              pIndex += 12;
              cIndex += 18;
            }
          }
          break;
        case 'triangles':
          for (var j = 0, jj = ps.length; j < jj; j++) {
            coords[pIndex] = coordsMap[ps[j]];
            coords[pIndex + 1] = coordsMap[ps[j] + 1];
            colors[cIndex] = colorsMap[cs[j]];
            colors[cIndex + 1] = colorsMap[cs[j] + 1];
            colors[cIndex + 2] = colorsMap[cs[j] + 2];
            pIndex += 2;
            cIndex += 3;
          }
          break;
      }
    }
    if (backgroundColor) {
      gl.clearColor(backgroundColor[0] / 255, backgroundColor[1] / 255, backgroundColor[2] / 255, 1.0);
    } else {
      gl.clearColor(0, 0, 0, 0);
    }
    gl.clear(gl.COLOR_BUFFER_BIT);
    var coordsBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, coordsBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, coords, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(cache.positionLocation);
    gl.vertexAttribPointer(cache.positionLocation, 2, gl.FLOAT, false, 0, 0);
    var colorsBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorsBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(cache.colorLocation);
    gl.vertexAttribPointer(cache.colorLocation, 3, gl.UNSIGNED_BYTE, false, 0, 0);
    gl.uniform2f(cache.scaleLocation, context.scaleX, context.scaleY);
    gl.uniform2f(cache.offsetLocation, context.offsetX, context.offsetY);
    gl.drawArrays(gl.TRIANGLES, 0, count);
    gl.flush();
    gl.deleteBuffer(coordsBuffer);
    gl.deleteBuffer(colorsBuffer);
    return canvas;
  }
  return {
    tryInitGL: function tryInitGL() {
      try {
        generateGL();
        return !!currentGL;
      } catch (ex) {}
      return false;
    },

    composeSMask: composeSMask,
    drawFigures: drawFigures,
    cleanup: function cleanup() {
      if (smaskCache && smaskCache.canvas) {
        smaskCache.canvas.width = 0;
        smaskCache.canvas.height = 0;
      }
      if (figuresCache && figuresCache.canvas) {
        figuresCache.canvas.width = 0;
        figuresCache.canvas.height = 0;
      }
      smaskCache = null;
      figuresCache = null;
    }
  };
}();
exports.WebGLContext = WebGLContext;

/***/ }),
/* 145 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderTextLayer = undefined;

var _util = __w_pdfjs_require__(1);

var _global_scope = __w_pdfjs_require__(3);

var _global_scope2 = _interopRequireDefault(_global_scope);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderTextLayer = function renderTextLayerClosure() {
  var MAX_TEXT_DIVS_TO_RENDER = 100000;
  var NonWhitespaceRegexp = /\S/;
  function isAllWhitespace(str) {
    return !NonWhitespaceRegexp.test(str);
  }
  var styleBuf = ['left: ', 0, 'px; top: ', 0, 'px; font-size: ', 0, 'px; font-family: ', '', ';'];
  function appendText(task, geom, styles) {
    var textDiv = document.createElement('div');
    var textDivProperties = {
      style: null,
      angle: 0,
      canvasWidth: 0,
      isWhitespace: false,
      originalTransform: null,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      scale: 1
    };
    task._textDivs.push(textDiv);
    if (isAllWhitespace(geom.str)) {
      textDivProperties.isWhitespace = true;
      task._textDivProperties.set(textDiv, textDivProperties);
      return;
    }
    var tx = _util.Util.transform(task._viewport.transform, geom.transform);
    var angle = Math.atan2(tx[1], tx[0]);
    var style = styles[geom.fontName];
    if (style.vertical) {
      angle += Math.PI / 2;
    }
    var fontHeight = Math.sqrt(tx[2] * tx[2] + tx[3] * tx[3]);
    var fontAscent = fontHeight;
    if (style.ascent) {
      fontAscent = style.ascent * fontAscent;
    } else if (style.descent) {
      fontAscent = (1 + style.descent) * fontAscent;
    }
    var left;
    var top;
    if (angle === 0) {
      left = tx[4];
      top = tx[5] - fontAscent;
    } else {
      left = tx[4] + fontAscent * Math.sin(angle);
      top = tx[5] - fontAscent * Math.cos(angle);
    }
    styleBuf[1] = left;
    styleBuf[3] = top;
    styleBuf[5] = fontHeight;
    styleBuf[7] = style.fontFamily;
    textDivProperties.style = styleBuf.join('');
    textDiv.setAttribute('style', textDivProperties.style);
    textDiv.textContent = geom.str;
    if (task._fontInspectorEnabled) {
      textDiv.dataset.fontName = geom.fontName;
    }
    if (angle !== 0) {
      textDivProperties.angle = angle * (180 / Math.PI);
    }
    if (geom.str.length > 1) {
      if (style.vertical) {
        textDivProperties.canvasWidth = geom.height * task._viewport.scale;
      } else {
        textDivProperties.canvasWidth = geom.width * task._viewport.scale;
      }
    }
    task._textDivProperties.set(textDiv, textDivProperties);
    if (task._textContentStream) {
      task._layoutText(textDiv);
    }
    if (task._enhanceTextSelection) {
      var angleCos = 1,
          angleSin = 0;
      if (angle !== 0) {
        angleCos = Math.cos(angle);
        angleSin = Math.sin(angle);
      }
      var divWidth = (style.vertical ? geom.height : geom.width) * task._viewport.scale;
      var divHeight = fontHeight;
      var m, b;
      if (angle !== 0) {
        m = [angleCos, angleSin, -angleSin, angleCos, left, top];
        b = _util.Util.getAxialAlignedBoundingBox([0, 0, divWidth, divHeight], m);
      } else {
        b = [left, top, left + divWidth, top + divHeight];
      }
      task._bounds.push({
        left: b[0],
        top: b[1],
        right: b[2],
        bottom: b[3],
        div: textDiv,
        size: [divWidth, divHeight],
        m: m
      });
    }
  }
  function render(task) {
    if (task._canceled) {
      return;
    }
    var textDivs = task._textDivs;
    var capability = task._capability;
    var textDivsLength = textDivs.length;
    if (textDivsLength > MAX_TEXT_DIVS_TO_RENDER) {
      task._renderingDone = true;
      capability.resolve();
      return;
    }
    if (!task._textContentStream) {
      for (var i = 0; i < textDivsLength; i++) {
        task._layoutText(textDivs[i]);
      }
    }
    task._renderingDone = true;
    capability.resolve();
  }
  function expand(task) {
    var bounds = task._bounds;
    var viewport = task._viewport;
    var expanded = expandBounds(viewport.width, viewport.height, bounds);
    for (var i = 0; i < expanded.length; i++) {
      var div = bounds[i].div;
      var divProperties = task._textDivProperties.get(div);
      if (divProperties.angle === 0) {
        divProperties.paddingLeft = bounds[i].left - expanded[i].left;
        divProperties.paddingTop = bounds[i].top - expanded[i].top;
        divProperties.paddingRight = expanded[i].right - bounds[i].right;
        divProperties.paddingBottom = expanded[i].bottom - bounds[i].bottom;
        task._textDivProperties.set(div, divProperties);
        continue;
      }
      var e = expanded[i],
          b = bounds[i];
      var m = b.m,
          c = m[0],
          s = m[1];
      var points = [[0, 0], [0, b.size[1]], [b.size[0], 0], b.size];
      var ts = new Float64Array(64);
      points.forEach(function (p, i) {
        var t = _util.Util.applyTransform(p, m);
        ts[i + 0] = c && (e.left - t[0]) / c;
        ts[i + 4] = s && (e.top - t[1]) / s;
        ts[i + 8] = c && (e.right - t[0]) / c;
        ts[i + 12] = s && (e.bottom - t[1]) / s;
        ts[i + 16] = s && (e.left - t[0]) / -s;
        ts[i + 20] = c && (e.top - t[1]) / c;
        ts[i + 24] = s && (e.right - t[0]) / -s;
        ts[i + 28] = c && (e.bottom - t[1]) / c;
        ts[i + 32] = c && (e.left - t[0]) / -c;
        ts[i + 36] = s && (e.top - t[1]) / -s;
        ts[i + 40] = c && (e.right - t[0]) / -c;
        ts[i + 44] = s && (e.bottom - t[1]) / -s;
        ts[i + 48] = s && (e.left - t[0]) / s;
        ts[i + 52] = c && (e.top - t[1]) / -c;
        ts[i + 56] = s && (e.right - t[0]) / s;
        ts[i + 60] = c && (e.bottom - t[1]) / -c;
      });
      var findPositiveMin = function findPositiveMin(ts, offset, count) {
        var result = 0;
        for (var i = 0; i < count; i++) {
          var t = ts[offset++];
          if (t > 0) {
            result = result ? Math.min(t, result) : t;
          }
        }
        return result;
      };
      var boxScale = 1 + Math.min(Math.abs(c), Math.abs(s));
      divProperties.paddingLeft = findPositiveMin(ts, 32, 16) / boxScale;
      divProperties.paddingTop = findPositiveMin(ts, 48, 16) / boxScale;
      divProperties.paddingRight = findPositiveMin(ts, 0, 16) / boxScale;
      divProperties.paddingBottom = findPositiveMin(ts, 16, 16) / boxScale;
      task._textDivProperties.set(div, divProperties);
    }
  }
  function expandBounds(width, height, boxes) {
    var bounds = boxes.map(function (box, i) {
      return {
        x1: box.left,
        y1: box.top,
        x2: box.right,
        y2: box.bottom,
        index: i,
        x1New: undefined,
        x2New: undefined
      };
    });
    expandBoundsLTR(width, bounds);
    var expanded = new Array(boxes.length);
    bounds.forEach(function (b) {
      var i = b.index;
      expanded[i] = {
        left: b.x1New,
        top: 0,
        right: b.x2New,
        bottom: 0
      };
    });
    boxes.map(function (box, i) {
      var e = expanded[i],
          b = bounds[i];
      b.x1 = box.top;
      b.y1 = width - e.right;
      b.x2 = box.bottom;
      b.y2 = width - e.left;
      b.index = i;
      b.x1New = undefined;
      b.x2New = undefined;
    });
    expandBoundsLTR(height, bounds);
    bounds.forEach(function (b) {
      var i = b.index;
      expanded[i].top = b.x1New;
      expanded[i].bottom = b.x2New;
    });
    return expanded;
  }
  function expandBoundsLTR(width, bounds) {
    bounds.sort(function (a, b) {
      return a.x1 - b.x1 || a.index - b.index;
    });
    var fakeBoundary = {
      x1: -Infinity,
      y1: -Infinity,
      x2: 0,
      y2: Infinity,
      index: -1,
      x1New: 0,
      x2New: 0
    };
    var horizon = [{
      start: -Infinity,
      end: Infinity,
      boundary: fakeBoundary
    }];
    bounds.forEach(function (boundary) {
      var i = 0;
      while (i < horizon.length && horizon[i].end <= boundary.y1) {
        i++;
      }
      var j = horizon.length - 1;
      while (j >= 0 && horizon[j].start >= boundary.y2) {
        j--;
      }
      var horizonPart, affectedBoundary;
      var q,
          k,
          maxXNew = -Infinity;
      for (q = i; q <= j; q++) {
        horizonPart = horizon[q];
        affectedBoundary = horizonPart.boundary;
        var xNew;
        if (affectedBoundary.x2 > boundary.x1) {
          xNew = affectedBoundary.index > boundary.index ? affectedBoundary.x1New : boundary.x1;
        } else if (affectedBoundary.x2New === undefined) {
          xNew = (affectedBoundary.x2 + boundary.x1) / 2;
        } else {
          xNew = affectedBoundary.x2New;
        }
        if (xNew > maxXNew) {
          maxXNew = xNew;
        }
      }
      boundary.x1New = maxXNew;
      for (q = i; q <= j; q++) {
        horizonPart = horizon[q];
        affectedBoundary = horizonPart.boundary;
        if (affectedBoundary.x2New === undefined) {
          if (affectedBoundary.x2 > boundary.x1) {
            if (affectedBoundary.index > boundary.index) {
              affectedBoundary.x2New = affectedBoundary.x2;
            }
          } else {
            affectedBoundary.x2New = maxXNew;
          }
        } else if (affectedBoundary.x2New > maxXNew) {
          affectedBoundary.x2New = Math.max(maxXNew, affectedBoundary.x2);
        }
      }
      var changedHorizon = [],
          lastBoundary = null;
      for (q = i; q <= j; q++) {
        horizonPart = horizon[q];
        affectedBoundary = horizonPart.boundary;
        var useBoundary = affectedBoundary.x2 > boundary.x2 ? affectedBoundary : boundary;
        if (lastBoundary === useBoundary) {
          changedHorizon[changedHorizon.length - 1].end = horizonPart.end;
        } else {
          changedHorizon.push({
            start: horizonPart.start,
            end: horizonPart.end,
            boundary: useBoundary
          });
          lastBoundary = useBoundary;
        }
      }
      if (horizon[i].start < boundary.y1) {
        changedHorizon[0].start = boundary.y1;
        changedHorizon.unshift({
          start: horizon[i].start,
          end: boundary.y1,
          boundary: horizon[i].boundary
        });
      }
      if (boundary.y2 < horizon[j].end) {
        changedHorizon[changedHorizon.length - 1].end = boundary.y2;
        changedHorizon.push({
          start: boundary.y2,
          end: horizon[j].end,
          boundary: horizon[j].boundary
        });
      }
      for (q = i; q <= j; q++) {
        horizonPart = horizon[q];
        affectedBoundary = horizonPart.boundary;
        if (affectedBoundary.x2New !== undefined) {
          continue;
        }
        var used = false;
        for (k = i - 1; !used && k >= 0 && horizon[k].start >= affectedBoundary.y1; k--) {
          used = horizon[k].boundary === affectedBoundary;
        }
        for (k = j + 1; !used && k < horizon.length && horizon[k].end <= affectedBoundary.y2; k++) {
          used = horizon[k].boundary === affectedBoundary;
        }
        for (k = 0; !used && k < changedHorizon.length; k++) {
          used = changedHorizon[k].boundary === affectedBoundary;
        }
        if (!used) {
          affectedBoundary.x2New = maxXNew;
        }
      }
      Array.prototype.splice.apply(horizon, [i, j - i + 1].concat(changedHorizon));
    });
    horizon.forEach(function (horizonPart) {
      var affectedBoundary = horizonPart.boundary;
      if (affectedBoundary.x2New === undefined) {
        affectedBoundary.x2New = Math.max(width, affectedBoundary.x2);
      }
    });
  }
  function TextLayerRenderTask(_ref) {
    var textContent = _ref.textContent,
        textContentStream = _ref.textContentStream,
        container = _ref.container,
        viewport = _ref.viewport,
        textDivs = _ref.textDivs,
        textContentItemsStr = _ref.textContentItemsStr,
        enhanceTextSelection = _ref.enhanceTextSelection;

    this._textContent = textContent;
    this._textContentStream = textContentStream;
    this._container = container;
    this._viewport = viewport;
    this._textDivs = textDivs || [];
    this._textContentItemsStr = textContentItemsStr || [];
    this._enhanceTextSelection = !!enhanceTextSelection;
    this._fontInspectorEnabled = !!(_global_scope2.default.FontInspector && _global_scope2.default.FontInspector.enabled);
    this._reader = null;
    this._layoutTextLastFontSize = null;
    this._layoutTextLastFontFamily = null;
    this._layoutTextCtx = null;
    this._textDivProperties = new WeakMap();
    this._renderingDone = false;
    this._canceled = false;
    this._capability = (0, _util.createPromiseCapability)();
    this._renderTimer = null;
    this._bounds = [];
  }
  TextLayerRenderTask.prototype = {
    get promise() {
      return this._capability.promise;
    },
    cancel: function TextLayer_cancel() {
      if (this._reader) {
        this._reader.cancel(new _util.AbortException('text layer task cancelled'));
        this._reader = null;
      }
      this._canceled = true;
      if (this._renderTimer !== null) {
        clearTimeout(this._renderTimer);
        this._renderTimer = null;
      }
      this._capability.reject('canceled');
    },
    _processItems: function _processItems(items, styleCache) {
      for (var i = 0, len = items.length; i < len; i++) {
        this._textContentItemsStr.push(items[i].str);
        appendText(this, items[i], styleCache);
      }
    },
    _layoutText: function _layoutText(textDiv) {
      var textLayerFrag = this._container;
      var textDivProperties = this._textDivProperties.get(textDiv);
      if (textDivProperties.isWhitespace) {
        return;
      }
      var fontSize = textDiv.style.fontSize;
      var fontFamily = textDiv.style.fontFamily;
      if (fontSize !== this._layoutTextLastFontSize || fontFamily !== this._layoutTextLastFontFamily) {
        this._layoutTextCtx.font = fontSize + ' ' + fontFamily;
        this._layoutTextLastFontSize = fontSize;
        this._layoutTextLastFontFamily = fontFamily;
      }
      var width = this._layoutTextCtx.measureText(textDiv.textContent).width;
      var transform = '';
      if (textDivProperties.canvasWidth !== 0 && width > 0) {
        textDivProperties.scale = textDivProperties.canvasWidth / width;
        transform = 'scaleX(' + textDivProperties.scale + ')';
      }
      if (textDivProperties.angle !== 0) {
        transform = 'rotate(' + textDivProperties.angle + 'deg) ' + transform;
      }
      if (transform !== '') {
        textDivProperties.originalTransform = transform;
        textDiv.style.transform = transform;
      }
      this._textDivProperties.set(textDiv, textDivProperties);
      textLayerFrag.appendChild(textDiv);
    },

    _render: function TextLayer_render(timeout) {
      var _this = this;

      var capability = (0, _util.createPromiseCapability)();
      var styleCache = Object.create(null);
      var canvas = document.createElement('canvas');
      canvas.mozOpaque = true;
      this._layoutTextCtx = canvas.getContext('2d', { alpha: false });
      if (this._textContent) {
        var textItems = this._textContent.items;
        var textStyles = this._textContent.styles;
        this._processItems(textItems, textStyles);
        capability.resolve();
      } else if (this._textContentStream) {
        var pump = function pump() {
          _this._reader.read().then(function (_ref2) {
            var value = _ref2.value,
                done = _ref2.done;

            if (done) {
              capability.resolve();
              return;
            }
            Object.assign(styleCache, value.styles);
            _this._processItems(value.items, styleCache);
            pump();
          }, capability.reject);
        };
        this._reader = this._textContentStream.getReader();
        pump();
      } else {
        throw new Error('Neither "textContent" nor "textContentStream"' + ' parameters specified.');
      }
      capability.promise.then(function () {
        styleCache = null;
        if (!timeout) {
          render(_this);
        } else {
          _this._renderTimer = setTimeout(function () {
            render(_this);
            _this._renderTimer = null;
          }, timeout);
        }
      }, this._capability.reject);
    },
    expandTextDivs: function TextLayer_expandTextDivs(expandDivs) {
      if (!this._enhanceTextSelection || !this._renderingDone) {
        return;
      }
      if (this._bounds !== null) {
        expand(this);
        this._bounds = null;
      }
      for (var i = 0, ii = this._textDivs.length; i < ii; i++) {
        var div = this._textDivs[i];
        var divProperties = this._textDivProperties.get(div);
        if (divProperties.isWhitespace) {
          continue;
        }
        if (expandDivs) {
          var transform = '',
              padding = '';
          if (divProperties.scale !== 1) {
            transform = 'scaleX(' + divProperties.scale + ')';
          }
          if (divProperties.angle !== 0) {
            transform = 'rotate(' + divProperties.angle + 'deg) ' + transform;
          }
          if (divProperties.paddingLeft !== 0) {
            padding += ' padding-left: ' + divProperties.paddingLeft / divProperties.scale + 'px;';
            transform += ' translateX(' + -divProperties.paddingLeft / divProperties.scale + 'px)';
          }
          if (divProperties.paddingTop !== 0) {
            padding += ' padding-top: ' + divProperties.paddingTop + 'px;';
            transform += ' translateY(' + -divProperties.paddingTop + 'px)';
          }
          if (divProperties.paddingRight !== 0) {
            padding += ' padding-right: ' + divProperties.paddingRight / divProperties.scale + 'px;';
          }
          if (divProperties.paddingBottom !== 0) {
            padding += ' padding-bottom: ' + divProperties.paddingBottom + 'px;';
          }
          if (padding !== '') {
            div.setAttribute('style', divProperties.style + padding);
          }
          if (transform !== '') {
            div.style.transform = transform;
          }
        } else {
          div.style.padding = 0;
          div.style.transform = divProperties.originalTransform || '';
        }
      }
    }
  };
  function renderTextLayer(renderParameters) {
    var task = new TextLayerRenderTask({
      textContent: renderParameters.textContent,
      textContentStream: renderParameters.textContentStream,
      container: renderParameters.container,
      viewport: renderParameters.viewport,
      textDivs: renderParameters.textDivs,
      textContentItemsStr: renderParameters.textContentItemsStr,
      enhanceTextSelection: renderParameters.enhanceTextSelection
    });
    task._render(renderParameters.timeout);
    return task;
  }
  return renderTextLayer;
}();
exports.renderTextLayer = renderTextLayer;

/***/ }),
/* 146 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnnotationLayer = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dom_utils = __w_pdfjs_require__(130);

var _util = __w_pdfjs_require__(1);

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AnnotationElementFactory = function () {
  function AnnotationElementFactory() {
    _classCallCheck(this, AnnotationElementFactory);
  }

  _createClass(AnnotationElementFactory, null, [{
    key: 'create',
    value: function create(parameters) {
      var subtype = parameters.data.annotationType;
      switch (subtype) {
        case _util.AnnotationType.LINK:
          return new LinkAnnotationElement(parameters);
        case _util.AnnotationType.TEXT:
          return new TextAnnotationElement(parameters);
        case _util.AnnotationType.WIDGET:
          var fieldType = parameters.data.fieldType;
          switch (fieldType) {
            case 'Tx':
              return new TextWidgetAnnotationElement(parameters);
            case 'Btn':
              if (parameters.data.radioButton) {
                return new RadioButtonWidgetAnnotationElement(parameters);
              } else if (parameters.data.checkBox) {
                return new CheckboxWidgetAnnotationElement(parameters);
              }
              return new PushButtonWidgetAnnotationElement(parameters);
            case 'Ch':
              return new ChoiceWidgetAnnotationElement(parameters);
          }
          return new WidgetAnnotationElement(parameters);
        case _util.AnnotationType.POPUP:
          return new PopupAnnotationElement(parameters);
        case _util.AnnotationType.LINE:
          return new LineAnnotationElement(parameters);
        case _util.AnnotationType.SQUARE:
          return new SquareAnnotationElement(parameters);
        case _util.AnnotationType.CIRCLE:
          return new CircleAnnotationElement(parameters);
        case _util.AnnotationType.POLYLINE:
          return new PolylineAnnotationElement(parameters);
        case _util.AnnotationType.INK:
          return new InkAnnotationElement(parameters);
        case _util.AnnotationType.POLYGON:
          return new PolygonAnnotationElement(parameters);
        case _util.AnnotationType.HIGHLIGHT:
          return new HighlightAnnotationElement(parameters);
        case _util.AnnotationType.UNDERLINE:
          return new UnderlineAnnotationElement(parameters);
        case _util.AnnotationType.SQUIGGLY:
          return new SquigglyAnnotationElement(parameters);
        case _util.AnnotationType.STRIKEOUT:
          return new StrikeOutAnnotationElement(parameters);
        case _util.AnnotationType.STAMP:
          return new StampAnnotationElement(parameters);
        case _util.AnnotationType.FILEATTACHMENT:
          return new FileAttachmentAnnotationElement(parameters);
        default:
          return new AnnotationElement(parameters);
      }
    }
  }]);

  return AnnotationElementFactory;
}();

var AnnotationElement = function () {
  function AnnotationElement(parameters) {
    var isRenderable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var ignoreBorder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, AnnotationElement);

    this.isRenderable = isRenderable;
    this.data = parameters.data;
    this.layer = parameters.layer;
    this.page = parameters.page;
    this.viewport = parameters.viewport;
    this.linkService = parameters.linkService;
    this.downloadManager = parameters.downloadManager;
    this.imageResourcesPath = parameters.imageResourcesPath;
    this.renderInteractiveForms = parameters.renderInteractiveForms;
    this.svgFactory = parameters.svgFactory;
    if (isRenderable) {
      this.container = this._createContainer(ignoreBorder);
    }
  }

  _createClass(AnnotationElement, [{
    key: '_createContainer',
    value: function _createContainer() {
      var ignoreBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var data = this.data,
          page = this.page,
          viewport = this.viewport;
      var container = document.createElement('section');
      var width = data.rect[2] - data.rect[0];
      var height = data.rect[3] - data.rect[1];
      container.setAttribute('data-annotation-id', data.id);
      var rect = _util.Util.normalizeRect([data.rect[0], page.view[3] - data.rect[1] + page.view[1], data.rect[2], page.view[3] - data.rect[3] + page.view[1]]);
      container.style.transform = 'matrix(' + viewport.transform.join(',') + ')';
      container.style.transformOrigin = -rect[0] + 'px ' + -rect[1] + 'px';
      if (!ignoreBorder && data.borderStyle.width > 0) {
        container.style.borderWidth = data.borderStyle.width + 'px';
        if (data.borderStyle.style !== _util.AnnotationBorderStyleType.UNDERLINE) {
          width = width - 2 * data.borderStyle.width;
          height = height - 2 * data.borderStyle.width;
        }
        var horizontalRadius = data.borderStyle.horizontalCornerRadius;
        var verticalRadius = data.borderStyle.verticalCornerRadius;
        if (horizontalRadius > 0 || verticalRadius > 0) {
          var radius = horizontalRadius + 'px / ' + verticalRadius + 'px';
          container.style.borderRadius = radius;
        }
        switch (data.borderStyle.style) {
          case _util.AnnotationBorderStyleType.SOLID:
            container.style.borderStyle = 'solid';
            break;
          case _util.AnnotationBorderStyleType.DASHED:
            container.style.borderStyle = 'dashed';
            break;
          case _util.AnnotationBorderStyleType.BEVELED:
            (0, _util.warn)('Unimplemented border style: beveled');
            break;
          case _util.AnnotationBorderStyleType.INSET:
            (0, _util.warn)('Unimplemented border style: inset');
            break;
          case _util.AnnotationBorderStyleType.UNDERLINE:
            container.style.borderBottomStyle = 'solid';
            break;
          default:
            break;
        }
        if (data.color) {
          container.style.borderColor = _util.Util.makeCssRgb(data.color[0] | 0, data.color[1] | 0, data.color[2] | 0);
        } else {
          container.style.borderWidth = 0;
        }
      }
      container.style.left = rect[0] + 'px';
      container.style.top = rect[1] + 'px';
      container.style.width = width + 'px';
      container.style.height = height + 'px';
      return container;
    }
  }, {
    key: '_createPopup',
    value: function _createPopup(container, trigger, data) {
      if (!trigger) {
        trigger = document.createElement('div');
        trigger.style.height = container.style.height;
        trigger.style.width = container.style.width;
        container.appendChild(trigger);
      }
      var popupElement = new PopupElement({
        container: container,
        trigger: trigger,
        color: data.color,
        title: data.title,
        contents: data.contents,
        hideWrapper: true
      });
      var popup = popupElement.render();
      popup.style.left = container.style.width;
      container.appendChild(popup);
    }
  }, {
    key: 'render',
    value: function render() {
      (0, _util.unreachable)('Abstract method `AnnotationElement.render` called');
    }
  }]);

  return AnnotationElement;
}();

var LinkAnnotationElement = function (_AnnotationElement) {
  _inherits(LinkAnnotationElement, _AnnotationElement);

  function LinkAnnotationElement(parameters) {
    _classCallCheck(this, LinkAnnotationElement);

    var isRenderable = !!(parameters.data.url || parameters.data.dest || parameters.data.action);
    return _possibleConstructorReturn(this, (LinkAnnotationElement.__proto__ || Object.getPrototypeOf(LinkAnnotationElement)).call(this, parameters, isRenderable));
  }

  _createClass(LinkAnnotationElement, [{
    key: 'render',
    value: function render() {
      this.container.className = 'linkAnnotation';
      var data = this.data,
          linkService = this.linkService;

      var link = document.createElement('a');
      (0, _dom_utils.addLinkAttributes)(link, {
        url: data.url,
        target: data.newWindow ? _dom_utils.LinkTarget.BLANK : linkService.externalLinkTarget,
        rel: linkService.externalLinkRel
      });
      if (!data.url) {
        if (data.action) {
          this._bindNamedAction(link, data.action);
        } else {
          this._bindLink(link, data.dest);
        }
      }
      this.container.appendChild(link);
      return this.container;
    }
  }, {
    key: '_bindLink',
    value: function _bindLink(link, destination) {
      var _this2 = this;

      link.href = this.linkService.getDestinationHash(destination);
      link.onclick = function () {
        if (destination) {
          _this2.linkService.navigateTo(destination);
        }
        return false;
      };
      if (destination) {
        link.className = 'internalLink';
      }
    }
  }, {
    key: '_bindNamedAction',
    value: function _bindNamedAction(link, action) {
      var _this3 = this;

      link.href = this.linkService.getAnchorUrl('');
      link.onclick = function () {
        _this3.linkService.executeNamedAction(action);
        return false;
      };
      link.className = 'internalLink';
    }
  }]);

  return LinkAnnotationElement;
}(AnnotationElement);

var TextAnnotationElement = function (_AnnotationElement2) {
  _inherits(TextAnnotationElement, _AnnotationElement2);

  function TextAnnotationElement(parameters) {
    _classCallCheck(this, TextAnnotationElement);

    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _possibleConstructorReturn(this, (TextAnnotationElement.__proto__ || Object.getPrototypeOf(TextAnnotationElement)).call(this, parameters, isRenderable));
  }

  _createClass(TextAnnotationElement, [{
    key: 'render',
    value: function render() {
      this.container.className = 'textAnnotation';
      var image = document.createElement('img');
      image.style.height = this.container.style.height;
      image.style.width = this.container.style.width;
      image.src = this.imageResourcesPath + 'annotation-' + this.data.name.toLowerCase() + '.svg';
      image.alt = '[{{type}} Annotation]';
      image.dataset.l10nId = 'text_annotation_type';
      image.dataset.l10nArgs = JSON.stringify({ type: this.data.name });
      if (!this.data.hasPopup) {
        this._createPopup(this.container, image, this.data);
      }
      this.container.appendChild(image);
      return this.container;
    }
  }]);

  return TextAnnotationElement;
}(AnnotationElement);

var WidgetAnnotationElement = function (_AnnotationElement3) {
  _inherits(WidgetAnnotationElement, _AnnotationElement3);

  function WidgetAnnotationElement() {
    _classCallCheck(this, WidgetAnnotationElement);

    return _possibleConstructorReturn(this, (WidgetAnnotationElement.__proto__ || Object.getPrototypeOf(WidgetAnnotationElement)).apply(this, arguments));
  }

  _createClass(WidgetAnnotationElement, [{
    key: 'render',
    value: function render() {
      return this.container;
    }
  }]);

  return WidgetAnnotationElement;
}(AnnotationElement);

var TextWidgetAnnotationElement = function (_WidgetAnnotationElem) {
  _inherits(TextWidgetAnnotationElement, _WidgetAnnotationElem);

  function TextWidgetAnnotationElement(parameters) {
    _classCallCheck(this, TextWidgetAnnotationElement);

    var isRenderable = parameters.renderInteractiveForms || !parameters.data.hasAppearance && !!parameters.data.fieldValue;
    return _possibleConstructorReturn(this, (TextWidgetAnnotationElement.__proto__ || Object.getPrototypeOf(TextWidgetAnnotationElement)).call(this, parameters, isRenderable));
  }

  _createClass(TextWidgetAnnotationElement, [{
    key: 'render',
    value: function render() {
      var TEXT_ALIGNMENT = ['left', 'center', 'right'];
      this.container.className = 'textWidgetAnnotation';
      var element = null;
      if (this.renderInteractiveForms) {
        if (this.data.multiLine) {
          element = document.createElement('textarea');
          element.textContent = this.data.fieldValue;
        } else {
          element = document.createElement('input');
          element.type = 'text';
          element.setAttribute('value', this.data.fieldValue);
        }
        element.disabled = this.data.readOnly;
        if (this.data.maxLen !== null) {
          element.maxLength = this.data.maxLen;
        }
        if (this.data.comb) {
          var fieldWidth = this.data.rect[2] - this.data.rect[0];
          var combWidth = fieldWidth / this.data.maxLen;
          element.classList.add('comb');
          element.style.letterSpacing = 'calc(' + combWidth + 'px - 1ch)';
        }
      } else {
        element = document.createElement('div');
        element.textContent = this.data.fieldValue;
        element.style.verticalAlign = 'middle';
        element.style.display = 'table-cell';
        var font = null;
        if (this.data.fontRefName) {
          font = this.page.commonObjs.getData(this.data.fontRefName);
        }
        this._setTextStyle(element, font);
      }
      if (this.data.textAlignment !== null) {
        element.style.textAlign = TEXT_ALIGNMENT[this.data.textAlignment];
      }
      this.container.appendChild(element);
      return this.container;
    }
  }, {
    key: '_setTextStyle',
    value: function _setTextStyle(element, font) {
      var style = element.style;
      style.fontSize = this.data.fontSize + 'px';
      style.direction = this.data.fontDirection < 0 ? 'rtl' : 'ltr';
      if (!font) {
        return;
      }
      style.fontWeight = font.black ? font.bold ? '900' : 'bold' : font.bold ? 'bold' : 'normal';
      style.fontStyle = font.italic ? 'italic' : 'normal';
      var fontFamily = font.loadedName ? '"' + font.loadedName + '", ' : '';
      var fallbackName = font.fallbackName || 'Helvetica, sans-serif';
      style.fontFamily = fontFamily + fallbackName;
    }
  }]);

  return TextWidgetAnnotationElement;
}(WidgetAnnotationElement);

var CheckboxWidgetAnnotationElement = function (_WidgetAnnotationElem2) {
  _inherits(CheckboxWidgetAnnotationElement, _WidgetAnnotationElem2);

  function CheckboxWidgetAnnotationElement(parameters) {
    _classCallCheck(this, CheckboxWidgetAnnotationElement);

    return _possibleConstructorReturn(this, (CheckboxWidgetAnnotationElement.__proto__ || Object.getPrototypeOf(CheckboxWidgetAnnotationElement)).call(this, parameters, parameters.renderInteractiveForms));
  }

  _createClass(CheckboxWidgetAnnotationElement, [{
    key: 'render',
    value: function render() {
      this.container.className = 'buttonWidgetAnnotation checkBox';
      var element = document.createElement('input');
      element.disabled = this.data.readOnly;
      element.type = 'checkbox';
      if (this.data.fieldValue && this.data.fieldValue !== 'Off') {
        element.setAttribute('checked', true);
      }
      this.container.appendChild(element);
      return this.container;
    }
  }]);

  return CheckboxWidgetAnnotationElement;
}(WidgetAnnotationElement);

var RadioButtonWidgetAnnotationElement = function (_WidgetAnnotationElem3) {
  _inherits(RadioButtonWidgetAnnotationElement, _WidgetAnnotationElem3);

  function RadioButtonWidgetAnnotationElement(parameters) {
    _classCallCheck(this, RadioButtonWidgetAnnotationElement);

    return _possibleConstructorReturn(this, (RadioButtonWidgetAnnotationElement.__proto__ || Object.getPrototypeOf(RadioButtonWidgetAnnotationElement)).call(this, parameters, parameters.renderInteractiveForms));
  }

  _createClass(RadioButtonWidgetAnnotationElement, [{
    key: 'render',
    value: function render() {
      this.container.className = 'buttonWidgetAnnotation radioButton';
      var element = document.createElement('input');
      element.disabled = this.data.readOnly;
      element.type = 'radio';
      element.name = this.data.fieldName;
      if (this.data.fieldValue === this.data.buttonValue) {
        element.setAttribute('checked', true);
      }
      this.container.appendChild(element);
      return this.container;
    }
  }]);

  return RadioButtonWidgetAnnotationElement;
}(WidgetAnnotationElement);

var PushButtonWidgetAnnotationElement = function (_LinkAnnotationElemen) {
  _inherits(PushButtonWidgetAnnotationElement, _LinkAnnotationElemen);

  function PushButtonWidgetAnnotationElement() {
    _classCallCheck(this, PushButtonWidgetAnnotationElement);

    return _possibleConstructorReturn(this, (PushButtonWidgetAnnotationElement.__proto__ || Object.getPrototypeOf(PushButtonWidgetAnnotationElement)).apply(this, arguments));
  }

  _createClass(PushButtonWidgetAnnotationElement, [{
    key: 'render',
    value: function render() {
      var container = _get(PushButtonWidgetAnnotationElement.prototype.__proto__ || Object.getPrototypeOf(PushButtonWidgetAnnotationElement.prototype), 'render', this).call(this);
      container.className = 'buttonWidgetAnnotation pushButton';
      return container;
    }
  }]);

  return PushButtonWidgetAnnotationElement;
}(LinkAnnotationElement);

var ChoiceWidgetAnnotationElement = function (_WidgetAnnotationElem4) {
  _inherits(ChoiceWidgetAnnotationElement, _WidgetAnnotationElem4);

  function ChoiceWidgetAnnotationElement(parameters) {
    _classCallCheck(this, ChoiceWidgetAnnotationElement);

    return _possibleConstructorReturn(this, (ChoiceWidgetAnnotationElement.__proto__ || Object.getPrototypeOf(ChoiceWidgetAnnotationElement)).call(this, parameters, parameters.renderInteractiveForms));
  }

  _createClass(ChoiceWidgetAnnotationElement, [{
    key: 'render',
    value: function render() {
      this.container.className = 'choiceWidgetAnnotation';
      var selectElement = document.createElement('select');
      selectElement.disabled = this.data.readOnly;
      if (!this.data.combo) {
        selectElement.size = this.data.options.length;
        if (this.data.multiSelect) {
          selectElement.multiple = true;
        }
      }
      for (var i = 0, ii = this.data.options.length; i < ii; i++) {
        var option = this.data.options[i];
        var optionElement = document.createElement('option');
        optionElement.textContent = option.displayValue;
        optionElement.value = option.exportValue;
        if (this.data.fieldValue.includes(option.displayValue)) {
          optionElement.setAttribute('selected', true);
        }
        selectElement.appendChild(optionElement);
      }
      this.container.appendChild(selectElement);
      return this.container;
    }
  }]);

  return ChoiceWidgetAnnotationElement;
}(WidgetAnnotationElement);

var PopupAnnotationElement = function (_AnnotationElement4) {
  _inherits(PopupAnnotationElement, _AnnotationElement4);

  function PopupAnnotationElement(parameters) {
    _classCallCheck(this, PopupAnnotationElement);

    var isRenderable = !!(parameters.data.title || parameters.data.contents);
    return _possibleConstructorReturn(this, (PopupAnnotationElement.__proto__ || Object.getPrototypeOf(PopupAnnotationElement)).call(this, parameters, isRenderable));
  }

  _createClass(PopupAnnotationElement, [{
    key: 'render',
    value: function render() {
      var IGNORE_TYPES = ['Line', 'Square', 'Circle', 'PolyLine', 'Polygon', 'Ink'];
      this.container.className = 'popupAnnotation';
      if (IGNORE_TYPES.includes(this.data.parentType)) {
        return this.container;
      }
      var selector = '[data-annotation-id="' + this.data.parentId + '"]';
      var parentElement = this.layer.querySelector(selector);
      if (!parentElement) {
        return this.container;
      }
      var popup = new PopupElement({
        container: this.container,
        trigger: parentElement,
        color: this.data.color,
        title: this.data.title,
        contents: this.data.contents
      });
      var parentLeft = parseFloat(parentElement.style.left);
      var parentWidth = parseFloat(parentElement.style.width);
      this.container.style.transformOrigin = -(parentLeft + parentWidth) + 'px -' + parentElement.style.top;
      this.container.style.left = parentLeft + parentWidth + 'px';
      this.container.appendChild(popup.render());
      return this.container;
    }
  }]);

  return PopupAnnotationElement;
}(AnnotationElement);

var PopupElement = function () {
  function PopupElement(parameters) {
    _classCallCheck(this, PopupElement);

    this.container = parameters.container;
    this.trigger = parameters.trigger;
    this.color = parameters.color;
    this.title = parameters.title;
    this.contents = parameters.contents;
    this.hideWrapper = parameters.hideWrapper || false;
    this.pinned = false;
  }

  _createClass(PopupElement, [{
    key: 'render',
    value: function render() {
      var BACKGROUND_ENLIGHT = 0.7;
      var wrapper = document.createElement('div');
      wrapper.className = 'popupWrapper';
      this.hideElement = this.hideWrapper ? wrapper : this.container;
      this.hideElement.setAttribute('hidden', true);
      var popup = document.createElement('div');
      popup.className = 'popup';
      var color = this.color;
      if (color) {
        var r = BACKGROUND_ENLIGHT * (255 - color[0]) + color[0];
        var g = BACKGROUND_ENLIGHT * (255 - color[1]) + color[1];
        var b = BACKGROUND_ENLIGHT * (255 - color[2]) + color[2];
        popup.style.backgroundColor = _util.Util.makeCssRgb(r | 0, g | 0, b | 0);
      }
      var contents = this._formatContents(this.contents);
      var title = document.createElement('h1');
      title.textContent = this.title;
      this.trigger.addEventListener('click', this._toggle.bind(this));
      this.trigger.addEventListener('mouseover', this._show.bind(this, false));
      this.trigger.addEventListener('mouseout', this._hide.bind(this, false));
      popup.addEventListener('click', this._hide.bind(this, true));
      popup.appendChild(title);
      popup.appendChild(contents);
      wrapper.appendChild(popup);
      return wrapper;
    }
  }, {
    key: '_formatContents',
    value: function _formatContents(contents) {
      var p = document.createElement('p');
      var lines = contents.split(/(?:\r\n?|\n)/);
      for (var i = 0, ii = lines.length; i < ii; ++i) {
        var line = lines[i];
        p.appendChild(document.createTextNode(line));
        if (i < ii - 1) {
          p.appendChild(document.createElement('br'));
        }
      }
      return p;
    }
  }, {
    key: '_toggle',
    value: function _toggle() {
      if (this.pinned) {
        this._hide(true);
      } else {
        this._show(true);
      }
    }
  }, {
    key: '_show',
    value: function _show() {
      var pin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (pin) {
        this.pinned = true;
      }
      if (this.hideElement.hasAttribute('hidden')) {
        this.hideElement.removeAttribute('hidden');
        this.container.style.zIndex += 1;
      }
    }
  }, {
    key: '_hide',
    value: function _hide() {
      var unpin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (unpin) {
        this.pinned = false;
      }
      if (!this.hideElement.hasAttribute('hidden') && !this.pinned) {
        this.hideElement.setAttribute('hidden', true);
        this.container.style.zIndex -= 1;
      }
    }
  }]);

  return PopupElement;
}();

var LineAnnotationElement = function (_AnnotationElement5) {
  _inherits(LineAnnotationElement, _AnnotationElement5);

  function LineAnnotationElement(parameters) {
    _classCallCheck(this, LineAnnotationElement);

    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _possibleConstructorReturn(this, (LineAnnotationElement.__proto__ || Object.getPrototypeOf(LineAnnotationElement)).call(this, parameters, isRenderable, true));
  }

  _createClass(LineAnnotationElement, [{
    key: 'render',
    value: function render() {
      this.container.className = 'lineAnnotation';
      var data = this.data;
      var width = data.rect[2] - data.rect[0];
      var height = data.rect[3] - data.rect[1];
      var svg = this.svgFactory.create(width, height);
      var line = this.svgFactory.createElement('svg:line');
      line.setAttribute('x1', data.rect[2] - data.lineCoordinates[0]);
      line.setAttribute('y1', data.rect[3] - data.lineCoordinates[1]);
      line.setAttribute('x2', data.rect[2] - data.lineCoordinates[2]);
      line.setAttribute('y2', data.rect[3] - data.lineCoordinates[3]);
      line.setAttribute('stroke-width', data.borderStyle.width);
      line.setAttribute('stroke', 'transparent');
      svg.appendChild(line);
      this.container.append(svg);
      this._createPopup(this.container, line, data);
      return this.container;
    }
  }]);

  return LineAnnotationElement;
}(AnnotationElement);

var SquareAnnotationElement = function (_AnnotationElement6) {
  _inherits(SquareAnnotationElement, _AnnotationElement6);

  function SquareAnnotationElement(parameters) {
    _classCallCheck(this, SquareAnnotationElement);

    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _possibleConstructorReturn(this, (SquareAnnotationElement.__proto__ || Object.getPrototypeOf(SquareAnnotationElement)).call(this, parameters, isRenderable, true));
  }

  _createClass(SquareAnnotationElement, [{
    key: 'render',
    value: function render() {
      this.container.className = 'squareAnnotation';
      var data = this.data;
      var width = data.rect[2] - data.rect[0];
      var height = data.rect[3] - data.rect[1];
      var svg = this.svgFactory.create(width, height);
      var borderWidth = data.borderStyle.width;
      var square = this.svgFactory.createElement('svg:rect');
      square.setAttribute('x', borderWidth / 2);
      square.setAttribute('y', borderWidth / 2);
      square.setAttribute('width', width - borderWidth);
      square.setAttribute('height', height - borderWidth);
      square.setAttribute('stroke-width', borderWidth);
      square.setAttribute('stroke', 'transparent');
      square.setAttribute('fill', 'none');
      svg.appendChild(square);
      this.container.append(svg);
      this._createPopup(this.container, square, data);
      return this.container;
    }
  }]);

  return SquareAnnotationElement;
}(AnnotationElement);

var CircleAnnotationElement = function (_AnnotationElement7) {
  _inherits(CircleAnnotationElement, _AnnotationElement7);

  function CircleAnnotationElement(parameters) {
    _classCallCheck(this, CircleAnnotationElement);

    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _possibleConstructorReturn(this, (CircleAnnotationElement.__proto__ || Object.getPrototypeOf(CircleAnnotationElement)).call(this, parameters, isRenderable, true));
  }

  _createClass(CircleAnnotationElement, [{
    key: 'render',
    value: function render() {
      this.container.className = 'circleAnnotation';
      var data = this.data;
      var width = data.rect[2] - data.rect[0];
      var height = data.rect[3] - data.rect[1];
      var svg = this.svgFactory.create(width, height);
      var borderWidth = data.borderStyle.width;
      var circle = this.svgFactory.createElement('svg:ellipse');
      circle.setAttribute('cx', width / 2);
      circle.setAttribute('cy', height / 2);
      circle.setAttribute('rx', width / 2 - borderWidth / 2);
      circle.setAttribute('ry', height / 2 - borderWidth / 2);
      circle.setAttribute('stroke-width', borderWidth);
      circle.setAttribute('stroke', 'transparent');
      circle.setAttribute('fill', 'none');
      svg.appendChild(circle);
      this.container.append(svg);
      this._createPopup(this.container, circle, data);
      return this.container;
    }
  }]);

  return CircleAnnotationElement;
}(AnnotationElement);

var PolylineAnnotationElement = function (_AnnotationElement8) {
  _inherits(PolylineAnnotationElement, _AnnotationElement8);

  function PolylineAnnotationElement(parameters) {
    _classCallCheck(this, PolylineAnnotationElement);

    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);

    var _this15 = _possibleConstructorReturn(this, (PolylineAnnotationElement.__proto__ || Object.getPrototypeOf(PolylineAnnotationElement)).call(this, parameters, isRenderable, true));

    _this15.containerClassName = 'polylineAnnotation';
    _this15.svgElementName = 'svg:polyline';
    return _this15;
  }

  _createClass(PolylineAnnotationElement, [{
    key: 'render',
    value: function render() {
      this.container.className = this.containerClassName;
      var data = this.data;
      var width = data.rect[2] - data.rect[0];
      var height = data.rect[3] - data.rect[1];
      var svg = this.svgFactory.create(width, height);
      var vertices = data.vertices;
      var points = [];
      for (var i = 0, ii = vertices.length; i < ii; i++) {
        var x = vertices[i].x - data.rect[0];
        var y = data.rect[3] - vertices[i].y;
        points.push(x + ',' + y);
      }
      points = points.join(' ');
      var borderWidth = data.borderStyle.width;
      var polyline = this.svgFactory.createElement(this.svgElementName);
      polyline.setAttribute('points', points);
      polyline.setAttribute('stroke-width', borderWidth);
      polyline.setAttribute('stroke', 'transparent');
      polyline.setAttribute('fill', 'none');
      svg.appendChild(polyline);
      this.container.append(svg);
      this._createPopup(this.container, polyline, data);
      return this.container;
    }
  }]);

  return PolylineAnnotationElement;
}(AnnotationElement);

var PolygonAnnotationElement = function (_PolylineAnnotationEl) {
  _inherits(PolygonAnnotationElement, _PolylineAnnotationEl);

  function PolygonAnnotationElement(parameters) {
    _classCallCheck(this, PolygonAnnotationElement);

    var _this16 = _possibleConstructorReturn(this, (PolygonAnnotationElement.__proto__ || Object.getPrototypeOf(PolygonAnnotationElement)).call(this, parameters));

    _this16.containerClassName = 'polygonAnnotation';
    _this16.svgElementName = 'svg:polygon';
    return _this16;
  }

  return PolygonAnnotationElement;
}(PolylineAnnotationElement);

var InkAnnotationElement = function (_AnnotationElement9) {
  _inherits(InkAnnotationElement, _AnnotationElement9);

  function InkAnnotationElement(parameters) {
    _classCallCheck(this, InkAnnotationElement);

    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);

    var _this17 = _possibleConstructorReturn(this, (InkAnnotationElement.__proto__ || Object.getPrototypeOf(InkAnnotationElement)).call(this, parameters, isRenderable, true));

    _this17.containerClassName = 'inkAnnotation';
    _this17.svgElementName = 'svg:polyline';
    return _this17;
  }

  _createClass(InkAnnotationElement, [{
    key: 'render',
    value: function render() {
      this.container.className = this.containerClassName;
      var data = this.data;
      var width = data.rect[2] - data.rect[0];
      var height = data.rect[3] - data.rect[1];
      var svg = this.svgFactory.create(width, height);
      var inkLists = data.inkLists;
      for (var i = 0, ii = inkLists.length; i < ii; i++) {
        var inkList = inkLists[i];
        var points = [];
        for (var j = 0, jj = inkList.length; j < jj; j++) {
          var x = inkList[j].x - data.rect[0];
          var y = data.rect[3] - inkList[j].y;
          points.push(x + ',' + y);
        }
        points = points.join(' ');
        var borderWidth = data.borderStyle.width;
        var polyline = this.svgFactory.createElement(this.svgElementName);
        polyline.setAttribute('points', points);
        polyline.setAttribute('stroke-width', borderWidth);
        polyline.setAttribute('stroke', 'transparent');
        polyline.setAttribute('fill', 'none');
        this._createPopup(this.container, polyline, data);
        svg.appendChild(polyline);
      }
      this.container.append(svg);
      return this.container;
    }
  }]);

  return InkAnnotationElement;
}(AnnotationElement);

var HighlightAnnotationElement = function (_AnnotationElement10) {
  _inherits(HighlightAnnotationElement, _AnnotationElement10);

  function HighlightAnnotationElement(parameters) {
    _classCallCheck(this, HighlightAnnotationElement);

    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _possibleConstructorReturn(this, (HighlightAnnotationElement.__proto__ || Object.getPrototypeOf(HighlightAnnotationElement)).call(this, parameters, isRenderable, true));
  }

  _createClass(HighlightAnnotationElement, [{
    key: 'render',
    value: function render() {
      this.container.className = 'highlightAnnotation';
      if (!this.data.hasPopup) {
        this._createPopup(this.container, null, this.data);
      }
      return this.container;
    }
  }]);

  return HighlightAnnotationElement;
}(AnnotationElement);

var UnderlineAnnotationElement = function (_AnnotationElement11) {
  _inherits(UnderlineAnnotationElement, _AnnotationElement11);

  function UnderlineAnnotationElement(parameters) {
    _classCallCheck(this, UnderlineAnnotationElement);

    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _possibleConstructorReturn(this, (UnderlineAnnotationElement.__proto__ || Object.getPrototypeOf(UnderlineAnnotationElement)).call(this, parameters, isRenderable, true));
  }

  _createClass(UnderlineAnnotationElement, [{
    key: 'render',
    value: function render() {
      this.container.className = 'underlineAnnotation';
      if (!this.data.hasPopup) {
        this._createPopup(this.container, null, this.data);
      }
      return this.container;
    }
  }]);

  return UnderlineAnnotationElement;
}(AnnotationElement);

var SquigglyAnnotationElement = function (_AnnotationElement12) {
  _inherits(SquigglyAnnotationElement, _AnnotationElement12);

  function SquigglyAnnotationElement(parameters) {
    _classCallCheck(this, SquigglyAnnotationElement);

    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _possibleConstructorReturn(this, (SquigglyAnnotationElement.__proto__ || Object.getPrototypeOf(SquigglyAnnotationElement)).call(this, parameters, isRenderable, true));
  }

  _createClass(SquigglyAnnotationElement, [{
    key: 'render',
    value: function render() {
      this.container.className = 'squigglyAnnotation';
      if (!this.data.hasPopup) {
        this._createPopup(this.container, null, this.data);
      }
      return this.container;
    }
  }]);

  return SquigglyAnnotationElement;
}(AnnotationElement);

var StrikeOutAnnotationElement = function (_AnnotationElement13) {
  _inherits(StrikeOutAnnotationElement, _AnnotationElement13);

  function StrikeOutAnnotationElement(parameters) {
    _classCallCheck(this, StrikeOutAnnotationElement);

    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _possibleConstructorReturn(this, (StrikeOutAnnotationElement.__proto__ || Object.getPrototypeOf(StrikeOutAnnotationElement)).call(this, parameters, isRenderable, true));
  }

  _createClass(StrikeOutAnnotationElement, [{
    key: 'render',
    value: function render() {
      this.container.className = 'strikeoutAnnotation';
      if (!this.data.hasPopup) {
        this._createPopup(this.container, null, this.data);
      }
      return this.container;
    }
  }]);

  return StrikeOutAnnotationElement;
}(AnnotationElement);

var StampAnnotationElement = function (_AnnotationElement14) {
  _inherits(StampAnnotationElement, _AnnotationElement14);

  function StampAnnotationElement(parameters) {
    _classCallCheck(this, StampAnnotationElement);

    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _possibleConstructorReturn(this, (StampAnnotationElement.__proto__ || Object.getPrototypeOf(StampAnnotationElement)).call(this, parameters, isRenderable, true));
  }

  _createClass(StampAnnotationElement, [{
    key: 'render',
    value: function render() {
      this.container.className = 'stampAnnotation';
      if (!this.data.hasPopup) {
        this._createPopup(this.container, null, this.data);
      }
      return this.container;
    }
  }]);

  return StampAnnotationElement;
}(AnnotationElement);

var FileAttachmentAnnotationElement = function (_AnnotationElement15) {
  _inherits(FileAttachmentAnnotationElement, _AnnotationElement15);

  function FileAttachmentAnnotationElement(parameters) {
    _classCallCheck(this, FileAttachmentAnnotationElement);

    var _this23 = _possibleConstructorReturn(this, (FileAttachmentAnnotationElement.__proto__ || Object.getPrototypeOf(FileAttachmentAnnotationElement)).call(this, parameters, true));

    var _this23$data$file = _this23.data.file,
        filename = _this23$data$file.filename,
        content = _this23$data$file.content;

    _this23.filename = (0, _dom_utils.getFilenameFromUrl)(filename);
    _this23.content = content;
    if (_this23.linkService.eventBus) {
      _this23.linkService.eventBus.dispatch('fileattachmentannotation', {
        source: _this23,
        id: (0, _util.stringToPDFString)(filename),
        filename: filename,
        content: content
      });
    }
    return _this23;
  }

  _createClass(FileAttachmentAnnotationElement, [{
    key: 'render',
    value: function render() {
      this.container.className = 'fileAttachmentAnnotation';
      var trigger = document.createElement('div');
      trigger.style.height = this.container.style.height;
      trigger.style.width = this.container.style.width;
      trigger.addEventListener('dblclick', this._download.bind(this));
      if (!this.data.hasPopup && (this.data.title || this.data.contents)) {
        this._createPopup(this.container, trigger, this.data);
      }
      this.container.appendChild(trigger);
      return this.container;
    }
  }, {
    key: '_download',
    value: function _download() {
      if (!this.downloadManager) {
        (0, _util.warn)('Download cannot be started due to unavailable download manager');
        return;
      }
      this.downloadManager.downloadData(this.content, this.filename, '');
    }
  }]);

  return FileAttachmentAnnotationElement;
}(AnnotationElement);

var AnnotationLayer = function () {
  function AnnotationLayer() {
    _classCallCheck(this, AnnotationLayer);
  }

  _createClass(AnnotationLayer, null, [{
    key: 'render',
    value: function render(parameters) {
      for (var i = 0, ii = parameters.annotations.length; i < ii; i++) {
        var data = parameters.annotations[i];
        if (!data) {
          continue;
        }
        var element = AnnotationElementFactory.create({
          data: data,
          layer: parameters.div,
          page: parameters.page,
          viewport: parameters.viewport,
          linkService: parameters.linkService,
          downloadManager: parameters.downloadManager,
          imageResourcesPath: parameters.imageResourcesPath || '',
          renderInteractiveForms: parameters.renderInteractiveForms || false,
          svgFactory: new _dom_utils.DOMSVGFactory()
        });
        if (element.isRenderable) {
          parameters.div.appendChild(element.render());
        }
      }
    }
  }, {
    key: 'update',
    value: function update(parameters) {
      for (var i = 0, ii = parameters.annotations.length; i < ii; i++) {
        var data = parameters.annotations[i];
        var element = parameters.div.querySelector('[data-annotation-id="' + data.id + '"]');
        if (element) {
          element.style.transform = 'matrix(' + parameters.viewport.transform.join(',') + ')';
        }
      }
      parameters.div.removeAttribute('hidden');
    }
  }]);

  return AnnotationLayer;
}();

exports.AnnotationLayer = AnnotationLayer;

/***/ }),
/* 147 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SVGGraphics = undefined;

var _util = __w_pdfjs_require__(1);

var _dom_utils = __w_pdfjs_require__(130);

var _is_node = __w_pdfjs_require__(4);

var _is_node2 = _interopRequireDefault(_is_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SVGGraphics = function SVGGraphics() {
  throw new Error('Not implemented: SVGGraphics');
};
{
  var SVG_DEFAULTS = {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fillColor: '#000000'
  };
  var convertImgDataToPng = function convertImgDataToPngClosure() {
    var PNG_HEADER = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
    var CHUNK_WRAPPER_SIZE = 12;
    var crcTable = new Int32Array(256);
    for (var i = 0; i < 256; i++) {
      var c = i;
      for (var h = 0; h < 8; h++) {
        if (c & 1) {
          c = 0xedB88320 ^ c >> 1 & 0x7fffffff;
        } else {
          c = c >> 1 & 0x7fffffff;
        }
      }
      crcTable[i] = c;
    }
    function crc32(data, start, end) {
      var crc = -1;
      for (var i = start; i < end; i++) {
        var a = (crc ^ data[i]) & 0xff;
        var b = crcTable[a];
        crc = crc >>> 8 ^ b;
      }
      return crc ^ -1;
    }
    function writePngChunk(type, body, data, offset) {
      var p = offset;
      var len = body.length;
      data[p] = len >> 24 & 0xff;
      data[p + 1] = len >> 16 & 0xff;
      data[p + 2] = len >> 8 & 0xff;
      data[p + 3] = len & 0xff;
      p += 4;
      data[p] = type.charCodeAt(0) & 0xff;
      data[p + 1] = type.charCodeAt(1) & 0xff;
      data[p + 2] = type.charCodeAt(2) & 0xff;
      data[p + 3] = type.charCodeAt(3) & 0xff;
      p += 4;
      data.set(body, p);
      p += body.length;
      var crc = crc32(data, offset + 4, p);
      data[p] = crc >> 24 & 0xff;
      data[p + 1] = crc >> 16 & 0xff;
      data[p + 2] = crc >> 8 & 0xff;
      data[p + 3] = crc & 0xff;
    }
    function adler32(data, start, end) {
      var a = 1;
      var b = 0;
      for (var i = start; i < end; ++i) {
        a = (a + (data[i] & 0xff)) % 65521;
        b = (b + a) % 65521;
      }
      return b << 16 | a;
    }
    function deflateSync(literals) {
      if (!(0, _is_node2.default)()) {
        return deflateSyncUncompressed(literals);
      }
      try {
        var input;
        if (parseInt(process.versions.node) >= 8) {
          input = literals;
        } else {
          input = new Buffer(literals);
        }
        var output = __webpack_require__(/*! zlib */ 2).deflateSync(input, { level: 9 });
        return output instanceof Uint8Array ? output : new Uint8Array(output);
      } catch (e) {
        (0, _util.warn)('Not compressing PNG because zlib.deflateSync is unavailable: ' + e);
      }
      return deflateSyncUncompressed(literals);
    }
    function deflateSyncUncompressed(literals) {
      var len = literals.length;
      var maxBlockLength = 0xFFFF;
      var deflateBlocks = Math.ceil(len / maxBlockLength);
      var idat = new Uint8Array(2 + len + deflateBlocks * 5 + 4);
      var pi = 0;
      idat[pi++] = 0x78;
      idat[pi++] = 0x9c;
      var pos = 0;
      while (len > maxBlockLength) {
        idat[pi++] = 0x00;
        idat[pi++] = 0xff;
        idat[pi++] = 0xff;
        idat[pi++] = 0x00;
        idat[pi++] = 0x00;
        idat.set(literals.subarray(pos, pos + maxBlockLength), pi);
        pi += maxBlockLength;
        pos += maxBlockLength;
        len -= maxBlockLength;
      }
      idat[pi++] = 0x01;
      idat[pi++] = len & 0xff;
      idat[pi++] = len >> 8 & 0xff;
      idat[pi++] = ~len & 0xffff & 0xff;
      idat[pi++] = (~len & 0xffff) >> 8 & 0xff;
      idat.set(literals.subarray(pos), pi);
      pi += literals.length - pos;
      var adler = adler32(literals, 0, literals.length);
      idat[pi++] = adler >> 24 & 0xff;
      idat[pi++] = adler >> 16 & 0xff;
      idat[pi++] = adler >> 8 & 0xff;
      idat[pi++] = adler & 0xff;
      return idat;
    }
    function encode(imgData, kind, forceDataSchema, isMask) {
      var width = imgData.width;
      var height = imgData.height;
      var bitDepth, colorType, lineSize;
      var bytes = imgData.data;
      switch (kind) {
        case _util.ImageKind.GRAYSCALE_1BPP:
          colorType = 0;
          bitDepth = 1;
          lineSize = width + 7 >> 3;
          break;
        case _util.ImageKind.RGB_24BPP:
          colorType = 2;
          bitDepth = 8;
          lineSize = width * 3;
          break;
        case _util.ImageKind.RGBA_32BPP:
          colorType = 6;
          bitDepth = 8;
          lineSize = width * 4;
          break;
        default:
          throw new Error('invalid format');
      }
      var literals = new Uint8Array((1 + lineSize) * height);
      var offsetLiterals = 0,
          offsetBytes = 0;
      var y, i;
      for (y = 0; y < height; ++y) {
        literals[offsetLiterals++] = 0;
        literals.set(bytes.subarray(offsetBytes, offsetBytes + lineSize), offsetLiterals);
        offsetBytes += lineSize;
        offsetLiterals += lineSize;
      }
      if (kind === _util.ImageKind.GRAYSCALE_1BPP && isMask) {
        offsetLiterals = 0;
        for (y = 0; y < height; y++) {
          offsetLiterals++;
          for (i = 0; i < lineSize; i++) {
            literals[offsetLiterals++] ^= 0xFF;
          }
        }
      }
      var ihdr = new Uint8Array([width >> 24 & 0xff, width >> 16 & 0xff, width >> 8 & 0xff, width & 0xff, height >> 24 & 0xff, height >> 16 & 0xff, height >> 8 & 0xff, height & 0xff, bitDepth, colorType, 0x00, 0x00, 0x00]);
      var idat = deflateSync(literals);
      var pngLength = PNG_HEADER.length + CHUNK_WRAPPER_SIZE * 3 + ihdr.length + idat.length;
      var data = new Uint8Array(pngLength);
      var offset = 0;
      data.set(PNG_HEADER, offset);
      offset += PNG_HEADER.length;
      writePngChunk('IHDR', ihdr, data, offset);
      offset += CHUNK_WRAPPER_SIZE + ihdr.length;
      writePngChunk('IDATA', idat, data, offset);
      offset += CHUNK_WRAPPER_SIZE + idat.length;
      writePngChunk('IEND', new Uint8Array(0), data, offset);
      return (0, _util.createObjectURL)(data, 'image/png', forceDataSchema);
    }
    return function convertImgDataToPng(imgData, forceDataSchema, isMask) {
      var kind = imgData.kind === undefined ? _util.ImageKind.GRAYSCALE_1BPP : imgData.kind;
      return encode(imgData, kind, forceDataSchema, isMask);
    };
  }();
  var SVGExtraState = function SVGExtraStateClosure() {
    function SVGExtraState() {
      this.fontSizeScale = 1;
      this.fontWeight = SVG_DEFAULTS.fontWeight;
      this.fontSize = 0;
      this.textMatrix = _util.IDENTITY_MATRIX;
      this.fontMatrix = _util.FONT_IDENTITY_MATRIX;
      this.leading = 0;
      this.textRenderingMode = _util.TextRenderingMode.FILL;
      this.x = 0;
      this.y = 0;
      this.lineX = 0;
      this.lineY = 0;
      this.charSpacing = 0;
      this.wordSpacing = 0;
      this.textHScale = 1;
      this.textRise = 0;
      this.fillColor = SVG_DEFAULTS.fillColor;
      this.strokeColor = '#000000';
      this.fillAlpha = 1;
      this.strokeAlpha = 1;
      this.lineWidth = 1;
      this.lineJoin = '';
      this.lineCap = '';
      this.miterLimit = 0;
      this.dashArray = [];
      this.dashPhase = 0;
      this.dependencies = [];
      this.activeClipUrl = null;
      this.clipGroup = null;
      this.maskId = '';
    }
    SVGExtraState.prototype = {
      clone: function SVGExtraState_clone() {
        return Object.create(this);
      },
      setCurrentPoint: function SVGExtraState_setCurrentPoint(x, y) {
        this.x = x;
        this.y = y;
      }
    };
    return SVGExtraState;
  }();
  exports.SVGGraphics = SVGGraphics = function SVGGraphicsClosure() {
    function opListToTree(opList) {
      var opTree = [];
      var tmp = [];
      var opListLen = opList.length;
      for (var x = 0; x < opListLen; x++) {
        if (opList[x].fn === 'save') {
          opTree.push({
            'fnId': 92,
            'fn': 'group',
            'items': []
          });
          tmp.push(opTree);
          opTree = opTree[opTree.length - 1].items;
          continue;
        }
        if (opList[x].fn === 'restore') {
          opTree = tmp.pop();
        } else {
          opTree.push(opList[x]);
        }
      }
      return opTree;
    }
    function pf(value) {
      if (Number.isInteger(value)) {
        return value.toString();
      }
      var s = value.toFixed(10);
      var i = s.length - 1;
      if (s[i] !== '0') {
        return s;
      }
      do {
        i--;
      } while (s[i] === '0');
      return s.substring(0, s[i] === '.' ? i : i + 1);
    }
    function pm(m) {
      if (m[4] === 0 && m[5] === 0) {
        if (m[1] === 0 && m[2] === 0) {
          if (m[0] === 1 && m[3] === 1) {
            return '';
          }
          return 'scale(' + pf(m[0]) + ' ' + pf(m[3]) + ')';
        }
        if (m[0] === m[3] && m[1] === -m[2]) {
          var a = Math.acos(m[0]) * 180 / Math.PI;
          return 'rotate(' + pf(a) + ')';
        }
      } else {
        if (m[0] === 1 && m[1] === 0 && m[2] === 0 && m[3] === 1) {
          return 'translate(' + pf(m[4]) + ' ' + pf(m[5]) + ')';
        }
      }
      return 'matrix(' + pf(m[0]) + ' ' + pf(m[1]) + ' ' + pf(m[2]) + ' ' + pf(m[3]) + ' ' + pf(m[4]) + ' ' + pf(m[5]) + ')';
    }
    function SVGGraphics(commonObjs, objs, forceDataSchema) {
      this.svgFactory = new _dom_utils.DOMSVGFactory();
      this.current = new SVGExtraState();
      this.transformMatrix = _util.IDENTITY_MATRIX;
      this.transformStack = [];
      this.extraStack = [];
      this.commonObjs = commonObjs;
      this.objs = objs;
      this.pendingClip = null;
      this.pendingEOFill = false;
      this.embedFonts = false;
      this.embeddedFonts = Object.create(null);
      this.cssStyle = null;
      this.forceDataSchema = !!forceDataSchema;
    }
    var XML_NS = 'http://www.w3.org/XML/1998/namespace';
    var XLINK_NS = 'http://www.w3.org/1999/xlink';
    var LINE_CAP_STYLES = ['butt', 'round', 'square'];
    var LINE_JOIN_STYLES = ['miter', 'round', 'bevel'];
    var clipCount = 0;
    var maskCount = 0;
    SVGGraphics.prototype = {
      save: function SVGGraphics_save() {
        this.transformStack.push(this.transformMatrix);
        var old = this.current;
        this.extraStack.push(old);
        this.current = old.clone();
      },
      restore: function SVGGraphics_restore() {
        this.transformMatrix = this.transformStack.pop();
        this.current = this.extraStack.pop();
        this.pendingClip = null;
        this.tgrp = null;
      },
      group: function SVGGraphics_group(items) {
        this.save();
        this.executeOpTree(items);
        this.restore();
      },
      loadDependencies: function SVGGraphics_loadDependencies(operatorList) {
        var _this = this;

        var fnArray = operatorList.fnArray;
        var fnArrayLen = fnArray.length;
        var argsArray = operatorList.argsArray;
        for (var i = 0; i < fnArrayLen; i++) {
          if (_util.OPS.dependency === fnArray[i]) {
            var deps = argsArray[i];
            for (var n = 0, nn = deps.length; n < nn; n++) {
              var obj = deps[n];
              var common = obj.substring(0, 2) === 'g_';
              var promise;
              if (common) {
                promise = new Promise(function (resolve) {
                  _this.commonObjs.get(obj, resolve);
                });
              } else {
                promise = new Promise(function (resolve) {
                  _this.objs.get(obj, resolve);
                });
              }
              this.current.dependencies.push(promise);
            }
          }
        }
        return Promise.all(this.current.dependencies);
      },
      transform: function SVGGraphics_transform(a, b, c, d, e, f) {
        var transformMatrix = [a, b, c, d, e, f];
        this.transformMatrix = _util.Util.transform(this.transformMatrix, transformMatrix);
        this.tgrp = null;
      },
      getSVG: function SVGGraphics_getSVG(operatorList, viewport) {
        var _this2 = this;

        this.viewport = viewport;
        var svgElement = this._initialize(viewport);
        return this.loadDependencies(operatorList).then(function () {
          _this2.transformMatrix = _util.IDENTITY_MATRIX;
          var opTree = _this2.convertOpList(operatorList);
          _this2.executeOpTree(opTree);
          return svgElement;
        });
      },
      convertOpList: function SVGGraphics_convertOpList(operatorList) {
        var argsArray = operatorList.argsArray;
        var fnArray = operatorList.fnArray;
        var fnArrayLen = fnArray.length;
        var REVOPS = [];
        var opList = [];
        for (var op in _util.OPS) {
          REVOPS[_util.OPS[op]] = op;
        }
        for (var x = 0; x < fnArrayLen; x++) {
          var fnId = fnArray[x];
          opList.push({
            'fnId': fnId,
            'fn': REVOPS[fnId],
            'args': argsArray[x]
          });
        }
        return opListToTree(opList);
      },
      executeOpTree: function SVGGraphics_executeOpTree(opTree) {
        var opTreeLen = opTree.length;
        for (var x = 0; x < opTreeLen; x++) {
          var fn = opTree[x].fn;
          var fnId = opTree[x].fnId;
          var args = opTree[x].args;
          switch (fnId | 0) {
            case _util.OPS.beginText:
              this.beginText();
              break;
            case _util.OPS.dependency:
              break;
            case _util.OPS.setLeading:
              this.setLeading(args);
              break;
            case _util.OPS.setLeadingMoveText:
              this.setLeadingMoveText(args[0], args[1]);
              break;
            case _util.OPS.setFont:
              this.setFont(args);
              break;
            case _util.OPS.showText:
              this.showText(args[0]);
              break;
            case _util.OPS.showSpacedText:
              this.showText(args[0]);
              break;
            case _util.OPS.endText:
              this.endText();
              break;
            case _util.OPS.moveText:
              this.moveText(args[0], args[1]);
              break;
            case _util.OPS.setCharSpacing:
              this.setCharSpacing(args[0]);
              break;
            case _util.OPS.setWordSpacing:
              this.setWordSpacing(args[0]);
              break;
            case _util.OPS.setHScale:
              this.setHScale(args[0]);
              break;
            case _util.OPS.setTextMatrix:
              this.setTextMatrix(args[0], args[1], args[2], args[3], args[4], args[5]);
              break;
            case _util.OPS.setTextRise:
              this.setTextRise(args[0]);
              break;
            case _util.OPS.setTextRenderingMode:
              this.setTextRenderingMode(args[0]);
              break;
            case _util.OPS.setLineWidth:
              this.setLineWidth(args[0]);
              break;
            case _util.OPS.setLineJoin:
              this.setLineJoin(args[0]);
              break;
            case _util.OPS.setLineCap:
              this.setLineCap(args[0]);
              break;
            case _util.OPS.setMiterLimit:
              this.setMiterLimit(args[0]);
              break;
            case _util.OPS.setFillRGBColor:
              this.setFillRGBColor(args[0], args[1], args[2]);
              break;
            case _util.OPS.setStrokeRGBColor:
              this.setStrokeRGBColor(args[0], args[1], args[2]);
              break;
            case _util.OPS.setDash:
              this.setDash(args[0], args[1]);
              break;
            case _util.OPS.setGState:
              this.setGState(args[0]);
              break;
            case _util.OPS.fill:
              this.fill();
              break;
            case _util.OPS.eoFill:
              this.eoFill();
              break;
            case _util.OPS.stroke:
              this.stroke();
              break;
            case _util.OPS.fillStroke:
              this.fillStroke();
              break;
            case _util.OPS.eoFillStroke:
              this.eoFillStroke();
              break;
            case _util.OPS.clip:
              this.clip('nonzero');
              break;
            case _util.OPS.eoClip:
              this.clip('evenodd');
              break;
            case _util.OPS.paintSolidColorImageMask:
              this.paintSolidColorImageMask();
              break;
            case _util.OPS.paintJpegXObject:
              this.paintJpegXObject(args[0], args[1], args[2]);
              break;
            case _util.OPS.paintImageXObject:
              this.paintImageXObject(args[0]);
              break;
            case _util.OPS.paintInlineImageXObject:
              this.paintInlineImageXObject(args[0]);
              break;
            case _util.OPS.paintImageMaskXObject:
              this.paintImageMaskXObject(args[0]);
              break;
            case _util.OPS.paintFormXObjectBegin:
              this.paintFormXObjectBegin(args[0], args[1]);
              break;
            case _util.OPS.paintFormXObjectEnd:
              this.paintFormXObjectEnd();
              break;
            case _util.OPS.closePath:
              this.closePath();
              break;
            case _util.OPS.closeStroke:
              this.closeStroke();
              break;
            case _util.OPS.closeFillStroke:
              this.closeFillStroke();
              break;
            case _util.OPS.closeEOFillStroke:
              this.closeEOFillStroke();
              break;
            case _util.OPS.nextLine:
              this.nextLine();
              break;
            case _util.OPS.transform:
              this.transform(args[0], args[1], args[2], args[3], args[4], args[5]);
              break;
            case _util.OPS.constructPath:
              this.constructPath(args[0], args[1]);
              break;
            case _util.OPS.endPath:
              this.endPath();
              break;
            case 92:
              this.group(opTree[x].items);
              break;
            default:
              (0, _util.warn)('Unimplemented operator ' + fn);
              break;
          }
        }
      },
      setWordSpacing: function SVGGraphics_setWordSpacing(wordSpacing) {
        this.current.wordSpacing = wordSpacing;
      },
      setCharSpacing: function SVGGraphics_setCharSpacing(charSpacing) {
        this.current.charSpacing = charSpacing;
      },
      nextLine: function SVGGraphics_nextLine() {
        this.moveText(0, this.current.leading);
      },
      setTextMatrix: function SVGGraphics_setTextMatrix(a, b, c, d, e, f) {
        var current = this.current;
        this.current.textMatrix = this.current.lineMatrix = [a, b, c, d, e, f];
        this.current.x = this.current.lineX = 0;
        this.current.y = this.current.lineY = 0;
        current.xcoords = [];
        current.tspan = this.svgFactory.createElement('svg:tspan');
        current.tspan.setAttributeNS(null, 'font-family', current.fontFamily);
        current.tspan.setAttributeNS(null, 'font-size', pf(current.fontSize) + 'px');
        current.tspan.setAttributeNS(null, 'y', pf(-current.y));
        current.txtElement = this.svgFactory.createElement('svg:text');
        current.txtElement.appendChild(current.tspan);
      },
      beginText: function SVGGraphics_beginText() {
        this.current.x = this.current.lineX = 0;
        this.current.y = this.current.lineY = 0;
        this.current.textMatrix = _util.IDENTITY_MATRIX;
        this.current.lineMatrix = _util.IDENTITY_MATRIX;
        this.current.tspan = this.svgFactory.createElement('svg:tspan');
        this.current.txtElement = this.svgFactory.createElement('svg:text');
        this.current.txtgrp = this.svgFactory.createElement('svg:g');
        this.current.xcoords = [];
      },
      moveText: function SVGGraphics_moveText(x, y) {
        var current = this.current;
        this.current.x = this.current.lineX += x;
        this.current.y = this.current.lineY += y;
        current.xcoords = [];
        current.tspan = this.svgFactory.createElement('svg:tspan');
        current.tspan.setAttributeNS(null, 'font-family', current.fontFamily);
        current.tspan.setAttributeNS(null, 'font-size', pf(current.fontSize) + 'px');
        current.tspan.setAttributeNS(null, 'y', pf(-current.y));
      },
      showText: function SVGGraphics_showText(glyphs) {
        var current = this.current;
        var font = current.font;
        var fontSize = current.fontSize;
        if (fontSize === 0) {
          return;
        }
        var charSpacing = current.charSpacing;
        var wordSpacing = current.wordSpacing;
        var fontDirection = current.fontDirection;
        var textHScale = current.textHScale * fontDirection;
        var glyphsLength = glyphs.length;
        var vertical = font.vertical;
        var widthAdvanceScale = fontSize * current.fontMatrix[0];
        var x = 0,
            i;
        for (i = 0; i < glyphsLength; ++i) {
          var glyph = glyphs[i];
          if (glyph === null) {
            x += fontDirection * wordSpacing;
            continue;
          } else if ((0, _util.isNum)(glyph)) {
            x += -glyph * fontSize * 0.001;
            continue;
          }
          var width = glyph.width;
          var character = glyph.fontChar;
          var spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
          var charWidth = width * widthAdvanceScale + spacing * fontDirection;
          if (!glyph.isInFont && !font.missingFile) {
            x += charWidth;
            continue;
          }
          current.xcoords.push(current.x + x * textHScale);
          current.tspan.textContent += character;
          x += charWidth;
        }
        if (vertical) {
          current.y -= x * textHScale;
        } else {
          current.x += x * textHScale;
        }
        current.tspan.setAttributeNS(null, 'x', current.xcoords.map(pf).join(' '));
        current.tspan.setAttributeNS(null, 'y', pf(-current.y));
        current.tspan.setAttributeNS(null, 'font-family', current.fontFamily);
        current.tspan.setAttributeNS(null, 'font-size', pf(current.fontSize) + 'px');
        if (current.fontStyle !== SVG_DEFAULTS.fontStyle) {
          current.tspan.setAttributeNS(null, 'font-style', current.fontStyle);
        }
        if (current.fontWeight !== SVG_DEFAULTS.fontWeight) {
          current.tspan.setAttributeNS(null, 'font-weight', current.fontWeight);
        }
        var fillStrokeMode = current.textRenderingMode & _util.TextRenderingMode.FILL_STROKE_MASK;
        if (fillStrokeMode === _util.TextRenderingMode.FILL || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
          if (current.fillColor !== SVG_DEFAULTS.fillColor) {
            current.tspan.setAttributeNS(null, 'fill', current.fillColor);
          }
          if (current.fillAlpha < 1) {
            current.tspan.setAttributeNS(null, 'fill-opacity', current.fillAlpha);
          }
        } else if (current.textRenderingMode === _util.TextRenderingMode.ADD_TO_PATH) {
          current.tspan.setAttributeNS(null, 'fill', 'transparent');
        } else {
          current.tspan.setAttributeNS(null, 'fill', 'none');
        }
        if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
          this._setStrokeAttributes(current.tspan);
        }
        var textMatrix = current.textMatrix;
        if (current.textRise !== 0) {
          textMatrix = textMatrix.slice();
          textMatrix[5] += current.textRise;
        }
        current.txtElement.setAttributeNS(null, 'transform', pm(textMatrix) + ' scale(1, -1)');
        current.txtElement.setAttributeNS(XML_NS, 'xml:space', 'preserve');
        current.txtElement.appendChild(current.tspan);
        current.txtgrp.appendChild(current.txtElement);
        this._ensureTransformGroup().appendChild(current.txtElement);
      },
      setLeadingMoveText: function SVGGraphics_setLeadingMoveText(x, y) {
        this.setLeading(-y);
        this.moveText(x, y);
      },
      addFontStyle: function SVGGraphics_addFontStyle(fontObj) {
        if (!this.cssStyle) {
          this.cssStyle = this.svgFactory.createElement('svg:style');
          this.cssStyle.setAttributeNS(null, 'type', 'text/css');
          this.defs.appendChild(this.cssStyle);
        }
        var url = (0, _util.createObjectURL)(fontObj.data, fontObj.mimetype, this.forceDataSchema);
        this.cssStyle.textContent += '@font-face { font-family: "' + fontObj.loadedName + '";' + ' src: url(' + url + '); }\n';
      },
      setFont: function SVGGraphics_setFont(details) {
        var current = this.current;
        var fontObj = this.commonObjs.get(details[0]);
        var size = details[1];
        this.current.font = fontObj;
        if (this.embedFonts && fontObj.data && !this.embeddedFonts[fontObj.loadedName]) {
          this.addFontStyle(fontObj);
          this.embeddedFonts[fontObj.loadedName] = fontObj;
        }
        current.fontMatrix = fontObj.fontMatrix ? fontObj.fontMatrix : _util.FONT_IDENTITY_MATRIX;
        var bold = fontObj.black ? fontObj.bold ? 'bolder' : 'bold' : fontObj.bold ? 'bold' : 'normal';
        var italic = fontObj.italic ? 'italic' : 'normal';
        if (size < 0) {
          size = -size;
          current.fontDirection = -1;
        } else {
          current.fontDirection = 1;
        }
        current.fontSize = size;
        current.fontFamily = fontObj.loadedName;
        current.fontWeight = bold;
        current.fontStyle = italic;
        current.tspan = this.svgFactory.createElement('svg:tspan');
        current.tspan.setAttributeNS(null, 'y', pf(-current.y));
        current.xcoords = [];
      },
      endText: function endText() {
        var current = this.current;
        if (current.textRenderingMode & _util.TextRenderingMode.ADD_TO_PATH_FLAG && current.txtElement && current.txtElement.hasChildNodes()) {
          current.element = current.txtElement;
          this.clip('nonzero');
          this.endPath();
        }
      },

      setLineWidth: function SVGGraphics_setLineWidth(width) {
        this.current.lineWidth = width;
      },
      setLineCap: function SVGGraphics_setLineCap(style) {
        this.current.lineCap = LINE_CAP_STYLES[style];
      },
      setLineJoin: function SVGGraphics_setLineJoin(style) {
        this.current.lineJoin = LINE_JOIN_STYLES[style];
      },
      setMiterLimit: function SVGGraphics_setMiterLimit(limit) {
        this.current.miterLimit = limit;
      },
      setStrokeAlpha: function SVGGraphics_setStrokeAlpha(strokeAlpha) {
        this.current.strokeAlpha = strokeAlpha;
      },
      setStrokeRGBColor: function SVGGraphics_setStrokeRGBColor(r, g, b) {
        var color = _util.Util.makeCssRgb(r, g, b);
        this.current.strokeColor = color;
      },
      setFillAlpha: function SVGGraphics_setFillAlpha(fillAlpha) {
        this.current.fillAlpha = fillAlpha;
      },
      setFillRGBColor: function SVGGraphics_setFillRGBColor(r, g, b) {
        var color = _util.Util.makeCssRgb(r, g, b);
        this.current.fillColor = color;
        this.current.tspan = this.svgFactory.createElement('svg:tspan');
        this.current.xcoords = [];
      },
      setDash: function SVGGraphics_setDash(dashArray, dashPhase) {
        this.current.dashArray = dashArray;
        this.current.dashPhase = dashPhase;
      },
      constructPath: function SVGGraphics_constructPath(ops, args) {
        var current = this.current;
        var x = current.x,
            y = current.y;
        current.path = this.svgFactory.createElement('svg:path');
        var d = [];
        var opLength = ops.length;
        for (var i = 0, j = 0; i < opLength; i++) {
          switch (ops[i] | 0) {
            case _util.OPS.rectangle:
              x = args[j++];
              y = args[j++];
              var width = args[j++];
              var height = args[j++];
              var xw = x + width;
              var yh = y + height;
              d.push('M', pf(x), pf(y), 'L', pf(xw), pf(y), 'L', pf(xw), pf(yh), 'L', pf(x), pf(yh), 'Z');
              break;
            case _util.OPS.moveTo:
              x = args[j++];
              y = args[j++];
              d.push('M', pf(x), pf(y));
              break;
            case _util.OPS.lineTo:
              x = args[j++];
              y = args[j++];
              d.push('L', pf(x), pf(y));
              break;
            case _util.OPS.curveTo:
              x = args[j + 4];
              y = args[j + 5];
              d.push('C', pf(args[j]), pf(args[j + 1]), pf(args[j + 2]), pf(args[j + 3]), pf(x), pf(y));
              j += 6;
              break;
            case _util.OPS.curveTo2:
              x = args[j + 2];
              y = args[j + 3];
              d.push('C', pf(x), pf(y), pf(args[j]), pf(args[j + 1]), pf(args[j + 2]), pf(args[j + 3]));
              j += 4;
              break;
            case _util.OPS.curveTo3:
              x = args[j + 2];
              y = args[j + 3];
              d.push('C', pf(args[j]), pf(args[j + 1]), pf(x), pf(y), pf(x), pf(y));
              j += 4;
              break;
            case _util.OPS.closePath:
              d.push('Z');
              break;
          }
        }
        current.path.setAttributeNS(null, 'd', d.join(' '));
        current.path.setAttributeNS(null, 'fill', 'none');
        this._ensureTransformGroup().appendChild(current.path);
        current.element = current.path;
        current.setCurrentPoint(x, y);
      },
      endPath: function SVGGraphics_endPath() {
        if (!this.pendingClip) {
          return;
        }
        var current = this.current;
        var clipId = 'clippath' + clipCount;
        clipCount++;
        var clipPath = this.svgFactory.createElement('svg:clipPath');
        clipPath.setAttributeNS(null, 'id', clipId);
        clipPath.setAttributeNS(null, 'transform', pm(this.transformMatrix));
        var clipElement = current.element.cloneNode(true);
        if (this.pendingClip === 'evenodd') {
          clipElement.setAttributeNS(null, 'clip-rule', 'evenodd');
        } else {
          clipElement.setAttributeNS(null, 'clip-rule', 'nonzero');
        }
        this.pendingClip = null;
        clipPath.appendChild(clipElement);
        this.defs.appendChild(clipPath);
        if (current.activeClipUrl) {
          current.clipGroup = null;
          this.extraStack.forEach(function (prev) {
            prev.clipGroup = null;
          });
          clipPath.setAttributeNS(null, 'clip-path', current.activeClipUrl);
        }
        current.activeClipUrl = 'url(#' + clipId + ')';
        this.tgrp = null;
      },
      clip: function SVGGraphics_clip(type) {
        this.pendingClip = type;
      },
      closePath: function SVGGraphics_closePath() {
        var current = this.current;
        if (current.path) {
          var d = current.path.getAttributeNS(null, 'd');
          d += 'Z';
          current.path.setAttributeNS(null, 'd', d);
        }
      },
      setLeading: function SVGGraphics_setLeading(leading) {
        this.current.leading = -leading;
      },
      setTextRise: function SVGGraphics_setTextRise(textRise) {
        this.current.textRise = textRise;
      },
      setTextRenderingMode: function setTextRenderingMode(textRenderingMode) {
        this.current.textRenderingMode = textRenderingMode;
      },

      setHScale: function SVGGraphics_setHScale(scale) {
        this.current.textHScale = scale / 100;
      },
      setGState: function SVGGraphics_setGState(states) {
        for (var i = 0, ii = states.length; i < ii; i++) {
          var state = states[i];
          var key = state[0];
          var value = state[1];
          switch (key) {
            case 'LW':
              this.setLineWidth(value);
              break;
            case 'LC':
              this.setLineCap(value);
              break;
            case 'LJ':
              this.setLineJoin(value);
              break;
            case 'ML':
              this.setMiterLimit(value);
              break;
            case 'D':
              this.setDash(value[0], value[1]);
              break;
            case 'Font':
              this.setFont(value);
              break;
            case 'CA':
              this.setStrokeAlpha(value);
              break;
            case 'ca':
              this.setFillAlpha(value);
              break;
            default:
              (0, _util.warn)('Unimplemented graphic state ' + key);
              break;
          }
        }
      },
      fill: function SVGGraphics_fill() {
        var current = this.current;
        if (current.element) {
          current.element.setAttributeNS(null, 'fill', current.fillColor);
          current.element.setAttributeNS(null, 'fill-opacity', current.fillAlpha);
          this.endPath();
        }
      },
      stroke: function SVGGraphics_stroke() {
        var current = this.current;
        if (current.element) {
          this._setStrokeAttributes(current.element);
          current.element.setAttributeNS(null, 'fill', 'none');
          this.endPath();
        }
      },
      _setStrokeAttributes: function _setStrokeAttributes(element) {
        var current = this.current;
        element.setAttributeNS(null, 'stroke', current.strokeColor);
        element.setAttributeNS(null, 'stroke-opacity', current.strokeAlpha);
        element.setAttributeNS(null, 'stroke-miterlimit', pf(current.miterLimit));
        element.setAttributeNS(null, 'stroke-linecap', current.lineCap);
        element.setAttributeNS(null, 'stroke-linejoin', current.lineJoin);
        element.setAttributeNS(null, 'stroke-width', pf(current.lineWidth) + 'px');
        element.setAttributeNS(null, 'stroke-dasharray', current.dashArray.map(pf).join(' '));
        element.setAttributeNS(null, 'stroke-dashoffset', pf(current.dashPhase) + 'px');
      },

      eoFill: function SVGGraphics_eoFill() {
        if (this.current.element) {
          this.current.element.setAttributeNS(null, 'fill-rule', 'evenodd');
        }
        this.fill();
      },
      fillStroke: function SVGGraphics_fillStroke() {
        this.stroke();
        this.fill();
      },
      eoFillStroke: function SVGGraphics_eoFillStroke() {
        if (this.current.element) {
          this.current.element.setAttributeNS(null, 'fill-rule', 'evenodd');
        }
        this.fillStroke();
      },
      closeStroke: function SVGGraphics_closeStroke() {
        this.closePath();
        this.stroke();
      },
      closeFillStroke: function SVGGraphics_closeFillStroke() {
        this.closePath();
        this.fillStroke();
      },
      closeEOFillStroke: function closeEOFillStroke() {
        this.closePath();
        this.eoFillStroke();
      },

      paintSolidColorImageMask: function SVGGraphics_paintSolidColorImageMask() {
        var current = this.current;
        var rect = this.svgFactory.createElement('svg:rect');
        rect.setAttributeNS(null, 'x', '0');
        rect.setAttributeNS(null, 'y', '0');
        rect.setAttributeNS(null, 'width', '1px');
        rect.setAttributeNS(null, 'height', '1px');
        rect.setAttributeNS(null, 'fill', current.fillColor);
        this._ensureTransformGroup().appendChild(rect);
      },
      paintJpegXObject: function SVGGraphics_paintJpegXObject(objId, w, h) {
        var imgObj = this.objs.get(objId);
        var imgEl = this.svgFactory.createElement('svg:image');
        imgEl.setAttributeNS(XLINK_NS, 'xlink:href', imgObj.src);
        imgEl.setAttributeNS(null, 'width', pf(w));
        imgEl.setAttributeNS(null, 'height', pf(h));
        imgEl.setAttributeNS(null, 'x', '0');
        imgEl.setAttributeNS(null, 'y', pf(-h));
        imgEl.setAttributeNS(null, 'transform', 'scale(' + pf(1 / w) + ' ' + pf(-1 / h) + ')');
        this._ensureTransformGroup().appendChild(imgEl);
      },
      paintImageXObject: function SVGGraphics_paintImageXObject(objId) {
        var imgData = this.objs.get(objId);
        if (!imgData) {
          (0, _util.warn)('Dependent image isn\'t ready yet');
          return;
        }
        this.paintInlineImageXObject(imgData);
      },
      paintInlineImageXObject: function SVGGraphics_paintInlineImageXObject(imgData, mask) {
        var width = imgData.width;
        var height = imgData.height;
        var imgSrc = convertImgDataToPng(imgData, this.forceDataSchema, !!mask);
        var cliprect = this.svgFactory.createElement('svg:rect');
        cliprect.setAttributeNS(null, 'x', '0');
        cliprect.setAttributeNS(null, 'y', '0');
        cliprect.setAttributeNS(null, 'width', pf(width));
        cliprect.setAttributeNS(null, 'height', pf(height));
        this.current.element = cliprect;
        this.clip('nonzero');
        var imgEl = this.svgFactory.createElement('svg:image');
        imgEl.setAttributeNS(XLINK_NS, 'xlink:href', imgSrc);
        imgEl.setAttributeNS(null, 'x', '0');
        imgEl.setAttributeNS(null, 'y', pf(-height));
        imgEl.setAttributeNS(null, 'width', pf(width) + 'px');
        imgEl.setAttributeNS(null, 'height', pf(height) + 'px');
        imgEl.setAttributeNS(null, 'transform', 'scale(' + pf(1 / width) + ' ' + pf(-1 / height) + ')');
        if (mask) {
          mask.appendChild(imgEl);
        } else {
          this._ensureTransformGroup().appendChild(imgEl);
        }
      },
      paintImageMaskXObject: function SVGGraphics_paintImageMaskXObject(imgData) {
        var current = this.current;
        var width = imgData.width;
        var height = imgData.height;
        var fillColor = current.fillColor;
        current.maskId = 'mask' + maskCount++;
        var mask = this.svgFactory.createElement('svg:mask');
        mask.setAttributeNS(null, 'id', current.maskId);
        var rect = this.svgFactory.createElement('svg:rect');
        rect.setAttributeNS(null, 'x', '0');
        rect.setAttributeNS(null, 'y', '0');
        rect.setAttributeNS(null, 'width', pf(width));
        rect.setAttributeNS(null, 'height', pf(height));
        rect.setAttributeNS(null, 'fill', fillColor);
        rect.setAttributeNS(null, 'mask', 'url(#' + current.maskId + ')');
        this.defs.appendChild(mask);
        this._ensureTransformGroup().appendChild(rect);
        this.paintInlineImageXObject(imgData, mask);
      },
      paintFormXObjectBegin: function SVGGraphics_paintFormXObjectBegin(matrix, bbox) {
        if (Array.isArray(matrix) && matrix.length === 6) {
          this.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
        }
        if (Array.isArray(bbox) && bbox.length === 4) {
          var width = bbox[2] - bbox[0];
          var height = bbox[3] - bbox[1];
          var cliprect = this.svgFactory.createElement('svg:rect');
          cliprect.setAttributeNS(null, 'x', bbox[0]);
          cliprect.setAttributeNS(null, 'y', bbox[1]);
          cliprect.setAttributeNS(null, 'width', pf(width));
          cliprect.setAttributeNS(null, 'height', pf(height));
          this.current.element = cliprect;
          this.clip('nonzero');
          this.endPath();
        }
      },
      paintFormXObjectEnd: function SVGGraphics_paintFormXObjectEnd() {},
      _initialize: function _initialize(viewport) {
        var svg = this.svgFactory.create(viewport.width, viewport.height);
        var definitions = this.svgFactory.createElement('svg:defs');
        svg.appendChild(definitions);
        this.defs = definitions;
        var rootGroup = this.svgFactory.createElement('svg:g');
        rootGroup.setAttributeNS(null, 'transform', pm(viewport.transform));
        svg.appendChild(rootGroup);
        this.svg = rootGroup;
        return svg;
      },

      _ensureClipGroup: function SVGGraphics_ensureClipGroup() {
        if (!this.current.clipGroup) {
          var clipGroup = this.svgFactory.createElement('svg:g');
          clipGroup.setAttributeNS(null, 'clip-path', this.current.activeClipUrl);
          this.svg.appendChild(clipGroup);
          this.current.clipGroup = clipGroup;
        }
        return this.current.clipGroup;
      },
      _ensureTransformGroup: function SVGGraphics_ensureTransformGroup() {
        if (!this.tgrp) {
          this.tgrp = this.svgFactory.createElement('svg:g');
          this.tgrp.setAttributeNS(null, 'transform', pm(this.transformMatrix));
          if (this.current.activeClipUrl) {
            this._ensureClipGroup().appendChild(this.tgrp);
          } else {
            this.svg.appendChild(this.tgrp);
          }
        }
        return this.tgrp;
      }
    };
    return SVGGraphics;
  }();
}
exports.SVGGraphics = SVGGraphics;

/***/ }),
/* 148 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDFNodeStream = undefined;

var _regenerator = __w_pdfjs_require__(137);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __w_pdfjs_require__(1);

var _network_utils = __w_pdfjs_require__(149);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = __webpack_require__(/*! fs */ 3);
var http = __webpack_require__(/*! http */ 4);
var https = __webpack_require__(/*! https */ 5);
var url = __webpack_require__(/*! url */ "./node_modules/url/url.js");

var fileUriRegex = /^file:\/\/\/[a-zA-Z]:\//;
function parseUrl(sourceUrl) {
  var parsedUrl = url.parse(sourceUrl);
  if (parsedUrl.protocol === 'file:' || parsedUrl.host) {
    return parsedUrl;
  }
  if (/^[a-z]:[/\\]/i.test(sourceUrl)) {
    return url.parse('file:///' + sourceUrl);
  }
  if (!parsedUrl.host) {
    parsedUrl.protocol = 'file:';
  }
  return parsedUrl;
}

var PDFNodeStream = function () {
  function PDFNodeStream(source) {
    _classCallCheck(this, PDFNodeStream);

    this.source = source;
    this.url = parseUrl(source.url);
    this.isHttp = this.url.protocol === 'http:' || this.url.protocol === 'https:';
    this.isFsUrl = this.url.protocol === 'file:';
    this.httpHeaders = this.isHttp && source.httpHeaders || {};
    this._fullRequest = null;
    this._rangeRequestReaders = [];
  }

  _createClass(PDFNodeStream, [{
    key: 'getFullReader',
    value: function getFullReader() {
      (0, _util.assert)(!this._fullRequest);
      this._fullRequest = this.isFsUrl ? new PDFNodeStreamFsFullReader(this) : new PDFNodeStreamFullReader(this);
      return this._fullRequest;
    }
  }, {
    key: 'getRangeReader',
    value: function getRangeReader(start, end) {
      var rangeReader = this.isFsUrl ? new PDFNodeStreamFsRangeReader(this, start, end) : new PDFNodeStreamRangeReader(this, start, end);
      this._rangeRequestReaders.push(rangeReader);
      return rangeReader;
    }
  }, {
    key: 'cancelAllRequests',
    value: function cancelAllRequests(reason) {
      if (this._fullRequest) {
        this._fullRequest.cancel(reason);
      }
      var readers = this._rangeRequestReaders.slice(0);
      readers.forEach(function (reader) {
        reader.cancel(reason);
      });
    }
  }]);

  return PDFNodeStream;
}();

var BaseFullReader = function () {
  function BaseFullReader(stream) {
    _classCallCheck(this, BaseFullReader);

    this._url = stream.url;
    this._done = false;
    this._storedError = null;
    this.onProgress = null;
    var source = stream.source;
    this._contentLength = source.length;
    this._loaded = 0;
    this._filename = null;
    this._disableRange = source.disableRange || false;
    this._rangeChunkSize = source.rangeChunkSize;
    if (!this._rangeChunkSize && !this._disableRange) {
      this._disableRange = true;
    }
    this._isStreamingSupported = !source.disableStream;
    this._isRangeSupported = !source.disableRange;
    this._readableStream = null;
    this._readCapability = (0, _util.createPromiseCapability)();
    this._headersCapability = (0, _util.createPromiseCapability)();
  }

  _createClass(BaseFullReader, [{
    key: 'read',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var chunk, buffer;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._readCapability.promise;

              case 2:
                if (!this._done) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt('return', {
                  value: undefined,
                  done: true
                });

              case 4:
                if (!this._storedError) {
                  _context.next = 6;
                  break;
                }

                throw this._storedError;

              case 6:
                chunk = this._readableStream.read();

                if (!(chunk === null)) {
                  _context.next = 10;
                  break;
                }

                this._readCapability = (0, _util.createPromiseCapability)();
                return _context.abrupt('return', this.read());

              case 10:
                this._loaded += chunk.length;
                if (this.onProgress) {
                  this.onProgress({
                    loaded: this._loaded,
                    total: this._contentLength
                  });
                }
                buffer = new Uint8Array(chunk).buffer;
                return _context.abrupt('return', {
                  value: buffer,
                  done: false
                });

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function read() {
        return _ref.apply(this, arguments);
      }

      return read;
    }()
  }, {
    key: 'cancel',
    value: function cancel(reason) {
      if (!this._readableStream) {
        this._error(reason);
        return;
      }
      this._readableStream.destroy(reason);
    }
  }, {
    key: '_error',
    value: function _error(reason) {
      this._storedError = reason;
      this._readCapability.resolve();
    }
  }, {
    key: '_setReadableStream',
    value: function _setReadableStream(readableStream) {
      var _this = this;

      this._readableStream = readableStream;
      readableStream.on('readable', function () {
        _this._readCapability.resolve();
      });
      readableStream.on('end', function () {
        readableStream.destroy();
        _this._done = true;
        _this._readCapability.resolve();
      });
      readableStream.on('error', function (reason) {
        _this._error(reason);
      });
      if (!this._isStreamingSupported && this._isRangeSupported) {
        this._error(new _util.AbortException('streaming is disabled'));
      }
      if (this._storedError) {
        this._readableStream.destroy(this._storedError);
      }
    }
  }, {
    key: 'headersReady',
    get: function get() {
      return this._headersCapability.promise;
    }
  }, {
    key: 'filename',
    get: function get() {
      return this._filename;
    }
  }, {
    key: 'contentLength',
    get: function get() {
      return this._contentLength;
    }
  }, {
    key: 'isRangeSupported',
    get: function get() {
      return this._isRangeSupported;
    }
  }, {
    key: 'isStreamingSupported',
    get: function get() {
      return this._isStreamingSupported;
    }
  }]);

  return BaseFullReader;
}();

var BaseRangeReader = function () {
  function BaseRangeReader(stream) {
    _classCallCheck(this, BaseRangeReader);

    this._url = stream.url;
    this._done = false;
    this._storedError = null;
    this.onProgress = null;
    this._loaded = 0;
    this._readableStream = null;
    this._readCapability = (0, _util.createPromiseCapability)();
    var source = stream.source;
    this._isStreamingSupported = !source.disableStream;
  }

  _createClass(BaseRangeReader, [{
    key: 'read',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var chunk, buffer;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._readCapability.promise;

              case 2:
                if (!this._done) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt('return', {
                  value: undefined,
                  done: true
                });

              case 4:
                if (!this._storedError) {
                  _context2.next = 6;
                  break;
                }

                throw this._storedError;

              case 6:
                chunk = this._readableStream.read();

                if (!(chunk === null)) {
                  _context2.next = 10;
                  break;
                }

                this._readCapability = (0, _util.createPromiseCapability)();
                return _context2.abrupt('return', this.read());

              case 10:
                this._loaded += chunk.length;
                if (this.onProgress) {
                  this.onProgress({ loaded: this._loaded });
                }
                buffer = new Uint8Array(chunk).buffer;
                return _context2.abrupt('return', {
                  value: buffer,
                  done: false
                });

              case 14:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function read() {
        return _ref2.apply(this, arguments);
      }

      return read;
    }()
  }, {
    key: 'cancel',
    value: function cancel(reason) {
      if (!this._readableStream) {
        this._error(reason);
        return;
      }
      this._readableStream.destroy(reason);
    }
  }, {
    key: '_error',
    value: function _error(reason) {
      this._storedError = reason;
      this._readCapability.resolve();
    }
  }, {
    key: '_setReadableStream',
    value: function _setReadableStream(readableStream) {
      var _this2 = this;

      this._readableStream = readableStream;
      readableStream.on('readable', function () {
        _this2._readCapability.resolve();
      });
      readableStream.on('end', function () {
        readableStream.destroy();
        _this2._done = true;
        _this2._readCapability.resolve();
      });
      readableStream.on('error', function (reason) {
        _this2._error(reason);
      });
      if (this._storedError) {
        this._readableStream.destroy(this._storedError);
      }
    }
  }, {
    key: 'isStreamingSupported',
    get: function get() {
      return this._isStreamingSupported;
    }
  }]);

  return BaseRangeReader;
}();

function createRequestOptions(url, headers) {
  return {
    protocol: url.protocol,
    auth: url.auth,
    host: url.hostname,
    port: url.port,
    path: url.path,
    method: 'GET',
    headers: headers
  };
}

var PDFNodeStreamFullReader = function (_BaseFullReader) {
  _inherits(PDFNodeStreamFullReader, _BaseFullReader);

  function PDFNodeStreamFullReader(stream) {
    _classCallCheck(this, PDFNodeStreamFullReader);

    var _this3 = _possibleConstructorReturn(this, (PDFNodeStreamFullReader.__proto__ || Object.getPrototypeOf(PDFNodeStreamFullReader)).call(this, stream));

    var handleResponse = function handleResponse(response) {
      if (response.statusCode === 404) {
        var error = new _util.MissingPDFException('Missing PDF "' + _this3._url + '".');
        _this3._storedError = error;
        _this3._headersCapability.reject(error);
        return;
      }
      _this3._headersCapability.resolve();
      _this3._setReadableStream(response);
      var getResponseHeader = function getResponseHeader(name) {
        return _this3._readableStream.headers[name.toLowerCase()];
      };

      var _validateRangeRequest = (0, _network_utils.validateRangeRequestCapabilities)({
        getResponseHeader: getResponseHeader,
        isHttp: stream.isHttp,
        rangeChunkSize: _this3._rangeChunkSize,
        disableRange: _this3._disableRange
      }),
          allowRangeRequests = _validateRangeRequest.allowRangeRequests,
          suggestedLength = _validateRangeRequest.suggestedLength;

      _this3._isRangeSupported = allowRangeRequests;
      _this3._contentLength = suggestedLength || _this3._contentLength;
      _this3._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);
    };
    _this3._request = null;
    if (_this3._url.protocol === 'http:') {
      _this3._request = http.request(createRequestOptions(_this3._url, stream.httpHeaders), handleResponse);
    } else {
      _this3._request = https.request(createRequestOptions(_this3._url, stream.httpHeaders), handleResponse);
    }
    _this3._request.on('error', function (reason) {
      _this3._storedError = reason;
      _this3._headersCapability.reject(reason);
    });
    _this3._request.end();
    return _this3;
  }

  return PDFNodeStreamFullReader;
}(BaseFullReader);

var PDFNodeStreamRangeReader = function (_BaseRangeReader) {
  _inherits(PDFNodeStreamRangeReader, _BaseRangeReader);

  function PDFNodeStreamRangeReader(stream, start, end) {
    _classCallCheck(this, PDFNodeStreamRangeReader);

    var _this4 = _possibleConstructorReturn(this, (PDFNodeStreamRangeReader.__proto__ || Object.getPrototypeOf(PDFNodeStreamRangeReader)).call(this, stream));

    _this4._httpHeaders = {};
    for (var property in stream.httpHeaders) {
      var value = stream.httpHeaders[property];
      if (typeof value === 'undefined') {
        continue;
      }
      _this4._httpHeaders[property] = value;
    }
    _this4._httpHeaders['Range'] = 'bytes=' + start + '-' + (end - 1);
    var handleResponse = function handleResponse(response) {
      if (response.statusCode === 404) {
        var error = new _util.MissingPDFException('Missing PDF "' + _this4._url + '".');
        _this4._storedError = error;
        return;
      }
      _this4._setReadableStream(response);
    };
    _this4._request = null;
    if (_this4._url.protocol === 'http:') {
      _this4._request = http.request(createRequestOptions(_this4._url, _this4._httpHeaders), handleResponse);
    } else {
      _this4._request = https.request(createRequestOptions(_this4._url, _this4._httpHeaders), handleResponse);
    }
    _this4._request.on('error', function (reason) {
      _this4._storedError = reason;
    });
    _this4._request.end();
    return _this4;
  }

  return PDFNodeStreamRangeReader;
}(BaseRangeReader);

var PDFNodeStreamFsFullReader = function (_BaseFullReader2) {
  _inherits(PDFNodeStreamFsFullReader, _BaseFullReader2);

  function PDFNodeStreamFsFullReader(stream) {
    _classCallCheck(this, PDFNodeStreamFsFullReader);

    var _this5 = _possibleConstructorReturn(this, (PDFNodeStreamFsFullReader.__proto__ || Object.getPrototypeOf(PDFNodeStreamFsFullReader)).call(this, stream));

    var path = decodeURIComponent(_this5._url.path);
    if (fileUriRegex.test(_this5._url.href)) {
      path = path.replace(/^\//, '');
    }
    fs.lstat(path, function (error, stat) {
      if (error) {
        if (error.code === 'ENOENT') {
          error = new _util.MissingPDFException('Missing PDF "' + path + '".');
        }
        _this5._storedError = error;
        _this5._headersCapability.reject(error);
        return;
      }
      _this5._contentLength = stat.size;
      _this5._setReadableStream(fs.createReadStream(path));
      _this5._headersCapability.resolve();
    });
    return _this5;
  }

  return PDFNodeStreamFsFullReader;
}(BaseFullReader);

var PDFNodeStreamFsRangeReader = function (_BaseRangeReader2) {
  _inherits(PDFNodeStreamFsRangeReader, _BaseRangeReader2);

  function PDFNodeStreamFsRangeReader(stream, start, end) {
    _classCallCheck(this, PDFNodeStreamFsRangeReader);

    var _this6 = _possibleConstructorReturn(this, (PDFNodeStreamFsRangeReader.__proto__ || Object.getPrototypeOf(PDFNodeStreamFsRangeReader)).call(this, stream));

    var path = decodeURIComponent(_this6._url.path);
    if (fileUriRegex.test(_this6._url.href)) {
      path = path.replace(/^\//, '');
    }
    _this6._setReadableStream(fs.createReadStream(path, {
      start: start,
      end: end - 1
    }));
    return _this6;
  }

  return PDFNodeStreamFsRangeReader;
}(BaseRangeReader);

exports.PDFNodeStream = PDFNodeStream;

/***/ }),
/* 149 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateResponseStatus = exports.validateRangeRequestCapabilities = exports.extractFilenameFromHeader = exports.createResponseStatusError = undefined;

var _util = __w_pdfjs_require__(1);

var _content_disposition = __w_pdfjs_require__(150);

function validateRangeRequestCapabilities(_ref) {
  var getResponseHeader = _ref.getResponseHeader,
      isHttp = _ref.isHttp,
      rangeChunkSize = _ref.rangeChunkSize,
      disableRange = _ref.disableRange;

  (0, _util.assert)(rangeChunkSize > 0, 'Range chunk size must be larger than zero');
  var returnValues = {
    allowRangeRequests: false,
    suggestedLength: undefined
  };
  var length = parseInt(getResponseHeader('Content-Length'), 10);
  if (!Number.isInteger(length)) {
    return returnValues;
  }
  returnValues.suggestedLength = length;
  if (length <= 2 * rangeChunkSize) {
    return returnValues;
  }
  if (disableRange || !isHttp) {
    return returnValues;
  }
  if (getResponseHeader('Accept-Ranges') !== 'bytes') {
    return returnValues;
  }
  var contentEncoding = getResponseHeader('Content-Encoding') || 'identity';
  if (contentEncoding !== 'identity') {
    return returnValues;
  }
  returnValues.allowRangeRequests = true;
  return returnValues;
}
function extractFilenameFromHeader(getResponseHeader) {
  var contentDisposition = getResponseHeader('Content-Disposition');
  if (contentDisposition) {
    var filename = (0, _content_disposition.getFilenameFromContentDispositionHeader)(contentDisposition);
    if (/\.pdf$/i.test(filename)) {
      return filename;
    }
  }
  return null;
}
function createResponseStatusError(status, url) {
  if (status === 404 || status === 0 && /^file:/.test(url)) {
    return new _util.MissingPDFException('Missing PDF "' + url + '".');
  }
  return new _util.UnexpectedResponseException('Unexpected server response (' + status + ') while retrieving PDF "' + url + '".', status);
}
function validateResponseStatus(status) {
  return status === 200 || status === 206;
}
exports.createResponseStatusError = createResponseStatusError;
exports.extractFilenameFromHeader = extractFilenameFromHeader;
exports.validateRangeRequestCapabilities = validateRangeRequestCapabilities;
exports.validateResponseStatus = validateResponseStatus;

/***/ }),
/* 150 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function getFilenameFromContentDispositionHeader(contentDisposition) {
  var needsEncodingFixup = true;
  var tmp = toParamRegExp('filename\\*', 'i').exec(contentDisposition);
  if (tmp) {
    tmp = tmp[1];
    var filename = rfc2616unquote(tmp);
    filename = unescape(filename);
    filename = rfc5987decode(filename);
    filename = rfc2047decode(filename);
    return fixupEncoding(filename);
  }
  tmp = rfc2231getparam(contentDisposition);
  if (tmp) {
    var _filename = rfc2047decode(tmp);
    return fixupEncoding(_filename);
  }
  tmp = toParamRegExp('filename', 'i').exec(contentDisposition);
  if (tmp) {
    tmp = tmp[1];
    var _filename2 = rfc2616unquote(tmp);
    _filename2 = rfc2047decode(_filename2);
    return fixupEncoding(_filename2);
  }
  function toParamRegExp(attributePattern, flags) {
    return new RegExp('(?:^|;)\\s*' + attributePattern + '\\s*=\\s*' + '(' + '[^";\\s][^;\\s]*' + '|' + '"(?:[^"\\\\]|\\\\"?)+"?' + ')', flags);
  }
  function textdecode(encoding, value) {
    if (encoding) {
      if (!/^[\x00-\xFF]+$/.test(value)) {
        return value;
      }
      try {
        var decoder = new TextDecoder(encoding, { fatal: true });
        var bytes = new Array(value.length);
        for (var i = 0; i < value.length; ++i) {
          bytes[i] = value.charCodeAt(i);
        }
        value = decoder.decode(new Uint8Array(bytes));
        needsEncodingFixup = false;
      } catch (e) {
        if (/^utf-?8$/i.test(encoding)) {
          try {
            value = decodeURIComponent(escape(value));
            needsEncodingFixup = false;
          } catch (err) {}
        }
      }
    }
    return value;
  }
  function fixupEncoding(value) {
    if (needsEncodingFixup && /[\x80-\xff]/.test(value)) {
      value = textdecode('utf-8', value);
      if (needsEncodingFixup) {
        value = textdecode('iso-8859-1', value);
      }
    }
    return value;
  }
  function rfc2231getparam(contentDisposition) {
    var matches = [],
        match = void 0;
    var iter = toParamRegExp('filename\\*((?!0\\d)\\d+)(\\*?)', 'ig');
    while ((match = iter.exec(contentDisposition)) !== null) {
      var _match = match,
          _match2 = _slicedToArray(_match, 4),
          n = _match2[1],
          quot = _match2[2],
          part = _match2[3];

      n = parseInt(n, 10);
      if (n in matches) {
        if (n === 0) {
          break;
        }
        continue;
      }
      matches[n] = [quot, part];
    }
    var parts = [];
    for (var _n = 0; _n < matches.length; ++_n) {
      if (!(_n in matches)) {
        break;
      }

      var _matches$_n = _slicedToArray(matches[_n], 2),
          _quot = _matches$_n[0],
          _part = _matches$_n[1];

      _part = rfc2616unquote(_part);
      if (_quot) {
        _part = unescape(_part);
        if (_n === 0) {
          _part = rfc5987decode(_part);
        }
      }
      parts.push(_part);
    }
    return parts.join('');
  }
  function rfc2616unquote(value) {
    if (value.charAt(0) === '"') {
      var parts = value.slice(1).split('\\"');
      for (var i = 0; i < parts.length; ++i) {
        var quotindex = parts[i].indexOf('"');
        if (quotindex !== -1) {
          parts[i] = parts[i].slice(0, quotindex);
          parts.length = i + 1;
        }
        parts[i] = parts[i].replace(/\\(.)/g, '$1');
      }
      value = parts.join('"');
    }
    return value;
  }
  function rfc5987decode(extvalue) {
    var encodingend = extvalue.indexOf('\'');
    if (encodingend === -1) {
      return extvalue;
    }
    var encoding = extvalue.slice(0, encodingend);
    var langvalue = extvalue.slice(encodingend + 1);
    var value = langvalue.replace(/^[^']*'/, '');
    return textdecode(encoding, value);
  }
  function rfc2047decode(value) {
    if (value.slice(0, 2) !== '=?' || /[\x00-\x19\x80-\xff]/.test(value)) {
      return value;
    }
    return value.replace(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function (_, charset, encoding, text) {
      if (encoding === 'q' || encoding === 'Q') {
        text = text.replace(/_/g, ' ');
        text = text.replace(/=([0-9a-fA-F]{2})/g, function (_, hex) {
          return String.fromCharCode(parseInt(hex, 16));
        });
        return textdecode(charset, text);
      }
      try {
        text = atob(text);
      } catch (e) {}
      return textdecode(charset, text);
    });
  }
  return '';
}
exports.getFilenameFromContentDispositionHeader = getFilenameFromContentDispositionHeader;

/***/ }),
/* 151 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDFFetchStream = undefined;

var _regenerator = __w_pdfjs_require__(137);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __w_pdfjs_require__(1);

var _network_utils = __w_pdfjs_require__(149);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function createFetchOptions(headers, withCredentials, abortController) {
  return {
    method: 'GET',
    headers: headers,
    signal: abortController && abortController.signal,
    mode: 'cors',
    credentials: withCredentials ? 'include' : 'same-origin',
    redirect: 'follow'
  };
}

var PDFFetchStream = function () {
  function PDFFetchStream(source) {
    _classCallCheck(this, PDFFetchStream);

    this.source = source;
    this.isHttp = /^https?:/i.test(source.url);
    this.httpHeaders = this.isHttp && source.httpHeaders || {};
    this._fullRequestReader = null;
    this._rangeRequestReaders = [];
  }

  _createClass(PDFFetchStream, [{
    key: 'getFullReader',
    value: function getFullReader() {
      (0, _util.assert)(!this._fullRequestReader);
      this._fullRequestReader = new PDFFetchStreamReader(this);
      return this._fullRequestReader;
    }
  }, {
    key: 'getRangeReader',
    value: function getRangeReader(begin, end) {
      var reader = new PDFFetchStreamRangeReader(this, begin, end);
      this._rangeRequestReaders.push(reader);
      return reader;
    }
  }, {
    key: 'cancelAllRequests',
    value: function cancelAllRequests(reason) {
      if (this._fullRequestReader) {
        this._fullRequestReader.cancel(reason);
      }
      var readers = this._rangeRequestReaders.slice(0);
      readers.forEach(function (reader) {
        reader.cancel(reason);
      });
    }
  }]);

  return PDFFetchStream;
}();

var PDFFetchStreamReader = function () {
  function PDFFetchStreamReader(stream) {
    var _this = this;

    _classCallCheck(this, PDFFetchStreamReader);

    this._stream = stream;
    this._reader = null;
    this._loaded = 0;
    this._filename = null;
    var source = stream.source;
    this._withCredentials = source.withCredentials;
    this._contentLength = source.length;
    this._headersCapability = (0, _util.createPromiseCapability)();
    this._disableRange = source.disableRange || false;
    this._rangeChunkSize = source.rangeChunkSize;
    if (!this._rangeChunkSize && !this._disableRange) {
      this._disableRange = true;
    }
    if (typeof AbortController !== 'undefined') {
      this._abortController = new AbortController();
    }
    this._isStreamingSupported = !source.disableStream;
    this._isRangeSupported = !source.disableRange;
    this._headers = new Headers();
    for (var property in this._stream.httpHeaders) {
      var value = this._stream.httpHeaders[property];
      if (typeof value === 'undefined') {
        continue;
      }
      this._headers.append(property, value);
    }
    var url = source.url;
    fetch(url, createFetchOptions(this._headers, this._withCredentials, this._abortController)).then(function (response) {
      if (!(0, _network_utils.validateResponseStatus)(response.status)) {
        throw (0, _network_utils.createResponseStatusError)(response.status, url);
      }
      _this._reader = response.body.getReader();
      _this._headersCapability.resolve();
      var getResponseHeader = function getResponseHeader(name) {
        return response.headers.get(name);
      };

      var _validateRangeRequest = (0, _network_utils.validateRangeRequestCapabilities)({
        getResponseHeader: getResponseHeader,
        isHttp: _this._stream.isHttp,
        rangeChunkSize: _this._rangeChunkSize,
        disableRange: _this._disableRange
      }),
          allowRangeRequests = _validateRangeRequest.allowRangeRequests,
          suggestedLength = _validateRangeRequest.suggestedLength;

      _this._isRangeSupported = allowRangeRequests;
      _this._contentLength = suggestedLength || _this._contentLength;
      _this._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);
      if (!_this._isStreamingSupported && _this._isRangeSupported) {
        _this.cancel(new _util.AbortException('streaming is disabled'));
      }
    }).catch(this._headersCapability.reject);
    this.onProgress = null;
  }

  _createClass(PDFFetchStreamReader, [{
    key: 'read',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _ref2, value, done, buffer;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._headersCapability.promise;

              case 2:
                _context.next = 4;
                return this._reader.read();

              case 4:
                _ref2 = _context.sent;
                value = _ref2.value;
                done = _ref2.done;

                if (!done) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt('return', {
                  value: value,
                  done: done
                });

              case 9:
                this._loaded += value.byteLength;
                if (this.onProgress) {
                  this.onProgress({
                    loaded: this._loaded,
                    total: this._contentLength
                  });
                }
                buffer = new Uint8Array(value).buffer;
                return _context.abrupt('return', {
                  value: buffer,
                  done: false
                });

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function read() {
        return _ref.apply(this, arguments);
      }

      return read;
    }()
  }, {
    key: 'cancel',
    value: function cancel(reason) {
      if (this._reader) {
        this._reader.cancel(reason);
      }
      if (this._abortController) {
        this._abortController.abort();
      }
    }
  }, {
    key: 'headersReady',
    get: function get() {
      return this._headersCapability.promise;
    }
  }, {
    key: 'filename',
    get: function get() {
      return this._filename;
    }
  }, {
    key: 'contentLength',
    get: function get() {
      return this._contentLength;
    }
  }, {
    key: 'isRangeSupported',
    get: function get() {
      return this._isRangeSupported;
    }
  }, {
    key: 'isStreamingSupported',
    get: function get() {
      return this._isStreamingSupported;
    }
  }]);

  return PDFFetchStreamReader;
}();

var PDFFetchStreamRangeReader = function () {
  function PDFFetchStreamRangeReader(stream, begin, end) {
    var _this2 = this;

    _classCallCheck(this, PDFFetchStreamRangeReader);

    this._stream = stream;
    this._reader = null;
    this._loaded = 0;
    var source = stream.source;
    this._withCredentials = source.withCredentials;
    this._readCapability = (0, _util.createPromiseCapability)();
    this._isStreamingSupported = !source.disableStream;
    if (typeof AbortController !== 'undefined') {
      this._abortController = new AbortController();
    }
    this._headers = new Headers();
    for (var property in this._stream.httpHeaders) {
      var value = this._stream.httpHeaders[property];
      if (typeof value === 'undefined') {
        continue;
      }
      this._headers.append(property, value);
    }
    var rangeStr = begin + '-' + (end - 1);
    this._headers.append('Range', 'bytes=' + rangeStr);
    var url = source.url;
    fetch(url, createFetchOptions(this._headers, this._withCredentials, this._abortController)).then(function (response) {
      if (!(0, _network_utils.validateResponseStatus)(response.status)) {
        throw (0, _network_utils.createResponseStatusError)(response.status, url);
      }
      _this2._readCapability.resolve();
      _this2._reader = response.body.getReader();
    });
    this.onProgress = null;
  }

  _createClass(PDFFetchStreamRangeReader, [{
    key: 'read',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var _ref4, value, done, buffer;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._readCapability.promise;

              case 2:
                _context2.next = 4;
                return this._reader.read();

              case 4:
                _ref4 = _context2.sent;
                value = _ref4.value;
                done = _ref4.done;

                if (!done) {
                  _context2.next = 9;
                  break;
                }

                return _context2.abrupt('return', {
                  value: value,
                  done: done
                });

              case 9:
                this._loaded += value.byteLength;
                if (this.onProgress) {
                  this.onProgress({ loaded: this._loaded });
                }
                buffer = new Uint8Array(value).buffer;
                return _context2.abrupt('return', {
                  value: buffer,
                  done: false
                });

              case 13:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function read() {
        return _ref3.apply(this, arguments);
      }

      return read;
    }()
  }, {
    key: 'cancel',
    value: function cancel(reason) {
      if (this._reader) {
        this._reader.cancel(reason);
      }
      if (this._abortController) {
        this._abortController.abort();
      }
    }
  }, {
    key: 'isStreamingSupported',
    get: function get() {
      return this._isStreamingSupported;
    }
  }]);

  return PDFFetchStreamRangeReader;
}();

exports.PDFFetchStream = PDFFetchStream;

/***/ }),
/* 152 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NetworkManager = exports.PDFNetworkStream = undefined;

var _regenerator = __w_pdfjs_require__(137);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _util = __w_pdfjs_require__(1);

var _network_utils = __w_pdfjs_require__(149);

var _global_scope = __w_pdfjs_require__(3);

var _global_scope2 = _interopRequireDefault(_global_scope);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

;
var OK_RESPONSE = 200;
var PARTIAL_CONTENT_RESPONSE = 206;
function NetworkManager(url, args) {
  this.url = url;
  args = args || {};
  this.isHttp = /^https?:/i.test(url);
  this.httpHeaders = this.isHttp && args.httpHeaders || {};
  this.withCredentials = args.withCredentials || false;
  this.getXhr = args.getXhr || function NetworkManager_getXhr() {
    return new XMLHttpRequest();
  };
  this.currXhrId = 0;
  this.pendingRequests = Object.create(null);
  this.loadedRequests = Object.create(null);
}
function getArrayBuffer(xhr) {
  var data = xhr.response;
  if (typeof data !== 'string') {
    return data;
  }
  var array = (0, _util.stringToBytes)(data);
  return array.buffer;
}
var supportsMozChunked = function supportsMozChunkedClosure() {
  try {
    var x = new XMLHttpRequest();
    x.open('GET', _global_scope2.default.location.href);
    x.responseType = 'moz-chunked-arraybuffer';
    return x.responseType === 'moz-chunked-arraybuffer';
  } catch (e) {
    return false;
  }
}();
NetworkManager.prototype = {
  requestRange: function NetworkManager_requestRange(begin, end, listeners) {
    var args = {
      begin: begin,
      end: end
    };
    for (var prop in listeners) {
      args[prop] = listeners[prop];
    }
    return this.request(args);
  },
  requestFull: function NetworkManager_requestFull(listeners) {
    return this.request(listeners);
  },
  request: function NetworkManager_request(args) {
    var xhr = this.getXhr();
    var xhrId = this.currXhrId++;
    var pendingRequest = this.pendingRequests[xhrId] = { xhr: xhr };
    xhr.open('GET', this.url);
    xhr.withCredentials = this.withCredentials;
    for (var property in this.httpHeaders) {
      var value = this.httpHeaders[property];
      if (typeof value === 'undefined') {
        continue;
      }
      xhr.setRequestHeader(property, value);
    }
    if (this.isHttp && 'begin' in args && 'end' in args) {
      var rangeStr = args.begin + '-' + (args.end - 1);
      xhr.setRequestHeader('Range', 'bytes=' + rangeStr);
      pendingRequest.expectedStatus = 206;
    } else {
      pendingRequest.expectedStatus = 200;
    }
    var useMozChunkedLoading = supportsMozChunked && !!args.onProgressiveData;
    if (useMozChunkedLoading) {
      xhr.responseType = 'moz-chunked-arraybuffer';
      pendingRequest.onProgressiveData = args.onProgressiveData;
      pendingRequest.mozChunked = true;
    } else {
      xhr.responseType = 'arraybuffer';
    }
    if (args.onError) {
      xhr.onerror = function (evt) {
        args.onError(xhr.status);
      };
    }
    xhr.onreadystatechange = this.onStateChange.bind(this, xhrId);
    xhr.onprogress = this.onProgress.bind(this, xhrId);
    pendingRequest.onHeadersReceived = args.onHeadersReceived;
    pendingRequest.onDone = args.onDone;
    pendingRequest.onError = args.onError;
    pendingRequest.onProgress = args.onProgress;
    xhr.send(null);
    return xhrId;
  },
  onProgress: function NetworkManager_onProgress(xhrId, evt) {
    var pendingRequest = this.pendingRequests[xhrId];
    if (!pendingRequest) {
      return;
    }
    if (pendingRequest.mozChunked) {
      var chunk = getArrayBuffer(pendingRequest.xhr);
      pendingRequest.onProgressiveData(chunk);
    }
    var onProgress = pendingRequest.onProgress;
    if (onProgress) {
      onProgress(evt);
    }
  },
  onStateChange: function NetworkManager_onStateChange(xhrId, evt) {
    var pendingRequest = this.pendingRequests[xhrId];
    if (!pendingRequest) {
      return;
    }
    var xhr = pendingRequest.xhr;
    if (xhr.readyState >= 2 && pendingRequest.onHeadersReceived) {
      pendingRequest.onHeadersReceived();
      delete pendingRequest.onHeadersReceived;
    }
    if (xhr.readyState !== 4) {
      return;
    }
    if (!(xhrId in this.pendingRequests)) {
      return;
    }
    delete this.pendingRequests[xhrId];
    if (xhr.status === 0 && this.isHttp) {
      if (pendingRequest.onError) {
        pendingRequest.onError(xhr.status);
      }
      return;
    }
    var xhrStatus = xhr.status || OK_RESPONSE;
    var ok_response_on_range_request = xhrStatus === OK_RESPONSE && pendingRequest.expectedStatus === PARTIAL_CONTENT_RESPONSE;
    if (!ok_response_on_range_request && xhrStatus !== pendingRequest.expectedStatus) {
      if (pendingRequest.onError) {
        pendingRequest.onError(xhr.status);
      }
      return;
    }
    this.loadedRequests[xhrId] = true;
    var chunk = getArrayBuffer(xhr);
    if (xhrStatus === PARTIAL_CONTENT_RESPONSE) {
      var rangeHeader = xhr.getResponseHeader('Content-Range');
      var matches = /bytes (\d+)-(\d+)\/(\d+)/.exec(rangeHeader);
      var begin = parseInt(matches[1], 10);
      pendingRequest.onDone({
        begin: begin,
        chunk: chunk
      });
    } else if (pendingRequest.onProgressiveData) {
      pendingRequest.onDone(null);
    } else if (chunk) {
      pendingRequest.onDone({
        begin: 0,
        chunk: chunk
      });
    } else if (pendingRequest.onError) {
      pendingRequest.onError(xhr.status);
    }
  },
  hasPendingRequests: function NetworkManager_hasPendingRequests() {
    for (var xhrId in this.pendingRequests) {
      return true;
    }
    return false;
  },
  getRequestXhr: function NetworkManager_getXhr(xhrId) {
    return this.pendingRequests[xhrId].xhr;
  },
  isStreamingRequest: function NetworkManager_isStreamingRequest(xhrId) {
    return !!this.pendingRequests[xhrId].onProgressiveData;
  },
  isPendingRequest: function NetworkManager_isPendingRequest(xhrId) {
    return xhrId in this.pendingRequests;
  },
  isLoadedRequest: function NetworkManager_isLoadedRequest(xhrId) {
    return xhrId in this.loadedRequests;
  },
  abortAllRequests: function NetworkManager_abortAllRequests() {
    for (var xhrId in this.pendingRequests) {
      this.abortRequest(xhrId | 0);
    }
  },
  abortRequest: function NetworkManager_abortRequest(xhrId) {
    var xhr = this.pendingRequests[xhrId].xhr;
    delete this.pendingRequests[xhrId];
    xhr.abort();
  }
};
function PDFNetworkStream(source) {
  this._source = source;
  this._manager = new NetworkManager(source.url, {
    httpHeaders: source.httpHeaders,
    withCredentials: source.withCredentials
  });
  this._rangeChunkSize = source.rangeChunkSize;
  this._fullRequestReader = null;
  this._rangeRequestReaders = [];
}
PDFNetworkStream.prototype = {
  _onRangeRequestReaderClosed: function PDFNetworkStream_onRangeRequestReaderClosed(reader) {
    var i = this._rangeRequestReaders.indexOf(reader);
    if (i >= 0) {
      this._rangeRequestReaders.splice(i, 1);
    }
  },
  getFullReader: function PDFNetworkStream_getFullReader() {
    (0, _util.assert)(!this._fullRequestReader);
    this._fullRequestReader = new PDFNetworkStreamFullRequestReader(this._manager, this._source);
    return this._fullRequestReader;
  },
  getRangeReader: function PDFNetworkStream_getRangeReader(begin, end) {
    var reader = new PDFNetworkStreamRangeRequestReader(this._manager, begin, end);
    reader.onClosed = this._onRangeRequestReaderClosed.bind(this);
    this._rangeRequestReaders.push(reader);
    return reader;
  },
  cancelAllRequests: function PDFNetworkStream_cancelAllRequests(reason) {
    if (this._fullRequestReader) {
      this._fullRequestReader.cancel(reason);
    }
    var readers = this._rangeRequestReaders.slice(0);
    readers.forEach(function (reader) {
      reader.cancel(reason);
    });
  }
};
function PDFNetworkStreamFullRequestReader(manager, source) {
  this._manager = manager;
  var args = {
    onHeadersReceived: this._onHeadersReceived.bind(this),
    onProgressiveData: source.disableStream ? null : this._onProgressiveData.bind(this),
    onDone: this._onDone.bind(this),
    onError: this._onError.bind(this),
    onProgress: this._onProgress.bind(this)
  };
  this._url = source.url;
  this._fullRequestId = manager.requestFull(args);
  this._headersReceivedCapability = (0, _util.createPromiseCapability)();
  this._disableRange = source.disableRange || false;
  this._contentLength = source.length;
  this._rangeChunkSize = source.rangeChunkSize;
  if (!this._rangeChunkSize && !this._disableRange) {
    this._disableRange = true;
  }
  this._isStreamingSupported = false;
  this._isRangeSupported = false;
  this._cachedChunks = [];
  this._requests = [];
  this._done = false;
  this._storedError = undefined;
  this._filename = null;
  this.onProgress = null;
}
PDFNetworkStreamFullRequestReader.prototype = {
  _onHeadersReceived: function PDFNetworkStreamFullRequestReader_onHeadersReceived() {
    var fullRequestXhrId = this._fullRequestId;
    var fullRequestXhr = this._manager.getRequestXhr(fullRequestXhrId);
    var getResponseHeader = function getResponseHeader(name) {
      return fullRequestXhr.getResponseHeader(name);
    };

    var _validateRangeRequest = (0, _network_utils.validateRangeRequestCapabilities)({
      getResponseHeader: getResponseHeader,
      isHttp: this._manager.isHttp,
      rangeChunkSize: this._rangeChunkSize,
      disableRange: this._disableRange
    }),
        allowRangeRequests = _validateRangeRequest.allowRangeRequests,
        suggestedLength = _validateRangeRequest.suggestedLength;

    if (allowRangeRequests) {
      this._isRangeSupported = true;
    }
    this._contentLength = suggestedLength || this._contentLength;
    this._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);
    var networkManager = this._manager;
    if (networkManager.isStreamingRequest(fullRequestXhrId)) {
      this._isStreamingSupported = true;
    } else if (this._isRangeSupported) {
      networkManager.abortRequest(fullRequestXhrId);
    }
    this._headersReceivedCapability.resolve();
  },
  _onProgressiveData: function PDFNetworkStreamFullRequestReader_onProgressiveData(chunk) {
    if (this._requests.length > 0) {
      var requestCapability = this._requests.shift();
      requestCapability.resolve({
        value: chunk,
        done: false
      });
    } else {
      this._cachedChunks.push(chunk);
    }
  },
  _onDone: function PDFNetworkStreamFullRequestReader_onDone(args) {
    if (args) {
      this._onProgressiveData(args.chunk);
    }
    this._done = true;
    if (this._cachedChunks.length > 0) {
      return;
    }
    this._requests.forEach(function (requestCapability) {
      requestCapability.resolve({
        value: undefined,
        done: true
      });
    });
    this._requests = [];
  },
  _onError: function PDFNetworkStreamFullRequestReader_onError(status) {
    var url = this._url;
    var exception = (0, _network_utils.createResponseStatusError)(status, url);
    this._storedError = exception;
    this._headersReceivedCapability.reject(exception);
    this._requests.forEach(function (requestCapability) {
      requestCapability.reject(exception);
    });
    this._requests = [];
    this._cachedChunks = [];
  },
  _onProgress: function PDFNetworkStreamFullRequestReader_onProgress(data) {
    if (this.onProgress) {
      this.onProgress({
        loaded: data.loaded,
        total: data.lengthComputable ? data.total : this._contentLength
      });
    }
  },
  get filename() {
    return this._filename;
  },
  get isRangeSupported() {
    return this._isRangeSupported;
  },
  get isStreamingSupported() {
    return this._isStreamingSupported;
  },
  get contentLength() {
    return this._contentLength;
  },
  get headersReady() {
    return this._headersReceivedCapability.promise;
  },
  read: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var chunk, requestCapability;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!this._storedError) {
                _context.next = 2;
                break;
              }

              throw this._storedError;

            case 2:
              if (!(this._cachedChunks.length > 0)) {
                _context.next = 5;
                break;
              }

              chunk = this._cachedChunks.shift();
              return _context.abrupt('return', {
                value: chunk,
                done: false
              });

            case 5:
              if (!this._done) {
                _context.next = 7;
                break;
              }

              return _context.abrupt('return', {
                value: undefined,
                done: true
              });

            case 7:
              requestCapability = (0, _util.createPromiseCapability)();

              this._requests.push(requestCapability);
              return _context.abrupt('return', requestCapability.promise);

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function read() {
      return _ref.apply(this, arguments);
    }

    return read;
  }(),

  cancel: function PDFNetworkStreamFullRequestReader_cancel(reason) {
    this._done = true;
    this._headersReceivedCapability.reject(reason);
    this._requests.forEach(function (requestCapability) {
      requestCapability.resolve({
        value: undefined,
        done: true
      });
    });
    this._requests = [];
    if (this._manager.isPendingRequest(this._fullRequestId)) {
      this._manager.abortRequest(this._fullRequestId);
    }
    this._fullRequestReader = null;
  }
};
function PDFNetworkStreamRangeRequestReader(manager, begin, end) {
  this._manager = manager;
  var args = {
    onDone: this._onDone.bind(this),
    onProgress: this._onProgress.bind(this)
  };
  this._requestId = manager.requestRange(begin, end, args);
  this._requests = [];
  this._queuedChunk = null;
  this._done = false;
  this.onProgress = null;
  this.onClosed = null;
}
PDFNetworkStreamRangeRequestReader.prototype = {
  _close: function PDFNetworkStreamRangeRequestReader_close() {
    if (this.onClosed) {
      this.onClosed(this);
    }
  },
  _onDone: function PDFNetworkStreamRangeRequestReader_onDone(data) {
    var chunk = data.chunk;
    if (this._requests.length > 0) {
      var requestCapability = this._requests.shift();
      requestCapability.resolve({
        value: chunk,
        done: false
      });
    } else {
      this._queuedChunk = chunk;
    }
    this._done = true;
    this._requests.forEach(function (requestCapability) {
      requestCapability.resolve({
        value: undefined,
        done: true
      });
    });
    this._requests = [];
    this._close();
  },
  _onProgress: function PDFNetworkStreamRangeRequestReader_onProgress(evt) {
    if (!this.isStreamingSupported && this.onProgress) {
      this.onProgress({ loaded: evt.loaded });
    }
  },
  get isStreamingSupported() {
    return false;
  },
  read: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var chunk, requestCapability;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(this._queuedChunk !== null)) {
                _context2.next = 4;
                break;
              }

              chunk = this._queuedChunk;

              this._queuedChunk = null;
              return _context2.abrupt('return', {
                value: chunk,
                done: false
              });

            case 4:
              if (!this._done) {
                _context2.next = 6;
                break;
              }

              return _context2.abrupt('return', {
                value: undefined,
                done: true
              });

            case 6:
              requestCapability = (0, _util.createPromiseCapability)();

              this._requests.push(requestCapability);
              return _context2.abrupt('return', requestCapability.promise);

            case 9:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function read() {
      return _ref2.apply(this, arguments);
    }

    return read;
  }(),

  cancel: function PDFNetworkStreamRangeRequestReader_cancel(reason) {
    this._done = true;
    this._requests.forEach(function (requestCapability) {
      requestCapability.resolve({
        value: undefined,
        done: true
      });
    });
    this._requests = [];
    if (this._manager.isPendingRequest(this._requestId)) {
      this._manager.abortRequest(this._requestId);
    }
    this._close();
  }
};
exports.PDFNetworkStream = PDFNetworkStream;
exports.NetworkManager = NetworkManager;

/***/ })
/******/ ]);
});
//# sourceMappingURL=pdf.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../buffer/index.js */ "./node_modules/buffer/index.js").Buffer, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/url/url.js":
/*!*********************************!*\
  !*** ./node_modules/url/url.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(/*! punycode */ "./node_modules/node-libs-browser/node_modules/punycode/punycode.js");
var util = __webpack_require__(/*! ./util */ "./node_modules/url/util.js");

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),

/***/ "./node_modules/url/util.js":
/*!**********************************!*\
  !*** ./node_modules/url/util.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "./node_modules/mithril/mithril.mjs");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Nav */ "./resources/js/components/Nav.js");
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Login */ "./resources/js/components/Login.js");
/* harmony import */ var _components_Register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Register */ "./resources/js/components/Register.js");
/* harmony import */ var _components_Welcome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Welcome */ "./resources/js/components/Welcome.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Home */ "./resources/js/components/Home.js");
/* harmony import */ var _components_Books__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Books */ "./resources/js/components/Books.js");
/* harmony import */ var _components_Account__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Account */ "./resources/js/components/Account.js");
/* harmony import */ var _components_BookNew__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/BookNew */ "./resources/js/components/BookNew.js");
/* harmony import */ var _components_BookView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/BookView */ "./resources/js/components/BookView.js");
/* harmony import */ var _components_Users__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Users */ "./resources/js/components/Users.js");












var getUserApiToken = function getUserApiToken() {
  var user = JSON.parse(localStorage.getItem('user'));
  if (user !== null) return user.api_token;
  return false;
};

var headers = [];
headers['X-Requested-With'] = 'XMLHttpRequest';
var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  headers['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

mithril__WEBPACK_IMPORTED_MODULE_0__["default"].defaults = {
  headers: headers
};
mithril__WEBPACK_IMPORTED_MODULE_0__["default"].mount(document.body.querySelector('nav'), _components_Nav__WEBPACK_IMPORTED_MODULE_1__["default"]);
mithril__WEBPACK_IMPORTED_MODULE_0__["default"].route(document.body.querySelector('main'), '/', {
  '/': _components_Home__WEBPACK_IMPORTED_MODULE_5__["default"],
  '/welcome': _components_Welcome__WEBPACK_IMPORTED_MODULE_4__["default"],
  '/login': _components_Login__WEBPACK_IMPORTED_MODULE_2__["default"],
  '/register': _components_Register__WEBPACK_IMPORTED_MODULE_3__["default"],
  '/books': _components_Books__WEBPACK_IMPORTED_MODULE_6__["default"],
  '/account': _components_Account__WEBPACK_IMPORTED_MODULE_7__["default"],
  '/books/new': _components_BookNew__WEBPACK_IMPORTED_MODULE_8__["default"],
  '/books/:id': _components_BookView__WEBPACK_IMPORTED_MODULE_9__["default"],
  '/users': _components_Users__WEBPACK_IMPORTED_MODULE_10__["default"]
});

/***/ }),

/***/ "./resources/js/components/Account.js":
/*!********************************************!*\
  !*** ./resources/js/components/Account.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "./node_modules/mithril/mithril.mjs");
/* harmony import */ var _Copy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Copy */ "./resources/js/components/Copy.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/User */ "./resources/js/models/User.js");
/* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.isempty */ "./node_modules/lodash.isempty/index.js");
/* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isempty__WEBPACK_IMPORTED_MODULE_3__);




var component = {
  view: function view() {
    return Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.w-full.max-w-5xl.mx-auto', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.content', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('p.content__title', _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].current.name + '\'s Account'), lodash_isempty__WEBPACK_IMPORTED_MODULE_3___default()(_models_User__WEBPACK_IMPORTED_MODULE_2__["default"].current) ? null : Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('form.form.content', {
      onsubmit: function onsubmit(e) {
        e.preventDefault();
        _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].update({
          name: e.target.elements.name.value
        }, _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].current.id);
      }
    }, [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('input[type=hidden][name=_token]', {
      value: mithril__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers['X-CSRF-TOKEN']
    }), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.form__group', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('label.input__label[for=name]', 'Name'), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('input#name.form__input[type=text][name=name][autocomplete=off][required]', {
      value: _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].current.name
    })]), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.form__group', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('label.input__label[for=email]', 'Email'), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('input#email.form__input[type=text][name=email][autocomplete=off][required][readonly]', {
      value: _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].current.email
    })]), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.form__footer', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])(''), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('button.form__button[type=submit]', 'Save Changes')])])]), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])(_Copy__WEBPACK_IMPORTED_MODULE_1__["default"])]);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (component);

/***/ }),

/***/ "./resources/js/components/Alert.js":
/*!******************************************!*\
  !*** ./resources/js/components/Alert.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "./node_modules/mithril/mithril.mjs");

var component = {
  view: function view(vnode) {
    var attrs = vnode.attrs;

    switch (attrs.type) {
      case 'info':
        return Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])(alerts.Info, attrs);
        break;

      case 'warn':
        return Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])(alerts.Warn, attrs);
        break;

      case 'error':
        return Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])(alerts.Error, attrs);
        break;

      default:
        return Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])(alerts.Info, attrs);
    }

    ;
  }
};
var alerts = {
  Info: {
    view: function view(vnode) {
      return Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.bg-indigo-900.text-center.py-4.lg:px-4', Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('[role=alert].p-2.bg-indigo-800.items-center.text-indigo-100.leading-none.lg:rounded-full.text-center', Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('span.font-semibold.mr-2.text-left', vnode.attrs.message)));
    }
  },
  Warn: {
    view: function view(vnode) {
      return Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.bg-yellow-700.text-center.py-4.lg:px-4', Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('[role=alert].p-2.bg-yellow-600.items-center.text-indigo-100.leading-none.lg:rounded-full.lg:inline-flex', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('span.font-semibold.mr-2.text-left.flex-auto', vnode.attrs.message)]));
    }
  },
  Error: {
    view: function view(vnode) {
      return Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.bg-red-900.text-center.py-4.lg:px-4', Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('[role=alert].py-2.px-4.bg-red-800.items-center.text-indigo-100.leading-none.lg:rounded-full.lg:inline-flex', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('span.font-semibold.mr-2.text-left.flex-auto', vnode.attrs.message)]));
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (component);

/***/ }),

/***/ "./resources/js/components/BookNew.js":
/*!********************************************!*\
  !*** ./resources/js/components/BookNew.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "./node_modules/mithril/mithril.mjs");
/* harmony import */ var _Copy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Copy */ "./resources/js/components/Copy.js");
/* harmony import */ var _models_Book__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Book */ "./resources/js/models/Book.js");



var component = {
  view: function view() {
    return Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.w-full.max-w-5xl.mx-auto', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.content', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('p.content__title', 'New Year Book'), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('form.form.content', {
      onsubmit: function onsubmit(e) {
        e.preventDefault();
        var data = new FormData();
        data.append('name', e.target.elements.name.value);
        data.append('file', e.target.elements.file.files[0]);
        data.append('description', e.target.elements.description.value);
        _models_Book__WEBPACK_IMPORTED_MODULE_2__["default"].create(data);
      }
    }, [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('input[type=hidden][name=_token]', {
      value: mithril__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers['X-CSRF-TOKEN']
    }), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.form__group', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('label.input__label[for=name]', 'Name'), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('input#name.form__input[type=text][name=name][autocomplete=off][required]')]), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.form__group', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('label.input__label[for=file]', 'File'), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('input#file.form__input[type=file][name=file][accept=.pdf][required]')]), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.form__group', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('label.input__label[for=description]', 'Description'), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('textarea#description.form__input[name=description][rows=5]')]), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.form__footer', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])(''), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('button.form__button[type=submit]', 'Upload')])])]), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])(_Copy__WEBPACK_IMPORTED_MODULE_1__["default"])]);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (component);

/***/ }),

/***/ "./resources/js/components/BookView.js":
/*!*********************************************!*\
  !*** ./resources/js/components/BookView.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "./node_modules/mithril/mithril.mjs");
/* harmony import */ var _Copy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Copy */ "./resources/js/components/Copy.js");
/* harmony import */ var _models_Book__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Book */ "./resources/js/models/Book.js");
/* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.isempty */ "./node_modules/lodash.isempty/index.js");
/* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isempty__WEBPACK_IMPORTED_MODULE_3__);





var pdfjsLib = __webpack_require__(/*! pdfjs-dist */ "./node_modules/pdfjs-dist/build/pdf.js");

var component = {
  oninit: function oninit(vnode) {
    _models_Book__WEBPACK_IMPORTED_MODULE_2__["default"].fetch(vnode.attrs.id);
  },
  view: function view() {
    return Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.w-full.max-w-5xl.mx-auto', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.content', lodash_isempty__WEBPACK_IMPORTED_MODULE_3___default()(_models_Book__WEBPACK_IMPORTED_MODULE_2__["default"].current) ? null : [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.card.mx-auto', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.card__body', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('p.card__title', _models_Book__WEBPACK_IMPORTED_MODULE_2__["default"].current.name), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('p.text-gray-700.text-sm.mb-4', _models_Book__WEBPACK_IMPORTED_MODULE_2__["default"].current.description), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('p.bg-gray-200.rounded-full.inline-block.py-1.px-3.text-xs.text-gray-700.font-bold', _models_Book__WEBPACK_IMPORTED_MODULE_2__["default"].current.user.name)])]), lodash_isempty__WEBPACK_IMPORTED_MODULE_3___default()(_models_Book__WEBPACK_IMPORTED_MODULE_2__["default"].current) ? null : Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.card.bg-gray-400', {
      style: {
        overflow: 'auto'
      }
    }, [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.card__body', {
      oncreate: function oncreate(vnode) {
        pdfjsLib.GlobalWorkerOptions.workerSrc = './js/pdfjs/pdf.worker.js';
        console.log(pdfjsLib);
        var pdfData = atob(_models_Book__WEBPACK_IMPORTED_MODULE_2__["default"].current.file),
            pdfFrame = vnode.dom,
            loadingTask = pdfjsLib.getDocument({
          data: pdfData
        });

        var renderPage = function renderPage(page) {
          var scale = 1.5,
              viewport = page.getViewport(scale),
              canvas = document.createElement('canvas'),
              ctx = canvas.getContext('2d'),
              renderContext = {
            canvasContext: ctx,
            viewport: viewport
          };
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          canvas.classList.add('my-4');
          canvas.classList.add('mx-auto');
          pdfFrame.appendChild(canvas);
          page.render(renderContext);
        };

        var renderPages = function renderPages(pdfDoc) {
          for (var num = 1; num <= pdfDoc.numPages; num++) {
            pdfDoc.getPage(num).then(renderPage);
          }
        };

        loadingTask.promise.then(renderPages);
      }
    })])]), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])(_Copy__WEBPACK_IMPORTED_MODULE_1__["default"])]);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (component);

/***/ }),

/***/ "./resources/js/components/Books.js":
/*!******************************************!*\
  !*** ./resources/js/components/Books.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "./node_modules/mithril/mithril.mjs");
/* harmony import */ var _Copy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Copy */ "./resources/js/components/Copy.js");
/* harmony import */ var _models_Book__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Book */ "./resources/js/models/Book.js");
/* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.isempty */ "./node_modules/lodash.isempty/index.js");
/* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isempty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/User */ "./resources/js/models/User.js");





var component = {
  oninit: function oninit() {
    _models_Book__WEBPACK_IMPORTED_MODULE_2__["default"].fetchAll();
  },
  view: function view() {
    return Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.w-full.max-w-5xl.mx-auto', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.content', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.flex.items-center', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('p.content__title.flex-grow', _models_User__WEBPACK_IMPORTED_MODULE_4__["default"].current.name + '\'s Books'), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('a.bg-blue-500.text-white.no-underline.rounded.py-1.px-3.font-bold[href=/books/new]', {
      oncreate: mithril__WEBPACK_IMPORTED_MODULE_0__["default"].route.link
    }, 'New')]), lodash_isempty__WEBPACK_IMPORTED_MODULE_3___default()(_models_Book__WEBPACK_IMPORTED_MODULE_2__["default"].list) ? null : Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.flex.flex-wrap.items-center.justify-start', _models_Book__WEBPACK_IMPORTED_MODULE_2__["default"].list.map(function (book) {
      return Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.card.flex-none', {
        style: {
          flexBasis: '25%'
        }
      }, [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('img.card__header'), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.card__body', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.card__title', Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('a[href=/books/' + book.id + ']', {
        oncreate: mithril__WEBPACK_IMPORTED_MODULE_0__["default"].route.link
      }, book.name)), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.card__description', book.description)]), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.card__footer')]);
    }))]), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])(_Copy__WEBPACK_IMPORTED_MODULE_1__["default"])]);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (component);

/***/ }),

/***/ "./resources/js/components/Copy.js":
/*!*****************************************!*\
  !*** ./resources/js/components/Copy.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "./node_modules/mithril/mithril.mjs");

var component = {
  view: function view() {
    return Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('p.form__copy', [mithril__WEBPACK_IMPORTED_MODULE_0__["default"].trust('&copy;'), '2019 ', Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('a[href=/]', {
      oncreate: mithril__WEBPACK_IMPORTED_MODULE_0__["default"].route.link
    }, 'Eterno'), '. All rights reserved']);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (component);

/***/ }),

/***/ "./resources/js/components/Home.js":
/*!*****************************************!*\
  !*** ./resources/js/components/Home.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "./node_modules/mithril/mithril.mjs");
/* harmony import */ var _Copy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Copy */ "./resources/js/components/Copy.js");
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Alert */ "./resources/js/components/Alert.js");



var component = {
  view: function view() {
    return Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.w-full.max-w-5xl.mx-auto', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.content', [//m(Alert, { type: 'error' }),
    Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('p.text-3xl.font-bold.text-gray-500', 'Home sweet home!')]), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])(_Copy__WEBPACK_IMPORTED_MODULE_1__["default"])]);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (component);

/***/ }),

/***/ "./resources/js/components/Login.js":
/*!******************************************!*\
  !*** ./resources/js/components/Login.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "./node_modules/mithril/mithril.mjs");
/* harmony import */ var _Copy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Copy */ "./resources/js/components/Copy.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/User */ "./resources/js/models/User.js");
/* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.isempty */ "./node_modules/lodash.isempty/index.js");
/* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isempty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Alert */ "./resources/js/components/Alert.js");





var component = {
  view: function view() {
    return Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.w-full.max-w-xs.mx-auto', [lodash_isempty__WEBPACK_IMPORTED_MODULE_3___default()(_models_User__WEBPACK_IMPORTED_MODULE_2__["default"].error) ? null : Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])(_Alert__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: 'error',
      message: _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].error.errors.user[0]
    }), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('form.form.content[action=/login][method=post]', {
      onsubmit: function onsubmit(e) {
        e.preventDefault();
        _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].login({
          email: e.target.elements.email.value,
          password: e.target.elements.password.value
        });
      }
    }, [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('input[type=hidden][name=_token]', {
      value: mithril__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers['X-CSRF-TOKEN']
    }), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.form__group', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('label.input__label[for=email]', 'Email'), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('input#email.form__input[type=text][name=email][autocomplete=off][required][autofocus]')]), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.form__group', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('label.input__label[for=password]', 'Password'), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('input#password.form__input[type=password][name=password][required]')]), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.form__footer', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('button.form__button[type=submit]', 'Sign In'), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('a.form__link[href=#]', 'Forgot Password?')])]), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])(_Copy__WEBPACK_IMPORTED_MODULE_1__["default"])]);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (component);

/***/ }),

/***/ "./resources/js/components/Nav.js":
/*!****************************************!*\
  !*** ./resources/js/components/Nav.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "./node_modules/mithril/mithril.mjs");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/User */ "./resources/js/models/User.js");
/* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.isempty */ "./node_modules/lodash.isempty/index.js");
/* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isempty__WEBPACK_IMPORTED_MODULE_2__);



var component = {
  oncreate: function oncreate() {
    if (sessionStorage.getItem('user') !== null) _models_User__WEBPACK_IMPORTED_MODULE_1__["default"].auth();
  },
  view: function view() {
    return [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.flex.items-center.flex-shrink-0 text-gray-600.mr-6', [mithril__WEBPACK_IMPORTED_MODULE_0__["default"].trust('<svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>'), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('span.font-semibold.text-xl.tracking-widest.uppercase', 'Eterno')]), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.w-full.block.flex-grow.lg:flex.lg:items-center.lg:w-auto', [!lodash_isempty__WEBPACK_IMPORTED_MODULE_2___default()(_models_User__WEBPACK_IMPORTED_MODULE_1__["default"].current) ? [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.text-sm.lg:flex-grow', _models_User__WEBPACK_IMPORTED_MODULE_1__["default"].current.admin ? [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('a[href=/users].mt-4.inline-block.lg:mt-0.text-gray-500.mr-4', {
      oncreate: mithril__WEBPACK_IMPORTED_MODULE_0__["default"].route.link
    }, 'Users'), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('a[href=/logs].mt-4.inline-block.lg:mt-0.text-gray-500.mr-4', {
      oncreate: mithril__WEBPACK_IMPORTED_MODULE_0__["default"].route.link
    }, 'Logs')] : [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('a[href=/books].mt-4.inline-block.lg:mt-0.text-gray-500.mr-4', {
      oncreate: mithril__WEBPACK_IMPORTED_MODULE_0__["default"].route.link
    }, 'Books'), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('a[href=/account].mt-4.inline-block.lg:mt-0.text-gray-500.mr-4', {
      oncreate: mithril__WEBPACK_IMPORTED_MODULE_0__["default"].route.link
    }, 'Account')]), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('span#userName.inline-block.text-xs.text-gray-700', 'Logged in as: ' + _models_User__WEBPACK_IMPORTED_MODULE_1__["default"].current.name), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('span#userEmail.inline-block.text-xs.text-gray-700'), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('a[href=/logout].inline-block.text-xs.mx-2', {
      onclick: function onclick(e) {
        e.preventDefault();
        _models_User__WEBPACK_IMPORTED_MODULE_1__["default"].logout();
      }
    }, 'Logout')])] : [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.flex-grow'), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.text-sm', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('a[href=/login].mt-4.inline-block.lg:mt-0.text-gray-700.mr-4', {
      oncreate: mithril__WEBPACK_IMPORTED_MODULE_0__["default"].route.link
    }, 'Login'), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('a[href=/register].mt-4.inline-block.lg:mt-0.text-gray-700.mr-4', {
      oncreate: mithril__WEBPACK_IMPORTED_MODULE_0__["default"].route.link
    }, 'Register')])]])];
  }
};
/* harmony default export */ __webpack_exports__["default"] = (component);

/***/ }),

/***/ "./resources/js/components/Register.js":
/*!*********************************************!*\
  !*** ./resources/js/components/Register.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "./node_modules/mithril/mithril.mjs");
/* harmony import */ var _Copy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Copy */ "./resources/js/components/Copy.js");
/* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.isempty */ "./node_modules/lodash.isempty/index.js");
/* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isempty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/User */ "./resources/js/models/User.js");
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Alert */ "./resources/js/components/Alert.js");





var component = {
  view: function view() {
    return Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.w-full.max-w-xs.mx-auto', [lodash_isempty__WEBPACK_IMPORTED_MODULE_2___default()(_models_User__WEBPACK_IMPORTED_MODULE_3__["default"].error) ? null : Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])(_Alert__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: 'error',
      messsage: _models_User__WEBPACK_IMPORTED_MODULE_3__["default"].error.errors.user[0]
    }), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('form.form.content[action=/register][method=post]', {
      onsubmit: function onsubmit(e) {
        e.preventDefault();
        _models_User__WEBPACK_IMPORTED_MODULE_3__["default"].create({
          'name': e.target.elements.name.value,
          'email': e.target.elements.email.value,
          'password': e.target.elements.password.value,
          'password_confirmation': e.target.elements.password_confirmation.value
        });
      }
    }, [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('input[type=hidden][name=_token]', {
      value: mithril__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers['X-CSRF-TOKEN']
    }), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.form__group', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('label.input__label[for=name]', 'Name'), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('input#name.form__input[type=text][name=name][autocomplete=off][autofocus][required]')]), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.form__group', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('label.input__label[for=email]', 'Email'), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('input#email.form__input[type=text][name=email][autocomplete=off][required]')]), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.form__group', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('label.input__label[for=password]', 'Password'), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('input#password.form__input[type=password][name=password][required]')]), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.form__group', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('label.input__label[for=confirmPassword]', 'Confirm Password'), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('input#confirmPassword.form__input[type=password][name=password_confirmation][required]')]), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.form__footer', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('button.form__button[type=submit]', 'Register'), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('a.form__link[href=/login]', {
      oncreate: mithril__WEBPACK_IMPORTED_MODULE_0__["default"].route.link
    }, 'Have account?')])]), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])(_Copy__WEBPACK_IMPORTED_MODULE_1__["default"])]);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (component);

/***/ }),

/***/ "./resources/js/components/Users.js":
/*!******************************************!*\
  !*** ./resources/js/components/Users.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "./node_modules/mithril/mithril.mjs");
/* harmony import */ var _Copy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Copy */ "./resources/js/components/Copy.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/User */ "./resources/js/models/User.js");
/* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.isempty */ "./node_modules/lodash.isempty/index.js");
/* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isempty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.filter */ "./node_modules/lodash.filter/index.js");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_4__);





var component = {
  oninit: function oninit() {
    //User.fetch(document.body.querySelector('#userId').innerHTML);
    _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].fetchAll();
  },
  view: function view() {
    return Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.w-full.max-w-5xl.mx-auto', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.content', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('p.content__title', 'Users List'), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.flex.justify-around', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.card.max-w-3xl', Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('table.table.w-full.mx-auto.text-gray-700', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('tr', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('th', '#'), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('th', 'Name'), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('th', 'Email'), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('th', 'Registered At')]), _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].list.map(function (user, id) {
      return Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('tr', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('td', id + 1 + '.'), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('td', user.name), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('td', user.email), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('td', user.created_at)]);
    })])), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.card.py-4.px-6.text-gray-700.self-center', Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('table', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('tr', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('th[colspan=2].text-left', 'Summary')]), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('tr', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('td', 'Administrators: '), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('td.px-4', lodash_filter__WEBPACK_IMPORTED_MODULE_4___default()(_models_User__WEBPACK_IMPORTED_MODULE_2__["default"].list, function (user) {
      return user.admin;
    }).length)]), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('tr', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('td', 'Total Users: '), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('td.px-4', _models_User__WEBPACK_IMPORTED_MODULE_2__["default"].list.length)])]))])]), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])(_Copy__WEBPACK_IMPORTED_MODULE_1__["default"])]);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (component);

/***/ }),

/***/ "./resources/js/components/Welcome.js":
/*!********************************************!*\
  !*** ./resources/js/components/Welcome.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "./node_modules/mithril/mithril.mjs");

var component = {
  view: function view() {
    return Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.w-full.max-w-xs.mx-auto', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.bg-white.shadow-md.rounded.px-8.pt-6.pb-8.mb-4', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('p.text-center.text-2xl.text-gray-700.mb-4', 'Welcome'), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('p.text-center.text-md.text-gray-500.mb-8', 'Let your yearbook go online!'), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('.flex.items-center.justify-around', [Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('a[href=/login].font-bold', {
      oncreate: mithril__WEBPACK_IMPORTED_MODULE_0__["default"].route.link
    }, 'Log In'), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('a[href=/register].font-bold', {
      oncreate: mithril__WEBPACK_IMPORTED_MODULE_0__["default"].route.link
    }, 'Register')])]), Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('p.text-center.text-gray-500.text-xs', [mithril__WEBPACK_IMPORTED_MODULE_0__["default"].trust('&copy;'), '2019 ', Object(mithril__WEBPACK_IMPORTED_MODULE_0__["default"])('a[href=/]', {
      oncreate: mithril__WEBPACK_IMPORTED_MODULE_0__["default"].route.link
    }, 'Eterno'), '. All rights reserved'])]);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (component);

/***/ }),

/***/ "./resources/js/models/Book.js":
/*!*************************************!*\
  !*** ./resources/js/models/Book.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "./node_modules/mithril/mithril.mjs");

var model = {
  current: {},
  list: [],
  error: {},
  fetchAll: function fetchAll() {
    model.list = [];
    mithril__WEBPACK_IMPORTED_MODULE_0__["default"].request({
      method: 'get',
      url: '/api/books',
      headers: mithril__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers
    }).then(function (res) {
      model.list = res;
    })["catch"](function (e) {
      model.error = JSON.parse(e.message);
    });
  },
  fetch: function fetch(id) {
    model.current = {};
    mithril__WEBPACK_IMPORTED_MODULE_0__["default"].request({
      method: 'get',
      url: '/api/books/' + id,
      headers: mithril__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers
    }).then(function (res) {
      model.current = res;
    })["catch"](function (e) {
      model.error = JSON.parse(e.message);
    });
  },
  create: function create(data) {
    model.current = {};
    mithril__WEBPACK_IMPORTED_MODULE_0__["default"].request({
      method: 'post',
      url: '/api/books',
      headers: mithril__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers,
      data: data
    }).then(function (res) {
      model.current = res;
      mithril__WEBPACK_IMPORTED_MODULE_0__["default"].route.set('/books/' + model.current.id);
    })["catch"](function (e) {
      model.error = JSON.parse(e.message);
    });
  },
  update: function update(data, id) {
    model.current = {};
    mithril__WEBPACK_IMPORTED_MODULE_0__["default"].request({
      method: 'put',
      url: '/api/books/' + id,
      headers: mithril__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers,
      data: data
    }).then(function (res) {
      model.current = res;
    })["catch"](function (e) {
      model.error = JSON.parse(e.message);
    });
  },
  remove: function remove(id) {
    model.current = {};
    mithril__WEBPACK_IMPORTED_MODULE_0__["default"].request({
      method: 'delete',
      url: '/api/books/' + id,
      headers: mithril__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers
    })["catch"](function (e) {
      model.error = JSON.parse(e.message);
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (model);

/***/ }),

/***/ "./resources/js/models/User.js":
/*!*************************************!*\
  !*** ./resources/js/models/User.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "./node_modules/mithril/mithril.mjs");

var model = {
  current: {},
  list: [],
  error: {},
  auth: function auth() {
    model.current = {};
    mithril__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers['Authorization'] = 'Bearer ' + JSON.parse(sessionStorage.user).api_token;
    mithril__WEBPACK_IMPORTED_MODULE_0__["default"].request({
      method: 'get',
      url: '/api/users/auth',
      headers: mithril__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers
    }).then(function (res) {
      model.current = res;
    })["catch"](function (e) {
      model.error = JSON.parse(e.message);
    });
  },
  login: function login(data) {
    model.current = model.error = {};
    mithril__WEBPACK_IMPORTED_MODULE_0__["default"].request({
      method: 'post',
      url: '/api/users/login',
      headers: mithril__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers,
      data: data
    }).then(function (res) {
      sessionStorage.setItem('user', JSON.stringify(res));
      model.auth();
      mithril__WEBPACK_IMPORTED_MODULE_0__["default"].route.set('/');
    })["catch"](function (e) {
      model.error = JSON.parse(e.message);
    });
  },
  logout: function logout() {
    model.current = {};
    mithril__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers['Authorization'] = null;
    sessionStorage.removeItem('user');
    mithril__WEBPACK_IMPORTED_MODULE_0__["default"].route.set('/login');
  },
  fetchAll: function fetchAll() {
    mithril__WEBPACK_IMPORTED_MODULE_0__["default"].request({
      method: 'get',
      url: '/api/users',
      headers: mithril__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers
    }).then(function (res) {
      model.list = res;
    })["catch"](function (e) {
      model.error = JSON.parse(e.message);
    });
  },
  fetch: function fetch(id) {
    mithril__WEBPACK_IMPORTED_MODULE_0__["default"].request({
      method: 'get',
      url: '/api/users/' + id,
      headers: mithril__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers
    }).then(function (res) {
      model.current = res;
    })["catch"](function (e) {
      model.error = JSON.parse(e.message);
    });
  },
  create: function create(data) {
    mithril__WEBPACK_IMPORTED_MODULE_0__["default"].request({
      method: 'post',
      url: '/api/users',
      headers: mithril__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers,
      data: data
    }).then(function (res) {
      model.current = res;
      if (!_isEmpty(model.current)) mithril__WEBPACK_IMPORTED_MODULE_0__["default"].route.set('/login');
    })["catch"](function (e) {
      model.error = JSON.parse(e.message);
    });
  },
  update: function update(data, id) {
    mithril__WEBPACK_IMPORTED_MODULE_0__["default"].request({
      method: 'put',
      url: '/api/users/' + id,
      headers: mithril__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers,
      data: data
    }).then(function (res) {
      model.current = res;
    })["catch"](function (e) {
      model.error = JSON.parse(e.message);
    });
  },
  remove: function remove(id) {
    mithril__WEBPACK_IMPORTED_MODULE_0__["default"].request({
      method: 'delete',
      url: '/api/users/' + id,
      headers: mithril__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers
    })["catch"](function (e) {
      model.error = JSON.parse(e.message);
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (model);

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/gregorio/Documents/codes/eterno/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /home/gregorio/Documents/codes/eterno/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ }),

/***/ 2:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });