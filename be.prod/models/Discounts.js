"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var DiscountSchema = new mongoose_1.Schema({
    min: { type: Number },
    max: { type: Number },
    total: { type: Number },
    left: { type: Number },
    name: { type: String },
    code: { type: String },
    status: { type: Number, default: 1 },
    expire: { type: Date },
    value: { type: Number, },
    discountBy: { type: String },
    createBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'admins' },
}, {
    timestamps: true
});
var Discounts = (0, mongoose_1.model)('discounts', DiscountSchema);
exports.default = Discounts;
