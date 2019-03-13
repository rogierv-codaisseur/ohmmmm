const { Router } = require('express');
const bcrypt = require('bcrypt');

const Player = require('../players/model');
const { toJWT } = require('./jwt');

const router = new Router();

router.post('/login', (req, res, next) => {
  const { name, password } = req.body;
  if (name && password) {
    Player.findOne({ where: { name } })
      .then(entity => {
        if (!entity) {
          return res.status(404).send({ message: "Are you sure that's your username?" });
        }
        if (bcrypt.compareSync(password, entity.password)) {
          res.send({
            token: toJWT({ userId: entity.id }),
            name,
            userId: entity.id
          });
        } else {
          res.status(401).send({ message: 'Try to remember your shape combo!' });
        }
      })
      .catch(error => next(error));
  } else {
    res.status(401).send({
      message: 'Hi there! Type in your name and shape combo!'
    });
  }
});

module.exports = router;
