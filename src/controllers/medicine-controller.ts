import { Request, Response } from "express";
import Medicine from "../models/medicine";
export const createMedicine = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, description, price, cost } = req.body;
        const newMedicine = await Medicine.create(
            {
                name,
                description,
                price,
                cost
            }
        );
        res.status(201).json(newMedicine);

    } catch (error) {
        res.status(500).json(error);
    }
};

export const getAllMedicines = async (req: Request, res: Response): Promise<void> => {
    try {
        const medicines = await Medicine.findAll();
        res.status(200).json(medicines);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getMedicineById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const medicine = await Medicine.findByPk(id);
        res.status(200).json(medicine);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const updateMedicine = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.query;
        const medicineId = id === undefined || id === null ? 0 : id;
        const { name, description, price, cost } = req.body;
        const medicine = await Medicine.findByPk(parseInt(medicineId.toString()));
        if (medicine) {
            medicine.name = name;
            medicine.description = description;
            medicine.price = price;
            medicine.cost = cost;
            await medicine.save();
            res.status(200).json(medicine);
        } else {
            res.status(404).json({ msg: "Medicine not found" });
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deleteMedicineById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.query;
        const medicineId = id === undefined || id === null ? 0 : id;
        const medicine = await Medicine.findByPk(parseInt(medicineId.toString()));
        if (medicine) {
            await medicine.destroy();
            res.status(200).json({ msg: "Medicine deleted" });
        } else {
            res.status(404).json({ msg: "Medicine not found" });
        }
    } catch (error) {
        res.status(500).json(error);
    }
};
