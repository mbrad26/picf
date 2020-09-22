import { takeLatest, all } from 'redux-saga/effects';

import { SIGNUP_REQUEST } from '../constants/actionTypes';
import { signupUser } from './user';

function* watchAll() {
  yield all([
    takeLatest(SIGNUP_REQUEST, signupUser),
  ]);
};

export default watchAll;