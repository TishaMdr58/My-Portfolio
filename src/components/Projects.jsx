import React, { useState, useEffect } from "react";
import "./Projects.css";
import idash from "../assets/idash.jpg";
import clothstore from "../assets/fakeShop.png";
import donut from "../assets/donut.jpg";
import foodoa from "../assets/foodoa.jpg";
import fathersday from "../assets/fathersday.jpg";
import coffepamp from "../assets/coffepamp.png";
import nails from "../assets/nails.jpg"
import banner from "../assets/johnRaiBanner.jpg"

function Projects() {
  const [lightboxImg, setLightboxImg] = useState(null);

  const webProjects = [
    { imageUrl: idash, link: "https://recipe-finder-gilt-six.vercel.app/" },
    { imageUrl: clothstore, link: "https://syvar-shop.vercel.app/" },
    {imageUrl: nails, link: "https://tishastouch.vercel.app/" },
  ];

  const figmaProjects = [
    { imageUrl: donut, link: "https://www.figma.com/proto/0AwUICgnZwbrwQBPlwib0q/Donuteria?page-id=0%3A1&node-id=1-19&starting-point-node-id=1%3A19&scaling=scale-down-width&content-scaling=fixed&hide-ui=1&t=3y4Bp6L42dS9EV4w-8" },
    { imageUrl: foodoa, link: "https://www.figma.com/proto/RkXt9KivKinXlQs7zdYklf/Food-app-Plated~?page-id=0%3A1&node-id=1-321&p=f&viewport=120%2C145%2C0.31&t=NIhlB3IuwYKIzqp0-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A321" },
  ];

  const photoshopDesigns = [
    { imageUrl: fathersday },
    { imageUrl: coffepamp },
    { imageUrl: banner },
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
        <h2>Visual Designs</h2>
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
