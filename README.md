# 🚀 Portfolio 

<p align="center">
  <img src="./public/personal.png" alt="Jay Avgune" width="120" height="120" style="border-radius: 50%;" />
</p>

<p align="center">
  <strong>Production-grade React + TypeScript portfolio</strong><br />
  Built with Vite, Tailwind CSS v4, Framer Motion &more.
</p>

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/React-18-%2361DAFB?logo=react&logoColor=white" alt="React 18" /></a>
  <a href="#"><img src="https://img.shields.io/badge/TypeScript-5-%233178C6?logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Vite-6-%23646CFF?logo=vite&logoColor=white" alt="Vite" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Tailwind_CSS-v4-%2306B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS v4" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Framer_Motion-11-%230055FF?logo=framer&logoColor=white" alt="Framer Motion" /></a>
  <br />
  <img src="https://img.shields.io/badge/status-live-brightgreen" alt="Status: Live" />
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="License: MIT" />
</p>

---

## 📋 Table of Contents

- [📖 About This Project](#-about-this-project)
- [✨ Live Demo](#-live-demo)
- [🛠️ Tech Stack](#️-tech-stack)
- [🌟 Features](#-features)
- [🗂️ Featured Projects](#️-featured-projects)
- [📸 Preview](#-preview)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Production Build](#production-build)
- [📧 EmailJS Setup](#-emailjs-setup)
- [📄 Resume](#-resume)
- [🌐 Deployment](#-deployment)
  - [Vercel (Recommended)](#vercel-recommended)
  - [Netlify](#netlify)
- [📂 Project Structure](#-project-structure)
- [🎨 Color System](#-color-system)
- [⚡ Performance Checklist](#-performance-checklist)
- [🔐 Credibility Notes](#-credibility-notes)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

---

## 📖 About This Project

This repository is the **front-end** component of the full **Portfolio Website** project. It is part of a monorepo structure that contains shared tooling and configuration alongside the front-end application.

```
Portfolio-website/           # Monorepo root
├── front-end/               # ★ You are here — React + Vite SPA
│   ├── src/                 # Application source code
│   ├── public/              # Static assets (images, resume)
│   ├── index.html           # HTML entry point
│   ├── package.json         # Front-end dependencies
│   └── vite.config.js       # Vite configuration
├── package.json             # Root workspace config (shared deps)
├── package-lock.json        # Lockfile
└── PORTFOLIO_REVIEW.md      # Project review &notes
```

The root `package.json` hosts shared workspace dependencies (e.g., Radix UI, Framer Motion, Lucide React), while the `front-end/` directory is the deployable SPA built with Vite + React + TypeScript.

---

## ✨ Live Demo

> 🔗 **[View Live Portfolio →](https://your-live-url.vercel.app)** _(Add your deployed URL here)_

---

## 🛠️ Tech Stack

| Category            | Technology                                                                                     |
| ------------------- | ---------------------------------------------------------------------------------------------- |
| **Framework**       | [Vite](https://vitejs.dev/) + [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Styling**         | [Tailwind CSS v4](https://tailwindcss.com/)                                                    |
| **Animation**       | [Framer Motion](https://www.framer.com/motion/)                                                |
| **Icons**           | [React Icons](https://react-icons.github.io/react-icons/)                                      |
| **Contact**         | [EmailJS](https://www.emailjs.com/)                                                            |
| **SEO**             | react-helmet-async, JSON-LD schema (Person)                                                  |
| **Deploy**          | Static SPA ([Vercel](https://vercel.com/) / [Netlify](https://www.netlify.com/))               |

---

## 🌟 Features

### ✨ Interactive UI
- **Full-screen Hero** with a dynamic typing effect
- **Light/Dark mode** toggle with localStorage persistence
- **Scroll progress bar** & **back-to-top** button
- **Reduced-motion support** — respects prefers-reduced-motion

### 👤 About & Stats
- Real stat counters — **3 projects**, **50+ LeetCode**, **12+ technologies**
- Skills displayed as clean **badges** (no fabricated percentage bars)

### 💼 Portfolio & Experience
- **Projects** section with category filter, tech badges &feature lists
- **Experience timeline** — real internship at SaiKet Systems + certifications

### 📊 GitHub Integration
- **Live GitHub API** integration with **graceful fallback** on rate limits

### 📬 Contact
- **EmailJS** contact form with **success/error** states and form validation

### ♿ Accessibility & SEO
- **Keyboard focus states** throughout
- **Semantic HTML** structure
- **Meta tags**, **Open Graph**, **Twitter Cards**, **JSON-LD Person schema**

---

## 🗂️ Featured Projects

Three real-world applications built with modern technologies:

### 1. 🤖 AI-Based Reconciliation System

| | |
|---|---|
| **Category** | Full Stack |
| **Description** | Automated financial transaction matching using Levenshtein Distance, Jaro-Winkler, and N-Gram Similarity algorithms. Features fraud detection, JWT authentication, RBAC, and automated PDF/Excel report generation. |
| **Tech Stack** | React.js Node.js Express.js MongoDB JWT RBAC AI |
| **Features** | Fuzzy matching algorithms · Fraud detection engine · JWT Authentication · Role-Based Access Control · PDF & Excel Reports |
| **Links** | [GitHub](https://github.com/jayavgune18/Ai-Based-reconciliation-system) · [Live Demo](https://ai-based-reconciliation-system-frontend.onrender.com) |

### 2. 📸 AI Expense Receipt Scanner

| | |
|---|---|
| **Category** | AI/ML |
| **Description** | Full-stack expense management platform with OCR receipt scanning, AI-powered duplicate detection, analytics dashboard, Docker Compose deployment, and email notifications. |
| **Tech Stack** | React.js Node.js MongoDB OCR Docker Cloudinary Tailwind CSS |
| **Features** | OCR receipt scanning · Expense analytics dashboard · AI duplicate detection · Email notifications · Docker Compose deployment |
| **Links** | [GitHub](https://github.com/jayavgune18/AI-Expense-Receipt-Scanner) |

### 3. 👤 GitHub Profile Detective

| | |
|---|---|
| **Category** | Web App |
| **Description** | Real-time GitHub analytics application that retrieves repositories, followers, stars, and profile insights using the GitHub REST API with optimized API handling and a responsive UI. |
| **Tech Stack** | React.js GitHub API REST API JavaScript Tailwind CSS |
| **Features** | Real-time GitHub data · Profile analytics · Repository insights · Fast API fetching · Responsive UI |
| **Links** | [GitHub](https://github.com/jayavgune18/gitHub-Profile-Detective) · [Live Demo](https://githubprofile-detective.netlify.app) |

---

## 📸 Preview

<p align="center">
  <em>Screenshots coming soon — replace this section with actual images.</em>
</p>

<!-- Replace with actual screenshots once available -->
<!--
![Hero Section](screenshots/hero.png)
![Projects Section](screenshots/projects.png)
![Contact Section](screenshots/contact.png)
-->

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** 18.x (recommended: 20.x LTS)
- **npm** 9.x (comes with Node.js) or yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/portfolio-website.git
cd portfolio-website/front-end

# Install dependencies
npm install
```

### Development

```bash
# Start the development server (default: http://localhost:5173)
npm run dev
```

### Production Build

```bash
# Create an optimized production build
npm run build

# Preview the production build locally
npm run preview
```

---

## 📧 EmailJS Setup

The contact form uses [EmailJS](https://www.emailjs.com/) to send messages directly to your inbox without a backend server.

### Step-by-step Configuration

1. **Create a free account** at [emailjs.com](https://www.emailjs.com/)
2. **Create an Email Service** (Gmail, Outlook, Yahoo, etc.)
3. **Create an Email Template** with the following variables:
   - {{name}} — sender's name
   - {{email}} — sender's email address
   - {{message}} — sender's message
4. **Update the values** in src/components/Contact.jsx:

   ```js
   // Replace these with your own EmailJS credentials
   const SERVICE_ID = "service_oy89oay";      // → Your Service ID
   const TEMPLATE_ID = "template_n3jkqyj";    // → Your Template ID
   const PUBLIC_KEY = "dq0aee7luMmW4hzxQ";    // → Your Public Key
   ```

> ⚠️ **Security Note:** The public key is safe to expose in client-side code — EmailJS is designed for this. Never expose your private/secret key.

---

## 📄 Resume

1. Place your resume PDF in the public/ folder
2. Name it Jay_Avgune_Resume.pdf
3. The **"Download Resume"** button in the Hero section will link to this file

---

## 🌐 Deployment

### Vercel (Recommended)

| Step | Action |
|------|--------|
| 1 | Push the repository to [GitHub](https://github.com/) |
| 2 | Go to [Vercel](https://vercel.com/) and import your GitHub repo |
| 3 | Configure the following settings: |
|     | • **Framework Preset:** Vite |
|     | • **Build Command:** npm run build |
|     | • **Output Directory:** dist |
| 4 | Click **Deploy** — done! |

### Netlify

| Step | Action |
|------|--------|
| 1 | Push the repository to GitHub |
| 2 | Go to [Netlify](https://www.netlify.com/) and import your GitHub repo |
| 3 | Configure the following settings: |
|     | • **Build Command:** npm run build |
|     | • **Publish Directory:** dist |
| 4 | Click **Deploy** |

> For SPA routing, create a _redirects file in public/ with: /* /index.html 200

---

## 📂 Project Structure

```
front-end/
├── public/                         # Static assets
│   ├── personal.png                # Profile picture
│   └── Jay_Avgune_Resume.pdf       # Resume (add yours here)
├── src/
│   ├── components/                 # React components
│   │   ├── About.jsx               # About section with stat counters
│   │   ├── BackToTop.jsx           # Scroll-to-top button
│   │   ├── Contact.jsx             # EmailJS contact form
│   │   ├── Experience.jsx          # Experience timeline
│   │   ├── Footer.jsx              # Site footer
│   │   ├── GitHubStats.jsx         # Live GitHub stats
│   │   ├── Hero.jsx                # Hero section with typing effect
│   │   ├── Navbar.jsx              # Navigation bar
│   │   ├── Projects.jsx            # Project showcase with filters
│   │   ├── ScrollProgress.jsx      # Scroll progress indicator
│   │   ├── Skills.jsx              # Skills badge grid
│   │   └── ThemeToggle.jsx         # Light/dark mode toggle
│   ├── hooks/                      # Custom React hooks
│   │   ├── useGitHubStats.js       # GitHub API data fetching
│   │   ├── useReducedMotion.js     # Motion preference detection
│   │   └── useTheme.jsx            # Theme state management
│   ├── App.jsx                     # Root application component
│   ├── main.jsx                    # Application entry point
│   └── style.css                   # Global styles / Tailwind imports
├── index.html                      # HTML entry point
├── package.json                    # Dependencies & scripts
└── vite.config.js                  # Vite configuration
```

---

## 🎨 Color System

| Token          | Hex       | Usage                                   |
| -------------- | --------- | --------------------------------------- |
| neon-cyan    | #22d3ee | Primary accent, links, active states    |
| neon-purple  | #8b5cf6 | Secondary accent, gradient              |
| neon-pink    | #fb7185 | Tertiary accent, highlights             |
| neon-blue    | #38bdf8 | Button gradients, GitHub section        |
| dark-bg      | #050508 | Dark mode background                    |
| light-bg     | #f8f9fc | Light mode background                   |

---

## ⚡ Performance Checklist

- [x] **Lazy loading images** — loading="lazy" on all images
- [x] **Code splitting** — automatic via Vite's built-in code splitting
- [x] **CSS minification** — handled by Tailwind + Vite
- [x] **Font preconnect** — link rel="preconnect" in head
- [x] **Reduced-motion** — prefers-reduced-motion media query
- [x] **Semantic HTML** — proper landmark elements & heading hierarchy
- [x] **Accessible focus states** — visible focus outlines throughout

---

## 🔐 Credibility Notes

- ✅ All **project claims** are real and link to actual GitHub repositories
- ✅ **Stat counters** use real numbers (3 projects, 50+ LeetCode problems solved, 12+ technologies)
- ✅ No **fabricated testimonials**, **employment history**, or **percentage-based skill bars**
- ✅ **GitHub stats** are fetched live from the public API with **graceful fallback** on rate limits
- ✅ The **internship at SaiKet Systems** (Feb–Mar 2026) is genuine
- ✅ All **certifications** listed are verifiable

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. **Fork** the repository
2. **Create** a feature branch (git checkout -b feature/amazing-feature)
3. **Commit** your changes (git commit -m 'Add amazing feature')
4. **Push** to the branch (git push origin feature/amazing-feature)
5. **Open** a Pull Request

---

## 📜 License

This project is **open source** and available under the [MIT License](../LICENSE).

---

<p align="center">
  Made with by <strong>Jay Avgune</strong>
</p>
<p align="center">
  <a href="https://github.com/jay-avgune">GitHub</a> ·
  <a href="https://linkedin.com/in/jay-avgune">LinkedIn</a> ·
  <a href="mailto:jay.avgune@email.com">Email</a>
</p>