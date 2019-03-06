const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const playersRouter = require('./players/routes');
const gameTypesRouter = require('./gameTypes/routes');
const scoresRouter = require('./scores/routes');

const app = express();
const port = process.env.PORT || 4000;

app
  .use(cors())
  .use(bodyParser.json())
  .use(playersRouter)
  .use(gameTypesRouter)
  .use(scoresRouter)
  .listen(port, () => console.log(`Listening on port ${port}`));
