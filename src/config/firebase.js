// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh7Gq5v_0gdJrNBsh-WdqT-D_WshfUoSc",
  authDomain: "react-contact-974c8.firebaseapp.com",
  projectId: "react-contact-974c8",
  storageBucket: "react-contact-974c8.appspot.com",
  messagingSenderId: "1028721687233",
  appId: "1:1028721687233:web:80850edc3c8555b5c67240"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);