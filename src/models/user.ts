import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database";

class User extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;
    public role!: string;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: new DataTypes.STRING(128),
            allowNull: false
        },
        email: {
            type: new DataTypes.STRING(128),
            allowNull: false
        },
        password: {
            type: new DataTypes.STRING(128),
            allowNull: false
        },
        role: {
            type: new DataTypes.STRING(128),
            allowNull: false
        }
    },
    {
        tableName: "users",
        sequelize: sequelize,
        timestamps: true
    }
);

export default User;

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
