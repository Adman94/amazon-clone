import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB7-YT-8E_aeVKE6kuqN1lvAwW1k5m1zU0",
  authDomain: "clone-2660c.firebaseapp.com",
  databaseURL: "https://clone-2660c.firebaseio.com",
  projectId: "clone-2660c",
  storageBucket: "clone-2660c.appspot.com",
  messagingSenderId: "565378607302",
  appId: "1:565378607302:web:f375f7ee81545b79cd0fc7",
  measurementId: "G-1SDD0J1XJ6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };