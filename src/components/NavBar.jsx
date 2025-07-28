import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";
import { useState, useEffect } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      if (isMenuOpen) {
        navbar.classList.add("open");
      } else {
        navbar.classList.remove("open");
      }
    }
  }, [isMenuOpen]);

  return (
    <div className="navbar-container">
      <button
        className="menu-button"
        onClick={() => setIsMenuOpen(true)}
        aria-label="Ouvrir le menu"
        aria-expanded={isMenuOpen}
        aria-controls="navbar-menu"
      >
        <Icon icons="bar-menu" />
      </button>
      <nav className="navbar">
        <ul className="navbar-menu">
          <li className="navbar-logo">
            <button
              className="close-button"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Fermer le menu"
            >
              <Icon icons="close" />
            </button>
          </li>
          <li className="navbar-home">
            <Link
              to="/"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              RJRT
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/Experience"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Expérience
            </Link>
          </li>

          <li className="navbar-item">
            <Link
              to="/Skill"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Compétence
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/Project"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Projets
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/Contact"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div
        className="overlay"
        aria-hidden="true"
        onClick={() => setIsMenuOpen(false)}
      />
    </div>
  );
}

export default Navbar;
