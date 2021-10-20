import { initializeApp  } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL  } from 'firebase/storage';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  };

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp, "gs://stonks-59b6f.appspot.com");

export {storage , ref, uploadBytesResumable, getDownloadURL, firebaseApp as default};