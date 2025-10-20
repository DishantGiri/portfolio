import React, { useState } from 'react';
import './Navbar.css';
import mail_icon from '../assets/icon.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='a-tag'>
      <nav className="nav-bar">
        {/* Left spacer / Logo */}
        <div style={{ flex: 1 }}></div>

        {/* Desktop Menu */}
        <ul className="desktop-menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>

        {/* Contact Button */}
        <a href="#contact">
          <button className="btn contact">
            <span>Contact Me</span>
            <img src={mail_icon} alt="" className="button-icon" />
          </button>
        </a>

        {/* Hamburger Button - Mobile */}
        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <a href="#home"><li onClick={closeMenu}>Home</li></a>
          <a href="#about"><li onClick={closeMenu}>About Me</li></a>
          <a href="#skills"><li onClick={closeMenu}>Skills</li></a>
          <a href=""><li onClick={closeMenu}>Projects</li></a>
        </ul>
        <a href="#contact">
        <button className="mobile-btn" onClick={closeMenu}>
          Contact Me
        </button>
        </a>

      </div>
    </div>
  );
};

export default Navbar;
