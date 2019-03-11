import React from 'react';
import PreGameScreen from './preGameScreen';
import { connect } from 'react-redux';

class PreGameScreenContainer extends React.Component {

  render() {
    return <PreGameScreen setTime={this.props.game}/>;
  }
}

const mapStateToProps = state => ({
game: state.game
});

export default connect(
mapStateToProps,
null
)(PreGameScreenContainer);
