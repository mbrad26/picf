import { put } from 'redux-saga/effects';

import { auth, firestore } from '../../firebase/config';
import { doSignupRequestError, doSignupRequestSuccess } from '../actions/user'; 

function* getSnapshot(uid) {
  const userRef = yield firestore.doc(`users/${uid}`);
  const doc = yield userRef.get();
  return doc.data();
};

function* getCurrentUser(user, username, email) {
  yield firestore.collection('users').doc(user.uid).set({ username, email });
  const snapshot = yield getSnapshot(user.uid);
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