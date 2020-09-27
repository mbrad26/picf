import  { 
  REQUEST_ERROR,
  SIGNUP_REQUEST,
  SIGNIN_REQUEST, 
  SIGNOUT_REQUEST, 
  SET_USER_REQUEST, 
  SET_USER_SUCCESS, 
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

export { 
  doRequestError,
  doSignupRequest, 
  doSigninRequest,
  doSignoutRequest,
  doSetUserRequest,
  doSetUserSuccess,
};