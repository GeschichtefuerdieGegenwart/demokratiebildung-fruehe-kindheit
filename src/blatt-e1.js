/* ===== Etappe 1 · Arbeitsblatt »Drei Formen – ein Ganzes« (Doppelstunde, 90 Minuten) =====
   Aus der Lernseite von Version 2 übernommen und in den Blatt-Standard gesetzt. Quellen: Arbeitsblätter DS 1, Impulsvortrag Teil I.
   Status: Rückmeldetexte und die sechs Prüffragen des Dreibeins sind Vorschläge; die Kita-Fälle A–F sind ausgedacht. */
D.e1 = {
  these: "»Demokratie beginnt nicht im Bundestag. Sie beginnt in der Kita.«",
  lesetext: [
    [["l1", "Demokratie ist mehr als das Kreuz auf dem Wahlzettel."], ["l2", "Und auch mehr als der Wille der Mehrheit."], ["l3", "Demokratie beruht auf der Vorstellung der Menschenwürde: Jeder Mensch hat unveräußerliche Rechte."]],
    [["l4", "Meist ist mit Demokratie eine Herrschaftsform gemeint, die auf Volkssouveränität und politischer Gleichheit gründet."], ["l5", "Volkssouveränität heißt: Die Herrschaft geht vom Volk aus, sie wird durch das Volk oder gewählte Vertreterinnen und Vertreter ausgeübt und zu seinem Nutzen eingesetzt."], ["l6", "Grundrechte und Rechtsstaat schützen den Einzelnen vor staatlicher Willkür."], ["l7", "Politische Gleichheit heißt: Alle Bürgerinnen und Bürger haben die gleichen Wahl- und Beteiligungsrechte – unabhängig von Geschlecht, Herkunft oder Konfession."]]
  ],
  leseLk: ["l2", "l3", "l6"],
  leseRueck: "Die Lehrkraft schlägt drei Stellen vor (gelb, mit Unterstrich): Satz 2 sagt es direkt. Satz 3 nennt den Grund – Rechte, die jedem Menschen zustehen. Satz 6 nennt das Mittel – Grundrechte und Rechtsstaat schützen auch den, der überstimmt wurde. Andere Stellen können ebenfalls passen, wenn Ihre Begründung trägt.",
  formen: { h: "Herrschaftsform", g: "Gesellschaftsform", l: "Lebensform" },
  begriffe: [
    { id: "b1", name: "Gewaltenteilung", kern: "h", auch: "", grund: "Macht wird auf Parlament, Regierung und Gerichte verteilt, damit sie sich gegenseitig kontrollieren." },
    { id: "b2", name: "einander zuhören", kern: "l", auch: "g", grund: "Das ist Umgang im Alltag. Es trägt auch das Zusammenleben verschiedener Gruppen." },
    { id: "b3", name: "freie Wahlen", kern: "h", auch: "g", grund: "Mit Wahlen vergibt das Volk Macht auf Zeit. Sie brauchen eine offene Gesellschaft, in der man sich frei eine Meinung bilden kann." },
    { id: "b4", name: "gesellschaftliche Vielfalt", kern: "g", auch: "l", grund: "Es geht um das Zusammenleben verschiedener Gruppen. Im Alltag zeigt sich, ob Vielfalt anerkannt wird." },
    { id: "b5", name: "Schutz von Minderheiten", kern: "h", auch: "gl", grund: "Das sind Rechte, die keine Mehrheit abschaffen kann. Sie wirken auch im Zusammenleben und im Alltag." },
    { id: "b6", name: "Kompromisse aushandeln", kern: "l", auch: "g", grund: "So gehen Menschen im Alltag mit Streit um. Auch Gruppen und Verbände handeln Kompromisse aus." },
    { id: "b7", name: "freie Medien", kern: "g", auch: "h", grund: "Medien schaffen Öffentlichkeit. Zugleich kontrollieren sie die Mächtigen." },
    { id: "b8", name: "Verantwortung übernehmen", kern: "l", auch: "g", grund: "Das ist eine Haltung im Alltag. Sie trägt auch Vereine und Initiativen." },
    { id: "b9", name: "Beschwerderechte", kern: "h", auch: "l", grund: "Ein verbindliches Verfahren begrenzt Macht. Im Alltag zeigt sich, ob eine Beschwerde ernst genommen wird." },
    { id: "b10", name: "Diskriminierung widersprechen", kern: "l", auch: "gh", grund: "Wer widerspricht, handelt im Alltag. Es schützt das Zusammenleben und stützt sich auf Rechte." },
    { id: "b11", name: "Interessenvertretungen", kern: "g", auch: "h", grund: "Verbände, Gewerkschaften oder ein Elternbeirat bündeln Interessen. Sie wirken auf Entscheidungen ein." },
    { id: "b12", name: "Kinder an Entscheidungen beteiligen", kern: "l", auch: "h", grund: "Beteiligung beginnt im Alltag. Mit festen Verfahren wie der Kinderkonferenz wird daraus Herrschaftsform im Kleinen." }
  ],
  rel: ["braucht", "schützt", "ermöglicht", "zeigt sich in", "steht in Spannung zu"],
  faelle: [
    { id: "A", titel: "Die neue Regel", text: "In der Kita wird entschieden, dass Kinder den Bauraum am Nachmittag nicht mehr nutzen dürfen. Die Regel wurde von den pädagogischen Fachkräften beschlossen. Eine Begründung erhalten die Kinder nicht.",
      fragen: ["Wer besitzt Entscheidungsmacht?", "Welche Rechte und Interessen werden berührt?", "Wie könnte das Verfahren demokratischer gestaltet werden?"],
      urteil: { h: ["zentral", "Es geht darum, wer entscheidet und ob Macht begründet und begrenzt wird."], g: ["kaum", "Verschiedene Gruppen oder Lebensweisen spielen hier keine Rolle. Fragen Sie: Wer hat entschieden – und wie?"], l: ["begruendbar", "Stimmt: Transparenz und respektvoller Umgang fehlen. Der Kern ist aber die Frage, wer entscheidet – Herrschaftsform."] } },
    { id: "B", titel: "Der Familienbaum", text: "Für ein Gruppenprojekt sollen alle Kinder »Mama und Papa« in einen Familienbaum malen. Ein Kind sagt: »Ich habe aber zwei Mamas.« Ein anderes Kind ruft: »Das ist keine richtige Familie!«",
      fragen: ["Wer wird als »normal« dargestellt?", "Wie sollte die Fachkraft unmittelbar reagieren?", "Wie können Materialien und Routinen verändert werden?"],
      urteil: { g: ["zentral", "Es geht darum, ob verschiedene Familienformen als normal gelten."], l: ["begruendbar", "Stimmt: Wie die Fachkraft im Moment reagiert, ist Lebensform. Der Auslöser ist aber ein enges Bild von Familie – Gesellschaftsform."], h: ["kaum", "Hier wird nichts beschlossen oder abgestimmt. Schauen Sie auf das Bild von Familie, das die Aufgabe vorgibt."] } },
    { id: "C", titel: "Das Nein beim Wickeln", text: "Ein Kind sagt beim Wickeln deutlich »Nein« und dreht sich weg. Die Fachkraft antwortet: »Stell dich nicht so an, das muss jetzt sein.«",
      fragen: ["Welche Rechte des Kindes sind berührt?", "Wie zeigt sich das Machtgefälle?", "Was wäre eine schützende und respektvolle Reaktion?"],
      urteil: { l: ["zentral", "Es geht um den Umgang im Alltag: Wird das Nein gehört und die Würde geachtet?"], h: ["begruendbar", "Stimmt: Das Machtgefälle und die Rechte des Kindes gehören dazu. Erlebt wird die Situation aber im Alltag – Lebensform."], g: ["kaum", "Gruppen und Vielfalt sind hier nicht das Thema. Schauen Sie auf den Umgang zwischen Fachkraft und Kind."] } },
    { id: "D", titel: "Die Kinderkonferenz", text: "Die Kinder dürfen in einer Kinderkonferenz über das Thema des Sommerfestes abstimmen. Anschließend entscheidet das Team ohne weitere Erklärung über ein anderes Thema.",
      fragen: ["Ist das Beteiligung oder Scheinbeteiligung?", "Welche Wirkung kann das auf die Selbstwirksamkeit der Kinder haben?", "Wie müsste die Entscheidung transparent gemacht werden?"],
      urteil: { h: ["zentral", "Ein Verfahren wird eingesetzt und dann übergangen: Die Macht des Teams ist nicht begrenzt."], l: ["zentral", "Auch das trifft: Die Kinder erleben, dass ihre Stimme nicht zählt. Herrschafts- und Lebensform greifen hier ineinander."], g: ["kaum", "Vielfalt und Gruppen sind hier nicht berührt. Schauen Sie auf das Verfahren und auf das, was die Kinder dabei erleben."] } },
    { id: "E", titel: "Die Beschwerde", text: "Ein Kind erzählt, dass es von anderen Kindern wiederholt wegen seiner Sprache ausgelacht wird. Die Fachkraft sagt: »Versuch einfach, das nicht so ernst zu nehmen.«",
      fragen: ["Warum reicht Neutralität hier nicht aus?", "Wie kann das betroffene Kind geschützt und gestärkt werden?", "Wie kann die Gruppe einbezogen werden, ohne das Kind bloßzustellen?"],
      urteil: { g: ["zentral", "Ein Kind wird wegen seiner Sprache ausgegrenzt: Es geht um Schutz vor Diskriminierung."], l: ["zentral", "Auch das trifft: Die Fachkraft hört nicht zu und widerspricht nicht. Gesellschafts- und Lebensform greifen ineinander."], h: ["begruendbar", "Stimmt: Das Kind beschwert sich, und die Beschwerde bleibt folgenlos. Der Anlass ist aber Ausgrenzung – Gesellschafts- und Lebensform."] } },
    { id: "F", titel: "Der Elternbeirat", text: "Der Elternbeirat fordert, dass in der Einrichtung nur noch Deutsch gesprochen wird. Mehrsprachige Aushänge sollen entfernt werden, weil sie angeblich »die Integration verhindern«.",
      fragen: ["Welche Kinder und Familien wären betroffen?", "Welche Position sollte die Einrichtung vertreten?", "Wo liegen Gesprächsmöglichkeiten, wo sind Grenzen zu setzen?"],
      urteil: { g: ["zentral", "Es geht darum, ob verschiedene Sprachen in der Einrichtung Platz haben."], h: ["begruendbar", "Stimmt: Ein Gremium will eine Regel setzen, und die Einrichtung muss sich auf Rechte berufen. Der Konflikt selbst ist einer um Vielfalt – Gesellschaftsform."], l: ["begruendbar", "Stimmt: Wie das Gespräch mit dem Elternbeirat geführt wird, ist Lebensform. Der Konflikt selbst ist einer um Vielfalt – Gesellschaftsform."] } }
  ],
  zusatzfrage: "Wer gehört in dieser Situation dazu – und wer entscheidet das?",
  kriterien: [
    { id: "h1", form: "h", text: "Ist klar und begründet, wer hier entscheidet?" },
    { id: "h2", form: "h", text: "Können die Kinder die Entscheidung beeinflussen oder sich beschweren?" },
    { id: "g1", form: "g", text: "Kommen alle Kinder und Familien mit ihren Sprachen und Lebensweisen vor?" },
    { id: "g2", form: "g", text: "Wird Ausgrenzung bemerkt und gestoppt?" },
    { id: "l1", form: "l", text: "Wird dem Kind zugehört – auch seinem Nein?" },
    { id: "l2", form: "l", text: "Bleibt der Umgang respektvoll, auch im Konflikt?" }
  ],
  stufen: [[2, "ja"], [1, "teils"], [0, "nein"], [3, "nicht berührt"]],
  beinName: { h: "Herrschaft", g: "Gesellschaft", l: "Leben" }
};

blatt({
  id: "e1", etappe: 1, art: "doppelstunde", dauer: 90, titel: "Drei Formen – ein Ganzes",
  frage: "Was ist Demokratie – und wo beginnt sie?",
  karte: "Sieben Aufträge · 90 Minuten · Begriffsnetz, Kita-Fall mit dem Dreibein · am Ende steht Ihr eigener Satz, wann Demokratie in der Kita beginnt.",
  darum: "Drei Kinder schauen von einer Windmühle auf ihren Ort – und erklären sich das Rathaus mit dem Kinderparlament ihrer Kita. Der Vortrag, dem dieses Wahlfach folgt, zieht daraus einen Satz: Demokratie beginnt in der Kita. Heute klären Sie, was Demokratie überhaupt ist, legen ein Begriffsnetz und prüfen einen Kita-Fall mit einem Modell.",
  ziele: ["die drei Formen der Demokratie unterscheiden – Herrschaftsform, Gesellschaftsform, Lebensform,", "begründen, warum Demokratie mehr ist als der Wille der Mehrheit,", "eine Kita-Situation daraufhin prüfen, welche Form zu kurz kommt."],
  hinweis: "Der Lesetext in Auftrag 2 liegt auch auf Papier bereit. Der Blick in die eigene Praxisstelle am Ende ist freiwillig und bleibt auf Ihrem Gerät – ohne Namen.",
  spur: "e1.spur", spurAnfang: "Demokratie beginnt in der Kita, wenn …",
  kann: ["Ich kann die drei Formen der Demokratie unterscheiden.", "Ich kann begründen, warum Demokratie mehr ist als der Wille der Mehrheit.", "Ich kann eine Kita-Situation mit dem Dreibein prüfen."],
  papier: "Digital ist der Kern dort, wo das Gerät verdeckt, aufdeckt und erklärt: die Szene vor der Festlegung, das Begriffsnetz mit Rückmeldung, das Dreibein. Der Lesetext liegt auch auf Papier; den eigenen Satz schreiben die Lernenden auch von Hand (Schreibblatt).",
  lk: [
    ["Vor der Stunde", ["Lesetext (Arbeitsblatt 1 aus DS 1) als Kopie bereitlegen.", "Am Gerät vorne »Alle Aufträge auf diesem Gerät freigeben« – für das Smartboard."]],
    ["Plenumsstellen", ["Nach Auftrag 1: Positionslinie 0–10, zwei bis drei Begründungen.", "Nach Auftrag 3: Eine Gruppe zeigt ihr Netz am Smartboard.", "Auftrag 4: Jede Gruppe stellt ihre Karte in höchstens 90 Sekunden vor.", "Auftrag 5: Zwei oder drei Sätze vorlesen.", "Auftrag 6: Positionslinie noch einmal; Stimmkarte zählen."]],
    ["Wenn die Zeit knapp wird", ["K1 · Verbindungen im Begriffsnetz (zweiter Teil von Auftrag 3) als Zusatz für Schnelle (– 7 Min.). Auftrag 3 gilt dann als fertig, wenn alle zwölf Karten liegen und der Zwischenstand angesehen ist.", "K2 · Auftrag 4 mit drei statt sechs Karten; jede Karte zwei Gruppen (– 5 Min.)."]],
    ["Status der Inhalte", ["Bürgermeister-Szene: nach dem Impulsvortrag, Fundstelle noch zu prüfen.", "Lesetext aus dem Arbeitsblatt der ersten Stunde; die Angaben dort (Schmidt 2010, Schultze 2015) sind noch am Original zu prüfen.", "Rückmeldungen zu den zwölf Begriffen und den Karten A–F, die sechs Prüffragen des Dreibeins: Vorschlag.", "Das Dreibein ist ein Modell – es misst nichts."]]
  ],
  auftraege: [
    { id: "a1", nr: "1", kurz: "Die Szene", phase: "Einstieg", name: "Drei Kinder am Fenster", form: "allein, dann Linie im Raum", min: 10, frei: "offen", prinzip: "Verdecken – erst festlegen, dann deuten", raum: "Positionslinie 0–10",
      fertig: function () { return !!(S.w["e1.vor"] && S.w["e1.vor"].fest && S.w["e1.max"] && S.w["e1.max"].fest); },
      seite: function (box) {
        var e = D.etappen[0];
        box.appendChild(h("div", { class: "falltext" }, etikett(e.szene.status), e.szene.text.map(function (t) { return p(t, "falltext__text"); })));
        box.appendChild(p("Max erklärt das Rathaus mit dem, was er aus seiner Kita kennt. Der Vortrag, dem dieses Wahlfach folgt, zieht daraus einen Satz. Stimmt er?", "lauf"));
        box.appendChild(kasten("auftrag", null, p("Legen Sie sich fest, bevor wir darüber sprechen: Wie sehr stimmen Sie zu? Begründen Sie in einem Satz.")));
        var danach = h("div", { class: "fluss" });
        skala(box, "e1.vor", { satz: D.e1.these, danach: function (w, ref) {
          setTimeout(function () { if (!danach.firstChild) maxWahl(danach); }, 0);
          return kasten("raum", null, p("Stellen Sie sich auf die Linie im Raum von 0 bis 10. Am Ende der Stunde kommen Sie auf diesen Satz zurück."));
        } });
        box.appendChild(danach);
        function maxWahl(ziel) {
          ziel.appendChild(h("h2", { class: "abschnitt", text: "Und was zeigt die Szene?" }));
          wahl(ziel, "e1.max", { frage: e.wahl.frage, optionen: e.wahl.optionen });
        }
      } },

    { id: "a2", nr: "2", kurz: "Lesen", phase: "Erarbeitung", name: "Was ist überhaupt Demokratie?", form: "allein · Text auch auf Papier", min: 15, frei: "antwort", nach: "a1", fehlt: "Legen Sie sich zuerst in Auftrag 1 fest.", prinzip: "Rückmelden – Vergleich nach dem eigenen Markieren", raum: "–",
      fertig: function () { return !!(S.w["e1.lese"] && S.w["e1.lese"].zu); },
      seite: lesenSeite },

    { id: "a3", nr: "3", kurz: "Legen", phase: "Erarbeitung", name: "Das Begriffsnetz legen", form: "zu zweit an einem Gerät", min: 20, frei: "ansage", gleich: "Sie legen zwölf Begriffe zu den drei Formen und verbinden sie zu einem Netz.", breit: true, prinzip: "Rückmelden – Zwischenstand ab fünf Karten", raum: "Eine Gruppe zeigt ihr Netz am Smartboard",
      fertig: function () { var w = S.w["e1.netz"]; return !!(w && w.geprueft && ((w.links || []).length >= 2 || Object.keys(w.lage || {}).length >= 12)); },
      seite: netzSeite },

    { id: "a4", nr: "4", kurz: "Kita-Fall", breit: true, phase: "Sichern und üben", name: "Trägt die Situation?", form: "in Gruppen · jede Gruppe eine Karte", min: 20, frei: "ansage", gleich: "Sie prüfen einen Kita-Fall mit einem Modell: dem Dreibein der Demokratie.", prinzip: "Variieren – sechs Antworten, ein Brett", raum: "Jede Gruppe stellt ihre Karte in 90 Sekunden vor",
      fertig: function () { var w = S.w["e1.fall"]; return !!(w && w.geprueft && Object.keys(w.geprueft).length); },
      seite: fallSeite },

    { id: "a5", nr: "5", kurz: "Ihr Satz", schreib: true, phase: "Übertragen und Ausblick", name: "Ihr Satz", form: "allein, dann Plenum", min: 12, frei: "ansage", gleich: "Sie schreiben Ihren eigenen Satz: Demokratie beginnt in der Kita, wenn …", prinzip: "keines der sechs – Kriterien erst nach dem eigenen Text", raum: "Zwei oder drei Sätze vorlesen",
      fertig: function () { return !!(S.w["e1.spur"] && S.w["e1.spur"].zu); },
      seite: function (box) {
        box.appendChild(kasten("auftrag", null, p("Schreiben Sie Ihren eigenen Satz – so, dass er für <b>jedes Kind in der Kita</b> stimmt. Begründen Sie ihn mit einer der drei Formen. Ihr Satz geht in Ihre Lernspur.")));
        produkt(box, "e1.spur", { label: "Demokratie beginnt in der Kita, wenn …", platz: "Demokratie beginnt in der Kita, wenn …, weil … Das ist Demokratie als …", min: 15,
          kriterien: [["Grundlegend", "Der Satz nennt etwas, das Kinder im Kita-Alltag wirklich erleben können."], ["Sicher", "Der Satz meint jedes Kind – nicht nur die Mehrheit oder die Lauten."], ["Souverän", "Der Satz ist mit einer der drei Formen begründet und nennt, was Erwachsene dafür tun müssen."]],
          danach: function () { return [p("Überarbeiten Sie Ihren Satz, wenn etwas fehlt. Er erscheint im Kompass unter »Ihr roter Faden durch das Jahr«."), kasten("raum", null, p("Zwei oder drei Sätze werden im Plenum vorgelesen."))]; } });
      } },

    { id: "a6", nr: "6", kurz: "Rückblick", phase: "Übertragen und Ausblick", name: "Rückblick", form: "allein, dann Linie im Raum", min: 10, frei: "antwort", nach: "a5", fehlt: "Der Rückblick öffnet sich, wenn Sie Ihren Satz verglichen haben (Auftrag 5).", prinzip: "Verdecken – Rückkehr zur ersten Festlegung", raum: "Positionslinie; Stimmkarte zählen",
      fertig: function () { return !!(S.w["e1.nach"] && S.w["e1.nach"].fest); },
      seite: function (box) {
        box.appendChild(kasten("auftrag", null, p("Zurück zum Satz vom Anfang. Wo stehen Sie jetzt – und warum?")));
        skala(box, "e1.nach", { satz: D.e1.these, ref: "e1.vor", wertWort: "Ihre Wahl jetzt", warumLabel: "Was denken Sie jetzt – und warum?", platz: "Meine Position hat sich (nicht) verändert, weil …", danach: function (w) { return kasten("raum", null, p(esc(vergleichSatz(S.w["e1.vor"], w)))); } });
        box.appendChild(h("h2", { class: "abschnitt", text: "Was können Sie jetzt?" }));
        selbst(box, "e1.selbst", BLAETTER.e1.kann);
        box.appendChild(h("details", { class: "mehr praxis" }, h("summary", {}, h("b", { text: "Freiwillig:" }), "Und in Ihrer Praxisstelle?"),
          p("Denken Sie an eine Situation aus dieser Woche – ohne Namen. Stellen Sie die sechs Fragen ein und sehen Sie, worauf die Situation steht. Alles bleibt auf Ihrem Gerät.", "lauf"),
          (function () { var b = h("div"); instrument(b, "praxis", {}); return b; })(),
          feld("e1.praxis.schritt", { label: "Ein kleiner Schritt, den ich nächste Woche ausprobiere:", platz: "Ich könnte …", rows: 2 }),
          kasten("hinweis", "Praxisauftrag bis zur nächsten Stunde", p("Beobachten Sie eine Situation in Ihrer Praxisstelle und notieren Sie ohne Namen: Wer hat entschieden? Wer wurde gehört? Wer gehörte dazu, wer nicht?"))));
        box.appendChild(h("h2", { class: "abschnitt", text: "Ihre Rückmeldung zum Blatt" }));
        stimmkarte(box, "e1.stimme", { frage: "Wie hat Ihnen dieses Arbeitsblatt beim Lernen geholfen?", optionen: [["A", "sehr"], ["B", "teils"], ["C", "kaum"]], unter: "Halten Sie Ihre Karte hoch, wenn Ihre Lehrkraft fragt. Ihre Wahl bleibt auf diesem Gerät." });
        box.appendChild(feld("e1.rueck", { label: "Was hat beim Legen und Verbinden geholfen – was war zu viel? (freiwillig)", platz: "Geholfen hat … Zu viel war …", rows: 2 }));
        box.appendChild(p("Fertig? Dann drehen Sie Ihr Tablet um.", "ende"));
      } },

    { id: "aZ", nr: "Z", kurz: "Zusammenfassung", phase: "Sichern und üben", name: "Zusammenfassung zum Abheften", kopf: "Zusammenfassung", form: "zum Abheften", min: 3, frei: "antwort", nach: "a6", fehlt: "Die Zusammenfassung öffnet sich nach Ihrem Rückblick (Auftrag 6).", prinzip: "–", raum: "–",
      fertig: function () { return !!BS("e1").durch.aZ || !!(S.w["e1.zf"] && S.w["e1.zf"].gesehen); },
      seite: function (box) { W("e1.zf").gesehen = true; speichereBald(); zfE1(box); frisch(); } },
    { id: "aX", nr: "＋", kurz: "Extra", name: "Nachgefragt in Ihrer Praxisstelle", form: "freiwillig · in Ihrer Praxisstelle", min: 0, frei: "offen", zusatz: true, schreib: true, phase: "Übertragen und Ausblick", prinzip: "–", raum: "im Gespräch zeigen",
      seite: function (box) { extraSeite(box, "e1.extra", {
        auftrag: "Freiwillig – nur wenn Sie möchten. Fragen Sie in Ihrer Praxisstelle eine Fachkraft: »Wo erleben Kinder bei uns, dass sie mitbestimmen?« Notieren Sie die Antwort in Stichworten – ohne Namen von Kindern, Eltern oder Kolleginnen und Kollegen.",
        felder: [["antwort", "Die Antwort in Stichworten", "Bei uns …"], ["form", "Welche Form nach Himmelmann zeigt sich darin? Nennen Sie die Stelle im Lesetext aus Auftrag 2.", "Lebensform, weil … (Lesetext: …)"], ["urteil", "Ein Satz: Hält Ihr Satz aus Auftrag 5 dieser Antwort stand?", "Mein Satz hält (nicht), weil …"]],
        schluss: "Bringen Sie Ihre Notizen ins Gespräch mit. Das Extra zählt nicht zur Zeit und nicht zum Stand des Blatts." }); } }
  ]
});

/* ---------- Auftrag 2: Lesen und markieren, danach die drei Formen ---------- */
function lesenSeite(box) {
  var w = W("e1.lese", { sel: [] }); w.sel = w.sel || [];
  box.appendChild(kasten("auftrag", null, p("Lesen Sie den Text. Tippen Sie dann auf zwei oder drei Sätze, die zeigen: <b>Demokratie ist mehr als die Mehrheit.</b> Schreiben Sie in einem Satz auf, warum Sie diese Stellen gewählt haben.")));
  var text = h("div", { class: "lesetext", "aria-label": "Lesetext mit antippbaren Sätzen" });
  D.e1.lesetext.forEach(function (absatz) {
    var pp = h("p");
    absatz.forEach(function (s) {
      var sp = h("span", { class: "satz", role: "button", tabindex: "0", "data-id": s[0], "aria-pressed": String(w.sel.indexOf(s[0]) >= 0), text: s[1] });
      function schalte() {
        if (w.zu) return;
        var i = w.sel.indexOf(s[0]); if (i >= 0) w.sel.splice(i, 1); else w.sel.push(s[0]);
        sp.setAttribute("aria-pressed", String(i < 0)); speichereBald(); pruefe();
      }
      sp.addEventListener("click", schalte);
      sp.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); schalte(); } });
      pp.appendChild(sp); pp.appendChild(document.createTextNode(" "));
    });
    text.appendChild(pp);
  });
  box.appendChild(text);
  box.appendChild(p("Text aus dem Arbeitsblatt Ihrer ersten Stunde. Die Angaben dort (Schmidt 2010; Schultze 2015) sind noch am Original zu prüfen.", "quelle"));
  box.appendChild(h("details", { class: "mehr" }, h("summary", { text: "Schwierige Wörter erklärt" }), h("dl", { class: "woerter" },
    [["unveräußerlich", "kann einem Menschen nicht weggenommen und nicht abgegeben werden"], ["Volkssouveränität", "Das Volk ist die höchste Quelle aller staatlichen Macht."], ["Willkür", "Entscheiden nach Laune, ohne Regel und ohne Begründung"], ["Konfession", "Zugehörigkeit zu einer Glaubensgemeinschaft"]].map(function (x) { return h("div", {}, h("dt", { text: x[0] }), h("dd", { text: x[1] })); }))));
  var stand = h("p", { class: "meta", "aria-live": "polite" });
  var kn = knopf("Mit dem Vorschlag der Lehrkraft vergleichen", { art: "primaer", aus: true, klick: function () { w.zu = true; speichere(); zeige(true); } });
  box.appendChild(feld("e1.lese.warum", { label: "Warum diese Stellen?", platz: "Diese Sätze zeigen, dass …", rows: 2, bei: pruefe }));
  box.appendChild(h("div", { class: "reihe" }, kn, stand));
  var rueck = h("div", { class: "fluss", "aria-live": "polite" }); box.appendChild(rueck);
  function pruefe() {
    var n = w.sel.length;
    stand.textContent = w.zu ? "" : (n === 0 ? "Noch keine Stelle markiert." : n + (n === 1 ? " Stelle markiert" : " Stellen markiert") + " (blau gepunktet).");
    kn.disabled = !(n >= 2 && txt("e1.lese.warum").trim().length >= 12);
  }
  function zeige(neu) {
    kn.hidden = true;
    D.e1.leseLk.forEach(function (id) { var s = $(".satz[data-id=" + id + "]", text); if (s) s.setAttribute("data-lk", ""); });
    var gleich = w.sel.filter(function (id) { return D.e1.leseLk.indexOf(id) >= 0; }).length;
    rueck.textContent = "";
    rueck.appendChild(kasten("erklaerung", "Der Vorschlag der Lehrkraft", p(D.e1.leseRueck), p(gleich + " Ihrer " + w.sel.length + " Stellen decken sich mit dem Vorschlag. Welche Stelle würden Sie jetzt noch dazunehmen – oder verteidigen?")));
    rueck.appendChild(h("h2", { class: "abschnitt", text: "Drei Formen – ein Ganzes" }));
    rueck.appendChild(p("Der Politikdidaktiker Gerhard Himmelmann unterscheidet drei Formen von Demokratie. Es sind keine getrennten Arten: Jede braucht die anderen.", "lauf"));
    rueck.appendChild(h("div", { class: "drei" }, [
      ["h", "Herrschaftsform", "Wie wird Macht begründet, kontrolliert und begrenzt?", "Wahlen, Gewaltenteilung, Rechtsstaat, Grundrechte, Mehrheit <b>und</b> Schutz von Minderheiten.", "Eine Kita ist kein Staat. Trotzdem: Wer darf was entscheiden? Welche Rechte der Kinder sind verbindlich? Gibt es einen Weg für Beschwerden?"],
      ["g", "Gesellschaftsform", "Wie leben verschiedene Menschen und Gruppen zusammen?", "Vielfalt, freie Medien und Öffentlichkeit, Vereine und Verbände, friedlicher Streit, Schutz vor Ausgrenzung.", "Hier begegnen sich verschiedene Familienformen, Sprachen, Religionen und Lebenslagen. Erleben Kinder das als normal?"],
      ["l", "Lebensform", "Wie gehen Menschen im Alltag miteinander um?", "Zuhören, Würde achten, fair streiten, Kompromisse aushandeln, andere beteiligen, Ungerechtigkeit widersprechen.", "Wird mir zugehört? Darf ich Nein sagen? Wird meine Beschwerde ernst genommen? Kinder erleben Demokratie im Morgenkreis, beim Essen, beim Wickeln, im Streit."]
    ].map(function (f) { return h("article", { class: "form form--" + f[0] }, h("p", { class: "form__marke", text: f[1] }), h("p", { class: "form__frage", text: f[2] }), p(f[3]), h("details", {}, h("summary", { text: "In der Kita" }), p(f[4]))); })));
    rueck.appendChild(p("Nach Gerhard Himmelmann (2004). Kita-Beispiele nach Hansen und Knauer (2015), wie im Impulsvortrag wiedergegeben – Fundstellen noch zu prüfen.", "quelle"));
    if (neu) einblenden(rueck, 240);
    pruefe(); frisch();
  }
  pruefe(); if (w.zu) zeige(false);
}

/* ---------- Auftrag 3: Begriffsnetz legen und verbinden ---------- */
function netzSeite(box) {
  var w = W("e1.netz", { lage: {}, links: [] }); w.lage = w.lage || {}; w.links = w.links || [];
  var B = {}; D.e1.begriffe.forEach(function (b) { B[b.id] = b; });
  var gewaehlt = null, modus = false, paar = [], knoepfe = {};
  box.appendChild(kasten("auftrag", null, p("Tippen Sie eine Karte an und dann das Feld, in das sie gehört. Felder zwischen zwei Formen bedeuten: gehört zu beiden. Sprechen Sie über jede Karte. Ab fünf Karten können Sie einen Zwischenstand ansehen.")));
  var stapel = h("div", { class: "stapel", role: "group", "aria-label": "Stapel: noch nicht gelegte Karten" });
  var zahl = h("span", { class: "meta" });
  var ansage = h("p", { class: "meta", "aria-live": "polite", text: "Tippen Sie eine Karte an." });
  var svg = document.createElementNS(NS_SVG, "svg"); svg.setAttribute("class", "matte__linien"); svg.setAttribute("aria-hidden", "true");
  var matte = h("div", { class: "matte" }); matte.appendChild(svg);
  var ZONEN = [["h", "Herrschaftsform"], ["hg", "beides"], ["g", "Gesellschaftsform"], ["hl", "beides"], ["hgl", "alle drei"], ["gl", "beides"], ["l", "Lebensform"]];
  var LANG = { h: "Herrschaftsform", g: "Gesellschaftsform", l: "Lebensform", hg: "Herrschafts- und Gesellschaftsform", hl: "Herrschafts- und Lebensform", gl: "Gesellschafts- und Lebensform", hgl: "alle drei Formen" };
  var felder = {};
  ZONEN.forEach(function (z) {
    var karten = h("div", { class: "feldz__karten" });
    var f = h("div", { class: "feldz feldz--" + z[0], "data-zone": z[0], on: { click: function () { legeIn(z[0]); } } }, h("button", { type: "button", class: "feldz__name", "aria-label": "Gewählte Karte hier ablegen: " + LANG[z[0]], text: z[1] }), karten);
    felder[z[0]] = karten; matte.appendChild(f);
  });
  box.appendChild(h("div", { class: "lege" }, h("div", { class: "lege__stapel" }, h("p", { class: "h4" }, "Stapel ", zahl), stapel, ansage), matte));
  var zw = knopf("Zwischenstand ansehen", { art: "primaer", aus: true, klick: zwischenstand });
  var zur = knopf("Karten mit »passt kaum« zurück in den Stapel", { klick: zuruecklegen });
  zur.hidden = true;
  box.appendChild(h("div", { class: "reihe" }, zw, zur));
  var rueck = h("div", { class: "fluss", "aria-live": "polite" }); box.appendChild(rueck);
  var verbBox = h("div", { class: "fluss" }); box.appendChild(verbBox);

  D.e1.begriffe.forEach(function (b) {
    var k = h("span", { class: "kartez", role: "button", tabindex: "0", "data-id": b.id, "aria-pressed": "false", text: b.name });
    function tipp(e) { e.stopPropagation(); karteTipp(b.id); }
    k.addEventListener("click", tipp);
    k.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); tipp(e); } });
    knoepfe[b.id] = k;
    (w.lage[b.id] ? felder[w.lage[b.id]] : stapel).appendChild(k);
  });
  stapel.addEventListener("click", function () { legeIn("stapel"); });

  function waehle(id) {
    gewaehlt = id;
    D.e1.begriffe.forEach(function (b) { knoepfe[b.id].setAttribute("aria-pressed", String(b.id === id)); });
    matte.toggleAttribute("data-ziel", !!id); stapel.toggleAttribute("data-ziel", !!id);
    if (id) ansage.textContent = "»" + B[id].name + "« gewählt. Tippen Sie jetzt ein Feld an.";
  }
  function karteTipp(id) {
    if (modus) { paarTipp(id); return; }
    waehle(gewaehlt === id ? null : id);
    if (!gewaehlt) ansage.textContent = "Tippen Sie eine Karte an.";
  }
  function legeIn(z) {
    if (!gewaehlt || modus) return;
    var id = gewaehlt;
    if (z === "stapel") { delete w.lage[id]; w.links = w.links.filter(function (l) { return l.a !== id && l.b !== id; }); }
    else w.lage[id] = z;
    (z === "stapel" ? stapel : felder[z]).appendChild(knoepfe[id]);
    knoepfe[id].removeAttribute("data-urteil"); knoepfe[id].removeAttribute("data-wort");
    ansage.textContent = z === "stapel" ? "»" + B[id].name + "« liegt wieder im Stapel." : "»" + B[id].name + "« liegt bei: " + LANG[z] + ".";
    waehle(null); speichere(); stand(); zeichne(); verbListe(); frisch();
  }
  function gelegt() { return Object.keys(w.lage).length; }
  function stand() {
    var n = gelegt(), rest = D.e1.begriffe.length - n;
    zahl.textContent = rest ? "· noch " + rest + (rest === 1 ? " Karte" : " Karten") : "· leer";
    zw.disabled = n < 5; zw.textContent = n < 5 ? "Zwischenstand ansehen (ab 5 Karten)" : "Zwischenstand ansehen";
  }
  function formenText(z) { return z.split("").map(function (c) { return D.e1.formen[c]; }).join(" und "); }
  function urteile(b, z) {
    var hatKern = z.indexOf(b.kern) >= 0;
    var extra = z.split("").filter(function (c) { return c !== b.kern && b.auch.indexOf(c) < 0; });
    var auchDabei = z.split("").some(function (c) { return b.auch.indexOf(c) >= 0; });
    if (hatKern && !extra.length) return ["zentral", b.auch && !auchDabei ? "Denkbar wäre auch ein Feld mit " + formenText(b.auch) + " – begründen Sie, wenn Sie umlegen." : ""];
    if (hatKern) return ["begruendbar", "Der Schwerpunkt " + D.e1.formen[b.kern] + " ist dabei. Für " + formenText(extra.join("")) + " brauchen Sie eine eigene Begründung."];
    if (auchDabei) return ["begruendbar", "Das lässt sich begründen. Der Schwerpunkt liegt aber bei " + D.e1.formen[b.kern] + ": " + b.grund];
    return ["kaum", "Der Schwerpunkt liegt bei " + D.e1.formen[b.kern] + ": " + b.grund + " Legen Sie die Karte neu."];
  }
  function zwischenstand(ev, still) {
    var ul = h("ul", { class: "rm-liste" }), kaum = 0;
    D.e1.begriffe.forEach(function (b) {
      var z = w.lage[b.id]; if (!z) return;
      var u = urteile(b, z);
      ul.appendChild(h("li", {}, rm(u[0], u[1], b.name)));
      knoepfe[b.id].setAttribute("data-urteil", u[0]); knoepfe[b.id].setAttribute("data-wort", D.urteilKurz[u[0]]);
      if (u[0] === "kaum") kaum++;
    });
    rueck.textContent = "";
    rueck.appendChild(kasten("erklaerung", "Zwischenstand – " + gelegt() + " von " + D.e1.begriffe.length + " Karten", p("Die Zuordnungen sind nicht immer eindeutig. Gerade die begründete Lage zwischen zwei Formen zeigt, wie die Formen zusammenhängen."), ul));
    zur.hidden = kaum === 0;
    w.geprueft = true; speichere(); zeichne(); verbinden(); frisch();
    if (!still) einblenden(rueck);
  }
  function zuruecklegen() {
    D.e1.begriffe.forEach(function (b) {
      if (knoepfe[b.id].getAttribute("data-urteil") === "kaum") {
        delete w.lage[b.id]; w.links = w.links.filter(function (l) { return l.a !== b.id && l.b !== b.id; });
        knoepfe[b.id].removeAttribute("data-urteil"); knoepfe[b.id].removeAttribute("data-wort"); stapel.appendChild(knoepfe[b.id]);
      }
    });
    zur.hidden = true; speichere(); stand(); zeichne(); verbListe(); frisch();
    ansage.textContent = "Die Karten liegen wieder im Stapel.";
  }

  /* zweiter Teil: verbinden – zwei Karten, eine Beziehung, ein Weil-Satz */
  var verbKn, form, vliste, netzSatz, beispiele, selRel, weil, okKn;
  function verbinden() {
    if (verbKn) return;
    verbKn = knopf("Verbindung legen", { gedrueckt: "false", klick: function () { setzeModus(!modus); } });
    selRel = h("select", { id: "verb-rel" }, D.e1.rel.map(function (r) { return h("option", { text: r }); }));
    weil = h("textarea", { id: "verb-weil", rows: 2, placeholder: "weil …" });
    okKn = knopf("Verbindung festhalten", { art: "primaer", aus: true, klick: festhalten });
    form = h("div", { class: "verb", hidden: true }, h("p", {}, h("strong", { id: "verb-a" }), h("label", { class: "sr", for: "verb-rel", text: "Art der Verbindung" }), selRel, h("strong", { id: "verb-b" })),
      h("div", { class: "feld" }, h("label", { for: "verb-weil", text: "weil …" }), weil), h("div", { class: "reihe" }, okKn, knopf("Abbrechen", { art: "still", klick: function () { setzeModus(true); } })));
    vliste = h("ol", { class: "verb-liste" });
    netzSatz = h("p", { class: "hinweis", "aria-live": "polite" });
    beispiele = h("details", { class: "mehr", hidden: true }, h("summary", { text: "Beispiele der Lehrkraft – keine Musterlösung" }), liste_beispiele());
    weil.addEventListener("input", function () { okKn.disabled = weil.value.trim().length < 8; });
    verbBox.appendChild(h("h2", { class: "abschnitt", text: "Begriffe verbinden" }));
    verbBox.appendChild(kasten("auftrag", null, p("Die drei Formen brauchen einander. Zeigen Sie das: Legen Sie mindestens zwei Verbindungen zwischen Karten und begründen Sie jede mit »weil …«.")));
    verbBox.appendChild(h("div", { class: "reihe" }, verbKn));
    verbBox.appendChild(form); verbBox.appendChild(vliste); verbBox.appendChild(netzSatz); verbBox.appendChild(beispiele);
    verbBox.appendChild(kasten("raum", null, p("Danach im Plenum: Eine Gruppe zeigt ihr Netz am Smartboard. Welcher Begriff ist am stärksten vernetzt – und warum?")));
    verbListe();
  }
  function liste_beispiele() { return liste(["freie Wahlen → <b>braucht</b> → freie Medien, weil man nur wählen kann, worüber man sich informieren konnte.", "Schutz von Minderheiten → <b>ermöglicht</b> → gesellschaftliche Vielfalt, weil niemand sich anpassen muss, um seine Rechte zu behalten."]); }
  function setzeModus(an) {
    modus = an; paar = []; waehle(null);
    verbKn.setAttribute("aria-pressed", String(an)); verbKn.textContent = an ? "Verbinden beenden" : "Verbindung legen";
    D.e1.begriffe.forEach(function (b) { knoepfe[b.id].removeAttribute("data-verb"); });
    form.hidden = true;
    ansage.textContent = an ? "Verbinden: Tippen Sie zwei gelegte Karten nacheinander an." : "Tippen Sie eine Karte an.";
  }
  function paarTipp(id) {
    if (!w.lage[id]) { ansage.textContent = "Diese Karte liegt noch im Stapel. Legen Sie sie zuerst."; return; }
    if (paar.indexOf(id) >= 0 || paar.length >= 2) return;
    paar.push(id); knoepfe[id].setAttribute("data-verb", "");
    if (paar.length === 2) {
      $("#verb-a").textContent = B[paar[0]].name; $("#verb-b").textContent = B[paar[1]].name;
      weil.value = ""; okKn.disabled = true; form.hidden = false; form.scrollIntoView({ block: "nearest" }); weil.focus();
    } else ansage.textContent = "»" + B[id].name + "« – tippen Sie jetzt die zweite Karte an.";
  }
  function festhalten() {
    var l = { a: paar[0], b: paar[1], r: selRel.selectedIndex, n: Date.now() % 1e9 };
    w.links.push(l); setTxt("e1.netz.weil." + l.n, weil.value.trim().replace(/^weil\s+/i, ""));
    speichere(); setzeModus(true); zeichne(); verbListe(); frisch();
  }
  function verbListe() {
    if (!vliste) return;
    vliste.textContent = "";
    var grad = {};
    w.links.forEach(function (l, i) {
      if (!B[l.a] || !B[l.b]) return;
      grad[l.a] = (grad[l.a] || 0) + 1; grad[l.b] = (grad[l.b] || 0) + 1;
      var weilT = txt("e1.netz.weil." + l.n);
      vliste.appendChild(h("li", {}, B[l.a].name + " → " + D.e1.rel[l.r] + " → " + B[l.b].name + (weilT ? ", " : ""), weilT ? h("span", { text: "weil " + weilT }) : null,
        knopf("entfernen", { art: "still", label: "Verbindung " + (i + 1) + " entfernen", klick: function () { w.links.splice(i, 1); speichere(); zeichne(); verbListe(); frisch(); } })));
    });
    var ids = Object.keys(grad).sort(function (a, b) { return grad[b] - grad[a]; });
    if (w.links.length < 2) netzSatz.textContent = w.links.length ? "Noch eine Verbindung bis zu Ihrem Netz." : "";
    else { var top = ids.filter(function (i) { return grad[i] === grad[ids[0]]; }).map(function (i) { return "»" + B[i].name + "«"; });
      netzSatz.textContent = "Am stärksten vernetzt " + (top.length === 1 ? "ist " : "sind ") + top.join(" und ") + " (" + grad[ids[0]] + (grad[ids[0]] === 1 ? " Verbindung" : " Verbindungen") + "). Warum gerade " + (top.length === 1 ? "dieser Begriff" : "diese Begriffe") + "?"; }
    beispiele.hidden = w.links.length < 2;
  }
  /* Linien enden am Rand der Karten, nicht in ihrer Mitte (Line-to-Target) */
  function rand(c, hw, hh, dx, dy) { var t = Math.min(dx ? hw / Math.abs(dx) : Infinity, dy ? hh / Math.abs(dy) : Infinity); return [c[0] + dx * t, c[1] + dy * t]; }
  function zeichne() {
    var m = matte.getBoundingClientRect();
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    if (!m.width) return;
    svg.setAttribute("viewBox", "0 0 " + m.width + " " + m.height);
    w.links.forEach(function (l) {
      if (!w.lage[l.a] || !w.lage[l.b]) return;
      var a = knoepfe[l.a].getBoundingClientRect(), b = knoepfe[l.b].getBoundingClientRect();
      var ca = [a.left + a.width / 2 - m.left, a.top + a.height / 2 - m.top], cb = [b.left + b.width / 2 - m.left, b.top + b.height / 2 - m.top];
      var dx = cb[0] - ca[0], dy = cb[1] - ca[1], len = Math.sqrt(dx * dx + dy * dy) || 1; dx /= len; dy /= len;
      var s = rand(ca, a.width / 2 + 3, a.height / 2 + 3, dx, dy), e = rand(cb, b.width / 2 + 3, b.height / 2 + 3, -dx, -dy);
      svg.appendChild(sv("line", { x1: s[0], y1: s[1], x2: e[0], y2: e[1] }));
      var wort = D.e1.rel[l.r], bw = wort.length * 8.6 + 18, mx = (s[0] + e[0]) / 2, my = (s[1] + e[1]) / 2;
      svg.appendChild(sv("rect", { x: mx - bw / 2, y: my - 14, width: bw, height: 28, rx: 5 }));
      svg.appendChild(sv("text", { x: mx, y: my }, wort));
    });
  }
  window.addEventListener("resize", bald(zeichne, 120));
  stand();
  if (w.geprueft && gelegt() >= 5) zwischenstand(null, true);
  requestAnimationFrame(zeichne);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(zeichne);
}

/* ---------- Dreibein: sechs Fragen, drei Beine, ein Brett (Modell – es misst nichts) ---------- */
function beinWerte(z) {
  var r = {};
  ["h", "g", "l"].forEach(function (f) {
    var werte = D.e1.kriterien.filter(function (k) { return k.form === f; }).map(function (k) { return z[k.id]; });
    var gez = werte.filter(function (x) { return x === 0 || x === 1 || x === 2; });
    r[f] = { wert: gez.length ? gez.reduce(function (a, b) { return a + b; }, 0) / gez.length : null, offen: werte.every(function (x) { return x === undefined; }), frei: werte.every(function (x) { return x === 3; }) };
  });
  return r;
}
function beantwortet(z) { return D.e1.kriterien.filter(function (k) { return z[k.id] !== undefined; }).length; }
function instrument(box, key, opt) {
  opt = opt || {};
  var fw = W("e1.fall", {}); fw.inst = fw.inst || {};
  var z = fw.inst[key] = fw.inst[key] || {};
  var X = { h: 140, g: 300, l: 460 }, BODEN = 250, VOLL = 160, lang = { h: VOLL, g: VOLL, l: VOLL }, ziel = {}, raf = 0;
  var wrap = h("div", { class: "dreibein" });
  var svgB = sv("svg", { viewBox: "0 0 600 344", role: "img", "aria-label": "Modell: ein Brett auf drei Beinen – Herrschaft, Gesellschaft, Leben" });
  svgB.appendChild(sv("rect", { x: 20, y: 288, width: 560, height: 48, rx: 12, "class": "db-fund" }));
  svgB.appendChild(sv("text", { x: 300, y: 319, "class": "db-fundtext" }, "Kinderrechte: Schutz · Förderung · Beteiligung"));
  svgB.appendChild(sv("line", { x1: 40, y1: BODEN, x2: 560, y2: BODEN, "class": "db-boden" }));
  var geist = sv("polyline", { "class": "db-geist" }); svgB.appendChild(geist);
  var beine = {};
  ["h", "g", "l"].forEach(function (f) {
    beine[f] = sv("line", { x1: X[f], x2: X[f], y1: BODEN, y2: BODEN - VOLL, "class": "db-bein db-bein--" + f }); svgB.appendChild(beine[f]);
    svgB.appendChild(sv("text", { x: X[f], y: BODEN + 27, "class": "db-name" }, D.e1.beinName[f]));
  });
  var brett = sv("polyline", { "class": "db-brett" }); svgB.appendChild(brett);
  var kugel = sv("circle", { r: 15, "class": "db-kugel" }); svgB.appendChild(kugel);
  var wort = h("p", { class: "dreibein__wort", "aria-live": "polite" });
  wrap.appendChild(h("figure", { class: "dreibein__bild" }, svgB, wort, h("figcaption", { class: "meta", text: "Modell – es misst nichts. Es zeigt, wie Ihre sechs Antworten zusammenwirken." })));
  var fragen = h("div", { class: "dreibein__fragen" });
  ["h", "g", "l"].forEach(function (f) {
    var gruppe = h("div", { class: "kgruppe kgruppe--" + f }, h("p", { class: "kgruppe__kopf", text: D.e1.formen[f] }));
    D.e1.kriterien.filter(function (k) { return k.form === f; }).forEach(function (k) {
      var reihe = h("div", { class: "kwahl" });
      D.e1.stufen.forEach(function (st) {
        var inp = h("input", { type: "radio", name: key + "-" + k.id, value: st[0], checked: z[k.id] === st[0] || null });
        inp.addEventListener("change", function () { z[k.id] = st[0]; speichere(); zeige(true); if (opt.aendern) opt.aendern(z); });
        reihe.appendChild(h("label", {}, inp, h("span", { text: st[1] })));
      });
      gruppe.appendChild(h("fieldset", { class: "kfrage" }, h("legend", { text: k.text }), reihe));
    });
    fragen.appendChild(gruppe);
  });
  wrap.appendChild(fragen);
  box.appendChild(wrap);
  function laenge(v) { return v === null ? VOLL : 70 + 45 * v; }
  function punkte(L) { return [[78, BODEN - L.h], [X.h, BODEN - L.h], [X.g, BODEN - L.g], [X.l, BODEN - L.l], [522, BODEN - L.l]]; }
  function male(L) {
    ["h", "g", "l"].forEach(function (f) { beine[f].setAttribute("y2", BODEN - L[f]); });
    brett.setAttribute("points", punkte(L).map(function (q) { return q.join(","); }).join(" "));
    var min = Math.min(L.h, L.g, L.l), tief = ["h", "g", "l"].filter(function (f) { return L[f] - min < 1; });
    var kx = tief.length === 3 ? X.g : tief.map(function (f) { return X[f]; }).reduce(function (a, b) { return a + b; }, 0) / tief.length;
    var ky = BODEN - (kx <= X.g ? L.h + (L.g - L.h) * (kx - X.h) / (X.g - X.h) : L.g + (L.l - L.g) * (kx - X.g) / (X.l - X.g));
    kugel.setAttribute("cx", kx); kugel.setAttribute("cy", ky - 8 - 15);
  }
  function mittelLaenge(werte) { var mit = ["h", "g", "l"].filter(function (f) { return werte[f].wert !== null; }); return mit.length ? mit.map(function (f) { return laenge(werte[f].wert); }).reduce(function (x, y) { return x + y; }, 0) / mit.length : VOLL; }
  function zeige(bewegt) {
    var bw = beinWerte(z), mittel = mittelLaenge(bw);
    ["h", "g", "l"].forEach(function (f) { ziel[f] = bw[f].wert === null ? mittel : laenge(bw[f].wert); beine[f].setAttribute("data-art", bw[f].frei ? "frei" : (bw[f].offen ? "offen" : "fest")); });
    var n = beantwortet(z), werte = ["h", "g", "l"].filter(function (f) { return bw[f].wert !== null; });
    var min = werte.length ? Math.min.apply(null, werte.map(function (f) { return bw[f].wert; })) : null;
    var kurz = werte.filter(function (f) { return bw[f].wert === min && min < 2; }).map(function (f) { return D.e1.formen[f]; });
    var st = min === null ? "offen" : (min >= 2 ? "stabil" : (min >= 1 ? "wackelt" : "kippt"));
    wrap.setAttribute("data-stand", st);
    wort.textContent = st === "offen" ? "Noch offen – beantworten Sie die Fragen." : (st === "stabil" ? "Steht stabil." : (st === "wackelt" ? "Wackelt. " : "Kippt. ") + (kurz.length ? "Am kürzesten: " + kurz.join(" und ") + "." : "")) + (n < 6 && st !== "offen" ? " (" + n + " von 6 Fragen beantwortet)" : "");
    if (opt.geist) { var g = beinWerte(fw.inst[opt.geist] || {}), gm = mittelLaenge(g); geist.setAttribute("points", punkte({ h: g.h.wert === null ? gm : laenge(g.h.wert), g: g.g.wert === null ? gm : laenge(g.g.wert), l: g.l.wert === null ? gm : laenge(g.l.wert) }).map(function (q) { return q.join(","); }).join(" ")); }
    cancelAnimationFrame(raf);
    if (!bewegt || ruhig()) { lang = { h: ziel.h, g: ziel.g, l: ziel.l }; male(lang); return; }
    var von = { h: lang.h, g: lang.g, l: lang.l }, t0 = null;
    (function schritt(t) { if (t0 === null) t0 = t; var q = Math.min(1, (t - t0) / 420), e = 1 - Math.pow(1 - q, 3); ["h", "g", "l"].forEach(function (f) { lang[f] = von[f] + (ziel[f] - von[f]) * e; }); male(lang); if (q < 1) raf = requestAnimationFrame(schritt); })(performance.now());
  }
  zeige(false);
}

/* ---------- Auftrag 4: Kita-Fall – vermuten, prüfen, umbauen ---------- */
function fallSeite(box) {
  var w = W("e1.fall", {}); ["wahl", "fest", "geprueft", "inst"].forEach(function (k) { w[k] = w[k] || {}; });
  box.appendChild(p("Demokratie steht auf drei Beinen. Ist eines zu kurz, gerät alles ins Wanken – auch in der Kita. Prüfen Sie das an einem Fall.", "lauf"));
  box.appendChild(kasten("auftrag", null, p("Wählen Sie die Karte Ihrer Gruppe. Vermuten Sie zuerst, welches Bein zu kurz ist. Prüfen Sie dann mit den sechs Fragen – und bauen Sie die Situation um. Sie stellen Ihre Karte in höchstens 90 Sekunden vor.")));
  var chips = h("div", { class: "chips", role: "group", "aria-label": "Karte wählen" });
  var fbox = h("div", { class: "fluss" });
  D.e1.faelle.forEach(function (f) {
    chips.appendChild(knopf(f.id + " · " + f.titel, { art: "chip", gedrueckt: String(w.akt === f.id), klick: function () { w.akt = f.id; speichere(); $$("button", chips).forEach(function (b) { b.setAttribute("aria-pressed", String(b.textContent.indexOf(f.id + " ·") === 0)); }); zeigeFall(f); } }));
  });
  box.appendChild(chips); box.appendChild(fbox);
  function zeigeFall(f) {
    fbox.textContent = "";
    var vor = "fall-" + f.id + "-vor", nach = "fall-" + f.id + "-nach";
    fbox.appendChild(h("div", { class: "falltext" }, etikett("ausgedachter Fall · Karte " + f.id), h("h2", { class: "falltext__titel", text: f.titel }), p(esc(f.text), "falltext__text"), liste(f.fragen.map(esc))));
    var a = h("div", { class: "teil" }, h("h3", { class: "teil__kopf", text: "1 · Vermuten" }));
    var reihe = h("div", { class: "wahl__opt wahl__opt--reihe" });
    ["h", "g", "l"].forEach(function (k) {
      var inp = h("input", { type: "radio", name: "fall-" + f.id, value: k, checked: w.wahl[f.id] === k || null, disabled: w.fest[f.id] || null });
      inp.addEventListener("change", function () { if (w.fest[f.id]) return; w.wahl[f.id] = k; speichereBald(); pruefeA(); });
      reihe.appendChild(h("label", { class: "option" }, inp, h("span", { text: D.e1.formen[k] })));
    });
    a.appendChild(h("fieldset", { class: "wahl" }, h("legend", { text: "Welches Bein ist hier zu kurz?" }), reihe));
    var warum = feld("e1.fall.warum." + f.id, { label: "Ein Satz, warum:", platz: "Zu kurz ist …, weil …", rows: 2, bei: pruefeA, nurLesen: w.fest[f.id] });
    a.appendChild(warum);
    var kA = knopf("Festlegen", { art: "primaer", aus: true, klick: function () { w.fest[f.id] = true; speichere(); festA(true); } });
    var rA = h("div", { class: "reihe" }, kA); a.appendChild(rA);
    fbox.appendChild(a);
    var b = h("div", { class: "teil" }); fbox.appendChild(b);
    var c = h("div", { class: "teil" }); fbox.appendChild(c);
    function pruefeA() { kA.disabled = !(w.wahl[f.id] && txt("e1.fall.warum." + f.id).trim().length >= 12); }
    function festA(neu) {
      kA.hidden = true; rA.appendChild(stempel(neu)); $("textarea", warum).readOnly = true; $$("input", reihe).forEach(function (x) { x.disabled = true; });
      b.textContent = "";
      b.appendChild(h("h3", { class: "teil__kopf", text: "2 · Prüfen" }));
      b.appendChild(p("Beantworten Sie die Fragen für die Situation, wie sie auf der Karte steht. Beobachten Sie, was mit dem Brett passiert.", "lauf"));
      var ib = h("div"); b.appendChild(ib);
      var kB = knopf("Mit meiner Vermutung vergleichen", { art: "primaer", aus: true, klick: function () { w.geprueft[f.id] = true; speichere(); zeigeB(true); } });
      var sB = h("p", { class: "meta", "aria-live": "polite" });
      b.appendChild(h("div", { class: "reihe" }, kB, sB));
      var rueck = h("div", { class: "fluss", "aria-live": "polite" }); b.appendChild(rueck);
      function pruefeB() { var n = beantwortet(w.inst[vor] || {}); kB.disabled = n < 4; sB.textContent = w.geprueft[f.id] ? "" : (n < 4 ? "Beantworten Sie mindestens vier Fragen – bisher " + n + "." : n + " von 6 beantwortet."); }
      instrument(ib, vor, { aendern: pruefeB });
      function zeigeB(neu2) {
        var u = f.urteil[w.wahl[f.id]];
        kB.hidden = true; sB.textContent = ""; rueck.textContent = "";
        rueck.appendChild(rm(u[0], u[1], "Ihre Vermutung: " + D.e1.formen[w.wahl[f.id]]));
        if (!w.inst[nach]) { w.inst[nach] = JSON.parse(JSON.stringify(w.inst[vor] || {})); speichere(); }
        c.textContent = "";
        c.appendChild(h("h3", { class: "teil__kopf", text: "3 · Umbauen" }));
        c.appendChild(h("p", { class: "leitfrage leitfrage--klein", text: D.e1.zusatzfrage }));
        c.appendChild(feld("e1.fall.weg." + f.id, { label: "So ginge es demokratischer:", platz: "Die Fachkraft könnte … Die Kinder könnten …", rows: 3 }));
        c.appendChild(p("Stellen Sie die Fragen jetzt so ein, wie es nach Ihrem Vorschlag wäre. Die gestrichelte Linie zeigt, wie es vorher war.", "lauf"));
        var ic = h("div"); c.appendChild(ic); instrument(ic, nach, { geist: vor });
        c.appendChild(kasten("raum", null, p("Was lässt dieses Modell weg? Halten Sie einen Gedanken für das Plenum bereit – und stellen Sie Ihre Karte in höchstens 90 Sekunden vor.")));
        if (neu2) einblenden(rueck);
        frisch();
      }
      pruefeB(); if (w.geprueft[f.id]) zeigeB(false);
      if (neu) einblenden(b);
    }
    pruefeA(); if (w.fest[f.id]) festA(false);
  }
  if (w.akt) D.e1.faelle.forEach(function (f) { if (f.id === w.akt) zeigeFall(f); });
}

/* ---------- Zusammenfassung ---------- */
function zfE1(box) {
  var vor = S.w["e1.vor"] || {}, nach = S.w["e1.nach"] || {}, netz = S.w["e1.netz"] || { links: [] };
  var B = {}; D.e1.begriffe.forEach(function (b) { B[b.id] = b; });
  zusammenfassung(box, { kopf: "Etappe 1 · Drei Formen – ein Ganzes", frage: "Was ist Demokratie – und wo beginnt sie?",
    kern: "Demokratie ist mehr als Wählen und mehr als Mehrheit. Sie schützt die gleiche Würde und die gleichen Rechte jedes Menschen – in der Kita die jedes Kindes. Kinder lernen sie, indem sie sie erleben.",
    wissen: function () {
      return [h("div", { class: "tabelle-rahmen" }, h("table", { class: "zf-pruef" }, h("thead", {}, h("tr", {}, h("td"), ["Herrschaftsform", "Gesellschaftsform", "Lebensform"].map(function (x) { return h("th", { scope: "col", text: x }); }))),
        h("tbody", {}, [["Leitfrage", "Wie wird Macht begründet, kontrolliert, begrenzt?", "Wie leben Verschiedene zusammen?", "Wie gehen wir im Alltag miteinander um?"], ["Kinder erleben sie, wenn …", "sie abstimmen – und wenn auch die zählen, die überstimmt wurden.", "verschiedene Familien, Sprachen und Fähigkeiten normal sind.", "ihnen zugehört wird – auch ihrem Nein."], ["In der Kita", "Kinderkonferenz, Gruppenrat, Beschwerdeweg", "Familienwand, Mehrsprachigkeit", "Morgenkreis, Essen, Wickeln, Konflikt"]].map(function (r) { return h("tr", {}, h("th", { scope: "row", text: r[0] }), r.slice(1).map(function (x) { return h("td", { text: x }); })); })))),
        h("h3", { text: "Begriffe" }), h("dl", { class: "zf-begriffe" }, [["Volkssouveränität", "Die Herrschaft geht vom Volk aus, wird durch das Volk oder gewählte Vertretungen ausgeübt und zu seinem Nutzen eingesetzt."], ["Politische Gleichheit", "Gleiche Wahl- und Beteiligungsrechte für alle – unabhängig von Geschlecht, Herkunft oder Konfession."], ["Minderheitenschutz", "Rechte, die keine Mehrheit wegstimmen kann."], ["Selbstwirksamkeit", "Die Erfahrung: Meine Stimme zählt. Was ich tue, verändert etwas."]].map(function (b) { return h("div", {}, h("dt", { text: b[0] }), h("dd", { text: b[1] })); }))];
    },
    koennen: function () {
      return [h("div", { class: "werk" }, h("b", { text: "Denkwerkzeug: Wer entscheidet? Wer wird gehört? Wer gehört dazu?" }), p("Mit dem Dreibein prüfen: Welches Bein ist in einer Situation zu kurz – Herrschaft, Gesellschaft oder Leben? Das Fundament sind die Kinderrechte. Ein Modell – es misst nichts.")),
        h("h3", { text: "Mein Satz" }), mein(txt("e1.spur"), "noch offen – Auftrag 5"),
        h("h3", { text: "Meine Position" }), p(typeof vor.wert === "number" ? "Am Anfang: " + vor.wert + " von 10" + (typeof nach.wert === "number" ? " · am Ende: " + nach.wert + " von 10" : "") : "noch offen – Auftrag 1", "mein"),
        h("h3", { text: "Mein Netz" }), (netz.links || []).length ? h("ul", { class: "zf-liste" }, netz.links.map(function (l) { return B[l.a] && B[l.b] ? h("li", { text: B[l.a].name + " → " + D.e1.rel[l.r] + " → " + B[l.b].name + (txt("e1.netz.weil." + l.n) ? ", weil " + txt("e1.netz.weil." + l.n) : "") }) : null; })) : mein("", "noch offen – Auftrag 3"),
        (function () { var f = (S.w["e1.fall"] || {}).akt, weg = f ? txt("e1.fall.weg." + f) : ""; return weg ? h("div", {}, h("h3", { text: "Mein Kita-Fall · Karte " + f }), mein(weg)) : null; })(),
        txt("e1.praxis.schritt") ? h("div", {}, h("h3", { text: "Mein nächster Schritt in der Praxisstelle" }), mein(txt("e1.praxis.schritt"))) : null];
    } });
}
