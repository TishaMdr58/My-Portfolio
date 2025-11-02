import React, { useState, useEffect } from "react";
import "./Projects.css";
import idash from "../assets/idash.jpg";
import clothstore from "../assets/fakeShop.png";
import donut from "../assets/donut.jpg";
import foodoa from "../assets/foodoa.jpg";
import fathersday from "../assets/fathersday.jpg";
import coffepamp from "../assets/coffepamp.png";
import nails from "../assets/nails.jpg"

function Projects() {
  const [lightboxImg, setLightboxImg] = useState(null);

  const webProjects = [
    { imageUrl: idash, link: "https://recipe-finder-gilt-six.vercel.app/" },
    { imageUrl: clothstore, link: "https://syvar-shop.vercel.app/" },
    {imageUrl: nails, link: "#" },
  ];

  const figmaProjects = [
    { imageUrl: donut, link: "#" },
    { imageUrl: foodoa, link: "#" },
  ];

  const photoshopDesigns = [
    { imageUrl: fathersday },
    { imageUrl: coffepamp },
  ];


  useEffect(() => {
    if (lightboxImg) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [lightboxImg]);

  return (
    <div className="projects">
      <h1>Projects</h1>

      {/* Web Projects */}
        <div className="webProjects">
          <h2>Web Projects</h2>
        <div className="project-list">
          {webProjects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <img
                src={p.imageUrl}
                alt={`Web Project ${i + 1}`}
                className="project-image"
              />
            </a>
          ))}
        </div>                
        </div>

      {/* Figma Designs */}
      <div className="FigmaDesigns">
        <h2>Figma Designs</h2>
        <div className="project-list">
          {figmaProjects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <img
                src={p.imageUrl}
                alt={`Figma Design ${i + 1}`}
                className="project-image"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Photoshop & Canva Designs */}
      <div className="Designs">
        <h2>Photoshop & Canva Designs</h2>
        <div className="project-list">
          {photoshopDesigns.map((p, i) => (
            <div
              key={i}
              className="design-item"
              onClick={() => setLightboxImg(p.imageUrl)}
            >
              <img
                src={p.imageUrl}
                alt={`Design ${i + 1}`}
                className="design-image"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div className="lightbox" onClick={() => setLightboxImg(null)}>
          <img src={lightboxImg} alt="Full view" className="lightbox-img" />
        </div>
      )}
    </div>
  );
}

export default Projects;
