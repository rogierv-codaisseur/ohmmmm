import React, { Component } from 'react';
import {Provider} from 'react-redux'
import store from './store.js'
// import {Route} from 'react-router-dom'
import './App.css';
import GameContainer from './components/gameContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <GameContainer/>
        </Provider>
      </div>
    );
  }
}

export default App;

