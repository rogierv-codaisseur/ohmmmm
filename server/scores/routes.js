const { Router } = require('express');

const Score = require('./model');
const router = new Router();

router.get('/scores', (req, res, next) => {
  Score.findAll({ include: [{ all: true, nested: true }] }).then(score => {
    return res.status(200).send({ score });
  });
});

router.get('/playerTop5', (req, res, next) => {
  const playerId = req.query.playerId;
  const gameTypeId = req.query.gameTypeId;

  Score.findAll({
    include: [{ all: true, nested: true }],
    where: { playerId: `${playerId}`, gameTypeId: `${gameTypeId}` },
    order: [['score', 'DESC']],
    limit: 5
  }).then(score => {
    return res.status(200).send({ score });
  });
});

router.get('/scores/:id', (req, res, next) => {
  const id = req.params.id;

  Score.findByPk(id, { include: [{ all: true, nested: true }] })
    .then(score => {
      if (!score)
        return res.status(404).send({
          message: 'Score does not exist'
        });
      return res.status(200).send(score);
    })
    .catch(error => next(error));
});

router.post('/scores', (req, res, next) => {
  Score.create({ ...req.body })
    .then(score => {
      return res.status(201).send(score);
    })
    .catch(error => next(error));
});

module.exports = router;
