const {  DataTypes } = require('sequelize');
const sequelize = require('../database/conection')
const Report = sequelize.define('Report', {
  reportNumber: {
    type: DataTypes.INTEGER,
    allowNull: false, // Example: You can set this to true if this field is optional
  },
  day: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hijriDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gregorianDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  time: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reportCategory: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  neighborhood: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nationality: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  workplace: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  recipient: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  injuries: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  simple: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  moderate: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  severe: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  deaths: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  damages: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  responsible: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  parties: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  accidentCause: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mainCauseOfAccident: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  supCauseOfAccident: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  responseTime: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reportDetails: {
    type: DataTypes.TEXT, // Use TEXT for longer descriptions
    allowNull: false,
  },
});

module.exports = Report;
