# Portfolio — Alexis Durand

Static site. No build step, no dependencies.

```
index.html          page shell, About and Contact copy
css/style.css       all styling
js/content.js       ← project copy lives here
js/sketch.js        placeholder artwork (delete once you have screenshots)
js/contents.js      front-page index list
js/projects.js      project rows and the screen gallery
js/main.js          entry point
images/             your screenshots
```

## Running it locally

The JS uses ES modules, so opening `index.html` straight from
Finder won't work — browsers block module imports over `file://`.
Serve the folder instead:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Or `npx serve`, or the Live Server extension in VS Code.

## Editing

Almost everything is in `js/content.js`. Adding a project means
appending one object to `PROJECTS` and one line to `CONTENTS`.
Nothing else changes.

About and Contact copy is in `index.html` — plain prose belongs
in the markup, where search engines and no-JS readers get it.

### Adding screenshots

Drop a 16:9 image (around 1600×900) in `images/`, then swap the
placeholder `kind` for a `src`:

```js
// before
{ kind: 'ui', caption: 'Route detail' }

// after
{ src: 'images/passages-route.png', caption: 'Route detail' }
```

Once every screen has a `src`, delete `js/sketch.js` and remove
its import from `contents.js` and `projects.js`.

## Deploying to GitHub Pages

```bash
git init
git add .
git commit -m "Portfolio"
git remote add origin git@github.com:YOUR-USERNAME/portfolio.git
git push -u origin main
```

Then in the repo: **Settings → Pages → Source: Deploy from a
branch → `main` / `(root)`**. Live in a minute or two at
`YOUR-USERNAME.github.io/portfolio`.

Naming the repo `YOUR-USERNAME.github.io` instead puts it at the
root of your username, which is the address worth having.

The `.nojekyll` file stops GitHub Pages from running its Jekyll
build over the folder. Leave it there.

## Before you share it

- [ ] Every Source and Live link actually resolves
- [ ] `resume.pdf` exists, or that row is removed
- [ ] The email in Contact is one you read
- [ ] `og:image` points at a real 1200×630 file, so link previews aren't blank
- [ ] Checked on a phone
