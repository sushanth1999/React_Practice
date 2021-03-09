import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyA_n5koP5HmOX4qz9-chRJBBGKEn_-VhqI",
  authDomain: "cart-d21f2.firebaseapp.com",
  projectId: "cart-d21f2",
  storageBucket: "cart-d21f2.appspot.com",
  messagingSenderId: "946875641161",
  appId: "1:946875641161:web:7a5d9a8bf6a76435f13e98"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
