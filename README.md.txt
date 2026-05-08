# Sight Seekers Safaris — Chongqing Market Website

Static site optimized for Cloudflare Pages (free tier).

## 📁 Files Included
- `index.html` - Homepage (Chinese default)
- `packages.html` - Packages listing
- `package-detail.html` - Template (duplicate for each package)
- `about.html`, `contact.html` - Supporting pages
- `css/main.css` - Core responsive styles
- `css/china.css` - China-specific optimizations
- `js/i18n.js` - Trilingual switcher (EN/ZH/SW)
- `js/currency.js` - USD↔CNY converter
- `js/wechat.js` - WeChat QR + deep links
- `js/app.js` - UI interactions
- `_headers`, `_redirects` - Cloudflare Pages config

## 🖼️ Replace Placeholder Images
1. Add your photos to `/images/`
2. Convert to WebP for performance: `ffmpeg -i input.jpg -q:v 80 output.webp`
3. Update `src` paths in HTML files

## 🔑 Update Configuration
1. `index.html`: Replace `REPLACE_WITH_YOUR_BAIDU_CODE` and `REPLACE_WITH_YOUR_BAIDU_ID`
2. `js/wechat.js`: Update `wechatId` to your actual WeChat ID
3. `images/wechat-qr-placeholder.png`: Replace with your QR code

## ☁️ Deploy to Cloudflare Pages (Free)

### Option A: Drag & Drop (Easiest)
1. Go to https://dash.cloudflare.com → Pages → Create Project
2. Select "Direct Upload"
3. Zip your project folder and upload
4. Set build settings: 
   - Framework preset: `None`
   - Build command: (leave blank)
   - Build output directory: `/`
5. Click "Deploy"

### Option B: Git Integration
1. Push this folder to GitHub/GitLab
2. In Cloudflare Pages: "Connect to Git"
3. Configure:
   - Production branch: `main`
   - Build command: (blank)
   - Build output directory: `/`
4. Deploy

## 🌐 Custom Domain
1. In Cloudflare Pages project → Custom Domains
2. Add your domain (e.g., `chongqing.sightseekerssafaris.com`)
3. Follow DNS setup instructions

## ✅ Post-Deployment Checklist
- [ ] Test language switcher (EN/ZH/SW)
- [ ] Verify CNY prices display correctly
- [ ] Test WeChat QR modal on desktop + mobile
- [ ] Run Lighthouse audit (target >90 mobile)
- [ ] Submit sitemap to Baidu Webmaster Tools
- [ ] Set up Baidu Analytics with your ID

## 💡 Free Tier Limitations
- No Cloudflare Workers (use client-side JS only)
- No KV storage (use localStorage for language preference)
- No China Network acceleration (requires Enterprise)
- Max 500 builds/month (plenty for static site)

## 🔄 Updating Content
Since this is a static site:
1. Edit HTML/CSS/JS files locally
2. Re-upload via Cloudflare Pages dashboard OR push to Git
3. Changes deploy in ~30 seconds

## 📞 Support
For questions about the handover document or Ujamaa integration, refer to `Sight_Seekers_Safaris_Handover_Document.docx`.