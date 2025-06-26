// firebase.ts
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "YOur-API-Bhaiya",
  authDomain: "traffic-density-detection.firebaseapp.com",
  projectId: "traffic-density-detection",
  storageBucket: "traffic-density-detection.firebasestorage.app",
  messagingSenderId: "***********",
  appId: "*********************",
  measurementId: "G-9PYK728FJ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// ✅ Export Firestore DB
export const db = getFirestore(app)
