(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background-color: #4CAF50;
    color: white;
    text-align: center;
    padding: 1rem 0;
}

.container {
    display: flex;
    max-width: 1600px;
    margin: 0 auto;
    padding: 20px;
}

.sidebar {
    flex: 1;
    background: #333;
    color: white;
    padding: 20px;
    margin-right: 20px;
}

.sidebar h3 a{
    text-decoration: none;
    color: white;
    padding: 5px;
    display: block;
    border-radius: 5px;
}

.sidebar h3 a:hover{
    background-color: #f0f0f0;
    color: #000;
}

.sidebar ul {
    list-style-type: none; /* Remove default list styling */
    padding: 0;
}

.sidebar ul li {
    margin: 5px 0;
}

.sidebar ul li a {
    text-decoration: none;
    color: white;
    padding: 5px;
    display: block;
    border-radius: 5px;
}

.sidebar ul li a:hover {
    background-color: #f0f0f0;
    color: #000;
}

.sidebar .sidebar-top {
    margin-bottom: 20px;
}

.sidebar .sidebar-top p {
    margin: 0;
}

.sidebar .sidebar-top a {
    color: white;
    text-decoration: none;
    display: block;
    padding: 10px 0;
}

.sidebar .categories {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
}

.sidebar .category {
    background: #444;
    padding: 10px;
    border-radius: 5px;
}

.sidebar .category h3 {
    margin: 0 0 10px 0;
}

.sidebar .category ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.sidebar .category ul li {
    padding: 5px 0;
}

.sidebar button {
    background: #4CAF50;
    color: white;
    border: none;
    padding: 10px;
    margin-top: 20px;
    cursor: pointer;
    width: 100%;
    border-radius: 5px;
}

.sidebar button:hover {
    background: #45a049;
}

.main {
    flex: 3;
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.main .tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.main .tabs button {
    padding: 10px 20px;
    border: 1px solid #ddd;
    background: #f4f4f4;
    cursor: pointer;
    border-radius: 5px;
}

.main .tabs button:hover {
    background: #ddd;
}

.main .lists {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}

.main .list {
    background: #f9f9f9;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.main .list h2 {
    margin: 0 0 10px 0;
}

.main .task {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    padding: 5px 0;
    border-bottom: 1px solid #eee;
}

.main .task a{
    text-decoration: none;
    color: inherit;
    
}

.main .task:last-child {
    border-bottom: none;
}

.main .task input[type="checkbox"] {
    margin-right: 10px;
}

.main .task .task-title {
    text-align: left;
}

.main .task .due-date {
    text-align: right;
}

.add-task {
    background: #4CAF50;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    margin-top: 10px;
    border-radius: 5px;
    width: auto;
}

.add-task:hover {
    background: #45a049;
}


.alert-modal {
    display: none; /* Hidden by default */
    position: fixed; 
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgba(0,0,0,0.4); 
    align-items: center;
    justify-content: center;
}

.alert-content {
    background-color: white;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 300px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border-radius: 10px;
    text-align: center;
}

.alert-content h2 {
    margin-top: 0;
}

.alert-content label {
    display: block;
    margin: 10px 0 5px 0;
    text-align: left;
}

.alert-content input[type="text"],
.alert-content textarea,
.alert-content input[type="date"],
.alert-content select {
    width: calc(100% - 20px);
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
}

.alert-content textarea {
    height: 60px;
    resize: vertical;
}

.alert-buttons {
    display: flex;
    justify-content: space-around;
}

.alert-buttons button {
    background: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
}

.alert-buttons button:hover {
    background: #45a049;
}

.alert-buttons #cancel-alert,
.alert-buttons #cancel-todo-alert {
    background: #f44336;
}

.alert-buttons #cancel-alert:hover,
.alert-buttons #cancel-todo-alert:hover {
    background: #e53935;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,8BAA8B;IAC9B,SAAS;IACT,UAAU;IACV,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,cAAc;IACd,aAAa;AACjB;;AAEA;IACI,OAAO;IACP,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,YAAY;IACZ,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,WAAW;AACf;;AAEA;IACI,qBAAqB,EAAE,gCAAgC;IACvD,UAAU;AACd;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,YAAY;IACZ,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,WAAW;AACf;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,qBAAqB;IACrB,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,eAAe;IACf,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,OAAO;IACP,iBAAiB;IACjB,aAAa;IACb,kBAAkB;IAClB,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,SAAS;AACb;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,mBAAmB;IACnB,cAAc;IACd,6BAA6B;AACjC;;AAEA;IACI,qBAAqB;IACrB,cAAc;;AAElB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,mBAAmB;AACvB;;;AAGA;IACI,aAAa,EAAE,sBAAsB;IACrC,eAAe;IACf,UAAU;IACV,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;IACZ,cAAc;IACd,iCAAiC;IACjC,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,oCAAoC;IACpC,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;;;;IAII,wBAAwB;IACxB,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;;IAEI,mBAAmB;AACvB;;AAEA;;IAEI,mBAAmB;AACvB","sourcesContent":["body {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    background-color: #f4f4f4;\n}\n\nheader {\n    background-color: #4CAF50;\n    color: white;\n    text-align: center;\n    padding: 1rem 0;\n}\n\n.container {\n    display: flex;\n    max-width: 1600px;\n    margin: 0 auto;\n    padding: 20px;\n}\n\n.sidebar {\n    flex: 1;\n    background: #333;\n    color: white;\n    padding: 20px;\n    margin-right: 20px;\n}\n\n.sidebar h3 a{\n    text-decoration: none;\n    color: white;\n    padding: 5px;\n    display: block;\n    border-radius: 5px;\n}\n\n.sidebar h3 a:hover{\n    background-color: #f0f0f0;\n    color: #000;\n}\n\n.sidebar ul {\n    list-style-type: none; /* Remove default list styling */\n    padding: 0;\n}\n\n.sidebar ul li {\n    margin: 5px 0;\n}\n\n.sidebar ul li a {\n    text-decoration: none;\n    color: white;\n    padding: 5px;\n    display: block;\n    border-radius: 5px;\n}\n\n.sidebar ul li a:hover {\n    background-color: #f0f0f0;\n    color: #000;\n}\n\n.sidebar .sidebar-top {\n    margin-bottom: 20px;\n}\n\n.sidebar .sidebar-top p {\n    margin: 0;\n}\n\n.sidebar .sidebar-top a {\n    color: white;\n    text-decoration: none;\n    display: block;\n    padding: 10px 0;\n}\n\n.sidebar .categories {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 10px;\n}\n\n.sidebar .category {\n    background: #444;\n    padding: 10px;\n    border-radius: 5px;\n}\n\n.sidebar .category h3 {\n    margin: 0 0 10px 0;\n}\n\n.sidebar .category ul {\n    list-style-type: none;\n    padding: 0;\n    margin: 0;\n}\n\n.sidebar .category ul li {\n    padding: 5px 0;\n}\n\n.sidebar button {\n    background: #4CAF50;\n    color: white;\n    border: none;\n    padding: 10px;\n    margin-top: 20px;\n    cursor: pointer;\n    width: 100%;\n    border-radius: 5px;\n}\n\n.sidebar button:hover {\n    background: #45a049;\n}\n\n.main {\n    flex: 3;\n    background: white;\n    padding: 20px;\n    border-radius: 5px;\n    box-shadow: 0 0 10px rgba(0,0,0,0.1);\n}\n\n.main .tabs {\n    display: flex;\n    gap: 10px;\n    margin-bottom: 20px;\n}\n\n.main .tabs button {\n    padding: 10px 20px;\n    border: 1px solid #ddd;\n    background: #f4f4f4;\n    cursor: pointer;\n    border-radius: 5px;\n}\n\n.main .tabs button:hover {\n    background: #ddd;\n}\n\n.main .lists {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 20px;\n}\n\n.main .list {\n    background: #f9f9f9;\n    padding: 20px;\n    border: 1px solid #ddd;\n    border-radius: 5px;\n}\n\n.main .list h2 {\n    margin: 0 0 10px 0;\n}\n\n.main .task {\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    align-items: center;\n    padding: 5px 0;\n    border-bottom: 1px solid #eee;\n}\n\n.main .task a{\n    text-decoration: none;\n    color: inherit;\n    \n}\n\n.main .task:last-child {\n    border-bottom: none;\n}\n\n.main .task input[type=\"checkbox\"] {\n    margin-right: 10px;\n}\n\n.main .task .task-title {\n    text-align: left;\n}\n\n.main .task .due-date {\n    text-align: right;\n}\n\n.add-task {\n    background: #4CAF50;\n    color: white;\n    border: none;\n    padding: 5px 10px;\n    cursor: pointer;\n    margin-top: 10px;\n    border-radius: 5px;\n    width: auto;\n}\n\n.add-task:hover {\n    background: #45a049;\n}\n\n\n.alert-modal {\n    display: none; /* Hidden by default */\n    position: fixed; \n    z-index: 1; \n    left: 0;\n    top: 0;\n    width: 100%; \n    height: 100%; \n    overflow: auto; \n    background-color: rgba(0,0,0,0.4); \n    align-items: center;\n    justify-content: center;\n}\n\n.alert-content {\n    background-color: white;\n    margin: auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 300px;\n    box-shadow: 0 0 10px rgba(0,0,0,0.2);\n    border-radius: 10px;\n    text-align: center;\n}\n\n.alert-content h2 {\n    margin-top: 0;\n}\n\n.alert-content label {\n    display: block;\n    margin: 10px 0 5px 0;\n    text-align: left;\n}\n\n.alert-content input[type=\"text\"],\n.alert-content textarea,\n.alert-content input[type=\"date\"],\n.alert-content select {\n    width: calc(100% - 20px);\n    padding: 10px;\n    margin-bottom: 10px;\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    box-sizing: border-box;\n}\n\n.alert-content textarea {\n    height: 60px;\n    resize: vertical;\n}\n\n.alert-buttons {\n    display: flex;\n    justify-content: space-around;\n}\n\n.alert-buttons button {\n    background: #4CAF50;\n    color: white;\n    border: none;\n    padding: 10px 20px;\n    cursor: pointer;\n    border-radius: 5px;\n}\n\n.alert-buttons button:hover {\n    background: #45a049;\n}\n\n.alert-buttons #cancel-alert,\n.alert-buttons #cancel-todo-alert {\n    background: #f44336;\n}\n\n.alert-buttons #cancel-alert:hover,\n.alert-buttons #cancel-todo-alert:hover {\n    background: #e53935;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/appLogic.js":
/*!*************************!*\
  !*** ./src/appLogic.js ***!
  \*************************/
/***/ ((module) => {

//base on Things layout
//get items due today
//get items due next 7 days
//get category names and lists
//get lists and items
//get lists and items that are high importance
//get item info


let toDoLists  =  localStorage.getItem("to-do-lists") !== null ? JSON.parse(localStorage.getItem("to-do-lists"))
         : { categories : [{categoryName: "Work", lists:[]},{categoryName: "Hobbies", lists:[]},{categoryName: "Home", lists:[]}] };

function saveData(){
    console.log(JSON.stringify(toDoLists));
    localStorage.setItem("to-do-lists", JSON.stringify(toDoLists));
}

function getItem(itemId){//get all details for to do item
    let result;
    toDoLists.categories.forEach(category => {
        category.lists.forEach(list =>{
            list.items.forEach(item =>{
                if(item.itemId === itemId){
                    result = item;
                }
            })
        })        
    });
    return result;
}

function setItem(itemId, newItem){//set to do item
    console.log(itemId);
    console.log(newItem);
    

    for(let i=0; i<toDoLists.categories.length; i++){
        for(let j=0; j<toDoLists.categories[i].lists.length; j++){
            for(let k=0; k<toDoLists.categories[i].lists[j].items.length; k++){
                if(toDoLists.categories[i].lists[j].items[k].itemId == itemId){
                    toDoLists.categories[i].lists[j].items[k] = newItem;
                }
            }
        }
    }
    saveData();
}

function createItem(parentId, itemTitle, notes, dueDateTime, done, importance){//add to do item
    let newItemId;
    console.log("List to add to id " + parentId);
    toDoLists.categories.forEach(category => {
        category.lists.forEach(list =>{
            if(list.listId == parentId){
                newItemId = crypto.randomUUID();
                list.items.push({itemTitle, notes, dueDateTime, done, itemId:newItemId, importance})
            }
        })
    });
    saveData();
    return newItemId;
}

function getCategories(){
    let result = [];
    toDoLists.categories.forEach(category => {
        let lists = [];
        category.lists.forEach( list =>{
            lists.push({listName: list.listName, listId: list.listId})
        })
        result.push({categoryName: category.categoryName, lists});
    })
    return result;
}

function getCategoryLists(categoryName){
    let result = [];
    toDoLists.categories.forEach(category =>{
        if(category.categoryName == categoryName){
            
            category.lists.forEach(list => {
                let listTemp = [];
                list.items.forEach(item =>{
                    listTemp.push({itemTitle: item.itemTitle, itemId: item.itemId, done: item.done, dueDateTime: item.dueDateTime})
                })
                result.push({listName: list.listName, listId: list.listId, items: listTemp});
            })
        }
    })
    return result;
}

function getList(listId){//get list name and item titles
    let result;
    toDoLists.categories.forEach(category => {
        category.forEach(list => {
            if(list.listId == listId){
                let toDos = list.items.map( item =>{
                    return {itemTitle:item.itemTitle, itemId: item.itemId};
                })
                result = {list:list.listName, items:toDos};
            }
        })
    })
    return result;
}

function setList(listId, newName){
    toDoLists.categories.forEach( category =>{
        category.forEach( list =>{
            if(list.listId == listId){
                list.listName = newName;
            }
        });
    });
    saveData();
}

function createList(categoryName, listName){
    console.log(categoryName);
    console.log(listName);
    let newId = crypto.randomUUID();
    toDoLists.categories.find(elem => elem.categoryName === categoryName).lists
        .push({listName, listId : newId, items:[] });
    saveData();
    return newId;
}

function getDueToday(){
    let toDos = [];
    toDoLists.categories.forEach(category => {
        category.lists.forEach(list =>{
            list.forEach(item =>{
                if(item.dueDateTime === today){
                    toDos.push(item);
                }
            })
        })        
    });
}

function getDueWeek(){
    let toDos = [];
    toDoLists.categories.forEach(category => {
        category.lists.forEach(list =>{
            list.forEach(item =>{
                if(item.dueDateTime >= today && item.dueDateTime<=today+7){
                    toDos.push(item);
                }
            })
        })        
    });
}

function getImportantToDos(){
    let toDos = [];
    toDoLists.categories.forEach(category => {
        category.lists.forEach(list =>{
            list.forEach(item =>{
                if(item.importance === "High"){
                    toDos.push(item);
                }
            })
        })        
    });
}

module.exports = {
    getItem,
    setItem,
    createItem,
    getCategories,
    getCategoryLists,
    getList,
    setList,
    createList,
    getDueToday,
    getDueWeek,
    getImportantToDos
}

/***/ }),

/***/ "./src/displayLogic.js":
/*!*****************************!*\
  !*** ./src/displayLogic.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   firstLoad: () => (/* binding */ firstLoad)
/* harmony export */ });
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header_js__WEBPACK_IMPORTED_MODULE_0__);


function firstLoad(){
    (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.createHeader)();   
}












/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((module) => {

const body = document.querySelector("body");

const header = document.createElement("div");
header.className = "header";

const title = document.createElement("h1");
title.classList.add("company-name");
title.innerText = "Get It Done";



function createHeader(){
    header.appendChild(title);
    body.appendChild(header);
}

module.exports = {
    createHeader,
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _appLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appLogic */ "./src/appLogic.js");
/* harmony import */ var _appLogic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_appLogic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _displayLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayLogic */ "./src/displayLogic.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modals */ "./src/modals.js");

/*
local storage design

to-do-lists: {
    categories: [
        {
            categoryName: "",
            categoryId: "",
            lists:[
                {
                    listName: name,
                    listId: id,
                    items: [{
                        itemTitle: "",
                        description: "",
                        notes: "",
                        dueDateTime: "",
                        done: "",
                        itemId: "",
                        importance: ""}]
                }
            ]
        }
    ]
}

logic design

toDos
    create Category
    delete Category
    saveToLocalStorage
    updateItem
    moveItem 

category
    create list
    delete list


*/







// Display.firstLoad();
_sidebar__WEBPACK_IMPORTED_MODULE_3__.initialize(_appLogic__WEBPACK_IMPORTED_MODULE_1__.getCategories(),()=>console.log("Display Today"), ()=>console.log("Display this week"));
_modals__WEBPACK_IMPORTED_MODULE_4__.initialize();



/***/ }),

/***/ "./src/mainContent.js":
/*!****************************!*\
  !*** ./src/mainContent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayCategory: () => (/* binding */ displayCategory),
/* harmony export */   updateListTasks: () => (/* binding */ updateListTasks)
/* harmony export */ });
/* harmony import */ var _appLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appLogic */ "./src/appLogic.js");
/* harmony import */ var _appLogic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_appLogic__WEBPACK_IMPORTED_MODULE_0__);


const listDisplayArea = document.querySelector(".main > .lists");


function displayCategory(lists){
    console.log(lists);
    // update filter buttons
    listDisplayArea.replaceChildren();
    lists.forEach(list => {
        const listDiv = document.createElement("div");
        listDiv.classList.add("list");
        listDiv.setAttribute("listId",list.listId);
        const listTitle = document.createElement("h2");
        listTitle.innerText = list.listName;
        listDiv.appendChild(listTitle);
        list.items.forEach(item => {
            listDiv.appendChild(addTask(item));
        })

        //add add task button
        listDiv.appendChild(createAddTaskButton(list.listId));
        listDisplayArea.appendChild(listDiv);
    });
}

function displayList(){

}

function displayToday(){

}

function displayThisWeek(){

}

function addTask(item){
    const itemToAdd = document.createElement("div");
    itemToAdd.classList.add("task");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.done;
    checkbox.addEventListener("change", event =>{
        event.preventDefault();
        console.log("update item function here");
        item.done = item.done==true ? false : true;
        _appLogic__WEBPACK_IMPORTED_MODULE_0__.setItem(item.itemId, item);
    })
    const title = document.createElement("span");
    const titleLink = document.createElement("a");
    titleLink.classList.add("task-title");
    titleLink.innerText = item.itemTitle;
    titleLink.href = "#";
    title.appendChild(titleLink);
    const dueDate = document.createElement("span");
    dueDate.classList.add("due-date");
    dueDate.innerText = item.dueDateTime;
    itemToAdd.appendChild(checkbox);
    itemToAdd.appendChild(title);
    itemToAdd.appendChild(dueDate);
    return itemToAdd;
}

function updateListTasks(listId, item){
    const lists = document.querySelectorAll(".lists > .list");
    lists.forEach(list =>{
        if(list.getAttribute("listid")==listId){
            list.insertBefore(addTask(item), list.lastChild)
        }
    })
}

function createAddTaskButton(listId){
    const button = document.createElement("button");
    button.classList.add("add-task");
    button.innerText = "Add Task";
    button.addEventListener("click", (event) =>{
        event.preventDefault();
        // display task modal
        showNewItemModal(listId);

    })
    return button;
}

function showNewItemModal(listId){
    document.querySelector("#todo-alert-modal").listId = listId;
    document.querySelector("#todo-alert-modal").style.display = "block";
    
}




/***/ }),

/***/ "./src/modals.js":
/*!***********************!*\
  !*** ./src/modals.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialize: () => (/* binding */ initialize)
/* harmony export */ });
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* harmony import */ var _mainContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainContent */ "./src/mainContent.js");
/* harmony import */ var _appLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appLogic */ "./src/appLogic.js");
/* harmony import */ var _appLogic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_appLogic__WEBPACK_IMPORTED_MODULE_2__);




const submitListBtn = document.querySelector("#submit-list");
const cancelListBtn = document.querySelector("#cancel-alert");
const submitToDoBtn = document.querySelector("#submit-todo");
const cancelToDoBtn = document.querySelector("#cancel-todo-alert");

function initialize(){
    submitListBtn.addEventListener("click", (event) =>{
        event.preventDefault();
        submitNewList();
        closeListModal();
    })
    cancelListBtn.addEventListener("click", (event) =>{
        event.preventDefault();
        closeListModal();
    })
    submitToDoBtn.addEventListener("click", (event) =>{
        event.preventDefault();
        submitNewItem();
        closetToDoModal();

    })
    cancelToDoBtn.addEventListener("click", (event) =>{
        event.preventDefault();
        closetToDoModal();
    })
}

function closeListModal(){
    document.querySelector("#alert-modal").style.display = "none";
    document.querySelector("#alert-modal > .alert-content > #new-list-name").value = "";
    document.querySelector("#alert-modal > .alert-content > #list-category").value = "work";

}

function closetToDoModal(){
    console.log("In close function");
    document.querySelector("#todo-alert-modal").style.display = "none";
    document.querySelector("#todo-alert-modal").listId = "";
    document.querySelector("#task-title").value = "";
    document.querySelector("#task-notes").value = "";
    document.querySelector("#due-date").value = "";
    document.querySelector("#importance").value = "medium";
}


function submitNewList(){
    let newListId = _appLogic__WEBPACK_IMPORTED_MODULE_2__.createList(document.querySelector("#alert-modal > .alert-content > #list-category").value,
        document.querySelector("#alert-modal > .alert-content > #new-list-name").value);
    _sidebar__WEBPACK_IMPORTED_MODULE_0__.addListElement(document.querySelector("#alert-modal > .alert-content > #list-category").value,
                newListId, document.querySelector("#alert-modal > .alert-content > #new-list-name").value)
}

function submitNewItem(){
    let listId = document.querySelector("#todo-alert-modal").listId;
    let itemTitle = document.querySelector("#task-title").value;
    let notes = document.querySelector("#task-notes").value;
    let dueDateTime = document.querySelector("#due-date").value;
    let done = false;
    let importance =  document.querySelector("#importance").value;
    let newItemId = _appLogic__WEBPACK_IMPORTED_MODULE_2__.createItem(listId, itemTitle, notes, dueDateTime, done, importance);
    console.log(newItemId);
    _mainContent__WEBPACK_IMPORTED_MODULE_1__.updateListTasks(listId,_appLogic__WEBPACK_IMPORTED_MODULE_2__.getItem(newItemId));

}



/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addListElement: () => (/* binding */ addListElement),
/* harmony export */   initialize: () => (/* binding */ initialize)
/* harmony export */ });
/* harmony import */ var _appLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appLogic */ "./src/appLogic.js");
/* harmony import */ var _appLogic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_appLogic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mainContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainContent */ "./src/mainContent.js");



const todayTasks = document.querySelector(".today-tasks");
const thisWeek = document.querySelector(".this-week-tasks");
const workCategory = document.querySelector("#work > .lists");
const hobbiesCategory = document.querySelector("#hobbies > .lists");
const homeCategory = document.querySelector("#home > .lists");
const newListBtn = document.querySelector("#add-list-btn");







function initialize(categories, todayDisplayFn, thisWeekDisplayFn){
    todayTasks.addEventListener("click", () =>{
        todayDisplayFn();
    })
    thisWeek.addEventListener("click", ()=>{
        thisWeekDisplayFn();
    })
    categories.forEach(category => {
        category.lists.forEach(list =>{
            addListElement(category.categoryName, list.listId, list.listName);
        })
    });
    newListBtn.addEventListener("click", (event)=>{
        event.preventDefault();
        showNewListModal();
    })
    const home = document.querySelector("#home > h3 > a");
    const work = document.querySelector("#work > h3 > a");
    const hobbies = document.querySelector("#hobbies > h3 > a");

    home.addEventListener("click", (event) =>{
        event.preventDefault();
        document.querySelector(".main").currdisplay = "home";
        (0,_mainContent__WEBPACK_IMPORTED_MODULE_1__.displayCategory)((0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.getCategoryLists)("home"));
    })
    work.addEventListener("click", (event) =>{
        event.preventDefault();
        document.querySelector(".main").currdisplay = "work";
        (0,_mainContent__WEBPACK_IMPORTED_MODULE_1__.displayCategory)((0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.getCategoryLists)("work"));
    })
    hobbies.addEventListener("click", (event) =>{
        event.preventDefault();
        document.querySelector(".main").currdisplay = "hobbies";
        (0,_mainContent__WEBPACK_IMPORTED_MODULE_1__.displayCategory)((0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.getCategoryLists)("hobbies"));
    })


}

function addListElement(categoryName, listId, listName){
    const listElem = document.createElement("li");
    const listClick = document.createElement("a");
    listClick.href = "";
    listClick.setAttribute("listId", listId);
    listClick.innerText = listName;
    listClick.addEventListener("click", (event) =>{
        // function to display list
        event.preventDefault();
        
    })
    listElem.appendChild(listClick);
    switch(categoryName){
        case "work": 
            workCategory.appendChild(listElem);
            break;
        case "hobbies":
            hobbiesCategory.appendChild(listElem);
            break;
        case "home":
            homeCategory.appendChild(listElem);
            break;
        default:
            console.log("Invalid category name");
        
    }
    
    if(document.querySelector(".main").currdisplay == categoryName){
        (0,_mainContent__WEBPACK_IMPORTED_MODULE_1__.displayCategory)((0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.getCategoryLists)(categoryName));
    }

}




function showNewListModal(){
    document.querySelector("#alert-modal").style.display = "block";
}




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOENBQVk7QUFDcEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNGcUM7QUFDUTtBQUNWOztBQUVuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxvQkFBb0IsaURBQWU7QUFDbkM7QUFDQSxJQUFJLG9EQUFzQjtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlEQUFlO0FBQ25DO0FBQ0EsSUFBSSx5REFBMkIsUUFBUSw4Q0FBWTs7QUFFbkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FOEM7QUFDRTs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZEQUFlLENBQUMsMkRBQWdCO0FBQ3hDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZEQUFlLENBQUMsMkRBQWdCO0FBQ3hDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZEQUFlLENBQUMsMkRBQWdCO0FBQ3hDLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZEQUFlLENBQUMsMkRBQWdCO0FBQ3hDOztBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTs7QUFLQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2FwcExvZ2ljLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Rpc3BsYXlMb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbWFpbkNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kYWxzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3NpZGViYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xufVxuXG5oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxcmVtIDA7XG59XG5cbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWF4LXdpZHRoOiAxNjAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLnNpZGViYXIge1xuICAgIGZsZXg6IDE7XG4gICAgYmFja2dyb3VuZDogIzMzMztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5zaWRlYmFyIGgzIGF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc2lkZWJhciBoMyBhOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbi5zaWRlYmFyIHVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IC8qIFJlbW92ZSBkZWZhdWx0IGxpc3Qgc3R5bGluZyAqL1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5zaWRlYmFyIHVsIGxpIHtcbiAgICBtYXJnaW46IDVweCAwO1xufVxuXG4uc2lkZWJhciB1bCBsaSBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zaWRlYmFyIHVsIGxpIGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbi5zaWRlYmFyIC5zaWRlYmFyLXRvcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnNpZGViYXIgLnNpZGViYXItdG9wIHAge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnNpZGViYXIgLnNpZGViYXItdG9wIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMTBweCAwO1xufVxuXG4uc2lkZWJhciAuY2F0ZWdvcmllcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5zaWRlYmFyIC5jYXRlZ29yeSB7XG4gICAgYmFja2dyb3VuZDogIzQ0NDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnNpZGViYXIgLmNhdGVnb3J5IGgzIHtcbiAgICBtYXJnaW46IDAgMCAxMHB4IDA7XG59XG5cbi5zaWRlYmFyIC5jYXRlZ29yeSB1bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uc2lkZWJhciAuY2F0ZWdvcnkgdWwgbGkge1xuICAgIHBhZGRpbmc6IDVweCAwO1xufVxuXG4uc2lkZWJhciBidXR0b24ge1xuICAgIGJhY2tncm91bmQ6ICM0Q0FGNTA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnNpZGViYXIgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNDVhMDQ5O1xufVxuXG4ubWFpbiB7XG4gICAgZmxleDogMztcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsMCwwLDAuMSk7XG59XG5cbi5tYWluIC50YWJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubWFpbiAudGFicyBidXR0b24ge1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLm1haW4gLnRhYnMgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xufVxuXG4ubWFpbiAubGlzdHMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiAyMHB4O1xufVxuXG4ubWFpbiAubGlzdCB7XG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubWFpbiAubGlzdCBoMiB7XG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xufVxuXG4ubWFpbiAudGFzayB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1cHggMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbn1cblxuLm1haW4gLnRhc2sgYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgXG59XG5cbi5tYWluIC50YXNrOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5tYWluIC50YXNrIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ubWFpbiAudGFzayAudGFzay10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm1haW4gLnRhc2sgLmR1ZS1kYXRlIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmFkZC10YXNrIHtcbiAgICBiYWNrZ3JvdW5kOiAjNENBRjUwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiBhdXRvO1xufVxuXG4uYWRkLXRhc2s6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICM0NWEwNDk7XG59XG5cblxuLmFsZXJ0LW1vZGFsIHtcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgei1pbmRleDogMTsgXG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7IFxuICAgIGhlaWdodDogMTAwJTsgXG4gICAgb3ZlcmZsb3c6IGF1dG87IFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFsZXJ0LWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFsZXJ0LWNvbnRlbnQgaDIge1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG5cbi5hbGVydC1jb250ZW50IGxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDEwcHggMCA1cHggMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uYWxlcnQtY29udGVudCBpbnB1dFt0eXBlPVwidGV4dFwiXSxcbi5hbGVydC1jb250ZW50IHRleHRhcmVhLFxuLmFsZXJ0LWNvbnRlbnQgaW5wdXRbdHlwZT1cImRhdGVcIl0sXG4uYWxlcnQtY29udGVudCBzZWxlY3Qge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmFsZXJ0LWNvbnRlbnQgdGV4dGFyZWEge1xuICAgIGhlaWdodDogNjBweDtcbiAgICByZXNpemU6IHZlcnRpY2FsO1xufVxuXG4uYWxlcnQtYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmFsZXJ0LWJ1dHRvbnMgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjNENBRjUwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5hbGVydC1idXR0b25zIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzQ1YTA0OTtcbn1cblxuLmFsZXJ0LWJ1dHRvbnMgI2NhbmNlbC1hbGVydCxcbi5hbGVydC1idXR0b25zICNjYW5jZWwtdG9kby1hbGVydCB7XG4gICAgYmFja2dyb3VuZDogI2Y0NDMzNjtcbn1cblxuLmFsZXJ0LWJ1dHRvbnMgI2NhbmNlbC1hbGVydDpob3Zlcixcbi5hbGVydC1idXR0b25zICNjYW5jZWwtdG9kby1hbGVydDpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2U1MzkzNTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsU0FBUztJQUNULFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLE9BQU87SUFDUCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFCQUFxQixFQUFFLGdDQUFn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O0lBRUksbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXgtd2lkdGg6IDE2MDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgZmxleDogMTtcXG4gICAgYmFja2dyb3VuZDogIzMzMztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5zaWRlYmFyIGgzIGF7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zaWRlYmFyIGgzIGE6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxuICAgIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4uc2lkZWJhciB1bCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgLyogUmVtb3ZlIGRlZmF1bHQgbGlzdCBzdHlsaW5nICovXFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5zaWRlYmFyIHVsIGxpIHtcXG4gICAgbWFyZ2luOiA1cHggMDtcXG59XFxuXFxuLnNpZGViYXIgdWwgbGkgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zaWRlYmFyIHVsIGxpIGE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbiAgICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLnNpZGViYXIgLnNpZGViYXItdG9wIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnNpZGViYXIgLnNpZGViYXItdG9wIHAge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5zaWRlYmFyIC5zaWRlYmFyLXRvcCBhIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxufVxcblxcbi5zaWRlYmFyIC5jYXRlZ29yaWVzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnNpZGViYXIgLmNhdGVnb3J5IHtcXG4gICAgYmFja2dyb3VuZDogIzQ0NDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc2lkZWJhciAuY2F0ZWdvcnkgaDMge1xcbiAgICBtYXJnaW46IDAgMCAxMHB4IDA7XFxufVxcblxcbi5zaWRlYmFyIC5jYXRlZ29yeSB1bCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uc2lkZWJhciAuY2F0ZWdvcnkgdWwgbGkge1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG59XFxuXFxuLnNpZGViYXIgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZDogIzRDQUY1MDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnNpZGViYXIgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzQ1YTA0OTtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBmbGV4OiAzO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsMCwwLDAuMSk7XFxufVxcblxcbi5tYWluIC50YWJzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ubWFpbiAudGFicyBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ubWFpbiAudGFicyBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xcbn1cXG5cXG4ubWFpbiAubGlzdHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ubWFpbiAubGlzdCB7XFxuICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm1haW4gLmxpc3QgaDIge1xcbiAgICBtYXJnaW46IDAgMCAxMHB4IDA7XFxufVxcblxcbi5tYWluIC50YXNrIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XFxufVxcblxcbi5tYWluIC50YXNrIGF7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIFxcbn1cXG5cXG4ubWFpbiAudGFzazpsYXN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuXFxuLm1haW4gLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLm1haW4gLnRhc2sgLnRhc2stdGl0bGUge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4ubWFpbiAudGFzayAuZHVlLWRhdGUge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmFkZC10YXNrIHtcXG4gICAgYmFja2dyb3VuZDogIzRDQUY1MDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5hZGQtdGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICM0NWEwNDk7XFxufVxcblxcblxcbi5hbGVydC1tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXFxuICAgIHotaW5kZXg6IDE7IFxcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlOyBcXG4gICAgaGVpZ2h0OiAxMDAlOyBcXG4gICAgb3ZlcmZsb3c6IGF1dG87IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmFsZXJ0LWNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwwLDAsMC4yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYWxlcnQtY29udGVudCBoMiB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbi5hbGVydC1jb250ZW50IGxhYmVsIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMTBweCAwIDVweCAwO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uYWxlcnQtY29udGVudCBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxuLmFsZXJ0LWNvbnRlbnQgdGV4dGFyZWEsXFxuLmFsZXJ0LWNvbnRlbnQgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdLFxcbi5hbGVydC1jb250ZW50IHNlbGVjdCB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uYWxlcnQtY29udGVudCB0ZXh0YXJlYSB7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuLmFsZXJ0LWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmFsZXJ0LWJ1dHRvbnMgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZDogIzRDQUY1MDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5hbGVydC1idXR0b25zIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICM0NWEwNDk7XFxufVxcblxcbi5hbGVydC1idXR0b25zICNjYW5jZWwtYWxlcnQsXFxuLmFsZXJ0LWJ1dHRvbnMgI2NhbmNlbC10b2RvLWFsZXJ0IHtcXG4gICAgYmFja2dyb3VuZDogI2Y0NDMzNjtcXG59XFxuXFxuLmFsZXJ0LWJ1dHRvbnMgI2NhbmNlbC1hbGVydDpob3ZlcixcXG4uYWxlcnQtYnV0dG9ucyAjY2FuY2VsLXRvZG8tYWxlcnQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjZTUzOTM1O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vYmFzZSBvbiBUaGluZ3MgbGF5b3V0XG4vL2dldCBpdGVtcyBkdWUgdG9kYXlcbi8vZ2V0IGl0ZW1zIGR1ZSBuZXh0IDcgZGF5c1xuLy9nZXQgY2F0ZWdvcnkgbmFtZXMgYW5kIGxpc3RzXG4vL2dldCBsaXN0cyBhbmQgaXRlbXNcbi8vZ2V0IGxpc3RzIGFuZCBpdGVtcyB0aGF0IGFyZSBoaWdoIGltcG9ydGFuY2Vcbi8vZ2V0IGl0ZW0gaW5mb1xuXG5cbmxldCB0b0RvTGlzdHMgID0gIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG8tZG8tbGlzdHNcIikgIT09IG51bGwgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG8tZG8tbGlzdHNcIikpXG4gICAgICAgICA6IHsgY2F0ZWdvcmllcyA6IFt7Y2F0ZWdvcnlOYW1lOiBcIldvcmtcIiwgbGlzdHM6W119LHtjYXRlZ29yeU5hbWU6IFwiSG9iYmllc1wiLCBsaXN0czpbXX0se2NhdGVnb3J5TmFtZTogXCJIb21lXCIsIGxpc3RzOltdfV0gfTtcblxuZnVuY3Rpb24gc2F2ZURhdGEoKXtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0b0RvTGlzdHMpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvLWRvLWxpc3RzXCIsIEpTT04uc3RyaW5naWZ5KHRvRG9MaXN0cykpO1xufVxuXG5mdW5jdGlvbiBnZXRJdGVtKGl0ZW1JZCl7Ly9nZXQgYWxsIGRldGFpbHMgZm9yIHRvIGRvIGl0ZW1cbiAgICBsZXQgcmVzdWx0O1xuICAgIHRvRG9MaXN0cy5jYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xuICAgICAgICBjYXRlZ29yeS5saXN0cy5mb3JFYWNoKGxpc3QgPT57XG4gICAgICAgICAgICBsaXN0Lml0ZW1zLmZvckVhY2goaXRlbSA9PntcbiAgICAgICAgICAgICAgICBpZihpdGVtLml0ZW1JZCA9PT0gaXRlbUlkKXtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KSAgICAgICAgXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gc2V0SXRlbShpdGVtSWQsIG5ld0l0ZW0pey8vc2V0IHRvIGRvIGl0ZW1cbiAgICBjb25zb2xlLmxvZyhpdGVtSWQpO1xuICAgIGNvbnNvbGUubG9nKG5ld0l0ZW0pO1xuICAgIFxuXG4gICAgZm9yKGxldCBpPTA7IGk8dG9Eb0xpc3RzLmNhdGVnb3JpZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICBmb3IobGV0IGo9MDsgajx0b0RvTGlzdHMuY2F0ZWdvcmllc1tpXS5saXN0cy5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICBmb3IobGV0IGs9MDsgazx0b0RvTGlzdHMuY2F0ZWdvcmllc1tpXS5saXN0c1tqXS5pdGVtcy5sZW5ndGg7IGsrKyl7XG4gICAgICAgICAgICAgICAgaWYodG9Eb0xpc3RzLmNhdGVnb3JpZXNbaV0ubGlzdHNbal0uaXRlbXNba10uaXRlbUlkID09IGl0ZW1JZCl7XG4gICAgICAgICAgICAgICAgICAgIHRvRG9MaXN0cy5jYXRlZ29yaWVzW2ldLmxpc3RzW2pdLml0ZW1zW2tdID0gbmV3SXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2F2ZURhdGEoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSXRlbShwYXJlbnRJZCwgaXRlbVRpdGxlLCBub3RlcywgZHVlRGF0ZVRpbWUsIGRvbmUsIGltcG9ydGFuY2Upey8vYWRkIHRvIGRvIGl0ZW1cbiAgICBsZXQgbmV3SXRlbUlkO1xuICAgIGNvbnNvbGUubG9nKFwiTGlzdCB0byBhZGQgdG8gaWQgXCIgKyBwYXJlbnRJZCk7XG4gICAgdG9Eb0xpc3RzLmNhdGVnb3JpZXMuZm9yRWFjaChjYXRlZ29yeSA9PiB7XG4gICAgICAgIGNhdGVnb3J5Lmxpc3RzLmZvckVhY2gobGlzdCA9PntcbiAgICAgICAgICAgIGlmKGxpc3QubGlzdElkID09IHBhcmVudElkKXtcbiAgICAgICAgICAgICAgICBuZXdJdGVtSWQgPSBjcnlwdG8ucmFuZG9tVVVJRCgpO1xuICAgICAgICAgICAgICAgIGxpc3QuaXRlbXMucHVzaCh7aXRlbVRpdGxlLCBub3RlcywgZHVlRGF0ZVRpbWUsIGRvbmUsIGl0ZW1JZDpuZXdJdGVtSWQsIGltcG9ydGFuY2V9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pO1xuICAgIHNhdmVEYXRhKCk7XG4gICAgcmV0dXJuIG5ld0l0ZW1JZDtcbn1cblxuZnVuY3Rpb24gZ2V0Q2F0ZWdvcmllcygpe1xuICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICB0b0RvTGlzdHMuY2F0ZWdvcmllcy5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcbiAgICAgICAgbGV0IGxpc3RzID0gW107XG4gICAgICAgIGNhdGVnb3J5Lmxpc3RzLmZvckVhY2goIGxpc3QgPT57XG4gICAgICAgICAgICBsaXN0cy5wdXNoKHtsaXN0TmFtZTogbGlzdC5saXN0TmFtZSwgbGlzdElkOiBsaXN0Lmxpc3RJZH0pXG4gICAgICAgIH0pXG4gICAgICAgIHJlc3VsdC5wdXNoKHtjYXRlZ29yeU5hbWU6IGNhdGVnb3J5LmNhdGVnb3J5TmFtZSwgbGlzdHN9KTtcbiAgICB9KVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGdldENhdGVnb3J5TGlzdHMoY2F0ZWdvcnlOYW1lKXtcbiAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgdG9Eb0xpc3RzLmNhdGVnb3JpZXMuZm9yRWFjaChjYXRlZ29yeSA9PntcbiAgICAgICAgaWYoY2F0ZWdvcnkuY2F0ZWdvcnlOYW1lID09IGNhdGVnb3J5TmFtZSl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhdGVnb3J5Lmxpc3RzLmZvckVhY2gobGlzdCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGxpc3RUZW1wID0gW107XG4gICAgICAgICAgICAgICAgbGlzdC5pdGVtcy5mb3JFYWNoKGl0ZW0gPT57XG4gICAgICAgICAgICAgICAgICAgIGxpc3RUZW1wLnB1c2goe2l0ZW1UaXRsZTogaXRlbS5pdGVtVGl0bGUsIGl0ZW1JZDogaXRlbS5pdGVtSWQsIGRvbmU6IGl0ZW0uZG9uZSwgZHVlRGF0ZVRpbWU6IGl0ZW0uZHVlRGF0ZVRpbWV9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goe2xpc3ROYW1lOiBsaXN0Lmxpc3ROYW1lLCBsaXN0SWQ6IGxpc3QubGlzdElkLCBpdGVtczogbGlzdFRlbXB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGdldExpc3QobGlzdElkKXsvL2dldCBsaXN0IG5hbWUgYW5kIGl0ZW0gdGl0bGVzXG4gICAgbGV0IHJlc3VsdDtcbiAgICB0b0RvTGlzdHMuY2F0ZWdvcmllcy5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcbiAgICAgICAgY2F0ZWdvcnkuZm9yRWFjaChsaXN0ID0+IHtcbiAgICAgICAgICAgIGlmKGxpc3QubGlzdElkID09IGxpc3RJZCl7XG4gICAgICAgICAgICAgICAgbGV0IHRvRG9zID0gbGlzdC5pdGVtcy5tYXAoIGl0ZW0gPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7aXRlbVRpdGxlOml0ZW0uaXRlbVRpdGxlLCBpdGVtSWQ6IGl0ZW0uaXRlbUlkfTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHtsaXN0Omxpc3QubGlzdE5hbWUsIGl0ZW1zOnRvRG9zfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHNldExpc3QobGlzdElkLCBuZXdOYW1lKXtcbiAgICB0b0RvTGlzdHMuY2F0ZWdvcmllcy5mb3JFYWNoKCBjYXRlZ29yeSA9PntcbiAgICAgICAgY2F0ZWdvcnkuZm9yRWFjaCggbGlzdCA9PntcbiAgICAgICAgICAgIGlmKGxpc3QubGlzdElkID09IGxpc3RJZCl7XG4gICAgICAgICAgICAgICAgbGlzdC5saXN0TmFtZSA9IG5ld05hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHNhdmVEYXRhKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3QoY2F0ZWdvcnlOYW1lLCBsaXN0TmFtZSl7XG4gICAgY29uc29sZS5sb2coY2F0ZWdvcnlOYW1lKTtcbiAgICBjb25zb2xlLmxvZyhsaXN0TmFtZSk7XG4gICAgbGV0IG5ld0lkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgICB0b0RvTGlzdHMuY2F0ZWdvcmllcy5maW5kKGVsZW0gPT4gZWxlbS5jYXRlZ29yeU5hbWUgPT09IGNhdGVnb3J5TmFtZSkubGlzdHNcbiAgICAgICAgLnB1c2goe2xpc3ROYW1lLCBsaXN0SWQgOiBuZXdJZCwgaXRlbXM6W10gfSk7XG4gICAgc2F2ZURhdGEoKTtcbiAgICByZXR1cm4gbmV3SWQ7XG59XG5cbmZ1bmN0aW9uIGdldER1ZVRvZGF5KCl7XG4gICAgbGV0IHRvRG9zID0gW107XG4gICAgdG9Eb0xpc3RzLmNhdGVnb3JpZXMuZm9yRWFjaChjYXRlZ29yeSA9PiB7XG4gICAgICAgIGNhdGVnb3J5Lmxpc3RzLmZvckVhY2gobGlzdCA9PntcbiAgICAgICAgICAgIGxpc3QuZm9yRWFjaChpdGVtID0+e1xuICAgICAgICAgICAgICAgIGlmKGl0ZW0uZHVlRGF0ZVRpbWUgPT09IHRvZGF5KXtcbiAgICAgICAgICAgICAgICAgICAgdG9Eb3MucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KSAgICAgICAgXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldER1ZVdlZWsoKXtcbiAgICBsZXQgdG9Eb3MgPSBbXTtcbiAgICB0b0RvTGlzdHMuY2F0ZWdvcmllcy5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcbiAgICAgICAgY2F0ZWdvcnkubGlzdHMuZm9yRWFjaChsaXN0ID0+e1xuICAgICAgICAgICAgbGlzdC5mb3JFYWNoKGl0ZW0gPT57XG4gICAgICAgICAgICAgICAgaWYoaXRlbS5kdWVEYXRlVGltZSA+PSB0b2RheSAmJiBpdGVtLmR1ZURhdGVUaW1lPD10b2RheSs3KXtcbiAgICAgICAgICAgICAgICAgICAgdG9Eb3MucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KSAgICAgICAgXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEltcG9ydGFudFRvRG9zKCl7XG4gICAgbGV0IHRvRG9zID0gW107XG4gICAgdG9Eb0xpc3RzLmNhdGVnb3JpZXMuZm9yRWFjaChjYXRlZ29yeSA9PiB7XG4gICAgICAgIGNhdGVnb3J5Lmxpc3RzLmZvckVhY2gobGlzdCA9PntcbiAgICAgICAgICAgIGxpc3QuZm9yRWFjaChpdGVtID0+e1xuICAgICAgICAgICAgICAgIGlmKGl0ZW0uaW1wb3J0YW5jZSA9PT0gXCJIaWdoXCIpe1xuICAgICAgICAgICAgICAgICAgICB0b0Rvcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pICAgICAgICBcbiAgICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZ2V0SXRlbSxcbiAgICBzZXRJdGVtLFxuICAgIGNyZWF0ZUl0ZW0sXG4gICAgZ2V0Q2F0ZWdvcmllcyxcbiAgICBnZXRDYXRlZ29yeUxpc3RzLFxuICAgIGdldExpc3QsXG4gICAgc2V0TGlzdCxcbiAgICBjcmVhdGVMaXN0LFxuICAgIGdldER1ZVRvZGF5LFxuICAgIGdldER1ZVdlZWssXG4gICAgZ2V0SW1wb3J0YW50VG9Eb3Ncbn0iLCJpbXBvcnQgeyBjcmVhdGVIZWFkZXIgfSBmcm9tIFwiLi9oZWFkZXIuanNcIjtcblxuZnVuY3Rpb24gZmlyc3RMb2FkKCl7XG4gICAgY3JlYXRlSGVhZGVyKCk7ICAgXG59XG5cbmV4cG9ydCB7IFxuICAgIGZpcnN0TG9hZFxuIH07XG5cblxuXG5cblxuXG5cblxuIiwiY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuaGVhZGVyLmNsYXNzTmFtZSA9IFwiaGVhZGVyXCI7XG5cbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xudGl0bGUuY2xhc3NMaXN0LmFkZChcImNvbXBhbnktbmFtZVwiKTtcbnRpdGxlLmlubmVyVGV4dCA9IFwiR2V0IEl0IERvbmVcIjtcblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpe1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBjcmVhdGVIZWFkZXIsXG59IiwiXG4vKlxubG9jYWwgc3RvcmFnZSBkZXNpZ25cblxudG8tZG8tbGlzdHM6IHtcbiAgICBjYXRlZ29yaWVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhdGVnb3J5TmFtZTogXCJcIixcbiAgICAgICAgICAgIGNhdGVnb3J5SWQ6IFwiXCIsXG4gICAgICAgICAgICBsaXN0czpbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsaXN0TmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbGlzdElkOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtVGl0bGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGVzOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZVRpbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb25lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUlkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW5jZTogXCJcIn1dXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgXVxufVxuXG5sb2dpYyBkZXNpZ25cblxudG9Eb3NcbiAgICBjcmVhdGUgQ2F0ZWdvcnlcbiAgICBkZWxldGUgQ2F0ZWdvcnlcbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2VcbiAgICB1cGRhdGVJdGVtXG4gICAgbW92ZUl0ZW0gXG5cbmNhdGVnb3J5XG4gICAgY3JlYXRlIGxpc3RcbiAgICBkZWxldGUgbGlzdFxuXG5cbiovXG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgKiBhcyBBcHBMb2dpYyBmcm9tIFwiLi9hcHBMb2dpY1wiO1xuaW1wb3J0ICogYXMgRGlzcGxheSBmcm9tIFwiLi9kaXNwbGF5TG9naWNcIjtcbmltcG9ydCAqIGFzIFNpZGViYXIgZnJvbSBcIi4vc2lkZWJhclwiO1xuaW1wb3J0ICogYXMgTW9kYWxzIGZyb20gXCIuL21vZGFsc1wiO1xuXG4vLyBEaXNwbGF5LmZpcnN0TG9hZCgpO1xuU2lkZWJhci5pbml0aWFsaXplKEFwcExvZ2ljLmdldENhdGVnb3JpZXMoKSwoKT0+Y29uc29sZS5sb2coXCJEaXNwbGF5IFRvZGF5XCIpLCAoKT0+Y29uc29sZS5sb2coXCJEaXNwbGF5IHRoaXMgd2Vla1wiKSk7XG5Nb2RhbHMuaW5pdGlhbGl6ZSgpO1xuXG4iLCJpbXBvcnQgKiBhcyBEYXRhIGZyb20gXCIuL2FwcExvZ2ljXCI7XG5cbmNvbnN0IGxpc3REaXNwbGF5QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbiA+IC5saXN0c1wiKTtcblxuXG5mdW5jdGlvbiBkaXNwbGF5Q2F0ZWdvcnkobGlzdHMpe1xuICAgIGNvbnNvbGUubG9nKGxpc3RzKTtcbiAgICAvLyB1cGRhdGUgZmlsdGVyIGJ1dHRvbnNcbiAgICBsaXN0RGlzcGxheUFyZWEucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgbGlzdHMuZm9yRWFjaChsaXN0ID0+IHtcbiAgICAgICAgY29uc3QgbGlzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxpc3REaXYuY2xhc3NMaXN0LmFkZChcImxpc3RcIik7XG4gICAgICAgIGxpc3REaXYuc2V0QXR0cmlidXRlKFwibGlzdElkXCIsbGlzdC5saXN0SWQpO1xuICAgICAgICBjb25zdCBsaXN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIGxpc3RUaXRsZS5pbm5lclRleHQgPSBsaXN0Lmxpc3ROYW1lO1xuICAgICAgICBsaXN0RGl2LmFwcGVuZENoaWxkKGxpc3RUaXRsZSk7XG4gICAgICAgIGxpc3QuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGxpc3REaXYuYXBwZW5kQ2hpbGQoYWRkVGFzayhpdGVtKSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy9hZGQgYWRkIHRhc2sgYnV0dG9uXG4gICAgICAgIGxpc3REaXYuYXBwZW5kQ2hpbGQoY3JlYXRlQWRkVGFza0J1dHRvbihsaXN0Lmxpc3RJZCkpO1xuICAgICAgICBsaXN0RGlzcGxheUFyZWEuYXBwZW5kQ2hpbGQobGlzdERpdik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlMaXN0KCl7XG5cbn1cblxuZnVuY3Rpb24gZGlzcGxheVRvZGF5KCl7XG5cbn1cblxuZnVuY3Rpb24gZGlzcGxheVRoaXNXZWVrKCl7XG5cbn1cblxuZnVuY3Rpb24gYWRkVGFzayhpdGVtKXtcbiAgICBjb25zdCBpdGVtVG9BZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGl0ZW1Ub0FkZC5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIGNoZWNrYm94LmNoZWNrZWQgPSBpdGVtLmRvbmU7XG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBldmVudCA9PntcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ1cGRhdGUgaXRlbSBmdW5jdGlvbiBoZXJlXCIpO1xuICAgICAgICBpdGVtLmRvbmUgPSBpdGVtLmRvbmU9PXRydWUgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgIERhdGEuc2V0SXRlbShpdGVtLml0ZW1JZCwgaXRlbSk7XG4gICAgfSlcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNvbnN0IHRpdGxlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIHRpdGxlTGluay5jbGFzc0xpc3QuYWRkKFwidGFzay10aXRsZVwiKTtcbiAgICB0aXRsZUxpbmsuaW5uZXJUZXh0ID0gaXRlbS5pdGVtVGl0bGU7XG4gICAgdGl0bGVMaW5rLmhyZWYgPSBcIiNcIjtcbiAgICB0aXRsZS5hcHBlbmRDaGlsZCh0aXRsZUxpbmspO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJkdWUtZGF0ZVwiKTtcbiAgICBkdWVEYXRlLmlubmVyVGV4dCA9IGl0ZW0uZHVlRGF0ZVRpbWU7XG4gICAgaXRlbVRvQWRkLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICBpdGVtVG9BZGQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGl0ZW1Ub0FkZC5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICByZXR1cm4gaXRlbVRvQWRkO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVMaXN0VGFza3MobGlzdElkLCBpdGVtKXtcbiAgICBjb25zdCBsaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdHMgPiAubGlzdFwiKTtcbiAgICBsaXN0cy5mb3JFYWNoKGxpc3QgPT57XG4gICAgICAgIGlmKGxpc3QuZ2V0QXR0cmlidXRlKFwibGlzdGlkXCIpPT1saXN0SWQpe1xuICAgICAgICAgICAgbGlzdC5pbnNlcnRCZWZvcmUoYWRkVGFzayhpdGVtKSwgbGlzdC5sYXN0Q2hpbGQpXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVBZGRUYXNrQnV0dG9uKGxpc3RJZCl7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFkZC10YXNrXCIpO1xuICAgIGJ1dHRvbi5pbm5lclRleHQgPSBcIkFkZCBUYXNrXCI7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+e1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBkaXNwbGF5IHRhc2sgbW9kYWxcbiAgICAgICAgc2hvd05ld0l0ZW1Nb2RhbChsaXN0SWQpO1xuXG4gICAgfSlcbiAgICByZXR1cm4gYnV0dG9uO1xufVxuXG5mdW5jdGlvbiBzaG93TmV3SXRlbU1vZGFsKGxpc3RJZCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWFsZXJ0LW1vZGFsXCIpLmxpc3RJZCA9IGxpc3RJZDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tYWxlcnQtbW9kYWxcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBcbn1cblxuXG5leHBvcnQge1xuICAgIGRpc3BsYXlDYXRlZ29yeSxcbiAgICB1cGRhdGVMaXN0VGFza3Ncbn0iLCJpbXBvcnQgKiBhcyBTaWRlYmFyIGZyb20gXCIuL3NpZGViYXJcIjtcbmltcG9ydCAqIGFzIE1haW5Db250ZW50IGZyb20gXCIuL21haW5Db250ZW50XCI7XG5pbXBvcnQgKiBhcyBEYXRhIGZyb20gXCIuL2FwcExvZ2ljXCI7XG5cbmNvbnN0IHN1Ym1pdExpc3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdC1saXN0XCIpO1xuY29uc3QgY2FuY2VsTGlzdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FuY2VsLWFsZXJ0XCIpO1xuY29uc3Qgc3VibWl0VG9Eb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0LXRvZG9cIik7XG5jb25zdCBjYW5jZWxUb0RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW5jZWwtdG9kby1hbGVydFwiKTtcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpe1xuICAgIHN1Ym1pdExpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT57XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHN1Ym1pdE5ld0xpc3QoKTtcbiAgICAgICAgY2xvc2VMaXN0TW9kYWwoKTtcbiAgICB9KVxuICAgIGNhbmNlbExpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT57XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNsb3NlTGlzdE1vZGFsKCk7XG4gICAgfSlcbiAgICBzdWJtaXRUb0RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+e1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzdWJtaXROZXdJdGVtKCk7XG4gICAgICAgIGNsb3NldFRvRG9Nb2RhbCgpO1xuXG4gICAgfSlcbiAgICBjYW5jZWxUb0RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+e1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjbG9zZXRUb0RvTW9kYWwoKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBjbG9zZUxpc3RNb2RhbCgpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWxlcnQtbW9kYWxcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWxlcnQtbW9kYWwgPiAuYWxlcnQtY29udGVudCA+ICNuZXctbGlzdC1uYW1lXCIpLnZhbHVlID0gXCJcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FsZXJ0LW1vZGFsID4gLmFsZXJ0LWNvbnRlbnQgPiAjbGlzdC1jYXRlZ29yeVwiKS52YWx1ZSA9IFwid29ya1wiO1xuXG59XG5cbmZ1bmN0aW9uIGNsb3NldFRvRG9Nb2RhbCgpe1xuICAgIGNvbnNvbGUubG9nKFwiSW4gY2xvc2UgZnVuY3Rpb25cIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWFsZXJ0LW1vZGFsXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tYWxlcnQtbW9kYWxcIikubGlzdElkID0gXCJcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stdGl0bGVcIikudmFsdWUgPSBcIlwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1ub3Rlc1wiKS52YWx1ZSA9IFwiXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWUtZGF0ZVwiKS52YWx1ZSA9IFwiXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbXBvcnRhbmNlXCIpLnZhbHVlID0gXCJtZWRpdW1cIjtcbn1cblxuXG5mdW5jdGlvbiBzdWJtaXROZXdMaXN0KCl7XG4gICAgbGV0IG5ld0xpc3RJZCA9IERhdGEuY3JlYXRlTGlzdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FsZXJ0LW1vZGFsID4gLmFsZXJ0LWNvbnRlbnQgPiAjbGlzdC1jYXRlZ29yeVwiKS52YWx1ZSxcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhbGVydC1tb2RhbCA+IC5hbGVydC1jb250ZW50ID4gI25ldy1saXN0LW5hbWVcIikudmFsdWUpO1xuICAgIFNpZGViYXIuYWRkTGlzdEVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhbGVydC1tb2RhbCA+IC5hbGVydC1jb250ZW50ID4gI2xpc3QtY2F0ZWdvcnlcIikudmFsdWUsXG4gICAgICAgICAgICAgICAgbmV3TGlzdElkLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FsZXJ0LW1vZGFsID4gLmFsZXJ0LWNvbnRlbnQgPiAjbmV3LWxpc3QtbmFtZVwiKS52YWx1ZSlcbn1cblxuZnVuY3Rpb24gc3VibWl0TmV3SXRlbSgpe1xuICAgIGxldCBsaXN0SWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tYWxlcnQtbW9kYWxcIikubGlzdElkO1xuICAgIGxldCBpdGVtVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stdGl0bGVcIikudmFsdWU7XG4gICAgbGV0IG5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLW5vdGVzXCIpLnZhbHVlO1xuICAgIGxldCBkdWVEYXRlVGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlLWRhdGVcIikudmFsdWU7XG4gICAgbGV0IGRvbmUgPSBmYWxzZTtcbiAgICBsZXQgaW1wb3J0YW5jZSA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltcG9ydGFuY2VcIikudmFsdWU7XG4gICAgbGV0IG5ld0l0ZW1JZCA9IERhdGEuY3JlYXRlSXRlbShsaXN0SWQsIGl0ZW1UaXRsZSwgbm90ZXMsIGR1ZURhdGVUaW1lLCBkb25lLCBpbXBvcnRhbmNlKTtcbiAgICBjb25zb2xlLmxvZyhuZXdJdGVtSWQpO1xuICAgIE1haW5Db250ZW50LnVwZGF0ZUxpc3RUYXNrcyhsaXN0SWQsRGF0YS5nZXRJdGVtKG5ld0l0ZW1JZCkpO1xuXG59XG5cbmV4cG9ydHtcbiAgICBpbml0aWFsaXplXG59IiwiaW1wb3J0IHsgZ2V0Q2F0ZWdvcnlMaXN0cyB9IGZyb20gXCIuL2FwcExvZ2ljXCI7XG5pbXBvcnQgeyBkaXNwbGF5Q2F0ZWdvcnkgfSBmcm9tIFwiLi9tYWluQ29udGVudFwiO1xuXG5jb25zdCB0b2RheVRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheS10YXNrc1wiKTtcbmNvbnN0IHRoaXNXZWVrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aGlzLXdlZWstdGFza3NcIik7XG5jb25zdCB3b3JrQ2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dvcmsgPiAubGlzdHNcIik7XG5jb25zdCBob2JiaWVzQ2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvYmJpZXMgPiAubGlzdHNcIik7XG5jb25zdCBob21lQ2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWUgPiAubGlzdHNcIik7XG5jb25zdCBuZXdMaXN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtbGlzdC1idG5cIik7XG5cblxuXG5cblxuXG5cbmZ1bmN0aW9uIGluaXRpYWxpemUoY2F0ZWdvcmllcywgdG9kYXlEaXNwbGF5Rm4sIHRoaXNXZWVrRGlzcGxheUZuKXtcbiAgICB0b2RheVRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgdG9kYXlEaXNwbGF5Rm4oKTtcbiAgICB9KVxuICAgIHRoaXNXZWVrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICB0aGlzV2Vla0Rpc3BsYXlGbigpO1xuICAgIH0pXG4gICAgY2F0ZWdvcmllcy5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcbiAgICAgICAgY2F0ZWdvcnkubGlzdHMuZm9yRWFjaChsaXN0ID0+e1xuICAgICAgICAgICAgYWRkTGlzdEVsZW1lbnQoY2F0ZWdvcnkuY2F0ZWdvcnlOYW1lLCBsaXN0Lmxpc3RJZCwgbGlzdC5saXN0TmFtZSk7XG4gICAgICAgIH0pXG4gICAgfSk7XG4gICAgbmV3TGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KT0+e1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzaG93TmV3TGlzdE1vZGFsKCk7XG4gICAgfSlcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lID4gaDMgPiBhXCIpO1xuICAgIGNvbnN0IHdvcmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dvcmsgPiBoMyA+IGFcIik7XG4gICAgY29uc3QgaG9iYmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9iYmllcyA+IGgzID4gYVwiKTtcblxuICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT57XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKS5jdXJyZGlzcGxheSA9IFwiaG9tZVwiO1xuICAgICAgICBkaXNwbGF5Q2F0ZWdvcnkoZ2V0Q2F0ZWdvcnlMaXN0cyhcImhvbWVcIikpO1xuICAgIH0pXG4gICAgd29yay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PntcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpLmN1cnJkaXNwbGF5ID0gXCJ3b3JrXCI7XG4gICAgICAgIGRpc3BsYXlDYXRlZ29yeShnZXRDYXRlZ29yeUxpc3RzKFwid29ya1wiKSk7XG4gICAgfSlcbiAgICBob2JiaWVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+e1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIikuY3VycmRpc3BsYXkgPSBcImhvYmJpZXNcIjtcbiAgICAgICAgZGlzcGxheUNhdGVnb3J5KGdldENhdGVnb3J5TGlzdHMoXCJob2JiaWVzXCIpKTtcbiAgICB9KVxuXG5cbn1cblxuZnVuY3Rpb24gYWRkTGlzdEVsZW1lbnQoY2F0ZWdvcnlOYW1lLCBsaXN0SWQsIGxpc3ROYW1lKXtcbiAgICBjb25zdCBsaXN0RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBsaXN0Q2xpY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBsaXN0Q2xpY2suaHJlZiA9IFwiXCI7XG4gICAgbGlzdENsaWNrLnNldEF0dHJpYnV0ZShcImxpc3RJZFwiLCBsaXN0SWQpO1xuICAgIGxpc3RDbGljay5pbm5lclRleHQgPSBsaXN0TmFtZTtcbiAgICBsaXN0Q2xpY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT57XG4gICAgICAgIC8vIGZ1bmN0aW9uIHRvIGRpc3BsYXkgbGlzdFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBcbiAgICB9KVxuICAgIGxpc3RFbGVtLmFwcGVuZENoaWxkKGxpc3RDbGljayk7XG4gICAgc3dpdGNoKGNhdGVnb3J5TmFtZSl7XG4gICAgICAgIGNhc2UgXCJ3b3JrXCI6IFxuICAgICAgICAgICAgd29ya0NhdGVnb3J5LmFwcGVuZENoaWxkKGxpc3RFbGVtKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiaG9iYmllc1wiOlxuICAgICAgICAgICAgaG9iYmllc0NhdGVnb3J5LmFwcGVuZENoaWxkKGxpc3RFbGVtKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiaG9tZVwiOlxuICAgICAgICAgICAgaG9tZUNhdGVnb3J5LmFwcGVuZENoaWxkKGxpc3RFbGVtKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbnZhbGlkIGNhdGVnb3J5IG5hbWVcIik7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIikuY3VycmRpc3BsYXkgPT0gY2F0ZWdvcnlOYW1lKXtcbiAgICAgICAgZGlzcGxheUNhdGVnb3J5KGdldENhdGVnb3J5TGlzdHMoY2F0ZWdvcnlOYW1lKSk7XG4gICAgfVxuXG59XG5cblxuXG5cbmZ1bmN0aW9uIHNob3dOZXdMaXN0TW9kYWwoKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FsZXJ0LW1vZGFsXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG5cbmV4cG9ydCB7XG4gICAgaW5pdGlhbGl6ZSxcbiAgICBhZGRMaXN0RWxlbWVudFxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9