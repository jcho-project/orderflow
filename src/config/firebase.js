import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmTxmVLPLn9MTJkl0j4Q2YpZCsKFJgEF0",
  authDomain: "orderflow-7aaed.firebaseapp.com",
  projectId: "orderflow-7aaed",
  storageBucket: "orderflow-7aaed.appspot.com",
  messagingSenderId: "730677271573",
  appId: "1:730677271573:web:463a99a8d06e936f40c21c",
  measurementId: "G-BMTFE4TKDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const db = getFirestore()

export { auth };