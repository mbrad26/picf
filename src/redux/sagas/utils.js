import { firestore } from '../../firebase/config';

function* getUserSnapshotFromFirestore(uid) {
  const userRef = yield firestore.doc(`users/${uid}`);
  const doc = yield userRef.get();
  return doc.data();
};

function* getCurrentUserFromFirestore(authUser) {
  const user = yield getUserSnapshotFromFirestore(authUser.uid);
  authUser = {
    ...user,
    uid: authUser.uid,
    emailVerified: authUser.emailVerified,
    providerData: authUser.providerData,
  };

  return authUser;
};

function* setUserInFirestore(uid, username, email) {
  yield firestore.collection('users').doc(uid).set({ username, email });
};

export {
  setUserInFirestore,
  getCurrentUserFromFirestore,
  getUserSnapshotFromFirestore,
};