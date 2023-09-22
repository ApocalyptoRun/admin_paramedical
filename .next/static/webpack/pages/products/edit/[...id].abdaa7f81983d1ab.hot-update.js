"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products/edit/[...id]",{

/***/ "./components/ProductForm.js":
/*!***********************************!*\
  !*** ./components/ProductForm.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ProductForm(param) {\n    let { _id, title: existingTitle, description: existingDescription, price: existingPrice, images } = param;\n    var _images;\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(existingTitle || \"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(existingDescription || \"\");\n    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(existingPrice || \"\");\n    const [gotToProduct, setGotToProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    async function saveProduct(ev) {\n        ev.preventDefault();\n        const data = {\n            title,\n            description,\n            price\n        };\n        if (_id) {\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].put(\"/api/products\", {\n                ...data,\n                _id\n            });\n        } else {\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/products\", data);\n        }\n        setGotToProduct(true);\n    }\n    if (gotToProduct) {\n        router.push(\"/products\");\n    }\n    /////////////////////////////////////////////////////\n    async function handleImageUpload(ev) {\n        var _ev_target, _file;\n        const file = (_ev_target = ev.target) === null || _ev_target === void 0 ? void 0 : _ev_target.files;\n        if (((_file = file) === null || _file === void 0 ? void 0 : _file.length) > 0) {\n            const data = new FormData();\n            for (const file of files){\n                data.append(\"file\", file);\n            }\n            const res = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/upload\", data, {\n                headers: {\n                    \"Content-Type\": \"multipart/form-data\"\n                }\n            });\n        }\n    //const imageUrl = \n    // const files = ev.target?.files[0];\n    // if(files?.length > 0){\n    //     const data = new FormData();\n    //     for(const file of files){\n    //         data.append('file',file)\n    //     }\n    //    const res = await axios.post('/api/upload', data, {\n    //     headers : {'Content-Type':'multipart/form-data'}\n    //    })\n    //    console.log(res.data)\n    // }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: saveProduct,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Product name \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\ProductForm.js\",\n                lineNumber: 72,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"product name\",\n                value: title,\n                onChange: (ev)=>setTitle(ev.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\ProductForm.js\",\n                lineNumber: 73,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Photos\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\ProductForm.js\",\n                lineNumber: 77,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"w-24 h-24 border flex items-center justify-center text-sm   gap-1 text-gray-500 rounded-lg bg-gray-200 cursor-pointer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                fill: \"none\",\n                                viewBox: \"0 0 24 24\",\n                                strokeWidth: 1.5,\n                                stroke: \"currentColor\",\n                                className: \"w-6 h-6 text-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\",\n                                    d: \"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\ProductForm.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\ProductForm.js\",\n                                lineNumber: 83,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Upload\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\ProductForm.js\",\n                                lineNumber: 89,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                onChange: handleImageUpload,\n                                type: \"file\",\n                                className: \"hidden\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\ProductForm.js\",\n                                lineNumber: 93,\n                                columnNumber: 25\n                            }, this),\n                            image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: image,\n                                alt: \"Uploaded\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\ProductForm.js\",\n                                lineNumber: 94,\n                                columnNumber: 35\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\ProductForm.js\",\n                        lineNumber: 81,\n                        columnNumber: 21\n                    }, this),\n                    !((_images = images) === null || _images === void 0 ? void 0 : _images.length) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"No photos in this products\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\ProductForm.js\",\n                        lineNumber: 98,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\ProductForm.js\",\n                lineNumber: 80,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"description\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\ProductForm.js\",\n                lineNumber: 102,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                placeholder: \"description\",\n                value: description,\n                onChange: (ev)=>setDescription(ev.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\ProductForm.js\",\n                lineNumber: 103,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"price (in USD)\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\ProductForm.js\",\n                lineNumber: 107,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                placeholder: \"price\",\n                value: price,\n                onChange: (ev)=>setPrice(ev.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\ProductForm.js\",\n                lineNumber: 108,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"btn-primary\",\n                children: \"Save\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\ProductForm.js\",\n                lineNumber: 112,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\IB\\\\Documents\\\\stageProjet\\\\test\\\\components\\\\ProductForm.js\",\n        lineNumber: 70,\n        columnNumber: 13\n    }, this);\n}\n_s(ProductForm, \"4NSDqjwCpkGOHpyOF6ogzPont+0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ProductForm;\nvar _c;\n$RefreshReg$(_c, \"ProductForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7OztvQkFHbEMsR0FBQy9DLFVBQUFBLG9CQUFBQSw4QkFBQUEsUUFBUW9CLE1BQU0sbUJBQ1osOERBQUNhO2tDQUFJOzs7Ozs7Ozs7Ozs7MEJBSWIsOERBQUNOOzBCQUFNOzs7Ozs7MEJBQ1AsOERBQUNxQjtnQkFBU2xCLGFBQVk7Z0JBQ3RCQyxPQUFPbkM7Z0JBQ1BvQyxVQUFVdEIsQ0FBQUEsS0FBTVIsZUFBZVEsR0FBR1EsTUFBTSxDQUFDYSxLQUFLOzs7Ozs7MEJBRTlDLDhEQUFDSjswQkFBTTs7Ozs7OzBCQUNQLDhEQUFDQztnQkFBTUMsTUFBSztnQkFBU0MsYUFBWTtnQkFDakNDLE9BQU9qQztnQkFDUGtDLFVBQVV0QixDQUFBQSxLQUFNUCxTQUFTTyxHQUFHUSxNQUFNLENBQUNhLEtBQUs7Ozs7OzswQkFFeEMsOERBQUNrQjtnQkFBT3BCLE1BQUs7Z0JBQVNLLFdBQVU7MEJBQWM7Ozs7Ozs7Ozs7OztBQUc5RDtHQTlHd0IxQzs7UUFjTEQsa0RBQVNBOzs7S0FkSkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0Rm9ybS5qcz9mNDliIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0Rm9ybSh7XHJcbiAgICBfaWQsXHJcbiAgICB0aXRsZTogZXhpc3RpbmdUaXRsZSxcclxuICAgIGRlc2NyaXB0aW9uOiBleGlzdGluZ0Rlc2NyaXB0aW9uLFxyXG4gICAgcHJpY2U6IGV4aXN0aW5nUHJpY2UsXHJcbiAgICBpbWFnZXMsXHJcbn0pIHtcclxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoZXhpc3RpbmdUaXRsZSB8fCAnJyk7XHJcbiAgICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKGV4aXN0aW5nRGVzY3JpcHRpb24gfHwgJycpO1xyXG4gICAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZShleGlzdGluZ1ByaWNlIHx8ICcnKTtcclxuICAgIGNvbnN0IFtnb3RUb1Byb2R1Y3QsIHNldEdvdFRvUHJvZHVjdF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBzYXZlUHJvZHVjdChldil7XHJcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBkYXRhID0ge3RpdGxlLCBkZXNjcmlwdGlvbiwgcHJpY2V9XHJcbiAgICAgICAgaWYoX2lkKXtcclxuICAgICAgICAgICAgYXdhaXQgYXhpb3MucHV0KCcvYXBpL3Byb2R1Y3RzJywgey4uLmRhdGEsX2lkfSk7ICAgICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9wcm9kdWN0cycsIGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRHb3RUb1Byb2R1Y3QodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBpZihnb3RUb1Byb2R1Y3Qpe1xyXG4gICAgICAgICByb3V0ZXIucHVzaCgnL3Byb2R1Y3RzJylcclxuICAgIH1cclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgXHJcbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVJbWFnZVVwbG9hZChldikge1xyXG4gICAgICAgIGNvbnN0IGZpbGUgPSBldi50YXJnZXQ/LmZpbGVzO1xyXG5cclxuICAgICAgICBpZihmaWxlPy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL3VwbG9hZCcsIGRhdGEsIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnMgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZScgOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAvL2NvbnN0IGltYWdlVXJsID0gXHJcblxyXG5cclxuICAgICAgICAvLyBjb25zdCBmaWxlcyA9IGV2LnRhcmdldD8uZmlsZXNbMF07XHJcbiAgICAgICAgLy8gaWYoZmlsZXM/Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgIC8vICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgLy8gICAgIGZvcihjb25zdCBmaWxlIG9mIGZpbGVzKXtcclxuICAgICAgICAvLyAgICAgICAgIGRhdGEuYXBwZW5kKCdmaWxlJyxmaWxlKVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS91cGxvYWQnLCBkYXRhLCB7XHJcbiAgICAgICAgLy8gICAgIGhlYWRlcnMgOiB7J0NvbnRlbnQtVHlwZSc6J211bHRpcGFydC9mb3JtLWRhdGEnfVxyXG4gICAgICAgIC8vICAgIH0pXHJcbiAgICAgICAgLy8gICAgY29uc29sZS5sb2cocmVzLmRhdGEpXHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzYXZlUHJvZHVjdH0+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlByb2R1Y3QgbmFtZSA8L2xhYmVsPiBcclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwicHJvZHVjdCBuYW1lXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aXRsZX0gXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXYgPT4gc2V0VGl0bGUoZXYudGFyZ2V0LnZhbHVlKX0vPlxyXG5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICBQaG90b3MgXHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInctMjQgaC0yNCBib3JkZXIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1zbVxyXG4gICAgICAgICAgICAgICAgICAgIGdhcC0xIHRleHQtZ3JheS01MDAgcm91bmRlZC1sZyBiZy1ncmF5LTIwMCBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezEuNX0gc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgY2xhc3NOYW1lPVwidy02IGgtNiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0zIDE2LjV2Mi4yNUEyLjI1IDIuMjUgMCAwMDUuMjUgMjFoMTMuNUEyLjI1IDIuMjUgMCAwMDIxIDE4Ljc1VjE2LjVtLTEzLjUtOUwxMiAzbTAgMGw0LjUgNC41TTEyIDN2MTMuNVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFVwbG9hZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17aGFuZGxlSW1hZ2VVcGxvYWR9IHR5cGU9XCJmaWxlXCIgY2xhc3NOYW1lPVwiaGlkZGVuXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aW1hZ2UgJiYgPGltZyBzcmM9e2ltYWdlfSBhbHQ9XCJVcGxvYWRlZFwiIC8+fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHshaW1hZ2VzPy5sZW5ndGggJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pk5vIHBob3RvcyBpbiB0aGlzIHByb2R1Y3RzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5kZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259IFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ID0+IHNldERlc2NyaXB0aW9uKGV2LnRhcmdldC52YWx1ZSl9Lz5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+cHJpY2UgKGluIFVTRCk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cInByaWNlXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcmljZX0gXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXYgPT4gc2V0UHJpY2UoZXYudGFyZ2V0LnZhbHVlKX0vPlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5XCI+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJheGlvcyIsInVzZVJvdXRlciIsIlByb2R1Y3RGb3JtIiwiX2lkIiwidGl0bGUiLCJleGlzdGluZ1RpdGxlIiwiZGVzY3JpcHRpb24iLCJleGlzdGluZ0Rlc2NyaXB0aW9uIiwicHJpY2UiLCJleGlzdGluZ1ByaWNlIiwiaW1hZ2VzIiwic2V0VGl0bGUiLCJzZXREZXNjcmlwdGlvbiIsInNldFByaWNlIiwiZ290VG9Qcm9kdWN0Iiwic2V0R290VG9Qcm9kdWN0IiwiaW1hZ2UiLCJzZXRJbWFnZSIsInJvdXRlciIsInNhdmVQcm9kdWN0IiwiZXYiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJwdXQiLCJwb3N0IiwicHVzaCIsImhhbmRsZUltYWdlVXBsb2FkIiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwibGVuZ3RoIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJyZXMiLCJoZWFkZXJzIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJzdmciLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94Iiwic3Ryb2tlV2lkdGgiLCJzdHJva2UiLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwiZCIsImltZyIsInNyYyIsImFsdCIsInRleHRhcmVhIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProductForm.js\n"));

/***/ })

});