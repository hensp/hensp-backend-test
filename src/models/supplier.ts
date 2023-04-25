import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database";

class Supplier extends Model {
    public id!: number;
    public name!: string;
    public address!: string;
    public phone!: string;
    public email!: string;

}

Supplier.init(
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
        address: {
            type: new DataTypes.STRING(128),
            allowNull: true
        },
        phone: {
            type: new DataTypes.STRING(128),
            allowNull: true
        },
        email: {
            type: new DataTypes.STRING(128),
            allowNull: true
        }
    },
    {
        tableName: "suppliers",
        sequelize: sequelize,
        timestamps: true
    }
);

export default Supplier;

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