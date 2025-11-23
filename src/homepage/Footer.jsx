import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>TechQuizPro</h2>
        <p>Level up your coding skills – one quiz at a time!</p>
      </div>

      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/privacy">Privacy Policy</a>
      </div>

      <div className="footer-social">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TechQuizPro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
