import { SET_GAME } from '../actions/setGame';

let initialstate = {
  gameType: 1,
  setTime: 120
};

export default (state = initialstate, action = {}) => {
  switch (action.type) {
    case SET_GAME:
      return {
        gameType: action.payload.type,
        setTime: action.payload.time
      };
    default:
      return state;
  }
};
