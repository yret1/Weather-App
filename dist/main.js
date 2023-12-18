/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/apiCalls.js":
/*!*************************!*\
  !*** ./src/apiCalls.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   newWeatherCall: () => (/* binding */ newWeatherCall)\n/* harmony export */ });\nvar city = document.getElementById(\"city\");\nvar country = document.getElementById(\"country\");\nvar temp = document.getElementById(\"temp\");\nvar currentTime = document.getElementById(\"time\");\nvar humidity = document.getElementById(\"humidity\");\nvar condition = document.getElementById(\"condition\");\nvar feelsLike = document.getElementById(\"feels\");\nvar winds = document.getElementById(\"windspeed\");\nvar concat = function concat() {\n  var countryName = document.getElementById(\"country\").innerHTML;\n  console.log(countryName);\n  if (countryName.length >= 3) {\n    var splitName = countryName.split(\" \");\n    var newArray = [];\n    splitName.forEach(function (name) {\n      newArray.push(name[0]);\n    });\n    console.log(newArray);\n  }\n};\nfunction weatherCall() {\n  fetch(\"http://api.weatherapi.com/v1/current.json?key=6362b7500c6d4b76a5c174725231512&q=malmo&aqi=no\").then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    city.innerText = data.location.name;\n    country.innerText = data.location.country;\n    temp.innerText = data.current.temp_c + \"°\";\n    humidity.innerText = data.current.humidity + \"%\";\n    var meterSpeed = data.current.wind_kph / 3.6;\n    var flooredSpeed = Math.floor(meterSpeed);\n    winds.innerText = flooredSpeed + \" m/s\";\n    feelsLike.innerText = data.current.feelslike_c + \"°\";\n    condition.innerText = data.current.condition.text;\n    var dataTime = data.location.localtime;\n    var splitString = dataTime.split(\" \");\n    var actuallTime = splitString[1];\n    currentTime.innerText = actuallTime;\n  }).then(function () {\n    concat();\n  });\n}\nfunction newWeatherCall() {\n  var inputValue = document.getElementById(\"search\").value;\n  if (inputValue != null || inputValue != undefined) {\n    var fetchstring = \"http://api.weatherapi.com/v1/current.json?key=6362b7500c6d4b76a5c174725231512&q=\".concat(inputValue, \"&aqi=no\");\n    fetch(fetchstring).then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      city.innerText = data.location.name;\n      country.innerText = data.location.country;\n      temp.innerText = Math.round(data.current.temp_c) + \"°\";\n      humidity.innerText = data.current.humidity + \"%\";\n      var meterSpeed = data.current.wind_kph / 3.6;\n      var flooredSpeed = Math.round(meterSpeed);\n      winds.innerText = flooredSpeed + \" m/s\";\n      feelsLike.innerText = Math.round(data.current.feelslike_c) + \"°\";\n      condition.innerText = data.current.condition.text;\n      var dataTime = data.location.localtime;\n      var splitString = dataTime.split(\" \");\n      var actuallTime = splitString[1];\n      currentTime.innerText = actuallTime;\n    }).then(function () {\n      concat();\n    });\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherCall);\n\n//# sourceURL=webpack://my-webpack-project/./src/apiCalls.js?");

/***/ }),

/***/ "./src/concats.js":
/*!************************!*\
  !*** ./src/concats.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar countryName = document.getElementById(\"country\").innerHTML;\nvar concat = function concat() {\n  console.log(countryName);\n  if (countryName.length >= 3) {\n    var splitName = countryName.split(\" \");\n    var newArray = [];\n    splitName.forEach(function (name) {\n      newArray.push(name[0]);\n    });\n    console.log(newArray);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (concat);\n\n//# sourceURL=webpack://my-webpack-project/./src/concats.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apiCalls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiCalls.js */ \"./src/apiCalls.js\");\n/* harmony import */ var _concats_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./concats.js */ \"./src/concats.js\");\n\n\nvar inputButton = document.getElementById(\"submit\");\ninputButton.addEventListener(\"click\", _apiCalls_js__WEBPACK_IMPORTED_MODULE_0__.newWeatherCall);\n(0,_apiCalls_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;