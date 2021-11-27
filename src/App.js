
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




function App() {
  return (
    <div className="App" style={{backgroundColor:"white"}}>


      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home/:id" element={
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        } />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/logout" element={<Login />} />
        <Route element={<h4>Error Page</h4>} />
      </Routes>
      </div>
  );
}

export default App;
