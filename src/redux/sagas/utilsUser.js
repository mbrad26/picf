import firebase from 'firebase/app';
import { eventChannel } from 'redux-saga';
import { call } from 'redux-saga/effects';

import { auth, firestore, storage } from '../../firebase/config';

const authUser = JSON.parse(localStorage.getItem('authUser'));

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

function* updateCurrentUserFollowing(uid, userUid) {
  const data = yield call(getUserSnapshotFromFirestore, userUid);
  const username = data.username;
  const avatarUrl = data.avatarUrl;

  firestore.collection('users').doc(uid)
           .collection('following').doc(userUid)
           .set({ uid: userUid, username, avatarUrl });
  
  firestore.collection('users').doc(uid)
           .update({ 
             following: firebase.firestore.FieldValue.arrayUnion(userUid)
           });
};

const updateFollowedUserFollowers = (userUid, username, uid, avatarUrl) => {
  firestore.collection('users').doc(userUid)
           .collection('followers').doc(uid)
           .set({ uid , username, avatarUrl});

  firestore.collection('users').doc(userUid)
           .update({ 
             followers: firebase.firestore.FieldValue.arrayUnion(uid)
           });
};

const updateTimelineUserFollowers = (uid, userUid) => {
  const timelineRef = firestore.collection('timeline');

  timelineRef.where('userUid', '==', userUid)
              .get()
              .then(snapshot =>
                snapshot.forEach(doc => 
                  timelineRef.doc(doc.data().name)
                            .update({ 
                              ownerFollowers: firebase.firestore.FieldValue.arrayUnion(uid)
                            })
                )
              );
  };

const removeFollowingUserFromFollowers = (userUid, uid) => {
  firestore.collection('users').doc(userUid)
           .collection('followers').doc(uid)
           .delete();

  firestore.collection('users').doc(userUid)
           .update({ 
             followers: firebase.firestore.FieldValue.arrayRemove(uid)
           });
};

const removeFollowedUserFromFollowing = (userUid, uid) => {
  firestore.collection('users').doc(uid)
           .collection('following').doc(userUid)
           .delete();

  firestore.collection('users').doc(uid)
           .update({ 
             following: firebase.firestore.FieldValue.arrayRemove(userUid)
           });
};

const unfolowUserTimelineCollection = (userUid, uid) => {
  const timelineRef = firestore.collection('timeline');

  timelineRef.where('userUid', '==', userUid)
             .get()
             .then(snapshot =>
                snapshot.forEach(doc => 
                  timelineRef.doc(doc.data().name)
                            .update({ 
                              ownerFollowers: firebase.firestore.FieldValue.arrayRemove(uid)
                            })
                )
              );
};

const followersChannel = (authUserUid = authUser.uid) => {
  return new eventChannel(emiter => {
    const listener = firestore.collection('users').doc(`${authUserUid}`)
                              .collection('followers')
                              .onSnapshot(snapshot => {
                                // console.log('SELECTED_USER: ', snapshot.data());
                                emiter({ data: snapshot })
                              });

    return () => listener.off();
  });
};

const followingChannel = (authUserUid = authUser.uid) => {
  return new eventChannel(emiter => {
    const listener = firestore.collection('users').doc(`${authUserUid}`)
                              .collection('following')
                              .onSnapshot(snapshot => emiter({ data: snapshot}));

    return () => listener.off();
  });
};

const selectedUserChannel = uid => {
  return new eventChannel(emiter => {
    const listener = firestore.collection('users')
                              .doc(`${uid}`)
                              .onSnapshot(snapshot => {
                                emiter({ data: snapshot.data()});
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
      // const authUser = JSON.parse(localStorage.getItem('authUser'));
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
  selectedUserChannel,
  getCurrentUserFromFirestore,
  getUserSnapshotFromFirestore,
  followersChannel,
  followingChannel,
  removeFollowedUserFromFollowing,
  removeFollowingUserFromFollowers,
  unfolowUserTimelineCollection,
  updateCurrentUserFollowing,
  updateFollowedUserFollowers,
  updateTimelineUserFollowers,
};