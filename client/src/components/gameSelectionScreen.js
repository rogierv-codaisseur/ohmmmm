import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './gameSelectionScreen.css';

const GameSelectionScreen = ({ currentUser, logoff, setGame }) => {
  const currentUserName = !currentUser ? 'no name' : currentUser.name;

  return (
    <div className="GameSelectSplash">
      <p className="PlayerName" onClick={logoff}>
        {currentUserName}
      </p>

      <div className="Two">
        <Link to={{ pathname: '/pre-game', state: { timeInSec: 120, gameType: 1 } }} onClick={() => setGame(120, 1)}>
          <span className="Time">2</span>
          <br />
          <span className="Minutes">minutes</span>
        </Link>
      </div>
      <div className="Five">
        <Link to={{ pathname: '/pre-game', state: { timeInSec: 300, gameType: 2 } }} onClick={() => setGame(300, 2)}>
          <span className="Time">5</span>
          <br />
          <span className="Minutes">minutes</span>
        </Link>
      </div>
      <div className="Ten">
        <Link to={{ pathname: '/pre-game', state: { timeInSec: 600, gameType: 3 } }} onClick={() => setGame(10, 3)}>
          <span className="Time">10</span>
          <br />
          <span className="Minutes">minutes</span>
        </Link>
      </div>
    </div>
  );
};

export default GameSelectionScreen;

GameSelectionScreen.propTypes = {
  setGame: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    token: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }),
  logoff: PropTypes.func.isRequired
};

GameSelectionScreen.defaultProps = { currentUser: null };
