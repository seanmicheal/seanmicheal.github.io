# Sean Michael — Personal Portfolio

A responsive, single-page personal portfolio website built with plain HTML, CSS,
and a little vanilla JavaScript. Created for the Portfolio Website Project.

**Live site:** https://your-username.github.io/portfolio/ *(update after you enable GitHub Pages)*

## Sections

- **Home** — introduction, tagline, and profile photo
- **About** — short bio, interests, and goals
- **Skills** — languages, tools, and soft skills
- **Projects** — 3 featured projects with descriptions, tech stacks, and links
- **Education** — school background as a simple timeline
- **Achievements** — certificates and awards
- **Resume** — downloadable one-page PDF resume
- **Contact** — email, GitHub, and LinkedIn

## Project structure

```
portfolio/
├── index.html
├── style.css
├── script.js
├── images/
│   ├── profile.jpg
│   ├── project1.jpg
│   ├── project2.jpg
│   └── project3.jpg
├── documents/
│   └── resume.pdf
└── README.md
```

## Before you publish — things to personalize

- [ ] Replace `images/profile.jpg` with your own photo
- [ ] Replace `images/project1.jpg`, `project2.jpg`, `project3.jpg` with real screenshots of your projects
- [ ] Update the project links in `index.html` (search for `your-username`) with your actual GitHub/live links
- [ ] Update your name, school, and bio text throughout `index.html`
- [ ] Replace `documents/resume.pdf` with your own resume (or edit `resume.html` and re-export to PDF)
- [ ] Update the email, GitHub, and LinkedIn links in the Contact section

## How to publish on GitHub Pages

1. Create a new repository on GitHub (e.g. `portfolio`).
2. Upload all the files in this folder, keeping the same structure.
3. Go to **Settings → Pages** in your repository.
4. Under "Build and deployment", set the source to **Deploy from a branch**, choose the `main` branch and `/ (root)` folder, then save.
5. Wait a minute, then visit the URL GitHub gives you (usually `https://your-username.github.io/portfolio/`).

## Built with

- HTML5
- CSS3 (Flexbox & Grid, no framework)
- Vanilla JavaScript (mobile nav toggle + scroll-based active link highlighting)
