const { Router } = require('express');
const bcrypt = require('bcrypt');

const Player = require('./model');

const router = new Router();

router.get('/players', (req, res, next) => {
  Player.findAll().then(player => {
    return res.status(200).send({ player });
  });
});

router.get('/players/:id', (req, res, next) => {
  const id = req.params.id;

  Player.findByPk(id)
    .then(player => {
      if (!player)
        return res.status(404).send({
          message: 'Player does not exist'
        });
      return res.status(200).send(player);
    })
    .catch(error => next(error));
});

router.post('/players', (req, res, next) => {
  const { name, password, avatar } = req.body;
  if(name === '' && avatar === '' && password === '000') {
    res.status(401).send({ message: 'Hi there! Fill in a name, avatar and shape combo.' });
  } else if(name === '' || name.length > 15) {
    res.status(401).send({ message: 'You need a name! Max. 15 characters.' });
  } else if(avatar === '') {
    res.status(401).send({ message: 'Meet Gary and Lily! Choose one as avatar.' });
  }else if(password === '000') {
    res.status(401).send({ message: 'Combine different shapes. This will be your password!' });
  } else {
  const player = {
    name: name.toUpperCase(),
    password: bcrypt.hashSync(password, 10),
    avatar
  };
  Player.create(player)
    .then(player => {
      return res.status(201).send(player);
    })
    .catch(error => res.status(401).send({ message: 'Oops! Something went wrong. Try again!' }));
  }
});

module.exports = router;
