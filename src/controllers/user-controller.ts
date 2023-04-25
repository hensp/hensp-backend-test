import { Request, Response } from 'express';
import User from '../models/user';

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password, role } = req.body;
        const newUser = await User.create(
            {
                name,
                email,
                password,
                role
            }
        );
        res.status(201).json(newUser);

    } catch (error) {
        res.status(500).json(error);
    }
};

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
};


export const updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.query;
        const userId = id === undefined || id === null ? 0 : id;
        const { name, email, password, role } = req.body;
        const user = await User.findByPk(parseInt(userId.toString()));
        if (user) {
            user.name = name;
            user.email = email;
            user.password = password;
            user.role = role;
            await user.save();
            res.status(200).json(user);
        } else {
            res.status(404).json({ msg: "User not found" });
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deleteUserById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.query;
        const userId = id === undefined || id === null ? 0 : id;
        const user = await User.findByPk(parseInt(userId.toString()));
        if (user) {
            await user.destroy();
            res.status(200).json({ msg: "User deleted" });
        } else {
            res.status(404).json({ msg: "User not found" });
        }
    } catch (error) {
        res.status(500).json(error);
    }
};







