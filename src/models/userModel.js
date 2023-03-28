// File: src/models/userModel.js

const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const ulid = require('ulid');

const User = sequelize.define('users', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true,
    allowNull: false,
    defaultValue: () => ulid.ulid(),
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
