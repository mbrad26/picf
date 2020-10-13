import { eventChannel } from 'redux-saga';

import { auth, firestore, storage, timestamp } from '../../firebase/config';

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
  yield firestore.collection('users').doc(uid).set({ username, email });
};

const userChannel = () => {
  return new eventChannel(emiter => {
    const listener = auth.onAuthStateChanged(authUser => {
      emiter({ data: authUser });
    });
    return () => listener.off();
  });
};

const storageChannel = selected => {
  return new eventChannel(emiter => {
    const listener = storage.ref(selected.name).put(selected)
                            .on('state_changed', snapshot => {
      let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      
      emiter({ data: progress });
    }, error => {
      console.log(error);
    }, async ()=> {
      const url = await storage.ref(selected.name).getDownloadURL();
      const createdAt = timestamp();

      firestore.collection('images').doc(auth.currentUser.uid)
               .collection('timeline').doc(selected.name)
               .set({ url, createdAt, name: selected.name });
    });

    return () => listener.off();
  });
};

const imagesUrlsChannel = () => {
  return new eventChannel(emiter => {
    let listener;
    const authUser = JSON.parse(localStorage.getItem('authUser'));

    if(authUser) {
      listener = firestore.collection(`images/${authUser.uid}/timeline`)
                          .orderBy('createdAt', 'desc')
                          .onSnapshot(snapshot => {
        
        let urls = [];
        snapshot.docs.forEach(doc => {
          urls.push(doc.data());
        });

        emiter({ data: urls });
      });
    };

    return () => listener.off();
  });
};

const favouritesChannel = () => {
  const authUser = JSON.parse(localStorage.getItem('authUser'));

  return new eventChannel(emiter => {
    const listener = firestore.collection('users').doc(`${authUser.uid}`)
                              .collection('favourites')
                              .onSnapshot(snapshot => {
                                emiter({ data: snapshot })
                              });

    return () => listener.off();
  });
};

export {
  userChannel,
  storageChannel,
  imagesUrlsChannel,
  setUserInFirestore,
  getCurrentUserFromFirestore,
  getUserSnapshotFromFirestore,
  favouritesChannel,
};