import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import './footer.css';

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer-content">
    
        <div className="footer-logo">
          <h3 className="brand-name">PetConnect</h3>
          <p className="description">Connecting pet owners with the best care and advice.</p>
        </div>

        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={30} style={{ color: 'white', margin: '0 10px' }} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitterSquare size={30} style={{ color: 'white', margin: '0 10px' }} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagramSquare size={30} style={{ color: 'white', margin: '0 10px' }} />
            </a>
          </div>
        </div>
      </div>
      
  
      <div className="footer-bottom">
        <p>&copy; 2025 PetConnect. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
