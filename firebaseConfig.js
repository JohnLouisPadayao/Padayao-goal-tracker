
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAxQEtgaKozr6yhWoqXOgMR8SHfM98MO0I",
  authDomain: "goalproject-p.firebaseapp.com",
  projectId: "goalproject-p",
  storageBucket: "goalproject-p.firebasestorage.app",
  messagingSenderId: "756337057813",
  appId: "1:756337057813:web:18a064ffe61900d70eee1c"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)