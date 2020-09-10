import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA_f_9E15snxKNNzGd9c2yrfslajXGXziI",
    authDomain: "web-bomberos.firebaseapp.com",
    databaseURL: "https://web-bomberos.firebaseio.com",
    projectId: "web-bomberos",
    storageBucket: "web-bomberos.appspot.com",
    messagingSenderId: "238008783920",
    appId: "1:238008783920:web:993df1cc071c9b1ee409f5"
  };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   const db = firebase.firestore();
   const auth = firebase.auth();

   export {db, auth};