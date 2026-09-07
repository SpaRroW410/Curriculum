window.RevealAutoSize = function () {
  return {
    id: "RevealAutoSize",
    init: function (deck) {
      var MIN_SCALE = 0.5;
      var MAX_SCALE = 1.6;
      var STEP_DOWN = 0.95;
      var STEP_UP = 1.05;
      var MAX_ITER = 15;
      // Fixed-pixel footprint of the bottom UI (footer text, possibly
      // wrapping to two lines, plus slide-number/chalkboard icons) that
      // sits on top of the viewport via position:fixed, independent of
      // Reveal's own zoom-to-fit scaling of the slide canvas. Footers now
      // carry a 5th "Contents" segment (Prev | Top | Contents | Ch N/26 |
      // Next), so they wrap more readily on narrower viewports -- kept
      // a bit more generous than the bare minimum measured earlier.
      var FOOTER_PX = 90;
      // Grow text when content uses less than this fraction of the
      // available height.
      var GROW_THRESHOLD = 0.8;

      function isPrintMode() {
        return document.documentElement.classList.contains("print-pdf");
      }

      function currentClearance() {
        var scale = 1;
        try {
          scale = deck.getScale() || 1;
        } catch (e) {
          scale = 1;
        }
        return FOOTER_PX / scale;
      }

      function fitSlide(section) {
        if (!section || isPrintMode()) {
          return;
        }

        // Set clearance directly on this slide as an inline style, so it
        // applies regardless of whether the deck happens to load the
        // shared slide_deck.css (some decks in this project use their
        // own theme with no shared stylesheet at all).
        var clearance = currentClearance();
        section.style.boxSizing = "border-box";
        section.style.paddingBottom = clearance + "px";
        document.documentElement.style.setProperty(
          "--autosize-clearance",
          clearance + "px"
        );

        // Reset to baseline before measuring.
        section.style.fontSize = "";

        var config = deck.getConfig();
        var available = (config && config.height) || 700;

        var scale = 1;
        var iter = 0;

        // Shrink pass: reduce font-size until content fits, or floor hit.
        while (
          section.scrollHeight > available &&
          scale > MIN_SCALE &&
          iter < MAX_ITER
        ) {
          scale = Math.max(MIN_SCALE, scale * STEP_DOWN);
          section.style.fontSize = scale + "em";
          iter++;
        }

        // Grow pass: only for slides that never needed shrinking, i.e.
        // sparse content with room to spare.
        if (scale === 1) {
          iter = 0;
          while (
            section.scrollHeight < available * GROW_THRESHOLD &&
            scale < MAX_SCALE &&
            iter < MAX_ITER
          ) {
            var next = Math.min(MAX_SCALE, scale * STEP_UP);
            section.style.fontSize = next + "em";
            if (section.scrollHeight > available) {
              // Overshot the available height; back off and stop.
              section.style.fontSize = scale + "em";
              break;
            }
            scale = next;
            iter++;
          }
        }
      }

      function fitCurrentSlide() {
        var current = deck.getCurrentSlide();
        if (current) {
          fitSlide(current);
        }
      }

      deck.on("ready", fitCurrentSlide);
      deck.on("slidechanged", fitCurrentSlide);
      deck.on("resize", fitCurrentSlide);
    },
  };
};
