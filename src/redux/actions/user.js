import  { 
  REQUEST_ERROR,
  SIGNUP_REQUEST,
  SIGNIN_REQUEST, 
  SIGNOUT_REQUEST, 
  SET_USER_REQUEST, 
  SET_USER_SUCCESS, 
  AVATAR_UPLOAD_REQUEST,
  RESET_PASSWORD_REQUEST,
  UPDATE_PASSWORD_REQUEST,
  SIGNIN_WITH_GOOGLE_REQUEST,
  EMAIL_VERIFICATION_REQUEST,
  SET_AVATAR_UPLOAD_PROGRESS,
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

const doEmailVerificationRequest = () => ({
  type: EMAIL_VERIFICATION_REQUEST,
});

const doAvatarUploadRequest = file => ({
  type: AVATAR_UPLOAD_REQUEST,
  payload: file,
});

const doSetAvatarUploadProgress = progress => ({
  type: SET_AVATAR_UPLOAD_PROGRESS,
  payload: progress,
});

export { 
  doRequestError,
  doSignupRequest, 
  doSigninRequest,
  doSignoutRequest,
  doSetUserRequest,
  doSetUserSuccess,
  doAvatarUploadRequest,
  doResetPasswordRequest,
  doUpdatePasswordRequest,
  doSigninWithGoogleRequest,
  doSetAvatarUploadProgress,
  doEmailVerificationRequest,
};
