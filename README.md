# TAMIE project website

Source for https://tamie-umich.github.io — built with [Astro](https://astro.build), deployed by GitHub Actions.

## Preview locally

```bash
npm install     # first time only
npm run dev     # http://localhost:4321 — reloads as you edit
```

`npm run build` writes the finished site to `dist/` (what gets deployed).

## Structure

| Path | What it is |
|---|---|
| `src/pages/index.astro` | Landing page: project description + News |
| `src/pages/team.astro` | Team page (cards come from `src/data/team.yml`) |
| `src/pages/posts/` | Posts list and single-post page |
| `src/content/posts/` | Progress posts — one Markdown file each |
| `src/data/team.yml` | Team members (current + past) |
| `src/data/news.yml` | Short news items on the landing page |
| `src/layouts/Base.astro` | Nav, footer, fonts, `<head>` |
| `src/components/Member.astro` | One team card |
| `src/styles/style.css` | All styles. Colors and fonts are variables at the top |
| `public/img/` | Hero illustration, favicon, `team/` photos |

Font: **Inter** (Google Fonts) for everything; headings are bold weight. Accents: pink `#c2185b` / `#fbd3e5`, light blue `#1c6e9c` / `#bfe3f5`.

## Deploy (once)

1. In the `tamie-umich` org, create a **public** repo named exactly `tamie-umich.github.io`.
2. Push this folder to its `main` branch.
3. Repo → Settings → Pages → Build and deployment → Source: **GitHub Actions**.
4. The included workflow (`.github/workflows/deploy.yml`) builds and publishes on every push. Site: https://tamie-umich.github.io

## How to update

**Add a post** — create `src/content/posts/YYYY-MM-DD-short-title.md` (file name becomes the URL):

```markdown
---
title: "Workshop 1 recap"
date: 2026-10-15
author: Sieun Kim
---

Text in Markdown. Put images in `public/img/posts/` and add them with
![Alt text describing the image](/img/posts/workshop1.jpg)
```

**Add a news item** — add to the top of `src/data/news.yml`:

```yaml
- date: 2026-10-15
  text: First participant workshop held in the Davis Studio.
  link: /posts/2026-10-15-workshop-1-recap/   # optional
```

**Add / edit a team member** — edit `src/data/team.yml`. Put photos in `public/img/team/` (square, ~400×400 px) and set `photo: /img/team/name.jpg` and `alt:`. Move someone to the `past:` list when they leave.

**Alt text** — every image must have `alt`. Describe what is in the image; use `alt=""` only for purely decorative images.
