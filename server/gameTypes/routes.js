const { Router } = require('express');

const GameType = require('./model');

const router = new Router();

router.get('/game-types', (req, res, next) => {
  GameType.findAll().then(gameType => {
    return res.status(200).send({ gameType });
  });
});

router.get('/game-types/:id', (req, res, next) => {
  const id = req.params.id;

  GameType.findByPk(id)
    .then(gameType => {
      if (!gameType)
        return res.status(404).send({
          message: 'Game Type does not exist'
        });
      return res.status(200).send(gameType);
    })
    .catch(error => next(error));
});

router.post('/game-types', (req, res, next) => {
  GameType.create({ ...req.body })
    .then(gameType => {
      return res.status(201).send(gameType);
    })
    .catch(error => next(error));
});

module.exports = router;
