import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShapePickerGroup from './shapePicker';

const PlayerSelectionScreen = ({ onSubmit, onChange, values }) => {
  const { name } = values;
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={name} onChange={onChange} />

        <ShapePickerGroup />

        <input type="submit" value="Login" />
      </form>
      PlayerSelectionScreen - Go to <Link to="/game-selection">Game Selection</Link> or
      <Link to="/player-creation"> create a Player</Link>
    </div>
  );
};

PlayerSelectionScreen.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  values: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};

export default PlayerSelectionScreen;
