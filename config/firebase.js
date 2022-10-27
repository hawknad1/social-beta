// import * as firebase from "firebase";
// import "firebase/firestore";
// import "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHPaxRvjXRak9c80O2DcbTQEpD-mn5V9c",
  authDomain: "paysub-f8275.firebaseapp.com",
  projectId: "paysub-f8275",
  storageBucket: "paysub-f8275.appspot.com",
  messagingSenderId: "793019873310",
  appId: "1:793019873310:web:6cb5fd08594ced7ecf160f",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
