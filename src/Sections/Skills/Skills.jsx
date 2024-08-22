import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <>
      <section className="skill">
        <div className="heading">
          <h5 className="skills-intro">Explore My</h5>
          <h1 className="skill-heading">My Skills</h1>
        </div>
        <div className="skill-container">
          <div className="front-end">
            <h2 className="front-end-heading">Frontend Development</h2>
            <h3 className="frontend-skill"><i class="fa-solid fa-square-check"></i>HTML</h3>
            <h3 className="frontend-skill"><i class="fa-solid fa-square-check"></i>CSS</h3>
            <h3 className="frontend-skill"><i class="fa-solid fa-square-check"></i>JAVASCRIPT</h3>
            <h3 className="frontend-skill"><i class="fa-solid fa-square-check"></i>REACT.JS</h3>
          </div>
          <div className="back-end">
            <h2 className="Back-end-heading">Backend Development</h2>
            <h3 className="Backend-skill"><i class="fa-solid fa-square-check"></i>NORD.JS</h3>
            <h3 className="Backend-skill"><i class="fa-solid fa-square-check"></i>EXPRSS.JS</h3>
            <h3 className="Backend-skill"><i class="fa-solid fa-square-check"></i>MONGODB</h3>
            <h3 className="Backend-skill"><i class="fa-solid fa-square-check"></i>GIT & GITHUB</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
