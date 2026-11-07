# Portfolio plan

Status on 2026-11-06: the site builds, the deploy check passes, and no placeholders are left. What remains is a few fixes, final checks and going live.

## 1. Fix before launch

- [ ] **Sharing image:** the Home and WOK pages have none. Add a default PNG or JPG, and set `image` on WOK.
- [ ] **CV PDF:** stop calling WOK a simulator, fix the typos ("reimplantation", "an simulator", "Lead", "5'th") and the title that says "(only linkedin)", then re-export it to `assets/jesper-rasmussen-cv.pdf`.
- [ ] **Prototyping:** the home page lists it, but Expertise has no section for it. Add one or remove it from the list.

## 2. Final checks

- [ ] Try a real phone, Safari and Firefox. So far, testing has only been in Chrome, including a narrow window.
- [ ] Print `/experience/` to PDF and check it. The CV download link will print too.
- [ ] Do a final read-through to cut anything that doesn't need to be there.
- [ ] Run the README's placeholder search, which should find nothing.

## 3. Go live

Don't start this section until the sections above are finished.

- [ ] Set the GitHub noreply address as the git email for this repo, rewrite the existing commits to use it, and force-push.
- [ ] Confirm that no commit on any branch still has the old address.
- [ ] Merge `site-scaffold` into `main`. Pages is off, so the deploy run should fail rather than publish anything.
- [ ] Rename the repo to `repsej.github.io` and make it public.
- [ ] Set the Pages source to GitHub Actions and re-run the deploy.
- [ ] Check the live site: every page and link, the 404 page, `sitemap.xml`, and the preview when the link is pasted into LinkedIn.
- [ ] Add the site URL to your LinkedIn profile.

