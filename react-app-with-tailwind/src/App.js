import React from 'react';
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import './App.css';

function App() {
  return (
    <div className="container mx-auto bg-gray-200 rounded-2xl shadow-2xl shadow-[#d7841e] border p-8 m-10">
      <p className="text-5xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>
      <p className="text-regal-blue text-lg">
        React and Tailwind CSS in action
      </p>
      <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="about" element={ <About/> } />
            <Route path="contact" element={ <Contact/> } />          
      </Routes>
    </div>
  );
}
export default App;
