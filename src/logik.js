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
  ["abruf", "volk", "lage", "fallWahl", "fallZu"].forEach(function (k) { S[k] = S[k] || {}; });
  ["abrufOffen", "lese", "links"].forEach(function (k) { S[k] = S[k] || []; });
  function merke() { sichere(window.localStorage, KEY, S); }
  function merkeText() { sichere(window.sessionStorage, TKEY, T); }
  function woerter(s) { return (s.trim().match(/\S+/g) || []).length; }

  /* Textfelder mit data-text bleiben bis zum Schließen des Tabs */
  function bindeTexte(wurzel) {
    $$("textarea[data-text]", wurzel).forEach(function (t) {
      if (T[t.dataset.text]) t.value = T[t.dataset.text];
      t.addEventListener("input", function () { T[t.dataset.text] = t.value; merkeText(); });
    });
  }

  /* ---------- 1 Erst erinnern ---------- */
  (function () {
    var box = $("#abruf");
    D.abruf.forEach(function (a) {
      var karte = el("div", { "class": "abruf__karte" });
      karte.appendChild(el("p", { "class": "abruf__frage" }, a.frage));
      var knopf = el("button", { type: "button", "class": "g-knopf g-knopf--sekundaer" }, "Ich habe geantwortet – aufdecken");
      var antwort = el("div", { "class": "abruf__antwort", hidden: "" });
      antwort.appendChild(el("p", {}, a.antwort));
      var chips = el("div", { "class": "chips", role: "group", "aria-label": "Wie gut wussten Sie es?" });
      ["wusste ich", "teilweise", "noch nicht"].forEach(function (w, i) {
        var c = el("button", { type: "button", "class": "chip", "aria-pressed": S.abruf[a.id] === i ? "true" : "false" }, w);
        c.addEventListener("click", function () {
          S.abruf[a.id] = i; merke();
          $$(".chip", chips).forEach(function (x, j) { x.setAttribute("aria-pressed", j === i ? "true" : "false"); });
          fertig();
        });
        chips.appendChild(c);
      });
      antwort.appendChild(chips);
      function oeffne() { antwort.hidden = false; knopf.hidden = true; }
      knopf.addEventListener("click", function () { oeffne(); if (S.abrufOffen.indexOf(a.id) < 0) S.abrufOffen.push(a.id); merke(); fertig(); });
      if (S.abrufOffen.indexOf(a.id) >= 0) oeffne();
      karte.appendChild(knopf); karte.appendChild(antwort); box.appendChild(karte);
    });
  })();

  /* ---------- 2 und 7 These mit Skala ---------- */
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

  /* ---------- 3 Welches Volk? ---------- */
  (function () {
    var box = $("#volk"), knopf = $("#volk-pruefen"), stand = $("#volk-stand"), merk = $("#volk-merk");
    D.volk.saetze.forEach(function (s) {
      var fs = el("fieldset", { "data-id": s.id });
      fs.appendChild(el("legend", {}, s.text));
      var reihe = el("div", { "class": "volk__opt" });
      D.volk.optionen.forEach(function (o) {
        var lab = el("label", { "class": "g-option" });
        var inp = el("input", { type: "radio", name: s.id, value: o[0] });
        if (S.volk[s.id] === o[0]) inp.checked = true;
        inp.addEventListener("change", function () { S.volk[s.id] = o[0]; merke(); zaehle(); if (S.volkZu) zeige(); });
        var sp = el("span"); sp.appendChild(el(o[0] === "weder" ? "b" : "i", {}, o[1]));
        lab.appendChild(inp); lab.appendChild(sp); reihe.appendChild(lab);
      });
      fs.appendChild(reihe);
      fs.appendChild(el("div", { "class": "rueck", hidden: "", "aria-live": "polite" }));
      box.appendChild(fs);
    });
    function zaehle() {
      var offen = D.volk.saetze.filter(function (s) { return !S.volk[s.id]; }).length;
      knopf.disabled = offen > 0;
      stand.textContent = offen ? "Noch " + offen + (offen === 1 ? " Satz offen." : " Sätze offen.") : (S.volkZu ? "Sie können Ihre Wahl ändern – die Rückmeldung passt sich an." : "Alle vier gewählt.");
    }
    function zeige() {
      D.volk.saetze.forEach(function (s) {
        var r = $("fieldset[data-id=" + s.id + "] .rueck", box), w = S.volk[s.id];
        if (!w) return;
        r.hidden = false; r.textContent = "";
        r.setAttribute("data-urteil", w === s.richtig ? "zentral" : "kaum");
        r.appendChild(el("b", {}, w === s.richtig ? "Das trifft es." : "Noch nicht."));
        r.appendChild(document.createTextNode(s.rueck[w]));
      });
      merk.hidden = false; knopf.hidden = true; fertig();
    }
    knopf.addEventListener("click", function () { S.volkZu = true; merke(); zeige(); zaehle(); });
    zaehle(); if (S.volkZu) zeige();
  })();

  /* ---------- 4 Lesen und markieren ---------- */
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

  /* ---------- 5 Begriffsnetz legen ---------- */
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

  /* ---------- 6 Kita-Fall: vermuten, prüfen, umbauen ---------- */
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
      panel.appendChild(el("p", { "class": "kicker" }, "Etappe " + (i + 1) + " von 8 · Blickrichtung: " + D.blick[Math.floor(i / 2)] + (i === D.hier ? " · wir sind hier" : (i < D.hier ? " · geschafft" : ""))));
      panel.appendChild(el("h2", {}, e.titel));
      panel.appendChild(el("p", { "class": "leitfrage leitfrage--klein" }, e.frage));
      var dl = el("dl");
      dl.appendChild(el("dt", {}, "Das nehmen Sie mit")); dl.appendChild(el("dd", {}, e.mit));
      dl.appendChild(el("dt", {}, "In der Kita")); dl.appendChild(el("dd", {}, e.kita));
      panel.appendChild(dl);
      if (e.weg) {
        var ol = el("ol", { "class": "weg" });
        e.weg.forEach(function (w) {
          var li = el("li", { "data-stand": w[0] });
          li.appendChild(el("span", { "class": "weg__marke" }, w[0] === "fertig" ? "✓" : (w[0] === "heute" ? "→" : "")));
          li.appendChild(el("span", {}, w[1]));
          if (w[0] === "heute") li.appendChild(el("span", { "class": "weg__heute" }, "heute"));
          ol.appendChild(li);
        });
        panel.appendChild(ol);
      }
      if (bewegt && !RUHIG && panel.animate) panel.animate([{ opacity: 0, transform: "translateY(8px)" }, { opacity: 1, transform: "none" }], { duration: 260, easing: "cubic-bezier(.2,.8,.2,1)" });
    }
    $("#rad-heute").addEventListener("click", function () { waehle(D.hier, true); });
    waehle(D.hier, false);
    return {};
  })();

  /* ---------- Schritte, Freigaben, Ansichten ---------- */
  var schritte = $$(".schritt"), leiste = $("#schritte"), alle = false;
  try { alle = window.sessionStorage.getItem(KEY + ":alle") === "1"; } catch (e) { alle = false; }
  var FEHLT = [
    "Decken Sie alle drei Antworten auf.",
    "Legen Sie Ihre Position fest.",
    "Wählen Sie alle vier Sätze und lassen Sie sich die Rückmeldung zeigen.",
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
      D.abruf.every(function (a) { return S.abrufOffen.indexOf(a.id) >= 0; }),
      typeof S.vor === "number", !!S.volkZu, !!S.leseZu,
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
    var w = $("#weiter"), h = $("#weiter-hinweis");
    w.hidden = akt >= schritte.length; $("#zurueck").hidden = false;
    $("#zurueck").textContent = akt === 1 ? "← Zum Jahreskompass" : "← Zurück";
    w.disabled = !(alle || f[akt - 1]);
    h.textContent = w.hidden ? "" : (w.disabled ? FEHLT[akt - 1] : "");
    var erster = 0; while (erster < f.length && f[erster]) erster++;
    $("#heute-knopf").textContent = erster === 0 && !S.schritt ? "Stunde beginnen →" : (erster >= f.length ? "Ergebnisse ansehen →" : "Weitermachen bei Schritt " + Math.min(erster + 1, 7) + " →");
  }
  function gehe(n, still) {
    n = Math.max(1, Math.min(schritte.length, n)); S.schritt = n; merke();
    schritte.forEach(function (s, i) { s.hidden = i + 1 !== n; });
    fertig();
    if (n === 5) lege.zeichne();
    if (!still) { window.scrollTo(0, 0); var h = $("h2", schritte[n - 1]); h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); }
    var s = schritte[n - 1];
    if (!still && !RUHIG && s.animate) s.animate([{ opacity: 0, transform: "translateY(10px)" }, { opacity: 1, transform: "none" }], { duration: 280, easing: "cubic-bezier(.2,.8,.2,1)" });
  }
  $("#weiter").addEventListener("click", function () { gehe((S.schritt || 1) + 1); });
  $("#zurueck").addEventListener("click", function () { if ((S.schritt || 1) === 1) window.location.hash = "#start"; else gehe(S.schritt - 1); });

  function ansicht() {
    var h = window.location.hash.replace("#", "");
    if (h === "heute-alle") { alle = true; try { window.sessionStorage.setItem(KEY + ":alle", "1"); } catch (e) { /* ohne Speicher gilt es bis zum Neuladen */ } h = "heute"; }
    var heute = h === "heute";
    $("#v-start").hidden = heute; $("#v-heute").hidden = !heute;
    $$("[data-nav]").forEach(function (a) { if ((a.dataset.nav === "heute") === heute) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
    if (heute) gehe(Math.min(S.schritt || 1, offenBis()), true);
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", ansicht);

  /* ---------- 7 Produkt, Raster, Merkseite ---------- */
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

  $("#drucken").addEventListener("click", function () { window.print(); });
  var frage = $("#loesch-frage");
  $("#loeschen").addEventListener("click", function () { frage.hidden = false; $("#loesch-nein").focus(); });
  $("#loesch-nein").addEventListener("click", function () { frage.hidden = true; $("#loeschen").focus(); });
  $("#loesch-ja").addEventListener("click", function () {
    try { window.localStorage.removeItem(KEY); window.sessionStorage.removeItem(TKEY); window.sessionStorage.removeItem(KEY + ":alle"); } catch (e) { /* nichts gespeichert */ }
    window.location.hash = "#start"; window.location.reload();
  });
})();
