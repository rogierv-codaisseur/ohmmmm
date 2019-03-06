const { Router } = require('express');

const Score = require('./model');
const Player = require('../players/model');
const GameType = require('../gameTypes/model');
const router = new Router();

router.get('/scores', (req, res, next) => {
  Score.findAll({ include: [{ all: true, nested: true }] }).then(score => {
    return res.status(200).send({ score });
  });
});

module.exports = router;
