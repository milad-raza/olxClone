import * as firebase from 'firebase';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyA6G4pnjaAopSSeuRnUlYFwlHSH6tuFqLs",
    authDomain: "my-assignments-e605e.firebaseapp.com",
    databaseURL: "https://my-assignments-e605e.firebaseio.com",
    projectId: "my-assignments-e605e",
    storageBucket: "my-assignments-e605e.appspot.com",
    messagingSenderId: "522837507993",
    appId: "1:522837507993:web:2380c5c5f19c634a4bdd08",
    measurementId: "G-E8LFQBB27P"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
