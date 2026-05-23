import React from "react";
import "./AboutMe.css";
import profilePic from "../assets/designer+coder.png";
function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="about-text">
        <h1>About Me</h1>
        <p>
          I'm a creative professional with experience in graphic design and
          frontend development, blending visual creativity with technical
          expertise to craft engaging and impactful digital experiences. With a
          strong eye for detail and a passion for thoughtful design, I enjoy
          transforming ideas into compelling visuals and user-focused solutions.
          Skilled across industry-standard creative and design tools, including
          Photoshop, Illustrator, InDesign, Figma, Canva, and CapCut, alongside
          frontend technologies such as React.js, HTML, CSS, and JavaScript, I
          value both aesthetics and functionality in every project. Whether
          collaborating on creative initiatives, exploring design trends, or
          building meaningful digital experiences, I’m always inspired by
          opportunities to create work that leaves a lasting impression.
        </p>
      </div>
      <div className="about-image">
        <img src={profilePic} alt="Profile" />
      </div>
    </div>
  );
}

export default AboutMe;
