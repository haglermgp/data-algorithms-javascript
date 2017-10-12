/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _chapter8Hashing = __webpack_require__(1);

	var _chapter8Hashing2 = _interopRequireDefault(_chapter8Hashing);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";

	// NOTE: A HASH TABLE CLASS

	function HashTable() {
	  this.table = new Array(137);
	  this.simpleHash = simpleHash;
	  this.showDistro = showDistro;
	  this.put = put;
	  //this.get = get
	}

	//CHOOSING A HASH FUNCTION

	function simpleHash(data) {
	  var total = 0;
	  for (var i = 0; i < data.length; i++) {
	    total += data.charCodeAt(i);
	  }
	  return total % this.table.length;
	}

	//
	//
	// function simpleHash(data) {
	//   var total = 0
	//   for (var i = 0; i < data.length; i++) {
	//     total += data.charCodeAt(i)
	//   }
	//   console.log("Hash value: " + data + "->" + total);
	//   return total % this.table.length
	// }
	//
	// // NOTE: A BETTER HASH FUNCTIONS
	//
	// function betterHash(string, arr) {
	//   const H = 37
	//   var total = 0
	//   for (var i = 0; i < string.length; i++) {
	//     total += H * total + string.charCodeAt(i)
	//   }
	//   total = total % arr.length
	//   return parseInt(total)
	// }
	//
	// // NOTE: HASHING INTEGER KEYS
	//
	// function getRandomInt (min, max) {
	//   return Math.floor(Math.random() * (max - min + 1)) + min
	// }
	//
	// function genStuData(arr) {
	//   for (var i = 0; i < arr.length; i++) {
	//     var num = ""
	//     for (var j = 0; j <= 9; j++) {
	//       num += Math.floor(Math.random() * 10)
	//     }
	//     num +=getRandomInt(50, 100)
	//     arr[i] = num
	//   }
	// }
	//
	// // NOTE: SOTRING AND RETRIEVING DATA IN A HASH TABLE
	//
	// function put(key, data ) {
	//   var pos = this.betterHash(key)
	//   this.table[pos] = data
	// }
	//
	// function get(key) {
	//   return this.table[this.betterHash(key)]
	// }

/***/ })
/******/ ]);