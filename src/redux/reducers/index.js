import { combineReducers } from 'redux';

import userReducer from './user';
import imagesReducer from './images';

const rootReducer = combineReducers({
  userState: userReducer,
  imagesState: imagesReducer,
});

export default rootReducer;