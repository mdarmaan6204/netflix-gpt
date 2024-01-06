// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlXXi_o8x_I6dhcvXS7xteZ8mXhJIdyBo",
  authDomain: "netflixgpt-dd309.firebaseapp.com",
  projectId: "netflixgpt-dd309",
  storageBucket: "netflixgpt-dd309.appspot.com",
  messagingSenderId: "999756872954",
  appId: "1:999756872954:web:b8bd78c0662f9ae565dd43",
  measurementId: "G-ZFDPD6TMHM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();