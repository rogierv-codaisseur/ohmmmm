import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './playerSelectionScreen.css'
// import {login} from '../actions/auth'
import ShapePickerGroup from './shapePicker';

const PlayerSelectionScreen = ({ onSubmit, onChange, values, errorMessage }) => {
  const { name } = values;
  return (
    
    <div className="SplashLogin">
      <div className="LogoLogin">
        <img src="../assets/Logo.png" alt="logo"/>
      </div>
      <div className="FormLogin">
        <p className="User">No account yet?</p>
        <Link className="Signup" to="/player-creation">Sign up</Link>
        <div >
          <form className="Form" onSubmit={onSubmit}>
            <p className="User">Existing User Login:</p>
            <label htmlFor="name"></label>
            <input type="text" id="name" name="name" value={name} onChange={onChange} />
            <ShapePickerGroup />
            <input className="Login" type="submit" value="Login" />
          </form>
          <p className="errorMessage">{errorMessage}</p>
        </div>
      </div>
    </div>
  )
}

PlayerSelectionScreen.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  values: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  // loginErr: PropTypes.string.isRequired
};

export default PlayerSelectionScreen;
