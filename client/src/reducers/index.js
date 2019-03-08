import { combineReducers } from 'redux';

import currentUser from './currentUser';
import shape from './shape';

export default combineReducers({ currentUser, shape });
