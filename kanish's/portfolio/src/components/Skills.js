import React, { useEffect, useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'AI/LLM & Generative AI',
      skills: [
        { name: 'Python', level: 98, icon: '🐍' },
        { name: 'Large Language Models', level: 95, icon: '🤖' },
        { name: 'Generative AI', level: 92, icon: '✨' },
        { name: 'NLP', level: 90, icon: '💬' },
        { name: 'Machine Learning', level: 95, icon: '📊' },
        { name: 'Deep Learning', level: 88, icon: '🧠' }
      ]
    },
    {
      title: 'Data Visualization & Analytics',
      skills: [
        { name: 'Tableau', level: 92, icon: '📊' },
        { name: 'Power BI', level: 88, icon: '📈' },
        { name: 'Apache Hadoop', level: 25, icon: '🐘' },
        { name: 'Data Analysis', level: 95, icon: '🔍' },
      ]
    },
    {
      title: 'Full Stack Development',
      skills: [
        { name: 'React', level: 95, icon: '⚛️' },
        { name: 'JavaScript', level: 95, icon: '🔷' },
        { name: 'TypeScript', level: 90, icon: '🔷' },
        { name: 'HTML/CSS', level: 95, icon: '🌐' },
        { name: 'REST APIs', level: 92, icon: '🔌' }
      ]
    },
    {
      title: 'Development Tools',
      skills: [
        { name: 'VS Code & Cursor', level: 95, icon: '💻' },
        { name: 'GitHub', level: 92, icon: '🐙' },
        { name: 'Jupyter', level: 95, icon: '📓' },
        { name: 'Google Colab', level: 90, icon: '🔬' },
        { name: 'Postman', level: 85, icon: '🔍' },
        { name: 'DBeaver & DataGrip', level: 85, icon: '🐘' },
        { name: 'Docker', level: 80, icon: '🐳' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      skills: [
        { name: 'Azure', level: 75, icon: '🔵' },
        { name: 'CI/CD', level: 75, icon: '🔄' }
      ]
    },
    {
      title: 'Design & Collaboration',
      skills: [
        { name: 'Figma', level: 75, icon: '🎨' },
        { name: 'Jira', level: 90, icon: '💬' }
      ]
    }
  ];

  useEffect(() => {
    if (isVisible) {
      skillCategories.forEach((category, categoryIndex) => {
        category.skills.forEach((skill, skillIndex) => {
          setTimeout(() => {
            setAnimatedSkills(prev => ({
              ...prev,
              [`${categoryIndex}-${skillIndex}`]: true
            }));
          }, (categoryIndex * 200) + (skillIndex * 100));
        });
      });
    }
  }, [isVisible, skillCategories]);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className={`skills-content ${isVisible ? 'visible' : ''}`}>
          <div className="skills-header">
            <h2 className="section-title">Skills & Expertise</h2>
            <p className="section-subtitle">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="skill-category">
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-header">
                        <div className="skill-icon">{skill.icon}</div>
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">
                          {animatedSkills[`${categoryIndex}-${skillIndex}`] ? skill.level : 0}%
                        </span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{
                            width: animatedSkills[`${categoryIndex}-${skillIndex}`] ? `${skill.level}%` : '0%'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="skills-summary">
            <div className="summary-card">
              <h4>Why Choose Me?</h4>
              <ul>
                <li>✅ B.Tech in AI & Data Science (9.05 CGPA)</li>
                <li>✅ 5+ Professional Certifications</li>
                <li>✅ Hands-on ML/DL project experience</li>
                <li>✅ Strong data visualization skills</li>
                <li>✅ Full-stack development expertise</li>
                <li>✅ Passionate about AI innovation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
