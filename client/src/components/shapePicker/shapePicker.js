import React from 'react';
import './style.css';

const ShapePicker = ({ shape, shapeSelection, id }) => {
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
        onClick={() => shapeSelection('up', id)}
        src="./assets/shapes/ShapeUpSelector.png"
        alt="ShapeUpSelector"
        className="shape-up"
      />
      <img src={`./assets/shapes/${shapes[shape]}`} className="shape" alt="shape" />
      {id}
      <img
        onClick={() => shapeSelection('down', id)}
        src="./assets/shapes/ShapeDownSelector.png"
        alt="ShapeDownSelector"
        className="shape-down"
      />
    </div>
  );
};

export default ShapePicker;
