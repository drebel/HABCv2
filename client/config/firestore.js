// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZ9NPXrgKfRrz1eGp9alLUOy5HPhPuqXY",

    authDomain: "habc-m.firebaseapp.com",
  
    projectId: "habc-m",
  
    storageBucket: "habc-m.appspot.com",
  
    messagingSenderId: "535314806595",
  
    appId: "1:535314806595:web:b5c0bcc3ad6af48cfc61f6"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
