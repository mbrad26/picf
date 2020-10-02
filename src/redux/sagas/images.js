import { call, put, take } from 'redux-saga/effects';

import { storageChannel } from './utils';
import { doRequestError } from '../actions/user';
import { doSetUploadProgress } from '../actions/images';

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

export { fileUpload };