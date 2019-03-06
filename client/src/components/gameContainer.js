import * as React from 'react';

import game from '../game';

export default class GameContainer extends React.Component {
  componentDidMount() {
    game();
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <div id="phaser-game" />;
  }
}
