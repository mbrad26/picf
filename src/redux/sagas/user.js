import { call, put } from 'redux-saga/effects';

import { auth, firestore } from '../../firebase/config';
import { 
  doSignupRequestError, 
  doSigninRequestSuccess, 
  doSigninRequestError 
} from '../actions/user'; 

function* getUserSnapshotFirestore(uid) {
  const userRef = yield firestore.doc(`users/${uid}`);
  const doc = yield userRef.get();
  return doc.data();
};

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  })
};

function* setUserInFirestore(uid, username, email) {
  yield firestore.collection('users').doc(uid).set({ username, email });
};

function* signUpUser({ payload: { username, email, passwordOne }}) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, passwordOne);
    yield setUserInFirestore(user.uid, username, email);
    const authUser = yield call(getCurrentUser);
    // const currentUser = yield getUserSnapshotFirestore(authUser.uid)
    yield put(doSigninRequestSuccess(authUser));
  } catch (error) {
    yield put(doSignupRequestError(error));
  }
};

function* signInUser({ payload: { email, password }}) {
  try {
    yield auth.signInWithEmailAndPassword(email, password);
    const authUser = yield call(getCurrentUser);
    yield put(doSigninRequestSuccess(authUser));
  } catch (error) {
    yield put(doSigninRequestError(error));
  }
};

export { signUpUser, signInUser };