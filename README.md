# 🚀 Portfolio Website + Claude Code Setup Guide

A complete personal portfolio website, designed to be managed and updated using **Claude Code** — Anthropic's AI coding agent that lives in your terminal.

---

## What You'll End Up With

- A live portfolio website that auto-deploys when you push changes
- Claude Code on your computer, connected to your project
- A workflow where you just **tell Claude what to change** and it does it

---

## PART 1: SET UP YOUR ACCOUNTS (10 minutes)

### Step 1 — Create a GitHub account (skip if you have one)

1. Go to **https://github.com** and click **Sign Up**
2. Follow the steps (email, password, username)
3. Verify your email

### Step 2 — Get a Claude subscription

1. Go to **https://claude.ai**
2. Sign up or log in
3. Subscribe to **Claude Pro ($20/month)** — this gives you access to Claude Code
4. You can upgrade to Claude Max ($100/month) later if you hit usage limits

---

## PART 2: CREATE YOUR GITHUB REPOSITORY (5 minutes)

### Step 3 — Create a new repo

1. Log into GitHub
2. Click the **+** button (top right) → **New repository**
3. Fill in:
   - **Repository name**: `my-portfolio` (or whatever you want)
   - **Description**: "My personal portfolio website"
   - **Visibility**: **Public** (required for free GitHub Pages hosting)
   - ✅ Check **"Add a README file"**
4. Click **Create repository**

### Step 4 — Upload the website files

1. In your new repo, click **"Add file"** → **"Upload files"**
2. Drag and drop ALL of these files:
   - `index.html`
   - `style.css`
   - `script.js`
   - `CLAUDE.md`
3. Type a commit message like "Initial portfolio site"
4. Click **"Commit changes"**

---

## PART 3: DEPLOY YOUR SITE WITH GITHUB PAGES (5 minutes)

### Step 5 — Enable GitHub Pages

1. In your repo, go to **Settings** (tab at the top)
2. In the left sidebar, click **Pages**
3. Under **"Source"**, select:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Click **Save**
5. Wait 1-2 minutes, then refresh the page
6. You'll see a green box with your site URL:
   **`https://YOUR-USERNAME.github.io/my-portfolio`**

🎉 **Your site is now live!** Visit that URL to see it.

---

## PART 4: INSTALL CLAUDE CODE (10 minutes)

### Step 6 — Install Git on your computer

Claude Code needs Git to push changes. Check if you have it:

**On Mac:**
Open Terminal (search "Terminal" in Spotlight) and type:
```bash
git --version
```
If it's not installed, you'll be prompted to install Xcode Command Line Tools. Click **Install**.

**On Windows:**
Download and install Git from **https://git-scm.com/download/win**
Use all the default options during installation.

### Step 7 — Configure Git with your GitHub identity

Open your terminal and run these two commands (replace with YOUR info):
```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

### Step 8 — Clone your repo to your computer

This downloads your website files to your computer:
```bash
cd ~/Desktop
git clone https://github.com/YOUR-USERNAME/my-portfolio.git
cd my-portfolio
```
(Replace `YOUR-USERNAME` with your actual GitHub username and `my-portfolio` with your repo name.)

### Step 9 — Install Claude Code

**Mac / Linux (recommended — one command):**
```bash
curl -fsSL https://claude.ai/install.sh | sh
```

**Windows (PowerShell):**
```powershell
irm https://claude.ai/install.ps1 | iex
```

**Alternative — Install with Homebrew (Mac):**
```bash
brew install claude-code
```

### Step 10 — Authenticate Claude Code

After installing, run:
```bash
claude
```

It will open a browser window asking you to log in with your Claude account. Log in, and you're connected.

---

## PART 5: THE DAILY WORKFLOW (This is the fun part)

### How to make changes to your website

From now on, whenever you want to update your site, here's what you do:

#### 1. Open terminal and navigate to your project
```bash
cd ~/Desktop/my-portfolio
```

#### 2. Start Claude Code
```bash
claude
```

#### 3. Tell it what you want in plain English

Here are real examples of things you can say:

**Updating content:**
> "Change my name to John Smith everywhere on the site"

> "Update the hero subtitle to say 'Full-stack developer based in Boston'"

> "Change my email to john@smith.com in the contact section"

**Adding projects:**
> "Add a new project card called 'E-commerce Redesign' with tags 'UI/UX' and 'Shopify'. The description should be 'Redesigned the checkout flow for a major retailer, increasing conversions by 34%.'"

**Changing design:**
> "Change the accent color from gold to a bright teal"

> "Make the hero section taller with bigger text"

> "Add a dark blue gradient background to the about section"

**Adding sections:**
> "Add a testimonials section between Work and About with 3 client quotes"

> "Add a blog section that lists my latest articles"

**Adding features:**
> "Add a dark/light mode toggle in the navbar"

> "Make the project cards open in a modal with more details"

#### 4. Tell Claude to push the changes
Once you're happy with the changes, say:

> "Commit these changes with the message 'Added new project' and push to GitHub"

Claude Code will run:
```bash
git add .
git commit -m "Added new project"
git push
```

#### 5. Wait 1-2 minutes
GitHub Pages will automatically rebuild your site. Refresh your live URL and see the changes!

---

## PART 6: SET UP A CUSTOM DOMAIN (Optional)

If you own a domain (like `johnsmith.com`), you can connect it:

1. In your GitHub repo → **Settings** → **Pages**
2. Under **"Custom domain"**, type your domain (e.g. `johnsmith.com`)
3. Click **Save**
4. Go to your domain registrar (GoDaddy, Namecheap, etc.) and add these DNS records:
   - **A Records** pointing to:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **CNAME Record**: `www` → `YOUR-USERNAME.github.io`
5. Wait up to 24 hours for DNS to propagate
6. Back in GitHub Pages settings, check ✅ **"Enforce HTTPS"**

---

## TROUBLESHOOTING

**"Claude Code says it can't push"**
You may need to set up authentication. Run:
```bash
gh auth login
```
Or set up a Personal Access Token:
1. GitHub → Settings → Developer Settings → Personal Access Tokens → Generate
2. Use the token as your password when Git asks

**"My site isn't updating after I push"**
- Check the **Actions** tab in your GitHub repo — you'll see if the deploy is still running
- Hard refresh your browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

**"Claude Code used all my credits"**
- The Pro plan ($20/month) has a usage limit shared with claude.ai chat
- Consider upgrading to Max ($100/month) for heavier usage
- Alternatively, use the API with pay-per-token billing

**"I messed up and the site is broken"**
Tell Claude Code:
> "Undo the last commit and push"

Or manually:
```bash
git revert HEAD
git push
```

---

## QUICK REFERENCE

| What you want to do | What to tell Claude Code |
|---|---|
| Change your name | "Change my name to X everywhere" |
| Add a project | "Add a new project card called X with description Y" |
| Change colors | "Change the accent color to X" |
| Add a section | "Add a testimonials section with 3 quotes" |
| Remove something | "Remove the Dribbble link from the footer" |
| Push changes live | "Commit and push with message 'description'" |
| Undo changes | "Undo the last commit and push" |

---

## ALTERNATIVE: USE VERCEL INSTEAD OF GITHUB PAGES

If you want faster deploys and preview URLs:

1. Go to **https://vercel.com** and sign up with your GitHub account
2. Click **"New Project"** → Import your `my-portfolio` repo
3. Click **Deploy** — done!
4. Every push to GitHub now triggers an instant deploy on Vercel
5. You get a free `.vercel.app` URL, plus you can add a custom domain

---

That's it! You now have a complete system where you just talk to an AI and your website updates. No coding required. 🎉
