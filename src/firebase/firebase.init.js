// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmpJu7cNozNwCBUzucy5sFDKa_tM8Ni9g",
    authDomain: "aunthcation.firebaseapp.com",
    projectId: "aunthcation",
    storageBucket: "aunthcation.appspot.com",
    messagingSenderId: "612054142621",
    appId: "1:612054142621:web:b36a50d47252128fe04e74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;