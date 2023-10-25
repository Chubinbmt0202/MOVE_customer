// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyB3IV0BUmywMl5witl8WsnqFj60yW_NVdk",
  authDomain: "testlogin-a3310.firebaseapp.com",
  projectId: "testlogin-a3310",
  storageBucket: "testlogin-a3310.appspot.com",
  messagingSenderId: "505208714618",
  appId: "1:505208714618:web:3e3b2999bff79e261692c3",
  measurementId: "G-C1M4CXFV22"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}