import { call, put, take } from 'redux-saga/effects';

import { doRequestError } from '../actions/user';
import { firestore, timestamp } from '../../firebase/config';
import { 
  storageChannel, 
  imagesUrlsChannel, 
  favouritesChannel 
} from './utilsImages';
import { 
  doSetLikeError,
  doSetLikeStatus, 
  doSetUploadProgress, 
  doSetUrls 
} from '../actions/images';

function* fileUpload({ payload: selected }) {
  const channel = yield call(storageChannel, selected);

  while(true) {
    try {
      const { data } = yield take(channel);
  
      yield put(doSetUploadProgress(data));
    } catch(error) {
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
    } catch(error) {
      yield put(doRequestError(error));
    }
  };
};

function* likeImage({ payload: { url, name } }) {
  const authUser = JSON.parse(localStorage.getItem('authUser'));

  try {
    const likedAt = timestamp();

    yield firestore.collection('users').doc(authUser.uid)
                   .collection('favourites').doc(name)
                   .set({ url, name, likedAt })
    
    yield call(getLikedImages);
  } catch(error) {
    yield put(doSetLikeError(error));
  }
};

function* unLikeImage({ payload: name }) {
  const authUser = JSON.parse(localStorage.getItem('authUser'));

  try {
    yield firestore.collection('users').doc(`${authUser.uid}`)
                   .collection('favourites').doc(name).delete();
    
    yield call(getLikedImages);
  } catch(error) {
    yield put(doSetLikeError(error));
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
    } catch(error) {
      yield put(doSetLikeError(error));
    }
  };
};

export { 
  fileUpload, 
  getImagesUrls, 
  likeImage,
  unLikeImage,
  getLikedImages,
};