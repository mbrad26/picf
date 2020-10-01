import { call, put, take } from 'redux-saga/effects';

import { 
  auth, 
  googleProvider, 
} from '../../firebase/config';
import { 
  doRequestError, 
  doSetUserSuccess, 
} from '../actions/user'; 
import { 
  userChannel,
  setUserInFirestore, 
  getCurrentUserFromFirestore,
 } from './utils';

function* signUpUser({ payload: { username, email, passwordOne }}) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, passwordOne);
    yield setUserInFirestore(user.uid, username, email);
    yield auth.currentUser.sendEmailVerification({
      url: process.env.REACT_APP_DEV_CONFIRMATION_EMAIL_REDIRECT,
    });
  } catch (error) {
    yield put(doRequestError(error));
  };
};

function* signInUser({ payload: { email, password }}) {
  try {
    yield auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    yield put(doRequestError(error));
  };
};

function* signOutUser() {
  try {
    yield auth.signOut();
  } catch (error) {
    yield put(doRequestError(error));
  };
};

function* setCurrentUser() {
  const channel = yield call(userChannel);

  while(true) {
    const { data } = yield take(channel);
    const user = data ? yield getCurrentUserFromFirestore(data) : data;
    localStorage.setItem('authUser', JSON.stringify(user));
    yield put(doSetUserSuccess(user));
  };
};

function* resetPassword({ payload: email }) {
  try {
    yield auth.sendPasswordResetEmail(email);
  } catch (error) {
    yield put(doRequestError(error));
  };
};

function* updatePassword({ payload: password }) {
  try {
    yield auth.currentUser.updatePassword(password);
  } catch (error) {
    yield put(doRequestError(error));
  };
};

function* signInWithGoogle() {
  try {
    yield auth.signInWithPopup(googleProvider);
  } catch (error) {
    yield put(doRequestError(error));
  }
};

export { 
  signUpUser, 
  signInUser, 
  signOutUser, 
  resetPassword, 
  updatePassword,
  setCurrentUser,
  signInWithGoogle,
};
