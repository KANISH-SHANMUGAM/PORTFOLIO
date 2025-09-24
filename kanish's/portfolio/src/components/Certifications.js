import React, { useEffect, useState } from 'react';
import './Certifications.css';

const Certifications = () => {
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

    const element = document.getElementById('certifications');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const certifications = [
    {
      title: 'Advanced Google Analytics',
      issuer: 'Google',
      date: 'Jan 2023',
      description: 'Comprehensive understanding of Google Analytics for data-driven decision making',
      icon: '📊',
      category: 'Analytics'
    },
    {
      title: 'Introduction to Machine Learning',
      issuer: 'Google',
      date: 'Sep 2022',
      description: 'Fundamental concepts and applications of machine learning algorithms',
      icon: '🤖',
      category: 'Machine Learning'
    },
    {
      title: 'Master Class on AI - Computer Vision',
      issuer: 'NPTEL',
      date: 'Sep 2022',
      description: 'Advanced computer vision techniques and deep learning applications',
      icon: '👁️',
      category: 'Computer Vision'
    },
    {
      title: 'Fundamentals of Accelerated Data Science',
      issuer: 'NVIDIA',
      date: 'May 2022',
      description: 'GPU-accelerated data science workflows and optimization techniques',
      icon: '⚡',
      category: 'Data Science'
    },
    {
      title: 'Fundamentals of Deep Learning',
      issuer: 'NVIDIA',
      date: 'Nov 2021',
      description: 'Deep learning fundamentals and neural network architectures',
      icon: '🧠',
      category: 'Deep Learning'
    }
  ];

  const specializations = [
    'Full Stack Development',
    'AI/LLM and Generative AI',
    'Data Science',
    'Machine Learning',
    'Deep Learning',
    'Data Visualization'
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <div className={`certifications-content ${isVisible ? 'visible' : ''}`}>
          <div className="certifications-header">
            <h2 className="section-title">Certifications & Specializations</h2>
            <p className="section-subtitle">
              Professional certifications and specialized skills in AI/ML and Data Science
            </p>
          </div>

          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="certification-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="cert-icon">{cert.icon}</div>
                <div className="cert-content">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-date">{cert.date}</p>
                  <p className="cert-description">{cert.description}</p>
                  <span className="cert-category">{cert.category}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="specializations">
            <h3>Specializations</h3>
            <div className="specialization-tags">
              {specializations.map((spec, index) => (
                <span key={index} className="specialization-tag">
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
