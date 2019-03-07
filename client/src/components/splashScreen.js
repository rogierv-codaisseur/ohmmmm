import React from 'react';
import { Link } from 'react-router-dom';

const SplashScreen = () => {
  return (
    <div>
      SplashScreen - Go to <Link to="/player-selection">Player Selection</Link>
    </div>
  );
};

export default SplashScreen;
