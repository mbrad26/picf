import { combineReducers } from 'redux';

import userReducer from './user';
import picturesReducer from './pictures';

const rootReducer = combineReducers({
  userState: userReducer,
  picturesState: picturesReducer,
});

export default rootReducer;