# Portfolio Website

## Overview
A personal portfolio website — static HTML/CSS/JS, deployed via GitHub Pages (or Vercel/Netlify).

## Structure
```
index.html   — Main page (all sections: hero, work, about, contact)
style.css    — All styles (CSS custom properties in :root)
script.js    — Scroll reveal (respects reduced motion)
CLAUDE.md    — This file (project context for Claude Code)
```

## Design System
- **Theme**: "Ember": dark charcoal panels, single orange accent, no gradients/shadows
- **Fonts**: Space Grotesk (headings/body), JetBrains Mono (labels, tags, nav). Imported at the top of style.css (not in the HTML)
- **Colors**: Defined as CSS variables in `:root` in style.css (the only place to change them)
  - `--bg`: #0A0C0F, `--panel`: #13171C, `--border`: #242A31
  - `--accent`: #FF8A3D (change this to re-theme)
  - `--text`: #E8EAED, `--text-2`: #B4BBC3 (body copy), `--text-dim`: #8C949D (labels)
- **UI wording**: plain labels only (Projects, Experience, Contact). No space/mission-themed chrome text

## Conventions
- All styles in style.css (no inline styles)
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
