// src/components/Navbar.js

import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
        <h3 className="logo"> <i class="fa-brands fa-google"></i> </h3>
        </Link>
        <ul
          id="navbar-menu"
          className={`navbar-menu ${isOpen ? "active" : ""}`}
        >
          <li>
            <Link to="/Home" className="menu-item" onClick={closeMobileMenu}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/Project" className="menu-item" onClick={closeMobileMenu}>
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              to="/Skill"
              className="menu-item"
              onClick={closeMobileMenu}
            >
              SKILLS
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="menu-item" onClick={closeMobileMenu}>
              CONTACT
            </Link>
          </li>
          
        </ul>
        <div
          className={`navbar-toggle ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-expanded={isOpen ? "true" : "false"}
          aria-controls="navbar-menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
