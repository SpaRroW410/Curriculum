# Roadmap

This document tracks what's left to finish the Curriculum site — a
Quarto-based lecture series for Social and Public Health / Community
Medicine, deployed to GitHub Pages from the committed `docs/` folder. It's
a checklist, not a schedule: no dates or owners, just what "done" means.

## 1. Project status

The site structure, navigation, and deploy pipeline are in place. Four
chapters are fully written and are the quality bar for everything else:
`environment/env_health/module1_one_health.qmd`,
`environment/env_health/module2_environment_health.qmd`, and the
`environment/env_health/water/` series (7 modules + a 70-question quiz).
Everything else linked from the navbar/sidebar — 23 chapters — is a 0-byte
stub file. Three more chapters (Air, Light, Radiation under Environment)
are named in body text but don't have files at all yet.

## 2. Technical to-dos

- [ ] Run `quarto render` locally and commit the regenerated `docs/`. The
      nav/sidebar wiring for the env_health content (done in the last
      session) isn't live on the deployed site until this happens.
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

## 3. Content roadmap

The 23 empty chapters, grouped by the site's existing five sections and
suggested authoring order. Order follows the taught sequence already
implied by `intro.qmd`'s Chapter 1–26 numbering; Environment's remaining
stubs are lowest priority since that section already has the most
finished content of any section.

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

### Phase 3 — Health Programs & Populations
- [ ] `programs/health-programmes.qmd`
- [ ] `programs/mdg-sdg.qmd`
- [ ] `programs/demography.qmd`
- [ ] `programs/preventive-medicine.qmd`
- [ ] `programs/tribal-health.qmd`

### Phase 4 — Health Information, Education & Global Perspectives
- [ ] `global/health-information.qmd`
- [ ] `global/health-education.qmd`
- [ ] `global/social-sciences.qmd`
- [ ] `global/health-planning.qmd`
- [ ] `global/community-health.qmd`
- [ ] `global/international-health.qmd`

### Phase 5 — Remaining Environment stubs
- [ ] `environment/waste-management.qmd`
- [ ] `environment/disaster-management.qmd`
- [ ] `environment/occupational-health.qmd`
- [ ] `environment/genetics.qmd`

## 4. Authoring template

What "done" means for a chapter, based on the pattern already established
in `environment/env_health/module1_one_health.qmd` and the
`water/module*.qmd` series — use those as the reference for depth and
format:

- [ ] YAML header matching site conventions (`format: html`, `toc: true`,
      `lightbox: auto`, matching theme)
- [ ] Learning objectives / goals section
- [ ] Core content with definitions, tables, and India-specific data and
      programs where relevant (existing chapters lean heavily on Indian
      public-health context — WHO/GoI standards, named national missions,
      Census data, etc.)
- [ ] References, linked back to / merged with `assets/references.qmd`
- [ ] Optional: a revealjs quiz submodule for self-assessment, following
      the `_extensions/parmsam/quiz` pattern used in
      `environment/env_health/water/module9_quiz.qmd` — not mandatory for
      every chapter
- [ ] Nav entry added to `_quarto.yml` (both `navbar` and `sidebar`) and
      the site re-rendered — so the chapter doesn't repeat the
      "finished but not linked" problem found in the env_health content
      before the last fix

## 5. Out of scope

No timeline or assigned owner — this is a checklist for a
single-maintainer-looking project, not a project-managed schedule.
