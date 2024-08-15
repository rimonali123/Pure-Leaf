// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  Vite_apiKey: import.meta.env.apiKey,
  Vite_authDomain: import.meta.env.authDomain,
  Vite_projectId: import.meta.env.projectId,
  Vite_storageBucket: import.meta.env.storageBucket,
  Vite_messagingSenderId: import.meta.env.messagingSenderId,
  Vite_appId: import.meta.env.appId
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;