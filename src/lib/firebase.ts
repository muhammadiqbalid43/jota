// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAawdE_kq_iuZz0Ja8IuxyMtMZJI9XGTp8",
  authDomain: "jota-8c35e.firebaseapp.com",
  projectId: "jota-8c35e",
  storageBucket: "jota-8c35e.firebasestorage.app",
  messagingSenderId: "378847735182",
  appId: "1:378847735182:web:eb1b8380508ee3dd2c48df",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
