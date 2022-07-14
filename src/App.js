import './App.css';
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Basic from "./pages/BasicMap";



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container mt-2" style={{ marginTop: 40 }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/basic" element={<Basic />} />
          </Routes>
        </div>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
