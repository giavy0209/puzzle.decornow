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

/***/ "./pages/news/[news].tsx":
/*!*******************************!*\
  !*** ./pages/news/[news].tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pages */ \"./src/pages/index.ts\");\nvar _this = undefined;\n\n\n\nvar App = function(param) {\n    var pageData = param.pageData, items = param.items;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: pageData.nameSeo\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Pham Gia Vy\\\\work\\\\puzzle.decornow\\\\fe\\\\pages\\\\news\\\\[news].tsx\",\n                        lineNumber: 10,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: pageData.description\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Pham Gia Vy\\\\work\\\\puzzle.decornow\\\\fe\\\\pages\\\\news\\\\[news].tsx\",\n                        lineNumber: 11,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"og:image\",\n                        content: pageData.thumbnail\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Pham Gia Vy\\\\work\\\\puzzle.decornow\\\\fe\\\\pages\\\\news\\\\[news].tsx\",\n                        lineNumber: 12,\n                        columnNumber: 7\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Pham Gia Vy\\\\work\\\\puzzle.decornow\\\\fe\\\\pages\\\\news\\\\[news].tsx\",\n                lineNumber: 9,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(pages__WEBPACK_IMPORTED_MODULE_2__.News, {\n                pageData: pageData,\n                items: items\n            }, void 0, false, {\n                fileName: \"D:\\\\Pham Gia Vy\\\\work\\\\puzzle.decornow\\\\fe\\\\pages\\\\news\\\\[news].tsx\",\n                lineNumber: 14,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = App;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZXdzL1tuZXdzXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRTRCO0FBQ0Q7QUFFM0IsSUFBTUUsR0FBRyxHQUFtQixnQkFBdUI7UUFBckJDLFFBQVEsU0FBUkEsUUFBUSxFQUFFQyxLQUFLLFNBQUxBLEtBQUs7SUFDM0MscUJBQ0U7OzBCQUNBLDhEQUFDSixrREFBSTs7a0NBQ0gsOERBQUNLLE9BQUs7a0NBQUVGLFFBQVEsQ0FBQ0csT0FBTzs7Ozs7NkJBQVM7a0NBQ2pDLDhEQUFDQyxNQUFJO3dCQUFDQyxJQUFJLEVBQUMsYUFBYTt3QkFBQ0MsT0FBTyxFQUFFTixRQUFRLENBQUNPLFdBQVc7Ozs7OzZCQUFJO2tDQUMxRCw4REFBQ0gsTUFBSTt3QkFBQ0MsSUFBSSxFQUFDLFVBQVU7d0JBQUNDLE9BQU8sRUFBRU4sUUFBUSxDQUFDUSxTQUFTOzs7Ozs2QkFBSTs7Ozs7O3FCQUNoRDswQkFDUCw4REFBQ1YsdUNBQUk7Z0JBQUNFLFFBQVEsRUFBRUEsUUFBUTtnQkFBRUMsS0FBSyxFQUFFQSxLQUFLOzs7OztxQkFBRzs7b0JBQ3RDLENBQ0o7Q0FDRjtBQVhLRixLQUFBQSxHQUFHOztBQWFULCtEQUFlQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL25ld3MvW25ld3NdLnRzeD9mYzdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjYWxsQVBJIGZyb20gJ2NhbGwnXHJcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IE5ld3N9IGZyb20gJ3BhZ2VzJ1xyXG5cclxuY29uc3QgQXBwOiBOZXh0UGFnZTxOZXdzPiA9ICh7cGFnZURhdGEsIGl0ZW1zfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT57cGFnZURhdGEubmFtZVNlb308L3RpdGxlPlxyXG4gICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtwYWdlRGF0YS5kZXNjcmlwdGlvbn0gLz5cclxuICAgICAgPG1ldGEgbmFtZT1cIm9nOmltYWdlXCIgY29udGVudD17cGFnZURhdGEudGh1bWJuYWlsfSAvPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgPE5ld3MgcGFnZURhdGE9e3BhZ2VEYXRhfSBpdGVtcz17aXRlbXN9Lz5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHtwYXJhbXMscXVlcnl9KSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgY2FsbEFQSS5nZXQoYC9jYXRlZ29yaWVzLyR7cGFyYW1zLm5ld3N9YClcclxuICBcclxuICBjb25zdCBwYWdlID0gTnVtYmVyKHF1ZXJ5LnBhZ2UpIHx8IDFcclxuICBjb25zdCBsaW1pdCA9IDEyXHJcbiAgY29uc3Qgc2tpcCA9IChwYWdlLTEpICogbGltaXRcclxuICBjb25zdCBpdGVtcyA9IGF3YWl0IGNhbGxBUEkuZ2V0KGAvcHJvZHVjdD9jYXRlZ29yeT0ke3Jlcy5kYXRhLl9pZH0mc2tpcD0ke3NraXB9JmxpbWl0PSR7bGltaXR9YClcclxuXHJcbiAgaWYocmVzLmRhdGEpIHtcclxuICAgIHJldHVybiB7cHJvcHMgOiB7XHJcbiAgICAgIHBhZ2VEYXRhIDogcmVzLmRhdGEsXHJcbiAgICAgIGl0ZW1zIDoge1xyXG4gICAgICAgIC4uLml0ZW1zLFxyXG4gICAgICAgIGN1cnJlbnQgOiBwYWdlLFxyXG4gICAgICAgIHBhZ2VTaXplIDogbGltaXQsXHJcbiAgICAgIH0sXHJcbiAgICB9fVxyXG4gIH1lbHNlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5vdEZvdW5kIDogdHJ1ZVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiSGVhZCIsIk5ld3MiLCJBcHAiLCJwYWdlRGF0YSIsIml0ZW1zIiwidGl0bGUiLCJuYW1lU2VvIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwiZGVzY3JpcHRpb24iLCJ0aHVtYm5haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/news/[news].tsx\n");

/***/ })

});