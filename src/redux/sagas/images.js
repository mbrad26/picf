import firebase from 'firebase/app';
import { call, put, take } from 'redux-saga/effects';

import { doRequestError } from '../actions/user';
import { firestore, storage, timestamp } from '../../firebase/config';
import { 
  storageChannel, 
  imagesUrlsChannel, 
  favouritesChannel, 
} from './utilsImages';
import { 
  doSetUrls, 
  doSetLikeError,
  doSetLikeStatus, 
  doSetUploadProgress,
  doDeleteError, 
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
                   .set({ url, name, likedAt });

    yield firestore.collection('timeline').doc(name)
                    .update({ 
                      likes: firebase.firestore.FieldValue.arrayUnion(authUser.uid)
                    });
    
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
    
    yield firestore.collection('timeline').doc(name)
                   .update({
                     likes: firebase.firestore.FieldValue.arrayRemove(authUser.uid)
                   })
    
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

function* deleteImage({ payload: name }) {
  const authUser = JSON.parse(localStorage.getItem('authUser'));
  const uid = authUser.uid;
  const ref = storage.ref(name);

  yield ref.delete()
           .then(console.log('Image deleted!'))
           .catch(error => console.log('ERROR: ', error));
  
  yield firestore.collection('timeline')
                 .doc(name)
                 .delete();
  
  yield firestore.collection('images')
                 .doc(uid)
                 .collection('timeline')
                 .doc(name)
                 .delete();
  
  yield firestore.collection('users')
                 .doc(uid)
                 .collection('favourites')
                 .doc(name)
                 .delete();
};

export { 
  fileUpload, 
  getImagesUrls, 
  likeImage,
  unLikeImage,
  getLikedImages,
  deleteImage,
};