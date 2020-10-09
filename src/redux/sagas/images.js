import { call, put, take } from 'redux-saga/effects';

import { doRequestError } from '../actions/user';
import { firestore } from '../../firebase/config';
import { storageChannel, imagesUrlsChannel } from './utils';
import { doSetUploadProgress, doSetUrls } from '../actions/images';

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

function* getImagesUrls() {
  const channel = yield call(imagesUrlsChannel);

  while(true) {
    try {
      const { data } = yield take(channel);

      yield put(doSetUrls(data));
    } catch(error) {
      yield put(doRequestError(error));
    }
  };
};

function* setFavouriteImage({ payload: url }) {
  const authUser = JSON.parse(localStorage.getItem('authUser'));

  yield firestore.collection('favourites').doc(`${authUser.uid}`).set({ url });
}

export { 
  fileUpload, 
  getImagesUrls, 
  setFavouriteImage,
};