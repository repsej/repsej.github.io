# Portfolio plan

The site builds cleanly and has its pages, styling, print styles and deploy workflow. What's left is mostly writing: on 2026-11-06, 71 lines of content still contained placeholders.

## Decisions

- [x] **Years of experience:** 20+ everywhere.
- [x] **Earlier employers:** give the ones that matter their own entries with dates and titles, drop the rest, and remove the "Other employers" entry.
- [x] **Expertise page length:** cut "General game development" and merge any area without a project to back it up. Update the home page list to match.
- [x] **Number of projects:** three, all featured on the home page.
- [ ] **Which projects:** pick the three. Together they should show the range from gameplay to low-level work.
- [x] **Author email in git history:** hide it by switching to the GitHub noreply address before the repo goes public.

## 1. Fix before writing

- [x] Use the same years figure everywhere.
- [x] Commit the `about.md` edit.
- [x] Add `CLAUDE.md` to `exclude` in `_config.yml`, so it can't be published at `/CLAUDE.md` if it's ever committed.
- [x] Make the deploy fail if the built site contains `<mark>` or `placeholder.svg`.

## 2. Write the content

- [ ] **Experience:** dates, job titles and what you owned or changed at Unity, BetaDwarf and Triband, plus any earlier employers. Then reorder newest first.
- [ ] **Projects:** front matter, overview, role, technical challenges and results for each one.
- [ ] **Permissions:** check that screenshots, code samples and metrics are OK to share, especially from former employers.
- [ ] **Project images:** add real screenshots and alt text, or remove the image fields. Then delete `placeholder.svg`.
- [ ] **Code samples:** add a real one or delete the block. Its placeholder has no `<mark>` tag, so the deploy check won't catch it.
- [ ] **Expertise:** intro line, area write-ups with project links, and languages and tools.
- [ ] **About:** career summary and how you work.
- [ ] **Small details:** projects intro line, location and time zone (on both Home and Contact), and LinkedIn URL.

## 3. Polish

- [ ] Add a default PNG or JPG sharing image. The home page has none, and project pages use an SVG, which many link previews don't display.
- [ ] Add `width` and `height` to project images so the page doesn't jump as they load.
- [ ] Check the phone layout, and print `/experience/` to PDF to check that too.
- [ ] Do a final edit to cut anything that doesn't need to be there.
- [ ] Run the README's placeholder search, which should find nothing.

## 4. Go live

Don't start this section until the content is finished.

- [ ] Set the GitHub noreply address as the git email for this repo, rewrite the existing commits to use it, and force-push.
- [ ] Confirm that no commit on any branch still has the old address.
- [ ] Merge `site-scaffold` into `main`. Pages is off, so the deploy run should fail rather than publish anything.
- [ ] Rename the repo to `repsej.github.io` and make it public.
- [ ] Set the Pages source to GitHub Actions and re-run the deploy.
- [ ] Check the live site: every page and link, the 404 page, `sitemap.xml`, and the preview when the link is pasted into LinkedIn.
- [ ] Add the site URL to your LinkedIn profile.
