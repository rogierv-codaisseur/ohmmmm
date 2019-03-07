const Player = require('../players/model');
const { toData } = require('./jwt');

function auth(req, res, next) {
  const auth = req.headers.authorization && req.headers.authorization.split(' ');
  if (auth && auth[0] === 'Bearer' && auth[1]) {
    try {
      const data = toData(auth[1]);
      Player.findByPk(data.playerId)
        .then(player => {
          if (!player) return next('Player does not exist');

          req.player = player;
          next();
        })
        .catch(next);
    } catch (error) {
      return res.status(404).send({
        message: `Error ${error.name}: ${error.message}`
      });
    }
  } else {
    return res.status(401).send({
      message: 'Please supply some valid credentials'
    });
  }
}

module.exports = auth;
