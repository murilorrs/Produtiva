import React from "react";
import { Link } from "react-router-dom";

import './nav.css'

const Nav = () => {
  return(
      <div className="navegacao">
        <h1 className="teste">PRODUTIVA</h1>
        <ul>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/solutions">Solulções</Link>
          </li>
          <li>
            <Link to="/methodology">Metodologia</Link>
          </li>
          <li>
            <Link to="/careers">Trabalhe Conosco</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
    </div>
  )
}

export default Nav;