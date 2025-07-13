# Static Export Deployment Guide

## 📁 Files to Upload
All files in the `out/` folder need to be uploaded to your subdomain folder.

## 🌐 WordPress Hosting Setup

### Step 1: Create Subdomain in WordPress Hosting
1. **Log into your hosting control panel** (cPanel, Plesk, or your provider's panel)
2. **Find "Subdomains" section**
3. **Create new subdomain:**
   - Subdomain: `4-dias`
   - Domain: `visitbolivia.travel`
   - Document Root: `/public_html/4-dias/` (or similar path)
4. **Save the subdomain**

### Step 2: Upload Files

#### Option A: File Manager (Recommended)
1. Open **File Manager** in your hosting control panel
2. Navigate to the subdomain folder: `/public_html/4-dias/`
3. **Delete any default files** (index.html, etc.)
4. **Upload all contents** from your `out/` folder:
   - `index.html`
   - `404.html`
   - `_next/` folder (complete folder)
   - All `.webp` image files
   - All `.svg`, `.jpg`, `.png` files

#### Option B: FTP/SFTP
1. Use FileZilla, WinSCP, or similar FTP client
2. Connect to your hosting server
3. Navigate to `/public_html/4-dias/`
4. Upload all contents from `out/` folder

### Step 3: Test Your Site
1. Wait 5-10 minutes for DNS propagation
2. Visit: `https://4-dias.visitbolivia.travel`
3. Your React app should load perfectly!

## 🔧 Troubleshooting

### If images don't load:
- Check file permissions (755 for folders, 644 for files)
- Ensure all `.webp` files are uploaded

### If styles look broken:
- Clear browser cache
- Check that `_next/` folder uploaded completely

### If subdomain doesn't work:
- Check DNS settings in hosting panel
- Contact hosting support for subdomain setup

## 📋 File Checklist
- [ ] index.html
- [ ] 404.html  
- [ ] _next/ folder (complete)
- [ ] All .webp images (11 files)
- [ ] placeholder files (.svg, .jpg, .png)

## 🎉 Success!
Your Next.js/React app is now running as a static site on your WordPress subdomain!

## 🔄 Future Updates
To update the site:
1. Make changes to your code
2. Run `npm run export`
3. Replace files in the subdomain folder with new `out/` contents 