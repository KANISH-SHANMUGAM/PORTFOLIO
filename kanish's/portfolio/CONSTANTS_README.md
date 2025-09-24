# Constants Configuration System

This document explains the centralized constants system for managing URLs, configuration, and environment variables across the frontend and backend.

## 📁 File Structure

```
portfolio/
├── src/
│   └── constants/
│       └── config.js          # Frontend constants
├── backend/
│   └── constants/
│       └── config.js          # Backend constants
├── env.example                # Frontend environment variables
├── backend/env.example        # Backend environment variables
└── CONSTANTS_README.md        # This file
```

## 🎯 Purpose

The constants system provides:
- **Centralized configuration** management
- **Environment-specific** URL handling
- **Consistent** API endpoints across frontend/backend
- **Easy deployment** configuration
- **Type safety** and validation
- **Maintainable** code structure

## 🚀 Frontend Constants (`src/constants/config.js`)

### API Configuration
```javascript
export const API_CONFIG = {
  BASE_URL: isDevelopment 
    ? 'http://localhost:5000' 
    : process.env.REACT_APP_API_URL || 'https://your-backend-url.herokuapp.com',
  
  ENDPOINTS: {
    CONTACT: '/api/contact',
    HEALTH: '/api/health'
  },
  
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000
};
```

### Frontend Configuration
```javascript
export const FRONTEND_CONFIG = {
  SITE_NAME: process.env.REACT_APP_SITE_NAME || 'Kanish S - Portfolio',
  CONTACT: {
    EMAIL: process.env.REACT_APP_CONTACT_EMAIL || 'kanishoffi@gmail.com',
    PHONE: process.env.REACT_APP_CONTACT_PHONE || '+91 63833 25633',
    LOCATION: process.env.REACT_APP_CONTACT_LOCATION || 'Tamil Nadu, India'
  },
  SOCIAL_LINKS: {
    GITHUB: process.env.REACT_APP_GITHUB_URL || 'https://github.com/KANISH-SHANMUGAM',
    LINKEDIN: process.env.REACT_APP_LINKEDIN_URL || 'https://www.linkedin.com/in/skanish',
    // ... more social links
  }
};
```

### Helper Functions
```javascript
export const getApiUrl = (endpoint) => `${API_CONFIG.BASE_URL}${endpoint}`;
export const getContactApiUrl = () => getApiUrl(API_CONFIG.ENDPOINTS.CONTACT);
export const getHealthApiUrl = () => getApiUrl(API_CONFIG.ENDPOINTS.HEALTH);
```

## 🔧 Backend Constants (`backend/constants/config.js`)

### Server Configuration
```javascript
export const SERVER_CONFIG = {
  PORT: process.env.PORT || 5000,
  CORS: {
    ORIGIN: process.env.FRONTEND_URL || 'http://localhost:3001',
    CREDENTIALS: true
  },
  RATE_LIMIT: {
    WINDOW_MS: 15 * 60 * 1000,
    MAX_REQUESTS: 5,
    MESSAGE: 'Too many contact form submissions, please try again later.'
  }
};
```

### Email Configuration
```javascript
export const EMAIL_CONFIG = {
  SERVICE: 'gmail',
  USER: process.env.EMAIL_USER,
  PASS: process.env.EMAIL_PASS,
  CONTACT_EMAIL: process.env.CONTACT_EMAIL || 'kanishoffi@gmail.com',
  TEMPLATES: {
    CONTACT_SUBJECT: 'Portfolio Contact: {subject}',
    AUTO_REPLY_SUBJECT: 'Thank you for contacting Kanish S',
    CONTACT_HTML: (name, email, subject, message) => `...`,
    AUTO_REPLY_HTML: (name, subject, message) => `...`
  }
};
```

### API Messages
```javascript
export const API_MESSAGES = {
  SUCCESS: {
    CONTACT_SENT: 'Message sent successfully! I\'ll get back to you soon.',
    HEALTH_CHECK: 'Portfolio backend is running'
  },
  ERROR: {
    VALIDATION: {
      REQUIRED_FIELDS: 'All fields are required',
      INVALID_EMAIL: 'Please provide a valid email address'
    },
    SERVER: {
      EMAIL_FAILED: 'Failed to send message. Please try again later...',
      INTERNAL_ERROR: 'Internal server error',
      ENDPOINT_NOT_FOUND: 'Endpoint not found'
    }
  }
};
```

## 🌍 Environment Variables

### Frontend Environment (`env.example`)
```env
# API Configuration
REACT_APP_API_URL=https://your-backend-url.herokuapp.com

# Site Configuration
REACT_APP_SITE_NAME=Kanish S - Portfolio
REACT_APP_SITE_DESCRIPTION=Full Stack Developer specializing in AI generative products

# Contact Information
REACT_APP_CONTACT_EMAIL=kanishoffi@gmail.com
REACT_APP_CONTACT_PHONE=+91 63833 25633
REACT_APP_CONTACT_LOCATION=Tamil Nadu, India

# Social Links
REACT_APP_GITHUB_URL=https://github.com/KANISH-SHANMUGAM
REACT_APP_LINKEDIN_URL=https://www.linkedin.com/in/skanish
REACT_APP_MEDIUM_URL=https://medium.com/@kanishblogs
REACT_APP_PORTFOLIO_URL=https://kceai.com/KANISH
```

### Backend Environment (`backend/env.example`)
```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CONTACT_EMAIL=kanishoffi@gmail.com

# Server Configuration
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

## 📖 Usage Examples

### Frontend Usage
```javascript
// Import constants
import { getContactApiUrl, FRONTEND_CONFIG } from '../constants/config';

// Use in API calls
const response = await fetch(getContactApiUrl(), {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});

// Use in components
const contactEmail = FRONTEND_CONFIG.CONTACT.EMAIL;
const githubUrl = FRONTEND_CONFIG.SOCIAL_LINKS.GITHUB;
```

### Backend Usage
```javascript
// Import constants
const { SERVER_CONFIG, EMAIL_CONFIG, API_MESSAGES } = require('./constants/config');

// Use in server setup
app.use(cors({
  origin: SERVER_CONFIG.CORS.ORIGIN,
  credentials: SERVER_CONFIG.CORS.CREDENTIALS
}));

// Use in email sending
const mailOptions = {
  from: EMAIL_CONFIG.USER,
  to: EMAIL_CONFIG.CONTACT_EMAIL,
  subject: EMAIL_CONFIG.TEMPLATES.CONTACT_SUBJECT.replace('{subject}', subject),
  html: EMAIL_CONFIG.TEMPLATES.CONTACT_HTML(name, email, subject, message)
};

// Use in responses
res.json({
  success: true,
  message: API_MESSAGES.SUCCESS.CONTACT_SENT
});
```

## 🔄 Environment Switching

### Development
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`
- Uses local environment variables

### Production
- Frontend: `https://your-domain.com`
- Backend: `https://your-backend-url.herokuapp.com`
- Uses production environment variables

### Staging
- Frontend: `https://staging.your-domain.com`
- Backend: `https://staging-backend.herokuapp.com`
- Uses staging environment variables

## 🚀 Deployment Configuration

### Heroku Frontend
```bash
# Set environment variables
heroku config:set REACT_APP_API_URL=https://your-backend-app.herokuapp.com
heroku config:set REACT_APP_SITE_NAME="Kanish S - Portfolio"
heroku config:set REACT_APP_CONTACT_EMAIL=kanishoffi@gmail.com
```

### Heroku Backend
```bash
# Set environment variables
heroku config:set EMAIL_USER=your-email@gmail.com
heroku config:set EMAIL_PASS=your-app-password
heroku config:set CONTACT_EMAIL=kanishoffi@gmail.com
heroku config:set FRONTEND_URL=https://your-frontend-app.herokuapp.com
```

### Vercel Frontend
```bash
# Set environment variables in Vercel dashboard
REACT_APP_API_URL=https://your-backend-url.railway.app
REACT_APP_SITE_NAME=Kanish S - Portfolio
REACT_APP_CONTACT_EMAIL=kanishoffi@gmail.com
```

### Railway Backend
```bash
# Set environment variables in Railway dashboard
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CONTACT_EMAIL=kanishoffi@gmail.com
FRONTEND_URL=https://your-frontend.vercel.app
```

## 🔧 Configuration Management

### Adding New Constants
1. **Frontend**: Add to `src/constants/config.js`
2. **Backend**: Add to `backend/constants/config.js`
3. **Environment**: Add to respective `env.example` files
4. **Documentation**: Update this README

### Modifying URLs
1. **Development**: Update constants files
2. **Production**: Update environment variables
3. **Deployment**: Update hosting platform config

### Adding New Endpoints
1. Add to `API_CONFIG.ENDPOINTS`
2. Create helper function in constants
3. Update frontend usage
4. Update backend routes

## 🛡️ Security Considerations

### Environment Variables
- Never commit `.env` files
- Use secure environment variable storage
- Rotate API keys regularly
- Use different values for different environments

### URL Validation
- Validate URLs in constants
- Use HTTPS in production
- Implement CORS properly
- Validate environment variables

## 🐛 Troubleshooting

### Common Issues
1. **CORS errors**: Check `FRONTEND_URL` in backend
2. **API not found**: Verify `REACT_APP_API_URL` in frontend
3. **Environment variables not loading**: Check `.env` file format
4. **URLs not updating**: Restart development servers

### Debug Mode
```javascript
// Add to constants for debugging
console.log('API Base URL:', API_CONFIG.BASE_URL);
console.log('Frontend URL:', SERVER_CONFIG.CORS.ORIGIN);
console.log('Environment:', process.env.NODE_ENV);
```

## 📋 Best Practices

### Constants Management
- Keep constants organized by category
- Use descriptive names
- Provide fallback values
- Document all constants
- Use TypeScript for type safety (optional)

### Environment Variables
- Use consistent naming conventions
- Provide example files
- Document all variables
- Use validation
- Keep sensitive data secure

### Deployment
- Test in staging first
- Use environment-specific configs
- Monitor logs for errors
- Keep backups of working configs
- Document deployment process

## 🆘 Support

For issues with the constants system:
1. Check environment variables
2. Verify file paths
3. Check console logs
4. Test locally first
5. Contact: kanishoffi@gmail.com

---

**Happy Coding! 🎉**
