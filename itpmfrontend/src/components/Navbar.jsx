import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdPets } from "react-icons/md";
import { FaPaw, FaBone, FaHome, FaInfoCircle, FaHandHoldingHeart, FaPhoneAlt } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <nav className="pet-navbar">
      <div className="pet-navbar-container">
        <Link to="/" className="pet-logo">
          <div className="pet-logo-icon">
            <MdPets />
          </div>
          <span className="pet-logo-text">Pet Connect</span>
          <FaPaw className="paw-icon" />
        </Link>
        
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <div className={`hamburger ${mobileMenuOpen ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <ul className={`pet-nav-links ${mobileMenuOpen ? "mobile-active" : ""}`}>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">
              <FaHome className="nav-icon" />
              <span>Home</span>
            </Link>
          </li>
          <li className={location.pathname === "/about" ? "active" : ""}>
            <Link to="/about">
              <FaInfoCircle className="nav-icon" />
              <span>About</span>
            </Link>
          </li>
          <li className={location.pathname === "/services" ? "active" : ""}>
            <Link to="/services">
              <FaHandHoldingHeart className="nav-icon" />
              <span>Services</span>
            </Link>
          </li>
          <li className={location.pathname === "/contact" ? "active" : ""}>
            <Link to="/contact">
              <FaPhoneAlt className="nav-icon" />
              <span>Contact</span>
            </Link>
          </li>
          <li className="book-appointment">
            <Link to="/appointment" className="appointment-btn">
              <FaBone className="btn-icon" />
              <span>Book Appointment</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;