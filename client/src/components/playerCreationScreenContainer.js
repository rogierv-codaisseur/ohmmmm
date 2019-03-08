import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import PlayerCreationScreen from './playerCreationScreen';
import { register } from '../actions/auth';

class PlayerCreationScreenContainer extends React.Component {
  state = { name: '', shape: '', avatar: '' };

  onSubmit = event => {
    const { register, shape } = this.props;
    const { name, avatar } = this.state;
    event.preventDefault();
    register(name, shape, avatar);
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    if (this.props.currentUser) return <Redirect to="/game-selection" />;
    return <PlayerCreationScreen onSubmit={this.onSubmit} onChange={this.onChange} values={this.state} />;
  }
}

PlayerCreationScreenContainer.propTypes = {
  currentUser: PropTypes.string,
  register: PropTypes.func.isRequired,
  shape: PropTypes.string.isRequired
};

PlayerCreationScreenContainer.defaultProps = { currentUser: null };

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  shape: state.shape
});

export default connect(
  mapStateToProps,
  { register }
)(PlayerCreationScreenContainer);
