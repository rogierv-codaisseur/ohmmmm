import * as React from 'react';
import PropTypes from 'prop-types';

import game from '../game';

export default class GameContainer extends React.Component {
  componentDidMount() {
    const { location } = this.props;
    game(location.state.timeInSec, location.state.gameType);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <div id="phaser-game" />;
  }
}

GameContainer.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      timeInSec: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
};
