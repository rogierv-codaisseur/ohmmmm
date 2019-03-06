const Sequelize = require('sequelize');

const sequelize = require('../db');
const Player = require('../players/model');
const GameType = require('../gameTypes/model');

const Score = sequelize.define(
  'scores',
  {
    playerId: {
      type: Sequelize.INTEGER,
      field: 'player_id',
      allowNull: false
    },
    gameTypeId: {
      type: Sequelize.INTEGER,
      field: 'game_type_id',
      allowNull: false
    },
    score: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },
  {
    timestamps: true,
    tableName: 'scores'
  }
);

Score.belongsTo(Player);
Score.belongsTo(GameType);

module.exports = Score;
