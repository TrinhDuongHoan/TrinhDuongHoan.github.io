# Portfolio — Trịnh Dương Hoan

Static, responsive AI Engineer and Data Scientist portfolio with no build step. Uses a centered introduction, serif typography, and separate sections for education, experience, publications, projects, awards, skills, and contact. Project cards use two columns on desktop and one on mobile. The palette is light gray and white, with charcoal text and gray buttons. Deploys directly to GitHub Pages.

Layout reference: [Alan Duong’s portfolio](https://alantrungduong.github.io/).

## Run locally

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Deploy to GitHub Pages

This checkout belongs to `TrinhDuongHoan/TrinhDuongHoan.github.io`.

1. Commit the updated site files and the current résumé, then push to the `main` branch.
2. In **Settings → Pages**, use **Deploy from a branch**, `main`, and `/ (root)`.

The site will be available at `https://trinhduonghoan.github.io`.

## Customize

- Content, project links, and contact details: `index.html`
- Color, typography, and layout: `styles.css`
- Mobile navigation, active section tracking, and project filters: `script.js`
- Portrait: `assets/images/avatar.JPG`
- Résumé: `assets/cv/TrinhDuongHoan_AI_Engineer_CV.pdf`

## Content sources

- Experience and education: the current résumé in `assets/cv/`.
- Project descriptions: public GitHub repositories and their READMEs, reviewed on November 24, 2026.
- Featured projects: Fraud Detection, Learning Intelligence MLOps, IUH Admission Agentic RAG, VietDocAI, and Hospital Readmission MLOps.

Project content is included in HTML so it remains available without JavaScript or a live GitHub API request. When adding projects, set `data-categories` to one or more of `ml`, `mlops`, `genai`, or `vision` to include them in the filters.
