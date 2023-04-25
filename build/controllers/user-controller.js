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
exports.deleteUserById = exports.updateUser = exports.getUserById = exports.getAllUsers = exports.createUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password, role } = req.body;
        const newUser = yield user_1.default.create({
            name,
            email,
            password,
            role
        });
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.createUser = createUser;
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_1.default.findAll();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getAllUsers = getAllUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield user_1.default.findByPk(id);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getUserById = getUserById;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, email, password, role } = req.body;
        const user = yield user_1.default.findByPk(id);
        if (user) {
            user.name = name;
            user.email = email;
            user.password = password;
            user.role = role;
            yield user.save();
            res.status(200).json(user);
        }
        else {
            res.status(404).json({ msg: "User not found" });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.updateUser = updateUser;
const deleteUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield user_1.default.findByPk(id);
        if (user) {
            yield user.destroy();
            res.status(200).json({ msg: "User deleted" });
        }
        else {
            res.status(404).json({ msg: "User not found" });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.deleteUserById = deleteUserById;
//# sourceMappingURL=user-controller.js.map