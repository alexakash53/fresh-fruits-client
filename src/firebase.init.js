// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKJ5QQ6eVue_Kv0n6QujblF34rxKTXkqk",
  authDomain: "alex-akash-photography.firebaseapp.com",
  projectId: "alex-akash-photography",
  storageBucket: "alex-akash-photography.appspot.com",
  messagingSenderId: "514813720283",
  appId: "1:514813720283:web:6946ec18eacddc132d3efe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
