import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoSFxCOKwwMIcMp2wrbYu08z7d6FPYzl4",
  authDomain: "aiinterview-57f3f.firebaseapp.com",
  projectId: "aiinterview-57f3f",
  storageBucket: "aiinterview-57f3f.firebasestorage.app",
  messagingSenderId: "309419524176",
  appId: "1:309419524176:web:2e8fe5c0a6075e798b5155",
  measurementId: "G-6H0990ZF0D",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
