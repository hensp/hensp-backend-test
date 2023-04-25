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
exports.deleteSupplierById = exports.updateSupplier = exports.getSupplierById = exports.getAllSuppliers = exports.createSupplier = void 0;
const supplier_1 = __importDefault(require("../models/supplier"));
const createSupplier = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, address, phone, email } = req.body;
        const newSupplier = yield supplier_1.default.create({
            name,
            address,
            phone,
            email
        });
        res.status(201).json(newSupplier);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.createSupplier = createSupplier;
const getAllSuppliers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const suppliers = yield supplier_1.default.findAll();
        res.status(200).json(suppliers);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getAllSuppliers = getAllSuppliers;
const getSupplierById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const supplier = yield supplier_1.default.findByPk(id);
        res.status(200).json(supplier);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getSupplierById = getSupplierById;
const updateSupplier = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, address, phone, email } = req.body;
        const supplier = yield supplier_1.default.findByPk(id);
        if (supplier) {
            supplier.name = name;
            supplier.address = address;
            supplier.phone = phone;
            supplier.email = email;
            yield supplier.save();
            res.status(200).json(supplier);
        }
        else {
            res.status(404).json({ msg: "Supplier not found" });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.updateSupplier = updateSupplier;
const deleteSupplierById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const supplier = yield supplier_1.default.findByPk(id);
        if (supplier) {
            yield supplier.destroy();
            res.status(200).json({ msg: "Supplier deleted" });
        }
        else {
            res.status(404).json({ msg: "Supplier not found" });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.deleteSupplierById = deleteSupplierById;
//# sourceMappingURL=supplier-controller.js.map