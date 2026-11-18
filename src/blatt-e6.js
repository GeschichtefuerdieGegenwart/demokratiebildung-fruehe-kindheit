/* ===== Arbeitsblatt Etappe 6 · Demokratie im Alltag (Doppelstunde, Fassung 5.0) =====
   Tiefgang aus dem Impulsvortrag, Kapitel 11 (informelle Demokratiebildung: Mahlzeiten, Pflege, Schlafen, Morgenkreis)
   und 12 (Fassade und Willkür). Die Zahlen aus der BilDe-Studie stehen nicht auf dem Blatt, solange sie nicht
   am Original geprüft sind. Produkt: ein Beteiligungscheck mit Ampel und eine Veränderung. */

D.e6 = {
  these: "Demokratie in der Kita – das ist vor allem die Kinderkonferenz.",
  abruf: [
    ["Welche drei Fragen beantwortet eine Kita-Verfassung?", "Was entscheiden die Kinder allein? Wobei entscheiden sie mit? Was entscheiden die Erwachsenen – und informieren die Kinder?"],
    ["Was ist Beteiligung zum Schein?", "Kinder werden gefragt, aber ihre Antwort kann nichts ändern."],
    ["Was ist bei einem Beschwerdeweg entscheidend?", "Die Rückmeldung: Jede Beschwerde bekommt eine Antwort – auch eine Beschwerde ohne Worte."]
  ],
  orte: [
    { id: "m", titel: "Mahlzeiten", unter: "der wichtigste Übungsort",
      text: ["Mahlzeiten sind der wichtigste Übungsort für Demokratie – oder für ihr Gegenteil. Jeden Tag stellt sich dieselbe Frage: Wer entscheidet, was und wie viel auf den Teller kommt, wann man anfängt und ob man probieren muss?", "Am Tisch zeigt sich, ob Kinder erleben: Meine Stimme zählt."],
      quelle: "Nach dem Impulsvortrag, Kapitel 11",
      frage: "Die Teller werden gefüllt, bevor die Kinder am Tisch sitzen. Was lernen die Kinder dabei?",
      optionen: [
        ["Was auf meinen Teller kommt, entscheiden andere.", "zentral", "Jeden Tag und ohne ein Wort: Über das Essen des Kindes wird entschieden, ohne es zu fragen. Das ist Macht im Kleinen."],
        ["Dass es gerecht zugeht: Alle bekommen gleich viel.", "begruendbar", "Gleich viel ist nicht automatisch gerecht, wenn Hunger und Geschmack verschieden sind – das berührt den Prüfstein Förderung."],
        ["Nichts – es geht ja nur ums Essen.", "kaum", "Gerade weil es jeden Tag passiert, prägt es. Kleine Routinen lehren mehr als jedes Gespräch über Demokratie."]],
      merke: "Am Tisch lernen Kinder jeden Tag, ob ihre Stimme zählt." },
    { id: "w", titel: "Wickeln und Pflege", unter: "»Wer wickelt mich?«",
      text: ["In einer Krippe, die partizipativ arbeitet, dürfen die Kinder entscheiden, wer sie wickelt. Das klingt klein. Für ein zweijähriges Kind ist es eine grundlegende Erfahrung: Ich bestimme über meinen Körper mit.", "Das gilt auch beim Anziehen, Naseputzen und Eincremen: erst ankündigen, dann fragen, dann handeln."],
      quelle: "Beispiel nach dem Impulsvortrag, Kapitel 11",
      frage: "Warum ist die Wahl, wer wickelt, mehr als eine Kleinigkeit?",
      optionen: [
        ["Das Kind bestimmt über seinen eigenen Körper mit.", "zentral", "Über den eigenen Körper mitzubestimmen, ist eine Grunderfahrung – und ein Stück Schutz: Kinder lernen, dass ihr Nein zählt."],
        ["Es spart dem Team Zeit.", "kaum", "Darum geht es nicht – oft kostet es sogar etwas Zeit. Es geht um das Kind."],
        ["Es macht den Eltern weniger Sorgen.", "kaum", "Eltern einzubeziehen ist gut. Der Grund liegt aber beim Kind und seinem Körper."]],
      merke: "Pflege ist Beziehung: ankündigen, fragen, das Nein hören." },
    { id: "s", titel: "Schlafen und Eingewöhnung", unter: "»Will ich heute schlafen?«",
      text: ["Muss ein Kind, das nicht müde ist, trotzdem liegen – oder gibt es einen Ruheraum mit leisen Alternativen?", "Auch bei der Eingewöhnung kann das Kind mitbestimmen. Bei der partizipatorischen Eingewöhnung gibt nicht das Modell das Tempo vor, sondern das Kind: Sie ist abgeschlossen, wenn das Kind zeigt, dass sie abgeschlossen ist."],
      quelle: "Nach dem Impulsvortrag, Kapitel 11 · partizipatorische Eingewöhnung nach Alemzadeh (2023), im Vortrag zitiert – am Original noch zu prüfen",
      frage: "Ein Kind ist mittags nicht müde. Was ist die demokratische Lösung?",
      optionen: [
        ["Es ruht sich aus, darf aber leise spielen oder in einen Ruheraum gehen.", "zentral", "Ruhe für alle – aber nicht für jedes Kind auf dieselbe Weise. Das Kind entscheidet mit, wie es sich ausruht."],
        ["Es muss liegen bleiben, denn Regeln gelten für alle gleich.", "kaum", "Gleiche Regeln sind nicht automatisch gerecht. Ein Kind liegen zu lassen, das nicht müde ist, überhört sein Bedürfnis."],
        ["Das entscheiden allein die Eltern.", "begruendbar", "Absprachen mit den Eltern gehören dazu. Das Kind selbst gehört trotzdem gefragt."]],
      merke: "Ruhe ja – aber das Kind entscheidet mit, wie." },
    { id: "k", titel: "Morgenkreis", unter: "mitmachen, nicht mitmüssen",
      text: ["Ein Kind will im Morgenkreis nicht mitsingen. Darf es gehen – oder muss es still dabeisitzen?", "Der Morgenkreis ist auch ein Ort für Abstimmungen, die Kinder sehen und spüren können: Wer das eine Buch hören will, setzt sich auf einen Stuhl; wer das andere will, bleibt stehen. Für Krippenkinder ist das greifbarer als jeder Stimmzettel."],
      quelle: "Beispiele nach dem Impulsvortrag, Kapitel 11",
      frage: "Das Kind will nicht mitsingen. Was tun Sie?",
      optionen: [
        ["Es darf in der Nähe etwas anderes tun – sein Nein ist eine Botschaft.", "zentral", "Das Kind erlebt: Mein Nein wird gehört. Und es bleibt trotzdem Teil der Gruppe."],
        ["Es muss still dabeisitzen.", "kaum", "Dabeisitzen ohne Wahl ist kein Mitmachen. Das Kind lernt: Mein Nein zählt hier nicht."],
        ["Die Gruppe stimmt ab, ob es gehen darf.", "kaum", "Über das Nein eines einzelnen Kindes stimmt keine Mehrheit ab. Das wäre gerade kein Minderheitenschutz (Etappe 5)."]],
      merke: "Mitmachen heißt nicht mitmüssen. Abstimmen geht auch mit dem Körper." }
  ],
  arten: [["fassade", "Fassade", "rot"], ["willkuer", "Willkür", "gelb"], ["gelebt", "Gelebte Demokratie", "gruen"]],
  momente: [
    { id: "c1", text: "Ein Kita-Rat tagt einmal im Monat. Beim Mittagessen wird weiter aufgefüllt, ohne zu fragen.", zu: "fassade", warum: "Das Gremium gibt es, im Alltag entscheiden aber weiter die Erwachsenen." },
    { id: "c2", text: "Eine Fachkraft fragt die Kinder bei allem. Am Nachbartisch gilt: »Iss auf.« Vereinbart ist nichts.", zu: "willkuer", warum: "Ob Kinder mitbestimmen, hängt davon ab, an welchem Tisch sie sitzen." },
    { id: "c3", text: "In der Kita-Verfassung steht: »Die Kinder entscheiden, was und wie viel auf ihren Teller kommt.« Am Tisch fragen alle Fachkräfte jeden Tag nach.", zu: "gelebt", warum: "Vereinbarung und Alltag passen zusammen." },
    { id: "c4", text: "Der Beschwerdebriefkasten hängt so hoch, dass kein Kind ihn erreicht.", zu: "fassade", warum: "Das Verfahren steht auf dem Papier, für die Kinder ist es nicht erreichbar." },
    { id: "c5", text: "Heute dürfen die Kinder selbst entscheiden, ob sie schlafen – morgen nicht, je nach Dienstplan.", zu: "willkuer", warum: "Ohne feste Absprache entscheidet die Tagesform der Erwachsenen." },
    { id: "c6", text: "Die Kinder haben die Stopp-Regel selbst beschlossen. Alle Fachkräfte achten im Alltag darauf.", zu: "gelebt", warum: "Eine feste Regel mit Wirkung im Alltag: Sie gehört jedem Kind, ohne dass jedes Mal neu entschieden werden muss." }
  ],
  check: ["Wird das Kind gefragt, bevor entschieden wird?", "Kann seine Antwort etwas verändern?", "Gilt das bei allen Fachkräften und an jedem Tag?", "Kann das Kind auch ohne Worte zeigen, was es will?", "Erfährt das Kind, warum etwas feststeht?"]
};

blatt({
  id: "e6", etappe: 6, art: "doppelstunde", dauer: 90, titel: "Demokratie im Alltag",
  frage: "Was erleben Kinder in den vielen Stunden zwischen den Gremien?",
  karte: "Sieben Aufträge · 90 Minuten · am Ende steht Ihr Beteiligungscheck für eine Alltagssituation.",
  darum: "Ein Kita-Rat tagt vielleicht einmal im Monat. Gegessen, gewickelt und geschlafen wird jeden Tag. Heute untersuchen Sie die Situationen, in denen Kinder am häufigsten erleben, ob ihre Stimme zählt – und Sie prüfen, wo einer Einrichtung eher die Verfahren fehlen und wo eher die Haltung. Am Ende steht Ihr Beteiligungscheck für eine dieser Situationen.",
  ziele: ["an Alltagssituationen erklären, was informelle Demokratiebildung ist,", "Fassade und Willkür unterscheiden und erklären, warum es Verfahren und Haltung braucht,", "eine Alltagssituation mit einem Beteiligungscheck prüfen."],
  hinweis: "Auftrag 6 und das Extra fragen nach Ihrer Praxisstelle. Das ist freiwillig – Sie können auch an eine ausgedachte Kita denken. Bewertet wird nur Ihr eigenes Handeln. Schreiben Sie keine Namen auf.",
  spur: "e6.spur", spurAnfang: "Demokratie im Alltag heißt für mich: …", spurFrage: "Was heißt Demokratie im Alltag der Kita? Ein Satz genügt.",
  kann: ["Ich kann an Alltagssituationen erklären, was informelle Demokratiebildung ist.", "Ich kann Fassade und Willkür unterscheiden.", "Ich kann eine Alltagssituation mit einem Beteiligungscheck prüfen."],
  papier: "Digital ist der Kern beim Verdecken und Aufdecken: die Festlegung je Alltagsort mit Rückmeldung, das Legen mit Vorschlag und die Ampel mit Wort. Die Veränderung gibt es als Schreibblatt für den Stift; die vier Orte können auch als Stationen im Raum liegen.",
  lk: [
    ["Vor der Stunde", ["Am Gerät vorne »Alle Aufträge auf diesem Gerät freigeben« wählen.", "Stammgruppen zu viert bilden. In Auftrag 4 übernimmt jede Person zuerst einen Ort."]],
    ["Plenumsstellen", ["Nach Auftrag 2: Bei welcher Antwort lernt Anna, dass ihre Stimme zählt? Zwei oder drei Begründungen.", "Nach Auftrag 3: Positionslinie 0–10.", "Auftrag 4: Jede Person erklärt ihrer Stammgruppe ihren Ort in höchstens 90 Sekunden.", "Nach Auftrag 5: Stille Reflexion aus dem Vortrag – wo fehlt eher die Struktur, wo eher die Haltung? Freiwillig teilen.", "Nach Auftrag 6: Zwei Veränderungen vorlesen; die Klasse prüft: Fassade, Willkür – oder trägt es?", "Auftrag 7: Positionslinie noch einmal; Stimmkarte A · B · C zählen."]],
    ["Wenn die Zeit knapp wird", ["K1 · Im Puzzle legt sich jede Person nur bei ihrem eigenen Ort fest; die anderen hört sie in der Stammgruppe (– 6 Min.).", "K2 · Auftrag 1 mündlich im Plenum (– 2 Min.).", "K3 · Auftrag 5 gemeinsam am Gerät vorne legen (– 5 Min.)."]],
    ["Status der Inhalte", ["Szene »Erbsen esse ich nicht!«: nach Doll, Herrmann u. a. (2020, S. 25 f.), im Impulsvortrag erzählt – Fundstelle noch zu prüfen; die drei Reaktionen sind zugespitzt.", "Beispiele zu Wickeln, Schlafen und Morgenkreis: nach dem Impulsvortrag, Kapitel 11. Alemzadeh (2023): im Vortrag zitiert, am Original noch zu prüfen.", "Fassade und Willkür: nach Hansen, Knauer und Sturzenhecker, im Impulsvortrag, Kapitel 12. Zitat Bartosch u. a. (2014, S. 14): im Vortrag zitiert, am Original noch zu prüfen. Die Momente in Auftrag 5: ausgedacht.", "Die Zahlen der BilDe-Studie zu Mahlzeiten aus dem Vortrag stehen bewusst nicht auf dem Blatt, solange sie nicht am Original geprüft sind.", "Welche Antwort »zentral« ist und wohin eine Karte gehört, ist ein Vorschlag."]]
  ],
  auftraege: [
    aufAbruf("e6", D.e6.abruf, "Heute geht es um die Stunden <b>zwischen</b> den festen Verfahren."),
    aufSzene("e6", 2, { min: 6, danach: function () { return [kasten("sicherung", null, p("Drei Fachkräfte, derselbe Tisch, dasselbe Kind – drei ganz verschiedene Lernerfahrungen. Das ist keine Frage der Methode, sondern der Haltung. Die Verantwortung für das Essen bleibt trotzdem bei der Fachkraft.")), kasten("raum", null, p("Zu zweit: Welche der drei Antworten haben Sie selbst als Kind gehört?"))]; } }),
    aufPosition("e6", 3, D.e6.these),
    { id: "a4", nr: "4", kurz: "Vier Orte", phase: "Erarbeitung", name: "Vier Orte im Alltag", form: "Gruppenpuzzle zu viert", min: 22, frei: "ansage", gleich: "Mahlzeiten, Wickeln, Schlafen, Morgenkreis – jede Person übernimmt zuerst einen Ort.", prinzip: "Verdecken · Rückmelden – je Ort eine Festlegung", raum: "Stammgruppe: jeden Ort in höchstens 90 Sekunden erklären",
      fertig: function () { return kartenFest("e6.ort", D.e6.orte) >= 4; },
      seite: function (box) {
        box.appendChild(kasten("auftrag", null, p("Ihre Stammgruppe teilt die vier Orte auf. Lesen Sie Ihre Karte, legen Sie sich fest und begründen Sie in einem Satz. Erklären Sie Ihren Ort dann der Stammgruppe – in höchstens 90 Sekunden. Danach legen sich alle auch bei den anderen drei Orten fest."), p("<b>Fertig sind Sie mit allen vier Orten.</b>")));
        kartenRunde(box, "e6.ort", D.e6.orte, { titel: "Vier Orte", feld: ["Ihr Satz für die Stammgruppe (freiwillig):", "An diesem Ort lernen Kinder …"] });
      } },
    { id: "a5", nr: "5", kurz: "Fassade oder Willkür", phase: "Sichern und üben", name: "Fassade oder Willkür?", form: "allein, dann zu zweit", min: 14, frei: "antwort", nach: "a4", fehlt: "Dieser Auftrag öffnet sich, wenn Sie bei allen vier Orten festgelegt sind (Auftrag 4).", prinzip: "Verdecken – erst legen, dann der Vorschlag", raum: "Stille Reflexion: Wo fehlt eher die Struktur, wo eher die Haltung?",
      fertig: function () { return legenFertig("e6.art"); },
      seite: function (box) {
        box.appendChild(kasten("wissen", "Verfahren und Haltung brauchen einander",
          p("Feste Verfahren ohne gelebten Alltag sind <b>Fassade</b>: Ein Kinderrat tagt einmal im Monat, während im Alltag weiter nur die Erwachsenen entscheiden."),
          p("Ein freundlicher Alltag ohne feste Verfahren wird zu <b>Willkür</b>: Heute darf ich, morgen nicht – je nach Fachkraft."),
          p("Erst beides zusammen ist <b>gelebte Demokratie</b>: eine Kita-Verfassung und die tägliche Aushandlung am Tisch."),
          p("Nach Hansen, Knauer und Sturzenhecker, im Impulsvortrag, Kapitel 12", "quelle")));
        box.appendChild(kasten("auftrag", null, p("Sechs Momente aus Kitas. Tippen Sie eine Karte an und dann die Spalte. Wenn alle liegen, vergleichen Sie mit dem Vorschlag.")));
        legen(box, "e6.art", D.e6.momente, D.e6.arten, { danach: function () {
          return [kasten("sicherung", null, p("»Demokratiebildung ist aktive Herstellung von Chancen zur Partizipation.«"), p("Bartosch u. a. (2014, S. 14), im Impulsvortrag zitiert – am Original noch zu prüfen", "quelle")),
            kasten("raum", "Stille Reflexion", p("Wo fehlt in Ihrer Praxisstelle eher das Verfahren – und wo eher die Haltung? Denken Sie still nach. Teilen ist freiwillig."))];
        } });
      } },
    { id: "a6", nr: "6", kurz: "Ihr Check", phase: "Übertragen und Ausblick", name: "Ihr Beteiligungscheck", form: "allein · freiwillig mit Praxisbezug", min: 18, frei: "antwort", nach: "a5", schreib: true, fehlt: "Ihr Check öffnet sich nach Auftrag 5.", prinzip: "Ihr Bild auf einen Blick – Ampel mit Wort", raum: "Zwei Veränderungen vorlesen: Fassade, Willkür – oder trägt es?",
      fertig: function () { return ampelFertig("e6.check", D.e6.check.length) && !!(S.w["e6.veraend"] && S.w["e6.veraend"].zu); },
      seite: function (box) {
        var w = W("e6.sit");
        box.appendChild(kasten("auftrag", null, p("Wählen Sie eine Alltagssituation aus Ihrer Praxisstelle – oder aus einer ausgedachten Kita. Prüfen Sie sie mit den fünf Fragen. Schreiben Sie danach eine Veränderung in zwei oder drei Sätzen.")));
        var chips = h("div", { class: "chips", role: "group", "aria-label": "Situation wählen" });
        ["Mittagessen", "Wickeln und Pflege", "Schlafen und Ruhe", "Morgenkreis", "Anziehen"].forEach(function (s) {
          chips.appendChild(knopf(s, { art: "chip", gedrueckt: String(w.sit === s), klick: function () { w.sit = s; speichere(); $$("button", chips).forEach(function (b) { b.setAttribute("aria-pressed", String(b.textContent === s)); }); } }));
        });
        box.appendChild(h("fieldset", { class: "gruppe" }, h("legend", { text: "Meine Situation:" }), chips));
        box.appendChild(h("h2", { class: "abschnitt", text: "Fünf Fragen" }));
        ampel(box, "e6.check", D.e6.check, { rot: "In dieser Situation entscheiden noch die Erwachsenen allein. Ihr nächster Schritt liegt bei der ersten Frage.", gelb: "Ein guter Anfang. Bei den Fragen mit »teils« oder »nein« liegt Ihre Veränderung.", gruen: "Die Kinder entscheiden hier wirklich mit. Prüfen Sie, ob das auch an anderen Tagen und bei anderen Fachkräften gilt." });
        box.appendChild(h("h2", { class: "abschnitt", text: "Ihre Veränderung" }));
        produkt(box, "e6.veraend", { label: "Was ändern Sie – und was sagen Sie den Kindern?", platz: "Ab morgen … Ich sage den Kindern: »…«", rows: 4, min: 20,
          kriterien: [["Grundlegend", "Die Veränderung ist konkret und passt zur gewählten Situation."], ["Sicher", "Sie sagt, was die Kinder dann entscheiden – und was die Erwachsenen weiter entscheiden."], ["Souverän", "Sie wird abgesichert, damit sie weder Fassade noch Willkür wird: im Team abgesprochen oder in der Kita-Verfassung festgehalten."]] });
        box.appendChild(p("Eine Einschätzung aus Ihrer Sicht – keine Bewertung Ihrer Praxisstelle. Keine Namen.", "meta"));
      } },
    aufRueckblick("e6", 7, D.e6.these, "a6", { fehlt: "Der Rückblick öffnet sich, wenn Ihr Check fertig ist (Auftrag 6)." }),
    aufZf("e6", "a7", function (box) {
      zfDaten(box, { kopf: "Etappe 6 · Demokratie im Alltag", frage: "Was erleben Kinder in den vielen Stunden zwischen den Gremien?",
        kern: "Informelle Demokratiebildung ist die Dauerleistung: Mahlzeiten, Pflege, Schlafen, Spiel, Konflikte, Morgenkreis. Feste Verfahren ohne gelebten Alltag sind Fassade. Ein freundlicher Alltag ohne feste Verfahren ist Willkür. Erst beides zusammen ist gelebte Demokratie.",
        begriffe: [
          ["Informelle Demokratiebildung", "Gelebte Demokratie im Alltag – die vielen kleinen Aushandlungen am Tisch, im Flur, im Sandkasten, beim Wickeln."],
          ["Alltagspartizipation", "Beteiligung in den kleinen Situationen des Tages."],
          ["Fassade", "Es gibt ein Gremium, im Alltag entscheiden aber weiter nur die Erwachsenen."],
          ["Willkür", "Ob Kinder mitbestimmen, hängt von der Fachkraft oder vom Tag ab."],
          ["Stopp-Regel", "Eine feste Regel, die jedem Kind gehört – mit Wirkung im ganzen Alltag."],
          ["Partizipatorische Eingewöhnung", "Das Kind bestimmt das Tempo mit; sie endet, wenn das Kind zeigt, dass sie abgeschlossen ist."]],
        tabelle: { kopf: ["Ort", "Die Frage an den Alltag"], zeilen: [
          ["Mahlzeiten", "Wer entscheidet, was und wie viel auf den Teller kommt?"], ["Wickeln und Pflege", "Wer wickelt mich – und wird mein Nein gehört?"],
          ["Schlafen", "Muss ich liegen, wenn ich nicht müde bin?"], ["Morgenkreis", "Darf ich Nein sagen und trotzdem dazugehören?"]] },
        werk: ["Denkwerkzeug: Fassade oder Willkür?", ["Gibt es eine feste Vereinbarung?", "Lebt sie im Alltag – bei allen Fachkräften, an jedem Tag?", "Wissen die Kinder davon und können sie sie nutzen?"]],
        mein: [["Mein Beteiligungscheck", function () { var s = S.w["e6.sit"] && S.w["e6.sit"].sit, a = ampelWort("e6.check", D.e6.check.length); return h("div", {}, mein(s ? "Situation: " + s : "", "noch offen – Auftrag 6"), a ? p("Meine Ampel: " + a, "meta") : null); }],
          ["Meine Veränderung", "e6.veraend", "noch offen – Auftrag 6"], ["Mein Satz für die Lernspur", "e6.spur", "noch offen – Auftrag 7"]],
        aufgabe: "Erläutern Sie an einer Mahlzeit, was informelle Demokratiebildung ist. Zeigen Sie, warum eine Kita dafür Verfahren und Haltung braucht." });
    }),
    aufExtra("e6", "Eine Mahlzeit beobachten", {
      auftrag: "Freiwillig – nur wenn Sie möchten. Beobachten Sie in Ihrer Praxisstelle eine Mahlzeit: Wer entscheidet, was und wie viel auf den Teller kommt? Notieren Sie in Stichworten, ohne Namen von Kindern, Eltern oder Kolleginnen und Kollegen.",
      felder: [["beob", "Was ich beobachtet habe", "Die Teller … Die Kinder …"], ["art", "Fassade, Willkür oder gelebte Demokratie? Nennen Sie die Fundstelle (Auftrag 5).", "Eher …, weil …"], ["urteil", "Ein Satz zu Ihrem Urteil: Was müsste sich ändern, damit die Kinder mitentscheiden?", "Ich denke, …"]] })
  ]
});
