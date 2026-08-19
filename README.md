# Portfolio — Trịnh Dương Hoan

Static, responsive AI Engineer portfolio with no build step. Designed for direct deployment to GitHub Pages.

## Run locally

```bash
python3 -m http.server 8080 --directory portfolio
```

Open `http://localhost:8080`.

## Deploy to GitHub Pages

1. Create a repository named `TrinhDuongHoan.github.io`.
2. Copy everything inside `portfolio/` to the repository root.
3. Commit and push to the `main` branch.
4. In **Settings → Pages**, choose **Deploy from a branch**, `main`, and `/ (root)`.

The site will be available at `https://trinhduonghoan.github.io`.

## Customize

- Content, project links, and contact details: `index.html`
- Color, typography, and layout: `styles.css`
- Mobile navigation and scroll effects: `script.js`
- Portrait: `assets/images/avatar.JPG`
- Résumé: `assets/cv/TrinhDuongHoan_AI_Engineer_Intern_CV.pdf`
