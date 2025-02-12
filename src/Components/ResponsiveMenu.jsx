import React, { useState } from "react";
import "../ResponsiveMenu.css"; // Custom CSS for styling
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger and Close icons
import { Link } from "react-router-dom";

const ResponsiveMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="menu-container">
      {/* Hamburger Icon */}
      <div className="hamburger-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={24} color="white" /> : <FaBars size={24} />}
      </div>

      {/* Sidebar Menu */}
      <div className={`sidebar-menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
        <li>
            <Link to="/" onClick={toggleMenu}>Inicio</Link>
          </li>
          <li>
            <Link to="/business-card" onClick={toggleMenu}>Business Card</Link>
          </li>
          <li>
            <Link to="/buybooks" onClick={toggleMenu}>Libros</Link>
          </li>
          <li>
            <Link to="/webinar-1" onClick={toggleMenu}>Webinar</Link>
          </li>
        </ul>
      </div>

      {/* Main Navigation (visible on larger screens) */}
      <nav className="desktop-menu">
        <ul>
        <li>
            <Link to="/" >Inicio</Link>
          </li>
          <li>
            <Link to="/business-card" >Business Card</Link>
          </li>
          <li>
            <Link to="/buybooks" >Libros</Link>
          </li>
          <li>
            <Link to="/webinar-1" >Webinar</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ResponsiveMenu;
