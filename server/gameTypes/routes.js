const { Router } = require('express');

const GameType = require('./model');

const router = new Router();

router.get('/game-types', (req, res, next) => {
  GameType.findAll().then(gameType => {
    return res.status(200).send({ gameType });
  });
});

module.exports = router;
