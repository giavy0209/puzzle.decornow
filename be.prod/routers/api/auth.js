"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("controllers");
var validator_1 = __importStar(require("middleware/validator"));
var models_1 = require("models");
var router = (0, express_1.Router)();
router.route('/auth-admin')
    .post((0, validator_1.default)('body', 'username password', (0, validator_1.isLength)({ min: 6, max: 18, trim: true })), (0, validator_1.default)('body', 'username', (0, validator_1.isExist)(models_1.Admins, 'username')), controllers_1.auth.adminAuth);
router.route('/auth')
    .post((0, validator_1.default)('body', 'email', (0, validator_1.isEmail)(), (0, validator_1.isExist)(models_1.Users, 'email')), controllers_1.auth.userAuth);
exports.default = router;
