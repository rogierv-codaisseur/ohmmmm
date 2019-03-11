import React from 'react';
import { Link } from 'react-router-dom';
import './preGameScreen.css'

const PreGameScreen = (props) => {
  return (
    <div className="PreGameSplash">
      <div className="PreGameLogo">
        <Link to={{ pathname: '/game', state: { timeInSec: props.setTime } }}>
          <img src="../assets/start.png" alt="logo"/>
        </Link>
      </div>
      <div className="Info">
        <p>Move the flower around to catch the dots, but remember if you move too fast you will lose points.</p>
      </div>
    </div>
  );
};

export default PreGameScreen;
