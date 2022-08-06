import "./NavBar.css";
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

import moon from "../assets/icons/moon.svg";
import linkedInLogo from "../assets/icons/linkedIn-icon.svg";
import githubLogo from "../assets/icons/github-icon.svg";

export default function NavBar() {
  const { mode, changeMode } = useTheme();

  const toggleMode = () => {
    if (mode === "dark") {
      changeMode("light");
    } else {
      console.log("else");
      changeMode("dark");
    }
  };

  return (
    <div
      className={`navbar ${
        mode === "light" ? "light-nav-theme" : "dark-nav-theme"
      }`}
    >
      <nav>
        <NavLink exact to="/" className="brand">
          <h1>Nate Duncan</h1>
        </NavLink>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/resume">Resume</NavLink>

        <div className="nav-icons">
          
            <img
              src={moon}
              alt="dark mode icon"
              className={`nav-icon dark-mode-icon ${
                mode === "dark" ? "flip-dark" : "flip-light"
              }`}
              onClick={toggleMode}
            />
          <a href="https://www.linkedin.com/in/nate-duncan/" target="_window">
            <img src={linkedInLogo} alt="linkedin icon" className="nav-icon" />
          </a>
          <a href="https://www.github.com/ntduncan/" target="_window">
            <img src={githubLogo} alt="linkedin icon" className="nav-icon" />
          </a>
        </div>
      </nav>
    </div>
  );
}
