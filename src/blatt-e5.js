/* ===== Arbeitsblatt Etappe 5 · Kinder beteiligen – aber wie? (Doppelstunde, Fassung 5.0) =====
   Aus DS 4 (28.10.2026): Fall Matschhose, vier Ecken, Beteiligung oder Schein, Gruppenpuzzle Kinderkonferenz ·
   Beschwerdeweg · Kita-Verfassung, Fall neu lösen, Beteiligungsformat mit Ampel, Rückkehr in die Ecken.
   Tiefgang aus dem Impulsvortrag, Kapitel 6 (Minderheitenschutz) und 10 (formelle Demokratiebildung). */

D.e5 = {
  abruf: [
    ["Was verlangt Artikel 12 der UN-Kinderrechtskonvention?", "Jedes Kind darf seine Meinung in allen Angelegenheiten sagen, die es betreffen. Sie wird nach Alter und Reife berücksichtigt."],
    ["Was gehört nach § 45 SGB VIII zur Betriebserlaubnis einer Kita?", "In der Regel Verfahren für Beteiligung und Beschwerde – und ein Konzept zum Schutz vor Gewalt."],
    ["Nennen Sie die drei Prüfsteine.", "Schutz · Förderung · Beteiligung."]
  ],
  fall: "Es regnet seit dem Morgen. Im Morgenkreis fragt die Fachkraft: »Wer will heute ohne Matschhose rausgehen?« Neun Kinder melden sich, vier nicht. An der Tür sagt die Fachkraft: »Bei dem Wetter ziehen alle die Matschhose an.« Ein Kind ruft: »Aber wir haben doch abgestimmt!«",
  ecken: { frage: "Was ist hier schiefgelaufen – und was sollte die Fachkraft jetzt tun?", optionen: [
    ["A · Abgestimmt ist abgestimmt. Die Kinder gehen ohne Matschhose.", "kaum", "Naheliegend, denn die Abstimmung war fair. Ecke A übersieht aber den Schutzauftrag: Schutz und Beteiligung gehören zusammen – über Gesundheit stimmt keine Mehrheit ab."],
    ["B · Die Fachkraft hebt die Abstimmung auf. Gesundheit geht vor.", "begruendbar", "In der Sache vertretbar. Ohne Begründung und ohne ein Wort zum eigenen Fehler beschädigt sie aber das Vertrauen der Kinder in Beteiligung."],
    ["C · Über die Matschhose hätte gar nicht abgestimmt werden dürfen.", "zentral", "Der Fehler lag vor der Abstimmung: Abgestimmt wurde über etwas, das die Fachkraft gar nicht abgeben wollte. Das war Beteiligung zum Schein – die Kinder lernen: Unsere Stimme zählt nicht."],
    ["D · Es gibt einen anderen Weg – ich beschreibe ihn in meiner Begründung.", "zentral", "Wenn Ihr Weg den Rahmen offenlegt und innerhalb davon echt wählen lässt, zeigt er die Lösung. Etwa: »Bei Regen gehört die Matschhose dazu, sonst werdet ihr nass und kalt. Ihr entscheidet: Wann gehen wir raus, wie lange – und was spielen wir draußen?«"]] },
  stufenKarten: [
    { id: "k1", text: "»Wollt ihr heute rausgehen?« – und dann gehen doch alle raus.", zu: "nicht", warum: "Gefragt wird zum Schein: Die Antwort kann nichts ändern." },
    { id: "k2", text: "Die Kinder malen Bilder für das Festplakat. Das Motto hat das Team längst gewählt.", zu: "nicht", warum: "Die Kinder schmücken eine Entscheidung, an der sie nicht beteiligt waren. Im Stufenmodell heißt das Dekoration." },
    { id: "k3", text: "Die Fachkraft erklärt, warum am Freitag die Feuerwehr kommt und was dann passiert.", zu: "vor", warum: "Die Kinder werden informiert. Das ist wichtig – aber noch keine Mitbestimmung." },
    { id: "k4", text: "Die Kinder dürfen Wünsche für neue Spielgeräte sagen. Was daraus wird, erfahren sie nie.", zu: "vor", warum: "Mitsprache ohne Rückmeldung. Erfahren die Kinder nie, was aus ihren Wünschen wurde, kippt sie in Beteiligung zum Schein." },
    { id: "k5", text: "Die Kinderkonferenz entscheidet, wie der Bauraum umgeräumt wird. Das Team setzt es um.", zu: "bet", warum: "Die Kinder entscheiden, die Erwachsenen setzen um – echte Mitbestimmung." },
    { id: "k6", text: "Es regnet. Die Fachkraft sagt, warum alle die Matschhose anziehen – und die Kinder wählen, was draußen gespielt wird.", zu: "bet", warum: "Der Rahmen ist offengelegt, und innerhalb davon entscheiden die Kinder wirklich." }
  ],
  stufen: [["nicht", "Nicht-Beteiligung", "rot"], ["vor", "Vorstufen", "gelb"], ["bet", "Beteiligung", "gruen"]],
  verfahren: [
    { id: "a", nr: "A", titel: "Die Kinderkonferenz", unter: "beraten und entscheiden",
      text: ["Ein regelmäßiges Treffen, in dem Kinder Themen einbringen, beraten und entscheiden – etwa: Welches Projekt machen wir? Welche Regeln brauchen wir im Bauraum?", "Es spricht, wer den Redestein hat. Abgestimmt wird mit Handzeichen oder mit Muggelsteinen: Auch Kinder, die noch nicht zählen können, sehen, wo der Haufen größer ist.", "So kann sie ablaufen: <b>1</b> Themen sammeln, auch mit Bildkarten · <b>2</b> vorher klären: Worüber dürfen wir entscheiden? · <b>3</b> beraten · <b>4</b> entscheiden · <b>5</b> umsetzen und berichten, was aus dem Beschluss wurde."],
      quelle: "Formen nach dem Impulsvortrag, Kapitel 10 · Ablauf in fünf Schritten: Vorschlag aus DS 4",
      frage: "Hätte die Kinderkonferenz über die Matschhose abstimmen dürfen?",
      optionen: [
        ["Nein – nicht ohne vorher geklärten Rahmen. Abgestimmt wird über das, was wirklich offen ist.", "zentral", "Schritt 2 fehlte. Vorher hätte die Fachkraft sagen müssen, was bei Regen feststeht. Offen sind dann: wann, wie lange, was draußen gespielt wird."],
        ["Ja – Kinder dürfen über alles abstimmen, was sie betrifft.", "kaum", "Artikel 12 gibt Kindern das Recht, gehört zu werden. Schutz und Gesundheit bleiben trotzdem Aufgabe der Erwachsenen (Etappe 3)."],
        ["Nur, wenn alle Kinder einer Meinung sind.", "kaum", "Einstimmigkeit ist selten. Die Frage ist nicht, wie viele zustimmen, sondern ob überhaupt abgestimmt werden darf."]],
      merke: "Vor der Abstimmung klären, worüber Kinder entscheiden dürfen. Danach umsetzen und berichten, was aus dem Beschluss wurde." },
    { id: "b", nr: "B", titel: "Der Beschwerdeweg", unter: "auch ohne Worte",
      text: ["Kinder haben ein Recht, sich zu beschweren. Für Kitas ist das Gesetz: Zur Betriebserlaubnis gehören in der Regel geeignete Verfahren der Beteiligung und der Beschwerde in persönlichen Angelegenheiten – innerhalb und außerhalb der Einrichtung.", "Mögliche Wege: ein Briefkasten mit niedrigem Schlitz, ein Beschwerdebuch mit Zeichnungen, feste Zeiten (»Was hat dich heute geärgert?«), eine Ansprechperson im Team.", "Kleine Kinder beschweren sich oft ohne Worte: Sie weinen, ziehen sich zurück, werden wütend. Vier Schritte helfen: <b>wahrnehmen</b> – <b>nachfragen</b> – <b>gemeinsam eine Lösung suchen</b> – <b>zurückmelden</b>."],
      quelle: "§ 45 Abs. 2 Satz 2 Nr. 4 SGB VIII, am Gesetzestext geprüft (01.11.2026) · Formen nach dem Impulsvortrag, Kapitel 10 · vier Schritte nach DS 4",
      frage: "Ein Kind weint, als es die Matschhose anziehen soll. Ist das eine Beschwerde?",
      optionen: [
        ["Ja – Weinen kann eine Beschwerde ohne Worte sein.", "zentral", "Wahrnehmen (»Ich sehe, du willst die nicht anziehen«), nachfragen (Kratzt sie? Ist sie zu eng?), eine Lösung suchen (eine andere Hose, Hilfe beim Anziehen, kürzer raus) und zurückmelden."],
        ["Nein – eine Beschwerde muss das Kind aussprechen.", "kaum", "Dann hätten gerade die Jüngsten keinen Beschwerdeweg. Das Gesetz verlangt Verfahren, die für die Kinder der Einrichtung geeignet sind."],
        ["Erst, wenn es öfter vorkommt.", "kaum", "Auch eine einzelne Unzufriedenheit verdient eine Antwort. Entscheidend ist nicht, wie oft etwas vorkommt, sondern die Rückmeldung."]],
      merke: "Jede Unzufriedenheit ernst nehmen – auch ohne Worte –, gemeinsam eine Lösung suchen und dem Kind zurückmelden." },
    { id: "c", nr: "C", titel: "Die Kita-Verfassung", unter: "allein · mit · informiert",
      text: ["Das Herzstück der »Kinderstube der Demokratie«: Das Team legt schriftlich fest, worüber die Kinder <b>allein</b> entscheiden (zum Beispiel, mit wem sie spielen), worüber sie <b>mit</b>entscheiden (zum Beispiel Ausflugsziele, Feste) und was die Erwachsenen entscheiden – und die Kinder darüber <b>informieren</b> (zum Beispiel Sicherheitsfragen).", "Eine Kita-Verfassung wird nicht einmal geschrieben und abgeheftet. Das Team überprüft sie regelmäßig – eine gelebte Praxis, kein Aktenordner. So hängt nicht von der Tagesform einzelner Erwachsener ab, was Kinder dürfen."],
      quelle: "Konzept nach Hansen, Knauer und Sturzenhecker (2011) · Beispiele nach dem Impulsvortrag, Kapitel 10",
      frage: "Wohin gehört »Matschhose bei Regen« in der Kita-Verfassung?",
      optionen: [
        ["Die Erwachsenen entscheiden – und erklären es den Kindern.", "zentral", "Bei Kälte und Nässe geht es um Gesundheit. Entscheidend ist, dass das Team es festlegt und den Kindern erklärt – dann wird nicht mehr zum Schein abgestimmt."],
        ["Die Kinder entscheiden allein.", "begruendbar", "Bei mildem Wetter und mit Wechselkleidung ist das denkbar; Kinder lernen auch aus Folgen. Das muss aber das Team festlegen, nicht die einzelne Fachkraft spontan."],
        ["Das muss niemand festlegen. Das entscheidet jede Fachkraft selbst.", "kaum", "Genau das wäre Willkür: heute so, morgen anders – je nach Fachkraft."]],
      merke: "Das Team legt verbindlich fest, was Kinder allein, mit oder informiert entscheiden – unabhängig von Launen." }
  ],
  ampel: ["Ist die Entscheidung wirklich offen?", "Ist der Rahmen benannt – wissen die Kinder, was feststeht und warum?", "Gibt es Wege ohne Worte – Bildkarten, Steine, Zeigen?", "Sind die Leisen und die Jüngsten bedacht?", "Ist geplant, wie die Kinder erfahren, was aus ihrer Entscheidung wurde?"]
};

function rueckblickE5(box) {
  var def = BLAETTER.e5;
  box.appendChild(kasten("auftrag", null, p("Zurück zum Fall vom Anfang. In welche Ecke gehen Sie jetzt – und warum?")));
  box.appendChild(h("div", { class: "falltext" }, etikett("ausgedachter Fall"), p(esc(D.e5.fall), "falltext__text")));
  wahlZurueck(box, "e5.ecke2", "e5.ecke", D.e5.ecken);
  box.appendChild(h("h2", { class: "abschnitt", text: "Ihr Satz für die Lernspur" }));
  spurFeld(box, def);
  box.appendChild(h("h2", { class: "abschnitt", text: "Was können Sie jetzt?" }));
  selbst(box, "e5.selbst", def.kann);
  box.appendChild(h("h2", { class: "abschnitt", text: "Ihre Rückmeldung zum Blatt" }));
  stimmkarte(box, "e5.stimme", { frage: "Wie hat Ihnen dieses Arbeitsblatt beim Lernen geholfen?", optionen: [["A", "sehr"], ["B", "teils"], ["C", "kaum"]], unter: "Halten Sie Ihre Karte hoch, wenn Ihre Lehrkraft fragt. Ihre Wahl bleibt auf diesem Gerät." });
  box.appendChild(feld("e5.rueck", { label: "Was würden Sie an diesem Blatt ändern? (freiwillig)", platz: "Mehr …, weniger …", rows: 2 }));
  box.appendChild(p("Fertig? Dann drehen Sie Ihr Tablet um.", "ende"));
}
function ampelWort(key, n) {
  var w = S.w[key]; if (!w || !w.a || Object.keys(w.a).length < n) return null;
  var nein = 0, teils = 0; Object.keys(w.a).forEach(function (k) { if (w.a[k] === 2) nein++; if (w.a[k] === 1) teils++; });
  return (w.a[0] === 2 || nein >= 2) ? "Rot" : ((nein || teils) ? "Gelb" : "Grün");
}

blatt({
  id: "e5", etappe: 5, art: "doppelstunde", dauer: 90, titel: "Kinder beteiligen – aber wie?",
  frage: "Welche festen Verfahren sichern die Rechte der Kinder – und was gilt, wenn die Mehrheit jemanden überstimmt?",
  karte: "Acht Aufträge · 90 Minuten · am Ende steht Ihr Beteiligungsformat für eine Situation aus der Praxis.",
  darum: "Eine Abstimmung ist schnell gemacht. Schwierig wird es, wenn das Ergebnis nicht gelten soll – oder wenn es jemanden verletzt. Heute untersuchen Sie zwei Fälle aus der Kita, unterscheiden echte Beteiligung von Beteiligung zum Schein und lernen drei feste Verfahren kennen: Kinderkonferenz, Beschwerdeweg und Kita-Verfassung. Am Ende entwerfen Sie ein Beteiligungsformat für eine Situation aus Ihrer Praxis.",
  ziele: ["echte Beteiligung von Beteiligung zum Schein unterscheiden,", "mit den drei Fragen der Kita-Verfassung einen Rahmen offenlegen: allein – mit – informiert,", "beschreiben, wie eine Kinderkonferenz und ein Beschwerdeweg ablaufen."],
  hinweis: "Auftrag 7 und das Extra fragen nach Ihrer Praxisstelle. Das ist freiwillig – Sie können auch an eine ausgedachte Kita denken. Schreiben Sie keine Namen von Kindern, Familien, Kolleginnen oder Kollegen auf.",
  spur: "e5.spur", spurAnfang: "Bevor Kinder abstimmen, kläre ich …", spurFrage: "Was klären Sie, bevor Kinder abstimmen? Ein Satz genügt.",
  kann: ["Ich kann echte Beteiligung von Beteiligung zum Schein unterscheiden.", "Ich kann mit den drei Fragen der Kita-Verfassung einen Rahmen offenlegen.", "Ich kann beschreiben, wie eine Kinderkonferenz und ein Beschwerdeweg ablaufen."],
  papier: "Digital ist der Kern beim Verdecken und Aufdecken: die eigene Ecke vor dem Input, das Legen mit Vorschlag, die Prüffragen der Expertengruppen. Die Infokarten gibt es auch auf Papier (DS 4, M2); das Beteiligungsformat kann auf dem Werkstatt-Canvas (M3) entstehen.",
  lk: [
    ["Vor der Stunde", ["Am Gerät vorne »Alle Aufträge auf diesem Gerät freigeben« wählen.", "Vier Ecken im Raum beschriften: A, B, C, D.", "Stammgruppen zu dritt bilden. In Auftrag 5 übernimmt jede Person zuerst eine Karte (A, B oder C)."]],
    ["Plenumsstellen", ["Nach Auftrag 2: Was wäre hier demokratisch? Zwei oder drei Begründungen.", "Nach Auftrag 3: In die Ecken gehen; je Ecke zwei Begründungen hören, nicht bewerten.", "Nach Auftrag 4: Kernsatz »Mitreden ist nicht Mitbestimmen«.", "Auftrag 5: Jede Person erklärt ihrer Stammgruppe ihre Karte in höchstens 90 Sekunden.", "Nach Auftrag 6: Zwei Antworten an das Kind vorlesen.", "Nach Auftrag 7: Zwei Beteiligungsformate kurz vorstellen.", "Auftrag 8: Noch einmal in die Ecken; Stimmkarte A · B · C zählen."]],
    ["Wenn die Zeit knapp wird", ["K1 · Auftrag 7 als Praxisauftrag bis zur nächsten Stunde (– 12 Min.).", "K2 · Auftrag 1 mündlich im Plenum (– 2 Min.).", "K3 · Auftrag 4 gemeinsam am Gerät vorne legen (– 4 Min.)."]],
    ["Status der Inhalte", ["Mopslied: im Impulsvortrag nach Benedikt Sturzenhecker erzählt – Fundstelle noch zu prüfen.", "Fall Matschhose: konstruiert (DS 4), angelehnt an eine Frage aus dem Workshop des Fachtags 2026. Die Karten in Auftrag 4: ausgedacht.", "Stufen vereinfacht nach Roger Hart (1992) und Richard Schröder (1995). Kita-Verfassung nach Hansen, Knauer und Sturzenhecker (2011).", "§ 45 SGB VIII: am Gesetzestext geprüft (01.11.2026). Art. 79 Abs. 3 GG: am Gesetzestext geprüft (18.11.2026).", "Ablauf der Kinderkonferenz in fünf Schritten und Beschwerde in vier Schritten: Vorschlag aus DS 4. Welche Antwort »zentral« ist, ist ein Vorschlag."]]
  ],
  auftraege: [
    aufAbruf("e5", D.e5.abruf, "Heute geht es darum, wie aus diesen Rechten <b>feste Verfahren</b> werden."),
    aufSzene("e5", 2, { danach: function () {
      return [kasten("erklaerung", "Die Mehrheit entscheidet – aber nicht über alles",
        p("Die Abstimmung war fair. Trotzdem wurde ein Kind nicht gehört, das noch gar nicht dabei war. Demokratie ist mehr als der Wille der Mehrheit: Sie schützt auch die, die überstimmt werden."),
        p("Das Grundgesetz macht das sehr deutlich. Die Menschenwürde (Art. 1) und die Grundsätze der Demokratie (Art. 20) kann keine Mehrheit abschaffen: »Eine Änderung dieses Grundgesetzes, durch welche […] die in den Artikeln 1 und 20 niedergelegten Grundsätze berührt werden, ist unzulässig.«"),
        p("Art. 79 Abs. 3 GG, am Gesetzestext geprüft (18.11.2026)", "quelle"),
        p("Widersprüche aushalten und trotzdem gemeinsam handeln: Das nennt man <b>Ambiguitätstoleranz</b>.")),
        kasten("raum", null, p("Zu zweit: Was hat die Gruppe vom Mopslied gelernt, das eine Fachkraft ihr nicht hätte erklären können?"))];
    } }),
    { id: "a3", nr: "3", kurz: "Ihre Ecke", phase: "Einstieg", name: "»Aber wir haben doch abgestimmt!«", form: "allein, dann Ecken im Raum", min: 8, frei: "antwort", nach: "a2", fehlt: "Legen Sie sich zuerst in Auftrag 2 fest.", prinzip: "Verdecken – die Festlegung bleibt stehen", raum: "Vier Ecken A–D; je Ecke zwei Begründungen",
      fertig: function () { return !!(S.w["e5.ecke"] && S.w["e5.ecke"].fest); },
      seite: function (box) {
        box.appendChild(h("div", { class: "falltext" }, etikett("ausgedachter Fall"), h("h2", { class: "falltext__titel", text: "Der Fall Matschhose" }), p(esc(D.e5.fall), "falltext__text")));
        box.appendChild(kasten("auftrag", null, p("Wählen Sie eine Ecke und begründen Sie in einem Satz. Am Ende des Blatts kommen Sie zu diesem Fall zurück.")));
        wahl(box, "e5.ecke", { frage: D.e5.ecken.frage, optionen: D.e5.ecken.optionen, sicherheit: true, platz: "Ich gehe in Ecke …, weil …",
          danach: function () { return kasten("raum", null, p("Gehen Sie in Ihre Ecke. Je Ecke sagen zwei Personen, warum sie dort stehen. Noch nicht bewerten.")); } });
      } },
    { id: "a4", nr: "4", kurz: "Echt oder Schein?", phase: "Erarbeitung", name: "Beteiligung oder Schein?", form: "allein, dann zu zweit", min: 10, frei: "ansage", gleich: "Sie legen sechs Kita-Momente auf drei Stufen der Beteiligung.", prinzip: "Verdecken – erst legen, dann der Vorschlag", raum: "Kernsatz: Mitreden ist nicht Mitbestimmen",
      fertig: function () { return legenFertig("e5.stufen"); },
      seite: function (box) {
        box.appendChild(kasten("wissen", "Drei Stufen", liste(["<b>Nicht-Beteiligung:</b> Kinder werden gefragt, ohne dass ihre Antwort etwas ändern kann – oder sie schmücken Entscheidungen anderer.", "<b>Vorstufen:</b> Kinder werden informiert oder dürfen ihre Meinung sagen. Wer entscheidet, bleibt bei den Erwachsenen.", "<b>Beteiligung:</b> Kinder entscheiden mit oder allein – in einem Rahmen, den sie kennen."]), p("Vereinfacht nach Roger Hart (1992) und Richard Schröder (1995)", "quelle")));
        box.appendChild(kasten("auftrag", null, p("Tippen Sie eine Karte an und dann die Stufe, auf die sie gehört. Wenn alle Karten liegen, vergleichen Sie mit dem Vorschlag.")));
        legen(box, "e5.stufen", D.e5.stufenKarten, D.e5.stufen, { danach: function () {
          return [kasten("sicherung", "Mitreden ist nicht Mitbestimmen", p("Vor jeder Beteiligung steht die Frage: Was ist wirklich offen? Die Kita-Verfassung beantwortet sie mit drei Fragen: <b>Was entscheiden die Kinder allein? Wobei entscheiden sie mit? Was entscheiden die Erwachsenen – und informieren die Kinder?</b>")),
            kasten("raum", null, p("Zu zweit: Auf welcher Stufe stand die Abstimmung über die Matschhose?"))];
        } });
      } },
    { id: "a5", nr: "5", kurz: "Drei Verfahren", phase: "Erarbeitung", name: "Drei feste Verfahren", form: "Gruppenpuzzle zu dritt", min: 20, frei: "ansage", gleich: "Kinderkonferenz, Beschwerdeweg, Kita-Verfassung – jede Person übernimmt zuerst eine Karte.", prinzip: "Verdecken · Rückmelden – je Verfahren am Fall geprüft", raum: "Stammgruppe: jede Karte in höchstens 90 Sekunden erklären",
      fertig: function () { return kartenFest("e5.verf", D.e5.verfahren) >= 3; },
      seite: function (box) {
        box.appendChild(kasten("auftrag", null, p("Ihre Stammgruppe teilt die drei Karten auf. Lesen Sie Ihre Karte, beantworten Sie die Prüffrage zum Fall Matschhose und schreiben Sie einen Merksatz mit höchstens 20 Wörtern. Erklären Sie Ihre Karte dann der Stammgruppe – in höchstens 90 Sekunden. Danach legen sich alle auch bei den anderen Karten fest."), p("<b>Fertig sind Sie mit allen drei Karten.</b>")));
        kartenRunde(box, "e5.verf", D.e5.verfahren, { titel: "Drei Verfahren", feld: ["Ihr Merksatz (höchstens 20 Wörter):", "Vor der Abstimmung …"] });
      } },
    { id: "a6", nr: "6", kurz: "Fall neu lösen", phase: "Sichern und üben", name: "Den Fall neu lösen", form: "in der Stammgruppe", min: 10, frei: "antwort", nach: "a5", fehlt: "Der Fall öffnet sich, wenn Sie bei allen drei Verfahren festgelegt sind (Auftrag 5).", prinzip: "keines der sechs – die Seite bringt die Kriterien nach dem Text", raum: "Zwei Antworten an das Kind vorlesen",
      fertig: function () { return mehrfeldFertig("e5.fall"); },
      seite: function (box) {
        box.appendChild(h("div", { class: "falltext" }, etikett("ausgedachter Fall"), p(esc(D.e5.fall), "falltext__text")));
        box.appendChild(kasten("auftrag", null, p("Lösen Sie den Fall in der Stammgruppe neu – mit allem, was Sie aus den drei Karten wissen.")));
        mehrfeld(box, "e5.fall", [["vorher", "Was hätte vor der Abstimmung geklärt werden müssen?", "Vorher hätte die Fachkraft sagen müssen, …"], ["kind", "Was sagt die Fachkraft jetzt zu dem Kind? Zwei Sätze, wörtlich:", "»…«", 3], ["team", "Was legt das Team dauerhaft fest?", "In unserer Kita-Verfassung steht: …"]],
          { kriterien: [["Grundlegend", "Das Kind wird ernst genommen – die Abstimmung wird nicht kleingeredet."], ["Sicher", "Die Fachkraft übernimmt Verantwortung für den Fehler und nennt den Grund: Gesundheit."], ["Souverän", "Sie bietet eine echte Wahl im Rahmen an, und das Team hält in der Kita-Verfassung fest, was bei Regen gilt."]],
            danach: function () { return kasten("sicherung", "Ein Beispiel – eines von vielen", p("»Ihr habt recht, ihr habt abgestimmt – das war mein Fehler. Ich hätte euch vorher sagen müssen, dass das bei Regen nicht geht. Lasst uns jetzt abstimmen, was wir draußen machen.«"), p("Aus dem Erwartungshorizont zu DS 4", "quelle")); } });
      } },
    { id: "a7", nr: "7", kurz: "Ihr Format", phase: "Übertragen und Ausblick", name: "Ihr Beteiligungsformat", form: "allein oder zu zweit · freiwillig mit Praxisbezug", min: 12, frei: "antwort", nach: "a6", schreib: true, fehlt: "Ihr Format öffnet sich, wenn der Fall neu gelöst ist (Auftrag 6).", prinzip: "Ihr Bild auf einen Blick – Ampel mit Wort", raum: "Zwei Formate kurz vorstellen",
      fertig: function () { return ["situation", "offen", "wie"].every(function (k) { return woerter(txt("e5.format." + k)) >= 3; }) && ampelFertig("e5.ampel", D.e5.ampel.length); },
      seite: function (box) {
        box.appendChild(kasten("auftrag", null, p("Wählen Sie eine Situation aus Ihrer Praxisstelle oder eine ausgedachte, in der Kinder bisher nicht mitentscheiden. Entwerfen Sie ein Beteiligungsformat und prüfen Sie es mit der Ampel.")));
        [["situation", "Die Situation", "Beim Frühstück … / Im Garten …"], ["offen", "Was ist wirklich offen – und was steht fest? Warum?", "Offen ist … Fest steht …, weil …"], ["wie", "Wie entscheiden die Kinder? (Kinderkonferenz, Muggelsteine, Zeigen …)", "Die Kinder …"], ["leise", "Wie kommen die Leisen und die Jüngsten zu Wort – auch ohne Worte?", "Wer nicht spricht, kann …"], ["rueck", "Wie erfahren die Kinder, was aus ihrer Entscheidung wurde?", "Am nächsten Tag …"]].forEach(function (f) {
          box.appendChild(feld("e5.format." + f[0], { label: f[1], platz: f[2], rows: 2, bei: function () { frisch(); } }));
        });
        box.appendChild(h("h2", { class: "abschnitt", text: "Die Demokratie-Ampel" }));
        ampel(box, "e5.ampel", D.e5.ampel);
        box.appendChild(p("Ihre Notizen bleiben auf diesem Gerät. Schreiben Sie keine Namen auf.", "meta"));
      } },
    { id: "a8", nr: "8", kurz: "Rückblick", phase: "Übertragen und Ausblick", name: "Rückblick und Lernspur", form: "allein, dann Ecken im Raum", min: 6, frei: "antwort", nach: "a7", fehlt: "Der Rückblick öffnet sich, wenn Ihr Format fertig ist (Auftrag 7).", prinzip: "Verdecken – Rückkehr zur ersten Festlegung", raum: "Noch einmal in die Ecken; Stimmkarte zählen",
      fertig: function () { return !!(S.w["e5.ecke2"] && S.w["e5.ecke2"].fest) && woerter(txt("e5.spur")) >= 8; },
      seite: rueckblickE5 },
    aufZf("e5", "a8", function (box) {
      zfDaten(box, { kopf: "Etappe 5 · Kinder beteiligen – aber wie?", frage: "Welche festen Verfahren sichern die Rechte der Kinder – und was gilt, wenn die Mehrheit jemanden überstimmt?",
        kern: "Feste Verfahren machen Kinder unabhängig von der Tagesform einzelner Erwachsener. Vor jeder Abstimmung steht die Frage, worüber Kinder entscheiden dürfen: allein, mit oder nur informiert. Die Mehrheit entscheidet – aber nicht über alles.",
        begriffe: [
          ["Beteiligung zum Schein", "Kinder werden gefragt, aber ihre Antwort kann nichts ändern."],
          ["Kita-Verfassung", "Das Team legt schriftlich fest, was Kinder allein, mit oder informiert entscheiden – und überprüft es regelmäßig."],
          ["Kinderkonferenz", "Festes Treffen, in dem Kinder Themen einbringen, beraten und entscheiden – mit Redestein, Handzeichen oder Muggelsteinen."],
          ["Beschwerdeverfahren", "Fester Weg für Beschwerden, auch ohne Worte. Entscheidend ist die Rückmeldung. Pflicht nach § 45 Abs. 2 Satz 2 Nr. 4 SGB VIII."],
          ["Minderheitenschutz", "Rechte, die keine Mehrheit wegstimmen kann. Im Grundgesetz: Art. 79 Abs. 3."],
          ["Ambiguitätstoleranz", "Widersprüche und Uneindeutiges aushalten, statt nach einfachen Antworten zu greifen."]],
        tabelle: { kopf: ["Stufe", "Woran man sie erkennt", "Beispiel"], zeilen: [
          ["Nicht-Beteiligung", "Die Antwort der Kinder ändert nichts.", "»Wollt ihr rausgehen?« – und alle gehen raus."],
          ["Vorstufen", "Kinder werden informiert oder gehört; entschieden wird ohne sie.", "Wünsche für Spielgeräte – ohne Rückmeldung."],
          ["Beteiligung", "Kinder entscheiden mit oder allein, in einem Rahmen, den sie kennen.", "Die Kinderkonferenz räumt den Bauraum um."]] },
        werk: ["Denkwerkzeug: Vor jeder Abstimmung", ["Ist die Frage wirklich offen?", "Kennen die Kinder den Rahmen – was steht fest und warum?", "Wie erfahren die Kinder, was aus ihrer Entscheidung wurde?"]],
        mein: [["Meine Sätze an das Kind (Fall Matschhose)", "e5.fall.kind", "noch offen – Auftrag 6"],
          ["Mein Beteiligungsformat", function () { var s = txt("e5.format.situation"), a = ampelWort("e5.ampel", D.e5.ampel.length); return h("div", {}, mein(s, "noch offen – Auftrag 7"), a ? p("Meine Ampel: " + a, "meta") : null); }],
          ["Mein Satz für die Lernspur", "e5.spur", "noch offen – Auftrag 8"]],
        aufgabe: "Erläutern Sie am Fall Matschhose den Unterschied zwischen echter Beteiligung und Beteiligung zum Schein. Beziehen Sie die drei Fragen der Kita-Verfassung und § 45 SGB VIII ein." });
    }),
    aufExtra("e5", "Ein Beschwerdeweg in Ihrer Praxisstelle", {
      auftrag: "Freiwillig – nur wenn Sie möchten. Sehen Sie sich in Ihrer Praxisstelle um oder fragen Sie nach: Wie können sich Kinder dort beschweren – auch ohne Worte? Notieren Sie, was Sie finden, ohne Namen und ohne Fotos von Kindern.",
      felder: [["fund", "Was ich gefunden habe – oder dass ich nichts gefunden habe", "Es gibt … / Ich habe nichts gefunden."], ["schritte", "Welche der vier Schritte – wahrnehmen, nachfragen, Lösung suchen, zurückmelden – finden Sie dort? Fundstelle: Auftrag 5, Karte B.", "Wahrnehmen: … Zurückmelden: …"], ["urteil", "Ein Satz zu Ihrem Urteil: Erreicht dieser Weg auch die Jüngsten?", "Ich denke, …, weil …"]] })
  ]
});
