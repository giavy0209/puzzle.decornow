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
var isAuth_1 = require("middleware/isAuth");
var router = (0, express_1.Router)();
router.route('/discount')
    .get(isAuth_1.isAdminDiscount, controllers_1.discount.get)
    .post(isAuth_1.isAdminDiscount, (0, validator_1.default)('body', 'min max total value', (0, validator_1.isInRange)({ min: 0 })), (0, validator_1.default)('body', 'code', (0, validator_1.isLength)({ min: 1 })), controllers_1.discount.post)
    .put(isAuth_1.isAdminDiscount, (0, validator_1.default)('body', 'min max total value', (0, validator_1.isInRange)({ min: 0 })), (0, validator_1.default)('body', 'code', (0, validator_1.isLength)({ min: 1 })), controllers_1.discount.put)
    .delete(isAuth_1.isAdminDiscount, controllers_1.discount.delete);
exports.default = router;
