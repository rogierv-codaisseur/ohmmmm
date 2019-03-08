import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './playerSelectionScreen.css'
import {login} from '../actions/auth'


const PlayerSelectionScreen = () => {
  return (
    <div className="Splash">
      <div className="LogoLogin">
        <Link to="/player-creation">
          <img src="../assets/Logo.png" alt="logo"/>
        </Link>
      </div>
      <div className="FormLogin">
        <div className="ExistingUser" onClick={login}>
          <p>Current User Name + Shapes</p>
        </div>
        <div className="Logout">
          <p>Log out</p>
        </div>
        <Link className="Login" to="/player-creation">Sign up</Link>
      </div>
    </div>
  );
};

PlayerSelectionScreen.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  values: PropTypes.shape({
    name: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }).isRequired
};

export default PlayerSelectionScreen;
