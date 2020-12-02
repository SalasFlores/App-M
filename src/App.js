import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Navbar from  './componentes/Layout/Navbar';
import  firebase from 'firebase';




const firebaseConfig = {
  apiKey: "AIzaSyCUrdzU8hOjFpZHV2y65M1q9-rzMRwNtt8",
  authDomain: "miapp-4a36b.firebaseapp.com",
  databaseURL: "https://miapp-4a36b.firebaseio.com",
  projectId: "miapp-4a36b",
  storageBucket: "miapp-4a36b.appspot.com",
  messagingSenderId: "843758393154",
  appId: "1:843758393154:web:06be5def7bd34366999adb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function App() {
  
  
 
  return (
    <div className="App">
      
    <Router>
        <div className="container-fluid">
         
          <Navbar/> 
           
          
          <Routes/>
         </div>
    
    </Router>
    </div>
  );
  }

export default App;
