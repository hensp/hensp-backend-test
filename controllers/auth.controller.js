import {Users} from '../models/user.model';
import jwt from 'jsonwebtoken';
import config from '../src/config';
import bcrypt from 'bcrypt'

export const signUp = async (req, res) => {
    const {username, password, role} = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await Users.create({
            username,
            password: hashedPassword,
            role
        });

        const savedUser = await newUser.save();

        const token = jwt.sign({id: savedUser.id}, config.SECRET, {
            expiresIn: 86400
        })

        res.status(201).json(token)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await Users.findOne({ where: { username } });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({token: null, message: 'Invalid password' });
        }

        const token = jwt.sign({id: user.id}, config.SECRET, {
            expiresIn: 86400
        })
        res.status(200).json({token});
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}