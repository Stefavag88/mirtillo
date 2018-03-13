webpackHotUpdate(4,{

/***/ "./lib/apollo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_apollo__ = __webpack_require__("./node_modules/next-apollo/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_link_http__ = __webpack_require__("./node_modules/apollo-link-http/lib/index.js");
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();




var config = {
  link: new __WEBPACK_IMPORTED_MODULE_1_apollo_link_http__["a" /* HttpLink */]({
    uri: 'http://localhost:8080/graphql', // Server URL (must be absolute)
    opts: {
      credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
    }
  })
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_0_next_apollo__["withData"])(config);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(config, 'config', 'C:/Users/Vaggelis/Desktop/WorkSpace/Mirtillo/Mirtillo-Next/lib/apollo.js');
  reactHotLoader.register(_default, 'default', 'C:/Users/Vaggelis/Desktop/WorkSpace/Mirtillo/Mirtillo-Next/lib/apollo.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.5b7e7243422f10ce3609.hot-update.js.map