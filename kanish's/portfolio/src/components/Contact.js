import React, { useEffect, useState } from 'react';
import './Contact.css';
import { getContactApiUrl, FRONTEND_CONFIG } from '../constants/config';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    
    try {
      console.log('Sending contact form data:', formData);
      console.log('API URL:', getContactApiUrl());
      
      const response = await fetch(getContactApiUrl(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);
      
      const result = await response.json();
      console.log('Response data:', result);

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => {
          setSubmitStatus('');
        }, 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => {
          setSubmitStatus('');
        }, 5000);
      }
      
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: FRONTEND_CONFIG.CONTACT.EMAIL,
      link: `mailto:${FRONTEND_CONFIG.CONTACT.EMAIL}`
    },
    {
      icon: '📱',
      title: 'Phone',
      value: FRONTEND_CONFIG.CONTACT.PHONE,
      link: `tel:${FRONTEND_CONFIG.CONTACT.PHONE}`
    },
    {
      icon: '📍',
      title: 'Location',
      value: FRONTEND_CONFIG.CONTACT.LOCATION,
      link: '#'
    }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: FRONTEND_CONFIG.SOCIAL_LINKS.GITHUB },
    { name: 'LinkedIn', icon: '💼', url: FRONTEND_CONFIG.SOCIAL_LINKS.LINKEDIN },
    { name: 'Medium', icon: '📝', url: FRONTEND_CONFIG.SOCIAL_LINKS.MEDIUM },
    // { name: 'Portfolio', icon: '🌐', url: FRONTEND_CONFIG.SOCIAL_LINKS.PORTFOLIO }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className={`contact-content ${isVisible ? 'visible' : ''}`}>
          <div className="contact-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Ready to start your next project? Let's work together!
            </p>
          </div>

          <div className="contact-main">
            <div className="contact-info">
              <div className="info-content">
                <h3>Let's Connect</h3>
                <p>
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                
                <div className="direct-contact">
                  <a 
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${FRONTEND_CONFIG.CONTACT.EMAIL}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="direct-email-btn"
                  >
                    📧 Send Email via Gmail
                  </a>
                </div>

                <div className="contact-details">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="contact-item">
                      <div className="contact-icon">{info.icon}</div>
                      <div className="contact-text">
                        <h4>{info.title}</h4>
                        <a href={info.link}>{info.value}</a>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="availability-status">
                  <div className="status-indicator">
                    <div className="status-dot"></div>
                    <span>Available for new projects</span>
                  </div>
                  <p className="status-note">
                    I typically respond within 24 hours. For urgent matters, feel free to call directly.
                  </p>
                </div>

                <div className="quick-actions">
                  <h4>Quick Actions</h4>
                  <div className="action-buttons">
                    <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${FRONTEND_CONFIG.CONTACT.EMAIL}&su=Project Inquiry`} target="_blank" rel="noopener noreferrer" className="action-btn">
                      💼 Project Inquiry
                    </a>
                    <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${FRONTEND_CONFIG.CONTACT.EMAIL}&su=Collaboration`} target="_blank" rel="noopener noreferrer" className="action-btn">
                      🤝 Collaboration
                    </a>
                    <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${FRONTEND_CONFIG.CONTACT.EMAIL}&su=General Question`} target="_blank" rel="noopener noreferrer" className="action-btn">
                      ❓ General Question
                    </a>
                  </div>
                </div>

                <div className="social-links">
                  <h4>Follow Me</h4>
                  <div className="social-icons">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                      >
                        <span className="social-icon">{social.icon}</span>
                        <span className="social-name">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="contact-form">
              <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows="5"
                    required
                    className="form-textarea"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary form-submit"
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="submit-success">
                    ✅ Message sent successfully! I'll get back to you soon. You should also receive an auto-reply confirmation.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="submit-error">
                    ❌ Failed to send message. Please try again or contact me directly at kanishoffi@gmail.com
                  </div>
                )}
              </form>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
