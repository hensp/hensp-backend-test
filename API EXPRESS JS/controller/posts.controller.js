const pool = require('../database/index');
const jwt = require('jsonwebtoken');


const JWT_SECRET = 'hola_buenas_tardes';
const payload = {
    check:  true
};

const token = jwt.sign(payload, JWT_SECRET, {   expiresIn: 1444440  });


const postsController = {


    sendToken : (req, res) => {
        res.json({token});

    },

    authenticateJWT: (req, res, next) => {
        const token = req.headers.authorization;
        if (token) {
            // Extract the token from the header
            const token = req.headers.authorization.split(' ')[1];
            // Verify the token
            jwt.verify(token, JWT_SECRET, (err, decoded) => {
                if (err) {
                    return res.status(403).json({ message: 'Failed to authenticate token.' });
                }
                req.decoded = decoded;
                next();
            });
        } else {
            return res.status(401).json({ message: 'No token provided.' });
        }
    },

    getAll: async (req, res) => {
        try{
            const [rows, fields] = await pool.query("select * from medicamento")
            res.json({
                data : rows
             });
        } catch (error) {
            console.error(error);
        }
    },

    getById: async (req, res) => {
        try{
            const {id} = req.params;
            const [rows, fields] = await pool.query("select * from medicamento where id = ?", [id])
            res.json({
                data : rows
             });
        } catch (error) {
            console.error(error);
        }
    },

    create: async (req, res) => {
        try{
            const {nombre_medicamento} = req.body;
            const sql = "insert into medicamento (nombre_medicamento) values (?)";
            const [rows, fields] = await pool.query(sql, [nombre_medicamento])
            res.json({
                message : "Medicamento creado",
                data : rows
             });
        } catch (error) {
            console.error(error);
        }
    },

    update: async (req, res) => {
        try{
            const {nombre_medicamento} = req.body
            const {id} = req.params;
            const sql = "update medicamento set nombre_medicamento = ? where id = ?";
            const [rows, fields] = await pool.query(sql, [nombre_medicamento, id])
            res.json({
                message : "Medicamento actualizado",
                data : rows
             });
        } catch (error) {
            console.error(error);
        }
    },

    delete: async (req, res) => {
        try{
            const {id} = req.params;
            const sql = "delete from medicamento where id = ?";
            const [rows, fields] = await pool.query(sql, [id])
            res.json({
                message : "Medicamento eliminado",
                data : rows
             });
        } catch (error) {
            console.error(error);
        }
    }



}

module.exports = postsController;