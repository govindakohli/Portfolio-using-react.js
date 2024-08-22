import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-nav">
          <NavLink
            to="./"
            className="Footer-home"
            style={({ isActive }) => {
              return { color: isActive ? "rgb(0, 0, 0)" : "" };
            }}
          >
            <li>HOME</li>
          </NavLink>
          <NavLink
            to="./Project"
            className="Footer-Project"
            style={({ isActive }) => {
              return { color: isActive ? "rgb(0, 0, 0)" : "" };
            }}
          >
            <li>PROJECT</li>
          </NavLink>
          <NavLink
            to="./Skill"
            className="Footer-Skill"
            style={({ isActive }) => {
              return { color: isActive ? "rgb(0, 0, 0)" : "" };
            }}
          >
            <li>SKILLS</li>
          </NavLink>
          <NavLink
            to="./Contact"
            className="Footer-Contact"
            style={({ isActive }) => {
              return { color: isActive ? "rgb(0, 0, 0)" : "" };
            }}
          >
            <li>CONTACT</li>
          </NavLink>
        </div>
        <h3 className="rights">
          Copyright <i class="fa-regular fa-copyright"></i> 2024 Govinda All Rights Reserved
        </h3>
      </div>
    </>
  );
};

export default Footer;
