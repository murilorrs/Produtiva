// Routes.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import About from "./pages/About/About";
import Methodology from "./pages/Metodologia/Methodology";
import Solutions from "./pages/Solutions";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

const Rotas = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/methodology" element={<Methodology />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  );
};

export default Rotas;
