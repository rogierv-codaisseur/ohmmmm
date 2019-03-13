import { TOP_5 } from '../actions/score.js';

export default (state = null, action = {}) => {
  switch (action.type) {
    case TOP_5:
      return action.top5;
    default:
      return state;
  }
};
