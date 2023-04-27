import  Sequelize  from "sequelize"

export const sequelize = new Sequelize('farmacia_sm','postgres','toor2022',{
host: 'localhost',
dialect: 'postgres',
})

