# 🚀 Deployment Guide - Thomas Ikueromitan & Sons Website

## 🔐 **Security Status: SECURED** ✅

Your admin dashboard is now **fully protected** with:
- **Login Authentication** - Username/password required
- **JWT Token Security** - Secure session management
- **Protected Routes** - Admin area inaccessible without login
- **Logout Functionality** - Secure session termination

---

## 🌐 **Deployment Options**

### **Option 1: Vercel (Recommended)**
**Best for:** Next.js projects, automatic deployments, easy setup

1. **Push to GitHub** (already done)
2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your repository: `istlyfe/thomas-ikueromitan-website`
   - Vercel will auto-detect Next.js settings

3. **Environment Variables:**
   - Add these in Vercel dashboard:
   ```
   ADMIN_USERNAME=your_admin_username
   ADMIN_PASSWORD=your_secure_password
   JWT_SECRET=your_very_long_random_secret_key
   RESEND_API_KEY=your_resend_api_key
   ```

4. **Deploy:** Click "Deploy" - Vercel handles everything!

---

### **Option 2: Netlify**
**Best for:** Static sites, custom domains, good free tier

1. **Build Command:** `npm run build`
2. **Publish Directory:** `.next`
3. **Environment Variables:** Same as Vercel

---

### **Option 3: GitHub Pages**
**Best for:** Free hosting, simple setup

1. **Build Command:** `npm run build && npm run export`
2. **Publish Directory:** `out`

---

## 🔑 **Security Configuration**

### **IMPORTANT: Change Default Credentials!**

**Before deploying, update these in your environment:**

```bash
# Current defaults (CHANGE THESE!)
ADMIN_USERNAME=admin
ADMIN_PASSWORD=thomas2024
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Recommended secure values:
ADMIN_USERNAME=thomas_admin
ADMIN_PASSWORD=SecurePassword123!
JWT_SECRET=your-very-long-random-string-at-least-32-characters
```

### **Generate Secure JWT Secret:**
```bash
# Run this command to generate a secure secret
openssl rand -base64 32
```

---

## 📧 **Email Setup (Resend)**

1. **Get API Key:**
   - Go to [resend.com](https://resend.com)
   - Sign up and verify your domain
   - Get your API key

2. **Domain Verification:**
   - Add MX records in Cloudflare
   - Verify domain in Resend dashboard

3. **Environment Variable:**
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

---

## 🌍 **Domain Configuration**

1. **DNS Settings (Cloudflare):**
   ```
   Type: A
   Name: @
   Value: [Your hosting provider IP]
   
   Type: CNAME
   Name: www
   Value: [Your hosting provider domain]
   ```

2. **Environment Variable:**
   ```
   NEXT_PUBLIC_DOMAIN=thomasikueromitan.com
   ```

---

## 🧪 **Testing Before Deployment**

1. **Local Testing:**
   ```bash
   npm run build
   npm start
   ```

2. **Test Authentication:**
   - Visit `/login`
   - Login with credentials
   - Access `/admin`
   - Test logout

3. **Test Contact Form:**
   - Submit contact form
   - Check email delivery
   - Test admin reply system

---

## 🚨 **Post-Deployment Checklist**

- [ ] Admin credentials changed from defaults
- [ ] JWT secret is secure and unique
- [ ] Resend API key configured
- [ ] Domain DNS configured
- [ ] SSL certificate active
- [ ] Contact form working
- [ ] Admin dashboard accessible
- [ ] Logout functionality working

---

## 🔧 **Troubleshooting**

### **Common Issues:**

1. **Build Errors:**
   ```bash
   rm -rf .next
   npm run build
   ```

2. **Authentication Issues:**
   - Check environment variables
   - Verify JWT secret
   - Clear browser cookies

3. **Email Not Working:**
   - Verify Resend API key
   - Check domain verification
   - Test with fallback mode

---

## 📞 **Support**

If you encounter issues:
1. Check the error logs in your hosting provider
2. Verify all environment variables are set
3. Test locally first: `npm run dev`

---

## 🎯 **Next Steps After Deployment**

1. **Monitor Performance:**
   - Page load speeds
   - Contact form submissions
   - Admin dashboard usage

2. **Security Maintenance:**
   - Regular password updates
   - Monitor access logs
   - Keep dependencies updated

3. **Content Updates:**
   - Add real company photos
   - Update testimonials
   - Add blog/news section

---

**🎉 Congratulations! Your website is now secure and ready for production!**
