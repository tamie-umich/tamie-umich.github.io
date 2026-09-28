# TAMIE project website

Source for https://tamie-umich.github.io — a small Jekyll site (no build step needed; GitHub Pages builds it).

## Structure

| Path | What it is |
|---|---|
| `index.html` | Landing page: project description + News |
| `team.html` + `_data/team.yml` | Team page (cards come from the YAML file) |
| `posts.html` + `_posts/` | Progress posts (one Markdown file per post) |
| `_data/news.yml` | Short news items on the landing page |
| `_layouts/` | `default.html` (nav/footer) and `post.html` |
| `_includes/member.html` | One team card |
| `assets/css/style.css` | All styles. Colors and fonts are variables at the top |
| `assets/img/` | Hero illustration, favicon, `team/` photos |

Fonts: **Fraunces** (headings) and **Inter** (text) from Google Fonts. Accents: pink `#c2185b` / `#fbd3e5`, light blue `#1c6e9c` / `#bfe3f5`.

## Deploy (once)

1. In the `tamie-umich` org, create a **public** repo named exactly `tamie-umich.github.io`.
2. Push this folder to its `main` branch.
3. Repo → Settings → Pages → Build and deployment → Source: **Deploy from a branch**, branch `main`, folder `/ (root)`. Save.
4. Site appears at https://tamie-umich.github.io within a minute or two.

## How to update

**Add a post** — create `_posts/YYYY-MM-DD-short-title.md`:

```markdown
---
title: "Workshop 1 recap"
author: Sieun Kim
---

Text in Markdown. Images go in `assets/img/posts/` and are added with
![Alt text describing the image](/assets/img/posts/workshop1.jpg)
```

**Add a news item** — add to the top of `_data/news.yml`:

```yaml
- date: 2026-10-15
  text: First participant workshop held in the Davis Studio.
  link: /posts/2026/10/15/workshop-1-recap/   # optional
```

**Add / edit a team member** — edit `_data/team.yml`. Put photos in `assets/img/team/` (square, ~400×400 px) and set `photo:` and `alt:`. Move someone to the `past:` list when they leave.

**Alt text** — every image must have `alt`. Describe what is in the image; use `alt=""` only for purely decorative images.

## Local preview (optional)

```bash
gem install bundler jekyll
bundle install
bundle exec jekyll serve   # http://localhost:4000
```
