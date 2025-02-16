
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARqGqUrbZOjZENxGV2qIyJ6fKjKLJA6TY",
  authDomain: "appacte-37bd4.firebaseapp.com",
  projectId: "appacte-37bd4",
  storageBucket: "appacte-37bd4.firebasestorage.app",
  messagingSenderId: "695833220263",
  appId: "1:695833220263:web:78da337a6be3e92b753782"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);