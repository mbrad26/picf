import { put } from 'redux-saga/effects';

import { auth, firestore } from '../../firebase/config';
import { doSignupRequestError } from '../actions/user'; 

function* signupUser({ payload: { username, email, passwordOne }}) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, passwordOne);
    yield firestore.collection('users').doc(user.uid).set({ username, email, });
  } catch (error) {
    yield put(doSignupRequestError(error));
  }
};

export { signupUser };