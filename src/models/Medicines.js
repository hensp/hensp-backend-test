import { DataTypes } from "sequelize" // Importamos los DataTypes desde sequelize para definir los tipos de datos de los modelos
import { sequelize } from "../database/database.js" // Importamos la conexión a la base de datos
import { Provider } from "./Providers.js" // Importamos el modelo de la tabla providers


export const Medicine = sequelize.define('medicines', { // Definimos el modelo de la tabla medicines
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false, // No permite valores nulos
    },

    cost: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    expiration_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    category: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    presentation: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    status: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: true,
        validate: {
            isIn: [[true, false]] // Solo acepta valores booleanos
        }
    },
})

// Relación uno a muchos con la tabla providers
Medicine.hasMany(Provider, 
    { 
        foreignKey: 'medicineId', 
        targeId: 'id' 
    }) // Relación uno a muchos con la tabla medicines

Provider.belongsTo(Medicine, {
    foreignKey: 'medicineId',
    targeId: 'id' 
})