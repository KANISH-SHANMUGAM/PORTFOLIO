// Environment configuration
const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

// API Configuration
export const API_CONFIG = {
  // Backend URL configuration
  BASE_URL: isDevelopment 
    ? 'http://localhost:5000' 
    : process.env.REACT_APP_API_URL || 'https://your-backend-url.herokuapp.com',
  
  // API Endpoints
  ENDPOINTS: {
    CONTACT: '/api/contact',
    HEALTH: '/api/health'
  },
  
  // Request timeout (in milliseconds)
  TIMEOUT: 10000,
  
  // Retry configuration
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000
};

// Frontend Configuration
export const FRONTEND_CONFIG = {
  // Site information
  SITE_NAME: process.env.REACT_APP_SITE_NAME || 'Kanish S - Portfolio',
  SITE_DESCRIPTION: process.env.REACT_APP_SITE_DESCRIPTION || 'Full Stack Developer specializing in AI generative products using LLM and cutting-edge technology',
  
  // Contact information
  CONTACT: {
    EMAIL: process.env.REACT_APP_CONTACT_EMAIL || 'kanishoffi@gmail.com',
    PHONE: process.env.REACT_APP_CONTACT_PHONE || '+91 63833 25633',
    LOCATION: process.env.REACT_APP_CONTACT_LOCATION || 'Tamil Nadu, India'
  },
  
  // Social links
  SOCIAL_LINKS: {
    GITHUB: process.env.REACT_APP_GITHUB_URL || 'https://github.com/KANISH-SHANMUGAM',
    LINKEDIN: process.env.REACT_APP_LINKEDIN_URL || 'https://www.linkedin.com/in/skanish',
    MEDIUM: process.env.REACT_APP_MEDIUM_URL || 'https://medium.com/@kanishblogs',
    PORTFOLIO: process.env.REACT_APP_PORTFOLIO_URL || 'https://kceai.com/KANISH'
  },
  
  // Animation settings
  ANIMATION: {
    DURATION: 0.8,
    DELAY: 0.2,
    EASING: 'ease'
  }
};

// API Helper Functions
export const getApiUrl = (endpoint) => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};

export const getContactApiUrl = () => {
  return getApiUrl(API_CONFIG.ENDPOINTS.CONTACT);
};

export const getHealthApiUrl = () => {
  return getApiUrl(API_CONFIG.ENDPOINTS.HEALTH);
};

// Environment helpers
export const isDev = isDevelopment;
export const isProd = isProduction;

// Default export for easy importing
export default {
  API_CONFIG,
  FRONTEND_CONFIG,
  getApiUrl,
  getContactApiUrl,
  getHealthApiUrl,
  isDev,
  isProd
};
