import React from 'react';
import PropTypes from 'prop-types';
import ShapePicker from './shapePicker';
import './style.css';

class ShapePickerContainer extends React.Component {
  state = { shape: 0 };

  shapeSelection = async direction => {
    if (direction === 'up') {
      await this.setState(prevState => ({ shape: (prevState.shape + 1) % 5 }));
    } else {
      this.state.shape === 0
        ? await this.setState({ shape: 4 })
        : await this.setState(prevState => ({ shape: prevState.shape - 1 }));
    }
    await this.props.onChange(this.state.shape);
  };

  render() {
    return (
      <div className="shape-picker-group">
        <ShapePicker shapeSelection={this.shapeSelection} shape={this.state.shape} />
      </div>
    );
  }
}

ShapePickerContainer.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default ShapePickerContainer;
