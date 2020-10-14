import { call, put, take } from 'redux-saga/effects';

import { doRequestError } from '../actions/user';
import { firestore, timestamp } from '../../firebase/config';
import { 
  storageChannel, 
  imagesUrlsChannel, 
  favouritesChannel 
} from './utilsImages';
import { 
  doSetFavouriteStatus, 
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

function* favouriteImage({ payload: { url, name } }) {
  const authUser = JSON.parse(localStorage.getItem('authUser'));

  try {
    const favedAt = timestamp();

    yield firestore.collection('users').doc(authUser.uid)
                   .collection('favourites').doc(name)
                   .set({ url, name, favedAt })
    
    yield call(getFavouriteImages);
  } catch(error) {
    yield put(doRequestError(error));
  }
};

function* unFavourImage({ payload: name }) {
  const authUser = JSON.parse(localStorage.getItem('authUser'));

  try {
    yield firestore.collection('users').doc(`${authUser.uid}`)
                   .collection('favourites').doc(name).delete();
    
    yield call(getFavouriteImages);
  } catch(error) {
    yield put(doRequestError(error));
  }
};

function* getFavouriteImages() {
  const channel = yield call(favouritesChannel);

  while(true) {
    try {
      const favourites = [];
      const { data } = yield take(channel);

      data.forEach(snap => favourites.push(snap.data().name));

      yield put(doSetFavouriteStatus(favourites));
    } catch(error) {
      yield put(doRequestError(error));
    }
  };
};

export { 
  fileUpload, 
  getImagesUrls, 
  favouriteImage,
  unFavourImage,
  getFavouriteImages,
};