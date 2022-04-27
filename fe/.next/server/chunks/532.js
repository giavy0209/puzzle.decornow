"use strict";
exports.id = 532;
exports.ids = [532];
exports.modules = {

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

/***/ 4193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ renderDate)
/* harmony export */ });
function renderDate({ date , format ="dd/MM/yyyy - hh:mm:ss"  }) {
    date = new Date(date);
    const d = date.getDate() || 1;
    const M = date.getMonth() + 1 || 1;
    const y = date.getFullYear() || 1991;
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    return format.replace("dd", d.toString()).replace("MM", M.toString()).replace("yyyy", y.toString()).replace("hh", h.toString()).replace("mm", m.toString()).replace("ss", s.toString());
};


/***/ }),

/***/ 8536:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var call__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7346);
/* harmony import */ var constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(207);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var services_GHNService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3802);
/* harmony import */ var store_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(170);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([call__WEBPACK_IMPORTED_MODULE_2__]);
call__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const Cart = ()=>{
    const formRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
    const { 0: IsLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: Provinces , 1: setProvinces  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const { 0: ProvinceSelected , 1: setProvinceSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    const { 0: Districts , 1: setDistricts  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const { 0: DistrictsSelected , 1: setDistrictsSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    const { 0: Wards , 1: setWards  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const { 0: WardSelected , 1: setWardSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        (0,services_GHNService__WEBPACK_IMPORTED_MODULE_8__/* .fetchProvinces */ .QE)().then((res)=>setProvinces([
                ...res.data
            ])
        );
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (ProvinceSelected) {
            (0,services_GHNService__WEBPACK_IMPORTED_MODULE_8__/* .fetchDistricts */ .hj)(ProvinceSelected).then((res)=>{
                setDistricts([
                    ...res.data
                ]);
            });
        }
    }, [
        ProvinceSelected
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (DistrictsSelected) {
            (0,services_GHNService__WEBPACK_IMPORTED_MODULE_8__/* .fetchWards */ .zZ)(DistrictsSelected).then((res)=>{
                console.log(res);
                setWards([
                    ...res.data
                ]);
            });
        }
    }, [
        DistrictsSelected
    ]);
    const cart = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.cart
    );
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
    const handleQuantity = (o, add)=>{
        let quantity = o.quantity + add;
        if (quantity < 1) quantity = 1;
        o.quantity = quantity;
        dispatch((0,store_actions__WEBPACK_IMPORTED_MODULE_9__/* .actionChangeCart */ ._)([
            ...cart
        ]));
    };
    const handleDelete = (data)=>{
        const index = cart.findIndex((o)=>o._id === data._id
        );
        cart.splice(index, 1);
        dispatch((0,store_actions__WEBPACK_IMPORTED_MODULE_9__/* .actionChangeCart */ ._)([
            ...cart
        ]));
    };
    const handleChangeQuantity = (e, o)=>{
        let value = Number(e.target.value);
        if (!value || value < 1) value = 1;
        o.quantity = value;
        dispatch((0,store_actions__WEBPACK_IMPORTED_MODULE_9__/* .actionChangeCart */ ._)([
            ...cart
        ]));
    };
    const onChangeProvince = (value)=>{
        setProvinceSelected(value);
        setDistrictsSelected(null);
        formRef.current.setFieldsValue({
            ...formRef.current.getFieldsValue(),
            district: null
        });
    };
    const onChangeDistrict = (value)=>{
        setDistrictsSelected(value);
        setWardSelected(null);
        (0,services_GHNService__WEBPACK_IMPORTED_MODULE_8__/* .fetchServices */ .Qz)(value).then((res)=>{
            console.log(res);
        });
        formRef.current.setFieldsValue({
            ...formRef.current.getFieldsValue(),
            ward: null
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (ProvinceSelected && DistrictsSelected && WardSelected) {
            (0,services_GHNService__WEBPACK_IMPORTED_MODULE_8__/* .calculateFee */ .Z3)(DistrictsSelected, WardSelected).then((res)=>{
                console.log(res);
            });
        }
    }, [
        ProvinceSelected,
        DistrictsSelected,
        WardSelected
    ]);
    const handleFormDone = async (value)=>{
        const items = [];
        setIsLoading(true);
        for(let index = 0; index < cart.length; index++){
            const item = cart[index];
            if (item.file) {
                const form = new FormData();
                form.append("file", item.file);
                const res = await call__WEBPACK_IMPORTED_MODULE_2__/* ["default"].post */ .Z.post("upload", form);
                console.log(res);
                const thumbnail = `${constant__WEBPACK_IMPORTED_MODULE_10__/* .DOMAIN */ .y}${res.data.path}`;
                item.thumbnail = thumbnail;
                console.log(item.thumbnail);
            }
            items.push({
                product: item._id || null,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                thumbnail: item.thumbnail
            });
        }
        const res = await call__WEBPACK_IMPORTED_MODULE_2__/* ["default"].post */ .Z.post("/order", {
            ...value,
            items
        });
        dispatch((0,store_actions__WEBPACK_IMPORTED_MODULE_9__/* .actionChangeCart */ ._)([]));
        setIsLoading(false);
        (0,react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast)("\u0110\u1EB7t h\xe0ng th\xe0nh c\xf4ng, nh\xe2n vi\xean s\u1EBD li\xean h\u1EC7 v\u1EDBi b\u1EA1n s\u1EDBm nh\u1EA5t.");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "cart mt-30",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "title pb-20",
                        children: "Gi\u1ECF h\xe0ng"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flexbox mt-30",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-8",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "cart-items",
                                    children: cart.map((o)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "item",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flexbox",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-4",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "img",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: o.thumbnail,
                                                                alt: ""
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-8",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "info",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    onClick: ()=>handleDelete(o)
                                                                    ,
                                                                    className: "delete",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaTrash, {}),
                                                                        " "
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "name",
                                                                    children: o.slug ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                        href: `/product-detail/${o.slug}`,
                                                                        children: o.name
                                                                    }) : "Gh\xe9p h\xecnh tranh g\u1ED7"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "price",
                                                                    children: [
                                                                        o.price.toLocaleString(),
                                                                        "\u0111"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "quantity",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "input",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                onClick: ()=>handleQuantity(o, -1)
                                                                                ,
                                                                                className: "change",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaMinus, {})
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                onChange: (e)=>handleChangeQuantity(e, o)
                                                                                ,
                                                                                value: o.quantity,
                                                                                type: "number",
                                                                                name: "",
                                                                                id: ""
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                onClick: ()=>handleQuantity(o, 1)
                                                                                ,
                                                                                className: "change",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaPlus, {})
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "sum",
                                                                    children: [
                                                                        "T\u1ED5ng : ",
                                                                        (o.quantity * o.price).toLocaleString(),
                                                                        "\u0111"
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        }, o._id)
                                    )
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-4",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "check-out",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "sum",
                                            children: [
                                                "T\u1EA1m t\xednh: ",
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    children: [
                                                        cart.reduce((prev, curr)=>({
                                                                sum: prev.sum + curr.quantity * curr.price
                                                            })
                                                        , {
                                                            sum: 0
                                                        }).sum.toLocaleString(),
                                                        "\u0111"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "button",
                                            children: "Thanh to\xe1n"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "return",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: "/",
                                                children: "Ti\u1EBFp t\u1EE5c mua s\u1EAFm"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "title",
                        children: "Th\xf4ng tin v\u1EADn chuy\u1EC3n"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Form, {
                        onFinish: handleFormDone,
                        ref: formRef,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                rules: [
                                    {
                                        required: true,
                                        message: "Vui l\xf2ng nh\u1EADp s\u1ED1 \u0111i\u1EC7n tho\u1EA1i"
                                    }
                                ],
                                name: "phone",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                    placeholder: "\u0110i\u1EC7n tho\u1EA1i"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                rules: [
                                    {
                                        required: true,
                                        message: "Vui l\xf2ng nh\u1EADp t\xean"
                                    }
                                ],
                                name: "name",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                    placeholder: "H\u1ECD t\xean"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                rules: [
                                    {
                                        required: true,
                                        message: "Vui l\xf2ng ch\u1ECDn t\u1EC9nh/th\xe0nh"
                                    }
                                ],
                                name: "province",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Select, {
                                    showSearch: true,
                                    optionFilterProp: "ProvinceName",
                                    placeholder: "T\u1EC9nh / th\xe0nh ph\u1ED1",
                                    onChange: onChangeProvince,
                                    filterOption: (input, option)=>{
                                        var ref;
                                        return !!(option === null || option === void 0 ? void 0 : (ref = option.children) === null || ref === void 0 ? void 0 : ref.toString().toLowerCase().includes(input.toLowerCase()));
                                    },
                                    children: Provinces.map((o)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Select.Option, {
                                            value: o.ProvinceID,
                                            children: o.ProvinceName
                                        }, o.ProvinceID)
                                    )
                                })
                            }),
                            ProvinceSelected && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                dependencies: [
                                    "province"
                                ],
                                rules: [
                                    {
                                        required: true,
                                        message: "Vui l\xf2ng ch\u1ECDn qu\u1EADn/huy\u1EC7n"
                                    }, 
                                ],
                                name: "district",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Select, {
                                    showSearch: true,
                                    optionFilterProp: "DistrictName",
                                    placeholder: "Qu\u1EADn/Huy\u1EC7n",
                                    filterOption: (input, option)=>{
                                        var ref;
                                        return !!(option === null || option === void 0 ? void 0 : (ref = option.children) === null || ref === void 0 ? void 0 : ref.toString().toLowerCase().includes(input.toLowerCase()));
                                    },
                                    onChange: onChangeDistrict,
                                    children: Districts.map((o)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Select.Option, {
                                            value: o.DistrictID,
                                            children: o.DistrictName
                                        }, o.DistrictID)
                                    )
                                })
                            }),
                            DistrictsSelected && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                rules: [
                                    {
                                        required: true,
                                        message: "Vui l\xf2ng ch\u1ECDn ph\u01B0\u1EDDng/x\xe3"
                                    }
                                ],
                                name: "ward",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Select, {
                                    showSearch: true,
                                    optionFilterProp: "DistrictName",
                                    placeholder: "Ph\u01B0\u1EDDng/X\xe3",
                                    filterOption: (input, option)=>{
                                        var ref;
                                        return !!(option === null || option === void 0 ? void 0 : (ref = option.children) === null || ref === void 0 ? void 0 : ref.toString().toLowerCase().includes(input.toLowerCase()));
                                    },
                                    onChange: (value)=>setWardSelected(value)
                                    ,
                                    children: Wards.map((o)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Select.Option, {
                                            value: o.WardCode,
                                            children: o.WardName
                                        }, o.WardCode)
                                    )
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
                                rules: [
                                    {
                                        required: true,
                                        message: "Vui l\xf2ng nh\u1EADp \u0111\u1ECBa ch\u1EC9"
                                    }
                                ],
                                name: "address",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                    placeholder: "\u0110\u1ECBa ch\u1EC9 c\u1EE5 th\u1EC3"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                type: "primary",
                                loading: IsLoading,
                                htmlType: "submit",
                                children: "\u0110\u1EB7t h\xe0ng"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8890:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8536);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Cart__WEBPACK_IMPORTED_MODULE_0__]);
_Cart__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Cart__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components__WEBPACK_IMPORTED_MODULE_1__]);
components__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Home = ({ newProduct , categories  })=>{
    var ref, ref1;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
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
                                children: "S\u1EA2N PH\u1EA8M M\u1EDAI"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row column-6",
                                children: newProduct === null || newProduct === void 0 ? void 0 : (ref = newProduct.data) === null || ref === void 0 ? void 0 : ref.map((o)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: `/product-detail/${o.slug}`,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            href: `/product-detail/${o.slug}`,
                                            className: "item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "img",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "cover",
                                                        src: o.thumbnail,
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: o.name
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "price",
                                                    children: [
                                                        Number(o.price).toLocaleString(),
                                                        "\u0111"
                                                    ]
                                                })
                                            ]
                                        })
                                    }, o._id)
                                )
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
                    className: "ss_4 mt-30",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "container",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "title",
                                children: "COLLECTION LIST"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row column-6",
                                children: categories === null || categories === void 0 ? void 0 : (ref1 = categories.data) === null || ref1 === void 0 ? void 0 : ref1.map((o)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: `/product/${o.slug}`,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            href: `/product/${o.slug}`,
                                            className: "item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "img",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "cover",
                                                        src: o.thumbnail,
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "name",
                                                    children: o.name
                                                })
                                            ]
                                        })
                                    }, o._id)
                                )
                            })
                        ]
                    })
                })
            ]
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

/***/ 4237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ pages_NewsDetail)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/helpers/renderDate.ts
var renderDate = __webpack_require__(4193);
;// CONCATENATED MODULE: ./src/pages/NewsDetail/NewsDetail.tsx


const NewsDetail = ({ pageData  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "news-detail",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "title",
                        children: pageData.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "create-date",
                        children: (0,renderDate/* default */.Z)({
                            date: pageData.createdAt
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            dangerouslySetInnerHTML: {
                                __html: pageData.content
                            },
                            className: "content"
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const NewsDetail_NewsDetail = (NewsDetail);

;// CONCATENATED MODULE: ./src/pages/NewsDetail/index.ts

/* harmony default export */ const pages_NewsDetail = (NewsDetail_NewsDetail);


/***/ }),

/***/ 3555:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9176);
/* harmony import */ var helpers_renderDate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4193);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components__WEBPACK_IMPORTED_MODULE_1__]);
components__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const News = ({ pageData , items  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "products",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "title",
                    children: pageData.name
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flexbox flex4 mt-30",
                    children: items === null || items === void 0 ? void 0 : items.data.map((o)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "item",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: `/${o.type === 1 ? "product-detail" : "news-detail"}/${o.slug}`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    className: "product",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "img",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "cover",
                                                src: o.thumbnail,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "name",
                                            children: o.name
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "create-date",
                                            children: (0,helpers_renderDate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
                                                date: o.createdAt
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "description",
                                            children: o.description
                                        })
                                    ]
                                })
                            })
                        }, o._id)
                    )
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_1__/* .Pagination */ .tl, {
                    onChange: (page)=>router.push(`/product/${router.query.product}?page=${page}`)
                    ,
                    current: items.current,
                    pageSize: items.pageSize,
                    total: items.total
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (News);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5305:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _News__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_News__WEBPACK_IMPORTED_MODULE_0__]);
_News__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_News__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ pages_ProductDetail)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: ./src/store/actions.ts
var actions = __webpack_require__(170);
;// CONCATENATED MODULE: ./src/pages/ProductDetail/ProductDetail.tsx







const ProductDetail = ({ pageData  })=>{
    var ref;
    const dispatch = (0,external_react_redux_.useDispatch)();
    const cart = (0,external_react_redux_.useSelector)((state)=>state.cart
    );
    (0,external_react_.useEffect)(()=>{
        console.log(cart);
    }, [
        cart
    ]);
    const { 0: Quantity , 1: setQuantity  } = (0,external_react_.useState)(1);
    const { 0: MainImage , 1: setMainImage  } = (0,external_react_.useState)(pageData.thumbnail);
    const handleQuantity = (e, add)=>{
        if (e) {
            let value = Number(e.target.value);
            if (!value || value < 1) value = 1;
            setQuantity(value);
        } else {
            let value = Quantity + (add || 0);
            if (!value || value < 1) value = 1;
            setQuantity(value);
        }
    };
    const handleAddToCart = ()=>{
        const isHaveInCart = cart.find((o)=>o._id === pageData._id
        );
        if (isHaveInCart) {
            isHaveInCart.quantity += Quantity;
        } else {
            cart.push({
                ...pageData,
                quantity: Quantity
            });
        }
        dispatch((0,actions/* actionChangeCart */._)([
            ...cart
        ]));
        (0,external_react_toastify_.toast)(`Đã thêm ${Quantity} sản phẩm vào giỏ hàng`);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "product-detail",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flexbox",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "image-slice",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "main",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: MainImage,
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "slider",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                                            infinite: false,
                                            speed: 500,
                                            slidesToShow: 3,
                                            slidesToScroll: 3,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    onClick: ()=>setMainImage(pageData.thumbnail)
                                                    ,
                                                    className: "img",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: pageData.thumbnail,
                                                        alt: ""
                                                    })
                                                }),
                                                (ref = pageData.images) === null || ref === void 0 ? void 0 : ref.map((o, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        onClick: ()=>setMainImage(pageData.thumbnail)
                                                        ,
                                                        className: "img",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: o,
                                                            alt: ""
                                                        })
                                                    }, o + index)
                                                )
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-8",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "detail",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "name",
                                        children: pageData.name
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "price",
                                        children: [
                                            pageData.price.toLocaleString(),
                                            "\u0111"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "quantity",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flexbox",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-6",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "input",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                onClick: ()=>handleQuantity(null, -1)
                                                                ,
                                                                className: "change",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaMinus, {})
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                value: Quantity,
                                                                onChange: handleQuantity,
                                                                type: "number",
                                                                name: "",
                                                                id: ""
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                onClick: ()=>handleQuantity(null, 1)
                                                                ,
                                                                className: "change",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaPlus, {})
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-6",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "add",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            onClick: handleAddToCart,
                                                            className: "button",
                                                            children: "Th\xeam v\xe0o gi\u1ECF h\xe0ng"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "description",
                                        children: pageData.description
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                dangerouslySetInnerHTML: {
                                    __html: pageData.content
                                },
                                className: "content"
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const ProductDetail_ProductDetail = (ProductDetail);

;// CONCATENATED MODULE: ./src/pages/ProductDetail/index.ts

/* harmony default export */ const pages_ProductDetail = (ProductDetail_ProductDetail);


/***/ }),

/***/ 8845:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9176);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components__WEBPACK_IMPORTED_MODULE_1__]);
components__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Product = ({ pageData , items  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "products",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "title",
                        children: pageData.name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flexbox flex4 mt-30",
                        children: items === null || items === void 0 ? void 0 : items.data.map((o)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "item",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: `/${o.type === 1 ? "product-detail" : "news-detail"}/${o.slug}`,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        className: "product",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "img",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: "cover",
                                                    src: o.thumbnail,
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: o.name
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "price",
                                                children: [
                                                    o.price.toLocaleString(),
                                                    "\u0111"
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }, o._id)
                        )
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_1__/* .Pagination */ .tl, {
                        onChange: (page)=>router.push(`/product/${router.query.product}?page=${page}`)
                        ,
                        current: items.current,
                        pageSize: items.pageSize,
                        total: items.total
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3227:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8845);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Product__WEBPACK_IMPORTED_MODULE_0__]);
_Product__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Product__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

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
/* harmony import */ var helpers_readFile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2069);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var store_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(170);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_6__]);
uuid__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









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
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const cart = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.cart
    );
    const { 0: SelectedSlice , 1: setSelectedSlice  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(slice[0]);
    const { 0: SelectedFrame , 1: setSelectedFrame  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const { 0: Size , 1: setSize  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        w: 3000,
        h: 3000
    });
    const { 0: ImagePos , 1: setImagePos  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        x: 0,
        y: 0
    });
    const { 0: ImageRatio , 1: setImageRatio  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: ImageSrc , 1: setImageSrc  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const initialRatio = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const canvas = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
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
    const loadImage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>new Promise((r)=>{
            if (ImageSrc) {
                const img = new Image();
                img.src = ImageSrc;
                img.onload = ()=>{
                    r(img);
                };
            }
        })
    , [
        ImageSrc
    ]);
    const createPattern = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
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
    }, [
        loadImage,
        Size,
        ImagePos,
        ImageRatio
    ]);
    const drawSlice = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        return new Promise((r)=>{
            const img = new Image();
            img.src = SelectedSlice.slice;
            console.log(Size);
            img.onload = ()=>{
                const canvasPtrn = document.createElement("canvas");
                canvasPtrn.width = Size.w;
                canvasPtrn.height = Size.h;
                const ctxPtrn = canvasPtrn.getContext("2d");
                ctxPtrn === null || ctxPtrn === void 0 ? void 0 : ctxPtrn.drawImage(img, 0, 0, img.width, img.height, 0, 0, Size.w, Size.h);
                r(canvasPtrn);
            };
        });
    }, [
        SelectedSlice,
        Size
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
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
            ctx.current.closePath();
        }
    }, [
        Size,
        SelectedFrame,
        drawSlice,
        createPattern
    ]);
    const handleChangeFrame = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{
        setImageRatio(null);
        initialRatio.current = null;
        if (value === 0) {
            setSize({
                w: 2100,
                h: 3000
            });
        }
        if (value === 1) {
            setSize({
                w: 3000,
                h: 3000
            });
        }
        if (value === 2) {
            setSize({
                w: 3000,
                h: 3000
            });
        }
        if (value === 3) {
            setSize({
                w: 2700,
                h: 3000
            });
        }
        setSelectedFrame(value);
    }, []);
    const downSize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (ImageRatio && initialRatio.current) {
            setImageRatio(ImageRatio - initialRatio.current / 50);
        }
    }, [
        ImageRatio
    ]);
    const upSize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (ImageRatio && initialRatio.current) {
            setImageRatio(ImageRatio + initialRatio.current / 50);
        }
    }, [
        ImageRatio
    ]);
    const handleX = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{
        const x = Size.w / 100 * value;
        console.log(Size);
        setImagePos({
            ...ImagePos,
            x: ImagePos.x + x
        });
    }, [
        ImagePos
    ]);
    const handleY = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value)=>{
        const y = Size.h / 100 * value;
        setImagePos({
            ...ImagePos,
            y: ImagePos.y + y
        });
    }, [
        ImagePos
    ]);
    const handleChangeImage = async (event)=>{
        var ref, ref1;
        event.persist();
        const file = event === null || event === void 0 ? void 0 : (ref = event.target) === null || ref === void 0 ? void 0 : (ref1 = ref.files) === null || ref1 === void 0 ? void 0 : ref1[0];
        if (!file) return;
        const url = await (0,helpers_readFile__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(file);
        setImageSrc(url);
        setImageRatio(null);
        initialRatio.current = null;
    };
    const handleChangeSlide = (o)=>{
        setSelectedSlice(o);
        initialRatio.current = null;
        setImageRatio(null);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleKey = (e)=>{
            e.preventDefault();
            const keyCode = e.keyCode;
            if (keyCode === 189) {
                downSize();
            }
            if (keyCode === 187) {
                upSize();
            }
            if (keyCode === 39) {
                handleX(1);
            }
            if (keyCode === 37) {
                handleX(-1);
            }
            if (keyCode === 40) {
                handleY(1);
            }
            if (keyCode === 38) {
                handleY(-1);
            }
        };
        document.addEventListener("keydown", handleKey);
        return ()=>{
            document.removeEventListener("keydown", handleKey);
        };
    }, [
        downSize,
        upSize,
        handleX,
        handleY
    ]);
    const handleAddToCart = ()=>{
        var ref;
        if (!ImageSrc) return (0,react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast)("B\u1EA1n ch\u01B0a ch\u1ECDn h\xecnh \u1EA3nh");
        const url = (ref = canvas.current) === null || ref === void 0 ? void 0 : ref.toDataURL();
        if (url) {
            const splitDataURI = url.split(",");
            const byteString = splitDataURI[0].indexOf("base64") >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1]);
            const mimeString = splitDataURI[0].split(":")[1].split(";")[0];
            const ia = new Uint8Array(byteString.length);
            for(let i = 0; i < byteString.length; i++)ia[i] = byteString.charCodeAt(i);
            const file = new Blob([
                ia
            ], {
                type: mimeString
            });
            const blobURL = URL.createObjectURL(file);
            cart.push({
                _id: (0,uuid__WEBPACK_IMPORTED_MODULE_6__.v4)(),
                thumbnail: blobURL,
                file,
                price: 500000,
                quantity: 1
            });
            dispatch((0,store_actions__WEBPACK_IMPORTED_MODULE_8__/* .actionChangeCart */ ._)([
                ...cart
            ]));
            (0,react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast)("\u0110\xe3 th\xeam v\xe0o gi\u1ECF h\xe0ng");
            setImageSrc(null);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "upload",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "title",
                        children: "THI\u1EBET K\u1EBE B\u1ED8 X\u1EBEP H\xccNH G\u1ED6 C\u1EE6A RI\xcaNG B\u1EA0N"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flexbox mt-30",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-6",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    id: "canvas",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("canvas", {
                                        ref: canvas
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-6",
                                children: [
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
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaPlus, {})
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                onClick: downSize,
                                                className: "control",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaMinus, {})
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                onClick: ()=>handleY(-1)
                                                ,
                                                className: "control",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaArrowAltCircleUp, {})
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                onClick: ()=>handleY(1)
                                                ,
                                                className: "control",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaArrowAltCircleDown, {})
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                onClick: ()=>handleX(-1)
                                                ,
                                                className: "control",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaArrowAltCircleLeft, {})
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                onClick: ()=>handleX(1)
                                                ,
                                                className: "control",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaArrowAltCircleRight, {})
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Ho\u1EB7c d\xf9ng ph\xedm +,- v\xe0 m\u0169i t\xean tr\xean b\xe0n ph\xedm \u0111\u1EC3 \u0111i\u1EC1u ch\u1EC9nh"
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
                                                onClick: ()=>handleChangeFrame(0)
                                                ,
                                                className: `frame_1 ${SelectedFrame === 0 ? "selected" : ""}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "H\xecnh ch\u1EEF nh\u1EADt 21x30"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                onClick: ()=>handleChangeFrame(1)
                                                ,
                                                className: `frame_2 ${SelectedFrame === 1 ? "selected" : ""}`,
                                                children: "H\xecnh vu\xf4ng 30x30"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                onClick: ()=>handleChangeFrame(2)
                                                ,
                                                className: `frame_3 ${SelectedFrame === 2 ? "selected" : ""}`,
                                                children: "H\xecnh tr\xf2n 30x30"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                onClick: ()=>handleChangeFrame(3)
                                                ,
                                                className: `frame_4 ${SelectedFrame === 3 ? "selected" : ""}`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiFillHeart, {}),
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
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: handleAddToCart,
                        className: "button mt-20",
                        children: "Th\xeam v\xe0o gi\u1ECF h\xe0ng"
                    })
                ]
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
/* harmony export */   "AP": () => (/* reexport safe */ _Cart__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "SK": () => (/* reexport safe */ _Home__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "Sq": () => (/* reexport safe */ _News__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   "dn": () => (/* reexport safe */ _ProductDetail__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "gq": () => (/* reexport safe */ _Upload__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "hF": () => (/* reexport safe */ _NewsDetail__WEBPACK_IMPORTED_MODULE_6__.Z),
/* harmony export */   "xs": () => (/* reexport safe */ _Product__WEBPACK_IMPORTED_MODULE_2__.Z)
/* harmony export */ });
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3915);
/* harmony import */ var _Upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3387);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3227);
/* harmony import */ var _ProductDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(636);
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8890);
/* harmony import */ var _News__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5305);
/* harmony import */ var _NewsDetail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4237);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Home__WEBPACK_IMPORTED_MODULE_0__, _Upload__WEBPACK_IMPORTED_MODULE_1__, _Product__WEBPACK_IMPORTED_MODULE_2__, _Cart__WEBPACK_IMPORTED_MODULE_4__, _News__WEBPACK_IMPORTED_MODULE_5__]);
([_Home__WEBPACK_IMPORTED_MODULE_0__, _Upload__WEBPACK_IMPORTED_MODULE_1__, _Product__WEBPACK_IMPORTED_MODULE_2__, _Cart__WEBPACK_IMPORTED_MODULE_4__, _News__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QE": () => (/* binding */ fetchProvinces),
/* harmony export */   "Qz": () => (/* binding */ fetchServices),
/* harmony export */   "Z3": () => (/* binding */ calculateFee),
/* harmony export */   "hj": () => (/* binding */ fetchDistricts),
/* harmony export */   "zZ": () => (/* binding */ fetchWards)
/* harmony export */ });
/* unused harmony export fetchShops */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const GHN_DATA = Object.freeze({
    BASE_URL: "https://dev-online-gateway.ghn.vn/shiip/public-api",
    TOKEN: "2bf996ce-638c-11ec-ac64-422c37c6de1b",
    CLIENT_ID: "2501985",
    SHOP_ID: 84536,
    SHOP_DISTRICT_ID: 1454,
    SHOP_WARD_CODE: 21211
});
const callAPI = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: GHN_DATA.BASE_URL,
    headers: {
        "Token": GHN_DATA.TOKEN,
        "Content-Type": "application/json"
    }
});
const fetchShops = async ()=>{
    return await callAPI.post("/v2/shop/all").then((data)=>data && data.status === 200 ? data.data : null
    );
};
const fetchProvinces = async ()=>{
    return await callAPI.get("/master-data/province").then((data)=>data && data.status === 200 ? data.data : null
    );
};
const fetchDistricts = async (provinceId)=>{
    return await callAPI.get(`/master-data/district?province_id=${provinceId}`).then((data)=>data && data.status === 200 ? data.data : null
    );
};
const fetchWards = async (districtId)=>{
    return await callAPI.get(`/master-data/ward?district_id=${districtId}`).then((data)=>data && data.status === 200 ? data.data : null
    );
};
const fetchServices = async (toDistrictId)=>{
    return await callAPI.post("/v2/shipping-order/available-services", {
        shop_id: GHN_DATA.SHOP_ID,
        from_district: GHN_DATA.SHOP_DISTRICT_ID,
        to_district: toDistrictId
    }).then((data)=>data && data.status === 200 ? data.data : null
    );
};
const calculateFee = async (districtId, wardCode)=>{
    return await callAPI.post("/v2/shipping-order/fee", {
        from_district_id: GHN_DATA.SHOP_DISTRICT_ID,
        service_type_id: 2,
        to_district_id: districtId,
        to_ward_code: wardCode.toString(),
        height: 50,
        length: 20,
        weight: 200,
        width: 20,
        insurance_value: null,
        coupon: null
    }).then((data)=>data && data.status === 200 ? data.data : null
    );
};


/***/ }),

/***/ 170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ actionChangeCart)
/* harmony export */ });
/* unused harmony export CHANGE_CART */
const CHANGE_CART = "CHANGE_CART";
const actionChangeCart = function(cart) {
    return {
        type: CHANGE_CART,
        payload: {
            cart
        }
    };
};


/***/ })

};
;