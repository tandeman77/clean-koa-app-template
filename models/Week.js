const { DataTypes } = require("sequelize");
const db = require("../db.js");

const model = db.define("Week", {
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    unique: true
  },
  income: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  expense: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  disabled: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  freeWeek: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

module.exports = model;
