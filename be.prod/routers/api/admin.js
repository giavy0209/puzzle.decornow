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
var isAuth_1 = require("middleware/isAuth");
var router = (0, express_1.Router)();
router.route('/admin')
    .get(isAuth_1.isMaster, controllers_1.admin.get)
    .post(isAuth_1.isMaster, (0, validator_1.default)('body', 'username password', (0, validator_1.isLength)({ min: 6, max: 18, trim: true })), (0, validator_1.default)('body', 'username', (0, validator_1.isUnique)(models_1.Admins, 'username')), (0, validator_1.default)('body', 'password', (0, validator_1.encript)()), controllers_1.admin.post)
    .put(isAuth_1.isMaster, (0, validator_1.default)('query', '_id', (0, validator_1.isObjectId)()), (0, validator_1.default)('body', 'username', (0, validator_1.isLength)({ min: 6, max: 18, trim: true })), controllers_1.admin.put)
    .delete(isAuth_1.isMaster, (0, validator_1.default)('query', '_id', (0, validator_1.isObjectId)()), controllers_1.admin.delete);
exports.default = router;
