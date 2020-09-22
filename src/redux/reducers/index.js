import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

import userReducer from './user';

const rootReducer = combineReducers({
  userState: userReducer,
  // firebase: firebaseReducer,
  // firestore: firestoreReducer,
});

export default rootReducer;