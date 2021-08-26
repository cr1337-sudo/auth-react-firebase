import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBt_3UynAlN8DyofFWb7kKWdJ6BXRFfGks",
  authDomain: "react-aaba8.firebaseapp.com",
  projectId: "react-aaba8",
  storageBucket: "react-aaba8.appspot.com",
  messagingSenderId: "1024308455914",
  appId: "1:1024308455914:web:e1d102de7b896f3bb2ea93",
};

const firebaseApp = initializeApp(firebaseConfig)

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
