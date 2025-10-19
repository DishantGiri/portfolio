import React, { useState } from 'react'
import './Navbar.css'
import mail_icon from '../assets/icon.png'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div>
            <nav className='nav-bar'>
                {/* Logo or brand name can go here on the left */}
                <div style={{flex: 1}}></div>
                
                <ul className="desktop-menu">
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Projects</li>     
                    <li>Skills</li>        
                </ul>
                
                <button className='btn contact'>
                    <span>Contact Me</span>
                    <img src={mail_icon} alt="" className='button-icon'/>
                </button>

                {/* Hamburger Button - Right Side */}
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

            {/* Mobile Menu - Slides from right */}
            <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                <ul>
                    <li onClick={closeMenu}>Home</li>
                    <li onClick={closeMenu}>About Me</li>
                    <li onClick={closeMenu}>Projects</li>
                </ul>
                <button className='mobile-btn' onClick={closeMenu}>
                    Contact Me
                </button>
            </div>
        </div>
    )
}

export default Navbar