# Anshuman Singh — Portfolio Site

A static personal portfolio/resume site — plain HTML, CSS, and JS. No build step, no dependencies, so it works directly with GitHub Pages.

## File structure

```
index.html      → all page content and structure
styles.css       → all styling
script.js        → mobile menu + scroll animations
assets/          → your photo, work samples, and favicon
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

- **Photo**: replace `assets/profile.jpg` with any headshot (keep the filename, or update the `src` in `index.html`).
- **Work samples**: swap files in `assets/` (`work-calendar.jpg`, `work-redinspo.jpg`, `work-banner.jpg`) with your own designs, or add more `<figure class="work-card">` blocks in the `#work` section of `index.html`.
- **Text**: all resume content (summary, skills, education, certifications, contact) is plain text inside `index.html` — edit directly.
- **Colors**: defined once at the top of `styles.css` under `:root` (`--teal`, `--coral`, etc.) — change these to re-theme the whole site.

## Notes

- Fonts (Space Grotesk, Inter, JetBrains Mono) load from Google Fonts via CDN.
- Fully responsive, and respects `prefers-reduced-motion`.
- No framework or build tool — renders correctly as static files on GitHub Pages with zero configuration.
