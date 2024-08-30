import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "gaofirba.firebaseapp.com",
  projectId: "gaofirba",
  storageBucket: "gaofirba.appspot.com",
  messagingSenderId: "1007303402707",
  appId: "1:1007303402707:web:254b7391ecf6adcaf2e026"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
