import { call, put, take } from 'redux-saga/effects';

import { storageChannel, imagesUrlsChannel } from './utils';
import { doRequestError } from '../actions/user';
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

      console.log('SNAPSHOT: ', data);

      yield put(doSetUrls(data));
    } catch(error) {
      yield put(doRequestError(error));
    }
  };
};

export { fileUpload, getImagesUrls };