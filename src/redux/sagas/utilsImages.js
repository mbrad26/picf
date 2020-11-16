import { eventChannel } from 'redux-saga';
import firebase from 'firebase/app';

import { 
  firestore, 
  storage, 
  timestamp 
} from '../../firebase/config';

// const authUser = JSON.parse(localStorage.getItem('authUser'));

const storageChannel = selected => {
  return new eventChannel(emiter => {
    const listener = storage.ref(selected.name).put(selected)
    .on('state_changed', snapshot => {
      let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      
      emiter({ data: progress });
    }, error => {
      console.log(error);
    }, async ()=> {
      const authUser = JSON.parse(localStorage.getItem('authUser'));
      const url = await storage.ref(selected.name).getDownloadURL();
      // const avatarUrl = yield call(getAvatarUrl, 'smile.png');
      const createdAt = timestamp();
      const uid = authUser.uid;
      const username = authUser.username;
      const name = selected.name;
      
      createUserImagesCollection(uid, username, name, url, createdAt);
      createUsersImagesCollection(uid, username, name, url, createdAt);
      setFollowers(uid, name);
    });
    
    return () => listener.off();
  });
};

const setFollowers = (uid, name) => 
  firestore.collection('users').doc(uid)
           .collection('followers').get()
           .then(snapshot => {
             snapshot.forEach(doc => 
               firestore.collection('timeline')
                        .doc(name)
                        .update({ 
                           ownerFollowers: firebase.firestore.FieldValue.arrayUnion(doc.data().uid)
                        })
             )
           });

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
                              .onSnapshot(snapshot => emiter({ data: snapshot }));
    
    return () => listener.off();
  });
};

const createUserImagesCollection = (uid, username, name, url, createdAt) => 
  firestore.collection('images').doc(uid)
           .collection('timeline').doc(name)
           .set({ userUid: uid, name, username, url, likes: [], createdAt });

const createUsersImagesCollection = (uid, username, name, url, createdAt) => 
  firestore.collection('timeline')
           .doc(name)
           .set({ userUid: uid, name, username, url, likes: [], createdAt })
          
const deleteImageFromTimelineCollection = name =>
  firestore.collection('timeline')
          .doc(name)
          .delete();

const deleteImageFromImagesCollection = (uid, name) =>
  firestore.collection('images')
           .doc(uid)
           .collection('timeline')
           .doc(name)
           .delete();

const deleteImageFromUsersCollection = (uid, name) =>
  firestore.collection('users')
           .doc(uid)
           .collection('favourites')
           .doc(name)
           .delete();

const setLikeImageInUsersCollection = (authUid, name, url, likedAt) =>
  firestore.collection('users').doc(authUid)
           .collection('favourites').doc(name)
           .set({ url, name, likedAt });
      
const updateLikesTimelineCollection = (name, authUid) => 
  firestore.collection('timeline').doc(name)
           .update({ 
             likes: firebase.firestore.FieldValue.arrayUnion(authUid)
           });

const updateLikesImagesCollection = (uid, name, authUid) =>
  firestore.collection('images').doc(uid)
           .collection('timeline').doc(name)
           .update({ 
             likes: firebase.firestore.FieldValue.arrayUnion(authUid)
           });

const deleteLikeImageInUsersCollection = (authUid, name) =>
  firestore.collection('users').doc(authUid)
           .collection('favourites').doc(name)
           .delete();
      
const removeLikesTimelineCollection = (name, authUid) => 
  firestore.collection('timeline').doc(name)
           .update({ 
             likes: firebase.firestore.FieldValue.arrayRemove(authUid)
           });

const removeLikesImagesCollection = (uid, name, authUid) =>
  firestore.collection('images').doc(uid)
           .collection('timeline').doc(name)
           .update({ 
             likes: firebase.firestore.FieldValue.arrayRemove(authUid)
           });

export {
  storageChannel,
  imagesUrlsChannel,
  favouritesChannel,
  updateLikesImagesCollection,
  removeLikesImagesCollection,
  removeLikesTimelineCollection,
  setLikeImageInUsersCollection,
  updateLikesTimelineCollection,
  deleteImageFromUsersCollection,
  deleteImageFromImagesCollection,
  deleteLikeImageInUsersCollection,
  deleteImageFromTimelineCollection,
};