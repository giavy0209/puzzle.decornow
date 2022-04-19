"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUser = exports.isAdminAny = exports.isAdminDiscount = exports.isMaster = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var isMaster = function (req, res, next) {
    var _a, _b, _c, _d, _e, _f;
    if (((_c = (_b = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization) === null || _b === void 0 ? void 0 : _b.split(' ')) === null || _c === void 0 ? void 0 : _c[0]) === 'Bearer') {
        try {
            var token = (_f = (_e = (_d = req.headers) === null || _d === void 0 ? void 0 : _d.authorization) === null || _e === void 0 ? void 0 : _e.split(' ')) === null || _f === void 0 ? void 0 : _f[1];
            var payload = (0, jsonwebtoken_1.verify)(token, 'adminToken');
            if (payload.role.includes(0)) {
                req.body.payload = payload;
                return next();
            }
            res.status(401).send({ msg: 'unauth' });
        }
        catch (error) {
            res.status(401).send({ msg: 'unauth' });
        }
    }
    else {
        res.status(401).send({ msg: 'unauth' });
    }
};
exports.isMaster = isMaster;
var isAdminDiscount = function (req, res, next) {
    var _a, _b, _c, _d, _e, _f;
    if (((_c = (_b = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization) === null || _b === void 0 ? void 0 : _b.split(' ')) === null || _c === void 0 ? void 0 : _c[0]) === 'Bearer') {
        try {
            var token = (_f = (_e = (_d = req.headers) === null || _d === void 0 ? void 0 : _d.authorization) === null || _e === void 0 ? void 0 : _e.split(' ')) === null || _f === void 0 ? void 0 : _f[1];
            var payload = (0, jsonwebtoken_1.verify)(token, 'adminToken');
            if (payload.role.includes(0) || payload.role.includes(4)) {
                req.body.payload = payload;
                return next();
            }
            res.status(401).send({ msg: 'unauth' });
        }
        catch (error) {
            res.status(401).send({ msg: 'unauth' });
        }
    }
    else {
        res.status(401).send({ msg: 'unauth' });
    }
};
exports.isAdminDiscount = isAdminDiscount;
var isAdminAny = function (req, res, next) {
    var _a, _b, _c, _d, _e, _f;
    if (((_c = (_b = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization) === null || _b === void 0 ? void 0 : _b.split(' ')) === null || _c === void 0 ? void 0 : _c[0]) === 'Bearer') {
        try {
            var token = (_f = (_e = (_d = req.headers) === null || _d === void 0 ? void 0 : _d.authorization) === null || _e === void 0 ? void 0 : _e.split(' ')) === null || _f === void 0 ? void 0 : _f[1];
            var payload = (0, jsonwebtoken_1.verify)(token, 'adminToken');
            req.body.payload = payload;
            return next();
        }
        catch (error) {
            res.status(401).send({ msg: 'unauth' });
        }
    }
    else {
        res.status(401).send({ msg: 'unauth' });
    }
};
exports.isAdminAny = isAdminAny;
var isUser = function (req, res, next) {
    var _a, _b, _c, _d, _e, _f;
    if (((_c = (_b = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization) === null || _b === void 0 ? void 0 : _b.split(' ')) === null || _c === void 0 ? void 0 : _c[0]) === 'Bearer') {
        try {
            var token = (_f = (_e = (_d = req.headers) === null || _d === void 0 ? void 0 : _d.authorization) === null || _e === void 0 ? void 0 : _e.split(' ')) === null || _f === void 0 ? void 0 : _f[1];
            var payload = (0, jsonwebtoken_1.verify)(token, 'userToken');
            req.body.payload = payload;
            return next();
        }
        catch (error) {
            res.status(401).send({ msg: 'unauth' });
        }
    }
    else {
        res.status(401).send({ msg: 'unauth' });
    }
};
exports.isUser = isUser;
