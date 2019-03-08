import React from 'react';
import ShapePicker from './shapePicker';
import './style.css';

class ShapePickerContainer extends React.Component {
  state = { shape: 0, shape2: 0, shape3: 0 };

  shapeSelection = (direction, id) => {
    console.log(id);
    if (direction === 'up') {
      this.setState({ shape: (this.state.shape + 1) % 5 });
    } else {
      this.state.shape === 0 ? this.setState({ shape: 4 }) : this.setState({ shape: this.state.shape - 1 });
    }
  };

  render() {
    return (
      <div className="shape-picker-group">
        <ShapePicker shapeSelection={this.shapeSelection} shape={this.state.shape} id={1} />
        <ShapePicker shapeSelection={this.shapeSelection} shape={this.state.shape} id={2} />
        <ShapePicker shapeSelection={this.shapeSelection} shape={this.state.shape} id={3} />
      </div>
    );
  }
}

export default ShapePickerContainer;
