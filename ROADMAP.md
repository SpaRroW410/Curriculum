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
duplicated content. `docs/` is fully up to date: a complete from-scratch
`quarto render` of all 41 pages now succeeds, with no R installation
required anywhere in the project (see below). Three more chapters (Air,
Light, Radiation under Environment) are named in
`environment/environment-health.qmd`'s body text but still don't have
files at all — an intentional decision deferred to the next section.

Every revealjs deck now auto-sizes its text to fit available space
(`_extensions/local/autosize/`) — dense slides shrink, sparse ones grow,
and content always keeps clear of the fixed bottom UI (footer,
controls, chalkboard) rather than overlapping it. Every deck's footer
was also fixed: "Home" (previously misleading — it jumped to the
deck's own title slide) is now "Top", and a genuine "Contents" link to
`intro.html` was added alongside it. A new `topic-index.qmd` — an A-Z
glossary of ~65 recurring terms/models/programmes, each linking
straight to the slide(s) covering it — is wired into the navbar and
cross-linked from `intro.qmd`, so a reader can find a concept without
knowing which chapter it is in.

## 2. Technical to-dos

- [x] ~~Run `quarto render` locally and commit the regenerated `docs/`~~
      — done, full site.
- [ ] Verify GitHub repo Settings → Pages → Source is set to **"GitHub
      Actions"**. The fixed `.github/workflows/deploy-pages.yml` only
      serves the site if Pages is configured to use it instead of a
      branch-based deploy.
- [x] ~~Resolve the R/`DT`/`plotly` dependency in
      `environment/env_health/water/module3_water_quality.qmd`~~ — done:
      replaced the DT table with a plain markdown table and the plotly
      chart with a hand-built inline SVG (log-scale, colour-coded,
      native tooltips) — same data and visuals, zero R dependency.
      Verified with a full from-scratch site render (all 41 pages) and
      headless-browser screenshots of both the new table and chart
      slides. This also let a stray `docs/ROADMAP.html` get caught and
      excluded via `project.render` in `_quarto.yml`, and dropped several
      now-unused DT/plotly/jQuery/crosstalk JS libraries from
      `docs/site_libs/`.
- [x] ~~Add adaptive per-slide text sizing to every revealjs deck~~ —
      done: `_extensions/local/autosize` shrinks/grows each slide's
      font-size to fit, reserving a fixed-pixel clearance (converted to
      logical units via `Reveal.getScale()`) so content never overlaps
      the footer/controls/chalkboard. Verified via headless-browser
      screenshots across light/dark themes and multiple viewport sizes.
- [x] ~~Fix the misleading "Home" footer link and add a way back to
      Contents from inside a deck~~ — done: renamed to "Top", added a
      "Contents" link to `intro.html` in every deck's footer (correct
      relative path per file depth).
- [x] ~~Add a topic/term index (glossary) page~~ — done:
      `topic-index.qmd`, an A-Z glossary of ~65 recurring terms/models/
      programmes each linking to the specific chapter/module slide(s)
      that cover it. All internal anchor links verified against the
      rendered site before commit. Wired into the navbar and
      cross-linked from `intro.qmd`.
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
