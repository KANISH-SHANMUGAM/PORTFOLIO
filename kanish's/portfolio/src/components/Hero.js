import React, { useEffect, useState } from 'react';
import './Hero.css';
import profileImage from '../assests/kanish.png';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const texts = [
    "Full Stack Developer",
    "AI/LLM Engineer", 
    "Generative AI Specialist",
    "Cutting-Edge Tech Expert"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3001);

    return () => clearInterval(interval);
  }, [texts.length]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Kanish S</span>
            </h1>
            <div className="hero-subtitle">
              <span className="typing-text">
                {texts[currentText]}
              </span>
              <span className="cursor">|</span>
            </div>
            <p className="hero-description">
              Full Stack Developer specializing in AI generative products using LLM and cutting-edge technology. 
              Building the future with intelligent applications and innovative solutions!
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={scrollToContact}
              >
                Get In Touch
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </button>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="image-container">
              <div className="profile-image">
                <img 
                  src={profileImage} 
                  alt="Kanish S" 
                  className="profile-photo"
                />
                <div className="floating-elements">
                  <div className="floating-icon">⚡</div>
                  <div className="floating-icon">🚀</div>
                  <div className="floating-icon">💡</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p>Scroll Down</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
