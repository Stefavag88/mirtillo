webpackHotUpdate(5,{

/***/ "./components/StyledMenu.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: C:/Users/Vaggelis/Desktop/WorkSpace/Mirtillo-Next/components/StyledMenu.js: Duplicate declaration \"MenuItem\"\n\n\u001b[0m \u001b[90m 3 | \u001b[39m\u001b[36mimport\u001b[39m styled from \u001b[32m'styled-components'\u001b[39m\n \u001b[90m 4 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mMenu\u001b[39m from \u001b[32m'antd/lib/menu'\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 5 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mMenuItem\u001b[39m from \u001b[32m'./StyledMenuItem'\u001b[39m\n \u001b[90m   | \u001b[39m       \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 6 | \u001b[39m\n \u001b[90m 7 | \u001b[39m\u001b[36mconst\u001b[39m \u001b[33mStyledMenu\u001b[39m \u001b[33m=\u001b[39m styled(\u001b[33mMenu\u001b[39m)\u001b[32m`\u001b[39m\n \u001b[90m 8 | \u001b[39m\u001b[32mbox-sizing: border-box;\u001b[39m\u001b[0m\n");

/***/ }),

/***/ "./components/StyledMenuItem.js":
false,

/***/ "./components/StyledNav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__("./theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__StyledMenu__ = __webpack_require__("./components/StyledMenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__StyledMenu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__StyledMenu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__StyledButton__ = __webpack_require__("./components/StyledButton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_icon__ = __webpack_require__("./node_modules/antd/lib/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_lib_icon__);
var _jsxFileName = 'C:\\Users\\Vaggelis\\Desktop\\WorkSpace\\Mirtillo-Next\\components\\StyledNav.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

    enterModule && enterModule(module);
})();

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Header);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.handleMenuToggle = function (_ref2) {
            _objectDestructuringEmpty(_ref2);

            return _this.setState({ menuToggleOpen: !_this.state.menuToggleOpen });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Header, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({ menuToggleOpen: false });
        }
    }, {
        key: 'render',
        value: function render() {
            var url = this.props.url;


            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                    }
                },
                this.props.width >= __WEBPACK_IMPORTED_MODULE_1__theme__["a" /* sizes */].phone && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__StyledMenu__["default"], { url: url, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23
                    }
                }),
                this.props.width < __WEBPACK_IMPORTED_MODULE_1__theme__["a" /* sizes */].phone && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__StyledButton__["a" /* default */], { icon: 'bars', float: 'right', onClick: this.handleMenuToggle, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                    }
                }),
                this.props.width < __WEBPACK_IMPORTED_MODULE_1__theme__["a" /* sizes */].phone && this.state.menuToggleOpen && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__StyledMenu__["default"], { url: url, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28
                    }
                })
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = Header;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Header, 'Header', 'C:/Users/Vaggelis/Desktop/WorkSpace/Mirtillo-Next/components/StyledNav.js');
    reactHotLoader.register(_default, 'default', 'C:/Users/Vaggelis/Desktop/WorkSpace/Mirtillo-Next/components/StyledNav.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/add-dom-event-listener/lib/EventBaseObject.js":
false,

/***/ "./node_modules/add-dom-event-listener/lib/EventObject.js":
false,

/***/ "./node_modules/add-dom-event-listener/lib/index.js":
false,

/***/ "./node_modules/antd/lib/_util/getRequestAnimationFrame.js":
false,

/***/ "./node_modules/antd/lib/_util/openAnimation.js":
false,

/***/ "./node_modules/antd/lib/_util/warning.js":
false,

/***/ "./node_modules/antd/lib/menu/MenuItem.js":
false,

/***/ "./node_modules/antd/lib/menu/SubMenu.js":
false,

/***/ "./node_modules/antd/lib/menu/index.js":
false,

/***/ "./node_modules/antd/lib/tooltip/index.js":
false,

/***/ "./node_modules/antd/lib/tooltip/placements.js":
false,

/***/ "./node_modules/babel-runtime/core-js/get-iterator.js":
false,

/***/ "./node_modules/babel-runtime/core-js/is-iterable.js":
false,

/***/ "./node_modules/babel-runtime/core-js/json/stringify.js":
false,

/***/ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js":
false,

/***/ "./node_modules/babel-runtime/helpers/slicedToArray.js":
false,

/***/ "./node_modules/component-classes/index.js":
false,

/***/ "./node_modules/component-indexof/index.js":
false,

/***/ "./node_modules/core-js/library/fn/get-iterator.js":
false,

/***/ "./node_modules/core-js/library/fn/is-iterable.js":
false,

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
false,

/***/ "./node_modules/core-js/library/modules/core.get-iterator.js":
false,

/***/ "./node_modules/core-js/library/modules/core.is-iterable.js":
false,

/***/ "./node_modules/create-react-class/factory.js":
false,

/***/ "./node_modules/create-react-class/index.js":
false,

/***/ "./node_modules/css-animation/es/Event.js":
false,

/***/ "./node_modules/css-animation/es/index.js":
false,

/***/ "./node_modules/define-properties/index.js":
false,

/***/ "./node_modules/dom-align/es/adjustForViewport.js":
false,

/***/ "./node_modules/dom-align/es/getAlignOffset.js":
false,

/***/ "./node_modules/dom-align/es/getElFuturePos.js":
false,

/***/ "./node_modules/dom-align/es/getOffsetParent.js":
false,

/***/ "./node_modules/dom-align/es/getRegion.js":
false,

/***/ "./node_modules/dom-align/es/getVisibleRectForElement.js":
false,

/***/ "./node_modules/dom-align/es/index.js":
false,

/***/ "./node_modules/dom-align/es/isAncestorFixed.js":
false,

/***/ "./node_modules/dom-align/es/propertyUtils.js":
false,

/***/ "./node_modules/dom-align/es/utils.js":
false,

/***/ "./node_modules/dom-scroll-into-view/lib/dom-scroll-into-view.js":
false,

/***/ "./node_modules/dom-scroll-into-view/lib/index.js":
false,

/***/ "./node_modules/dom-scroll-into-view/lib/util.js":
false,

/***/ "./node_modules/foreach/index.js":
false,

/***/ "./node_modules/function-bind/implementation.js":
false,

/***/ "./node_modules/function-bind/index.js":
false,

/***/ "./node_modules/has-symbols/shams.js":
false,

/***/ "./node_modules/has/src/index.js":
false,

/***/ "./node_modules/hoist-non-react-statics/index.js":
false,

/***/ "./node_modules/next/dist/lib/EventEmitter.js":
false,

/***/ "./node_modules/next/dist/lib/link.js":
false,

/***/ "./node_modules/next/dist/lib/p-queue.js":
false,

/***/ "./node_modules/next/dist/lib/router/index.js":
false,

/***/ "./node_modules/next/dist/lib/router/router.js":
false,

/***/ "./node_modules/next/dist/lib/router/with-router.js":
false,

/***/ "./node_modules/next/dist/lib/shallow-equals.js":
false,

/***/ "./node_modules/next/link.js":
false,

/***/ "./node_modules/object-keys/index.js":
false,

/***/ "./node_modules/object-keys/isArguments.js":
false,

/***/ "./node_modules/object.assign/implementation.js":
false,

/***/ "./node_modules/object.assign/index.js":
false,

/***/ "./node_modules/object.assign/polyfill.js":
false,

/***/ "./node_modules/object.assign/shim.js":
false,

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
false,

/***/ "./node_modules/prop-types-exact/build/index.js":
false,

/***/ "./node_modules/punycode/punycode.js":
false,

/***/ "./node_modules/querystring-es3/decode.js":
false,

/***/ "./node_modules/querystring-es3/encode.js":
false,

/***/ "./node_modules/querystring-es3/index.js":
false,

/***/ "./node_modules/rc-align/es/Align.js":
false,

/***/ "./node_modules/rc-align/es/index.js":
false,

/***/ "./node_modules/rc-align/es/isWindow.js":
false,

/***/ "./node_modules/rc-animate/es/Animate.js":
false,

/***/ "./node_modules/rc-animate/es/AnimateChild.js":
false,

/***/ "./node_modules/rc-animate/es/ChildrenUtils.js":
false,

/***/ "./node_modules/rc-animate/es/util.js":
false,

/***/ "./node_modules/rc-menu/es/DOMWrap.js":
false,

/***/ "./node_modules/rc-menu/es/Divider.js":
false,

/***/ "./node_modules/rc-menu/es/Menu.js":
false,

/***/ "./node_modules/rc-menu/es/MenuItem.js":
false,

/***/ "./node_modules/rc-menu/es/MenuItemGroup.js":
false,

/***/ "./node_modules/rc-menu/es/MenuMixin.js":
false,

/***/ "./node_modules/rc-menu/es/SubMenu.js":
false,

/***/ "./node_modules/rc-menu/es/SubPopupMenu.js":
false,

/***/ "./node_modules/rc-menu/es/index.js":
false,

/***/ "./node_modules/rc-menu/es/placements.js":
false,

/***/ "./node_modules/rc-menu/es/util.js":
false,

/***/ "./node_modules/rc-tooltip/es/Tooltip.js":
false,

/***/ "./node_modules/rc-tooltip/es/index.js":
false,

/***/ "./node_modules/rc-tooltip/es/placements.js":
false,

/***/ "./node_modules/rc-tooltip/lib/placements.js":
false,

/***/ "./node_modules/rc-trigger/es/LazyRenderBox.js":
false,

/***/ "./node_modules/rc-trigger/es/Popup.js":
false,

/***/ "./node_modules/rc-trigger/es/PopupInner.js":
false,

/***/ "./node_modules/rc-trigger/es/index.js":
false,

/***/ "./node_modules/rc-trigger/es/utils.js":
false,

/***/ "./node_modules/rc-util/es/ContainerRender.js":
false,

/***/ "./node_modules/rc-util/es/Dom/addEventListener.js":
false,

/***/ "./node_modules/rc-util/es/Dom/contains.js":
false,

/***/ "./node_modules/rc-util/es/KeyCode.js":
false,

/***/ "./node_modules/rc-util/es/Portal.js":
false,

/***/ "./node_modules/rc-util/es/createChainedFunction.js":
false,

/***/ "./node_modules/url/url.js":
false,

/***/ "./node_modules/url/util.js":
false,

/***/ "./node_modules/warning/browser.js":
false,

/***/ "./node_modules/webpack/buildin/global.js":
false,

/***/ "./node_modules/webpack/buildin/module.js":
false

})
//# sourceMappingURL=5.df2fa4b4d7019dba1b58.hot-update.js.map