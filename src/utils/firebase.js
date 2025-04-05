// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN6U3SuZR63uvcDiYLLHu9e28OcUTzDW4",
  authDomain: "netflixgpt-by-abhishek.firebaseapp.com",
  projectId: "netflixgpt-by-abhishek",
  storageBucket: "netflixgpt-by-abhishek.firebasestorage.app",
  messagingSenderId: "398457526505",
  appId: "1:398457526505:web:1311b51620d5cd3ab1b878",
  measurementId: "G-QBQQJT6D26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();