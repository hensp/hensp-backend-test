"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false
    },
    email: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false
    },
    password: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false
    },
    role: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false
    }
}, {
    tableName: "users",
    sequelize: database_1.sequelize,
    timestamps: true
});
exports.default = User;
/*
// mysql create statement
    CREATE TABLE `users` (
        `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
        `name` varchar(128) NOT NULL,
        `email` varchar(128) NOT NULL,
        `password` varchar(128) NOT NULL,
        `role` varchar(128) NOT NULL,
        `createdAt` datetime NOT NULL,
        `updatedAt` datetime NOT NULL,
        PRIMARY KEY (`id`)
    );
*/
//# sourceMappingURL=user.js.map