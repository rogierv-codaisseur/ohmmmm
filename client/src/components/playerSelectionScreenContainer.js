import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PlayerSelectionScreen from './playerSelectionScreen';
import { login } from '../actions/auth';

class PlayerSelectionScreenContainer extends React.Component {
  state = { name: '', shape: '' };

  onSubmit = event => {
    const { login } = this.props;
    const { name, shape } = this.state;
    event.preventDefault();
    login(name, shape);
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    if (this.props.currentUser) return <Redirect to="/game-selection" />;
    return <PlayerSelectionScreen onSubmit={this.onSubmit} onChange={this.onChange} values={this.state} />;
  }
}

PlayerSelectionScreenContainer.propTypes = {
  currentUser: PropTypes.shape({ token: PropTypes.string.isRequired }),
  login: PropTypes.func.isRequired
};

PlayerSelectionScreenContainer.defaultProps = { currentUser: null };

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(
  mapStateToProps,
  { login }
)(PlayerSelectionScreenContainer);
