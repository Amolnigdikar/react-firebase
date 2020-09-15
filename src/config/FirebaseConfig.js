import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDv7jlOfxnYE9ztKDFasPpJXI0TGGx_irQ",
  authDomain: "react-firebase-app-9fa5d.firebaseapp.com",
  databaseURL: "https://react-firebase-app-9fa5d.firebaseio.com",
  projectId: "react-firebase-app-9fa5d",
  storageBucket: "react-firebase-app-9fa5d.appspot.com",
  messagingSenderId: "1026704226746",
  appId: "1:1026704226746:web:15b9f9377b82b46e56c583",
  measurementId: "G-PYEDGNDX9H",
});

export const db = firebase.firestore();

export const auth = firebase.auth();
