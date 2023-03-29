// File: src/models/isccModel.js

const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const ISCC = sequelize.define('iscc_import', {
  cert_id: {
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  cert_holder: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  scope: {
    type: DataTypes.STRING,
  },
  raw_material: {
    type: DataTypes.STRING,
  },
  addons: {
    type: DataTypes.STRING,
  },
  products: {
    type: DataTypes.STRING,
  },
  valid_from: {
    type: DataTypes.DATEONLY,
  },
  valid_until: {
    type: DataTypes.DATEONLY,
  },
  suspended_from: {
    type: DataTypes.DATEONLY,
  },
  suspended_until: {
    type: DataTypes.DATEONLY,
  },
  issuing_cb: {
    type: DataTypes.STRING,
  },
  location: {
    type: DataTypes.STRING,
  },
  cert_url: {
    type: DataTypes.STRING,
  },
  audit_url: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
  },
});

module.exports = ISCC;
