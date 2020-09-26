import { call, put } from 'redux-saga/effects';

import { auth } from '../../firebase/config';
import { 
  doSignupRequestError, 
  doSigninRequestSuccess, 
  doSigninRequestError, 
  doSignoutRequestSuccess, 
  doSignoutRequestError, 
} from '../actions/user'; 
import { 
  setUserInFirestore, 
  getCurrentUserFromFirestore,
  getCurrentUser,
 } from './utils';

function* signUpUser({ payload: { username, email, passwordOne }}) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, passwordOne);
    yield setUserInFirestore(user.uid, username, email);
    const currentUser = yield getCurrentUserFromFirestore();

    const authUser = yield call(getCurrentUser);
    console.log('AUTH_USER', authUser);

    yield put(doSigninRequestSuccess(currentUser));
  } catch (error) {
    yield put(doSignupRequestError(error));
  }
};

function* signInUser({ payload: { email, password }}) {
  try {
    yield auth.signInWithEmailAndPassword(email, password);
    const currentUser = yield getCurrentUserFromFirestore();

    const authUser = yield call(getCurrentUser);
    console.log('AUTH_USER', authUser);

    yield put(doSigninRequestSuccess(currentUser));
  } catch (error) {
    yield put(doSigninRequestError(error));
  }
};

function* signOutUser() {
  try {
    yield auth.signOut();

    const authUser = yield call(getCurrentUser);
    console.log('AUTH_USER', authUser);

    yield put(doSignoutRequestSuccess());
  } catch (error) {
    yield put(doSignoutRequestError(error));
  }
};

export { signUpUser, signInUser, signOutUser };