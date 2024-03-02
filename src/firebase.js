import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_REACT_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_REACT_FIREBASE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_REACT_FIREBASE_PROJECTID,
    storageBucket: import.meta.env.VITE_REACT_FIREBASE_STORAGE,
    messagingSenderId: import.meta.env.VITE_REACT_FIREBASE_SENDERID,
    appId: import.meta.env.VITE_REACT_FIREBASE_APPID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const google = new GoogleAuthProvider()