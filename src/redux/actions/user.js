import  { 
  REQUEST_ERROR,
  SIGNUP_REQUEST,
  SIGNIN_REQUEST, 
  SIGNOUT_REQUEST, 
  SET_USER_REQUEST, 
  SET_USER_SUCCESS, 
  RESET_PASSWORD_REQUEST,
  UPDATE_PASSWORD_REQUEST,
  SIGNIN_WITH_GOOGLE_REQUEST,
 } from '../constants/actionTypes';

const doSignupRequest = credentials => ({
  type: SIGNUP_REQUEST,
  payload: credentials,
});

const doRequestError = error => ({
  type: REQUEST_ERROR,
  payload: error,
});

const doSigninRequest = credentials => ({
  type: SIGNIN_REQUEST,
  payload: credentials,
});

const doSignoutRequest = () => ({
  type: SIGNOUT_REQUEST,
});

const doSetUserRequest = () => ({
  type: SET_USER_REQUEST,
});

const doSetUserSuccess = user => ({
  type: SET_USER_SUCCESS,
  payload: user,
});

const doResetPasswordRequest = email => ({
  type: RESET_PASSWORD_REQUEST,
  payload: email,
});

const doUpdatePasswordRequest = password => ({
  type: UPDATE_PASSWORD_REQUEST,
  payload: password,
});

const doSigninWithGoogleRequest = () => ({
  type: SIGNIN_WITH_GOOGLE_REQUEST,
});

export { 
  doRequestError,
  doSignupRequest, 
  doSigninRequest,
  doSignoutRequest,
  doSetUserRequest,
  doSetUserSuccess,
  doResetPasswordRequest,
  doUpdatePasswordRequest,
  doSigninWithGoogleRequest,
};