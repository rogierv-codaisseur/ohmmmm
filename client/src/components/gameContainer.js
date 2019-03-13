import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import game from '../game';

class GameContainer extends React.Component {
  componentDidMount() {
    const { setTime, gameType } = this.props;
    game(setTime, gameType);
    localStorage.setItem('gameType', gameType);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <div id="phaser-game" />;
  }
}

GameContainer.propTypes = {
  setTime: PropTypes.number.isRequired,
  gameType: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  setTime: state.setGame.setTime,
  gameType: state.setGame.gameType
});

export default connect(
  mapStateToProps,
  null
)(GameContainer);
