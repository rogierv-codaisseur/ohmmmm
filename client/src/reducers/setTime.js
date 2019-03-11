import { SET_TIME } from '../actions/setTime';

let initialstate = {
  gameType: 1,
  setTime: 120
}

export default (state = initialstate, action = {}) => {
  switch (action.type) {
    case SET_TIME:
      return {
        gameType: action.payload.type,
        setTime: action.payload.time
      }

    default:
      return state;
  }
};
