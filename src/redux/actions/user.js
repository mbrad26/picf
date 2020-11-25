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
  SELECTED_USER_REQUEST,
  SET_SELECTED_USER,
  UPDATE_USER_DETAILS_REQUEST,
  RESET_AUTHUSER,
  UPDATE_USERNAME_SUCCESS,
  UPDATE_EMAIL_SUCCESS,
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

const doResetAuthUser = () => ({
  type: RESET_AUTHUSER,
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

const doFollowStatusRequest = () => ({
  type: FOLLOW_STATUS_REQUEST,
});

const doFollowingStatusRequest = () => ({
  type: FOLLOWING_STATUS_REQUEST,
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

const doSelectedUserRequest = uid => ({
  type: SELECTED_USER_REQUEST,
  payload: uid,
});

const doSetSelectedUser = data => ({
  type: SET_SELECTED_USER,
  payload: data,
});

const doUpdateUserDetailsRequest = details => ({
  type: UPDATE_USER_DETAILS_REQUEST,
  payload: details,
});

const doUpdateUsernameSuccess = () => ({
  type: UPDATE_USERNAME_SUCCESS,
});

const doUpdateEmailSuccess = () => ({
  type: UPDATE_EMAIL_SUCCESS,
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
  doSelectedUserRequest,
  doSetSelectedUser,
  doResetAuthUser,
  doUpdateUserDetailsRequest,
  doUpdateUsernameSuccess,
  doUpdateEmailSuccess,
};
