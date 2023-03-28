const { Sequelize } = require('sequelize');
const { dbName, dbUsername, dbPassword, dbHost } = require('./config');

const sequelize = new Sequelize(dbName, dbUsername, dbPassword, {
  host: dbHost,
  dialect: 'mysql',
  logging: false,
});

module.exports = sequelize;
