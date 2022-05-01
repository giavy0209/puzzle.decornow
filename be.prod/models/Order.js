"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var OrderSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'users' },
    isPay: { type: Boolean, default: false },
    payBy: { type: String, default: '' },
    payAt: { type: Date },
    address: { type: String },
    province: { type: String },
    district: { type: String },
    ward: { type: String },
    orderPrice: { type: Number },
    shippingFee: { type: Number },
    sum: { type: Number },
    name: { type: String, default: '' },
    phone: { type: String, default: '' },
    items: [{
            name: { type: String, default: '' },
            price: { type: Number, default: 0 },
            quantity: { type: Number, default: 1 },
            thumbnail: { type: String, default: '' },
            baseImage: { type: String, default: '' },
            sum: { type: Number, default: 0 },
            product: { type: mongoose_1.Schema.Types.ObjectId, ref: 'products' }
        }],
    status: { type: Number, default: 0 }, //0 : chưa check, 1 : done, 2 : đang giao. 3 : hủy
}, {
    timestamps: true
});
var Order = (0, mongoose_1.model)('Order', OrderSchema);
exports.default = Order;
