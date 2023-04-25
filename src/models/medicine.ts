import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database";


class Medicine extends Model {
    public id!: number;
    public name!: string;
    public description!: string;
    public price!: number;
    public cost!: number;
    public supplier_id!: number;
}

Medicine.init(
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
        description: {
            type: new DataTypes.STRING(128),
            allowNull: true
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        cost: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        supplier_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    },
    {
        tableName: "medicines",
        sequelize: sequelize,
        timestamps: true
    }
);

export default Medicine;
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