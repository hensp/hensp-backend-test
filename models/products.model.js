import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";

export const Products = sequelize.define('products', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    medicamento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    proveedor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    costo: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    precio_de_venta: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
})