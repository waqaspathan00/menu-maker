import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import axios from 'axios';
import {initializeApp} from "firebase/app";
import { getStorage } from 'firebase/storage'
import { collection, getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyB5ipG5sxHAC1aGpNzpg3NzKHOfdIHwlJ0",
    authDomain: "capstone-13aec.firebaseapp.com",
    projectId: "capstone-13aec",
    storageBucket: "capstone-13aec.appspot.com",
    messagingSenderId: "215496982785",
    appId: "1:215496982785:web:d53c54725bb8282cec1b00"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore();

const googleProvider = new GoogleAuthProvider()

export const loginWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {

        var user = result.user;
        console.log(user);
        axios.post('http://localhost:8000/api/login/', {
            uid: user.uid
        }).then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }).catch((error) => {
        console.log(error)
    })
}


export const storage = getStorage();

export const logoutWithGoogle = () => {
    auth.signOut().then(r => {
        console.log(r)
        axios.post('http://localhost:8000/api/logout/').then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    })
}

export const menuRef = collection(db,'menus');

