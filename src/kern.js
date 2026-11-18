/* ===== Kern: Helfer, Stand, Blatt-Rahmen, Bausteine =====
   Blatt-Standard nach dem GGK-Labor (M22, Fassung 4.1): links das Register mit allen Aufträgen und ihrem Stand,
   rechts genau ein Auftrag als Seite zum Scrollen. Freigabe: offen · auf Ansage · nach der eigenen Antwort.
   Gespeichert wird nur auf diesem Gerät (localStorage), ohne Namen. Sichern und Laden als Datei auf der Startseite. */
"use strict";
var D = DATEN;
var $ = function (s, r) { return (r || document).querySelector(s); };
var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

/* h("div", {class:"x", text:"…", html:"…", on:{click:fn}, …attribute}, kinder…) */
function h(tag, a) {
  var e = document.createElement(tag), k;
  a = a || {};
  for (k in a) {
    var v = a[k];
    if (v === null || v === undefined || v === false) continue;
    if (k === "text") e.textContent = v;
    else if (k === "html") e.innerHTML = v;
    else if (k === "on") { for (var ev in v) e.addEventListener(ev, v[ev]); }
    else if (k === "class") e.className = v;
    else e.setAttribute(k, v === true ? "" : v);
  }
  for (var i = 2; i < arguments.length; i++) haenge(e, arguments[i]);
  return e;
}
function haenge(e, x) {
  if (x === null || x === undefined || x === false) return;
  if (Array.isArray(x)) { x.forEach(function (y) { haenge(e, y); }); return; }
  e.appendChild(typeof x === "string" ? document.createTextNode(x) : x);
}
var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
function woerter(s) { return (String(s || "").trim().match(/\S+/g) || []).length; }
function ruhig() {
  var sys = false; try { sys = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { sys = false; }
  return sys || document.documentElement.getAttribute("data-bewegung") === "weniger";
}
/* SVG-Elemente: Namensraum vom vorhandenen <svg> der Seite, damit Prüfskripte keine fremde Adresse sehen */
var NS_SVG = (function () { var s = document.querySelector("svg"); return s ? s.namespaceURI : "http://www.w3.org/2000/svg"; })();
function sv(tag, a, text) {
  var e = document.createElementNS(NS_SVG, tag), k;
  for (k in a || {}) e.setAttribute(k, a[k]);
  if (text !== undefined) e.textContent = text;
  return e;
}
/* Wie viel oben vom Kopf (und in schmaler Ansicht von der Registerleiste) verdeckt ist */
function obenFrei() { var k = $(".kopf"), r = $("#reg"), n = (k ? k.offsetHeight : 60) + 14; if (window.innerWidth < 900 && r && !$("#v-blatt").hidden) n += r.offsetHeight; return n; }
function bald(fn, ms) { var t = 0; return function () { clearTimeout(t); t = setTimeout(fn, ms); }; }
function einblenden(e, ms) {
  if (!e || ruhig() || !e.animate) return;
  e.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: ms || 200, easing: "cubic-bezier(.23,1,.32,1)" });
}

/* ---------- Stand ---------- */
var S = ladeStand();
function leer() { return { v: 4, w: {}, t: {}, b: {} }; }
function norm(s) { s = s && typeof s === "object" ? s : leer(); s.v = 4; s.w = s.w || {}; s.t = s.t || {}; s.b = s.b || {}; return s; }
function ladeStand() {
  var s = null;
  try { s = JSON.parse(window.localStorage.getItem(D.schluessel)); } catch (e) { s = null; }
  if (s && s.v === 4) return norm(s);
  var alt = null;
  try { alt = JSON.parse(window.localStorage.getItem(D.schluesselAlt)); } catch (e) { alt = null; }
  return alt ? migriere(alt) : leer();
}
/* Stand aus Version 2 (v3-Schlüssel) übernehmen: nur Auswahlen – Texte lagen damals nur in der Sitzung.
   Aufträge, an denen schon gearbeitet wurde, sind danach freigegeben: Version 2 kannte keine Freigaben. */
function migriere(a) {
  var s = leer(), w = s.w;
  function frei(id, auf) { var b = s.b[id] = s.b[id] || { frei: {}, durch: {} }; b.frei[auf] = true; }
  if (typeof a.vor === "number") w["e1.vor"] = { wert: a.vor, fest: true };
  if (typeof a.nach === "number") { w["e1.nach"] = { wert: a.nach, fest: true }; frei("e1", "a6"); }
  if (a.lese) { w["e1.lese"] = { sel: a.lese, zu: !!a.leseZu }; frei("e1", "a2"); }
  if (a.lage) { w["e1.netz"] = { lage: a.lage, links: a.links || [], geprueft: !!a.geprueft }; frei("e1", "a3"); }
  if (a.fall || a.fallWahl) { w["e1.fall"] = { akt: a.fall, wahl: a.fallWahl || {}, fest: a.fallFest || {}, geprueft: a.fallGeprueft || {}, inst: a.inst || {} }; frei("e1", "a4"); }
  else if (a.inst && a.inst.praxis) w["e1.fall"] = { inst: { praxis: a.inst.praxis } };
  if (a.produktZu) { w["e1.spur"] = { zu: true }; frei("e1", "a5"); }
  var szene = ["e1.max", "e2.szene", "e3.korczak", "e4.szene", "e5.szene", "e6.szene", "e7.szene", "e8.szene"];
  Object.keys(a.wahlFest || {}).forEach(function (k) {
    var m = /^e(\d)$/.exec(k), i = (a.wahl || {})[k];
    if (typeof i !== "number") return;
    if (m && szene[+m[1]]) { w[szene[+m[1]]] = { i: i, fest: true }; if (+m[1] === 2) frei("e3", "a3"); }
    if (/^p\d$/.test(k)) { w["e3." + k] = { i: i, fest: true }; frei("e3", "a5"); }
  });
  if (typeof a.plakat === "number") { w["e3.plakat"] = { recht: a.plakat, zu: !!a.plakatZu }; frei("e3", "a6"); }
  if (a.alltag) { w["e3.alltag"] = { auf: a.alltag }; frei("e3", "a5"); }
  return s;
}
function speichere() { try { window.localStorage.setItem(D.schluessel, JSON.stringify(S)); } catch (e) { /* privat oder voll: die Seite läuft weiter */ } }
var speichereBald = bald(speichere, 250);
function W(key, start) { if (!S.w[key]) S.w[key] = start || {}; return S.w[key]; }
function txt(k) { return S.t[k] || ""; }
function setTxt(k, v) { if (String(v).trim()) S.t[k] = v; else delete S.t[k]; speichereBald(); }
function BS(id) { var b = S.b[id] = S.b[id] || {}; b.frei = b.frei || {}; b.durch = b.durch || {}; return b; }

/* ---------- Textfeld, an S.t gebunden ---------- */
function feld(key, o) {
  o = o || {};
  var id = "f-" + key.replace(/[^a-z0-9]+/gi, "-");
  var ta = h("textarea", { id: id, rows: o.rows || 3, placeholder: o.platz || "", "data-t": key, readonly: o.nurLesen || null });
  ta.value = txt(key);
  var zahl = o.zaehl ? h("p", { class: "meta zaehler", "aria-live": "polite" }) : null;
  function zeige() { if (zahl) zahl.textContent = woerter(ta.value) + (o.ziel ? " von etwa " + o.ziel + " Wörtern" : " Wörter"); }
  ta.addEventListener("input", function () { setTxt(key, ta.value); zeige(); if (o.bei) o.bei(ta.value); });
  zeige();
  return h("div", { class: "feld" + (o.klasse ? " " + o.klasse : "") }, h("label", { for: id, text: o.label || "Ihre Antwort" }), o.hilfe ? h("p", { class: "meta", text: o.hilfe }) : null, ta, zahl);
}

/* ---------- Kästen: Arbeitsauftrag · fachliche Erklärung · Ergebnissicherung · Im Raum · Das brauchen Sie ---------- */
var KASTEN = { auftrag: "Arbeitsauftrag", erklaerung: "Das steckt dahinter", sicherung: "Das halten wir fest", raum: "Zurück in den Raum", wissen: "Das brauchen Sie", hinweis: "Hinweis" };
function kasten(art, titel) {
  var k = h("div", { class: "kasten kasten--" + art }, h("p", { class: "kasten__art", text: KASTEN[art] }), titel ? h("h3", { class: "kasten__titel", text: titel }) : null);
  for (var i = 2; i < arguments.length; i++) haenge(k, arguments[i]);
  return k;
}
function p(t, kl) { return h("p", { class: kl || null, html: t }); }
function liste(arr, kl) { return h("ul", { class: kl || null }, arr.map(function (x) { return h("li", { html: x }); })); }
function etikett(t) { return h("p", { class: "etikett", text: t }); }
function rm(urteil, text, kopf) {
  return h("div", { class: "rm", "data-urteil": urteil }, h("b", { text: (kopf ? kopf + " – " : "") + D.urteilKurz[urteil] + ". " }), document.createTextNode(text));
}
function stempel(neu) { var s = h("span", { class: "stempel" + (neu ? " neu" : ""), text: "festgelegt" }); return s; }
function knopf(text, o) {
  o = o || {};
  return h("button", { type: "button", class: "btn" + (o.art ? " btn--" + o.art : ""), disabled: o.aus || null, "aria-pressed": o.gedrueckt, on: o.klick ? { click: o.klick } : null, "aria-label": o.label || null }, text);
}

/* ---------- Skala 0–10 mit Begründung: festlegen, später zurückkehren ---------- */
function skala(box, key, c) {
  var w = W(key), fest = !!w.fest, ref = c.ref ? (S.w[c.ref] || {}) : null;
  var id = "r-" + key.replace(/\./g, "-");
  var regler = h("input", { type: "range", id: id, min: 0, max: 10, step: 1, value: typeof w.wert === "number" ? w.wert : 5, "aria-describedby": id + "-w" });
  var aus = h("output", { for: id, text: regler.value });
  var marke = ref && typeof ref.wert === "number" ? h("span", { class: "skala__marke", style: "left:calc(14px + (100% - 28px) * " + (ref.wert / 10) + ")", "aria-hidden": "true" }, h("span", { text: "Anfang: " + ref.wert })) : null;
  var warum = feld(key + ".warum", { label: c.warumLabel || "Ein Satz, warum:", platz: c.platz || "Ich stimme (nicht) zu, weil …", rows: 2, bei: pruefe, nurLesen: fest });
  var kn = knopf("Festlegen", { art: "primaer", aus: true, klick: function () { w.wert = +regler.value; w.fest = true; speichere(); festlegen(true); } });
  var nach = h("div", { class: "nach", "aria-live": "polite" });
  var reihe = h("div", { class: "reihe" }, kn);
  var form = h("div", { class: "skala" },
    c.satz ? h("p", { class: "these", text: c.satz }) : null,
    h("div", { class: "skala__spur" }, marke, h("label", { class: "sr", for: id, text: "Zustimmung von 0 bis 10" }), regler),
    h("div", { class: "skala__enden" }, h("span", { text: "0 · " + (c.links || "stimme gar nicht zu") }), h("span", { text: "10 · " + (c.rechts || "stimme voll zu") })),
    h("p", { class: "skala__wert", id: id + "-w" }, (c.wertWort || "Ihre Wahl") + ": ", aus, " von 10"),
    warum, reihe, nach);
  box.appendChild(form);
  function pruefe() { kn.disabled = !(w.bewegt && txt(key + ".warum").trim().length >= 12); }
  function festlegen(neu) {
    form.setAttribute("data-fest", ""); kn.hidden = true; reihe.appendChild(stempel(neu));
    regler.disabled = true; $("textarea", warum).readOnly = true;
    nach.textContent = "";
    if (c.danach) haenge(nach, c.danach(w, ref));
    if (neu) einblenden(nach);
    frisch();
  }
  regler.addEventListener("input", function () { if (w.fest) return; w.bewegt = true; aus.textContent = regler.value; w.wert = +regler.value; speichereBald(); pruefe(); });
  ["pointerdown", "keydown"].forEach(function (ev) { regler.addEventListener(ev, function () { if (!w.fest) { w.bewegt = true; pruefe(); } }); });
  pruefe(); if (fest) festlegen(false);
}
function vergleichSatz(vor, nach) {
  if (!vor || typeof vor.wert !== "number") return "Ihre Position jetzt: " + nach.wert + " von 10. Eine Position vom Anfang ist auf diesem Gerät nicht gespeichert.";
  var d = nach.wert - vor.wert;
  return "Am Anfang: " + vor.wert + " von 10. Jetzt: " + nach.wert + " von 10. " + (d === 0 ? "Ihre Position ist gleich geblieben – mit neuen Gründen?" : (d > 0 ? "Sie stimmen jetzt stärker zu." : "Sie stimmen jetzt weniger zu.")) + " Stellen Sie sich noch einmal auf die Linie im Raum und sagen Sie, was Sie bewegt hat.";
}

/* ---------- Einfachwahl mit Begründung: erst festlegen, dann Rückmeldung zu jeder Antwort ----------
   Die Rückmeldetexte kommen erst nach dem Festlegen ins Dokument (auch nicht für Vorleseprogramme vorher). */
function wahl(box, key, c) {
  var w = W(key), name = "w-" + key.replace(/\./g, "-");
  var fs = h("fieldset", { class: "wahl" }, h("legend", { text: c.frage }));
  var opts = h("div", { class: "wahl__opt" });
  c.optionen.forEach(function (o, i) {
    var inp = h("input", { type: "radio", name: name, value: i, checked: w.i === i || null, disabled: w.fest || null });
    inp.addEventListener("change", function () { if (w.fest) return; w.i = i; speichereBald(); pruefe(); });
    opts.appendChild(h("label", { class: "option" }, inp, h("span", { text: o[0] })));
  });
  fs.appendChild(opts);
  box.appendChild(fs);
  var sich = null;
  if (c.sicherheit) {
    sich = h("div", { class: "sicher", role: "group", "aria-label": "Wie sicher sind Sie?" }, h("span", { class: "sicher__frage", text: "Wie sicher sind Sie?" }));
    ["sicher", "eher sicher", "unsicher"].forEach(function (s, j) {
      sich.appendChild(knopf(s, { art: "klein", gedrueckt: String(w.s === j), klick: function (ev) { if (w.fest) return; w.s = j; speichereBald(); $$("button", sich).forEach(function (b, k) { b.setAttribute("aria-pressed", String(k === j)); }); pruefe(); } }));
    });
    box.appendChild(sich);
  }
  var warum = feld(key + ".warum", { label: c.warumLabel || "Ein Satz, warum:", platz: c.platz || "Ich wähle das, weil …", rows: 2, bei: pruefe, nurLesen: w.fest });
  box.appendChild(warum);
  var kn = knopf(c.knopf || "Festlegen", { art: "primaer", aus: true, klick: function () { w.fest = true; speichere(); zeige(true); } });
  var reihe = h("div", { class: "reihe" }, kn, h("span", { class: "meta hinweis-zeile", text: "Erst dann sehen Sie die Rückmeldung." }));
  box.appendChild(reihe);
  var rueck = h("div", { class: "wahl__rueck", "aria-live": "polite" });
  box.appendChild(rueck);
  function pruefe() { kn.disabled = !(typeof w.i === "number" && txt(key + ".warum").trim().length >= (c.min || 12) && (!c.sicherheit || typeof w.s === "number")); }
  function zeige(neu) {
    kn.hidden = true; $(".hinweis-zeile", reihe).remove(); reihe.appendChild(stempel(neu));
    $$("input", opts).forEach(function (x) { x.disabled = true; });
    if (sich) $$("button", sich).forEach(function (b) { b.disabled = true; });
    $("textarea", warum).readOnly = true;
    var o = c.optionen[w.i];
    rueck.textContent = "";
    rueck.appendChild(rm(o[1], o[2], "Ihre Wahl"));
    if (c.sicherheit && typeof w.s === "number") rueck.appendChild(p("Sie waren sich <b>" + ["sicher", "eher sicher", "unsicher"][w.s] + "</b>. " + (o[1] === "zentral" ? (w.s === 2 ? "Ihr Gespür hat getragen – merken Sie sich die Begründung." : "Gut begründet.") : (w.s === 0 ? "Gerade sichere Annahmen lohnt es zu prüfen." : "Gut, dass Sie es offen gehalten haben.")), "meta"));
    var andere = c.optionen.map(function (x, j) { return j === w.i ? null : h("li", {}, h("b", { text: x[0] + " – " + D.urteilKurz[x[1]] + ". " }), document.createTextNode(x[2])); });
    rueck.appendChild(h("details", { class: "mehr" }, h("summary", { text: "Und die anderen Antworten?" }), h("ul", {}, andere)));
    if (c.danach) haenge(rueck, c.danach(neu));
    if (neu) einblenden(rueck, 240);
    frisch();
  }
  pruefe(); if (w.fest) zeige(false);
}

/* ---------- Erst erinnern: Frage – eigene Antwort – dann aufdecken ---------- */
function abruf(box, key, fragen) {
  var w = W(key, { auf: {} }); w.auf = w.auf || {};
  var wrap = h("div", { class: "abruf" });
  fragen.forEach(function (f, i) {
    var k = key + "." + i, id = "ab-" + key.replace(/\./g, "-") + "-" + i;
    var inp = h("input", { type: "text", id: id, value: txt(k), placeholder: "Stichwort genügt", autocomplete: "off", readonly: w.auf[i] || null });
    var los = h("div", { class: "abruf__loesung", "aria-live": "polite" });
    var b1 = knopf("Aufdecken", { art: "dunkel", aus: true, klick: function () { auf(); } });
    var b2 = knopf("Auf dem Zettel geantwortet", { art: "still" , klick: function () { auf(); } });
    function pruefe() { b1.disabled = inp.value.trim().length < 3; }
    function auf(still) {
      w.auf[i] = true; speichere(); inp.readOnly = true; b1.hidden = true; b2.hidden = true;
      los.innerHTML = "<b>Das gehört dazu:</b> " + f[1]; if (!still) einblenden(los); frisch();
    }
    inp.addEventListener("input", function () { setTxt(k, inp.value); pruefe(); });
    wrap.appendChild(h("div", { class: "abruf__frage" }, h("label", { for: id }, h("span", { class: "nr-klein", text: String(i + 1) }), " " + f[0]), h("div", { class: "abruf__zeile" }, inp, b1, b2), los));
    pruefe(); if (w.auf[i]) auf(true);
  });
  box.appendChild(wrap);
}
function abrufFertig(key, n) { var w = S.w[key]; return !!(w && w.auf && Object.keys(w.auf).length >= n); }

/* ---------- Produkt: eigener Text, Kriterien erst nach dem Text ---------- */
function produkt(box, key, c) {
  var w = W(key);
  var raster = h("div", { class: "raster", hidden: true });
  var hin = h("p", { class: "meta", "aria-live": "polite" });
  var kn = knopf(c.knopf || "Mit den Kriterien vergleichen", { art: "primaer", aus: true, klick: function () { w.zu = true; speichere(); oeffne(true); } });
  function pruefe() {
    var n = woerter(txt(key)); kn.disabled = n < (c.min || 15);
    hin.textContent = w.zu ? "" : (n < (c.min || 15) ? "Schreiben Sie mindestens " + (c.min || 15) + " Wörter – bisher " + n + "." : "Jetzt können Sie vergleichen.");
  }
  box.appendChild(feld(key, { label: c.label, platz: c.platz, rows: c.rows || 4, zaehl: true, bei: pruefe }));
  box.appendChild(h("div", { class: "reihe" }, kn, hin));
  box.appendChild(raster);
  function oeffne(neu) {
    kn.hidden = true; raster.hidden = false; raster.textContent = "";
    raster.appendChild(h("p", { class: "raster__kopf", text: c.kopf || "Vergleichen Sie Ihren Text mit diesen Kriterien" }));
    var sw = W(key + ".selbst", {});
    c.kriterien.forEach(function (k, i) {
      var zeile = h("div", { class: "raster__zeile" }, h("b", { text: k[0] }), h("span", { text: k[1] }));
      var wahlen = h("div", { class: "raster__selbst", role: "group", "aria-label": "Trifft das auf Ihren Text zu? " + k[0] });
      ["trifft zu", "teils", "noch nicht"].forEach(function (s, j) {
        wahlen.appendChild(knopf(s, { art: "klein", gedrueckt: String(sw[i] === j), klick: function () { sw[i] = j; speichereBald(); $$("button", wahlen).forEach(function (b, m) { b.setAttribute("aria-pressed", String(m === j)); }); } }));
      });
      zeile.appendChild(wahlen);
      raster.appendChild(zeile);
    });
    if (c.danach) haenge(raster, c.danach());
    if (neu) einblenden(raster, 240);
    frisch();
  }
  pruefe(); if (w.zu) oeffne(false);
}

/* ---------- Links wählen, rechts die eine Karte (Muster aus M22, Fassung 4.1) ---------- */
function wahlKarte(box, key, eintraege, c) {
  c = c || {};
  var w = W(key);
  var liste = h("div", { class: "wk__liste", role: "group", "aria-label": c.titel || "Auswahl" });
  var karte = h("div", { class: "wk__karte", tabindex: "-1", "aria-live": "polite" });
  var wrap = h("div", { class: "wk" + (c.klasse ? " " + c.klasse : "") }, liste, karte);
  box.appendChild(wrap);
  function knoepfe() {
    liste.textContent = "";
    eintraege.forEach(function (e) {
      var st = e.stand ? e.stand() : "";
      liste.appendChild(h("button", { type: "button", class: "wk__knopf" + (e.klasse ? " " + e.klasse : "") + (st ? " fertig" : ""), "aria-pressed": String(w.akt === e.id), on: { click: function () { waehle(e.id, true); } } },
        e.nr ? h("span", { class: "wk__nr", text: e.nr }) : null, h("span", { class: "wk__titel", text: e.titel }), e.unter ? h("span", { class: "wk__unter", text: e.unter }) : null,
        st ? h("span", { class: "wk__stand", text: "✓ " + st }) : null));
    });
  }
  function waehle(id, nutzer) {
    w.akt = id; speichereBald(); knoepfe();
    var e = eintraege.filter(function (x) { return x.id === id; })[0];
    karte.textContent = "";
    if (!e) { karte.appendChild(h("p", { class: "wk__leer", text: c.leer || "Wählen Sie links." })); return; }
    e.bau(karte, function () { knoepfe(); });
    if (nutzer) {
      karte.focus({ preventScroll: true });
      var r = karte.getBoundingClientRect(), oben = obenFrei();
      if (r.top < oben || r.top > window.innerHeight * .6) window.scrollBy({ top: r.top - oben, behavior: ruhig() ? "auto" : "smooth" });
      einblenden(karte, 180);
    }
  }
  waehle(w.akt || (c.leer ? null : eintraege[0].id), false);
  return { frisch: knoepfe };
}

/* ---------- Lesestufen: derselbe Text in zwei Zugängen (Prinzip »Stufen«) ---------- */
function stufen(key, varianten) {
  var w = W("stufe", {});
  var akt = w[key] || 0;
  var reiter = h("div", { class: "stufen__reiter", role: "group", "aria-label": "Lesestufe wählen" });
  var inhalt = h("div", { class: "stufen__inhalt", "aria-live": "polite" });
  function zeige(i) {
    akt = i; w[key] = i; speichereBald();
    $$("button", reiter).forEach(function (b, j) { b.setAttribute("aria-pressed", String(j === i)); });
    inhalt.innerHTML = varianten[i][1];
  }
  varianten.forEach(function (v, i) { reiter.appendChild(knopf(v[0], { art: "reiter", klick: function () { zeige(i); } })); });
  var wrap = h("div", { class: "stufen" }, reiter, inhalt);
  zeige(akt);
  return wrap;
}

/* ---------- Stimmkarte: eine Wahl, groß zum Hochhalten (Bündeln im Raum, ohne Gerät-zu-Gerät) ---------- */
function stimmkarte(box, key, c) {
  var w = W(key);
  var reihe = h("div", { class: "stimm__wahl", role: "group", "aria-label": c.frage });
  var karte = h("div", { class: "stimm__karte", "aria-live": "polite" });
  c.optionen.forEach(function (o, i) {
    reihe.appendChild(knopf(o[0] + " · " + o[1], { art: "wahl", gedrueckt: String(w.i === i), klick: function () { w.i = i; speichere(); zeige(); } }));
  });
  function zeige() {
    $$("button", reihe).forEach(function (b, j) { b.setAttribute("aria-pressed", String(j === w.i)); });
    karte.textContent = "";
    if (typeof w.i !== "number") { karte.hidden = true; return; }
    karte.hidden = false;
    karte.appendChild(h("span", { class: "stimm__buchstabe", text: c.optionen[w.i][0] }));
    karte.appendChild(h("span", { class: "stimm__wort", text: c.optionen[w.i][1] }));
    frisch();
  }
  box.appendChild(h("div", { class: "stimm" }, h("p", { class: "stimm__frage", text: c.frage }), reihe, karte, c.unter ? p(c.unter, "meta") : null));
  zeige();
}

/* ---------- Selbsteinschätzung mit Wort ---------- */
function selbst(box, key, aussagen) {
  var w = W(key);
  var wrap = h("div", { class: "selbst" });
  aussagen.forEach(function (a, i) {
    var g = h("div", { class: "selbst__wahl", role: "group", "aria-label": a });
    ["sicher", "teils", "noch nicht"].forEach(function (s, j) {
      g.appendChild(knopf(s, { art: "klein", gedrueckt: String(w[i] === j), klick: function () { w[i] = j; speichereBald(); $$("button", g).forEach(function (b, m) { b.setAttribute("aria-pressed", String(m === j)); }); frisch(); } }));
    });
    wrap.appendChild(h("div", { class: "selbst__zeile" }, h("span", { text: a }), g));
  });
  box.appendChild(wrap);
}

/* ---------- Drucken: Zusammenfassung, Plakat, Lernspur ---------- */
function drucke(modus) {
  document.body.setAttribute("data-druck", modus);
  druckVorbereiten();
  window.print();
}
/* Ein Feld druckt sonst nur seinen sichtbaren Ausschnitt: Beim Drucken wird jedes Schreibfeld zu Text auf Linien.
   Im Schreibblatt (»sb«) bleiben die Linien leer – zum Schreiben von Hand. */
function druckVorbereiten() {
  druckAufraeumen();
  var hand = document.body.getAttribute("data-druck") === "sb";
  /* Schreibblatt: genau eine Seite – bei vier und mehr Feldern teilen sich die Felder die Linien (Fassung 5.0) */
  var viele = $$("#blatt textarea").length;
  $$("#blatt textarea, #v-start textarea").forEach(function (t) {
    var text = hand ? "" : t.value, zeilen = hand ? (viele >= 4 ? Math.max(2, Math.floor(14 / viele)) : Math.max(6, 2 * (+t.getAttribute("rows") || 3))) : Math.max(2, text.split("\n").length + Math.floor(text.length / 75));
    var d = h("div", { class: "druckfeld" + (text ? "" : " leer"), text: text });
    d.style.setProperty("--zeilen", String(zeilen));
    t.parentNode.insertBefore(d, t.nextSibling); t.classList.add("druck-weg");
  });
}
function druckAufraeumen() {
  $$(".druckfeld").forEach(function (d) { d.remove(); });
  $$(".druck-weg").forEach(function (t) { t.classList.remove("druck-weg"); });
}
window.__druckVorbereiten = druckVorbereiten;
window.addEventListener("beforeprint", function () { if (!document.querySelector(".druckfeld")) druckVorbereiten(); });
window.addEventListener("afterprint", function () { document.body.removeAttribute("data-druck"); druckAufraeumen(); });
/* Extra: freiwillig, hängt an der eigenen Praxisstelle, verlangt eine Fundstelle aus dem Blatt und endet mit einem Satz zum eigenen Urteil */
function extraSeite(box, key, c) {
  box.appendChild(kasten("auftrag", null, p(c.auftrag)));
  c.felder.forEach(function (f) { box.appendChild(feld(key + "." + f[0], { label: f[1], platz: f[2], rows: 3 })); });
  box.appendChild(p(c.schluss, "meta lauf"));
}

/* ======================================================================
   Blatt-Rahmen
   ====================================================================== */
var BLAETTER = {};
var AKT = { blatt: null, seite: null };
function blatt(def) { BLAETTER[def.id] = def; def.auftraege.forEach(function (a) { a.blatt = def; }); }
function AUF(def, id) { return def.auftraege.filter(function (a) { return a.id === id; })[0]; }
function istFertig(a) { if (!a) return false; try { return a.fertig ? !!a.fertig() : !!BS(a.blatt.id).durch[a.id]; } catch (e) { return false; } }
function istOffen(a) {
  var b = BS(a.blatt.id);
  if (!a.frei || a.frei === "offen" || b.alle || b.frei[a.id]) return true;
  if (a.frei === "antwort") return istFertig(AUF(a.blatt, a.nach));
  return false;
}
function blattStand(id) {
  var def = BLAETTER[id]; if (!def) return { fertig: 0, von: 0, teile: [] };
  var zaehlt = def.auftraege.filter(function (a) { return !a.zusatz; });
  var teile = zaehlt.map(function (a) { return istFertig(a) ? "fertig" : "offen"; });
  return { fertig: teile.filter(function (x) { return x === "fertig"; }).length, von: teile.length, teile: teile };
}
function balken(teile, satz) {
  return h("div", { class: "balken" }, h("div", { class: "balken__spur", "aria-hidden": "true" }, teile.map(function (x) { return h("span", { "data-stand": x }); })), h("p", { class: "balken__text", text: satz }));
}

function zeigeBlatt(id, seite) {
  var def = BLAETTER[id];
  if (!def) { location.hash = "#start"; return; }
  var b = BS(id);
  if (!seite) seite = "deck";
  if (seite !== "deck" && seite !== "lk" && !AUF(def, seite)) seite = "deck";
  AKT.blatt = def; AKT.seite = seite; if (seite !== "lk") { b.seite = seite; speichereBald(); }
  $("#v-start").hidden = true; $("#v-blatt").hidden = false;
  document.title = def.titel + " – Etappe " + def.etappe + " · Demokratie, jetzt und in Zukunft";
  kopfBlatt(def);
  var a = AUF(def, seite);
  $("#rahmen").classList.toggle("schmal", !!(a && a.breit && istOffen(a)));
  register(def, true);
  var main = $("#blatt"); main.textContent = "";
  main.classList.toggle("deckblatt", seite === "deck");
  main.classList.toggle("weit", !!(a && a.breit && istOffen(a)) || seite === "lk");
  main.appendChild(h("div", { class: "blattzeile" }, h("span", { text: "Wahlfach Demokratiebildung · Leitfaden" }), h("span", { text: "Etappe " + def.etappe + " von 8 · " + (def.art === "einstieg" ? "Einstiegsblatt" : "Arbeitsblatt") }), h("span", { text: "Datum: " + new Date().toLocaleDateString("de-DE") })));
  if (seite === "deck") deckblatt(def, main);
  else if (seite === "lk") lehrkraft(def, main);
  else auftragSeite(def, a, main);
  main.appendChild(h("div", { class: "fuss-schmal" }, regFuss(def)));
}
function kopfBlatt(def) {
  var k = $("#kopf-ort"); k.textContent = "";
  k.appendChild(h("a", { class: "kopf__zurueck btn btn--hell", href: "#start" }, "← Kompass"));
  k.appendChild(h("div", { class: "kopf__titel" }, h("b", { text: "Etappe " + def.etappe + " · " + def.titel }), h("span", { text: (def.art === "einstieg" ? "Einstieg · etwa " : "Arbeitsblatt · ") + def.dauer + " Minuten" })));
}
/* Wohin »Weitermachen« führt: zur zuletzt geöffneten Seite des Blatts, sonst zum Deckblatt */
function weiterZiel(id) { var b = S.b[id] || {}; return "#" + id + (b.seite && b.seite !== "deck" && b.seite !== "lk" ? "/" + b.seite : ""); }
function frisch() { if (AKT.blatt && !$("#v-blatt").hidden) { register(AKT.blatt, false); fussFrisch(); } }

function zustand(a) {
  if (AKT.seite === a.id) return ["Sie sind hier", "hier"];
  if (istFertig(a)) return ["fertig", "fertig"];
  if (istOffen(a)) return a.zusatz ? ["freiwillig", "offen"] : ["offen", "offen"];
  return a.frei === "ansage" ? ["öffnet auf Ansage", "ansage", "auf Ansage"] : ["öffnet nach Ihrer Antwort", "antwort", "nach Antwort"];
}
function register(def, immer) {
  var r = $("#reg");
  if (!immer && r.contains(document.activeElement) && document.activeElement.tagName === "BUTTON" && !document.activeElement.hasAttribute("data-geh")) return;
  var st = blattStand(def.id);
  var aktiv = document.activeElement && r.contains(document.activeElement) ? document.activeElement.getAttribute("data-geh") : null;
  r.textContent = "";
  r.appendChild(h("p", { class: "reg__titel", text: "Dieses Blatt · " + def.dauer + " Minuten" }));
  r.appendChild(balken(st.teile, st.fertig + " von " + st.von + " Aufträgen fertig"));
  var ol = h("ol", { class: "reg__liste" });
  ol.appendChild(h("li", {}, h("button", { type: "button", class: "reg__knopf" + (AKT.seite === "deck" ? " hier" : ""), "data-geh": "deck", "aria-current": AKT.seite === "deck" ? "step" : null, on: { click: function () { geh(def.id, "deck"); } } },
    h("span", { class: "reg__nr reg__nr--deck", "aria-hidden": "true", text: "◇" }), h("span", {}, h("b", { text: "Deckblatt" }), h("span", { class: "reg__unter", text: "Worum es geht" })))));
  def.auftraege.forEach(function (a) {
    var z = zustand(a), fertig = istFertig(a);
    ol.appendChild(h("li", {}, h("button", { type: "button", class: "reg__knopf " + z[1] + (fertig ? " ist-fertig" : "") + (a.zusatz ? " zusatz" : ""), "data-geh": a.id, "aria-current": z[1] === "hier" ? "step" : null,
      "aria-label": (a.zusatz ? "Extra, freiwillig: " + a.name + ", " : "Auftrag " + a.nr + ": " + a.kurz + ", " + a.form + ", " + a.min + " Minuten, ") + z[0] + (fertig && z[1] === "hier" ? ", fertig" : ""), on: { click: function () { geh(def.id, a.id); } } },
      h("span", { class: "reg__nr", "aria-hidden": "true", text: fertig && z[1] !== "hier" ? "✓" : a.nr }),
      h("span", {}, h("b", { text: a.kurz }), a.zusatz ? null : h("span", { class: "reg__unter", text: a.min + " Min." }), h("span", { class: "reg__stand", text: (z[2] || z[0]) + (fertig && z[1] === "hier" ? " · fertig" : "") })))));
  });
  r.appendChild(ol);
  r.appendChild(regFuss(def));
  if (window.innerWidth < 900) { var hier = $(".reg__knopf.hier", r); if (hier) r.scrollLeft = Math.max(0, hier.parentNode.offsetLeft - 48); }
  if (aktiv) { var f = $('[data-geh="' + aktiv + '"]', r); if (f) f.focus({ preventScroll: true }); }
}
function regFuss(def) {
  var frage = h("div", { class: "frage-box", hidden: true },
    p("<b>Alle Eingaben dieses Blatts löschen?</b> Ihre Antworten und Texte auf diesem Gerät werden entfernt. Andere Etappen bleiben."),
    h("div", { class: "reihe" }, knopf("Ja, löschen", { art: "primaer", klick: function () { loescheBlatt(def); } }), knopf("Nein, behalten", { klick: function () { frage.hidden = true; } })));
  var status = h("p", { class: "reg__hinweis reg__status", role: "status", "aria-live": "polite" });
  var datei = h("input", { type: "file", accept: ".json,application/json", class: "sr", tabindex: "-1", "aria-hidden": "true" });
  var ladeFrage = h("div", { class: "frage-box", hidden: true });
  datei.addEventListener("change", function () { dateiLaden(datei, status, ladeFrage, function () { zeigeBlatt(def.id, AKT.seite); }); });
  var ruhigKn = knopf("Weniger Bewegung", { art: "schalter", gedrueckt: String(document.documentElement.getAttribute("data-bewegung") === "weniger"), klick: function (e) { schalteBewegung(e.currentTarget); } });
  var beamerKn = knopf("Ansicht für den Beamer", { art: "schalter", gedrueckt: String(document.documentElement.getAttribute("data-ansicht") === "beamer"), klick: function (e) { schalteAnsicht(e.currentTarget); } });
  var werk = h("details", { class: "reg__werk" }, h("summary", { text: "Sichern · Laden · Ansicht" }),
    h("div", { class: "reg__werk-in" },
      knopf("Stand als Datei sichern", { art: "klein", klick: function () { dateiSichern(status); } }),
      h("button", { type: "button", class: "btn btn--klein", on: { click: function () { datei.click(); } } }, "Stand aus Datei laden"), datei, ladeFrage,
      knopf("Eingaben dieses Blatts löschen", { art: "klein", klick: function () { frage.hidden = false; $("button", frage).focus(); } }), frage,
      beamerKn, ruhigKn, status,
      h("p", { class: "reg__hinweis", text: "Alles bleibt auf diesem Gerät. Nichts wird übertragen." })));
  if (WERK_OFFEN) werk.open = true;
  werk.addEventListener("toggle", function () { WERK_OFFEN = werk.open; });
  return h("div", { class: "reg__fuss" }, werk,
    h("button", { type: "button", class: "link", "data-geh": "lk", on: { click: function () { geh(def.id, "lk"); } } }, "Für Lehrkräfte: Hinweise und Freigabe"));
}
var WERK_OFFEN = false;
function schalteAnsicht(b) {
  var an = document.documentElement.getAttribute("data-ansicht") !== "beamer";
  if (an) document.documentElement.setAttribute("data-ansicht", "beamer"); else document.documentElement.removeAttribute("data-ansicht");
  S.ansicht = an ? "beamer" : ""; speichere();
  $$("[aria-pressed]").forEach(function (x) { if (x.textContent === "Ansicht für den Beamer") x.setAttribute("aria-pressed", String(an)); });
}
/* ---------- Stand als Datei: eine Datei für den ganzen Leitfaden (Device-Switch) ---------- */
function dateiSichern(status) {
  var datum = new Date().toISOString().slice(0, 10);
  var inhalt = JSON.stringify({ art: "wpb-demokratie-lernspur", version: 4, gesichert: new Date().toISOString(), stand: S }, null, 1);
  var blob = new Blob([inhalt], { type: "application/json" });
  var a = h("a", { href: URL.createObjectURL(blob), download: "demokratiebildung-mein-stand-" + datum + ".json" });
  document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  if (status) status.textContent = "Gesichert als »demokratiebildung-mein-stand-" + datum + ".json«. Auf dem iPad liegt die Datei in der Dateien-App unter »Downloads«.";
}
function dateiLaden(input, status, frageBox, nachher) {
  var f = input.files && input.files[0]; if (!f) return;
  var r = new FileReader();
  r.onload = function () {
    var x = null; try { x = JSON.parse(r.result); } catch (e) { x = null; }
    input.value = "";
    if (!x || x.art !== "wpb-demokratie-lernspur" || !x.stand) { status.textContent = "Diese Datei passt nicht. Laden Sie eine Datei, die Sie hier gesichert haben."; return; }
    var tag = new Date(x.gesichert).toLocaleDateString("de-DE");
    var ja = knopf("Ja, laden", { art: "primaer", klick: function () { S = norm(x.stand); speichere(); frageBox.hidden = true; if (nachher) nachher(); } });
    frageBox.textContent = "";
    haenge(frageBox, [p("<b>Stand vom " + tag + " laden?</b> Was jetzt auf diesem Gerät steht, wird ersetzt."), h("div", { class: "reihe" }, ja, knopf("Nein, nichts ändern", { klick: function () { frageBox.hidden = true; status.textContent = "Nichts geändert."; } }))]);
    frageBox.hidden = false; ja.focus();
  };
  r.readAsText(f);
}
function schalteBewegung(b) {
  var an = document.documentElement.getAttribute("data-bewegung") !== "weniger";
  if (an) document.documentElement.setAttribute("data-bewegung", "weniger"); else document.documentElement.removeAttribute("data-bewegung");
  S.ruhig = an; speichere();
  $$("[aria-pressed]").forEach(function (x) { if (x.textContent === "Weniger Bewegung") x.setAttribute("aria-pressed", String(an)); });
}
function loescheBlatt(def) {
  var pre = def.id + ".";
  Object.keys(S.w).forEach(function (k) { if (k.indexOf(pre) === 0) delete S.w[k]; });
  Object.keys(S.t).forEach(function (k) { if (k.indexOf(pre) === 0) delete S.t[k]; });
  Object.keys(S.w.stufe || {}).forEach(function (k) { if (k.indexOf(pre) === 0) delete S.w.stufe[k]; });
  delete S.b[def.id];
  speichere();
  if (location.hash !== "#" + def.id) { try { history.replaceState(null, "", "#" + def.id); } catch (e) { /* Adresse bleibt */ } }
  zeigeBlatt(def.id, "deck");
  $("#blatt").insertBefore(kasten("hinweis", null, p("Die Eingaben dieses Blatts sind gelöscht.")), $("#blatt").children[1]);
}
function geh(id, seite) { var ziel = "#" + id + (seite && seite !== "deck" ? "/" + seite : ""); if (location.hash === ziel) zeigeBlatt(id, seite); else location.hash = ziel; }

function deckblatt(def, main) {
  var et = D.etappen[def.etappe - 1];
  var weiter = def.auftraege.filter(function (a) { return !a.zusatz && !istFertig(a); })[0];
  var start = def.auftraege[0];
  var beg = BS(def.id).durch.deck || def.auftraege.some(istFertig);
  var los = h("button", { type: "button", class: "btn btn--primaer btn--gross", on: { click: function () { BS(def.id).durch.deck = true; geh(def.id, (weiter || start).id); } } },
    beg && weiter ? "Weiter mit Auftrag " + weiter.nr + " →" : (beg ? "Zu den Aufträgen →" : "Mit Auftrag " + start.nr + " beginnen →"));
  main.appendChild(h("section", { class: "band" },
    h("div", { class: "band__text" },
      h("p", { class: "band__kicker", text: "Etappe " + def.etappe + " von 8 · " + (def.art === "einstieg" ? "Einstieg · etwa " + def.dauer + " Minuten" : "Doppelstunde · " + def.dauer + " Minuten") }),
      h("h1", { id: "seitentitel", tabindex: "-1", text: def.titel }),
      h("p", { class: "band__frage", text: def.frage }),
      los),
    h("div", { class: "band__bild", "aria-hidden": "true" }, minikompass(def.etappe - 1))));
  main.appendChild(h("div", { class: "wo" }, h("p", { class: "wo__kopf" }, h("b", { text: "Wo wir stehen" }), " · " + et.vortrag), wegleiste(def.etappe - 1)));
  var links = h("div", {}, h("h2", { class: "abschnitt", text: "Darum geht es" }), p(def.darum));
  if (def.ziele) haenge(links, [h("h2", { class: "abschnitt", text: "Am Ende können Sie" }), liste(def.ziele, "ziele")]);
  var rechts = h("div", {}, h("h2", { class: "abschnitt", text: "So läuft dieses Blatt" }),
    h("ol", { class: "ablauf" }, def.auftraege.map(function (a) { return h("li", {}, h("b", { text: a.nr }), h("span", {}, a.name, h("small", { text: (a.zusatz ? "freiwillig · zählt nicht zur Zeit" : a.form + " · " + a.min + " Min.") + (a.frei === "ansage" ? " · öffnet auf Ansage" : "") }))); })),
    liste(["Links stehen alle Aufträge. Sie sehen immer, wo Sie sind und was noch kommt.", "Jeder Auftrag ist eine Seite. Sie scrollen von oben nach unten.", "Manche Aufträge öffnen sich erst nach Ihrer Antwort, manche auf Ansage Ihrer Lehrkraft.", "Jedes Blatt lässt sich auf A4 drucken. Was Sie schreiben, steht im Ausdruck auf Linien – Schreibaufträge gibt es auch als leeres Schreibblatt für den Stift."], "so"));
  main.appendChild(h("div", { class: "deck" }, links, rechts));
  if (def.hinweis) main.appendChild(kasten("hinweis", null, p(def.hinweis)));
  if (def.weg) main.appendChild(def.weg());
  fokusTitel();
}
function wegleiste(i) {
  return h("ol", { class: "weg8", "aria-label": "Die acht Etappen des Jahres" }, D.etappen.map(function (e, j) {
    return h("li", { class: j === i ? "hier" : (j < D.hier ? "da" : "") }, h("a", { href: "#" + e.blatt, "aria-current": j === i ? "page" : null }, h("b", { text: String(j + 1) }), h("span", { text: e.kurz })));
  }));
}
function minikompass(i) {
  var NS = NS_SVG;
  var s = document.createElementNS(NS, "svg"); s.setAttribute("viewBox", "0 0 120 120");
  for (var j = 0; j < 8; j++) {
    var a1 = (j * 45 + 2 - 90) * Math.PI / 180, a2 = ((j + 1) * 45 - 2 - 90) * Math.PI / 180, R = 56, r = 34;
    var d = "M" + (60 + R * Math.cos(a1)) + " " + (60 + R * Math.sin(a1)) + "A" + R + " " + R + " 0 0 1 " + (60 + R * Math.cos(a2)) + " " + (60 + R * Math.sin(a2)) + "L" + (60 + r * Math.cos(a2)) + " " + (60 + r * Math.sin(a2)) + "A" + r + " " + r + " 0 0 0 " + (60 + r * Math.cos(a1)) + " " + (60 + r * Math.sin(a1)) + "Z";
    var pfad = document.createElementNS(NS, "path"); pfad.setAttribute("d", d); pfad.setAttribute("class", j === i ? "mk-hier" : "mk-seg"); s.appendChild(pfad);
  }
  var k = document.createElementNS(NS, "circle"); k.setAttribute("cx", 60); k.setAttribute("cy", 60); k.setAttribute("r", 26); k.setAttribute("class", "mk-kern"); s.appendChild(k);
  var n = document.createElementNS(NS, "path"); var w = (i * 45 + 22.5);
  n.setAttribute("d", "M60 30 L66 60 L60 70 L54 60 Z"); n.setAttribute("class", "mk-nadel"); n.setAttribute("transform", "rotate(" + w + " 60 60)"); s.appendChild(n);
  return s;
}

function auftragSeite(def, a, main) {
  var offen = istOffen(a);
  main.appendChild(h("h1", { class: "ab-h", id: "seitentitel", tabindex: "-1" }, h("span", { class: "reg__nr ab-h__nr" + (a.zusatz ? " ab-h__nr--extra" : ""), "aria-hidden": "true", text: a.nr }),
    h("span", { class: "ab-h__text" }, a.kopf ? null : h("span", { class: "ab-h__kicker", text: a.zusatz ? "Extra · freiwillig" : "Arbeitsauftrag " + a.nr }), h("span", { class: "ab-h__titel", text: a.name }))));
  main.appendChild(h("p", { class: "ab-meta" }, a.zusatz ? a.form + " · zählt nicht zur Zeit" : a.form + " · " + a.min + " Minuten", a.marke ? h("span", { class: "ab-marke", text: a.marke }) : null));
  var teil = h("section", { class: "ab-teil" });
  main.appendChild(teil);
  if (offen) {
    BS(def.id).gesehen = BS(def.id).gesehen || {}; a.seite(teil);
    if (a.schreib) teil.appendChild(h("div", { class: "reihe schreib-druck" }, knopf("Als Schreibblatt drucken", { klick: function () { drucke("sb"); } }), h("span", { class: "meta", text: "Ein Blatt A4 mit leeren Linien – zum Schreiben von Hand." })));
  }
  else zuSeite(def, a, teil);
  main.appendChild(h("div", { class: "ab-fuss", id: "ab-fuss" }));
  fussFrisch();
  fokusTitel();
}
function fussFrisch() {
  var f = $("#ab-fuss"); if (!f || !AKT.blatt) return;
  var def = AKT.blatt, list = def.auftraege, i = list.map(function (x) { return x.id; }).indexOf(AKT.seite);
  if (i < 0) return;
  var a = list[i], vor = list[i - 1], nach = list[i + 1];
  f.textContent = "";
  f.appendChild(h("button", { type: "button", class: "btn", on: { click: function () { geh(def.id, vor ? vor.id : "deck"); } } }, "‹ " + (vor ? vor.nr + " " + vor.kurz : "Deckblatt")));
  if (nach) f.appendChild(h("button", { type: "button", class: "btn btn--primaer", on: { click: function () { if (istOffen(a)) { BS(def.id).durch[a.id] = true; speichere(); } geh(def.id, nach.id); } } }, nach.nr + " " + nach.kurz + " ›"));
  else f.appendChild(h("a", { class: "btn btn--primaer", href: "#start", on: { click: function () { if (istOffen(a)) { BS(def.id).durch[a.id] = true; speichere(); } } } }, "Zum Kompass ›"));
}
function zuSeite(def, a, teil) {
  var ans = a.frei === "ansage", nach = ans ? null : AUF(def, a.nach);
  var frage = h("div", { class: "frage-box", hidden: true },
    p("<b>Hat Ihre Lehrkraft Auftrag " + a.nr + " freigegeben?</b>"),
    h("div", { class: "reihe" }, knopf("Ja, öffnen", { art: "primaer", klick: function () { BS(def.id).frei[a.id] = true; speichere(); zeigeBlatt(def.id, a.id); } }), knopf("Nein, noch nicht", { klick: function () { frage.hidden = true; } })));
  teil.appendChild(h("div", { class: "zu" },
    h("p", { class: "zu__titel", text: ans ? "Dieser Auftrag öffnet auf Ansage." : "Dieser Auftrag öffnet nach Ihrer Antwort." }),
    p(ans ? "Darum geht es gleich: " + esc(a.gleich || a.name) : esc(a.fehlt || "Bearbeiten Sie erst Auftrag " + (nach ? nach.nr : "davor") + ".")),
    nach ? h("button", { type: "button", class: "btn btn--dunkel", on: { click: function () { geh(def.id, nach.id); } } }, "Zu Auftrag " + nach.nr + " · " + nach.kurz) : null,
    h("button", { type: "button", class: "btn" + (ans ? " btn--dunkel" : " btn--still"), on: { click: function () { frage.hidden = false; $("button", frage).focus(); } } }, ans ? "Unsere Lehrkraft hat freigegeben" : "Auf Ansage trotzdem öffnen"),
    frage));
}
function fokusTitel() {
  window.scrollTo(0, 0);
  var t = $("#seitentitel"); if (t) t.focus({ preventScroll: true });
}

function lehrkraft(def, main) {
  main.appendChild(h("h1", { class: "ab-h", id: "seitentitel", tabindex: "-1", text: "Hinweise für die Lehrkraft" }));
  main.appendChild(p("Offen und ohne Lösungen. Die Rückmeldetexte erscheinen den Lernenden ohnehin erst nach ihrer Festlegung. Erwartungshorizonte gehören nicht in diese Seite.", "meta lauf"));
  if (def.papier) main.appendChild(h("p", { class: "lauf" }, h("b", { text: "Papierfrage: " }), def.papier));
  var b = BS(def.id);
  main.appendChild(h("div", { class: "reihe" },
    knopf(b.alle ? "Freigaben auf diesem Gerät zurücksetzen" : "Alle Aufträge auf diesem Gerät freigeben (Smartboard)", { art: b.alle ? "" : "dunkel", klick: function () { b.alle = !b.alle; if (!b.alle) b.frei = {}; speichere(); zeigeBlatt(def.id, "lk"); } }),
    h("span", { class: "meta", text: b.alle ? "Alle Aufträge sind auf diesem Gerät offen." : "Nur für das Gerät vorne – die Lernenden öffnen auf Ansage." })));
  var tab = h("table", { class: "lk-tab" }, h("thead", {}, h("tr", {}, ["Nr.", "Auftrag", "Lehrfunktion", "Sozialform", "Min.", "Freigabe", "Was das Gerät tut", "Im Raum"].map(function (x) { return h("th", { scope: "col", text: x }); }))),
    h("tbody", {}, def.auftraege.map(function (a) { return h("tr", {}, h("td", { text: a.nr }), h("td", { text: a.name }), h("td", { text: a.phase || "–" }), h("td", { text: a.form }), h("td", { text: a.zusatz ? "frei" : String(a.min) }), h("td", { text: a.frei === "ansage" ? "auf Ansage" : (a.frei === "antwort" ? "nach Antwort in " + AUF(def, a.nach).nr : "offen") }), h("td", { text: a.prinzip || "–" }), h("td", { text: a.raum || "–" })); })));
  var summe = def.auftraege.reduce(function (s, a) { return s + (a.zusatz ? 0 : a.min); }, 0);
  main.appendChild(h("div", { class: "tabelle-rahmen" }, tab));
  main.appendChild(p("Summe der Zeiten: " + summe + " Minuten (geschätzt, nicht erprobt; ein Extra zählt nicht mit). »Lehrfunktion« nach den Phasen aus Kidu: Einstieg · Erarbeitung · Sichern und üben · Übertragen und Ausblick. »Was das Gerät tut« folgt den sechs Prinzipien aus Kidu: Verdecken · Rückmelden · Messen · Variieren · Stufen · Bündeln.", "meta"));
  (def.lk || []).forEach(function (x) { main.appendChild(h("h2", { class: "abschnitt", text: x[0] })); haenge(main, Array.isArray(x[1]) ? liste(x[1]) : p(x[1])); });
  main.appendChild(h("div", { class: "ab-fuss" }, h("button", { type: "button", class: "btn", on: { click: function () { geh(def.id, "deck"); } } }, "‹ Deckblatt")));
  fokusTitel();
}

/* ---------- Zusammenfassung in zwei Teilen (Standard aus M22): höchstens zwei Seiten A4 ---------- */
function zusammenfassung(box, c) {
  box.appendChild(h("div", { class: "reihe nodruck" }, knopf("Drucken oder als PDF sichern", { art: "dunkel", klick: function () { drucke("zf"); } }), h("span", { class: "meta", text: "Zwei Seiten A4 – zum Abheften in GoodNotes." })));
  var s1 = h("section", { class: "zf-seite" }, h("p", { class: "zf-teil", text: c.kopf + " · Seite 1" }), h("h2", { class: "zf-h", text: "Das müssen Sie wissen" }),
    h("p", { class: "zf-frage", text: c.frage }), h("p", { class: "merksatz", text: c.kern }));
  haenge(s1, c.wissen());
  var s2 = h("section", { class: "zf-seite umbruch" }, h("p", { class: "zf-teil", text: c.kopf + " · Seite 2" }), h("h2", { class: "zf-h", text: "Das müssen Sie können" }));
  haenge(s2, c.koennen());
  box.appendChild(h("div", { class: "zf" }, s1, s2));
}
function mein(t, leer) { var s = String(t || "").trim(); return h("p", { class: "mein" + (s ? "" : " leer"), text: s || leer || "noch offen" }); }

/* ---------- Lernspur: ein Satz je Blatt, erscheint im Kompass ---------- */
function spurFeld(box, def) {
  box.appendChild(feld(def.spur, { label: def.spurFrage || "Ihr Satz für die Lernspur", hilfe: "Er erscheint im Kompass unter »Ihr roter Faden durch das Jahr«.", platz: def.spurAnfang, rows: 3, zaehl: true, bei: function () { frisch(); } }));
}
