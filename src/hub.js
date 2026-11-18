/* ===== Kompass: das Jahr auf einen Blick, Stunden je Etappe, Lernspur, Sichern und Laden ===== */
function etappeStand(i) {
  var e = D.etappen[i], def = BLAETTER[e.blatt];
  var st = blattStand(e.blatt);
  return { def: def, fertig: st.fertig, von: st.von, teile: st.teile, kommt: e.weg.filter(function (x) { return x[0] === "kommt"; }).length };
}
function standWort(st) { return st.fertig === 0 ? (BS(st.def.id).seite && BS(st.def.id).seite !== "deck" ? "angefangen" : "offen") : (st.fertig >= st.von ? "fertig" : "angefangen"); }

var kompass = (function () {
  var svg, panel, segs = [], nadel, gewaehlt = D.hier, winkel = 0, C = 280, RA = 252, RI = 158, RB = 150, RM = 108;
  function pol(r, grad) { var a = (grad - 90) * Math.PI / 180; return [C + r * Math.cos(a), C + r * Math.sin(a)]; }
  function ring(r1, r2, a1, a2) {
    var p1 = pol(r1, a1), p2 = pol(r1, a2), p3 = pol(r2, a2), p4 = pol(r2, a1);
    return "M" + p1 + "A" + r1 + " " + r1 + " 0 0 1 " + p2 + "L" + p3 + "A" + r2 + " " + r2 + " 0 0 0 " + p4 + "Z";
  }
  function bauen() {
    svg = $("#rad"); panel = $("#etappe");
    var defs = sv("defs"); svg.appendChild(defs);
    D.blick.forEach(function (name, i) {
      var a1 = i * 90 + 1.5, a2 = (i + 1) * 90 - 1.5, unten = i === 1 || i === 2, rr = (RB + RM) / 2;
      svg.appendChild(sv("path", { d: ring(RB, RM, a1, a2), "class": "rad-blick" }));
      var s = pol(rr, unten ? a2 : a1), e = pol(rr, unten ? a1 : a2);
      defs.appendChild(sv("path", { id: "bogen" + i, d: "M" + s + "A" + rr + " " + rr + " 0 0 " + (unten ? 0 : 1) + " " + e }));
      var t = sv("text", { "class": "rad-blicktext", dy: "5" }); t.appendChild(sv("textPath", { href: "#bogen" + i, startOffset: "50%" }, name)); svg.appendChild(t);
    });
    segs = D.etappen.map(function (e, i) {
      var a1 = i * 45 + 1.2, a2 = (i + 1) * 45 - 1.2, m = pol((RA + RI) / 2, i * 45 + 22.5);
      var g = sv("g", { "class": "rad-seg", role: "button", tabindex: "0" });
      g.appendChild(sv("path", { d: ring(RA, RI, a1, a2) }));
      g.appendChild(sv("text", { x: m[0], y: m[1] - 6, "class": "rad-zahl" }, String(i + 1)));
      g.appendChild(sv("text", { x: m[0], y: m[1] + 18, "class": "rad-wort" }, e.kurz));
      var haken = sv("text", { x: m[0], y: m[1] + 38, "class": "rad-haken" }, ""); g.appendChild(haken); g._haken = haken;
      if (i < D.hier) g.setAttribute("data-stand", "fertig");
      if (i === D.hier) { g.setAttribute("data-stand", "hier"); var hh = pol(RA + 2, i * 45 + 22.5); g.appendChild(sv("circle", { cx: hh[0], cy: hh[1], r: 9, "class": "rad-hier" })); }
      g.addEventListener("click", function () { waehle(i, true); });
      g.addEventListener("keydown", function (ev) { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); waehle(i, true); } });
      svg.appendChild(g); return g;
    });
    svg.appendChild(sv("circle", { cx: C, cy: C, r: RM - 8, "class": "rad-mitte" }));
    nadel = sv("g", { "class": "rad-nadel" });
    nadel.appendChild(sv("path", { d: "M" + C + " " + (C - RB + 6) + "L" + (C + 13) + " " + C + "L" + C + " " + (C + 34) + "L" + (C - 13) + " " + C + "Z" }));
    svg.appendChild(nadel);
    svg.appendChild(sv("circle", { cx: C, cy: C, r: 80, "class": "rad-kern" }));
    svg.appendChild(sv("text", { x: C, y: C - 18, "class": "rad-kerntitel" }, "Kinderrechte"));
    ["Schutz", "Förderung", "Beteiligung"].forEach(function (w, i) { svg.appendChild(sv("text", { x: C, y: C + 8 + i * 21, "class": "rad-kernwort" }, w)); });
    ["Kinder-", "rechte"].forEach(function (w, i) { svg.appendChild(sv("text", { x: C, y: C - 6 + i * 30, "class": "rad-kernschmal" }, w)); });
    $("#rad-heute").addEventListener("click", function () { waehle(D.hier, true); });
  }
  function waehle(i, bewegt) {
    gewaehlt = i;
    var soll = i * 45 + 22.5, d = ((soll - winkel) % 360 + 540) % 360 - 180; winkel += d;
    nadel.style.transition = bewegt && !ruhig() ? "" : "none";
    nadel.style.transform = "rotate(" + winkel + "deg)";
    segs.forEach(function (g, j) { g.setAttribute("aria-pressed", j === i ? "true" : "false"); });
    zeigePanel(i, bewegt);
    $("#rad-heute").hidden = i === D.hier;
  }
  function zeigePanel(i, bewegt) {
    var e = D.etappen[i], st = etappeStand(i), def = st.def;
    panel.textContent = "";
    panel.appendChild(h("p", { class: "kicker", text: "Etappe " + (i + 1) + " von 8 · " + D.blick[Math.floor(i / 2)] + (i === D.hier ? " · wir sind hier" : "") }));
    panel.appendChild(h("h2", { text: e.titel }));
    panel.appendChild(h("p", { class: "leitfrage leitfrage--klein", text: e.frage }));
    panel.appendChild(balken(st.teile, def.art === "einstieg" ? (st.fertig >= st.von ? "Einstieg erledigt" : "Einstieg: " + st.fertig + " von " + st.von + " Aufträgen") + " · " + st.kommt + (st.kommt === 1 ? " Stunde folgt" : " Stunden folgen") + " im Lauf des Jahres" : st.fertig + " von " + st.von + " Aufträgen fertig"));
    panel.appendChild(h("dl", {}, h("dt", { text: "Die Szene" }), h("dd", { text: e.szene.titel }), h("dt", { text: "Das nehmen Sie mit" }), h("dd", { text: e.mit }), h("dt", { text: "Im Vortrag" }), h("dd", { text: e.vortrag })));
    panel.appendChild(h("h3", { class: "etappe__stunden", text: "Die Stunden dieser Etappe" }));
    panel.appendChild(h("ol", { class: "stunden" }, e.weg.map(function (x) {
      var offen = x[0] !== "kommt", wort = offen ? standWort(st) : "kommt im Lauf des Jahres";
      return h("li", { "data-art": x[0] }, h("span", { class: "stunden__marke", "aria-hidden": "true", text: x[0] === "blatt" ? "▤" : (x[0] === "einstieg" ? "◇" : "·") }),
        h("div", {}, offen ? h("a", { href: "#" + x[2], text: x[1] }) : h("b", { text: x[1] }), h("span", { class: "stunden__wozu", text: x[3] }), h("span", { class: "stunden__stand", text: x[4] + " · " + wort })));
    })));
    var weiter = weiterZiel(e.blatt), fort = weiter !== "#" + e.blatt;
    panel.appendChild(h("a", { class: "btn btn--primaer", href: weiter }, (def.art === "einstieg" ? "Einstieg" : "Arbeitsblatt") + (fort ? " fortsetzen →" : " öffnen →")));
    if (bewegt) einblenden(panel, 220);
  }
  function frischen() {
    if (!svg) bauen();
    segs.forEach(function (g, j) {
      var st = etappeStand(j), def = st.def;
      g._haken.textContent = st.fertig >= st.von ? "✓" : (st.fertig ? st.fertig + "/" + st.von : "");
      g.setAttribute("aria-label", "Etappe " + (j + 1) + ": " + D.etappen[j].titel + " – " + (def.art === "einstieg" ? "Einstieg" : "Arbeitsblatt") + ", " + st.fertig + " von " + st.von + " Aufträgen fertig" + (j === D.hier ? " – wir sind hier" : ""));
    });
    waehle(gewaehlt, false);
  }
  return { frisch: frischen };
})();

function zeigeKompass() {
  AKT.blatt = null; AKT.seite = null;
  $("#v-blatt").hidden = true; $("#v-start").hidden = false;
  document.title = "Demokratie, jetzt und in Zukunft – Leitfaden durch das Jahr";
  var k = $("#kopf-ort"); k.textContent = "";
  k.appendChild(h("nav", { class: "kopf__nav", "aria-label": "Bereiche der Startseite" },
    h("a", { href: "#start", text: "Kompass" }), h("a", { href: "#faden", text: "Lernspur" }), h("a", { href: "#sichern", text: "Sichern" })));
  kompass.frisch();
  karten();
  lernspur();
  window.scrollTo(0, 0);
}

function karten() {
  var box = $("#blaetter"); box.textContent = "";
  ["e1", "e3"].forEach(function (id) {
    var def = BLAETTER[id], st = blattStand(id), alle = st.fertig >= st.von;
    box.appendChild(h("a", { class: "blattkarte", href: alle ? "#" + id + "/aZ" : weiterZiel(id) },
      h("span", { class: "kicker", text: "Arbeitsblatt · Etappe " + def.etappe }),
      h("span", { class: "blattkarte__titel", text: def.titel }),
      h("span", { class: "blattkarte__text", text: def.karte }),
      balken(st.teile, st.fertig + " von " + st.von + " Aufträgen fertig"),
      h("span", { class: "btn btn--hell" }, alle ? "Zur Zusammenfassung →" : (weiterZiel(id) !== "#" + id ? "Weitermachen →" : "Arbeitsblatt öffnen →"))));
  });
}

function lernspur() {
  var box = $("#faden-liste"); box.textContent = "";
  D.etappen.forEach(function (e, i) {
    var def = BLAETTER[e.blatt], st = blattStand(e.blatt), satz = def.spur ? txt(def.spur) : "";
    var begonnen = st.fertig > 0 || i <= D.hier || satz;
    if (!begonnen) return;
    box.appendChild(h("li", { class: "faden__etappe" + (satz ? " hat" : "") },
      h("span", { class: "faden__punkt", "aria-hidden": "true", text: String(i + 1) }),
      h("div", { class: "faden__inhalt" },
        h("p", { class: "faden__kopf" }, h("b", { text: "Etappe " + (i + 1) + " · " + e.titel }), " – " + e.frage),
        def.spur ? (satz ? h("blockquote", { class: "faden__satz", text: satz }) : h("p", { class: "faden__leer", html: "Noch leer. Am Ende des Arbeitsblatts schreiben Sie einen Satz – er erscheint hier. <a href=\"#" + e.blatt + "\">Zum Arbeitsblatt</a>" })) : null,
        feld("leit." + (i + 1), { label: "Meine Antwort auf die Leitfrage dieser Etappe", platz: "Schreiben Sie hier, wenn Sie die Stunden der Etappe bearbeitet haben.", rows: 2 }),
        h("p", { class: "nur-druck mein", text: txt("leit." + (i + 1)) || "Meine Antwort auf die Leitfrage: –" }),
        kannListe(def))));
  });
  var rest = D.etappen.filter(function (e, i) { return !(blattStand(e.blatt).fertig > 0 || i <= D.hier || (BLAETTER[e.blatt].spur && txt(BLAETTER[e.blatt].spur))); });
  if (rest.length) box.appendChild(h("li", { class: "faden__etappe faden__rest" }, h("span", { class: "faden__punkt", "aria-hidden": "true", text: "…" }), h("div", { class: "faden__inhalt" }, h("p", { class: "faden__kopf", text: "Etappe " + rest.map(function (e) { return D.etappen.indexOf(e) + 1; }).join(", ") + ": kommen im Lauf des Jahres dazu." }))));
}

/* »Das kann ich«: nur, was die Lernenden am Ende eines Blatts selbst eingeschätzt haben (der Hefter zeigt nur Bearbeitetes) */
function kannListe(def) {
  if (!def || !def.kann) return null;
  var w = S.w[def.id + ".selbst"] || {}, stufen = ["sicher", "teils", "noch nicht"];
  var da = def.kann.map(function (k, i) { return typeof w[i] === "number" ? h("li", {}, h("span", { class: "kann__stufe kann__stufe--" + w[i], text: stufen[w[i]] }), h("span", { text: k })) : null; }).filter(Boolean);
  return da.length ? h("div", { class: "kann" }, h("p", { class: "kann__kopf" }, h("b", { text: "Das kann ich" }), " – Ihre Einschätzung am Ende des Arbeitsblatts"), h("ul", { class: "kann__liste" }, da)) : null;
}

/* ---------- Sichern und Laden als Datei (Ergebnisse überleben den Gerätewechsel) ---------- */
function sichernBauen() {
  var box = $("#sichern-knoepfe"), status = $("#sichern-status");
  box.appendChild(knopf("Als Datei sichern", { art: "primaer", klick: function () { dateiSichern(status); } }));
  var datei = h("input", { type: "file", accept: ".json,application/json", class: "sr", id: "laden-datei" });
  box.appendChild(datei);
  box.appendChild(h("label", { class: "btn", for: "laden-datei", tabindex: "0", on: { keydown: function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); datei.click(); } } } }, "Datei laden"));
  box.appendChild(knopf("Lernspur drucken", { klick: function () { drucke("spur"); } }));
  datei.addEventListener("change", function () {
    var f = datei.files && datei.files[0]; if (!f) return;
    var r = new FileReader();
    r.onload = function () {
      var x = null; try { x = JSON.parse(r.result); } catch (e) { x = null; }
      if (!x || x.art !== "wpb-demokratie-lernspur" || !x.stand) { status.textContent = "Diese Datei passt nicht. Laden Sie eine Datei, die Sie hier gesichert haben."; return; }
      var frage = $("#laden-frage"); frage.hidden = false;
      $("#laden-ja").onclick = function () { S = norm(x.stand); speichere(); frage.hidden = true; status.textContent = "Geladen: Ihr Stand vom " + new Date(x.gesichert).toLocaleDateString("de-DE") + "."; zeigeKompass(); };
      $("#laden-nein").onclick = function () { frage.hidden = true; status.textContent = "Nichts geändert."; };
      $("#laden-ja").focus();
    };
    r.readAsText(f); datei.value = "";
  });
  $("#alles-loeschen").addEventListener("click", function () { $("#loesch-frage").hidden = false; $("#loesch-ja").focus(); });
  $("#loesch-nein").addEventListener("click", function () { $("#loesch-frage").hidden = true; });
  $("#loesch-ja").addEventListener("click", function () {
    try { window.localStorage.removeItem(D.schluessel); window.localStorage.removeItem(D.schluesselAlt); window.sessionStorage.clear(); } catch (e) { /* nichts gespeichert */ }
    S = leer(); document.documentElement.removeAttribute("data-bewegung"); document.documentElement.removeAttribute("data-ansicht"); $("#loesch-frage").hidden = true;
    status.textContent = "Alle Eingaben auf diesem Gerät sind gelöscht."; zeigeKompass();
  });
  var rb = $("#ruhig-start"); rb.setAttribute("aria-pressed", String(document.documentElement.getAttribute("data-bewegung") === "weniger"));
  rb.addEventListener("click", function () { schalteBewegung(rb); });
}
