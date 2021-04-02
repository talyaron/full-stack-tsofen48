import firebase from 'firebase';
import 'firebase/firestore'; //the database

const firebaseConfig = {
  apiKey: "AIzaSyDYx_j1cFrIWqxrGnjcFarOsenCi5jZCAU",
  authDomain: "firstfirebase-5f1dc.firebaseapp.com",
  projectId: "firstfirebase-5f1dc",
  storageBucket: "firstfirebase-5f1dc.appspot.com",
  messagingSenderId: "600267858075",
  appId: "1:600267858075:web:b767e4c17ed862d5ed663e"
};

  firebase.initializeApp(firebaseConfig)

  export const DB = firebase.firestore();

