import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBR20TkTx2qn1De4ooMYzyTp0aYmiMPm9c",
  authDomain: "house-marketplace-app-b5626.firebaseapp.com",
  projectId: "house-marketplace-app-b5626",
  storageBucket: "house-marketplace-app-b5626.appspot.com",
  messagingSenderId: "804569295965",
  appId: "1:804569295965:web:2349e0dda8f8532fcfb1b4"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()