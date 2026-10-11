# PWA Deployment Guide

Your Alana & Cian family memory book is a **Progressive Web App** ready for production deployment. This guide covers all deployment options.

## ✨ What Makes This a Polished PWA

- ✅ **Service Worker** with intelligent caching strategies
- ✅ **Manifest** with app icons, shortcuts, and full PWA metadata
- ✅ **Offline Support** - works without internet connection
- ✅ **Installable** - "Add to Home Screen" on mobile and desktop
- ✅ **App Shortcuts** - quick access to Memory and Diary from home screen
- ✅ **Responsive Design** - beautiful on all devices
- ✅ **Security** - HTTPS ready, no secrets exposed

---

## Deployment Options

### Option 1: GitHub Pages (Recommended for Privacy)

**Best for:** Free hosting, keeping the app on your own GitHub account, automatic updates

#### Setup:
1. Ensure your repository is public (or use private with GitHub Pages Pro)
2. Go to **Settings → Pages** in your repository
3. Set source to: "Deploy from a branch" → `main` branch
4. The workflow `.github/workflows/deploy-github-pages.yml` handles automatic deployment

#### Access:
Your app will be live at: `https://gimmethelooter-max.github.io/alana-cian/`

#### Auto-Deploy:
Every push to `main` automatically updates your live site.

---

### Option 2: Vercel (Recommended for Performance)

**Best for:** Fast global CDN, automatic optimizations, easy custom domain

#### Setup:
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"New Project"**
3. Select your `alana-cian` repository
4. Framework Preset: Select **"Other"** (it's a static app)
5. Build Command: Leave empty or use default
6. Output Directory: `.` (root)
7. Click **Deploy**

#### Configuration:
The `vercel.json` file automatically handles:
- Service Worker cache busting
- HTML file proper cache headers
- SPA routing (all routes go to index.html)

#### Access:
Live at: `https://alana-cian.vercel.app` (or your custom domain)

---

### Option 3: Netlify

**Best for:** Drag-and-drop deployment, excellent free tier, form handling

#### Setup:
1. Go to [netlify.com](https://netlify.com) and sign in with GitHub
2. Click **"New site from Git"**
3. Select your repository
4. Team: choose your team
5. Branch: `main`
6. Build settings:
   - Build command: leave empty
   - Publish directory: `.` (root)
7. Click **Deploy site**

#### Configuration:
The `netlify.toml` and `_redirects` files handle:
- Proper routing for your SPA
- Cache control headers
- Manifest MIME type

#### Access:
Live at: `https://alana-cian.netlify.app` (or your custom domain)

---

### Option 4: Self-Hosted (Advanced)

**Best for:** Full control, custom domain, no intermediaries

#### Requirements:
- A server or VPS
- Node.js or Python installed
- HTTPS enabled (required for PWA features)
- A domain name

#### Quick Setup with Python:
```bash
cd /path/to/alana-cian
python3 -m http.server 8000
```

#### Setup with Node.js (Express):
```bash
npm init -y
npm install express compression
```

Create `server.js`:
```javascript
const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();
app.use(compression());
app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
  console.log('PWA running at http://localhost:3000');
});
```

Run: `node server.js`

#### Using Docker:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", ".", "-l", "3000"]
```

---

## Post-Deployment Checklist

### 1. Test PWA Features
- [ ] Open the site on a mobile device
- [ ] Look for "Add to Home Screen" prompt (or use Share menu)
- [ ] Install the app to home screen
- [ ] Close the browser and open the app from home screen
- [ ] Verify app displays in standalone mode (no address bar)
- [ ] Test offline by disabling internet - app should still load

### 2. Test on Multiple Devices
- [ ] iOS Safari
- [ ] Android Chrome
- [ ] Desktop (Windows/Mac/Linux)
- [ ] Desktop PWA installation

### 3. Verify Security
- [ ] HTTPS enabled ✅ (GitHub Pages, Vercel, Netlify auto-enable this)
- [ ] No sensitive keys in code (check `config.js`)
- [ ] Manifest correctly configured

### 4. Performance Audit
Run Lighthouse audit:
```bash
npm install -g lighthouse
lighthouse https://your-deployed-url --output json --view
```

Target scores:
- **Performance:** > 90
- **Accessibility:** > 90
- **Best Practices:** > 95
- **SEO:** > 90

The repository includes `.github/workflows/pwa-audit.yml` for automated audits.

---

## Custom Domain Setup

### GitHub Pages Custom Domain
1. Go to Settings → Pages → Custom domain
2. Enter your domain (e.g., `alana-cian.com`)
3. Add DNS CNAME record to your domain provider pointing to `gimmethelooter-max.github.io`

### Vercel Custom Domain
1. Go to Project Settings → Domains
2. Add your domain
3. Follow Vercel's DNS setup instructions

### Netlify Custom Domain
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Follow Netlify's DNS configuration

---

## Maintenance

### Update the App
Simply push changes to your `main` branch. Deployment is automatic:
- **GitHub Pages:** Updates in ~60 seconds
- **Vercel:** Updates in ~30 seconds
- **Netlify:** Updates in ~30 seconds

### Clear Cache (If Needed)
Users may need to clear app cache if you make major updates:
1. Go to Settings in the app
2. Clear data option will refresh the cache

Or: User clears browser cache manually

### Monitor Deployments
- **GitHub:** Check Actions tab for deployment status
- **Vercel:** Dashboard shows deployment history
- **Netlify:** Dashboard shows deployment history

---

## Environment Variables (For Future Supabase Integration)

When you're ready to add backend features with Supabase:

### GitHub Pages
Not supported - use GitHub Secrets for private keys only

### Vercel
1. Go to Settings → Environment Variables
2. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_KEY`
3. These are available at build time and in the browser (marked as public)

### Netlify
1. Go to Site Settings → Build & Deploy → Environment
2. Add environment variables

Update `config.js` to read from environment if needed.

---

## Troubleshooting

### App not installing on mobile
- Check manifest.webmanifest exists and is valid
- Verify HTTPS is enabled
- Ensure icon files exist in `/icons/` folder
- Clear browser cache and reload

### Offline not working
- Check Service Worker is registered (open DevTools → Application → Service Workers)
- Verify `sw.js` is loading (no 404 errors)
- Check cache storage in DevTools → Application → Cache

### Routes not working
- Ensure deployment platform rewrites all routes to `index.html`
- Check vercel.json or netlify.toml is in root

### Manifest shows warning
- Validate manifest at [web.dev/manifest](https://web.dev/manifest/)
- Ensure all icon files referenced actually exist

---

## Performance Optimization Tips

### 1. Optimize Icons
```bash
# Compress PNG icons
pngquant --quality=80-100 icon-192.png -o icon-192.png
pngquant --quality=80-100 icon-512.png -o icon-512.png
```

### 2. Enable Compression
All deployment platforms handle gzip automatically ✅

### 3. Browser Cache Strategy
Already configured in deployment files:
- Service Worker files: No cache (always fresh)
- App shell (HTML/CSS/JS): Short cache (5 min)
- Assets (icons): Long cache (1 year)

### 4. Lazy Loading
Consider lazy-loading heavy images using:
```javascript
const img = document.querySelector('img');
img.loading = 'lazy';
```

---

## Security Notes

### What's Protected
- App data stays local in browser (localStorage/IndexedDB)
- No data sent to external servers unless Supabase is configured
- HTTPS ensures safe transmission

### Before Adding Supabase
- Never commit API keys to the repository
- Use environment variables
- Enable Row-Level Security (RLS) on all tables
- Review authentication providers (email/password recommended for couples)

### GDPR Compliance
- Users can export their data anytime (Settings → Export)
- Users can delete all data (Settings → Reset)
- No third-party trackers included

---

## Going Live Checklist

- [ ] Deploy to chosen platform
- [ ] Test PWA features on real devices
- [ ] Run Lighthouse audit (score > 90)
- [ ] Enable HTTPS (automatic on all platforms)
- [ ] Add custom domain (optional)
- [ ] Set up analytics if desired (optional)
- [ ] Share link with your partner
- [ ] Test "Add to Home Screen" works
- [ ] Test offline mode works
- [ ] Celebrate! 🎉

---

## Need Help?

- **PWA Debugging:** Check the browser DevTools → Application tab
- **Deployment Issues:** Check the platform's documentation and deployment logs
- **Performance:** Use Lighthouse (`npm install -g lighthouse && lighthouse <url>`)
- **Icon Generation:** Use [web.dev icon generator](https://web.dev/image-generators/)

Your beautiful family memory book is ready for the world! 💝
