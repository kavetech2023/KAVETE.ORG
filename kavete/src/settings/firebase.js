// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHMacm46uf6bzphF8X0miNiu8xTC7Hr50",
  authDomain: "kavete-4c201.firebaseapp.com",
  projectId: "kavete-4c201",
  storageBucket: "kavete-4c201.appspot.com",
  messagingSenderId: "964263889686",
  appId: "1:964263889686:web:6b4dfe9bb5c6c0cf679e37",
  measurementId: "G-VZX1L24GPE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);