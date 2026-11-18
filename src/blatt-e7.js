/* ===== Arbeitsblatt Etappe 7 · Haltung zeigen (Doppelstunde, Fassung 5.0) =====
   Erste Stunde der Etappe (Curriculum, Einheiten 21 bis 24): Grenze der Kontroversität, Fakten statt Pauschalurteil,
   Gesprächsmodell in fünf Schritten (benennen – begrenzen – begründen – Brücken bauen – beauftragen) aus dem Curriculum.
   Aktuelle Zahlen: Stand 18.11.2026, mit Quellen – vor jeder Stunde neu prüfen. Bewertet werden Aussagen, nicht Menschen. */

D.e7 = {
  these: "Als Fachkraft muss ich politisch neutral sein. Zu solchen Aussagen sage ich lieber nichts.",
  abruf: [
    ["Was ist gelebte Demokratie – im Unterschied zu Fassade und Willkür?", "Feste Verfahren und eine Haltung im Alltag, die zusammenpassen."],
    ["Was bedeutet Minderheitenschutz?", "Es gibt Rechte, die keine Mehrheit wegstimmen kann – im Grundgesetz vor allem die Menschenwürde (Art. 1 und Art. 79 Abs. 3)."],
    ["Nennen Sie die vier Merkmale demokratischer Haltung.", "Macht offenlegen, Beteiligung ermöglichen, Widerspruch aushalten, Vielfalt als Normalität anerkennen."]
  ],
  grenze: [["streit", "Darüber kann man streiten", "tuerkis"], ["grenze", "Das wertet Menschen ab – hier ist die Grenze", "rot"]],
  aussagen: [
    { id: "c1", text: "»Die Kita sollte länger geöffnet haben.«", zu: "streit", warum: "Eine Meinung zu einer Sachfrage. Man kann dafür und dagegen sein." },
    { id: "c2", text: "»Ich wähle eine andere Partei als Sie.«", zu: "streit", warum: "Die Wahl ist frei und geheim. Über Parteien und ihre Programme darf man streiten." },
    { id: "c3", text: "»Die Ausländer nehmen uns alles weg.«", zu: "grenze", warum: "Eine pauschale Abwertung einer ganzen Gruppe. Sie trifft auch die Kinder, die daneben stehen." },
    { id: "c4", text: "»Ich halte die neue Essensregel für falsch.«", zu: "streit", warum: "Kritik an einer Regel ist erwünscht – so werden Regeln besser." },
    { id: "c5", text: "»Kinder aus solchen Familien sollen nicht mit unseren spielen.«", zu: "grenze", warum: "Ausschluss wegen der Herkunft. Das widerspricht Art. 3 GG und Art. 2 der UN-Kinderrechtskonvention." },
    { id: "c6", text: "»Mir machen die steigenden Preise Angst.«", zu: "streit", warum: "Eine Sorge, über die man sprechen kann. Oft setzt genau hier die Brücke an." }
  ],
  lage: [
    ["Landtagswahl Baden-Württemberg, 8. März 2026", "AfD 18,8 Prozent, drittstärkste Kraft mit 35 Sitzen. Stärkste Kraft: Grüne mit 30,2 Prozent, knapp vor der CDU mit 29,7 Prozent.", "Pressemitteilung des Landes Baden-Württemberg (vorläufiges amtliches Ergebnis); Bundeszentrale für politische Bildung"],
    ["Landtagswahl Sachsen-Anhalt, 6. September 2026", "AfD 43,8 Prozent, stärkste Kraft mit 39 von 83 Sitzen – keine absolute Mehrheit. CDU 17,2 Prozent.", "Ergebnis der Landeswahlleiterin, nach wahlrecht.de; Legal Tribune Online, 07.09.2026"],
    ["Einstufung durch den Verfassungsschutz", "Das Bundesamt für Verfassungsschutz hatte die AfD im Mai 2025 als »gesichert rechtsextremistische Bestrebung« eingestuft. Am 26. Februar 2026 hat das Verwaltungsgericht Köln im Eilverfahren entschieden: Bis zum Urteil im Hauptsacheverfahren darf das Bundesamt die Partei nicht so einstufen und nicht so bezeichnen. Die Verhandlung im Hauptsacheverfahren ist für März 2027 angesetzt.", "VG Köln, Beschluss vom 26.02.2026, Az. 13 L 1109/25, nach ZDF und Legal Tribune Online; Termin nach beck-aktuell, 12.11.2026"]
  ],
  schritte: [
    ["Benennen", "»Ich habe gehört, dass Sie gesagt haben: …«"],
    ["Begrenzen", "»Diese Aussage wertet Menschen wegen ihrer Herkunft ab. Das akzeptieren wir in unserer Einrichtung nicht.«"],
    ["Begründen", "»Unser Auftrag ist, jedes Kind zu schützen und gleiche Würde und Beteiligung zu sichern.«"],
    ["Brücken bauen", "»Was genau macht Ihnen Sorgen? Worauf beziehen Sie sich?«"],
    ["Beauftragen", "»Lassen Sie uns die konkrete Frage mit verlässlichen Informationen klären. Wenn die Abwertung weitergeht, beenden wir das Gespräch und holen Unterstützung dazu.«"]
  ],
  karten: [
    { id: "g1", titel: "Meinungsfreiheit", unter: "beim Elternabend", satz: "»Man darf ja gar nichts mehr sagen.«", anders: "»Sie dürfen Ihre Meinung sagen. Gleichzeitig dürfen Kinder und Erwachsene hier nicht abgewertet werden. Worauf beziehen Sie sich konkret?«" },
    { id: "g2", titel: "Gehorsam", unter: "ein Großvater beim Sommerfest", satz: "»Kinder müssen wieder lernen, sich unterzuordnen.«", anders: "»Kinder brauchen Orientierung und Grenzen – aber auch Rechte, Gehör und Schutz. Gehorsam allein ist kein demokratisches Bildungsziel.«" },
    { id: "g3", titel: "Familie und Geschlecht", unter: "eine Mutter beim Abholen", satz: "»Über Geschlecht und Familie soll man mit Kindern nicht sprechen.«", anders: "»Kinder erleben ganz verschiedene Familien. Wir sprechen altersgerecht darüber, damit alle Kinder dazugehören können.«" },
    { id: "g4", titel: "Nur ein Witz?", unter: "ein Kollege im Team", satz: "»Das war doch nur ein Witz.«", anders: "»Humor kann verletzen. Entscheidend ist nicht nur, wie es gemeint war, sondern auch, wie es wirkt – und ob Menschen abgewertet werden.«" },
    { id: "g5", titel: "Eine Partei", unter: "ein Vater im Gespräch", satz: "»Die AfD sagt wenigstens, was die Menschen denken.«", anders: "»Parteien darf man kritisieren und vergleichen. Menschenfeindliche oder demokratiefeindliche Aussagen prüfen wir aber an den Grundrechten und an ihren Folgen.«" }
  ]
};

blatt({
  id: "e7", etappe: 7, art: "doppelstunde", dauer: 90, titel: "Haltung zeigen",
  frage: "Wie widerspreche ich klar – und schütze dabei die Kinder?",
  karte: "Acht Aufträge · 90 Minuten · am Ende steht Ihre Antwort in fünf Sätzen.",
  darum: "Manche Sätze fallen beiläufig – an der Garderobe, beim Elternabend, im Team. Sie werten Menschen ab, und Kinder hören zu. Heute klären Sie, wo die Grenze zwischen Meinung und Abwertung verläuft, bringen überprüfbare Zahlen ins Gespräch und üben eine Antwort in fünf Schritten: benennen, begrenzen, begründen, Brücken bauen, beauftragen.",
  ziele: ["unterscheiden, worüber man streiten kann und was die Menschenwürde verletzt,", "auf eine abwertende Aussage in fünf Schritten reagieren,", "begründen, warum der Schutz der Kinder vor dem Gespräch kommt."],
  hinweis: "In dieser Stunde geht es um abwertende Aussagen. Sie müssen nichts aus Ihrem Leben erzählen, und niemand muss eigene Erfahrungen mit Abwertung erklären. Wiederholen Sie verletzende Sätze nicht öfter als nötig. Die Klasse vereinbart ein Stopp-Signal – wenn Ihnen etwas zu nahe geht, nutzen Sie es.",
  spur: "e7.spur", spurAnfang: "Wenn jemand Menschen abwertet, …", spurFrage: "Was tun Sie, wenn jemand Menschen abwertet? Ein Satz genügt.",
  kann: ["Ich kann unterscheiden, worüber man streiten kann und was die Menschenwürde verletzt.", "Ich kann auf eine abwertende Aussage in fünf Schritten reagieren.", "Ich kann begründen, warum der Schutz der Kinder vor dem Gespräch kommt."],
  papier: "Digital ist der Kern beim Verdecken und Aufdecken: erst legen, dann die Grenze; erst die eigene Antwort, dann der Vorschlag. Das Rollenspiel läuft ohne Gerät. Die fünf Sätze gibt es als Schreibblatt für den Stift.",
  lk: [
    ["Vor der Stunde", ["<b>Aktualitätscheck:</b> Zahlen und Einstufung in Auftrag 5 neu prüfen (Stand der Seite: 18.11.2026). Das Ergebnis in Baden-Württemberg ist auf der Seite als vorläufig bezeichnet – am endgültigen Ergebnis abgleichen.", "Gesprächsregeln, Vertraulichkeit und ein Stopp-Signal vereinbaren.", "Am Gerät vorne »Alle Aufträge auf diesem Gerät freigeben« wählen. Für Auftrag 6 Gruppen zu dritt bilden."]],
    ["Plenumsstellen", ["Nach Auftrag 2: Was brauchen die beiden Kinder an der Garderobe? Schutz vor Gesprächskomfort.", "Nach Auftrag 3: Positionslinie 0–10.", "Nach Auftrag 4: Wo verläuft die Grenze? Bei welcher Karte war die Klasse uneins?", "Nach Auftrag 5: Woran erkenne ich eine verlässliche Quelle?", "Auftrag 6: Rollenspiel zu dritt – sprechen, antworten, beobachten; zwei Durchgänge mit Rollentausch.", "Nach Auftrag 7: Zwei Antworten vorlesen.", "Auftrag 8: Positionslinie noch einmal; Stimmkarte A · B · C zählen."]],
    ["Wenn die Zeit knapp wird", ["K1 · Auftrag 5 im Plenum am Gerät vorne (– 4 Min.).", "K2 · Auftrag 1 mündlich im Plenum (– 2 Min.).", "K3 · Im Rollenspiel nur ein Durchgang (– 7 Min.)."]],
    ["Status der Inhalte", ["Szene »Beim Abholen«: ausgedacht; die Aussage stammt aus den Gesprächskarten des Curriculums.", "Gesprächsmodell in fünf Schritten und die Gesprächskarten: aus dem Curriculum (09.09.2026), sprachlich leicht angepasst. Die Aussagen in Auftrag 4: ausgedacht.", "Beutelsbacher Konsens: nach der Bundeszentrale für politische Bildung (bpb.de). Art. 1 Abs. 1 und Art. 3 Abs. 3 GG: am Gesetzestext geprüft (18.11.2026). Art. 2 UN-KRK: am Wortlaut abgeglichen (17.11.2026).", "Wahlergebnisse und Einstufung: Stand 18.11.2026, Quellen an jeder Zahl. Die Seite nennt Parteien nur in Fakten mit Quelle; bewertet werden Aussagen, nicht Wählerinnen und Wähler.", "Welche Antwort »zentral« ist und wohin eine Karte gehört, ist ein Vorschlag. Die Grenze bei Menschenwürde und gleichen Rechten ist kein Vorschlag."]]
  ],
  auftraege: [
    aufAbruf("e7", D.e7.abruf, "Heute geht es darum, was Sie tun, wenn Erwachsene genau diese Grundlagen angreifen."),
    aufSzene("e7", 2, { min: 6, danach: function () { return [kasten("sicherung", "Schutz kommt vor dem Gespräch", p("Sind Kinder betroffen, kommt zuerst der Schutz: die Aussage stoppen, die Kinder nicht zu einer Stellungnahme drängen, ihnen Halt geben. Das Gespräch mit dem Erwachsenen kommt danach – ohne Kinder daneben."), p("Nach dem Curriculum: »Schutz vor Dialogkomfort«", "quelle")), kasten("raum", null, p("Zu zweit: Was brauchen die beiden Kinder an der Garderobe jetzt von Ihnen?"))]; } }),
    aufPosition("e7", 3, D.e7.these),
    { id: "a4", nr: "4", kurz: "Die Grenze", phase: "Erarbeitung", name: "Wo die Kontroverse endet", form: "allein, dann zu zweit", min: 14, frei: "ansage", gleich: "Sie klären, worüber man streiten darf – und wo die Menschenwürde die Grenze zieht.", prinzip: "Verdecken – erst legen, dann der Vorschlag", raum: "Bei welcher Karte war die Klasse uneins?",
      fertig: function () { return legenFertig("e7.grenze"); },
      seite: function (box) {
        box.appendChild(kasten("wissen", "Der Beutelsbacher Konsens",
          p("Seit 1976 gelten für politische Bildung in Deutschland drei Grundsätze: <b>Niemanden überwältigen</b> – keine erwünschte Meinung aufdrängen. <b>Kontroverses kontrovers darstellen</b> – was in Wissenschaft und Politik umstritten ist, bleibt auch in der Bildung umstritten. <b>Zum eigenen Urteil befähigen.</b>"),
          p("Ein Gebot, zu allem neutral zu bleiben, ist das nicht. Die Bundeszentrale für politische Bildung betont: Die Kontroversität hat eine Grenze."),
          p("Nach bpb.de, Themenseite »Beutelsbacher Konsens«", "quelle")));
        box.appendChild(kasten("wissen", "Die Grenze steht im Grundgesetz",
          p("»Die Würde des Menschen ist unantastbar.« (Art. 1 Abs. 1 GG)"),
          p("»Niemand darf wegen seines Geschlechtes, seiner Abstammung, seiner Rasse, seiner Sprache, seiner Heimat und Herkunft, seines Glaubens, seiner religiösen oder politischen Anschauungen benachteiligt oder bevorzugt werden.« (Art. 3 Abs. 3 Satz 1 GG)"),
          p("Und für jedes Kind: Die Rechte der UN-Kinderrechtskonvention gelten ohne jede Diskriminierung (Art. 2)."),
          p("GG am Gesetzestext geprüft (18.11.2026) · Art. 2 UN-KRK am Wortlaut abgeglichen (17.11.2026)", "quelle")));
        box.appendChild(kasten("auftrag", null, p("Sechs Sätze, wie sie in einer Kita fallen könnten. Tippen Sie eine Karte an und dann die Spalte. Wenn alle liegen, vergleichen Sie mit dem Vorschlag.")));
        legen(box, "e7.grenze", D.e7.aussagen, D.e7.grenze, { kopf: "Der Vorschlag – wo ist die Grenze?", offen: "Über die linke Spalte darf man streiten. Die rechte ist nicht verhandelbar.", danach: function () {
          return kasten("sicherung", "Die Grenze", p("Kontroverses wird kontrovers besprochen. Menschenwürde und gleiche Rechte stehen nicht zur Abstimmung. Menschenfeindliche Aussagen sind deshalb keine Meinung wie jede andere – sie werden benannt und begrenzt."));
        } });
      } },
    { id: "a5", nr: "5", kurz: "Fakten", phase: "Erarbeitung", name: "Fakten statt Pauschalurteil", form: "zu zweit", min: 10, frei: "ansage", gleich: "Sie prüfen eine Behauptung an Zahlen, die sich nachsehen lassen.", prinzip: "Verdecken · Rückmelden", raum: "Woran erkenne ich eine verlässliche Quelle?",
      fertig: function () { return !!(S.w["e7.fakt"] && S.w["e7.fakt"].fest); },
      seite: function (box) {
        box.appendChild(h("div", { class: "lage" }, h("p", { class: "lage__kopf", text: "Die Lage – Stand 18. November 2026" }),
          h("dl", {}, D.e7.lage.map(function (l) { return h("div", {}, h("dt", { text: l[0] }), h("dd", {}, p(esc(l[1])), p("Quelle: " + esc(l[2]), "quelle"))); })),
          p("Zahlen ändern sich. Vor jeder Verwendung neu prüfen – am besten bei der Quelle selbst.", "meta")));
        box.appendChild(kasten("wissen", "Die Quellenampel", liste(["<b>Grün:</b> die Quelle selbst – Wahlleitung, Statistisches Amt, Gesetzestext, Gericht.", "<b>Gelb:</b> Medien, die ihre Quelle nennen und Fehler korrigieren.", "<b>Rot:</b> ein Beitrag ohne Quelle, ein Bildschirmfoto, »hab ich irgendwo gelesen«."])));
        box.appendChild(h("div", { class: "falltext" }, etikett("ausgedachte Szene"), p("Später, im Gespräch ohne Kinder, sagt der Großvater: »In Sachsen-Anhalt hat doch die Hälfte AfD gewählt. Das ist eben die Meinung des Volkes.«", "falltext__text")));
        box.appendChild(kasten("auftrag", null, p("Legen Sie sich zu zweit fest und begründen Sie in einem Satz.")));
        wahl(box, "e7.fakt", { frage: "Was antworten Sie?", optionen: [
          ["»Das lässt sich nachsehen: Es waren 43,8 Prozent – viel, aber nicht die Hälfte. Und eine Wahl macht es nicht richtig, Menschen abzuwerten.«", "zentral", "Sie bringen eine prüfbare Zahl ein und trennen zwei Fragen: Wie haben die Menschen gewählt? Und: Ist eine Aussage über Menschen akzeptabel? Das Zweite entscheidet keine Wahl."],
          ["»Das ist Propaganda. Darüber rede ich nicht.«", "kaum", "Ein Abbruch ohne Fakten bestätigt oft das Gefühl, nicht gehört zu werden. Abbrechen ist richtig, wenn weiter abgewertet wird – hier gibt es noch eine Brücke."],
          ["»Die Leute dort sind eben so.«", "kaum", "Damit werten Sie selbst eine Gruppe pauschal ab – genau das, dem Sie widersprechen wollen."]], platz: "Wir antworten so, weil …" });
      } },
    { id: "a6", nr: "6", kurz: "Fünf Schritte", phase: "Sichern und üben", name: "Antworten in fünf Schritten", form: "Rollenspiel zu dritt", min: 20, frei: "antwort", nach: "a4", fehlt: "Die fünf Schritte öffnen sich, wenn die Grenze geklärt ist (Auftrag 4).", prinzip: "Verdecken – erst die eigene Antwort, dann der Vorschlag", raum: "Rollenspiel: sprechen, antworten, beobachten",
      fertig: function () { return umformenZahl("e7.karte", D.e7.karten) >= 2; },
      seite: function (box) {
        box.appendChild(kasten("wissen", "Ein Gespräch in fünf Schritten", h("ol", { class: "schritte" }, D.e7.schritte.map(function (s, i) { return h("li", {}, h("span", { class: "schritte__nr", "aria-hidden": "true", text: String(i + 1) }), h("b", { text: s[0] }), h("span", { text: s[1] })); })), p("Gesprächsmodell aus dem Curriculum des Wahlfachs", "quelle")));
        box.appendChild(kasten("auftrag", null, p("Arbeiten Sie zu dritt: Eine Person sagt den Satz, eine antwortet, eine beobachtet, welche der fünf Schritte vorkommen. Schreiben Sie Ihre Antwort danach auf – erst dann sehen Sie einen Vorschlag. Tauschen Sie die Rollen."), p("<b>Fertig sind Sie mit zwei Sätzen.</b> Vorher ein Stopp-Signal vereinbaren.")));
        umformen(box, "e7.karte", D.e7.karten, { ziel: 2, titel: "Fünf Sätze", label: "Meine Antwort:", platz: "»…«", kopf: "Eine mögliche Antwort", frage: "Steckt in Ihrer Antwort eine klare Grenze und eine Brücke?", min: 6 });
        box.appendChild(p("Die Sätze und die Antworten stammen aus den Gesprächskarten des Curriculums, leicht angepasst.", "meta"));
      } },
    { id: "a7", nr: "7", kurz: "Fünf Sätze", phase: "Übertragen und Ausblick", name: "Ihre Antwort in fünf Sätzen", form: "allein", min: 12, frei: "antwort", nach: "a6", schreib: true, fehlt: "Dieser Auftrag öffnet sich nach dem Rollenspiel (Auftrag 6).", prinzip: "keines der sechs – die Seite bringt die Kriterien nach dem Text", raum: "Zwei Antworten vorlesen",
      fertig: function () { return mehrfeldFertig("e7.fuenf"); },
      seite: function (box) {
        box.appendChild(h("div", { class: "falltext" }, etikett("ausgedachte Szene"), p("Zurück an die Garderobe. Die Kinder sind versorgt. Sie bitten den Großvater kurz zur Seite.", "falltext__text")));
        box.appendChild(kasten("auftrag", null, p("Schreiben Sie Ihre Antwort an den Großvater – einen Satz für jeden Schritt.")));
        mehrfeld(box, "e7.fuenf", D.e7.schritte.map(function (s, i) { return ["s" + i, (i + 1) + " · " + s[0], ["»Ich habe gehört, …«", "»Diese Aussage …«", "»Unser Auftrag …«", "»Was genau …«", "»Lassen Sie uns …«"][i]]; }),
          { kriterien: [["Grundlegend", "Die Antwort benennt die Aussage und setzt eine klare Grenze, ohne den Großvater selbst abzuwerten."], ["Sicher", "Sie begründet mit dem Auftrag der Kita – Würde und Schutz jedes Kindes – und baut eine Brücke zu seiner Sorge."], ["Souverän", "Sie schützt die Kinder (kein Gespräch vor ihnen) und nennt einen nächsten Schritt: verlässliche Informationen, Leitung, Unterstützung."]] });
      } },
    aufRueckblick("e7", 8, D.e7.these, "a7", { fehlt: "Der Rückblick öffnet sich, wenn Ihre fünf Sätze fertig sind (Auftrag 7).", vorSpur: function () {
      return kasten("hinweis", "Wenn es ernst wird", p("Bei einem akuten Konflikt gilt: stoppen, schützen, dokumentieren, die Leitung einbeziehen und Beratung nutzen. Sie müssen das nicht allein lösen."), p("Nach dem Curriculum des Wahlfachs · Beratungsstellen vor Ort nennt Ihre Lehrkraft", "quelle"));
    } }),
    aufZf("e7", "a8", function (box) {
      zfDaten(box, { kopf: "Etappe 7 · Haltung zeigen", frage: "Wie widerspreche ich klar – und schütze dabei die Kinder?",
        kern: "Kontroverses bleibt kontrovers. Menschenwürde und gleiche Rechte stehen aber nicht zur Abstimmung. Wenn Kinder betroffen sind, kommt zuerst der Schutz, dann das Gespräch: benennen – begrenzen – begründen – Brücken bauen – beauftragen.",
        begriffe: [
          ["Beutelsbacher Konsens", "Drei Grundsätze politischer Bildung (1976): niemanden überwältigen, Kontroverses kontrovers darstellen, zum eigenen Urteil befähigen. Kein Gebot, zu allem neutral zu sein."],
          ["Menschenwürde", "»Die Würde des Menschen ist unantastbar.« (Art. 1 Abs. 1 GG) – keine Mehrheit kann sie abschaffen."],
          ["Diskriminierungsverbot", "Niemand darf wegen Herkunft, Sprache, Glauben und weiterer Merkmale benachteiligt werden (Art. 3 Abs. 3 GG; für Kinder Art. 2 UN-KRK)."],
          ["Populismus", "Eine Art, Politik zu machen: »das wahre Volk« gegen »die da oben« oder »die anderen«, dazu einfache Antworten."],
          ["Gruppenbezogene Menschenfeindlichkeit", "Menschen werden abgewertet, weil sie einer Gruppe zugerechnet werden."],
          ["Quellenampel", "Grün: die Quelle selbst · Gelb: Medien mit Quellenangabe · Rot: Beitrag ohne Quelle."]],
        tabelle: { kopf: ["Schritt", "So kann es klingen"], zeilen: D.e7.schritte },
        werk: ["Denkwerkzeug: Erst schützen, dann sprechen", ["Sind Kinder betroffen? Dann zuerst stoppen und schützen.", "Ist die Aussage kontrovers – oder wertet sie Menschen ab?", "Welcher der fünf Schritte kommt jetzt – und was ist mein nächster Schritt?"]],
        mein: [["Meine Antwort in fünf Sätzen", function () { var t = D.e7.schritte.map(function (s, i) { return txt("e7.fuenf.s" + i); }).filter(function (x) { return String(x).trim(); }); return t.length ? h("ol", {}, t.map(function (x) { return h("li", { text: x }); })) : mein("", "noch offen – Auftrag 7"); }],
          ["Mein Satz für die Lernspur", "e7.spur", "noch offen – Auftrag 8"]],
        aufgabe: "Ein Elternteil wertet beim Abholen Menschen wegen ihrer Herkunft ab; Kinder stehen daneben. Begründen Sie, wie Sie handeln, und formulieren Sie Ihre Antwort in fünf Schritten." });
    }),
    aufExtra("e7", "Eine Aussage, die ich gehört habe", {
      auftrag: "Freiwillig – nur wenn Sie möchten. Denken Sie an eine Aussage, bei der Sie gern etwas gesagt hätten. Schreiben Sie sie ohne Namen auf. Eine Umschreibung genügt – verletzende Wörter müssen Sie nicht wiederholen.",
      felder: [["aussage", "Die Aussage, umschrieben", "Jemand sagte sinngemäß, dass …"], ["einordnung", "Kontrovers oder Grenze? Nennen Sie die Fundstelle (Auftrag 4).", "Das ist …, weil …"], ["antwort", "Ihr erster Satz nach den fünf Schritten (Auftrag 6):", "»…«"]] })
  ]
});
