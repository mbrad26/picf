import  { 
  REQUEST_ERROR,
  SIGNUP_REQUEST,
  SIGNIN_REQUEST, 
  SET_AVATAR_URL,
  AVATAR_REQUEST,
  SIGNOUT_REQUEST, 
  SET_USER_REQUEST, 
  SET_USER_SUCCESS, 
  AVATAR_UPLOAD_REQUEST,
  RESET_PASSWORD_REQUEST,
  UPDATE_PASSWORD_REQUEST,
  SIGNIN_WITH_GOOGLE_REQUEST,
  EMAIL_VERIFICATION_REQUEST,
  SET_AVATAR_UPLOAD_PROGRESS,
  FOLLOW_STATUS_REQUEST,
  SET_FOLLOWERS,
  UNFOLLOW_REQUEST,
  FOLLOW_REQUEST,
  FOLLOWING_STATUS_REQUEST,
  SET_FOLLOWING,
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

const doSetAvatarUrl = url => ({
  type: SET_AVATAR_URL,
  payload: url,
});

const doGetAvatarUrl = uid => ({
  type: AVATAR_REQUEST,
  payload: uid,
});

const doFollowRequest = data => ({
  type: FOLLOW_REQUEST,
  payload: data,
});

const doFollowStatusRequest = uid => ({
  type: FOLLOW_STATUS_REQUEST,
  payload: uid,
});

const doFollowingStatusRequest = uid => ({
  type: FOLLOWING_STATUS_REQUEST,
  payload: uid,
});

const doSetFollowers = followers => ({
  type: SET_FOLLOWERS,
  payload: followers,
});

const doSetFollowing = following => ({
  type: SET_FOLLOWING,
  payload: following,
});

const doUnfollowRequest = data => ({
  type: UNFOLLOW_REQUEST,
  payload: data,
});

export { 
  doRequestError,
  doSetAvatarUrl,
  doGetAvatarUrl,
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
  doFollowStatusRequest,
  doSetFollowers,
  doUnfollowRequest,
  doFollowRequest,
  doFollowingStatusRequest,
  doSetFollowing,
};
