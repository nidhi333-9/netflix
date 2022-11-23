// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxLHLB9srwFM7bufa_ty4YZoEMRleueE8",
  authDomain: "netflix-3cfe7.firebaseapp.com",
  projectId: "netflix-3cfe7",
  storageBucket: "netflix-3cfe7.appspot.com",
  messagingSenderId: "14824875126",
  appId: "1:14824875126:web:df963912831c3849e0ab57",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const auth = getAuth();

export default app;

export { auth, db };
