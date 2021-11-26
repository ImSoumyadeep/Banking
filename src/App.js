
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';


import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';
import Login from './components/Login';
import Transfer from './components/Transfer';



function App() {
  return (
    <div className="App" style={{backgroundColor:"white"}}>


      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        } />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/logout" element={<Login />} />
      </Routes>
      </div>
  );
}

export default App;
