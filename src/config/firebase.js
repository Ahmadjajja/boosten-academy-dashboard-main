// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyB9dzSFYgnuTx2GFM1br8CLF_QniKqhNB4",
  authDomain: "boosten-academy.firebaseapp.com",
  projectId: "boosten-academy",
  storageBucket: "boosten-academy.appspot.com",
  messagingSenderId: "846968168401",
  appId: "1:846968168401:web:01d37e20cba8517a658af0",
  measurementId: "G-FJQ884W3KT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
