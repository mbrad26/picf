import { call, put, take } from 'redux-saga/effects';
import firebase from 'firebase/app';

import { doRequestError } from '../actions/user';
import { firestore, storage, timestamp } from '../../firebase/config';
import { 
  storageChannel, 
  imagesUrlsChannel, 
  favouritesChannel,
  updateCurrentUserFollowing,
  updateFollowedUserFollowers, 
  removeLikesImagesCollection,
  updateLikesImagesCollection,
  removeLikesTimelineCollection,
  setLikeImageInUsersCollection,
  updateLikesTimelineCollection,
  deleteImageFromUsersCollection,
  deleteImageFromImagesCollection,
  deleteLikeImageInUsersCollection,
  deleteImageFromTimelineCollection,
} from './utilsImages';
import { 
  doSetUrls, 
  doOverlayError, 
  // doSetLikeError,
  doSetLikeStatus, 
  doSetUploadProgress,
} from '../actions/images';

function* fileUpload({ payload: selected }) {
  const channel = yield call(storageChannel, selected);

  while(true) {
    try {
      const { data } = yield take(channel);
  
      yield put(doSetUploadProgress(data));
    } catch (error) {
      yield put(doRequestError(error));
    }
  };
};

function* getImagesUrls({ payload: collection }) {
  const channel = yield call(imagesUrlsChannel, collection);
  
  while(true) {
    try {
      const { data } = yield take(channel);

      yield put(doSetUrls(data));
    } catch (error) {
      yield put(doRequestError(error));
    }
  };
};

function* likeImage({ payload: { url, name, uid } }) {
  const authUser = JSON.parse(localStorage.getItem('authUser'));
  const authUid = authUser.uid;

  try {
    const likedAt = timestamp();

    yield call(setLikeImageInUsersCollection, authUid, name, url, likedAt);
    yield call(updateLikesTimelineCollection, name, authUid);
    yield call(updateLikesImagesCollection, uid, name, authUid);

    yield call(getLikedImages);
  } catch (error) {
    yield put(doOverlayError(error));
  }
};

function* unLikeImage({ payload: { name, uid } }) {
  const authUser = JSON.parse(localStorage.getItem('authUser'));
  const authUid = authUser.uid;

  try {
    yield call(deleteLikeImageInUsersCollection, authUid, name);
    yield call(removeLikesTimelineCollection, name, authUid);
    yield call(removeLikesImagesCollection, uid, name, authUid);
    
    yield call(getLikedImages);
  } catch (error) {
    yield put(doOverlayError(error));
  }
};

function* getLikedImages() {
  const channel = yield call(favouritesChannel);

  while(true) {
    try {
      const likes = [];
      const { data } = yield take(channel);

      data.forEach(snap => likes.push(snap.data().name));

      yield put(doSetLikeStatus(likes));
    } catch (error) {
      yield put(doOverlayError(error));
    }
  };
};

function* deleteImage({ payload: name }) {
  const authUser = JSON.parse(localStorage.getItem('authUser'));
  const uid = authUser.uid;
  const ref = storage.ref(name);

  yield ref.delete()
           .then(console.log('Image deleted!'))
           .catch(error => console.log('ERROR: ', error));
  
  yield call(deleteImageFromTimelineCollection, name);
  yield call(deleteImageFromImagesCollection, uid, name);
  yield call(deleteImageFromUsersCollection, uid, name);
};

function* manageFollowing({ payload: userUid }) {
  const authUser = JSON.parse(localStorage.getItem('authUser'));
  const uid = authUser.uid;

  try {
    yield call(updateCurrentUserFollowing, uid, userUid);
    yield call(updateFollowedUserFollowers, userUid, uid);
  } catch (error) {
    yield put(doOverlayError(error));
  }
};

export { 
  likeImage,
  fileUpload, 
  unLikeImage,
  deleteImage,
  manageFollowing,
  getImagesUrls, 
  getLikedImages,
};