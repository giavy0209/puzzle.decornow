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
Admins.create({
    username: 'useradmin',
    password: 'useradmin',
    role: [0]
}).then(function (res) {
    console.log(res);
});
exports.default = Admins;
