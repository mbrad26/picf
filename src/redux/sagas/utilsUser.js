import { eventChannel } from 'redux-saga';

import { auth, firestore, storage } from '../../firebase/config';

function* getUserSnapshotFromFirestore(uid) {
  const userRef = yield firestore.doc(`users/${uid}`);
  const doc = yield userRef.get();
  return doc.data();
};

function* getCurrentUserFromFirestore(authUser) {
  const user = yield getUserSnapshotFromFirestore(authUser.uid);
  return {
    ...user,
    uid: authUser.uid,
    emailVerified: authUser.emailVerified,
    providerData: authUser.providerData,
  };
};

function* setUserInFirestore(uid, username, email) {
  yield firestore.collection('users')
                 .doc(uid)
                 .set({ username, email });
};

const userChannel = () => {
  return new eventChannel(emiter => {
    const listener = auth.onAuthStateChanged(authUser => {
      emiter({ data: authUser });
    });
    return () => listener.off();
  });
};

const avatarUploadChannel = image => {
  return new eventChannel(emiter => {
    const listener = storage.ref(image.name).put(image)
    .on('state_changed', snapshot => {
      let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      
      emiter({ data: progress });
    }, error => {
      console.log(error);
    }, async ()=> {
      const url = await storage.ref(image.name).getDownloadURL();
      const authUser = JSON.parse(localStorage.getItem('authUser'));
      const uid = authUser.uid;
      const name = image.name;
      
      firestore.collection('users').doc(uid).update({ avatarUrl: url, name });
    });
    
    return () => listener.off();
  });
};

const avatarChannel = uid => {
  return new eventChannel(emiter => {
    const listener = firestore.collection('users')
                              .doc(uid)
                              .onSnapshot(snap => emiter({ data: snap.data() }));
      
    return () => listener.off();
  });
};


export {
  userChannel,
  avatarChannel,
  setUserInFirestore,
  avatarUploadChannel,
  getCurrentUserFromFirestore,
  getUserSnapshotFromFirestore,
};