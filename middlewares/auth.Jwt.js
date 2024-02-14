import jwt from 'jsonwebtoken';
import config from '../src/config';
import {Users} from '../models/user.model';

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"]
    
        if(!token) return res.status(403).json({message: "No token provided"})
    
        const decoded = jwt.verify(token, config.SECRET)
    
        req.id = decoded.id
    
        const user = await Users.findByPk(req.id, {password: 0})
        if (!user) return res.status(404).json({message: 'No user found'})
    
        next()
    } catch (error) {
        return res.status(401).json({message: 'Unauthorized'})
    }

}

export const isAdmin = async (req, res, next) => {
    try {
        const user = await Users.findByPk(req.id);
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        if (user.role !== 'admin') {
            return res.status(403).json({ message: "Acceso denegado" });
        }
        next();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}