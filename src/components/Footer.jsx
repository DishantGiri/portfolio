import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <hr className="footer-line" />
      <p className="footer-text">© {new Date().getFullYear()} Dishant Giri — All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
