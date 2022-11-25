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
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n  font-size: 62.5%;\r\n}\r\n\r\nbody {\r\n  background-color: #e7ebe7;\r\n  color: rgba(0, 0, 0, 0.7);\r\n  font-size: 1.6rem;\r\n  line-height: 1.6;\r\n  letter-spacing: 0.04rem;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: #3fc979;\r\n  color: #fff;\r\n}\r\n\r\n.logo span {\r\n  font-size: 3rem;\r\n  font-weight: 700;\r\n  line-height: 1.7;\r\n  color: #fff;\r\n  margin-inline: 2rem;\r\n}\r\n\r\n.navmenu {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.navmenu li {\r\n  list-style: none;\r\n  margin: 2rem;\r\n}\r\n\r\n.navmenu li a {\r\n  text-decoration: none;\r\n  font-size: 2rem;\r\n  color: #fff;\r\n}\r\n\r\n.popUp-bg {\r\n  display: none;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: fixed;\r\n  top: 0;\r\n  background-color: rgb(0, 0, 0, 0.5);\r\n  width: 100%;\r\n  height: 100vh;\r\n  z-index: 100;\r\n}\r\n\r\n.popUp {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: #3fc979;\r\n  width: 50rem;\r\n  height: 90%;\r\n  border: 2px solid green;\r\n  border-radius: 1rem;\r\n  padding: 2rem;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.closeBtn {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-self: flex-end;\r\n  position: fixed;\r\n  width: 2.5rem;\r\n  height: 2.5rem;\r\n  border-radius: 5px;\r\n  border: none;\r\n  font-size: 1.6rem;\r\n  color: white;\r\n  background-color: rgb(2, 60, 37);\r\n}\r\n\r\n.popUpDiscription {\r\n  padding: 0 1.5rem;\r\n  font-size: 1.6rem;\r\n  line-height: 2.2rem;\r\n  text-align: center;\r\n}\r\n\r\n.commentCount {\r\n  margin-top: 2rem;\r\n  margin-bottom: 1rem;\r\n  font-size: 2.2rem;\r\n}\r\n\r\n.comment {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  width: 100%;\r\n}\r\n\r\n.comment-item {\r\n  display: flex;\r\n  flex-direction: row;\r\n  font-size: 1.4rem;\r\n  gap: 1rem;\r\n  border: 1px solid green;\r\n  border-radius: 5px;\r\n  padding: 0.5rem;\r\n  background-color: rgb(0, 0, 0, 0.1);\r\n  width: 80%;\r\n  line-height: 1.6rem;\r\n  margin: 0 auto 1rem auto;\r\n}\r\n\r\n.addComment {\r\n  margin-top: 2rem;\r\n  margin-bottom: 1rem;\r\n  font-size: 2.2rem;\r\n}\r\n\r\n.inputComment {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.5rem;\r\n  width: 100%;\r\n}\r\n\r\n.inputComment input {\r\n  margin: 0 auto;\r\n  width: 60%;\r\n  height: 3rem;\r\n  padding: 1rem;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  border: 1px solid green;\r\n  font-weight: 300;\r\n  background: rgba(255, 255, 255, 0.8);\r\n}\r\n\r\n.inputComment input::placeholder {\r\n  font-style: oblique;\r\n}\r\n\r\n.inputComment textarea {\r\n  margin: 0 auto;\r\n  width: 60%;\r\n  height: 10rem;\r\n  padding: 1rem;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  border: 1px solid green;\r\n  resize: none;\r\n  font-weight: 300;\r\n  background: rgba(255, 255, 255, 0.8);\r\n}\r\n\r\n.inputComment textarea::placeholder {\r\n  font-style: oblique;\r\n}\r\n\r\n.commentBtn {\r\n  margin: 0 auto 1rem auto;\r\n  width: 25%;\r\n  height: 3.5rem;\r\n  border: 1px solid green;\r\n  padding: 0.5rem;\r\n  border-radius: 0.5rem;\r\n  background: rgba(255, 255, 255, 0.8);\r\n  cursor: pointer;\r\n}\r\n\r\n.commentBtn:hover {\r\n  font-size: 1.4rem;\r\n  border: 2px solid green;\r\n  width: 26%;\r\n  height: 3.9rem;\r\n}\r\n\r\n.commentDate {\r\n  min-width: 8rem;\r\n}\r\n\r\n.message {\r\n  font-size: 1.4rem;\r\n  text-align: center;\r\n  border-radius: 5px;\r\n  background-color: rgb(0, 0, 0, 0.1);\r\n  width: 80%;\r\n}\r\n\r\n.popUpImg {\r\n  margin: 2rem auto;\r\n}\r\n\r\n.item-counter {\r\n  width: 100px;\r\n  height: 100px;\r\n  padding: 0.3rem 0.5rem;\r\n  background-color: #fff;\r\n  color: #3fc979;\r\n  font-size: 1.2rem;\r\n  border-radius: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  position: fixed;\r\n  bottom: 0;\r\n  text-align: center;\r\n  height: 5rem;\r\n  font-size: 2rem;\r\n  width: 100%;\r\n  background-color: #3fc979;\r\n  color: white;\r\n}\r\n\r\nsection {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 2% 3rem;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.section-title {\r\n  font-size: 2rem;\r\n  color: rgba(0, 0, 0, 0.7);\r\n  font-weight: 600;\r\n  text-align: center;\r\n  padding: 3rem 0 1rem 0;\r\n}\r\n\r\n#meal-item-container {\r\n  display: grid;\r\n  margin: 2rem 0 8rem 0;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 3rem;\r\n}\r\n\r\n.meal-item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 36rem;\r\n  align-items: center;\r\n  border-radius: 1rem;\r\n  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.79);\r\n  padding: 3rem;\r\n  transition: 0.4s ease-in;\r\n}\r\n\r\n.meal-item:hover {\r\n  transform: translateY(-20px);\r\n}\r\n\r\n.meal-name {\r\n  display: flex;\r\n}\r\n\r\n.meal-title {\r\n  margin: 3rem;\r\n}\r\n\r\n.heart-icon {\r\n  font-size: 2.5rem;\r\n  background-color: #3fc979;\r\n  color: #fff;\r\n  width: 50px;\r\n  height: 50px;\r\n  padding: 0.4rem 0.7rem;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.79);\r\n}\r\n\r\n.heart-icon:hover {\r\n  background-color: #fff;\r\n  color: red;\r\n}\r\n\r\n.heart-icon:active {\r\n  background-color: red;\r\n  color: white;\r\n}\r\n\r\n.like-counter {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n#comment-btn {\r\n  background-color: #3fc979;\r\n  color: #fff;\r\n  padding: 1.5rem 2rem;\r\n  font-size: 1.5rem;\r\n  border-radius: 1rem;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n  display: inline-block;\r\n  cursor: pointer;\r\n  transition: 0.4s ease-in;\r\n  outline: 0;\r\n  border: 0;\r\n}\r\n\r\n#comment-btn:hover {\r\n  background-color: transparent;\r\n  color: #000;\r\n  border: 1px solid #3fc979;\r\n}\r\n\r\n@media screen and (max-width: 1250px) {\r\n  #meal-item-container {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n\r\n  article {\r\n    width: 90%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .popUp {\r\n    width: 45rem;\r\n  }\r\n\r\n  .commentBtn {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .commentBtn:hover {\r\n    font-size: 1.1rem;\r\n  }\r\n\r\n  .popUpTitle {\r\n    font-size: 3rem;\r\n  }\r\n\r\n  .commentCount {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .addComment {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .message {\r\n    font-size: 1.2rem;\r\n    padding: 0 3rem;\r\n  }\r\n\r\n  .popUpImg {\r\n    width: 70%;\r\n  }\r\n\r\n  .commentDate {\r\n    font-size: 1rem;\r\n    min-width: 6rem;\r\n  }\r\n\r\n  .commenterName {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  .commentContent {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  #meal-item-container {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  footer {\r\n    font-size: 1.4rem;\r\n    padding: 0 7rem;\r\n  }\r\n\r\n  .navmenu li:nth-of-type(2) {\r\n    display: none;\r\n  }\r\n\r\n  .navmenu li:nth-of-type(3) {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n  .popUp {\r\n    width: 90%;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n  font-size: 62.5%;\r\n}\r\n\r\nbody {\r\n  background-color: #e7ebe7;\r\n  color: rgba(0, 0, 0, 0.7);\r\n  font-size: 1.6rem;\r\n  line-height: 1.6;\r\n  letter-spacing: 0.04rem;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: #3fc979;\r\n  color: #fff;\r\n}\r\n\r\n.logo span {\r\n  font-size: 3rem;\r\n  font-weight: 700;\r\n  line-height: 1.7;\r\n  color: #fff;\r\n  margin-inline: 2rem;\r\n}\r\n\r\n.navmenu {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.navmenu li {\r\n  list-style: none;\r\n  margin: 2rem;\r\n}\r\n\r\n.navmenu li a {\r\n  text-decoration: none;\r\n  font-size: 2rem;\r\n  color: #fff;\r\n}\r\n\r\n.popUp-bg {\r\n  display: none;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: fixed;\r\n  top: 0;\r\n  background-color: rgb(0, 0, 0, 0.5);\r\n  width: 100%;\r\n  height: 100vh;\r\n  z-index: 100;\r\n}\r\n\r\n.popUp {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: #3fc979;\r\n  width: 50rem;\r\n  height: 90%;\r\n  border: 2px solid green;\r\n  border-radius: 1rem;\r\n  padding: 2rem;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.closeBtn {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-self: flex-end;\r\n  position: fixed;\r\n  width: 2.5rem;\r\n  height: 2.5rem;\r\n  border-radius: 5px;\r\n  border: none;\r\n  font-size: 1.6rem;\r\n  color: white;\r\n  background-color: rgb(2, 60, 37);\r\n}\r\n\r\n.popUpDiscription {\r\n  padding: 0 1.5rem;\r\n  font-size: 1.6rem;\r\n  line-height: 2.2rem;\r\n  text-align: center;\r\n}\r\n\r\n.commentCount {\r\n  margin-top: 2rem;\r\n  margin-bottom: 1rem;\r\n  font-size: 2.2rem;\r\n}\r\n\r\n.comment {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  width: 100%;\r\n}\r\n\r\n.comment-item {\r\n  display: flex;\r\n  flex-direction: row;\r\n  font-size: 1.4rem;\r\n  gap: 1rem;\r\n  border: 1px solid green;\r\n  border-radius: 5px;\r\n  padding: 0.5rem;\r\n  background-color: rgb(0, 0, 0, 0.1);\r\n  width: 80%;\r\n  line-height: 1.6rem;\r\n  margin: 0 auto 1rem auto;\r\n}\r\n\r\n.addComment {\r\n  margin-top: 2rem;\r\n  margin-bottom: 1rem;\r\n  font-size: 2.2rem;\r\n}\r\n\r\n.inputComment {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.5rem;\r\n  width: 100%;\r\n}\r\n\r\n.inputComment input {\r\n  margin: 0 auto;\r\n  width: 60%;\r\n  height: 3rem;\r\n  padding: 1rem;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  border: 1px solid green;\r\n  font-weight: 300;\r\n  background: rgba(255, 255, 255, 0.8);\r\n}\r\n\r\n.inputComment input::placeholder {\r\n  font-style: oblique;\r\n}\r\n\r\n.inputComment textarea {\r\n  margin: 0 auto;\r\n  width: 60%;\r\n  height: 10rem;\r\n  padding: 1rem;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  border: 1px solid green;\r\n  resize: none;\r\n  font-weight: 300;\r\n  background: rgba(255, 255, 255, 0.8);\r\n}\r\n\r\n.inputComment textarea::placeholder {\r\n  font-style: oblique;\r\n}\r\n\r\n.commentBtn {\r\n  margin: 0 auto 1rem auto;\r\n  width: 25%;\r\n  height: 3.5rem;\r\n  border: 1px solid green;\r\n  padding: 0.5rem;\r\n  border-radius: 0.5rem;\r\n  background: rgba(255, 255, 255, 0.8);\r\n  cursor: pointer;\r\n}\r\n\r\n.commentBtn:hover {\r\n  font-size: 1.4rem;\r\n  border: 2px solid green;\r\n  width: 26%;\r\n  height: 3.9rem;\r\n}\r\n\r\n.commentDate {\r\n  min-width: 8rem;\r\n}\r\n\r\n.message {\r\n  font-size: 1.4rem;\r\n  text-align: center;\r\n  border-radius: 5px;\r\n  background-color: rgb(0, 0, 0, 0.1);\r\n  width: 80%;\r\n}\r\n\r\n.popUpImg {\r\n  margin: 2rem auto;\r\n}\r\n\r\n.item-counter {\r\n  width: 100px;\r\n  height: 100px;\r\n  padding: 0.3rem 0.5rem;\r\n  background-color: #fff;\r\n  color: #3fc979;\r\n  font-size: 1.2rem;\r\n  border-radius: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  position: fixed;\r\n  bottom: 0;\r\n  text-align: center;\r\n  height: 5rem;\r\n  font-size: 2rem;\r\n  width: 100%;\r\n  background-color: #3fc979;\r\n  color: white;\r\n}\r\n\r\nsection {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 2% 3rem;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.section-title {\r\n  font-size: 2rem;\r\n  color: rgba(0, 0, 0, 0.7);\r\n  font-weight: 600;\r\n  text-align: center;\r\n  padding: 3rem 0 1rem 0;\r\n}\r\n\r\n#meal-item-container {\r\n  display: grid;\r\n  margin: 2rem 0 8rem 0;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 3rem;\r\n}\r\n\r\n.meal-item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 36rem;\r\n  align-items: center;\r\n  border-radius: 1rem;\r\n  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.79);\r\n  padding: 3rem;\r\n  transition: 0.4s ease-in;\r\n}\r\n\r\n.meal-item:hover {\r\n  transform: translateY(-20px);\r\n}\r\n\r\n.meal-name {\r\n  display: flex;\r\n}\r\n\r\n.meal-title {\r\n  margin: 3rem;\r\n}\r\n\r\n.heart-icon {\r\n  font-size: 2.5rem;\r\n  background-color: #3fc979;\r\n  color: #fff;\r\n  width: 50px;\r\n  height: 50px;\r\n  padding: 0.4rem 0.7rem;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.79);\r\n}\r\n\r\n.heart-icon:hover {\r\n  background-color: #fff;\r\n  color: red;\r\n}\r\n\r\n.heart-icon:active {\r\n  background-color: red;\r\n  color: white;\r\n}\r\n\r\n.like-counter {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n#comment-btn {\r\n  background-color: #3fc979;\r\n  color: #fff;\r\n  padding: 1.5rem 2rem;\r\n  font-size: 1.5rem;\r\n  border-radius: 1rem;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n  display: inline-block;\r\n  cursor: pointer;\r\n  transition: 0.4s ease-in;\r\n  outline: 0;\r\n  border: 0;\r\n}\r\n\r\n#comment-btn:hover {\r\n  background-color: transparent;\r\n  color: #000;\r\n  border: 1px solid #3fc979;\r\n}\r\n\r\n@media screen and (max-width: 1250px) {\r\n  #meal-item-container {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n\r\n  article {\r\n    width: 90%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .popUp {\r\n    width: 45rem;\r\n  }\r\n\r\n  .commentBtn {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .commentBtn:hover {\r\n    font-size: 1.1rem;\r\n  }\r\n\r\n  .popUpTitle {\r\n    font-size: 3rem;\r\n  }\r\n\r\n  .commentCount {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .addComment {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .message {\r\n    font-size: 1.2rem;\r\n    padding: 0 3rem;\r\n  }\r\n\r\n  .popUpImg {\r\n    width: 70%;\r\n  }\r\n\r\n  .commentDate {\r\n    font-size: 1rem;\r\n    min-width: 6rem;\r\n  }\r\n\r\n  .commenterName {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  .commentContent {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  #meal-item-container {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  footer {\r\n    font-size: 1.4rem;\r\n    padding: 0 7rem;\r\n  }\r\n\r\n  .navmenu li:nth-of-type(2) {\r\n    display: none;\r\n  }\r\n\r\n  .navmenu li:nth-of-type(3) {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n  .popUp {\r\n    width: 90%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLHVEQUF1RCw2QkFBNkIsZ0JBQWdCLGlCQUFpQix5Q0FBeUMsS0FBSyxjQUFjLDhCQUE4Qix1QkFBdUIsS0FBSyxjQUFjLGdDQUFnQyxnQ0FBZ0Msd0JBQXdCLHVCQUF1Qiw4QkFBOEIsS0FBSyxnQkFBZ0Isb0JBQW9CLHFDQUFxQywwQkFBMEIsZ0NBQWdDLGtCQUFrQixLQUFLLG9CQUFvQixzQkFBc0IsdUJBQXVCLHVCQUF1QixrQkFBa0IsMEJBQTBCLEtBQUssa0JBQWtCLG9CQUFvQixvQ0FBb0MsMEJBQTBCLEtBQUsscUJBQXFCLHVCQUF1QixtQkFBbUIsS0FBSyx1QkFBdUIsNEJBQTRCLHNCQUFzQixrQkFBa0IsS0FBSyxtQkFBbUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsMEJBQTBCLHNCQUFzQixhQUFhLDBDQUEwQyxrQkFBa0Isb0JBQW9CLG1CQUFtQixLQUFLLGdCQUFnQixvQkFBb0IsNkJBQTZCLDBCQUEwQixnQ0FBZ0MsbUJBQW1CLGtCQUFrQiw4QkFBOEIsMEJBQTBCLG9CQUFvQix5QkFBeUIsS0FBSyxtQkFBbUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsMkJBQTJCLHNCQUFzQixvQkFBb0IscUJBQXFCLHlCQUF5QixtQkFBbUIsd0JBQXdCLG1CQUFtQix1Q0FBdUMsS0FBSywyQkFBMkIsd0JBQXdCLHdCQUF3QiwwQkFBMEIseUJBQXlCLEtBQUssdUJBQXVCLHVCQUF1QiwwQkFBMEIsd0JBQXdCLEtBQUssa0JBQWtCLG9CQUFvQiw4QkFBOEIsNkJBQTZCLGtCQUFrQixLQUFLLHVCQUF1QixvQkFBb0IsMEJBQTBCLHdCQUF3QixnQkFBZ0IsOEJBQThCLHlCQUF5QixzQkFBc0IsMENBQTBDLGlCQUFpQiwwQkFBMEIsK0JBQStCLEtBQUsscUJBQXFCLHVCQUF1QiwwQkFBMEIsd0JBQXdCLEtBQUssdUJBQXVCLG9CQUFvQiw2QkFBNkIsa0JBQWtCLGtCQUFrQixLQUFLLDZCQUE2QixxQkFBcUIsaUJBQWlCLG1CQUFtQixvQkFBb0IseUJBQXlCLG9CQUFvQiw4QkFBOEIsdUJBQXVCLDJDQUEyQyxLQUFLLDBDQUEwQywwQkFBMEIsS0FBSyxnQ0FBZ0MscUJBQXFCLGlCQUFpQixvQkFBb0Isb0JBQW9CLHlCQUF5QixvQkFBb0IsOEJBQThCLG1CQUFtQix1QkFBdUIsMkNBQTJDLEtBQUssNkNBQTZDLDBCQUEwQixLQUFLLHFCQUFxQiwrQkFBK0IsaUJBQWlCLHFCQUFxQiw4QkFBOEIsc0JBQXNCLDRCQUE0QiwyQ0FBMkMsc0JBQXNCLEtBQUssMkJBQTJCLHdCQUF3Qiw4QkFBOEIsaUJBQWlCLHFCQUFxQixLQUFLLHNCQUFzQixzQkFBc0IsS0FBSyxrQkFBa0Isd0JBQXdCLHlCQUF5Qix5QkFBeUIsMENBQTBDLGlCQUFpQixLQUFLLG1CQUFtQix3QkFBd0IsS0FBSyx1QkFBdUIsbUJBQW1CLG9CQUFvQiw2QkFBNkIsNkJBQTZCLHFCQUFxQix3QkFBd0IsMEJBQTBCLCtDQUErQyxLQUFLLGdCQUFnQixvQkFBb0IsNkJBQTZCLDhCQUE4QixzQkFBc0IsZ0JBQWdCLHlCQUF5QixtQkFBbUIsc0JBQXNCLGtCQUFrQixnQ0FBZ0MsbUJBQW1CLEtBQUssaUJBQWlCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLHVCQUF1QixrQkFBa0IscUJBQXFCLEtBQUssd0JBQXdCLHNCQUFzQixnQ0FBZ0MsdUJBQXVCLHlCQUF5Qiw2QkFBNkIsS0FBSyw4QkFBOEIsb0JBQW9CLDRCQUE0Qiw0Q0FBNEMsZ0JBQWdCLEtBQUssb0JBQW9CLG9CQUFvQiw2QkFBNkIsOEJBQThCLG1CQUFtQiwwQkFBMEIsMEJBQTBCLHVEQUF1RCxvQkFBb0IsK0JBQStCLEtBQUssMEJBQTBCLG1DQUFtQyxLQUFLLG9CQUFvQixvQkFBb0IsS0FBSyxxQkFBcUIsbUJBQW1CLEtBQUsscUJBQXFCLHdCQUF3QixnQ0FBZ0Msa0JBQWtCLGtCQUFrQixtQkFBbUIsNkJBQTZCLHlCQUF5Qix5QkFBeUIsdURBQXVELEtBQUssMkJBQTJCLDZCQUE2QixpQkFBaUIsS0FBSyw0QkFBNEIsNEJBQTRCLG1CQUFtQixLQUFLLHVCQUF1QixvQkFBb0IsOEJBQThCLDBCQUEwQixnQkFBZ0IsS0FBSyxzQkFBc0IsZ0NBQWdDLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDBCQUEwQiwrQ0FBK0MsNEJBQTRCLHNCQUFzQiwrQkFBK0IsaUJBQWlCLGdCQUFnQixLQUFLLDRCQUE0QixvQ0FBb0Msa0JBQWtCLGdDQUFnQyxLQUFLLCtDQUErQyw0QkFBNEIsdUNBQXVDLE9BQU8sbUJBQW1CLG1CQUFtQixPQUFPLEtBQUssOENBQThDLGNBQWMscUJBQXFCLE9BQU8sdUJBQXVCLHdCQUF3QixPQUFPLDZCQUE2QiwwQkFBMEIsT0FBTyx1QkFBdUIsd0JBQXdCLE9BQU8seUJBQXlCLHdCQUF3QixPQUFPLHVCQUF1Qix3QkFBd0IsT0FBTyxvQkFBb0IsMEJBQTBCLHdCQUF3QixPQUFPLHFCQUFxQixtQkFBbUIsT0FBTyx3QkFBd0Isd0JBQXdCLHdCQUF3QixPQUFPLDBCQUEwQiwwQkFBMEIsT0FBTywyQkFBMkIsMEJBQTBCLE9BQU8sZ0NBQWdDLG1DQUFtQyxPQUFPLGtCQUFrQiwwQkFBMEIsd0JBQXdCLE9BQU8sc0NBQXNDLHNCQUFzQixPQUFPLHNDQUFzQyxzQkFBc0IsT0FBTyxLQUFLLDhDQUE4QyxjQUFjLG1CQUFtQixPQUFPLEtBQUssdUJBQXVCO0FBQy91a0I7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDckdhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdENhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNWYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDWGE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNyRWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZm1DO0FBQ2E7QUFDYTtBQUNqQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDZEQUFZO0FBQ3RCLHdCQUF3Qiw0REFBVztBQUNuQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix1REFBTztBQUNqQyxzQkFBc0IsNERBQVc7QUFDakM7QUFDQTtBQUNBLElBQUksMkRBQWdCO0FBQ3BCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFlO0FBQ3ZCLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM1RDVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isc0JBQXNCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLFlBQVksaUJBQWlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGdCQUFnQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJoQyx1RkFBdUYsc0JBQW1CLENBQUM7QUFDM0c7QUFDQTtBQUNBO0FBQ0EsT0FBTyxJQUFJO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixJQUFJO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHlDQUF5QztBQUN6QyxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sUUFBUTtBQUNmO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxPQUFPOzs7Ozs7Ozs7Ozs7OztBQ1p0QjtBQUNBO0FBQ0EsaUVBQWUsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGSztBQUNnQztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxQkFBcUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDBCQUEwQjtBQUN4RCxnQ0FBZ0MscUJBQXFCO0FBQ3JELGlDQUFpQyxvQkFBb0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw4QkFBOEI7QUFDN0QsMkJBQTJCLHlCQUF5QjtBQUNwRCxnQ0FBZ0Msb0NBQW9DO0FBQ3BFLHFGQUFxRix5QkFBeUI7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHVEQUFPO0FBQ3JDO0FBQ0EsNkJBQTZCLCtEQUFjO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsNEJBQTRCO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxnRUFBZTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGVBQWUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQy9HL0IsdUZBQXVGLHNCQUFtQixDQUFDO0FBQzNHLDBGQUEwRixzQkFBbUIsQ0FBQztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxVQUFVO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekMsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDK0I7QUFDTTtBQUNWO0FBQ1k7QUFDakI7QUFDM0M7QUFDQTtBQUNBLEVBQUUsK0RBQVk7QUFDZDtBQUNBO0FBQ0EsNEJBQTRCLCtEQUFPO0FBQ25DO0FBQ0EsOEJBQThCLHdFQUFlO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxnRUFBZTtBQUNmO0FBQ0EsdUVBQWMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC13aXRoLXdlYnBhY2svLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC13aXRoLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC13aXRoLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC13aXRoLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0LXdpdGgtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0LXdpdGgtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC13aXRoLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0LXdpdGgtd2VicGFjay8uL3NyYy9tb2R1bGVzL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0LXdpdGgtd2VicGFjay8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlNZWFsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC13aXRoLXdlYnBhY2svLi9zcmMvbW9kdWxlcy9nZXRMaWtlRGF0YS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vc3JjL21vZHVsZXMvZ2V0ZGF0YS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vc3JjL21vZHVsZXMvaG9tZUl0ZW1zQ291bnRlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vc3JjL21vZHVsZXMvcG9wVXBEb20uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0LXdpdGgtd2VicGFjay8uL3NyYy9tb2R1bGVzL3Bvc3RDb21tZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC13aXRoLXdlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0LXdpdGgtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3Qtd2l0aC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3Qtd2l0aC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0LXdpdGgtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC13aXRoLXdlYnBhY2svd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC13aXRoLXdlYnBhY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcclxcbio6OmFmdGVyLFxcclxcbio6OmJlZm9yZSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxuICBmb250LXNpemU6IDYyLjUlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2ViZTc7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS42O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDRyZW07XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZmM5Nzk7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28gc3BhbiB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNztcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luLWlubGluZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdm1lbnUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdm1lbnUgbGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdm1lbnUgbGkgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwLWJnIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNSk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxufVxcclxcblxcclxcbi5wb3BVcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ZjOTc5O1xcclxcbiAgd2lkdGg6IDUwcmVtO1xcclxcbiAgaGVpZ2h0OiA5MCU7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2VCdG4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgd2lkdGg6IDIuNXJlbTtcXHJcXG4gIGhlaWdodDogMi41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiwgNjAsIDM3KTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwRGlzY3JpcHRpb24ge1xcclxcbiAgcGFkZGluZzogMCAxLjVyZW07XFxyXFxuICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyLjJyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50Q291bnQge1xcclxcbiAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICBmb250LXNpemU6IDIuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjEpO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjZyZW07XFxyXFxuICBtYXJnaW46IDAgYXV0byAxcmVtIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5hZGRDb21tZW50IHtcXHJcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgZm9udC1zaXplOiAyLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5pbnB1dENvbW1lbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEuNXJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRDb21tZW50IGlucHV0IHtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRDb21tZW50IGlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRDb21tZW50IHRleHRhcmVhIHtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIGhlaWdodDogMTByZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0Q29tbWVudCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcclxcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRCdG4ge1xcclxcbiAgbWFyZ2luOiAwIGF1dG8gMXJlbSBhdXRvO1xcclxcbiAgd2lkdGg6IDI1JTtcXHJcXG4gIGhlaWdodDogMy41cmVtO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50QnRuOmhvdmVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XFxyXFxuICB3aWR0aDogMjYlO1xcclxcbiAgaGVpZ2h0OiAzLjlyZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50RGF0ZSB7XFxyXFxuICBtaW4td2lkdGg6IDhyZW07XFxyXFxufVxcclxcblxcclxcbi5tZXNzYWdlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuMSk7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXBJbWcge1xcclxcbiAgbWFyZ2luOiAycmVtIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5pdGVtLWNvdW50ZXIge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgY29sb3I6ICMzZmM5Nzk7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmYzk3OTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyJSAzcmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24tdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAzcmVtIDAgMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVhbC1pdGVtLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgbWFyZ2luOiAycmVtIDAgOHJlbSAwO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gIGdhcDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtaXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDM2cmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBib3gtc2hhZG93OiAwIDRweCAyMXB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC43OSk7XFxyXFxuICBwYWRkaW5nOiAzcmVtO1xcclxcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1pdGVtOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLW5hbWUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtdGl0bGUge1xcclxcbiAgbWFyZ2luOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhcnQtaWNvbiB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZmM5Nzk7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgcGFkZGluZzogMC40cmVtIDAuN3JlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIxcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjc5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYXJ0LWljb246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5oZWFydC1pY29uOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5saWtlLWNvdW50ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQtYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZmM5Nzk7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbjtcXHJcXG4gIG91dGxpbmU6IDA7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50LWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzNmYzk3OTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI1MHB4KSB7XFxyXFxuICAjbWVhbC1pdGVtLWNvbnRhaW5lciB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGFydGljbGUge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLnBvcFVwIHtcXHJcXG4gICAgd2lkdGg6IDQ1cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnRCdG4ge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tbWVudEJ0bjpob3ZlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcFVwVGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tbWVudENvdW50IHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFkZENvbW1lbnQge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVzc2FnZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBwYWRkaW5nOiAwIDNyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wVXBJbWcge1xcclxcbiAgICB3aWR0aDogNzAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnREYXRlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBtaW4td2lkdGg6IDZyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tbWVudGVyTmFtZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnRDb250ZW50IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjbWVhbC1pdGVtLWNvbnRhaW5lciB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgfVxcclxcblxcclxcbiAgZm9vdGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAgN3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXZtZW51IGxpOm50aC1vZi10eXBlKDIpIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXZtZW51IGxpOm50aC1vZi10eXBlKDMpIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXHJcXG4gIC5wb3BVcCB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtFQUNWLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsTUFBTTtFQUNOLG1DQUFtQztFQUNuQyxXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtF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RUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0U7SUFDRSw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcclxcbio6OmFmdGVyLFxcclxcbio6OmJlZm9yZSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxuICBmb250LXNpemU6IDYyLjUlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2ViZTc7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS42O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDRyZW07XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZmM5Nzk7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28gc3BhbiB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNztcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luLWlubGluZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdm1lbnUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdm1lbnUgbGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdm1lbnUgbGkgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwLWJnIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNSk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxufVxcclxcblxcclxcbi5wb3BVcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ZjOTc5O1xcclxcbiAgd2lkdGg6IDUwcmVtO1xcclxcbiAgaGVpZ2h0OiA5MCU7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2VCdG4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgd2lkdGg6IDIuNXJlbTtcXHJcXG4gIGhlaWdodDogMi41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiwgNjAsIDM3KTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwRGlzY3JpcHRpb24ge1xcclxcbiAgcGFkZGluZzogMCAxLjVyZW07XFxyXFxuICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyLjJyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50Q291bnQge1xcclxcbiAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICBmb250LXNpemU6IDIuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjEpO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjZyZW07XFxyXFxuICBtYXJnaW46IDAgYXV0byAxcmVtIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5hZGRDb21tZW50IHtcXHJcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgZm9udC1zaXplOiAyLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5pbnB1dENvbW1lbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEuNXJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRDb21tZW50IGlucHV0IHtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRDb21tZW50IGlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRDb21tZW50IHRleHRhcmVhIHtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIGhlaWdodDogMTByZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0Q29tbWVudCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcclxcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRCdG4ge1xcclxcbiAgbWFyZ2luOiAwIGF1dG8gMXJlbSBhdXRvO1xcclxcbiAgd2lkdGg6IDI1JTtcXHJcXG4gIGhlaWdodDogMy41cmVtO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50QnRuOmhvdmVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XFxyXFxuICB3aWR0aDogMjYlO1xcclxcbiAgaGVpZ2h0OiAzLjlyZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50RGF0ZSB7XFxyXFxuICBtaW4td2lkdGg6IDhyZW07XFxyXFxufVxcclxcblxcclxcbi5tZXNzYWdlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuMSk7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXBJbWcge1xcclxcbiAgbWFyZ2luOiAycmVtIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5pdGVtLWNvdW50ZXIge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgY29sb3I6ICMzZmM5Nzk7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmYzk3OTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyJSAzcmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24tdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAzcmVtIDAgMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVhbC1pdGVtLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgbWFyZ2luOiAycmVtIDAgOHJlbSAwO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gIGdhcDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtaXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDM2cmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBib3gtc2hhZG93OiAwIDRweCAyMXB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC43OSk7XFxyXFxuICBwYWRkaW5nOiAzcmVtO1xcclxcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1pdGVtOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLW5hbWUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtdGl0bGUge1xcclxcbiAgbWFyZ2luOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhcnQtaWNvbiB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZmM5Nzk7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgcGFkZGluZzogMC40cmVtIDAuN3JlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIxcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjc5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYXJ0LWljb246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5oZWFydC1pY29uOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5saWtlLWNvdW50ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQtYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZmM5Nzk7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbjtcXHJcXG4gIG91dGxpbmU6IDA7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50LWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzNmYzk3OTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI1MHB4KSB7XFxyXFxuICAjbWVhbC1pdGVtLWNvbnRhaW5lciB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGFydGljbGUge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLnBvcFVwIHtcXHJcXG4gICAgd2lkdGg6IDQ1cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnRCdG4ge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tbWVudEJ0bjpob3ZlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcFVwVGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tbWVudENvdW50IHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFkZENvbW1lbnQge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVzc2FnZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBwYWRkaW5nOiAwIDNyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wVXBJbWcge1xcclxcbiAgICB3aWR0aDogNzAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnREYXRlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBtaW4td2lkdGg6IDZyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tbWVudGVyTmFtZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnRDb250ZW50IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjbWVhbC1pdGVtLWNvbnRhaW5lciB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgfVxcclxcblxcclxcbiAgZm9vdGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAgN3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXZtZW51IGxpOm50aC1vZi10eXBlKDIpIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXZtZW51IGxpOm50aC1vZi10eXBlKDMpIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXHJcXG4gIC5wb3BVcCB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qXHJcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcclxuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblxyXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XHJcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcclxuXHJcbiAgICAgIGlmIChpdGVtWzRdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaXRlbVsyXSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcclxuXHJcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaXRlbVsyXSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpdGVtWzRdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgICB9KS5qb2luKFwiXCIpO1xyXG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblxyXG5cclxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xyXG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblxyXG4gICAgaWYgKGRlZHVwZSkge1xyXG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xyXG5cclxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xyXG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XHJcblxyXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG1lZGlhKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XHJcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHN1cHBvcnRzKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XHJcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiBsaXN0O1xyXG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcclxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XHJcblxyXG4gIGlmICghY3NzTWFwcGluZykge1xyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xyXG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xyXG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XHJcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xyXG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XHJcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcclxuXHJcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcclxuICB2YXIgcmVzdWx0ID0gLTE7XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XHJcbiAgICAgIHJlc3VsdCA9IGk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcclxuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xyXG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcclxuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xyXG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcclxuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xyXG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XHJcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcclxuICAgIHZhciBvYmogPSB7XHJcbiAgICAgIGNzczogaXRlbVsxXSxcclxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXHJcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcclxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXHJcbiAgICAgIGxheWVyOiBpdGVtWzVdXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XHJcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XHJcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XHJcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcclxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxyXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBpZGVudGlmaWVycztcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcclxuICBhcGkudXBkYXRlKG9iaik7XHJcblxyXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcclxuICAgIGlmIChuZXdPYmopIHtcclxuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXBpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiB1cGRhdGVyO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XHJcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgbGlzdCA9IGxpc3QgfHwgW107XHJcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcclxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xyXG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xyXG5cclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XHJcblxyXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xyXG5cclxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xyXG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xyXG5cclxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcclxuICB9O1xyXG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIG1lbW8gPSB7fTtcclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcblxyXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XHJcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcclxuXHJcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcclxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xyXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxyXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcclxufVxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuXHJcblxyXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcclxuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XHJcblxyXG4gIGlmICghdGFyZ2V0KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xyXG4gIH1cclxuXHJcbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XHJcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xyXG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcclxuXHJcbiAgaWYgKG5vbmNlKSB7XHJcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcclxuICB2YXIgY3NzID0gXCJcIjtcclxuXHJcbiAgaWYgKG9iai5zdXBwb3J0cykge1xyXG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcclxuICB9XHJcblxyXG4gIGlmIChvYmoubWVkaWEpIHtcclxuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xyXG4gIH1cclxuXHJcbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XHJcblxyXG4gIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcclxuICB9XHJcblxyXG4gIGNzcyArPSBvYmouY3NzO1xyXG5cclxuICBpZiAobmVlZExheWVyKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG5cclxuICBpZiAob2JqLm1lZGlhKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG5cclxuICBpZiAob2JqLnN1cHBvcnRzKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG5cclxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XHJcbiAgfSAvLyBGb3Igb2xkIElFXHJcblxyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cclxuXHJcblxyXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcclxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcbn1cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcblxyXG5cclxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcclxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xyXG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XHJcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XHJcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBnZXREYXRhIGZyb20gJy4vZ2V0ZGF0YS5qcyc7XHJcbmltcG9ydCBkaXNwbGF5TWVhbExpc3RzIGZyb20gJy4vZGlzcGxheU1lYWwuanMnO1xyXG5pbXBvcnQgeyBsaWtlR2V0RGF0YSwgbGlrZVBvc3REYXRhIH0gZnJvbSAnLi9nZXRMaWtlRGF0YS5qcyc7XHJcbmltcG9ydCBnZXRTZWxlY3RlZE1lYWwgZnJvbSAnLi9wb3BVcERvbS5qcyc7XHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVhbC1pdGVtLWNvbnRhaW5lcicpO1xyXG5cclxuY29uc3Qgc2V0TGlrZXMgPSAoaGVhcnQsIGxpa2VzKSA9PiB7XHJcbiAgY29uc3QgaWQgPSBoZWFydC5jbG9zZXN0KCdhcnRpY2xlJykuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgY29uc3QgaXRlbSA9IGxpa2VzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaXRlbV9pZCA9PT0gaWQpO1xyXG4gIGhlYXJ0LnRleHRDb250ZW50ID0gaXRlbS5saWtlcztcclxufTtcclxuXHJcbmNvbnN0IGhhbmRsZUxpa2VDbGljayA9IChoZWFydCkgPT4ge1xyXG4gIGNvbnN0IGlkID0gaGVhcnQuY2xvc2VzdCgnYXJ0aWNsZScpLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gIGhlYXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgbGlrZVBvc3REYXRhKGlkKTtcclxuICAgIGNvbnN0IGxpa2VzID0gYXdhaXQgbGlrZUdldERhdGEoKTtcclxuICAgIGNvbnN0IGhlYXJ0cyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZS1jb250YWluZXInKTtcclxuICAgIGhlYXJ0cy5mb3JFYWNoKChoZWFydCkgPT4ge1xyXG4gICAgICBzZXRMaWtlcyhoZWFydCwgbGlrZXMpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRNZWFsTGlzdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgbWVhbExpc3RzID0gYXdhaXQgZ2V0RGF0YSgpO1xyXG4gIGNvbnN0IGxpa2VzID0gYXdhaXQgbGlrZUdldERhdGEoKTtcclxuXHJcbiAgbWVhbExpc3RzLmNhdGVnb3JpZXMuZm9yRWFjaCgobWVhbCkgPT4ge1xyXG4gICAgZGlzcGxheU1lYWxMaXN0cyhtZWFsKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGVhcnRzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlLWNvbnRhaW5lcicpO1xyXG4gIGNvbnN0IGhlYXJ0SWNvbnMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmhlYXJ0LWljb24nKTtcclxuXHJcbiAgaGVhcnRzLmZvckVhY2goKGhlYXJ0KSA9PiB7XHJcbiAgICBzZXRMaWtlcyhoZWFydCwgbGlrZXMpO1xyXG4gIH0pO1xyXG5cclxuICBoZWFydEljb25zLmZvckVhY2goKGhlYXJ0KSA9PiB7XHJcbiAgICBoYW5kbGVMaWtlQ2xpY2soaGVhcnQpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1lbnRCdXR0b24nKTtcclxuICBsZXQgc2VsZWN0ZWRJZENhdDtcclxuICBpZiAoY29tbWVudCAhPT0gbnVsbCkge1xyXG4gICAgY29tbWVudC5mb3JFYWNoKChjbGlja2VkQnRuKSA9PiB7XHJcbiAgICAgIGNsaWNrZWRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcFVwLWJnJykuc3R5bGUuZGlzcGxheSA9PT0gJycpIHtcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3BVcC1iZycpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGVjdGVkSWRDYXQgPSBlLmN1cnJlbnRUYXJnZXQuY2xvc2VzdCgnYXJ0aWNsZScpLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gICAgICAgIGdldFNlbGVjdGVkTWVhbChzZWxlY3RlZElkQ2F0KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRNZWFsTGlzdHM7XHJcbiIsImNvbnN0IGRpc3BsYXlNZWFsTGlzdHMgPSAobWVhbCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZWFsLWl0ZW0tY29udGFpbmVyJyk7XHJcbiAgY29uc3QgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuXHJcbiAgYXJ0aWNsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBtZWFsLmlkQ2F0ZWdvcnkpO1xyXG4gIGFydGljbGUuaW5uZXJIVE1MID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJtZWFsLWl0ZW1cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJtZWFsLWltZ1wiPlxyXG4gICAgICA8aW1nIHNyYz1cIiR7bWVhbC5zdHJDYXRlZ29yeVRodW1ifVwiIGFsdD1cIm1lYWwgaW1hZ2VzXCI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJtZWFsLW5hbWVcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtdGl0bGVcIj5cclxuICAgICAgPGgzPiR7bWVhbC5zdHJDYXRlZ29yeX08L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsaWtlLWNvdW50ZXJcIj5cclxuICAgICAgICA8aSBjbGFzcz1cInVpbCB1aWwtaGVhcnQgaGVhcnQtaWNvblwiPjwvaT5cclxuICAgICAgICA8cCBjbGFzcz1cImxpa2UtY29udGFpbmVyXCI+TG9hZGluZy4uLjwvcD5cclxuICAgICAgICA8cD5MaWtlczwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY29tbWVudEJ1dHRvblwiIGlkPVwiY29tbWVudC1idG5cIj5Db21tZW50PC9idXR0b24+XHJcbiAgPC9kaXY+YDtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYXJ0aWNsZSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5TWVhbExpc3RzO1xyXG4iLCJjb25zdCB1cmwgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJHtwcm9jZXNzLmVudi5BUElfS0VZfS9saWtlc2A7XHJcblxyXG5jb25zdCBsaWtlR2V0RGF0YSA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgYCR7dXJsfWAsXHJcbiAgKTtcclxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG59O1xyXG5cclxuY29uc3QgbGlrZVBvc3REYXRhID0gYXN5bmMgKG1lYWxJZCkgPT4ge1xyXG4gIGF3YWl0IGZldGNoKGAke3VybH1gLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgaXRlbV9pZDogbWVhbElkLFxyXG4gICAgfSksXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgbGlrZUdldERhdGEsIGxpa2VQb3N0RGF0YSB9OyIsImNvbnN0IEFQSV9VUkwgPSAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2NhdGVnb3JpZXMucGhwJztcclxuXHJcbmNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgIGAke0FQSV9VUkx9YCxcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIH0sXHJcbiAgKTtcclxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0RGF0YTsiLCJjb25zdCBob21lSXRlbUNvdW50ZXIgPSAoaXRlbSkgPT4gaXRlbS5sZW5ndGg7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lSXRlbUNvdW50ZXI7IiwiaW1wb3J0IGdldERhdGEgZnJvbSAnLi9nZXRkYXRhLmpzJztcclxuaW1wb3J0IHsgZ2V0Q29tbWVudERhdGEsIGFkZENvbW1lbnRJbnB1dCB9IGZyb20gJy4vcG9zdENvbW1lbnQuanMnO1xyXG5cclxuY29uc3QgcG9wVXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wVXAtYmcnKTtcclxuY29uc3QgcG9wVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbmNvbnN0IGNyZWF0ZUNvbW1lbnRzID0gKGNvbW1lbnRzKSA9PiB7XHJcbiAgY29uc3QgY29tbWVudE1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudCcpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbW1lbnRzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBjb25zdCBjb21tZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb21tZW50RGl2LmNsYXNzTmFtZSA9ICdjb21tZW50LWl0ZW0nO1xyXG4gICAgY29tbWVudERpdi5pbm5lckhUTUwgPSBgXHJcbiAgICAgPHAgY2xhc3M9XCJjb21tZW50RGF0ZVwiPiR7Y29tbWVudHNbaV0uY3JlYXRpb25fZGF0ZX08L3A+XHJcbiAgICAgPHAgY2xhc3M9XCJjb21tZW50ZXJOYW1lXCI+JHtjb21tZW50c1tpXS51c2VybmFtZX06PC9wPlxyXG4gICAgIDxwIGNsYXNzPVwiY29tbWVudENvbnRlbnRcIj4ke2NvbW1lbnRzW2ldLmNvbW1lbnR9PC9wPlxyXG4gICAgIGA7XHJcbiAgICBjb21tZW50TWFpbkRpdi5hcHBlbmRDaGlsZChjb21tZW50RGl2KTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBjb21tZW50Q291bnRlciA9IChjb21tZW50cykgPT4gKGNvbW1lbnRzLmxlbmd0aCA/IGNvbW1lbnRzLmxlbmd0aCA6IDApO1xyXG5cclxuY29uc3QgZGlzcGxheVNlbGVjdGVkTWVhbCA9IChzZWxlY3RlZE1lYWwsIGNvbW1lbnRzKSA9PiB7XHJcbiAgcG9wVXAuY2xhc3NOYW1lID0gJ3BvcFVwJztcclxuICBwb3BVcC5pbm5lckhUTUwgPSBgXHJcbiAgPGJ1dHRvbiBjbGFzcz1cImNsb3NlQnRuXCI+WDwvYnV0dG9uPlxyXG4gIDxpbWcgY2xhc3M9XCJwb3BVcEltZ1wiIHNyYz1cIiR7c2VsZWN0ZWRNZWFsLnN0ckNhdGVnb3J5VGh1bWJ9XCIgYWx0PVwibWVhbCBpbWFnZVwiPlxyXG4gIDxoMiBjbGFzcz1cInBvcFVwVGl0bGVcIj4ke3NlbGVjdGVkTWVhbC5zdHJDYXRlZ29yeX08L2gyPlxyXG4gIDxwIGNsYXNzPVwicG9wVXBEaXNjcmlwdGlvblwiPiR7c2VsZWN0ZWRNZWFsLnN0ckNhdGVnb3J5RGVzY3JpcHRpb259PC9wPlxyXG4gIDxoMyBjbGFzcz1cImNvbW1lbnRDb3VudFwiPkNvbW1lbnRzPHNwYW4gaWQ9XCJjb21tZW50Q291bnRcIiBjbGFzcz1cImNvbW1lbnRDb3VudGVyXCI+KCR7Y29tbWVudENvdW50ZXIoY29tbWVudHMpfSk8L3NwYW4+PC9oMz5cclxuICA8ZGl2IGNsYXNzPVwiY29tbWVudFwiPiAgICAgXHJcbiAgPC9kaXY+XHJcbiAgPGgzIGNsYXNzPVwiYWRkQ29tbWVudFwiPkFkZCBhIGNvbW1lbnQ8L2gzPlxyXG4gICAgICA8Zm9ybSBjbGFzcz1cImlucHV0Q29tbWVudFwiIGlkPVwiaW5wdXRDb21tZW50XCIgYWN0aW9uPVwiI1wiIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICA8dGV4dGFyZWEgdHlwZT1cInRleHRcIiBuYW1lPVwiY29tbWVudFwiIHBsYWNlaG9sZGVyPVwiWW91ciBpbnNpZ2h0c1wiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY29tbWVudEJ0blwiPkNvbW1lbnQ8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPiBcclxuICAgICAgPHNwYW4gaWQ9XCJzdWNjZXNzTXNnXCIgY2xhc3M9XCJtZXNzYWdlXCI+PC9zcGFuPmA7XHJcblxyXG4gIHBvcFVwQ29udGFpbmVyLmFwcGVuZENoaWxkKHBvcFVwKTtcclxuICBjcmVhdGVDb21tZW50cyhjb21tZW50cyk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRTZWxlY3RlZE1lYWwgPSBhc3luYyAoc2VsZWN0ZWRJZENhdCkgPT4ge1xyXG4gIGNvbnN0IHNlbGVjdGVkTWVhbHMgPSBhd2FpdCBnZXREYXRhKCk7XHJcbiAgaWYgKHNlbGVjdGVkSWRDYXQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgY29uc3QgY29tbWVudE9iaiA9IGF3YWl0IGdldENvbW1lbnREYXRhKHNlbGVjdGVkSWRDYXQpO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRNZWFsID0gc2VsZWN0ZWRNZWFscy5jYXRlZ29yaWVzLmZpbmQoKG1lYWwpID0+IG1lYWwuaWRDYXRlZ29yeSA9PT0gc2VsZWN0ZWRJZENhdCk7XHJcbiAgICBkaXNwbGF5U2VsZWN0ZWRNZWFsKHNlbGVjdGVkTWVhbCwgY29tbWVudE9iaik7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZW1vdmVBbGxDaGlsZE5vZGVzID0gKHBhcmVudCkgPT4ge1xyXG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzZXRDb21tZW50cyA9IGFzeW5jIChhbGxDb21tZW50cykgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnRDb3VudCcpLmlubmVySFRNTCA9IGAoJHtjb21tZW50Q291bnRlcihhbGxDb21tZW50cyl9KWA7XHJcbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50JykpO1xyXG4gICAgY3JlYXRlQ29tbWVudHMoYWxsQ29tbWVudHMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbnRhaW5XaGl0ZVNwYWNlID0gKHgpID0+IHtcclxuICAgIGNvbnN0IHNwYWNlID0gbmV3IFJlZ0V4cCgvXlxccyQvKTtcclxuICAgIHJldHVybiBzcGFjZS50ZXN0KHguY2hhckF0KDApKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZWdpc3RlckFkZE5ld0NvbW1lbnQgPSBhc3luYyAoc2VsZWN0ZWRJZENhdCkgPT4ge1xyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dENvbW1lbnQnKSAhPT0gbnVsbCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRDb21tZW50JykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgdXNlck5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dENvbW1lbnQnKS5lbGVtZW50cy51c2VybmFtZTtcclxuICAgICAgICBjb25zdCBjb21tZW50SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRDb21tZW50JykuZWxlbWVudHMuY29tbWVudDtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UnKS5pbm5lckhUTUwgPSAnIFBsZWFzZSByZW1vdmUgYW55IGVtcHR5IHNwYWNlcyBpbiB0aGUgYmVnaW5uaW5nLiAnO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJykuc3R5bGUuY29sb3IgPSAncmVkJztcclxuXHJcbiAgICAgICAgaWYgKCFjb250YWluV2hpdGVTcGFjZSh1c2VyTmFtZUlucHV0LnZhbHVlKSAmJiAhY29udGFpbldoaXRlU3BhY2UoY29tbWVudElucHV0LnZhbHVlKSkge1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UnKS5pbm5lckhUTUwgPSAnIENvbW1lbnRlZCBzdWNjZXNzZnVsbHkgJztcclxuICAgICAgICAgIGNvbnN0IG5ld0NvbW1lbnQgPSB7XHJcbiAgICAgICAgICAgIGl0ZW1faWQ6IHNlbGVjdGVkSWRDYXQsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyTmFtZUlucHV0LnZhbHVlLnRyaW0oKSxcclxuICAgICAgICAgICAgY29tbWVudDogY29tbWVudElucHV0LnZhbHVlLnRyaW0oKSxcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgY29uc3QgYWxsQ29tbWVudHMgPSBhd2FpdCBhZGRDb21tZW50SW5wdXQobmV3Q29tbWVudCk7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRDb21tZW50JykucmVzZXQoKTtcclxuICAgICAgICAgIHJlc2V0Q29tbWVudHMoYWxsQ29tbWVudHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWNjZXNzTXNnJykuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJlZ2lzdGVyQWRkTmV3Q29tbWVudChzZWxlY3RlZElkQ2F0KTtcclxuXHJcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZUJ0bicpICE9PSBudWxsKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2VCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKHBvcFVwQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPT09ICdmbGV4Jykge1xyXG4gICAgICAgIHBvcFVwQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0U2VsZWN0ZWRNZWFsO1xyXG5leHBvcnQgeyBjb21tZW50Q291bnRlciB9OyIsImNvbnN0IHVybCA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke3Byb2Nlc3MuZW52LkFQSV9LRVl9L2NvbW1lbnRzYDtcclxuY29uc3QgdXJsR2V0ID0gYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyR7cHJvY2Vzcy5lbnYuQVBJX0tFWX0vY29tbWVudHM/aXRlbV9pZD1gO1xyXG5cclxuY29uc3QgZ2V0Q29tbWVudERhdGEgPSBhc3luYyAoaWQpID0+IHtcclxuICBjb25zdCB1cmxXaXRoSUQgPSB1cmxHZXQgKyBpZDtcclxuICBpZiAoaWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYCR7dXJsV2l0aElEfWAsXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5jb25zdCBhZGRDb21tZW50SW5wdXQgPSBhc3luYyAobmV3Q29tbWVudCkgPT4ge1xyXG4gIGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdDb21tZW50KSxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgY29uc3QgYWxsQ29tbWVudHMgPSBhd2FpdCBnZXRDb21tZW50RGF0YShuZXdDb21tZW50Lml0ZW1faWQpO1xyXG4gIHJldHVybiBhbGxDb21tZW50cztcclxufTtcclxuXHJcbmV4cG9ydCB7IGdldENvbW1lbnREYXRhLCBhZGRDb21tZW50SW5wdXQgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcclxuaW1wb3J0IGdldFNlbGVjdGVkTWVhbCBmcm9tICcuL21vZHVsZXMvcG9wVXBEb20uanMnO1xyXG5pbXBvcnQgeyBnZXRDb21tZW50RGF0YSB9IGZyb20gJy4vbW9kdWxlcy9wb3N0Q29tbWVudC5qcyc7XHJcbmltcG9ydCBnZXRNZWFsTGlzdHMgZnJvbSAnLi9tb2R1bGVzL2Rpc3BsYXkuanMnO1xyXG5pbXBvcnQgaG9tZUl0ZW1Db3VudGVyIGZyb20gJy4vbW9kdWxlcy9ob21lSXRlbXNDb3VudGVyLmpzJztcclxuaW1wb3J0IGdldERhdGEgZnJvbSAnLi9tb2R1bGVzL2dldGRhdGEuanMnO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgZ2V0TWVhbExpc3RzKCk7XHJcbiAgY29uc3QgaG9tZUNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1jb3VudGVyJyk7XHJcbiAgY29uc3QgZ2V0TGlzdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IG1lYWxMaXN0cyA9IGF3YWl0IGdldERhdGEoKTtcclxuICAgIGNvbnN0IGNvdW50ZXJBcnJheSA9IG1lYWxMaXN0cy5jYXRlZ29yaWVzO1xyXG4gICAgaG9tZUNvdW50ZXIudGV4dENvbnRlbnQgPSBob21lSXRlbUNvdW50ZXIoY291bnRlckFycmF5KTtcclxuICB9O1xyXG4gIGdldExpc3QoKTtcclxufSk7XHJcblxyXG5nZXRTZWxlY3RlZE1lYWwoKTtcclxuXHJcbmdldENvbW1lbnREYXRhKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9