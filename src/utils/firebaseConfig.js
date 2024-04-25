// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnXb1o-VboxaiJDFKhM4IdF-Oe012dOKQ",
  authDomain: "jk1700-f7017.firebaseapp.com",
  projectId: "jk1700-f7017",
  storageBucket: "jk1700-f7017.appspot.com",
  messagingSenderId: "469463442465",
  appId: "1:469463442465:web:60bfbdac08d52d29032f60",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
