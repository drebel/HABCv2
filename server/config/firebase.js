const { initializeApp } = require("firebase/app")
const { getFirestore } = require("firebase/firestore")
const { getAuth } = require("firebase/auth")
require('dotenv').config()

const firebaseConfig = {
    // apiKey: process.env.API_KEY,
    // authDomain: process.env.AUTH_DOMAIN,
    // projectId: process.env.PROJECT_ID,
    // storageBucket: process.env.STORAGE_BUCKET,
    // messagingSenderId: process.env.MESSAGING_SENDER_ID,
    // appId: process.env.APP_ID

    apiKey: "AIzaSyDZ9NPXrgKfRrz1eGp9alLUOy5HPhPuqXY",
    authDomain: "habc-m.firebaseapp.com",
    projectId: "habc-m",
    storageBucket: "habc-m.appspot.com",
    messagingSenderId: "535314806595",
    appId: "1:535314806595:web:b5c0bcc3ad6af48cfc61f6"
}

const connectDB = async () => {
    try {
        const firebaseApp = initializeApp(firebaseConfig)
        console.log('Initalized Firebase')
    
        const db = getFirestore(firebaseApp)
        console.log('Connected to DB')
    
        const auth = getAuth(firebaseApp)
        console.log('Connected to Firebase Auth')
    } catch (err) {
      console.error(err)
      process.exit(1)
    }
}


module.exports = connectDB