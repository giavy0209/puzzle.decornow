"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("controllers");
var isAuth_1 = require("middleware/isAuth");
var router = (0, express_1.Router)();
router.route('/categories')
    .get(controllers_1.category.get)
    .post(isAuth_1.isAdminAny, controllers_1.category.post)
    .put(isAuth_1.isAdminAny, controllers_1.category.put)
    .delete(isAuth_1.isAdminAny, controllers_1.category.delete);
router.route('/categories_nested')
    .get(controllers_1.category.getNested);
router.route('/categories/:slug')
    .get(controllers_1.category.detail);
exports.default = router;
