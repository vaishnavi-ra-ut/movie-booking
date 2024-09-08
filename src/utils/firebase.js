// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDeyMHARt3z8kfB_g1b8cpTE7lgBxQWBR4",
    authDomain: "bookandwatch-681c3.firebaseapp.com",
    projectId: "bookandwatch-681c3",
    storageBucket: "bookandwatch-681c3.appspot.com",
    messagingSenderId: "821066315839",
    appId: "1:821066315839:web:68ea1e8665cff71f5ae08a",
    measurementId: "G-QST79SE7Y4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();