import React from "react";
import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";


const Contact = () => {
  const form = useRef();
  const navigateTo = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_hpiimr6", "template_hy3w2zr", form.current, {
        publicKey: "xv6JfeNxRJSbiVDnn",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  const submitform= () =>{
    navigateTo("/");
  } 

  return (
    <>
      <section className="contact">
        <div className="Contact-headings">
          <h5 className="Contact-greeting">Get In Touch</h5>
          <h1 className="Contact-title">Contact Me</h1>
        </div>
        <div className="contact-info">
          <h3 className="contact-details">
            <i class="fa-solid fa-phone"></i>  +91 8872737004{" "}
          </h3>
          <h3 className="contact-details">
            <a href="mailto:mrkohli01@gmail.com" target="_blank">
              <i class="fa-solid fa-envelope"></i>mrkohli01@gmail.com
            </a>
            
          </h3>
          <h3 className="contact-details">
            <a
              href="https://www.linkedin.com/in/govinda-0aa745215/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin"></i>Linkdin
            </a>
          </h3>
          <h3 className="contact-details">
           <a href="https://github.com/govindakohli"target="_blank"><i class="fa-brands fa-github"></i>GitHub</a>
          </h3>
        </div>
        <form ref={form} className="Contact-container" onSubmit={sendEmail}>
          <label></label>
          <input
            type="text"
            className="contact-name"
            placeholder="Enter Your Name"
            name="from_name"
          />
          <label></label>
          <input
            type="email"
            className="contact-Email"
            placeholder="Enter Your Email"
            name="from_name"
          />
          <label></label>
          <textarea
            name="message"
            className="contact-message"
            placeholder="Enter Your Message"
          />
          <input  type="submit"   className="send-btn" value="Send" onClick={submitform} />
         
        </form>
      </section>
    </>
  );
};

export default Contact;
