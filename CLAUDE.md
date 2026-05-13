# Portfolio Website

## Overview
A personal portfolio website — static HTML/CSS/JS, deployed via GitHub Pages (or Vercel/Netlify).

## Structure
```
index.html   — Main page (all sections: hero, work, about, contact)
style.css    — All styles (CSS custom properties in :root)
script.js    — Mobile menu, scroll reveal, smooth scrolling
CLAUDE.md    — This file (project context for Claude Code)
```

## Design System
- **Theme**: Dark editorial with warm gold accent
- **Fonts**: DM Serif Display (headings), Outfit (body) — loaded via Google Fonts
- **Colors**: Defined as CSS variables in `:root` in style.css
  - `--bg`: #0c0c0e (main background)
  - `--accent`: #e8a84c (gold accent)
  - `--text`: #e8e4df (body text)
  - `--text-dim`: #8a857e (secondary text)

## Conventions
- All styles in style.css (no inline styles except project card gradients)
- Sections follow the pattern: `.section` wrapper → `.container` → content
- BEM-ish class naming: `.block-element` (e.g. `.hero-title`, `.project-card`)
- Mobile breakpoints: 900px (tablet), 640px (phone)
- Animations use the `--ease` CSS variable for consistency

## Common Tasks
- **Add a project**: Copy a `.project-card` block in the `#work` section of index.html
- **Change colors**: Edit the CSS variables in `:root` in style.css
- **Update text**: Edit directly in index.html
- **Add a new section**: Follow the existing `.section` → `.container` pattern

## Deployment
- Hosted on GitHub Pages (or Vercel/Netlify)
- Push to `main` branch triggers automatic deployment
- No build step required — it's plain HTML/CSS/JS
