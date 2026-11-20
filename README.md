# Monika C R — Developer Portfolio Website

A modern, high-performance, responsive personal portfolio website built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS**. Designed for **Monika C R** — Computer Science & Engineering undergraduate specializing in Artificial Intelligence & Machine Learning at JSS Academy of Technical Education, Bengaluru (VTU).

---

## 🌟 Key Features

- **Dark Premium Aesthetic**: Deep charcoal (`#08090d`) canvas accented with subtle cyber purple (`#8b5cf6`), electric blue (`#3b82f6`), and cyan (`#06b6d4`) glows.
- **Dynamic Typing Subtitle**: Cycles through Monika's key identities and specialties.
- **Categorized Skills Architecture**: Grouped cards covering:
  - Programming Languages (C, Python, Java)
  - AI & Machine Learning (Random Forest, Predictive Modelling, Federated Learning, Computer Vision, etc.)
  - Frameworks & Libraries (FastAPI, React, OpenCV, Scikit-learn, Flower, Pandas, NumPy)
  - Blockchain & Web Technologies (Polygon, IPFS, Smart Contracts, REST APIs)
  - Computer Science Fundamentals (DSA, OOP, DBMS, SQL, OS, Networks)
  - Tools & BI Platforms (Tableau, Power BI, Git, VS Code, Google Colab)
  - *No fake proficiency percentages — purely factual skills.*
- **All 6 Featured Engineering Projects**:
  1. **TrustMed-AI**: Decentralized Healthcare Platform (IPFS + Polygon + Federated Learning)
  2. **StockSight**: Stock Market Prediction & Analytics (Random Forest + Technical Indicators + Power BI export)
  3. **Smart Agriculture**: Multilingual Voice Assistant (*3rd Prize Winner*, 5 vernacular languages)
  4. **Personalized Assistive Humanoid Robot**: Human Support & Computer Vision (*Clear distinction between implemented sensory modules and planned roadmap*)
  5. **Smart Pet Feeder**: Real-Time Food Monitoring IoT System
  6. **Smart AR Belt**: Wearable Navigation for Visually Impaired (*Showcased at SPRINTATHON'25*)
- **Interactive Deep-Dive Modals**: Full architectural descriptions, key feature breakdowns, implemented vs. roadmap features, and tech stacks.
- **Custom Vector SVG Illustrations**: Unique, bespoke SVG illustrations tailored specifically for each project (zero broken images or external dependencies).
- **Academic Pathway Timeline**:
  - B.E. in CSE (AI & ML) — JSSATE Bengaluru (VTU) | **9.6 CGPA** (2023–2027)
  - Pre-University Education — Narayana PU College (PCMB) | **96.65%** (2023)
  - School Education — Oxford English High School (SSLC) | **95%** (2021)
- **Extracurricular & Leadership Showcase**: Class representative responsibilities, hackathons (SPRINTATHON'25), technical projects, and cultural volunteering.
- **Interactive Contact & Mailto Engine**: Validated message dispatch with confetti celebration, mailto client fallback, and email copy-to-clipboard.
- **Interactive Resume Modal**: In-browser printable/PDF-exportable resume preview.

---

## 🚀 Quick Start (Running Locally)

### Prerequisites
- Node.js (v18 or higher recommended, tested on v24)
- npm (v9 or higher)

### Installation
```bash
# Navigate to the portfolio directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## ⚙️ Updating Personal Information & Placeholders

All personal information, links, and placeholders are centralized in a single file:
👉 `src/data/portfolioData.ts`

To personalize your portfolio:

| Field | Location in `src/data/portfolioData.ts` | Default Placeholder |
| :--- | :--- | :--- |
| **Email** | `PERSONAL_INFO.email` | `"[ADD MY EMAIL]"` |
| **Phone** | `PERSONAL_INFO.phone` | `"[ADD MY PHONE NUMBER]"` |
| **LinkedIn** | `PERSONAL_INFO.linkedin` | `"[ADD MY LINKEDIN URL]"` |
| **GitHub** | `PERSONAL_INFO.github` | `"[ADD MY GITHUB URL]"` |
| **Resume PDF** | Put `resume.pdf` in `/public` & set `PERSONAL_INFO.resumeUrl` | `"#"` |
| **Profile Photo** | Put `photo.jpg` in `/public` & set `PERSONAL_INFO.photoUrl` | `""` |

---

## 🚢 Deployment Options

### 1. Vercel (Recommended — 1-Click)
1. Push this repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Select your repository and configure:
   - **Root Directory**: `portfolio`
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.

### 2. Netlify
1. Go to [Netlify](https://netlify.com) and click **"Add new site"** > **"Import an existing project"**.
2. Select GitHub and choose your repo.
3. Configure:
   - **Base directory**: `portfolio`
   - **Build command**: `npm run build`
   - **Publish directory**: `portfolio/dist`
4. Click **Deploy Site**.

### 3. GitHub Pages
1. Install `gh-pages`:
   ```bash
   cd portfolio
   npm install --save-dev gh-pages
   ```
2. Add to `portfolio/vite.config.ts`:
   ```ts
   export default defineConfig({
     base: '/portfolio/', // Or '/' if deploying to <username>.github.io
     // ...
   });
   ```
3. Add deployment scripts in `portfolio/package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run `npm run deploy`.

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   └── favicon.svg              # Custom glowing monogram favicon
├── src/
│   ├── components/
│   │   ├── About.tsx            # Personal statement & technical pillars
│   │   ├── Achievements.tsx     # Honors, 3rd Prize, 9.6 CGPA distinction
│   │   ├── Activities.tsx       # Leadership & extracurriculars
│   │   ├── Contact.tsx          # Contact form, mailto, copy triggers
│   │   ├── Education.tsx        # Vertical academic pathway timeline
│   │   ├── Footer.tsx           # Social links, attribution & back-to-top
│   │   ├── Hero.tsx             # Dynamic typing header, avatar card & CTAs
│   │   ├── Navbar.tsx           # Sticky glassmorphic navigation
│   │   ├── PlaceholderModal.tsx # Guidance modal for updating placeholders
│   │   ├── ProjectIllustrations.tsx # Bespoke SVG graphics for all 6 projects
│   │   ├── ProjectModal.tsx     # Interactive project deep-dive modal
│   │   ├── Projects.tsx         # Responsive gallery with filter tabs
│   │   ├── ResumeModal.tsx      # Printable in-browser resume viewer
│   │   ├── Skills.tsx           # Categorized skill cards & live search bar
│   │   └── SocialIcons.tsx      # Crisp SVGs for GitHub and LinkedIn
│   ├── data/
│   │   └── portfolioData.ts     # Single source of truth for all content
│   ├── App.tsx                  # Root application component
│   ├── index.css                # Tailwind CSS v4 & custom glass styling
│   └── main.tsx                 # React DOM root entry
├── index.html                   # SEO metadata, fonts & viewport
├── package.json                 # Dependencies & scripts
├── tsconfig.json                # TypeScript strict configuration
└── vite.config.ts               # Vite & Tailwind CSS plugins
```

---

© Monika C R — Built with React & Tailwind CSS.
