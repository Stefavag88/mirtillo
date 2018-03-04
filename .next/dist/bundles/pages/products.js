module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = 'C:\\Users\\Vaggelis\\Desktop\\WorkSpace\\Mirtillo-Next\\components\\Footer.js';


/* harmony default export */ __webpack_exports__["a"] = (function () {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 4
            }
        },
        'This is the footer'
    );
});

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__StyledNav__ = __webpack_require__("./components/StyledNav.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme__ = __webpack_require__("./theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Meta__ = __webpack_require__("./components/Meta.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Footer__ = __webpack_require__("./components/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_resize_aware__ = __webpack_require__("react-resize-aware");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_resize_aware___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_resize_aware__);
var _jsxFileName = 'C:\\Users\\Vaggelis\\Desktop\\WorkSpace\\Mirtillo-Next\\components\\Layout.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Layout = function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.childWithProp = function (children, width, height) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(_this.props.children, function (child) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, { width: width, height: height });
      });
    };

    _this.handleResize = function (_ref) {
      var width = _ref.width,
          height = _ref.height;

      _this.setState(function (prevState, props) {
        return { width: width, height: height };
      });
    };

    _this.state = {};
    return _this;
  }

  _createClass(Layout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _ref2 = [window.innerWidth, window.innerHeight],
          width = _ref2[0],
          height = _ref2[1];

      this.setState({ width: width, height: height, children: this.childWithProp(this.props.children, width, height) });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          width = _state.width,
          height = _state.height,
          children = _state.children;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_styled_components__["ThemeProvider"],
        { theme: __WEBPACK_IMPORTED_MODULE_2__theme__["b" /* theme */], __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_react_resize_aware___default.a,
          { style: { position: 'relative' },
            onlyEvent: true,
            onResize: this.handleResize, __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'layout', __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__StyledNav__["a" /* default */], { width: width, height: height, url: this.props.url, __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              }
            }),
            children,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Footer__["a" /* default */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              }
            })
          )
        )
      );
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/Meta.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
var _jsxFileName = "C:\\Users\\Vaggelis\\Desktop\\WorkSpace\\Mirtillo-Next\\components\\Meta.js";



/* unused harmony default export */ var _unused_webpack_default_export = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1", __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { charSet: "utf-8", __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    })
  );
});

/***/ }),

/***/ "./components/StyledButton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button__ = __webpack_require__("antd/lib/button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button__);
var _templateObject = _taggedTemplateLiteral(['\n    border: none;\n    border-radius:50%;\n    font-size:1.5rem;\n    font-weight:700;\n    float: ', '\n'], ['\n    border: none;\n    border-radius:50%;\n    font-size:1.5rem;\n    font-weight:700;\n    float: ', '\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var StyledButton = __WEBPACK_IMPORTED_MODULE_0_styled_components___default()(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default.a)(_templateObject, function (props) {
    return props.float;
});

/* harmony default export */ __webpack_exports__["a"] = (StyledButton);

/***/ }),

/***/ "./components/StyledHr.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__("./theme/index.js");
var _templateObject = _taggedTemplateLiteral(['\n  height:0;\n  border:0;\n&:after{\n  display:block;\n  content:"";\n  border-top:1px solid rgba(0, 0, 0, 0.3);\n  width:', '\n  margin:auto;\n  height:6px;\n  background: radial-gradient(ellipse at 50% -100%,  rgba(0,0,0,0.6) 0,rgba(255,255,255,0) 70%); /* W3C */\n}\n'], ['\n  height:0;\n  border:0;\n&:after{\n  display:block;\n  content:"";\n  border-top:1px solid rgba(0, 0, 0, 0.3);\n  width:', '\n  margin:auto;\n  height:6px;\n  background: radial-gradient(ellipse at 50% -100%,  rgba(0,0,0,0.6) 0,rgba(255,255,255,0) 70%); /* W3C */\n}\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var StyledHr = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.hr(_templateObject, function (props) {
  return props.width >= __WEBPACK_IMPORTED_MODULE_1__theme__["a" /* sizes */].tablet ? '100%' : '97%';
});

/* harmony default export */ __webpack_exports__["a"] = (StyledHr);

/***/ }),

/***/ "./components/StyledMenu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__StyledMenuItem__ = __webpack_require__("./components/StyledMenuItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme__ = __webpack_require__("./theme/index.js");
var _jsxFileName = 'C:\\Users\\Vaggelis\\Desktop\\WorkSpace\\Mirtillo-Next\\components\\StyledMenu.js';

var _templateObject = _taggedTemplateLiteral(['\nbox-sizing: border-box;\npadding:0.1em;\ndisplay: flex;\n\n@media all and (max-width: ', 'px){\n    flex-direction:column;\n}\n'], ['\nbox-sizing: border-box;\npadding:0.1em;\ndisplay: flex;\n\n@media all and (max-width: ', 'px){\n    flex-direction:column;\n}\n']);



function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var StyledMenu = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.nav(_templateObject, __WEBPACK_IMPORTED_MODULE_4__theme__["a" /* sizes */].tablet);

/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
    var url = _ref.url,
        handleItemClick = _ref.handleItemClick;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        StyledMenu,
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 17
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
            { href: { pathname: "/about" }, passHref: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__StyledMenuItem__["a" /* default */],
                { active: url.pathname === '/about', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                    }
                },
                'about'
            )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
            { href: { pathname: "/index" }, passHref: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__StyledMenuItem__["a" /* default */],
                { active: url.pathname === '/index', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 22
                    }
                },
                'home'
            )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
            { href: { pathname: "/products" }, passHref: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1__StyledMenuItem__["a" /* default */],
                { active: url.pathname === '/products', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 25
                    }
                },
                'products'
            )
        )
    );
});

/***/ }),

/***/ "./components/StyledMenuItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
var _templateObject = _taggedTemplateLiteral(['\n    font-size: 1.5rem;\n    box-sizing: border-box;\n    font-weight: 300;\n    text-transform: uppercase;\n    text-decoration: none;\n    box-shadow: ', ';\n    padding:0.2em 0.4em;\n    margin:0.5em;\n    color: ', ';\n    &:hover{\n        box-shadow: 0 -0.1em 0 ', ' inset;\n    }\n    &:active {\n        color: ', ';\n    }\n'], ['\n    font-size: 1.5rem;\n    box-sizing: border-box;\n    font-weight: 300;\n    text-transform: uppercase;\n    text-decoration: none;\n    box-shadow: ', ';\n    padding:0.2em 0.4em;\n    margin:0.5em;\n    color: ', ';\n    &:hover{\n        box-shadow: 0 -0.1em 0 ', ' inset;\n    }\n    &:active {\n        color: ', ';\n    }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var MenuItem = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.a(_templateObject, function (props) {
    return props.active ? '0 -0.1em 0 ' + props.theme.hovered + ' inset' : '';
}, function (props) {
    return props.theme.textDark;
}, function (props) {
    return props.theme.accent;
}, function (props) {
    return props.theme.primary;
});

/* harmony default export */ __webpack_exports__["a"] = (MenuItem);

/***/ }),

/***/ "./components/StyledNav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__("./theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__StyledMenu__ = __webpack_require__("./components/StyledMenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__StyledButton__ = __webpack_require__("./components/StyledButton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_icon__ = __webpack_require__("antd/lib/icon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__StyledHr__ = __webpack_require__("./components/StyledHr.js");
var _jsxFileName = 'C:\\Users\\Vaggelis\\Desktop\\WorkSpace\\Mirtillo-Next\\components\\StyledNav.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
            var _props = this.props,
                url = _props.url,
                width = _props.width;


            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 22
                    }
                },
                width >= __WEBPACK_IMPORTED_MODULE_1__theme__["a" /* sizes */].tablet && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__StyledMenu__["a" /* default */], { url: url, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 24
                    }
                }),
                width < __WEBPACK_IMPORTED_MODULE_1__theme__["a" /* sizes */].tablet && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__StyledButton__["a" /* default */], { icon: 'bars', float: 'right', onClick: this.handleMenuToggle, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                    }
                }),
                width < __WEBPACK_IMPORTED_MODULE_1__theme__["a" /* sizes */].tablet && this.state.menuToggleOpen && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__StyledMenu__["a" /* default */], { url: url, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                    }
                }),
                (width >= __WEBPACK_IMPORTED_MODULE_1__theme__["a" /* sizes */].tablet || this.state.menuToggleOpen) && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__StyledHr__["a" /* default */], { width: width, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 30
                    }
                })
            );
        }
    }]);

    return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./pages/products.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./components/Layout.js");
var _jsxFileName = 'C:\\Users\\Vaggelis\\Desktop\\WorkSpace\\Mirtillo-Next\\pages\\products.js';



/* harmony default export */ __webpack_exports__["default"] = (function (props) {

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */],
        { url: props.url, __source: {
                fileName: _jsxFileName,
                lineNumber: 7
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            },
            'Products Page'
        )
    );
});

/***/ }),

/***/ "./theme/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return theme; });
var sizes = {
    desktop: 992,
    tablet: 768,
    phone: 376
};

/* unused harmony default export */ var _unused_webpack_default_export = (sizes);

var theme = {
    primary: '#4a4e69',
    accent: '#c9ada7',
    dark: '#22223b',
    bg: '#f2e9e5',
    hovered: '#9a8c98',
    textDark: '#131516',
    textLight: '#fefdfd'
};

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/products.js");


/***/ }),

/***/ "antd/lib/button":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/icon":
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-resize-aware":
/***/ (function(module, exports) {

module.exports = require("react-resize-aware");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=products.js.map