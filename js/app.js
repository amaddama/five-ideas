/* Five Ideas — study guide app. No build step; open index.html. */
(function () {
  "use strict";

  const DATA = window.STUDY_DATA;
  const app = document.getElementById("app");
  const byId = Object.fromEntries(DATA.map((c) => [c.id, c]));
  const TABS = [
    { id: "overview", label: "Overview" },
    { id: "ideas", label: "Key ideas" },
    { id: "cards", label: "Flashcards" },
    { id: "quiz", label: "Quiz" },
    { id: "practice", label: "Practice" },
    { id: "notes", label: "My notes" },
  ];

  /* ───────────── helpers ───────────── */
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
  const shuffle = (a) => {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const uid = () => Math.random().toString(36).slice(2, 9);

  /* ───────────── persistence ───────────── */
  const KEY = "fiveideas:v1";
  let state = { learned: {}, notes: {}, custom: {}, best: {} };
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || "null");
    if (saved) state = Object.assign(state, saved);
  } catch (e) { /* ignore */ }
  const save = () => {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
  };
  const custom = (id) => (state.custom[id] ||= { ideas: [], cards: [] });
  const allIdeas = (c) => [...c.ideas, ...custom(c.id).ideas];
  const allCards = (c) => [...c.flashcards, ...custom(c.id).cards];
  const learnedCount = (c) => allIdeas(c).filter((i) => state.learned[i.id]).length;

  /* ───────────── glyphs ───────────── */
  const GLYPHS = {
    control: `<circle cx="50" cy="50" r="42" stroke-dasharray="3 6"/><circle cx="50" cy="50" r="15" fill="currentColor"/>`,
    wuwei: `<circle cx="50" cy="50" r="40"/><path d="M50 10A40 40 0 0 1 50 90A20 20 0 0 1 50 50A20 20 0 0 0 50 10Z" fill="currentColor"/><circle cx="50" cy="30" r="5" fill="var(--bg)" stroke="none"/><circle cx="50" cy="70" r="5" fill="currentColor" stroke="none"/>`,
    socratic: `<circle cx="50" cy="50" r="42"/><text x="50" y="74" text-anchor="middle" font-family="Instrument Serif, serif" font-style="italic" font-size="78" fill="currentColor" stroke="none">?</text>`,
    mean: `<path d="M8 50H92"/><circle cx="8" cy="50" r="4" fill="currentColor"/><circle cx="92" cy="50" r="4" fill="currentColor"/><circle cx="50" cy="50" r="13" fill="currentColor"/><path d="M50 22V32M50 68V78" />`,
    badfaith: `<path d="M50 12A38 38 0 0 0 50 88Z" fill="currentColor"/><path d="M50 12A38 38 0 0 1 50 88" stroke-dasharray="2 6"/><path d="M30 44h10M60 44h10"/>`,
  };
  const glyph = (name, cls = "") =>
    `<svg class="glyph ${cls}" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true">${GLYPHS[name] || GLYPHS.mean}</svg>`;

  /* ───────────── router ───────────── */
  function route() {
    const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    window.scrollTo({ top: 0 });
    if (parts[0] === "c" && byId[parts[1]]) {
      const tab = TABS.some((t) => t.id === parts[2]) ? parts[2] : "overview";
      renderCategory(byId[parts[1]], tab);
    } else if (parts[0] === "quiz") {
      renderMixedQuiz();
    } else {
      renderHome();
    }
  }
  window.addEventListener("hashchange", route);

  /* ───────────── HOME ───────────── */
  function renderHome() {
    document.title = "Five Ideas — a philosophy study guide";
    document.body.style.setProperty("--c", "#E8E2D4");
    const total = DATA.reduce((n, c) => n + allIdeas(c).length, 0);
    const done = DATA.reduce((n, c) => n + learnedCount(c), 0);
    const pct = total ? Math.round((done / total) * 100) : 0;

    app.innerHTML = `
    <div class="home">
      <header class="hero rise" style="--i:0">
        <p class="eyebrow">Study Guide · Vol. 01</p>
        <h1>Five ideas for a <em>steadier</em> mind.</h1>
        <p class="lede">Stoics, Daoists, Athenians and existentialists: five old answers to a very modern question — how do I live well when so much is out of my hands?</p>
        <div class="hero-meta">
          <div class="ring" style="--p:${pct}"><span>${pct}%</span></div>
          <div>
            <strong>${done} of ${total} ideas learned</strong>
            <span class="muted">Hover a panel, then open it to begin.</span>
          </div>
          <a class="btn" href="#/quiz">Mixed quiz →</a>
        </div>
      </header>

      <nav class="panels" aria-label="The five ideas">
        ${DATA.map(
          (c, i) => `
          <a class="panel rise" style="--c:${c.accent}; --i:${i + 1}" href="#/c/${c.id}">
            <span class="panel-num">${c.num}</span>
            <span class="panel-vert">${esc(c.short)}</span>
            ${glyph(c.glyph, "panel-glyph")}
            <span class="panel-body">
              <span class="tag">${esc(c.school)}</span>
              <span class="panel-title">${esc(c.title)}</span>
              <span class="panel-tag">${esc(c.tagline)}</span>
              <span class="panel-foot"><span>${learnedCount(c)}/${allIdeas(c).length} learned</span><span class="arrow">Open →</span></span>
            </span>
          </a>`
        ).join("")}
      </nav>

      <section class="compare rise" style="--i:7">
        <div class="section-head">
          <p class="eyebrow">Side by side</p>
          <h2>How they <em>differ</em></h2>
        </div>
        <div class="table-wrap">
          <div class="cmp" role="table">
            <div class="cmp-row cmp-head" role="row">
              <div></div>
              ${DATA.map((c) => `<a role="columnheader" style="--c:${c.accent}" href="#/c/${c.id}">${glyph(c.glyph, "mini")}<span>${esc(c.short)}</span></a>`).join("")}
            </div>
            ${[
              ["Tradition", (c) => c.school],
              ["Core question", (c) => c.compare.question],
              ["The move", (c) => c.compare.move],
              ["Try this", (c) => c.compare.practice],
              ["Watch out for", (c) => c.compare.pitfall],
            ]
              .map(
                ([label, fn]) => `
              <div class="cmp-row" role="row">
                <div class="cmp-label" role="rowheader">${label}</div>
                ${DATA.map((c) => `<div role="cell" style="--c:${c.accent}">${esc(fn(c))}</div>`).join("")}
              </div>`
              )
              .join("")}
          </div>
        </div>
      </section>

      <footer class="foot">
        <p>Want to add more? Edit <code>js/data.js</code> to extend ideas, quotes, flashcards and quiz questions — or add notes, ideas and cards right in the browser. Quotes are common English renderings; translations vary.</p>
        <button class="link" id="reset">Reset my progress &amp; notes</button>
      </footer>
    </div>`;

    document.getElementById("reset").addEventListener("click", () => {
      if (confirm("Erase all progress, notes and custom items saved in this browser?")) {
        state = { learned: {}, notes: {}, custom: {}, best: {} };
        save();
        renderHome();
      }
    });
  }

  /* ───────────── CATEGORY ───────────── */
  function renderCategory(c, tab) {
    document.title = `${c.title} — Five Ideas`;
    document.body.style.setProperty("--c", c.accent);
    const idx = DATA.indexOf(c);
    const prev = DATA[(idx + DATA.length - 1) % DATA.length];
    const next = DATA[(idx + 1) % DATA.length];
    const total = allIdeas(c).length;
    const done = learnedCount(c);

    app.innerHTML = `
    <div class="cat" style="--c:${c.accent}">
      <nav class="topbar">
        <a href="#/" class="back-link">← All five</a>
        <span class="crumb">${c.num} / 0${DATA.length}</span>
        <span class="pn"><a href="#/c/${prev.id}" title="${esc(prev.title)}" aria-label="Previous: ${esc(prev.title)}">←</a><a href="#/c/${next.id}" title="${esc(next.title)}" aria-label="Next: ${esc(next.title)}">→</a></span>
      </nav>

      <header class="cat-hero">
        <div class="cat-num rise" style="--i:0">${c.num}</div>
        <div class="cat-head">
          <p class="eyebrow rise" style="--i:1">${esc(c.school)} · ${esc(c.origin)}</p>
          <h1 class="rise" style="--i:2">${esc(c.title)}</h1>
          <p class="lede rise" style="--i:3">${esc(c.tagline)}</p>
          <div class="progress rise" style="--i:4" data-progress="${c.id}">
            <div class="bar"><i style="width:${total ? (done / total) * 100 : 0}%"></i></div>
            <span><b>${done}</b> / ${total} ideas learned</span>
          </div>
        </div>
        ${glyph(c.glyph, "hero-glyph")}
      </header>

      <div class="tabs" role="tablist">
        ${TABS.map(
          (t) =>
            `<a role="tab" aria-selected="${t.id === tab}" class="${t.id === tab ? "on" : ""}" href="#/c/${c.id}/${t.id}">${t.label}</a>`
        ).join("")}
      </div>

      <main class="tab-panel" id="tab-panel"></main>

      <footer class="cat-foot">
        <a href="#/c/${prev.id}" style="--c:${prev.accent}"><small>Previous</small><span>${esc(prev.title)}</span></a>
        <a href="#/c/${next.id}" style="--c:${next.accent}"><small>Next</small><span>${esc(next.title)} →</span></a>
      </footer>
    </div>`;

    const panel = document.getElementById("tab-panel");
    ({ overview: tabOverview, ideas: tabIdeas, cards: tabCards, quiz: tabQuiz, practice: tabPractice, notes: tabNotes }[tab])(c, panel);
  }

  function updateProgress(c) {
    const el = document.querySelector(`[data-progress="${c.id}"]`);
    if (!el) return;
    const total = allIdeas(c).length;
    const done = learnedCount(c);
    el.querySelector("i").style.width = `${total ? (done / total) * 100 : 0}%`;
    el.querySelector("span").innerHTML = `<b>${done}</b> / ${total} ideas learned`;
  }

  /* ── Overview ── */
  function tabOverview(c, el) {
    el.innerHTML = `
    <section class="overview">
      <div class="bigq rise" style="--i:0">
        <small>The big question</small>
        <p>${esc(c.bigQuestion)}</p>
      </div>
      <div class="summary rise" style="--i:1">
        ${c.summary.map((p) => `<p>${esc(p)}</p>`).join("")}
      </div>
    </section>

    ${c.spectrum ? spectrumHTML(c) : ""}

    <section class="block">
      <h2 class="h2">Key thinkers</h2>
      <div class="thinkers">
        ${c.thinkers
          .map(
            (t, i) => `
          <article class="thinker rise" style="--i:${i}">
            <div class="avatar">${esc(t.name.split(" ").map((w) => w[0]).slice(0, 2).join(""))}</div>
            <div><h3>${esc(t.name)}</h3><span class="dates">${esc(t.dates)}</span><p>${esc(t.role)}</p></div>
          </article>`
          )
          .join("")}
      </div>
    </section>

    <section class="block">
      <h2 class="h2">In their words</h2>
      <div class="quotes">
        ${c.quotes
          .map((q, i) => `<blockquote class="rise" style="--i:${i}"><p>${esc(q.text)}</p><cite>${esc(q.source)}</cite></blockquote>`)
          .join("")}
      </div>
    </section>

    <section class="block">
      <h2 class="h2">Compare &amp; contrast</h2>
      <div class="vs">
        ${c.vs
          .map((v) => {
            const o = byId[v.id];
            return `<a class="vs-card" style="--o:${o.accent}" href="#/c/${o.id}">
              <span class="vs-label">vs. ${glyph(o.glyph, "mini")} ${esc(o.title)}</span>
              <span>${esc(v.text)}</span>
            </a>`;
          })
          .join("")}
      </div>
    </section>

    <div class="cta-row">
      <a class="btn" href="#/c/${c.id}/ideas">Start the key ideas →</a>
      <a class="btn ghost" href="#/c/${c.id}/quiz">Jump to the quiz</a>
    </div>`;
  }

  function spectrumHTML(c) {
    return `
    <section class="block">
      <h2 class="h2">The virtues, between two vices</h2>
      <div class="spectrum">
        ${c.spectrum
          .map(
            (s, i) => `
          <div class="spec rise" style="--i:${i}">
            <span class="def">${esc(s.deficiency)}<small>too little</small></span>
            <span class="track" aria-hidden="true"><i></i></span>
            <span class="mid">${esc(s.virtue)}<small>the mean</small></span>
            <span class="track" aria-hidden="true"><i></i></span>
            <span class="exc">${esc(s.excess)}<small>too much</small></span>
          </div>`
          )
          .join("")}
      </div>
      <p class="muted note">From Aristotle, Nicomachean Ethics II.7. The mean is relative to the person and the situation, not a fixed midpoint.</p>
    </section>`;
  }

  /* ── Ideas ── */
  function tabIdeas(c, el) {
    const cu = custom(c.id);
    const ideaHTML = (it, n, isCustom) => `
      <details class="idea rise" style="--i:${n}" data-id="${it.id}" ${state.learned[it.id] ? "data-learned" : ""}>
        <summary>
          <span class="n">${String(n + 1).padStart(2, "0")}</span>
          <span class="t"><b>${esc(it.title)}</b><small>${esc(it.short || "")}</small></span>
          <span class="check" aria-label="Learned">✓</span>
          <span class="chev" aria-hidden="true"></span>
        </summary>
        <div class="idea-body">
          <p>${esc(it.body)}</p>
          ${it.example ? `<div class="example"><small>In real life</small><p>${esc(it.example)}</p></div>` : ""}
          <div class="idea-actions">
            <button class="btn small toggle-learned" data-id="${it.id}">${state.learned[it.id] ? "✓ Learned — undo" : "Mark as learned"}</button>
            ${isCustom ? `<button class="link del-idea" data-id="${it.id}">Delete</button>` : ""}
          </div>
        </div>
      </details>`;

    el.innerHTML = `
      <div class="ideas">
        <div class="ideas-tools">
          <p class="muted">Tap an idea to expand it. Mark what you've got.</p>
          <button class="link" id="toggle-all">Expand all</button>
        </div>
        ${c.ideas.map((it, i) => ideaHTML(it, i, false)).join("")}
        ${cu.ideas.map((it, i) => ideaHTML(it, c.ideas.length + i, true)).join("")}
      </div>

      <form class="add" id="add-idea">
        <h3>+ Add your own idea</h3>
        <label>Title<input name="title" required maxlength="80" placeholder="e.g. Amor fati" /></label>
        <label>One-line summary<input name="short" maxlength="120" placeholder="Love your fate" /></label>
        <label>Explanation<textarea name="body" rows="3" required placeholder="What is it, in your own words?"></textarea></label>
        <label>Real-life example <span class="muted">(optional)</span><textarea name="example" rows="2"></textarea></label>
        <button class="btn" type="submit">Add idea</button>
      </form>`;

    el.querySelectorAll(".toggle-learned").forEach((b) =>
      b.addEventListener("click", () => {
        const id = b.dataset.id;
        state.learned[id] = !state.learned[id];
        if (!state.learned[id]) delete state.learned[id];
        save();
        const d = b.closest("details");
        d.toggleAttribute("data-learned", !!state.learned[id]);
        b.textContent = state.learned[id] ? "✓ Learned — undo" : "Mark as learned";
        updateProgress(c);
      })
    );
    el.querySelectorAll(".del-idea").forEach((b) =>
      b.addEventListener("click", () => {
        cu.ideas = cu.ideas.filter((i) => i.id !== b.dataset.id);
        delete state.learned[b.dataset.id];
        save();
        renderCategory(c, "ideas");
      })
    );
    const all = el.querySelectorAll("details");
    document.getElementById("toggle-all").addEventListener("click", (e) => {
      const open = [...all].some((d) => !d.open);
      all.forEach((d) => (d.open = open));
      e.target.textContent = open ? "Collapse all" : "Expand all";
    });
    document.getElementById("add-idea").addEventListener("submit", (e) => {
      e.preventDefault();
      const f = new FormData(e.target);
      cu.ideas.push({
        id: `${c.id}-u${uid()}`,
        title: f.get("title").trim(),
        short: f.get("short").trim(),
        body: f.get("body").trim(),
        example: f.get("example").trim(),
      });
      save();
      renderCategory(c, "ideas");
    });
  }

  /* ── Flashcards ── */
  function tabCards(c, el) {
    let deck = allCards(c);
    let i = 0;
    let flipped = false;
    const cu = custom(c.id);

    function draw() {
      const card = deck[i];
      el.innerHTML = `
      <div class="cards">
        <div class="deck-meta"><span>Card <b>${i + 1}</b> of ${deck.length}</span>
          <span><button class="link" id="shuf">Shuffle</button></span></div>
        <button class="flip ${flipped ? "is-flipped" : ""}" id="flip" aria-label="Flip card">
          <span class="face front"><small>Question</small><span>${esc(card.q)}</span><em>tap to flip</em></span>
          <span class="face back"><small>Answer</small><span>${esc(card.a)}</span></span>
        </button>
        <div class="deck-nav">
          <button class="btn ghost" id="prev">← Prev</button>
          <button class="btn" id="nxt">Next →</button>
        </div>
        <p class="muted hint">Tip: use ← → arrow keys and Space.</p>
      </div>

      <form class="add" id="add-card">
        <h3>+ Add your own flashcard</h3>
        <label>Question<input name="q" required maxlength="140" /></label>
        <label>Answer<textarea name="a" rows="2" required></textarea></label>
        <button class="btn" type="submit">Add card</button>
        ${cu.cards.length ? `<p class="muted">You've added ${cu.cards.length} card${cu.cards.length > 1 ? "s" : ""}. <button type="button" class="link" id="del-last">Remove the most recent</button></p>` : ""}
      </form>`;
      document.getElementById("flip").addEventListener("click", () => { flipped = !flipped; document.getElementById("flip").classList.toggle("is-flipped", flipped); });
      document.getElementById("prev").addEventListener("click", () => go(-1));
      document.getElementById("nxt").addEventListener("click", () => go(1));
      document.getElementById("shuf").addEventListener("click", () => { deck = shuffle(deck); i = 0; flipped = false; draw(); });
      document.getElementById("add-card").addEventListener("submit", (e) => {
        e.preventDefault();
        const f = new FormData(e.target);
        cu.cards.push({ q: f.get("q").trim(), a: f.get("a").trim() });
        save();
        deck = allCards(c);
        i = deck.length - 1;
        flipped = false;
        draw();
      });
      const dl = document.getElementById("del-last");
      if (dl) dl.addEventListener("click", () => { cu.cards.pop(); save(); deck = allCards(c); i = 0; flipped = false; draw(); });
    }
    function go(d) {
      i = (i + d + deck.length) % deck.length;
      flipped = false;
      draw();
    }
    // keyboard
    const onKey = (e) => {
      if (!document.getElementById("flip") || /INPUT|TEXTAREA/.test(document.activeElement.tagName)) return;
      if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === " ") { e.preventDefault(); document.getElementById("flip").click(); }
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("hashchange", () => document.removeEventListener("keydown", onKey), { once: true });
    draw();
  }

  /* ── Quiz (shared) ── */
  function runQuiz(el, { questions, bestKey, accent }) {
    const qs = questions.map((q) => ({
      ...q,
      opts: shuffle(q.options.map((t, k) => ({ t, ok: k === q.answer }))),
    }));
    let n = 0, score = 0;

    function ask() {
      const q = qs[n];
      el.innerHTML = `
      <div class="quiz" ${accent ? `style="--c:${accent}"` : ""}>
        <div class="quiz-top"><span>Question <b>${n + 1}</b> / ${qs.length}</span><span>Score <b>${score}</b></span></div>
        <div class="qbar"><i style="width:${(n / qs.length) * 100}%"></i></div>
        ${q.cat ? `<p class="eyebrow" style="color:${q.accent}">${esc(q.cat)}</p>` : ""}
        <h3 class="q">${esc(q.q)}</h3>
        <div class="opts">
          ${q.opts.map((o, k) => `<button class="opt" data-k="${k}"><kbd>${k + 1}</kbd><span>${esc(o.t)}</span></button>`).join("")}
        </div>
        <div class="why" hidden></div>
      </div>`;
      const btns = [...el.querySelectorAll(".opt")];
      const pick = (k) => {
        if (el.querySelector(".quiz").dataset.done) return;
        el.querySelector(".quiz").dataset.done = "1";
        const ok = q.opts[k].ok;
        if (ok) score++;
        btns.forEach((b, j) => {
          b.disabled = true;
          if (q.opts[j].ok) b.classList.add("right");
          else if (j === k) b.classList.add("wrong");
        });
        const why = el.querySelector(".why");
        why.hidden = false;
        why.innerHTML = `<b>${ok ? "Yes." : "Not quite."}</b> ${esc(q.why)}<button class="btn" id="next-q">${n + 1 === qs.length ? "See results" : "Next question →"}</button>`;
        document.getElementById("next-q").focus();
        document.getElementById("next-q").addEventListener("click", () => { n++; n < qs.length ? ask() : finish(); });
      };
      btns.forEach((b, k) => b.addEventListener("click", () => pick(k)));
    }

    function finish() {
      const best = Math.max(state.best[bestKey] || 0, score);
      state.best[bestKey] = best;
      save();
      const pct = Math.round((score / qs.length) * 100);
      el.innerHTML = `
      <div class="quiz result" ${accent ? `style="--c:${accent}"` : ""}>
        <div class="ring big" style="--p:${pct}"><span>${score}/${qs.length}</span></div>
        <h3>${pct === 100 ? "Flawless." : pct >= 70 ? "Solid grasp." : pct >= 40 ? "Getting there." : "Good start — revisit the ideas."}</h3>
        <p class="muted">Best score here: ${best}/${qs.length}</p>
        <div class="cta-row"><button class="btn" id="again">Try again</button></div>
      </div>`;
      document.getElementById("again").addEventListener("click", () => runQuiz(el, { questions, bestKey, accent }));
    }
    ask();
  }

  function tabQuiz(c, el) {
    const best = state.best[c.id];
    el.innerHTML = `
      <div class="quiz-intro">
        <h2 class="h2">Test yourself</h2>
        <p class="muted">${c.quiz.length} questions on ${esc(c.title)}.${best != null ? ` Your best: ${best}/${c.quiz.length}.` : ""}</p>
        <button class="btn" id="start">Start quiz</button>
      </div>`;
    document.getElementById("start").addEventListener("click", () =>
      runQuiz(el, { questions: shuffle(c.quiz), bestKey: c.id })
    );
  }

  function renderMixedQuiz() {
    document.title = "Mixed quiz — Five Ideas";
    document.body.style.setProperty("--c", "#E8E2D4");
    app.innerHTML = `
    <div class="cat">
      <nav class="topbar"><a href="#/" class="back-link">← All five</a><span class="crumb">Mixed quiz</span><span></span></nav>
      <header class="cat-hero solo"><div class="cat-head">
        <p class="eyebrow">All five categories</p>
        <h1>Mixed quiz</h1>
        <p class="lede">Ten random questions drawn from every idea. A good test of how well you can tell them apart.</p>
      </div></header>
      <main class="tab-panel" id="tab-panel"></main>
    </div>`;
    const el = document.getElementById("tab-panel");
    el.innerHTML = `<div class="quiz-intro"><button class="btn" id="start">Start (10 questions)</button></div>`;
    document.getElementById("start").addEventListener("click", () => {
      const pool = DATA.flatMap((c) => c.quiz.map((q) => ({ ...q, cat: c.title, accent: c.accent })));
      runQuiz(el, { questions: shuffle(pool).slice(0, 10), bestKey: "mixed", accent: "#E8E2D4" });
    });
  }

  /* ── Practice ── */
  function tabPractice(c, el) {
    el.innerHTML = `
    <section class="block first">
      <h2 class="h2">Try it today</h2>
      <ol class="practice">
        ${c.practice.map((p, i) => `<li class="rise" style="--i:${i}"><span>${i + 1}</span><p>${esc(p)}</p></li>`).join("")}
      </ol>
    </section>
    <section class="block">
      <h2 class="h2">Common misreadings</h2>
      <div class="myths">
        ${c.misreadings
          .map(
            (m, i) => `
          <div class="myth rise" style="--i:${i}">
            <div class="m"><small>Myth</small><p>${esc(m.myth)}</p></div>
            <div class="t"><small>Closer to the truth</small><p>${esc(m.truth)}</p></div>
          </div>`
          )
          .join("")}
      </div>
    </section>`;
  }

  /* ── Notes ── */
  function tabNotes(c, el) {
    el.innerHTML = `
    <section class="block first notes">
      <h2 class="h2">Your notes on ${esc(c.short)}</h2>
      <p class="muted">Write questions, examples from your own life, reading lists. Saved automatically in this browser.</p>
      <textarea id="notes" rows="12" placeholder="e.g. Where did I treat something outside my control as mine this week?">${esc(state.notes[c.id] || "")}</textarea>
      <p class="saved" id="saved" aria-live="polite">&nbsp;</p>
    </section>`;
    const ta = document.getElementById("notes");
    const sv = document.getElementById("saved");
    let t;
    ta.addEventListener("input", () => {
      state.notes[c.id] = ta.value;
      save();
      sv.textContent = "Saved ✓";
      clearTimeout(t);
      t = setTimeout(() => (sv.innerHTML = "&nbsp;"), 1200);
    });
  }

  route();
})();
