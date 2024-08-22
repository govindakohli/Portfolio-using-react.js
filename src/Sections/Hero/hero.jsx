import React from "react";
import "./hero.css";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <>
    <section className="hero_section">
      {/* <div className="hero_profile_div">
        <img
          id="hero_profile"
          src="https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-310.jpg"
          alt="Profile picture of Govinda"
        />
      </div> */}
      <div>
        <p className="hero_greeting">Hello, I'm</p>
        <h1 className="hero_name">GOVINDA</h1>
        <h2 className="hero_profile">FULLSTACK WEB DEVELOPER</h2>
        <span>
        <a href="../../../public/CV.PDF" download>
          <button className="CV_button">Download CV</button>
        </a>
        <NavLink
            to="/Contact"
            style={({ isActive }) => {
              return { color: isActive ? "rgb(0, 0, 0)" : "" };
            }}
          >
            <button className="contactinfo_button"> Contact info</button>
          </NavLink>
      </span>
      <div className="hero_icons" >
        <a href="https://www.linkedin.com/in/govinda-0aa745215" target="_blank">
          <i  class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/govindakohli" target="_blank">
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
      </div>
    </section>
    </>
  );
};

export default Hero;
