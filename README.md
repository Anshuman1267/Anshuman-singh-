# Portfolio Site

A static portfolio site — plain HTML, CSS, and JS. No build step, no dependencies to install, so it works directly with GitHub Pages.

## File structure

```
index.html      → all page content and structure
styles.css       → all styling
script.js        → mobile menu, swatch copy-to-clipboard, scroll animations
assets/          → favicon and any images you add
README.md        → this file
```

## Put it on GitHub Pages

1. Create a new repository on GitHub (e.g. `your-username.github.io` for a root domain, or any name like `portfolio` for a project site).
2. Upload these files to the repository (drag-and-drop on github.com works, or use `git`):
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch", branch `main`, folder `/ (root)`.
5. Save. GitHub will give you a live URL in a minute or two (usually `https://your-username.github.io/your-repo/`).

## Customize it

Everything is in plain text inside `index.html` — no templating, so just edit directly:

- **Your name / title**: `<h1 class="cover-title">` and `.cover-role` near the top.
- **Projects**: each `<article class="case-card">` in the `#work` section. Swap the title, tags, and year. The colored shapes are placeholders — replace the `<div class="case-plate">` with an `<img>` tag pointing to a real project image once you have one (drop images into `/assets`).
- **Capabilities / colors**: the `#swatch-grid` buttons — edit the `data-code` and `.swatch-label` text.
- **About**: the `#about` section.
- **Contact**: update the `mailto:` link and the Instagram/LinkedIn/Are.na links (currently placeholder `#` links).
- **Colors**: all defined once at the top of `styles.css` under `:root` — change `--cobalt`, `--paper`, etc. to re-theme the whole site.

## Notes

- Fonts (Fraunces, Inter, IBM Plex Mono) load from Google Fonts via CDN — no local font files needed.
- The site is fully responsive and respects `prefers-reduced-motion`.
- No JavaScript framework or build tool is used, so it will render correctly as static files on GitHub Pages with zero configuration.
