/* Belnovia Studio Pro website: language, prices, film, screenshots, legal pages. No dependencies. */

/* ---- Owner settings -------------------------------------------------------
   Checkout links. Leave empty ("") to send buyers to the download section
   (purchase then happens inside the app after the free trial).
   tr   = Shopier product link for customers in Türkiye (optional; buying inside the app is better:
          the licence is then tied to the buyer's account automatically)
   intl = Paddle checkout link for everyone else                               */
var CHECKOUT = { tr: "", intl: "" };
var DOWNLOAD_URL = "https://github.com/servicescriptorium/belnovia-studio-pro/releases/latest/download/BelnoviaStudioPro-Setup.exe";
/* -------------------------------------------------------------------------- */

(function () {
  "use strict";
  var LANGS = [
    ["tr", "Türkçe"], ["en", "English"], ["de", "Deutsch"],
    ["es", "Español"], ["fr", "Français"], ["pt", "Português"]
  ];
  var LOCALES = { tr: "tr_TR", en: "en_US", de: "de_DE", es: "es_ES", fr: "fr_FR", pt: "pt_BR" };
  var DICT = window.I18N || {};
  var PRICES = { creatorMonthly: "", creatorYearly: "", proMonthly: "", proYearly: "", yearlyNote: "", trialDays: 7, trialVideos: 3, currencyNote: "" };
  var lang = "tr";

  function store(k, v) {
    try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; }
  }

  function pickLang() {
    var q = null;
    try { q = new URLSearchParams(location.search).get("lang"); } catch (e) { q = null; }
    if (q && DICT[q]) return q;
    var saved = store("bs-lang");
    if (saved && DICT[saved]) return saved;
    var list = navigator.languages || [navigator.language || ""];
    for (var i = 0; i < list.length; i++) {
      var code = String(list[i] || "").slice(0, 2).toLowerCase();
      if (DICT[code]) return code;
    }
    return "tr";
  }

  function t(key) {
    var s = (DICT[lang] && DICT[lang][key]) || (DICT.tr && DICT.tr[key]) || "";
    return s.replace(/\{days\}/g, PRICES.trialDays).replace(/\{videos\}/g, PRICES.trialVideos);
  }

  function setMeta(sel, val) {
    var m = document.querySelector(sel);
    if (m && val) m.setAttribute("content", val);
  }

  function apply() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) { el.alt = t(el.getAttribute("data-i18n-alt")); });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) { el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria"))); });
    var doc = document.body.getAttribute("data-legal"), page = document.body.getAttribute("data-page");
    if (doc) {
      renderLegal(doc);
    } else if (page) {
      document.title = t(page + ".title") + " | Belnovia Studio Pro";
    } else {
      document.title = t("meta.title");
      setMeta('meta[name="description"]', t("meta.desc"));
      setMeta('meta[property="og:title"]', t("meta.title"));
      setMeta('meta[property="og:description"]', t("meta.og"));
      setMeta('meta[name="twitter:title"]', t("meta.title"));
      setMeta('meta[name="twitter:description"]', t("meta.og"));
      setMeta('meta[property="og:locale"]', LOCALES[lang]);
      renderPrices();
      renderFilm();
    }
    setLangSrc();
    setBuyLinks();
  }

  /* ---------- prices ---------- */
  function renderPrices() {
    document.querySelectorAll("[data-price]").forEach(function (el) {
      var k = el.getAttribute("data-price");
      var v = PRICES[k];
      // a value may also be {"tr":"...","en":"..."} to show different text per language
      if (v && typeof v === "object") v = v[lang] || v.en || v.tr || "";
      if (k === "creatorMonthly" || k === "proMonthly") {
        el.textContent = v || t("price.unknown");
        el.classList.toggle("is-unknown", !v);
      } else {
        el.textContent = v || "";
        el.hidden = !v;
      }
    });
  }

  function loadPrices() {
    if (!window.fetch) return;
    fetch("prices.json", { cache: "no-cache" })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (p) {
        if (p && typeof p === "object") {
          Object.keys(PRICES).forEach(function (k) { if (p[k] !== undefined && p[k] !== null) PRICES[k] = p[k]; });
        }
        apply();
      })
      .catch(function () { /* keep defaults: prices read "shown in the app" */ });
  }

  function setBuyLinks() {
    var url = lang === "tr" ? (CHECKOUT.tr || CHECKOUT.intl) : (CHECKOUT.intl || CHECKOUT.tr);
    var other = document.body.getAttribute("data-legal") || document.body.getAttribute("data-page");
    document.querySelectorAll("a.buy").forEach(function (a) {
      if (url) { a.href = url; a.rel = "noopener"; } else { a.href = (other ? "index.html" : "") + "#download"; }
    });
    var dl = document.getElementById("dl-btn");
    if (dl) dl.href = DOWNLOAD_URL;
  }

  /* ---------- screenshots: Turkish and English sets; other languages see the English ones ---------- */
  function shotLang() { return lang === "tr" ? "tr" : "en"; }
  function setLangSrc() {
    document.querySelectorAll("[data-langsrc]").forEach(function (el) {
      var u = el.getAttribute("data-langsrc").replace("{l}", shotLang());
      if (el.tagName === "SOURCE") { if (el.getAttribute("srcset") !== u) el.setAttribute("srcset", u); }
      else if (el.getAttribute("src") !== u) el.src = u;
    });
  }

  /* ---------- the film (js/site-config.js) ---------- */
  function byLang(v) {
    if (!v) return "";
    if (typeof v === "string") return v.trim();
    return String(v[lang] || v.en || v[Object.keys(v)[0]] || "").trim();
  }
  function filmSource() {
    var id = String(window.SAMPLE_VIDEO_ID || "").trim();
    if (!/^[A-Za-z0-9_-]{6,20}$/.test(id)) id = "";
    return { id: id, file: id ? "" : byLang(window.DEMO_VIDEO) };
  }
  var filmPlaying = "", filmButton = null;

  function resetFilm() {
    var box = document.getElementById("sample-box");
    if (!box || !filmButton) return;
    filmPlaying = "";
    box.classList.remove("is-playing");
    box.innerHTML = "";
    box.appendChild(filmButton);
  }

  function playFilm() {
    var box = document.getElementById("sample-box");
    if (!box) return;
    var src = filmSource();
    if (!src.id && !src.file) return;
    var key = src.id || src.file;
    if (filmPlaying === key) return;
    filmPlaying = key;
    box.classList.add("is-playing");
    box.innerHTML = "";
    if (src.id) {
      var f = document.createElement("iframe");
      f.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(src.id) + "?autoplay=1&rel=0&modestbranding=1";
      f.title = t("sample.title");
      f.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
      f.allowFullscreen = true;
      f.referrerPolicy = "strict-origin-when-cross-origin";
      box.appendChild(f);
      f.focus();
      return;
    }
    var v = document.createElement("video");
    v.controls = true; v.playsInline = true; v.preload = "auto"; v.autoplay = true;
    var poster = byLang(window.DEMO_POSTER);
    if (poster) v.poster = poster;
    v.setAttribute("aria-label", t("sample.title"));
    v.addEventListener("error", function () {
      // the file is not there (yet): go back to the poster quietly and say so under it
      resetFilm();
      var note = document.getElementById("sample-note");
      if (note) { note.textContent = t("film.missing"); note.hidden = false; }
    });
    v.src = src.file;
    box.appendChild(v);
    var p = v.play && v.play();
    if (p && p.catch) p.catch(function () { /* autoplay refused: the controls are there */ });
    v.focus();
  }

  function renderFilm() {
    var wrap = document.getElementById("film");
    var box = document.getElementById("sample-box");
    if (!wrap || !box) return;
    var src = filmSource();
    var has = !!(src.id || src.file);
    wrap.hidden = !has;
    var watch = document.getElementById("watch-film");
    if (watch) watch.hidden = !has;
    if (!has) return;
    if (filmPlaying && filmPlaying !== (src.id || src.file)) resetFilm();
    var note = document.getElementById("sample-note");
    if (note) { note.textContent = src.id ? t("sample.yt") : ""; note.hidden = !src.id; }
    // poster: the owner's own picture wins over the default language posters
    var img = document.getElementById("sample-poster");
    var own = src.id ? String(window.SAMPLE_POSTER || "").trim() : byLang(window.DEMO_POSTER);
    if (img && own) { img.removeAttribute("data-langsrc"); if (img.getAttribute("src") !== own) img.src = own; }
    var btn = document.getElementById("sample-play");
    if (btn && !btn.dataset.bound) {
      btn.dataset.bound = "1";
      filmButton = btn;
      btn.addEventListener("click", playFilm);
    }
    if (btn) btn.setAttribute("aria-label", t("sample.play"));
  }

  function initWatch() {
    var w = document.getElementById("watch-film");
    if (!w) return;
    w.addEventListener("click", function (e) {
      e.preventDefault();
      var film = document.getElementById("film");
      if (film) film.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "center" });
      playFilm();
    });
  }

  /* ---------- small-screen menu ---------- */
  function initMenu() {
    var btn = document.getElementById("menu-btn"), nav = document.getElementById("nav");
    if (!btn || !nav) return;
    function set(open) {
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("menu-open", open);
    }
    btn.addEventListener("click", function () { set(btn.getAttribute("aria-expanded") !== "true"); });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) set(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && document.body.classList.contains("menu-open")) { set(false); btn.focus(); } });
  }

  /* ---------- gentle reveal while scrolling (content is visible without it) ---------- */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!els.length || !("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.documentElement.classList.add("rv");
    var io = new IntersectionObserver(function (list) {
      list.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------- legal pages ---------- */
  function esc(s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function linkify(s) {
    return s.replace(/servicescriptorium@gmail\.com/g, '<a href="mailto:servicescriptorium@gmail.com">servicescriptorium@gmail.com</a>');
  }
  function renderLegal(doc) {
    var L = window.LEGAL || {};
    var entry = (L[lang] && L[lang][doc]) || (L.tr && L.tr[doc]);
    if (!entry) return;
    document.title = entry[0] + " | Belnovia Studio Pro";
    document.getElementById("legal-title").textContent = entry[0];
    var html = [];
    entry[1].split(/\n+/).forEach(function (line, idx) {
      line = line.trim();
      if (!line) return;
      var safe = esc(line);
      // contract articles such as "MADDE 1 – TARAFLAR" / "ARTICLE 1 – PARTIES"
      if (/^[A-ZÇĞİÖŞÜ][A-Za-zÇĞİÖŞÜçğıöşü]+ \d+\s[–-]\s/.test(line) && line.length < 80) { html.push("<h2>" + safe + "</h2>"); return; }
      // whole-line headings such as "3) CANCELLATION"
      if (/^\d+\)\s/.test(line) && line.length < 70 && line === line.toLocaleUpperCase()) {
        html.push("<h2>" + safe.replace(/^(\d+)\)\s*/, "$1. ") + "</h2>");
        return;
      }
      // inline headings such as "1) ACCEPTANCE. text"
      var m = safe.match(/^(\d+\)\s[^.:]+?[.:])\s(.*)$/);
      var head = m && m[1].slice(0, 14);
      if (m && head === head.toLocaleUpperCase()) {
        html.push("<p><strong>" + m[1] + "</strong> " + linkify(m[2]) + "</p>");
        return;
      }
      if (idx === 0) { html.push('<p class="legal-sum">' + linkify(safe) + "</p>"); return; }
      if (/^-\s/.test(line)) { html.push('<p class="li">' + linkify(safe.slice(2)) + "</p>"); return; }
      html.push("<p>" + linkify(safe) + "</p>");
    });
    // (the texts end with their own "the Turkish version prevails" line)
    document.getElementById("legal-body").innerHTML = html.join("");
  }

  /* ---------- language switcher ---------- */
  function initLang() {
    var sel = document.getElementById("lang-select");
    if (!sel) return;
    LANGS.forEach(function (l) {
      var o = document.createElement("option");
      o.value = l[0]; o.textContent = l[1]; o.lang = l[0];
      sel.appendChild(o);
    });
    sel.value = lang;
    sel.addEventListener("change", function () {
      lang = sel.value;
      store("bs-lang", lang);
      apply();
    });
  }

  lang = pickLang();
  document.documentElement.classList.add("js");
  initLang();
  initMenu();
  initWatch();
  apply();
  initReveal();
  loadPrices();
  document.querySelectorAll(".year").forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
