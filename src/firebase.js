import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCtYZSY7odyny2cbHCbH-fE1PqKkrli-2M",
  authDomain: "tinderclone-60fcd.firebaseapp.com",
  databaseURL: "https://tinderclone-60fcd.firebaseio.com",
  projectId: "tinderclone-60fcd",
  storageBucket: "tinderclone-60fcd.appspot.com",
  messagingSenderId: "283888485065",
  appId: "1:283888485065:web:e20e39c4192b55b3244318",
  measurementId: "G-FRTBXWYT18",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
