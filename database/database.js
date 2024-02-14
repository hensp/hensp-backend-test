const { Sequelize } = require('sequelize');

 export const sequelize = new Sequelize('farmacia', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres'
  });