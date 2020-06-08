
// db sequence
const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();
const sequelize = new Sequelize(process.env.DATABASE,process.env.USERNAMEDB,process.env.PASSWORD,{
    host: process.env.HOST,
    dialect: 'postgres',
    // operatorsAliases:false,
    // pool:{
    //     max: 5,
    //     min: 0,
    //     acquire: 30000,
    //     idle: 10000
    // }
})

module.exports = sequelize;