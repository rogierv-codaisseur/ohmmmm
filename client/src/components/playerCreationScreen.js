import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import './playerCreationScreen.css'
import ShapePickerGroup from './shapePicker';


const PlayerCreationScreen = ({ onSubmit, onChange, values }) => {
  const { name, avatar } = values;

  return (
    <div className="SplashCreate">
      <div className="FormCreate">

        <form className="FormBodyCreate" onSubmit={onSubmit}>
        <h4>SIGN UP</h4>

        <div className="Name">
        <label className="User" htmlFor="name">User Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={onChange} />

        </div>


          <label className="User" htmlFor="avatar">Choose your Avatar:</label>

          <div className="Avatars">

            <input type="image" id="avatar" name="avatar" src="../assets/Gary.png" alt="Submit" value={avatar} onChange={onChange} />
            <input type="image" id="avatar" name="avatar" src="../assets/Lily.png" alt="Submit" value={avatar} onChange={onChange} />
          </div>

          {/* <input type="text" id="avatar" name="avatar" value={avatar} onChange={onChange} /> */}

          <label className="User" htmlFor="shapes">Choose your Shapes:</label>
          <ShapePickerGroup />
    
          <input id="create" type="submit" value="Create" />

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
