import firebase from "firebase/compat/app";
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBckIXnUMMZJBxukiIOI6bEPuIWVOqQnM8",
    authDomain: "teste-c2c7c.firebaseapp.com",
    projectId: "teste-c2c7c",
    storageBucket: "teste-c2c7c.appspot.com",
    messagingSenderId: "982686707777",
    appId: "1:982686707777:web:e17065ca7732aa2da9d6c0"
  };
  
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export {storage, firebase as default};