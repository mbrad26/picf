import { call } from 'redux-saga/effects';

import { auth, firestore } from '../../firebase/config';

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  })
};

function* getUserSnapshotFromFirestore(uid) {
  const userRef = yield firestore.doc(`users/${uid}`);
  const doc = yield userRef.get();
  return doc.data();
};

function* getCurrentUserFromFirestore() {
  let authUser = yield call(getCurrentUser);
  const user = yield getUserSnapshotFromFirestore(authUser.uid);
  authUser = {
    ...user,
    uid: authUser.uid,
  };
  return authUser;
};

function* setUserInFirestore(uid, username, email) {
  yield firestore.collection('users').doc(uid).set({ username, email });
};

export {
  getCurrentUser,
  setUserInFirestore,
  getCurrentUserFromFirestore,
};