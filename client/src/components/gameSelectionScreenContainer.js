import React from 'react';
import PropTypes from 'prop-types';
import GameSelectionScreen from './gameSelectionScreen';
import { connect } from 'react-redux';
import { setTime } from '../actions/setTime'

class GameSelectionScreenContainer extends React.Component {
  logoff = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  render() {
    return <GameSelectionScreen currentUser={this.props.currentUser} logoff={this.logoff} setTime={this.props.setTime} />;
  }
}

GameSelectionScreenContainer.propTypes = {
  currentUser: PropTypes.shape({
    token: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })
};

GameSelectionScreenContainer.defaultProps = { currentUser: null };

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(
  mapStateToProps,
  {setTime}
)(GameSelectionScreenContainer);
