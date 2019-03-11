import React from 'react';
import PreGameScreen from './preGameScreen';
import { connect } from 'react-redux';

class PreGameScreenContainer extends React.Component {

  render() {
    return <PreGameScreen setTime={this.props.setTime}/>;
  }
}

const mapStateToProps = state => ({
setTime: state.setTime
});

export default connect(
mapStateToProps,
null
)(PreGameScreenContainer);
