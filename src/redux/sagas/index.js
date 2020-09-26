import { takeLatest, all } from 'redux-saga/effects';

import { SIGNIN_REQUEST, SIGNOUT_REQUEST, SIGNUP_REQUEST } from '../constants/actionTypes';
import { signUpUser, signInUser, signOutUser } from './user';

function* watchAll() {
  yield all([
    takeLatest(SIGNUP_REQUEST, signUpUser),
    takeLatest(SIGNIN_REQUEST, signInUser),
    takeLatest(SIGNOUT_REQUEST, signOutUser),
  ]);
};

export default watchAll;