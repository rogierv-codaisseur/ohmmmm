import React from 'react';
import PreGameScreen from './preGameScreen';
import { connect } from 'react-redux';

class PreGameScreenContainer extends React.Component {
  render() {
    return <PreGameScreen />;
  }
}

const mapStateToProps = state => ({
  setTime: state.setGame.setTime,
  gameType: state.setGame.gameType
});

export default connect(
  mapStateToProps,
  null
)(PreGameScreenContainer);
