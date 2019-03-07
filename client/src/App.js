import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store.js';
import { Route } from 'react-router-dom';
import './App.css';
import GameContainer from './components/gameContainer';
import SplashScreenContainer from './components/splashScreenContainer.js';
import PlayerSelectionScreenContainer from './components/playerSelectionScreenContainer.js';
import PlayerCreationScreenContainer from './components/playerCreationScreenContainer.js';
import GameSelectionScreenContainer from './components/gameSelectionScreenContainer.js';
import GameResultScreenContainer from './components/gameResultScreenContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Route exact path="/" component={SplashScreenContainer} />
          <Route exact path="/game" component={GameContainer} />
          <Route exact path="/player-selection" component={PlayerSelectionScreenContainer} />
          <Route exact path="/player-creation" component={PlayerCreationScreenContainer} />
          <Route exact path="/game-selection" component={GameSelectionScreenContainer} />
          <Route exact path="/game-result" component={GameResultScreenContainer} />
        </Provider>
      </div>
    );
  }
}

export default App;
