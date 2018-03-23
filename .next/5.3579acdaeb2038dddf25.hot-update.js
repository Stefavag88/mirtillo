webpackHotUpdate(5,{

/***/ "./components/StyledCard.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon__ = __webpack_require__("./node_modules/antd/lib/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme__ = __webpack_require__("./theme/index.js");

var _jsxFileName = 'C:\\Users\\Vaggelis\\Desktop\\WorkSpace\\Mirtillo\\Mirtillo-Next\\components\\StyledCard.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    width: 360px;\n    height:360px;\n    margin: 1em;\n    border:1px solid #eaeaea;\n    border-radius:0.2em;\n    overflow:hidden;\n    display:flex;\n    position:relative;\n    flex-direction:column;\n    align-content: space-between;\n    justify-content: space-between;\n    &:hover{ \n        opacity:0.9\n    }\n\n    transition: all 0.4s ease-in-out;\n    @media all and (max-width: ', 'px){\n        width: 280px;\n        height:280px;\n    }\n    @media all and (min-width: ', 'px) and (max-width: ', 'px){\n        width: 320px;\n        height:320px;\n    }\n\n'], ['\n    width: 360px;\n    height:360px;\n    margin: 1em;\n    border:1px solid #eaeaea;\n    border-radius:0.2em;\n    overflow:hidden;\n    display:flex;\n    position:relative;\n    flex-direction:column;\n    align-content: space-between;\n    justify-content: space-between;\n    &:hover{ \n        opacity:0.9\n    }\n\n    transition: all 0.4s ease-in-out;\n    @media all and (max-width: ', 'px){\n        width: 280px;\n        height:280px;\n    }\n    @media all and (min-width: ', 'px) and (max-width: ', 'px){\n        width: 320px;\n        height:320px;\n    }\n\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    object-fit:cover;\n    max-width:100%;\n    z-index:2;\n    &:hover{\n        transform: scale(1.2);\n    }\n    transition: all 0.4s ease-in-out;\n'], ['\n    object-fit:cover;\n    max-width:100%;\n    z-index:2;\n    &:hover{\n        transform: scale(1.2);\n    }\n    transition: all 0.4s ease-in-out;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    z-index:100;\n    font-size:1em;\n    font-weight:500;\n    color:white;\n'], ['\n    z-index:100;\n    font-size:1em;\n    font-weight:500;\n    color:white;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    position:absolute;\n    color: white;\n    width:360px;\n    top:90%;\n    display:flex;\n    justify-content: space-between;\n    align-items: center;\n    padding:0.4em;\n'], ['\n    position:absolute;\n    color: white;\n    width:360px;\n    top:90%;\n    display:flex;\n    justify-content: space-between;\n    align-items: center;\n    padding:0.4em;\n']);



(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var StyledCard = __WEBPACK_IMPORTED_MODULE_2_styled_components__["b" /* default */].div(_templateObject, __WEBPACK_IMPORTED_MODULE_3__theme__["a" /* sizes */].phone, __WEBPACK_IMPORTED_MODULE_3__theme__["a" /* sizes */].phone + 1, __WEBPACK_IMPORTED_MODULE_3__theme__["a" /* sizes */].tablet);

var StyledImg = __WEBPACK_IMPORTED_MODULE_2_styled_components__["b" /* default */].img(_templateObject2);

var StyledSpan = __WEBPACK_IMPORTED_MODULE_2_styled_components__["b" /* default */].span(_templateObject3);
var ImageFooter = __WEBPACK_IMPORTED_MODULE_2_styled_components__["b" /* default */].div(_templateObject4);

var Product = function (_React$Component) {
    _inherits(Product, _React$Component);

    function Product() {
        _classCallCheck(this, Product);

        return _possibleConstructorReturn(this, (Product.__proto__ || Object.getPrototypeOf(Product)).apply(this, arguments));
    }

    _createClass(Product, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                width = _props.width,
                height = _props.height,
                id = _props.id,
                name = _props.name,
                picture = _props.picture;


            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                StyledCard,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 67
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(StyledImg, { srcset: '/static/images/' + picture + '-360w.jpg 320w,\n                                 /static/images/' + picture + '-360w_x2.jpg 320w x2,\n                                 /static/images/' + picture + '-496w.jpg 496w,\n                                 /static/images/' + picture + '-496w_x2.jpg 496w x2\n                                ',
                    src: '/static/images/' + picture + '-360w.jpg', alt: name, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 68
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    ImageFooter,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 75
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        StyledSpan,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 76
                            }
                        },
                        name
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_icon___default.a, { type: 'heart', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 77
                        }
                    })
                )
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return Product;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var _default = Product;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(StyledCard, 'StyledCard', 'C:/Users/Vaggelis/Desktop/WorkSpace/Mirtillo/Mirtillo-Next/components/StyledCard.js');
    reactHotLoader.register(StyledImg, 'StyledImg', 'C:/Users/Vaggelis/Desktop/WorkSpace/Mirtillo/Mirtillo-Next/components/StyledCard.js');
    reactHotLoader.register(StyledSpan, 'StyledSpan', 'C:/Users/Vaggelis/Desktop/WorkSpace/Mirtillo/Mirtillo-Next/components/StyledCard.js');
    reactHotLoader.register(ImageFooter, 'ImageFooter', 'C:/Users/Vaggelis/Desktop/WorkSpace/Mirtillo/Mirtillo-Next/components/StyledCard.js');
    reactHotLoader.register(Product, 'Product', 'C:/Users/Vaggelis/Desktop/WorkSpace/Mirtillo/Mirtillo-Next/components/StyledCard.js');
    reactHotLoader.register(_default, 'default', 'C:/Users/Vaggelis/Desktop/WorkSpace/Mirtillo/Mirtillo-Next/components/StyledCard.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.3579acdaeb2038dddf25.hot-update.js.map