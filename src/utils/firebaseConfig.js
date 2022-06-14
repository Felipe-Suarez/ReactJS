// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOPgcijb5wMcbWAPJ5b3rPj1Q-8mOsm08",
    authDomain: "suarez-ecommerce.firebaseapp.com",
    projectId: "suarez-ecommerce",
    storageBucket: "suarez-ecommerce.appspot.com",
    messagingSenderId: "782255093729",
    appId: "1:782255093729:web:b5ccb10a37f2a38eb2c4a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
