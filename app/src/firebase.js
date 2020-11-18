import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA5IcoAP5eRPEB5IntpYly_CGzUKADalJE",
  authDomain: "fb-messenger-clone-eac23.firebaseapp.com",
  databaseURL: "https://fb-messenger-clone-eac23.firebaseio.com",
  projectId: "fb-messenger-clone-eac23",
  storageBucket: "fb-messenger-clone-eac23.appspot.com",
  messagingSenderId: "677467471251",
  appId: "1:677467471251:web:27b3e9e795e1658e3fbc66",
});

const db = firebaseApp.firestore();

export { db };
