"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmail = exports.isObjectId = exports.encript = exports.isExist = exports.isUnique = exports.isInRange = exports.isLength = void 0;
var mongoose_1 = require("mongoose");
var bcrypt_1 = require("bcrypt");
var validator = function (requestField, key) {
    var validateFunction = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        validateFunction[_i - 2] = arguments[_i];
    }
    return function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var fields, keys, index, field, jndex, _key, data, kndex, fn, _a, result, msg, mapedData;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        fields = requestField.split(' ');
                        keys = key.split(' ');
                        index = 0;
                        _b.label = 1;
                    case 1:
                        if (!(index < fields.length)) return [3 /*break*/, 8];
                        field = fields[index];
                        jndex = 0;
                        _b.label = 2;
                    case 2:
                        if (!(jndex < keys.length)) return [3 /*break*/, 7];
                        _key = keys[jndex];
                        data = req[field][_key];
                        kndex = 0;
                        _b.label = 3;
                    case 3:
                        if (!(kndex < validateFunction.length)) return [3 /*break*/, 6];
                        fn = validateFunction[kndex];
                        return [4 /*yield*/, fn(data)];
                    case 4:
                        _a = _b.sent(), result = _a.result, msg = _a.msg, mapedData = _a.mapedData;
                        if (mapedData)
                            req[field][_key] = mapedData;
                        if (!result) {
                            return [2 /*return*/, res.status(400).send({
                                    msg: msg,
                                    field: field,
                                    key: _key
                                })];
                        }
                        _b.label = 5;
                    case 5:
                        kndex++;
                        return [3 /*break*/, 3];
                    case 6:
                        jndex++;
                        return [3 /*break*/, 2];
                    case 7:
                        index++;
                        return [3 /*break*/, 1];
                    case 8:
                        next();
                        return [2 /*return*/];
                }
            });
        });
    };
};
var notValid = function (msg) {
    return { result: false, msg: msg };
};
var valid = function (msg) {
    return { result: true, msg: msg };
};
var isLength = function (options) {
    var notValidResult = notValid('wrong length');
    var validResult = valid('');
    return function (data) {
        var _a = options.min, min = _a === void 0 ? 0 : _a, _b = options.max, max = _b === void 0 ? 99999 : _b, _c = options.trim, trim = _c === void 0 ? false : _c;
        if (typeof data !== 'string')
            return notValidResult;
        if (trim)
            data = data.trim();
        if (data.length < min || data.length > max)
            return notValidResult;
        return validResult;
    };
};
exports.isLength = isLength;
var isInRange = function (options) {
    var notValidResult = notValid('wrong length');
    var validResult = valid('');
    return function (data) {
        var _a = options.min, min = _a === void 0 ? 0 : _a, _b = options.max, max = _b === void 0 ? Infinity : _b;
        if (isNaN(data))
            return notValidResult;
        if (Number(data) < min || Number(data) > max)
            return notValidResult;
        return __assign(__assign({}, validResult), { mapedData: Number(data) });
    };
};
exports.isInRange = isInRange;
var isUnique = function (model, field) {
    var notValidResult = notValid('existed');
    var validResult = valid('');
    return function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var exist;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, model.exists((_a = {}, _a[field] = data, _a))];
                    case 1:
                        exist = _b.sent();
                        if (exist)
                            return [2 /*return*/, notValidResult];
                        return [2 /*return*/, validResult];
                }
            });
        });
    };
};
exports.isUnique = isUnique;
var isExist = function (model, field) {
    var notValidResult = notValid('not existed');
    var validResult = valid('');
    return function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var findData;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, model.findOne((_a = {}, _a[field] = data, _a))];
                    case 1:
                        findData = _b.sent();
                        if (!findData)
                            return [2 /*return*/, notValidResult];
                        return [2 /*return*/, __assign(__assign({}, validResult), { mapedData: findData })];
                }
            });
        });
    };
};
exports.isExist = isExist;
var encript = function () {
    var validResult = valid('');
    return function (data) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, __assign(__assign({}, validResult), { mapedData: (0, bcrypt_1.hashSync)(data, 5) })];
        });
    }); };
};
exports.encript = encript;
var isObjectId = function () {
    var notValidResult = notValid('not valid query');
    var validResult = valid('');
    return function (data) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!(0, mongoose_1.isValidObjectId)(data))
                return [2 /*return*/, notValidResult];
            return [2 /*return*/, validResult];
        });
    }); };
};
exports.isObjectId = isObjectId;
var isEmail = function () {
    var notValidResult = notValid('not valid email');
    var validResult = valid('');
    return function (data) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data))
                return [2 /*return*/, validResult];
            return [2 /*return*/, notValidResult];
        });
    }); };
};
exports.isEmail = isEmail;
exports.default = validator;
