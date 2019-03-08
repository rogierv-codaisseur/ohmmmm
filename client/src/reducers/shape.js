import { CHANGE_SHAPE } from '../actions/shape';

export default (state = null, action = {}) => {
  switch (action.type) {
    case CHANGE_SHAPE:
      return action.shape;
    default:
      return state;
  }
};
