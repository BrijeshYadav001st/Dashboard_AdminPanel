import React from "react";
import Home from "./Components/Home/Home";
import AboutUs from './Components/AboutUs/AboutUs'
import ContactUs from './Components/ContactUs/ContactUs';
import Pricing from "./Components/Pricing/Pricing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/pricing" element={<Pricing />} />
    </Routes>
  </BrowserRouter>

      );
  }
export default App;