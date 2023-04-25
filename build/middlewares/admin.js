"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = void 0;
const user_1 = __importDefault(require("../models/user"));
const isAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id } = req.query;
    const userId = user_id === undefined || user_id === null ? 0 : user_id;
    const user = yield user_1.default.findByPk(parseInt(userId.toString()));
    if (user && user.role === 'admin') {
        next();
    }
    else {
        res.status(401).json({ msg: "Unauthorized", user_id });
    }
});
exports.isAdmin = isAdmin;
//# sourceMappingURL=admin.js.map