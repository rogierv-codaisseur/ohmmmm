import { combineReducers } from 'redux';

import currentUser from './currentUser';
import shape from './shape';
import setTime from './setTime'

export default combineReducers({ currentUser, shape, setTime });
