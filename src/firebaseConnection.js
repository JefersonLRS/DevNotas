import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyC7uNXrK4ULWhgpyzGHDh2YPq8u1vl2s04",
    authDomain: "curso-f7c17.firebaseapp.com",
    projectId: "curso-f7c17",
    storageBucket: "curso-f7c17.appspot.com",
    messagingSenderId: "131469180565",
    appId: "1:131469180565:web:c82692278e132e5673e59c",
    measurementId: "G-Y8YXL94BD8"
  };

  const firebaseapp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseapp);
  const auth = getAuth(firebaseapp)

  export { db, auth };