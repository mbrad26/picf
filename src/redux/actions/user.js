import  { 
  SIGNUP_REQUEST,
  SIGNUP_REQUEST_ERROR,
  SIGNIN_REQUEST, 
  SIGNIN_REQUEST_SUCCESS, 
  SIGNIN_REQUEST_ERROR,
 } from '../constants/actionTypes';

const doSignupRequest = credentials => ({
  type: SIGNUP_REQUEST,
  payload: credentials,
});

const doSignupRequestError = error => ({
  type: SIGNUP_REQUEST_ERROR,
  payload: error,
});

const doSigninRequest = () => ({
  type: SIGNIN_REQUEST,
});

const doSigninRequestSuccess = user => ({
  type: SIGNIN_REQUEST_SUCCESS,
  payload: user,
});

const doSigninRequestError = error => ({
  type: SIGNIN_REQUEST_ERROR,
  payload: error,
});

export { 
  doSignupRequest, 
  doSignupRequestError,
  doSigninRequest,
  doSigninRequestSuccess,
  doSigninRequestError,
};