// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjIEX-Zm035Olr0Q0iZLvyKj8mk5yGrlM",
  authDomain: "psr-merch-inventory.firebaseapp.com",
  projectId: "psr-merch-inventory",
  storageBucket: "psr-merch-inventory.firebasestorage.app",
  messagingSenderId: "363015660562",
  appId: "1:363015660562:web:c5a0ce82e2d8d151b6a4cb",
  measurementId: "G-02TZ7WNVVT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);