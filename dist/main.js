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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    height: 100%;\r\n    min-height: 100vh;\r\n    background: linear-gradient(#7def6e, #f58886);\r\n    background-repeat: no-repeat;\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n    min-width: 800px;\r\n    padding: 15px;\r\n}\r\n\r\nheader > .title {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.title > img {\r\n    height: 45px;\r\n    width: 45px;\r\n}\r\n\r\nheader > nav {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 25px;\r\n    padding: 0 10px;\r\n}\r\n\r\nheader > nav > button {\r\n    padding: 5px 10px;\r\n    border: none;\r\n    border-radius: 10px;\r\n    cursor: pointer;\r\n    transition: 0.1s;\r\n    font-size: 1.1rem;\r\n    font-weight: 700;\r\n}\r\n\r\nheader > nav > button:hover {\r\n    border-bottom: 2px solid #f58886;\r\n}\r\n\r\nheader > nav > button:active {\r\n    transform: scale(0.9);\r\n}\r\n\r\n.home {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 15px;\r\n}\r\n\r\n.home > .description {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 15px;\r\n    padding: 15px;\r\n    height: 300px;\r\n    width: 100%;\r\n}\r\n\r\n.home > .description > img {\r\n    height: 60%;\r\n    width: 200px;\r\n    box-shadow: 1px 1px 2px 4px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.home > .description > p {\r\n    width: 300px;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    font-weight: 700;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.home > .hours {\r\n    background-color: #7def6e;\r\n    text-align: center;\r\n    width: 400px;\r\n    border: 1px solid black;\r\n    border-radius: 20px;\r\n    box-shadow: 1px 1px 2px 2px;\r\n    padding: 10px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.home > .hours > h2 {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.home > .hours > li {\r\n    list-style: none;\r\n}\r\n\r\n.home > .hours > li > ul {\r\n    font-weight: 700;\r\n    margin-top: 10px;\r\n}\r\n\r\n.menu {\r\n    margin: 20px auto;\r\n    padding: 15px;\r\n    display: grid;\r\n    grid-template: 1fr 1fr / 1fr 1fr;\r\n    gap: 25px;\r\n    background-color: #7def6e;\r\n    width: max(70%, 800px);\r\n    border: 1px solid black;\r\n    border-radius: 20px;\r\n}\r\n\r\n.menu-option {\r\n    background-color: #b46362;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 25px;\r\n    padding: 15px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.menu-option > img {\r\n    height: 150px;\r\n    width: 200px;\r\n    border-radius: 20px;\r\n    box-shadow: 1px 1px 2px 2px;\r\n}\r\n\r\n.pizza-description {\r\n    text-align: center;\r\n}\r\n\r\n.pizza-description > h2 {\r\n    font-size: 1.6rem;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.pizza-description > p {\r\n    font-size: 1.25rem;\r\n}\r\n\r\n.contact {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    background-color: #7def6e;\r\n    box-shadow: 1px 1px 2px 2px;\r\n    width: 300px;\r\n    padding: 20px;\r\n    margin: 50px auto 0;\r\n    border-radius: 20px;\r\n}\r\n\r\n.contact > h2 {\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.contact p {\r\n    font-size: 1.1rem;\r\n    margin-bottom: 10px;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./pages/contactPage.js":
/*!******************************!*\
  !*** ./pages/contactPage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst generateContactPage = () => {\r\n    let content = document.getElementById('content');\r\n    let contactDiv = document.createElement('div');\r\n    contactDiv.classList.add('contact');\r\n\r\n    let title = document.createElement('h2');\r\n    title.innerText = 'Contact Us';\r\n    let email = document.createElement('p');\r\n    email.innerText = 'Email: peezapizza@mail.com';\r\n    let phone = document.createElement('p');\r\n    phone.innerText = 'Phone: 91234-0000';\r\n\r\n    contactDiv.append(title, email, phone);\r\n    content.appendChild(contactDiv);\r\n\r\n    return content;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateContactPage);\r\n\n\n//# sourceURL=webpack://restaurant-page/./pages/contactPage.js?");

/***/ }),

/***/ "./pages/homePage.js":
/*!***************************!*\
  !*** ./pages/homePage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _src_assets_peeza_pizza_image_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/assets/peeza-pizza-image.jpeg */ \"./src/assets/peeza-pizza-image.jpeg\");\n\r\n\r\nconst generateHomePage = () => {\r\n    let content = document.getElementById('content');\r\n    let homeDiv = document.createElement('div');\r\n    homeDiv.classList.add('home');\r\n\r\n\r\n    let description = document.createElement('div');\r\n    description.classList.add('description');\r\n\r\n    let descriptionImage = document.createElement('img');\r\n    descriptionImage.src = _src_assets_peeza_pizza_image_jpeg__WEBPACK_IMPORTED_MODULE_0__;\r\n    descriptionImage.alt = 'Peeza Pizza Image';\r\n\r\n    let descriptionText = document.createElement('p');\r\n    descriptionText.innerText = 'Peeza Pizza is the best pizza out there. Lot of different flavors that make you want to eat lots of pizza. Check our menu and enjoy.';\r\n\r\n    let hours = document.createElement('div');\r\n    hours.classList.add('hours');\r\n\r\n    let hoursTitle = document.createElement('h2');\r\n    hoursTitle.innerText = 'Hours';\r\n\r\n    let hoursList = document.createElement('li');\r\n    let monday = document.createElement('ul');\r\n    let tuesday = document.createElement('ul');\r\n    let wednesday = document.createElement('ul');\r\n    let thursday = document.createElement('ul');\r\n    let friday = document.createElement('ul');\r\n    let saturday = document.createElement('ul');\r\n    let sunday = document.createElement('ul');\r\n    monday.innerText = 'Monday: 6am to 8pm';\r\n    tuesday.innerText = 'Tuesday: 6am to 8pm';\r\n    wednesday.innerText = 'Wednesday: 6am to 8pm';\r\n    thursday.innerText = 'Thursday: 6am to 10pm';\r\n    friday.innerText = 'Friday: 6am to 10pm';\r\n    saturday.innerText = 'Saturday: 6am to 6pm';\r\n    sunday.innerText = 'Sunday: 6am to 3pm';\r\n\r\n\r\n    hoursList.append(monday, tuesday, wednesday, thursday, friday, saturday, sunday);\r\n    hours.append(hoursTitle, hoursList);\r\n    description.append(descriptionImage, descriptionText);\r\n    homeDiv.append(description, hours);\r\n    content.appendChild(homeDiv);\r\n\r\n    return content;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateHomePage);\r\n\n\n//# sourceURL=webpack://restaurant-page/./pages/homePage.js?");

/***/ }),

/***/ "./pages/menuPage.js":
/*!***************************!*\
  !*** ./pages/menuPage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _src_assets_cheese_pizza_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/assets/cheese-pizza.jpeg */ \"./src/assets/cheese-pizza.jpeg\");\n/* harmony import */ var _src_assets_chicken_pizza_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/assets/chicken-pizza.jpeg */ \"./src/assets/chicken-pizza.jpeg\");\n/* harmony import */ var _src_assets_marguerita_pizza_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/assets/marguerita-pizza.jpeg */ \"./src/assets/marguerita-pizza.jpeg\");\n/* harmony import */ var _src_assets_pepperoni_pizza_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/assets/pepperoni-pizza.jpeg */ \"./src/assets/pepperoni-pizza.jpeg\");\n\r\n\r\n\r\n\r\n\r\nconst generateMenuPage = () => {\r\n    let pizzas = [\r\n        {\r\n            name: 'Pepperoni',\r\n            price: '$29.99',\r\n            imgSource: _src_assets_pepperoni_pizza_jpeg__WEBPACK_IMPORTED_MODULE_3__\r\n        },\r\n        {\r\n            name: 'Chicken',\r\n            price: '$27.99',\r\n            imgSource: _src_assets_chicken_pizza_jpeg__WEBPACK_IMPORTED_MODULE_1__\r\n        },\r\n        {\r\n            name: 'Marguerita',\r\n            price: '$24.99',\r\n            imgSource: _src_assets_marguerita_pizza_jpeg__WEBPACK_IMPORTED_MODULE_2__\r\n        },\r\n        {\r\n            name: 'Cheese',\r\n            price: '$19.99',\r\n            imgSource: _src_assets_cheese_pizza_jpeg__WEBPACK_IMPORTED_MODULE_0__\r\n        }\r\n    ];\r\n\r\n    let content = document.getElementById('content');\r\n    let menuDiv = document.createElement('div');\r\n    menuDiv.classList.add('menu');\r\n    \r\n    for(let i = 0; i < pizzas.length; i++) {\r\n        \r\n        let menuOption = document.createElement('div');\r\n        menuOption.classList.add('menu-option');\r\n\r\n        let pizzaImage = document.createElement('img');\r\n        pizzaImage.src = pizzas[i].imgSource;\r\n        pizzaImage.alt = `${pizzas[i].name} Pizza`;\r\n\r\n        let pizzaDescription = document.createElement('div');\r\n        pizzaDescription.classList.add('pizza-description');\r\n\r\n        let title = document.createElement('h2');\r\n        title.innerText = pizzas[i].name;\r\n        let price = document.createElement('p');\r\n        price.innerText = pizzas[i].price;\r\n\r\n        pizzaDescription.append(title, price);\r\n        menuOption.append(pizzaImage, pizzaDescription);\r\n        menuDiv.appendChild(menuOption);\r\n    }\r\n    \r\n\r\n    content.appendChild(menuDiv);\r\n    return content;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateMenuPage);\r\n\n\n//# sourceURL=webpack://restaurant-page/./pages/menuPage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/homePage */ \"./pages/homePage.js\");\n/* harmony import */ var _pages_menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/menuPage */ \"./pages/menuPage.js\");\n/* harmony import */ var _pages_contactPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/contactPage */ \"./pages/contactPage.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\n\r\nlet homeButton = document.getElementById('home-button');\r\nlet menuButton = document.getElementById('menu-button');\r\nlet contactButton = document.getElementById('contact-button');\r\nlet content = document.getElementById('content');\r\n\r\nhomeButton.addEventListener(\"click\", () => {\r\n    content.innerHTML = \"\";\r\n    (0,_pages_homePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n});\r\n\r\nmenuButton.addEventListener(\"click\", () => {\r\n    content.innerHTML = \"\";\r\n    (0,_pages_menuPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n});\r\n\r\ncontactButton.addEventListener(\"click\", () => {\r\n    content.innerHTML = \"\";\r\n    (0,_pages_contactPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n});\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/assets/cheese-pizza.jpeg":
/*!**************************************!*\
  !*** ./src/assets/cheese-pizza.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"12f142e74ece9bab7e21.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/cheese-pizza.jpeg?");

/***/ }),

/***/ "./src/assets/chicken-pizza.jpeg":
/*!***************************************!*\
  !*** ./src/assets/chicken-pizza.jpeg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"61432ffb7b4494dfe665.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/chicken-pizza.jpeg?");

/***/ }),

/***/ "./src/assets/marguerita-pizza.jpeg":
/*!******************************************!*\
  !*** ./src/assets/marguerita-pizza.jpeg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"79226d9a981400f2c61e.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/marguerita-pizza.jpeg?");

/***/ }),

/***/ "./src/assets/peeza-pizza-image.jpeg":
/*!*******************************************!*\
  !*** ./src/assets/peeza-pizza-image.jpeg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"090e01f32231ec124494.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/peeza-pizza-image.jpeg?");

/***/ }),

/***/ "./src/assets/pepperoni-pizza.jpeg":
/*!*****************************************!*\
  !*** ./src/assets/pepperoni-pizza.jpeg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a76924ed9e63249ba75e.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/pepperoni-pizza.jpeg?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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