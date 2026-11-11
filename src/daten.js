/* Inhalte der Lernseite »Drei Formen – ein Ganzes« – getrennt von der Logik. Quellen: Arbeitsblätter DS 1, Impulsvortrag. */
var DATEN = {
  schluessel: "wpb-demokratie-leitfaden:v3",

  lesetext: [
    [ ["l1", "Demokratie ist mehr als das Kreuz auf dem Wahlzettel."],
      ["l2", "Und auch mehr als der Wille der Mehrheit."],
      ["l3", "Demokratie beruht auf der Vorstellung der Menschenwürde: Jeder Mensch hat unveräußerliche Rechte."] ],
    [ ["l4", "Meist ist mit Demokratie eine Herrschaftsform gemeint, die auf Volkssouveränität und politischer Gleichheit gründet."],
      ["l5", "Volkssouveränität heißt: Die Herrschaft geht vom Volk aus, sie wird durch das Volk oder gewählte Vertreterinnen und Vertreter ausgeübt und zu seinem Nutzen eingesetzt."],
      ["l6", "Grundrechte und Rechtsstaat schützen den Einzelnen vor staatlicher Willkür."],
      ["l7", "Politische Gleichheit heißt: Alle Bürgerinnen und Bürger haben die gleichen Wahl- und Beteiligungsrechte – unabhängig von Geschlecht, Herkunft oder Konfession."] ]
  ],
  leseLk: ["l2", "l3", "l6"],
  leseRueck: "Die Lehrkraft schlägt drei Stellen vor (gelb, mit Unterstrich): Satz 2 sagt es direkt. Satz 3 nennt den Grund – Rechte, die jedem Menschen zustehen. Satz 6 nennt das Mittel – Grundrechte und Rechtsstaat schützen auch den, der überstimmt wurde. Andere Stellen können ebenfalls passen, wenn Ihre Begründung trägt.",

  formen: { h: "Herrschaftsform", g: "Gesellschaftsform", l: "Lebensform" },
  zonen: { h: "h", g: "g", l: "l", hg: "hg", hl: "hl", gl: "gl", hgl: "hgl" },
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

  faelle: [
    { id: "A", titel: "Die neue Regel",
      text: "In der Kita wird entschieden, dass Kinder den Bauraum am Nachmittag nicht mehr nutzen dürfen. Die Regel wurde von den pädagogischen Fachkräften beschlossen. Eine Begründung erhalten die Kinder nicht.",
      fragen: ["Wer besitzt Entscheidungsmacht?", "Welche Rechte und Interessen werden berührt?", "Wie könnte das Verfahren demokratischer gestaltet werden?"],
      urteil: { h: ["zentral", "Es geht darum, wer entscheidet und ob Macht begründet und begrenzt wird."],
                g: ["kaum", "Verschiedene Gruppen oder Lebensweisen spielen hier keine Rolle. Fragen Sie: Wer hat entschieden – und wie?"],
                l: ["begruendbar", "Stimmt: Transparenz und respektvoller Umgang fehlen. Der Kern ist aber die Frage, wer entscheidet – Herrschaftsform."] } },
    { id: "B", titel: "Der Familienbaum",
      text: "Für ein Gruppenprojekt sollen alle Kinder »Mama und Papa« in einen Familienbaum malen. Ein Kind sagt: »Ich habe aber zwei Mamas.« Ein anderes Kind ruft: »Das ist keine richtige Familie!«",
      fragen: ["Wer wird als »normal« dargestellt?", "Wie sollte die Fachkraft unmittelbar reagieren?", "Wie können Materialien und Routinen verändert werden?"],
      urteil: { g: ["zentral", "Es geht darum, ob verschiedene Familienformen als normal gelten."],
                l: ["begruendbar", "Stimmt: Wie die Fachkraft im Moment reagiert, ist Lebensform. Der Auslöser ist aber ein enges Bild von Familie – Gesellschaftsform."],
                h: ["kaum", "Hier wird nichts beschlossen oder abgestimmt. Schauen Sie auf das Bild von Familie, das die Aufgabe vorgibt."] } },
    { id: "C", titel: "Das Nein beim Wickeln",
      text: "Ein Kind sagt beim Wickeln deutlich »Nein« und dreht sich weg. Die Fachkraft antwortet: »Stell dich nicht so an, das muss jetzt sein.«",
      fragen: ["Welche Rechte des Kindes sind berührt?", "Wie zeigt sich das Machtgefälle?", "Was wäre eine schützende und respektvolle Reaktion?"],
      urteil: { l: ["zentral", "Es geht um den Umgang im Alltag: Wird das Nein gehört und die Würde geachtet?"],
                h: ["begruendbar", "Stimmt: Das Machtgefälle und die Rechte des Kindes gehören dazu. Erlebt wird die Situation aber im Alltag – Lebensform."],
                g: ["kaum", "Gruppen und Vielfalt sind hier nicht das Thema. Schauen Sie auf den Umgang zwischen Fachkraft und Kind."] } },
    { id: "D", titel: "Die Kinderkonferenz",
      text: "Die Kinder dürfen in einer Kinderkonferenz über das Thema des Sommerfestes abstimmen. Anschließend entscheidet das Team ohne weitere Erklärung über ein anderes Thema.",
      fragen: ["Ist das Beteiligung oder Scheinbeteiligung?", "Welche Wirkung kann das auf die Selbstwirksamkeit der Kinder haben?", "Wie müsste die Entscheidung transparent gemacht werden?"],
      urteil: { h: ["zentral", "Ein Verfahren wird eingesetzt und dann übergangen: Die Macht des Teams ist nicht begrenzt."],
                l: ["zentral", "Auch das trifft: Die Kinder erleben, dass ihre Stimme nicht zählt. Herrschafts- und Lebensform greifen hier ineinander."],
                g: ["kaum", "Vielfalt und Gruppen sind hier nicht berührt. Schauen Sie auf das Verfahren und auf das, was die Kinder dabei erleben."] } },
    { id: "E", titel: "Die Beschwerde",
      text: "Ein Kind erzählt, dass es von anderen Kindern wiederholt wegen seiner Sprache ausgelacht wird. Die Fachkraft sagt: »Versuch einfach, das nicht so ernst zu nehmen.«",
      fragen: ["Warum reicht Neutralität hier nicht aus?", "Wie kann das betroffene Kind geschützt und gestärkt werden?", "Wie kann die Gruppe einbezogen werden, ohne das Kind bloßzustellen?"],
      urteil: { g: ["zentral", "Ein Kind wird wegen seiner Sprache ausgegrenzt: Es geht um Schutz vor Diskriminierung."],
                l: ["zentral", "Auch das trifft: Die Fachkraft hört nicht zu und widerspricht nicht. Gesellschafts- und Lebensform greifen ineinander."],
                h: ["begruendbar", "Stimmt: Das Kind beschwert sich, und die Beschwerde bleibt folgenlos. Der Anlass ist aber Ausgrenzung – Gesellschafts- und Lebensform."] } },
    { id: "F", titel: "Der Elternbeirat",
      text: "Der Elternbeirat fordert, dass in der Einrichtung nur noch Deutsch gesprochen wird. Mehrsprachige Aushänge sollen entfernt werden, weil sie angeblich »die Integration verhindern«.",
      fragen: ["Welche Kinder und Familien wären betroffen?", "Welche Position sollte die Einrichtung vertreten?", "Wo liegen Gesprächsmöglichkeiten, wo sind Grenzen zu setzen?"],
      urteil: { g: ["zentral", "Es geht darum, ob verschiedene Sprachen in der Einrichtung Platz haben."],
                h: ["begruendbar", "Stimmt: Ein Gremium will eine Regel setzen, und die Einrichtung muss sich auf Rechte berufen. Der Konflikt selbst ist einer um Vielfalt – Gesellschaftsform."],
                l: ["begruendbar", "Stimmt: Wie das Gespräch mit dem Elternbeirat geführt wird, ist Lebensform. Der Konflikt selbst ist einer um Vielfalt – Gesellschaftsform."] } }
  ],
  zusatzfrage: "Wer gehört in dieser Situation dazu – und wer entscheidet das?"
};
/* Dreibein */
DATEN.kriterien = [
  { id: "h1", form: "h", text: "Ist klar und begründet, wer hier entscheidet?" },
  { id: "h2", form: "h", text: "Können die Kinder die Entscheidung beeinflussen oder sich beschweren?" },
  { id: "g1", form: "g", text: "Kommen alle Kinder und Familien mit ihren Sprachen und Lebensweisen vor?" },
  { id: "g2", form: "g", text: "Wird Ausgrenzung bemerkt und gestoppt?" },
  { id: "l1", form: "l", text: "Wird dem Kind zugehört – auch seinem Nein?" },
  { id: "l2", form: "l", text: "Bleibt der Umgang respektvoll, auch im Konflikt?" }
];
DATEN.stufen = [[2, "ja"], [1, "teils"], [0, "nein"], [3, "nicht berührt"]];
DATEN.beinName = { h: "Herrschaft", g: "Gesellschaft", l: "Leben" };
