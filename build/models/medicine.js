"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
class Medicine extends sequelize_1.Model {
}
Medicine.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false
    },
    description: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: true
    },
    price: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    cost: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    supplier_id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    }
}, {
    tableName: "medicines",
    sequelize: database_1.sequelize,
    timestamps: true
});
exports.default = Medicine;
/*
// mysql create statement
    CREATE TABLE `medicines` (
        `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
        `name` varchar(128) NOT NULL,
        `description` varchar(128) DEFAULT NULL,
        `price` float NOT NULL,
        `cost` float NOT NULL,
        `supplier_id` int(10) unsigned NOT NULL,
        `createdAt` datetime NOT NULL,
        `updatedAt` datetime NOT NULL,
        PRIMARY KEY (`id`),
        KEY `supplier_id` (`supplier_id`),
        CONSTRAINT `medicines_ibfk_1` FOREIGN KEY (`supplier_id`) REFERENCES `suppliers` (`id`)
    );
*/ 
//# sourceMappingURL=medicine.js.map