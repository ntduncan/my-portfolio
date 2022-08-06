import "./Skill.css";
import React from "react";

export default function Skill({ title, src, animation }) {
  return (
    <div key={title} className="skill">
      <img src={src} alt={title} className={animation}/>
      <p className="skill-title">{title}</p>
    </div>
  );
}
