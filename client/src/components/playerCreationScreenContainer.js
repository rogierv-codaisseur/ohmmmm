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
    return (
      <PlayerCreationScreen
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
        signupError={this.props.signupError}
      />
    );
  }
}

PlayerCreationScreenContainer.propTypes = {
  currentUser: PropTypes.shape({
    token: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }),
  register: PropTypes.func.isRequired,
  shape: PropTypes.string.isRequired,
  signupError: PropTypes.string
};

PlayerCreationScreenContainer.defaultProps = { currentUser: null, signupError: null };

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  shape: state.shape,
  signupError: state.signupError
});

export default connect(
  mapStateToProps,
  { register }
)(PlayerCreationScreenContainer);
