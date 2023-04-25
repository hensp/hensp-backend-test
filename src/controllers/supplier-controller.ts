import { Request, Response } from "express";
import Supplier from "../models/supplier";

export const createSupplier = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, address, phone, email } = req.body;
        const newSupplier = await Supplier.create(
            {
                name,
                address,
                phone,
                email
            }
        );
        res.status(201).json(newSupplier);

    } catch (error) {
        res.status(500).json(error);
    }
};

export const getAllSuppliers = async (req: Request, res: Response): Promise<void> => {
    try {
        const suppliers = await Supplier.findAll();
        res.status(200).json(suppliers);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getSupplierById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const supplier = await Supplier.findByPk(id);
        res.status(200).json(supplier);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const updateSupplier = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { name, address, phone, email } = req.body;
        const supplier = await Supplier.findByPk(id);
        if (supplier) {
            supplier.name = name;
            supplier.address = address;
            supplier.phone = phone;
            supplier.email = email;
            await supplier.save();
            res.status(200).json(supplier);
        } else {
            res.status(404).json({ msg: "Supplier not found" });
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deleteSupplierById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const supplier = await Supplier.findByPk(id);
        if (supplier) {
            await supplier.destroy();
            res.status(200).json({ msg: "Supplier deleted" });
        } else {
            res.status(404).json({ msg: "Supplier not found" });
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

