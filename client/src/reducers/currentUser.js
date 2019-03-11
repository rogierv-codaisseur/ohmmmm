import { LOGIN, SET_CURRENT_USER } from '../actions/auth';

export default (state = null, action = {}) => {  
  switch (action.type) {
    case LOGIN:
      return action.token;
    case SET_CURRENT_USER:
      return action.currentUser;
    default:
      return state;
  }
};
