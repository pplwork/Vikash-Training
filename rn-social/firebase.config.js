import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { } from 'firebase/database';
import { } from 'firebase/app-check';
import { } from 'firebase/functions';
import { } from 'firebase/messaging';
import { } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCupgyKdQbCvzocnkgXMAVeeqZ79egyHnU",
  authDomain: "instagramcloneapi.firebaseapp.com",
  projectId: "instagramcloneapi",
  storageBucket: "instagramcloneapi.appspot.com",
  messagingSenderId: "812898478471",
  appId: "1:812898478471:web:fefad7b79c85b4aeab8b22",
  measurementId: "G-YNW8T4K6EB"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage= getStorage(app);
