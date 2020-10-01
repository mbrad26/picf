import { call, put, take } from 'redux-saga/effects';

import { storageChannel } from './utils';
import { doSetUploadProgress } from '../actions/images';
import { doRequestError } from '../actions/user';

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

// function* downloadUrl({ payload: selected }) {
//   const imageRef = storage.ref(selected.name);

//   imageRef.getDownloadURL().then(function(downloadURL) {
//     console.log('File available at', downloadURL);
//   });
// };

export { fileUpload, };