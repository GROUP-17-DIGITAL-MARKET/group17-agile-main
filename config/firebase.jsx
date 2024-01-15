
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA15euD0yaJfLzvdRiXhw1gQzSrhJTmNeo",
  authDomain: "todo-c6a40.firebaseapp.com",
  projectId: "todo-c6a40",
  storageBucket: "todo-c6a40.appspot.com",
  messagingSenderId: "391751617564",
  appId: "1:391751617564:web:16694c60a8ef1bda2ea3d9"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };