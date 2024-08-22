import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";


const Navbar = () => {
  const [isMobile, SetIsMobile] = useState(false);
  return (
    <nav className="Navbar">
      <NavLink to="./" className="home" >
        <h3 className="logo"> <i class="fa-brands fa-google"></i> </h3>
      </NavLink>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav_links"}
        onClick={() => SetIsMobile(false)}
      >
        <NavLink to="./" className="home" style={({ isActive }) => {
      return { color: isActive ? "rgb(0, 0, 0)" : "" };
    }}>
          <li>HOME</li>
        </NavLink>
        <NavLink to="./Project" className="Project" style={({ isActive }) => {
      return { color: isActive ? "rgb(0, 0, 0)" : "" };
    }}>
          <li>PROJECT</li>
        </NavLink>
        <NavLink to="./Skill"className="Skill" style={({ isActive }) => {
      return { color: isActive ? "rgb(0, 0, 0)" : "" };
    }}>
          <li>SKILLS</li>
        </NavLink>
        <NavLink to="./Contact" className="Contact" style={({ isActive }) => {
      return { color: isActive ? "rgb(0, 0, 0)" : "" };
    }}>
          <li>CONTACT</li>
        </NavLink>
      </ul>
      <button
        className="Mobile-menu-icon"
        onClick={() => SetIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}{" "}
      </button>
    </nav>
  );
};

export default Navbar;
