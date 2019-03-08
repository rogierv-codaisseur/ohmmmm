import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ShapePicker = ({ shape, shapeSelection, color }) => {
  const shapes = {
    0: ['CloudPurple.png', 'CloudOrange.png', 'CloudTurquoise.png'],
    1: ['EllipsePurple.png', 'EllipseOrange.png', 'EllipseTurquoise.png'],
    2: ['PolygonPurple.png', 'PolygonOrange.png', 'PolygonTurquoise.png'],
    3: ['StarPurple.png', 'StarOrange.png', 'StarTurquoise.png'],
    4: ['UnionPurple.png', 'UnionOrange.png', 'UnionTurquoise.png'],
    arrowUp: ['ShapeUpSelectorPurple.png', 'ShapeUpSelectorOrange.png', 'ShapeUpSelectorTurquoise.png'],
    arrowDown: ['ShapeDownSelectorPurple.png', 'ShapeDownSelectorOrange.png', 'ShapeDownSelectorTurquoise.png']
  };

  return (
    <div className="shape-picker">
      <img
        onClick={() => shapeSelection('up')}
        src={`./assets/shapes/${shapes.arrowUp[color]}`}
        alt="ShapeUpSelector"
        className="shape-up"
      />
      <img src={`./assets/shapes/${shapes[shape][color]}`} className="shape" alt="shape" />
      <img
        onClick={() => shapeSelection('down')}
        src={`./assets/shapes/${shapes.arrowDown[color]}`}
        alt="ShapeDownSelector"
        className="shape-down"
      />
    </div>
  );
};

ShapePicker.propTypes = {
  shape: PropTypes.number.isRequired,
  shapeSelection: PropTypes.func.isRequired,
  color: PropTypes.number.isRequired
};

export default ShapePicker;
