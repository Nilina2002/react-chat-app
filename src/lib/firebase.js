import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapp-99caa.firebaseapp.com",
  projectId: "chatapp-99caa",
  storageBucket: "chatapp-99caa.firebasestorage.app",
  messagingSenderId: "218747633238",
  appId: "1:218747633238:web:c50a86aa99142c259545f7",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
