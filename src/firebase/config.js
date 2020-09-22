import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_DEV_API_KEY,
//   authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
//   projectId: process.env.REACT_APP_DEV_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_DEV_APP_ID,
//   measurementId: process.env.REACT_APP_DEV_MEASURMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAX9bSP7vlEP05ne0t5ROxKiL1nCzeqj0A",
  authDomain: "picf-dbd76.firebaseapp.com",
  databaseURL: "https://picf-dbd76.firebaseio.com",
  projectId: "picf-dbd76",
  storageBucket: "picf-dbd76.appspot.com",
  messagingSenderId: "457627967606",
  appId: "1:457627967606:web:83c9ab4e5ac10075893f57",
  measurementId: "G-921MXDXBNY"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };
export default firebase;