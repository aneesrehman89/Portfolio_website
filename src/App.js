import React from 'react';
import Intro from './myComponets/Intro';
import About from './myComponets/About';
import MyResume from './myComponets/MyResume';
import Portfolio from './myComponets/Portfolio';
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
