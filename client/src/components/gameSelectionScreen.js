import React from 'react';
import { Link } from 'react-router-dom';

const GameSelectionScreen = () => {
  return (
    <div>
      <div>
        <Link to={{ pathname: '/game', state: { timeInSec: 120 } }}>2 minutes</Link>
      </div>
      <div>
        <Link to={{ pathname: '/game', state: { timeInSec: 300 } }}>5 minutes</Link>
      </div>
      <div>
        <Link to={{ pathname: '/game', state: { timeInSec: 600 } }}>10 minutes</Link>
      </div>
      GameSelectionScreen - Go to <Link to="/game-result">Game Result</Link>
    </div>
  );
};

export default GameSelectionScreen;
