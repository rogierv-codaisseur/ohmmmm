import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './playerCreationScreen.css'
import ShapePickerGroup from './shapePicker';


const PlayerCreationScreen = ({ onSubmit, onChange, values }) => {
  const { name, avatar } = values;

  return (
    <div className="Splash">
      <div className="LogoCreate">
        <Link to="/player-selection">
          <img src="../assets/Logo.png" alt="logo"/>
        </Link>
      </div>
      <div className="FormCreate">
        <form className="FormBodyCreate" onSubmit={onSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={name} onChange={onChange} />
        <label htmlFor="shapes">Shape</label>
        <ShapePickerGroup />
    
          <label htmlFor="avatar">Avatar</label>
          <input type="text" id="avatar" name="avatar" value={avatar} onChange={onChange} />

          <input type="submit" value="Create" />
        </form>
      </div>
    </div>
  );
};

PlayerCreationScreen.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  values: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
  }).isRequired
};

export default PlayerCreationScreen;
