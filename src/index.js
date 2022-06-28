import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

//firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXrgChCa2LY5co2KM8y6vJ3yvTqVpDL-U",
  authDomain: "ecommerce-coderhouse-636ee.firebaseapp.com",
  projectId: "ecommerce-coderhouse-636ee",
  storageBucket: "ecommerce-coderhouse-636ee.appspot.com",
  messagingSenderId: "424778111138",
  appId: "1:424778111138:web:2ee89263760557b7221ffb"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
