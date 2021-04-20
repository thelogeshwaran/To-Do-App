import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyATXH1E5X-i_vVVVRpEaRqhX7-mgYlzZB0",
    authDomain: "to-do-new-34190.firebaseapp.com",
    projectId: "to-do-new-34190",
    storageBucket: "to-do-new-34190.appspot.com",
    messagingSenderId: "717046819611",
    appId: "1:717046819611:web:43bd1c18c53e68b32081be"
};


firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();
const auth = firebase.auth();


export { db, auth }