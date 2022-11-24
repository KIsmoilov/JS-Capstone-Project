/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: 'Poppins', sans-serif;\n}\n\nhtml {\n  scroll-behavior: smooth;\n  font-size: 62.5%;\n}\n\nbody {\n  background-color: #e7ebe7;\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 1.6rem;\n  line-height: 1.6;\n  letter-spacing: 0.04rem;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #3fc979;\n  color: #fff;\n}\n\n.logo span {\n  font-size: 3rem;\n  font-weight: 700;\n  line-height: 1.7;\n  color: #fff;\n  margin-inline: 2rem;\n}\n\n.navmenu {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.navmenu li {\n  list-style: none;\n  margin: 2rem;\n}\n\n.navmenu li a {\n  text-decoration: none;\n  font-size: 2rem;\n  color: #fff;\n}\n\n.popUp-bg {\n  display: none;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  background-color: rgb(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100vh;\n  z-index: 100;\n}\n\n.popUp {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #3fc979;\n  width: 50rem;\n  height: 70rem;\n  border: 2px solid green;\n  border-radius: 1rem;\n  padding: 2rem;\n  overflow-y: scroll;\n}\n\n.closeBtn {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: flex-end;\n  position: fixed;\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 5px;\n  border: none;\n  font-size: 1.6rem;\n  color: white;\n  background-color: rgb(2, 60, 37);\n}\n\n.popUpDiscription {\n  padding: 0 1.5rem;\n  font-size: 1.6rem;\n  line-height: 2.2rem;\n  text-align: center;\n}\n\n.commentCount {\n  margin-top: 2rem;\n  margin-bottom: 1rem;\n  font-size: 2.2rem;\n}\n\n.comment {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n}\n\n.comment-item {\n  display: flex;\n  flex-direction: row;\n  font-size: 1.4rem;\n  gap: 1rem;\n  border: 1px solid green;\n  border-radius: 5px;\n  padding: 0.5rem;\n  background-color: rgb(0, 0, 0, 0.1);\n  width: 80%;\n  line-height: 1.6rem;\n  margin: 0 auto 1rem auto;\n}\n\n.addComment {\n  margin-top: 2rem;\n  margin-bottom: 1rem;\n  font-size: 2.2rem;\n}\n\n.inputComment {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  width: 100%;\n}\n\n.inputComment input {\n  margin: 0 auto;\n  width: 60%;\n  height: 3rem;\n  padding: 1rem;\n  border-radius: 5px;\n  outline: none;\n  border: 1px solid green;\n  font-weight: 300;\n  background: rgba(255, 255, 255, 0.8);\n}\n\n.inputComment input::placeholder {\n  font-style: oblique;\n}\n\n.inputComment textarea {\n  margin: 0 auto;\n  width: 60%;\n  height: 10rem;\n  padding: 1rem;\n  border-radius: 5px;\n  outline: none;\n  border: 1px solid green;\n  resize: none;\n  font-weight: 300;\n  background: rgba(255, 255, 255, 0.8);\n}\n\n.inputComment textarea::placeholder {\n  font-style: oblique;\n}\n\n.commentBtn {\n  margin: 0 auto 1rem auto;\n  width: 25%;\n  height: 3.5rem;\n  border: 1px solid green;\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n  background: rgba(255, 255, 255, 0.8);\n  cursor: pointer;\n}\n\n.commentBtn:hover {\n  font-size: 1.4rem;\n  border: 2px solid green;\n  width: 26%;\n  height: 3.9rem;\n}\n\n.commentDate {\n  min-width: 8rem;\n}\n\n.message {\n  font-size: 1.4rem;\n  text-align: center;\n  border-radius: 5px;\n  background-color: rgb(0, 0, 0, 0.1);\n  width: 80%;\n}\n\n.popUpImg {\n  margin: 2rem auto;\n}\n\n.item-counter {\n  width: 100px;\n  height: 100px;\n  padding: 0.3rem 0.5rem;\n  background-color: #fff;\n  color: #3fc979;\n  font-size: 1.2rem;\n  border-radius: 100%;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n\nfooter {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: fixed;\n  bottom: 0;\n  text-align: center;\n  height: 5rem;\n  font-size: 2rem;\n  width: 100%;\n  background-color: #3fc979;\n  color: white;\n}\n\nsection {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2% 3rem;\n  width: 100%;\n  margin: 0 auto;\n}\n\n.section-title {\n  font-size: 2rem;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: 600;\n  text-align: center;\n  padding: 3rem 0 1rem 0;\n}\n\n#meal-item-container {\n  display: grid;\n  margin: 2rem 0 8rem 0;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 3rem;\n}\n\n.meal-item {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 36rem;\n  align-items: center;\n  border-radius: 1rem;\n  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.79);\n  padding: 3rem;\n  transition: 0.4s ease-in;\n}\n\n.meal-item:hover {\n  transform: translateY(-20px);\n}\n\n.meal-name {\n  display: flex;\n}\n\n.meal-title {\n  margin: 3rem;\n}\n\n.heart-icon {\n  font-size: 2.5rem;\n  background-color: #3fc979;\n  color: #fff;\n  width: 50px;\n  height: 50px;\n  padding: 0.4rem 0.7rem;\n  border-radius: 50%;\n  text-align: center;\n  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.79);\n}\n\n.heart-icon:hover {\n  background-color: #fff;\n  color: red;\n}\n\n.heart-icon:active {\n  background-color: red;\n  color: white;\n}\n\n.like-counter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n#comment-btn {\n  background-color: #3fc979;\n  color: #fff;\n  padding: 1.5rem 2rem;\n  font-size: 1.5rem;\n  border-radius: 1rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  display: inline-block;\n  cursor: pointer;\n  transition: 0.4s ease-in;\n  outline: 0;\n  border: 0;\n}\n\n#comment-btn:hover {\n  background-color: transparent;\n  color: #000;\n  border: 1px solid #3fc979;\n}\n\n@media screen and (max-width: 1250px) {\n  #meal-item-container {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  article {\n    width: 90%;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .popUp {\n    width: 45rem;\n  }\n\n  .commentBtn {\n    font-size: 1rem;\n  }\n\n  .commentBtn:hover {\n    font-size: 1.1rem;\n  }\n\n  .popUpTitle {\n    font-size: 3rem;\n  }\n\n  .commentCount {\n    font-size: 2rem;\n  }\n\n  .addComment {\n    font-size: 2rem;\n  }\n\n  .message {\n    font-size: 1.2rem;\n    padding: 0 3rem;\n  }\n\n  .popUpImg {\n    width: 70%;\n  }\n\n  .commentDate {\n    font-size: 1rem;\n    min-width: 6rem;\n  }\n\n  .commenterName {\n    font-size: 1.2rem;\n  }\n\n  .commentContent {\n    font-size: 1.2rem;\n  }\n\n  #meal-item-container {\n    grid-template-columns: 1fr;\n  }\n\n  footer {\n    font-size: 1.4rem;\n    padding: 0 7rem;\n  }\n\n  .navmenu li:nth-of-type(2) {\n    display: none;\n  }\n\n  .navmenu li:nth-of-type(3) {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 480px) {\n  .popUp {\n    width: 90%;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: 'Poppins', sans-serif;\n}\n\nhtml {\n  scroll-behavior: smooth;\n  font-size: 62.5%;\n}\n\nbody {\n  background-color: #e7ebe7;\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 1.6rem;\n  line-height: 1.6;\n  letter-spacing: 0.04rem;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #3fc979;\n  color: #fff;\n}\n\n.logo span {\n  font-size: 3rem;\n  font-weight: 700;\n  line-height: 1.7;\n  color: #fff;\n  margin-inline: 2rem;\n}\n\n.navmenu {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.navmenu li {\n  list-style: none;\n  margin: 2rem;\n}\n\n.navmenu li a {\n  text-decoration: none;\n  font-size: 2rem;\n  color: #fff;\n}\n\n.popUp-bg {\n  display: none;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  background-color: rgb(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100vh;\n  z-index: 100;\n}\n\n.popUp {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #3fc979;\n  width: 50rem;\n  height: 70rem;\n  border: 2px solid green;\n  border-radius: 1rem;\n  padding: 2rem;\n  overflow-y: scroll;\n}\n\n.closeBtn {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: flex-end;\n  position: fixed;\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 5px;\n  border: none;\n  font-size: 1.6rem;\n  color: white;\n  background-color: rgb(2, 60, 37);\n}\n\n.popUpDiscription {\n  padding: 0 1.5rem;\n  font-size: 1.6rem;\n  line-height: 2.2rem;\n  text-align: center;\n}\n\n.commentCount {\n  margin-top: 2rem;\n  margin-bottom: 1rem;\n  font-size: 2.2rem;\n}\n\n.comment {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n}\n\n.comment-item {\n  display: flex;\n  flex-direction: row;\n  font-size: 1.4rem;\n  gap: 1rem;\n  border: 1px solid green;\n  border-radius: 5px;\n  padding: 0.5rem;\n  background-color: rgb(0, 0, 0, 0.1);\n  width: 80%;\n  line-height: 1.6rem;\n  margin: 0 auto 1rem auto;\n}\n\n.addComment {\n  margin-top: 2rem;\n  margin-bottom: 1rem;\n  font-size: 2.2rem;\n}\n\n.inputComment {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  width: 100%;\n}\n\n.inputComment input {\n  margin: 0 auto;\n  width: 60%;\n  height: 3rem;\n  padding: 1rem;\n  border-radius: 5px;\n  outline: none;\n  border: 1px solid green;\n  font-weight: 300;\n  background: rgba(255, 255, 255, 0.8);\n}\n\n.inputComment input::placeholder {\n  font-style: oblique;\n}\n\n.inputComment textarea {\n  margin: 0 auto;\n  width: 60%;\n  height: 10rem;\n  padding: 1rem;\n  border-radius: 5px;\n  outline: none;\n  border: 1px solid green;\n  resize: none;\n  font-weight: 300;\n  background: rgba(255, 255, 255, 0.8);\n}\n\n.inputComment textarea::placeholder {\n  font-style: oblique;\n}\n\n.commentBtn {\n  margin: 0 auto 1rem auto;\n  width: 25%;\n  height: 3.5rem;\n  border: 1px solid green;\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n  background: rgba(255, 255, 255, 0.8);\n  cursor: pointer;\n}\n\n.commentBtn:hover {\n  font-size: 1.4rem;\n  border: 2px solid green;\n  width: 26%;\n  height: 3.9rem;\n}\n\n.commentDate {\n  min-width: 8rem;\n}\n\n.message {\n  font-size: 1.4rem;\n  text-align: center;\n  border-radius: 5px;\n  background-color: rgb(0, 0, 0, 0.1);\n  width: 80%;\n}\n\n.popUpImg {\n  margin: 2rem auto;\n}\n\n.item-counter {\n  width: 100px;\n  height: 100px;\n  padding: 0.3rem 0.5rem;\n  background-color: #fff;\n  color: #3fc979;\n  font-size: 1.2rem;\n  border-radius: 100%;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n\nfooter {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: fixed;\n  bottom: 0;\n  text-align: center;\n  height: 5rem;\n  font-size: 2rem;\n  width: 100%;\n  background-color: #3fc979;\n  color: white;\n}\n\nsection {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2% 3rem;\n  width: 100%;\n  margin: 0 auto;\n}\n\n.section-title {\n  font-size: 2rem;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: 600;\n  text-align: center;\n  padding: 3rem 0 1rem 0;\n}\n\n#meal-item-container {\n  display: grid;\n  margin: 2rem 0 8rem 0;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 3rem;\n}\n\n.meal-item {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 36rem;\n  align-items: center;\n  border-radius: 1rem;\n  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.79);\n  padding: 3rem;\n  transition: 0.4s ease-in;\n}\n\n.meal-item:hover {\n  transform: translateY(-20px);\n}\n\n.meal-name {\n  display: flex;\n}\n\n.meal-title {\n  margin: 3rem;\n}\n\n.heart-icon {\n  font-size: 2.5rem;\n  background-color: #3fc979;\n  color: #fff;\n  width: 50px;\n  height: 50px;\n  padding: 0.4rem 0.7rem;\n  border-radius: 50%;\n  text-align: center;\n  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.79);\n}\n\n.heart-icon:hover {\n  background-color: #fff;\n  color: red;\n}\n\n.heart-icon:active {\n  background-color: red;\n  color: white;\n}\n\n.like-counter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n#comment-btn {\n  background-color: #3fc979;\n  color: #fff;\n  padding: 1.5rem 2rem;\n  font-size: 1.5rem;\n  border-radius: 1rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  display: inline-block;\n  cursor: pointer;\n  transition: 0.4s ease-in;\n  outline: 0;\n  border: 0;\n}\n\n#comment-btn:hover {\n  background-color: transparent;\n  color: #000;\n  border: 1px solid #3fc979;\n}\n\n@media screen and (max-width: 1250px) {\n  #meal-item-container {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  article {\n    width: 90%;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .popUp {\n    width: 45rem;\n  }\n\n  .commentBtn {\n    font-size: 1rem;\n  }\n\n  .commentBtn:hover {\n    font-size: 1.1rem;\n  }\n\n  .popUpTitle {\n    font-size: 3rem;\n  }\n\n  .commentCount {\n    font-size: 2rem;\n  }\n\n  .addComment {\n    font-size: 2rem;\n  }\n\n  .message {\n    font-size: 1.2rem;\n    padding: 0 3rem;\n  }\n\n  .popUpImg {\n    width: 70%;\n  }\n\n  .commentDate {\n    font-size: 1rem;\n    min-width: 6rem;\n  }\n\n  .commenterName {\n    font-size: 1.2rem;\n  }\n\n  .commentContent {\n    font-size: 1.2rem;\n  }\n\n  #meal-item-container {\n    grid-template-columns: 1fr;\n  }\n\n  footer {\n    font-size: 1.4rem;\n    padding: 0 7rem;\n  }\n\n  .navmenu li:nth-of-type(2) {\n    display: none;\n  }\n\n  .navmenu li:nth-of-type(3) {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 480px) {\n  .popUp {\n    width: 90%;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getdata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getdata.js */ "./src/modules/getdata.js");
/* harmony import */ var _displayMeal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayMeal.js */ "./src/modules/displayMeal.js");
/* harmony import */ var _getLikeData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getLikeData.js */ "./src/modules/getLikeData.js");
/* harmony import */ var _popUpDom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popUpDom.js */ "./src/modules/popUpDom.js");





const container = document.getElementById('meal-item-container');

const setLikes = (heart, likes) => {
  const id = heart.closest('article').getAttribute('data-id');
  const item = likes.find((item) => item.item_id === id);
  heart.textContent = item.likes;
};

const handleLikeClick = (heart) => {
  const id = heart.closest('article').getAttribute('data-id');
  heart.addEventListener('click', async () => {
    await (0,_getLikeData_js__WEBPACK_IMPORTED_MODULE_2__.likePostData)(id);
    const likes = await (0,_getLikeData_js__WEBPACK_IMPORTED_MODULE_2__.likeGetData)();
    const hearts = container.querySelectorAll('.like-container');
    hearts.forEach((heart) => {
      setLikes(heart, likes);
    });
  });
};

const getMealLists = async () => {
  const mealLists = await (0,_getdata_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const likes = await (0,_getLikeData_js__WEBPACK_IMPORTED_MODULE_2__.likeGetData)();

  mealLists.categories.forEach((meal) => {
    (0,_displayMeal_js__WEBPACK_IMPORTED_MODULE_1__["default"])(meal);
  });

  const hearts = container.querySelectorAll('.like-container');
  const heartIcons = container.querySelectorAll('.heart-icon');

  hearts.forEach((heart) => {
    setLikes(heart, likes);
  });

  heartIcons.forEach((heart) => {
    handleLikeClick(heart);
  });

  const comment = document.querySelectorAll('.commentButton');
  let selectedIdCat;
  if (comment !== null) {
    comment.forEach((clickedBtn) => {
      clickedBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (document.querySelector('.popUp-bg').style.display === '') {
          document.querySelector('.popUp-bg').style.display = 'flex';
        }
        selectedIdCat = e.currentTarget.closest('article').getAttribute('data-id');
        (0,_popUpDom_js__WEBPACK_IMPORTED_MODULE_3__["default"])(selectedIdCat);
      });
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMealLists);


/***/ }),

/***/ "./src/modules/displayMeal.js":
/*!************************************!*\
  !*** ./src/modules/displayMeal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const displayMealLists = (meal) => {
  const container = document.getElementById('meal-item-container');
  const article = document.createElement('article');

  article.setAttribute('data-id', meal.idCategory);
  article.innerHTML = `
  <div class="meal-item">
    <div class="meal-img">
      <img src="${meal.strCategoryThumb}" alt="meal images">
    </div>
    <div class="meal-name">
      <div class="meal-title">
      <h3>${meal.strCategory}</h3>
        </div>
        <div class="like-counter">
        <i class="uil uil-heart heart-icon"></i>
        <p class="like-container">Loading...</p>
        <p>Likes</p>
      </div>
    </div>
    <button type="button" class="commentButton" id="comment-btn">Comment</button>
  </div>`;
  container.appendChild(article);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMealLists);


/***/ }),

/***/ "./src/modules/getLikeData.js":
/*!************************************!*\
  !*** ./src/modules/getLikeData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "likeGetData": () => (/* binding */ likeGetData),
/* harmony export */   "likePostData": () => (/* binding */ likePostData)
/* harmony export */ });
const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${"nZ9hVAtwO4zwinYjSz8e"}/likes`;

const likeGetData = async () => {
  const response = await fetch(
    `${url}`,
  );
  return response.json();
};

const likePostData = async (mealId) => {
  await fetch(`${url}`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: mealId,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};



/***/ }),

/***/ "./src/modules/getdata.js":
/*!********************************!*\
  !*** ./src/modules/getdata.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const API_URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';

const getData = async () => {
  const response = await fetch(
    `${API_URL}`,
    {
      method: 'GET',
    },
  );
  return response.json();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);

/***/ }),

/***/ "./src/modules/homeItemsCounter.js":
/*!*****************************************!*\
  !*** ./src/modules/homeItemsCounter.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const homeItemCounter = (item) => item.length;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeItemCounter);

/***/ }),

/***/ "./src/modules/popUpDom.js":
/*!*********************************!*\
  !*** ./src/modules/popUpDom.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "commentCounter": () => (/* binding */ commentCounter),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getdata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getdata.js */ "./src/modules/getdata.js");
/* harmony import */ var _postComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postComment.js */ "./src/modules/postComment.js");



const popUpContainer = document.querySelector('.popUp-bg');
const popUp = document.createElement('div');

const createComments = (comments) => {
  const commentMainDiv = document.querySelector('.comment');

  for (let i = 0; i < comments.length; i += 1) {
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment-item';
    commentDiv.innerHTML = `
     <p class="commentDate">${comments[i].creation_date}</p>
     <p class="commenterName">${comments[i].username}:</p>
     <p class="commentContent">${comments[i].comment}</p>
     `;
    commentMainDiv.appendChild(commentDiv);
  }
};

const commentCounter = (comments) => (comments.length ? comments.length : 0);

const displaySelectedMeal = (selectedMeal, comments) => {
  popUp.className = 'popUp';
  popUp.innerHTML = `
  <button class="closeBtn">X</button>
  <img class="popUpImg" src="${selectedMeal.strCategoryThumb}" alt="meal image">
  <h2 class="popUpTitle">${selectedMeal.strCategory}</h2>
  <p class="popUpDiscription">${selectedMeal.strCategoryDescription}</p>
  <h3 class="commentCount">Comments<span id="commentCount" class="commentCounter">(${commentCounter(comments)})</span></h3>
  <div class="comment">     
  </div>
  <h3 class="addComment">Add a comment</h3>
      <form class="inputComment" id="inputComment" action="#" method="post">
          <input type="text" name="username" placeholder="Your name" required>
          <textarea type="text" name="comment" placeholder="Your insights" required></textarea>
          <button class="commentBtn">Comment</button>
      </form> 
      <span id="successMsg" class="message"></span>`;

  popUpContainer.appendChild(popUp);
  createComments(comments);
};

const getSelectedMeal = async (selectedIdCat) => {
  const selectedMeals = await (0,_getdata_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  if (selectedIdCat !== undefined) {
    const commentObj = await (0,_postComment_js__WEBPACK_IMPORTED_MODULE_1__.getCommentData)(selectedIdCat);
    const selectedMeal = selectedMeals.categories.find((meal) => meal.idCategory === selectedIdCat);
    displaySelectedMeal(selectedMeal, commentObj);
  }

  const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  };

  const resetComments = async (allComments) => {
    document.getElementById('commentCount').innerHTML = `(${commentCounter(allComments)})`;
    removeAllChildNodes(document.querySelector('.comment'));
    createComments(allComments);
  };

  const containWhiteSpace = (x) => {
    const space = new RegExp(/^\s$/);
    return space.test(x.charAt(0));
  };

  const registerAddNewComment = async (selectedIdCat) => {
    if (document.getElementById('inputComment') !== null) {
      document.getElementById('inputComment').addEventListener('submit', async (e) => {
        e.preventDefault();
        const userNameInput = document.getElementById('inputComment').elements.username;
        const commentInput = document.getElementById('inputComment').elements.comment;

        document.querySelector('.message').innerHTML = ' Please remove any empty spaces in the beginning. ';
        document.querySelector('.message').style.color = 'red';

        if (!containWhiteSpace(userNameInput.value) && !containWhiteSpace(commentInput.value)) {
          document.querySelector('.message').innerHTML = ' Commented successfully ';
          const newComment = {
            item_id: selectedIdCat,
            username: userNameInput.value.trim(),
            comment: commentInput.value.trim(),
          };

          const allComments = await (0,_postComment_js__WEBPACK_IMPORTED_MODULE_1__.addCommentInput)(newComment);
          document.getElementById('inputComment').reset();
          resetComments(allComments);
        }
        setTimeout(() => {
          document.getElementById('successMsg').innerHTML = '';
        }, 3000);
      });
    }
  };

  registerAddNewComment(selectedIdCat);

  if (document.querySelector('.closeBtn') !== null) {
    document.querySelector('.closeBtn').addEventListener('click', (e) => {
      e.preventDefault();
      if (popUpContainer.style.display === 'flex') {
        popUpContainer.style.display = '';
      }
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSelectedMeal);


/***/ }),

/***/ "./src/modules/postComment.js":
/*!************************************!*\
  !*** ./src/modules/postComment.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCommentInput": () => (/* binding */ addCommentInput),
/* harmony export */   "getCommentData": () => (/* binding */ getCommentData)
/* harmony export */ });
const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${"nZ9hVAtwO4zwinYjSz8e"}/comments`;
const urlGet = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${"nZ9hVAtwO4zwinYjSz8e"}/comments?item_id=`;

const getCommentData = async (id) => {
  const urlWithID = urlGet + id;
  if (id !== undefined) {
    const response = await fetch(
      `${urlWithID}`,
    );
    return response.json();
  }
  return null;
};

const addCommentInput = async (newComment) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(newComment),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const allComments = await getCommentData(newComment.item_id);
  return allComments;
};



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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _modules_popUpDom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/popUpDom.js */ "./src/modules/popUpDom.js");
/* harmony import */ var _modules_postComment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/postComment.js */ "./src/modules/postComment.js");
/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/display.js */ "./src/modules/display.js");
/* harmony import */ var _modules_homeItemsCounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/homeItemsCounter.js */ "./src/modules/homeItemsCounter.js");
/* harmony import */ var _modules_getdata_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/getdata.js */ "./src/modules/getdata.js");







window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_display_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const homeCounter = document.querySelector('.item-counter');
  const getList = async () => {
    const mealLists = await (0,_modules_getdata_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
    const counterArray = mealLists.categories;
    homeCounter.textContent = (0,_modules_homeItemsCounter_js__WEBPACK_IMPORTED_MODULE_4__["default"])(counterArray);
  };
  getList();
});

(0,_modules_popUpDom_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

(0,_modules_postComment_js__WEBPACK_IMPORTED_MODULE_2__.getCommentData)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxP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Q0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQytCO0FBQ007QUFDVjtBQUNZO0FBQ2pCOztBQUUzQztBQUNBLEVBQUUsK0RBQVk7QUFDZDtBQUNBO0FBQ0EsNEJBQTRCLCtEQUFPO0FBQ25DO0FBQ0EsOEJBQThCLHdFQUFlO0FBQzdDO0FBQ0E7QUFDQSxDQUFDOztBQUVELGdFQUFlOztBQUVmLHVFQUFjLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0LXdpdGgtd2VicGFjay8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC13aXRoLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC13aXRoLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0LXdpdGgtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0LXdpdGgtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC13aXRoLXdlYnBhY2svLi9zcmMvbW9kdWxlcy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC13aXRoLXdlYnBhY2svLi9zcmMvbW9kdWxlcy9kaXNwbGF5TWVhbC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vc3JjL21vZHVsZXMvZ2V0TGlrZURhdGEuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0LXdpdGgtd2VicGFjay8uL3NyYy9tb2R1bGVzL2dldGRhdGEuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0LXdpdGgtd2VicGFjay8uL3NyYy9tb2R1bGVzL2hvbWVJdGVtc0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0LXdpdGgtd2VicGFjay8uL3NyYy9tb2R1bGVzL3BvcFVwRG9tLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC13aXRoLXdlYnBhY2svLi9zcmMvbW9kdWxlcy9wb3N0Q29tbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3Qtd2l0aC13ZWJwYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC13aXRoLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0LXdpdGgtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0LXdpdGgtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC13aXRoLXdlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3Qtd2l0aC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sIHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlYmU3O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA0cmVtO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ZjOTc5O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5sb2dvIHNwYW4ge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XFxuICBjb2xvcjogI2ZmZjtcXG4gIG1hcmdpbi1pbmxpbmU6IDJyZW07XFxufVxcblxcbi5uYXZtZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXZtZW51IGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDJyZW07XFxufVxcblxcbi5uYXZtZW51IGxpIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5wb3BVcC1iZyB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjUpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4ucG9wVXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmYzk3OTtcXG4gIHdpZHRoOiA1MHJlbTtcXG4gIGhlaWdodDogNzByZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4uY2xvc2VCdG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDIuNXJlbTtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiwgNjAsIDM3KTtcXG59XFxuXFxuLnBvcFVwRGlzY3JpcHRpb24ge1xcbiAgcGFkZGluZzogMCAxLjVyZW07XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyLjJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb21tZW50Q291bnQge1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBmb250LXNpemU6IDIuMnJlbTtcXG59XFxuXFxuLmNvbW1lbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29tbWVudC1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBnYXA6IDFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjEpO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjZyZW07XFxuICBtYXJnaW46IDAgYXV0byAxcmVtIGF1dG87XFxufVxcblxcbi5hZGRDb21tZW50IHtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgZm9udC1zaXplOiAyLjJyZW07XFxufVxcblxcbi5pbnB1dENvbW1lbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEuNXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaW5wdXRDb21tZW50IGlucHV0IHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDYwJTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbn1cXG5cXG4uaW5wdXRDb21tZW50IGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xcbn1cXG5cXG4uaW5wdXRDb21tZW50IHRleHRhcmVhIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDYwJTtcXG4gIGhlaWdodDogMTByZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcbiAgcmVzaXplOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG59XFxuXFxuLmlucHV0Q29tbWVudCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXG59XFxuXFxuLmNvbW1lbnRCdG4ge1xcbiAgbWFyZ2luOiAwIGF1dG8gMXJlbSBhdXRvO1xcbiAgd2lkdGg6IDI1JTtcXG4gIGhlaWdodDogMy41cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb21tZW50QnRuOmhvdmVyIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XFxuICB3aWR0aDogMjYlO1xcbiAgaGVpZ2h0OiAzLjlyZW07XFxufVxcblxcbi5jb21tZW50RGF0ZSB7XFxuICBtaW4td2lkdGg6IDhyZW07XFxufVxcblxcbi5tZXNzYWdlIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuMSk7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG4ucG9wVXBJbWcge1xcbiAgbWFyZ2luOiAycmVtIGF1dG87XFxufVxcblxcbi5pdGVtLWNvdW50ZXIge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6ICMzZmM5Nzk7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogNXJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmYzk3OTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyJSAzcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLnNlY3Rpb24tdGl0bGUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzcmVtIDAgMXJlbSAwO1xcbn1cXG5cXG4jbWVhbC1pdGVtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgbWFyZ2luOiAycmVtIDAgOHJlbSAwO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGdhcDogM3JlbTtcXG59XFxuXFxuLm1lYWwtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDM2cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBib3gtc2hhZG93OiAwIDRweCAyMXB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC43OSk7XFxuICBwYWRkaW5nOiAzcmVtO1xcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlLWluO1xcbn1cXG5cXG4ubWVhbC1pdGVtOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XFxufVxcblxcbi5tZWFsLW5hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1lYWwtdGl0bGUge1xcbiAgbWFyZ2luOiAzcmVtO1xcbn1cXG5cXG4uaGVhcnQtaWNvbiB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZmM5Nzk7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgcGFkZGluZzogMC40cmVtIDAuN3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIxcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjc5KTtcXG59XFxuXFxuLmhlYXJ0LWljb246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5oZWFydC1pY29uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5saWtlLWNvdW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuI2NvbW1lbnQtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZmM5Nzk7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbjtcXG4gIG91dGxpbmU6IDA7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbiNjb21tZW50LWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzNmYzk3OTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI1MHB4KSB7XFxuICAjbWVhbC1pdGVtLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIH1cXG5cXG4gIGFydGljbGUge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLnBvcFVwIHtcXG4gICAgd2lkdGg6IDQ1cmVtO1xcbiAgfVxcblxcbiAgLmNvbW1lbnRCdG4ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuXFxuICAuY29tbWVudEJ0bjpob3ZlciB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgfVxcblxcbiAgLnBvcFVwVGl0bGUge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICB9XFxuXFxuICAuY29tbWVudENvdW50IHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcblxcbiAgLmFkZENvbW1lbnQge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxuXFxuICAubWVzc2FnZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBwYWRkaW5nOiAwIDNyZW07XFxuICB9XFxuXFxuICAucG9wVXBJbWcge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgfVxcblxcbiAgLmNvbW1lbnREYXRlIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBtaW4td2lkdGg6IDZyZW07XFxuICB9XFxuXFxuICAuY29tbWVudGVyTmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcblxcbiAgLmNvbW1lbnRDb250ZW50IHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICB9XFxuXFxuICAjbWVhbC1pdGVtLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcblxcbiAgZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIHBhZGRpbmc6IDAgN3JlbTtcXG4gIH1cXG5cXG4gIC5uYXZtZW51IGxpOm50aC1vZi10eXBlKDIpIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5uYXZtZW51IGxpOm50aC1vZi10eXBlKDMpIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gIC5wb3BVcCB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6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YUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0U7SUFDRSw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmh0bWwge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2ViZTc7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBsaW5lLWhlaWdodDogMS42O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDRyZW07XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZmM5Nzk7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmxvZ28gc3BhbiB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNztcXG4gIGNvbG9yOiAjZmZmO1xcbiAgbWFyZ2luLWlubGluZTogMnJlbTtcXG59XFxuXFxuLm5hdm1lbnUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5hdm1lbnUgbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMnJlbTtcXG59XFxuXFxuLm5hdm1lbnUgbGkgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLnBvcFVwLWJnIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5wb3BVcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ZjOTc5O1xcbiAgd2lkdGg6IDUwcmVtO1xcbiAgaGVpZ2h0OiA3MHJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5jbG9zZUJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMi41cmVtO1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyLCA2MCwgMzcpO1xcbn1cXG5cXG4ucG9wVXBEaXNjcmlwdGlvbiB7XFxuICBwYWRkaW5nOiAwIDEuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDIuMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbW1lbnRDb3VudCB7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xcbn1cXG5cXG4uY29tbWVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb21tZW50LWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGdhcDogMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuMSk7XFxuICB3aWR0aDogODAlO1xcbiAgbGluZS1oZWlnaHQ6IDEuNnJlbTtcXG4gIG1hcmdpbjogMCBhdXRvIDFyZW0gYXV0bztcXG59XFxuXFxuLmFkZENvbW1lbnQge1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBmb250LXNpemU6IDIuMnJlbTtcXG59XFxuXFxuLmlucHV0Q29tbWVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMS41cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5pbnB1dENvbW1lbnQgaW5wdXQge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxufVxcblxcbi5pbnB1dENvbW1lbnQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxufVxcblxcbi5pbnB1dENvbW1lbnQgdGV4dGFyZWEge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiAxMHJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxuICByZXNpemU6IG5vbmU7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbn1cXG5cXG4uaW5wdXRDb21tZW50IHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xcbn1cXG5cXG4uY29tbWVudEJ0biB7XFxuICBtYXJnaW46IDAgYXV0byAxcmVtIGF1dG87XFxuICB3aWR0aDogMjUlO1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbW1lbnRCdG46aG92ZXIge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcXG4gIHdpZHRoOiAyNiU7XFxuICBoZWlnaHQ6IDMuOXJlbTtcXG59XFxuXFxuLmNvbW1lbnREYXRlIHtcXG4gIG1pbi13aWR0aDogOHJlbTtcXG59XFxuXFxuLm1lc3NhZ2Uge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC4xKTtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi5wb3BVcEltZyB7XFxuICBtYXJnaW46IDJyZW0gYXV0bztcXG59XFxuXFxuLml0ZW0tY291bnRlciB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgcGFkZGluZzogMC4zcmVtIDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb2xvcjogIzNmYzk3OTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ZjOTc5O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIlIDNyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uc2VjdGlvbi10aXRsZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDNyZW0gMCAxcmVtIDA7XFxufVxcblxcbiNtZWFsLWl0ZW0tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBtYXJnaW46IDJyZW0gMCA4cmVtIDA7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG5cXG4ubWVhbC1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMzZyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIxcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjc5KTtcXG4gIHBhZGRpbmc6IDNyZW07XFxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UtaW47XFxufVxcblxcbi5tZWFsLWl0ZW06aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcXG59XFxuXFxuLm1lYWwtbmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubWVhbC10aXRsZSB7XFxuICBtYXJnaW46IDNyZW07XFxufVxcblxcbi5oZWFydC1pY29uIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmYzk3OTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBwYWRkaW5nOiAwLjRyZW0gMC43cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogMCA0cHggMjFweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuNzkpO1xcbn1cXG5cXG4uaGVhcnQtaWNvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmhlYXJ0LWljb246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmxpa2UtY291bnRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jY29tbWVudC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmYzk3OTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMS41cmVtIDJyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlLWluO1xcbiAgb3V0bGluZTogMDtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuI2NvbW1lbnQtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICMwMDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjM2ZjOTc5O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjUwcHgpIHtcXG4gICNtZWFsLWl0ZW0tY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgfVxcblxcbiAgYXJ0aWNsZSB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAucG9wVXAge1xcbiAgICB3aWR0aDogNDVyZW07XFxuICB9XFxuXFxuICAuY29tbWVudEJ0biB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG5cXG4gIC5jb21tZW50QnRuOmhvdmVyIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICB9XFxuXFxuICAucG9wVXBUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gIH1cXG5cXG4gIC5jb21tZW50Q291bnQge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxuXFxuICAuYWRkQ29tbWVudCB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG5cXG4gIC5tZXNzYWdlIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHBhZGRpbmc6IDAgM3JlbTtcXG4gIH1cXG5cXG4gIC5wb3BVcEltZyB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICB9XFxuXFxuICAuY29tbWVudERhdGUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG1pbi13aWR0aDogNnJlbTtcXG4gIH1cXG5cXG4gIC5jb21tZW50ZXJOYW1lIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICB9XFxuXFxuICAuY29tbWVudENvbnRlbnQge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gIH1cXG5cXG4gICNtZWFsLWl0ZW0tY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB9XFxuXFxuICBmb290ZXIge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgcGFkZGluZzogMCA3cmVtO1xcbiAgfVxcblxcbiAgLm5hdm1lbnUgbGk6bnRoLW9mLXR5cGUoMikge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLm5hdm1lbnUgbGk6bnRoLW9mLXR5cGUoMykge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgLnBvcFVwIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgZ2V0RGF0YSBmcm9tICcuL2dldGRhdGEuanMnO1xuaW1wb3J0IGRpc3BsYXlNZWFsTGlzdHMgZnJvbSAnLi9kaXNwbGF5TWVhbC5qcyc7XG5pbXBvcnQgeyBsaWtlR2V0RGF0YSwgbGlrZVBvc3REYXRhIH0gZnJvbSAnLi9nZXRMaWtlRGF0YS5qcyc7XG5pbXBvcnQgZ2V0U2VsZWN0ZWRNZWFsIGZyb20gJy4vcG9wVXBEb20uanMnO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVhbC1pdGVtLWNvbnRhaW5lcicpO1xuXG5jb25zdCBzZXRMaWtlcyA9IChoZWFydCwgbGlrZXMpID0+IHtcbiAgY29uc3QgaWQgPSBoZWFydC5jbG9zZXN0KCdhcnRpY2xlJykuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gIGNvbnN0IGl0ZW0gPSBsaWtlcy5maW5kKChpdGVtKSA9PiBpdGVtLml0ZW1faWQgPT09IGlkKTtcbiAgaGVhcnQudGV4dENvbnRlbnQgPSBpdGVtLmxpa2VzO1xufTtcblxuY29uc3QgaGFuZGxlTGlrZUNsaWNrID0gKGhlYXJ0KSA9PiB7XG4gIGNvbnN0IGlkID0gaGVhcnQuY2xvc2VzdCgnYXJ0aWNsZScpLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICBoZWFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBsaWtlUG9zdERhdGEoaWQpO1xuICAgIGNvbnN0IGxpa2VzID0gYXdhaXQgbGlrZUdldERhdGEoKTtcbiAgICBjb25zdCBoZWFydHMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmxpa2UtY29udGFpbmVyJyk7XG4gICAgaGVhcnRzLmZvckVhY2goKGhlYXJ0KSA9PiB7XG4gICAgICBzZXRMaWtlcyhoZWFydCwgbGlrZXMpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGdldE1lYWxMaXN0cyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbWVhbExpc3RzID0gYXdhaXQgZ2V0RGF0YSgpO1xuICBjb25zdCBsaWtlcyA9IGF3YWl0IGxpa2VHZXREYXRhKCk7XG5cbiAgbWVhbExpc3RzLmNhdGVnb3JpZXMuZm9yRWFjaCgobWVhbCkgPT4ge1xuICAgIGRpc3BsYXlNZWFsTGlzdHMobWVhbCk7XG4gIH0pO1xuXG4gIGNvbnN0IGhlYXJ0cyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZS1jb250YWluZXInKTtcbiAgY29uc3QgaGVhcnRJY29ucyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhcnQtaWNvbicpO1xuXG4gIGhlYXJ0cy5mb3JFYWNoKChoZWFydCkgPT4ge1xuICAgIHNldExpa2VzKGhlYXJ0LCBsaWtlcyk7XG4gIH0pO1xuXG4gIGhlYXJ0SWNvbnMuZm9yRWFjaCgoaGVhcnQpID0+IHtcbiAgICBoYW5kbGVMaWtlQ2xpY2soaGVhcnQpO1xuICB9KTtcblxuICBjb25zdCBjb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1lbnRCdXR0b24nKTtcbiAgbGV0IHNlbGVjdGVkSWRDYXQ7XG4gIGlmIChjb21tZW50ICE9PSBudWxsKSB7XG4gICAgY29tbWVudC5mb3JFYWNoKChjbGlja2VkQnRuKSA9PiB7XG4gICAgICBjbGlja2VkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcFVwLWJnJykuc3R5bGUuZGlzcGxheSA9PT0gJycpIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wVXAtYmcnKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICB9XG4gICAgICAgIHNlbGVjdGVkSWRDYXQgPSBlLmN1cnJlbnRUYXJnZXQuY2xvc2VzdCgnYXJ0aWNsZScpLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICBnZXRTZWxlY3RlZE1lYWwoc2VsZWN0ZWRJZENhdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0TWVhbExpc3RzO1xuIiwiY29uc3QgZGlzcGxheU1lYWxMaXN0cyA9IChtZWFsKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZWFsLWl0ZW0tY29udGFpbmVyJyk7XG4gIGNvbnN0IGFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XG5cbiAgYXJ0aWNsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBtZWFsLmlkQ2F0ZWdvcnkpO1xuICBhcnRpY2xlLmlubmVySFRNTCA9IGBcbiAgPGRpdiBjbGFzcz1cIm1lYWwtaXRlbVwiPlxuICAgIDxkaXYgY2xhc3M9XCJtZWFsLWltZ1wiPlxuICAgICAgPGltZyBzcmM9XCIke21lYWwuc3RyQ2F0ZWdvcnlUaHVtYn1cIiBhbHQ9XCJtZWFsIGltYWdlc1wiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtZWFsLW5hbWVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLXRpdGxlXCI+XG4gICAgICA8aDM+JHttZWFsLnN0ckNhdGVnb3J5fTwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGlrZS1jb3VudGVyXCI+XG4gICAgICAgIDxpIGNsYXNzPVwidWlsIHVpbC1oZWFydCBoZWFydC1pY29uXCI+PC9pPlxuICAgICAgICA8cCBjbGFzcz1cImxpa2UtY29udGFpbmVyXCI+TG9hZGluZy4uLjwvcD5cbiAgICAgICAgPHA+TGlrZXM8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNvbW1lbnRCdXR0b25cIiBpZD1cImNvbW1lbnQtYnRuXCI+Q29tbWVudDwvYnV0dG9uPlxuICA8L2Rpdj5gO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYXJ0aWNsZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5TWVhbExpc3RzO1xuIiwiY29uc3QgdXJsID0gYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyR7cHJvY2Vzcy5lbnYuQVBJX0tFWX0vbGlrZXNgO1xuXG5jb25zdCBsaWtlR2V0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgJHt1cmx9YCxcbiAgKTtcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG5cbmNvbnN0IGxpa2VQb3N0RGF0YSA9IGFzeW5jIChtZWFsSWQpID0+IHtcbiAgYXdhaXQgZmV0Y2goYCR7dXJsfWAsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBtZWFsSWQsXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICB9KTtcbn07XG5cbmV4cG9ydCB7IGxpa2VHZXREYXRhLCBsaWtlUG9zdERhdGEgfTsiLCJjb25zdCBBUElfVVJMID0gJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9jYXRlZ29yaWVzLnBocCc7XG5cbmNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYCR7QVBJX1VSTH1gLFxuICAgIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgfSxcbiAgKTtcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldERhdGE7IiwiY29uc3QgaG9tZUl0ZW1Db3VudGVyID0gKGl0ZW0pID0+IGl0ZW0ubGVuZ3RoO1xuXG5leHBvcnQgZGVmYXVsdCBob21lSXRlbUNvdW50ZXI7IiwiaW1wb3J0IGdldERhdGEgZnJvbSAnLi9nZXRkYXRhLmpzJztcbmltcG9ydCB7IGdldENvbW1lbnREYXRhLCBhZGRDb21tZW50SW5wdXQgfSBmcm9tICcuL3Bvc3RDb21tZW50LmpzJztcblxuY29uc3QgcG9wVXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wVXAtYmcnKTtcbmNvbnN0IHBvcFVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmNvbnN0IGNyZWF0ZUNvbW1lbnRzID0gKGNvbW1lbnRzKSA9PiB7XG4gIGNvbnN0IGNvbW1lbnRNYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbW1lbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgY29tbWVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbW1lbnREaXYuY2xhc3NOYW1lID0gJ2NvbW1lbnQtaXRlbSc7XG4gICAgY29tbWVudERpdi5pbm5lckhUTUwgPSBgXG4gICAgIDxwIGNsYXNzPVwiY29tbWVudERhdGVcIj4ke2NvbW1lbnRzW2ldLmNyZWF0aW9uX2RhdGV9PC9wPlxuICAgICA8cCBjbGFzcz1cImNvbW1lbnRlck5hbWVcIj4ke2NvbW1lbnRzW2ldLnVzZXJuYW1lfTo8L3A+XG4gICAgIDxwIGNsYXNzPVwiY29tbWVudENvbnRlbnRcIj4ke2NvbW1lbnRzW2ldLmNvbW1lbnR9PC9wPlxuICAgICBgO1xuICAgIGNvbW1lbnRNYWluRGl2LmFwcGVuZENoaWxkKGNvbW1lbnREaXYpO1xuICB9XG59O1xuXG5jb25zdCBjb21tZW50Q291bnRlciA9IChjb21tZW50cykgPT4gKGNvbW1lbnRzLmxlbmd0aCA/IGNvbW1lbnRzLmxlbmd0aCA6IDApO1xuXG5jb25zdCBkaXNwbGF5U2VsZWN0ZWRNZWFsID0gKHNlbGVjdGVkTWVhbCwgY29tbWVudHMpID0+IHtcbiAgcG9wVXAuY2xhc3NOYW1lID0gJ3BvcFVwJztcbiAgcG9wVXAuaW5uZXJIVE1MID0gYFxuICA8YnV0dG9uIGNsYXNzPVwiY2xvc2VCdG5cIj5YPC9idXR0b24+XG4gIDxpbWcgY2xhc3M9XCJwb3BVcEltZ1wiIHNyYz1cIiR7c2VsZWN0ZWRNZWFsLnN0ckNhdGVnb3J5VGh1bWJ9XCIgYWx0PVwibWVhbCBpbWFnZVwiPlxuICA8aDIgY2xhc3M9XCJwb3BVcFRpdGxlXCI+JHtzZWxlY3RlZE1lYWwuc3RyQ2F0ZWdvcnl9PC9oMj5cbiAgPHAgY2xhc3M9XCJwb3BVcERpc2NyaXB0aW9uXCI+JHtzZWxlY3RlZE1lYWwuc3RyQ2F0ZWdvcnlEZXNjcmlwdGlvbn08L3A+XG4gIDxoMyBjbGFzcz1cImNvbW1lbnRDb3VudFwiPkNvbW1lbnRzPHNwYW4gaWQ9XCJjb21tZW50Q291bnRcIiBjbGFzcz1cImNvbW1lbnRDb3VudGVyXCI+KCR7Y29tbWVudENvdW50ZXIoY29tbWVudHMpfSk8L3NwYW4+PC9oMz5cbiAgPGRpdiBjbGFzcz1cImNvbW1lbnRcIj4gICAgIFxuICA8L2Rpdj5cbiAgPGgzIGNsYXNzPVwiYWRkQ29tbWVudFwiPkFkZCBhIGNvbW1lbnQ8L2gzPlxuICAgICAgPGZvcm0gY2xhc3M9XCJpbnB1dENvbW1lbnRcIiBpZD1cImlucHV0Q29tbWVudFwiIGFjdGlvbj1cIiNcIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIiByZXF1aXJlZD5cbiAgICAgICAgICA8dGV4dGFyZWEgdHlwZT1cInRleHRcIiBuYW1lPVwiY29tbWVudFwiIHBsYWNlaG9sZGVyPVwiWW91ciBpbnNpZ2h0c1wiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNvbW1lbnRCdG5cIj5Db21tZW50PC9idXR0b24+XG4gICAgICA8L2Zvcm0+IFxuICAgICAgPHNwYW4gaWQ9XCJzdWNjZXNzTXNnXCIgY2xhc3M9XCJtZXNzYWdlXCI+PC9zcGFuPmA7XG5cbiAgcG9wVXBDb250YWluZXIuYXBwZW5kQ2hpbGQocG9wVXApO1xuICBjcmVhdGVDb21tZW50cyhjb21tZW50cyk7XG59O1xuXG5jb25zdCBnZXRTZWxlY3RlZE1lYWwgPSBhc3luYyAoc2VsZWN0ZWRJZENhdCkgPT4ge1xuICBjb25zdCBzZWxlY3RlZE1lYWxzID0gYXdhaXQgZ2V0RGF0YSgpO1xuICBpZiAoc2VsZWN0ZWRJZENhdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgY29tbWVudE9iaiA9IGF3YWl0IGdldENvbW1lbnREYXRhKHNlbGVjdGVkSWRDYXQpO1xuICAgIGNvbnN0IHNlbGVjdGVkTWVhbCA9IHNlbGVjdGVkTWVhbHMuY2F0ZWdvcmllcy5maW5kKChtZWFsKSA9PiBtZWFsLmlkQ2F0ZWdvcnkgPT09IHNlbGVjdGVkSWRDYXQpO1xuICAgIGRpc3BsYXlTZWxlY3RlZE1lYWwoc2VsZWN0ZWRNZWFsLCBjb21tZW50T2JqKTtcbiAgfVxuXG4gIGNvbnN0IHJlbW92ZUFsbENoaWxkTm9kZXMgPSAocGFyZW50KSA9PiB7XG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZXNldENvbW1lbnRzID0gYXN5bmMgKGFsbENvbW1lbnRzKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnRDb3VudCcpLmlubmVySFRNTCA9IGAoJHtjb21tZW50Q291bnRlcihhbGxDb21tZW50cyl9KWA7XG4gICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudCcpKTtcbiAgICBjcmVhdGVDb21tZW50cyhhbGxDb21tZW50cyk7XG4gIH07XG5cbiAgY29uc3QgY29udGFpbldoaXRlU3BhY2UgPSAoeCkgPT4ge1xuICAgIGNvbnN0IHNwYWNlID0gbmV3IFJlZ0V4cCgvXlxccyQvKTtcbiAgICByZXR1cm4gc3BhY2UudGVzdCh4LmNoYXJBdCgwKSk7XG4gIH07XG5cbiAgY29uc3QgcmVnaXN0ZXJBZGROZXdDb21tZW50ID0gYXN5bmMgKHNlbGVjdGVkSWRDYXQpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0Q29tbWVudCcpICE9PSBudWxsKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRDb21tZW50JykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB1c2VyTmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0Q29tbWVudCcpLmVsZW1lbnRzLnVzZXJuYW1lO1xuICAgICAgICBjb25zdCBjb21tZW50SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRDb21tZW50JykuZWxlbWVudHMuY29tbWVudDtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZScpLmlubmVySFRNTCA9ICcgUGxlYXNlIHJlbW92ZSBhbnkgZW1wdHkgc3BhY2VzIGluIHRoZSBiZWdpbm5pbmcuICc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJykuc3R5bGUuY29sb3IgPSAncmVkJztcblxuICAgICAgICBpZiAoIWNvbnRhaW5XaGl0ZVNwYWNlKHVzZXJOYW1lSW5wdXQudmFsdWUpICYmICFjb250YWluV2hpdGVTcGFjZShjb21tZW50SW5wdXQudmFsdWUpKSB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UnKS5pbm5lckhUTUwgPSAnIENvbW1lbnRlZCBzdWNjZXNzZnVsbHkgJztcbiAgICAgICAgICBjb25zdCBuZXdDb21tZW50ID0ge1xuICAgICAgICAgICAgaXRlbV9pZDogc2VsZWN0ZWRJZENhdCxcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyTmFtZUlucHV0LnZhbHVlLnRyaW0oKSxcbiAgICAgICAgICAgIGNvbW1lbnQ6IGNvbW1lbnRJbnB1dC52YWx1ZS50cmltKCksXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGNvbnN0IGFsbENvbW1lbnRzID0gYXdhaXQgYWRkQ29tbWVudElucHV0KG5ld0NvbW1lbnQpO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dENvbW1lbnQnKS5yZXNldCgpO1xuICAgICAgICAgIHJlc2V0Q29tbWVudHMoYWxsQ29tbWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWNjZXNzTXNnJykuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH0sIDMwMDApO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJlZ2lzdGVyQWRkTmV3Q29tbWVudChzZWxlY3RlZElkQ2F0KTtcblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlQnRuJykgIT09IG51bGwpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2VCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAocG9wVXBDb250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gJ2ZsZXgnKSB7XG4gICAgICAgIHBvcFVwQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0U2VsZWN0ZWRNZWFsO1xuZXhwb3J0IHsgY29tbWVudENvdW50ZXIgfTsiLCJjb25zdCB1cmwgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJHtwcm9jZXNzLmVudi5BUElfS0VZfS9jb21tZW50c2A7XG5jb25zdCB1cmxHZXQgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJHtwcm9jZXNzLmVudi5BUElfS0VZfS9jb21tZW50cz9pdGVtX2lkPWA7XG5cbmNvbnN0IGdldENvbW1lbnREYXRhID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHVybFdpdGhJRCA9IHVybEdldCArIGlkO1xuICBpZiAoaWQgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgJHt1cmxXaXRoSUR9YCxcbiAgICApO1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5jb25zdCBhZGRDb21tZW50SW5wdXQgPSBhc3luYyAobmV3Q29tbWVudCkgPT4ge1xuICBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdDb21tZW50KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgIH0sXG4gIH0pO1xuICBjb25zdCBhbGxDb21tZW50cyA9IGF3YWl0IGdldENvbW1lbnREYXRhKG5ld0NvbW1lbnQuaXRlbV9pZCk7XG4gIHJldHVybiBhbGxDb21tZW50cztcbn07XG5cbmV4cG9ydCB7IGdldENvbW1lbnREYXRhLCBhZGRDb21tZW50SW5wdXQgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCBnZXRTZWxlY3RlZE1lYWwgZnJvbSAnLi9tb2R1bGVzL3BvcFVwRG9tLmpzJztcbmltcG9ydCB7IGdldENvbW1lbnREYXRhIH0gZnJvbSAnLi9tb2R1bGVzL3Bvc3RDb21tZW50LmpzJztcbmltcG9ydCBnZXRNZWFsTGlzdHMgZnJvbSAnLi9tb2R1bGVzL2Rpc3BsYXkuanMnO1xuaW1wb3J0IGhvbWVJdGVtQ291bnRlciBmcm9tICcuL21vZHVsZXMvaG9tZUl0ZW1zQ291bnRlci5qcyc7XG5pbXBvcnQgZ2V0RGF0YSBmcm9tICcuL21vZHVsZXMvZ2V0ZGF0YS5qcyc7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBnZXRNZWFsTGlzdHMoKTtcbiAgY29uc3QgaG9tZUNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1jb3VudGVyJyk7XG4gIGNvbnN0IGdldExpc3QgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbWVhbExpc3RzID0gYXdhaXQgZ2V0RGF0YSgpO1xuICAgIGNvbnN0IGNvdW50ZXJBcnJheSA9IG1lYWxMaXN0cy5jYXRlZ29yaWVzO1xuICAgIGhvbWVDb3VudGVyLnRleHRDb250ZW50ID0gaG9tZUl0ZW1Db3VudGVyKGNvdW50ZXJBcnJheSk7XG4gIH07XG4gIGdldExpc3QoKTtcbn0pO1xuXG5nZXRTZWxlY3RlZE1lYWwoKTtcblxuZ2V0Q29tbWVudERhdGEoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=