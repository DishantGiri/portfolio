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
          <li onClick={closeMenu}>
            <a href="#home">Home</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#about">About Me</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#skills">Skills</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#projects">Projects</a>
          </li>
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
