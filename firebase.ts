// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBPBCN3q-kAm50iY6P8JGnzs3ZwRAm0n-o",
    authDomain: "netflix-clone-6cf9c.firebaseapp.com",
    projectId: "netflix-clone-6cf9c",
    storageBucket: "netflix-clone-6cf9c.appspot.com",
    messagingSenderId: "429310164923",
    appId: "1:429310164923:web:7742fe14c41df6d3ac0e9e"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }