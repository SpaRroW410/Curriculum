# Slide images

One subfolder per chapter, named after the `.qmd` file it belongs to
(e.g. `man-and-medicine/` for `foundations/man-and-medicine.qmd`).

To use an image on a slide, reference it with a path relative to the
`.qmd` file, and apply the `.slide-img` class:

```markdown
![Caption text](../images/<chapter>/<file>.jpg){.slide-img}
```

Placeholder files (SVGs with a dashed border and "Photo placeholder"
text) mark spots waiting for a real photo. To swap one in, replace the
placeholder file with the real image **using the same filename** (or
update the filename in the `.qmd` if the extension changes, e.g. `.svg`
to `.jpg`) — no other edits needed.
