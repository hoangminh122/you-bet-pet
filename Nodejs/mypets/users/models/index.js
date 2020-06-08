
// db sequence
const Sequelize = require('sequelize')
const user =require('./Users')
const student = require('./Student')
const classStudent = require("./ClassStudent")
const sequelize = require('../config/Database')

const models = {
    User: sequelize.import('./Users'),
    Student: sequelize.import('./Student'),
    Class: sequelize.import('./ClassStudent')
}

Object.keys(models).forEach(key => {
    if('associate' in models[key]){
        models[key].associate(models);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;