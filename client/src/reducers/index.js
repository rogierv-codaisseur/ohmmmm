import { combineReducers } from 'redux';

import currentUser from './currentUser';
import shape from './shape';
import top5 from './score';

export default combineReducers({ currentUser, shape, top5 });
