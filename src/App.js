import React from 'react';
import Home from './myComponets/Home';
import About from './myComponets/About';
import Education from './myComponets/Education';
import Projects from './myComponets/Projects';
import Contact from './myComponets/Contact';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './myComponets/Navbar';  // Navbar is outside the animated routes

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
