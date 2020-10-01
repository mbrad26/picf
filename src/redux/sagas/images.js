import { eventChannel } from 'redux-saga';
import { call, put, take } from 'redux-saga/effects';

import { storage } from '../../firebase/config';
import { doSetUploadProgress } from '../actions/images';
import { doRequestError } from '../actions/user';

function* storageChannel(selected) {
  return new eventChannel(emiter => {
    const listener = storage.ref(selected.name).put(selected)
                            .on('state_changed', snapshot => {
      let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      
      emiter({ data: progress });
    });

    return () => listener.off();
  });
};

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