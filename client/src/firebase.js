/* eslint-disable no-unused-vars */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "geneforms-dee30.firebaseapp.com",
  projectId: "geneforms-dee30",
  storageBucket: "geneforms-dee30.firebasestorage.app",
  messagingSenderId: "1075155791996",
  appId: "1:1075155791996:web:59c5233f244b70821d19f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the Firebase app instance
export { app };
