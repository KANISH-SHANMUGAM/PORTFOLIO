import React, { useEffect, useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('experience');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: 'Data Science / Full Stack Developer - AI Generative Products',
      company: 'Cloobot Inc.',
      duration: 'Jun 2023 - Present',
      type: 'Full-time',
      location: 'Chennai, Tamil Nadu, India',
      description: 'Building cutting-edge AI generative products using Large Language Models (LLM) and modern web technologies. Developing end-to-end full stack applications that integrate AI capabilities for innovative user experiences.',
      technologies: ['React', 'Angular','TypeScript', 'JavaScript', 'Python', 'LLMs', 'PostgreSQL', 'Azure', 'Docker'],
      achievements: [
        'Developed AI-powered generative applications using LLM',
        'Built full stack solutions with cutting-edge AI integration',
        'Implemented scalable architectures for AI products',
        'Created innovative user interfaces for AI interactions'
      ]
    },
    {
      title: 'Data Science Intern',
      company: 'Data Science and Analytics Centre',
      duration: 'Jan 2022 - May 2023',
      type: 'Internship',
      location: 'Coimbatore, Tamil Nadu, India',
      description: 'Gained hands-on experience in data science methodologies, statistical analysis, and machine learning model development. Worked on real-world datasets and analytics projects.',
      technologies: ['Python', 'Machine Learning', 'Statistical Analysis', 'Data Visualization', 'Jupyter'],
      achievements: [
        'Completed comprehensive data science training program',
        'Worked on multiple analytics projects',
        'Developed statistical models and visualizations',
        'Gained expertise in data preprocessing and feature engineering'
      ]
    },
    {
      title: 'Data Analyst Intern',
      company: 'TCS ion',
      duration: 'Dec 2022',
      type: 'Internship',
      location: 'Remote',
      description: 'Textual Emotion Detection - Automated detection of different emotions from various textual comments and feedback using Machine Learning algorithms.',
      technologies: ['Python', 'Machine Learning', 'NLP', 'Scikit-learn'],
      achievements: [
        'Developed ML models for emotion classification',
        'Processed and analyzed large datasets',
        'Implemented automated emotion detection system'
      ]
    },
    {
      title: 'Data Visualization Intern',
      company: 'WE and DATA',
      duration: 'Dec 2021',
      type: 'Internship',
      location: 'Remote',
      description: 'Heart Disease Prediction - Created comprehensive data visualization dashboards using Power BI for healthcare analytics.',
      technologies: ['Power BI', 'Data Visualization', 'Healthcare Analytics'],
      achievements: [
        'Built interactive healthcare dashboards',
        'Analyzed patient data for disease prediction',
        'Created data-driven insights for medical decisions'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className={`experience-content ${isVisible ? 'visible' : ''}`}>
          <div className="experience-header">
            <h2 className="section-title">Work Experience</h2>
            <p className="section-subtitle">
              Professional journey and hands-on experience in AI/ML and Data Science
            </p>
          </div>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="timeline-marker">
                  <div className="marker-dot"></div>
                </div>
                <div className="timeline-content">
                  <div className="experience-card">
                    <div className="experience-header-card">
                      <h3 className="experience-title">{exp.title}</h3>
                      <span className="experience-type">{exp.type}</span>
                    </div>
                    <h4 className="company-name">{exp.company}</h4>
                    <p className="experience-duration">{exp.duration}</p>
                    {exp.location && <p className="experience-location">📍 {exp.location}</p>}
                    <p className="experience-description">{exp.description}</p>
                    
                    <div className="technologies-used">
                      <h5>Technologies Used:</h5>
                      <div className="tech-tags">
                        {exp.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="achievements">
                      <h5>Key Achievements:</h5>
                      <ul>
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="experience-cta">
            <p>Interested in my professional journey?</p>
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
