# Version 4.0 – Das Blatt auf DIN-A4-Grundlage

**Stand:** 18.11.2026 · Branch `fassung-4-a4-blatt` · Entwurf, noch nicht im Unterricht erprobt.

Der Auftrag hatte einen Kern: Die Idee aus dem Psycho-Labor, dass der Arbeitsbereich wie ein Arbeitsblatt auf A4 aussieht und druckt, kommt in den Leitfaden. Dazu sollten die neuen Skills und Erkenntnisse aus den anderen Fächern einfließen. Gebaut sind die Arbeitsblätter der Etappen 1 und 3 und die Einstiegsblätter der anderen Etappen. Für die Etappen 2 und 4 bis 8 steht hier nur ein Vorschlag zur Reihenfolge; gebaut ist dafür noch nichts.

Kennzeichnung: **Befund** heißt gemessen oder nachgesehen. **Einschätzung** heißt begründete Meinung. **Vorschlag** heißt, du entscheidest.

## 1 · Was gesichtet wurde

- **Vorbilder:** Psycho-Labor, Einheit Motivation, Fassung 2.1 (Stand `7b37c7c`), und das GGK-Labor mit der Neufassung »Arbeitsblatt Geschichte« (Branch `neufassung-arbeitsblatt-geschichte`, Stand `c2848f4`, Pilot M22, `docs/neufassung/DESIGN.md`, Abschnitt 7 »Benannte Regeln«).
- **Skills:** Geladen war das Paket »kidu-bau« in Fassung 0.8.0: `lernseite-bauen`, `website-design-workflow`, `signatur-design` und `schaubild-design`, jeweils mit ihren Fallstricken. Aus »kidu« kamen `unterricht-digitalisieren` (Lehrfunktionen, Papierfrage, Zeitdiagnose) und `digital-check`.
- **Arbeitsgedächtnis:** gelesen wurden die Projektnotizen (Stand, Entscheidungen) und die fächerübergreifenden Notizen »Digitale Didaktik – Prinzipien und Fachgrenzen« und »Erfahrungen aus Erprobungen«.

### Lehren aus anderen Fächern, die hier greifen

| Lehre | Herkunft | Was sie hier bedeutet |
| --- | --- | --- |
| Gemeinsam geführt, nicht frei geklickt | Psychologie | Die Nummer des Auftrags ist der Anker im Raum: groß am Heftrand und gleich im Register, auch am Beamer. |
| Ergebnisse brauchen eine Datei | Politik | »Stand als Datei sichern« steht jetzt auf jedem Blatt, nicht nur auf der Startseite. |
| Beim Urteilen schweigt das Gerät | Psychologie | Kriterien erst nach dem eigenen Text. Das Schreibblatt für den Stift zeigt keine Kriterien. **Grenze:** Wo eine Position menschenfeindlich ist, schweigt das Blatt nicht. Die Menschenwürde ist kein Kriterium unter anderen. |
| Der Hefter zeigt nur Bearbeitetes | Psychologie, Geschichte | »Das kann ich« erscheint im roten Faden erst, wenn die Einschätzung abgegeben ist. |
| Das Urteil ohne Gerät schreiben | Kidu | Schreibaufträge gibt es auch als Schreibblatt für den Stift. |
| Freiwillig heißt freiwillig | Kidu | Das Extra sperrt nichts und zählt nicht. Es gelten die Schutzregeln der Praxisstelle: keine Namen, keine Fotos von Kindern. |
| Rückschaufehler | Geschichte | **Greift hier nicht.** Die Fälle sind Gegenwart, nicht Vergangenheit mit bekanntem Ausgang. |

## 2 · Diagnose: Was die Vorbilder dem Leitfaden 3.0 voraushatten

| Baustein | Vorbild | Leitfaden 3.0 | Fassung 4.0 |
| --- | --- | --- | --- |
| Blatt auf A4-Grundlage: höchstens 52,5 rem, Heftrand mit Nummer, eckig, versetzte Platte | Psycho-Labor, GGK | Arbeitsbereich über die volle Breite | übernommen |
| Linien in Schreibfeldern, im Druck Text auf Linien | Psycho-Labor, GGK | Felder ohne Linien | übernommen |
| Schreibblatt mit leeren Linien | GGK | – | übernommen (Etappe 1, Auftrag 5, und die beiden Extras) |
| Blattkopf auf jedem Blatt, auch im Druck | Psycho-Labor, GGK | – | übernommen, mit »Etappe N von 8« |
| Paper-Proof: Deckblatt 1, Schreibblatt 1, Zusammenfassung 2 Seiten | GGK | nur Zusammenfassung, Plakat, Lernspur geprüft | übernommen und gemessen |
| Wide-Material: breit nur, wenn das Material es braucht | GGK | breite Aufträge, Register schrumpft | übernommen: nur Begriffsnetz, Dreibein und Hinweise |
| Werkzeuge im Register: Sichern, Laden, Ansicht | GGK | Sichern nur auf der Startseite | übernommen |
| Ansicht für den Beamer statt dunkler Ansicht | GGK | – | übernommen |
| »Das kann ich« im Hefter | Psycho-Labor (Kann-Liste) | – | übernommen, nur Bearbeitetes |
| Extra statt Hausaufgabe (No-Homework) | GGK | – | übernommen, je ein Extra in Etappe 1 und 3 |
| Lehrfunktion je Auftrag | Kidu | – | in den Hinweisen für die Lehrkraft |
| Papierfrage: Was macht das Gerät, was das Papier? | Kidu | – | in den Hinweisen für die Lehrkraft |
| Tafelmodus, drei Freigaben, Zusammenfassung auf zwei Seiten | Psycho-Labor, GGK | **schon da** | unverändert |

**Bewusst nicht übernommen:**

- **Teacher-Apart** (kein Lehrkrafttext im Paket der Lernenden). Die Hinweise für die Lehrkraft bleiben offen in derselben Datei. *Einschätzung:* Für angehende Erzieherinnen und Erzieher ist es Teil der Ausbildung, die Planung einer Stunde zu sehen. In den Hinweisen stehen Ablauf, Zeiten und Plenumsstellen, aber keine Erwartungshorizonte. Kommen später Erwartungen dazu, wird der Bereich von Anfang an verschlüsselt (Regel in `lernseite-bauen`, Abschnitt 5).
- **Farbwelten des GGK-Labors.** Es bleiben Petrol, Türkis und Eisblau aus deinem Folienlayout, auf hellem Grund. Glut steht nur als sparsame Markierung (»wir sind hier«, Leitfrage). *Einschätzung zur Nie-Liste in `signatur-design` 8.0* (»Creme mit Terrakotta«): Die Palette ist begründet, weil sie aus deinem Folienlayout kommt. Den weichen Schatten ersetzt auf dem Blatt die versetzte Platte.
- **Dunkle Ansicht.** Das Blatt ist Papier. Am Beamer gilt die Ansicht für den Beamer.

## 3 · Was sich geändert hat

**Das Blatt**

- A4-Breite mit Heftrand. Die Nummer des Auftrags hängt ab 900 Pixel Breite links im Rand. Eckige Form, versetzte Platte in Eisblau.
- Breit sind nur Etappe 1, Auftrag 3 (Begriffsnetz) und Auftrag 4 (Dreibein), außerdem die Hinweise für die Lehrkraft.
- Blattkopf: »Wahlfach Demokratiebildung · Leitfaden │ Etappe 3 von 8 · Arbeitsblatt │ Datum«.
- Titel in einer Zeile. »Arbeitsauftrag 7« steht klein darüber, beim Extra »Extra · freiwillig«.
- Linien in allen Schreibfeldern.
- Die Grafiken richten sich nach der Breite des Blatts, nicht des Fensters (Container-Abfragen). Das Dreibein steht unter einer Mindestbreite in einem verschiebbaren Rahmen.

**Register**

- Zweite Zeile mit Minuten und kurzem Stand (»nach Antwort«, »auf Ansage«). Vorleseprogramme hören den vollen Wortlaut.
- Am aktuellen Eintrag stehen keine Minuten.
- Darunter eingeklappt »Sichern · Laden · Ansicht« mit sechs Teilen:
  - Stand als Datei sichern
  - Stand aus Datei laden (mit Rückfrage, falsche Dateien werden abgewiesen)
  - Eingaben dieses Blatts löschen
  - Ansicht für den Beamer
  - Weniger Bewegung
  - der Link zu den Hinweisen für die Lehrkraft

**Druck**

- Jedes Schreibfeld druckt als Text auf Linien.
- »Als Schreibblatt drucken« gibt ein Blatt mit leeren Linien. Kriterien, Raster und »Zurück in den Raum« stehen darauf nicht.
- Das Deckblatt druckt auf einer Seite: Band schwarz auf weiß, Ablauf kompakt, zweispaltig.

**Hefter und Extra**

- Am Ende jedes Arbeitsblatts: drei Sätze »Das kann ich« zur Selbsteinschätzung (sicher · teils · noch nicht). Im roten Faden erscheinen nur beantwortete.
- Je ein Extra:
  - Etappe 1: »Nachgefragt in Ihrer Praxisstelle« – Antwort einer Fachkraft, Form nach Himmelmann mit Fundstelle im Lesetext, ein Satz zum eigenen Satz aus Auftrag 5.
  - Etappe 3: »Kinderrechte in Ihrer Praxisstelle finden« – was man findet oder dass man nichts findet, Zuordnung zu Schutz, Förderung oder Beteiligung mit Fundstelle, ein Satz zum Urteil.
- Das Extra zählt nicht zur Zeit und nicht zum Stand. »Weiter« auf dem Deckblatt überspringt es.

**Hinweise für die Lehrkraft**

- Neue Spalte »Lehrfunktion« (Einstieg · Erarbeitung · Sichern und üben · Übertragen und Ausblick).
- Ein Absatz zur Papierfrage.

**Kompass auf der Startseite**

- Die Beschriftung ist größer: wirksam mindestens 16,6 Pixel, vorher 11,7 bis 13,6 Pixel auf Tablet und Rechner und 9 Pixel auf dem Telefon.
- Zwei Spalten erst ab 1024 Pixel.
- Auf dem Telefon nur die Nummern, in der Mitte »Kinder-rechte« in zwei Zeilen. Die Namen der Etappen stehen in den Karten darunter.
- In der Etappenkarte ist die ganze Karte eines Arbeitsblatts antippbar. Vorher war es nur die Titelzeile mit 22 Pixel Höhe.

## 4 · Gestaltungsregeln, gemessen (Chromium, 18.11.2026)

| Regel | Ergebnis |
| --- | --- |
| One-Sheet | ✓ ein Auftrag je Blatt, das Register bleibt |
| Wide-Material | ✓ breit nur Begriffsnetz, Dreibein, Hinweise |
| First-Action / Beamer | **teilweise.** Bei 1280 × 720 liegt der erste Knopf auf vier Szenenseiten unter dem ersten Bildschirm: Etappe 1, Auftrag 1 (bei 1000 px) sowie Auftrag 1 der Einstiegsblätter 2 (854 px), 5 und 8 (je 765 px). Bei 1180 × 820 betrifft es zwei Seiten (Etappe 1 und 2, Auftrag 1). Grund: Die Szene steht vor der Festlegung (Material-First, Decide-First). Auf allen anderen Seiten steht der erste Knopf im ersten Bildschirm. Siehe »Offen«. |
| Three-Tap | ✓ drei Tipps vom Kompass bis zur ersten eigenen Antwort (Blatt → Auftrag 1 → Festlegung), dazwischen einmal scrollen |
| Decide-First | ✓ Rückmeldung erst nach dem Festlegen, im Durchlauf beider Blätter geprüft |
| Silent-Judgement | ✓ Schreibblatt ohne Kriterien; Kriterien am Bildschirm erst nach dem eigenen Text |
| Word-with-Colour | ✓ jeder Stand im Register als Wort |
| Only-Worked | ✓ »Das kann ich« nur bei abgegebener Einschätzung |
| Device-Switch | ✓ Sichern und Laden auf jedem Blatt; nach Löschen leer, nach Laden 9 von 9, falsche Datei abgewiesen |
| No-Homework | ✓ Extra freiwillig, außerhalb der Zeit |
| Paper-Proof | ✓ siehe Abschnitt 5 |
| 16-Pixel Floor | ✓ in den Blättern keine Schrift unter 16 px und kein Ziel unter 44 px bei 1440 × 900, 1280 × 720, 1180 × 820, 1024 × 768, 820 × 1180 und 390 × 844; Startseite zusätzlich bei 960 × 700. Schrift in Grafiken wirksam: Begriffsnetz 16, Dreibein 16,1 bis 24,8, Rückblick 16,1 bis 23,7, Kompass 16,6 bis 17,9 Pixel |
| Teacher-Apart | bewusst nicht (Abschnitt 2) |

## 5 · Messungen

**Druck** (`page.pdf()`, A4, Seiten gezählt):

| Was | Seiten | Ziel |
| --- | --- | --- |
| Deckblatt Etappe 1 und 3 | je 1 | 1 |
| Schreibblatt Etappe 1, Auftrag 5, und Extra Etappe 3 | je 1 | 1 |
| Zusammenfassung Etappe 1 und 3 | je 2 | 2 |
| Plakat (Etappe 3) | 1 | 1 |
| Lernspur | 1 | 1 |
| Extra Etappe 3 mit eigenen Antworten | 1 | – |

**Register bei 1180 × 820:** Alle Einträge von Etappe 3 und die eingeklappten Werkzeuge passen ohne Scrollen.

**Datei:** `index.html` 435 KB, eine Datei, läuft ohne Netz, keine Abrufe von fremden Servern, keine Fehler in der Konsole.

**Zeitdiagnose** am vollen Stand, 150 Wörter pro Minute (Schätzung, nicht erprobt):

| Blatt | geplant | Wörter | Lesezeit |
| --- | --- | --- | --- |
| Etappe 3 | 82 Min. + 3 Zusammenfassung | 3.316 mit allen drei Plakaten (3.046 mit einem) | etwa 22 Min. |
| Etappe 1 | 87 Min. + 3 Zusammenfassung | 2.156 | etwa 14 Min. |
| Extra Etappe 3 · Etappe 1 | außerhalb der Stunde | 141 · 109 | – |
| Hinweise Etappe 3 · Etappe 1 | für die Lehrkraft | 565 · 421 | – |

Die engsten Stellen sind dieselben wie in 3.0: In Etappe 3 sind es Auftrag 4 (533 Wörter) und der Rundgang (664 Wörter mit einem Plakat, 934 mit allen drei). In Etappe 1 sind es Begriffsnetz und Kita-Fall. Die Kürzungen K1 bis K3 stehen in den Hinweisen.

## 6 · Geprüft und nicht geprüft

- **Gelaufen (automatisch, Chromium, 18.11.2026):**
  - beide Arbeitsblätter vollständig wie eine Lernende durchgearbeitet
  - Stand nach Neuladen
  - Sichern, Laden und falsche Datei im Register
  - »Das kann ich« im roten Faden
  - Ansicht für den Beamer und »Weniger Bewegung« nach Neuladen
  - alte Adressen
  - Rahmenprüfung auf sechs Größen (Schrift, Zielflächen, doppelte IDs, Beschriftungen, waagrechter Überlauf)
  - Druck mit Seitenzahlen
  - wirksame Schrift in allen Grafiken
  - erster Knopf bei 1280 × 720 und 1180 × 820
  - Tipps bis zur ersten Antwort
  - Bildschirmfotos angesehen
- **Nicht gelaufen:**
  - Safari auf einem echten iPad (hoch und quer)
  - VoiceOver, Zoom 200 %
  - echter Beamer, echter Drucker, GoodNotes
  - Moodle
  - axe, Impeccable, Taste Skill
- **Bekannt:**
  - Ohne JavaScript bleiben Kompass und Blätter leer.
  - Auf dem Telefon (390 Pixel) überdecken die Linien des Begriffsnetzes andere Karten. Die Beschriftung der Linien steht dort nur in der Liste darunter.

## 7 · Offen – deine Entscheidung

1. **Szene vor dem ersten Knopf:** Soll die Szene oben bleiben? Dann ist das die begründete Ausnahme von First-Action, und die Szene wird am Beamer vorgelesen. Die andere Möglichkeit: Der Kasten »Arbeitsauftrag« steht über der Szene, damit man vor dem Lesen weiß, wozu man liest. Betroffen sind Etappe 1, Auftrag 1, und die Szenen der Einstiegsblätter 2, 5 und 8.
2. **Extra-Texte:** Passen die beiden Aufgaben zu den Praxisstellen deiner Klasse? Vor allem: Darf man dort eine Fachkraft so fragen, und hängt dort etwas zu Kinderrechten aus?
3. **Hinweise offen lassen** (Teacher-Apart): ja, solange keine Erwartungshorizonte dazukommen?

## 8 · Vorschlag: Reihenfolge für die Etappen 2 und 4 bis 8 (nicht gebaut)

1. **Etappe 2 »Warum gerade die Kita?«** – liegt zwischen den beiden fertigen Blättern; danach ist die Lernspur bis Etappe 3 geschlossen.
2. **Etappe 5 »Strukturen, die verlässlich sind«** – Material liegt vor: DS 4 »Kinder beteiligen – aber wie?« mit dem Fall Matschhose und § 45 SGB VIII. Die Etappe knüpft an Etappe 3, Auftrag 4 (Kette der Rechte) an.
3. **Etappe 4 »Macht und Haltung«** – nachdem der Zuschnitt bestätigt ist (offener Punkt). Grundlage wäre der Workshop »Stell dich nicht so an«.
4. **Etappe 7 »Haltung zeigen«** – nachdem der Zuschnitt bestätigt ist und die aktuellen politischen Daten geprüft sind. Wahlergebnisse und Einstufungen sind direkt vor der Stunde neu zu prüfen und als vorläufig zu kennzeichnen.
5. **Etappe 6 »Demokratie im Alltag« und Etappe 8 »Ihr Praxisprojekt«** – zuletzt; der Leistungsnachweis ist noch offen.

*Einschätzung:* Nicht jede Etappe braucht ein ganzes Arbeitsblatt. Ob eine Stunde digital wird, entscheidet `unterricht-digitalisieren` je Stunde. Das Einstiegsblatt kann auch der einzige digitale Teil bleiben.

## 9 · Nur du kannst das

- Safari auf einem echten iPad, hoch und quer. Achte auf Heftrand, Register und Werkzeuge, Linien in den Feldern und darauf, dass die Datei sich sichern und laden lässt.
- Einmal echt drucken: ein Deckblatt, ein Schreibblatt, eine Zusammenfassung. Einmal als PDF nach GoodNotes.
- VoiceOver auf dem Register (Standwörter) und Zoom 200 %.
- Am Beamer im Raum: Ansicht für den Beamer, Tafelmodus.
- Moodle: Datei hochladen und in Safari öffnen.
- Die beiden Extras und die Sätze »Das kann ich« fachlich lesen (Abschnitt 10).

## 10 · Vor dem Kopieren prüfen

Neu in 4.0 sind diese Inhalte:

- Extra Etappe 1: verweist auf die drei Formen nach Himmelmann und auf den Lesetext aus Auftrag 2.
- Extra Etappe 3: Zuordnung zu Schutz, Förderung und Beteiligung.
- Die Sätze »Das kann ich«: Etappe 3 nennt Artikel 12 der UN-Kinderrechtskonvention (Berücksichtigung des Kindeswillens), der auf dem Blatt schon in Auftrag 4 steht.
- Die Papierfrage in den Hinweisen.

Neue Zahlen, Zitate oder Paragrafen kamen nicht dazu. Die Inhalte aus 3.0 stehen unverändert mit ihrem Status in der README, Abschnitt »Status der Inhalte«.

## 11 · Vorschläge für Fallstricke in den Skills

Übernommen in »kidu-bau« 0.9.1 (18.11.2026).

1. **`website-design-workflow`, CSS:** In einem Blatt mit fester A4-Breite schalteten Grafiken per `@media (min-width …)` nach der Fensterbreite um, nicht nach der Breite des Blatts. Das Dreibein wurde dadurch wirksam 12 Pixel klein (Tablet quer) bzw. 10,6 Pixel (Telefon). Abhilfe: Container-Abfragen am Blatt-Teil (`container-type: inline-size`), eine Mindestbreite und ein verschiebbarer Rahmen.
2. **`lernseite-bauen`, Speichern und Freigaben:** Das freiwillige Extra stand im Register als letzter Auftrag. Der Knopf »Weiter« auf dem Deckblatt zeigte deshalb auf das Extra, sobald alle Pflichtaufträge fertig waren. Abhilfe: Freiwillige Aufträge zählen nicht zur Zeit, nicht zum Fortschritt und nicht für »Weiter«; das im Durchlauf prüfen.
3. **`lernseite-bauen`, Aufgaben und Rückmeldung:** Das Schreibblatt für den Stift zeigte das Kriterienraster. Das verletzt Silent-Judgement, denn wer von Hand schreibt, sieht die Kriterien vor dem eigenen Text. Abhilfe: Im Handschrift-Druck Raster, Kriterien und »Zurück in den Raum« ausblenden.
4. **`website-design-workflow`, CSS:** Der aktuelle Registereintrag mit »Sie sind hier · fertig« und Minuten brach um und schob die Werkzeuge bei 1180 × 820 aus dem ersten Bildschirm. Abhilfe: kurze Standwörter, voller Wortlaut nur für Vorleseprogramme, keine Minuten am aktuellen Eintrag, Höhe des Registers bei 1180 × 820 messen.
5. **`website-design-workflow`, Druck:** Ein Deckblatt mit dunklem Band druckte auf zwei Seiten. Die helle Schrift stand ohne Hintergrund auf weißem Papier, die lange Liste war einspaltig. Abhilfe: eigene Druckregeln für das Deckblatt (Band schwarz auf weiß mit Rahmen, Liste zweispaltig, Nebensächliches ausblenden), Seitenzahl prüfen.
6. **`website-design-workflow`, Browser-Tests:** Das Prüfskript für Schrift und Zielflächen lief nur über die Blätter. Auf der Startseite blieben eine Kompass-Beschriftung mit 9 bis 12,9 Pixel und ein Link mit 22 Pixel Höhe bis Fassung 4.0 unentdeckt. Abhilfe: Das Prüfskript läuft über alle Ansichten, auch über die Startseite.
7. **`website-design-workflow`, Gestaltungsregeln messen:** First-Action (erster Knopf bei 1280 × 720 im ersten Bildschirm) und »Szene vor der Festlegung« widersprechen sich auf Szenenseiten. Abhilfe: First-Action über alle Seiten messen und Szenenseiten als begründete Ausnahme in `DESIGN.md` nennen – oder den Arbeitsauftrag über die Szene setzen.
