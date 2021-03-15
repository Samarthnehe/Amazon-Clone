// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDtlMhDYy50HE23o19NwZUVIFcsj40JoVk",
  authDomain: "challenge-ee6e8.firebaseapp.com",
  projectId: "challenge-ee6e8",
  storageBucket: "challenge-ee6e8.appspot.com",
  messagingSenderId: "657877772434",
  appId: "1:657877772434:web:6c93831c1a4fb9427cde4b",
  measurementId: "G-LMSR406S10"
};

const firebaseApp=firebase.initializeApp(firebaseConfig); 

const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};