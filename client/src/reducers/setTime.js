import { SET_TIME } from '../actions/setTime';

export default (state = 120, action = {}) => {
  switch (action.type) {
    case SET_TIME:
      return action.time;

    default:
      return state;
  }
};
