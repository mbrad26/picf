import { eventChannel } from 'redux-saga';
import firebase from 'firebase/app';

import { 
  firestore, 
  storage, 
  timestamp 
} from '../../firebase/config';

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
      const authUser = JSON.parse(localStorage.getItem('authUser'));
      const createdAt = timestamp();
      const uid = authUser.uid;
      const username = authUser.username;
      const name = selected.name;
      
      createUserImagesCollection(uid, username, name, url, createdAt);
      createUsersImagesCollection(uid, username, name, url, createdAt);
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

const followersChannel = uid => {
  // return new eventChannel(emiter => {
  //   const listener = firestore.collection('users').doc('followers')
  //     .onSnapshot(snapshot => {

  //       // let fs = [];

  //       // snapshot.docs.forEach(doc =>
  //       //   fs[uid] = doc.data().followers
  //       // )

  //       emiter({ data: snapshot.data().followers })
  //     });

  //   return () => listener.off();
  // });
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

const updateCurrentUserFollowing = (uid, userUid) => 
  firestore.collection('users').doc(uid)
           .collection('following').doc(userUid)
           .set({ userUid });

const updateFollowedUserFollowers = (userUid, uid) =>
  firestore.collection('users').doc(userUid)
           .collection('followers').doc(uid)
           .set({ uid });
         
export {
  storageChannel,
  followersChannel,
  imagesUrlsChannel,
  favouritesChannel,
  updateCurrentUserFollowing,
  updateFollowedUserFollowers,
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