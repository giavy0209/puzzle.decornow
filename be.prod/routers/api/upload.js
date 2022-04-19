"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("controllers");
var isAuth_1 = require("middleware/isAuth");
var uploadMulter_1 = __importDefault(require("../../uploadMulter"));
var router = (0, express_1.Router)();
router.route('/upload')
    .get(isAuth_1.isAdminAny, controllers_1.upload.get)
    .post(uploadMulter_1.default, controllers_1.upload.post);
exports.default = router;
