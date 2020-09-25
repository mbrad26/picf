import { takeLatest, all } from 'redux-saga/effects';

import { SIGNIN_REQUEST, SIGNUP_REQUEST } from '../constants/actionTypes';
import { signUpUser, signInUser } from './user';

function* watchAll() {
  yield all([
    takeLatest(SIGNUP_REQUEST, signUpUser),
    takeLatest(SIGNIN_REQUEST, signInUser),
  ]);
};

export default watchAll;