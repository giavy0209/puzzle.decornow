"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("controllers");
var isAuth_1 = require("middleware/isAuth");
var router = (0, express_1.Router)();
router.route('/order')
    .get(isAuth_1.isUserOrNot, controllers_1.order.get)
    .post(isAuth_1.isUserOrNot, controllers_1.order.post)
    .patch(isAuth_1.isAdminAny, controllers_1.order.patch);
exports.default = router;
