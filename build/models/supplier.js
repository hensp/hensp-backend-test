"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
class Supplier extends sequelize_1.Model {
}
Supplier.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false
    },
    address: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: true
    },
    phone: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: true
    },
    email: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: true
    }
}, {
    tableName: "suppliers",
    sequelize: database_1.sequelize,
    timestamps: true
});
exports.default = Supplier;
/*
// mysql create statement
    CREATE TABLE `suppliers` (
        `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
        `name` varchar(128) NOT NULL,
        `address` varchar(128) DEFAULT NULL,
        `phone` varchar(128) DEFAULT NULL,
        `email` varchar(128) DEFAULT NULL,
        `createdAt` datetime NOT NULL,
        `updatedAt` datetime NOT NULL,
        PRIMARY KEY (`id`)
    );
*/ 
//# sourceMappingURL=supplier.js.map