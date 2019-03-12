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
      const gameTypeId = localStorage.getItem('gameType');
      setCurrentUser(currentUserId);
      getPlayerTop5(gameTypeId);
    }
  };

  render() {
    if (!this.props.top5) return 'Loading';
    return <GameResultScreen top5={this.props.top5} lastScore={localStorage.getItem('lastScore')} />;
  }
}

GameResultScreenContainer.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
  getPlayerTop5: PropTypes.func.isRequired,
  top5: PropTypes.array
};

GameResultScreenContainer.defaultProps = {
  top5: null
};

const mapStateToProps = state => ({
  top5: state.top5
});

export default connect(
  mapStateToProps,
  { setCurrentUser, getPlayerTop5 }
)(GameResultScreenContainer);
