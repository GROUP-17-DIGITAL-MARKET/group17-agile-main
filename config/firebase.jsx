import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";
import { getAuth, reauthenticateWithCredential as firebaseReauthenticateWithCredential, updatePassword as firebaseUpdatePassword } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCfpLfvWLWZY0nUhcNdqFoFVG-saFyqBtM",
  authDomain: "groceryhub-7f674.firebaseapp.com",
  projectId: "groceryhub-7f674",
  storageBucket: "groceryhub-7f674.appspot.com",
  messagingSenderId: "246328649521",
  appId: "1:246328649521:web:90a782df534640d704b210"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage
const authentication = getAuth(app, AsyncStorage);
const database = getFirestore();

// Export the relevant authentication functions
export { authentication, database, firebaseReauthenticateWithCredential, firebaseUpdatePassword };
