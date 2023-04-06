import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCCVYunUZdBSmSkZBDoMLAjjnvJcEiVomg",
    authDomain: "task-one-319bb.firebaseapp.com",
    projectId: "task-one-319bb",
    storageBucket: "task-one-319bb.appspot.com",
    messagingSenderId: "980855792462",
    appId: "1:980855792462:web:89c94d7c7134fa6ed9741f",
    measurementId: "G-XFD7Z9P40W"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);