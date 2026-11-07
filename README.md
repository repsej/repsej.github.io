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
| Homepage | `index.md` |
| About, Expertise, Contact | `about.md`, `expertise.md`, `contact.md` |
| Intro text on Experience or Projects | `experience.md`, `projects.md` |
| Employers | `_experience/*.md` |
| Projects | `_projects/*.md` |
| Site name, job title, search description | `_config.yml` |

Values in front matter can use inline Markdown, so a link can be written as `value: "[My profile](https://example.com)"`.

## Add a project

Add a Markdown file to `_projects/`. The filename becomes the URL, so `my-game.md` is published at `/projects/my-game/`.

```yaml
---
title: My Game
description: One sentence on the project and your contribution.
order: 1
featured: true
role: Your role
studio: Studio name
year: 2026
platforms: PC, PS5
technology: C++, Vulkan
screenshots:
  - file: /assets/images/projects/my-game/screenshot.jpg
    alt: Describe what the screenshot shows
  - file: /assets/images/projects/my-game/clip.gif
    thumb: /assets/images/projects/my-game/clip-still.jpg
    alt: Describe what the clip shows
---
```

The page shows the first entry in `screenshots` as a small thumbnail. Clicking it opens a viewer where you can browse them all. They can be images or GIFs. `thumb` is optional: use a still image for large GIFs, so the GIF only loads when it's opened and the thumbnail gets a play icon. When a link is shared, every page uses the same card, `assets/images/about/share.jpg` (set in `_config.yml`).

A link to an image file in any page's text also opens in the viewer, one image at a time: `[Camping](/assets/images/about/meCamping.jpg)`.

`order` sets the position in project lists, lowest first. `featured: true` also shows the project on the homepage. Fields you leave out are hidden, except that lists expect `studio` and `year`. Write the case study below the front matter.

## Add an employer

Add a Markdown file to `_experience/` with `employer`, `order`, `period` and `job_title` in the front matter, and describe the work below it. `order` sets the position, lowest first. Use it to list employers newest first once dates are in.

## Save the experience page as a PDF

Open `/experience/` in a browser and print it to PDF. Print styles remove the navigation and switch to black on white. In Chrome, turn off "Headers and footers" in the print dialog.

## Deploy

Pushing to `main` builds and deploys the site through GitHub Actions (`.github/workflows/pages.yml`). This requires the repository's Pages source to be set to "GitHub Actions".
