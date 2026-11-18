/* ===== Arbeitsblatt Etappe 4 · Macht und Haltung (Doppelstunde, Fassung 5.0) =====
   Erste Stunde der Etappe (Curriculum, Einheit 6: Macht und Verantwortung). Tiefgang aus dem Impulsvortrag,
   Kapitel 13: vier Merkmale demokratischer Haltung, Sätze »einladend – verschließend«. Vielfalt und Anti-Bias
   (Workshop »Stell dich nicht so an«) kommen als Ausblick; sie bekommen eigene Stunden. */

D.e4 = {
  these: "Gute Fachkräfte haben keine Macht über Kinder – sie haben Beziehung.",
  abruf: [
    ["Was unterscheidet ein Recht von einer Erlaubnis?", "Ein Recht hat das Kind. Eine Erlaubnis hängt von Erwachsenen ab – sie können sie geben oder nehmen."],
    ["Wovor wollte Janusz Korczak die Kinder schützen?", "Vor der Willkür der Erwachsenen: »Diesem Despotismus müssen Grenzen gesetzt werden.«"],
    ["Welcher Prüfstein ist berührt, wenn ein Kind beschämt wird?", "Schutz – auch vor Beschämung und Abwertung."]
  ],
  saetze: [
    { id: "s1", titel: "Essen", satz: "»Iss auf.«", anders: "»Wie viel möchtest du haben?«", warum: "Das Kind bestimmt über seinen Hunger. Die Fachkraft bleibt dafür verantwortlich, dass es satt werden kann." },
    { id: "s2", titel: "Probieren", satz: "»Probieren musst du.«", anders: "»Magst du probieren – oder heute nicht?«", warum: "Probieren wird eine Einladung, kein Befehl. Ein Nein ist erlaubt." },
    { id: "s3", titel: "Kleidung", satz: "»Zieh das an.«", anders: "»Reicht die Jacke, oder brauchst du etwas Dickeres?«", warum: "Das Kind prüft selbst. Das geht dort, wo keine Gesundheit auf dem Spiel steht." },
    { id: "s4", titel: "Kleidung bei Regen", lage: "Hier steht etwas fest: Bei Regen und Kälte gehört die Matschhose dazu.", satz: "»Zieh jetzt sofort die Matschhose an!«", anders: "»Bei Regen gehört die Matschhose dazu, sonst wirst du nass und kalt. Du entscheidest: erst die Hose oder erst die Stiefel?«", warum: "Was feststeht, wird ehrlich gesagt und begründet. Innerhalb des Rahmens bleibt eine echte Wahl." },
    { id: "s5", titel: "Schlafen", satz: "»Jetzt legen sich alle hin.«", anders: "»Möchtest du dich ausruhen oder lieber leise spielen?«", warum: "Ruhe ja – aber nicht für jedes Kind auf dieselbe Weise." },
    { id: "s6", titel: "Morgenkreis", satz: "»Alle kommen in den Kreis.«", anders: "»Heute keine Lust? Dann setz dich dazu oder geh in die Bauecke.«", warum: "Das Nein des Kindes wird gehört. Es gibt einen Platz in der Nähe." },
    { id: "s7", titel: "Konflikt", satz: "»Jetzt ist Schluss, Dennis kriegt das Rad.«", anders: "»Wie können wir das lösen, dass es für beide passt?«", warum: "Die Fachkraft öffnet einen Raum zum Aushandeln, statt zu urteilen." },
    { id: "s8", titel: "Das Nein eines Kindes", satz: "»Jetzt sei nicht so bockig.«", anders: "»Okay, ich höre dein Nein. Erzähl mir, was du brauchst.«", warum: "Widerspruch wird nicht bestraft, sondern als Botschaft gehört." },
    { id: "s9", titel: "Eine Regel", satz: "»Die Regel gilt, Punkt.«", anders: "»Passt die Regel noch für uns? Sollen wir sie ändern?«", warum: "Regeln werden gemeinsam überprüft – schon Kinder können das." }
  ],
  merkmale: [["m1", "Macht offenlegen", "tuerkis"], ["m2", "Beteiligung ermöglichen", "gruen"], ["m3", "Widerspruch aushalten", "gelb"], ["m4", "Vielfalt als Normalität", "rot"]],
  momente: [
    { id: "c1", text: "»Das haben wir doch alle zusammen beschlossen«, sagt die Fachkraft. Entschieden hatte sie allein.", zu: "m1", warum: "Die Macht ist da, wird aber verschleiert. Ehrlich wäre: »Das habe ich entschieden, und zwar weil …«" },
    { id: "c2", text: "Die Kinder schlagen Namen für das neue Kuscheltier der Gruppe vor. Am Ende nimmt die Leitung ihren eigenen Vorschlag.", zu: "m2", warum: "Beteiligung wird nur gespielt. Wer fragt, muss die Antwort auch gelten lassen – oder vorher sagen, was offen ist." },
    { id: "c3", text: "Ein Kind sagt: »Nein, ich will nicht in den Kreis.« Die Fachkraft antwortet: »Jetzt sei nicht so bockig.«", zu: "m3", warum: "Das Nein eines Kindes ist ein Kernelement der Demokratie, kein Erziehungsproblem." },
    { id: "c4", text: "Einmal im Jahr gibt es eine »Woche der Kulturen«. Sonst zeigen alle Bilderbücher Familien mit Vater, Mutter und Kind.", zu: "m4", warum: "Vielfalt wird zum Extra. Normalität hieße: Verschiedene Familien, Sprachen und Lebensweisen kommen jeden Tag vor." },
    { id: "c5", text: "Ein Kind beschwert sich laut über eine neue Regel. Es muss sich dafür auf die »Nachdenkbank« setzen.", zu: "m3", warum: "Widerspruch wird bestraft. Die Kinder lernen: Wer sich beschwert, hat ein Problem." },
    { id: "c6", text: "Ein Kind fragt, warum ein anderes Kind anders spricht. Die Fachkraft sagt: »Bei uns sind alle gleich, das spielt keine Rolle.«", zu: "m4", warum: "Wer Unterschiede übergeht, lässt die Frage des Kindes unbeantwortet. Vielfalt als Normalität heißt: Unterschiede benennen, ohne sie zu bewerten." }
  ]
};

blatt({
  id: "e4", etappe: 4, art: "doppelstunde", dauer: 90, titel: "Macht und Haltung",
  frage: "Was mache ich mit der Macht, die ich als Erwachsene oder Erwachsener habe?",
  karte: "Acht Aufträge · 90 Minuten · am Ende steht Ihre persönliche Handlungsleitlinie für eine Alltagssituation.",
  darum: "Erwachsene sind in der Kita mächtiger als Kinder: größer, sprachlich überlegen, durch die Einrichtung abgesichert. Diese Macht verschwindet nicht, wenn man sie leugnet. Heute untersuchen Sie, wie sie sich in ganz alltäglichen Sätzen zeigt – beim Essen, Anziehen, Schlafen und im Streit. Am Ende schreiben Sie Ihre persönliche Handlungsleitlinie.",
  ziele: ["an Alltagssätzen zeigen, wo Erwachsene Macht über Kinder haben,", "verschließende Sätze einladend umformulieren, ohne die Verantwortung abzugeben,", "die vier Merkmale demokratischer Haltung auf eine eigene Situation anwenden."],
  hinweis: "Bewertet wird nur Ihr eigenes Handeln, nicht das von Kolleginnen und Kollegen. Das Extra fragt nach Ihrer Praxisstelle – freiwillig und ohne Namen.",
  spur: "e4.spur", spurAnfang: "Mit meiner Macht als Fachkraft will ich …", spurFrage: "Was machen Sie mit Ihrer Macht als Fachkraft? Ein Satz genügt.",
  kann: ["Ich kann an Alltagssätzen zeigen, wo Erwachsene Macht über Kinder haben.", "Ich kann einen verschließenden Satz einladend umformulieren, ohne die Verantwortung abzugeben.", "Ich kann die vier Merkmale demokratischer Haltung nennen und auf eine Situation anwenden."],
  papier: "Digital ist der Kern beim Verdecken und Aufdecken: erst der eigene Satz, dann der Vorschlag; erst legen, dann vergleichen. Die Handlungsleitlinie gibt es als Schreibblatt für den Stift; die Satzpaare lassen sich auch als Karten im Raum auslegen.",
  lk: [
    ["Vor der Stunde", ["Am Gerät vorne »Alle Aufträge auf diesem Gerät freigeben« wählen.", "Hinweis an die Klasse: Es geht um eigene Routinen, nicht um Kritik an Kolleginnen und Kollegen der Praxisstellen."]],
    ["Plenumsstellen", ["Nach Auftrag 2: Was ist an der Frage das Problem? Zwei oder drei Begründungen.", "Nach Auftrag 3: Positionslinie 0–10.", "Nach Auftrag 4: Woher kommt die Macht der Erwachsenen? An der Tafel sammeln.", "Auftrag 5: Zwei Paare spielen einen Satz vor – einmal verschließend, einmal einladend. Wie fühlt sich das an?", "Nach Auftrag 6: Bei welcher Karte war die Klasse uneins?", "Auftrag 8: Positionslinie noch einmal; Stimmkarte A · B · C zählen."]],
    ["Wenn die Zeit knapp wird", ["K1 · In Auftrag 5 genügen drei statt vier Sätze (– 4 Min.).", "K2 · Auftrag 1 mündlich im Plenum (– 2 Min.).", "K3 · Auftrag 6 gemeinsam am Gerät vorne legen (– 5 Min.)."]],
    ["Status der Inhalte", ["Szene »Wollt ihr heute rausgehen?«: ausgedacht nach einem Beispiel aus dem Impulsvortrag.", "Satzpaare in Auftrag 5: aus dem Impulsvortrag, Kapitel 13 (Tabelle »einladend – verschließend«); das Paar »Kleidung bei Regen« und der Satz in Auftrag 4 sind ausgedacht.", "Vier Merkmale demokratischer Haltung: Impulsvortrag, Kapitel 13. Die Momente in Auftrag 6: ausgedacht.", "Vier Ziele vorurteilsbewusster Bildung: nach Louise Derman-Sparks, in der Fassung aus dem Workshop »Stell dich nicht so an« (Fachtag 2026). Adultismus: Arbeitsdefinition.", "Welche Antwort »zentral« ist und wohin eine Karte gehört, ist ein Vorschlag – gute Begründungen für eine andere Wahl zählen."]]
  ],
  auftraege: [
    aufAbruf("e4", D.e4.abruf, "Heute geht es um die Seite der Erwachsenen: <b>Was machen wir mit unserer Macht?</b>"),
    aufSzene("e4", 2, { min: 6, danach: function () { return [kasten("sicherung", "Beteiligung zum Schein", p("Kinder werden gefragt, aber ihre Antwort kann nichts ändern. Ehrlicher wäre: »Wir gehen jetzt raus. Ihr entscheidet, was wir draußen spielen.«")), kasten("raum", null, p("Zu zweit: Kennen Sie solche Fragen aus Ihrem Alltag – auch aus Ihrem eigenen Mund?"))]; } }),
    aufPosition("e4", 3, D.e4.these),
    { id: "a4", nr: "4", kurz: "Wo die Macht steckt", phase: "Erarbeitung", name: "Wo steckt die Macht?", form: "allein, dann zu zweit", min: 12, frei: "ansage", gleich: "Sie lesen, woher die Macht der Erwachsenen kommt, und prüfen einen Satz von der Garderobe.", prinzip: "Verdecken · Rückmelden", raum: "An der Tafel: Woher kommt die Macht?",
      fertig: function () { return !!(S.w["e4.muetze"] && S.w["e4.muetze"].fest); },
      seite: function (box) {
        box.appendChild(kasten("wissen", "Das Machtgefälle",
          p("Erwachsene sind in der Kita mächtiger als Kinder – auf drei Wegen: Sie sind <b>größer und stärker</b>, sie sind <b>sprachlich überlegen</b>, und sie sind <b>durch die Einrichtung abgesichert</b>: Sie machen die Regeln, die Pläne und die Dokumentation."),
          p("Diese Macht abzustreiten, macht sie nur unsichtbar, nicht weg. Demokratie heißt deshalb auch: Macht abgeben – und den eigenen Wissensvorsprung nicht zur Bevormundung machen."),
          p("Wenn Erwachsene Kinder allein wegen ihres Alters als weniger wichtig oder weniger fähig behandeln, nennt man das <b>Adultismus</b>."),
          p("Nach dem Impulsvortrag, Kapitel 13 · Adultismus: Arbeitsdefinition", "quelle")));
        box.appendChild(h("div", { class: "falltext" }, etikett("ausgedachte Szene"), p("An der Garderobe. Draußen ist es kalt. Ein Kind zieht sich die Mütze vom Kopf: »Ich will die nicht!« Die Fachkraft setzt sie ihm wieder auf: »Stell dich nicht so an. Die Mütze bleibt auf.«", "falltext__text")));
        box.appendChild(kasten("auftrag", null, p("Legen Sie sich fest und begründen Sie in einem Satz.")));
        wahl(box, "e4.muetze", { frage: "Was zeigt der Satz »Stell dich nicht so an«?", optionen: [
          ["Er erklärt nichts und macht das Gefühl des Kindes klein – Macht ohne Begründung.", "zentral", "Die Fachkraft entscheidet, ohne zu sagen, warum, und wertet dabei das Gefühl des Kindes ab. Das Kind lernt: Was ich fühle, zählt nicht."],
          ["Er ist in Ordnung, denn draußen ist es kalt.", "begruendbar", "Die Mütze kann richtig sein. Der Satz dazu ist es nicht: Er macht das Gefühl klein, statt den Grund zu nennen."],
          ["Er zeigt vor allem, dass die Fachkraft keine Zeit hat.", "kaum", "Zeitdruck erklärt den Satz vielleicht. Er ändert nicht, was das Kind dabei lernt."]],
          danach: function () { return [kasten("sicherung", "Die Verantwortung bleibt – der Ton ändert sich", p("»Ich sehe, du willst die Mütze nicht. Draußen ist es kalt, deshalb bleibt sie heute auf. Magst du sie selbst aufsetzen?«"), p("Ein Vorschlag – es gibt viele gute Sätze.", "quelle")), kasten("raum", null, p("Zu zweit: Woher kommt die Macht der Fachkraft in dieser Szene? Nennen Sie alle drei Wege."))]; } });
      } },
    { id: "a5", nr: "5", kurz: "Sätze", phase: "Sichern und üben", name: "Einladend oder verschließend?", form: "zu zweit", min: 18, frei: "antwort", nach: "a4", fehlt: "Die Sätze öffnen sich nach Auftrag 4.", prinzip: "Verdecken – erst der eigene Satz, dann der Vorschlag", raum: "Zwei Paare spielen einen Satz vor – verschließend und einladend",
      fertig: function () { return umformenZahl("e4.satz", D.e4.saetze) >= 4; },
      seite: function (box) {
        box.appendChild(kasten("auftrag", null, p("Neun Alltagssätze, die Kinder zu oft hören. Formulieren Sie zu zweit einen Satz so um, dass das Kind mitentscheiden kann – wo etwas feststeht, sagen Sie ehrlich, was und warum. Erst dann sehen Sie einen Vorschlag."), p("<b>Fertig sind Sie mit vier Sätzen.</b> Schnelle nehmen mehr.")));
        umformen(box, "e4.satz", D.e4.saetze, { ziel: 4, titel: "Neun Sätze", label: "So würde ich es sagen:", platz: "»…«", frage: "Gibt Ihr Satz dem Kind eine echte Wahl?" });
        box.appendChild(p("Die Satzpaare stammen aus dem Impulsvortrag (Kapitel 13); das Paar »Kleidung bei Regen« ist ausgedacht.", "meta"));
      } },
    { id: "a6", nr: "6", kurz: "Vier Merkmale", phase: "Erarbeitung", name: "Vier Merkmale demokratischer Haltung", form: "allein, dann zu zweit", min: 12, frei: "antwort", nach: "a5", fehlt: "Die vier Merkmale öffnen sich, wenn Sie vier Sätze umformuliert haben (Auftrag 5).", prinzip: "Verdecken – erst legen, dann der Vorschlag", raum: "Bei welcher Karte war die Klasse uneins?",
      fertig: function () { return legenFertig("e4.merkmal"); },
      seite: function (box) {
        box.appendChild(kasten("wissen", "Vier Merkmale", h("ol", {}, [
          ["Macht offenlegen, statt sie zu verschleiern.", "Ja, wir sind mächtiger. Das sagen wir – und wir begründen, was wir entscheiden."],
          ["Beteiligung ermöglichen, statt sie zu spielen.", "Gefragt wird nur, wo die Antwort etwas ändern kann."],
          ["Widerspruch aushalten, statt ihn zu bestrafen.", "Das Nein eines Kindes ist eine Botschaft, kein Erziehungsproblem."],
          ["Vielfalt als Normalität anerkennen, nicht als Extra.", "Verschiedene Familien, Sprachen, Körper und Geschwindigkeiten sind der Alltag."]].map(function (m) { return h("li", {}, h("b", { text: m[0] + " " }), document.createTextNode(m[1])); })),
          p("Nach dem Impulsvortrag, Kapitel 13", "quelle")));
        box.appendChild(kasten("auftrag", null, p("Sechs Momente aus Kitas. Welches Merkmal fehlt jeweils? Tippen Sie eine Karte an und dann das Merkmal. Wenn alle liegen, vergleichen Sie mit dem Vorschlag.")));
        legen(box, "e4.merkmal", D.e4.momente, D.e4.merkmale, { kopf: "Der Vorschlag – welches Merkmal fehlt?", danach: function () {
          return kasten("erklaerung", "Ausblick: vorurteilsbewusste Bildung",
            p("Das vierte Merkmal führt weiter. Der Anti-Bias-Ansatz, entwickelt von Louise Derman-Sparks, hat vier Ziele: Kinder in ihrer Ich- und Gruppenidentität stärken · Erfahrungen mit Vielfalt ermöglichen · kritisches Denken über Gerechtigkeit und Fairness anregen · Kinder ermutigen, gegen Unrecht und Diskriminierung aktiv zu werden."),
            p("Die nächsten Stunden dieser Etappe vertiefen das – mit Büchern, Bildern und Routinen und mit stereotypen Aussagen unter Kindern."),
            p("Ziele in der Fassung aus dem Workshop »Stell dich nicht so an« (Fachtag 2026)", "quelle"));
        } });
      } },
    { id: "a7", nr: "7", kurz: "Ihre Leitlinie", phase: "Übertragen und Ausblick", name: "Ihre Handlungsleitlinie", form: "allein", min: 14, frei: "antwort", nach: "a6", schreib: true, fehlt: "Ihre Leitlinie öffnet sich nach Auftrag 6.", prinzip: "keines der sechs – Papierfrage: geht auch auf Papier; die Seite bringt die Kriterien nach dem Text", raum: "Zu zweit vorlesen: Würde ein Kind den Unterschied merken?",
      fertig: function () { return !!(S.w["e4.leit"] && S.w["e4.leit"].zu); },
      seite: function (box) {
        var w = W("e4.leit");
        box.appendChild(kasten("auftrag", null, p("Wählen Sie eine Alltagssituation. Schreiben Sie Ihre persönliche Leitlinie: Was entscheidet das Kind? Was entscheiden Sie – und wie sagen Sie es? Nehmen Sie mindestens einen einladenden Satz wörtlich auf.")));
        var chips = h("div", { class: "chips", role: "group", "aria-label": "Situation wählen" });
        ["Essen", "Schlafen und Ruhe", "Anziehen", "Wickeln und Pflege"].forEach(function (s) {
          chips.appendChild(knopf(s, { art: "chip", gedrueckt: String(w.sit === s), klick: function () { w.sit = s; speichere(); $$("button", chips).forEach(function (b) { b.setAttribute("aria-pressed", String(b.textContent === s)); }); } }));
        });
        box.appendChild(h("fieldset", { class: "gruppe" }, h("legend", { text: "Meine Situation:" }), chips));
        produkt(box, "e4.leit", { label: "Meine Leitlinie:", platz: "Beim … entscheidet das Kind … Ich entscheide …, weil … Ich sage: »…«", rows: 6, min: 30,
          kriterien: [["Grundlegend", "Die Leitlinie nennt die Situation und sagt, was das Kind entscheiden darf."], ["Sicher", "Sie benennt, wo die Fachkraft entscheidet – zum Beispiel bei Gesundheit und Schutz – und wie sie es erklärt."], ["Souverän", "Sie enthält einen einladenden Satz wörtlich und sagt, wie ein Nein des Kindes gehört wird."]] });
      } },
    aufRueckblick("e4", 8, D.e4.these, "a7", { fehlt: "Der Rückblick öffnet sich, wenn Ihre Leitlinie fertig ist (Auftrag 7)." }),
    aufZf("e4", "a8", function (box) {
      var verglichen = D.e4.saetze.filter(function (s) { var w = S.w["e4.satz." + s.id]; return w && w.zu; });
      zfDaten(box, { kopf: "Etappe 4 · Macht und Haltung", frage: "Was mache ich mit der Macht, die ich als Erwachsene oder Erwachsener habe?",
        kern: "Erwachsene sind mächtiger als Kinder. Das lässt sich nicht abschaffen, aber offenlegen und teilen. Demokratische Haltung zeigt sich in alltäglichen Sätzen: Sie lädt zur Entscheidung ein, wo das Kind entscheiden kann – und sagt ehrlich, wo die Erwachsenen entscheiden und warum.",
        begriffe: [
          ["Machtgefälle", "Erwachsene sind größer, sprachlich überlegen und durch die Einrichtung abgesichert."],
          ["Adultismus", "Erwachsene behandeln Kinder allein wegen ihres Alters als weniger wichtig oder weniger fähig."],
          ["Beteiligung zum Schein", "Kinder werden gefragt, aber ihre Antwort kann nichts ändern."],
          ["Vier Merkmale", "Macht offenlegen · Beteiligung ermöglichen · Widerspruch aushalten · Vielfalt als Normalität anerkennen."],
          ["Vorurteilsbewusste Bildung", "Anti-Bias-Ansatz mit vier Zielen: Identität stärken, Vielfalt erfahren, kritisch über Fairness nachdenken, gegen Unrecht aktiv werden."]],
        tabelle: { kopf: ["Situation", "Verschließend", "Einladend"], zeilen: D.e4.saetze.filter(function (s) { return ["s1", "s4", "s6", "s7", "s8"].indexOf(s.id) >= 0; }).map(function (s) { return [s.titel, s.satz, s.anders]; }) },
        werk: ["Denkwerkzeug: Drei Fragen an meinen Satz", ["Ist die Frage wirklich offen?", "Wenn nicht: Sage ich ehrlich, was feststeht – und warum?", "Was darf das Kind trotzdem entscheiden?"]],
        mein: [["Meine Handlungsleitlinie" + (S.w["e4.leit"] && S.w["e4.leit"].sit ? " · " + S.w["e4.leit"].sit : ""), "e4.leit", "noch offen – Auftrag 7"],
          ["Meine Sätze", function () { return verglichen.length ? h("ul", { class: "mein-liste" }, verglichen.slice(0, 3).map(function (s) { return h("li", {}, h("b", { text: s.titel + ": " }), document.createTextNode(txt("e4.satz." + s.id + ".satz"))); })) : mein("", "noch offen – Auftrag 5"); }],
          ["Mein Satz für die Lernspur", "e4.spur", "noch offen – Auftrag 8"]],
        aufgabe: "Erläutern Sie an einer Alltagssituation, wie eine Fachkraft ihre Macht offenlegen und zugleich Beteiligung ermöglichen kann. Formulieren Sie dazu einen einladenden Satz." });
    }),
    aufExtra("e4", "Ein Satz aus Ihrer Praxisstelle", {
      auftrag: "Freiwillig – nur wenn Sie möchten. Hören Sie einen Tag lang genau hin: Welchen verschließenden Satz hören Sie – oder sagen Sie selbst? Notieren Sie ihn ohne Namen. Es geht nicht darum, jemanden vorzuführen.",
      felder: [["satz", "Der Satz", "»…«"], ["anders", "So könnte er einladend klingen (Fundstelle: Auftrag 5):", "»…«"], ["urteil", "Ein Satz zu Ihrem Urteil: Welches Merkmal demokratischer Haltung berührt der Satz? Nennen Sie es aus Auftrag 6.", "Der Satz berührt …, weil …"]] })
  ]
});
