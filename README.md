# Five Ideas — philosophy study guide

Open `index.html` in a browser (or `python3 -m http.server` in this folder). No build step.

## Expanding it
- **Content:** edit `js/data.js`. Each category has `ideas`, `thinkers`, `quotes`, `flashcards`, `quiz`, `practice`, `misreadings`.
  Copy a whole category block to add a 6th topic — the home page, compare table and quizzes pick it up automatically
  (give it a unique `id`, `num`, `accent` colour and a `glyph`; new glyphs go in `GLYPHS` in `js/app.js`).
- **In the browser:** add your own ideas and flashcards on each category's tabs, take notes, mark ideas as learned.
  Everything is saved in localStorage (reset link at the bottom of the home page).

## Phone & offline

- Hosted on GitHub Pages. Open the link once while online and the whole app (fonts included) is cached by a service worker, so it works in airplane mode.
- iPhone: Safari → Share → **Add to Home Screen**. Android: Chrome menu → **Install app**.
- After editing any file, bump `VERSION` in `sw.js` so installed copies refresh.
- Your progress and notes are stored on each device (localStorage), so they don't sync between phone and laptop.
