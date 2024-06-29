import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Methodology from "./pages/Methodology";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

const Rotas = () => {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/solutions" element = {<Solutions/>}/>
        <Route path="/methodology" element = {<Methodology/>}/>
        <Route path="/blog" element = {<Blog/>}/>
        <Route path="/careers" element = {<Careers/>}/>
        <Route path="/contact" element = {<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
