// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-398e9.firebaseapp.com",
  projectId: "mern-estate-398e9",
  storageBucket: "mern-estate-398e9.appspot.com",
  messagingSenderId: "205868915342",
  appId: "1:205868915342:web:336ca3c4100f29a25187df"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);