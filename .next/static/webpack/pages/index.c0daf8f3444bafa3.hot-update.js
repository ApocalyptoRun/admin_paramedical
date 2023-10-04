"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/nav */ \"./components/nav.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Logo */ \"./components/Logo.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Layout(param) {\n    let { children } = param;\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const [showNav, setShowNav] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    console.log(session);\n    if (!session) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-bgGray w-screen h-screen flex items-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"google\"),\n                    className: \"bg-white p-2 rounded-lg shadow-md border\",\n                    children: \"Login with Google\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\layout.js\",\n                    lineNumber: 16,\n                    columnNumber: 12\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\layout.js\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\layout.js\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-bgGray min-h-screen \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"block md:hidden flex items-center \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setShowNav(true),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                viewBox: \"0 0 24 24\",\n                                fill: \"currentColor\",\n                                class: \"w-6 h-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    \"fill-rule\": \"evenodd\",\n                                    d: \"M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z\",\n                                    \"clip-rule\": \"evenodd\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\layout.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 11\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\layout.js\",\n                                lineNumber: 27,\n                                columnNumber: 9\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\layout.js\",\n                            lineNumber: 26,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex grow justify-center mr-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\layout.js\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\layout.js\",\n                            lineNumber: 31,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\layout.js\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            show: showNav\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\layout.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-grow p-4\",\n                            children: children\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\layout.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\layout.js\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\layout.js\",\n            lineNumber: 24,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(Layout, \"AJFBWQjVVKnvps9P4zRn97AKcaE=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNqQjtBQUNGO0FBQ1A7QUFFVixTQUFTSyxPQUFPLEtBQVU7UUFBVixFQUFDQyxRQUFRLEVBQUMsR0FBVjs7SUFDN0IsTUFBTSxFQUFDQyxNQUFNQyxPQUFPLEVBQUMsR0FBR1IsMkRBQVVBO0lBQ2xDLE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUV2Q1EsUUFBUUMsR0FBRyxDQUFDSjtJQUVaLElBQUcsQ0FBQ0EsU0FBUTtRQUNWLHFCQUNFLDhEQUFDSztZQUFJQyxXQUFXO3NCQUNkLDRFQUFDRDtnQkFBSUMsV0FBVTswQkFDWiw0RUFBQ0M7b0JBQU9DLFNBQVMsSUFBTWYsdURBQU1BLENBQUM7b0JBQVdhLFdBQVU7OEJBQTJDOzs7Ozs7Ozs7Ozs7Ozs7O0lBSXZHO0lBRUEscUJBQ0U7a0JBQ0EsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFPQyxTQUFTLElBQU1OLFdBQVc7c0NBQ2xDLDRFQUFDTztnQ0FBSUMsT0FBTTtnQ0FBNkJDLFNBQVE7Z0NBQVlDLE1BQUs7Z0NBQWVDLE9BQU07MENBQ3BGLDRFQUFDQztvQ0FBS0MsYUFBVTtvQ0FBVUMsR0FBRTtvQ0FBd05DLGFBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBR2hRLDhEQUFDWjs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ1YsNkNBQUlBOzs7Ozs7Ozs7Ozs7Ozs7OzhCQUdULDhEQUFDUztvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNaLHVEQUFHQTs0QkFBQ3dCLE1BQU1qQjs7Ozs7O3NDQUNYLDhEQUFDSTs0QkFBSUMsV0FBVTtzQ0FDVlI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRZjtHQXhDd0JEOztRQUNFTCx1REFBVUE7OztLQURaSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC5qcz8yOWE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25Jbn0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiXHJcbmltcG9ydCBOYXYgZnJvbSBcIkAvY29tcG9uZW50cy9uYXZcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBMb2dvIGZyb20gXCIuL0xvZ29cIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHtjaGlsZHJlbn0pIHtcclxuICBjb25zdCB7ZGF0YTogc2Vzc2lvbn0gPSB1c2VTZXNzaW9uKClcclxuICBjb25zdCBbc2hvd05hdiwgc2V0U2hvd05hdl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc29sZS5sb2coc2Vzc2lvbilcclxuXHJcbiAgaWYoIXNlc3Npb24pe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYmctYmdHcmF5IHctc2NyZWVuIGgtc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyXCJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduSW4oJ2dvb2dsZScpfSBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTIgcm91bmRlZC1sZyBzaGFkb3ctbWQgYm9yZGVyXCI+TG9naW4gd2l0aCBHb29nbGU8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgKVxyXG4gIH0gXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1iZ0dyYXkgbWluLWgtc2NyZWVuIFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIG1kOmhpZGRlbiBmbGV4IGl0ZW1zLWNlbnRlciBcIj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFNob3dOYXYodHJ1ZSl9PlxyXG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJ3LTYgaC02XCI+XHJcbiAgICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0zIDYuNzVBLjc1Ljc1IDAgMDEzLjc1IDZoMTYuNWEuNzUuNzUgMCAwMTAgMS41SDMuNzVBLjc1Ljc1IDAgMDEzIDYuNzV6TTMgMTJhLjc1Ljc1IDAgMDEuNzUtLjc1aDE2LjVhLjc1Ljc1IDAgMDEwIDEuNUgzLjc1QS43NS43NSAwIDAxMyAxMnptMCA1LjI1YS43NS43NSAwIDAxLjc1LS43NWgxNi41YS43NS43NSAwIDAxMCAxLjVIMy43NWEuNzUuNzUgMCAwMS0uNzUtLjc1elwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBncm93IGp1c3RpZnktY2VudGVyIG1yLTZcIj5cclxuICAgICAgICAgIDxMb2dvIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgIDxOYXYgc2hvdz17c2hvd05hdn0gLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93IHAtNFwiPlxyXG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPC8+XHJcbiAgKVxyXG4gIFxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsidXNlU2Vzc2lvbiIsInNpZ25JbiIsIk5hdiIsInVzZVN0YXRlIiwiTG9nbyIsIkxheW91dCIsImNoaWxkcmVuIiwiZGF0YSIsInNlc3Npb24iLCJzaG93TmF2Iiwic2V0U2hvd05hdiIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwic3ZnIiwieG1sbnMiLCJ2aWV3Qm94IiwiZmlsbCIsImNsYXNzIiwicGF0aCIsImZpbGwtcnVsZSIsImQiLCJjbGlwLXJ1bGUiLCJzaG93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout.js\n"));

/***/ })

});