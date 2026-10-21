/* Setup guide page: fills the texts of kurulum.html in the chosen language (js/setup-texts.js).
   Only text is replaced, so the animated guide slots (.guide-anim) are never touched. */
(function () {
  "use strict";
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function md(s) {
    return esc(s)
      .replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>")
      .replace(/\[([^\]]+)\]\((https:\/\/[^)\s]+)\)/g, '<a href="$2" rel="noopener" target="_blank">$1</a>')
      .replace(/servicescriptorium@gmail\.com/g, '<a href="mailto:servicescriptorium@gmail.com">servicescriptorium@gmail.com</a>');
  }
  function render() {
    var all = window.SETUP || {};
    var lang = document.documentElement.lang;
    var L = all[lang] || all.en || all.tr;
    if (!L) return;
    document.title = L.title + " | Belnovia Studio Pro";
    var h1 = document.getElementById("guide-title"); if (h1) h1.textContent = L.title;
    var lead = document.getElementById("guide-lead"); if (lead) lead.textContent = L.lead;
    var tocLabel = document.getElementById("guide-toc-label"); if (tocLabel) tocLabel.textContent = L.toc;
    var toc = document.getElementById("guide-toc-list");
    if (toc) toc.innerHTML = L.sections.map(function (s) { return '<li><a href="#' + esc(s.id) + '">' + esc(s.h) + "</a></li>"; }).join("");
    L.sections.forEach(function (s) {
      var sec = document.getElementById(s.id);
      if (!sec) return;
      sec.querySelector('[data-g="h"]').textContent = s.h;
      sec.querySelector('[data-g="intro"]').innerHTML = md(s.intro || "");
      sec.querySelector('[data-g="steps"]').innerHTML = s.steps.map(function (x) { return "<li>" + md(x) + "</li>"; }).join("");
      var note = sec.querySelector('[data-g="note"]');
      note.hidden = !s.note;
      note.innerHTML = s.note ? md(s.note) : "";
    });
  }
  render();
  var sel = document.getElementById("lang-select");
  if (sel) sel.addEventListener("change", render);
  // a deep link (kurulum.html#youtube) lands on the right section once the texts are in place
  if (location.hash) { var t = document.getElementById(location.hash.slice(1)); if (t) setTimeout(function () { t.scrollIntoView(); }, 0); }
})();
