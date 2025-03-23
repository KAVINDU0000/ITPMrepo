import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./Navbar.css"; 
import { MdPets } from "react-icons/md";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
       <a href="/" className="logo"><MdPets /> Pet Connect</a> 
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li> 
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
