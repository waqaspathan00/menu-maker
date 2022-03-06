import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

import { initializeApp } from "firebase/app";
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

const googleProvider = new GoogleAuthProvider()

export const loginWithGoogle = () =>
{
	signInWithPopup(auth, googleProvider).catch((error) =>
	{
		console.log(error)
	})
}