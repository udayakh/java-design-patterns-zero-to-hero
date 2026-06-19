/*
 * DSA Quiz engine — vanilla JS, no build step.
 * Reads quizzes from the global window.DSA_QUIZZES registry (populated by
 * the data/*.js files loaded before this script).
 */
(function () {
  "use strict";

  const QUIZZES = window.DSA_QUIZZES || [];
  const LETTERS = ["A", "B", "C", "D", "E", "F"];

  const views = {
    home: document.getElementById("view-home"),
    quiz: document.getElementById("view-quiz"),
    result: document.getElementById("view-result"),
  };

  // Per-run state
  let quiz = null;       // the active quiz object
  let index = 0;         // current question index
  let score = 0;
  let answered = false;  // has the current question been answered?

  function show(view) {
    Object.values(views).forEach((v) => v.classList.add("hidden"));
    views[view].classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---------------- Home ----------------
  function renderHome() {
    let html = `<p class="intro">Pick a module and test your theory.
      Answer, get instant feedback with the <em>why</em>, and see your score.
      Pair this with the coding exercises in <code>src/</code>.</p>`;

    if (QUIZZES.length === 0) {
      html += `<div class="module-card"><div><h3>No quizzes loaded</h3>
        <p>Add a data file under <code>js/data/</code> and a script tag in index.html.</p></div></div>`;
    }

    // Group modules under their `group` heading, preserving each quiz's
    // original index (startQuiz indexes into QUIZZES). Map keeps first-seen
    // order, so groups appear in the order their data files were loaded.
    const groups = new Map();
    QUIZZES.forEach((qz, i) => {
      const key = qz.group || "Other";
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push({ qz, i });
    });

    groups.forEach((items, name) => {
      html += `<h2 class="group-title">${escapeHtml(name)}</h2>`;
      items.forEach(({ qz, i }) => {
        html += `
        <div class="module-card" data-i="${i}" role="button" tabindex="0">
          <div>
            <h3>${escapeHtml(qz.title)}</h3>
            <p>${escapeHtml(qz.blurb || "")}</p>
          </div>
          <span class="count">${qz.questions.length} Q →</span>
        </div>`;
      });
    });

    views.home.innerHTML = html;
    views.home.querySelectorAll(".module-card[data-i]").forEach((card) => {
      const start = () => startQuiz(Number(card.dataset.i));
      card.addEventListener("click", start);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); start(); }
      });
    });

    show("home");
  }

  // ---------------- Quiz ----------------
  function startQuiz(i) {
    quiz = QUIZZES[i];
    index = 0;
    score = 0;
    renderQuestion();
  }

  function renderQuestion() {
    answered = false;
    const q = quiz.questions[index];
    const total = quiz.questions.length;
    const pct = Math.round((index / total) * 100);

    let opts = "";
    q.options.forEach((opt, oi) => {
      opts += `
        <button class="option" data-oi="${oi}">
          <span class="key">${LETTERS[oi]}</span>
          <span>${escapeHtml(opt)}</span>
        </button>`;
    });

    views.quiz.innerHTML = `
      <button id="home-btn" class="btn btn-ghost btn-home">← Modules</button>
      <div class="progress-wrap"><div class="progress-bar" style="width:${pct}%"></div></div>
      <div class="qmeta">
        <span>${escapeHtml(quiz.title)}</span>
        <span>Question ${index + 1} of ${total} · Score ${score}</span>
      </div>
      <div class="question">
        <p class="prompt">${escapeHtml(q.prompt)}</p>
        <div class="options">${opts}</div>
        <div id="explain"></div>
        <div class="row">
          <span class="hint">Tip: press A–${LETTERS[q.options.length - 1]} to answer, Enter for next</span>
          <button id="next" class="btn btn-primary" disabled>Next →</button>
        </div>
      </div>`;

    views.quiz.querySelectorAll(".option").forEach((btn) => {
      btn.addEventListener("click", () => selectAnswer(Number(btn.dataset.oi)));
    });
    document.getElementById("next").addEventListener("click", next);
    document.getElementById("home-btn").addEventListener("click", confirmHome);

    show("quiz");
  }

  function selectAnswer(chosen) {
    if (answered) return;
    answered = true;
    const q = quiz.questions[index];
    const buttons = views.quiz.querySelectorAll(".option");
    const isCorrect = chosen === q.correct;
    if (isCorrect) score++;

    buttons.forEach((btn, oi) => {
      btn.disabled = true;
      if (oi === q.correct) btn.classList.add("correct");
      else if (oi === chosen) btn.classList.add("wrong");
    });

    const verdict = isCorrect
      ? `<span class="verdict ok">✅ Correct.</span>`
      : `<span class="verdict no">❌ Wrong — answer is ${LETTERS[q.correct]}.</span>`;
    document.getElementById("explain").innerHTML =
      `<div class="explanation">${verdict}${escapeHtml(q.explanation)}</div>`;

    const nextBtn = document.getElementById("next");
    nextBtn.disabled = false;
    nextBtn.textContent = index + 1 < quiz.questions.length ? "Next →" : "See results →";
    nextBtn.focus();
  }

  // Leave a quiz in progress — confirm only if there's progress to lose.
  function confirmHome() {
    const inProgress = index > 0 || answered;
    if (inProgress && !window.confirm("Leave this quiz? Your progress will be lost.")) return;
    renderHome();
  }

  function next() {
    if (!answered) return;
    index++;
    if (index < quiz.questions.length) renderQuestion();
    else renderResult();
  }

  // ---------------- Result ----------------
  function renderResult() {
    const total = quiz.questions.length;
    const pct = Math.round((100 * score) / total);
    let verdict;
    if (pct >= 90) verdict = "🏆 Mastered — on to the next module!";
    else if (pct >= 70) verdict = "👍 Solid. Review the ones you missed.";
    else verdict = "📖 Reread the notes, then retake this quiz.";

    views.result.innerHTML = `
      <div class="result">
        <div class="score-ring">${score} / ${total}</div>
        <div class="verdict-text">${pct}% — ${verdict}</div>
        <div class="actions">
          <button id="retake" class="btn btn-primary">Retake</button>
          <button id="home" class="btn btn-ghost">All modules</button>
        </div>
      </div>`;
    document.getElementById("retake").addEventListener("click", () => startQuiz(QUIZZES.indexOf(quiz)));
    document.getElementById("home").addEventListener("click", renderHome);
    show("result");
  }

  // ---------------- Keyboard ----------------
  document.addEventListener("keydown", (e) => {
    if (views.quiz.classList.contains("hidden")) return;
    if (e.key === "Enter") {
      const nextBtn = document.getElementById("next");
      if (nextBtn && !nextBtn.disabled) next();
      return;
    }
    if (!answered) {
      const letter = e.key.toUpperCase();
      const oi = LETTERS.indexOf(letter);
      const q = quiz.questions[index];
      if (oi >= 0 && oi < q.options.length) selectAnswer(oi);
    }
  });

  // Header logo always returns home (with the same confirm guard if mid-quiz).
  const logo = document.querySelector(".topbar h1");
  if (logo) {
    logo.style.cursor = "pointer";
    logo.title = "Back to all modules";
    logo.addEventListener("click", () => {
      if (views.quiz.classList.contains("hidden")) renderHome();
      else confirmHome();
    });
  }

  function escapeHtml(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  }

  renderHome();
})();
