# fanisgioles.com

Personal website of Fanis Gioles, a sound and multimedia artist, researcher, performer and percussionist.

Live at [www.fanisgioles.com](https://www.fanisgioles.com), hosted on GitHub Pages.

## Stack

A static site with no build step and no dependencies: plain HTML, CSS and JavaScript.

## Structure

```
.
├── index.html     # Landing page (upcoming, about, contact)
├── style.css      # Site-wide styles
├── app.js         # Client-side behavior
├── pages/         # Portfolio sections
│   ├── multimedia/
│   ├── performance/
│   ├── projects/
│   └── sound/
├── fotos/         # Images
└── CNAME          # Custom domain for GitHub Pages
```

## Running locally

Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Deployment

Pushing to `main` publishes the site through GitHub Pages. The custom domain is set in `CNAME`.

## Notes

The repository is private. All content and images are © Fanis Gioles, all rights reserved.
