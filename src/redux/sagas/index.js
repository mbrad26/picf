import { takeLatest, all, takeEvery } from 'redux-saga/effects';

import { 
  URL_REQUEST,
  SIGNIN_REQUEST, 
  SIGNUP_REQUEST, 
  SIGNOUT_REQUEST, 
  SET_USER_REQUEST,
  FILE_UPLOAD_REQUEST,
  RESET_PASSWORD_REQUEST,
  UPDATE_PASSWORD_REQUEST, 
  SIGNIN_WITH_GOOGLE_REQUEST, 
  ADD_FAVOURITE_REQUEST,
} from '../constants/actionTypes';
import { 
  fileUpload, 
  getImagesUrls,
  setFavouriteImage, 
} from './images';
import { 
  signUpUser, 
  signInUser, 
  signOutUser, 
  resetPassword,
  setCurrentUser,
  updatePassword,
  signInWithGoogle,
 } from './user';

function* watchAll() {
  yield all([
    takeLatest(SIGNUP_REQUEST, signUpUser),
    takeLatest(SIGNIN_REQUEST, signInUser),
    takeLatest(SIGNOUT_REQUEST, signOutUser),
    takeLatest(SET_USER_REQUEST, setCurrentUser),
    takeLatest(RESET_PASSWORD_REQUEST, resetPassword),
    takeLatest(UPDATE_PASSWORD_REQUEST, updatePassword),
    takeLatest(SIGNIN_WITH_GOOGLE_REQUEST, signInWithGoogle),
    takeLatest(FILE_UPLOAD_REQUEST, fileUpload),
    takeLatest(URL_REQUEST, getImagesUrls),
    takeLatest(ADD_FAVOURITE_REQUEST, setFavouriteImage),
  ]);
};

export default watchAll;