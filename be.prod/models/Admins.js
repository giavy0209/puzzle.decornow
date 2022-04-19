"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var AdminSchema = new mongoose_1.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String },
    role: [{ type: Number }],
}, {
    timestamps: true
});
var Admins = (0, mongoose_1.model)('admins', AdminSchema);
exports.default = Admins;
