import "./TechSkills.css";
import React from "react";
import Skill from "./Skill";
import { ThemeContext } from "../../context/ThemeContext";

export default function TechSkills({ skills }) {

    const { mode } = React.useContext(ThemeContext);
  return (
    <div className={`${mode === "dark" ? "dark-skills" : ""}`}>
      <h1>Favorite Tech</h1>
      <div className={`skills`}>
        {skills.map((skill) => {
          return (
            <Skill
              title={skill.title}
              src={skill.src}
              animation={skill.animation}
            />
          );
        })}
      </div>
    </div>
  );
}
