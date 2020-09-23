import { put } from 'redux-saga/effects';

import { auth, firestore } from '../../firebase/config';
import { doSignupRequestError, doSignupRequestSuccess } from '../actions/user'; 

function* getCurrentUser(user, username, email) {
  yield firestore.collection('users').doc(user.uid).set({ username, email });
  const userRef = yield firestore.doc(`users/${user.uid}`);
  const doc = yield userRef.get();
  const snapshot = doc.data();
  yield put(doSignupRequestSuccess(snapshot));
};

function* signupUser({ payload: { username, email, passwordOne }}) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, passwordOne);
    yield getCurrentUser(user, username, email);
  } catch (error) {
    yield put(doSignupRequestError(error));
  }
};

export { signupUser };