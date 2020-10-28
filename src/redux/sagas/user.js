import { call, put, take } from 'redux-saga/effects';

import { 
  auth, 
  googleProvider, 
} from '../../firebase/config';
import { 
  doRequestError, 
  doSetUserSuccess, 
} from '../actions/user'; 
import { 
  doSetAvatarUrl,
  doSetAvatarUploadProgress,
} from '../actions/user';
import { 
  userChannel,
  avatarChannel,
  setUserInFirestore, 
  avatarUploadChannel,
  getCurrentUserFromFirestore,
  updateTimelineUserFollowers,
  updateCurrentUserFollowing,
  updateFollowedUserFollowers, 
  removeFollowedUserFromFollowing,
  removeFollowingUserFromFollowers,
  followersChannel,
  unfolowUserTimelineCollection,
 } from './utilsUser';

 import { 
  // doSetUrls, 
  doOverlayError, 
  doSetFollowers,
  // doSetLikeStatus, 
  // doSetUploadProgress,
} from '../actions/images';

function* signUpUser({ payload: { username, email, passwordOne }}) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, passwordOne);
    yield setUserInFirestore(user.uid, username, email);
    yield auth.currentUser.sendEmailVerification({
      url: process.env.REACT_APP_DEV_CONFIRMATION_EMAIL_REDIRECT,
    });
  } catch (error) {
    yield put(doRequestError(error));
  };
};

function* signInUser({ payload: { email, password }}) {
  try {
    yield auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    yield put(doRequestError(error));
  };
};

function* signOutUser() {
  try {
    yield auth.signOut();
  } catch (error) {
    yield put(doRequestError(error));
  };
};

function* setCurrentUser() {
  const channel = yield call(userChannel);

  while(true) {
    const { data } = yield take(channel);
    const user = data ? yield getCurrentUserFromFirestore(data) : data;
    localStorage.setItem('authUser', JSON.stringify(user));
    yield put(doSetUserSuccess(user));
  };
};

function* resetPassword({ payload: email }) {
  try {
    yield auth.sendPasswordResetEmail(email);
  } catch (error) {
    yield put(doRequestError(error));
  };
};

function* updatePassword({ payload: password }) {
  try {
    yield auth.currentUser.updatePassword(password);
  } catch (error) {
    yield put(doRequestError(error));
  };
};

function* signInWithGoogle() {
  try {
    yield auth.signInWithPopup(googleProvider);
  } catch (error) {
    yield put(doRequestError(error));
  }
};




function* manageFollowing({ payload: userUid }) {
  const authUser = JSON.parse(localStorage.getItem('authUser'));
  const uid = authUser.uid;
  const username = authUser.username;

  try {
    yield call(updateCurrentUserFollowing, uid, username, userUid);
    yield call(updateFollowedUserFollowers, userUid, username, uid);
    yield call(updateTimelineUserFollowers, uid, userUid);
  } catch (error) {
    yield put(doOverlayError(error));
  }
};

function* manageUnfollowing({ payload: userUid }) {
  const authUser = JSON.parse(localStorage.getItem('authUser'));
  const uid = authUser.uid;

  try {
    yield call(removeFollowingUserFromFollowers, userUid, uid);
    yield call(removeFollowedUserFromFollowing, userUid, uid);
    yield call(unfolowUserTimelineCollection, userUid, uid);
  } catch (error) {
    yield put(doOverlayError(error));
  }
};

function* getFollowers() {
  const channel = yield call(followersChannel);

  while(true) {
    try {
      const followers = [];
      const { data } = yield take(channel);

      data.forEach(snap => followers.push(snap.data()));

      yield put(doSetFollowers(followers));
    } catch (error) {
      yield put(doOverlayError(error));
    }
  };
};




function* avatarUpload({ payload: image }) {
  const channel = yield call(avatarUploadChannel, image);

  while(true) {
    try {
      const { data } = yield take(channel);
  
      yield put(doSetAvatarUploadProgress(data));
    } catch (error) {
      yield put(doRequestError(error));
    }
  };
};

function* getAvatar({ payload: uid }) {
  const channel = yield call(avatarChannel, uid);

  while(true) {
    try {
      const avatars = []
      const { data } = yield take(channel);

      // avatars.push(data.avatarUrl)

      console.log('SAGA_DATA: ', data);

      // yield put(doSetAvatarUrl(avatars));
    } catch (error) {
      yield put(doRequestError(error));
    }
  };
}; 

export { 
  getAvatar,
  signUpUser, 
  signInUser, 
  signOutUser, 
  avatarUpload,
  resetPassword, 
  updatePassword,
  setCurrentUser,
  signInWithGoogle,
  manageFollowing,
  manageUnfollowing,
  getFollowers,
};
