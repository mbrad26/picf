import  { 
  SIGNUP_REQUEST,
  SET_CURRENT_USER,
  SIGNUP_REQUEST_ERROR,
  SIGNUP_REQUEST_SUCCESS,
 } from '../constants/actionTypes';

const doSignupRequest = credentials => ({
  type: SIGNUP_REQUEST,
  payload: credentials,
});

const doSignupRequestSuccess = () => ({
  type: SIGNUP_REQUEST_SUCCESS,
});

const doSignupRequestError = error => ({
  type: SIGNUP_REQUEST_ERROR,
  payload: error,
});

const doSetCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export { 
  doSignupRequest, 
  doSetCurrentUser, 
  doSignupRequestError,
  doSignupRequestSuccess,
};