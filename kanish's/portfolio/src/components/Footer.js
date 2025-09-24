import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Quote at the top */}
          <div className="footer-quote-section">
            <blockquote className="footer-quote">
              "The best way to predict the future is to create it." — Peter Drucker
            </blockquote>
          </div>

          {/* Links and other content at the bottom */}
          <div className="footer-main">
            <div className="footer-links">
              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#hero">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#experience">Experience</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#certifications">Certifications</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Services</h4>
                <ul>
                  <li>AI/ML Solutions</li>
                  <li>Data Science</li>
                  <li>Web Development</li>
                  <li>Data Visualization</li>
                  <li>Deep Learning</li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Connect</h4>
                <ul>
                  <li><a href="mailto:kanishoffi@gmail.com">Email</a></li>
                  <li><a href="https://github.com/KANISH-SHANMUGAM" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                  <li><a href="https://www.linkedin.com/in/skanish" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                  <li><a href="https://medium.com/@kanishblogs" target="_blank" rel="noopener noreferrer">Medium</a></li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom">
              <div className="footer-copyright">
                <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
              </div>
              
              <div className="footer-actions">
                <button 
                  className="back-to-top"
                  onClick={scrollToTop}
                  title="Back to top"
                >
                  <span>↑</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
