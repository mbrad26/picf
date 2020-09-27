import { takeLatest, all } from 'redux-saga/effects';

import { 
  SIGNIN_REQUEST, 
  SIGNUP_REQUEST, 
  SIGNOUT_REQUEST, 
  SET_USER_REQUEST, 
} from '../constants/actionTypes';
import { signUpUser, signInUser, signOutUser, setCurrentUser } from './user';

function* watchAll() {
  yield all([
    takeLatest(SIGNUP_REQUEST, signUpUser),
    takeLatest(SIGNIN_REQUEST, signInUser),
    takeLatest(SIGNOUT_REQUEST, signOutUser),
    takeLatest(SET_USER_REQUEST, setCurrentUser),
  ]);
};

export default watchAll;