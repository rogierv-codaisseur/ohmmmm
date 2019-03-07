import React from 'react';
import { Link } from 'react-router-dom';

const PlayerSelectionScreen = () => {
  return (
    <div>
      PlayerSelectionScreen - Go to <Link to="/game-selection">Game Selection</Link> or
      <Link to="/player-creation"> create a Player</Link>
    </div>
  );
};

export default PlayerSelectionScreen;
