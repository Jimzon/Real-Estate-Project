// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-b1228.firebaseapp.com",
  projectId: "mern-real-estate-b1228",
  storageBucket: "mern-real-estate-b1228.appspot.com",
  messagingSenderId: "548295111172",
  appId: "1:548295111172:web:264d5e06ca653f0634fb51",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
