"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[product]",{

/***/ "./src/pages/News/News.tsx":
/*!*********************************!*\
  !*** ./src/pages/News/News.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components */ \"./src/components/index.ts\");\n/* harmony import */ var helpers_renderDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/renderDate */ \"./src/helpers/renderDate.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar News = function(param) {\n    var pageData = param.pageData, items = param.items;\n    var _this1 = _this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"products\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"title\",\n                    children: pageData.name\n                }, void 0, false, {\n                    fileName: \"D:\\\\Pham Gia Vy\\\\work\\\\puzzle.decornow\\\\fe\\\\src\\\\pages\\\\News\\\\News.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flexbox flex6 mt-30\",\n                    children: items === null || items === void 0 ? void 0 : items.data.map(function(o) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/\".concat(o.type === 1 ? \"product-detail\" : \"news-detail\", \"/\").concat(o.slug),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"product\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"img\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                className: \"cover\",\n                                                src: o.thumbnail,\n                                                alt: \"\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Pham Gia Vy\\\\work\\\\puzzle.decornow\\\\fe\\\\src\\\\pages\\\\News\\\\News.tsx\",\n                                                lineNumber: 25,\n                                                columnNumber: 37\n                                            }, _this1)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Pham Gia Vy\\\\work\\\\puzzle.decornow\\\\fe\\\\src\\\\pages\\\\News\\\\News.tsx\",\n                                            lineNumber: 24,\n                                            columnNumber: 33\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"name\",\n                                            children: o.name\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Pham Gia Vy\\\\work\\\\puzzle.decornow\\\\fe\\\\src\\\\pages\\\\News\\\\News.tsx\",\n                                            lineNumber: 27,\n                                            columnNumber: 33\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"create-date\",\n                                            children: (0,helpers_renderDate__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n                                                date: o.createdAt\n                                            })\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Pham Gia Vy\\\\work\\\\puzzle.decornow\\\\fe\\\\src\\\\pages\\\\News\\\\News.tsx\",\n                                            lineNumber: 30,\n                                            columnNumber: 33\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"description\",\n                                            children: o.description\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Pham Gia Vy\\\\work\\\\puzzle.decornow\\\\fe\\\\src\\\\pages\\\\News\\\\News.tsx\",\n                                            lineNumber: 31,\n                                            columnNumber: 33\n                                        }, _this1)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Pham Gia Vy\\\\work\\\\puzzle.decornow\\\\fe\\\\src\\\\pages\\\\News\\\\News.tsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 29\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Pham Gia Vy\\\\work\\\\puzzle.decornow\\\\fe\\\\src\\\\pages\\\\News\\\\News.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 25\n                            }, _this1)\n                        }, o._id, false, {\n                            fileName: \"D:\\\\Pham Gia Vy\\\\work\\\\puzzle.decornow\\\\fe\\\\src\\\\pages\\\\News\\\\News.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 43\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"D:\\\\Pham Gia Vy\\\\work\\\\puzzle.decornow\\\\fe\\\\src\\\\pages\\\\News\\\\News.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Pham Gia Vy\\\\work\\\\puzzle.decornow\\\\fe\\\\src\\\\pages\\\\News\\\\News.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_1__.Pagination, {\n                    onChange: function(page) {\n                        return router.push(\"/product/\".concat(router.query.product, \"?page=\").concat(page));\n                    },\n                    current: items.current,\n                    pageSize: items.pageSize,\n                    total: items.total\n                }, void 0, false, {\n                    fileName: \"D:\\\\Pham Gia Vy\\\\work\\\\puzzle.decornow\\\\fe\\\\src\\\\pages\\\\News\\\\News.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Pham Gia Vy\\\\work\\\\puzzle.decornow\\\\fe\\\\src\\\\pages\\\\News\\\\News.tsx\",\n            lineNumber: 18,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Pham Gia Vy\\\\work\\\\puzzle.decornow\\\\fe\\\\src\\\\pages\\\\News\\\\News.tsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, _this);\n};\n_s(News, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = News;\n/* harmony default export */ __webpack_exports__[\"default\"] = (News);\nvar _c;\n$RefreshReg$(_c, \"News\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvTmV3cy9OZXdzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFDSTtBQUNmO0FBQ1c7O0FBVXhDLElBQU1JLElBQUksR0FBYSxnQkFBeUI7UUFBdEJDLFFBQVEsU0FBUkEsUUFBUSxFQUFFQyxLQUFLLFNBQUxBLEtBQUs7OztJQUNyQyxJQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQUU7SUFDMUIscUJBQ0ksOERBQUNLLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLFVBQVU7a0JBQ3JCLDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBQyxXQUFXOzs4QkFDdEIsOERBQUNDLElBQUU7b0JBQUNELFNBQVMsRUFBQyxPQUFPOzhCQUFFSixRQUFRLENBQUNNLElBQUk7Ozs7O3lCQUFNOzhCQUMxQyw4REFBQ0gsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLHFCQUFxQjs4QkFDL0JILEtBQUssYUFBTEEsS0FBSyxXQUFNLEdBQVhBLEtBQUFBLENBQVcsR0FBWEEsS0FBSyxDQUFFTSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsU0FBQUEsQ0FBQzs2Q0FBSSw4REFBQ04sS0FBRzs0QkFBYUMsU0FBUyxFQUFDLE1BQU07c0NBQ25ELDRFQUFDUCxrREFBSTtnQ0FBQ2EsSUFBSSxFQUFFLEdBQUUsQ0FBcURELE1BQU0sQ0FBekRBLENBQUMsQ0FBQ0UsSUFBSSxLQUFLLENBQUMsR0FBRyxnQkFBZ0IsR0FBRyxhQUFhLEVBQUMsR0FBQyxDQUFTLFFBQVBGLENBQUMsQ0FBQ0csSUFBSSxDQUFFOzBDQUN2RSw0RUFBQ0MsR0FBQztvQ0FBQ1QsU0FBUyxFQUFDLFNBQVM7O3NEQUNsQiw4REFBQ0QsS0FBRzs0Q0FBQ0MsU0FBUyxFQUFDLEtBQUs7c0RBQ2hCLDRFQUFDVSxLQUFHO2dEQUFDVixTQUFTLEVBQUMsT0FBTztnREFBQ1csR0FBRyxFQUFFTixDQUFDLENBQUNPLFNBQVM7Z0RBQUVDLEdBQUcsRUFBQyxFQUFFOzs7OztzREFBRzs7Ozs7a0RBQ2hEO3NEQUNOLDhEQUFDZCxLQUFHOzRDQUFDQyxTQUFTLEVBQUMsTUFBTTtzREFDaEJLLENBQUMsQ0FBQ0gsSUFBSTs7Ozs7a0RBQ0w7c0RBQ04sOERBQUNILEtBQUc7NENBQUNDLFNBQVMsRUFBQyxhQUFhO3NEQUFFUiw4REFBVSxDQUFDO2dEQUFDc0IsSUFBSSxFQUFHVCxDQUFDLENBQUNVLFNBQVM7NkNBQUMsQ0FBQzs7Ozs7a0RBQU87c0RBQ3JFLDhEQUFDaEIsS0FBRzs0Q0FBQ0MsU0FBUyxFQUFDLGFBQWE7c0RBQUVLLENBQUMsQ0FBQ1csV0FBVzs7Ozs7a0RBQU87Ozs7OzswQ0FDbEQ7Ozs7O3NDQUNEOzJCQVpxQlgsQ0FBQyxDQUFDWSxHQUFHOzs7O2tDQWEvQjtxQkFBQSxDQUFDOzs7Ozt5QkFFTDs4QkFDTiw4REFBQ2xCLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxLQUFLOzs7Ozt5QkFDZDs4QkFDTiw4REFBQ1Qsa0RBQVU7b0JBQ1AyQixRQUFRLEVBQUUsU0FBQ0MsSUFBSTsrQkFBS3JCLE1BQU0sQ0FBQ3NCLElBQUksQ0FBQyxXQUFVLENBQStCRCxNQUFJLENBQWpDckIsTUFBTSxDQUFDdUIsS0FBSyxDQUFDQyxPQUFPLEVBQUMsUUFBTSxDQUFPLFFBQUxILElBQUksQ0FBRSxDQUFDO3FCQUFBO29CQUNoRkksT0FBTyxFQUFFMUIsS0FBSyxDQUFDMEIsT0FBTztvQkFDdEJDLFFBQVEsRUFBRTNCLEtBQUssQ0FBQzJCLFFBQVE7b0JBQ3hCQyxLQUFLLEVBQUU1QixLQUFLLENBQUM0QixLQUFLOzs7Ozt5QkFBSTs7Ozs7O2lCQUN4Qjs7Ozs7YUFDSixDQUNUO0NBQ0o7R0FqQ0s5QixJQUFJOztRQUNTRCxrREFBUzs7O0FBRHRCQyxLQUFBQSxJQUFJO0FBbUNWLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9OZXdzL05ld3MudHN4P2QyM2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnaW5hdGlvbiB9IGZyb20gXCJjb21wb25lbnRzXCI7XHJcbmltcG9ydCByZW5kZXJEYXRlIGZyb20gXCJoZWxwZXJzL3JlbmRlckRhdGVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBOZXdzIHtcclxuICAgIHBhZ2VEYXRhOiB7XHJcbiAgICAgICAgW2s6IHN0cmluZ106IGFueVxyXG4gICAgfSxcclxuICAgIGl0ZW1zOiB7IFtrOiBzdHJpbmddOiBhbnkgfVxyXG59XHJcblxyXG5jb25zdCBOZXdzOiBGQzxOZXdzPiA9ICh7IHBhZ2VEYXRhLCBpdGVtcyB9KSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj57cGFnZURhdGEubmFtZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4Ym94IGZsZXg2IG10LTMwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW1zPy5kYXRhLm1hcChvID0+IDxkaXYga2V5PXtvLl9pZH0gY2xhc3NOYW1lPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7by50eXBlID09PSAxID8gJ3Byb2R1Y3QtZGV0YWlsJyA6ICduZXdzLWRldGFpbCd9LyR7by5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY292ZXJcIiBzcmM9e28udGh1bWJuYWlsfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7by5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JlYXRlLWRhdGVcIj57cmVuZGVyRGF0ZSh7ZGF0ZSA6IG8uY3JlYXRlZEF0fSl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntvLmRlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KX1cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhwYWdlKSA9PiByb3V0ZXIucHVzaChgL3Byb2R1Y3QvJHtyb3V0ZXIucXVlcnkucHJvZHVjdH0/cGFnZT0ke3BhZ2V9YCl9XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudD17aXRlbXMuY3VycmVudH1cclxuICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZT17aXRlbXMucGFnZVNpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWw9e2l0ZW1zLnRvdGFsfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3cyJdLCJuYW1lcyI6WyJQYWdpbmF0aW9uIiwicmVuZGVyRGF0ZSIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJOZXdzIiwicGFnZURhdGEiLCJpdGVtcyIsInJvdXRlciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibmFtZSIsImRhdGEiLCJtYXAiLCJvIiwiaHJlZiIsInR5cGUiLCJzbHVnIiwiYSIsImltZyIsInNyYyIsInRodW1ibmFpbCIsImFsdCIsImRhdGUiLCJjcmVhdGVkQXQiLCJkZXNjcmlwdGlvbiIsIl9pZCIsIm9uQ2hhbmdlIiwicGFnZSIsInB1c2giLCJxdWVyeSIsInByb2R1Y3QiLCJjdXJyZW50IiwicGFnZVNpemUiLCJ0b3RhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/News/News.tsx\n");

/***/ })

});