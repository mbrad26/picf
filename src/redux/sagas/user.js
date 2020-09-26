import { put } from 'redux-saga/effects';

import { auth } from '../../firebase/config';
import { 
  doSignupRequestError, 
  doSigninRequestSuccess, 
  doSigninRequestError 
} from '../actions/user'; 
import { setUserInFirestore, getCurrentUserFromFirestore } from './utils';

function* signUpUser({ payload: { username, email, passwordOne }}) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, passwordOne);
    yield setUserInFirestore(user.uid, username, email);
    const currentUser = yield getCurrentUserFromFirestore();
    yield put(doSigninRequestSuccess(currentUser));
  } catch (error) {
    yield put(doSignupRequestError(error));
  }
};

function* signInUser({ payload: { email, password }}) {
  try {
    yield auth.signInWithEmailAndPassword(email, password);
    const currentUser = yield getCurrentUserFromFirestore();
    yield put(doSigninRequestSuccess(currentUser));
  } catch (error) {
    yield put(doSigninRequestError(error));
  }
};

export { signUpUser, signInUser };