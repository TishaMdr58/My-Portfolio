import React from "react";
import "./AboutMe.css";
import profilePic from "../assets/avatar.png";
function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="about-text">
        <h1>About Me</h1>
        <p>
          I'm a passionate frontend developer with expertise in React.js, HTML,
          CSS, and JavaScript. With a keen eye for detail and a love for
          crafting beautiful user interfaces, I strive to create seamless and
          engaging web experiences that captivate users. Whether you're looking
          to collaborate on a project, discuss frontend development trends, or
          simply share ideas, I'd love to connect. Feel free to reach out, and
          let's explore how we can create something remarkable together.
        </p>
      </div>
      <div className="about-image">
        <img src={profilePic} alt="Profile" />
      </div>
    </div>
  );
}

export default AboutMe;
