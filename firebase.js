// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider , getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB4tS2FS3xEiVBqb4mKcUnpZpD_1Rw-SA",
  authDomain: "riders-d18ee.firebaseapp.com",
  projectId: "riders-d18ee",
  storageBucket: "riders-d18ee.appspot.com",
  messagingSenderId: "515603817041",
  appId: "1:515603817041:web:37c67f6d1870f883b50e70",
  measurementId: "G-XS5GGWYCW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app, provider, auth }