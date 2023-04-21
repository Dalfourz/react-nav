// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcBev58bYO2XDhkceGSI6M9stwG1T56_c",
  authDomain: "fir-practice-84590.firebaseapp.com",
  projectId: "fir-practice-84590",
  storageBucket: "fir-practice-84590.appspot.com",
  messagingSenderId: "220978508203",
  appId: "1:220978508203:web:b22c6881ef61b88291e2ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();