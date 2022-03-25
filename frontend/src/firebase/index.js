import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import axios from 'axios';
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyCkKvXgPbR_jYkjjbG3PDGN6w_jM95Anfg",
    authDomain: "learnfirebase-544b9.firebaseapp.com",
    databaseURL: "https://learnfirebase-544b9-default-rtdb.firebaseio.com",
    projectId: "learnfirebase-544b9",
    storageBucket: "learnfirebase-544b9.appspot.com",
    messagingSenderId: "982907877980",
    appId: "1:982907877980:web:01e53d273d9acfbe24c499",
    measurementId: "G-GSMF3Y1MKB"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

export const loginWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {

        var user = result.user;
        console.log(user);
        axios.post('http://localhost:8000/oauth/login/', {
            uid: user.uid
        })
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });


    }).catch((error) => {
        console.log(error)
    })
}