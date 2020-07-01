import firebase from 'firebase/app'
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBUE57LAH2Ni5Xp7FRHECxkp-b7ECRlox4",
    authDomain: "dbdebt-d1da3.firebaseapp.com",
    databaseURL: "https://dbdebt-d1da3.firebaseio.com",
    projectId: "dbdebt-d1da3",
    storageBucket: "dbdebt-d1da3.appspot.com",
    messagingSenderId: "848342549212",
    appId: "1:848342549212:web:091cd0b2a2109da9c92a19"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();