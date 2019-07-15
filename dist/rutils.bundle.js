var rutils =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: cumsum, seq, cartesian, setdiff, unique, union, intersect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_cumsum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/cumsum */ \"./src/js/cumsum.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"cumsum\", function() { return _js_cumsum__WEBPACK_IMPORTED_MODULE_0__[\"cumsum\"]; });\n\n/* harmony import */ var _js_seq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/seq */ \"./src/js/seq.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"seq\", function() { return _js_seq__WEBPACK_IMPORTED_MODULE_1__[\"seq\"]; });\n\n/* harmony import */ var _js_cartesian__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/cartesian */ \"./src/js/cartesian.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"cartesian\", function() { return _js_cartesian__WEBPACK_IMPORTED_MODULE_2__[\"cartesian\"]; });\n\n/* harmony import */ var _js_setoperations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/setoperations */ \"./src/js/setoperations.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"setdiff\", function() { return _js_setoperations__WEBPACK_IMPORTED_MODULE_3__[\"setdiff\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unique\", function() { return _js_setoperations__WEBPACK_IMPORTED_MODULE_3__[\"unique\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"union\", function() { return _js_setoperations__WEBPACK_IMPORTED_MODULE_3__[\"union\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"intersect\", function() { return _js_setoperations__WEBPACK_IMPORTED_MODULE_3__[\"intersect\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack://rutils/./src/index.js?");

/***/ }),

/***/ "./src/js/cartesian.js":
/*!*****************************!*\
  !*** ./src/js/cartesian.js ***!
  \*****************************/
/*! exports provided: cartesian */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cartesian\", function() { return cartesian; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar f = function f(a, b) {\n  var _ref;\n\n  return (_ref = []).concat.apply(_ref, _toConsumableArray(a.map(function (d) {\n    return b.map(function (e) {\n      return [].concat(d, e);\n    });\n  })));\n};\n\nvar cartesian = function cartesian(a, b) {\n  for (var _len = arguments.length, c = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    c[_key - 2] = arguments[_key];\n  }\n\n  return b ? cartesian.apply(void 0, [f(a, b)].concat(c)) : a;\n};\n\n//# sourceURL=webpack://rutils/./src/js/cartesian.js?");

/***/ }),

/***/ "./src/js/cumsum.js":
/*!**************************!*\
  !*** ./src/js/cumsum.js ***!
  \**************************/
/*! exports provided: cumsum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cumsum\", function() { return cumsum; });\nvar cumsum = function cumsum(x) {\n  var result = x.reduce(function (r, a) {\n    if (r.length > 0) {\n      a += r[r.length - 1];\n    }\n\n    r.push(a);\n    return r;\n  }, []);\n  return result;\n};\n\n//# sourceURL=webpack://rutils/./src/js/cumsum.js?");

/***/ }),

/***/ "./src/js/seq.js":
/*!***********************!*\
  !*** ./src/js/seq.js ***!
  \***********************/
/*! exports provided: seq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"seq\", function() { return seq; });\n/* harmony import */ var _seq2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seq2 */ \"./src/js/seq2.js\");\n\nvar seq = function seq(args) {\n  if (typeof args === 'number') {\n    return Object(_seq2__WEBPACK_IMPORTED_MODULE_0__[\"seq2\"])(1, args, 1);\n  }\n\n  var from = args['from'];\n  var to = args['to'];\n  var by = args['by'];\n  var length_out = args['length_out'];\n  var along_with = args['along_with'];\n  return Object(_seq2__WEBPACK_IMPORTED_MODULE_0__[\"seq2\"])(from, to, by, length_out, along_with);\n};\n\n//# sourceURL=webpack://rutils/./src/js/seq.js?");

/***/ }),

/***/ "./src/js/seq2.js":
/*!************************!*\
  !*** ./src/js/seq2.js ***!
  \************************/
/*! exports provided: seq2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"seq2\", function() { return seq2; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar seq_num = function seq_num(from, by, length_out) {\n  return Array.apply(0, Array(length_out)).map(function (x, i) {\n    return from + by * i;\n  });\n};\n\nvar seq_Date_generic = function seq_Date_generic(from, by, length_out, getmethod, setmethod) {\n  var model = seq_num(from[getmethod](), by, length_out);\n  var result = model.map(function (x) {\n    var dt = new Date(from);\n    dt[setmethod](x);\n    return dt;\n  });\n  return result;\n};\n\nvar calcLengthByMs = function calcLengthByMs(from, to, ms) {\n  return (to - from) / ms;\n};\n\nvar methodDictionary = {\n  \"secs\": {\n    'multiplier': 1,\n    'getMethod': 'getSeconds',\n    'setMethod': 'setSeconds',\n    'calc_length': function calc_length(from, to) {\n      return calcLengthByMs(from, to, 1000);\n    }\n  },\n  \"mins\": {\n    'multiplier': 1,\n    'getMethod': 'getMinutes',\n    'setMethod': 'setMinutes',\n    'calc_length': function calc_length(from, to) {\n      return calcLengthByMs(from, to, 1000 * 60);\n    }\n  },\n  \"hours\": {\n    'multiplier': 1,\n    'getMethod': 'getHours',\n    'setMethod': 'setHours',\n    'calc_length': function calc_length(from, to) {\n      return calcLengthByMs(from, to, 1000 * 60 * 60);\n    }\n  },\n  \"days\": {\n    'multiplier': 1,\n    'getMethod': 'getDate',\n    'setMethod': 'setDate',\n    'calc_length': function calc_length(from, to) {\n      return calcLengthByMs(from, to, 1000 * 60 * 60 * 24);\n    }\n  },\n  \"weeks\": {\n    'multiplier': 7,\n    'getMethod': 'getDate',\n    'setMethod': 'setDate',\n    'calc_length': function calc_length(from, to) {\n      return calcLengthByMs(from, to, 1000 * 60 * 60 * 24 * 7);\n    }\n  },\n  \"months\": {\n    'multiplier': 1,\n    'getMethod': 'getMonth',\n    'setMethod': 'setMonth',\n    'calc_length': function calc_length(from, to) {\n      return to.getFullYear() * 12 + to.getMonth() - (from.getFullYear() * 12 + from.getMonth());\n    }\n  },\n  \"quarters\": {\n    'multiplier': 3,\n    'getMethod': 'getMonth',\n    'setMethod': 'setMonth',\n    'calc_length': function calc_length(from, to) {\n      return to.getFullYear() * 12 + to.getMonth() - (from.getFullYear() * 12 + from.getMonth()) / 3;\n    }\n  },\n  \"years\": {\n    'multiplier': 1,\n    'getMethod': 'getFullYear',\n    'setMethod': 'setFullYear',\n    'calc_length': function calc_length(from, to) {\n      return to.getFullYear() - from.getFullYear();\n    }\n  }\n};\nmethodDictionary.sec = methodDictionary.secs;\nmethodDictionary.min = methodDictionary.mins;\nmethodDictionary.hour = methodDictionary.hours;\nmethodDictionary.day = methodDictionary.days;\nmethodDictionary.week = methodDictionary.weeks;\nmethodDictionary.month = methodDictionary.months;\nmethodDictionary.quarter = methodDictionary.quarters;\nmethodDictionary.year = methodDictionary.years;\n\nvar seq_Date_inner = function () {\n  var closure_seq_date = function closure_seq_date(unit) {\n    var methods = methodDictionary[unit];\n    var getm = methods.getMethod;\n    var setm = methods.setMethod;\n    var multiplier = methods.multiplier;\n    return function (from, by, length_out) {\n      return seq_Date_generic(from, by * multiplier, length_out, getm, setm);\n    };\n  };\n\n  var output = {};\n\n  for (var unit in methodDictionary) {\n    if (methodDictionary.hasOwnProperty(unit)) {\n      output[unit] = closure_seq_date(unit);\n    }\n  }\n\n  return output;\n}();\n\nvar calculate_length_out = function calculate_length_out(unit, to, from) {\n  var fn_calc = methodDictionary[unit].calc_length;\n  var length_out = fn_calc(to, from);\n  return Math.abs(length_out) + 1;\n};\n\nvar filter_from_to = function filter_from_to(from, to, result) {\n  return result.filter(function (x) {\n    return from <= x && x <= to || from >= x && x >= to;\n  });\n};\n\nvar seq_Date = function seq_Date(from, to, by, length_out) {\n  var bFrom = from instanceof Date;\n  var bTo = to instanceof Date;\n\n  var tBy = _typeof(by);\n\n  var bBy = tBy === 'number' || tBy === 'string';\n  var bLength = typeof length_out === 'number';\n  var unit = 'days';\n  var quantity = 1;\n\n  if (tBy === 'string') {\n    var by2 = by.split(' ');\n    unit = by2[by2.length - 1];\n\n    if (!(unit in methodDictionary)) {\n      throw \"Unit not recognized: \" + unit;\n    }\n\n    quantity = parseInt(by2[0]);\n\n    if (isNaN(quantity)) {\n      quantity = 1;\n    }\n  } else if (tBy === 'number') {\n    quantity = by;\n  }\n\n  if (bFrom && bTo && bBy && !bLength || bFrom && bTo && !bBy && !bLength) {\n    length_out = calculate_length_out(unit, to, from);\n  } else if (bFrom && bTo && bLength && !bBy) {\n    quantity = (to - from) / (length_out - 1);\n  } else if (bLength && bTo && bBy && !bFrom) {\n    var dt = new Date(to);\n    var methods = methodDictionary[unit];\n    var n = quantity * (length_out - 1) * methods.multiplier;\n    dt[methods.setMethod](-n);\n    from = dt;\n  } else if (bLength && bTo && !bBy && !bFrom) {\n    quantity = -1 * quantity;\n  }\n\n  if (bFrom && bTo && from > to && quantity > 0) {\n    quantity = -1 * quantity;\n  }\n\n  if (bFrom && bTo) {\n    if (from > to && quantity > 0 || from < to && quantity < 0) {\n      throw \"Argument invalid\";\n    }\n  }\n\n  length_out = Math.ceil(length_out);\n  var result = seq_Date_inner[unit](from, quantity, length_out);\n\n  if (bTo) {\n    result = filter_from_to(from, to, result);\n  }\n\n  return result;\n};\n\nvar seq_inner = function seq_inner(from, to, by, length_out) {\n  var bFrom = typeof from === 'number';\n  var bTo = typeof to === 'number';\n  var bBy = typeof by === 'number';\n  var bLength = typeof length_out === 'number';\n\n  if (bFrom && bTo && bLength && !bBy) {\n    by = (to - from) / (length_out - 1);\n  } else if (bFrom && bTo && bBy) {\n    length_out = Math.abs(to - from) / by + 1;\n  } else if (bTo && bBy && bLength && !bFrom) {\n    from = to - by * (length_out - 1);\n  } else if (bFrom && bLength && !bBy && !bTo) {\n    by = 1;\n  } else if (bTo && bLength && !bBy && !bFrom) {\n    by = -1;\n  } else if (bFrom && bTo && !bBy && !bLength) {\n    by = from < to ? 1 : -1;\n  } else if (!bFrom && !bTo && bBy && bLength) {\n    from = 1;\n    to = bLength;\n  } else if (!bFrom && !bTo && !bBy && bLength) {\n    from = 1;\n    to = bLength;\n    by = 1;\n  }\n\n  length_out = Math.ceil(length_out);\n  var result = seq_num(from, by, length_out);\n\n  if (bTo) {\n    result = filter_from_to(from, to, result);\n  }\n\n  return result;\n};\n\nvar seq2 = function seq2(from, to, by, length_out, along_with) {\n  if (along_with instanceof Array) {\n    length_out = along_with.length;\n  }\n\n  return from instanceof Date || to instanceof Date ? seq_Date(from, to, by, length_out) : seq_inner(from, to, by, length_out);\n};\n\n//# sourceURL=webpack://rutils/./src/js/seq2.js?");

/***/ }),

/***/ "./src/js/setoperations.js":
/*!*********************************!*\
  !*** ./src/js/setoperations.js ***!
  \*********************************/
/*! exports provided: unique, setdiff, intersect, union */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unique\", function() { return unique; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setdiff\", function() { return setdiff; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"intersect\", function() { return intersect; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"union\", function() { return union; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar isObject = function isObject(x) {\n  return _typeof(x) === 'object';\n};\n\nvar isDateOrPrimitive = function isDateOrPrimitive(x) {\n  return x instanceof Date || !isObject(x);\n};\n\nvar primitive_unique = function primitive_unique(A, B) {\n  var values = A.map(function (x) {\n    return x.valueOf();\n  });\n  return A.filter(function (x, i, arr) {\n    return values.indexOf(x.valueOf()) === i;\n  });\n};\n\nvar primitive_intersect = function primitive_intersect(A, B) {\n  var values = B.map(function (b) {\n    return b.valueOf();\n  });\n  return primitive_unique(A.filter(function (a) {\n    return values.indexOf(a.valueOf()) >= 0;\n  }));\n};\n\nvar shallowObjectComparer = function shallowObjectComparer(a, b) {\n  var aIsVal = isDateOrPrimitive(a);\n  var bIsVal = isDateOrPrimitive(b);\n\n  if (aIsVal && bIsVal) {\n    return a.valueOf() === b.valueOf();\n  } else if (aIsVal || bIsVal) {\n    return false;\n  } else if (!(isObject(a) && isObject(b))) {\n    throw \"Cannot compare\";\n  }\n\n  var aKeys = Object.keys(a);\n  var bKeys = Object.keys(b);\n  var keys = primitive_intersect(aKeys, bKeys);\n\n  if (!(aKeys.length === keys.length && bKeys.length === keys.length)) {\n    return false;\n  }\n\n  return keys.every(function (k) {\n    var x = a[k];\n    var y = b[k];\n\n    if (!(isDateOrPrimitive(x) && isDateOrPrimitive(y))) {\n      throw \"Deep object comparison not implemented\";\n    }\n\n    return x.valueOf() === y.valueOf();\n  });\n};\n\nvar primitive_setdiff = function primitive_setdiff(A, B) {\n  var values = B.map(function (x) {\n    return x.valueOf();\n  });\n  return primitive_unique(A.filter(function (a) {\n    return values.indexOf(a.valueOf()) < 0;\n  }));\n};\n\nvar unique = function unique(A) {\n  if (A.length === 0) {\n    return A;\n  }\n\n  if (A.every(isDateOrPrimitive)) {\n    return primitive_unique(A);\n  } else if (A.some(function (x) {\n    return x instanceof Array;\n  })) {\n    throw \"unique not implemented for Array\";\n  } else if (A.every(isObject)) {\n    var stored = [];\n    A.forEach(function (x) {\n      if (!stored.some(function (s) {\n        return shallowObjectComparer(s, x);\n      })) {\n        stored.push(x);\n      }\n    });\n    return stored;\n  }\n\n  throw \"unique did not recognize object type\";\n};\nvar setdiff = function setdiff(A, B) {\n  if (A.length === 0 || B.length === 0) {\n    return A;\n  }\n\n  if (A.every(isDateOrPrimitive) && B.every(isDateOrPrimitive)) {\n    return primitive_setdiff(A, B);\n  } else if (A.some(function (x) {\n    return x instanceof Array;\n  })) {\n    throw \"setdiff not implemented for Array\";\n  } else {\n    return unique(A.filter(function (a) {\n      return !B.some(function (b) {\n        return shallowObjectComparer(a, b);\n      });\n    }));\n  }\n};\nvar intersect = function intersect(A, B) {\n  if (A.length === 0 || B.length === 0) {\n    return [];\n  }\n\n  if (A.every(isDateOrPrimitive) && B.every(isDateOrPrimitive)) {\n    return primitive_intersect(A, B);\n  } else if (A.some(function (x) {\n    return x instanceof Array;\n  })) {\n    throw \"setdiff not implemented for Array\";\n  } else {\n    return unique(A.filter(function (a) {\n      return B.some(function (b) {\n        return shallowObjectComparer(a, b);\n      });\n    }));\n  }\n};\nvar union = function union() {\n  var _ref;\n\n  var args = arguments.length > 1 ? arguments : arguments[0];\n  return unique((_ref = []).concat.apply(_ref, _toConsumableArray(args)));\n};\n\n//# sourceURL=webpack://rutils/./src/js/setoperations.js?");

/***/ })

/******/ });