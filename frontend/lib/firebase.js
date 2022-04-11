import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'
import axios from 'axios';
import {initializeApp} from "firebase/app";
import {getStorage} from 'firebase/storage'
import {toast} from "react-toastify";
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
const googleProvider = new GoogleAuthProvider()
export const auth = getAuth(app)
export const storage = getStorage();

export const signInWithGoogle =  () => {
    signInWithPopup(auth, googleProvider).then(async (result) => {
        const user = result.user;

        try {
            const response = await axios.post('http://localhost:8000/api/login/', {uid: user.uid})
            console.log(response);
            toast.success("Signed in")
        } catch (error) {
            toast.error("Failed to connect to server")
        }
    })
}

export const signOutWithGoogle = () => {
    signOut(auth).then(async r => {
        try{
            const response = await axios.post('http://localhost:8000/api/logout/')
            console.log(response)
            toast.success("Successfully signed out")
        } catch (error) {
            toast.error("Failed to connect to server")
        }
    })
}
