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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: 'Poppins', sans-serif;\n}\n\nhtml {\n  scroll-behavior: smooth;\n  font-size: 62.5%;\n}\n\nbody {\n  background-color: #e7ebe7;\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 1.6rem;\n  line-height: 1.6;\n  letter-spacing: 0.04rem;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #3fc979;\n  color: #fff;\n}\n\n.logo span {\n  font-size: 3rem;\n  font-weight: 700;\n  line-height: 1.7;\n  color: #fff;\n  margin-inline: 2rem;\n}\n\n.navmenu {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.navmenu li {\n  list-style: none;\n  margin: 2rem;\n}\n\n.navmenu li a {\n  text-decoration: none;\n  font-size: 2rem;\n  color: #fff;\n}\n\n.popUp-bg {\n  display: none;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  background-color: rgb(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100vh;\n  z-index: 100;\n}\n\n.popUp {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #3fc979;\n  width: 50rem;\n  height: 90%;\n  border: 2px solid green;\n  border-radius: 1rem;\n  padding: 2rem;\n  overflow-y: scroll;\n}\n\n.closeBtn {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: flex-end;\n  position: fixed;\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 5px;\n  border: none;\n  font-size: 1.6rem;\n  color: white;\n  background-color: rgb(2, 60, 37);\n}\n\n.popUpDiscription {\n  padding: 0 1.5rem;\n  font-size: 1.6rem;\n  line-height: 2.2rem;\n  text-align: center;\n}\n\n.commentCount {\n  margin-top: 2rem;\n  margin-bottom: 1rem;\n  font-size: 2.2rem;\n}\n\n.comment {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n}\n\n.comment-item {\n  display: flex;\n  flex-direction: row;\n  font-size: 1.4rem;\n  gap: 1rem;\n  border: 1px solid green;\n  border-radius: 5px;\n  padding: 0.5rem;\n  background-color: rgb(0, 0, 0, 0.1);\n  width: 80%;\n  line-height: 1.6rem;\n  margin: 0 auto 1rem auto;\n}\n\n.addComment {\n  margin-top: 2rem;\n  margin-bottom: 1rem;\n  font-size: 2.2rem;\n}\n\n.inputComment {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  width: 100%;\n}\n\n.inputComment input {\n  margin: 0 auto;\n  width: 60%;\n  height: 3rem;\n  padding: 1rem;\n  border-radius: 5px;\n  outline: none;\n  border: 1px solid green;\n  font-weight: 300;\n  background: rgba(255, 255, 255, 0.8);\n}\n\n.inputComment input::placeholder {\n  font-style: oblique;\n}\n\n.inputComment textarea {\n  margin: 0 auto;\n  width: 60%;\n  height: 10rem;\n  padding: 1rem;\n  border-radius: 5px;\n  outline: none;\n  border: 1px solid green;\n  resize: none;\n  font-weight: 300;\n  background: rgba(255, 255, 255, 0.8);\n}\n\n.inputComment textarea::placeholder {\n  font-style: oblique;\n}\n\n.commentBtn {\n  margin: 0 auto 1rem auto;\n  width: 25%;\n  height: 3.5rem;\n  border: 1px solid green;\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n  background: rgba(255, 255, 255, 0.8);\n  cursor: pointer;\n}\n\n.commentBtn:hover {\n  font-size: 1.4rem;\n  border: 2px solid green;\n  width: 26%;\n  height: 3.9rem;\n}\n\n.commentDate {\n  min-width: 8rem;\n}\n\n.message {\n  font-size: 1.4rem;\n  text-align: center;\n  border-radius: 5px;\n  background-color: rgb(0, 0, 0, 0.1);\n  width: 80%;\n}\n\n.popUpImg {\n  margin: 2rem auto;\n}\n\n.item-counter {\n  width: 100px;\n  height: 100px;\n  padding: 0.3rem 0.5rem;\n  background-color: #fff;\n  color: #3fc979;\n  font-size: 1.2rem;\n  border-radius: 100%;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n\nfooter {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: fixed;\n  bottom: 0;\n  text-align: center;\n  height: 5rem;\n  font-size: 2rem;\n  width: 100%;\n  background-color: #3fc979;\n  color: white;\n}\n\nsection {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2% 3rem;\n  width: 100%;\n  margin: 0 auto;\n}\n\n.section-title {\n  font-size: 2rem;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: 600;\n  text-align: center;\n  padding: 3rem 0 1rem 0;\n}\n\n#meal-item-container {\n  display: grid;\n  margin: 2rem 0 8rem 0;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 3rem;\n}\n\n.meal-item {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 36rem;\n  align-items: center;\n  border-radius: 1rem;\n  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.79);\n  padding: 3rem;\n  transition: 0.4s ease-in;\n}\n\n.meal-item:hover {\n  transform: translateY(-20px);\n}\n\n.meal-name {\n  display: flex;\n}\n\n.meal-title {\n  margin: 3rem;\n}\n\n.heart-icon {\n  font-size: 2.5rem;\n  background-color: #3fc979;\n  color: #fff;\n  width: 50px;\n  height: 50px;\n  padding: 0.4rem 0.7rem;\n  border-radius: 50%;\n  text-align: center;\n  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.79);\n}\n\n.heart-icon:hover {\n  background-color: #fff;\n  color: red;\n}\n\n.heart-icon:active {\n  background-color: red;\n  color: white;\n}\n\n.like-counter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n#comment-btn {\n  background-color: #3fc979;\n  color: #fff;\n  padding: 1.5rem 2rem;\n  font-size: 1.5rem;\n  border-radius: 1rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  display: inline-block;\n  cursor: pointer;\n  transition: 0.4s ease-in;\n  outline: 0;\n  border: 0;\n}\n\n#comment-btn:hover {\n  background-color: transparent;\n  color: #000;\n  border: 1px solid #3fc979;\n}\n\n@media screen and (max-width: 1250px) {\n  #meal-item-container {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  article {\n    width: 90%;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .popUp {\n    width: 45rem;\n  }\n\n  .commentBtn {\n    font-size: 1rem;\n  }\n\n  .commentBtn:hover {\n    font-size: 1.1rem;\n  }\n\n  .popUpTitle {\n    font-size: 3rem;\n  }\n\n  .commentCount {\n    font-size: 2rem;\n  }\n\n  .addComment {\n    font-size: 2rem;\n  }\n\n  .message {\n    font-size: 1.2rem;\n    padding: 0 3rem;\n  }\n\n  .popUpImg {\n    width: 70%;\n  }\n\n  .commentDate {\n    font-size: 1rem;\n    min-width: 6rem;\n  }\n\n  .commenterName {\n    font-size: 1.2rem;\n  }\n\n  .commentContent {\n    font-size: 1.2rem;\n  }\n\n  #meal-item-container {\n    grid-template-columns: 1fr;\n  }\n\n  footer {\n    font-size: 1.4rem;\n    padding: 0 7rem;\n  }\n\n  .navmenu li:nth-of-type(2) {\n    display: none;\n  }\n\n  .navmenu li:nth-of-type(3) {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 480px) {\n  .popUp {\n    width: 90%;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: 'Poppins', sans-serif;\n}\n\nhtml {\n  scroll-behavior: smooth;\n  font-size: 62.5%;\n}\n\nbody {\n  background-color: #e7ebe7;\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 1.6rem;\n  line-height: 1.6;\n  letter-spacing: 0.04rem;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #3fc979;\n  color: #fff;\n}\n\n.logo span {\n  font-size: 3rem;\n  font-weight: 700;\n  line-height: 1.7;\n  color: #fff;\n  margin-inline: 2rem;\n}\n\n.navmenu {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.navmenu li {\n  list-style: none;\n  margin: 2rem;\n}\n\n.navmenu li a {\n  text-decoration: none;\n  font-size: 2rem;\n  color: #fff;\n}\n\n.popUp-bg {\n  display: none;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  background-color: rgb(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100vh;\n  z-index: 100;\n}\n\n.popUp {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #3fc979;\n  width: 50rem;\n  height: 90%;\n  border: 2px solid green;\n  border-radius: 1rem;\n  padding: 2rem;\n  overflow-y: scroll;\n}\n\n.closeBtn {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-self: flex-end;\n  position: fixed;\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 5px;\n  border: none;\n  font-size: 1.6rem;\n  color: white;\n  background-color: rgb(2, 60, 37);\n}\n\n.popUpDiscription {\n  padding: 0 1.5rem;\n  font-size: 1.6rem;\n  line-height: 2.2rem;\n  text-align: center;\n}\n\n.commentCount {\n  margin-top: 2rem;\n  margin-bottom: 1rem;\n  font-size: 2.2rem;\n}\n\n.comment {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n}\n\n.comment-item {\n  display: flex;\n  flex-direction: row;\n  font-size: 1.4rem;\n  gap: 1rem;\n  border: 1px solid green;\n  border-radius: 5px;\n  padding: 0.5rem;\n  background-color: rgb(0, 0, 0, 0.1);\n  width: 80%;\n  line-height: 1.6rem;\n  margin: 0 auto 1rem auto;\n}\n\n.addComment {\n  margin-top: 2rem;\n  margin-bottom: 1rem;\n  font-size: 2.2rem;\n}\n\n.inputComment {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  width: 100%;\n}\n\n.inputComment input {\n  margin: 0 auto;\n  width: 60%;\n  height: 3rem;\n  padding: 1rem;\n  border-radius: 5px;\n  outline: none;\n  border: 1px solid green;\n  font-weight: 300;\n  background: rgba(255, 255, 255, 0.8);\n}\n\n.inputComment input::placeholder {\n  font-style: oblique;\n}\n\n.inputComment textarea {\n  margin: 0 auto;\n  width: 60%;\n  height: 10rem;\n  padding: 1rem;\n  border-radius: 5px;\n  outline: none;\n  border: 1px solid green;\n  resize: none;\n  font-weight: 300;\n  background: rgba(255, 255, 255, 0.8);\n}\n\n.inputComment textarea::placeholder {\n  font-style: oblique;\n}\n\n.commentBtn {\n  margin: 0 auto 1rem auto;\n  width: 25%;\n  height: 3.5rem;\n  border: 1px solid green;\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n  background: rgba(255, 255, 255, 0.8);\n  cursor: pointer;\n}\n\n.commentBtn:hover {\n  font-size: 1.4rem;\n  border: 2px solid green;\n  width: 26%;\n  height: 3.9rem;\n}\n\n.commentDate {\n  min-width: 8rem;\n}\n\n.message {\n  font-size: 1.4rem;\n  text-align: center;\n  border-radius: 5px;\n  background-color: rgb(0, 0, 0, 0.1);\n  width: 80%;\n}\n\n.popUpImg {\n  margin: 2rem auto;\n}\n\n.item-counter {\n  width: 100px;\n  height: 100px;\n  padding: 0.3rem 0.5rem;\n  background-color: #fff;\n  color: #3fc979;\n  font-size: 1.2rem;\n  border-radius: 100%;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n\nfooter {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: fixed;\n  bottom: 0;\n  text-align: center;\n  height: 5rem;\n  font-size: 2rem;\n  width: 100%;\n  background-color: #3fc979;\n  color: white;\n}\n\nsection {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2% 3rem;\n  width: 100%;\n  margin: 0 auto;\n}\n\n.section-title {\n  font-size: 2rem;\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: 600;\n  text-align: center;\n  padding: 3rem 0 1rem 0;\n}\n\n#meal-item-container {\n  display: grid;\n  margin: 2rem 0 8rem 0;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 3rem;\n}\n\n.meal-item {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 36rem;\n  align-items: center;\n  border-radius: 1rem;\n  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.79);\n  padding: 3rem;\n  transition: 0.4s ease-in;\n}\n\n.meal-item:hover {\n  transform: translateY(-20px);\n}\n\n.meal-name {\n  display: flex;\n}\n\n.meal-title {\n  margin: 3rem;\n}\n\n.heart-icon {\n  font-size: 2.5rem;\n  background-color: #3fc979;\n  color: #fff;\n  width: 50px;\n  height: 50px;\n  padding: 0.4rem 0.7rem;\n  border-radius: 50%;\n  text-align: center;\n  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.79);\n}\n\n.heart-icon:hover {\n  background-color: #fff;\n  color: red;\n}\n\n.heart-icon:active {\n  background-color: red;\n  color: white;\n}\n\n.like-counter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n#comment-btn {\n  background-color: #3fc979;\n  color: #fff;\n  padding: 1.5rem 2rem;\n  font-size: 1.5rem;\n  border-radius: 1rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  display: inline-block;\n  cursor: pointer;\n  transition: 0.4s ease-in;\n  outline: 0;\n  border: 0;\n}\n\n#comment-btn:hover {\n  background-color: transparent;\n  color: #000;\n  border: 1px solid #3fc979;\n}\n\n@media screen and (max-width: 1250px) {\n  #meal-item-container {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  article {\n    width: 90%;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .popUp {\n    width: 45rem;\n  }\n\n  .commentBtn {\n    font-size: 1rem;\n  }\n\n  .commentBtn:hover {\n    font-size: 1.1rem;\n  }\n\n  .popUpTitle {\n    font-size: 3rem;\n  }\n\n  .commentCount {\n    font-size: 2rem;\n  }\n\n  .addComment {\n    font-size: 2rem;\n  }\n\n  .message {\n    font-size: 1.2rem;\n    padding: 0 3rem;\n  }\n\n  .popUpImg {\n    width: 70%;\n  }\n\n  .commentDate {\n    font-size: 1rem;\n    min-width: 6rem;\n  }\n\n  .commenterName {\n    font-size: 1.2rem;\n  }\n\n  .commentContent {\n    font-size: 1.2rem;\n  }\n\n  #meal-item-container {\n    grid-template-columns: 1fr;\n  }\n\n  footer {\n    font-size: 1.4rem;\n    padding: 0 7rem;\n  }\n\n  .navmenu li:nth-of-type(2) {\n    display: none;\n  }\n\n  .navmenu li:nth-of-type(3) {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 480px) {\n  .popUp {\n    width: 90%;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLG9FQUFvRSwyQkFBMkIsY0FBYyxlQUFlLHVDQUF1QyxHQUFHLFVBQVUsNEJBQTRCLHFCQUFxQixHQUFHLFVBQVUsOEJBQThCLDhCQUE4QixzQkFBc0IscUJBQXFCLDRCQUE0QixHQUFHLFlBQVksa0JBQWtCLG1DQUFtQyx3QkFBd0IsOEJBQThCLGdCQUFnQixHQUFHLGdCQUFnQixvQkFBb0IscUJBQXFCLHFCQUFxQixnQkFBZ0Isd0JBQXdCLEdBQUcsY0FBYyxrQkFBa0Isa0NBQWtDLHdCQUF3QixHQUFHLGlCQUFpQixxQkFBcUIsaUJBQWlCLEdBQUcsbUJBQW1CLDBCQUEwQixvQkFBb0IsZ0JBQWdCLEdBQUcsZUFBZSxrQkFBa0Isd0JBQXdCLDRCQUE0Qix3QkFBd0Isb0JBQW9CLFdBQVcsd0NBQXdDLGdCQUFnQixrQkFBa0IsaUJBQWlCLEdBQUcsWUFBWSxrQkFBa0IsMkJBQTJCLHdCQUF3Qiw4QkFBOEIsaUJBQWlCLGdCQUFnQiw0QkFBNEIsd0JBQXdCLGtCQUFrQix1QkFBdUIsR0FBRyxlQUFlLGtCQUFrQix3QkFBd0IsNEJBQTRCLHlCQUF5QixvQkFBb0Isa0JBQWtCLG1CQUFtQix1QkFBdUIsaUJBQWlCLHNCQUFzQixpQkFBaUIscUNBQXFDLEdBQUcsdUJBQXVCLHNCQUFzQixzQkFBc0Isd0JBQXdCLHVCQUF1QixHQUFHLG1CQUFtQixxQkFBcUIsd0JBQXdCLHNCQUFzQixHQUFHLGNBQWMsa0JBQWtCLDRCQUE0QiwyQkFBMkIsZ0JBQWdCLEdBQUcsbUJBQW1CLGtCQUFrQix3QkFBd0Isc0JBQXNCLGNBQWMsNEJBQTRCLHVCQUF1QixvQkFBb0Isd0NBQXdDLGVBQWUsd0JBQXdCLDZCQUE2QixHQUFHLGlCQUFpQixxQkFBcUIsd0JBQXdCLHNCQUFzQixHQUFHLG1CQUFtQixrQkFBa0IsMkJBQTJCLGdCQUFnQixnQkFBZ0IsR0FBRyx5QkFBeUIsbUJBQW1CLGVBQWUsaUJBQWlCLGtCQUFrQix1QkFBdUIsa0JBQWtCLDRCQUE0QixxQkFBcUIseUNBQXlDLEdBQUcsc0NBQXNDLHdCQUF3QixHQUFHLDRCQUE0QixtQkFBbUIsZUFBZSxrQkFBa0Isa0JBQWtCLHVCQUF1QixrQkFBa0IsNEJBQTRCLGlCQUFpQixxQkFBcUIseUNBQXlDLEdBQUcseUNBQXlDLHdCQUF3QixHQUFHLGlCQUFpQiw2QkFBNkIsZUFBZSxtQkFBbUIsNEJBQTRCLG9CQUFvQiwwQkFBMEIseUNBQXlDLG9CQUFvQixHQUFHLHVCQUF1QixzQkFBc0IsNEJBQTRCLGVBQWUsbUJBQW1CLEdBQUcsa0JBQWtCLG9CQUFvQixHQUFHLGNBQWMsc0JBQXNCLHVCQUF1Qix1QkFBdUIsd0NBQXdDLGVBQWUsR0FBRyxlQUFlLHNCQUFzQixHQUFHLG1CQUFtQixpQkFBaUIsa0JBQWtCLDJCQUEyQiwyQkFBMkIsbUJBQW1CLHNCQUFzQix3QkFBd0IsNkNBQTZDLEdBQUcsWUFBWSxrQkFBa0IsMkJBQTJCLDRCQUE0QixvQkFBb0IsY0FBYyx1QkFBdUIsaUJBQWlCLG9CQUFvQixnQkFBZ0IsOEJBQThCLGlCQUFpQixHQUFHLGFBQWEsa0JBQWtCLDJCQUEyQix3QkFBd0IscUJBQXFCLGdCQUFnQixtQkFBbUIsR0FBRyxvQkFBb0Isb0JBQW9CLDhCQUE4QixxQkFBcUIsdUJBQXVCLDJCQUEyQixHQUFHLDBCQUEwQixrQkFBa0IsMEJBQTBCLDBDQUEwQyxjQUFjLEdBQUcsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLGlCQUFpQix3QkFBd0Isd0JBQXdCLHFEQUFxRCxrQkFBa0IsNkJBQTZCLEdBQUcsc0JBQXNCLGlDQUFpQyxHQUFHLGdCQUFnQixrQkFBa0IsR0FBRyxpQkFBaUIsaUJBQWlCLEdBQUcsaUJBQWlCLHNCQUFzQiw4QkFBOEIsZ0JBQWdCLGdCQUFnQixpQkFBaUIsMkJBQTJCLHVCQUF1Qix1QkFBdUIscURBQXFELEdBQUcsdUJBQXVCLDJCQUEyQixlQUFlLEdBQUcsd0JBQXdCLDBCQUEwQixpQkFBaUIsR0FBRyxtQkFBbUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsY0FBYyxHQUFHLGtCQUFrQiw4QkFBOEIsZ0JBQWdCLHlCQUF5QixzQkFBc0Isd0JBQXdCLDZDQUE2QywwQkFBMEIsb0JBQW9CLDZCQUE2QixlQUFlLGNBQWMsR0FBRyx3QkFBd0Isa0NBQWtDLGdCQUFnQiw4QkFBOEIsR0FBRywyQ0FBMkMsMEJBQTBCLHFDQUFxQyxLQUFLLGVBQWUsaUJBQWlCLEtBQUssR0FBRywwQ0FBMEMsWUFBWSxtQkFBbUIsS0FBSyxtQkFBbUIsc0JBQXNCLEtBQUsseUJBQXlCLHdCQUF3QixLQUFLLG1CQUFtQixzQkFBc0IsS0FBSyxxQkFBcUIsc0JBQXNCLEtBQUssbUJBQW1CLHNCQUFzQixLQUFLLGdCQUFnQix3QkFBd0Isc0JBQXNCLEtBQUssaUJBQWlCLGlCQUFpQixLQUFLLG9CQUFvQixzQkFBc0Isc0JBQXNCLEtBQUssc0JBQXNCLHdCQUF3QixLQUFLLHVCQUF1Qix3QkFBd0IsS0FBSyw0QkFBNEIsaUNBQWlDLEtBQUssY0FBYyx3QkFBd0Isc0JBQXNCLEtBQUssa0NBQWtDLG9CQUFvQixLQUFLLGtDQUFrQyxvQkFBb0IsS0FBSyxHQUFHLDBDQUEwQyxZQUFZLGlCQUFpQixLQUFLLEdBQUcsU0FBUyxrRkFBa0YsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxP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Q0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQytCO0FBQ007QUFDVjtBQUNZO0FBQ2pCOztBQUUzQztBQUNBLEVBQUUsK0RBQVk7QUFDZDtBQUNBO0FBQ0EsNEJBQTRCLCtEQUFPO0FBQ25DO0FBQ0EsOEJBQThCLHdFQUFlO0FBQzdDO0FBQ0E7QUFDQSxDQUFDOztBQUVELGdFQUFlOztBQUVmLHVFQUFjLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0LXdpdGgtd2VicGFjay8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC13aXRoLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC13aXRoLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0LXdpdGgtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0LXdpdGgtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC13aXRoLXdlYnBhY2svLi9zcmMvbW9kdWxlcy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC13aXRoLXdlYnBhY2svLi9zcmMvbW9kdWxlcy9kaXNwbGF5TWVhbC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vc3JjL21vZHVsZXMvZ2V0TGlrZURhdGEuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0LXdpdGgtd2VicGFjay8uL3NyYy9tb2R1bGVzL2dldGRhdGEuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0LXdpdGgtd2VicGFjay8uL3NyYy9tb2R1bGVzL2hvbWVJdGVtc0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0LXdpdGgtd2VicGFjay8uL3NyYy9tb2R1bGVzL3BvcFVwRG9tLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC13aXRoLXdlYnBhY2svLi9zcmMvbW9kdWxlcy9wb3N0Q29tbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3Qtd2l0aC13ZWJwYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC13aXRoLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0LXdpdGgtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0LXdpdGgtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC13aXRoLXdlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3Qtd2l0aC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sIHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlYmU3O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA0cmVtO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ZjOTc5O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5sb2dvIHNwYW4ge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XFxuICBjb2xvcjogI2ZmZjtcXG4gIG1hcmdpbi1pbmxpbmU6IDJyZW07XFxufVxcblxcbi5uYXZtZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXZtZW51IGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDJyZW07XFxufVxcblxcbi5uYXZtZW51IGxpIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5wb3BVcC1iZyB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjUpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4ucG9wVXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmYzk3OTtcXG4gIHdpZHRoOiA1MHJlbTtcXG4gIGhlaWdodDogOTAlO1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLmNsb3NlQnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAyLjVyZW07XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDYwLCAzNyk7XFxufVxcblxcbi5wb3BVcERpc2NyaXB0aW9uIHtcXG4gIHBhZGRpbmc6IDAgMS41cmVtO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBsaW5lLWhlaWdodDogMi4ycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29tbWVudENvdW50IHtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgZm9udC1zaXplOiAyLjJyZW07XFxufVxcblxcbi5jb21tZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbW1lbnQtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZ2FwOiAxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC4xKTtcXG4gIHdpZHRoOiA4MCU7XFxuICBsaW5lLWhlaWdodDogMS42cmVtO1xcbiAgbWFyZ2luOiAwIGF1dG8gMXJlbSBhdXRvO1xcbn1cXG5cXG4uYWRkQ29tbWVudCB7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xcbn1cXG5cXG4uaW5wdXRDb21tZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxLjVyZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmlucHV0Q29tbWVudCBpbnB1dCB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiA2MCU7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG59XFxuXFxuLmlucHV0Q29tbWVudCBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXG59XFxuXFxuLmlucHV0Q29tbWVudCB0ZXh0YXJlYSB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiA2MCU7XFxuICBoZWlnaHQ6IDEwcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxufVxcblxcbi5pbnB1dENvbW1lbnQgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxufVxcblxcbi5jb21tZW50QnRuIHtcXG4gIG1hcmdpbjogMCBhdXRvIDFyZW0gYXV0bztcXG4gIHdpZHRoOiAyNSU7XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29tbWVudEJ0bjpob3ZlciB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xcbiAgd2lkdGg6IDI2JTtcXG4gIGhlaWdodDogMy45cmVtO1xcbn1cXG5cXG4uY29tbWVudERhdGUge1xcbiAgbWluLXdpZHRoOiA4cmVtO1xcbn1cXG5cXG4ubWVzc2FnZSB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjEpO1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLnBvcFVwSW1nIHtcXG4gIG1hcmdpbjogMnJlbSBhdXRvO1xcbn1cXG5cXG4uaXRlbS1jb3VudGVyIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiAjM2ZjOTc5O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDVyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZmM5Nzk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMiUgM3JlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5zZWN0aW9uLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogM3JlbSAwIDFyZW0gMDtcXG59XFxuXFxuI21lYWwtaXRlbS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG1hcmdpbjogMnJlbSAwIDhyZW0gMDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBnYXA6IDNyZW07XFxufVxcblxcbi5tZWFsLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAzNnJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYm94LXNoYWRvdzogMCA0cHggMjFweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuNzkpO1xcbiAgcGFkZGluZzogM3JlbTtcXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbjtcXG59XFxuXFxuLm1lYWwtaXRlbTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xcbn1cXG5cXG4ubWVhbC1uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tZWFsLXRpdGxlIHtcXG4gIG1hcmdpbjogM3JlbTtcXG59XFxuXFxuLmhlYXJ0LWljb24ge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ZjOTc5O1xcbiAgY29sb3I6ICNmZmY7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHBhZGRpbmc6IDAuNHJlbSAwLjdyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiAwIDRweCAyMXB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC43OSk7XFxufVxcblxcbi5oZWFydC1pY29uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uaGVhcnQtaWNvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubGlrZS1jb3VudGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbiNjb21tZW50LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ZjOTc5O1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAxLjVyZW0gMnJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UtaW47XFxuICBvdXRsaW5lOiAwO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG4jY29tbWVudC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogIzAwMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzZmM5Nzk7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNTBweCkge1xcbiAgI21lYWwtaXRlbS1jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICB9XFxuXFxuICBhcnRpY2xlIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5wb3BVcCB7XFxuICAgIHdpZHRoOiA0NXJlbTtcXG4gIH1cXG5cXG4gIC5jb21tZW50QnRuIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcblxcbiAgLmNvbW1lbnRCdG46aG92ZXIge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gIH1cXG5cXG4gIC5wb3BVcFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgfVxcblxcbiAgLmNvbW1lbnRDb3VudCB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG5cXG4gIC5hZGRDb21tZW50IHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcblxcbiAgLm1lc3NhZ2Uge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgcGFkZGluZzogMCAzcmVtO1xcbiAgfVxcblxcbiAgLnBvcFVwSW1nIHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gIH1cXG5cXG4gIC5jb21tZW50RGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbWluLXdpZHRoOiA2cmVtO1xcbiAgfVxcblxcbiAgLmNvbW1lbnRlck5hbWUge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gIH1cXG5cXG4gIC5jb21tZW50Q29udGVudCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcblxcbiAgI21lYWwtaXRlbS1jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBwYWRkaW5nOiAwIDdyZW07XFxuICB9XFxuXFxuICAubmF2bWVudSBsaTpudGgtb2YtdHlwZSgyKSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAubmF2bWVudSBsaTpudGgtb2YtdHlwZSgzKSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAucG9wVXAge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8v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QWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsd0NBQXdDO0VBQ3hDLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFO0lBQ0UsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGVBQWU7SUFDZixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sIHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlYmU3O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA0cmVtO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ZjOTc5O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5sb2dvIHNwYW4ge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XFxuICBjb2xvcjogI2ZmZjtcXG4gIG1hcmdpbi1pbmxpbmU6IDJyZW07XFxufVxcblxcbi5uYXZtZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXZtZW51IGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDJyZW07XFxufVxcblxcbi5uYXZtZW51IGxpIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5wb3BVcC1iZyB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjUpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4ucG9wVXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmYzk3OTtcXG4gIHdpZHRoOiA1MHJlbTtcXG4gIGhlaWdodDogOTAlO1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLmNsb3NlQnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAyLjVyZW07XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDYwLCAzNyk7XFxufVxcblxcbi5wb3BVcERpc2NyaXB0aW9uIHtcXG4gIHBhZGRpbmc6IDAgMS41cmVtO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBsaW5lLWhlaWdodDogMi4ycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29tbWVudENvdW50IHtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgZm9udC1zaXplOiAyLjJyZW07XFxufVxcblxcbi5jb21tZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbW1lbnQtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZ2FwOiAxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC4xKTtcXG4gIHdpZHRoOiA4MCU7XFxuICBsaW5lLWhlaWdodDogMS42cmVtO1xcbiAgbWFyZ2luOiAwIGF1dG8gMXJlbSBhdXRvO1xcbn1cXG5cXG4uYWRkQ29tbWVudCB7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xcbn1cXG5cXG4uaW5wdXRDb21tZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxLjVyZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmlucHV0Q29tbWVudCBpbnB1dCB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiA2MCU7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG59XFxuXFxuLmlucHV0Q29tbWVudCBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXG59XFxuXFxuLmlucHV0Q29tbWVudCB0ZXh0YXJlYSB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiA2MCU7XFxuICBoZWlnaHQ6IDEwcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxufVxcblxcbi5pbnB1dENvbW1lbnQgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxufVxcblxcbi5jb21tZW50QnRuIHtcXG4gIG1hcmdpbjogMCBhdXRvIDFyZW0gYXV0bztcXG4gIHdpZHRoOiAyNSU7XFxuICBoZWlnaHQ6IDMuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29tbWVudEJ0bjpob3ZlciB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xcbiAgd2lkdGg6IDI2JTtcXG4gIGhlaWdodDogMy45cmVtO1xcbn1cXG5cXG4uY29tbWVudERhdGUge1xcbiAgbWluLXdpZHRoOiA4cmVtO1xcbn1cXG5cXG4ubWVzc2FnZSB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjEpO1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLnBvcFVwSW1nIHtcXG4gIG1hcmdpbjogMnJlbSBhdXRvO1xcbn1cXG5cXG4uaXRlbS1jb3VudGVyIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiAjM2ZjOTc5O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDVyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZmM5Nzk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMiUgM3JlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5zZWN0aW9uLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogM3JlbSAwIDFyZW0gMDtcXG59XFxuXFxuI21lYWwtaXRlbS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG1hcmdpbjogMnJlbSAwIDhyZW0gMDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBnYXA6IDNyZW07XFxufVxcblxcbi5tZWFsLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAzNnJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYm94LXNoYWRvdzogMCA0cHggMjFweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuNzkpO1xcbiAgcGFkZGluZzogM3JlbTtcXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbjtcXG59XFxuXFxuLm1lYWwtaXRlbTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xcbn1cXG5cXG4ubWVhbC1uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tZWFsLXRpdGxlIHtcXG4gIG1hcmdpbjogM3JlbTtcXG59XFxuXFxuLmhlYXJ0LWljb24ge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ZjOTc5O1xcbiAgY29sb3I6ICNmZmY7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHBhZGRpbmc6IDAuNHJlbSAwLjdyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiAwIDRweCAyMXB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC43OSk7XFxufVxcblxcbi5oZWFydC1pY29uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uaGVhcnQtaWNvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubGlrZS1jb3VudGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbiNjb21tZW50LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ZjOTc5O1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAxLjVyZW0gMnJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UtaW47XFxuICBvdXRsaW5lOiAwO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG4jY29tbWVudC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogIzAwMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzZmM5Nzk7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNTBweCkge1xcbiAgI21lYWwtaXRlbS1jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICB9XFxuXFxuICBhcnRpY2xlIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5wb3BVcCB7XFxuICAgIHdpZHRoOiA0NXJlbTtcXG4gIH1cXG5cXG4gIC5jb21tZW50QnRuIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcblxcbiAgLmNvbW1lbnRCdG46aG92ZXIge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gIH1cXG5cXG4gIC5wb3BVcFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgfVxcblxcbiAgLmNvbW1lbnRDb3VudCB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG5cXG4gIC5hZGRDb21tZW50IHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcblxcbiAgLm1lc3NhZ2Uge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgcGFkZGluZzogMCAzcmVtO1xcbiAgfVxcblxcbiAgLnBvcFVwSW1nIHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gIH1cXG5cXG4gIC5jb21tZW50RGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbWluLXdpZHRoOiA2cmVtO1xcbiAgfVxcblxcbiAgLmNvbW1lbnRlck5hbWUge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gIH1cXG5cXG4gIC5jb21tZW50Q29udGVudCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcblxcbiAgI21lYWwtaXRlbS1jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBwYWRkaW5nOiAwIDdyZW07XFxuICB9XFxuXFxuICAubmF2bWVudSBsaTpudGgtb2YtdHlwZSgyKSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAubmF2bWVudSBsaTpudGgtb2YtdHlwZSgzKSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAucG9wVXAge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBnZXREYXRhIGZyb20gJy4vZ2V0ZGF0YS5qcyc7XG5pbXBvcnQgZGlzcGxheU1lYWxMaXN0cyBmcm9tICcuL2Rpc3BsYXlNZWFsLmpzJztcbmltcG9ydCB7IGxpa2VHZXREYXRhLCBsaWtlUG9zdERhdGEgfSBmcm9tICcuL2dldExpa2VEYXRhLmpzJztcbmltcG9ydCBnZXRTZWxlY3RlZE1lYWwgZnJvbSAnLi9wb3BVcERvbS5qcyc7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZWFsLWl0ZW0tY29udGFpbmVyJyk7XG5cbmNvbnN0IHNldExpa2VzID0gKGhlYXJ0LCBsaWtlcykgPT4ge1xuICBjb25zdCBpZCA9IGhlYXJ0LmNsb3Nlc3QoJ2FydGljbGUnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgY29uc3QgaXRlbSA9IGxpa2VzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaXRlbV9pZCA9PT0gaWQpO1xuICBoZWFydC50ZXh0Q29udGVudCA9IGl0ZW0ubGlrZXM7XG59O1xuXG5jb25zdCBoYW5kbGVMaWtlQ2xpY2sgPSAoaGVhcnQpID0+IHtcbiAgY29uc3QgaWQgPSBoZWFydC5jbG9zZXN0KCdhcnRpY2xlJykuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gIGhlYXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGxpa2VQb3N0RGF0YShpZCk7XG4gICAgY29uc3QgbGlrZXMgPSBhd2FpdCBsaWtlR2V0RGF0YSgpO1xuICAgIGNvbnN0IGhlYXJ0cyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZS1jb250YWluZXInKTtcbiAgICBoZWFydHMuZm9yRWFjaCgoaGVhcnQpID0+IHtcbiAgICAgIHNldExpa2VzKGhlYXJ0LCBsaWtlcyk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgZ2V0TWVhbExpc3RzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBtZWFsTGlzdHMgPSBhd2FpdCBnZXREYXRhKCk7XG4gIGNvbnN0IGxpa2VzID0gYXdhaXQgbGlrZUdldERhdGEoKTtcblxuICBtZWFsTGlzdHMuY2F0ZWdvcmllcy5mb3JFYWNoKChtZWFsKSA9PiB7XG4gICAgZGlzcGxheU1lYWxMaXN0cyhtZWFsKTtcbiAgfSk7XG5cbiAgY29uc3QgaGVhcnRzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlLWNvbnRhaW5lcicpO1xuICBjb25zdCBoZWFydEljb25zID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFydC1pY29uJyk7XG5cbiAgaGVhcnRzLmZvckVhY2goKGhlYXJ0KSA9PiB7XG4gICAgc2V0TGlrZXMoaGVhcnQsIGxpa2VzKTtcbiAgfSk7XG5cbiAgaGVhcnRJY29ucy5mb3JFYWNoKChoZWFydCkgPT4ge1xuICAgIGhhbmRsZUxpa2VDbGljayhoZWFydCk7XG4gIH0pO1xuXG4gIGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudEJ1dHRvbicpO1xuICBsZXQgc2VsZWN0ZWRJZENhdDtcbiAgaWYgKGNvbW1lbnQgIT09IG51bGwpIHtcbiAgICBjb21tZW50LmZvckVhY2goKGNsaWNrZWRCdG4pID0+IHtcbiAgICAgIGNsaWNrZWRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wVXAtYmcnKS5zdHlsZS5kaXNwbGF5ID09PSAnJykge1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3BVcC1iZycpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZWN0ZWRJZENhdCA9IGUuY3VycmVudFRhcmdldC5jbG9zZXN0KCdhcnRpY2xlJykuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgIGdldFNlbGVjdGVkTWVhbChzZWxlY3RlZElkQ2F0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRNZWFsTGlzdHM7XG4iLCJjb25zdCBkaXNwbGF5TWVhbExpc3RzID0gKG1lYWwpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lYWwtaXRlbS1jb250YWluZXInKTtcbiAgY29uc3QgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcblxuICBhcnRpY2xlLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIG1lYWwuaWRDYXRlZ29yeSk7XG4gIGFydGljbGUuaW5uZXJIVE1MID0gYFxuICA8ZGl2IGNsYXNzPVwibWVhbC1pdGVtXCI+XG4gICAgPGRpdiBjbGFzcz1cIm1lYWwtaW1nXCI+XG4gICAgICA8aW1nIHNyYz1cIiR7bWVhbC5zdHJDYXRlZ29yeVRodW1ifVwiIGFsdD1cIm1lYWwgaW1hZ2VzXCI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm1lYWwtbmFtZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtdGl0bGVcIj5cbiAgICAgIDxoMz4ke21lYWwuc3RyQ2F0ZWdvcnl9PC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsaWtlLWNvdW50ZXJcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJ1aWwgdWlsLWhlYXJ0IGhlYXJ0LWljb25cIj48L2k+XG4gICAgICAgIDxwIGNsYXNzPVwibGlrZS1jb250YWluZXJcIj5Mb2FkaW5nLi4uPC9wPlxuICAgICAgICA8cD5MaWtlczwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY29tbWVudEJ1dHRvblwiIGlkPVwiY29tbWVudC1idG5cIj5Db21tZW50PC9idXR0b24+XG4gIDwvZGl2PmA7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhcnRpY2xlKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlNZWFsTGlzdHM7XG4iLCJjb25zdCB1cmwgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJHtwcm9jZXNzLmVudi5BUElfS0VZfS9saWtlc2A7XG5cbmNvbnN0IGxpa2VHZXREYXRhID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGAke3VybH1gLFxuICApO1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcblxuY29uc3QgbGlrZVBvc3REYXRhID0gYXN5bmMgKG1lYWxJZCkgPT4ge1xuICBhd2FpdCBmZXRjaChgJHt1cmx9YCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IG1lYWxJZCxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgIH0sXG4gIH0pO1xufTtcblxuZXhwb3J0IHsgbGlrZUdldERhdGEsIGxpa2VQb3N0RGF0YSB9OyIsImNvbnN0IEFQSV9VUkwgPSAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2NhdGVnb3JpZXMucGhwJztcblxuY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgJHtBUElfVVJMfWAsXG4gICAge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICB9LFxuICApO1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0RGF0YTsiLCJjb25zdCBob21lSXRlbUNvdW50ZXIgPSAoaXRlbSkgPT4gaXRlbS5sZW5ndGg7XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWVJdGVtQ291bnRlcjsiLCJpbXBvcnQgZ2V0RGF0YSBmcm9tICcuL2dldGRhdGEuanMnO1xuaW1wb3J0IHsgZ2V0Q29tbWVudERhdGEsIGFkZENvbW1lbnRJbnB1dCB9IGZyb20gJy4vcG9zdENvbW1lbnQuanMnO1xuXG5jb25zdCBwb3BVcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3BVcC1iZycpO1xuY29uc3QgcG9wVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuY29uc3QgY3JlYXRlQ29tbWVudHMgPSAoY29tbWVudHMpID0+IHtcbiAgY29uc3QgY29tbWVudE1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudCcpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29tbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBjb21tZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29tbWVudERpdi5jbGFzc05hbWUgPSAnY29tbWVudC1pdGVtJztcbiAgICBjb21tZW50RGl2LmlubmVySFRNTCA9IGBcbiAgICAgPHAgY2xhc3M9XCJjb21tZW50RGF0ZVwiPiR7Y29tbWVudHNbaV0uY3JlYXRpb25fZGF0ZX08L3A+XG4gICAgIDxwIGNsYXNzPVwiY29tbWVudGVyTmFtZVwiPiR7Y29tbWVudHNbaV0udXNlcm5hbWV9OjwvcD5cbiAgICAgPHAgY2xhc3M9XCJjb21tZW50Q29udGVudFwiPiR7Y29tbWVudHNbaV0uY29tbWVudH08L3A+XG4gICAgIGA7XG4gICAgY29tbWVudE1haW5EaXYuYXBwZW5kQ2hpbGQoY29tbWVudERpdik7XG4gIH1cbn07XG5cbmNvbnN0IGNvbW1lbnRDb3VudGVyID0gKGNvbW1lbnRzKSA9PiAoY29tbWVudHMubGVuZ3RoID8gY29tbWVudHMubGVuZ3RoIDogMCk7XG5cbmNvbnN0IGRpc3BsYXlTZWxlY3RlZE1lYWwgPSAoc2VsZWN0ZWRNZWFsLCBjb21tZW50cykgPT4ge1xuICBwb3BVcC5jbGFzc05hbWUgPSAncG9wVXAnO1xuICBwb3BVcC5pbm5lckhUTUwgPSBgXG4gIDxidXR0b24gY2xhc3M9XCJjbG9zZUJ0blwiPlg8L2J1dHRvbj5cbiAgPGltZyBjbGFzcz1cInBvcFVwSW1nXCIgc3JjPVwiJHtzZWxlY3RlZE1lYWwuc3RyQ2F0ZWdvcnlUaHVtYn1cIiBhbHQ9XCJtZWFsIGltYWdlXCI+XG4gIDxoMiBjbGFzcz1cInBvcFVwVGl0bGVcIj4ke3NlbGVjdGVkTWVhbC5zdHJDYXRlZ29yeX08L2gyPlxuICA8cCBjbGFzcz1cInBvcFVwRGlzY3JpcHRpb25cIj4ke3NlbGVjdGVkTWVhbC5zdHJDYXRlZ29yeURlc2NyaXB0aW9ufTwvcD5cbiAgPGgzIGNsYXNzPVwiY29tbWVudENvdW50XCI+Q29tbWVudHM8c3BhbiBpZD1cImNvbW1lbnRDb3VudFwiIGNsYXNzPVwiY29tbWVudENvdW50ZXJcIj4oJHtjb21tZW50Q291bnRlcihjb21tZW50cyl9KTwvc3Bhbj48L2gzPlxuICA8ZGl2IGNsYXNzPVwiY29tbWVudFwiPiAgICAgXG4gIDwvZGl2PlxuICA8aDMgY2xhc3M9XCJhZGRDb21tZW50XCI+QWRkIGEgY29tbWVudDwvaDM+XG4gICAgICA8Zm9ybSBjbGFzcz1cImlucHV0Q29tbWVudFwiIGlkPVwiaW5wdXRDb21tZW50XCIgYWN0aW9uPVwiI1wiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiIHJlcXVpcmVkPlxuICAgICAgICAgIDx0ZXh0YXJlYSB0eXBlPVwidGV4dFwiIG5hbWU9XCJjb21tZW50XCIgcGxhY2Vob2xkZXI9XCJZb3VyIGluc2lnaHRzXCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY29tbWVudEJ0blwiPkNvbW1lbnQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT4gXG4gICAgICA8c3BhbiBpZD1cInN1Y2Nlc3NNc2dcIiBjbGFzcz1cIm1lc3NhZ2VcIj48L3NwYW4+YDtcblxuICBwb3BVcENvbnRhaW5lci5hcHBlbmRDaGlsZChwb3BVcCk7XG4gIGNyZWF0ZUNvbW1lbnRzKGNvbW1lbnRzKTtcbn07XG5cbmNvbnN0IGdldFNlbGVjdGVkTWVhbCA9IGFzeW5jIChzZWxlY3RlZElkQ2F0KSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkTWVhbHMgPSBhd2FpdCBnZXREYXRhKCk7XG4gIGlmIChzZWxlY3RlZElkQ2F0ICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBjb21tZW50T2JqID0gYXdhaXQgZ2V0Q29tbWVudERhdGEoc2VsZWN0ZWRJZENhdCk7XG4gICAgY29uc3Qgc2VsZWN0ZWRNZWFsID0gc2VsZWN0ZWRNZWFscy5jYXRlZ29yaWVzLmZpbmQoKG1lYWwpID0+IG1lYWwuaWRDYXRlZ29yeSA9PT0gc2VsZWN0ZWRJZENhdCk7XG4gICAgZGlzcGxheVNlbGVjdGVkTWVhbChzZWxlY3RlZE1lYWwsIGNvbW1lbnRPYmopO1xuICB9XG5cbiAgY29uc3QgcmVtb3ZlQWxsQ2hpbGROb2RlcyA9IChwYXJlbnQpID0+IHtcbiAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlc2V0Q29tbWVudHMgPSBhc3luYyAoYWxsQ29tbWVudHMpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudENvdW50JykuaW5uZXJIVE1MID0gYCgke2NvbW1lbnRDb3VudGVyKGFsbENvbW1lbnRzKX0pYDtcbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50JykpO1xuICAgIGNyZWF0ZUNvbW1lbnRzKGFsbENvbW1lbnRzKTtcbiAgfTtcblxuICBjb25zdCBjb250YWluV2hpdGVTcGFjZSA9ICh4KSA9PiB7XG4gICAgY29uc3Qgc3BhY2UgPSBuZXcgUmVnRXhwKC9eXFxzJC8pO1xuICAgIHJldHVybiBzcGFjZS50ZXN0KHguY2hhckF0KDApKTtcbiAgfTtcblxuICBjb25zdCByZWdpc3RlckFkZE5ld0NvbW1lbnQgPSBhc3luYyAoc2VsZWN0ZWRJZENhdCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRDb21tZW50JykgIT09IG51bGwpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dENvbW1lbnQnKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHVzZXJOYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRDb21tZW50JykuZWxlbWVudHMudXNlcm5hbWU7XG4gICAgICAgIGNvbnN0IGNvbW1lbnRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dENvbW1lbnQnKS5lbGVtZW50cy5jb21tZW50O1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJykuaW5uZXJIVE1MID0gJyBQbGVhc2UgcmVtb3ZlIGFueSBlbXB0eSBzcGFjZXMgaW4gdGhlIGJlZ2lubmluZy4gJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UnKS5zdHlsZS5jb2xvciA9ICdyZWQnO1xuXG4gICAgICAgIGlmICghY29udGFpbldoaXRlU3BhY2UodXNlck5hbWVJbnB1dC52YWx1ZSkgJiYgIWNvbnRhaW5XaGl0ZVNwYWNlKGNvbW1lbnRJbnB1dC52YWx1ZSkpIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZScpLmlubmVySFRNTCA9ICcgQ29tbWVudGVkIHN1Y2Nlc3NmdWxseSAnO1xuICAgICAgICAgIGNvbnN0IG5ld0NvbW1lbnQgPSB7XG4gICAgICAgICAgICBpdGVtX2lkOiBzZWxlY3RlZElkQ2F0LFxuICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXJOYW1lSW5wdXQudmFsdWUudHJpbSgpLFxuICAgICAgICAgICAgY29tbWVudDogY29tbWVudElucHV0LnZhbHVlLnRyaW0oKSxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgY29uc3QgYWxsQ29tbWVudHMgPSBhd2FpdCBhZGRDb21tZW50SW5wdXQobmV3Q29tbWVudCk7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0Q29tbWVudCcpLnJlc2V0KCk7XG4gICAgICAgICAgcmVzZXRDb21tZW50cyhhbGxDb21tZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Y2Nlc3NNc2cnKS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmVnaXN0ZXJBZGROZXdDb21tZW50KHNlbGVjdGVkSWRDYXQpO1xuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2VCdG4nKSAhPT0gbnVsbCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZUJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChwb3BVcENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICAgICAgcG9wVXBDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRTZWxlY3RlZE1lYWw7XG5leHBvcnQgeyBjb21tZW50Q291bnRlciB9OyIsImNvbnN0IHVybCA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke3Byb2Nlc3MuZW52LkFQSV9LRVl9L2NvbW1lbnRzYDtcbmNvbnN0IHVybEdldCA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke3Byb2Nlc3MuZW52LkFQSV9LRVl9L2NvbW1lbnRzP2l0ZW1faWQ9YDtcblxuY29uc3QgZ2V0Q29tbWVudERhdGEgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgdXJsV2l0aElEID0gdXJsR2V0ICsgaWQ7XG4gIGlmIChpZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGAke3VybFdpdGhJRH1gLFxuICAgICk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbmNvbnN0IGFkZENvbW1lbnRJbnB1dCA9IGFzeW5jIChuZXdDb21tZW50KSA9PiB7XG4gIGF3YWl0IGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld0NvbW1lbnQpLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgfSxcbiAgfSk7XG4gIGNvbnN0IGFsbENvbW1lbnRzID0gYXdhaXQgZ2V0Q29tbWVudERhdGEobmV3Q29tbWVudC5pdGVtX2lkKTtcbiAgcmV0dXJuIGFsbENvbW1lbnRzO1xufTtcblxuZXhwb3J0IHsgZ2V0Q29tbWVudERhdGEsIGFkZENvbW1lbnRJbnB1dCB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IGdldFNlbGVjdGVkTWVhbCBmcm9tICcuL21vZHVsZXMvcG9wVXBEb20uanMnO1xuaW1wb3J0IHsgZ2V0Q29tbWVudERhdGEgfSBmcm9tICcuL21vZHVsZXMvcG9zdENvbW1lbnQuanMnO1xuaW1wb3J0IGdldE1lYWxMaXN0cyBmcm9tICcuL21vZHVsZXMvZGlzcGxheS5qcyc7XG5pbXBvcnQgaG9tZUl0ZW1Db3VudGVyIGZyb20gJy4vbW9kdWxlcy9ob21lSXRlbXNDb3VudGVyLmpzJztcbmltcG9ydCBnZXREYXRhIGZyb20gJy4vbW9kdWxlcy9nZXRkYXRhLmpzJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGdldE1lYWxMaXN0cygpO1xuICBjb25zdCBob21lQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWNvdW50ZXInKTtcbiAgY29uc3QgZ2V0TGlzdCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBtZWFsTGlzdHMgPSBhd2FpdCBnZXREYXRhKCk7XG4gICAgY29uc3QgY291bnRlckFycmF5ID0gbWVhbExpc3RzLmNhdGVnb3JpZXM7XG4gICAgaG9tZUNvdW50ZXIudGV4dENvbnRlbnQgPSBob21lSXRlbUNvdW50ZXIoY291bnRlckFycmF5KTtcbiAgfTtcbiAgZ2V0TGlzdCgpO1xufSk7XG5cbmdldFNlbGVjdGVkTWVhbCgpO1xuXG5nZXRDb21tZW50RGF0YSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==