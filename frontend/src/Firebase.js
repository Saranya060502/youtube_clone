import { initializeApp } from "firebase/app";
import { getStorage} from 'firebase/storage';
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "##",
  authDomain: "mer.firebaseapp.com",
  projectId: "mern5",
  storageBucket: "mern.com",
  messagingSenderId: "757150184874",
  appId: "%%"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)
export const db = getFirestore(app)


