const Sequelize = require('sequelize');
const sequelize = require('../db');

const Player = sequelize.define(
  'players',
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    avatar: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false,
    tableName: 'players'
  }
);

module.exports = Player;
