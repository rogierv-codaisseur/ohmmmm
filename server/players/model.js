const Sequelize = require('sequelize');
const sequelize = require('../db');

const Player = sequelize.define(
  'players',
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    avatar: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false,
    tableName: 'players'
  }
);

module.exports = Player;
