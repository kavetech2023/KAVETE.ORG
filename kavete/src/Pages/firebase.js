// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyCcav9fkbRNMpvrF1s1RKuM6XJvCYHgGg4",

  authDomain: "kavetekevin-b196e.firebaseapp.com",

  projectId: "kavetekevin-b196e",

  storageBucket: "kavetekevin-b196e.appspot.com",

  messagingSenderId: "360987545221",

  appId: "1:360987545221:web:63f8d104ed18e88715e3ec",

  measurementId: "G-2GSHY7T9HL"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);