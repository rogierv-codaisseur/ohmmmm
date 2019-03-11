import { combineReducers } from 'redux';

import currentUser from './currentUser';
import shape from './shape';
import game from './setTime'

export default combineReducers({ currentUser, shape, game });
