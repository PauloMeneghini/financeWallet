// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqKyV2aWob8ekAxNpod-2yNrdf0T9nK70",
  authDomain: "financewallet-54ccb.firebaseapp.com",
  projectId: "financewallet-54ccb",
  storageBucket: "financewallet-54ccb.appspot.com",
  messagingSenderId: "463102607975",
  appId: "1:463102607975:web:5282adb36c8cd58503cac2",
  measurementId: "G-4V5Y1S14F2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);