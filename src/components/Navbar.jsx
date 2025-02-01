import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState("nav-menu"); //Manejo para el estado del menu
  const [icon, setIcon] = useState("nav-toggler"); // Manejo para el icono de hamburguesa

  const navToggle = () => {
    //Si el menú esta cerrado, lo abre agregando nav-active
    if (active === "nav-menu") {
      setActive("nav-menu nav-active");
    } else setActive("nav-menu");

    // Icon Toggler
    if (icon === "nav-toggler") {
      setIcon("nav-toggler toggle");
    } else setIcon("nav-toggler");
  };
  return (
    <nav className="nav">
      <Link to="/" className="nav-brand">
        Daniela Aguilar
      </Link>
      {/*Menú de navegación dinamico */}
      <ul className={active}>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/AboutMe" className="nav-link">
            About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Skills" className="nav-link">
            Skills
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Projects" className="nav-link">
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Experience" className="nav-link">
            Work Experience
          </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;