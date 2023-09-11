// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzFATD-B51lbfv2jvVnpPtXXdGecUeMqk",
    authDomain: "rd-yt-clone.firebaseapp.com",
    projectId: "rd-yt-clone",
    storageBucket: "rd-yt-clone.appspot.com",
    messagingSenderId: "364565615089",
    appId: "1:364565615089:web:368bd89a73b15d7168b450"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Contain auth below using some function wrappers
const auth = getAuth(app);

/**
 * Signs the user in with a Googel pop up
 * @return A promist that resolves with the user's credentials
 */
export function signInWithGoogle() {
    return signInWithPopup(auth, new GoogleAuthProvider());
}

/**
 * Signs the user out.
 * @returns A promise that resolves when the user is signed out.
 */
export function signOut() {
    return auth.signOut();
}

/**
 * Trigger a callback when user auth state changes.
 * @returns A function to unsubscribe callback.
 */
export function onAuthStateChangedHelper(callback: (user: User | null) => void) {
    return onAuthStateChanged(auth, callback);
}