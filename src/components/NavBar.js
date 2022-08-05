import "./NavBar.css"
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

import moon from "../assets/icons/moon.svg";


export default function NavBar() {

  const { mode, changeMode } = useTheme();

  const toggleMode = () => {
    if (mode === "dark") {
        changeMode("light");
    }
    else {
      console.log("else")
        changeMode("dark");
    }
}
  
  return (
    <div className={`navbar ${mode === "light" ? "light-nav-theme" : "dark-nav-theme"}`}>
      <nav>
        <NavLink exact to="/" className="brand">
          <h1>Nate Duncan</h1>
        </NavLink>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/resume">Resume</NavLink>
        <div>
          <img 
          src={moon} 
          alt="dark mode icon" 
          className={`dark-mode-icon ${mode === "dark" ? "flip-dark" : "flip-light"}`}
          style={{filter: mode === 'dark' ? 'invert(50%)' : 'invert(0%)' }}
          onClick={toggleMode}/>
        </div>
      </nav>
    </div>
  );
}
