import React from "react";
import "./Project.css";

const Project = () => {
  return (
    <>
      <section className="project">
        <div className="project-headings">
          <h5 className="project-greeting">Browse My Recent</h5>
          <h1 className="project-title">Projects</h1>
        </div>
        <div className="projects-container">
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-img-heading">
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20240229162347/Hospital-Management-System.webp"
                alt="City Hospital Management System"
                className="project-image"
              />
              <h3 className="project-heading">
                City Hospital <br />
                Management System
              </h3>
            </div>
            <div className="project-details">
              <p className="project-about">
                <b>Description:</b> Developed a comprehensive, fully responsive
                City Hospital Management System using the MERN stack, featuring
                appointment booking, contact messaging, sign-in/sign-up
                functionality for both patients and admins, and an admin panel
                for managing doctors and appointments. <br />
                <b>Appointment Management:</b> Enabled users to book, view, and
                manage medical appointments efficiently. <br />
                <b>Sign-In/Sign-Up:</b> Implemented secure sign-in and sign-up
                functionality for both patients and admins. <br />
                <b>Admin Panel:</b> Designed an admin panel to add and manage
                doctors, admins, and appointment statuses (Accepted, Rejected,
                Pending). <br />
                <b>Responsive Design:</b> Ensured the system is fully
                responsive, offering a seamless experience across all devices.{" "}
                <br />
                <b>Login Credentials for Demonstration:</b> <br />
                <b>Patient:</b> Email: aman@gmail.com Password: amansing <br />
                <b>Admin:</b> Email: admin12345@gmail.com Password: Admin1692
              </p>
              <div className="project-buttons">
                <a
                  target="_blank"
                  href="https://github.com/govindakohli/Hospital_management_system"
                  rel="noreferrer"
                >
                  <button className="project-btn">GitHub</button>
                </a>
                <a
                  target="_blank"
                  href="https://cityhospital-mern.netlify.app/"
                  rel="noreferrer"
                >
                  <button className="project-btn">Live Demo</button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-img-heading">
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhdtpH2MUeAcT2WrMXIhUiDnZjFp0HCkeOAZXgV_Mkxk3Wq17vgeJdWU-AsIZpcoTG5K1yu9I4NT1RsZ4aq1gljojkUh9rWXQUyAv_YqWFlCc__fD5Ds1XfY5nmP7AD4NfiH5tB2vP_IPc/s1600/fire+up+the+grill+2.jpg"
                alt="Fireup the Grill"
                className="project-image"
              />
              <h3 className="project-heading">Fireup the Grill</h3>
            </div>
            <div className="project-details">
              <p className="project-about">
                <b>Description:</b> Developed a fully responsive restaurant and
                food e- commerce website named 'Fireup the Grill' using
                React.js, incorporating Redux for state management, allowing
                multiple restaurants to add and manage their food items <br />
                <b>Restaurant Management:</b> Enabled multiple restaurants to
                create profiles and add their food items for sale. <br />
                <b>Dynamic UI:</b> Designed an intuitive and interactive user
                interface for seamless browsing and ordering. <br />
                <b>State Management:</b> Implemented Redux for efficient state
                management across the application. <br />
                <b>Responsive Design:</b> Ensured the website is fully
                responsive, providing an optimal experience on all devices.{" "}
              </p>
              <div className="project-buttons">
                <a
                  target="_blank"
                  href="https://github.com/govindakohli/food_site_project"
                  rel="noreferrer"
                >
                  <button className="project-btn">GitHub</button>
                </a>
                <a
                  target="_blank"
                  href="https://fireupthegrillproject.netlify.app/"
                  rel="noreferrer"
                >
                  <button className="project-btn">Live Demo</button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <div className="project-img-heading">
              <img
                src="https://cdn.dribbble.com/users/5085145/screenshots/12385200/shot-cropped-1593254422246.png"
                alt="Desi Haveli"
                className="project-image"
              />
              <h3 className="project-heading">Desi Haveli</h3>
            </div>
            <div className="project-details">
              <p className="project-about">
                <b>Description:</b> Developed a fully responsive real estate
                website named 'Desi Haveli' with an attractive UI, showcasing
                property listings and providing a seamless browsing experience.{" "}
                <br />
                <b>Property Listings:</b> Designed a user-friendly interface for
                displaying real estate properties. <br />
                <b>Attractive UI:</b> Created an engaging and visually appealing
                design to enhance user experience. <br />
                <b>React.js Implementation:</b> Utilized React.js to build a
                dynamic and efficient frontend for optimal performance. <br />
                <b>Responsive Design:</b> Ensured the website is fully
                responsive, offering a consistent experience across all devices.
              </p>
              <div className="project-buttons">
                <a
                  target="_blank"
                  href="https://github.com/govindakohli/Real-Estate_desi_haveli"
                  rel="noreferrer"
                >
                  <button className="project-btn">GitHub</button>
                </a>
                <a
                  target="_blank"
                  href="https://real-estate-reactjs-project.netlify.app/"
                  rel="noreferrer"
                >
                  <button className="project-btn">Live Demo</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
