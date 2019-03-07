import React from 'react';
import { Link } from 'react-router-dom';

const GameSelectionScreen = () => {
  return (
    <div>
      GameSelectionScreen - Go to the <Link to="/game">Game</Link> or go to <Link to="/game-result">Game Result</Link>
    </div>
  );
};

export default GameSelectionScreen;
