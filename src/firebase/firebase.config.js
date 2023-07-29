// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,

// };

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc1Pvy2c0dP-CeF5336nZ_q8C5lUkc3l8",
  authDomain: "summerzone-de0a5.firebaseapp.com",
  projectId: "summerzone-de0a5",
  storageBucket: "summerzone-de0a5.appspot.com",
  messagingSenderId: "736814792573",
  appId: "1:736814792573:web:c288d97ad1aabd8cfe5614",
};

console.log(firebaseConfig);
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
