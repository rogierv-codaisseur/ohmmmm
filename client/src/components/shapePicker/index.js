import React from 'react';
import ShapePickerContainer from './shapePickerContainer';
import './style.css';
import { connect } from 'react-redux';
import { shapeSelection } from '../../actions/shape';

class ShapePickerGroup extends React.Component {
  state = { shapeCode: '000' };

  changeShape1 = async shape => {
    await this.setState(prevState => ({
      shapeCode: shape + prevState.shapeCode[1] + prevState.shapeCode[2]
    }));
    await this.props.shapeSelection(this.state.shapeCode);
  };

  changeShape2 = async shape => {
    await this.setState(prevState => ({ shapeCode: prevState.shapeCode[0] + shape + prevState.shapeCode[2] }));
    await this.props.shapeSelection(this.state.shapeCode);
  };

  changeShape3 = async shape => {
    await this.setState(prevState => ({ shapeCode: prevState.shapeCode[0] + prevState.shapeCode[1] + shape }));
    await this.props.shapeSelection(this.state.shapeCode);
  };

  render() {
    return (
      <div className="shape-picker-group">
        <ShapePickerContainer onChange={this.changeShape1} />
        <ShapePickerContainer onChange={this.changeShape2} />
        <ShapePickerContainer onChange={this.changeShape3} />
      </div>
    );
  }
}

export default connect(
  null,
  { shapeSelection }
)(ShapePickerGroup);
