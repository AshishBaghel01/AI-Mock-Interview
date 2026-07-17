
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "aimockint-d9ead.firebaseapp.com",
  projectId: "aimockint-d9ead",
  storageBucket: "aimockint-d9ead.firebasestorage.app",
  messagingSenderId: "917464762730",
  appId: "1:917464762730:web:240452c1fe6529eefa3d13",
  measurementId: "G-W6ERRGP0H6"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}