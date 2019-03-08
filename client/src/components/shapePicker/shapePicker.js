import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ShapePicker = ({ shape, shapeSelection }) => {
  const shapes = {
    0: 'ShapeCloud.png',
    1: 'ShapeEllipse.png',
    2: 'ShapePolygon.png',
    3: 'ShapeStar.png',
    4: 'ShapeUnion.png'
  };

  return (
    <div className="shape-picker">
      <img
        onClick={() => shapeSelection('up')}
        src="./assets/shapes/ShapeUpSelector.png"
        alt="ShapeUpSelector"
        className="shape-up"
      />
      <img src={`./assets/shapes/${shapes[shape]}`} className="shape" alt="shape" />
      <img
        onClick={() => shapeSelection('down')}
        src="./assets/shapes/ShapeDownSelector.png"
        alt="ShapeDownSelector"
        className="shape-down"
      />
    </div>
  );
};

ShapePicker.propTypes = {
  shape: PropTypes.number.isRequired,
  shapeSelection: PropTypes.func.isRequired
};

export default ShapePicker;
