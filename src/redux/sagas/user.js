import { call, put, take } from 'redux-saga/effects';

import { 
  auth, 
  googleProvider, 
} from '../../firebase/config';
import { 
  doRequestError, 
  doSetFollowers,
  doSetAvatarUrl,
  doSetFollowing,
  doSetUserSuccess, 
  doSetAvatarUploadProgress,
  doSetSelectedUser,
  doResetAuthUser,
} from '../actions/user';
import { 
  userChannel,
  avatarChannel,
  followersChannel,
  followingChannel,
  setUserInFirestore, 
  avatarUploadChannel,
  selectedUserChannel,
  updateCurrentUserFollowing,
  updateFollowedUserFollowers, 
  getCurrentUserFromFirestore,
  updateTimelineUserFollowers,
  unfolowUserTimelineCollection,
  removeFollowedUserFromFollowing,
  removeFollowingUserFromFollowers,
  updateUsernameInFirestore,
  // updateEmailInFirestore,
 } from './utilsUser';
import { 
  doOverlayError, 
} from '../actions/images';

// const authUser = JSON.parse(localStorage.getItem('authUser'));

function* signUpUser({ payload: { username, email, passwordOne }}) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, passwordOne);
    yield setUserInFirestore(user.uid, username, email);
    // yield auth.currentUser.sendEmailVerification({
    //   url: process.env.REACT_APP_DEV_CONFIRMATION_EMAIL_REDIRECT,
    // });
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
    localStorage.clear();
    yield put(doResetAuthUser());
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
  const avatarUrl = authUser.avatarUrl;

  try {
    yield call(updateCurrentUserFollowing, uid, userUid);
    yield call(updateFollowedUserFollowers, userUid, username, uid, avatarUrl);
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

function* getFollowing() {
  const channel = yield call(followingChannel);

  while(true) {
    try {
      const following = [];
      const { data } = yield take(channel);

      data.forEach(snap => following.push(snap.data()));

      yield put(doSetFollowing(following));
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
      const { data } = yield take(channel);

      yield put(doSetAvatarUrl(data.avatarUrl));
    } catch (error) {
      yield put(doRequestError(error));
    }
  };
};

function* getSelectedUser({ payload: uid }) {
  const channel = yield call(selectedUserChannel, uid);

  while(true) {
    try {
      const { data } = yield take(channel);

      yield put(doSetSelectedUser(data));
    } catch (error) {
      yield put(doRequestError(error));
    }
  };
};

function* updateUsername({ payload: username }) {
  try {
    yield call(updateUsernameInFirestore, username);
    
    yield call(setCurrentUser);
  } catch (error) {
    yield put(doRequestError(error));
  }
};

const updateEmail = ({ payload: email }) => {
  const user = auth.currentUser;

  user.updateEmail(email).then(function() {
    console.log('UPDATE SUCCESFUL');
  }).catch(function (error) {
    // yield put(doRequestError(error));
  });

  // try {
  //   yield auth.currentUser.updateEmail(email);
  // } catch (error) {
  //   yield put(doRequestError(error));
  // };
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
  getFollowing,
  getSelectedUser,
  updateUsername,
  updateEmail,
};
