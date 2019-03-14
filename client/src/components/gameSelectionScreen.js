import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './gameSelectionScreen.css';

const GameSelectionScreen = ({ currentUser, logoff, setGame }) => {
  const currentUserName = !currentUser ? 'no name' : currentUser.name;

  return (
    <div className="GameSelectSplash">
      <p className="PlayerName">
        {currentUserName}{' '}
        <span className="logout" onClick={logoff}>
          logout
        </span>
      </p>

      <div className="Two">
        <Link to="/pre-game" onClick={() => setGame(120, 1)}>
          <img className="red" src="../assets/red.png" alt="red" />
          <span className="Time">2</span>
          <br />
          <span className="Minutes">minutes</span>
        </Link>
      </div>
      <div className="Five">
        <Link to="/pre-game" onClick={() => setGame(300, 2)}>
          <img className="orange" src="../assets/orange.png" alt="orange" />
          <span className="Time">5</span>
          <br />
          <span className="Minutes">minutes</span>
        </Link>
      </div>
      <div className="Ten">
        <Link to="/pre-game" onClick={() => setGame(600, 3)}>
          <img className="green" src="../assets/green.png" alt="green" />
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
