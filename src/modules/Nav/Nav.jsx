import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./nav.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`navegacao ${menuOpen ? "menu-open" : ""}`}>
      <Link className="titulo" to="/">
        PRODUTIVA
      </Link>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={menuOpen ? "show-menu" : ""}>
        <li>
          <Link className="links" to="/">
            HOME
          </Link>
        </li>
        <li>
          <Link className="links" to="/about">
            SOBRE
          </Link>
        </li>
        <li>
          <Link className="links" to="/methodology">
            METODOLOGIA
          </Link>
        </li>
        <li>
          <Link className="links" to="/contact">
            CONTATO
          </Link>
        </li>
        <li>
          <Link className="links" to="/careers">
            TRABALHE CONOSCO
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
