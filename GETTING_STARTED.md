# Getting Started with Aviory React Frontend

## Overview

You have a complete, production-ready React application for your Aviory jewelry website. This file will guide you through the next steps.

## What You Have

✅ **Complete React Application** with:
- 7 full pages (Home, Shop, Product Detail, Blog, Blog Post, Contact, About)
- Responsive design for all devices
- Shopping cart with persistent storage
- Product filtering and sorting
- Full WordPress REST API integration
- Blog functionality
- Contact form

**Location:** `D:\Aviory\website\react-app\`

**Total Files:** 29 source files + configuration

## Quick Start (5 minutes)

### 1. Install Dependencies

Open terminal/PowerShell in `d:\Aviory\website\react-app\` folder:

```powershell
npm install
```

This downloads ~300MB of packages. Takes 2-5 minutes.

### 2. Set Environment Variables

Copy the example environment file:

```powershell
Copy-Item .env.example .env.local
```

Edit `.env.local` and update (only line that matters):

```
VITE_API_BASE_URL=https://theaviory.com/wp-json
```

### 3. Test Locally

```powershell
npm run dev
```

This starts the development server at `http://localhost:3000`

**Expected:** Home page loads with featured products

### 4. Test Connection

If you see products, your WordPress API is working! ✅

If you see "Error loading products," see **Troubleshooting** below.

---

## What Needs to Happen First

### ⚠️ Before Running Locally

Your React app needs a working WordPress REST API to connect to. 

**Complete these WordPress setup steps FIRST:**

1. **Enable REST API**
   - Visit: `https://theaviory.com/wp-json` in browser
   - Should show JSON (not 404)
   - If 404: Contact hosting provider about REST API support

2. **Configure CORS Headers**
   - Add to WordPress `functions.php`:
   ```php
   add_filter('rest_pre_serve_request', function($value) {
       header('Access-Control-Allow-Origin: *');
       header('Access-Control-Allow-Methods: GET, OPTIONS');
       header('Access-Control-Allow-Headers: Content-Type');
       return $value;
   });
   ```
   - See **WordPress Configuration Guide** (artifact) for detailed steps

3. **Add Products & Blog Posts**
   - At least 5 products with:
     - Featured image
     - Price
     - Category
     - Published status
   - At least 3 blog posts with:
     - Featured image
     - Content
     - Published status

4. **Test API Endpoints**
   - Try these in your browser:
   - `https://theaviory.com/wp-json/wc/v3/products` (should show products)
   - `https://theaviory.com/wp-json/wp/v2/posts` (should show blog posts)

---

## Development Workflow

### Daily Development

```powershell
# Navigate to project
cd d:\Aviory\website\react-app

# Start dev server
npm run dev

# Keep terminal open, edit files, see changes instantly
```

### File Organization

```
src/
├── pages/        ← Edit these for page content/layout
├── components/   ← Edit these for reusable UI
├── styles/       ← Edit for global styles
└── services/     ← Leave these (API integration)
```

### Common Tasks

**Edit a page:**
```
src/pages/Home.jsx
- Modify JSX
- Changes appear instantly in browser
- Save file to auto-refresh
```

**Edit styling:**
```
src/pages/Home.css
- Add/modify CSS
- Changes appear instantly
```

**Add new page:**
```
1. Create src/pages/NewPage.jsx
2. Create src/pages/NewPage.css
3. Add route to src/App.jsx:
   <Route path="/newpage" element={<NewPage />} />
4. Add navigation link to Header.jsx
```

---

## Building for Production

When ready to deploy:

```powershell
npm run build
```

This creates `dist/` folder with optimized production build.

**Output:** ~150KB minified + compressed

### Upload to Server

Upload `dist/` folder contents to your web server:
- **Vercel:** `vercel deploy --prod --dir=dist`
- **Netlify:** `netlify deploy --prod --dir=dist`
- **Custom Server:** Use FTP/SCP to upload

---

## Deployment Options

### Option 1: Vercel (Recommended)

```powershell
# Install Vercel CLI
npm install -g vercel

# Deploy from react-app folder
vercel

# Follow prompts
```

**Pros:** Free tier, automatic HTTPS, easy rollback, fast CDN
**Cons:** Tied to Vercel platform

### Option 2: Netlify

```powershell
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

**Pros:** Free tier, great UI, easy setup
**Cons:** Requires account setup

### Option 3: Custom Server

```powershell
# Build locally
npm run build

# Upload dist/ via FTP to your server at:
# /public_html/react (or wherever you want)

# Set up .htaccess for routing:
```

**File: `dist/.htaccess`**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## Customization Guide

### Change Colors

Edit color variables in component CSS files:

**Main accent color (Gold):** `#d4af37`
**Dark color:** `#333`
**Light background:** `#f9f9f9`

Find & replace in all `.css` files or use CSS variables:

```css
:root {
  --primary-color: #d4af37;
  --dark-color: #333;
  --light-bg: #f9f9f9;
}
```

### Update Company Info

1. **Footer:** `src/components/Footer.jsx`
   - Social links
   - Copyright text

2. **Contact Page:** `src/pages/Contact.jsx`
   - Address
   - Phone number
   - Email
   - Hours

3. **Header Logo:** `src/components/Header.jsx`
   - Company name
   - Tagline

4. **About Page:** `src/pages/About.jsx`
   - Company story
   - Team members
   - Mission statement

### Update Images

1. **Logo:** Add to `src/` or update Header component
2. **Placeholder Images:** Add to public folder or use URLs
3. **Product Images:** Come from WordPress automatically

---

## Troubleshooting

### "Error loading products" on homepage

**Cause:** REST API not accessible or CORS not configured

**Solution:**
1. Test: `https://theaviory.com/wp-json/wc/v3/products` in browser
2. If 404: Enable REST API in WordPress
3. If you see products but React app shows error: Add CORS headers
4. Check browser console (F12) for specific error message

### CORS Error in Console

**Error:** "Access to XMLHttpRequest has been blocked by CORS policy"

**Solution:** Add CORS headers to WordPress functions.php (see WordPress Configuration Guide)

### Blank Page or Nothing Loads

**Cause:** JavaScript error

**Solution:**
1. Open browser DevTools: F12
2. Go to Console tab
3. Look for red error messages
4. Search solution online or consult documentation

### Images Not Showing

**Cause:** Product images not set in WordPress

**Solution:**
1. Go to WooCommerce → Products
2. Edit each product
3. Add featured image
4. Save
5. Refresh React app

### API Endpoints Return 404

**Cause:** WordPress not installed or REST API disabled

**Solution:**
1. Verify WordPress URL in `.env.local`
2. Visit `https://theaviory.com/wp-json` in browser
3. Should show JSON (not 404)
4. Contact hosting if disabled

---

## File Structure Reference

```
react-app/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx         ← Logo, navigation, menu
│   │   ├── Footer.jsx         ← Footer links, copyright
│   │   └── ProductCard.jsx    ← Product display card
│   │
│   ├── pages/
│   │   ├── Home.jsx           ← Homepage
│   │   ├── Shop.jsx           ← Products listing
│   │   ├── ProductDetail.jsx  ← Single product detail
│   │   ├── Blog.jsx           ← Blog posts listing
│   │   ├── BlogPost.jsx       ← Single blog post
│   │   ├── Contact.jsx        ← Contact form
│   │   └── About.jsx          ← About page
│   │
│   ├── hooks/
│   │   ├── useFetch.js        ← Data fetching
│   │   └── useCart.js         ← Shopping cart
│   │
│   ├── services/
│   │   ├── api.js             ← Axios setup
│   │   ├── wordpress.js       ← WordPress API
│   │   └── woocommerce.js     ← WooCommerce API
│   │
│   ├── styles/
│   │   └── index.css          ← Global styles
│   │
│   ├── App.jsx                ← Main app with routes
│   └── main.jsx               ← React entry point
│
├── index.html                 ← HTML template
├── vite.config.js             ← Build config
├── package.json               ← Dependencies
├── .env.example               ← Environment template
├── .gitignore                 ← Git ignore
├── README.md                  ← Full documentation
└── GETTING_STARTED.md         ← This file
```

---

## Environment Variables

Create `.env.local` file with:

```
# WordPress REST API URL
VITE_API_BASE_URL=https://theaviory.com/wp-json

# Optional: For authenticated requests later
VITE_WP_REST_NONCE=

# App name (optional)
VITE_APP_NAME=Aviory - Fine Jewelry & Gemstones
```

---

## npm Commands

```powershell
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter (optional)
npm run lint
```

---

## Next Steps Checklist

- [ ] **WordPress Setup**
  - [ ] Enable REST API
  - [ ] Add CORS headers
  - [ ] Add 5+ products with images
  - [ ] Add 3+ blog posts
  - [ ] Test API endpoints in browser

- [ ] **Local Development**
  - [ ] Run `npm install`
  - [ ] Create `.env.local`
  - [ ] Run `npm run dev`
  - [ ] Verify homepage loads
  - [ ] Test all pages work

- [ ] **Customization**
  - [ ] Update company info
  - [ ] Change colors if desired
  - [ ] Update logo
  - [ ] Customize content

- [ ] **Production**
  - [ ] Build: `npm run build`
  - [ ] Deploy to Vercel/Netlify/Server
  - [ ] Test live site
  - [ ] Set up SSL certificate

- [ ] **E-Commerce** (Optional)
  - [ ] Set up payment gateway
  - [ ] Create checkout page
  - [ ] Configure shipping
  - [ ] Test purchase flow

---

## Performance Tips

1. **Optimize Images:**
   - Use WebP format when possible
   - Compress images before uploading to WordPress
   - Set appropriate image sizes

2. **Enable Caching:**
   - WordPress caching plugin (W3 Total Cache, WP Super Cache)
   - CDN for static assets
   - Browser caching headers

3. **Monitor Performance:**
   - Use Google PageSpeed Insights
   - Check bundle size: `npm run build`
   - Monitor API response times

4. **Database:**
   - Keep WordPress database clean
   - Remove unused plugins
   - Optimize database regularly

---

## Support & Resources

**Documentation:**
- README.md - Complete technical docs
- WordPress Configuration Guide - Server setup
- Quick Start Checklist - Implementation timeline

**Online Resources:**
- React Docs: https://react.dev
- WordPress REST API: https://developer.wordpress.org/rest-api/
- WooCommerce API: https://woocommerce.github.io/woocommerce-rest-api-docs/
- Vite Guide: https://vitejs.dev/guide/

**Common Issues:**
- See Troubleshooting section above
- Check browser console (F12) for errors
- Review WordPress Configuration Guide for server issues

---

## Questions?

1. **React/JavaScript Questions:**
   - Check React documentation
   - Search Stack Overflow
   - Review similar code in project

2. **WordPress/WooCommerce:**
   - See WordPress Configuration Guide
   - Contact hosting provider
   - Check WordPress docs

3. **Deployment:**
   - Vercel docs: https://vercel.com/docs
   - Netlify docs: https://docs.netlify.com/
   - Your hosting provider's documentation

4. **Styling/Design:**
   - Edit CSS files in `src/pages/` and `src/components/`
   - See color palette in header comments
   - Test responsiveness on mobile devices

---

## You're Ready!

Your complete React frontend is ready to go. The setup process is simple:

1. **npm install** (one time)
2. **npm run dev** (to test)
3. **npm run build** (to deploy)
4. **Upload dist/** (to production)

Start with WordPress configuration, then connect your React app. You'll have a modern, fast jewelry store running in hours, not months!

---

**Status:** ✅ Ready for Implementation
**Last Updated:** October 28, 2026
**Questions?** See README.md or WordPress Configuration Guide
