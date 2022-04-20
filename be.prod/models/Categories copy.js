"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var CategoriesSchema = new mongoose_1.Schema({
    name: { type: String, default: '' },
    nameSeo: { type: String, default: '' },
    description: { type: String, default: '' },
    type: { type: Number, default: 1 },
    category: { type: mongoose_1.Schema.Types.ObjectId, ref: 'categories' },
    slug: { type: String },
    thumbnail: { type: String },
}, {
    timestamps: true
});
var Categories = (0, mongoose_1.model)('categories', CategoriesSchema);
exports.default = Categories;
