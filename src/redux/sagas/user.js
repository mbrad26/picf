import { put } from 'redux-saga/effects';

import { auth } from '../../firebase/config';
import { doSignupRequestError } from '../actions/user'; 

function* signupUser({ payload: { email, passwordOne }}) {
  try {
    yield auth.createUserWithEmailAndPassword(email, passwordOne);
  } catch (error) {
    yield put(doSignupRequestError(error));
  }
};

export { signupUser };