import Rebase from "re-base";
import firebase from "firebase/app";
require("firebase/firestore");
require("firebase/auth");
require("firebase/functions");
require("dotenv").config({ path: __dirname + "/.env" });

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_FIREBASE_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_FIREBASE_APP_ID}`
});

const auth = firebaseApp.auth();
const db = firebaseApp.firestore();
const function = firebaseApp.functions();

Rebase.createClass(db);

export { auth };

export default db;
