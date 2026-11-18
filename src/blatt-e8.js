/* ===== Arbeitsblatt Etappe 8 · Ihr Praxisprojekt (Doppelstunde, Fassung 5.0) =====
   Erste Stunde der Projektwerkstatt (Curriculum, Einheiten 30 bis 34). Tiefgang aus dem Impulsvortrag, Kapitel 14
   (sieben Fähigkeiten, zivilisiert streiten) und 15 (Kinder können Demokratie). Produkt: ein Projektsteckbrief.
   Der Leistungsnachweis ist noch offen; der Steckbrief passt zu den Varianten Praxisprojekt und Konzeptprodukt. */

D.e8 = {
  these: "Ein gutes Demokratieprojekt braucht ein großes Vorhaben – zum Beispiel ein Kinderparlament.",
  abruf: [
    ["Was unterscheidet Fassade von Willkür?", "Fassade: Verfahren ohne gelebten Alltag. Willkür: ein freundlicher Alltag ohne feste Verfahren – es hängt von der Fachkraft ab."],
    ["Welche drei Fragen stellen Sie vor jeder Abstimmung?", "Ist die Frage wirklich offen? Kennen die Kinder den Rahmen? Wie erfahren sie, was aus ihrer Entscheidung wurde?"],
    ["Nennen Sie die fünf Schritte gegen abwertende Aussagen.", "Benennen, begrenzen, begründen, Brücken bauen, beauftragen."]
  ],
  faehig: [
    { id: "f1", titel: "Das Laufrad", unter: "zwei Kinder, ein Rad",
      text: ["Zwei Kinder wollen dasselbe Laufrad. Die Fachkraft fragt: »Wie können wir das lösen, dass es für beide passt?« Die beiden einigen sich auf eine Sanduhr: Wenn sie durchgelaufen ist, wird getauscht."],
      etikett: "ausgedachte Szene, nach einem Beispiel aus dem Vortrag",
      frage: "Welche Fähigkeit üben die Kinder hier vor allem?",
      optionen: [["Aushandeln – sich ausdrücken, zuhören, einen Kompromiss finden.", "zentral", "Beide bringen ihren Wunsch ein und finden eine Lösung, mit der beide leben können."], ["Widersprechen.", "begruendbar", "Beide sagen zuerst Nein zum anderen. Geübt wird hier aber vor allem das Einigen."], ["Mitverantworten.", "kaum", "Um Verantwortung für die Gruppe geht es hier noch nicht."]] },
    { id: "f2", titel: "Das Beet", unter: "Gießen nach Plan",
      text: ["Die Kinder haben ein Beet angelegt. Jede Woche gießen zwei andere Kinder – so hat es die Kinderkonferenz beschlossen."],
      etikett: "ausgedachte Szene",
      frage: "Welche Fähigkeit üben die Kinder hier vor allem?",
      optionen: [["Mitverantworten – für die Gruppe, den Raum, für andere.", "zentral", "Die Kinder tragen gemeinsam die Folgen ihres Beschlusses."], ["Entscheiden.", "begruendbar", "Entschieden wurde in der Konferenz. Jetzt geht es darum, die Folgen zu tragen – das ist Mitverantwortung."], ["Perspektivwechsel.", "kaum", "Sich in andere hineinzuversetzen, ist hier nicht der Kern."]] },
    { id: "f3", titel: "Die neue Regel", unter: "ein Nein im Morgenkreis",
      text: ["Ein Kind sagt im Morgenkreis: »Die neue Regel ist doof. Die will ich nicht.« Die Fachkraft antwortet: »Erzähl mal, warum.«"],
      etikett: "ausgedachte Szene",
      frage: "Welche Fähigkeit übt das Kind hier vor allem?",
      optionen: [["Widersprechen – das Nein als demokratisches Kernelement.", "zentral", "Das Kind widerspricht, und die Fachkraft hört zu. So wird aus dem Nein ein Beitrag."], ["Konflikte gewaltfrei lösen.", "begruendbar", "Wenn das Gespräch weitergeht, vielleicht. Zuerst wird hier aber das Widersprechen geübt."], ["Mitverantworten.", "kaum", "Die Verantwortung für die Regel steht hier noch nicht im Mittelpunkt."]] },
    { id: "f4", titel: "Der Ausflug", unter: "und was ist mit den Kleinen?",
      text: ["Vor der Abstimmung über den Ausflug fragt ein Kind: »Und was ist mit den Kleinen? Die können doch noch nicht so weit laufen.«"],
      etikett: "ausgedachte Szene",
      frage: "Welche Fähigkeit zeigt das Kind hier vor allem?",
      optionen: [["Perspektivwechsel – sich in die Lage anderer versetzen.", "zentral", "Das Kind denkt an die, die selbst nicht mitreden können – ein Stück Minderheitenschutz."], ["Vielfalt aushalten.", "begruendbar", "Auch das: Unterschiede in der Gruppe werden ernst genommen. Der Kern ist aber, sich in andere hineinzuversetzen."], ["Entscheiden.", "kaum", "Entschieden wird erst später. Jetzt geht es um den Blick auf andere."]] }
  ],
  ideen: [
    { id: "p1", titel: "Das Kinderrechte-Plakat", unter: "Idee 1",
      text: ["Die Kinder malen Bilder für ein Plakat »Unsere Kinderrechte«. Das Team hängt es im Flur auf."],
      frage: "Was fehlt dieser Idee am meisten?",
      optionen: [["Eine echte Entscheidung der Kinder.", "zentral", "Die Kinder schmücken ein Plakat, entscheiden aber nichts. Im Stufenmodell ist das Dekoration (Etappe 5)."], ["Eine Rückmeldung an die Kinder.", "kaum", "Eine Rückmeldung hilft wenig, wenn es nichts zu entscheiden gab."], ["Die Leisen und die Jüngsten.", "begruendbar", "Malen können alle. Aber auch die Lauten entscheiden hier nichts."]] },
    { id: "p2", titel: "Neue Spielgeräte", unter: "Idee 2",
      text: ["In einer Kinderkonferenz wählen die Kinder drei neue Spielgeräte. Bestellt wird später ein Gerät, das die Leitung aussucht. Die Kinder erfahren es nicht."],
      frage: "Was fehlt dieser Idee am meisten?",
      optionen: [["Eine echte Entscheidung der Kinder.", "begruendbar", "Auch das: Am Ende entscheidet die Leitung allein. Ehrlich wäre, das vorher zu sagen."], ["Eine Rückmeldung an die Kinder.", "zentral", "Die Kinder erfahren nie, was aus ihrer Wahl wurde. So kippt Beteiligung in Schein."], ["Die Leisen und die Jüngsten.", "kaum", "Davon sagt die Idee nichts. Das größte Loch liegt woanders."]] },
    { id: "p3", titel: "Die Zukunftswerkstatt", unter: "Idee 3",
      text: ["Die Vorschulkinder planen in einer Zukunftswerkstatt das Sommerfest. Die Krippenkinder sind nicht dabei."],
      frage: "Was fehlt dieser Idee am meisten?",
      optionen: [["Eine echte Entscheidung der Kinder.", "kaum", "Die Vorschulkinder entscheiden wirklich."], ["Eine Rückmeldung an die Kinder.", "begruendbar", "Eine Rückmeldung an alle ist gut. Sie ersetzt aber nicht, die Jüngsten zu beteiligen."], ["Die Leisen und die Jüngsten.", "zentral", "Die Jüngsten sind ausgeschlossen. Bildkarten, Steine oder eine Befragung vorab könnten sie einbeziehen."]] }
  ],
  steck: [["titel", "Titel Ihres Projekts", "Unser neuer Bauraum / Das Frühstück …"], ["frage", "Was entscheiden die Kinder – welche echte Frage stellen Sie ihnen?", "Die Kinder entscheiden, …"], ["rahmen", "Was ist offen, was steht fest – und warum?", "Offen ist … Fest steht …, weil …"], ["verfahren", "Wie entscheiden die Kinder – mit welchem Verfahren?", "Kinderkonferenz / Zukunftswerkstatt / Abstimmung mit Steinen …"], ["leise", "Wie kommen die Leisen und die Jüngsten zu Wort?", "Wer nicht spricht, kann …"], ["rueck", "Wie erfahren die Kinder, was aus ihrer Entscheidung wurde?", "Wir zeigen … / Wir erzählen …"], ["doku", "Wie dokumentieren Sie? (ohne Namen; Fotos nur mit Zustimmung)", "Ich halte fest …", 2, true], ["plan", "Drei Termine: planen, durchführen, zurückmelden", "1. … 2. … 3. …", 2, true]]
};

blatt({
  id: "e8", etappe: 8, art: "doppelstunde", dauer: 90, titel: "Ihr Praxisprojekt",
  frage: "Was nehmen Sie mit in Ihre Einrichtung?",
  karte: "Sieben Aufträge · 90 Minuten · am Ende steht der Steckbrief Ihres Praxisprojekts.",
  darum: "Kinder können Demokratie – wenn Erwachsene ihnen Räume dafür öffnen. In Ihrem Praxisprojekt öffnen Sie einen solchen Raum. Heute planen Sie es: mit einer echten Frage an die Kinder, einem Verfahren, das trägt, und einem Plan, wie die Kinder erfahren, was aus ihrer Entscheidung wurde.",
  ziele: ["sieben demokratische Fähigkeiten von Kindern nennen und an Situationen zeigen,", "ein Praxisprojekt planen, in dem Kinder wirklich mitentscheiden,", "Ihr Projekt an den Kinderrechten und an Fassade und Willkür prüfen."],
  hinweis: "Ihr Projekt planen Sie für Ihre Praxisstelle – sprechen Sie es dort ab. In diesem Leitfaden stehen keine Namen und keine Fotos von Kindern. Wenn Sie zurzeit keine Praxisstelle haben, planen Sie für eine ausgedachte Kita.",
  spur: "e8.spur", spurAnfang: "In meine Einrichtung nehme ich mit: …", spurFrage: "Was nehmen Sie mit in Ihre Einrichtung? Ein Satz genügt.",
  kann: ["Ich kann sieben demokratische Fähigkeiten von Kindern nennen und an einer Situation zeigen.", "Ich kann ein Praxisprojekt planen, in dem Kinder wirklich mitentscheiden.", "Ich kann mein Projekt an den Kinderrechten und an Fassade und Willkür prüfen."],
  papier: "Digital ist der Kern beim Verdecken und Aufdecken: die Festlegungen mit Rückmeldung und die Kriterien nach dem eigenen Steckbrief. Den Steckbrief gibt es als Schreibblatt für den Stift – er kann auch auf einem großen Papierbogen in der Gruppe entstehen.",
  lk: [
    ["Vor der Stunde", ["Am Gerät vorne »Alle Aufträge auf diesem Gerät freigeben« wählen.", "<b>Leistungsnachweis noch offen:</b> Das Curriculum nennt Variante A (Praxisprojekt), B (Fallanalyse) und C (Konzeptprodukt). Der Steckbrief passt zu A und C. Vor der Stunde festlegen und mit den Schulvorgaben abgleichen."]],
    ["Plenumsstellen", ["Nach Auftrag 2: Was braucht das Kind von der Fachkraft? Zwei oder drei Begründungen.", "Nach Auftrag 3: Positionslinie 0–10.", "Nach Auftrag 4: Welche Fähigkeit üben Kinder bei Ihnen am häufigsten – welche am seltensten?", "Nach Auftrag 5: Was fehlt den drei Ideen? An der Tafel als Projekt-Check sammeln.", "Auftrag 6: Kurze kollegiale Beratung zu zweit: eine Frage, ein Tipp.", "Auftrag 7: Positionslinie noch einmal; Stimmkarte A · B · C zählen."]],
    ["Wenn die Zeit knapp wird", ["K1 · Die Felder »Dokumentation« und »Drei Termine« im Steckbrief bis zur nächsten Stunde (– 6 Min.).", "K2 · Auftrag 1 mündlich im Plenum (– 2 Min.).", "K3 · In Auftrag 4 genügen zwei Szenen (– 5 Min.)."]],
    ["Status der Inhalte", ["Szene »Der Mülleimer«: aus dem Film »Die Kinderstube der Demokratie« (Müller, Plöger 2008), nach dem Impulsvortrag – noch am Film zu prüfen.", "Sieben Fähigkeiten: im Vortrag in Anlehnung an Himmelmann und die BLK-Kommission zusammengefasst (Kapitel 14). Befunde zur Wirkung: nach Hansen, Knauer und Sturzenhecker, im Vortrag zitiert (Kapitel 15) – am Original noch zu prüfen. Zitat Stärck, Wach und Zankl (2019, S. 9, zitiert nach Doll, Herrmann 2020, S. 27): im Vortrag zitiert.", "Szenen in Auftrag 4 und Projektideen in Auftrag 5: ausgedacht. Zukunftswerkstatt: Methode nach Robert Jungk.", "Welche Antwort »zentral« ist, ist ein Vorschlag – gute Begründungen für eine andere Wahl zählen."]]
  ],
  auftraege: [
    aufAbruf("e8", D.e8.abruf, "Heute bündeln Sie, was Sie in diesem Jahr gelernt haben – in einem Projekt für Ihre Praxisstelle."),
    aufSzene("e8", 2, { min: 6, danach: function () { return [kasten("sicherung", "Zivilisiert streiten", p("Das Kind braucht keine Entscheidung von Erwachsenen. Es braucht Begleitung, damit die Gruppe selbst eine Lösung findet. Damit umgehen zu können, dass es mehrere gleich berechtigte Lösungen gibt – und darüber fair zu streiten: Das ist vielleicht die wichtigste demokratische Fähigkeit."), p("Nach Stärck, Wach und Zankl (2019), im Impulsvortrag zitiert", "quelle")), kasten("raum", null, p("Zu zweit: Was würden Sie als Fachkraft jetzt sagen – ohne die Lösung vorzugeben?"))]; } }),
    aufPosition("e8", 3, D.e8.these),
    { id: "a4", nr: "4", kurz: "Kinder können es", phase: "Erarbeitung", name: "Kinder können Demokratie", form: "allein, dann zu zweit", min: 14, frei: "ansage", gleich: "Sieben Fähigkeiten – und vier Szenen, in denen Kinder sie üben.", prinzip: "Verdecken · Rückmelden", raum: "Welche Fähigkeit üben Kinder bei Ihnen am seltensten?",
      fertig: function () { return kartenFest("e8.faehig", D.e8.faehig) >= 4; },
      seite: function (box) {
        box.appendChild(kasten("wissen", "Sieben Fähigkeiten", h("ol", {}, [["Aushandeln", "sich ausdrücken, zuhören, Kompromisse finden"], ["Entscheiden", "auch Verantwortung für die Folgen tragen"], ["Mitverantworten", "für die Gruppe, den Raum, für andere"], ["Widersprechen", "das Nein als demokratisches Kernelement"], ["Konflikte gewaltfrei lösen", "eine Grundkompetenz, kein Zusatz"], ["Perspektivwechsel", "sich in andere hineinversetzen"], ["Vielfalt aushalten", "und genießen lernen"]].map(function (f) { return h("li", {}, h("b", { text: f[0] }), document.createTextNode(" – " + f[1])); })),
          p("Und es wirkt: Kinder, die an echten Entscheidungen beteiligt werden, diskutieren untereinander mehr aus, finden öfter ohne Erwachsene gemeinsame Lösungen und tragen ihre Erfahrungen in die Familie – manche wollen dort »Familienkonferenzen« abhalten."),
          p("Nach dem Impulsvortrag, Kapitel 14 und 15 · Befunde nach Hansen, Knauer und Sturzenhecker – am Original noch zu prüfen", "quelle")));
        box.appendChild(kasten("auftrag", null, p("Vier Szenen aus Kitas. Legen Sie sich bei jeder fest, welche Fähigkeit die Kinder vor allem üben, und begründen Sie in einem Satz."), p("<b>Fertig sind Sie mit allen vier Szenen.</b>")));
        kartenRunde(box, "e8.faehig", D.e8.faehig, { titel: "Vier Szenen" });
      } },
    { id: "a5", nr: "5", kurz: "Ideen prüfen", phase: "Sichern und üben", name: "Drei Projektideen prüfen", form: "zu zweit", min: 12, frei: "antwort", nach: "a4", fehlt: "Die Projektideen öffnen sich nach Auftrag 4.", prinzip: "Rückmelden – je Antwort mit Erklärung", raum: "An der Tafel: der Projekt-Check",
      fertig: function () { return kartenFest("e8.idee", D.e8.ideen) >= 3; },
      seite: function (box) {
        box.appendChild(kasten("auftrag", null, p("Drei Projektideen, wie sie in Praxisstellen entstehen könnten. Was fehlt jeder Idee am meisten? Legen Sie sich zu zweit fest und begründen Sie.")));
        kartenRunde(box, "e8.idee", D.e8.ideen, { titel: "Drei Ideen", platz: "Am meisten fehlt …, weil …" });
        box.appendChild(kasten("sicherung", "Der Projekt-Check", liste(["Ist die Entscheidung wirklich offen?", "Kennen die Kinder den Rahmen?", "Sind die Leisen und die Jüngsten dabei?", "Erfahren die Kinder, was aus ihrer Entscheidung wurde – und was bleibt danach im Alltag?"])));
      } },
    { id: "a6", nr: "6", kurz: "Ihr Steckbrief", phase: "Übertragen und Ausblick", name: "Der Steckbrief Ihres Projekts", form: "allein, dann kollegiale Beratung zu zweit", min: 28, frei: "antwort", nach: "a5", schreib: true, fehlt: "Ihr Steckbrief öffnet sich nach dem Projekt-Check (Auftrag 5).", prinzip: "keines der sechs – Papierfrage: geht auch auf Papier; die Seite bringt die Kriterien nach dem Text", raum: "Kollegiale Beratung: eine Frage, ein Tipp",
      fertig: function () { return mehrfeldFertig("e8.steck"); },
      seite: function (box) {
        box.appendChild(kasten("auftrag", null, p("Planen Sie Ihr Praxisprojekt. Füllen Sie die Felder in Stichworten oder ganzen Sätzen. Die letzten beiden Felder dürfen Sie später ergänzen. Dokumentiert wird ohne Namen; Fotos von Kindern nur mit Zustimmung von Praxisstelle und Eltern. Stellen Sie danach Ihren Steckbrief einer anderen Person vor: Sie stellt eine Frage und gibt einen Tipp.")));
        mehrfeld(box, "e8.steck", D.e8.steck, { min: 3, kriterien: [["Grundlegend", "Das Projekt stellt den Kindern eine echte Frage und nennt ein Verfahren."], ["Sicher", "Der Rahmen ist offengelegt, die Leisen und die Jüngsten sind bedacht, und eine Rückmeldung an die Kinder ist geplant."], ["Souverän", "Das Projekt ist an den drei Prüfsteinen geprüft und sagt, was danach im Alltag bleibt – damit es keine Fassade wird."]],
          danach: function () { return kasten("wissen", "Die drei Prüfsteine", h("dl", { class: "pruef" }, D.pruefsteine.map(function (x) { return h("div", { class: "pruef--" + x[0] }, h("dt", { text: x[1] }), h("dd", { text: x[2] })); }))); } });
      } },
    aufRueckblick("e8", 7, D.e8.these, "a6", { fehlt: "Der Rückblick öffnet sich, wenn Ihr Steckbrief fertig ist (Auftrag 6)." }),
    aufZf("e8", "a7", function (box) {
      zfDaten(box, { kopf: "Etappe 8 · Ihr Praxisprojekt", frage: "Was nehmen Sie mit in Ihre Einrichtung?",
        kern: "Kinder können Demokratie. Ein gutes Praxisprojekt öffnet ihnen eine echte Entscheidung, legt den Rahmen offen, holt die Leisen und die Jüngsten dazu und sagt den Kindern, was aus ihrer Entscheidung wurde – und es lässt etwas im Alltag zurück.",
        begriffe: [
          ["Zivilisiert streiten", "Damit umgehen, dass es mehrere gleich berechtigte Lösungen gibt – und darüber fair streiten."],
          ["Zukunftswerkstatt", "Methode nach Robert Jungk in drei Schritten: Kritik sammeln, Wünsche entwickeln, Umsetzung planen."],
          ["Perspektivwechsel", "Sich in die Lage und die Wünsche anderer hineinversetzen."],
          ["Dekoration", "Kinder schmücken eine Entscheidung, an der sie nicht beteiligt waren."],
          ["Rückmeldung", "Die Kinder erfahren, was aus ihrer Entscheidung wurde – sonst kippt Beteiligung in Schein."]],
        tabelle: { kopf: ["Fähigkeit", "Im Kita-Alltag"], zeilen: [["Aushandeln", "sich ausdrücken, zuhören, Kompromisse finden"], ["Entscheiden", "auch für die Folgen einstehen"], ["Mitverantworten", "für die Gruppe, den Raum, andere"], ["Widersprechen", "das Nein als Kernelement"], ["Konflikte gewaltfrei lösen", "Grundkompetenz, kein Zusatz"], ["Perspektivwechsel", "sich in andere hineinversetzen"], ["Vielfalt aushalten", "und genießen lernen"]] },
        werk: ["Denkwerkzeug: Der Projekt-Check", ["Ist die Entscheidung wirklich offen?", "Kennen die Kinder den Rahmen?", "Sind die Leisen und die Jüngsten dabei?", "Erfahren die Kinder, was aus ihrer Entscheidung wurde – und was bleibt danach im Alltag?"]],
        mein: [["Mein Projekt", function () { var t = txt("e8.steck.titel"), f = txt("e8.steck.frage"); return h("div", {}, mein(t, "noch offen – Auftrag 6"), f ? p(esc("Die Frage an die Kinder: " + f), "meta") : null); }],
          ["Mein Satz für die Lernspur", "e8.spur", "noch offen – Auftrag 7"]],
        aufgabe: "Stellen Sie Ihr Praxisprojekt vor. Begründen Sie mit den Kinderrechten und mit dem Unterschied zwischen Fassade und gelebter Demokratie, warum die Kinder darin wirklich mitentscheiden." });
    }),
    aufExtra("e8", "Mit der Praxisanleitung sprechen", {
      auftrag: "Freiwillig – nur wenn Sie möchten. Stellen Sie Ihrer Praxisanleitung Ihre Projektidee in drei Sätzen vor und fragen Sie: Was ist bei uns möglich? Notieren Sie die Antwort in Stichworten, ohne Namen.",
      felder: [["antwort", "Die Rückmeldung in Stichworten", "Möglich ist … Schwierig ist …"], ["anpassung", "Was ändern Sie an Ihrem Steckbrief (Auftrag 6)?", "Ich ändere …"], ["urteil", "Ein Satz zu Ihrem Urteil: Bleibt nach Ihrem Projekt etwas im Alltag – oder droht Fassade?", "Ich denke, …, weil …"]] })
  ]
});
