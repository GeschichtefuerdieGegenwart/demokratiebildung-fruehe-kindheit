/* ===== Etappe 3 · Arbeitsblatt »Kinder haben Rechte« (Doppelstunde, 90 Minuten) =====
   Tiefgang aus dem Impulsvortrag, Teil II, Kapitel 4 (Korczak) und 5 (der gesetzliche Auftrag), dazu die Ausstellung
   »Kinderrechte im Kita-Alltag« (aus der Mitmach-Ausstellung zum Tag der Kinderrechte, für Fachkräfte umgebaut).
   Status: Szenen ausgedacht; Einstufungen und Rückmeldetexte Vorschlag; Rechtsangaben mit Prüfvermerk an der Stelle. */
D.e3 = {
  abruf: [
    ["Gerhard Himmelmann unterscheidet drei Formen der Demokratie. Welche?", "Herrschaftsform, Gesellschaftsform und Lebensform. Kinder können alle drei schon in der Kita erleben."],
    ["Warum ist Demokratie mehr als der Wille der Mehrheit?", "Sie beruht auf der Würde jedes Menschen. Grundrechte schützen auch die, die überstimmt wurden – keine Mehrheit kann sie wegstimmen."],
    ["Nennen Sie eine Kita-Situation, in der Kinder Demokratie als Lebensform erleben.", "Zum Beispiel: Beim Essen wird gefragt, wie viel ein Kind möchte. Ein Streit wird gemeinsam gelöst. Das Nein beim Wickeln wird gehört."]
  ],
  these: "»Wer Kinder liebt, braucht keine Kinderrechte.«",
  gesetzFall: "Eine Kita hat keinen festen Weg, auf dem Kinder sich beschweren können. Die Kinder dürfen mit ihren Bezugspersonen sprechen – mehr ist nicht vereinbart.",
  gesetzWahl: [
    ["Nichts. Beschwerdewege sind eine gute Idee, aber freiwillig.", "kaum", "Naheliegend – lange galt Beteiligung als Qualitätsmerkmal besonders engagierter Häuser. Seit 2012 steht sie aber im Gesetz: als Voraussetzung der Betriebserlaubnis."],
    ["Die Kita hat ein Qualitätsproblem, das sie angehen sollte.", "begruendbar", "Stimmt – und es ist mehr als eine Frage der Qualität. Ohne geeignete Verfahren für Beteiligung und Beschwerde fehlt eine Voraussetzung der Betriebserlaubnis."],
    ["Ihr fehlt eine Voraussetzung für die Betriebserlaubnis.", "zentral", "So steht es in § 45 SGB VIII: Zur Erlaubnis gehören in der Regel geeignete Verfahren der Beteiligung und der Beschwerde – innerhalb und außerhalb der Einrichtung – und ein Konzept zum Schutz vor Gewalt. Korczaks Idee ist heute Aufsichtsrecht."]
  ],
  kette: [
    { titel: "UN-Kinderrechtskonvention", unter: "Artikel 12",
      einfach: "Jedes Kind, das sich eine eigene Meinung bilden kann, darf sie in allen Angelegenheiten sagen, die es betreffen. Erwachsene müssen sie angemessen berücksichtigen – je nach Alter und Reife. <b>Eine Altersgrenze nennt der Artikel nicht.</b>",
      wortlaut: "»Die Vertragsstaaten sichern dem Kind, das fähig ist, sich eine eigene Meinung zu bilden, das Recht zu, diese Meinung in allen das Kind berührenden Angelegenheiten frei zu äußern, und berücksichtigen die Meinung des Kindes angemessen und entsprechend seinem Alter und seiner Reife.« (Art. 12 Abs. 1)",
      status: "Wortlaut der amtlichen deutschen Übersetzung abgeglichen am 17.11.2026" },
    { titel: "Sozialgesetzbuch VIII", unter: "§ 8 Absatz 1",
      einfach: "Die Kinder- und Jugendhilfe muss Kinder an allen Entscheidungen beteiligen, die sie betreffen – so, wie es ihrem Entwicklungsstand entspricht.",
      wortlaut: "»Kinder und Jugendliche sind entsprechend ihrem Entwicklungsstand an allen sie betreffenden Entscheidungen der öffentlichen Jugendhilfe zu beteiligen.« (§ 8 Abs. 1 Satz 1)",
      status: "am Gesetzestext geprüft (01.11.2026)" },
    { titel: "Sozialgesetzbuch VIII", unter: "§ 45 · Betriebserlaubnis",
      einfach: "Eine Kita braucht eine Erlaubnis, um arbeiten zu dürfen. Dazu gehört in der Regel: Kinder können sich beteiligen und beschweren – auf festen Wegen, in der Kita und außerhalb. Und es gibt ein Konzept zum Schutz vor Gewalt.",
      wortlaut: "Die Erlaubnis setzt voraus, dass das Wohl der Kinder in der Einrichtung gewährleistet ist. Davon ist nach Absatz 2 in der Regel auszugehen, wenn unter anderem »geeignete Verfahren der Selbstvertretung und Beteiligung sowie der Möglichkeit der Beschwerde in persönlichen Angelegenheiten innerhalb und außerhalb der Einrichtung« gewährleistet werden (Abs. 2 Satz 2 Nr. 4).",
      status: "Zitat am Gesetzestext geprüft (01.11.2026) · Rahmen sinngemäß" }
  ],
  zeit: [
    ["20.11.1989", "Die Vereinten Nationen nehmen die Kinderrechtskonvention an. Seitdem ist der 20. November der Internationale Tag der Kinderrechte."],
    ["5.4.1992", "Die Konvention gilt in Deutschland."],
    ["1.1.2012", "Verfahren für Beteiligung und Beschwerde werden Voraussetzung der Betriebserlaubnis (Bundeskinderschutzgesetz)."],
    ["10.6.2021", "Erweitert um Gewaltschutzkonzept und Beschwerde auch außerhalb der Einrichtung (Kinder- und Jugendstärkungsgesetz)."]
  ],
  stationen: [
    { id: "p1", farbe: "glut", satz: "Ich werde gemocht, so wie ich bin.",
      quelle: "Kein einzelner Paragraf. Die Präambel der UN-Kinderrechtskonvention sagt, dass ein Kind »in einer Familie und umgeben von Glück, Liebe und Verständnis aufwachsen sollte«. Verwandt: Artikel 2 – die Rechte gelten für jedes Kind ohne jede Diskriminierung.",
      status: "Präambel und Art. 2 am Wortlaut der amtlichen Übersetzung abgeglichen (17.11.2026)",
      szene: "Morgens im Flur. Ben kommt wie oft als Letzter. Die Fachkraft ruft, ohne aufzusehen: »Na, auch schon da? Dann beeil dich mal.« Die Kinder vor ihm wurden mit Namen und einem Lächeln begrüßt.",
      urteil: { s: ["begruendbar", "Stimmt: Wer vor anderen bloßgestellt wird, braucht Schutz vor Beschämung. Hier fehlt aber zuerst etwas, das jedes Kind braucht: gesehen zu werden."],
                f: ["zentral", "Förderung beginnt mit Beziehung. Ein Kind, das sich willkommen fühlt, kann sich auf den Tag einlassen."],
                b: ["kaum", "Hier wird nichts entschieden, bei dem Ben mitreden könnte. Schauen Sie auf das, was ihm an diesem Morgen fehlt."] },
      kita: ["Jedes Kind wird mit Namen begrüßt – auch das, das spät kommt.", "Kritik gilt dem Verhalten, nie dem Kind.", "Im Team fragen: Welches Kind habe ich diese Woche kaum gesehen?"] },
    { id: "p2", farbe: "kuli", satz: "Ich darf Nein sagen.",
      quelle: "UN-Kinderrechtskonvention, Artikel 12 (die Meinung des Kindes) und Artikel 19 (Schutz vor jeder Form körperlicher oder geistiger Gewaltanwendung – auch solange das Kind in der Obhut von Personen ist, die es betreuen).",
      status: "Art. 12 und 19 am Wortlaut der amtlichen Übersetzung abgeglichen (17.11.2026)",
      szene: "Lina ist hingefallen und weint. Eine Fachkraft will sie trösten und hebt sie auf den Schoß. Lina macht sich steif und dreht den Kopf weg. Die Fachkraft hält sie fest: »Komm, ist doch gleich wieder gut.«",
      urteil: { s: ["zentral", "Über den eigenen Körper bestimmt das Kind – auch beim Trösten. Ein Nein, das gehört wird, schützt: Kinder lernen, dass ihre Grenze zählt."],
                f: ["kaum", "Lina braucht Trost, das stimmt. Das Problem ist aber nicht fehlende Unterstützung, sondern eine Grenze, die übergangen wird."],
                b: ["begruendbar", "Stimmt: Linas Körper sagt etwas, und es wird nicht gehört. Weil es um ihre körperliche Grenze geht, steht der Schutz an erster Stelle."] },
      kita: ["Fragen, bevor man anfasst: »Magst du auf den Schoß – oder soll ich mich neben dich setzen?«", "Ein Nein ohne Worte gilt auch: wegdrehen, steif werden, weinen.", "Ein Stopp-Zeichen, das jedem Kind gehört."] },
    { id: "p3", farbe: "schwach", satz: "Niemand darf mir wehtun – auch nicht mit Worten.",
      quelle: "UN-Kinderrechtskonvention, Artikel 19. Für Eltern gilt § 1631 Absatz 2 BGB: Das Kind hat ein Recht auf Pflege und Erziehung unter Ausschluss von Gewalt, körperlichen Bestrafungen, seelischen Verletzungen und anderen entwürdigenden Maßnahmen. Für Kitas gehört ein Konzept zum Schutz vor Gewalt zur Betriebserlaubnis (§ 45 Abs. 2 Satz 2 Nr. 4 SGB VIII).",
      status: "§ 1631 BGB (11.11.2026) und § 45 SGB VIII (01.11.2026) am Gesetzestext geprüft",
      szene: "Tom hat beim Essen Wasser verschüttet, zum zweiten Mal. Die Fachkraft sagt laut vor allen: »Du schon wieder! Setz dich da drüben allein hin, bis du dich benehmen kannst.« Die anderen Kinder schauen zu.",
      urteil: { s: ["zentral", "Beschämen vor der Gruppe ist eine seelische Verletzung. Das Recht auf Schutz kann nicht überstimmt werden – auch nicht durch Stress am Mittagstisch."],
                f: ["begruendbar", "Stimmt: Tom bräuchte Hilfe, etwa einen kleineren Krug. Zuerst muss aber die Beschämung aufhören."],
                b: ["kaum", "Mitreden wäre gut – aber erst, wenn Tom nicht mehr vor allen bloßgestellt ist."] },
      kita: ["Kein Kind wird vor anderen bloßgestellt, ausgeschlossen oder festgehalten.", "Unter vier Augen klären, was passiert ist.", "Im Team ansprechen, wenn jemand diese Grenze überschreitet."] },
    { id: "p4", farbe: "h", satz: "Ich werde gefragt und gehört.",
      quelle: "UN-Kinderrechtskonvention, Artikel 12. § 8 Absatz 1 SGB VIII. Verfahren für Beteiligung und Beschwerde als Voraussetzung der Betriebserlaubnis: § 45 Abs. 2 Satz 2 Nr. 4 SGB VIII.",
      status: "Art. 12 am Wortlaut abgeglichen (17.11.2026) · § 8 und § 45 SGB VIII am Gesetzestext geprüft (01.11.2026)",
      szene: "Am Montag ist der Bauraum umgeräumt. Das Team hat am Wochenende neue Regale aufgestellt und die große Baustelle der Kinder abgebaut. Emil steht in der Tür: »Wo ist unsere Burg?«",
      urteil: { s: ["kaum", "Niemand wurde verletzt oder bedroht. Schauen Sie darauf, wer bei dieser Entscheidung gefehlt hat."],
                f: ["begruendbar", "Stimmt: Neue Regale können das Spiel fördern. Über den Raum der Kinder wurde aber ohne die Kinder entschieden."],
                b: ["zentral", "Der Raum betrifft die Kinder unmittelbar. Sie hätten gefragt werden müssen – mindestens informiert, besser beteiligt."] },
      kita: ["Vor Veränderungen fragen: Was soll bleiben? Was stört euch?", "Entscheidungen sichtbar machen – mit Fotos oder Symbolen an der Wand.", "Jede Beschwerde bekommt eine Antwort."] },
    { id: "p5", farbe: "gut", satz: "Ich darf spielen und mich ausruhen.",
      quelle: "UN-Kinderrechtskonvention, Artikel 31: das Recht auf Ruhe und Freizeit, auf Spiel und altersgemäße aktive Erholung.",
      status: "Art. 31 am Wortlaut der amtlichen Übersetzung abgeglichen (17.11.2026)",
      szene: "Nach dem Mittagessen legen sich alle hin. Mia ist nicht müde. Sie liegt mit offenen Augen auf der Matte und flüstert mit ihrer Nachbarin. Die Fachkraft: »Augen zu, jetzt wird geschlafen.«",
      urteil: { s: ["begruendbar", "Stimmt: Über Schlaf bestimmt der eigene Körper. Im Kern geht es aber darum, was Mia jetzt für ihre Entwicklung braucht."],
                f: ["zentral", "Ruhe und Spiel gehören zu den Förderrechten. Kinder brauchen unterschiedlich viel Ruhe – gleiche Behandlung ist hier nicht automatisch gerecht."],
                b: ["begruendbar", "Stimmt: Mia könnte mitentscheiden, wie sie ausruht. Das ist der Weg. Das Recht dahinter ist das auf Ruhe und Spiel."] },
      kita: ["Ausruhen ja, schlafen müssen nein: ein leiser Platz mit Büchern für Kinder, die wach sind.", "Freies Spiel nicht ohne Not unterbrechen.", "Mit den Kindern klären: Woran merkst du, dass du müde bist?"] },
    { id: "p6", farbe: "g", satz: "Alle meine Gefühle sind erlaubt.",
      quelle: "Steht so in keinem Gesetz. Es folgt aus der Würde des Kindes und aus dem Recht, gehört zu werden (Artikel 12 der UN-Kinderrechtskonvention).",
      status: "Alltagsrecht – kein Gesetzestext",
      szene: "Abschied am Morgen. Jonas klammert sich an seinen Vater und weint. Die Fachkraft nimmt ihn an der Hand: »Ist doch nicht schlimm. Große Jungs weinen nicht.«",
      urteil: { s: ["begruendbar", "Stimmt: Der Satz beschämt Jonas. Und er gibt ein enges Bild davon weiter, wie Jungen zu sein haben."],
                f: ["zentral", "Kinder lernen den Umgang mit Gefühlen, wenn Erwachsene sie benennen und aushalten. »Du bist traurig, dass Papa geht« fördert. »Nicht schlimm« nimmt das Gefühl weg."],
                b: ["kaum", "Jonas kann nicht entscheiden, ob der Vater geht. Er kann aber erleben, dass sein Gefühl ernst genommen wird."] },
      kita: ["Gefühle benennen, statt sie kleinzureden.", "Das Gefühl ist erlaubt, nicht jedes Verhalten: »Du darfst wütend sein. Hauen geht nicht.«", "Sätze über »richtige Jungen« und »richtige Mädchen« im Team sammeln und ersetzen."] }
  ],
  alltag: [
    { id: "a1", name: "Wickeln", oft: "Das Kind wird aus dem Spiel geholt und gewickelt, während die Fachkraft mit einer Kollegin spricht.",
      braucht: "Eine Ankündigung, Blickkontakt und eine Wahl.", weg: "»Ich möchte dich gleich wickeln. Spielst du noch fertig? Wer soll dich wickeln?«", recht: "Ich darf Nein sagen · Ich werde gefragt und gehört" },
    { id: "a2", name: "Anziehen", oft: "»Zieh die Jacke an, es ist kalt.« Das Kind sagt: »Mir ist nicht kalt.«",
      braucht: "Die eigene Erfahrung prüfen dürfen.", weg: "»Geh kurz vor die Tür und fühl nach. Reicht dir die Jacke, oder brauchst du etwas Dickeres?«", recht: "Ich werde gefragt und gehört" },
    { id: "a3", name: "Essen", oft: "Der Teller wird gefüllt hingestellt. »Probieren musst du.«",
      braucht: "Selbst bestimmen, was und wie viel in den eigenen Körper kommt.", weg: "»Wie viel möchtest du haben? Magst du probieren – oder heute nicht?«", recht: "Ich darf Nein sagen" },
    { id: "a4", name: "Wut", oft: "Ein Kind wirft sich schreiend auf den Boden. »Hör sofort auf, sonst gehst du raus.«",
      braucht: "Jemanden, der bleibt, bis der Sturm vorbei ist.", weg: "In der Nähe bleiben, wenig reden: »Du bist richtig wütend. Ich bin da.« Später gemeinsam schauen, was los war.", recht: "Alle meine Gefühle sind erlaubt · Niemand darf mir wehtun" },
    { id: "a5", name: "Teilen", oft: "Zwei Kinder ziehen am selben Laufrad. »Jetzt ist Schluss, du gibst es ab.«",
      braucht: "Hilfe beim Aushandeln, kein Urteil von oben.", weg: "»Ihr wollt beide das Rad. Wie können wir das lösen, sodass es für beide passt?«", recht: "Ich werde gefragt und gehört" },
    { id: "a6", name: "Morgenkreis", oft: "Ein Kind will nicht mitsingen. »Alle machen mit.«",
      braucht: "Dabei sein dürfen, ohne mitmachen zu müssen.", weg: "»Heute keine Lust? Dann setz dich dazu und hör zu – oder geh leise in die Bauecke.«", recht: "Ich darf Nein sagen" }
  ],
  spalten: [["a", "Das Kind entscheidet allein"], ["m", "Die Kinder entscheiden mit"], ["e", "Erwachsene entscheiden – und erklären es"], ["o", "Erwachsene entscheiden – ohne Erklärung"]],
  karten: [
    ["k1", "Wann ich auf die Toilette gehe", "Über den eigenen Körper bestimmt das Kind. Wo es Grenzen gibt, etwa vor einem Ausflug, lassen sie sich erklären."],
    ["k2", "Was ich anziehe", "Die eigene Erfahrung prüfen dürfen: »Fühl mal draußen nach.« Die Verantwortung für die Gesundheit bleibt bei Ihnen."],
    ["k3", "Wie viel ich esse – und ob ich probiere", "Selbst bestimmen, was und wie viel in den eigenen Körper kommt. Probierzwang verträgt sich damit nicht."],
    ["k4", "Ob ich mittags schlafe oder nur ausruhe", "Ausruhen ja, schlafen müssen nein – Kinder brauchen unterschiedlich viel Ruhe."],
    ["k5", "Wer mich wickelt oder mir beim Umziehen hilft", "Für ein Krippenkind ist die Wahl, wer es wickelt, eine grundlegende Erfahrung: Ich bestimme über meinen Körper mit."],
    ["k6", "Mit wem und was ich im Freispiel spiele", "Freies Spiel heißt: Das Kind wählt. Erwachsene greifen ein, wo jemand ausgeschlossen oder verletzt wird."],
    ["k7", "Wie unser Gruppenraum eingerichtet wird", "Der Raum gehört auch den Kindern – mindestens informieren, besser beteiligen (wie bei Plakat 4)."],
    ["k8", "Welche Regeln in der Gruppe gelten", "»Passt die Regel noch für uns? Sollen wir sie ändern?« – eine Frage, die schon Kinder beantworten können."]
  ]
};

blatt({
  id: "e3", etappe: 3, art: "doppelstunde", dauer: 90, titel: "Kinder haben Rechte",
  frage: "Geben wir Kindern Rechte – oder haben sie welche?",
  karte: "Neun Aufträge · 90 Minuten · mit der Ausstellung »Kinderrechte im Kita-Alltag« · am Ende steht Ihr Plakat für die eigene Kita.",
  darum: "Am 20. November 1989 haben die Vereinten Nationen die Kinderrechtskonvention angenommen. Heute prüfen Sie, was diese Rechte im Kita-Alltag bedeuten: am Beispiel eines Pädagogen, der sich selbst anzeigte, an Gesetzen, die strenger sind, als viele denken – und an sechs Szenen aus einer Ausstellung. Am Ende steht Ihr eigenes Kinderrechte-Plakat für Ihre Kita.",
  ziele: ["erklären, warum Kinder ihre Rechte nicht geschenkt bekommen, sondern haben,", "eine Kita-Szene mit den drei Prüfsteinen Schutz, Förderung und Beteiligung prüfen,", "Artikel 12 der UN-Kinderrechtskonvention in einen Satz für den Kita-Alltag übersetzen."],
  hinweis: "Zwei Aufträge fragen nach Ihrer Praxisstelle. Das ist freiwillig – Sie können auch an eine ausgedachte Kita denken. Schreiben Sie keine Namen von Kindern, Familien, Kolleginnen oder Kollegen auf.",
  spur: "e3.spur", spurAnfang: "Kinder haben Rechte. Für meine Arbeit heißt das: …", spurFrage: "Was heißt »Kinder haben Rechte« für Ihre Arbeit? Ein Satz genügt.",
  lk: [
    ["Vor der Stunde", ["Am Gerät vorne »Alle Aufträge auf diesem Gerät freigeben« wählen – dann können Sie frei vor- und zurückgehen.", "Vorschlag: Wer die Plakate aus der Mitmach-Ausstellung zum Tag der Kinderrechte hat, hängt sie im Raum auf. Die Paare gehen herum und legen sich am Gerät fest."]],
    ["Plenumsstellen", ["Nach Auftrag 2: Positionslinie 0–10, zwei bis drei Begründungen.", "Nach Auftrag 4: Was hat am Gesetz überrascht? Zwei Übersetzungen von Artikel 12 vorlesen – Recht oder Erlaubnis?", "Nach Auftrag 5: Rundgang. Jedes Paar stellt ein Plakat vor; Handzeichen je Prüfstein; über die Plakate sprechen, bei denen die Klasse uneins war.", "Nach Auftrag 6: Plakate nebeneinander zeigen (eines am Gerät vorne).", "Auftrag 8: Positionslinie noch einmal; Stimmkarte A · B · C zählen."]],
    ["Wenn die Zeit knapp wird", ["K1 · Auftrag 7 als Praxisauftrag bis zur nächsten Stunde (– 8 Min.).", "K2 · Auftrag 1 mündlich im Plenum (– 2 Min.).", "K3 · Rundgang mit zwei statt drei Plakaten; das eigene Plakat öffnen die Lernenden dann über »Auf Ansage trotzdem öffnen« (– 7 Min.)."]],
    ["Status der Inhalte", ["Szenen der Plakate, Alltagskarten und der Fall in Auftrag 4: ausgedacht.", "Welcher Prüfstein »zentral« ist, ist ein Vorschlag – gute Begründungen für eine andere Wahl zählen.", "Art. 12, 19, 31, Art. 2 und Präambel der UN-Kinderrechtskonvention: am Wortlaut der amtlichen Übersetzung abgeglichen (17.11.2026). § 8 und § 45 SGB VIII: am Gesetzestext geprüft (01.11.2026). § 1631 Abs. 2 BGB: geprüft (11.11.2026).", "Korczak-Zitat, Träger-Leitbild und Kinderzitat: im Impulsvortrag zitiert, am Original noch zu prüfen. Daten zu Korczak: socialnet-Lexikon »Pädagogik der Achtung« und Jüdische Allgemeine (01.08.2022), abgeglichen 17.11.2026.", "Nicht übernommen: § 22a Abs. 1 SGB VIII aus dem Vortrag – der Absatz regelt die Qualitätssicherung. Die Interessen und Bedürfnisse des einzelnen Kindes stehen in § 22 Abs. 3 SGB VIII."]]
  ],
  auftraege: [
    { id: "a1", nr: "1", kurz: "Erst erinnern", name: "Erst erinnern", form: "allein · ohne Unterlagen", min: 4, frei: "offen", prinzip: "Verdecken", raum: "–",
      fertig: function () { return abrufFertig("e3.abruf", 3); },
      seite: function (box) {
        box.appendChild(kasten("auftrag", null, p("Beantworten Sie jede Frage zuerst selbst – im Kopf, auf dem Zettel oder im Feld. Decken Sie erst danach auf.")));
        abruf(box, "e3.abruf", D.e3.abruf);
        box.appendChild(p("Heute geht es um das, was in der Mitte des Kompasses steht: <b>die Rechte der Kinder</b>.", "lauf"));
      } },

    { id: "a2", nr: "2", kurz: "Ihre Position", name: "Ihre Position", form: "allein, dann Linie im Raum", min: 5, frei: "offen", prinzip: "Verdecken – die Festlegung bleibt stehen", raum: "Positionslinie 0–10",
      fertig: function () { return !!(S.w["e3.vor"] && S.w["e3.vor"].fest); },
      seite: function (box) {
        box.appendChild(kasten("auftrag", null, p("Lesen Sie den Satz. Legen Sie fest, wie sehr Sie zustimmen, und begründen Sie in einem Satz. Am Ende des Blatts kommen Sie hierher zurück.")));
        skala(box, "e3.vor", { satz: D.e3.these, danach: function () { return kasten("raum", null, p("Stellen Sie sich auf die Linie im Raum: links 0, rechts 10. Zwei oder drei Personen sagen, warum sie dort stehen.")); } });
        box.appendChild(p("Ein zugespitzter Satz zum Nachdenken – kein Zitat.", "meta"));
      } },

    { id: "a3", nr: "3", kurz: "Korczak", name: "Ein Erzieher zeigt sich selbst an", form: "allein, dann zu zweit", min: 10, frei: "antwort", nach: "a2", fehlt: "Legen Sie zuerst Ihre Position in Auftrag 2 fest.", prinzip: "Verdecken · Rückmelden", raum: "Zu zweit: Begründungen vergleichen",
      fertig: function () { return !!(S.w["e3.korczak"] && S.w["e3.korczak"].fest); },
      seite: function (box) {
        var e = D.etappen[2];
        box.appendChild(h("div", { class: "falltext" }, etikett(e.szene.status), h("h2", { class: "falltext__titel", text: e.szene.titel }), e.szene.text.map(function (t) { return p(t, "falltext__text"); })));
        box.appendChild(kasten("auftrag", null, p("Legen Sie sich fest und begründen Sie Ihre Wahl in einem Satz. Vergleichen Sie danach zu zweit.")));
        wahl(box, "e3.korczak", { frage: e.wahl.frage, optionen: e.wahl.optionen, danach: function () {
          return [
            kasten("erklaerung", "Eine Republik der Kinder",
              p("Korczak gab den Kindern in seinem Waisenhaus eine Verfassung, ein Parlament und ein Gericht. Sein Ziel: Die Kinder sollten nicht von den Launen der Erwachsenen abhängen. Über die Willkür der Erzieher schreibt er: »Diesem Despotismus müssen Grenzen gesetzt werden.«"),
              p("Man nennt das eine <b>konstitutionelle Pädagogik</b>: Die Rechte der Kinder stehen in einer Verfassung und gelten verbindlich – auch für die Erwachsenen."),
              p("Zitat nach Korczak (1999), S. 273, im Impulsvortrag zitiert – am Original noch zu prüfen.", "quelle")),
            kasten("sicherung", null, p("»Demokratiebildung ist nicht die Frage, ob wir Kindern Rechte ›geben‹. Die Rechte haben sie. Die Frage ist, ob wir Räume schaffen, in denen sie diese Rechte auch ausüben können.«"), p("Aus dem Impulsvortrag, Kapitel 4", "quelle")),
            h("details", { class: "mehr" }, h("summary", { text: "Wer war Janusz Korczak?" }),
              p("Janusz Korczak (1878 oder 1879 – 1942) war Arzt, Pädagoge und Kinderbuchautor in Warschau. Ab 1912 leitete er das jüdische Waisenhaus Dom Sierot. Im August 1942 deportierten die deutschen Besatzer ihn mit etwa 200 Kindern und den Mitarbeitenden aus dem Warschauer Ghetto in das Vernichtungslager Treblinka. Dort wurden sie ermordet."),
              p("Quellen: socialnet Lexikon »Pädagogik der Achtung«; Jüdische Allgemeine, 01.08.2022 · abgeglichen am 17.11.2026", "quelle")),
            kasten("raum", null, p("Zu zweit: Vergleichen Sie Ihre Begründungen. Kennen Sie eine Regel aus Ihrer Praxisstelle, die Kinder vor der Tagesform von Erwachsenen schützt? (freiwillig, ohne Namen)"))
          ];
        } });
      } },

    { id: "a4", nr: "4", kurz: "Das Gesetz", name: "Was das Gesetz verlangt", form: "allein", min: 12, frei: "ansage", gleich: "Sie vermuten, was das Gesetz von einer Kita verlangt – und prüfen es am Wortlaut.", prinzip: "Verdecken · Stufen (zwei Lesestufen)", raum: "Was hat überrascht? Zwei Übersetzungen vorlesen",
      fertig: function () { return !!(S.w["e3.gesetz"] && S.w["e3.gesetz"].fest && S.w["e3.uebersetz"] && S.w["e3.uebersetz"].zu); },
      seite: function (box) {
        box.appendChild(h("h2", { class: "abschnitt", text: "1 · Erst vermuten" }));
        box.appendChild(h("div", { class: "falltext" }, etikett("ausgedachter Fall"), p(D.e3.gesetzFall, "falltext__text")));
        var weiter = h("div", { class: "gesetz-weiter" });
        wahl(box, "e3.gesetz", { frage: "Was folgt daraus?", optionen: D.e3.gesetzWahl, sicherheit: true, platz: "Ich vermute das, weil …", danach: function (neu) { setTimeout(function () { kette(weiter, neu); }, 0); return null; } });
        box.appendChild(weiter);
        if (!(S.w["e3.gesetz"] && S.w["e3.gesetz"].fest)) weiter.appendChild(p("Teil 2 und 3 öffnen sich nach Ihrer Vermutung.", "meta gesperrt-hinweis"));
      } },

    { id: "a5", nr: "5", kurz: "Rundgang", name: "Rundgang durch die Ausstellung", form: "zu zweit an einem Gerät", min: 25, frei: "ansage", gleich: "Sie gehen durch die Ausstellung »Kinderrechte im Kita-Alltag«: sechs Plakate, sechs Szenen.", prinzip: "Rückmelden – je Prüfstein mit Begründung", raum: "Jedes Paar stellt ein Plakat vor; Handzeichen je Prüfstein",
      fertig: function () { return plakateFest() >= 3; },
      seite: rundgang },

    { id: "a6", nr: "6", kurz: "Ihr Plakat", name: "Ihr Plakat für die Kita", form: "allein", min: 12, frei: "antwort", nach: "a5", fehlt: "Ihr Plakat öffnet sich, sobald Sie sich bei drei Plakaten der Ausstellung festgelegt haben (Auftrag 5).", prinzip: "keines der sechs – Papierfrage: geht auch auf Papier; die Seite bringt die Kriterien nach dem Text und den Ausdruck", raum: "Plakate nebeneinander",
      fertig: function () { return !!(S.w["e3.plakat"] && S.w["e3.plakat"].zu); },
      seite: plakatSeite },

    { id: "a7", nr: "7", kurz: "Ihre Kita", name: "Worüber dürfen Kinder bei Ihnen bestimmen?", form: "allein · freiwillig mit Praxisbezug", min: 8, frei: "offen", prinzip: "Ihr Bild auf einen Blick – Legen mit Spalten", raum: "Zu zweit: Wo verlangen die Kinderrechte eine andere Spalte?",
      fertig: function () { var w = S.w["e3.kita"]; return !!(w && w.lage && Object.keys(w.lage).length >= 6); },
      seite: kitaSeite },

    { id: "a8", nr: "8", kurz: "Rückblick", name: "Rückblick und Lernspur", form: "allein, dann Linie im Raum", min: 6, frei: "antwort", nach: "a6", fehlt: "Der Rückblick öffnet sich, wenn Ihr Plakat fertig ist (Auftrag 6).", prinzip: "Verdecken – Rückkehr zur ersten Festlegung", raum: "Positionslinie; Stimmkarte zählen",
      fertig: function () { return !!(S.w["e3.nach"] && S.w["e3.nach"].fest) && woerter(txt("e3.spur")) >= 8; },
      seite: function (box) {
        box.appendChild(kasten("auftrag", null, p("Zurück zum Satz vom Anfang. Wo stehen Sie jetzt – und warum?")));
        skala(box, "e3.nach", { satz: D.e3.these, ref: "e3.vor", wertWort: "Ihre Wahl jetzt", warumLabel: "Was denken Sie jetzt – und warum?", platz: "Meine Position hat sich (nicht) verändert, weil …", danach: function (w) { return kasten("raum", null, p(esc(vergleichSatz(S.w["e3.vor"], w)))); } });
        box.appendChild(h("h2", { class: "abschnitt", text: "Ihr Satz für die Lernspur" }));
        spurFeld(box, BLAETTER.e3);
        box.appendChild(h("h2", { class: "abschnitt", text: "Was können Sie jetzt?" }));
        selbst(box, "e3.selbst", ["Ich kann erklären, warum Kinder ihre Rechte nicht geschenkt bekommen, sondern haben.", "Ich kann eine Kita-Szene mit den drei Prüfsteinen prüfen.", "Ich kann Artikel 12 in einen Satz für den Kita-Alltag übersetzen."]);
        box.appendChild(h("h2", { class: "abschnitt", text: "Ihre Rückmeldung zum Blatt" }));
        stimmkarte(box, "e3.stimme", { frage: "Wie hat Ihnen dieses Arbeitsblatt beim Lernen geholfen?", optionen: [["A", "sehr"], ["B", "teils"], ["C", "kaum"]], unter: "Halten Sie Ihre Karte hoch, wenn Ihre Lehrkraft fragt. Ihre Wahl bleibt auf diesem Gerät." });
        box.appendChild(feld("e3.rueck", { label: "Was würden Sie an diesem Blatt ändern? (freiwillig)", platz: "Mehr …, weniger …", rows: 2 }));
        box.appendChild(p("Fertig? Dann drehen Sie Ihr Tablet um.", "ende"));
      } },

    { id: "aZ", nr: "Z", kurz: "Zusammenfassung", name: "Zusammenfassung zum Abheften", kopf: "Zusammenfassung", form: "zum Abheften", min: 3, frei: "antwort", nach: "a8", fehlt: "Die Zusammenfassung öffnet sich nach Ihrem Rückblick (Auftrag 8). So verrät sie vorher nichts.", prinzip: "–", raum: "–",
      fertig: function () { return !!BS("e3").durch.aZ || !!(S.w["e3.zf"] && S.w["e3.zf"].gesehen); },
      seite: function (box) { W("e3.zf").gesehen = true; speichereBald(); zfE3(box); frisch(); } }
  ]
});

function plakateFest() { return D.e3.stationen.filter(function (s) { return S.w["e3." + s.id] && S.w["e3." + s.id].fest; }).length; }

/* ---------- Auftrag 4, Teil 2 und 3: Kette der Rechte, übersetzen ---------- */
function kette(box, neu) {
  box.textContent = "";
  box.appendChild(h("h2", { class: "abschnitt", text: "2 · Die Kette der Rechte" }));
  box.appendChild(p("Jedes Glied stützt sich auf das vorige. Wählen Sie je Glied eine Lesestufe: in einfachen Worten oder im Wortlaut.", "lauf"));
  var reihe = h("ol", { class: "kette" });
  D.e3.kette.forEach(function (g, i) {
    reihe.appendChild(h("li", { class: "kette__glied" }, h("p", { class: "kette__kopf" }, h("b", { text: g.titel }), h("span", { text: g.unter })),
      stufen("e3.k" + i, [["In einfachen Worten", g.einfach], ["Im Wortlaut", g.wortlaut]]), p(g.status, "quelle")));
  });
  reihe.appendChild(h("li", { class: "kette__glied kette__glied--kita" }, h("p", { class: "kette__kopf" }, h("b", { text: "Ihre Kita" }), h("span", { text: "morgen früh" })), p("Was heißt das in Ihrer Gruppe? Das übersetzen Sie in Teil 3.")));
  box.appendChild(reihe);
  box.appendChild(h("h3", { class: "zwischen", text: "Seit wann?" }));
  box.appendChild(h("ol", { class: "zeitleiste" }, D.e3.zeit.map(function (z) { return h("li", {}, h("b", { text: z[0] }), h("span", { text: z[1] })); })));
  box.appendChild(p("Quellen: Deutsches Institut für Menschenrechte (Inkrafttreten 1992); Bundeszentrale für politische Bildung (20. November); Fassungsgeschichte § 45 SGB VIII am Gesetzestext geprüft (01.11.2026).", "quelle"));

  box.appendChild(h("h2", { class: "abschnitt", text: "3 · Übersetzen: Artikel 12 in Ihrer Kita" }));
  box.appendChild(kasten("auftrag", null, p("Übersetzen Sie Artikel 12 in einen Satz, den ein Kind in Ihrer Kita erleben kann. Beginnen Sie mit »In unserer Kita heißt das: …«.")));
  var w = W("e3.uebersetz");
  var nachher = h("div", { class: "uebersetz-nach", "aria-live": "polite" });
  var kn = knopf("Mit zwei Beispielen vergleichen", { art: "primaer", aus: true, klick: function () { w.zu = true; speichere(); zeige(true); } });
  var hin = h("p", { class: "meta" });
  function pruefe() { var n = woerter(txt("e3.uebersetz")); kn.disabled = n < 8; hin.textContent = w.zu ? "" : (n < 8 ? "Mindestens acht Wörter – bisher " + n + "." : ""); }
  box.appendChild(feld("e3.uebersetz", { label: "Ihr Satz", platz: "In unserer Kita heißt das: …", rows: 3, bei: pruefe }));
  box.appendChild(h("div", { class: "reihe" }, kn, hin));
  box.appendChild(nachher);
  function zeige(neu2) {
    kn.hidden = true; nachher.textContent = "";
    nachher.appendChild(h("div", { class: "zwei" },
      kasten("erklaerung", "So schreibt es ein Träger in sein Leitbild", p("Sinngemäß: Kinder dürfen ihren Bedürfnissen nachgehen, Nein sagen und sich zurückziehen, wach bleiben, wenn sie nicht müde sind, essen, wenn sie hungrig sind – und das, was ihnen schmeckt."), p("Leitbild eines großen Kita-Trägers (Fröbel), im Impulsvortrag zitiert · sinngemäß · am Original noch zu prüfen", "quelle")),
      kasten("erklaerung", "So sagt es ein Kind", p("»In unserer Kita darf man alles sagen. Auch Nein.«"), p("Kinderzitat aus dem Projekt BilDe, im Impulsvortrag zitiert · Fundstelle noch zu prüfen", "quelle"))));
    var sp = W("e3.sprache");
    var rueck = h("div", { class: "fluss", "aria-live": "polite" });
    var grp = h("div", { class: "reihe", role: "group", "aria-label": "Recht oder Erlaubnis?" });
    [["Ein Recht: Das Kind darf …", "recht"], ["Eine Erlaubnis: Wir lassen das Kind …", "erlaubnis"]].forEach(function (o) {
      grp.appendChild(knopf(o[0], { art: "wahl", gedrueckt: String(sp.wahl === o[1]), klick: function () { sp.wahl = o[1]; speichere(); $$("button", grp).forEach(function (b) { b.setAttribute("aria-pressed", String(b.textContent === o[0])); }); antwort(true); } }));
    });
    function antwort(neu3) {
      rueck.textContent = "";
      if (!sp.wahl) return;
      rueck.appendChild(sp.wahl === "recht" ? rm("zentral", "So klingt ein Recht: Es hängt nicht davon ab, ob ein Erwachsener gerade gute Laune hat. Genau das wollte Korczak.", "Recht")
        : rm("begruendbar", "Ehrlich – und häufig. Formulieren Sie um: Aus »Wir lassen die Kinder mitentscheiden« wird »Die Kinder entscheiden mit, wenn …«. Das Recht steht beim Kind, nicht bei uns. Ihr Satz oben lässt sich noch ändern.", "Erlaubnis"));
      if (neu3) einblenden(rueck);
    }
    nachher.appendChild(kasten("auftrag", "Die Sprachprobe", p("Lesen Sie Ihren Satz noch einmal. Beschreibt er ein Recht des Kindes – oder eine Erlaubnis der Erwachsenen?"), grp, rueck));
    nachher.appendChild(kasten("raum", null, p("Plenum: Zwei oder drei Sätze werden vorgelesen. Was hat Sie am Gesetz überrascht?")));
    antwort(false);
    if (neu2) einblenden(nachher, 240);
    frisch();
  }
  pruefe(); if (w.zu) zeige(false);
  if (neu) einblenden(box, 240);
}

/* ---------- Auftrag 5: Rundgang durch die Ausstellung ---------- */
function rundgang(box) {
  box.appendChild(p("Sechs Plakate hängen in dieser Ausstellung. Jedes sagt ein Recht so, wie ein Kind es sagen würde. Hinter jedem Plakat wartet eine Szene aus einer Kita. Die Ausstellung stammt aus einer Mitmach-Ausstellung zum Tag der Kinderrechte in einem Familienzentrum – hier umgebaut für Fachkräfte.", "lauf"));
  box.appendChild(h("div", { class: "zwei zwei--breit" },
    kasten("wissen", "Die drei Prüfsteine", h("dl", { class: "pruef" }, D.pruefsteine.map(function (x) { return h("div", { class: "pruef--" + x[0] }, h("dt", { text: x[1] }), h("dd", { text: x[2] })); })), p("Die Frage an jede Szene: <b>Welcher Prüfstein ist hier zuerst berührt?</b>")),
    kasten("auftrag", null, p("Wählen Sie links ein Plakat. Lesen Sie die Szene. Legen Sie sich zu zweit fest, welcher Prüfstein zuerst berührt ist, und begründen Sie in einem Satz. Erst dann sehen Sie die Rückmeldung."), p("<b>Fertig sind Sie mit drei Plakaten.</b> Schnelle nehmen mehr – oder die Alltagskarten unten."))));
  var stand = h("p", { class: "meta rund-stand", "aria-live": "polite" });
  box.appendChild(stand);
  function standText() { var n = plakateFest(); stand.textContent = n >= 3 ? "✓ " + n + " von 6 Plakaten festgelegt – Ihr eigenes Plakat ist offen (Auftrag 6)." : n + " von 3 Plakaten festgelegt."; }
  var wk = wahlKarte(box, "e3.rund", D.e3.stationen.map(function (s, i) {
    return { id: s.id, nr: String(i + 1), titel: s.satz, klasse: "pl-" + s.farbe,
      stand: function () { var w = S.w["e3." + s.id]; return w && w.fest ? "festgelegt: " + D.pruefsteine[w.i][1] : ""; },
      bau: function (karte, frischListe) { plakatKarte(karte, s, i, function () { frischListe(); standText(); frisch(); }); } };
  }), { titel: "Plakate der Ausstellung", klasse: "wk--plakate" });
  standText();
  box.appendChild(alltagskarten());
  box.appendChild(kasten("raum", "Rundgang im Plenum", p("Jedes Paar stellt ein Plakat vor. Ihre Lehrkraft fragt per Handzeichen: Wer hat Schutz gewählt, wer Förderung, wer Beteiligung? Sprechen Sie über die Plakate, bei denen die Klasse uneins war."), p("Und: <b>Warum fallen solche Szenen im Alltag so selten auf?</b>")));
  box.appendChild(p("Die sechs Szenen sind ausgedacht. Welcher Prüfstein »zentral« ist, ist ein Vorschlag – gute Begründungen für eine andere Wahl zählen.", "meta"));
}
function plakatKarte(karte, s, i, nachFest) {
  karte.appendChild(h("div", { class: "plakat pl-" + s.farbe }, h("span", { class: "plakat__nr", text: "Plakat " + (i + 1) + " von 6" }), h("p", { class: "plakat__satz", text: s.satz })));
  karte.appendChild(h("details", { class: "mehr" }, h("summary", { text: "Woher kommt dieses Recht?" }), p(esc(s.quelle)), p("Status: " + esc(s.status), "quelle")));
  karte.appendChild(h("div", { class: "falltext" }, etikett("ausgedachte Szene"), p(esc(s.szene), "falltext__text")));
  var w = h("div", { class: "teil" }); karte.appendChild(w);
  wahl(w, "e3." + s.id, { frage: "Welcher Prüfstein ist hier zuerst berührt?", optionen: D.pruefsteine.map(function (x) { return [x[1], s.urteil[x[0]][0], s.urteil[x[0]][1]]; }), warumLabel: "Ihre Begründung in einem Satz:", platz: "Zuerst berührt ist …, weil …",
    danach: function (neu) {
      if (neu) setTimeout(nachFest, 0);
      return [kasten("sicherung", "In der Kita heißt das", liste(s.kita.map(esc))),
        feld("e3." + s.id + ".anders", { label: "So würde ich die Szene verändern:", platz: "Die Fachkraft könnte …", rows: 2 })];
    } });
}
function alltagskarten() {
  var wrap = h("details", { class: "mehr schnelle" }, h("summary", {}, h("b", { text: "Für Schnelle:" }), "Alltag mit Kinderrechten – sechs Situationen, die jeden Tag vorkommen"));
  wrap.appendChild(p("Überlegen Sie zuerst selbst, wie es mit Kinderrechten ginge. Decken Sie dann auf. Niemand macht das immer richtig – die Karten zeigen eine Richtung, keine Note.", "lauf"));
  var w = W("e3.alltag", { auf: {} }); w.auf = w.auf || {};
  var chips = h("div", { class: "chips", role: "group", "aria-label": "Situation wählen" });
  var karte = h("div", { class: "alltagkarte-box" });
  D.e3.alltag.forEach(function (a) {
    chips.appendChild(knopf(a.name, { art: "chip", gedrueckt: "false", klick: function (ev) { $$("button", chips).forEach(function (b) { b.setAttribute("aria-pressed", String(b === ev.currentTarget)); }); zeige(a); } }));
  });
  function zeige(a) {
    karte.textContent = "";
    var k = h("div", { class: "alltagkarte" }, etikett("ausgedachte Situation · " + a.name), h("p", { class: "meta", text: "Was oft passiert" }), p(esc(a.oft), "falltext__text"));
    var auf = h("dl", { class: "alltagkarte__auf", hidden: true }, [["Was das Kind braucht", a.braucht], ["So ginge es mit Kinderrechten", a.weg], ["Welches Recht", a.recht]].map(function (x) { return h("div", {}, h("dt", { text: x[0] }), h("dd", { text: x[1] })); }));
    var kn = knopf("Ich habe eine Idee – aufdecken", { art: "dunkel", aus: true, klick: function () { w.auf[a.id] = 1; speichere(); oeffne(true); } });
    function pruefe() { kn.disabled = txt("e3.alltag." + a.id).trim().length < 12; }
    function oeffne(neu) { auf.hidden = false; kn.hidden = true; if (neu) einblenden(auf); }
    k.appendChild(feld("e3.alltag." + a.id, { label: "Was braucht das Kind – und was könnten Sie sagen?", platz: "Das Kind braucht … Ich könnte sagen: …", rows: 2, bei: pruefe }));
    k.appendChild(kn); k.appendChild(auf);
    karte.appendChild(k); pruefe(); if (w.auf[a.id]) oeffne(false);
  }
  wrap.appendChild(chips); wrap.appendChild(karte);
  return wrap;
}

/* ---------- Auftrag 6: Ihr Plakat ---------- */
function plakatSeite(box) {
  var w = W("e3.plakat");
  box.appendChild(kasten("auftrag", null, p("Wählen Sie das Recht, das in Ihrer Einrichtung am meisten Aufmerksamkeit braucht – eines der sechs oder ein eigenes. Schreiben Sie es so, dass ein Kind von vier Jahren es versteht. Schreiben Sie dazu, wo das Plakat hängt und woran es das Team erinnert.")));
  var rechte = h("div", { class: "chips", role: "group", "aria-label": "Recht für Ihr Plakat wählen" });
  D.e3.stationen.concat([{ satz: "Ein eigenes Recht" }]).forEach(function (s, i) {
    rechte.appendChild(knopf(s.satz, { art: "chip", gedrueckt: String(w.recht === i), klick: function () { w.recht = i; speichere(); $$("button", rechte).forEach(function (b, j) { b.setAttribute("aria-pressed", String(j === i)); }); pruefe(); vorschau(); } }));
  });
  var eingabe = h("div", { class: "plakat-bau__eingabe" });
  var fig = h("figure", { class: "meinplakat", "aria-label": "Vorschau Ihres Plakats" });
  var leerText = p("Ihr Plakat erscheint hier, sobald Sie Ihren Satz schreiben.", "meta plakat-bau__leer");
  box.appendChild(h("div", { class: "plakat-bau" }, eingabe, h("div", { class: "plakat-bau__vorschau" }, h("p", { class: "h4", text: "Vorschau" }), leerText, fig)));
  eingabe.appendChild(h("fieldset", { class: "gruppe" }, h("legend", { text: "Welches Recht?" }), rechte));
  eingabe.appendChild(feld("e3.plakat.satz", { label: "So sage ich es einem Kind:", platz: "Ich darf …", rows: 2, bei: function () { pruefe(); vorschau(); } }));
  eingabe.appendChild(feld("e3.plakat.ort", { label: "Hier hängt das Plakat – und daran erinnert es uns:", platz: "Am Wickeltisch. Es erinnert uns daran, …", rows: 2, bei: function () { pruefe(); vorschau(); } }));
  var ps = h("div", { class: "chips", role: "group", "aria-label": "Prüfstein wählen" });
  D.pruefsteine.forEach(function (x, i) {
    ps.appendChild(knopf(x[1], { art: "chip", gedrueckt: String(w.stein === i), klick: function () { w.stein = i; speichere(); $$("button", ps).forEach(function (b, j) { b.setAttribute("aria-pressed", String(j === i)); }); pruefe(); vorschau(); } }));
  });
  eingabe.appendChild(h("fieldset", { class: "gruppe" }, h("legend", { text: "Welcher Prüfstein steht dahinter?" }), ps));
  var kn = knopf("Mit den Kriterien vergleichen", { art: "primaer", aus: true, klick: function () { w.zu = true; speichere(); raster(true); } });
  var hin = h("p", { class: "meta", "aria-live": "polite" });
  eingabe.appendChild(h("div", { class: "reihe" }, kn, hin));
  var rbox = h("div", { class: "plakat-raster" }); box.appendChild(rbox);
  function pruefe() {
    var ok = typeof w.recht === "number" && woerter(txt("e3.plakat.satz")) >= 3 && woerter(txt("e3.plakat.ort")) >= 5 && typeof w.stein === "number";
    kn.disabled = !ok;
    hin.textContent = w.zu ? "" : (ok ? "Jetzt vergleichen." : "Recht wählen, Satz und Ort schreiben, Prüfstein wählen – dann vergleichen.");
  }
  function vorschau() {
    var satz = txt("e3.plakat.satz").trim();
    fig.textContent = ""; fig.hidden = !satz; leerText.hidden = !!satz;
    if (!satz) return;
    var farbe = typeof w.recht === "number" && w.recht < 6 ? D.e3.stationen[w.recht].farbe : "eigen";
    fig.className = "meinplakat pl-" + farbe;
    fig.appendChild(h("p", { class: "meinplakat__satz", text: satz }));
    fig.appendChild(h("figcaption", {}, h("span", { text: "Kinderrecht" + (typeof w.stein === "number" ? " · Prüfstein " + D.pruefsteine[w.stein][1] : "") }), h("span", { text: txt("e3.plakat.ort").trim() })));
  }
  function raster(neu) {
    kn.hidden = true; hin.textContent = ""; rbox.textContent = "";
    var r = h("div", { class: "raster" }, h("p", { class: "raster__kopf", text: "Vergleichen Sie Ihr Plakat mit diesen Kriterien" }));
    var sw = W("e3.plakat.selbst", {});
    [["Grundlegend", "Der Satz steht in der Ich-Form. Ein Kind von vier Jahren versteht ihn."], ["Sicher", "Der Satz sagt, was das Kind darf oder erwarten kann – nicht, was es soll."], ["Souverän", "Der Satz passt zu einer echten Situation in Ihrer Einrichtung, und Sie können sagen, welcher Prüfstein dahintersteht."]].forEach(function (k, i) {
      var g = h("div", { class: "raster__selbst", role: "group", "aria-label": "Trifft das auf Ihr Plakat zu? " + k[0] });
      ["trifft zu", "teils", "noch nicht"].forEach(function (s, j) { g.appendChild(knopf(s, { art: "klein", gedrueckt: String(sw[i] === j), klick: function () { sw[i] = j; speichereBald(); $$("button", g).forEach(function (b, m) { b.setAttribute("aria-pressed", String(m === j)); }); } })); });
      r.appendChild(h("div", { class: "raster__zeile" }, h("b", { text: k[0] }), h("span", { text: k[1] }), g));
    });
    r.appendChild(p("Überarbeiten Sie Ihren Satz, wenn etwas fehlt – die Vorschau ändert sich mit."));
    r.appendChild(h("div", { class: "reihe" }, knopf("Plakat drucken oder als PDF sichern", { art: "dunkel", klick: function () { drucke("plakat"); } }), h("span", { class: "meta", text: "Eine Seite A4 – für Ihre Praxisstelle, wenn Sie mögen." })));
    rbox.appendChild(r);
    rbox.appendChild(kasten("raum", null, p("Im Plenum hängen wir die Plakate nebeneinander: Welches Recht wurde am häufigsten gewählt – und warum gerade dieses?")));
    if (neu) einblenden(rbox, 240);
    frisch();
  }
  pruefe(); vorschau(); if (w.zu) raster(false);
}

/* ---------- Auftrag 7: Worüber dürfen Kinder bei Ihnen bestimmen? (Legen mit Spalten) ---------- */
function kitaSeite(box) {
  var w = W("e3.kita", { lage: {} }); w.lage = w.lage || {};
  box.appendChild(p("In dem Vortrag, dem dieses Wahlfach folgt, steht eine Frage zum stillen Nachdenken: <b>Worüber dürfen Kinder bei Ihnen eigentlich bestimmen?</b> Dürfen sie entscheiden, wann sie auf die Toilette gehen, was sie anziehen, was gespielt wird?", "lauf"));
  var blick = h("div", { class: "chips", role: "group", "aria-label": "An welche Kita denken Sie?" });
  [["praxis", "meine Praxisstelle"], ["kindheit", "eine Kita aus meiner Kindheit"], ["ausgedacht", "eine ausgedachte Kita"]].forEach(function (o) {
    blick.appendChild(knopf(o[1], { art: "chip", gedrueckt: String(w.blick === o[0]), klick: function () { w.blick = o[0]; speichere(); $$("button", blick).forEach(function (b) { b.setAttribute("aria-pressed", String(b.textContent === o[1])); }); } }));
  });
  box.appendChild(h("fieldset", { class: "gruppe" }, h("legend", { text: "An welche Kita denken Sie? (freiwillig – alle drei sind gleich gut)" }), blick));
  box.appendChild(kasten("auftrag", null, p("Tippen Sie eine Karte an und dann die Spalte, in die sie in dieser Kita gehört. Es gibt kein Richtig oder Falsch – es geht um Ihr Bild. Bewertet wird nur Ihr eigenes Handeln, nicht das von Kolleginnen und Kollegen.")));
  var gewaehlt = null;
  var ansage = h("p", { class: "meta", "aria-live": "polite", text: "Tippen Sie eine Karte an." });
  var stapel = h("div", { class: "kstapel", role: "group", "aria-label": "Noch nicht gelegte Karten" });
  var spalten = h("div", { class: "kspalten" });
  var zonen = {};
  D.e3.spalten.forEach(function (sp) {
    var ziel = h("button", { type: "button", class: "kspalte__kopf", text: sp[1], "aria-label": "Gewählte Karte hier ablegen: " + sp[1], on: { click: function () { lege(sp[0]); } } });
    var feldK = h("div", { class: "kspalte__karten" });
    zonen[sp[0]] = feldK;
    spalten.appendChild(h("div", { class: "kspalte kspalte--" + sp[0] }, ziel, feldK));
  });
  var karten = {};
  D.e3.karten.forEach(function (k) {
    karten[k[0]] = h("button", { type: "button", class: "kkarte", "aria-pressed": "false", text: k[1], on: { click: function (ev) { ev.stopPropagation(); waehle(gewaehlt === k[0] ? null : k[0]); } } });
  });
  function waehle(id) {
    gewaehlt = id;
    Object.keys(karten).forEach(function (k) { karten[k].setAttribute("aria-pressed", String(k === id)); });
    spalten.classList.toggle("ziel", !!id);
    ansage.textContent = id ? "»" + karte(id)[1] + "« gewählt. Tippen Sie jetzt eine Spalte an." : "Tippen Sie eine Karte an.";
  }
  function karte(id) { return D.e3.karten.filter(function (k) { return k[0] === id; })[0]; }
  function lege(z) {
    if (!gewaehlt) { ansage.textContent = "Wählen Sie zuerst eine Karte."; return; }
    w.lage[gewaehlt] = z; speichere();
    var name = karte(gewaehlt)[1]; waehle(null);
    ansage.textContent = "»" + name + "« liegt bei: " + D.e3.spalten.filter(function (s) { return s[0] === z; })[0][1] + ".";
    verteile(); frisch();
  }
  stapel.addEventListener("click", function () { if (gewaehlt && w.lage[gewaehlt]) { delete w.lage[gewaehlt]; speichere(); waehle(null); verteile(); frisch(); } });
  box.appendChild(h("div", { class: "klege" }, h("div", { class: "klege__stapel" }, h("p", { class: "h4", text: "Karten" }), stapel, ansage), spalten));
  var bild = h("div", { class: "kbild", "aria-live": "polite" }); box.appendChild(bild);
  function verteile() {
    stapel.textContent = ""; Object.keys(zonen).forEach(function (z) { zonen[z].textContent = ""; });
    D.e3.karten.forEach(function (k) { (w.lage[k[0]] ? zonen[w.lage[k[0]]] : stapel).appendChild(karten[k[0]]); });
    if (!stapel.children.length) stapel.appendChild(h("p", { class: "meta", text: "Alle Karten liegen. Tippen Sie eine gelegte Karte an und hier, um sie zurückzulegen." }));
    zeigeBild();
  }
  function zeigeBild() {
    bild.textContent = "";
    var n = Object.keys(w.lage).length;
    if (n < 6) { bild.appendChild(p("Ab sechs Karten sehen Sie Ihr Bild der Kita – bisher " + n + ".", "meta")); return; }
    var zahl = {}; D.e3.spalten.forEach(function (s) { zahl[s[0]] = 0; }); Object.keys(w.lage).forEach(function (k) { zahl[w.lage[k]]++; });
    bild.appendChild(h("h2", { class: "abschnitt", text: "Ihr Bild dieser Kita" }));
    bild.appendChild(h("ul", { class: "kbalken" }, D.e3.spalten.map(function (s) {
      return h("li", { class: "kbalken--" + s[0] }, h("span", { class: "kbalken__name", text: s[1] }), h("span", { class: "kbalken__spur", "aria-hidden": "true" }, h("span", { style: "width:" + (zahl[s[0]] / D.e3.karten.length * 100) + "%" })), h("b", { text: zahl[s[0]] + (zahl[s[0]] === 1 ? " Karte" : " Karten") }));
    })));
    bild.appendChild(p("Ein Bild aus Ihrer Sicht – keine Messung. »" + ({ praxis: "Meine Praxisstelle", kindheit: "Eine Kita aus meiner Kindheit", ausgedacht: "Eine ausgedachte Kita" }[w.blick] || "Eine Kita") + "«", "meta"));
    bild.appendChild(kasten("auftrag", "Und nach den Kinderrechten?", p("Wählen Sie eine Karte, bei der die Kinderrechte eine andere Spalte verlangen. Was könnten <b>Sie selbst</b> dazu beitragen?")));
    var wa = h("div", { class: "chips", role: "group", "aria-label": "Karte wählen" });
    D.e3.karten.filter(function (k) { return w.lage[k[0]]; }).forEach(function (k) {
      wa.appendChild(knopf(k[1], { art: "chip", gedrueckt: String(w.anders === k[0]), klick: function () { w.anders = k[0]; speichere(); zeigeBild(); } }));
    });
    bild.appendChild(wa);
    if (w.anders && w.lage[w.anders]) {
      var kk = karte(w.anders);
      bild.appendChild(h("div", { class: "anstoss" }, h("p", { class: "meta", text: "Ein Anstoß, angelehnt an den Vortrag – keine Lösung" }), p(esc(kk[2]))));
      bild.appendChild(feld("e3.kita.schritt", { label: "Das könnte ich selbst tun:", platz: "Ich könnte … fragen / ankündigen / erklären …", rows: 2 }));
    }
    bild.appendChild(kasten("erklaerung", "Diese Ordnung hat einen Namen",
      p("In der »Kinderstube der Demokratie« legt das Team in einer <b>Kita-Verfassung</b> schriftlich fest: Worüber entscheiden die Kinder allein? Wobei entscheiden sie mit? Was entscheiden die Erwachsenen – und erklären es den Kindern? Mehr dazu in Etappe 5."),
      p("Die vierte Spalte ist die, vor der Korczak die Kinder schützen wollte: Entscheidungen ohne Begründung, nach der Tagesform.")));
    bild.appendChild(kasten("raum", null, p("Zu zweit: Wo würden die Kinderrechte bei Ihnen eine andere Spalte verlangen? Was wäre der erste kleine Schritt?")));
  }
  verteile();
}

/* ---------- Zusammenfassung ---------- */
function zfE3(box) {
  var pl = S.w["e3.plakat"] || {}, kita = S.w["e3.kita"] || { lage: {} };
  zusammenfassung(box, { kopf: "Etappe 3 · Kinder haben Rechte", frage: "Geben wir Kindern Rechte – oder haben sie welche?",
    kern: "Kinder haben Rechte – von Anfang an. Erwachsene schenken sie nicht, sie müssen sie achten und Räume schaffen, in denen Kinder sie ausüben können. Für Kitas ist das Gesetz: Ohne Verfahren für Beteiligung und Beschwerde gibt es in der Regel keine Betriebserlaubnis.",
    wissen: function () {
      return [h("h3", { text: "Begriffe" }), h("dl", { class: "zf-begriffe" }, [
        ["UN-Kinderrechtskonvention", "Übereinkommen der Vereinten Nationen vom 20.11.1989, in Deutschland seit 5.4.1992 in Kraft."],
        ["Artikel 12", "Jedes Kind, das sich eine Meinung bilden kann, darf sie in allen Angelegenheiten sagen, die es betreffen. Sie wird nach Alter und Reife berücksichtigt – eine Altersgrenze gibt es nicht."],
        ["§ 8 Abs. 1 SGB VIII", "Kinder sind entsprechend ihrem Entwicklungsstand an allen sie betreffenden Entscheidungen der öffentlichen Jugendhilfe zu beteiligen."],
        ["§ 45 SGB VIII", "Zur Betriebserlaubnis einer Kita gehören in der Regel Verfahren für Beteiligung und Beschwerde und ein Konzept zum Schutz vor Gewalt (Abs. 2 Satz 2 Nr. 4)."],
        ["Drei Prüfsteine", "Schutz · Förderung · Beteiligung – der Maßstab für jede Kita-Situation."],
        ["Konstitutionelle Pädagogik", "Janusz Korczak: Die Rechte der Kinder stehen in einer Verfassung und binden auch die Erwachsenen – damit Kinder nicht von deren Launen abhängen."]
      ].map(function (b) { return h("div", {}, h("dt", { text: b[0] }), h("dd", { text: b[1] })); })),
        h("h3", { text: "Seit wann?" }), h("ol", { class: "zeitleiste zeitleiste--klein" }, [["1912", "Korczak übernimmt das Waisenhaus Dom Sierot in Warschau."]].concat(D.e3.zeit).map(function (z) { return h("li", {}, h("b", { text: z[0] }), h("span", { text: z[1] })); })),
        h("table", { class: "zf-pruef" }, h("thead", {}, h("tr", {}, h("th", { scope: "col", text: "Prüfstein" }), h("th", { scope: "col", text: "Die Frage an die Situation" }))),
          h("tbody", {}, [["Schutz", "Wird ein Kind gerade beschämt, abgewertet, ausgeschlossen oder bedroht?"], ["Förderung", "Bekommt das Kind, was es zum Wachsen braucht – Beziehung, Spiel, Ruhe, Sprache?"], ["Beteiligung", "Wurde das Kind gefragt und gehört – und konnte seine Sicht etwas verändern?"]].map(function (r) { return h("tr", {}, h("th", { scope: "row", text: r[0] }), h("td", { text: r[1] })); })))];
    },
    koennen: function () {
      var zahl = {}; D.e3.spalten.forEach(function (s) { zahl[s[0]] = 0; }); Object.keys(kita.lage || {}).forEach(function (k) { zahl[kita.lage[k]]++; });
      return [h("div", { class: "werk" }, h("b", { text: "Denkwerkzeug: eine Kita-Situation an den Kinderrechten prüfen" }), h("ol", {}, h("li", { text: "Was erlebt das Kind? Erst beschreiben, dann deuten." }), h("li", { text: "Welcher Prüfstein ist zuerst berührt – Schutz, Förderung oder Beteiligung? Begründen." }), h("li", { text: "Was ändere ich – und was sage ich dem Kind?" }))),
        h("div", { class: "werk" }, h("b", { text: "Sprachprobe: Recht oder Erlaubnis?" }), p("»Die Kinder entscheiden mit, wenn …« beschreibt ein Recht. »Wir lassen die Kinder mitentscheiden« beschreibt eine Erlaubnis – sie hängt von uns ab.")),
        h("h3", { text: "Mein Plakat" }), mein(txt("e3.plakat.satz"), "noch offen – Auftrag 6"), txt("e3.plakat.ort") ? p(esc(txt("e3.plakat.ort")), "meta") : null,
        h("h3", { text: "Mein Satz für die Lernspur" }), mein(txt("e3.spur"), "noch offen – Auftrag 8"),
        h("h3", { text: "Meine Übersetzung von Artikel 12" }), mein(txt("e3.uebersetz"), "noch offen – Auftrag 4"),
        Object.keys(kita.lage || {}).length ? h("div", {}, h("h3", { text: "Mein Bild der Kita" }), p(D.e3.spalten.map(function (s) { return s[1] + ": " + zahl[s[0]]; }).join(" · "), "meta"), txt("e3.kita.schritt") ? mein(txt("e3.kita.schritt")) : null) : null,
        h("h3", { text: "So kann gefragt werden" }), h("blockquote", { class: "aufgabe" }, "Erläutern Sie an einem Beispiel aus dem Kita-Alltag, warum Beteiligung von Kindern ein Recht und kein Zugeständnis ist. Beziehen Sie Artikel 12 der UN-Kinderrechtskonvention und § 45 SGB VIII ein."),
        p("Beispielaufgabe zum Üben – nicht aus einer Prüfung.", "meta")];
    } });
}
