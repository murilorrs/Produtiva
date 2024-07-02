import React from "react";
import { Link } from "react-router-dom";

import './nav.css'

const Nav = () => {
  return(
      <div className="navegacao">
        <Link className="titulo" to="/">PRODUTIVA</Link>
        <ul>
          <li>
            <Link className="links" to="/">HOME</Link>
          </li>
          <li>
            <Link className="links" to="/about">SOBRE</Link>
          </li>
          <li>
            <Link className="links" to="/methodology">METODOLOGIA</Link>
          </li>
          <li>
            <Link className="links" to="/solutions">SOLUÇÕES</Link>
          </li>
          <li>
            <Link className="links" to="/careers">TRABALHE CONOSCO</Link>
          </li>
          <li>
            <Link className="links" to="/contact">CONTATO</Link>
          </li>
        </ul>
    </div>
  )
}

export default Nav;