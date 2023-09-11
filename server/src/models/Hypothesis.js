const {  DataTypes } = require('sequelize');
const sequelize = require('../database/conection')

const Hypothesis = sequelize.define('Hypothesis', {
    hypothesis: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    status: {
        type:DataTypes.STRING
    }
  });

  module.exports = Hypothesis;