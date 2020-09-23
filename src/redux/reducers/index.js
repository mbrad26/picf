import { combineReducers } from 'redux';

import userReducer from './user';

const rootReducer = combineReducers({
  userState: userReducer,
});

export default rootReducer;