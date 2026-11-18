/* ===== Bausteine für die Arbeitsblätter der Etappen 2 und 4 bis 8 (Fassung 5.0) =====
   Dieselbe Dramaturgie wie in Etappe 1 und 3: erinnern · Szene · eigene Position · erarbeiten · üben ·
   eigenes Produkt · Rückblick · Zusammenfassung · Extra. Die Szene behält den Schlüssel des früheren
   Einstiegsblatts (eN.szene) – wer sich dort schon festgelegt hat, findet seine Festlegung wieder. */

function etappeVon(id) { return D.etappen.filter(function (e) { return e.blatt === id; })[0]; }

/* ---------- Aufträge aus Daten ---------- */
function aufAbruf(id, fragen, satz) {
  return { id: "a1", nr: "1", kurz: "Erst erinnern", phase: "Einstieg", name: "Erst erinnern", form: "allein · ohne Unterlagen", min: 4, frei: "offen", prinzip: "Verdecken", raum: "–",
    fertig: function () { return abrufFertig(id + ".abruf", fragen.length); },
    seite: function (box) {
      box.appendChild(kasten("auftrag", null, p("Beantworten Sie jede Frage zuerst selbst – im Kopf, auf dem Zettel oder im Feld. Decken Sie erst danach auf.")));
      abruf(box, id + ".abruf", fragen);
      if (satz) box.appendChild(p(satz, "lauf"));
    } };
}
function aufSzene(id, nr, c) {
  var e = etappeVon(id);
  return { id: "a" + nr, nr: String(nr), kurz: "Die Szene", phase: "Einstieg", name: e.szene.titel, form: c.form || "allein, dann zu zweit", min: c.min || 8, frei: "offen", prinzip: "Verdecken · Rückmelden", raum: c.raum || "Zu zweit: Begründungen vergleichen",
    fertig: function () { return !!(S.w[id + ".szene"] && S.w[id + ".szene"].fest); },
    seite: function (box) {
      box.appendChild(h("div", { class: "falltext" }, etikett(e.szene.status), h("h2", { class: "falltext__titel", text: e.szene.titel }), e.szene.text.map(function (t) { return p(esc(t), "falltext__text"); })));
      box.appendChild(kasten("auftrag", null, p("Legen Sie sich fest und begründen Sie Ihre Wahl in einem Satz. Erst dann sehen Sie die Rückmeldung.")));
      wahl(box, id + ".szene", { frage: e.wahl.frage, optionen: e.wahl.optionen, danach: function () { return c.danach ? c.danach() : null; } });
    } };
}
function aufPosition(id, nr, these, c) {
  c = c || {};
  return { id: "a" + nr, nr: String(nr), kurz: "Ihre Position", phase: "Einstieg", name: "Ihre Position", form: "allein, dann Linie im Raum", min: c.min || 4, frei: "antwort", nach: "a" + (nr - 1), fehlt: "Legen Sie sich zuerst in Auftrag " + (nr - 1) + " fest.", prinzip: "Verdecken – die Festlegung bleibt stehen", raum: "Positionslinie 0–10",
    fertig: function () { return !!(S.w[id + ".vor"] && S.w[id + ".vor"].fest); },
    seite: function (box) {
      box.appendChild(kasten("auftrag", null, p("Lesen Sie den Satz. Legen Sie fest, wie sehr Sie zustimmen, und begründen Sie in einem Satz. Am Ende des Blatts kommen Sie hierher zurück.")));
      skala(box, id + ".vor", { satz: these, danach: function () { return kasten("raum", null, p("Stellen Sie sich auf die Linie im Raum: links 0, rechts 10. Zwei oder drei Personen sagen, warum sie dort stehen.")); } });
      box.appendChild(p("Ein zugespitzter Satz zum Nachdenken – kein Zitat.", "meta"));
    } };
}
function aufRueckblick(id, nr, these, nach, c) {
  c = c || {};
  return { id: "a" + nr, nr: String(nr), kurz: "Rückblick", phase: "Übertragen und Ausblick", name: "Rückblick und Lernspur", form: "allein, dann Linie im Raum", min: c.min || 6, frei: "antwort", nach: nach, fehlt: c.fehlt || "Der Rückblick öffnet sich, wenn Ihr Produkt fertig ist.", prinzip: "Verdecken – Rückkehr zur ersten Festlegung", raum: "Positionslinie; Stimmkarte zählen",
    fertig: function () { return !!(S.w[id + ".nach"] && S.w[id + ".nach"].fest) && woerter(txt(id + ".spur")) >= 8; },
    seite: function (box) {
      var def = BLAETTER[id];
      box.appendChild(kasten("auftrag", null, p("Zurück zum Satz vom Anfang. Wo stehen Sie jetzt – und warum?")));
      skala(box, id + ".nach", { satz: these, ref: id + ".vor", wertWort: "Ihre Wahl jetzt", warumLabel: "Was denken Sie jetzt – und warum?", platz: "Meine Position hat sich (nicht) verändert, weil …", danach: function (w) { return kasten("raum", null, p(esc(vergleichSatz(S.w[id + ".vor"], w)))); } });
      if (c.vorSpur) haenge(box, c.vorSpur());
      box.appendChild(h("h2", { class: "abschnitt", text: "Ihr Satz für die Lernspur" }));
      spurFeld(box, def);
      box.appendChild(h("h2", { class: "abschnitt", text: "Was können Sie jetzt?" }));
      selbst(box, id + ".selbst", def.kann);
      box.appendChild(h("h2", { class: "abschnitt", text: "Ihre Rückmeldung zum Blatt" }));
      stimmkarte(box, id + ".stimme", { frage: "Wie hat Ihnen dieses Arbeitsblatt beim Lernen geholfen?", optionen: [["A", "sehr"], ["B", "teils"], ["C", "kaum"]], unter: "Halten Sie Ihre Karte hoch, wenn Ihre Lehrkraft fragt. Ihre Wahl bleibt auf diesem Gerät." });
      box.appendChild(feld(id + ".rueck", { label: "Was würden Sie an diesem Blatt ändern? (freiwillig)", platz: "Mehr …, weniger …", rows: 2 }));
      box.appendChild(p("Fertig? Dann drehen Sie Ihr Tablet um.", "ende"));
    } };
}
function aufZf(id, nach, bau) {
  return { id: "aZ", nr: "Z", kurz: "Zusammenfassung", phase: "Sichern und üben", name: "Zusammenfassung zum Abheften", kopf: "Zusammenfassung", form: "zum Abheften", min: 3, frei: "antwort", nach: nach, fehlt: "Die Zusammenfassung öffnet sich nach Ihrem Rückblick (Auftrag " + nach.slice(1) + "). So verrät sie vorher nichts.", prinzip: "–", raum: "–",
    fertig: function () { return !!(S.w[id + ".zf"] && S.w[id + ".zf"].gesehen); },
    seite: function (box) { W(id + ".zf").gesehen = true; speichereBald(); bau(box); frisch(); } };
}
function aufExtra(id, name, c) {
  return { id: "aX", nr: "＋", kurz: "Extra", name: name, form: "freiwillig · in Ihrer Praxisstelle", min: 0, frei: "offen", zusatz: true, schreib: true, phase: "Übertragen und Ausblick", prinzip: "–", raum: "im Gespräch zeigen",
    seite: function (box) {
      extraSeite(box, id + ".extra", { auftrag: c.auftrag, felder: c.felder, schluss: "Bringen Sie Ihre Notizen ins Gespräch mit. Das Extra zählt nicht zur Zeit und nicht zum Stand des Blatts." });
      /* Bis Fassung 4.0 hatte diese Etappe ein Einstiegsblatt mit der Notiz »In Ihrer Kita« – sie geht nicht verloren. */
      if (txt(id + ".kita")) box.appendChild(feld(id + ".kita", { label: "Ihre Notiz aus dem früheren Einstiegsblatt dieser Etappe", rows: 2 }));
    } };
}

/* ---------- Kartenrunde: links wählen, rechts lesen und festlegen (Gruppenpuzzle, Fälle, Einwände) ---------- */
function kartenFest(key, karten) { return karten.filter(function (k) { var w = S.w[key + "." + k.id]; return w && w.fest; }).length; }
function kartenRunde(box, key, karten, c) {
  c = c || {};
  var ziel = c.ziel || karten.length;
  var stand = h("p", { class: "meta rund-stand", "aria-live": "polite" });
  function standText() { var n = kartenFest(key, karten); stand.textContent = (n >= ziel ? "✓ " : "") + n + " von " + karten.length + " Karten festgelegt" + (ziel < karten.length ? " – fertig sind Sie mit " + ziel + "." : "."); }
  box.appendChild(stand);
  wahlKarte(box, key + ".runde", karten.map(function (k, i) {
    return { id: k.id, nr: k.nr || String(i + 1), titel: k.titel, unter: k.unter,
      stand: function () { var w = S.w[key + "." + k.id]; return w && w.fest ? "festgelegt" : ""; },
      bau: function (karte, frischListe) {
        if (k.etikett) karte.appendChild(etikett(k.etikett));
        karte.appendChild(h("h3", { class: "karte__titel", text: k.titel }));
        if (k.satz) karte.appendChild(h("p", { class: "these", text: k.satz }));
        (k.text || []).forEach(function (t) { karte.appendChild(p(t)); });
        if (k.mehr) karte.appendChild(h("details", { class: "mehr" }, h("summary", { text: k.mehr[0] }), p(k.mehr[1])));
        if (k.quelle) karte.appendChild(p(k.quelle, "quelle"));
        var teil = h("div", { class: "teil" }); karte.appendChild(teil);
        wahl(teil, key + "." + k.id, { frage: k.frage || c.frage, optionen: k.optionen, warumLabel: c.warumLabel, platz: c.platz,
          danach: function (neu) {
            if (neu) setTimeout(function () { frischListe(); standText(); frisch(); }, 0);
            var r = [];
            if (k.merke) r.push(kasten("sicherung", null, p(k.merke)));
            if (c.feld) r.push(feld(key + "." + k.id + ".satz", { label: c.feld[0], platz: c.feld[1], rows: 2 }));
            return r;
          } });
      } };
  }), { titel: c.titel || "Karten", klasse: c.klasse });
  standText();
}

/* ---------- Legen in Spalten: erst alle Karten legen, dann der Vorschlag mit Begründung ---------- */
function legenFertig(key) { var w = S.w[key]; return !!(w && w.zu); }
function legen(box, key, karten, spalten, c) {
  c = c || {};
  var w = W(key, { lage: {} }); w.lage = w.lage || {};
  var gewaehlt = null;
  var ansage = h("p", { class: "meta", "aria-live": "polite", text: "Tippen Sie eine Karte an." });
  var stapel = h("div", { class: "kstapel", role: "group", "aria-label": "Noch nicht gelegte Karten" });
  var zone = h("div", { class: "kspalten kspalten--n" + spalten.length });
  var zonen = {}, knoepfe = {};
  spalten.forEach(function (sp) {
    var kopf = h("button", { type: "button", class: "kspalte__kopf", text: sp[1], "aria-label": "Gewählte Karte hier ablegen: " + sp[1], on: { click: function () { lege(sp[0]); } } });
    zonen[sp[0]] = h("div", { class: "kspalte__karten" });
    zone.appendChild(h("div", { class: "kspalte kspalte--" + (sp[2] || sp[0]) }, kopf, zonen[sp[0]]));
  });
  karten.forEach(function (k) {
    knoepfe[k.id] = h("button", { type: "button", class: "kkarte", "aria-pressed": "false", text: k.text, on: { click: function (ev) { ev.stopPropagation(); if (w.zu) return; waehle(gewaehlt === k.id ? null : k.id); } } });
  });
  function karte(id) { return karten.filter(function (k) { return k.id === id; })[0]; }
  function spalte(id) { return spalten.filter(function (s) { return s[0] === id; })[0]; }
  function waehle(id) {
    gewaehlt = id;
    Object.keys(knoepfe).forEach(function (k) { knoepfe[k].setAttribute("aria-pressed", String(k === id)); });
    zone.classList.toggle("ziel", !!id);
    ansage.textContent = id ? "»" + karte(id).text + "« gewählt. Tippen Sie jetzt eine Spalte an." : (w.zu ? "Alle Karten liegen." : "Tippen Sie eine Karte an.");
  }
  function lege(z) {
    if (w.zu) return;
    if (!gewaehlt) { ansage.textContent = "Wählen Sie zuerst eine Karte."; return; }
    w.lage[gewaehlt] = z; speichere();
    var name = karte(gewaehlt).text; waehle(null);
    ansage.textContent = "»" + name + "« liegt bei: " + spalte(z)[1] + ".";
    verteile(); frisch();
  }
  stapel.addEventListener("click", function () { if (!w.zu && gewaehlt && w.lage[gewaehlt]) { delete w.lage[gewaehlt]; speichere(); waehle(null); verteile(); frisch(); } });
  box.appendChild(h("div", { class: "klege" }, h("div", { class: "klege__stapel" }, h("p", { class: "h4", text: "Karten" }), stapel, ansage), zone));
  var nach = h("div", { class: "nach", "aria-live": "polite" }); box.appendChild(nach);
  var kn = knopf(c.knopf || "Mit dem Vorschlag vergleichen", { art: "primaer", aus: true, klick: function () { w.zu = true; speichere(); zeige(true); } });
  var reihe = h("div", { class: "reihe" }, kn, h("span", { class: "meta", text: "Erst wenn alle Karten liegen." }));
  box.appendChild(reihe);
  function verteile() {
    stapel.textContent = ""; Object.keys(zonen).forEach(function (z) { zonen[z].textContent = ""; });
    karten.forEach(function (k) { (w.lage[k.id] ? zonen[w.lage[k.id]] : stapel).appendChild(knoepfe[k.id]); });
    if (!stapel.children.length) stapel.appendChild(h("p", { class: "meta", text: w.zu ? "Alle Karten liegen." : "Alle Karten liegen. Tippen Sie eine gelegte Karte und dann hier, um sie zurückzulegen." }));
    kn.disabled = Object.keys(w.lage).length < karten.length;
  }
  function zeige(neu) {
    reihe.hidden = true; waehle(null);
    nach.textContent = "";
    var gleich = karten.filter(function (k) { return w.lage[k.id] === k.zu; }).length;
    nach.appendChild(h("h3", { class: "abschnitt", text: c.kopf || "Der Vorschlag – mit Begründung" }));
    nach.appendChild(p(gleich + " von " + karten.length + " Karten liegen bei Ihnen dort, wo der Vorschlag sie sieht. " + (c.offen || "Gute Gründe für eine andere Spalte zählen – besprechen Sie sie zu zweit."), "meta"));
    nach.appendChild(h("ul", { class: "vorschlag" }, karten.map(function (k) {
      var eig = w.lage[k.id], ok = eig === k.zu;
      return h("li", { "data-gleich": String(ok) }, h("b", { text: "»" + k.text + "«" }), h("span", { class: "vorschlag__wo", text: "Ihre Spalte: " + spalte(eig)[1] + (ok ? " · wie im Vorschlag" : " · Vorschlag: " + spalte(k.zu)[1]) }), h("span", { text: k.warum }));
    })));
    if (c.danach) haenge(nach, c.danach());
    if (neu) einblenden(nach, 240);
    frisch();
  }
  verteile();
  if (w.zu) zeige(false);
}

/* ---------- Umformen: erst der eigene Satz, dann der Vergleich (Muster »Satzanfänge → Kriterien«) ---------- */
function umformenZahl(key, karten) { return karten.filter(function (k) { var w = S.w[key + "." + k.id]; return w && w.zu; }).length; }
function umformen(box, key, karten, c) {
  c = c || {};
  var ziel = c.ziel || karten.length;
  var stand = h("p", { class: "meta rund-stand", "aria-live": "polite" });
  function standText() { var n = umformenZahl(key, karten); stand.textContent = (n >= ziel ? "✓ " : "") + n + " von " + karten.length + " Sätzen verglichen" + (ziel < karten.length ? " – fertig sind Sie mit " + ziel + "." : "."); }
  box.appendChild(stand);
  wahlKarte(box, key + ".runde", karten.map(function (k, i) {
    return { id: k.id, nr: String(i + 1), titel: k.titel, unter: k.unter,
      stand: function () { var w = S.w[key + "." + k.id]; return w && w.zu ? "verglichen" : ""; },
      bau: function (karte, frischListe) {
        var w = W(key + "." + k.id), tk = key + "." + k.id + ".satz";
        karte.appendChild(h("h3", { class: "karte__titel", text: k.titel }));
        if (k.lage) karte.appendChild(p(esc(k.lage), "meta"));
        karte.appendChild(h("p", { class: "these these--zu", text: k.satz }));
        var f = feld(tk, { label: c.label || "So würde ich es sagen:", platz: c.platz || "»…«", rows: 2, bei: pruefe, nurLesen: w.zu });
        karte.appendChild(f);
        var kn = knopf("Vergleichen", { art: "primaer", aus: true, klick: function () { w.zu = true; speichere(); oeffne(true); } });
        var reihe = h("div", { class: "reihe" }, kn, h("span", { class: "meta", text: "Erst Ihr eigener Satz." }));
        karte.appendChild(reihe);
        var nach = h("div", { class: "nach", "aria-live": "polite" }); karte.appendChild(nach);
        function pruefe() { kn.disabled = woerter(txt(tk)) < (c.min || 4); }
        function oeffne(neu) {
          reihe.hidden = true; $("textarea", f).readOnly = true; nach.textContent = "";
          nach.appendChild(kasten("sicherung", c.kopf || "Ein Vorschlag", h("p", { class: "these these--auf", text: k.anders }), k.warum ? p(esc(k.warum)) : null));
          var g = h("div", { class: "selbst__wahl", role: "group", "aria-label": c.frage || "Gibt Ihr Satz dem Kind eine echte Wahl?" });
          ["ja", "teils", "nein"].forEach(function (s, j) {
            g.appendChild(knopf(s, { art: "klein", gedrueckt: String(w.check === j), klick: function () { w.check = j; speichereBald(); $$("button", g).forEach(function (b, m) { b.setAttribute("aria-pressed", String(m === j)); }); } }));
          });
          nach.appendChild(h("div", { class: "selbst__zeile" }, h("span", { text: c.frage || "Gibt Ihr Satz dem Kind eine echte Wahl?" }), g));
          if (neu) { einblenden(nach, 240); setTimeout(function () { frischListe(); standText(); frisch(); }, 0); }
        }
        pruefe(); if (w.zu) oeffne(false);
      } };
  }), { titel: c.titel || "Sätze", klasse: c.klasse });
  standText();
}

/* ---------- Ampel: Prüffragen mit ja · teils · nein, das Ergebnis steht als Wort ---------- */
function ampelFertig(key, n) { var w = S.w[key]; return !!(w && w.a && Object.keys(w.a).length >= n); }
function ampel(box, key, fragen, c) {
  c = c || {};
  var w = W(key, { a: {} }); w.a = w.a || {};
  var wrap = h("div", { class: "selbst ampel" });
  var ergebnis = h("div", { class: "ampel__ergebnis", "aria-live": "polite" });
  fragen.forEach(function (f, i) {
    var g = h("div", { class: "selbst__wahl", role: "group", "aria-label": f });
    ["ja", "teils", "nein"].forEach(function (s, j) {
      g.appendChild(knopf(s, { art: "klein", gedrueckt: String(w.a[i] === j), klick: function () { w.a[i] = j; speichereBald(); $$("button", g).forEach(function (b, m) { b.setAttribute("aria-pressed", String(m === j)); }); zeige(); frisch(); } }));
    });
    wrap.appendChild(h("div", { class: "selbst__zeile" }, h("span", { text: f }), g));
  });
  box.appendChild(wrap); box.appendChild(ergebnis);
  function zeige() {
    ergebnis.textContent = "";
    if (Object.keys(w.a).length < fragen.length) { ergebnis.appendChild(p("Ihre Ampel erscheint, wenn alle " + fragen.length + " Fragen beantwortet sind.", "meta")); return; }
    var nein = 0, teils = 0; Object.keys(w.a).forEach(function (k) { if (w.a[k] === 2) nein++; if (w.a[k] === 1) teils++; });
    var stufe = (w.a[0] === 2 || nein >= 2) ? ["rot", "Rot", c.rot || "Hier entscheiden noch die Erwachsenen allein. Fangen Sie bei der ersten Frage mit »nein« an."] : ((nein || teils) ? ["gelb", "Gelb", c.gelb || "Ein guter Anfang. Bei den Fragen mit »teils« oder »nein« liegt Ihr nächster Schritt."] : ["gruen", "Grün", c.gruen || "Die Kinder entscheiden hier wirklich mit. Prüfen Sie, ob das auch an anderen Tagen und bei anderen Fachkräften gilt."]);
    ergebnis.appendChild(h("p", { class: "ampel__wort ampel--" + stufe[0] }, h("b", { text: "Ihre Ampel: " + stufe[1] + ". " }), document.createTextNode(stufe[2])));
    ergebnis.appendChild(p("Eine Einschätzung aus Ihrer Sicht – keine Messung.", "meta"));
  }
  zeige();
}

/* ---------- Mehrere Felder, dann Kriterien (Produkt in Teilen) ---------- */
function mehrfeldFertig(key) { var w = S.w[key]; return !!(w && w.zu); }
function mehrfeld(box, key, felder, c) {
  var w = W(key);
  var min = c.min || 3;
  felder.forEach(function (f) { box.appendChild(feld(key + "." + f[0], { label: f[1], platz: f[2], rows: f[3] || 2, bei: pruefe })); });
  var hin = h("p", { class: "meta", "aria-live": "polite" });
  var kn = knopf(c.knopf || "Mit den Kriterien vergleichen", { art: "primaer", aus: true, klick: function () { w.zu = true; speichere(); oeffne(true); } });
  box.appendChild(h("div", { class: "reihe" }, kn, hin));
  var raster = h("div", { class: "raster", hidden: true }); box.appendChild(raster);
  function offen() { return felder.filter(function (f) { return !f[4] && woerter(txt(key + "." + f[0])) < min; }).length; }
  function pruefe() { var n = offen(); kn.disabled = n > 0; hin.textContent = w.zu ? "" : (n ? "Noch " + n + (n === 1 ? " Feld" : " Felder") + " mit mindestens " + min + " Wörtern." : "Jetzt können Sie vergleichen."); }
  function oeffne(neu) {
    kn.hidden = true; hin.textContent = ""; raster.hidden = false; raster.textContent = "";
    raster.appendChild(h("p", { class: "raster__kopf", text: c.kopf || "Vergleichen Sie Ihren Text mit diesen Kriterien" }));
    var sw = W(key + ".selbst", {});
    c.kriterien.forEach(function (k, i) {
      var zeile = h("div", { class: "raster__zeile" }, h("b", { text: k[0] }), h("span", { text: k[1] }));
      var g = h("div", { class: "raster__selbst", role: "group", "aria-label": "Trifft das auf Ihren Text zu? " + k[0] });
      ["trifft zu", "teils", "noch nicht"].forEach(function (s, j) {
        g.appendChild(knopf(s, { art: "klein", gedrueckt: String(sw[i] === j), klick: function () { sw[i] = j; speichereBald(); $$("button", g).forEach(function (b, m) { b.setAttribute("aria-pressed", String(m === j)); }); } }));
      });
      zeile.appendChild(g); raster.appendChild(zeile);
    });
    if (c.danach) haenge(raster, c.danach());
    if (neu) einblenden(raster, 240);
    frisch();
  }
  pruefe(); if (w.zu) oeffne(false);
}

/* ---------- Noch einmal festlegen: dieselbe Wahl wie am Anfang, mit Vergleich ---------- */
function wahlZurueck(box, key, ref, c) {
  wahl(box, key, { frage: c.frage, optionen: c.optionen, warumLabel: "Was denken Sie jetzt – und warum?", platz: "Ich wähle jetzt …, weil …",
    danach: function () {
      var a = S.w[ref], b = S.w[key];
      var satz = a && typeof a.i === "number" ? "Am Anfang: »" + c.optionen[a.i][0] + "« Jetzt: »" + c.optionen[b.i][0] + "« " + (a.i === b.i ? "Gleich geblieben – mit neuen Gründen?" : "Sie haben Ihre Wahl geändert. Was hat Sie bewegt?") : "Eine Wahl vom Anfang ist auf diesem Gerät nicht gespeichert.";
      return kasten("raum", null, p(esc(satz)), p("Gehen Sie noch einmal in eine Ecke und sagen Sie, was Sie bewegt hat."));
    } });
}

/* ---------- Zusammenfassung aus Daten: genau zwei Seiten A4 ---------- */
function zfDaten(box, c) {
  zusammenfassung(box, { kopf: c.kopf, frage: c.frage, kern: c.kern,
    wissen: function () {
      var r = [h("h3", { text: "Begriffe" }), h("dl", { class: "zf-begriffe" }, c.begriffe.map(function (b) { return h("div", {}, h("dt", { text: b[0] }), h("dd", { text: b[1] })); }))];
      if (c.tabelle) r.push(h("table", { class: "zf-pruef" }, h("thead", {}, h("tr", {}, c.tabelle.kopf.map(function (t) { return h("th", { scope: "col", text: t }); }))),
        h("tbody", {}, c.tabelle.zeilen.map(function (z) { return h("tr", {}, h("th", { scope: "row", text: z[0] }), z.slice(1).map(function (t) { return h("td", { text: t }); })); }))));
      if (c.wissenExtra) r = r.concat(c.wissenExtra());
      return r;
    },
    koennen: function () {
      var r = [h("div", { class: "werk" }, h("b", { text: c.werk[0] }), h("ol", {}, c.werk[1].map(function (t) { return h("li", { text: t }); })))];
      (c.mein || []).forEach(function (m) { r.push(h("h3", { text: m[0] })); r.push(typeof m[1] === "function" ? m[1]() : mein(txt(m[1]), m[2])); });
      if (c.aufgabe) r.push(h("h3", { text: "So kann gefragt werden" }), h("blockquote", { class: "aufgabe" }, c.aufgabe), p("Beispielaufgabe zum Üben – nicht aus einer Prüfung.", "meta"));
      return r;
    } });
}
