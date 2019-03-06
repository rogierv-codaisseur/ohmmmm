const Sequelize = require('sequelize');
const sequelize = require('../db');

const GameType = sequelize.define(
  'gameTypes',
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false,
    tableName: 'games-types'
  }
);

module.exports = GameType;
