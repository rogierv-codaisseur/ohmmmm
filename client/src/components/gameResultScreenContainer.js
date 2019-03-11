import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GameResultScreen from './gameResultScreen';
import { setCurrentUser } from '../actions/auth';
import { getPlayerTop5 } from '../actions/score';

class GameResultScreenContainer extends React.Component {
  componentDidMount = () => {
    const { setCurrentUser, getPlayerTop5 } = this.props;
    if (localStorage.getItem('currentUser')) {
      const currentUserId = JSON.parse(localStorage.getItem('currentUser'));
      setCurrentUser(currentUserId);
      getPlayerTop5();
    }
  };

  render() {
    return <GameResultScreen />;
  }
}

GameResultScreenContainer.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
  getPlayerTop5: PropTypes.func.isRequired
};

export default connect(
  null,
  { setCurrentUser, getPlayerTop5 }
)(GameResultScreenContainer);
