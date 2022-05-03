// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRB2aT1FNmHkeK1C8oD0tMquBh9Z5X0UQ",
  authDomain: "assignment-11-ce30f.firebaseapp.com",
  projectId: "assignment-11-ce30f",
  storageBucket: "assignment-11-ce30f.appspot.com",
  messagingSenderId: "219903305956",
  appId: "1:219903305956:web:1cebeb4df8cf09d73a64f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;