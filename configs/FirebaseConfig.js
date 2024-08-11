// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3UG60HuKBc8BrOOJfaVQE11sVTSWXs8g",
  authDomain: "business-directory-5f385.firebaseapp.com",
  projectId: "business-directory-5f385",
  storageBucket: "business-directory-5f385.appspot.com",
  messagingSenderId: "919333924040",
  appId: "1:919333924040:web:e9003d43c26075b06b49fd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
