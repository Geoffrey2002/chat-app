// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7IbFQGrHfSN4S0gHStI-8BZ3umfyFMJA",
  authDomain: "chat-app-tw.firebaseapp.com",
  projectId: "chat-app-tw",
  storageBucket: "chat-app-tw.appspot.com",
  messagingSenderId: "1006918637549",
  appId: "1:1006918637549:web:9b0cda8ddec5882c2a79e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
