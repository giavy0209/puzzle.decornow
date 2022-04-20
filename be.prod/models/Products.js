"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ProductSchema = new mongoose_1.Schema({
    name: { type: String, default: '' },
    nameSeo: { type: String, default: '' },
    description: { type: String, default: '' },
    category: { type: mongoose_1.Schema.Types.ObjectId, ref: 'categories' },
    content: { type: String },
    slug: { type: String },
    thumbnail: { type: String },
    images: [{ type: String }],
}, {
    timestamps: true
});
var Products = (0, mongoose_1.model)('products', ProductSchema);
exports.default = Products;
