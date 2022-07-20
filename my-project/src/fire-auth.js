// import { initializeApp } from "firebase/app";
// import "firebase/auth";

// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

require('firebase/auth')
const firebaseConfig = {
    apiKey: "AIzaSyC8fKFRicrTShg2xifdH-peNWx0Wz1hBWw",
    authDomain: "idk-login-759fc.firebaseapp.com",
    projectId: "idk-login-759fc",
    storageBucket: "idk-login-759fc.appspot.com",
    messagingSenderId: "173787370772",
    appId: "1:173787370772:web:43122175b62cf2ecc1de01",
    measurementId: "G-52E55N10R2"
  };
  
  // Initialize Firebase
  const fireAuth =firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export  default fireAuth;