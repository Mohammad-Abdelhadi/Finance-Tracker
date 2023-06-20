// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZrl52sVCAAzg_BgROEpxz8AqMCeZSo7o",
  authDomain: "finance-tracker-4275b.firebaseapp.com",
  projectId: "finance-tracker-4275b",
  storageBucket: "finance-tracker-4275b.appspot.com",
  messagingSenderId: "609855766417",
  appId: "1:609855766417:web:97612798f4ff92d4586430",
  measurementId: "G-8ZS6LF9HD6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);