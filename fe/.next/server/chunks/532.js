"use strict";
exports.id = 532;
exports.ids = [532];
exports.modules = {

/***/ 7346:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5873);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(207);
/* harmony import */ var axios_retry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3617);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios_retry__WEBPACK_IMPORTED_MODULE_2__]);
axios_retry__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const create = ()=>{
    const jwt = _helpers_storage__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getToken */ .Z.getToken();
    return axios__WEBPACK_IMPORTED_MODULE_0___default().create({
        baseURL: _constant__WEBPACK_IMPORTED_MODULE_3__/* .DOMAIN */ .y,
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    });
};
const callAPI = {
    get: async (route)=>{
        try {
            const client = create();
            (0,axios_retry__WEBPACK_IMPORTED_MODULE_2__["default"])(client, {
                retries: 3,
                retryDelay: (retryCount)=>retryCount * 1000
            });
            const { data  } = await client.get(route);
            return data;
        } catch (error) {
            var ref;
            return ((ref = error.response) === null || ref === void 0 ? void 0 : ref.data) || {
                msg: "unknow"
            };
        }
    },
    post: async (route, body)=>{
        try {
            const client = create();
            (0,axios_retry__WEBPACK_IMPORTED_MODULE_2__["default"])(client, {
                retries: 3,
                retryDelay: (retryCount)=>retryCount * 1000
            });
            const { data  } = await client.post(route, body);
            return data;
        } catch (error) {
            var ref;
            return ((ref = error.response) === null || ref === void 0 ? void 0 : ref.data) || {
                msg: "unknow"
            };
        }
    },
    put: async (route, body)=>{
        try {
            const client = create();
            (0,axios_retry__WEBPACK_IMPORTED_MODULE_2__["default"])(client, {
                retries: 3,
                retryDelay: (retryCount)=>retryCount * 1000
            });
            const { data  } = await client.put(route, body);
            return data;
        } catch (error) {
            var ref;
            return ((ref = error.response) === null || ref === void 0 ? void 0 : ref.data) || {
                msg: "unknow"
            };
        }
    },
    patch: async (route, body)=>{
        try {
            const client = create();
            (0,axios_retry__WEBPACK_IMPORTED_MODULE_2__["default"])(client, {
                retries: 3,
                retryDelay: (retryCount)=>retryCount * 1000
            });
            const { data  } = await client.patch(route, body);
            return data;
        } catch (error) {
            var ref;
            return ((ref = error.response) === null || ref === void 0 ? void 0 : ref.data) || {
                msg: "unknow"
            };
        }
    },
    delete: async (route)=>{
        try {
            const client = create();
            (0,axios_retry__WEBPACK_IMPORTED_MODULE_2__["default"])(client, {
                retries: 3,
                retryDelay: (retryCount)=>retryCount * 1000
            });
            const { data  } = await client.delete(route);
            return data;
        } catch (error) {
            var ref;
            return ((ref = error.response) === null || ref === void 0 ? void 0 : ref.data) || {
                msg: "unknow"
            };
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (callAPI);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Banner)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Banner/Banner.tsx


const Banner = ({ items , loop =true , interval =5000 , dots =true  })=>{
    const { 0: Current , 1: setCurrent  } = (0,external_react_.useState)(0);
    (0,external_react_.useEffect)(()=>{
        let timeout;
        if (loop) {
            timeout = setTimeout(()=>{
                if (Current + 1 > items.length - 1) setCurrent(0);
                else setCurrent(Current + 1);
            }, interval);
        }
        return ()=>{
            clearTimeout(timeout);
        };
    }, [
        Current,
        items,
        loop
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "banner",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "track",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            "--total": items.length,
                            "--current": Current
                        },
                        className: "list",
                        children: items.map((o, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "cover",
                                    src: o.img,
                                    alt: ""
                                })
                            }, o.img + i)
                        )
                    }),
                    dots && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "dots",
                        children: items.map((o, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                onClick: ()=>setCurrent(index)
                                ,
                                className: `dot ${Current === index ? "active" : ""}`
                            }, o.link + "index")
                        )
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Banner_Banner = (Banner);

;// CONCATENATED MODULE: ./src/components/Banner/index.ts

/* harmony default export */ const components_Banner = (Banner_Banner);


/***/ }),

/***/ 2725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-iframe"
var external_react_iframe_ = __webpack_require__(9253);
var external_react_iframe_default = /*#__PURE__*/__webpack_require__.n(external_react_iframe_);
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
// EXTERNAL MODULE: external "react-icons/go"
var go_ = __webpack_require__(5856);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Footer/Footer.tsx






const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("footer", {
            className: "footer",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "footer-default",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "footer-default__col-1",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "footer-default__header",
                                children: "DECORNOW"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "footer-default__col-1--license",
                                children: "Gi\u1EA5y ph\xe9p \u0111\u0103ng k\xfd kinh doanh s\u1ED1 41L8031928 do UBND Qu\u1EADn 12 c\u1EA5p ng\xe0y 25/02/2021"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(go_.GoLocation, {})
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                children: [
                                                    "T\xf2a nh\xe0 Th\xe1i An, 2290 Qu\u1ED1c L\u1ED9 1A, ph\u01B0\u1EDDng Trung M\u1EF9 T\xe2y, ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    "Qu\u1EADn 12, TP. H\u1ED3 Ch\xed Minh"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiPhone, {})
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "tel:0328889398",
                                                            children: "032 888 9398"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "tel:0937628360",
                                                            children: "093 762 8360"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineMail, {})
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "mailto:contact@decornow.vn",
                                                    children: "contact@decornow.vn"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "footer-default__col-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "footer-default__header",
                                children: "Trang"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/thiet-ke",
                                            children: "Thi\xea\u0301t k\xea\u0301"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/huong-dan",
                                            children: "H\u01B0\u01A1\u0301ng D\xe2\u0303n"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/bo-khung-anh",
                                            children: "B\u1ED9 Khung \u1EA2nh"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/cart",
                                            children: "Gio\u0309 Ha\u0300ng"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "footer-default__col-3",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "footer-default__header text-left",
                                children: "Facebook"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((external_react_iframe_default()), {
                                name: "f1407468eeb468",
                                "data-testid": "fb:page Facebook Social Plugin",
                                title: "fb:page Facebook Social Plugin",
                                frameBorder: 0,
                                allowFullScreen: true,
                                scrolling: "no",
                                allow: "encrypted-media",
                                url: "https://www.facebook.com/v10.0/plugins/page.php?adapt_container_width=true&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfb3f1260e81dfc%26domain%3Ddecornow.vn%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fdecornow.vn%252Ff9384254468f8%26relation%3Dparent.parent&container_width=370&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2FDecorNow.VN&locale=vi_VN&sdk=joey&show_facepile=true&small_header=false&tabs="
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Footer_Footer = (Footer);

;// CONCATENATED MODULE: ./src/components/Footer/index.ts

/* harmony default export */ const components_Footer = (Footer_Footer);


/***/ }),

/***/ 6529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Form)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Form/Form.tsx


const Form = ({ onSubmit , onReset , children  })=>{
    const form = (0,external_react_.useRef)();
    const handleForm = (e)=>{
        e.preventDefault();
        const formData = new FormData(form.current);
        const data = {};
        for (const field of formData){
            data[field[0]] = field[1];
        }
        onSubmit && onSubmit(data);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
            onSubmit: handleForm,
            ref: form,
            children: children
        })
    });
};
/* harmony default export */ const Form_Form = (Form);

;// CONCATENATED MODULE: ./src/components/Form/index.ts

/* harmony default export */ const components_Form = (Form_Form);


/***/ }),

/***/ 2690:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var call__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7346);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9176);
/* harmony import */ var helpers_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5873);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var store_initActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5230);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9997);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([call__WEBPACK_IMPORTED_MODULE_4__, components__WEBPACK_IMPORTED_MODULE_5__, store_initActions__WEBPACK_IMPORTED_MODULE_11__]);
([call__WEBPACK_IMPORTED_MODULE_4__, components__WEBPACK_IMPORTED_MODULE_5__, store_initActions__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const Header = ()=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();
    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)((state)=>state.user
    );
    const popoverRef = (0,react__WEBPACK_IMPORTED_MODULE_8__.useRef)();
    const { 0: ShowModalLogin , 1: setShowModalLogin  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
    const { 0: ShowModalSignup , 1: setShowModalSignup  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
    const { 0: ShowPopover , 1: setShowPopover  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
    const handleLogin = async (data)=>{
        const res = await call__WEBPACK_IMPORTED_MODULE_4__/* ["default"].post */ .Z.post("/auth", {
            ...data
        });
        if (res.msg === "not existed" || res.msg === "not valid email" || res.status === 100) return (0,react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast)("Email ho\u1EB7c m\u1EADt kh\u1EA9u kh\xf4ng ch\xednh x\xe1c");
        if (res.status === 1) (0,react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast)("\u0110\u0103ng nh\u1EADp th\xe0nh c\xf4ng");
        setShowModalLogin(false);
        helpers_storage__WEBPACK_IMPORTED_MODULE_6__/* ["default"].setToken */ .Z.setToken(res.token);
        dispatch((0,store_initActions__WEBPACK_IMPORTED_MODULE_11__/* .asyncGetUser */ .FP)());
    };
    const handleSignup = async (data)=>{
        if (data.password !== data.repassword) {
            return (0,react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast)("Nh\u1EADp l\u1EA1i m\u1EADt kh\u1EA9u kh\xf4ng kh\u1EDBp");
        }
        const res = await call__WEBPACK_IMPORTED_MODULE_4__/* ["default"].post */ .Z.post("/user", data);
        if (res.msg === "not valid email") return (0,react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast)("Email kh\xf4ng h\u1EE3p l\u1EC7");
        if (res.msg === "wrong length") return (0,react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast)("M\u1EADt kh\u1EA9u ph\u1EA3i t\u1EEB 6-18 k\xed t\u1EF1");
        if (res.msg === "existed") return (0,react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast)("Email \u0111\xe3 \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng");
        if (res.status === 1) (0,react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast)("\u0110\u0103ng k\xfd th\xe0nh c\xf4ng");
        setShowModalSignup(false);
        setShowModalLogin(true);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        const toggle = (event)=>{
            if (!event.path.includes(popoverRef.current)) {
                setShowPopover(false);
            }
        };
        window.addEventListener("click", toggle);
        return ()=>{
            window.removeEventListener("click", toggle);
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_5__/* .Modal */ .u_, {
                show: ShowModalLogin,
                onClose: ()=>setShowModalLogin(false)
                ,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components__WEBPACK_IMPORTED_MODULE_5__/* .Form */ .l0, {
                    onSubmit: handleLogin,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "title",
                            children: "\u0110\u0103ng nh\u1EADp"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_5__/* .Input */ .II, {
                            name: "email",
                            placeholder: "Email"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_5__/* .Input */ .II, {
                            name: "password",
                            type: "password",
                            placeholder: "M\u1EADt kh\u1EA5u"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "button highlight",
                            children: "\u0110\u0103ng nh\u1EADp"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_5__/* .Modal */ .u_, {
                show: ShowModalSignup,
                onClose: ()=>setShowModalSignup(false)
                ,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components__WEBPACK_IMPORTED_MODULE_5__/* .Form */ .l0, {
                    onSubmit: handleSignup,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "title",
                            children: "\u0110\u0103ng k\xfd"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_5__/* .Input */ .II, {
                            name: "email",
                            placeholder: "Email"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_5__/* .Input */ .II, {
                            name: "password",
                            type: "password",
                            placeholder: "M\u1EADt kh\u1EA5u"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_5__/* .Input */ .II, {
                            name: "repassword",
                            type: "password",
                            placeholder: "Nh\u1EADp l\u1EA1i m\u1EADt kh\u1EA5u"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "button highlight",
                            children: "\u0110\u0103ng k\xfd"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "menu",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaFacebookF, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaYoutube, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaInstagram, {})
                                }),
                                _const__WEBPACK_IMPORTED_MODULE_12__/* .MENU.map */ .s.map((o)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            href: o.link,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: o.text
                                            })
                                        })
                                    }, o.text)
                                )
                            ]
                        })
                    }),
                    !user && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "profile",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: ()=>setShowModalLogin(true)
                                ,
                                className: "button",
                                children: "\u0110\u0103ng nh\u1EADp"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: ()=>setShowModalSignup(true)
                                ,
                                className: "button highlight",
                                children: "\u0110\u0103ng k\xfd"
                            })
                        ]
                    }),
                    user && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        ref: popoverRef,
                        onClick: ()=>setShowPopover(!ShowPopover)
                        ,
                        className: "profile loged",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "name",
                                children: user.email
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "icon",
                                children: [
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faUser
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `popover ${ShowPopover ? "show" : ""} `,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                href: "/cart",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    children: " Gi\u1ECF h\xe0ng"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                href: "/history",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    children: "\u0110\u01A1n h\xe0ng"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                href: "/profile",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    children: "Th\xf4ng tin c\xe1 nh\xe2n"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            onClick: ()=>window.location.reload()
                                            ,
                                            children: "\u0110\u0103ng xu\u1EA5t"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ MENU)
/* harmony export */ });
const MENU = [
    {
        text: "PLUZZLE",
        link: "/"
    },
    {
        text: "THI\u1EBET K\u1EBE",
        link: "/upload"
    }, 
];


/***/ }),

/***/ 3077:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2690);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Header__WEBPACK_IMPORTED_MODULE_0__]);
_Header__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Header__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Input)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6466);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Input/Input.tsx




const Input = function({ label , type ="text" , name ="" , placeholder ="" , onChange =()=>{} , onFocus =()=>{} , onBlur =()=>{} , defaultValue ="" , ...rest }) {
    const { 0: CurrentType , 1: setCurrentType  } = (0,external_react_.useState)(type);
    const { 0: IsPassword , 1: setIsPassword  } = (0,external_react_.useState)(type === "password");
    const { 0: Active , 1: setActive  } = (0,external_react_.useState)(!!defaultValue || false);
    const { 0: Value , 1: setValue  } = (0,external_react_.useState)(defaultValue);
    (0,external_react_.useEffect)(()=>{
        defaultValue !== "" && setActive(true);
        setValue(defaultValue);
    }, [
        defaultValue
    ]);
    const onChangeInput = (e)=>{
        setValue(e.target.value);
        onChange(e.target.value);
    };
    const onFocusInput = ()=>{
        onFocus();
        setActive(true);
    };
    const onBlurInput = ()=>{
        Value === "" && setActive(false);
        onBlur();
    };
    (0,external_react_.useEffect)(()=>{
        setCurrentType(IsPassword ? "password" : "text");
    }, [
        IsPassword
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "row-input",
            ...rest,
            children: [
                label && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "label",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: label,
                        alt: ""
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `input-placeholder ${Active ? "active" : ""}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "placeholder",
                            children: placeholder
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            autoComplete: "off",
                            onFocus: onFocusInput,
                            onBlur: onBlurInput,
                            onChange: onChangeInput,
                            name: name,
                            value: Value,
                            type: CurrentType
                        }),
                        type === "password" ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            onClick: ()=>setIsPassword(!IsPassword)
                            ,
                            className: "eye",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                icon: !IsPassword ? free_solid_svg_icons_.faEyeSlash : free_solid_svg_icons_.faEye
                            })
                        }) : null
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Input_Input = (Input);

;// CONCATENATED MODULE: ./src/components/Input/index.ts

/* harmony default export */ const components_Input = (Input_Input);


/***/ }),

/***/ 8365:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9176);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_1__]);
___WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_1__/* .Header */ .h4, {}),
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_1__/* .Footer */ .$_, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3473:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8365);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Layout__WEBPACK_IMPORTED_MODULE_0__]);
_Layout__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Layout__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Modal)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Modal/Modal.tsx

const Modal = ({ show , onClose =()=>{} , children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `modal ${show ? "show" : ""}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mask",
                    onClick: onClose
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "body",
                    children: children
                })
            ]
        })
    });
};
/* harmony default export */ const Modal_Modal = (Modal);

;// CONCATENATED MODULE: ./src/components/Modal/index.ts

/* harmony default export */ const components_Modal = (Modal_Modal);


/***/ }),

/***/ 9176:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$_": () => (/* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "Ar": () => (/* reexport safe */ _Layout__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "II": () => (/* reexport safe */ _Input__WEBPACK_IMPORTED_MODULE_6__.Z),
/* harmony export */   "h4": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "jL": () => (/* reexport safe */ _Banner__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "l0": () => (/* reexport safe */ _Form__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   "u_": () => (/* reexport safe */ _Modal__WEBPACK_IMPORTED_MODULE_4__.Z)
/* harmony export */ });
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3473);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3077);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2725);
/* harmony import */ var _Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1615);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6582);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6529);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2603);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Layout__WEBPACK_IMPORTED_MODULE_0__, _Header__WEBPACK_IMPORTED_MODULE_1__]);
([_Layout__WEBPACK_IMPORTED_MODULE_0__, _Header__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ DOMAIN)
/* harmony export */ });
const DOMAIN = "http://localhost:8000/api";


/***/ }),

/***/ 2069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const readFile = (file)=>{
    return new Promise((r)=>{
        const reader = new FileReader();
        reader.onload = (e)=>{
            var ref;
            const buffer = (ref = e.target) === null || ref === void 0 ? void 0 : ref.result;
            const blob = new Blob([
                new Uint8Array(buffer)
            ]);
            const url = window.URL.createObjectURL(blob);
            r(url);
        };
        reader.readAsArrayBuffer(file);
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (readFile);


/***/ }),

/***/ 5873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const keyJwt = "jwt";
const keyRefresh = "refresh";
const storage = {
    getToken () {
        return JSON.parse(localStorage.getItem(keyJwt));
    },
    setToken (jwtToken) {
        localStorage.setItem(keyJwt, JSON.stringify(jwtToken));
    },
    clearToken () {
        localStorage.removeItem(keyJwt);
    },
    getRefresh () {
        return JSON.parse(localStorage.getItem(keyRefresh));
    },
    setRefresh (refreshToken) {
        localStorage.setItem(keyRefresh, JSON.stringify(refreshToken));
    },
    clearRefresh () {
        localStorage.removeItem(keyRefresh);
    },
    getItem (key) {
        return JSON.parse(localStorage.getItem(key));
    },
    setItem (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    clearItem (key) {
        localStorage.removeItem(key);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);


/***/ }),

/***/ 1767:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9176);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components__WEBPACK_IMPORTED_MODULE_1__]);
components__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const Home = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_1__/* .Layout */ .Ar, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "home",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_1__/* .Banner */ .jL, {
                        dots: false,
                        items: [
                            {
                                img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                            }
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "ss_1",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                    width: "100%",
                                    style: {
                                        aspectRatio: "16 / 9"
                                    },
                                    src: "https://www.youtube.com/embed/_0NrayhpdA0",
                                    title: "YouTube video player",
                                    frameBorder: "0",
                                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                    allowFullScreen: true
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "button",
                                    children: "B\u1EAFt \u0111\u1EA7u thi\u1EBFt k\u1EBF"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "ss_2",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "title",
                                    children: "BEST SELLER"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "row column-6",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "img",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "cover",
                                                        src: "https://cdn.shopify.com/s/files/1/0108/2153/3753/products/4_bc1c8905-3c7c-4642-b168-ba20c85a4e43_200x.png?v=1637989309",
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "THI\u1EBET K\u1EBE B\u1ED8 X\u1EBEP H\xccNH G\u1ED6 C\u1EE6A RI\xcaNG B\u1EA0N"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "img",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "cover",
                                                        src: "https://cdn.shopify.com/s/files/1/0108/2153/3753/products/4_bc1c8905-3c7c-4642-b168-ba20c85a4e43_200x.png?v=1637989309",
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "THI\u1EBET K\u1EBE B\u1ED8 X\u1EBEP H\xccNH G\u1ED6 C\u1EE6A RI\xcaNG B\u1EA0N"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "img",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "cover",
                                                        src: "https://cdn.shopify.com/s/files/1/0108/2153/3753/products/4_bc1c8905-3c7c-4642-b168-ba20c85a4e43_200x.png?v=1637989309",
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "THI\u1EBET K\u1EBE B\u1ED8 X\u1EBEP H\xccNH G\u1ED6 C\u1EE6A RI\xcaNG B\u1EA0N"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "img",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "cover",
                                                        src: "https://cdn.shopify.com/s/files/1/0108/2153/3753/products/4_bc1c8905-3c7c-4642-b168-ba20c85a4e43_200x.png?v=1637989309",
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "THI\u1EBET K\u1EBE B\u1ED8 X\u1EBEP H\xccNH G\u1ED6 C\u1EE6A RI\xcaNG B\u1EA0N"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "img",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "cover",
                                                        src: "https://cdn.shopify.com/s/files/1/0108/2153/3753/products/4_bc1c8905-3c7c-4642-b168-ba20c85a4e43_200x.png?v=1637989309",
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "THI\u1EBET K\u1EBE B\u1ED8 X\u1EBEP H\xccNH G\u1ED6 C\u1EE6A RI\xcaNG B\u1EA0N"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "img",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "cover",
                                                        src: "https://cdn.shopify.com/s/files/1/0108/2153/3753/products/4_bc1c8905-3c7c-4642-b168-ba20c85a4e43_200x.png?v=1637989309",
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: "THI\u1EBET K\u1EBE B\u1ED8 X\u1EBEP H\xccNH G\u1ED6 C\u1EE6A RI\xcaNG B\u1EA0N"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "ss_3",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "title",
                                    children: [
                                        "PLUZZLE",
                                        `'`,
                                        "S MESSAGE"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Ch\u1EA5t li\u1EC7u g\u1ED7 khi\u1EBFn cho s\u1EA3n ph\u1EA9m tr\u1EDF n\xean \u0111\u1ED9c \u0111\xe1o v\xe0 sang tr\u1ECDng h\u01A1n. \u0110\u1EB7c bi\u1EC7t, vi\u1EC7c s\u1EED d\u1EE5ng c\xf4ng ngh\u1EC7 in UV v\u1EDBi m\u1EF1c cao c\u1EA5p t\u1EA1o n\xean \u0111\u1ED9 b\u1EC1n m\xe0u cao. S\u1EA3n ph\u1EA9m c\u1EE7a Pluzzle \u0111\u01B0\u1EE3c thi\u1EBFt k\u1EBF v\xe0 s\u1EA3n xu\u1EA5t t\u1EA1i Vi\u1EC7t Nam. S\u1EA3n ph\u1EA9m g\u1EEDi t\u1EDBi b\u1EA1n ch\u1EE9a \u0111\u1EF1ng t\xecnh y\xeau v\xe0 t\xe2m huy\u1EBFt c\u1EE7a ch\xfang m\xecnh. Hy v\u1ECDng c\xe1c b\u1EA1n lu\xf4n h\xe0i l\xf2ng khi tr\u1EA3i nghi\u1EC7m s\u1EA3n ph\u1EA9m c\u1EE7a ch\xfang m\xecnh.Pluzzle.vn"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "ss_4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "title",
                                children: "COLLECTION LIST"
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3915:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1767);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Home__WEBPACK_IMPORTED_MODULE_0__]);
_Home__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Home__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8702:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9176);
/* harmony import */ var helpers_readFile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2069);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components__WEBPACK_IMPORTED_MODULE_1__]);
components__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const slice = [
    {
        slice: "/images/slice_1.png",
        sliceIcon: "/images/slice_icon_1.png"
    },
    {
        slice: "/images/slice_2.png",
        sliceIcon: "/images/slice_icon_2.png"
    },
    {
        slice: "/images/slice_3.png",
        sliceIcon: "/images/slice_icon_3.png"
    },
    {
        slice: "/images/slice_4.png",
        sliceIcon: "/images/slice_icon_4.png"
    }, 
];
const Upload = ()=>{
    const { 0: SelectedSlice , 1: setSelectedSlice  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(slice[0]);
    const { 0: SelectedFrame , 1: setSelectedFrame  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const { 0: Size , 1: setSize  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        w: 3000,
        h: 3000
    });
    const { 0: ImagePos , 1: setImagePos  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        x: 0,
        y: 0
    });
    const { 0: ImageRatio , 1: setImageRatio  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: ImageSrc , 1: setImageSrc  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const initialRatio = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const canvas = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const ctx = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (canvas.current && !ctx.current) {
            ctx.current = canvas.current.getContext("2d");
        }
        if (canvas.current) {
            canvas.current.width = Size.w;
            canvas.current.height = Size.h;
        }
    }, [
        Size
    ]);
    const createPattern = async ()=>{
        const img = await loadImage();
        const imgW = img.width;
        const imgH = img.height;
        const canvasPtrn = document.createElement("canvas");
        canvasPtrn.width = Size.w;
        canvasPtrn.height = Size.h;
        const ctxPtrn = canvasPtrn.getContext("2d");
        const percentX = Size.w / imgW;
        const percentY = Size.h / imgH;
        const ratio = Math.min(percentX, percentY);
        if (!initialRatio.current) initialRatio.current = ratio;
        if (ImageRatio === null) {
            setImageRatio(initialRatio.current);
            ctxPtrn === null || ctxPtrn === void 0 ? void 0 : ctxPtrn.drawImage(img, 0, 0, imgW, imgH, ImagePos.x, ImagePos.y, Size.w * initialRatio.current, Size.h * initialRatio.current);
        } else {
            ctxPtrn === null || ctxPtrn === void 0 ? void 0 : ctxPtrn.drawImage(img, 0, 0, imgW, imgH, ImagePos.x, ImagePos.y, Size.w * ImageRatio, Size.h * ImageRatio);
        }
        return canvasPtrn;
    };
    const loadImage = ()=>new Promise((r)=>{
            if (ImageSrc) {
                const img = new Image();
                img.src = ImageSrc;
                img.onload = ()=>{
                    r(img);
                };
            } else {}
        })
    ;
    const drawSlice = ()=>{
        return new Promise((r)=>{
            const img = new Image();
            img.src = SelectedSlice.slice;
            img.onload = ()=>{
                const canvasPtrn = document.createElement("canvas");
                canvasPtrn.width = Size.w;
                canvasPtrn.height = Size.h;
                const ctxPtrn = canvasPtrn.getContext("2d");
                ctxPtrn === null || ctxPtrn === void 0 ? void 0 : ctxPtrn.drawImage(img, 0, 0, img.width, img.height, 0, 0, Size.w, Size.h);
                r(canvasPtrn);
            };
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (ctx.current) {
            ctx.current.clearRect(0, 0, Size.w, Size.h);
            ctx.current.fillStyle = "#ccc";
            ctx.current.beginPath();
            if (SelectedFrame === 0 || SelectedFrame === 1) {
                ctx.current.fillRect(0, 0, Size.w, Size.h);
                if (ImageSrc) {
                    createPattern().then((cP1)=>{
                        if (ctx.current) {
                            const pattern = ctx.current.createPattern(cP1, "no-repeat");
                            ctx.current.fillStyle = pattern;
                            ctx.current.fillRect(0, 0, Size.w, Size.h);
                        }
                        drawSlice().then((cP)=>{
                            if (ctx.current) {
                                const pattern = ctx.current.createPattern(cP, "no-repeat");
                                ctx.current.fillStyle = pattern;
                                ctx.current.fillRect(0, 0, Size.w, Size.h);
                            }
                        });
                    });
                }
            }
            if (SelectedFrame === 2) {
                ctx.current.arc(Size.w / 2, Size.h / 2, Size.w / 2, 0, Math.PI * 2);
                ctx.current.fill();
                if (ImageSrc) {
                    createPattern().then((cP2)=>{
                        if (ctx.current) {
                            const pattern = ctx.current.createPattern(cP2, "no-repeat");
                            ctx.current.fillStyle = pattern;
                            ctx.current.fill();
                        }
                        drawSlice().then((cP)=>{
                            if (ctx.current) {
                                const pattern = ctx.current.createPattern(cP, "no-repeat");
                                ctx.current.fillStyle = pattern;
                                ctx.current.fill();
                            }
                        });
                    });
                }
            }
            if (SelectedFrame === 3) {
                const x = Size.w / 2;
                const y = Size.h / 4;
                const xPadding = x / 50;
                ctx.current.lineWidth = 10;
                ctx.current.moveTo(x, y);
                ctx.current.bezierCurveTo(x, 0, xPadding, 0, xPadding, y);
                ctx.current.bezierCurveTo(0, Size.h / 2, x / 4, y * 2, x, Size.h);
                ctx.current.bezierCurveTo(Size.w - x / 4, y * 2, Size.w, Size.h / 2, Size.w - xPadding, y);
                ctx.current.bezierCurveTo(Size.w - xPadding, 0, x, 0, x, y);
                ctx.current.strokeStyle = "#000";
                ctx.current.fill();
                if (ImageSrc) {
                    createPattern().then((cP3)=>{
                        if (ctx.current) {
                            const pattern = ctx.current.createPattern(cP3, "no-repeat");
                            ctx.current.fillStyle = pattern;
                            ctx.current.fill();
                        }
                        drawSlice().then((cP)=>{
                            if (ctx.current) {
                                const pattern = ctx.current.createPattern(cP, "no-repeat");
                                ctx.current.fillStyle = pattern;
                                ctx.current.fill();
                            }
                        });
                    });
                }
            }
            drawSlice();
            ctx.current.closePath();
        }
    }, [
        Size,
        SelectedFrame,
        ImagePos,
        ImageSrc,
        ImageRatio,
        SelectedSlice
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setImageRatio(null);
        initialRatio.current = null;
        if (SelectedFrame === 0) {
            setSize({
                w: 2100,
                h: 3000
            });
        }
        if (SelectedFrame === 1) {
            setSize({
                w: 3000,
                h: 3000
            });
        }
        if (SelectedFrame === 2) {
            setSize({
                w: 3000,
                h: 3000
            });
        }
        if (SelectedFrame === 3) {
            setSize({
                w: 2700,
                h: 3000
            });
        }
    }, [
        SelectedFrame
    ]);
    const downSize = ()=>{
        if (ImageRatio && initialRatio.current) {
            setImageRatio(ImageRatio - initialRatio.current / 50);
        }
    };
    const upSize = ()=>{
        if (ImageRatio && initialRatio.current) {
            setImageRatio(ImageRatio + initialRatio.current / 50);
        }
    };
    const handleX = (value)=>{
        const x = Size.w / 100 * value;
        setImagePos({
            ...ImagePos,
            x: ImagePos.x + x
        });
    };
    const handleY = (value)=>{
        const y = Size.h / 100 * value;
        setImagePos({
            ...ImagePos,
            y: ImagePos.y + y
        });
    };
    const handleChangeImage = async (event)=>{
        var ref, ref1;
        event.persist();
        const file = event === null || event === void 0 ? void 0 : (ref = event.target) === null || ref === void 0 ? void 0 : (ref1 = ref.files) === null || ref1 === void 0 ? void 0 : ref1[0];
        if (!file) return;
        const url = await (0,helpers_readFile__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(file);
        setImageSrc(url);
        setImageRatio(null);
        initialRatio.current = null;
    };
    const handleChangeSlide = (o)=>{
        setSelectedSlice(o);
        initialRatio.current = null;
        setImageRatio(null);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_1__/* .Layout */ .Ar, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "upload",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "title",
                            children: "THI\u1EBET K\u1EBE B\u1ED8 X\u1EBEP H\xccNH G\u1ED6 C\u1EE6A RI\xcaNG B\u1EA0N"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            id: "canvas",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("canvas", {
                                ref: canvas
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "upload",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "upload",
                                    children: "T\u1EA3i h\xecnh l\xean"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    onChange: handleChangeImage,
                                    type: "file",
                                    name: "",
                                    id: "upload"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "controls",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: upSize,
                                    className: "control",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaPlus, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: downSize,
                                    className: "control",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaMinus, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: ()=>handleY(-1)
                                    ,
                                    className: "control",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaArrowAltCircleUp, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: ()=>handleY(1)
                                    ,
                                    className: "control",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaArrowAltCircleDown, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: ()=>handleX(-1)
                                    ,
                                    className: "control",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaArrowAltCircleLeft, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: ()=>handleX(1)
                                    ,
                                    className: "control",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaArrowAltCircleRight, {})
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "frame",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "title",
                                    children: "Khung h\xecnh"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: ()=>setSelectedFrame(0)
                                    ,
                                    className: `frame_1 ${SelectedFrame === 0 ? "selected" : ""}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "H\xecnh ch\u1EEF nh\u1EADt 21x30"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: ()=>setSelectedFrame(1)
                                    ,
                                    className: `frame_2 ${SelectedFrame === 1 ? "selected" : ""}`,
                                    children: "H\xecnh vu\xf4ng 30x30"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: ()=>setSelectedFrame(2)
                                    ,
                                    className: `frame_3 ${SelectedFrame === 2 ? "selected" : ""}`,
                                    children: "H\xecnh tr\xf2n 30x30"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    onClick: ()=>setSelectedFrame(3)
                                    ,
                                    className: `frame_4 ${SelectedFrame === 3 ? "selected" : ""}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiFillHeart, {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Tr\xe1i tim 27x30"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "slices",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "title",
                                    children: "\u0110\u01B0\u1EDDng c\u1EAFt"
                                }),
                                slice.map((o)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        onClick: ()=>handleChangeSlide(o)
                                        ,
                                        className: `slice ${SelectedSlice.slice === o.slice ? "selected" : ""}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: o.sliceIcon,
                                            alt: ""
                                        })
                                    }, o.slice)
                                )
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Upload);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3387:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Upload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8702);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Upload__WEBPACK_IMPORTED_MODULE_0__]);
_Upload__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Upload__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5532:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* reexport safe */ _Home__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "g": () => (/* reexport safe */ _Upload__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3915);
/* harmony import */ var _Upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3387);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Home__WEBPACK_IMPORTED_MODULE_0__, _Upload__WEBPACK_IMPORTED_MODULE_1__]);
([_Home__WEBPACK_IMPORTED_MODULE_0__, _Upload__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5230:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FP": () => (/* binding */ asyncGetUser)
/* harmony export */ });
/* unused harmony exports CHANGE_USER, actionChangeUser */
/* harmony import */ var call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7346);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([call__WEBPACK_IMPORTED_MODULE_0__]);
call__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const CHANGE_USER = "CHANGE_USER";
const actionChangeUser = function(user) {
    return {
        type: CHANGE_USER,
        payload: {
            user
        }
    };
};
const asyncGetUser = ()=>async (dispatch)=>{
        const { data  } = await call__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/user`);
        dispatch(actionChangeUser(data));
    }
;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;