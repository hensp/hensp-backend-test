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
exports.deleteMedicineById = exports.updateMedicine = exports.getMedicineById = exports.getAllMedicines = exports.createMedicine = void 0;
const medicine_1 = __importDefault(require("../models/medicine"));
const createMedicine = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, price, cost } = req.body;
        const newMedicine = yield medicine_1.default.create({
            name,
            description,
            price,
            cost
        });
        res.status(201).json(newMedicine);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.createMedicine = createMedicine;
const getAllMedicines = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const medicines = yield medicine_1.default.findAll();
        res.status(200).json(medicines);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getAllMedicines = getAllMedicines;
const getMedicineById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const medicine = yield medicine_1.default.findByPk(id);
        res.status(200).json(medicine);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getMedicineById = getMedicineById;
const updateMedicine = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, description, price, cost } = req.body;
        const medicine = yield medicine_1.default.findByPk(id);
        if (medicine) {
            medicine.name = name;
            medicine.description = description;
            medicine.price = price;
            medicine.cost = cost;
            yield medicine.save();
            res.status(200).json(medicine);
        }
        else {
            res.status(404).json({ msg: "Medicine not found" });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.updateMedicine = updateMedicine;
const deleteMedicineById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.query;
        const medicineId = id === undefined || id === null ? 0 : id;
        const medicine = yield medicine_1.default.findByPk(parseInt(medicineId.toString()));
        if (medicine) {
            yield medicine.destroy();
            res.status(200).json({ msg: "Medicine deleted" });
        }
        else {
            res.status(404).json({ msg: "Medicine not found" });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.deleteMedicineById = deleteMedicineById;
//# sourceMappingURL=medicine-controller.js.map