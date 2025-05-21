"use client"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBxYrqmNOJcm5tWu_TWQLQGEe3pQf9QznA",
    authDomain: "csfusers-b9cc6.firebaseapp.com",
    projectId: "csfusers-b9cc6",
    storageBucket: "csfusers-b9cc6.firebasestorage.app",
    messagingSenderId: "247196555559",
    appId: "1:247196555559:web:5ef52ca6dda2c3dcc27102",
    measurementId: "G-EQF4EGXGCC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };