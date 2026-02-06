# Deployment Guide - Arbor Vision Consulting v2

This site is a static Eleventy build. The production output (`_site/`) can be deployed to any static file server. Below are instructions for hosting on a **Vultr VPS with Coolify**.

---

## Prerequisites

- A Vultr VPS instance with Coolify installed and running
- A domain pointing to the VPS (e.g. `arborvision.consulting`)
- SSH access to the server
- Git repository accessible from the server (GitHub, GitLab, etc.)

---

## Step 1: Push to Git Repository

Ensure the project is in a Git repository:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

---

## Step 2: Configure Coolify

1. **Log into Coolify** at your VPS IP or configured domain (e.g. `https://coolify.yourdomain.com`).

2. **Add a new resource** → Select **Application**.

3. **Connect your Git repository**:
   - Choose your Git provider (GitHub / GitLab / custom)
   - Select the repository and branch (`main`)

4. **Build configuration**:
   - **Build Pack**: Select **Static** (or **Nixpacks** — both work)
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `_site`
   - **Install Command**: `npm install` (if separate from build)

5. **Environment variables**: None required for this static site.

---

## Step 3: Domain & SSL

1. In Coolify, go to your application → **Settings** → **Domains**.
2. Add your domain: `www.arborvision.consulting`
3. Coolify will auto-provision a **Let's Encrypt SSL certificate**.
4. Optionally add a redirect from the naked domain `arborvision.consulting` → `www.arborvision.consulting`.

### DNS Configuration (at your domain registrar)

| Type  | Name  | Value                      |
|-------|-------|----------------------------|
| A     | @     | `<your-vultr-vps-ip>`      |
| A     | www   | `<your-vultr-vps-ip>`      |

Or use a CNAME for `www`:

| Type   | Name | Value                       |
|--------|------|-----------------------------|
| A      | @    | `<your-vultr-vps-ip>`       |
| CNAME  | www  | `arborvision.consulting`    |

---

## Step 4: Deploy

Once configured, Coolify will:

1. Pull the latest code from your repository
2. Run `npm install && npm run build`
3. Serve the `_site/` directory as static files
4. Apply SSL via Let's Encrypt

**Auto-deploy**: Coolify can be configured to auto-deploy on every push to `main` via webhooks.

---

## Step 5: Verify

After deployment, check:

- [ ] Site loads at `https://www.arborvision.consulting`
- [ ] SSL certificate is valid (padlock icon)
- [ ] All pages render correctly
- [ ] Images load properly
- [ ] `robots.txt` accessible at `/robots.txt`
- [ ] `sitemap.xml` accessible at `/sitemap.xml`
- [ ] Phone and email links work on mobile
- [ ] No mixed content warnings in browser console

---

## Manual Deployment (Alternative)

If you prefer to deploy manually without Coolify's Git integration:

```bash
# Build locally
npm run build

# Upload _site/ to server
rsync -avz --delete _site/ user@<your-vps-ip>:/var/www/arborvision/

# Or use scp
scp -r _site/* user@<your-vps-ip>:/var/www/arborvision/
```

Then configure Nginx or Caddy on the VPS to serve from `/var/www/arborvision/`.

### Sample Nginx config

```nginx
server {
    listen 80;
    server_name www.arborvision.consulting arborvision.consulting;
    root /var/www/arborvision;
    index index.html;

    location / {
        try_files $uri $uri/ $uri.html =404;
    }

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|svg|webp|css|js|ico|woff2)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
}
```

Use Certbot for SSL: `sudo certbot --nginx -d www.arborvision.consulting -d arborvision.consulting`

---

## Rollback

Since the site is static, rollback is simple:
- Re-deploy a previous Git commit via Coolify, or
- Upload a previous build of `_site/` manually

---

## Maintenance

- **Content updates**: Edit `.njk` files in `src/`, rebuild and redeploy.
- **Dependency updates**: Run `npm update` periodically, test locally, then redeploy.
- **SSL renewal**: Handled automatically by Coolify / Let's Encrypt.
