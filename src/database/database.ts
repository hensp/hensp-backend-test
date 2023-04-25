import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    'hensp',
    'root',
    '',
    {
        dialect: 'mysql',
        host: 'localhost',
        port: 3306
    }
);