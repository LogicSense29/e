// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5upT1CVXURjBjuRU3X1deHUUaxZD6nqg",
  authDomain: "e-alarm-b71e7.firebaseapp.com",
  projectId: "e-alarm-b71e7",
  storageBucket: "e-alarm-b71e7.appspot.com",
  messagingSenderId: "715583861202",
  appId: "1:715583861202:web:db5baae9c2d4b575e5980b",
  measurementId: "G-T8CL2QGLG8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
