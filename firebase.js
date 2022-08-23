// import { initializeApp } from "firebase/app";
import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/storage"
import 'firebase/auth'

const fbConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_MESSAGING_APP_ID
};

if (!firebase.apps.length) {
  firebase.initializeApp(fbConfig)
}else {
  firebase.app(); // if already initialized, use that one
}


const FirebaseAuth = firebase.auth()
const FirebaseFirestore = firebase.firestore()
const FirebaseStorage = firebase.storage()

export {FirebaseAuth, FirebaseFirestore, FirebaseStorage}