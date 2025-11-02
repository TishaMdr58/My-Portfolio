import React from "react";
import "./Hero.css";
import Marquee from "react-fast-marquee";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaFigma,
} from "react-icons/fa";

const skills = [
  { name: "HTML", icon: <FaHtml5 color="#fff" size={30} /> },
  { name: "CSS", icon: <FaCss3Alt color="#fff" size={30} /> },
  { name: "JavaScript", icon: <FaJsSquare color="#fff" size={30} /> },
  { name: "ReactJS", icon: <FaReact color="#fff" size={30} /> },
  { name: "Figma", icon: <FaFigma color="#fff" size={30} /> },
];

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>
          I’m Tisha <span className="glow">Manandhar</span>
        </h1>

        <p>
          Frontend Developer & Designer | Crafting Beautiful, User-Friendly
          Experiences
        </p>

        <div className="hero-skills-container">
          <Marquee gradient={false} speed={50} pauseOnHover={false}>
            {skills.map((skill, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "0 30px",
                  whiteSpace: "nowrap",
                  gap: "8px",
                }}
              >
                {skill.icon}
                <span style={{ color: "#fff", fontSize: "16px" }}>
                  {skill.name}
                </span>
              </div>
            ))}
          </Marquee>
        </div>

        <div className="heroBtns">
          <a
            href="https://docs.google.com/document/d/1SHLO-ujtQy23ZrtTdUMK5TNy1IbH3C5IW0j3gV0Pj6M/export?format=pdf
"

            download
            className="download-btn"
          >
            Download CV
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mdrtisha@gmail.com"
            download
            className="download-btn"
          >
            Contact me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
