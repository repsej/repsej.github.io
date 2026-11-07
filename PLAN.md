# Portfolio plan

Status on 2026-11-06: the site builds, the deploy check passes, and no placeholders are left. What remains is a few fixes, final checks and going live.

## 1. Fix before launch

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

## 4. Post live

CV todo. These are optional, roughly in order of importance:

- "WHAT THE GOLF!": I believe the game's title is "WHAT THE GOLF?", with a question mark, and your Expertise page writes it that way. Worth checking.
- The page break splits NDS Denmark: the first bullet is alone at the bottom of page 1 and the rest continue on page 2. Moving the whole NDS block to page 2, or tightening page 1, would read better.
- "2025 – 2025" and "2019 – 2019": just "2025" and "2019".
- "old danish 13-system": capitalize "Danish".

Small wording points:

- "Worked with integrating third party games" could be "Integrated third-party games".
- "AppStore" is officially "App Store".
- "Taught new Game Developers" doesn't need the capitals.
- "a F2P game" reads better as "an F2P game", because F2P is said "eff".
- "Holte Gymnasium /": there's a double space before the slash. "Matematisk student" is Danish; for non-Danish readers, something like "Upper secondary school (maths and science)" would be clearer.
