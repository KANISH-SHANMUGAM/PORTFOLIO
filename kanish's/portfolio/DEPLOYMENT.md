# Portfolio Deployment Guide

Complete guide for deploying your portfolio with backend email functionality.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
npm run install:backend
```

### 2. Setup Environment

1. **Backend Environment Setup:**
```bash
cd backend
cp env.example .env
```

2. **Edit `.env` file:**
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
CONTACT_EMAIL=kanishoffi@gmail.com
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://your-domain.com
```

### 3. Gmail App Password Setup

1. Enable 2-Factor Authentication on Gmail
2. Go to Google Account → Security → 2-Step Verification → App passwords
3. Generate app password for "Mail"
4. Use this password in `EMAIL_PASS` (not your regular password)

### 4. Run Development

```bash
# Run both frontend and backend
npm run dev

# Or run separately:
# Frontend: npm start
# Backend: npm run backend:dev
```

## 🌐 Deployment Options

### Option 1: Heroku (Recommended)

#### Frontend (Heroku)
1. Create Heroku app for frontend
2. Connect GitHub repository
3. Set buildpack: `https://github.com/mars/create-react-app-buildpack.git`
4. Deploy

#### Backend (Heroku)
1. Create separate Heroku app for backend
2. Set environment variables in Heroku dashboard
3. Deploy backend folder

```bash
# Deploy backend to Heroku
cd backend
heroku create your-portfolio-backend
heroku config:set EMAIL_USER=your-email@gmail.com
heroku config:set EMAIL_PASS=your-app-password
heroku config:set CONTACT_EMAIL=kanishoffi@gmail.com
heroku config:set FRONTEND_URL=https://your-frontend-app.herokuapp.com
git subtree push --prefix backend heroku main
```

### Option 2: Vercel + Railway

#### Frontend (Vercel)
1. Connect GitHub repository to Vercel
2. Deploy automatically

#### Backend (Railway)
1. Connect GitHub repository
2. Set root directory to `backend`
3. Set environment variables
4. Deploy

### Option 3: Netlify + DigitalOcean

#### Frontend (Netlify)
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `build`
4. Deploy

#### Backend (DigitalOcean App Platform)
1. Create new app
2. Connect GitHub repository
3. Set source directory to `backend`
4. Set environment variables
5. Deploy

## 🔧 Configuration

### Frontend Configuration

Update the API URL in `src/components/Contact.js`:

```javascript
// For production, change this to your backend URL
const response = await fetch('https://your-backend-url.com/api/contact', {
  // ... rest of the code
});
```

### Backend Configuration

Update CORS settings in `backend/server.js`:

```javascript
app.use(cors({
  origin: process.env.FRONTEND_URL || 'https://your-frontend-domain.com',
  credentials: true
}));
```

## 📧 Email Setup

### Gmail Configuration

1. **Enable 2-Factor Authentication**
2. **Generate App Password:**
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Select "Mail" and generate password
   - Use this password in `EMAIL_PASS`

### Alternative Email Providers

#### SendGrid
```javascript
// In backend/server.js, replace nodemailer config:
const transporter = nodemailer.createTransporter({
  service: 'SendGrid',
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY
  }
});
```

#### Mailgun
```javascript
const transporter = nodemailer.createTransporter({
  service: 'Mailgun',
  auth: {
    user: process.env.MAILGUN_USER,
    pass: process.env.MAILGUN_PASS
  }
});
```

## 🔒 Security Considerations

### Production Security

1. **Environment Variables:**
   - Never commit `.env` files
   - Use secure environment variable storage
   - Rotate API keys regularly

2. **Rate Limiting:**
   - Backend includes rate limiting (5 requests per 15 minutes)
   - Adjust limits based on your needs

3. **CORS:**
   - Set specific frontend URL in production
   - Don't use wildcard (*) in production

4. **HTTPS:**
   - Always use HTTPS in production
   - Update API URLs to use HTTPS

## 🐛 Troubleshooting

### Common Issues

1. **CORS Errors:**
   - Check `FRONTEND_URL` environment variable
   - Ensure URLs match exactly (including https/http)

2. **Email Not Sending:**
   - Verify Gmail app password
   - Check email address format
   - Check server logs for errors

3. **Rate Limiting:**
   - Users limited to 5 requests per 15 minutes
   - Clear browser cache if testing

4. **Build Errors:**
   - Check Node.js version compatibility
   - Clear node_modules and reinstall
   - Check for missing dependencies

### Debug Mode

Enable debug logging in backend:

```javascript
// Add to backend/server.js
console.log('Environment:', process.env.NODE_ENV);
console.log('Email config:', {
  user: process.env.EMAIL_USER,
  contact: process.env.CONTACT_EMAIL
});
```

## 📊 Monitoring

### Health Checks

Backend includes health check endpoint:
```
GET https://your-backend-url.com/api/health
```

### Logging

Monitor these logs:
- Email sending success/failure
- Rate limiting hits
- CORS errors
- Server errors

## 🚀 Performance Optimization

### Frontend
- Enable gzip compression
- Use CDN for static assets
- Optimize images
- Enable browser caching

### Backend
- Use PM2 for process management
- Enable gzip compression
- Set up monitoring
- Use connection pooling for databases

## 📝 Maintenance

### Regular Tasks
1. **Update dependencies** monthly
2. **Monitor email delivery** rates
3. **Check server logs** for errors
4. **Backup environment variables**
5. **Test contact form** regularly

### Updates
1. **Security patches** - Apply immediately
2. **Feature updates** - Test in staging first
3. **Dependency updates** - Test thoroughly

## 🆘 Support

If you encounter issues:

1. Check the logs first
2. Verify environment variables
3. Test locally before deploying
4. Contact: kanishoffi@gmail.com

## 📋 Checklist

### Before Deployment
- [ ] Environment variables configured
- [ ] Gmail app password generated
- [ ] CORS settings updated
- [ ] API URLs updated for production
- [ ] HTTPS enabled
- [ ] Rate limiting configured
- [ ] Error handling tested

### After Deployment
- [ ] Contact form tested
- [ ] Email delivery verified
- [ ] Auto-reply working
- [ ] Health check endpoint responding
- [ ] CORS working correctly
- [ ] Rate limiting functioning
- [ ] Error messages appropriate

---

**Happy Deploying! 🎉**
