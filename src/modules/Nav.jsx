import React from "react";
import { Link } from "react-router-dom";

import './nav.css'

const Nav = () => {
  return(
      <div className="navegacao">
        <h1 className="teste">PRODUTIVA</h1>
        <ul>
          <li>
            <p>Inicio</p>
          </li>
          <li>
            <p>Sobre nós</p>
          </li>
          <li>
            <p>Soluções</p>
          </li>
          <li>
            <p>Metodologia</p>
          </li>
          <li>
            <p>blog</p>
          </li>
          <li>
            <p>Trabalhe Conosco</p>
          </li>
          <li>
            <p>Contato</p>
          </li>
        </ul>
    </div>
  )
}

export default Nav;