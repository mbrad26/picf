import  { 
  REQUEST_ERROR,
  SIGNUP_REQUEST,
  SIGNIN_REQUEST, 
  SIGNOUT_REQUEST, 
  SIGNIN_REQUEST_SUCCESS, 
  SIGNOUT_REQUEST_SUCCESS, 
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

const doSigninRequestSuccess = user => ({
  type: SIGNIN_REQUEST_SUCCESS,
  payload: user,
});

const doSignoutRequest = () => ({
  type: SIGNOUT_REQUEST,
});

const doSignoutRequestSuccess = () => ({
  type: SIGNOUT_REQUEST_SUCCESS,
});

export { 
  doRequestError,
  doSignupRequest, 
  doSigninRequest,
  doSignoutRequest,
  doSigninRequestSuccess,
  doSignoutRequestSuccess,
};