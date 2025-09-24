import React, { useEffect, useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'AI Generative Product Platform (Firm Product)',
      description: 'Full stack AI-powered platform using LLM for content generation, text analysis, and intelligent automation. Built with cutting-edge technology stack.',
      image: '🤖',
      technologies: ['React', 'JavaScript', 'python', 'LLMs', 'postgres', 'Azure'],
      category: 'ai',
      liveUrl: '#',
      githubUrl: 'https://github.com/KANISH-SHANMUGAM',
      featured: true
    },
    {
      id: 2,
      title: 'LLM-Powered Chat Application',
      description: 'Real-time chat application integrated with Large Language Models for intelligent conversations, content generation, and AI assistance.',
      image: '💬',
      technologies: ['React', 'JavaScript', 'python', 'LLMs', 'postgres', 'Azure'],
      category: 'ai',
      liveUrl: '#',
      // githubUrl: 'https://github.com/KANISH-SHANMUGAM',
      featured: true
    },
    {
      id: 3,
      title: 'Textual Emotion Detection',
      description: 'Automated detection of different emotions from various textual comments and feedback using Machine Learning algorithms. Built during TCS ion internship.',
      image: '😊',
      technologies: ['Python', 'Machine Learning', 'NLP', 'Scikit-learn'],
      category: 'ml',
      liveUrl: '#',
      // githubUrl: 'https://github.com/KANISH-SHANMUGAM',
      featured: false
    },
    {
      id: 4,
      title: 'Heart Disease Prediction',
      description: 'Data visualization project on heart disease prediction using Power BI. Created comprehensive dashboards with interactive insights and analytics.',
      image: '❤️',
      technologies: ['Power BI', 'Data Visualization', 'Healthcare Analytics'],
      category: 'data',
      liveUrl: '#',
      // githubUrl: 'https://github.com/KANISH-SHANMUGAM',
      featured: false
    },
    {
      id: 5,
      title: 'Next Word Prediction',
      description: 'Deep Learning project to predict the next word using Long Short Term Memory (LSTM) neural networks. Implemented advanced NLP techniques.',
      image: '🔤',
      technologies: ['Python', 'LSTM', 'Deep Learning', 'TensorFlow', 'Keras'],
      category: 'ml',
      liveUrl: '#',
      // githubUrl: 'https://github.com/KANISH-SHANMUGAM',
      featured: false
    },
    {
      id: 6,
      title: 'Renewable Energy Insights Dashboard',
      description: 'Comparative dashboard of renewable energy insights of India with hydro, wind and solar energies using world energy consumption data in Tableau.',
      image: '🌱',
      technologies: ['Tableau', 'Data Visualization', 'Energy Analytics', 'Big Data'],
      category: 'data',
      liveUrl: '#',
      // githubUrl: 'https://github.com/KANISH-SHANMUGAM',
      featured: false
    },
    {
      id: 7,
      title: 'Glass Classification ML Deployment',
      description: 'Deployed glass classification with Random Forest Machine Learning model using Django framework, providing precise glass type predictions.',
      image: '🔍',
      technologies: ['Django', 'Random Forest', 'Machine Learning', 'Python', 'Web Deployment'],
      category: 'ml',
      liveUrl: '#',
      // githubUrl: 'https://github.com/KANISH-SHANMUGAM',
      featured: false
    },
    {
      id: 8,
      title: 'Blog Doer - React Website',
      description: 'Blog maker website created using React and Node.js connected with SQL database. Full-stack application with user authentication and content management.',
      image: '📝',
      technologies: ['React', 'Node.js', 'SQL', 'JavaScript', 'CSS'],
      category: 'web',
      liveUrl: '#',
      // githubUrl: 'https://github.com/KANISH-SHANMUGAM',
      featured: false
    },
    {
      id: 9,
      title: 'Top-Mileage Vehicles Analysis',
      description: 'Analyzed fuel data for various insights like top 5 mileage vehicles using Apache Hadoop with mapper and reducer functions for big data processing.',
      image: '🚗',
      technologies: ['Apache Hadoop', 'Big Data', 'MapReduce', 'Data Analysis', 'Python'],
      category: 'data',
      liveUrl: '#',
      // githubUrl: 'https://github.com/KANISH-SHANMUGAM',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ai', name: 'AI/LLM Projects' },
    { id: 'ml', name: 'Machine Learning' },
    { id: 'data', name: 'Data Science' },
    { id: 'web', name: 'Web Development' }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className={`projects-content ${isVisible ? 'visible' : ''}`}>
          <div className="projects-header">
            <h2 className="section-title">My Projects</h2>
            <p className="section-subtitle">
              A showcase of my recent work and side projects
            </p>
          </div>

          <div className="projects-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={`project-card ${project.featured ? 'featured' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-image">
                  <div className="image-placeholder">
                    <span className="project-icon">{project.image}</span>
                  </div>
                  <div className="project-overlay">
                    <div className="project-links">
                      {/* <a 
                        href={project.liveUrl} 
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>🌐</span>
                        Live Demo
                      </a> */}
                      {/* <a 
                        href={project.githubUrl} 
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>📁</span>
                        Code
                      </a> */}
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="projects-cta">
            <p>Interested in seeing more of my work?</p>
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
