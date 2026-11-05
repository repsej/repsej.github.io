# Portfolio

Source for Jesper Rasmussen's portfolio, built with Jekyll and hand-written CSS. All page copy is in Markdown.

## Preview locally

Requires Ruby 3.4. On macOS, install it with `brew install ruby@3.4`, then:

```sh
export PATH="/opt/homebrew/opt/ruby@3.4/bin:$PATH"
bundle install
bundle exec jekyll serve --livereload
```

The site runs at <http://localhost:4000>.

## Edit content

| To change | Edit |
|---|---|
| Home page | `index.md` |
| Expertise, About, CV | `expertise.md`, `about.md`, `cv.md` |
| Intro on the Work page | `work.md` |
| Name, job title, LinkedIn link | `_config.yml` |

## Add a project

Add a Markdown file to `_projects/`. The filename becomes the URL, so `my-game.md` is published at `/work/my-game/`.

```yaml
---
title: My Game
description: One sentence on the game and your main technical contribution.
role: Senior Engine Programmer
studio: Studio Name
year: 2026
platforms: [PC, PS5]
tech: [C++, Vulkan]
image: /assets/images/my-game.jpg
image_alt: Describe what the screenshot shows
featured: true
---
```

Projects are sorted by `year`, newest first. Set `featured: true` to show one on the home page. Put images in `assets/images/`.

## Replace placeholders

Find everything still to be replaced:

```sh
grep -rnE "TODO|placeholder: true" --include="*.md" --include="_config.yml" . --exclude=README.md
```

Remove `placeholder: true` from a page to remove its "Placeholder content" banner, and delete the `sample-project-*` files once you've added real projects. The links to them in `expertise.md` need updating too.

## Export the CV as a PDF

Open `/cv/` in a browser and print it to PDF. Print styles remove the navigation and switch to black on white. In Chrome, turn off "Headers and footers" in the print dialog.

## Deploy

Pushing to `main` builds and deploys the site through GitHub Actions (`.github/workflows/pages.yml`). This requires the repository's Pages source to be set to "GitHub Actions".
