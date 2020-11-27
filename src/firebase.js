import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDdUBDXkMuKU0x2FnPGTW2zUbeu4vB8bC0",
    authDomain: "slack-clone-shibam.firebaseapp.com",
    databaseURL: "https://slack-clone-shibam.firebaseio.com",
    projectId: "slack-clone-shibam",
    storageBucket: "slack-clone-shibam.appspot.com",
    messagingSenderId: "859263475205",
    appId: "1:859263475205:web:f3f11338563277a88fc66c",
    measurementId: "G-XX68XZYFN5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
// connecting the Database
const db = firebaseApp.firestore();
// doing authentication
const auth = firebase.auth();
// doing authentication with google
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;