/* ===== Einstiegsblätter für die Etappen 2, 4, 5, 6, 7 und 8 =====
   Je drei kurze Aufträge aus den Daten der Etappe: Szene mit Festlegung · Das steckt dahinter · In Ihrer Kita.
   Die Stunden dieser Etappen kommen im Lauf des Jahres; ihr Einstieg wird dann Auftrag 1 ihres Arbeitsblatts. */
[1, 3, 4, 5, 6, 7].forEach(function (i) {
  var e = D.etappen[i], id = e.blatt;
  blatt({
    id: id, etappe: i + 1, art: "einstieg", dauer: 15, titel: e.titel, frage: e.frage,
    darum: "Diese Etappe beginnt mit einer Szene aus einer Kita: " + esc(/^»/.test(e.szene.titel) ? e.szene.titel : "»" + e.szene.titel + "«") + ". Sie legen sich fest, sehen, was dahintersteckt, und schauen in Ihre eigene Praxisstelle. Die Stunden dieser Etappe kommen im Lauf des Jahres dazu.",
    ziele: ["eine Kita-Szene deuten und Ihre Deutung begründen,", "die wichtigsten Begriffe dieser Etappe in eigenen Worten erklären."],
    weg: function () {
      return h("div", {}, h("h2", { class: "abschnitt", text: "Die Stunden dieser Etappe" }), h("ol", { class: "stunden" }, e.weg.map(function (x) {
        return h("li", { "data-art": x[0] }, h("span", { class: "stunden__marke", "aria-hidden": "true", text: x[0] === "einstieg" ? "◇" : "·" }), h("div", {}, h("b", { text: x[1] }), h("span", { class: "stunden__wozu", text: x[3] }), h("span", { class: "stunden__stand", text: x[4] + " · " + (x[0] === "einstieg" ? "dieses Blatt" : "kommt im Lauf des Jahres") })));
      })), p("Das nehmen Sie aus dieser Etappe mit: " + esc(e.mit) + ".", "meta"));
    },
    lk: [["Einsatz", ["Etwa 15 Minuten am Anfang der ersten Stunde dieser Etappe, gemeinsam geführt am Smartboard.", "Die Stunden der Etappe sind noch nicht als Arbeitsblatt gebaut. Ihr Einstieg wird später Auftrag 1."]],
         ["Status der Inhalte", [esc(e.szene.status) + ".", "Rückmeldetexte und Einstufungen: Vorschlag, noch nicht geprüft."]]],
    auftraege: [
      { id: "a1", nr: "1", kurz: "Die Szene", phase: "Einstieg", name: e.szene.titel, form: "allein", min: 5, frei: "offen", prinzip: "Verdecken · Rückmelden", raum: "Begründungen vergleichen",
        fertig: function () { return !!(S.w[id + ".szene"] && S.w[id + ".szene"].fest); },
        seite: function (box) {
          box.appendChild(h("div", { class: "falltext" }, etikett(e.szene.status), e.szene.text.map(function (t) { return p(esc(t), "falltext__text"); })));
          box.appendChild(kasten("auftrag", null, p("Legen Sie sich fest und begründen Sie Ihre Wahl in einem Satz. Erst dann sehen Sie die Rückmeldung.")));
          wahl(box, id + ".szene", { frage: e.wahl.frage, optionen: e.wahl.optionen });
        } },
      { id: "a2", nr: "2", kurz: "Dahinter", phase: "Erarbeitung", name: "Das steckt dahinter", form: "allein, dann zu zweit", min: 5, frei: "antwort", nach: "a1", fehlt: "Legen Sie sich zuerst in Auftrag 1 fest.", prinzip: "–", raum: "Zu zweit: einen Begriff erklären",
        seite: function (box) {
          box.appendChild(kasten("sicherung", null, p(esc(e.kern))));
          box.appendChild(h("h2", { class: "abschnitt", text: "Begriffe dieser Etappe" }));
          box.appendChild(h("dl", { class: "begriffe" }, e.begriffe.map(function (b) { return h("div", {}, h("dt", { text: b[0] }), h("dd", { text: b[1] })); })));
          box.appendChild(kasten("raum", null, p("Zu zweit: Erklären Sie einander einen Begriff mit einem Beispiel aus der Kita – ohne auf den Bildschirm zu schauen.")));
        } },
      { id: "a3", nr: "3", kurz: "Ihre Kita", phase: "Übertragen und Ausblick", name: "In Ihrer Kita", form: "allein · freiwillig · ohne Namen", min: 5, frei: "antwort", nach: "a1", fehlt: "Legen Sie sich zuerst in Auftrag 1 fest.", prinzip: "–", raum: "–",
        seite: function (box) {
          box.appendChild(h("p", { class: "leitfrage leitfrage--klein", text: e.kita }));
          box.appendChild(feld(id + ".kita", { label: "Das habe ich beobachtet:", platz: "In meiner Einrichtung …", rows: 3 }));
          box.appendChild(p("Ihre Notiz bleibt auf diesem Gerät. Schreiben Sie keine Namen auf. Wenn Sie lieber nichts aus Ihrer Praxisstelle notieren: Denken Sie an eine ausgedachte Kita.", "meta"));
          box.appendChild(p("Fertig? Dann drehen Sie Ihr Tablet um.", "ende"));
        } }
    ]
  });
});
