import React from 'react';
import SplashScreen from './splashScreen';

export default class SplashScreenContainer extends React.Component {

  componentDidMount() {
    setTimeout(() => window.location.href = "/player-selection", 3000 );
  }

  render() {
    return <SplashScreen />;
  }
}
