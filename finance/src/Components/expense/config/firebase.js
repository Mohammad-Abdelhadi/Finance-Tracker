// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// google sign in fast
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// what we need to import from fire base
import {  getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAnsZTEs2WmdvgwgwxXf1lzwvrUA_8f63Q",
  authDomain: "finance-project-4fade.firebaseapp.com",
  databaseURL: "https://finance-project-4fade-default-rtdb.firebaseio.com",
  projectId: "finance-project-4fade",
  storageBucket: "finance-project-4fade.appspot.com",
  messagingSenderId: "645390668992",
  appId: "1:645390668992:web:de834261d797a09dc6c925"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
