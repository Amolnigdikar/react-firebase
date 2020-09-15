import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  //paste your firebase config here
});

export const db = firebase.firestore();

export const auth = firebase.auth();
