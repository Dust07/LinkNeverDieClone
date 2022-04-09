import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBFl5lTee0v-LFWp2PutdkYQPqUw1a-hUg",
    authDomain: "linkneverphai-database.firebaseapp.com",
    projectId: "linkneverphai-database",
    storageBucket: "linkneverphai-database.appspot.com",
    messagingSenderId: "164506985088",
    appId: "1:164506985088:web:353c700e6a76f7b92a3c65",
    measurementId: "G-TVYE18JQ16"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore(app);