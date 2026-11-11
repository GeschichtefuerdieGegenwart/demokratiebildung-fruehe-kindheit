(function () {
  "use strict";
  document.documentElement.classList.add("js");
  var D = DATEN, KEY = D.schluessel, TKEY = KEY + ":texte";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var el = function (tag, attrs, text) {
    var e = document.createElement(tag), k;
    for (k in attrs || {}) { if (attrs[k] !== null && attrs[k] !== undefined) e.setAttribute(k, attrs[k]); }
    if (text !== undefined) e.textContent = text;
    return e;
  };
  var URTEIL = { zentral: "zentral", begruendbar: "auch begründbar", kaum: "passt kaum" };

  /* ---------- Speichern: Auswahl dauerhaft (nur IDs und Zahlen), Texte nur für diese Sitzung ---------- */
  function lade(store, key, leer) { try { return JSON.parse(store.getItem(key)) || leer; } catch (e) { return leer; } }
  function sichere(store, key, wert) { try { store.setItem(key, JSON.stringify(wert)); } catch (e) { /* privat oder voll: Seite läuft weiter */ } }
  var S = lade(window.localStorage, KEY, {});
  var T = lade(window.sessionStorage, TKEY, {});
  ["lage", "fallWahl", "fallZu", "wahl", "wahlFest", "alltag"].forEach(function (k) { S[k] = S[k] || {}; });
  ["lese", "links"].forEach(function (k) { S[k] = S[k] || []; });
  function merke() { sichere(window.localStorage, KEY, S); }
  function merkeText() {
    Object.keys(T).forEach(function (k) { if (!T[k]) delete T[k]; });
    if (Object.keys(T).length) sichere(window.sessionStorage, TKEY, T);
    else { try { window.sessionStorage.removeItem(TKEY); } catch (e) { /* nichts gespeichert */ } }
  }
  function woerter(s) { return (s.trim().match(/\S+/g) || []).length; }

  /* Textfelder mit data-text bleiben bis zum Schließen des Tabs */
  function bindeTexte(wurzel) {
    $$("textarea[data-text]", wurzel).forEach(function (t) {
      if (T[t.dataset.text]) t.value = T[t.dataset.text];
      t.addEventListener("input", function () { T[t.dataset.text] = t.value; merkeText(); });
    });
  }

  /* ---------- 1 und 5 These mit Skala ---------- */
  function these(form, art) {
    var regler = $("input[type=range]", form), aus = $("output", form), warum = $("textarea", form);
    var knopf = $("[data-festlegen]", form), stempel = $(".g-stempel", form), danach = $("[data-danach]", form);
    var bewegt = false;
    function zeige() { aus.textContent = regler.value; }
    function pruefe() { knopf.disabled = !(bewegt && warum.value.trim().length >= 12); }
    function fest(neu) {
      form.setAttribute("data-fest", ""); knopf.hidden = true; stempel.hidden = false;
      if (neu) stempel.classList.add("neu");
      regler.setAttribute("aria-disabled", "true"); warum.readOnly = true;
      danach.hidden = false;
      if (art === "nach") danach.textContent = vergleich();
      fertig();
    }
    regler.addEventListener("input", function () { if (form.hasAttribute("data-fest")) { regler.value = S[art]; return; } bewegt = true; zeige(); pruefe(); });
    regler.addEventListener("pointerdown", function () { bewegt = true; pruefe(); });
    regler.addEventListener("keydown", function () { bewegt = true; pruefe(); });
    warum.addEventListener("input", pruefe);
    knopf.addEventListener("click", function () { S[art] = +regler.value; merke(); fest(true); });
    if (typeof S[art] === "number") { regler.value = S[art]; zeige(); fest(false); } else { zeige(); }
  }
  function vergleich() {
    if (typeof S.vor !== "number") return "Ihre Position jetzt: " + S.nach + " von 10. Eine Position vom Anfang der Stunde ist auf diesem Gerät nicht gespeichert.";
    var d = S.nach - S.vor, wort = d === 0 ? "Ihre Zustimmung ist gleich geblieben." : (d > 0 ? "Sie stimmen jetzt stärker zu." : "Sie stimmen jetzt weniger zu.");
    return "Am Anfang: " + S.vor + " von 10. Jetzt: " + S.nach + " von 10. " + wort + " Stellen Sie sich noch einmal auf die Linie im Raum – und sagen Sie, was Ihre Position bewegt hat.";
  }

  /* ---------- 2 Lesen und markieren ---------- */
  (function () {
    var box = $("#lesetext"), knopf = $("#lese-vergleich"), stand = $("#lese-stand"), warum = $("#lese-warum"), rueck = $("#lese-rueck");
    D.lesetext.forEach(function (absatz) {
      var p = el("p");
      absatz.forEach(function (s) {
        var sp = el("span", { "class": "satz", role: "button", tabindex: "0", "data-id": s[0], "aria-pressed": S.lese.indexOf(s[0]) >= 0 ? "true" : "false" }, s[1]);
        function schalte() {
          var i = S.lese.indexOf(s[0]);
          if (i >= 0) S.lese.splice(i, 1); else S.lese.push(s[0]);
          sp.setAttribute("aria-pressed", i >= 0 ? "false" : "true"); merke(); pruefe();
        }
        sp.addEventListener("click", schalte);
        sp.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); schalte(); } });
        p.appendChild(sp); p.appendChild(document.createTextNode(" "));
      });
      box.appendChild(p);
    });
    function pruefe() {
      var n = S.lese.length;
      stand.textContent = n === 0 ? "Noch keine Stelle markiert." : n + (n === 1 ? " Stelle markiert" : " Stellen markiert") + " (blau gepunktet).";
      knopf.disabled = !(n >= 2 && warum.value.trim().length >= 12);
    }
    function zeige() {
      D.leseLk.forEach(function (id) { $(".satz[data-id=" + id + "]", box).setAttribute("data-lk", ""); });
      var gleich = S.lese.filter(function (id) { return D.leseLk.indexOf(id) >= 0; }).length;
      rueck.hidden = false; rueck.textContent = "";
      rueck.appendChild(el("p", { "class": "erklaerung__kopf" }, "Fachliche Erklärung"));
      rueck.appendChild(el("p", {}, D.leseRueck));
      rueck.appendChild(el("p", {}, gleich + " Ihrer " + S.lese.length + " Stellen decken sich mit dem Vorschlag. Vergleichen Sie: Welche Stelle würden Sie jetzt noch dazunehmen – oder verteidigen?"));
      knopf.hidden = true; $("#formen").removeAttribute("data-zu"); fertig();
    }
    warum.addEventListener("input", pruefe);
    knopf.addEventListener("click", function () { S.leseZu = true; merke(); zeige(); });
    pruefe(); if (S.leseZu) zeige();
    window.addEventListener("pageshow", pruefe);
  })();

  /* ---------- 3 Begriffsnetz legen ---------- */
  var lege = (function () {
    var stapel = $("#stapel"), matte = $("#matte"), ansage = $("#lege-ansage"), zahl = $("#stapel-zahl");
    var zw = $("#zwischenstand"), zurueck = $("#zuruecklegen"), verbinden = $("#verbinden"), rueck = $("#lege-rueck");
    var form = $("#verb-form"), svg = $("#linien"), listeBox = $("#verb-liste-box"), liste = $("#verb-liste");
    var gewaehlt = null, modus = false, paar = [];
    var B = {}; D.begriffe.forEach(function (b) { B[b.id] = b; });
    var knoepfe = {};

    function zoneEl(z) { return z === "stapel" ? stapel : $(".feldz[data-zone=" + z + "] .feldz__karten", matte); }
    function formenText(z) { return z.split("").map(function (c) { return D.formen[c]; }).join(" und "); }

    D.begriffe.forEach(function (b) {
      var k = el("span", { "class": "kartez", role: "button", tabindex: "0", "data-id": b.id, "aria-pressed": "false" }, b.name);
      function tipp(e) { e.stopPropagation(); karteTipp(b.id); }
      k.addEventListener("click", tipp);
      k.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); tipp(e); } });
      knoepfe[b.id] = k;
      zoneEl(S.lage[b.id] || "stapel").appendChild(k);
    });

    function waehle(id) {
      gewaehlt = id;
      D.begriffe.forEach(function (b) { knoepfe[b.id].setAttribute("aria-pressed", b.id === id ? "true" : "false"); });
      if (id) { matte.setAttribute("data-ziel", ""); stapel.setAttribute("data-ziel", ""); ansage.textContent = "»" + B[id].name + "« gewählt. Tippen Sie jetzt ein Feld an."; }
      else { matte.removeAttribute("data-ziel"); stapel.removeAttribute("data-ziel"); }
    }
    function karteTipp(id) {
      if (modus) { paarTipp(id); return; }
      waehle(gewaehlt === id ? null : id);
      if (!gewaehlt) ansage.textContent = "Tippen Sie eine Karte an.";
    }
    function legeIn(z) {
      if (!gewaehlt || modus) return;
      var id = gewaehlt;
      if (z === "stapel") { delete S.lage[id]; S.links = S.links.filter(function (l) { return l.a !== id && l.b !== id; }); }
      else S.lage[id] = z;
      zoneEl(z).appendChild(knoepfe[id]);
      knoepfe[id].removeAttribute("data-urteil"); knoepfe[id].removeAttribute("data-wort");
      ansage.textContent = z === "stapel" ? "»" + B[id].name + "« liegt wieder im Stapel." : "»" + B[id].name + "« liegt bei: " + formenText(z) + ".";
      waehle(null); merke(); stand(); zeichne(); zeigeListe();
    }
    $$(".feldz", matte).forEach(function (f) { f.addEventListener("click", function () { legeIn(f.dataset.zone); }); });
    stapel.addEventListener("click", function () { legeIn("stapel"); });

    function gelegt() { return Object.keys(S.lage).length; }
    function stand() {
      var n = gelegt(), rest = D.begriffe.length - n;
      zahl.textContent = rest ? "· noch " + rest + (rest === 1 ? " Karte" : " Karten") : "· leer";
      zw.disabled = n < 5;
      zw.textContent = n < 5 ? "Zwischenstand ansehen (ab 5 Karten)" : "Zwischenstand ansehen";
      verbinden.disabled = n < 2;
    }

    /* Rückmeldung nach der Kurzlösung: Schwerpunkt und mögliche Überschneidung */
    function urteile(b, z) {
      var hatKern = z.indexOf(b.kern) >= 0;
      var extra = z.split("").filter(function (c) { return c !== b.kern && b.auch.indexOf(c) < 0; });
      var auchDabei = z.split("").some(function (c) { return b.auch.indexOf(c) >= 0; });
      if (hatKern && !extra.length) {
        var mehr = b.auch && !auchDabei ? " Denkbar wäre auch ein Feld mit " + formenText(b.auch) + " – begründen Sie, wenn Sie umlegen." : "";
        return ["zentral", b.grund + mehr];
      }
      if (hatKern) return ["begruendbar", "Der Schwerpunkt " + D.formen[b.kern] + " ist dabei. Für " + formenText(extra.join("")) + " brauchen Sie eine eigene Begründung."];
      if (auchDabei) return ["begruendbar", "Das lässt sich begründen. Der Schwerpunkt liegt aber bei " + D.formen[b.kern] + ": " + b.grund];
      return ["kaum", "Der Schwerpunkt liegt bei " + D.formen[b.kern] + ": " + b.grund + " Legen Sie die Karte neu."];
    }
    function zwischenstand() {
      var ul = el("ul"), kaum = 0;
      D.begriffe.forEach(function (b) {
        var z = S.lage[b.id]; if (!z) return;
        var u = urteile(b, z), li = el("li", { "class": "rueck", "data-urteil": u[0] });
        li.appendChild(el("b", {}, b.name + " – " + URTEIL[u[0]]));
        if (u[0] !== "zentral") li.appendChild(document.createTextNode(u[1]));
        else if (u[1].indexOf("Denkbar") >= 0) li.appendChild(document.createTextNode(u[1].slice(u[1].indexOf("Denkbar"))));
        ul.appendChild(li);
        knoepfe[b.id].setAttribute("data-urteil", u[0]); knoepfe[b.id].setAttribute("data-wort", URTEIL[u[0]]);
        if (u[0] === "kaum") kaum++;
      });
      rueck.hidden = false; rueck.textContent = "";
      rueck.appendChild(el("p", { "class": "erklaerung__kopf" }, "Zwischenstand – " + gelegt() + " von " + D.begriffe.length + " Karten"));
      rueck.appendChild(el("p", {}, "Die Zuordnungen sind nicht immer eindeutig. Gerade die begründete Lage zwischen zwei Formen zeigt, wie die Formen zusammenhängen."));
      rueck.appendChild(ul);
      zurueck.hidden = kaum === 0;
      S.geprueft = true; merke(); $("#verbinden-box").removeAttribute("data-zu"); zeichne(); fertig();
    }
    zw.addEventListener("click", zwischenstand);
    zurueck.addEventListener("click", function () {
      D.begriffe.forEach(function (b) {
        if (knoepfe[b.id].getAttribute("data-urteil") === "kaum") {
          delete S.lage[b.id]; S.links = S.links.filter(function (l) { return l.a !== b.id && l.b !== b.id; });
          knoepfe[b.id].removeAttribute("data-urteil"); knoepfe[b.id].removeAttribute("data-wort");
          stapel.appendChild(knoepfe[b.id]);
        }
      });
      zurueck.hidden = true; merke(); stand(); zeichne(); zeigeListe();
      ansage.textContent = "Die Karten liegen wieder im Stapel.";
    });

    /* Verbindungen: zwei Karten, eine Beziehung, ein Weil-Satz */
    var REL = $$("#verb-rel option").map(function (o) { return o.textContent; });
    function setzeModus(an) {
      modus = an; paar = []; waehle(null);
      verbinden.setAttribute("aria-pressed", an ? "true" : "false");
      verbinden.textContent = an ? "Verbinden beenden" : "Verbindung legen";
      D.begriffe.forEach(function (b) { knoepfe[b.id].removeAttribute("data-verb"); });
      form.hidden = true;
      ansage.textContent = an ? "Verbinden: Tippen Sie zwei gelegte Karten nacheinander an." : "Tippen Sie eine Karte an.";
    }
    verbinden.addEventListener("click", function () { setzeModus(!modus); });
    function paarTipp(id) {
      if (!S.lage[id]) { ansage.textContent = "Diese Karte liegt noch im Stapel. Legen Sie sie zuerst."; return; }
      if (paar.indexOf(id) >= 0 || paar.length >= 2) return;
      paar.push(id); knoepfe[id].setAttribute("data-verb", "");
      if (paar.length === 2) {
        $("#verb-a").textContent = B[paar[0]].name; $("#verb-b").textContent = B[paar[1]].name;
        $("#verb-weil").value = ""; $("#verb-ok").disabled = true; form.hidden = false;
        form.scrollIntoView({ block: "nearest" }); $("#verb-weil").focus();
      } else ansage.textContent = "»" + B[id].name + "« – tippen Sie jetzt die zweite Karte an.";
    }
    $("#verb-weil").addEventListener("input", function () { $("#verb-ok").disabled = this.value.trim().length < 8; });
    $("#verb-ab").addEventListener("click", function () { setzeModus(true); });
    $("#verb-ok").addEventListener("click", function () {
      var l = { a: paar[0], b: paar[1], r: $("#verb-rel").selectedIndex, n: Date.now() % 1e9 };
      S.links.push(l); T["weil-" + l.n] = $("#verb-weil").value.trim().replace(/^weil\s+/i, "");
      merke(); merkeText(); setzeModus(true); zeichne(); zeigeListe(); fertig();
    });

    function zeigeListe() {
      liste.textContent = ""; listeBox.hidden = S.links.length === 0;
      var grad = {};
      S.links.forEach(function (l, i) {
        grad[l.a] = (grad[l.a] || 0) + 1; grad[l.b] = (grad[l.b] || 0) + 1;
        var li = el("li");
        li.appendChild(document.createTextNode(B[l.a].name + " → " + REL[l.r] + " → " + B[l.b].name + (T["weil-" + l.n] ? ", " : "")));
        if (T["weil-" + l.n]) li.appendChild(el("span", {}, "weil " + T["weil-" + l.n]));
        var x = el("button", { type: "button", "class": "g-knopf g-knopf--still", "aria-label": "Verbindung " + (i + 1) + " entfernen" }, "entfernen");
        x.addEventListener("click", function () { S.links.splice(i, 1); merke(); zeichne(); zeigeListe(); });
        li.appendChild(x); liste.appendChild(li);
      });
      var netz = $("#verb-netz"), ids = Object.keys(grad).sort(function (a, b) { return grad[b] - grad[a]; });
      if (S.links.length < 2) netz.textContent = "Noch eine Verbindung bis zu Ihrem Netz.";
      else {
        var top = ids.filter(function (i) { return grad[i] === grad[ids[0]]; }).map(function (i) { return "»" + B[i].name + "«"; });
        netz.textContent = "Am stärksten vernetzt " + (top.length === 1 ? "ist " : "sind ") + top.join(" und ") + " (" + grad[ids[0]] + (grad[ids[0]] === 1 ? " Verbindung" : " Verbindungen") + "). Überlegen Sie: Warum gerade " + (top.length === 1 ? "dieser Begriff" : "diese Begriffe") + "?";
      }
      $("#verb-beispiele").hidden = S.links.length < 2;
    }

    function zeichne() {
      var NS = "http://www.w3.org/2000/svg", m = matte.getBoundingClientRect();
      while (svg.firstChild) svg.removeChild(svg.firstChild);
      svg.setAttribute("viewBox", "0 0 " + m.width + " " + m.height);
      S.links.forEach(function (l) {
        if (!S.lage[l.a] || !S.lage[l.b]) return;
        var a = knoepfe[l.a].getBoundingClientRect(), b = knoepfe[l.b].getBoundingClientRect();
        var x1 = a.left + a.width / 2 - m.left, y1 = a.top + a.height / 2 - m.top, x2 = b.left + b.width / 2 - m.left, y2 = b.top + b.height / 2 - m.top;
        var ln = document.createElementNS(NS, "line"); ln.setAttribute("x1", x1); ln.setAttribute("y1", y1); ln.setAttribute("x2", x2); ln.setAttribute("y2", y2); svg.appendChild(ln);
        var wort = REL[l.r], w = wort.length * 8 + 16, mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
        var r = document.createElementNS(NS, "rect"); r.setAttribute("x", mx - w / 2); r.setAttribute("y", my - 12); r.setAttribute("width", w); r.setAttribute("height", 24); r.setAttribute("rx", 4); svg.appendChild(r);
        var t = document.createElementNS(NS, "text"); t.setAttribute("x", mx); t.setAttribute("y", my); t.textContent = wort; svg.appendChild(t);
      });
    }
    window.addEventListener("resize", zeichne);
    window.addEventListener("load", zeichne);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(zeichne);

    stand(); zeigeListe(); if (S.geprueft && gelegt() >= 5) zwischenstand();
    return { zeichne: zeichne };
  })();

  /* ---------- Dreibein: sechs Fragen, drei Beine, ein Brett ---------- */
  S.inst = S.inst || {}; S.fallFest = S.fallFest || {}; S.fallGeprueft = S.fallGeprueft || {};
  var RUHIG = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var NS = "http://www.w3.org/2000/svg";
  function sv(tag, attrs, text) {
    var e = document.createElementNS(NS, tag), k;
    for (k in attrs || {}) e.setAttribute(k, attrs[k]);
    if (text !== undefined) e.textContent = text;
    return e;
  }
  function beinWerte(z) {
    var r = {};
    ["h", "g", "l"].forEach(function (f) {
      var w = D.kriterien.filter(function (k) { return k.form === f; }).map(function (k) { return z[k.id]; });
      var gez = w.filter(function (x) { return x === 0 || x === 1 || x === 2; });
      r[f] = { wert: gez.length ? gez.reduce(function (a, b) { return a + b; }, 0) / gez.length : null,
               offen: w.every(function (x) { return x === undefined; }), frei: w.every(function (x) { return x === 3; }) };
    });
    return r;
  }
  function beantwortet(z) { return D.kriterien.filter(function (k) { return z[k.id] !== undefined; }).length; }

  function instrument(box, key, opt) {
    opt = opt || {};
    var z = S.inst[key] = S.inst[key] || {};
    var X = { h: 140, g: 300, l: 460 }, BODEN = 250, VOLL = 160, lang = { h: VOLL, g: VOLL, l: VOLL }, ziel = {}, raf = 0;
    var wrap = el("div", { "class": "dreibein" });
    var fig = el("figure", { "class": "dreibein__bild" });
    var svg = sv("svg", { viewBox: "0 0 600 330", role: "img", "aria-label": "Modell: ein Brett auf drei Beinen – Herrschaft, Gesellschaft, Leben" });
    svg.appendChild(sv("rect", { x: 40, y: 286, width: 520, height: 36, rx: 10, "class": "db-fund" }));
    svg.appendChild(sv("text", { x: 300, y: 309, "class": "db-fundtext" }, "Kinderrechte: Schutz · Förderung · Beteiligung"));
    svg.appendChild(sv("line", { x1: 40, y1: BODEN, x2: 560, y2: BODEN, "class": "db-boden" }));
    var geist = sv("polyline", { "class": "db-geist" }); svg.appendChild(geist);
    var beine = {}, marken = {};
    ["h", "g", "l"].forEach(function (f) {
      beine[f] = sv("line", { x1: X[f], x2: X[f], y1: BODEN, y2: BODEN - VOLL, "class": "db-bein db-bein--" + f }); svg.appendChild(beine[f]);
      marken[f] = sv("text", { x: X[f], y: BODEN + 22, "class": "db-name" }, D.beinName[f]); svg.appendChild(marken[f]);
    });
    var brett = sv("polyline", { "class": "db-brett" }); svg.appendChild(brett);
    var kugel = sv("circle", { r: 15, "class": "db-kugel" }); svg.appendChild(kugel);
    fig.appendChild(svg);
    var wort = el("p", { "class": "dreibein__wort", "aria-live": "polite" });
    fig.appendChild(wort);
    fig.appendChild(el("figcaption", { "class": "meta" }, "Modell – es misst nichts. Es zeigt, wie Ihre sechs Antworten zusammenwirken."));
    wrap.appendChild(fig);

    var fragen = el("div", { "class": "dreibein__fragen" });
    ["h", "g", "l"].forEach(function (f) {
      var gruppe = el("div", { "class": "kgruppe kgruppe--" + f });
      gruppe.appendChild(el("p", { "class": "kgruppe__kopf" }, D.formen[f]));
      D.kriterien.filter(function (k) { return k.form === f; }).forEach(function (k) {
        var fs = el("fieldset", { "class": "kfrage" });
        fs.appendChild(el("legend", {}, k.text));
        var reihe = el("div", { "class": "kwahl" });
        D.stufen.forEach(function (st) {
          var lab = el("label"), inp = el("input", { type: "radio", name: key + "-" + k.id, value: st[0] });
          if (z[k.id] === st[0]) inp.checked = true;
          inp.addEventListener("change", function () { z[k.id] = st[0]; merke(); zeige(true); if (opt.aendern) opt.aendern(z); });
          lab.appendChild(inp); lab.appendChild(el("span", {}, st[1])); reihe.appendChild(lab);
        });
        fs.appendChild(reihe); gruppe.appendChild(fs);
      });
      fragen.appendChild(gruppe);
    });
    wrap.appendChild(fragen);
    box.appendChild(wrap);

    function laenge(v) { return v === null ? VOLL : 70 + 45 * v; }
    function punkte(L) { return [[78, BODEN - L.h], [X.h, BODEN - L.h], [X.g, BODEN - L.g], [X.l, BODEN - L.l], [522, BODEN - L.l]]; }
    function male(L) {
      ["h", "g", "l"].forEach(function (f) { beine[f].setAttribute("y2", BODEN - L[f]); });
      brett.setAttribute("points", punkte(L).map(function (p) { return p.join(","); }).join(" "));
      var min = Math.min(L.h, L.g, L.l), tief = ["h", "g", "l"].filter(function (f) { return L[f] - min < 1; });
      var kx = tief.length === 3 ? X.g : tief.map(function (f) { return X[f]; }).reduce(function (a, b) { return a + b; }, 0) / tief.length;
      var ky = BODEN - (kx <= X.g ? L.h + (L.g - L.h) * (kx - X.h) / (X.g - X.h) : L.g + (L.l - L.g) * (kx - X.g) / (X.l - X.g));
      kugel.setAttribute("cx", kx); kugel.setAttribute("cy", ky - 8 - 15);
    }
    function zeige(bewegt) {
      var w = beinWerte(z);
      var mitWert = ["h", "g", "l"].filter(function (f) { return w[f].wert !== null; });
      var mittel = mitWert.length ? mitWert.map(function (f) { return laenge(w[f].wert); }).reduce(function (x, y) { return x + y; }, 0) / mitWert.length : VOLL;
      ["h", "g", "l"].forEach(function (f) {
        ziel[f] = w[f].wert === null ? mittel : laenge(w[f].wert); /* ein nicht berührtes Bein trägt mit, ohne das Bild zu verzerren */
        beine[f].setAttribute("data-art", w[f].frei ? "frei" : (w[f].offen ? "offen" : "fest"));
      });
      var n = beantwortet(z), werte = ["h", "g", "l"].filter(function (f) { return w[f].wert !== null; });
      var min = werte.length ? Math.min.apply(null, werte.map(function (f) { return w[f].wert; })) : null;
      var kurz = werte.filter(function (f) { return w[f].wert === min && min < 2; }).map(function (f) { return D.formen[f]; });
      var st = min === null ? "offen" : (min >= 2 ? "stabil" : (min >= 1 ? "wackelt" : "kippt"));
      wrap.setAttribute("data-stand", st);
      wort.textContent = st === "offen" ? "Noch offen – beantworten Sie die Fragen." :
        (st === "stabil" ? "Steht stabil." : (st === "wackelt" ? "Wackelt. " : "Kippt. ") + (kurz.length ? "Am kürzesten: " + kurz.join(" und ") + "." : "")) +
        (n < D.kriterien.length && st !== "offen" ? " (" + n + " von 6 Fragen beantwortet)" : "");
      if (opt.geist) { var g = beinWerte(S.inst[opt.geist] || {}); var gm = ["h", "g", "l"].filter(function (f) { return g[f].wert !== null; }), gmi = gm.length ? gm.map(function (f) { return laenge(g[f].wert); }).reduce(function (x, y) { return x + y; }, 0) / gm.length : VOLL;
        geist.setAttribute("points", punkte({ h: g.h.wert === null ? gmi : laenge(g.h.wert), g: g.g.wert === null ? gmi : laenge(g.g.wert), l: g.l.wert === null ? gmi : laenge(g.l.wert) }).map(function (p) { return p.join(","); }).join(" ")); }
      cancelAnimationFrame(raf);
      if (!bewegt || RUHIG) { lang = { h: ziel.h, g: ziel.g, l: ziel.l }; male(lang); return; }
      var von = { h: lang.h, g: lang.g, l: lang.l }, t0 = null;
      (function schritt(t) {
        if (t0 === null) t0 = t;
        var p = Math.min(1, (t - t0) / 420), e = 1 - Math.pow(1 - p, 3);
        ["h", "g", "l"].forEach(function (f) { lang[f] = von[f] + (ziel[f] - von[f]) * e; });
        male(lang);
        if (p < 1) raf = requestAnimationFrame(schritt);
      })(performance.now());
    }
    zeige(false);
    return { zeige: zeige };
  }

  /* ---------- 4 Kita-Fall: vermuten, prüfen, umbauen ---------- */
  (function () {
    var wahl = $("#fallwahl"), box = $("#fall");
    D.faelle.forEach(function (f) {
      var c = el("button", { type: "button", "class": "chip", "aria-pressed": "false", "data-id": f.id }, f.id + " · " + f.titel);
      c.addEventListener("click", function () { S.fall = f.id; merke(); zeige(f); });
      wahl.appendChild(c);
    });
    function zeige(f) {
      $$(".chip", wahl).forEach(function (c) { c.setAttribute("aria-pressed", c.dataset.id === f.id ? "true" : "false"); });
      box.textContent = "";
      var vor = "fall-" + f.id + "-vor", nach = "fall-" + f.id + "-nach";

      var t = el("div", { "class": "falltext" });
      t.appendChild(el("p", { "class": "etikett" }, "ausgedachter Fall · Karte " + f.id));
      t.appendChild(el("h3", {}, f.titel));
      t.appendChild(el("p", { "class": "falltext__text" }, f.text));
      var ul = el("ul"); f.fragen.forEach(function (q) { ul.appendChild(el("li", {}, q)); }); t.appendChild(ul);
      box.appendChild(t);

      /* a) vermuten */
      var a = el("div", { "class": "teil" });
      a.appendChild(el("h3", { "class": "teil__kopf" }, "1 · Vermuten"));
      var fs = el("fieldset", { "class": "volkfs" });
      fs.appendChild(el("legend", {}, "Welches Bein ist hier zu kurz?"));
      var reihe = el("div", { "class": "volk__opt" });
      ["h", "g", "l"].forEach(function (k) {
        var lab = el("label", { "class": "g-option" }), inp = el("input", { type: "radio", name: "fall-" + f.id, value: k });
        if (S.fallWahl[f.id] === k) inp.checked = true;
        inp.addEventListener("change", function () { if (S.fallFest[f.id]) { inp.checked = false; $("input[value=" + S.fallWahl[f.id] + "]", reihe).checked = true; return; } S.fallWahl[f.id] = k; merke(); pruefeA(); });
        lab.appendChild(inp); lab.appendChild(el("span", {}, D.formen[k])); reihe.appendChild(lab);
      });
      fs.appendChild(reihe); a.appendChild(fs);
      var lab1 = el("label", { "class": "feld" }, "Ein Satz, warum:");
      var warum = el("textarea", { rows: "2", "data-text": "fall-warum-" + f.id, placeholder: "Zu kurz ist …, weil …" }); lab1.appendChild(warum); a.appendChild(lab1);
      var r1 = el("div", { "class": "g-reihe" }), kA = el("button", { type: "button", "class": "g-knopf g-knopf--primaer", disabled: "" }, "Festlegen");
      var stempel = el("span", { "class": "g-stempel", hidden: "" }, "festgelegt"); r1.appendChild(kA); r1.appendChild(stempel); a.appendChild(r1);
      box.appendChild(a);

      /* b) prüfen */
      var b = el("div", { "class": "teil freigabe", "data-zu": "" });
      b.appendChild(el("p", { "class": "freigabe__sperre meta" }, "Die sechs Prüffragen öffnen sich, sobald Sie sich festgelegt haben."));
      var bi = el("div", { "class": "freigabe__inhalt" });
      bi.appendChild(el("h3", { "class": "teil__kopf" }, "2 · Prüfen"));
      bi.appendChild(el("p", { "class": "lauf" }, "Beantworten Sie die Fragen für die Situation, wie sie auf der Karte steht. Beobachten Sie, was mit dem Brett passiert."));
      var ib = el("div"); bi.appendChild(ib);
      var r2 = el("div", { "class": "g-reihe" }), kB = el("button", { type: "button", "class": "g-knopf g-knopf--primaer", disabled: "" }, "Mit meiner Vermutung vergleichen");
      var sB = el("p", { "class": "meta", "aria-live": "polite" }); r2.appendChild(kB); r2.appendChild(sB); bi.appendChild(r2);
      var rueck = el("div", { "class": "rueck", hidden: "", "aria-live": "polite" }); bi.appendChild(rueck);
      b.appendChild(bi); box.appendChild(b);

      /* c) umbauen */
      var c = el("div", { "class": "teil freigabe", "data-zu": "" });
      c.appendChild(el("p", { "class": "freigabe__sperre meta" }, "Danach bauen Sie die Situation um."));
      var ci = el("div", { "class": "freigabe__inhalt" });
      ci.appendChild(el("h3", { "class": "teil__kopf" }, "3 · Umbauen"));
      ci.appendChild(el("p", { "class": "leitfrage leitfrage--klein" }, D.zusatzfrage));
      var lab2 = el("label", { "class": "feld" }, "So ginge es demokratischer:");
      lab2.appendChild(el("textarea", { rows: "3", "data-text": "fall-weg-" + f.id, placeholder: "Die Fachkraft könnte … Die Kinder könnten …" })); ci.appendChild(lab2);
      ci.appendChild(el("p", { "class": "lauf" }, "Stellen Sie die Fragen jetzt so ein, wie es nach Ihrem Vorschlag wäre. Die gestrichelte Linie zeigt, wie es vorher war."));
      var ic = el("div"); ci.appendChild(ic);
      ci.appendChild(el("p", { "class": "hinweis" }, "Was lässt dieses Modell weg? Halten Sie einen Gedanken für das Plenum bereit."));
      c.appendChild(ci); box.appendChild(c);
      bindeTexte(box);

      function pruefeA() { kA.disabled = !(S.fallWahl[f.id] && warum.value.trim().length >= 12); }
      function pruefeB() {
        var n = beantwortet(S.inst[vor] || {});
        kB.disabled = n < 4;
        sB.textContent = S.fallGeprueft[f.id] ? "" : (n < 4 ? "Beantworten Sie mindestens vier Fragen – bisher " + n + "." : n + " von 6 beantwortet.");
      }
      function festA(neu) {
        kA.hidden = true; stempel.hidden = false; if (neu) stempel.classList.add("neu"); warum.readOnly = true;
        b.removeAttribute("data-zu");
        if (!ib.firstChild) instrument(ib, vor, { aendern: pruefeB });
        pruefeB();
      }
      function zeigeB() {
        var u = f.urteil[S.fallWahl[f.id]];
        rueck.hidden = false; rueck.textContent = ""; rueck.setAttribute("data-urteil", u[0]);
        rueck.appendChild(el("b", {}, "Ihre Vermutung: " + D.formen[S.fallWahl[f.id]] + " – " + URTEIL[u[0]])); rueck.appendChild(document.createTextNode(u[1]));
        kB.hidden = true; sB.textContent = "";
        c.removeAttribute("data-zu");
        if (!S.inst[nach]) { S.inst[nach] = JSON.parse(JSON.stringify(S.inst[vor] || {})); merke(); }
        if (!ic.firstChild) instrument(ic, nach, { geist: vor });
        fertig();
      }
      warum.addEventListener("input", pruefeA);
      kA.addEventListener("click", function () { S.fallFest[f.id] = true; merke(); festA(true); });
      kB.addEventListener("click", function () { S.fallGeprueft[f.id] = true; merke(); zeigeB(); });
      pruefeA();
      if (S.fallFest[f.id]) { festA(false); if (S.fallGeprueft[f.id]) zeigeB(); }
    }
    if (S.fall) D.faelle.forEach(function (f) { if (f.id === S.fall) zeige(f); });
  })();

  /* ---------- Jahreskompass ---------- */
  var kompass = (function () {
    var svg = $("#rad"), panel = $("#etappe"), C = 280, RA = 252, RI = 158, RB = 150, RM = 108, gewaehlt = D.hier, winkel = 0;
    function pol(r, grad) { var a = (grad - 90) * Math.PI / 180; return [C + r * Math.cos(a), C + r * Math.sin(a)]; }
    function ring(r1, r2, a1, a2) {
      var p1 = pol(r1, a1), p2 = pol(r1, a2), p3 = pol(r2, a2), p4 = pol(r2, a1);
      return "M" + p1 + "A" + r1 + " " + r1 + " 0 0 1 " + p2 + "L" + p3 + "A" + r2 + " " + r2 + " 0 0 0 " + p4 + "Z";
    }
    var defs = sv("defs"); svg.appendChild(defs);
    /* vier Blickrichtungen */
    D.blick.forEach(function (name, i) {
      var a1 = i * 90 + 1.5, a2 = (i + 1) * 90 - 1.5, unten = i === 1 || i === 2, rr = (RB + RM) / 2;
      svg.appendChild(sv("path", { d: ring(RB, RM, a1, a2), "class": "rad-blick rad-blick--" + i }));
      var s = pol(rr, unten ? a2 : a1), e = pol(rr, unten ? a1 : a2);
      defs.appendChild(sv("path", { id: "bogen" + i, d: "M" + s + "A" + rr + " " + rr + " 0 0 " + (unten ? 0 : 1) + " " + e }));
      var t = sv("text", { "class": "rad-blicktext", dy: "5" }), tp = sv("textPath", { href: "#bogen" + i, startOffset: "50%" }, name);
      t.appendChild(tp); svg.appendChild(t);
    });
    /* acht Etappen */
    var segs = D.etappen.map(function (e, i) {
      var a1 = i * 45 + 1.2, a2 = (i + 1) * 45 - 1.2, m = pol((RA + RI) / 2, i * 45 + 22.5);
      var g = sv("g", { "class": "rad-seg", role: "button", tabindex: "0", "aria-label": "Etappe " + (i + 1) + ": " + e.titel + (i === D.hier ? " – wir sind hier" : "") });
      g.appendChild(sv("path", { d: ring(RA, RI, a1, a2) }));
      g.appendChild(sv("text", { x: m[0], y: m[1] - 6, "class": "rad-zahl" }, String(i + 1)));
      g.appendChild(sv("text", { x: m[0], y: m[1] + 16, "class": "rad-wort" }, e.kurz));
      var haken = sv("text", { x: m[0], y: m[1] + 33, "class": "rad-haken" }, "");
      g.appendChild(haken); g._haken = haken;
      if (i < D.hier) g.setAttribute("data-stand", "fertig");
      if (i === D.hier) { g.setAttribute("data-stand", "hier"); var h = pol(RA + 2, i * 45 + 22.5); g.appendChild(sv("circle", { cx: h[0], cy: h[1], r: 9, "class": "rad-hier" })); }
      g.addEventListener("click", function () { waehle(i, true); });
      g.addEventListener("keydown", function (ev) { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); waehle(i, true); } });
      svg.appendChild(g); return g;
    });
    /* Mitte und Nadel */
    svg.appendChild(sv("circle", { cx: C, cy: C, r: RM - 8, "class": "rad-mitte" }));
    var nadel = sv("g", { "class": "rad-nadel" });
    nadel.appendChild(sv("path", { d: "M" + C + " " + (C - RB + 6) + "L" + (C + 13) + " " + C + "L" + C + " " + (C + 34) + "L" + (C - 13) + " " + C + "Z" }));
    svg.appendChild(nadel);
    svg.appendChild(sv("circle", { cx: C, cy: C, r: 62, "class": "rad-kern" }));
    svg.appendChild(sv("text", { x: C, y: C - 14, "class": "rad-kerntitel" }, "Kinderrechte"));
    ["Schutz", "Förderung", "Beteiligung"].forEach(function (w, i) { svg.appendChild(sv("text", { x: C, y: C + 6 + i * 17, "class": "rad-kernwort" }, w)); });

    function waehle(i, bewegt) {
      gewaehlt = i;
      var soll = i * 45 + 22.5, d = ((soll - winkel) % 360 + 540) % 360 - 180; winkel += d;
      nadel.style.transition = bewegt && !RUHIG ? "" : "none";
      nadel.style.transform = "rotate(" + winkel + "deg)";
      segs.forEach(function (g, j) { g.setAttribute("aria-pressed", j === i ? "true" : "false"); });
      zeigePanel(D.etappen[i], i, bewegt);
      $("#rad-heute").hidden = i === D.hier;
    }
    function zeigePanel(e, i, bewegt) {
      panel.textContent = "";
      panel.appendChild(el("p", { "class": "kicker" }, "Etappe " + (i + 1) + " von 8 · " + D.blick[Math.floor(i / 2)] + (i === D.hier ? " · wir sind hier" : (i < D.hier ? " · geschafft" : ""))));
      panel.appendChild(el("h2", {}, e.titel));
      panel.appendChild(el("p", { "class": "leitfrage leitfrage--klein" }, e.frage));
      var dl = el("dl");
      var st = etappeStand(i), fb = el("div"); panel.appendChild(fb);
      balken(fb, st.teile, st.fertig + " von " + st.von + " erledigt" + (st.kommt ? " · " + st.kommt + (st.kommt === 1 ? " Station kommt später" : " Stationen kommen später") : ""));
      dl.appendChild(el("dt", {}, "Die Szene")); dl.appendChild(el("dd", {}, e.szene.titel));
      dl.appendChild(el("dt", {}, "Das nehmen Sie mit")); dl.appendChild(el("dd", {}, e.mit));
      dl.appendChild(el("dt", {}, "Im Vortrag")); dl.appendChild(el("dd", {}, e.vortrag));
      panel.appendChild(dl);
      panel.appendChild(el("a", { "class": "knopf", href: "#etappe-" + (i + 1) }, (st.fertig ? "Etappe " + (i + 1) + " fortsetzen →" : "Etappe " + (i + 1) + " öffnen →")));
      if (bewegt && !RUHIG && panel.animate) panel.animate([{ opacity: 0, transform: "translateY(8px)" }, { opacity: 1, transform: "none" }], { duration: 220, easing: "cubic-bezier(.23,1,.32,1)" });
    }
    $("#rad-heute").addEventListener("click", function () { waehle(D.hier, true); });
    function frisch() {
      segs.forEach(function (g, j) {
        var st = etappeStand(j);
        g._haken.textContent = st.fertig === st.von ? "✓" : (st.fertig ? st.fertig + "/" + st.von : "");
        g.setAttribute("aria-label", "Etappe " + (j + 1) + ": " + D.etappen[j].titel + " – " + st.fertig + " von " + st.von + " erledigt" + (j === D.hier ? " – wir sind hier" : ""));
      });
      waehle(gewaehlt, false);
    }
    waehle(D.hier, false);
    return { frisch: frisch };
  })();

  /* ---------- Schritte, Freigaben, Ansichten ---------- */
  var schritte = $$(".schritt"), leiste = $("#schritte"), alle = false;
  try { alle = window.sessionStorage.getItem(KEY + ":alle") === "1"; } catch (e) { alle = false; }
  var FEHLT = [
    "Legen Sie Ihre Position fest.",
    "Markieren, begründen, vergleichen – dann geht es weiter.",
    "Sehen Sie den Zwischenstand an und legen Sie zwei Verbindungen.",
    "Vermuten, prüfen und vergleichen Sie Ihre Karte.",
    ""
  ];
  schritte.forEach(function (s, i) {
    var li = el("li"), b = el("button", { type: "button" });
    b.appendChild(el("b", {}, String(i + 1))); b.appendChild(el("span", {}, s.dataset.titel));
    b.addEventListener("click", function () { if (!b.disabled) gehe(i + 1); });
    li.appendChild(b); leiste.appendChild(li);
  });
  function stand() {
    return [
      typeof S.vor === "number", !!S.leseZu,
      !!S.geprueft && S.links.length >= 2,
      Object.keys(S.fallGeprueft).length > 0,
      !!S.produktZu && typeof S.nach === "number"
    ];
  }
  function offenBis() { var f = stand(), n = 0; while (n < f.length && f[n]) n++; return alle ? f.length : Math.min(f.length, n + 1); }
  function fertig() {
    if (!leiste) return; /* wird während des Aufbaus schon gerufen */
    var f = stand(), bis = offenBis(), akt = S.schritt || 1;
    $$("button", leiste).forEach(function (b, i) {
      b.disabled = i + 1 > bis;
      b.setAttribute("data-stand", f[i] ? "fertig" : (i + 1 > bis ? "zu" : "offen"));
      if (i + 1 === akt) b.setAttribute("aria-current", "step"); else b.removeAttribute("aria-current");
      b.setAttribute("aria-label", "Schritt " + (i + 1) + ": " + schritte[i].dataset.titel + (f[i] ? " – erledigt" : (i + 1 > bis ? " – noch gesperrt" : "")));
    });
    var nf = f.filter(Boolean).length;
    balken($("#lern-balken"), f.map(function (x) { return x ? "fertig" : "offen"; }), nf === f.length ? "Lernseite erledigt: alle fünf Schritte abgeschlossen." : nf + " von " + f.length + " Schritten erledigt · Fertig sind Sie, wenn Ihr Satz verglichen und Ihre Position neu festgelegt ist.");
    var w = $("#weiter"), h = $("#weiter-hinweis");
    w.hidden = akt >= schritte.length; $("#zurueck").hidden = false;
    $("#zurueck").textContent = akt === 1 ? "← Zur Etappe 1" : "← Zurück";
    w.disabled = !(alle || f[akt - 1]);
    h.textContent = w.hidden ? "" : (w.disabled ? FEHLT[akt - 1] : "");
    var erster = 0; while (erster < f.length && f[erster]) erster++;
    $("#heute-knopf").textContent = erster === 0 && !S.schritt ? "Lernseite beginnen →" : (erster >= f.length ? "Ergebnisse ansehen →" : "Weitermachen bei Schritt " + Math.min(erster + 1, f.length) + " →");
  }
  function gehe(n, still) {
    n = Math.max(1, Math.min(schritte.length, n)); S.schritt = n; merke();
    schritte.forEach(function (s, i) { s.hidden = i + 1 !== n; });
    fertig();
    if (n === 3) lege.zeichne();
    if (!still) { window.scrollTo(0, 0); var h = $("h2", schritte[n - 1]); h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); }
    var s = schritte[n - 1];
    if (!still && !RUHIG && s.animate) s.animate([{ opacity: 0, transform: "translateY(10px)" }, { opacity: 1, transform: "none" }], { duration: 280, easing: "cubic-bezier(.2,.8,.2,1)" });
  }
  $("#weiter").addEventListener("click", function () { gehe((S.schritt || 1) + 1); });
  $("#zurueck").addEventListener("click", function () { if ((S.schritt || 1) === 1) window.location.hash = "#etappe-1"; else gehe(S.schritt - 1); });

  function ansicht() {
    var h = window.location.hash.replace("#", "");
    if (h === "heute-alle") { alle = true; try { window.sessionStorage.setItem(KEY + ":alle", "1"); } catch (e) { /* ohne Speicher gilt es bis zum Neuladen */ } h = "heute"; }
    var m = /^etappe-([1-8])$/.exec(h), welche = h === "heute" ? "heute" : (h === "ausstellung" ? "ausstellung" : (m ? "etappe" : "start"));
    ["start", "heute", "ausstellung", "etappe"].forEach(function (v) { $("#v-" + v).hidden = v !== welche; });
    $$("[data-nav]").forEach(function (a) { if (a.dataset.nav === welche) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
    if (welche === "heute") gehe(Math.min(S.schritt || 1, offenBis()), true);
    if (welche === "etappe") zeigeModul(+m[1] - 1);
    if (welche === "start") kompass.frisch();
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", ansicht);


  /* ---------- Einfachwahl mit Begründung: erst festlegen, dann Rückmeldung zu jeder Antwort ---------- */
  function wahl(box, key, frage, optionen, danach) {
    var fs = el("fieldset", { "class": "volkfs" });
    fs.appendChild(el("legend", {}, frage));
    var reihe = el("div", { "class": "wahl__opt" }), fest = !!S.wahlFest[key];
    optionen.forEach(function (o, i) {
      var lab = el("label", { "class": "g-option" }), inp = el("input", { type: "radio", name: "wahl-" + key, value: i });
      if (S.wahl[key] === i) inp.checked = true;
      inp.addEventListener("change", function () {
        if (S.wahlFest[key]) { $$("input", reihe).forEach(function (x, j) { x.checked = j === S.wahl[key]; }); return; }
        S.wahl[key] = i; merke(); pruefe();
      });
      lab.appendChild(inp); lab.appendChild(el("span", {}, o[0])); reihe.appendChild(lab);
    });
    fs.appendChild(reihe); box.appendChild(fs);
    var lab1 = el("label", { "class": "feld" }, "Ein Satz, warum:");
    var warum = el("textarea", { rows: "2", "data-text": "wahl-warum-" + key, placeholder: "Ich wähle das, weil …" }); lab1.appendChild(warum); box.appendChild(lab1);
    var r = el("div", { "class": "g-reihe" }), knopf = el("button", { type: "button", "class": "g-knopf g-knopf--primaer", disabled: "" }, "Festlegen");
    var stempel = el("span", { "class": "g-stempel", hidden: "" }, "festgelegt"); r.appendChild(knopf); r.appendChild(stempel); box.appendChild(r);
    var rueck = el("div", { "class": "wahl__rueck", hidden: "", "aria-live": "polite" }); box.appendChild(rueck);
    bindeTexte(box);
    function pruefe() { knopf.disabled = !(typeof S.wahl[key] === "number" && warum.value.trim().length >= 12); }
    function zeige(neu) {
      knopf.hidden = true; stempel.hidden = false; if (neu) stempel.classList.add("neu"); warum.readOnly = true;
      rueck.hidden = false; rueck.textContent = "";
      var o = optionen[S.wahl[key]], eigen = el("div", { "class": "rueck", "data-urteil": o[1] });
      eigen.appendChild(el("b", {}, "Ihre Wahl: " + D.urteilWort[o[1]])); eigen.appendChild(document.createTextNode(o[2])); rueck.appendChild(eigen);
      var det = el("details", { "class": "woerter" }); det.appendChild(el("summary", {}, "Und die anderen Antworten?"));
      var ul = el("ul");
      optionen.forEach(function (x, j) { if (j === S.wahl[key]) return; var li = el("li"); li.appendChild(el("b", {}, x[0] + " – " + D.urteilWort[x[1]] + " ")); li.appendChild(document.createTextNode(x[2])); ul.appendChild(li); });
      det.appendChild(ul); rueck.appendChild(det);
      if (danach) danach(neu);
    }
    warum.addEventListener("input", pruefe);
    knopf.addEventListener("click", function () { S.wahlFest[key] = true; merke(); zeige(true); });
    pruefe(); if (fest) zeige(false);
  }

  /* ---------- Fortschritt: zählt erledigte Festlegungen und Produkte, keine Klicks ---------- */
  function balken(box, teile, satz) {
    box.textContent = ""; box.className = "balken";
    var spur = el("div", { "class": "balken__spur", "aria-hidden": "true" });
    teile.forEach(function (x) { spur.appendChild(el("span", { "data-stand": x })); });
    box.appendChild(spur); box.appendChild(el("p", { "class": "balken__text" }, satz));
  }
  function lernStand() { var f = stand(), n = f.filter(Boolean).length; return n === f.length ? "fertig" : (n > 0 ? "angefangen" : "offen"); }
  function ausZahl() { return D.stationen.filter(function (s) { return S.wahlFest[s.id]; }).length; }
  function ausStand() { var n = ausZahl(); return n >= 3 && S.plakatZu ? "fertig" : (n > 0 ? "angefangen" : "offen"); }
  function stationStand(x) { return x[0] === "kommt" ? "kommt" : (x[2] === "#heute" ? lernStand() : (x[2] === "#ausstellung" ? ausStand() : "offen")); }
  var STANDWORT = { fertig: "erledigt", angefangen: "angefangen", offen: "offen", kommt: "kommt später" };
  function etappeStand(i) {
    var e = D.etappen[i], teile = [S.wahlFest["e" + i] ? "fertig" : "offen"];
    e.weg.forEach(function (x) { if (x[0] !== "kommt") teile.push(stationStand(x)); });
    var n = teile.filter(function (x) { return x === "fertig"; }).length;
    return { teile: teile, fertig: n, von: teile.length, kommt: e.weg.filter(function (x) { return x[0] === "kommt"; }).length };
  }

  /* ---------- Etappe: Weg an der Seite, Einstieg in drei Schritten im Fenster ---------- */
  function zeigeModul(i) {
    var e = D.etappen[i], box = $("#modul"), key = "e" + i, akt = 1; box.textContent = "";
    var kopf = el("div", { "class": "held" });
    kopf.appendChild(el("p", { "class": "kicker" }, "Etappe " + (i + 1) + " von 8 · " + D.blick[Math.floor(i / 2)] + " · " + e.vortrag));
    kopf.appendChild(el("h1", { id: "mod-titel" }, e.titel));
    kopf.appendChild(el("p", { "class": "leitfrage" }, e.frage));
    var fb = el("div"); kopf.appendChild(fb);
    box.appendChild(kopf);

    var fenster = el("div", { "class": "fenster" });
    /* Seite: der Weg durch die Etappe */
    var rail = el("aside", { "class": "rail", "aria-labelledby": "rail-titel" });
    rail.appendChild(el("h2", { id: "rail-titel" }, "Ihr Weg durch diese Etappe"));
    rail.appendChild(el("p", { "class": "meta" }, "Der Einstieg führt in das Thema. In den Stationen arbeiten Sie daran – im Unterricht, gemeinsam geführt."));
    var ol = el("ol", { "class": "rail__liste" }); rail.appendChild(ol);
    var ziel = el("div", { "class": "rail__ziel" }); rail.appendChild(ziel);
    fenster.appendChild(rail);

    /* Fenster: Einstieg in drei Schritten */
    var arb = el("div", { "class": "schritt arbeits" });
    var leiste = el("ol", { "class": "schritte", "aria-label": "Schritte des Einstiegs" }); arb.appendChild(leiste);
    var TEILE = ["Szene", "Dahinter", "Ihre Kita"], pills = [], seiten = [];
    TEILE.forEach(function (name, n) {
      var li = el("li"), b = el("button", { type: "button" });
      b.appendChild(el("b", {}, String(n + 1))); b.appendChild(el("span", {}, name));
      b.addEventListener("click", function () { if (!b.disabled) gehe(n + 1, true); });
      li.appendChild(b); leiste.appendChild(li); pills.push(b);
    });

    var s1 = el("div", { "class": "seite" });
    s1.appendChild(el("p", { "class": "meta" }, "Einstieg · Schritt 1 von 3 · etwa 5 Minuten · allein"));
    var sz = el("div", { "class": "falltext" });
    sz.appendChild(el("p", { "class": "etikett" }, e.szene.status));
    sz.appendChild(el("h2", { tabindex: "-1" }, e.szene.titel));
    e.szene.text.forEach(function (a) { sz.appendChild(el("p", { "class": "falltext__text" }, a)); });
    s1.appendChild(sz);
    s1.appendChild(el("p", { "class": "auftrag" }, "Legen Sie sich fest und begründen Sie Ihre Wahl in einem Satz. Erst dann sehen Sie die Rückmeldung."));
    var w = el("div", { "class": "teil" }); s1.appendChild(w);

    var s2 = el("div", { "class": "seite" });
    s2.appendChild(el("p", { "class": "meta" }, "Einstieg · Schritt 2 von 3 · etwa 5 Minuten · allein, dann zu zweit vergleichen"));
    s2.appendChild(el("h2", { tabindex: "-1" }, "Das steckt dahinter"));
    var sich = el("div", { "class": "sicherung" });
    sich.appendChild(el("p", { "class": "sicherung__kopf" }, "Ergebnissicherung")); sich.appendChild(el("p", {}, e.kern)); s2.appendChild(sich);
    s2.appendChild(el("h3", { "class": "zwischen" }, "Begriffe dieser Etappe"));
    var dl = el("dl", { "class": "begriffe" });
    e.begriffe.forEach(function (b) { var d = el("div"); d.appendChild(el("dt", {}, b[0])); d.appendChild(el("dd", {}, b[1])); dl.appendChild(d); });
    s2.appendChild(dl);

    var s3 = el("div", { "class": "seite" });
    s3.appendChild(el("p", { "class": "meta" }, "Einstieg · Schritt 3 von 3 · freiwillig · ohne Namen"));
    s3.appendChild(el("h2", { tabindex: "-1" }, "In Ihrer Kita"));
    s3.appendChild(el("p", { "class": "leitfrage leitfrage--klein" }, e.kita));
    var lab = el("label", { "class": "feld" }, "Das habe ich beobachtet:");
    lab.appendChild(el("textarea", { rows: "3", "data-text": "kita-" + i, placeholder: "In meiner Einrichtung …" })); s3.appendChild(lab);
    s3.appendChild(el("p", { "class": "meta" }, "Ihre Notiz bleibt auf diesem Gerät, bis Sie den Tab schließen."));
    var ende = el("div", { "class": "erledigt" }); s3.appendChild(ende);

    seiten = [s1, s2, s3]; seiten.forEach(function (s) { arb.appendChild(s); });
    var nav = el("div", { "class": "weiter" });
    var zur = el("button", { type: "button", "class": "g-knopf g-knopf--still" }, "← Zurück");
    var hin = el("p", { "class": "meta", "aria-live": "polite" });
    var wei = el("button", { type: "button", "class": "g-knopf g-knopf--primaer" }, "Weiter →");
    nav.appendChild(zur); nav.appendChild(hin); nav.appendChild(wei); arb.appendChild(nav);
    fenster.appendChild(arb); box.appendChild(fenster);

    function gehe(n, fokus) {
      akt = n;
      seiten.forEach(function (s, j) { s.hidden = j + 1 !== n; });
      male();
      if (fokus) {
        var h = $("h2", seiten[n - 1]); arb.scrollIntoView({ block: "start", behavior: "auto" }); h.focus({ preventScroll: true });
        if (!RUHIG && seiten[n - 1].animate) seiten[n - 1].animate([{ opacity: 0, transform: "translateY(8px)" }, { opacity: 1, transform: "none" }], { duration: 200, easing: "cubic-bezier(.23,1,.32,1)" });
      }
    }
    function male() {
      var fest = !!S.wahlFest[key], st = etappeStand(i);
      pills.forEach(function (b, j) {
        var zu = j > 0 && !fest;
        b.disabled = zu; b.setAttribute("data-stand", (j === 0 && fest) || (j > 0 && fest && j + 1 < akt) ? "fertig" : (zu ? "zu" : "offen"));
        if (j + 1 === akt) b.setAttribute("aria-current", "step"); else b.removeAttribute("aria-current");
        b.setAttribute("aria-label", "Schritt " + (j + 1) + ": " + TEILE[j] + (zu ? " – öffnet sich nach Ihrer Festlegung" : ""));
      });
      zur.hidden = akt === 1; wei.hidden = akt === 3;
      wei.disabled = !fest; hin.textContent = !fest ? "Legen Sie sich zuerst fest." : "";
      /* Kopf: Fortschritt der Etappe */
      balken(fb, st.teile, st.fertig + " von " + st.von + " erledigt" + (st.kommt ? " · " + st.kommt + (st.kommt === 1 ? " Station kommt" : " Stationen kommen") + " im Lauf des Jahres dazu" : ""));
      /* Seite: Einstieg und Stationen mit Stand */
      ol.textContent = "";
      var li0 = el("li", { "data-stand": fest ? "fertig" : "offen", "data-hier": "" });
      li0.appendChild(el("span", { "class": "rail__marke", "aria-hidden": "true" }, fest ? "✓" : "1"));
      var t0 = el("div"); t0.appendChild(el("b", {}, "Einstieg: " + e.szene.titel));
      t0.appendChild(el("span", { "class": "rail__wozu" }, "Eine Szene, eine Festlegung, die wichtigsten Begriffe."));
      t0.appendChild(el("span", { "class": "rail__stand" }, "10 Minuten · " + (fest ? "erledigt" : "Sie sind hier")));
      li0.appendChild(t0); ol.appendChild(li0);
      var naechste = null;
      e.weg.forEach(function (x, j) {
        var s = stationStand(x), li = el("li", { "data-stand": s });
        li.appendChild(el("span", { "class": "rail__marke", "aria-hidden": "true" }, s === "fertig" ? "✓" : String(j + 2)));
        var d = el("div");
        if (x[2]) { var a = el("a", { href: x[2] }); a.appendChild(el("b", {}, x[1])); d.appendChild(a); if (!naechste && s !== "fertig") naechste = x; }
        else d.appendChild(el("b", {}, x[1]));
        d.appendChild(el("span", { "class": "rail__wozu" }, x[3]));
        d.appendChild(el("span", { "class": "rail__stand" }, x[4] + " · " + STANDWORT[s]));
        li.appendChild(d); ol.appendChild(li);
      });
      ziel.textContent = "";
      ziel.appendChild(el("b", {}, st.fertig === st.von ? "Alles Offene ist erledigt." : "Fertig sind Sie hier, wenn"));
      ziel.appendChild(el("span", {}, st.fertig === st.von ? (st.kommt ? "Die weiteren Stationen öffnen sich im Lauf des Jahres." : "Diese Etappe ist abgeschlossen.") : "der Einstieg und jede offene Station ein ✓ tragen. Am Ende nehmen Sie mit: " + e.mit + "."));
      /* Abschluss des Einstiegs */
      ende.textContent = "";
      ende.appendChild(el("p", { "class": "erledigt__kopf" }, "✓ Einstieg erledigt"));
      ende.appendChild(el("p", {}, naechste ? "Weiter geht es mit der Station »" + naechste[1] + "«." : "Die Stationen dieser Etappe kommen im Unterricht dazu. Sie können zurück zum Kompass."));
      var r = el("div", { "class": "g-reihe" });
      if (naechste) r.appendChild(el("a", { "class": "g-knopf g-knopf--primaer", href: naechste[2] }, "Zur Station →"));
      r.appendChild(el("a", { "class": "g-knopf g-knopf--sekundaer", href: "#start" }, "Zum Kompass"));
      if (i < 7) r.appendChild(el("a", { "class": "g-knopf g-knopf--still", href: "#etappe-" + (i + 2) }, "Etappe " + (i + 2) + " ansehen →"));
      ende.appendChild(r);
    }
    zur.addEventListener("click", function () { gehe(akt - 1, true); });
    wei.addEventListener("click", function () { gehe(akt + 1, true); });
    wahl(w, key, e.wahl.frage, e.wahl.optionen, function () { male(); });
    bindeTexte(s3);
    gehe(1, false);
  }

  /* ---------- Ausstellung: Plakat, Szene, Prüfstein, Alltagskarten, eigenes Plakat ---------- */
  (function () {
    var wand = $("#plakate"), box = $("#station"), standP = $("#plakat-stand"), knoepfe = {};
    function festZahl() { return D.stationen.filter(function (s) { return S.wahlFest[s.id]; }).length; }
    function stand() {
      var n = festZahl();
      D.stationen.forEach(function (s) { if (S.wahlFest[s.id]) knoepfe[s.id].setAttribute("data-stand", "fertig"); });
      var teile = [0, 1, 2].map(function (k) { return n > k ? "fertig" : "offen"; }); teile.push(S.plakatZu ? "fertig" : "offen");
      balken($("#aus-balken"), teile, (S.plakatZu && n >= 3 ? "Ausstellung erledigt. " : "") + Math.min(n, 3) + " von 3 Plakaten festgelegt · eigenes Plakat " + (S.plakatZu ? "fertig" : "noch offen") + (n > 3 ? " · " + (n - 3) + " weitere angesehen" : ""));
      standP.textContent = n === 0 ? "Tippen Sie ein Plakat an." : (n < 3 ? "Noch " + (3 - n) + (3 - n === 1 ? " Plakat" : " Plakate") + " bis zu Ihrem eigenen Plakat." : (S.plakatZu ? "" : "Jetzt ist Ihr eigenes Plakat offen – weiter unten."));
      if (n >= 3) $("#plakat-box").removeAttribute("data-zu");
    }
    D.stationen.forEach(function (s, i) {
      var b = el("button", { type: "button", "class": "plakat plakat--" + s.farbe, "aria-pressed": "false" });
      b.appendChild(el("span", { "class": "plakat__nr" }, String(i + 1)));
      b.appendChild(el("span", { "class": "plakat__satz" }, s.satz));
      b.appendChild(el("span", { "class": "plakat__ok" }, "festgelegt"));
      b.addEventListener("click", function () { S.station = s.id; merke(); zeige(s, i, true); });
      knoepfe[s.id] = b; wand.appendChild(b);
    });
    function zeige(s, i, bewegt) {
      D.stationen.forEach(function (x) { knoepfe[x.id].setAttribute("aria-pressed", x.id === s.id ? "true" : "false"); });
      box.textContent = "";
      var k = el("div", { "class": "schritt station__karte plakat--" + s.farbe });
      k.appendChild(el("p", { "class": "meta" }, "Plakat " + (i + 1) + " von " + D.stationen.length));
      k.appendChild(el("h2", { "class": "station__satz", tabindex: "-1" }, s.satz));
      var q = el("details", { "class": "woerter" }); q.appendChild(el("summary", {}, "Woher kommt dieses Recht?"));
      q.appendChild(el("p", {}, s.quelle)); q.appendChild(el("p", { "class": "meta" }, "Status: " + s.status)); k.appendChild(q);
      var sz = el("div", { "class": "falltext" });
      sz.appendChild(el("p", { "class": "etikett" }, "ausgedachte Szene"));
      sz.appendChild(el("p", { "class": "falltext__text" }, s.szene)); k.appendChild(sz);
      var w = el("div", { "class": "teil" }); k.appendChild(w);
      var frei = el("div", { "class": "freigabe", "data-zu": "" });
      frei.appendChild(el("p", { "class": "freigabe__sperre meta" }, "Was das Recht im Kita-Alltag heißt, öffnet sich nach Ihrer Festlegung."));
      var fi = el("div", { "class": "freigabe__inhalt" });
      fi.appendChild(el("h3", { "class": "zwischen" }, "In der Kita heißt das"));
      var ul = el("ul", { "class": "kitaliste" }); s.kita.forEach(function (x) { ul.appendChild(el("li", {}, x)); }); fi.appendChild(ul);
      var lab = el("label", { "class": "feld" }, "So würde ich die Szene verändern:");
      lab.appendChild(el("textarea", { rows: "2", "data-text": "station-" + s.id, placeholder: "Die Fachkraft könnte …" })); fi.appendChild(lab);
      frei.appendChild(fi); k.appendChild(frei);
      box.appendChild(k);
      wahl(w, s.id, "Welcher Prüfstein ist hier zuerst berührt?", D.pruefsteine.map(function (p) { return [p[1], s.urteil[p[0]][0], s.urteil[p[0]][1]]; }), function () { frei.removeAttribute("data-zu"); stand(); });
      bindeTexte(fi);
      if (bewegt) {
        k.scrollIntoView({ block: "start", behavior: RUHIG ? "auto" : "smooth" });
        if (!RUHIG && k.animate) k.animate([{ opacity: 0, transform: "translateY(10px)" }, { opacity: 1, transform: "none" }], { duration: 220, easing: "cubic-bezier(.23,1,.32,1)" });
      }
    }
    if (S.station) D.stationen.forEach(function (s, i) { if (s.id === S.station) zeige(s, i, false); });
    stand();

    /* Alltagskarten: erst selbst überlegen, dann aufdecken */
    var aw = $("#alltag-wahl"), ak = $("#alltag-karte");
    D.alltag.forEach(function (a) {
      var c = el("button", { type: "button", "class": "chip", "aria-pressed": "false", "data-id": a.id }, a.name);
      c.addEventListener("click", function () { zeigeAlltag(a); });
      aw.appendChild(c);
    });
    function zeigeAlltag(a) {
      $$(".chip", aw).forEach(function (c) { c.setAttribute("aria-pressed", c.dataset.id === a.id ? "true" : "false"); });
      ak.textContent = "";
      var k = el("div", { "class": "alltagkarte" });
      k.appendChild(el("p", { "class": "etikett" }, "ausgedachte Situation · " + a.name));
      k.appendChild(el("p", { "class": "meta" }, "Was oft passiert"));
      k.appendChild(el("p", { "class": "falltext__text" }, a.oft));
      var lab = el("label", { "class": "feld" }, "Was braucht das Kind – und was könnten Sie sagen?");
      var ta = el("textarea", { rows: "2", "data-text": "alltag-" + a.id, placeholder: "Das Kind braucht … Ich könnte sagen: …" }); lab.appendChild(ta); k.appendChild(lab);
      var knopf = el("button", { type: "button", "class": "g-knopf g-knopf--sekundaer", disabled: "" }, "Ich habe eine Idee – aufdecken");
      k.appendChild(knopf);
      var auf = el("dl", { "class": "alltagkarte__auf", hidden: "" });
      [["Was das Kind braucht", a.braucht], ["So ginge es mit Kinderrechten", a.weg], ["Welches Recht", a.recht]].forEach(function (x) { var d = el("div"); d.appendChild(el("dt", {}, x[0])); d.appendChild(el("dd", {}, x[1])); auf.appendChild(d); });
      k.appendChild(auf); ak.appendChild(k); bindeTexte(k);
      function pruefe() { knopf.disabled = ta.value.trim().length < 12; }
      function oeffne() { auf.hidden = false; knopf.hidden = true; }
      ta.addEventListener("input", pruefe);
      knopf.addEventListener("click", function () { S.alltag[a.id] = 1; merke(); oeffne(); });
      pruefe(); if (S.alltag[a.id]) oeffne();
    }

    /* Eigenes Plakat */
    bindeTexte($("#plakat-box"));
    var pr = $("#plakat-recht"), satz = $("#plakat-satz"), pk = $("#plakat-vergleich"), ph = $("#plakat-hinweis");
    D.stationen.forEach(function (s, i) {
      var c = el("button", { type: "button", "class": "chip", "aria-pressed": S.plakat === i ? "true" : "false" }, s.satz);
      c.addEventListener("click", function () { S.plakat = i; merke(); $$(".chip", pr).forEach(function (x, j) { x.setAttribute("aria-pressed", j === i ? "true" : "false"); }); pruefe(); male(); });
      pr.appendChild(c);
    });
    function pruefe() {
      var n = woerter(satz.value), ok = typeof S.plakat === "number" && n >= 4;
      pk.disabled = !ok;
      ph.textContent = S.plakatZu ? "" : (typeof S.plakat !== "number" ? "Wählen Sie ein Recht." : (n < 4 ? "Schreiben Sie Ihren Satz – mindestens vier Wörter." : ""));
    }
    function male() {
      if (!S.plakatZu || typeof S.plakat !== "number") return;
      $("#meinplakat").hidden = false; $("#meinplakat").className = "meinplakat plakat--" + D.stationen[S.plakat].farbe;
      $("#meinplakat-satz").textContent = satz.value.trim() || D.stationen[S.plakat].satz;
      $("#meinplakat-recht").textContent = "Ihr Plakat zum Recht: " + D.stationen[S.plakat].satz;
    }
    function oeffne() { $("#plakat-raster").hidden = false; pk.hidden = true; ph.textContent = ""; male(); }
    satz.addEventListener("input", function () { pruefe(); male(); });
    pk.addEventListener("click", function () { S.plakatZu = true; merke(); oeffne(); stand(); });
    window.addEventListener("pageshow", pruefe);
    pruefe(); if (S.plakatZu) oeffne();
  })();

  /* ---------- 5 Produkt, Raster, Merkseite ---------- */
  (function () {
    var p = $("#produkt"), knopf = $("#produkt-vergleich"), stand = $("#produkt-stand"), raster = $("#raster"), merk = $("#merk");
    
    function pruefe() {
      var n = woerter(p.value); knopf.disabled = n < 15;
      stand.textContent = n < 15 ? "Schreiben Sie mindestens 15 Wörter – bisher " + n + "." : n + " Wörter.";
    }
    function oeffne() { raster.hidden = false; knopf.hidden = true; merk.removeAttribute("data-zu"); fertig(); }
    p.addEventListener("input", pruefe);
    knopf.addEventListener("click", function () { S.produktZu = true; merke(); oeffne(); });
    window.addEventListener("pageshow", pruefe);
    if (S.produktZu) oeffne();
  })();

  /* ---------- Rahmen: Texte, Thesen, Praxis, Drucken, Löschen ---------- */
  bindeTexte(document);
  these($("#these1"), "vor"); these($("#these2"), "nach");
  instrument($("#praxis-instrument"), "praxis", {});
  $$("#these1 textarea, #these2 textarea, #lese-warum, #produkt").forEach(function (t) { t.dispatchEvent(new Event("input")); });
  if (S.leseZu) $("#formen").removeAttribute("data-zu");
  ansicht();

  $$("[data-drucken]").forEach(function (b) { b.addEventListener("click", function () { window.print(); }); });
  var frage = $("#loesch-frage");
  $("#loeschen").addEventListener("click", function () { frage.hidden = false; $("#loesch-nein").focus(); });
  $("#loesch-nein").addEventListener("click", function () { frage.hidden = true; $("#loeschen").focus(); });
  $("#loesch-ja").addEventListener("click", function () {
    try { window.localStorage.removeItem(KEY); window.sessionStorage.removeItem(TKEY); window.sessionStorage.removeItem(KEY + ":alle"); } catch (e) { /* nichts gespeichert */ }
    window.location.hash = "#start"; window.location.reload();
  });
})();
