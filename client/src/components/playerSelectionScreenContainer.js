import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PlayerSelectionScreen from './playerSelectionScreen';
import { login, setCurrentUser } from '../actions/auth';

class PlayerSelectionScreenContainer extends React.Component {
  state = { name: '', shape: '' };

  onSubmit = event => {
    const { login, shape } = this.props;
    const { name } = this.state;
    event.preventDefault();
    login(name, shape);
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    if (this.props.currentUser) return <Redirect to="/game-selection" />;
    if (localStorage.getItem('currentUser')) return <Redirect to="/game-selection" />;
    return <PlayerSelectionScreen onSubmit={this.onSubmit} onChange={this.onChange} values={this.state} />;
  }
}

PlayerSelectionScreenContainer.propTypes = {
  currentUser: PropTypes.shape({
    token: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }),
  login: PropTypes.func.isRequired,
  setCurrentUser: PropTypes.func.isRequired,
  shape: PropTypes.string.isRequired
};

PlayerSelectionScreenContainer.defaultProps = { currentUser: null };

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  shape: state.shape
});

export default connect(
  mapStateToProps,
  { login, setCurrentUser }
)(PlayerSelectionScreenContainer);
