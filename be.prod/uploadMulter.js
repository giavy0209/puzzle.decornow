"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var diskStorage = multer_1.default.diskStorage({
    destination: function (req, file, callback) {
        var isHavePublic = fs_1.default.existsSync('public');
        if (!isHavePublic)
            fs_1.default.mkdirSync('public');
        var isHaveUpload = fs_1.default.existsSync('public/upload');
        if (!isHaveUpload)
            fs_1.default.mkdirSync('public/upload');
        callback(null, 'public/upload');
    },
    filename: function (req, file, callback) {
        var ext = path_1.default.extname(file.originalname);
        callback(null, Date.now() + (ext || '.jpg'));
    }
});
var upload = (0, multer_1.default)({ storage: diskStorage }).single('file');
exports.default = upload;
