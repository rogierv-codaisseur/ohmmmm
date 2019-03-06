const { Router } = require('express');

const Player = require('./model');

const router = new Router();

router.get('/players', (req, res, next) => {
  Player.findAll().then(player => {
    return res.status(200).send({ player });
  });
});

module.exports = router;
