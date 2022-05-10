// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFIGoVKr5SROJJziR6vbmT_OiRiOQkMpY",
  authDomain: "fresh-fruits-inventory.firebaseapp.com",
  projectId: "fresh-fruits-inventory",
  storageBucket: "fresh-fruits-inventory.appspot.com",
  messagingSenderId: "596306707238",
  appId: "1:596306707238:web:7c06706f626b39722237e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
