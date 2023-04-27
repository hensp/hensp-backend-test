import { DataTypes } from "sequelize" 
import { sequelize } from "../database/database.js"

export const Provider = sequelize.define('providers', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(100), // Definimos el tipo de dato de la columna name como string con una longitud de 100 caracteres
        allowNull: false,
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    phone: {
        type: DataTypes.TEXT,
        allowNull: false, // No permite valores nulos
    },
    status: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: true,
        validate: {
            isIn: [[true, false]]
        }
    },

})