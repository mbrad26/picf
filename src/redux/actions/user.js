import  { 
  SIGNUP_REQUEST,
  SET_CURRENT_USER,
  SIGNUP_REQUEST_ERROR,
 } from '../constants/actionTypes';

const doSignupRequest = credentials => ({
  type: SIGNUP_REQUEST,
  payload: credentials,
});

const doSetCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user,
});

const doSignupRequestError = error => ({
  type: SIGNUP_REQUEST_ERROR,
  payload: error,
})

export { 
  doSignupRequest, 
  doSetCurrentUser, 
  doSignupRequestError,
};