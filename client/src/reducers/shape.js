import { CHANGE_SHAPE } from '../actions/shape';

export default (state = '000', action = {}) => {
  switch (action.type) {
    case CHANGE_SHAPE:
      return action.shape;
    default:
      return state;
  }
};
