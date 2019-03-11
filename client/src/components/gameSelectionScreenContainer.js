import React from 'react';
import PropTypes from 'prop-types';
import GameSelectionScreen from './gameSelectionScreen';
import { connect } from 'react-redux';

class GameSelectionScreenContainer extends React.Component {
  logoff = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  render() {
    return <GameSelectionScreen currentUser={this.props.currentUser} logoff={this.logoff} />;
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
  null
)(GameSelectionScreenContainer);
