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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Order_1 = __importDefault(require("models/Order"));
var GHN_1 = require("services/GHN");
var models_1 = require("../models");
var mongoose_1 = require("mongoose");
var services_1 = require("services");
var sapo_1 = require("services/sapo");
var order = {
    get: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, skip, limit, status, sort, item, query, _sort, result;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.query, skip = _a.skip, limit = _a.limit, status = _a.status, sort = _a.sort, item = _a.item;
                    query = {};
                    if (status && status !== '-1') {
                        query.status = Number(status);
                    }
                    if (item && (0, mongoose_1.isValidObjectId)(item)) {
                        query["items._id"] = item;
                    }
                    _sort = { createdAt: -1 };
                    if (sort === '2') {
                        _sort.createdAt = 1;
                    }
                    if (sort === '3') {
                        delete _sort.createdAt;
                        _sort.sum = -1;
                    }
                    if (sort === '4') {
                        delete _sort.createdAt;
                        _sort.sum = 1;
                    }
                    return [4 /*yield*/, (0, services_1.findAndPagin)({
                            model: Order_1.default,
                            skip: Number(skip),
                            limit: Number(limit),
                            query: query,
                            sort: _sort,
                        })];
                case 1:
                    result = _b.sent();
                    res.send(__assign({ status: 1 }, result));
                    return [2 /*return*/];
            }
        });
    }); },
    post: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, payload, address, province, district, ward, name, phone, items, provinces, findProvince, districts, findDistricts, wards, findWard, shippingFee, orderPrice, index, item, findProduct, order_1, data, error_1;
        var _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _a = req.body, payload = _a.payload, address = _a.address, province = _a.province, district = _a.district, ward = _a.ward, name = _a.name, phone = _a.phone, items = _a.items;
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 15, , 16]);
                    return [4 /*yield*/, (0, GHN_1.fetchProvinces)()];
                case 2:
                    provinces = (_e.sent()).data;
                    findProvince = (_b = provinces.find(function (o) { return o.ProvinceID === province; })) === null || _b === void 0 ? void 0 : _b.ProvinceName;
                    if (!findProvince)
                        return [2 /*return*/, res.send({ status: 100 })];
                    return [4 /*yield*/, (0, GHN_1.fetchDistricts)(province)];
                case 3:
                    districts = (_e.sent()).data;
                    findDistricts = (_c = districts.find(function (o) { return o.DistrictID === district; })) === null || _c === void 0 ? void 0 : _c.DistrictName;
                    if (!findDistricts)
                        return [2 /*return*/, res.send({ status: 100 })];
                    return [4 /*yield*/, (0, GHN_1.fetchWards)(district)];
                case 4:
                    wards = (_e.sent()).data;
                    return [4 /*yield*/, ((_d = wards.find(function (o) { return o.WardCode === ward; })) === null || _d === void 0 ? void 0 : _d.WardName)];
                case 5:
                    findWard = _e.sent();
                    if (!findWard)
                        return [2 /*return*/, res.send({ status: 100 })];
                    return [4 /*yield*/, (0, GHN_1.calculateFee)(district, ward)];
                case 6:
                    shippingFee = (_e.sent()).data.total;
                    orderPrice = 0;
                    index = 0;
                    _e.label = 7;
                case 7:
                    if (!(index < items.length)) return [3 /*break*/, 12];
                    item = items[index];
                    if (!(0, mongoose_1.isValidObjectId)(item.product)) return [3 /*break*/, 9];
                    return [4 /*yield*/, models_1.Products.findById(item.product)];
                case 8:
                    findProduct = _e.sent();
                    if (!findProduct)
                        return [2 /*return*/, res.send({ status: 100 })];
                    item.price = findProduct.price;
                    item.name = findProduct.name;
                    item.thumbnail = findProduct.thumbnail;
                    return [3 /*break*/, 10];
                case 9:
                    delete item.product;
                    item.price = 500000;
                    item.name = 'Tranh ghép';
                    _e.label = 10;
                case 10:
                    item.sum = item.price * item.quantity;
                    orderPrice += item.sum;
                    _e.label = 11;
                case 11:
                    index++;
                    return [3 /*break*/, 7];
                case 12: return [4 /*yield*/, Order_1.default.create({
                        user: (payload === null || payload === void 0 ? void 0 : payload._id) || null,
                        province: findProvince,
                        district: findDistricts,
                        ward: findWard,
                        address: address,
                        name: name,
                        phone: phone,
                        orderPrice: orderPrice,
                        shippingFee: shippingFee,
                        sum: orderPrice + shippingFee,
                        items: items,
                    })];
                case 13:
                    order_1 = _e.sent();
                    return [4 /*yield*/, (0, sapo_1.postOrder)(order_1)];
                case 14:
                    data = _e.sent();
                    console.log(data);
                    console.log(123);
                    res.send({ status: 1 });
                    return [3 /*break*/, 16];
                case 15:
                    error_1 = _e.sent();
                    res.send(error_1);
                    return [3 /*break*/, 16];
                case 16: return [2 /*return*/];
            }
        });
    }); },
    patch: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var status, _id;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    status = req.body.status;
                    _id = req.query._id;
                    if (!(0, mongoose_1.isValidObjectId)(_id))
                        return [2 /*return*/];
                    return [4 /*yield*/, Order_1.default.findByIdAndUpdate(_id, { status: status })];
                case 1:
                    _a.sent();
                    res.send({ status: 1 });
                    return [2 /*return*/];
            }
        });
    }); }
};
exports.default = order;
