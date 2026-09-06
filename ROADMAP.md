# Roadmap

This document tracks what's left to finish the Curriculum site — a
Quarto-based lecture series for Social and Public Health / Community
Medicine, deployed to GitHub Pages from the committed `docs/` folder. It's
a checklist, not a schedule: no dates or owners, just what "done" means.

## 1. Project status

**All 26 chapters in the curriculum are now written**, each a revealjs
slide deck following a consistent convention: content tiered into
Must Know / Should Know / May Know / Question slides (each its own
pastel background colour, defined in `assets/slide_deck.css`), facts
verified against primary/standard sources, 4–7 self-check MCQs via the
`parmsam/quiz` plugin, and cross-references between chapters instead of
duplicated content. `docs/` has been re-rendered for every page site-wide
except `environment/env_health/water/module3_water_quality.qmd`, which
still needs the R/DT/plotly dependency addressed (see below) before a
full from-scratch render is possible in a sandboxed environment — it
already renders fine wherever R + those packages are available locally.
Three more chapters (Air, Light, Radiation under Environment) are named
in `environment/environment-health.qmd`'s body text but still don't have
files at all — an intentional decision deferred to the next section.

## 2. Technical to-dos

- [x] ~~Run `quarto render` locally and commit the regenerated `docs/`~~
      — done: every page's rendered output now reflects the current
      navbar/sidebar, except `module3_water_quality.html` (blocked by
      the R dependency below).
- [ ] Verify GitHub repo Settings → Pages → Source is set to **"GitHub
      Actions"**. The fixed `.github/workflows/deploy-pages.yml` only
      serves the site if Pages is configured to use it instead of a
      branch-based deploy.
- [ ] Resolve the R/`DT`/`plotly` dependency in
      `environment/env_health/water/module3_water_quality.qmd`. It's the
      one file that currently blocks a from-scratch `quarto render` (CRAN
      isn't reachable from a sandboxed CI-like environment, which is how
      this was discovered). Two options — pick one:
      - (a) Keep it as-is and document that rendering requires a local R
        install with `DT` and `plotly`, or
      - (b) Replace the two R chunks with a static Quarto/markdown table
        and a non-R chart, dropping the R dependency entirely.
- [ ] Decide what to do about the three unfiled Environment chapters (Air
      and Health, Light and Health, Radiation and Health) named in
      `environment/environment-health.qmd`'s Chapter Listing with no file
      and no link. Either create stub files so the listing matches
      reality, or mark them "planned" in the body text until authored.
- [ ] Expand `README.md` past "# Curriculum / Teaching lectures" — add a
      short project description, how to render locally (`quarto render`),
      and how the site is deployed, so a new contributor doesn't have to
      dig through commit history to get oriented.

## 3. Content roadmap — ✅ all 26 chapters complete

The 23 originally-empty chapters (plus the 3 already-finished env_health
chapters and the 26th, International Health) are all written. Kept below
for reference on the phasing and order used.

### Phase 1 — Foundations of Health & Epidemiology ✅ complete
Everything downstream depends on the terms and methods defined here.
- [x] `foundations/man-and-medicine.qmd`
- [x] `foundations/concept-health-disease.qmd`
- [x] `foundations/principles-epidemiology.qmd`
- [x] `foundations/epidemiologic-methods.qmd`
- [x] `foundations/screening.qmd`

### Phase 2 — Communicable & Non-Communicable Diseases ✅ complete
- [x] `diseases/communicable-diseases.qmd`
- [x] `diseases/ncd.qmd`
- [x] `diseases/essential-medicines.qmd`
- [x] `diseases/nutrition.qmd`
- [x] `diseases/mental-health.qmd`

### Phase 3 — Health Programs & Populations ✅ complete
- [x] `programs/health-programmes.qmd`
- [x] `programs/mdg-sdg.qmd`
- [x] `programs/demography.qmd`
- [x] `programs/preventive-medicine.qmd`
- [x] `programs/tribal-health.qmd`

### Phase 4 — Health Information, Education & Global Perspectives ✅ complete
- [x] `global/health-information.qmd`
- [x] `global/health-education.qmd`
- [x] `global/social-sciences.qmd`
- [x] `global/health-planning.qmd`
- [x] `global/community-health.qmd`
- [x] `global/international-health.qmd`

### Phase 5 — Remaining Environment stubs ✅ complete
- [x] `environment/waste-management.qmd`
- [x] `environment/disaster-management.qmd`
- [x] `environment/occupational-health.qmd`
- [x] `environment/genetics.qmd`

Chapter numbering note: these four are Chapters 17–20 per `intro.qmd`'s
existing section order (Environment 16–20 precedes Global Perspectives
21–26) — the Phase 4 chapters were originally mislabeled 16–21 when they
were authored before these Environment stubs; that was corrected
alongside writing Chapter 17.

## 4. Authoring template (the convention all 26 chapters now follow)

What "done" means for a chapter, as established across Chapters 1–26 and
`environment/env_health/module1_one_health.qmd`:

- [x] `format: revealjs`, `theme: serif`, `css: .../assets/slide_deck.css`,
      `slide-number`, `chalkboard`, `preview-links`, `center`, `zoom`,
      `parmsam/quiz` plugin
- [x] A `## Welcome {#home}` slide with learning objectives
- [x] Content tiered into Must Know (`#E3F2E1` mint) / Should Know
      (`#FFF6DA` butter yellow) / May Know (`#E8E4F3` lavender) slides,
      each with a text badge (not colour alone) — plus Question slides
      (`#FDE8E8` coral) with 4–7 self-check MCQs via `.quiz-question` divs
- [x] Facts verified against primary/standard sources (WHO, GoI
      programme documentation, standard textbook topics) via web research
      before writing
- [x] Footer with Previous/Home/Chapter-number/Next links matching
      `intro.qmd`'s 1–26 numbering, and cross-references to other
      chapters instead of duplicating their content
- [x] A References slide and a closing "Thank You" slide
- [x] Nav entry already present in `_quarto.yml` (both `navbar` and
      `sidebar`, pre-existing since the site's original scaffold) — no
      further nav wiring needed
- [x] Rendered individually with `quarto render <file>` and checked
      (`data-background-color` slide counts, `git status` scoped to
      expected files) before commit

## 5. Out of scope

No timeline or assigned owner — this is a checklist for a
single-maintainer-looking project, not a project-managed schedule.
