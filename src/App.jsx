import React from "react";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
// import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <nav>
        <div className="logo">
          Tisha <span>Manandhar</span>
        </div>
        <ul className="nav-links">
                  <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        {/* <li><a href="#skills">Skills</a></li> */}
        </ul>
      </nav>

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="projects">
        <Projects />
      </section>

      {/* <section id="contact">
        <Contact />
      </section> */}
    </div>
  );
}

export default App;
