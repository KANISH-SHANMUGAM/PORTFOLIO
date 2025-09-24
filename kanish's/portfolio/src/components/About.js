import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '9.05', label: 'CGPA (B.Tech AI & DS)' },
    { number: '5+', label: 'Certifications' },
    { number: '10+', label: 'Projects Completed' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className={`about-content ${isVisible ? 'visible' : ''}`}>
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Full Stack Developer passionate about building AI generative products with cutting-edge technology
            </p>
            
            <div className="about-description">
              <p>
                I'm a B.Tech graduate in Artificial Intelligence and Data Science from Karpagam College 
                of Engineering with a CGPA of 9.05. Currently working as a Full Stack Developer at Cloobot Inc., 
                where I build AI generative products using Large Language Models (LLM) and cutting-edge technology.
              </p>
              <p>
                With over 2 years of professional experience, I specialize in Full Stack Development, AI/LLM integration, 
                and building intelligent applications. I have hands-on experience developing end-to-end solutions 
                that leverage the power of generative AI, creating innovative products that push the boundaries 
                of what's possible with modern technology.
              </p>
            </div>

            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="about-cta">
              <button 
                className="btn btn-primary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Work Together
              </button>
            </div>
          </div>

          <div className="about-image">
            <div className="image-wrapper">
              <div className="main-image">
                <div className="image-placeholder">
                  <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
                    <rect width="400" height="400" rx="20" fill="url(#gradient)" />
                    <circle cx="200" cy="150" r="40" fill="white" />
                    <rect x="120" y="220" width="160" height="20" rx="10" fill="white" />
                    <rect x="140" y="260" width="120" height="15" rx="7.5" fill="white" />
                    <rect x="160" y="290" width="80" height="15" rx="7.5" fill="white" />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="floating-cards">
                <div className="floating-card card-1">
                  <div className="card-icon">💻</div>
                  <div className="card-text">Coding</div>
                </div>
                <div className="floating-card card-2">
                  <div className="card-icon">🎨</div>
                  <div className="card-text">Design</div>
                </div>
                <div className="floating-card card-3">
                  <div className="card-icon">🚀</div>
                  <div className="card-text">Innovation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
