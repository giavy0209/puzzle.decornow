"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var UsersSchema = new mongoose_1.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dob: { type: Date, },
    name: { type: String },
    phone: { type: String },
    gender: { type: String },
    province: {
        name: { type: String },
        id: { type: String },
    },
    district: {
        name: { type: String },
        id: { type: String },
    },
    ward: {
        name: { type: String },
        id: { type: String },
    },
    address: { type: String },
}, {
    timestamps: true
});
var Users = (0, mongoose_1.model)('users', UsersSchema);
exports.default = Users;
