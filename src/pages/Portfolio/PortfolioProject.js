import React from "react";
import {Link} from "react-router-dom";

export default function PortfolioProject({ title, description, img, link }) {
  return (
    <div className="project-container">
      <div className="project-left">
        <img src={img} alt="project image" className="project-image" />
      </div>
      <div className="project-right">
       {link && <a href={link} className="project-url" target="_blank">
          <h1 className="project-title">{title}</h1>
        </a>}
        {!link && <h1 className="project-title">{title}</h1>}
        <p>{description}</p>
      </div>
    </div>
  );
}
