import React from 'react';
import { Link } from 'react-router-dom';
import './gameSelectionScreen.css'

const GameSelectionScreen = () => {

  // change this to (props.currentUser.name) once props have been established
  // also change currentUser below accordingly
  let currentUser = 'Dusty'

  return (
    <div className="GameSelectSplash">
      <p className="PlayerName">{currentUser}</p>
      <div className="Two">
        <Link to={{ pathname: '/game', state: { timeInSec: 120 } }}>
          <span className="Time">2</span><br />
          <span className="Minutes">minutes</span>
        </Link>
      </div>
      <div className="Five">
        <Link to={{ pathname: '/game', state: { timeInSec: 300 } }}>
          <span className="Time">5</span><br />
          <span className="Minutes">minutes</span>
        </Link>
      </div>
      <div className="Ten">
        <Link to={{ pathname: '/game', state: { timeInSec: 600 } }}>
          <span className="Time">10</span><br />
          <span className="Minutes">minutes</span>
        </Link>
      </div>
    </div>
  );
};

export default GameSelectionScreen;
