import firebase from "firebase/compat/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL  } from 'firebase/storage';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
  };
firebase.initializeApp(firebaseConfig);
const storage = getStorage();

export {storage , ref, uploadBytesResumable, getDownloadURL, firebase as default};