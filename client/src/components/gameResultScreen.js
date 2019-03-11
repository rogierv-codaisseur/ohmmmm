import React from 'react';
import { Link } from 'react-router-dom';
import './gameResultScreen.css'

const GameResultScreen = () => {
  return (
    <div className="GameResultSplash">
      <Link className="GameLink" to="/game-selection">back to Game Selection</Link>
    </div>
  );
};

export default GameResultScreen;
