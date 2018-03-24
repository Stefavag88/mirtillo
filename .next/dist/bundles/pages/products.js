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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
var _jsxFileName = 'C:\\Users\\Vaggelis\\Desktop\\WorkSpace\\Mirtillo\\Mirtillo-Next\\components\\Footer.js';



/* harmony default export */ __webpack_exports__["a"] = (function () {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'footer',
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 5
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Footer__ = __webpack_require__("./components/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_resize_aware__ = __webpack_require__("react-resize-aware");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_resize_aware___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_resize_aware__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_nprogress__ = __webpack_require__("nprogress");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_nprogress__);
var _jsxFileName = 'C:\\Users\\Vaggelis\\Desktop\\WorkSpace\\Mirtillo\\Mirtillo-Next\\components\\Layout.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Layout = function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.showLoadingBar = function () {
      __WEBPACK_IMPORTED_MODULE_6_next_router___default.a.onRouteChangeStart = function (url) {
        return __WEBPACK_IMPORTED_MODULE_7_nprogress___default.a.start();
      };
      __WEBPACK_IMPORTED_MODULE_6_next_router___default.a.onRouteChangeComplete = function () {
        return setTimeout(function () {
          return __WEBPACK_IMPORTED_MODULE_7_nprogress___default.a.done();
        }, 300);
      };
      __WEBPACK_IMPORTED_MODULE_6_next_router___default.a.onRouteChangeError = function () {
        return setTimeout(function () {
          return __WEBPACK_IMPORTED_MODULE_7_nprogress___default.a.done();
        }, 300);
      };
    };

    _this.childWithProp = function (width, height) {
      var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(_this.props.children, function (child) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, { width: width, height: height });
      });
    };

    _this.handleResize = function (_ref) {
      var width = _ref.width,
          height = _ref.height;

      console.log('Resizing...');
      _this.setState(function (prevState, props) {
        return { width: width, height: height, children: _this.childWithProp(width, height) };
      });
    };

    _this.state = {};
    return _this;
  }

  _createClass(Layout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.showLoadingBar();
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
            lineNumber: 44
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_react_resize_aware___default.a,
          { style: { position: 'relative' },
            onlyEvent: true,
            onResize: this.handleResize, __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__StyledNav__["a" /* default */], { width: width, height: height, url: this.props.url, __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          }),
          children,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Footer__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            }
          })
        )
      );
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/Product.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__StyledIcon__ = __webpack_require__("./components/StyledIcon.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__StyledTooltip__ = __webpack_require__("./components/StyledTooltip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme__ = __webpack_require__("./theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__StyledButton__ = __webpack_require__("./components/StyledButton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_router__);
var _jsxFileName = 'C:\\Users\\Vaggelis\\Desktop\\WorkSpace\\Mirtillo\\Mirtillo-Next\\components\\Product.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    width: 320px;\n    height:320px;\n    margin: 1em;\n    border-radius:0.2em;\n    overflow:hidden;\n    display:flex;\n    position:relative;\n    flex-direction:column;\n    align-content: space-between;\n    justify-content: space-between;\n    background:rgba(255,255,255,0.7);\n    transition: all 0.4s ease-in-out;\n    @media all and (max-width: ', 'px){\n        width: 280px;\n        height:280px;\n    }\n    @media all and (min-width: 550px) and (max-width: ', 'px){\n        width: 496px;\n        height: 496px;\n    }\n\n'], ['\n    width: 320px;\n    height:320px;\n    margin: 1em;\n    border-radius:0.2em;\n    overflow:hidden;\n    display:flex;\n    position:relative;\n    flex-direction:column;\n    align-content: space-between;\n    justify-content: space-between;\n    background:rgba(255,255,255,0.7);\n    transition: all 0.4s ease-in-out;\n    @media all and (max-width: ', 'px){\n        width: 280px;\n        height:280px;\n    }\n    @media all and (min-width: 550px) and (max-width: ', 'px){\n        width: 496px;\n        height: 496px;\n    }\n\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    object-fit:cover;\n    max-width:100%;\n    z-index:2;\n    &:hover{\n        transform: scale(1.2);\n    }\n    transition: all 0.4s ease-in-out;\n'], ['\n    object-fit:cover;\n    max-width:100%;\n    z-index:2;\n    &:hover{\n        transform: scale(1.2);\n    }\n    transition: all 0.4s ease-in-out;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    position:absolute;\n    margin:1em;\n    bottom:0;\n    font-size:1.2em;\n    font-weight:500;\n    left:', ';\n    z-index:', ';\n    color:', ';\n    transition: all 0.256s ease-in-out;\n'], ['\n    position:absolute;\n    margin:1em;\n    bottom:0;\n    font-size:1.2em;\n    font-weight:500;\n    left:', ';\n    z-index:', ';\n    color:', ';\n    transition: all 0.256s ease-in-out;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    display:flex;\n    flex-direction:column;\n    position:absolute;\n    top:0;\n    font-size:1.5em;\n    font-weight:700;\n    right:', ';\n    z-index:', ';\n    color:', ';\n    transition: all 0.256s ease-in-out;\n'], ['\n    display:flex;\n    flex-direction:column;\n    position:absolute;\n    top:0;\n    font-size:1.5em;\n    font-weight:700;\n    right:', ';\n    z-index:', ';\n    color:', ';\n    transition: all 0.256s ease-in-out;\n']);



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var StyledCard = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.div(_templateObject, __WEBPACK_IMPORTED_MODULE_4__theme__["a" /* sizes */].phone, __WEBPACK_IMPORTED_MODULE_4__theme__["a" /* sizes */].tablet);

var StyledPic = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.picture(_templateObject2);
var StyledProductName = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.span(_templateObject3, function (props) {
    return props.show ? '0' : '-100%';
}, function (props) {
    return props.show ? '40' : '0';
}, function (props) {
    return props.show ? 'white' : 'transparent';
});

var StyledProductIcons = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.section(_templateObject4, function (props) {
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

        _this.navigateToProduct = function (id) {
            __WEBPACK_IMPORTED_MODULE_6_next_router___default.a.push({
                pathname: '/product/' + id

            });
        };

        _this.state = { isMouseOn: false };
        return _this;
    }

    _createClass(Product, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                width = _props.width,
                height = _props.height,
                id = _props.id,
                name = _props.name,
                picture = _props.picture;


            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                StyledCard,
                { onMouseEnter: this.onMouseEnter,
                    onMouseLeave: this.onMouseLeave,
                    onClick: function onClick() {
                        return _this2.navigateToProduct(id);
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 94
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    StyledPic,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 97
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('source', { media: '(max-width: 420px)',
                        srcset: '/static/images/' + picture + '-360w.jpg 1x, /static/images/' + picture + '-360w_2x.jpg 2x', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 98
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('source', { media: '(min-width: 421px) and (max-width: 768px)',
                        srcset: '/static/images/' + picture + '-496w.jpg 1x, /static/images/' + picture + '-496w_2x.jpg 2x', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 100
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/static/images/' + picture + '-360w.jpg', key: id, alt: name, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 102
                        }
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    StyledProductName,
                    { show: this.state.isMouseOn, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 104
                        }
                    },
                    name
                ),
                '}',
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    StyledProductIcons,
                    { show: this.state.isMouseOn, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 105
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2__StyledTooltip__["a" /* default */],
                        { placement: 'topLeft', title: 'Add To Favorites', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 106
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__StyledButton__["a" /* default */], { circle: true, icon: 'heart', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 107
                            }
                        })
                    )
                )
            );
        }
    }]);

    return Product;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Product);

/***/ }),

/***/ "./components/ProductsList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Product__ = __webpack_require__("./components/Product.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_styled_components__);
var _jsxFileName = 'C:\\Users\\Vaggelis\\Desktop\\WorkSpace\\Mirtillo\\Mirtillo-Next\\components\\ProductsList.js';

var _templateObject = _taggedTemplateLiteral(['\n    display:flex;\n    flex-wrap:wrap;\n    justify-content:center;\n    align-items:center;\n\n'], ['\n    display:flex;\n    flex-wrap:wrap;\n    justify-content:center;\n    align-items:center;\n\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  query products($limit: Int!) {\n    products(limit: $limit) {\n      id\n      name\n      category\n      description\n      available\n    }\n  }\n'], ['\n  query products($limit: Int!) {\n    products(limit: $limit) {\n      id\n      name\n      category\n      description\n      available\n    }\n  }\n']);



function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var POSTS_PER_PAGE = 10;

var StyledProductList = __WEBPACK_IMPORTED_MODULE_4_styled_components___default.a.section(_templateObject);

var ProductsList = function ProductsList(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_react_apollo__["Query"],
    { query: GET_PRODUCTS, variables: { limit: props.limit }, __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    },
    function (_ref) {
      var loading = _ref.loading,
          error = _ref.error,
          data = _ref.data;

      if (loading) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        },
        'Loading ...'
      );
      if (error) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        },
        'Error loading posts.'
      );
      if (data.products && data.products.length) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          StyledProductList,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          },
          data.products.map(function (product, index) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Product__["a" /* default */], { key: product.id, id: product.id, name: product.name, picture: 'marias_feet', __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              }
            });
          })
        );
      }
    }
  );
};

var GET_PRODUCTS = __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default()(_templateObject2);
/* harmony default export */ __webpack_exports__["a"] = (ProductsList);

/***/ }),

/***/ "./components/StyledButton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button__ = __webpack_require__("antd/lib/button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme__ = __webpack_require__("./theme/index.js");
var _templateObject = _taggedTemplateLiteral(['\n    border: none;\n    font-family: 700;\n    border-radius:', ';\n    align-self:flex-end;\n    justify-self:flex-end;\n    background:transparent;\n    &:hover{\n        background:transparent;\n        color: ', ';\n    }\n    color: ', ';\n\n    font-size:', ';\n    margin:0.5em 0.5em;\n'], ['\n    border: none;\n    font-family: 700;\n    border-radius:', ';\n    align-self:flex-end;\n    justify-self:flex-end;\n    background:transparent;\n    &:hover{\n        background:transparent;\n        color: ', ';\n    }\n    color: ', ';\n\n    font-size:', ';\n    margin:0.5em 0.5em;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var StyledButton = __WEBPACK_IMPORTED_MODULE_0_styled_components___default()(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default.a)(_templateObject, function (props) {
    return props.circle ? '50%' : '0.2em';
}, __WEBPACK_IMPORTED_MODULE_2__theme__["b" /* theme */].accent, function (props) {
    switch (props.color) {
        case 'primary':
            return __WEBPACK_IMPORTED_MODULE_2__theme__["b" /* theme */].primary;
        case 'hovered':
            return __WEBPACK_IMPORTED_MODULE_2__theme__["b" /* theme */].hovered;
        case 'accent':
            return __WEBPACK_IMPORTED_MODULE_2__theme__["b" /* theme */].accent;
        case 'dark':
            return __WEBPACK_IMPORTED_MODULE_2__theme__["b" /* theme */].dark;
        default:
            return __WEBPACK_IMPORTED_MODULE_2__theme__["b" /* theme */].textLight;
    }
}, function (props) {
    return props.big ? '1.8em' : '1.2em';
});

/* harmony default export */ __webpack_exports__["a"] = (StyledButton);

/***/ }),

/***/ "./components/StyledHr.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__("./theme/index.js");
var _templateObject = _taggedTemplateLiteral(['\n  height:0;\n  border:0;\n  -webkit-margin-before: 0;\n  -webkit-margin-after: 0.5em;\n&:after{\n  display:block;\n  content:"";\n  border-top:1px solid ', ';\n  width:', ';\n  margin:0 auto;\n  height:0.4em;\n  background: radial-gradient(ellipse at 50% -100%, ', ' 0,rgba(255,255,255,0) 70%); /* W3C */\n}\n'], ['\n  height:0;\n  border:0;\n  -webkit-margin-before: 0;\n  -webkit-margin-after: 0.5em;\n&:after{\n  display:block;\n  content:"";\n  border-top:1px solid ', ';\n  width:', ';\n  margin:0 auto;\n  height:0.4em;\n  background: radial-gradient(ellipse at 50% -100%, ', ' 0,rgba(255,255,255,0) 70%); /* W3C */\n}\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var StyledHr = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.hr(_templateObject, function (props) {
  return props.theme.hovered;
}, function (props) {
  return props.width >= __WEBPACK_IMPORTED_MODULE_1__theme__["a" /* sizes */].tablet ? '100%' : '98%';
}, function (props) {
  return props.theme.hovered;
});

/* harmony default export */ __webpack_exports__["a"] = (StyledHr);

/***/ }),

/***/ "./components/StyledIcon.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon__ = __webpack_require__("antd/lib/icon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme__ = __webpack_require__("./theme/index.js");


var _templateObject = _taggedTemplateLiteral(['\n    color: ', ';\n\n    font-size:1em;\n    margin:0.5em 1em;\n    @media screen and (max-width:', 'px){\n        font-size: 1.2em;\n        margin:0.3em 0.6em;\n    } \n    @media screen and (min-width:', 'px) and (max-width:', 'px){\n        font-size: 1.4em;\n        margin:0.4em 0.8em;\n    } \n'], ['\n    color: ', ';\n\n    font-size:1em;\n    margin:0.5em 1em;\n    @media screen and (max-width:', 'px){\n        font-size: 1.2em;\n        margin:0.3em 0.6em;\n    } \n    @media screen and (min-width:', 'px) and (max-width:', 'px){\n        font-size: 1.4em;\n        margin:0.4em 0.8em;\n    } \n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var StyledIcon = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()(__WEBPACK_IMPORTED_MODULE_0_antd_lib_icon___default.a)(_templateObject, function (props) {
    switch (props.color) {
        case 'primary':
            return __WEBPACK_IMPORTED_MODULE_2__theme__["b" /* theme */].primary;
        case 'hovered':
            return __WEBPACK_IMPORTED_MODULE_2__theme__["b" /* theme */].hovered;
        case 'accent':
            return __WEBPACK_IMPORTED_MODULE_2__theme__["b" /* theme */].accent;
        case 'dark':
            return __WEBPACK_IMPORTED_MODULE_2__theme__["b" /* theme */].dark;
        default:
            return __WEBPACK_IMPORTED_MODULE_2__theme__["b" /* theme */].textLight;
    }
}, __WEBPACK_IMPORTED_MODULE_2__theme__["a" /* sizes */].phone, __WEBPACK_IMPORTED_MODULE_2__theme__["a" /* sizes */].phone + 1, __WEBPACK_IMPORTED_MODULE_2__theme__["a" /* sizes */].tablet);

/* unused harmony default export */ var _unused_webpack_default_export = (StyledIcon);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_router__);
var _jsxFileName = 'C:\\Users\\Vaggelis\\Desktop\\WorkSpace\\Mirtillo\\Mirtillo-Next\\components\\StyledMenu.js';

var _templateObject = _taggedTemplateLiteral(['\nbox-sizing: border-box;\npadding:0.1em;\ndisplay: flex;\n@media all and (max-width: ', 'px){\n    flex-direction:column;\n}\n'], ['\nbox-sizing: border-box;\npadding:0.1em;\ndisplay: flex;\n@media all and (max-width: ', 'px){\n    flex-direction:column;\n}\n']);



function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var StyledMenu = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.nav(_templateObject, __WEBPACK_IMPORTED_MODULE_4__theme__["a" /* sizes */].tablet);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_5_next_router__["withRouter"])(function (_ref) {
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
}));

/***/ }),

/***/ "./components/StyledMenuItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__("./theme/index.js");
var _templateObject = _taggedTemplateLiteral(['\n    font-size: 1.5rem;\n    box-sizing: border-box;\n    font-weight: 300;\n    text-transform: uppercase;\n    text-decoration: none;\n    box-shadow: ', ';\n    padding:0.3em 0.5em;\n    margin:0.02em 0.3em;\n    color: ', ';\n\n    @media all and (max-width: ', 'px){\n        font-size:1.3rem;\n    }\n    &:hover{\n        color: ', ';\n        box-shadow: 0 0.12em 0 ', ';\n    }\n    &:active {\n        color: ', ';\n    }\n'], ['\n    font-size: 1.5rem;\n    box-sizing: border-box;\n    font-weight: 300;\n    text-transform: uppercase;\n    text-decoration: none;\n    box-shadow: ', ';\n    padding:0.3em 0.5em;\n    margin:0.02em 0.3em;\n    color: ', ';\n\n    @media all and (max-width: ', 'px){\n        font-size:1.3rem;\n    }\n    &:hover{\n        color: ', ';\n        box-shadow: 0 0.12em 0 ', ';\n    }\n    &:active {\n        color: ', ';\n    }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var MenuItem = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.a(_templateObject, function (props) {
    return props.active ? '0 0.1em 0 ' + props.theme.hovered : '';
}, function (props) {
    return props.theme.dark;
}, __WEBPACK_IMPORTED_MODULE_1__theme__["a" /* sizes */].phone, function (props) {
    return props.theme.hoveredOpated;
}, function (props) {
    return props.theme.accent;
}, function (props) {
    return props.theme.hoveredOpated;
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
var _jsxFileName = 'C:\\Users\\Vaggelis\\Desktop\\WorkSpace\\Mirtillo\\Mirtillo-Next\\components\\StyledNav.js';

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
                { style: { display: 'flex', flexDirection: 'column' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 22
                    }
                },
                width >= __WEBPACK_IMPORTED_MODULE_1__theme__["a" /* sizes */].tablet && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__StyledMenu__["a" /* default */], { url: url, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 24
                    }
                }),
                width < __WEBPACK_IMPORTED_MODULE_1__theme__["a" /* sizes */].tablet && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__StyledButton__["a" /* default */], { color: 'dark', big: true, circle: true, icon: 'bars', onClick: this.handleMenuToggle, __source: {
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

/***/ "./components/StyledTooltip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_tooltip__ = __webpack_require__("antd/lib/tooltip");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme__ = __webpack_require__("./theme/index.js");


var _templateObject = _taggedTemplateLiteral(['\n    background: ', ';\n    color: ', ';\n    margin-bottom:-0.5em;\n'], ['\n    background: ', ';\n    color: ', ';\n    margin-bottom:-0.5em;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var StyledTooltip = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()(__WEBPACK_IMPORTED_MODULE_0_antd_lib_tooltip___default.a)(_templateObject, __WEBPACK_IMPORTED_MODULE_2__theme__["b" /* theme */].dark, __WEBPACK_IMPORTED_MODULE_2__theme__["b" /* theme */].accent);

/* harmony default export */ __webpack_exports__["a"] = (StyledTooltip);

/***/ }),

/***/ "./lib/apollo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_apollo__ = __webpack_require__("next-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_link_http__ = __webpack_require__("apollo-link-http");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_link_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_apollo_link_http__);



var config = {
  link: new __WEBPACK_IMPORTED_MODULE_1_apollo_link_http__["HttpLink"]({
    uri: "http://localhost:8080/graphql", // Server URL (must be absolute)
    opts: {
      credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
    }
  })
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_next_apollo__["withData"])(config));

/***/ }),

/***/ "./pages/products.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ProductsList__ = __webpack_require__("./components/ProductsList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_apollo__ = __webpack_require__("./lib/apollo.js");
var _jsxFileName = 'C:\\Users\\Vaggelis\\Desktop\\WorkSpace\\Mirtillo\\Mirtillo-Next\\pages\\products.js';





/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_3__lib_apollo__["a" /* default */])(function (props) {

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */],
        { url: props.url, __source: {
                fileName: _jsxFileName,
                lineNumber: 9
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_ProductsList__["a" /* default */], { limit: 20, height: props.height, width: props.width, __source: {
                fileName: _jsxFileName,
                lineNumber: 10
            }
        })
    );
}));

/***/ }),

/***/ "./theme/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return theme; });
var sizes = {
    desktop: 992,
    tablet: 768,
    phone: 420
};

/* unused harmony default export */ var _unused_webpack_default_export = (sizes);

var theme = {
    primary: '#4a4e69',
    accent: '#c9ada7',
    dark: '#22223b',
    bg: '#f2e9e5',
    hovered: '#9a8c98',
    textDark: '#131516',
    textLight: '#fefdfd',
    primaryOpated: 'rgba(74,78,105,0.7)',
    darkOpated: 'rgba(34,34,59,0.8)',
    hoveredOpated: 'rgba(154,140,152,0.8)',
    bgOpated: 'rgba(242,233,229,0.3)'
};

/***/ }),

/***/ 3:
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

/***/ "antd/lib/tooltip":
/***/ (function(module, exports) {

module.exports = require("antd/lib/tooltip");

/***/ }),

/***/ "apollo-link-http":
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "graphql-tag":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next-apollo":
/***/ (function(module, exports) {

module.exports = require("next-apollo");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

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