# Sibghat Ullah: Portfolio Website

A simple portfolio website for an accountant, built with plain HTML, CSS and JavaScript. It works on mobile and desktop.

## Pages

- `index.html` Home
- `services.html` Services
- `skills.html` Skills
- `experience.html` Experience and education
- `contact.html` Contact us (email, WhatsApp, phone and a message form)

## Folder structure

```
sibghat-portfolio/
  index.html
  services.html
  skills.html
  experience.html
  contact.html
  css/style.css
  js/main.js
  README.md
```

## Run on your computer

Open `index.html` in any browser. No install is needed.

## Change contact details

The email and WhatsApp links are written in every HTML file and in `js/main.js`.
Use "Find and replace in all files" in your editor (for example VS Code) for:

- Email: `sl03318138581@gmail.com`
- WhatsApp number: `923401929013` (country code 92 + number without the first 0)
- Phone display text: `+92 340 1929013` and `0340 1929013`

Also update `CONTACT` at the top of `js/main.js`.

## Upload to GitHub

1. Create a GitHub account and click **New repository**.
2. Name it `sibghat-portfolio`, keep it **Public**, and click **Create repository**.
3. Click **uploading an existing file**, drag in all files and folders (`css`, `js`, the HTML files and this README), then click **Commit changes**.

Or with Git on your computer:

```bash
cd sibghat-portfolio
git init
git add .
git commit -m "Add portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/sibghat-portfolio.git
git push -u origin main
```

## Put the website online (GitHub Pages)

1. In your repository, open **Settings** and then **Pages**.
2. Under **Build and deployment**, set Source to **Deploy from a branch**.
3. Choose branch `main` and folder `/ (root)`, then click **Save**.
4. After a minute your site is live at `https://YOUR-USERNAME.github.io/sibghat-portfolio/`.
