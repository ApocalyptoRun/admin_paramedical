"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/orders",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/nav */ \"./components/nav.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Logo */ \"./components/Logo.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Layout(param) {\n    let { children } = param;\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const [showNav, setShowNav] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    if (!session) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-bgGray w-screen h-screen flex items-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"google\"),\n                    className: \"bg-white p-2 rounded-lg\",\n                    children: \"Login with Google\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\layout.js\",\n                    lineNumber: 14,\n                    columnNumber: 12\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\layout.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\layout.js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-bgGray min-h-screen \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"block md:hidden flex items-center \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setShowNav(true),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                viewBox: \"0 0 24 24\",\n                                fill: \"currentColor\",\n                                class: \"w-6 h-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    \"fill-rule\": \"evenodd\",\n                                    d: \"M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z\",\n                                    \"clip-rule\": \"evenodd\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\layout.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 11\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\layout.js\",\n                                lineNumber: 25,\n                                columnNumber: 9\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\layout.js\",\n                            lineNumber: 24,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex grow justify-center mr-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\layout.js\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\layout.js\",\n                            lineNumber: 29,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\layout.js\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            show: showNav\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\layout.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-grow p-4 mb-2\",\n                            children: children\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\layout.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\layout.js\",\n                    lineNumber: 33,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\layout.js\",\n            lineNumber: 22,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(Layout, \"AJFBWQjVVKnvps9P4zRn97AKcaE=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNqQjtBQUNGO0FBQ1A7QUFFVixTQUFTSyxPQUFPLEtBQVU7UUFBVixFQUFDQyxRQUFRLEVBQUMsR0FBVjs7SUFDN0IsTUFBTSxFQUFDQyxNQUFNQyxPQUFPLEVBQUMsR0FBR1IsMkRBQVVBO0lBQ2xDLE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUV2QyxJQUFHLENBQUNLLFNBQVE7UUFDVixxQkFDRSw4REFBQ0c7WUFBSUMsV0FBVztzQkFDZCw0RUFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1osNEVBQUNDO29CQUFPQyxTQUFTLElBQU1iLHVEQUFNQSxDQUFDO29CQUFXVyxXQUFVOzhCQUEwQjs7Ozs7Ozs7Ozs7Ozs7OztJQUl0RjtJQUVBLHFCQUNFO2tCQUNBLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDQzs0QkFBT0MsU0FBUyxJQUFNSixXQUFXO3NDQUNsQyw0RUFBQ0s7Z0NBQUlDLE9BQU07Z0NBQTZCQyxTQUFRO2dDQUFZQyxNQUFLO2dDQUFlQyxPQUFNOzBDQUNwRiw0RUFBQ0M7b0NBQUtDLGFBQVU7b0NBQVVDLEdBQUU7b0NBQXdOQyxhQUFVOzs7Ozs7Ozs7Ozs7Ozs7O3NDQUdoUSw4REFBQ1o7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNSLDZDQUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHVCw4REFBQ087b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDVix1REFBR0E7NEJBQUNzQixNQUFNZjs7Ozs7O3NDQUNYLDhEQUFDRTs0QkFBSUMsV0FBVTtzQ0FDVk47Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRZjtHQXRDd0JEOztRQUNFTCx1REFBVUE7OztLQURaSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC5qcz8yOWE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25Jbn0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiXHJcbmltcG9ydCBOYXYgZnJvbSBcIkAvY29tcG9uZW50cy9uYXZcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBMb2dvIGZyb20gXCIuL0xvZ29cIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHtjaGlsZHJlbn0pIHtcclxuICBjb25zdCB7ZGF0YTogc2Vzc2lvbn0gPSB1c2VTZXNzaW9uKClcclxuICBjb25zdCBbc2hvd05hdiwgc2V0U2hvd05hdl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgaWYoIXNlc3Npb24pe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYmctYmdHcmF5IHctc2NyZWVuIGgtc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyXCJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduSW4oJ2dvb2dsZScpfSBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTIgcm91bmRlZC1sZ1wiPkxvZ2luIHdpdGggR29vZ2xlPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgIClcclxuICB9IFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmdHcmF5IG1pbi1oLXNjcmVlbiBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBtZDpoaWRkZW4gZmxleCBpdGVtcy1jZW50ZXIgXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TmF2KHRydWUpfT5cclxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwidy02IGgtNlwiPlxyXG4gICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMyA2Ljc1QS43NS43NSAwIDAxMy43NSA2aDE2LjVhLjc1Ljc1IDAgMDEwIDEuNUgzLjc1QS43NS43NSAwIDAxMyA2Ljc1ek0zIDEyYS43NS43NSAwIDAxLjc1LS43NWgxNi41YS43NS43NSAwIDAxMCAxLjVIMy43NUEuNzUuNzUgMCAwMTMgMTJ6bTAgNS4yNWEuNzUuNzUgMCAwMS43NS0uNzVoMTYuNWEuNzUuNzUgMCAwMTAgMS41SDMuNzVhLjc1Ljc1IDAgMDEtLjc1LS43NXpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ3JvdyBqdXN0aWZ5LWNlbnRlciBtci02XCI+XHJcbiAgICAgICAgICA8TG9nbyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICA8TmF2IHNob3c9e3Nob3dOYXZ9IC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBwLTQgbWItMlwiPlxyXG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPC8+XHJcbiAgKVxyXG4gIFxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTZXNzaW9uIiwic2lnbkluIiwiTmF2IiwidXNlU3RhdGUiLCJMb2dvIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJkYXRhIiwic2Vzc2lvbiIsInNob3dOYXYiLCJzZXRTaG93TmF2IiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsInN2ZyIsInhtbG5zIiwidmlld0JveCIsImZpbGwiLCJjbGFzcyIsInBhdGgiLCJmaWxsLXJ1bGUiLCJkIiwiY2xpcC1ydWxlIiwic2hvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout.js\n"));

/***/ })

});