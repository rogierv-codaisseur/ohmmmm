import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import PlayerCreationScreen from './playerCreationScreen';
import { register } from '../actions/auth';

class PlayerCreationScreenContainer extends React.Component {
  state = { name: '', shape: '', avatar: '' };

  onSubmit = event => {
    const { register } = this.props;
    const { name, shape, avatar } = this.state;
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
  currentUser: PropTypes.shape({ token: PropTypes.string.isRequired }),
  register: PropTypes.func.isRequired
};

PlayerCreationScreenContainer.defaultProps = { currentUser: null };

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(
  mapStateToProps,
  { register }
)(PlayerCreationScreenContainer);
