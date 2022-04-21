"use strict";
exports.id = 107;
exports.ids = [107];
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
    try {
        const jwt = _helpers_storage__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getToken */ .Z.getToken();
        return axios__WEBPACK_IMPORTED_MODULE_0___default().create({
            baseURL: _constant__WEBPACK_IMPORTED_MODULE_3__/* .DOMAIN */ .y,
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
    } catch (error) {
        return axios__WEBPACK_IMPORTED_MODULE_0___default().create({
            baseURL: _constant__WEBPACK_IMPORTED_MODULE_3__/* .DOMAIN */ .y
        });
    }
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













const Header = ({ menu  })=>{
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
                                ),
                                menu === null || menu === void 0 ? void 0 : menu.map((o)=>{
                                    var ref;
                                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                href: `/product/${o.slug}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    children: o.name
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                children: (ref = o.child) === null || ref === void 0 ? void 0 : ref.map((child)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                            href: `/product/${child.slug}`,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                children: child.name
                                                            })
                                                        })
                                                    }, child._id)
                                                )
                                            })
                                        ]
                                    }, o._id);
                                })
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
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                        href: "/cart",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: "cart",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaCartPlus, {})
                        })
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

/***/ 2837:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Layout/Layout.tsx

const Layout_Layout = ({ children ,  })=>{
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: children
    });
};
/* harmony default export */ const components_Layout_Layout = ((/* unused pure expression or super */ null && (Layout_Layout)));

;// CONCATENATED MODULE: ./src/components/Layout/index.ts

/* harmony default export */ const components_Layout = ((/* unused pure expression or super */ null && (Layout)));


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

/***/ 3436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Pagination)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
;// CONCATENATED MODULE: ./src/components/Pagination/Pagination.tsx


const Pagination = ({ total , pageSize , current , onChange  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "pagination",
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Pagination, {
                onChange: (page)=>onChange(page)
                ,
                current: current,
                pageSize: pageSize,
                total: total
            })
        })
    });
};
/* harmony default export */ const Pagination_Pagination = (Pagination);

;// CONCATENATED MODULE: ./src/components/Pagination/index.ts

/* harmony default export */ const components_Pagination = (Pagination_Pagination);


/***/ }),

/***/ 9176:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$_": () => (/* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "II": () => (/* reexport safe */ _Input__WEBPACK_IMPORTED_MODULE_6__.Z),
/* harmony export */   "h4": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "jL": () => (/* reexport safe */ _Banner__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "l0": () => (/* reexport safe */ _Form__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   "tl": () => (/* reexport safe */ _Pagination__WEBPACK_IMPORTED_MODULE_7__.Z),
/* harmony export */   "u_": () => (/* reexport safe */ _Modal__WEBPACK_IMPORTED_MODULE_4__.Z)
/* harmony export */ });
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2837);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3077);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2725);
/* harmony import */ var _Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1615);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6582);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6529);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2603);
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3436);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Header__WEBPACK_IMPORTED_MODULE_1__]);
_Header__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ DOMAIN)
/* harmony export */ });
const DOMAIN = "http://localhost:3000/api";


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