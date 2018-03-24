webpackHotUpdate(4,{

/***/ "./components/StyledCard.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__StyledIcon__ = __webpack_require__("./components/StyledIcon.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__StyledTooltip__ = __webpack_require__("./components/StyledTooltip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme__ = __webpack_require__("./theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__StyledButton__ = __webpack_require__("./components/StyledButton.js");
var _jsxFileName = 'C:\\Users\\Vaggelis\\Desktop\\WorkSpace\\Mirtillo\\Mirtillo-Next\\components\\StyledCard.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    width: 320px;\n    height:320px;\n    margin: 1em;\n    border-radius:0.2em;\n    overflow:hidden;\n    display:flex;\n    position:relative;\n    flex-direction:column;\n    align-content: space-between;\n    justify-content: space-between;\n    background:rgba(255,255,255,0.7);\n    transition: all 0.4s ease-in-out;\n    @media all and (max-width: ', 'px){\n        width: 280px;\n        height:280px;\n    }\n    @media all and (min-width: 550px) and (max-width: ', 'px){\n        width: 496px;\n        height: 496px;\n    }\n\n'], ['\n    width: 320px;\n    height:320px;\n    margin: 1em;\n    border-radius:0.2em;\n    overflow:hidden;\n    display:flex;\n    position:relative;\n    flex-direction:column;\n    align-content: space-between;\n    justify-content: space-between;\n    background:rgba(255,255,255,0.7);\n    transition: all 0.4s ease-in-out;\n    @media all and (max-width: ', 'px){\n        width: 280px;\n        height:280px;\n    }\n    @media all and (min-width: 550px) and (max-width: ', 'px){\n        width: 496px;\n        height: 496px;\n    }\n\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    object-fit:cover;\n    max-width:100%;\n    z-index:2;\n    &:hover{\n        transform: scale(1.2);\n    }\n    transition: all 0.4s ease-in-out;\n'], ['\n    object-fit:cover;\n    max-width:100%;\n    z-index:2;\n    &:hover{\n        transform: scale(1.2);\n    }\n    transition: all 0.4s ease-in-out;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    position:absolute;\n    margin:1em;\n    bottom:0;\n    font-size:1.2em;\n    font-weight:500;\n    left:', ';\n    z-index:', ';\n    color:', ';\n    transition: all 0.256s ease-in-out;\n'], ['\n    position:absolute;\n    margin:1em;\n    bottom:0;\n    font-size:1.2em;\n    font-weight:500;\n    left:', ';\n    z-index:', ';\n    color:', ';\n    transition: all 0.256s ease-in-out;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    display:flex;\n    flex-direction:column;\n    position:absolute;\n    top:0;\n    font-size:1.5em;\n    font-weight:700;\n    right:', ';\n    z-index:', ';\n    color:', ';\n    transition: all 0.256s ease-in-out;\n'], ['\n    display:flex;\n    flex-direction:column;\n    position:absolute;\n    top:0;\n    font-size:1.5em;\n    font-weight:700;\n    right:', ';\n    z-index:', ';\n    color:', ';\n    transition: all 0.256s ease-in-out;\n']);



(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var StyledCard = __WEBPACK_IMPORTED_MODULE_3_styled_components__["b" /* default */].div(_templateObject, __WEBPACK_IMPORTED_MODULE_4__theme__["a" /* sizes */].phone, __WEBPACK_IMPORTED_MODULE_4__theme__["a" /* sizes */].tablet);

var StyledPic = __WEBPACK_IMPORTED_MODULE_3_styled_components__["b" /* default */].picture(_templateObject2);
var StyledProductName = __WEBPACK_IMPORTED_MODULE_3_styled_components__["b" /* default */].span(_templateObject3, function (props) {
    return props.show ? '0' : '-100%';
}, function (props) {
    return props.show ? '40' : '0';
}, function (props) {
    return props.show ? 'white' : 'transparent';
});

var StyledProductIcons = __WEBPACK_IMPORTED_MODULE_3_styled_components__["b" /* default */].section(_templateObject4, function (props) {
    return props.show ? '0' : '-100%';
}, function (props) {
    return props.show ? '40' : '0';
}, function (props) {
    return !props.show && 'transparent';
});

var Product = function (_React$Component) {
    _inherits(Product, _React$Component);

    function Product() {
        _classCallCheck(this, Product);

        var _this = _possibleConstructorReturn(this, (Product.__proto__ || Object.getPrototypeOf(Product)).call(this));

        _this.onMouseEnter = function (ev) {
            _this.setState({ isMouseOn: true });
        };

        _this.onMouseLeave = function (ev) {
            _this.setState({ isMouseOn: false });
        };

        _this.state = { isMouseOn: false };
        return _this;
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


            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                StyledCard,
                { onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 86
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    StyledPic,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 87
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('source', { media: '(max-width: 420px)',
                        srcset: '/static/images/' + picture + '-360w.jpg 1x, /static/images/' + picture + '-360w_2x.jpg 2x', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 88
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('source', { media: '(min-width: 421px) and (max-width: 768px)',
                        srcset: '/static/images/' + picture + '-496w.jpg 1x, /static/images/' + picture + '-496w_2x.jpg 2x', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 90
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/static/images/' + picture + '-360w.jpg', alt: name, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 92
                        }
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    StyledProductName,
                    { show: this.state.isMouseOn, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 94
                        }
                    },
                    name
                ),
                '}',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    StyledProductIcons,
                    { show: this.state.isMouseOn, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 95
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2__StyledTooltip__["a" /* default */],
                        { placement: 'topLeft', title: 'Add To Favorites', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 96
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__StyledButton__["a" /* default */], { circle: true, icon: 'heart', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 97
                            }
                        })
                    )
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
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

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
    reactHotLoader.register(StyledPic, 'StyledPic', 'C:/Users/Vaggelis/Desktop/WorkSpace/Mirtillo/Mirtillo-Next/components/StyledCard.js');
    reactHotLoader.register(StyledProductName, 'StyledProductName', 'C:/Users/Vaggelis/Desktop/WorkSpace/Mirtillo/Mirtillo-Next/components/StyledCard.js');
    reactHotLoader.register(StyledProductIcons, 'StyledProductIcons', 'C:/Users/Vaggelis/Desktop/WorkSpace/Mirtillo/Mirtillo-Next/components/StyledCard.js');
    reactHotLoader.register(Product, 'Product', 'C:/Users/Vaggelis/Desktop/WorkSpace/Mirtillo/Mirtillo-Next/components/StyledCard.js');
    reactHotLoader.register(_default, 'default', 'C:/Users/Vaggelis/Desktop/WorkSpace/Mirtillo/Mirtillo-Next/components/StyledCard.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.822875fcdec841e570a9.hot-update.js.map