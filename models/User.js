const { DataTypes } = require("sequelize");
const db = require("../db.js");

const model = db.define("User", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  balance: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  gamePlayed: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  banCount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  athleticism: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  height: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  bballIq: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  shooting: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  effort: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = model;
