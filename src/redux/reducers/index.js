import { combineReducers } from 'redux';

import userReducer from './user';
import modalReducer from './modal';
import imagesReducer from './images';

const rootReducer = combineReducers({
  userState: userReducer,
  imagesState: imagesReducer,
  modalState: modalReducer,
});

export default rootReducer;