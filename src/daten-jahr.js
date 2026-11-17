/* Leitfaden durch das Jahr: acht Etappen entlang des Impulsvortrags (Fachtag 29.04.2026).
   Status: Zuschnitt der Etappen, Rückmeldetexte und Einstufungen sind Vorschläge – noch nicht geprüft.
   Jede Etappe hat ein Blatt (#e1 … #e8): Etappe 1 und 3 als Arbeitsblatt einer Doppelstunde, die anderen als kurzes Einstiegsblatt. */
var DATEN = {
  schluessel: "wpb-demokratie-leitfaden:v4",
  schluesselAlt: "wpb-demokratie-leitfaden:v3",
  hier: 0, /* Etappe, in der die Klasse gerade arbeitet (0 = Etappe 1). Hier umstellen, wenn die Klasse weiterzieht. */
  blick: ["Verstehen", "Reflektieren", "Handeln", "Positionieren"],
  urteilWort: { zentral: "Das trifft den Kern.", begruendbar: "Lässt sich begründen.", kaum: "Passt kaum." },
  urteilKurz: { zentral: "zentral", begruendbar: "auch begründbar", kaum: "passt kaum" },
  pruefsteine: [
    ["s", "Schutz", "vor körperlicher und seelischer Gewalt – auch vor Beschämung, Abwertung und Ausschluss. Das Recht auf Schutz kann keine Mehrheit überstimmen."],
    ["f", "Förderung", "durch Beziehung, Spiel, Ruhe, Sprache und Unterstützung. Gleich behandeln ist nicht automatisch gerecht."],
    ["b", "Beteiligung", "an allem, was das Kind betrifft: gefragt werden, gehört werden, etwas verändern können. Beteiligung hebt den Schutz nicht auf."]
  ],
  vortragTeile: [
    ["I", "Demokratie jetzt und in Zukunft", "Was Demokratie ist – und warum sie gelernt werden muss.", "Etappen 1 und 7"],
    ["II", "Warum die frühe Kindheit?", "Warum die Kita der wichtigste Ort dafür ist. Was Korczak und das Gesetz dazu sagen.", "Etappen 2 und 3"],
    ["III", "Die praktische Umsetzung", "Feste Verfahren, gelebter Alltag – und die Haltung, die beides trägt.", "Etappen 4, 5, 6 und 8"]
  ]
};

/* Stunden je Etappe: [Art, Titel, Blatt, wozu, Dauer] – Art: blatt (Arbeitsblatt einer Doppelstunde) · einstieg (kurzes Einstiegsblatt) · kommt (im Lauf des Jahres) */
DATEN.etappen = [
  { kurz: "Verstehen", titel: "Demokratie verstehen", vortrag: "Teil I · Demokratie jetzt und in Zukunft", blatt: "e1",
    frage: "Was ist Demokratie – und wo beginnt sie?",
    szene: { titel: "Drei Kinder am Fenster",
      status: "Szene aus der Forschung zur »Kinderstube der Demokratie« · nach dem Impulsvortrag erzählt · Fundstelle noch zu prüfen",
      text: ["Max, Oguz und Greta machen einen Ausflug zu einer alten Windmühle. Vom Fenster aus sehen sie den Ort. Max zeigt hinunter: »Guck mal, da ist das Rathaus. Da wohnt der Bürgermeister.« Einige Wochen zuvor hatte die Kita den Bürgermeister besucht.",
             "Oguz fragt: »Was ist noch mal ein Bürgermeister?« Max antwortet: »Der ist doch der Vorsitzende von der ganzen Stadt. So wie Lukas und Jil im Kinderparlament.«"] },
    wahl: { frage: "Was zeigt die Antwort von Max?", optionen: [
      ["Max hat sich gemerkt, was die Erwachsenen ihm über den Bürgermeister erklärt haben.", "kaum", "Naheliegend, denn die Kita war ja im Rathaus. Max wiederholt aber keine Erklärung. Er zieht einen eigenen Vergleich: zum Kinderparlament seiner Kita."],
      ["Max erklärt sich Politik aus dem, was er selbst erlebt und tut.", "zentral", "Max versteht Politik von unten: Was Lukas und Jil im Kinderparlament tun, tut der Bürgermeister für die Stadt. Genau das ist mit Demokratie als Lebensform gemeint."],
      ["Max verwechselt die Kita mit dem Rathaus.", "begruendbar", "Stimmt: Ein Kinderparlament ist kein Stadtrat, und eine Kita ist kein Staat. Der Vergleich trägt trotzdem – in beiden Fällen sprechen Gewählte für andere."]] },
    kern: "Demokratie ist mehr als Wählen und mehr als Mehrheit. Gerhard Himmelmann unterscheidet drei Formen: Herrschaftsform, Gesellschaftsform und Lebensform. Alle drei können Kinder schon in der Kita erleben. Und: Demokratie muss gelernt werden – sie kommt nicht von allein.",
    begriffe: [
      ["Herrschaftsform", "Wie Macht begründet, kontrolliert und begrenzt wird: Wahlen, Gewaltenteilung, Grundrechte."],
      ["Gesellschaftsform", "Wie verschiedene Menschen und Gruppen zusammenleben: Vielfalt, freie Medien, Vereine, friedlicher Streit."],
      ["Lebensform", "Wie Menschen im Alltag miteinander umgehen: zuhören, aushandeln, Kompromisse finden, widersprechen."],
      ["Selbstwirksamkeit", "Die Erfahrung: Meine Stimme zählt. Was ich tue, verändert etwas."]],
    mit: "die drei Formen der Demokratie – und Ihren eigenen Satz, wann Demokratie in der Kita beginnt",
    kita: "Wo wird in Ihrer Einrichtung entschieden – und von wem?",
    weg: [["blatt", "Drei Formen – ein Ganzes", "e1", "Sie klären, was Demokratie ist, und schreiben Ihren eigenen Satz dazu.", "90 Minuten"],
          ["kommt", "Was steht auf dem Spiel? Warum Demokratie gelernt werden muss", "", "Sie begründen, warum Demokratiebildung heute dringlich ist.", "45 Minuten"]] },

  { kurz: "Warum Kita?", titel: "Warum gerade die Kita?", vortrag: "Teil II · Warum die frühe Kindheit", blatt: "e2",
    frage: "Warum beginnt Demokratiebildung nicht erst in der Schule?",
    szene: { titel: "»Wir brauchen einen Chef«",
      status: "ausgedachte Szene aus dem Impulsvortrag · angelehnt an Beobachtungen aus der Forschung",
      text: ["Fünf Kinder zwischen vier und fünf Jahren bauen unter einem Busch eine Räuberhöhle. Nach ein paar Minuten gibt es Streit um Äste und Planen. Die Fachkraft beobachtet aus der Entfernung. Sie greift nicht ein.",
             "Jannis stellt sich in die Mitte: »Wir brauchen einen Chef. Und das bin ich.« Ida sagt: »Nee. Wir machen das wie im Kinderrat.« Leo nickt: »Jeder sagt einmal, was er will. Und dann machen wir das.« Mia sagt: »Jannis darf auch mitbestimmen. Aber er ist nicht der Chef.« Jannis zögert. Dann setzt er sich zu den anderen."] },
    wahl: { frage: "Die Fachkraft greift nicht ein – und es geht gut aus. Woran liegt das vor allem?", optionen: [
      ["An den Kindern: Diese Gruppe ist eben besonders vernünftig.", "kaum", "Naheliegend, weil die Kinder so ruhig handeln. Sie berufen sich aber auf etwas Gelerntes: »wie im Kinderrat«. Ohne diese Erfahrung hätte sich vermutlich der Lauteste durchgesetzt."],
      ["An der Arbeit der Wochen davor: Die Kinder kennen aus dem Kinderrat einen anderen Weg.", "zentral", "Der Kinderrat ist für die Kinder der Maßstab für gerechtes Entscheiden. Die fünf Minuten unter dem Busch wurden in den Wochen davor vorbereitet."],
      ["An Jannis: Er gibt nach.", "begruendbar", "Stimmt, Jannis lenkt ein. Er kann das aber, weil die Gruppe ihm einen Platz anbietet: mitbestimmen ja, Chef nein."]] },
    kern: "Kinder lernen immer, wie Entscheidungen fallen. Offen ist nur, welche Demokratie sie lernen: die des Stärkeren oder die der Aushandlung. Vier Gründe sprechen für die frühe Kindheit: Grundüberzeugungen entstehen in den ersten Jahren. Die Kita bringt verschiedene Kinder als Gleiche zusammen. Demokratie lernt man durch Teilhabe, nicht durch Belehrung. Und Kinder handeln längst aus, protestieren und schließen Bündnisse.",
    begriffe: [
      ["Kontakthypothese", "Gordon Allport (1954): Vorurteile nehmen ab, wenn Menschen sich mit gleichem Status begegnen, gemeinsame Ziele verfolgen, zusammenarbeiten und dabei unterstützt werden."],
      ["Lernen durch Teilhabe", "John Dewey: Demokratie lernt man, indem man an ihr teilnimmt."],
      ["Aushandlung", "Verschiedene Wünsche werden besprochen, bis eine Lösung steht, die alle mittragen können."]],
    mit: "vier Gründe, mit denen Sie Demokratiebildung im Team und vor Eltern begründen können",
    kita: "Wo haben Sie zuletzt erlebt, dass Kinder einen Streit ohne Erwachsene gelöst haben? Was hatten sie dafür schon gelernt?",
    weg: [["einstieg", "Einstieg: »Wir brauchen einen Chef«", "e2", "Eine Szene, eine Festlegung, die wichtigsten Begriffe.", "15 Minuten"],
          ["kommt", "Vier Gründe für die frühe Kindheit", "", "Sie sammeln Argumente, mit denen Sie vor Team und Eltern bestehen.", "45 Minuten"],
          ["kommt", "Welche Demokratie lernen Kinder bei uns?", "", "Sie prüfen eine Situation aus Ihrer eigenen Einrichtung.", "45 Minuten"]] },

  { kurz: "Kinderrechte", titel: "Kinder haben Rechte", vortrag: "Teil II · Korczak und der gesetzliche Auftrag", blatt: "e3",
    frage: "Geben wir Kindern Rechte – oder haben sie welche?",
    szene: { titel: "Ein Erzieher zeigt sich selbst an",
      status: "nach Janusz Korczak · im Impulsvortrag zitiert (Korczak 1999, S. 312) · am Original noch zu prüfen",
      text: ["Der Arzt und Pädagoge Janusz Korczak leitete in Warschau ein Waisenhaus. Dort gab es eine Verfassung, ein Parlament und ein Gericht der Kinder. Korczak berichtet, er habe sich in einem halben Jahr fünfmal selbst bei diesem Gericht angezeigt – zum Beispiel, weil er einen Jungen aus dem Schlafsaal geworfen hatte.",
             "Er wollte ein Erzieher sein, der Kindern nicht deshalb kein Unrecht tut, weil er sie gern hat – sondern weil es eine Einrichtung gibt, die sie vor Willkür schützt."] },
    wahl: { frage: "Warum genügt es Korczak nicht, Kinder gern zu haben?", optionen: [
      ["Weil Zuneigung von der Tagesform abhängt. Rechte brauchen Regeln, die auch an schlechten Tagen gelten.", "zentral", "Kinder sollen nicht vom guten Willen und von den Launen einzelner Erwachsener abhängen. Eine feste Einrichtung – bei Korczak das Gericht – greift auch dann, wenn die Zuneigung fehlt oder die Nerven blank liegen."],
      ["Weil Kinder vor allem klare Strenge brauchen.", "kaum", "Korczak geht es nicht um mehr Strenge gegenüber Kindern. Die Regeln binden bei ihm zuerst die Erwachsenen – er zeigt sich ja selbst an."],
      ["Weil auch liebevolle Erwachsene Fehler machen.", "begruendbar", "Stimmt – deshalb zeigt er sich selbst an. Der Kern liegt eine Ebene höher: Es braucht ein verbindliches Verfahren, das greift, wenn Fehler passieren."]] },
    kern: "Kinder bekommen ihre Rechte nicht von uns geschenkt. Sie haben sie. Unsere Aufgabe ist, Räume zu schaffen, in denen sie diese Rechte ausüben können. Der Maßstab sind drei Prüfsteine: Schutz, Förderung, Beteiligung.",
    begriffe: [
      ["UN-Kinderrechtskonvention", "Übereinkommen der Vereinten Nationen vom 20. November 1989, in Deutschland seit 1992 in Kraft. Artikel 12: Jedes Kind darf seine Meinung in allen Angelegenheiten sagen, die es betreffen."],
      ["§ 45 SGB VIII", "Eine Kita bekommt die Betriebserlaubnis in der Regel nur mit Verfahren für Beteiligung und Beschwerde und einem Konzept zum Schutz vor Gewalt (Abs. 2 Satz 2 Nr. 4)."],
      ["Drei Prüfsteine", "Schutz · Förderung · Beteiligung – der Maßstab für jede Situation."]],
    mit: "die drei Prüfsteine Schutz, Förderung, Beteiligung – und ein Kinderrechte-Plakat für Ihre Kita",
    kita: "Welche Rechte der Kinder sind in Ihrer Einrichtung aufgeschrieben – und wo können die Kinder sie sehen?",
    weg: [["blatt", "Kinder haben Rechte – mit der Ausstellung »Kinderrechte im Kita-Alltag«", "e3", "Sie prüfen Kita-Szenen an den Kinderrechten, übersetzen das Gesetz in den Alltag und gestalten ein Plakat für Ihre Kita.", "90 Minuten"]] },

  { kurz: "Macht", titel: "Macht und Haltung", vortrag: "Teil III · Das Herzstück: die Haltung", blatt: "e4",
    frage: "Was mache ich mit der Macht, die ich als Erwachsene oder Erwachsener habe?",
    szene: { titel: "»Wollt ihr heute rausgehen?«",
      status: "ausgedachte Szene · nach einem Beispiel aus dem Impulsvortrag",
      text: ["Kurz vor zehn im Gruppenraum. Die Fachkraft fragt in die Runde: »Wollt ihr heute rausgehen?« Drei Kinder rufen: »Nein!«",
             "Die Fachkraft sagt: »Doch, wir gehen jetzt alle raus. Zieht euch an.«"] },
    wahl: { frage: "Was ist an dieser Frage das Problem?", optionen: [
      ["Die Kinder wurden gefragt, obwohl die Entscheidung schon feststand.", "zentral", "Das ist Scheinbeteiligung. Die Kinder lernen: Meine Antwort zählt nicht. Ehrlicher wäre: »Wir gehen jetzt raus. Ihr entscheidet, was wir draußen spielen.«"],
      ["Kinder in diesem Alter können so etwas noch nicht entscheiden.", "kaum", "Ob die Kinder das entscheiden können, wurde hier gar nicht geprüft. Das Problem ist nicht ihre Fähigkeit, sondern eine Frage, die keine war."],
      ["Die Fachkraft hat sich am Ende durchgesetzt.", "begruendbar", "Erwachsene dürfen und müssen manches entscheiden, etwa bei Gesundheit und Aufsicht. Dann sagen sie es aber – und fragen nicht vorher zum Schein."]] },
    kern: "Erwachsene sind mächtiger: größer, sprachlich überlegen, durch die Einrichtung abgesichert. Diese Macht verschwindet nicht, wenn man sie leugnet. Demokratische Haltung zeigt sich an vier Merkmalen: das Machtgefälle sehen, statt es zu verschleiern · Beteiligung ermöglichen, statt sie vorzuspielen · Widerspruch aushalten, statt ihn zu bestrafen · Vielfalt als Normalität anerkennen.",
    begriffe: [
      ["Adultismus", "Erwachsene behandeln Kinder allein wegen ihres Alters als weniger wichtig oder weniger fähig."],
      ["Scheinbeteiligung", "Kinder werden gefragt, aber ihre Antwort kann nichts ändern."],
      ["Vorurteilsbewusste Bildung", "Ansatz mit vier Zielen (Anti-Bias): Identitäten stärken, Vielfalt erfahrbar machen, kritisch über Vorurteile nachdenken, gegen Diskriminierung aktiv werden."]],
    mit: "eine persönliche Handlungsleitlinie für Essen, Schlafen, Anziehen und Wickeln",
    kita: "Bei welcher Alltagsfrage entscheiden Sie allein, obwohl das Kind mitentscheiden könnte?",
    weg: [["einstieg", "Einstieg: »Wollt ihr heute rausgehen?«", "e4", "Eine Szene, eine Festlegung, die wichtigsten Begriffe.", "15 Minuten"],
          ["kommt", "Einladende und verschließende Sätze", "", "Sie formulieren Alltagssätze so um, dass Kinder mitentscheiden können.", "45 Minuten"],
          ["kommt", "Vielfalt als Normalität: vorurteilsbewusste Bildung", "", "Sie prüfen Bücher, Bilder und Routinen: Wer kommt vor, wer nicht?", "90 Minuten"],
          ["kommt", "Stereotype Aussagen unter Kindern aufgreifen", "", "Sie üben, wie Sie reagieren, wenn ein Kind ein anderes abwertet.", "90 Minuten"]] },

  { kurz: "Strukturen", titel: "Strukturen, die verlässlich sind", vortrag: "Teil III · Formelle Demokratiebildung", blatt: "e5",
    frage: "Welche festen Verfahren sichern die Rechte der Kinder – und was gilt, wenn die Mehrheit jemanden überstimmt?",
    szene: { titel: "Das Mopslied",
      status: "Beispiel aus einer Hamburger Kita · im Impulsvortrag nach Benedikt Sturzenhecker erzählt · Fundstelle noch zu prüfen",
      text: ["Im Morgenkreis stimmen die Kinder ab, welche Lieder zu Karneval gesungen werden. Mit großer Mehrheit gewinnt das Lied vom Mops, der in die Küche kommt und am Ende vom Koch erschlagen wird.",
             "Eine Woche später kommt ein Mädchen neu in die Gruppe. Als sie von der Entscheidung hört, weint sie: Sie will nicht, dass der Mops erschlagen wird."] },
    wahl: { frage: "Was wäre jetzt demokratisch?", optionen: [
      ["Abgestimmt ist abgestimmt. Die Mehrheit hat entschieden.", "kaum", "Naheliegend, denn die Abstimmung war fair. Demokratie ist aber mehr als Mehrheit: Sie schützt auch die, die überstimmt wurden oder noch gar nicht dabei waren."],
      ["Die Fachkraft streicht das Lied.", "begruendbar", "Das schützt das Mädchen. Es nimmt der Gruppe aber die Chance, selbst eine Lösung zu finden."],
      ["Die Gruppe berät neu und stimmt noch einmal ab.", "zentral", "So ist es laut dem Bericht geschehen: Die Kinder suchten nach Lösungen, stimmten erneut ab und wählten ein anderes Lied. Mehrheit, Rücksicht auf die Minderheit, neue Mehrheit – ohne dass Erwachsene die Lösung vorgaben."]] },
    kern: "Formelle Demokratiebildung meint fest verabredete Strukturen: Kita-Verfassung, Kinderkonferenz, Kita-Rat, Wahl von Sprecherinnen und Sprechern, Beschwerdeverfahren. Sie machen Kinder unabhängig von der Tagesform einzelner Erwachsener. Und sie zeigen: Die Mehrheit entscheidet – aber nicht über alles.",
    begriffe: [
      ["Kita-Verfassung", "Das Team legt schriftlich fest: Was entscheiden die Kinder allein? Wobei entscheiden sie mit? Was entscheiden die Erwachsenen – und informieren die Kinder?"],
      ["Kinderkonferenz", "Regelmäßiges Treffen, in dem Kinder Themen einbringen, beraten und entscheiden – mit Redestein, Handzeichen oder Muggelsteinen."],
      ["Beschwerdeverfahren", "Ein fester Weg, auf dem Kinder sagen können, was sie stört. Entscheidend ist die Antwort: Jede Beschwerde bekommt eine Rückmeldung."],
      ["Minderheitenschutz", "Rechte, die keine Mehrheit wegstimmen kann."],
      ["Ambiguitätstoleranz", "Die Fähigkeit, Uneindeutiges und Widersprüche auszuhalten, statt nach einfachen Antworten zu greifen."]],
    mit: "den Ablauf einer Kinderkonferenz und ein kleines Beschwerdekonzept",
    kita: "Welche festen Verfahren gibt es in Ihrer Einrichtung – und wissen die Kinder davon?",
    weg: [["einstieg", "Einstieg: Das Mopslied", "e5", "Eine Szene, eine Festlegung, die wichtigsten Begriffe.", "15 Minuten"],
          ["kommt", "Kinder beteiligen – aber wie? Der Fall Matschhose", "", "Sie unterscheiden echte Beteiligung von Beteiligung zum Schein.", "90 Minuten"],
          ["kommt", "Eine Kinderkonferenz gestalten", "", "Sie planen den Ablauf einer Kinderkonferenz und erproben die Moderation.", "90 Minuten"],
          ["kommt", "Beschwerdewege für Kinder", "", "Sie entwerfen einen Weg, auf dem auch kleine Kinder sich beschweren können.", "90 Minuten"]] },

  { kurz: "Alltag", titel: "Demokratie im Alltag", vortrag: "Teil III · Informelle Demokratiebildung", blatt: "e6",
    frage: "Was erleben Kinder in den vielen Stunden zwischen den Gremien?",
    szene: { titel: "»Erbsen esse ich nicht!«",
      status: "Szene nach Doll, Herrmann u. a. (2020) · im Impulsvortrag erzählt · Fundstelle noch zu prüfen · die drei Reaktionen sind zugespitzt",
      text: ["Mittagessen. Eine Fachkraft bringt die Teller. Anna, vier Jahre alt, schaut darauf und ruft: »Erbsen esse ich nicht!«",
             "Drei Fachkräfte würden drei verschiedene Dinge sagen."] },
    wahl: { frage: "Bei welcher Antwort lernt Anna: Meine Stimme zählt?", optionen: [
      ["»Iss erst mal. Probieren musst du alles.«", "kaum", "Annas Satz wird nicht als Botschaft gehört, sondern als Widerstand, der vorbeigehen soll. Anna lernt: Was ich sage, ändert nichts."],
      ["»Du isst, was auf den Tisch kommt.«", "kaum", "Hier gilt Annas Satz als Angriff auf die Ordnung. Anna lernt: Wer aushandeln will, ist aufmüpfig."],
      ["»Du magst keine Erbsen? Erzähl mal: gar nicht – oder heute nicht?«", "zentral", "Die Fachkraft hört die Botschaft und prüft sie mit Anna gemeinsam. Das ist keine Frage der Methode, sondern der Haltung. Die Verantwortung für das Essen bleibt trotzdem bei ihr."]] },
    kern: "Informelle Demokratiebildung ist die Dauerleistung: Mahlzeiten, Pflege, Schlafen, Spiel, Konflikte, Morgenkreis. Feste Verfahren ohne gelebten Alltag sind Fassade. Ein freundlicher Alltag ohne feste Verfahren ist Willkür. Erst beides zusammen ist gelebte Demokratie.",
    begriffe: [
      ["Alltagspartizipation", "Beteiligung in den kleinen Situationen des Tages – beim Essen, Anziehen, Wickeln, Spielen."],
      ["Fassade", "Ein Kita-Rat tagt einmal im Monat. Im Alltag entscheiden weiter nur die Erwachsenen."],
      ["Willkür", "Eine Fachkraft nimmt Kinder ernst. Am Nachbartisch gilt das Gegenteil, weil nichts vereinbart ist."]],
    mit: "einen Beteiligungscheck für Essen, Pflege, Schlafen und Morgenkreis",
    kita: "Beobachten Sie eine Mahlzeit: Wer entscheidet, was und wie viel auf den Teller kommt?",
    weg: [["einstieg", "Einstieg: »Erbsen esse ich nicht!«", "e6", "Eine Szene, eine Festlegung, die wichtigsten Begriffe.", "15 Minuten"],
          ["kommt", "Mahlzeiten: der wichtigste Übungsort", "", "Sie untersuchen, wer beim Essen was entscheidet.", "45 Minuten"],
          ["kommt", "Wickeln, Schlafen, Eingewöhnung", "", "Sie klären, wie Kinder über ihren eigenen Körper mitbestimmen.", "45 Minuten"],
          ["kommt", "Fassade oder Willkür? Struktur und Haltung zusammenbringen", "", "Sie prüfen, wo Ihrer Einrichtung eher das Verfahren fehlt und wo die Haltung.", "90 Minuten"]] },

  { kurz: "Position", titel: "Haltung zeigen", vortrag: "Teil I · Was steht auf dem Spiel? – weitergedacht", blatt: "e7",
    frage: "Wie widerspreche ich klar – und schütze dabei die Kinder?",
    szene: { titel: "Beim Abholen",
      status: "ausgedachte Szene · die Aussage steht in den Gesprächskarten des Curriculums",
      text: ["Abholzeit an der Garderobe. Mehrere Kinder ziehen sich an. Ein Großvater sagt laut zu einer Mutter: »Die Ausländer nehmen uns alles weg.«",
             "Zwei Kinder, deren Familien aus anderen Ländern kommen, stehen daneben."] },
    wahl: { frage: "Was tun Sie zuerst?", optionen: [
      ["Ich überhöre es. Die Garderobe ist nicht der Ort für Streit.", "kaum", "Verständlich – niemand streitet gern vor Kindern. Schweigen kann aber wie Zustimmung wirken, gerade für die Kinder, die gemeint sind."],
      ["Ich benenne die Aussage und setze eine Grenze. Danach biete ich ein Gespräch an.", "zentral", "Schutz geht vor. Erst benennen und begrenzen: »Diese Aussage wertet Menschen ab. Das akzeptieren wir hier nicht.« Dann die Brücke: »Was genau macht Ihnen Sorgen?« – am besten ohne Kinder daneben."],
      ["Ich widerlege die Aussage mit Zahlen.", "begruendbar", "Fakten helfen – später, im ruhigen Gespräch. Im ersten Moment brauchen die Kinder daneben vor allem ein klares Signal."]] },
    kern: "Kontroverses bleibt kontrovers. Menschenwürde und gleiche Rechte stehen aber nicht zur Abstimmung. Ein Weg in fünf Schritten hilft im Gespräch: benennen – begrenzen – begründen – Brücken bauen – beauftragen. Frühe Demokratiebildung ist damit immer auch Vorbeugung gegen Menschenfeindlichkeit.",
    begriffe: [
      ["Populismus", "Eine Art, Politik zu machen: »Das wahre Volk« wird gegen »die da oben« oder gegen »die anderen« gestellt, dazu kommen einfache Antworten."],
      ["Gruppenbezogene Menschenfeindlichkeit", "Menschen werden abgewertet, weil sie einer Gruppe zugerechnet werden."],
      ["Beutelsbacher Konsens", "Drei Grundsätze politischer Bildung: niemanden überwältigen, Kontroverses kontrovers darstellen, zum eigenen Urteil befähigen."]],
    mit: "einen Gesprächsleitfaden und eine Intervention in fünf Sätzen",
    kita: "Welche Aussage haben Sie schon gehört, bei der Sie gern etwas gesagt hätten?",
    weg: [["einstieg", "Einstieg: Beim Abholen", "e7", "Eine Szene, eine Festlegung, die wichtigsten Begriffe.", "15 Minuten"],
          ["kommt", "Diskriminierung erkennen und benennen", "", "Sie lernen Formen der Abwertung kennen und ordnen Aussagen ein.", "mehrere Stunden"],
          ["kommt", "Populismus verstehen – die aktuelle Lage", "", "Sie prüfen politische Aussagen an Quellen und an den Grundrechten.", "mehrere Stunden"],
          ["kommt", "Zuhören, nachfragen, klar widersprechen", "", "Sie üben Gespräche mit Erwachsenen, die abwertend sprechen.", "mehrere Stunden"]] },

  { kurz: "Praxis", titel: "Ihr Praxisprojekt", vortrag: "Teil III · Kinder können Demokratie", blatt: "e8",
    frage: "Was nehmen Sie mit in Ihre Einrichtung?",
    szene: { titel: "Der Mülleimer",
      status: "Szene aus dem Film »Die Kinderstube der Demokratie« (2008) · nach dem Impulsvortrag erzählt · noch am Film zu prüfen",
      text: ["Kinder planen in einer Zukunftswerkstatt ihr Außengelände neu. Einige finden den Mülleimer blöd, andere wollen ihn behalten.",
             "Ein Kind ist ratlos: Das eine Kind sagt, es soll so sein, das andere sagt, es soll nicht so sein – was sollen wir denn da machen? Einfach beides? Das sei so schwer."] },
    wahl: { frage: "Was braucht dieses Kind jetzt von der Fachkraft?", optionen: [
      ["Eine Entscheidung: Die Fachkraft sagt, was mit dem Mülleimer passiert.", "kaum", "Das würde das Kind entlasten. Es nähme der Gruppe aber genau die Aufgabe, an der sie gerade wächst. Das Kind fragt: Was sollen wir da machen?"],
      ["Begleitung: Die Fachkraft hilft der Gruppe, selbst eine gerechte Lösung zu finden.", "zentral", "Das Kind erlebt zwei Meinungen als gleich berechtigt und die Lösung als gemeinsame Aufgabe. Zivilisiert streiten zu können, ist eine der wichtigsten demokratischen Fähigkeiten."],
      ["Eine schnelle Abstimmung.", "begruendbar", "Abstimmen ist ein Weg. Vorher lohnt die Beratung: Gibt es eine Lösung, mit der beide Seiten leben können?"]] },
    kern: "Kinder können Demokratie. Sieben Fähigkeiten wachsen dabei: aushandeln, entscheiden, mitverantworten, widersprechen, Konflikte gewaltfrei lösen, die Perspektive wechseln, Vielfalt aushalten. In Ihrem Praxisprojekt zeigen Sie, wie Ihre Einrichtung das möglich macht.",
    begriffe: [
      ["Perspektivwechsel", "Sich in die Lage und die Wünsche eines anderen hineinversetzen."],
      ["Zukunftswerkstatt", "Methode in drei Schritten: Kritik sammeln, Wünsche entwickeln, Umsetzung planen."]],
    mit: "Ihr eigenes Demokratieprojekt – geplant, erprobt und vorgestellt",
    kita: "Welche kleine Veränderung in Ihrer Einrichtung würden die Kinder sofort bemerken?",
    weg: [["einstieg", "Einstieg: Der Mülleimer", "e8", "Eine Szene, eine Festlegung, die wichtigsten Begriffe.", "15 Minuten"],
          ["kommt", "Projektwerkstatt", "", "Sie planen Ihr eigenes Vorhaben für die Praxisstelle.", "mehrere Stunden"],
          ["kommt", "Erprobung und kollegiale Beratung", "", "Sie probieren Ihr Vorhaben aus und holen Rückmeldung ein.", "mehrere Stunden"],
          ["kommt", "Präsentation und Ausblick", "", "Sie stellen Ihr Projekt vor und halten fest, was Sie mitnehmen.", "mehrere Stunden"]] }
];
