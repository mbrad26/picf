import { eventChannel } from 'redux-saga';
import { put, take } from 'redux-saga/effects';

import { auth } from '../../firebase/config';
import { 
  doRequestError, 
  doSetUserSuccess, 
} from '../actions/user'; 
import { 
  setUserInFirestore, 
  getCurrentUserFromFirestore,
 } from './utils';

function* signUpUser({ payload: { username, email, passwordOne }}) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, passwordOne);
    yield setUserInFirestore(user.uid, username, email);
  } catch (error) {
    yield put(doRequestError(error));
  }
};

function* signInUser({ payload: { email, password }}) {
  try {
    yield auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    yield put(doRequestError(error));
  }
};

function* signOutUser() {
  try {
    yield auth.signOut();
  } catch (error) {
    yield put(doRequestError(error));
  }
};

function* setCurrentUser() {
  const channel = new eventChannel(emiter => {
    const listener = auth.onAuthStateChanged(authUser => {
      emiter({ data: authUser });
    });
    return () => listener.off();
  });

  while(true) {
    const { data } = yield take(channel);
    const user = data ? yield getCurrentUserFromFirestore(data) : data;
    yield put(doSetUserSuccess(user));
  };
};

function* resetPassword({ payload: email }) {
  try {
    console.log('EMAIL: ', email);
    yield auth.sendPasswordResetEmail(email);
  } catch (error) {
    yield put(doRequestError(error));
  };
};

export { 
  signUpUser, 
  signInUser, 
  signOutUser, 
  resetPassword, 
  setCurrentUser,
};
