// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import "./App.css";
// import Ticker from "./Components/Tricker";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0);

  return (
  <Router>
    <Navbar/>
    {/* <Ticker/> */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About />} /> 
      <Route path="/Contact" element={<Contact />}/>
   </Routes>
   </Router>
  );
};

export default App;
