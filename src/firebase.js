import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const google = new GoogleAuthProvider()