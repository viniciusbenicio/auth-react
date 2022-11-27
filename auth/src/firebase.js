import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBOSRe4IdG181hQ8kZrr8aJMGjs9OkeaEE",
  authDomain: "auth-4c6f7.firebaseapp.com",
  projectId: "auth-4c6f7",
  storageBucket: "auth-4c6f7.appspot.com",
  messagingSenderId: "213577674950",
  appId: "1:213577674950:web:db928e3d7db238c41727c7"
};

export const app = initializeApp(firebaseConfig);