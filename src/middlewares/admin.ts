import { Request, Response } from "express";
import User from "../models/user";
export const isAdmin = async (req: Request, res: Response, next: any) => {

    const { user_id } = req.query;
    const userId = user_id === undefined || user_id === null ? 0 : user_id;
    const user = await User.findByPk(parseInt(userId.toString()));
    if (user && user.role === 'admin') {
        next();
    } else {
        res.status(401).json({ msg: "Unauthorized", user_id });
    }

};