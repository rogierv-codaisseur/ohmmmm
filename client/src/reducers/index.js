import { combineReducers } from 'redux';

import currentUser from './currentUser';
import shape from './shape';
import top5 from './score';
import setGame from './setGame';
import loginError from './loginError';
import signupError from './signupError';

export default combineReducers({ currentUser, shape, top5, setGame, loginError, signupError });
