"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/news/[news]",{

/***/ "./src/pages/Product/Product.tsx":
/*!***************************************!*\
  !*** ./src/pages/Product/Product.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components */ \"./src/components/index.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Product = function(param) {\n    var pageData = param.pageData, items = param.items;\n    var _this1 = _this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"products\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"title\",\n                        children: pageData.name\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Pham Gia Vy\\\\work\\\\puzzle.decornow\\\\fe\\\\src\\\\pages\\\\Product\\\\Product.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flexbox flex6 mt-30\",\n                        children: items === null || items === void 0 ? void 0 : items.data.map(function(o) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"item\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/\".concat(o.type === 1 ? \"product-detail\" : \"news-detail\", \"/\").concat(o.slug),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"product\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"img\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    className: \"cover\",\n                                                    src: o.thumbnail,\n                                                    alt: \"\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Pham Gia Vy\\\\work\\\\puzzle.decornow\\\\fe\\\\src\\\\pages\\\\Product\\\\Product.tsx\",\n                                                    lineNumber: 24,\n                                                    columnNumber: 41\n                                                }, _this1)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Pham Gia Vy\\\\work\\\\puzzle.decornow\\\\fe\\\\src\\\\pages\\\\Product\\\\Product.tsx\",\n                                                lineNumber: 23,\n                                                columnNumber: 37\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"name\",\n                                                children: o.name\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Pham Gia Vy\\\\work\\\\puzzle.decornow\\\\fe\\\\src\\\\pages\\\\Product\\\\Product.tsx\",\n                                                lineNumber: 26,\n                                                columnNumber: 37\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"price\",\n                                                children: [\n                                                    o.price.toLocaleString(),\n                                                    \"\\u0111\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\Pham Gia Vy\\\\work\\\\puzzle.decornow\\\\fe\\\\src\\\\pages\\\\Product\\\\Product.tsx\",\n                                                lineNumber: 29,\n                                                columnNumber: 37\n                                            }, _this1)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Pham Gia Vy\\\\work\\\\puzzle.decornow\\\\fe\\\\src\\\\pages\\\\Product\\\\Product.tsx\",\n                                        lineNumber: 22,\n                                        columnNumber: 33\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Pham Gia Vy\\\\work\\\\puzzle.decornow\\\\fe\\\\src\\\\pages\\\\Product\\\\Product.tsx\",\n                                    lineNumber: 21,\n                                    columnNumber: 29\n                                }, _this1)\n                            }, o._id, false, {\n                                fileName: \"D:\\\\Pham Gia Vy\\\\work\\\\puzzle.decornow\\\\fe\\\\src\\\\pages\\\\Product\\\\Product.tsx\",\n                                lineNumber: 20,\n                                columnNumber: 47\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Pham Gia Vy\\\\work\\\\puzzle.decornow\\\\fe\\\\src\\\\pages\\\\Product\\\\Product.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Pham Gia Vy\\\\work\\\\puzzle.decornow\\\\fe\\\\src\\\\pages\\\\Product\\\\Product.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_1__.Pagination, {\n                        onChange: function(page) {\n                            return router.push(\"/product/\".concat(router.query.product, \"?page=\").concat(page));\n                        },\n                        current: items.current,\n                        pageSize: items.pageSize,\n                        total: items.total\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Pham Gia Vy\\\\work\\\\puzzle.decornow\\\\fe\\\\src\\\\pages\\\\Product\\\\Product.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Pham Gia Vy\\\\work\\\\puzzle.decornow\\\\fe\\\\src\\\\pages\\\\Product\\\\Product.tsx\",\n                lineNumber: 17,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Pham Gia Vy\\\\work\\\\puzzle.decornow\\\\fe\\\\src\\\\pages\\\\Product\\\\Product.tsx\",\n            lineNumber: 16,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false);\n};\n_s(Product, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvUHJvZHVjdC9Qcm9kdWN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUF3QztBQUNYO0FBQ1c7O0FBUXhDLElBQU1HLE9BQU8sR0FBZ0IsZ0JBQXlCO1FBQXRCQyxRQUFRLFNBQVJBLFFBQVEsRUFBRUMsS0FBSyxTQUFMQSxLQUFLOzs7SUFDM0MsSUFBTUMsTUFBTSxHQUFHSixzREFBUyxFQUFFO0lBRTFCLHFCQUNJO2tCQUNJLDRFQUFDSyxLQUFHO1lBQUNDLFNBQVMsRUFBQyxVQUFVO3NCQUNyQiw0RUFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLFdBQVc7O2tDQUN0Qiw4REFBQ0MsSUFBRTt3QkFBQ0QsU0FBUyxFQUFDLE9BQU87a0NBQUVKLFFBQVEsQ0FBQ00sSUFBSTs7Ozs7NkJBQU07a0NBQzFDLDhEQUFDSCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMscUJBQXFCO2tDQUMvQkgsS0FBSyxhQUFMQSxLQUFLLFdBQU0sR0FBWEEsS0FBQUEsQ0FBVyxHQUFYQSxLQUFLLENBQUVNLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxTQUFBQSxDQUFDO2lEQUFJLDhEQUFDTixLQUFHO2dDQUFhQyxTQUFTLEVBQUMsTUFBTTswQ0FDbkQsNEVBQUNQLGtEQUFJO29DQUFDYSxJQUFJLEVBQUUsR0FBRSxDQUFxREQsTUFBTSxDQUF6REEsQ0FBQyxDQUFDRSxJQUFJLEtBQUssQ0FBQyxHQUFHLGdCQUFnQixHQUFHLGFBQWEsRUFBQyxHQUFDLENBQVMsUUFBUEYsQ0FBQyxDQUFDRyxJQUFJLENBQUU7OENBQ3ZFLDRFQUFDQyxHQUFDO3dDQUFDVCxTQUFTLEVBQUMsU0FBUzs7MERBQ2xCLDhEQUFDRCxLQUFHO2dEQUFDQyxTQUFTLEVBQUMsS0FBSzswREFDaEIsNEVBQUNVLEtBQUc7b0RBQUNWLFNBQVMsRUFBQyxPQUFPO29EQUFDVyxHQUFHLEVBQUVOLENBQUMsQ0FBQ08sU0FBUztvREFBRUMsR0FBRyxFQUFDLEVBQUU7Ozs7OzBEQUFHOzs7OztzREFDaEQ7MERBQ04sOERBQUNkLEtBQUc7Z0RBQUNDLFNBQVMsRUFBQyxNQUFNOzBEQUNoQkssQ0FBQyxDQUFDSCxJQUFJOzs7OztzREFDTDswREFDTiw4REFBQ0gsS0FBRztnREFBQ0MsU0FBUyxFQUFDLE9BQU87O29EQUFFSyxDQUFDLENBQUNTLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO29EQUFDLFFBQUM7Ozs7OztzREFBTTs7Ozs7OzhDQUN4RDs7Ozs7MENBQ0Q7K0JBWHFCVixDQUFDLENBQUNXLEdBQUc7Ozs7c0NBWS9CO3lCQUFBLENBQUM7Ozs7OzZCQUVMO2tDQUNOLDhEQUFDakIsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLEtBQUs7Ozs7OzZCQUNkO2tDQUNOLDhEQUFDUixrREFBVTt3QkFDUHlCLFFBQVEsRUFBRSxTQUFDQyxJQUFJO21DQUFLcEIsTUFBTSxDQUFDcUIsSUFBSSxDQUFDLFdBQVUsQ0FBK0JELE1BQUksQ0FBakNwQixNQUFNLENBQUNzQixLQUFLLENBQUNDLE9BQU8sRUFBQyxRQUFNLENBQU8sUUFBTEgsSUFBSSxDQUFFLENBQUM7eUJBQUE7d0JBQ2hGSSxPQUFPLEVBQUV6QixLQUFLLENBQUN5QixPQUFPO3dCQUN0QkMsUUFBUSxFQUFFMUIsS0FBSyxDQUFDMEIsUUFBUTt3QkFDeEJDLEtBQUssRUFBRTNCLEtBQUssQ0FBQzJCLEtBQUs7Ozs7OzZCQUFJOzs7Ozs7cUJBQ3hCOzs7OztpQkFDSjtxQkFDUCxDQUVOO0NBQ0o7R0FwQ0s3QixPQUFPOztRQUNNRCxrREFBUzs7O0FBRHRCQyxLQUFBQSxPQUFPO0FBc0NiLCtEQUFlQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9Qcm9kdWN0L1Byb2R1Y3QudHN4PzAxZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnaW5hdGlvbiB9IGZyb20gXCJjb21wb25lbnRzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XHJcbmludGVyZmFjZSBQcm9kdWN0IHtcclxuICAgIHBhZ2VEYXRhOiB7XHJcbiAgICAgICAgW2s6IHN0cmluZ106IGFueVxyXG4gICAgfSxcclxuICAgIGl0ZW1zOiB7IFtrOiBzdHJpbmddOiBhbnkgfVxyXG59XHJcbmNvbnN0IFByb2R1Y3Q6IEZDPFByb2R1Y3Q+ID0gKHsgcGFnZURhdGEsIGl0ZW1zIH0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPntwYWdlRGF0YS5uYW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4Ym94IGZsZXg2IG10LTMwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcz8uZGF0YS5tYXAobyA9PiA8ZGl2IGtleT17by5faWR9IGNsYXNzTmFtZT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtvLnR5cGUgPT09IDEgPyAncHJvZHVjdC1kZXRhaWwnIDogJ25ld3MtZGV0YWlsJ30vJHtvLnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjb3ZlclwiIHNyYz17by50aHVtYm5haWx9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlXCI+e28ucHJpY2UudG9Mb2NhbGVTdHJpbmcoKX3EkTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8UGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHBhZ2UpID0+IHJvdXRlci5wdXNoKGAvcHJvZHVjdC8ke3JvdXRlci5xdWVyeS5wcm9kdWN0fT9wYWdlPSR7cGFnZX1gKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudD17aXRlbXMuY3VycmVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU9e2l0ZW1zLnBhZ2VTaXplfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbD17aXRlbXMudG90YWx9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Il0sIm5hbWVzIjpbIlBhZ2luYXRpb24iLCJMaW5rIiwidXNlUm91dGVyIiwiUHJvZHVjdCIsInBhZ2VEYXRhIiwiaXRlbXMiLCJyb3V0ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm5hbWUiLCJkYXRhIiwibWFwIiwibyIsImhyZWYiLCJ0eXBlIiwic2x1ZyIsImEiLCJpbWciLCJzcmMiLCJ0aHVtYm5haWwiLCJhbHQiLCJwcmljZSIsInRvTG9jYWxlU3RyaW5nIiwiX2lkIiwib25DaGFuZ2UiLCJwYWdlIiwicHVzaCIsInF1ZXJ5IiwicHJvZHVjdCIsImN1cnJlbnQiLCJwYWdlU2l6ZSIsInRvdGFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/Product/Product.tsx\n");

/***/ })

});