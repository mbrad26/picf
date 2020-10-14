import { eventChannel } from 'redux-saga';

import { 
  auth, 
  firestore, 
  storage, 
  timestamp 
} from '../../firebase/config';

const createUserImagesCollection = (uid, name, url, createdAt) => 
  firestore.collection('images').doc(uid)
           .collection('timeline').doc(name)
           .set({ url, createdAt, name });

const createUsersImagesCollection = (uid, name, url, createdAt) => 
  firestore.collection('timeline')
           .doc(name)
           .set({ userUid: uid, url, createdAt });

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
      const uid = auth.currentUser.uid;
      const name = selected.name;

      createUserImagesCollection(uid, name, url, createdAt);
      createUsersImagesCollection(uid, name, url, createdAt);
    });

    return () => listener.off();
  });
};

const imagesUrlsChannel = collection => {
  return new eventChannel(emiter => {
    const listener = firestore.collection(collection)
                        .orderBy('createdAt', 'desc')
                        .onSnapshot(snapshot => {
      
      let urls = [];
      snapshot.docs.forEach(doc => {
        urls.push(doc.data());
      });

      emiter({ data: urls });
    });

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
  storageChannel,
  imagesUrlsChannel,
  favouritesChannel,
};