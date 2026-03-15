# Deployment Guide

Complete guide for deploying the ABS Talha portfolio website to production.

## Pre-Deployment Checklist

- [ ] All personal information updated (name, email, links)
- [ ] Project details and links verified
- [ ] Testimonials reviewed and finalized
- [ ] Resume link working
- [ ] All social media links correct
- [ ] Contact form email configured
- [ ] SEO metadata in `app/layout.tsx` updated
- [ ] No console errors in development
- [ ] Mobile responsiveness tested
- [ ] All animations smooth on target devices

## Option 1: Deploy to Vercel (Recommended)

Vercel is the official Next.js deployment platform with best performance.

### Steps:

1. **Prepare GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import GitHub repository
   - Select the portfolio repo

3. **Configure Environment**
   - Framework: Next.js (auto-detected)
   - Root Directory: ./ (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (~2-3 minutes)
   - Preview your site

5. **Custom Domain** (Optional)
   - In Vercel Dashboard, go to Settings
   - Domain section
   - Add custom domain
   - Update DNS records at your registrar

### Automatic Deployments
- Every push to `main` branch auto-deploys
- Preview deployments for pull requests
- Instant rollback to previous versions

---

## Option 2: Deploy to Render

Render offers free tier with good performance.

### Steps:

1. **Prepare Repository** (same as Vercel)

2. **Create Render Account**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub

3. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect GitHub repository
   - Select portfolio repo

4. **Configure Build**
   - Environment: Node
   - Build Command: `npm install && npm run build`
   - Start Command: `npm run start`
   - Instance Type: Free

5. **Deploy**
   - Click "Create Web Service"
   - Deployment starts automatically
   - Access your site via provided URL

6. **Custom Domain**
   - Go to Settings
   - Custom Domain section
   - Add domain
   - Update CNAME records

---

## Option 3: Deploy to Railway

Railway offers a simple deployment experience.

### Steps:

1. **Connect GitHub** (same repository as Vercel)

2. **Create Account at Railway**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub

3. **Create New Project**
   - Click "Create New Project"
   - Select "Deploy from GitHub repo"
   - Choose portfolio repository

4. **Configure**
   - Framework: Next.js (auto-detected)
   - Railway auto-configures most settings

5. **Deploy**
   - Click "Deploy"
   - Monitor deployment logs
   - Access your site once ready

6. **Custom Domain**
   - Project settings
   - Domain section
   - Add custom domain
   - Configure DNS

---

## Option 4: Manual Deployment (VPS)

For VPS hosting (DigitalOcean, Linode, AWS EC2, etc.):

### Steps:

1. **Prepare Server**
   ```bash
   # SSH into your server
   ssh user@your-server-ip
   
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Install PM2 for process management
   sudo npm install -g pm2
   ```

2. **Deploy Application**
   ```bash
   # Create app directory
   mkdir -p /var/www/portfolio
   cd /var/www/portfolio
   
   # Clone repository
   git clone https://github.com/yourusername/portfolio.git .
   
   # Install dependencies
   npm install --production
   
   # Build application
   npm run build
   ```

3. **Start with PM2**
   ```bash
   pm2 start "npm start" --name "portfolio"
   pm2 startup
   pm2 save
   ```

4. **Setup Nginx Reverse Proxy**
   ```nginx
   # /etc/nginx/sites-available/portfolio
   server {
       listen 80;
       server_name your-domain.com;
       client_max_body_size 10M;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. **Enable SSL**
   ```bash
   sudo certbot certonly --nginx -d your-domain.com
   ```

---

## Post-Deployment Verification

1. **Check Live Site**
   - Load homepage
   - Test all navigation links
   - Verify contact form submission
   - Check all external links

2. **Performance Testing**
   - Test on PageSpeed Insights
   - Check Lighthouse scores
   - Load time acceptable (< 3s)

3. **Mobile Testing**
   - Test on iPhone and Android
   - Verify responsive layout
   - Test touch interactions
   - Check form on mobile

4. **SEO Verification**
   - Check meta tags in browser
   - Verify Open Graph tags
   - Submit sitemap if applicable
   - Test social media preview

5. **Analytics Setup** (Optional)
   ```typescript
   // Add to app/layout.tsx
   <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'YOUR_GA_ID');
   </script>
   ```

---

## Environment Variables (If Needed)

Create `.env.local` for sensitive information:

```env
# Contact Form (if using backend)
NEXT_PUBLIC_FORM_API_URL=https://api.example.com/submit
FORM_API_KEY=your_secret_key

# Analytics (if using)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## Monitoring Deployment

### Vercel
- Dashboard shows deployment history
- Real-time logs available
- Auto-rollback on failed deployments

### Render
- Deployment logs in dashboard
- Monitor performance metrics
- Alert systems for errors

### Railway
- Deployment logs visible
- Environment metrics
- Resource usage tracking

---

## Performance Optimization

### Image Optimization
```typescript
// Already configured in next.config.ts
// Next.js auto-optimizes images
```

### Caching Headers
- Vercel handles automatically
- Configure in `next.config.ts` if needed

### CDN
- Vercel uses Edge Network globally
- Render uses Render CDN
- Railway uses global deployment

---

## Troubleshooting

### Build Fails
1. Check Node.js version (18+)
2. Verify all dependencies installed
3. Check for TypeScript errors
4. Review build logs

### Site Slow
1. Check largest assets
2. Optimize images
3. Enable caching
4. Review animations performance

### Form Not Working
1. Verify URL is accessible
2. Check CORS settings
3. Review network requests
4. Check console for errors

### Custom Domain Not Working
1. Verify DNS records propagated
2. Check domain configuration
3. Allow 24-48 hours for DNS propagation
4. Verify SSL certificate

---

## Maintenance

### Regular Updates
- Check for Next.js updates: `npm outdated`
- Update dependencies regularly: `npm update`
- Security patches: `npm audit fix`

### Monitor
- Check analytics regularly
- Review error logs
- Monitor uptime
- Test contact form periodically

### Backups
- GitHub is your backup
- Regular commits recommended
- Document any manual changes

---

## Custom Domain Setup

### For Vercel
1. Go to Project Settings → Domains
2. Add domain
3. Update DNS at registrar:
   - CNAME: `cname.vercel-dns.com.`
   - Or use nameservers provided

### For Render
1. Project Settings → Custom Domain
2. Add domain
3. Update DNS with provided CNAME

### For Railway
1. Project Service Settings → Domains
2. Add custom domain
3. Update DNS records

---

## Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Render Docs**: https://render.com/docs
- **Railway Docs**: https://railway.app/reference

---

**Your portfolio is now live! Share it with recruiters, clients, and collaborators.**
