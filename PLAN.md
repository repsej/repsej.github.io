# Portfolio plan

The site builds cleanly and has its pages, styling, print styles and deploy workflow. What's left is mostly writing: on 2026-11-06, 71 lines of content still contained placeholders.

- [ ] **Which projects:** pick the three. Together they should show the range from gameplay to low-level work.

1) TurnHero
2) Raid Leader
3) WOK


## 2. Write the content

- [x] **Experience:** imported from the CV, newest first.
- [ ] **Projects:** front matter, overview, role, technical challenges and results for each one.
- [ ] **Permissions:** check that screenshots, code samples and metrics are OK to share, especially from former employers.
- [x] **Screenshot viewer:** thumbnails that open full screen, for images and GIFs. Raid Leader and TurnHero are done.
- [ ] **WOK images:** add screenshots and set its `image` field. Then delete `placeholder.svg`.
- [ ] **TurnHero screenshots:** decide whether the real player names and third-party board game art are OK to publish.
- [ ] **Code samples:** add a real one or delete the block. Its placeholder has no `<mark>` tag, so the deploy check won't catch it.
- [ ] **Expertise:** intro line, area write-ups with project links, and languages and tools.
- [ ] **About:** career summary and how you work.
- [ ] **Small details:** projects intro line, location and time zone (on both Home and Contact), and LinkedIn URL.

## 3. Polish

- [ ] Add a default PNG or JPG sharing image. The home page has none, and project pages use an SVG, which many link previews don't display.
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
