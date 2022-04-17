import {getAuth, GoogleAuthProvider, signInWithPopup, signOut, getAdditionalUserInfo} from 'firebase/auth'
import axios from 'axios';
import {initializeApp} from "firebase/app";
import {getStorage} from 'firebase/storage'
import {toast} from "react-toastify";
import {collection, getFirestore} from "firebase/firestore";
import Router from 'next/router';
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
    appId: "1:982907877980:web:e31fb3ed1e2ce6e924c499",
    measurementId: "G-KS0FZEHZ6Y"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const googleProvider = new GoogleAuthProvider()
export const auth = getAuth(app)
export const db = getFirestore();
export const storage = getStorage();


export const signInWithGoogle = () => {

    signInWithPopup(auth, googleProvider).then(async (result) => {
        const user = result.user;
        const details = getAdditionalUserInfo(result)

        try {
            const response = await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL + 'api/login/', {uid: user.uid})
            toast.success("Signed in")

            if (details.isNewUser) {
                Router.push('/register')
            }

        } catch (error) {
            toast.error("Failed to connect to server")
        }
    })
}

export const signOutWithGoogle = () => {
    signOut(auth).then(async r => {
        try {
            const response = await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL + 'api/logout/')
            toast.success("Successfully signed out")
        } catch (error) {
            console.log(error)
            toast.error("Failed to connect to server")
        }
    })
}

export const menuRef = collection(db, 'menus');

