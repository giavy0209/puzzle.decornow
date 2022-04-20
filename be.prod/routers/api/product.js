"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("controllers");
var isAuth_1 = require("middleware/isAuth");
var router = (0, express_1.Router)();
router.route('/product')
    .get(controllers_1.product.get)
    .post(isAuth_1.isAdminAny, controllers_1.product.post)
    .put(isAuth_1.isAdminAny, controllers_1.product.put)
    .delete(isAuth_1.isAdminAny, controllers_1.product.delete);
router.route('/product/:slug')
    .get(controllers_1.product.detail);
exports.default = router;
