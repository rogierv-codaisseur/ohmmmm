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
          return res.status(404).send({ message: 'Player with that name does not exists' });
        }
        if (bcrypt.compareSync(password, entity.password)) {
          res.send({
            token: toJWT({ userId: entity.id }),
            name
          });
        } else {
          res.status(401).send({ message: 'Password was incorrect' });
        }
      })
      .catch(error => next(error));
  } else {
    res.status(401).send({
      message: 'Please supply a valid name and password'
    });
  }
});

module.exports = router;
