import React from "react";
import "./About.css";
import DP from "../images/dp.jpg"

const About = () => {
  return (
    <>
      <section className="About-section">
        <div className="About-headings">
          <h5 className="About-greeting">Get To Know More</h5>
          <h1 className="About-tittle">About Me</h1>
        </div>
        <div className="About-container">
          <div>
            <img
              className="About-profile-image"
              src={DP}
              alt="Profile picture of Govinda"
            />
          </div>
          <div className="About-subContainer">
            <div className="Education">
              <h3 className="Education-tittle">Education</h3>
              <h5 className="Education-sub-tittle">
                Diploma In Computer Science Engineering
              </h5>
              <h5 className="Education-sub-tittle">
                Bachelor of Technology In Computer Science Engineering
              </h5>
            </div>
            <p className="About-bio">
              Hello! I'm Govinda, a passionate MERN stack developer with a
              recent BTech degree in Computer Science and Engineering,
              complemented by a diploma. As a fresher, I bring a strong academic
              foundation and practical experience gained from a 6-month
              internship focused on MERN stack development. During my
              internship, I honed my skills in: Frontend Development: Creating
              responsive and dynamic user interfaces using React.js, and
              managing state with tools like Redux. Backend Development:
              Building robust server-side applications with Node.js and
              Express.js, ensuring efficient API integrations and secure
              authentication systems. Database Management: Designing and
              maintaining scalable database schemas with MongoDB to support
              complex web applications. I am dedicated to leveraging my skills
              to build innovative and user-friendly web applications. My
              internship experience has provided me with hands-on knowledge and
              the confidence to tackle real-world projects. I am eager to join a
              dynamic team where I can contribute my fresh perspectives and
              continue to grow as a developer. Explore my projects and feel free
              to reach out if you’re interested in collaborating or learning
              more about my work.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
