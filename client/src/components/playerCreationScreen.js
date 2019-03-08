import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShapePickerGroup from './shapePicker';

const PlayerCreationScreen = ({ onSubmit, onChange, values }) => {
  const { name, shape, avatar } = values;

  const onChangeShape = () => {
    console.log('test');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={name} onChange={onChange} />

        <label htmlFor="shapes">Shape</label>
        <ShapePickerGroup onChangeShape={onChangeShape()} />
        <input type="text" id="shape" name="shape" value={shape} onChange={onChange} />

        <label htmlFor="avatar">Avatar</label>
        <input type="text" id="avatar" name="avatar" value={avatar} onChange={onChange} />

        <input type="submit" value="Create" />
      </form>
      PlayerCreationScreen - Go back to <Link to="/player-selection">Player Selection</Link> or go to{' '}
      <Link to="/game-selection">Game selection</Link>
    </div>
  );
};

PlayerCreationScreen.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  values: PropTypes.shape({
    name: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
  }).isRequired
};

export default PlayerCreationScreen;
