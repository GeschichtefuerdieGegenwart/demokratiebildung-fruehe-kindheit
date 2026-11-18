# Demokratiebildung in der frühen Kindheit

Digitaler Leitfaden für das Wahlfach »Demokratie, jetzt und in Zukunft: Demokratiebildung in der frühen Kindheit« (Fachschule für Sozialpädagogik, Abschlussklasse, Tablet-Klasse).

**Stand:** Version 5.0 vom 18.11.2026 – alle acht Etappen als Arbeitsblatt auf DIN-A4-Grundlage. Entwurf, noch nicht im Unterricht erprobt. Was sich geändert hat und warum: [`docs/version-5.0.md`](docs/version-5.0.md) und [`docs/version-4.0.md`](docs/version-4.0.md).

## Was hier liegt

`index.html` ist die ganze Seite in einer Datei. Sie läuft ohne Netz und lädt nichts von fremden Servern.

| Bereich | Adresse | Inhalt |
| --- | --- | --- |
| Jahreskompass | `#start` | Acht Etappen durch das Schuljahr, in der Mitte die Kinderrechte. Darunter: die Arbeitsblätter mit Fortschritt, der rote Faden (ein Satz je Etappe und eine eigene Antwort auf jede Leitfrage), Sichern und Laden als Datei, der Vortrag in drei Teilen. |
| Arbeitsblatt Etappe 1 | `#e1` | »Drei Formen – ein Ganzes«, Doppelstunde, sieben Aufträge. |
| Arbeitsblatt Etappe 3 | `#e3` | »Kinder haben Rechte«, Doppelstunde, neun Aufträge, mit der Ausstellung »Kinderrechte im Kita-Alltag«. |
| Arbeitsblatt Etappe 2 | `#e2` | »Warum gerade die Kita?«, Doppelstunde, sieben Aufträge: vier Gründe aus der Forschung, Einwände, Antwort für den Elternabend. |
| Arbeitsblatt Etappe 4 | `#e4` | »Macht und Haltung«, acht Aufträge: das Machtgefälle, einladende und verschließende Sätze, vier Merkmale demokratischer Haltung, Handlungsleitlinie. |
| Arbeitsblatt Etappe 5 | `#e5` | »Kinder beteiligen – aber wie?«, acht Aufträge: Mopslied, Fall Matschhose, Beteiligung oder Schein, Kinderkonferenz · Beschwerdeweg · Kita-Verfassung, Beteiligungsformat mit Ampel. |
| Arbeitsblatt Etappe 6 | `#e6` | »Demokratie im Alltag«, sieben Aufträge: vier Orte im Alltag, Fassade oder Willkür, Beteiligungscheck. |
| Arbeitsblatt Etappe 7 | `#e7` | »Haltung zeigen«, acht Aufträge: die Grenze der Kontroverse, Fakten statt Pauschalurteil (Stand 18.11.2026), fünf Schritte im Gespräch. |
| Arbeitsblatt Etappe 8 | `#e8` | »Ihr Praxisprojekt«, sieben Aufträge: was Kinder in Demokratie können, Projektideen prüfen, der Steckbrief des eigenen Projekts. |
| Ein Auftrag | `#e3/a5` | Jeder Auftrag hat eine eigene Adresse (für QR-Codes und Links in Moodle). |
| Extra | `#e1/aX` … `#e8/aX` | Je eine freiwillige Aufgabe für die Praxisstelle. Zählt nicht zur Zeit und nicht zum Stand. |
| Hinweise für die Lehrkraft | `#e1/lk` … `#e8/lk` | Ablauf mit Zeiten, Lehrfunktion je Auftrag, Freigaben, Plenumsstellen, Kürzungen, Papierfrage, Status der Inhalte. Dort auch: »Alle Aufträge auf diesem Gerät freigeben« für das Smartboard. |

Alte Adressen führen weiter: `#heute` → `#e1`, `#heute-alle` → `#e1` mit allen Freigaben, `#ausstellung` → `#e3/a5`, `#etappe-3` → `#e3`.

## Fassung 5.0: Alle acht Etappen als Arbeitsblatt

Jede Etappe hat jetzt ein Arbeitsblatt für eine Doppelstunde, gebaut nach demselben Bogen wie Etappe 1 und 3: **erinnern** (drei Abruffragen zur vorigen Etappe) · **die Szene** aus dem Impulsvortrag mit Festlegung · **die eigene Position** auf einer Linie · **erarbeiten** (meist als Gruppenpuzzle) · **üben** · **ein eigenes Produkt** mit Kriterien nach dem Text · **Rückblick** mit Rückkehr zur ersten Position, Lernspur und »Das kann ich« · **Zusammenfassung** auf zwei Seiten · **Extra** für die Praxisstelle.

- Die Szene des früheren Einstiegsblatts ist jetzt Auftrag 2 und behält ihren Speicherschlüssel (`eN.szene`): Wer sich dort schon festgelegt hat, findet die Festlegung wieder. Die Notiz »In Ihrer Kita« aus dem Einstiegsblatt steht auf der Seite des Extras.
- Neue gemeinsame Bausteine in `src/blatt-bausteine.js`: Kartenrunde (links wählen, rechts lesen und festlegen), Legen in Spalten mit Vorschlag, Umformen (erst der eigene Satz, dann der Vorschlag), Ampel mit Wort, Produkt in mehreren Feldern, Zusammenfassung aus Daten.
- **Szenen bleiben oben:** Auf den Szenenseiten liegt der erste Knopf bei 1280 × 720 unter dem ersten Bildschirm. Das ist eine begründete Ausnahme von First-Action (entschieden am 18.11.2026): Die Szene steht vor der Festlegung.
- Etappe 4 und 7 tragen jeweils die erste Stunde ihrer Etappe (Curriculum, Einheit 6 bzw. Einheiten 21 bis 24). Vielfalt und Anti-Bias, Diskriminierungsformen und Desinformation folgen als eigene Stunden.

## Fassung 4.0: Das Blatt auf DIN-A4-Grundlage

Vorbild sind das Psycho-Labor (Einheit Motivation, Fassung 2.1) und seine Weiterführung im GGK-Labor (»Arbeitsblatt Geschichte«, Pilot M22, Stand 18.11.2026). Jedes Blatt sieht am Bildschirm aus und druckt wie ein Arbeitsblatt auf A4.

- **A4 ist die Regel:** höchstens 52,5 rem breit, links der Heftrand mit der Nummer des Auftrags, eckig, mit versetzter Platte in Eisblau statt weichem Schatten. **Breit** werden nur Aufträge, deren Material die Breite braucht: Begriffsnetz und Dreibein (Etappe 1, Auftrag 3 und 4) und die Hinweise für die Lehrkraft (Tabelle).
- **Blattkopf** auf jedem Blatt, auch im Druck: »Wahlfach Demokratiebildung · Leitfaden │ Etappe 3 von 8 · Arbeitsblatt │ Datum«.
- **Titel in einer Zeile:** »Arbeitsauftrag 7« steht klein über dem Titel.
- **Linien zum Schreiben** in jedem Schreibfeld. Beim Drucken wird jedes Feld zu Text auf Linien. Schreibaufträge gibt es zusätzlich als **Schreibblatt** mit leeren Linien für den Stift (Etappe 1, Auftrag 5, und die beiden Extras).
- **Paper-Proof** (gedruckt geprüft): Deckblatt eine Seite, Schreibblatt eine Seite, Zusammenfassung zwei Seiten, Plakat und Lernspur je eine Seite.
- **Register** mit Titel, Minuten und Stand in zwei Zeilen und kurzen Standwörtern (»nach Antwort«, »auf Ansage«; Vorleseprogramme hören den vollen Wortlaut). Darunter eingeklappt **Sichern · Laden · Ansicht:** Stand als Datei sichern und laden (auf jedem Blatt), Eingaben dieses Blatts löschen, Ansicht für den Beamer, Weniger Bewegung. Bei 1180 × 820 passen alle Einträge und die Werkzeuge ohne Scrollen.
- **Ansicht für den Beamer:** Grund und Blatt weiß, Schrift schwarz. Eine dunkle Ansicht gibt es bewusst nicht – das Blatt ist Papier.
- **Extra:** höchstens eine freiwillige Aufgabe je Arbeitsblatt, als letzter Eintrag im Register (eckiges Feld »＋«). Sie hängt an der eigenen Praxisstelle, verlangt eine Fundstelle aus dem Blatt und endet mit einem Satz zum eigenen Urteil; gezeigt wird sie im Gespräch. Keine Namen, keine Fotos von Kindern.
- **Kompass als Hefter:** Im roten Faden steht je Etappe der eigene Satz und »Das kann ich« – die eigene Einschätzung am Ende des Arbeitsblatts. Es erscheint nur, was schon bearbeitet ist.

## Der Blatt-Standard

Übernommen aus dem GGK-Labor (M22, Fassung 4.1) und gilt jetzt für jedes Blatt dieses Repositorys.

- **Register links** auf Papier: alle Aufträge mit Nummer, Sozialform, Minuten und Stand – *Sie sind hier · fertig · offen · öffnet auf Ansage · öffnet nach Ihrer Antwort*. Darüber der Fortschritt (»3 von 9 Aufträgen fertig«). Bei breiten Aufträgen (Begriffsnetz) schrumpft das Register auf die Nummern; unter 900 Pixel Breite wird es eine Leiste oben.
- **Rechts genau ein Auftrag** als Seite zum Scrollen, unten »‹ zurück« und »weiter ›«.
- **Deckblatt** je Blatt: Titel und Leitfrage, »Wo wir stehen« (Vortrag und die acht Etappen), Darum geht es, Am Ende können Sie, So läuft dieses Blatt.
- **Freigaben:** *offen* · *auf Ansage* (die Lernenden bestätigen »Unsere Lehrkraft hat freigegeben«) · *nach der eigenen Antwort*. Das ist eine Bremse gegen Vorblättern, kein Schutz.
- **Zusammenfassung** am Ende: »Das müssen Sie wissen« und »Das müssen Sie können«, genau zwei Seiten A4 zum Abheften (gedruckt geprüft), mit den eigenen Antworten.
- **Kästen** an jeder Aufgabe, sichtbar getrennt: Arbeitsauftrag · Das steckt dahinter · Das halten wir fest · Zurück in den Raum · Das brauchen Sie.

## Arbeitsblatt Etappe 3: Kinder haben Rechte

Leitfrage: *Geben wir Kindern Rechte – oder haben sie welche?* Der Tiefgang kommt aus dem Impulsvortrag, Teil II, Kapitel 4 (Korczak) und 5 (der gesetzliche Auftrag).

| Nr. | Auftrag | Min. | Freigabe | Was das Gerät tut (Kidu) |
| --- | --- | --- | --- | --- |
| 1 | Erst erinnern: drei Fragen zu Etappe 1 | 4 | offen | Verdecken |
| 2 | Ihre Position: »Wer Kinder liebt, braucht keine Kinderrechte.« | 5 | offen | Verdecken – die Festlegung bleibt stehen |
| 3 | Korczak zeigt sich selbst an; Republik der Kinder, Kernsatz des Vortrags | 10 | nach Auftrag 2 | Verdecken · Rückmelden |
| 4 | Was das Gesetz verlangt: Fall vermuten (mit Sicherheit), Kette Art. 12 → § 8 → § 45, Zeitleiste, Artikel 12 übersetzen, Sprachprobe »Recht oder Erlaubnis?« | 12 | auf Ansage | Verdecken · Stufen (zwei Lesestufen) |
| 5 | Rundgang durch die Ausstellung: sechs Plakate, je Szene ein Prüfstein mit Begründung; Alltagskarten für Schnelle | 25 | auf Ansage | Rückmelden – je Prüfstein mit Begründung |
| 6 | Ihr Plakat für die Kita, Vorschau beim Schreiben, Kriterien danach, Druck auf eine Seite A4 | 12 | nach drei Plakaten | Papierfrage: geht auch auf Papier |
| 7 | Worüber dürfen Kinder bei Ihnen bestimmen? Acht Karten in vier Spalten legen, Bild ab sechs Karten, eigener Schritt | 8 | offen | Ihr Bild auf einen Blick |
| 8 | Rückblick: zurück zur Position, Satz für die Lernspur, Selbsteinschätzung, Stimmkarte | 6 | nach dem Plakat | Verdecken – Rückkehr zur ersten Festlegung |
| Z | Zusammenfassung zum Abheften | 3 | nach Auftrag 8 | – |

## Arbeitsblatt Etappe 1: Drei Formen – ein Ganzes

Leitfrage: *Was ist Demokratie – und wo beginnt sie?* Aus der Lernseite von Version 2 übernommen und in den Blatt-Standard gesetzt.

| Nr. | Auftrag | Min. | Freigabe |
| --- | --- | --- | --- |
| 1 | Drei Kinder am Fenster: Position 0–10, dann Deutung der Szene | 10 | offen |
| 2 | Lesen und markieren, Vergleich mit dem Vorschlag der Lehrkraft, danach die drei Formen | 15 | nach Auftrag 1 |
| 3 | Begriffsnetz legen (Zwischenstand ab fünf Karten, »passt kaum« zurücklegen) und verbinden | 20 | auf Ansage |
| 4 | Kita-Fall mit dem Dreibein: vermuten, prüfen, umbauen | 20 | auf Ansage |
| 5 | Ihr Satz: »Demokratie beginnt in der Kita, wenn …« (geht in die Lernspur) | 12 | auf Ansage |
| 6 | Rückblick, Selbsteinschätzung, freiwillig: die eigene Praxisstelle | 10 | nach Auftrag 5 |
| Z | Zusammenfassung zum Abheften | 3 | nach Auftrag 6 |

## Die acht Etappen

Der Vortrag ist das Kerncurriculum. Die Etappen 1 bis 6 und 8 folgen seinen Kapiteln; Etappe 7 nimmt das erste Kapitel (»Was steht auf dem Spiel?«) wieder auf.

| Nr. | Etappe | Szene | Im Vortrag | Blatt |
| --- | --- | --- | --- | --- |
| 1 | Demokratie verstehen | Drei Kinder am Fenster | Teil I | Arbeitsblatt |
| 2 | Warum gerade die Kita? | »Wir brauchen einen Chef« | Teil II, Kapitel 3 | Arbeitsblatt |
| 3 | Kinder haben Rechte | Korczak zeigt sich selbst an | Teil II, Kapitel 4–5 | Arbeitsblatt |
| 4 | Macht und Haltung | »Wollt ihr heute rausgehen?« | Teil III, Kapitel 13 | Arbeitsblatt |
| 5 | Strukturen, die verlässlich sind | Das Mopslied | Teil II, Kapitel 6 · Teil III, Kapitel 10 | Arbeitsblatt (aus DS 4) |
| 6 | Demokratie im Alltag | »Erbsen esse ich nicht!« | Teil III, Kapitel 11–12 | Arbeitsblatt |
| 7 | Haltung zeigen | Beim Abholen | Teil I, Kapitel 1 – weitergedacht | Arbeitsblatt |
| 8 | Ihr Praxisprojekt | Der Mülleimer | Teil III, Kapitel 14–15 | Arbeitsblatt |

Wo die Klasse gerade steht, legt `hier` in `src/daten-jahr.js` fest (0 = Etappe 1). Nur dort umstellen.

## Entscheidungen

- **Blatt-Standard für alle Blätter** (17.11.2026). Die Etappenfenster von Version 2.1 sind in Deckblatt und Register aufgegangen; »Ihr Weg durch diese Etappe« steht jetzt im Kompass und auf dem Deckblatt.
- **Umfang:** Die Arbeitsblätter tragen eine ganze Doppelstunde, gemeinsam geführt am Smartboard. Positionslinie, Rundgang im Plenum und Stimmkarten bleiben im Raum; jeder Auftrag nennt in »Zurück in den Raum«, wann das Gerät beiseitegelegt wird.
- **Anrede:** »Sie« (erwachsene Lernende).
- **Interaktionsmuster:** Etappe 3 hat drei Muster der Stunde – Einfachwahl mit Erklärung je Option und eigener Begründung · Satzanfang mit Kriterienvergleich (Übersetzung, Plakat) · Zuordnen in Spalten. Dazu kommen die Rituale, die jedes Blatt gleich hat: Erst erinnern, Position am Anfang und Rückkehr am Ende, Selbsteinschätzung, Stimmkarte. Etappe 1 liegt mit Markieren, Begriffsnetz und Dreibein bewusst über der Faustregel von drei Mustern – das Wahlfach ist das Versuchsfeld für Legetechniken; Kürzungen K1 und K2 stehen in den Hinweisen für die Lehrkraft.
- **Interaktionsmuster der Fassung 5.0** (je Blatt höchstens drei, dazu die Rituale Abruf, Positionslinie, Lernspur, Stimmkarte): Etappe 2 – Einfachwahl mit Erklärung je Option (Szene, vier Gründe, Einwände) · Satzanfang mit Kriterienvergleich (Antwort für den Elternabend). Etappe 4 – Einfachwahl · eigener Satz, dann Vorschlag (Umformen) · Zuordnen in Spalten (vier Merkmale). Etappe 5 – Einfachwahl (Ecken, drei Verfahren) · Zuordnen in Spalten (Stufen) · Selbsteinschätzung mit Wort (Ampel). Etappe 6 – Einfachwahl (vier Orte) · Zuordnen in Spalten (Fassade oder Willkür) · Ampel mit Wort und Satzanfang mit Kriterien. Etappe 7 – Zuordnen in Spalten (die Grenze) · Einfachwahl (Fakten) · eigener Satz, dann Vorschlag (fünf Schritte). Etappe 8 – Einfachwahl (Fähigkeiten, Projektideen) · Produkt in Feldern mit Kriterien (Steckbrief). Jedes Muster verlangt eine Festlegung vor der Rückmeldung.
- **Rückmeldung erst nach der Festlegung:** Die Rückmeldetexte kommen erst nach »Festlegen« ins Dokument, auch nicht vorher für Vorleseprogramme (geprüft). Bei Deutungsfragen gestuft: zentral · auch begründbar · passt kaum.
- **Fortschritt** zählt erledigte Aufträge, keine Klicks. Etappe 3, Auftrag 5 ist fertig mit drei Plakaten; Etappe 1, Auftrag 3 mit Zwischenstand und zwei Verbindungen oder mit allen zwölf Karten.
- **Bewegung:** nur nach einer Handlung – Rückmeldung und Karten blenden in 180 bis 240 ms ein, der Stempel »festgelegt« in 320 ms, das Dreibein kippt in 420 ms, die Nadel des Kompasses dreht in 800 ms. »Weniger Bewegung« im System oder per Schalter (im Register und auf der Startseite) hält alles an; der Schalter bleibt gespeichert.
- **Speichern:** alles im `localStorage` unter `wpb-demokratie-leitfaden:v4` – Auswahlen, Legebilder und jetzt auch die Texte, damit die Lernspur hält. Ein Stand aus Version 2 (`…:v3`) wird beim ersten Öffnen übernommen (nur Auswahlen; Texte lagen damals nur in der Sitzung), bearbeitete Aufträge sind danach freigegeben. **Sichern und Laden als Datei** auf der Startseite, damit nichts verloren geht, wenn Gerät oder Browser wechseln. »Eingaben dieses Blatts löschen« im Register, »Alle Eingaben löschen« auf der Startseite, beide mit Rückfrage auf der Seite.
- **Hinweise für die Lehrkraft offen:** Sie enthalten nur Ablauf, Zeiten und Status, keine Erwartungshorizonte – deshalb ohne Verschlüsselung. Sollen Erwartungshorizonte dazukommen, werden sie von Anfang an verschlüsselt eingebettet (Regel aus dem GGK-Labor), nie offen nachgetragen.
- **Datenschutz:** keine Namen, keine Antworten der Klasse im Repository. Aufträge mit Praxisbezug sind freiwillig und lassen eine ausgedachte Kita zu; bewertet wird nur das eigene Handeln.

## Status der Inhalte

- **Vorschlag, noch nicht geprüft:** Zuschnitt und Reihenfolge der acht Etappen, alle Rückmeldetexte und Einstufungen, die Zuordnung der Plakate zu den Prüfsteinen, die Anstöße zu den acht Karten in Etappe 3, Auftrag 7 (angelehnt an den Vortrag), die sechs Prüffragen des Dreibeins.
- **Ausgedacht und so gekennzeichnet:** die Kita-Fälle A–F, der Fall in Etappe 3, Auftrag 4, die sechs Szenen und sechs Alltagskarten der Ausstellung, die Szenen der Etappen 2, 4 und 7.
- **Aus dem Vortrag übernommen, am Original noch zu prüfen:** Bürgermeister-Szene, Korczak-Zitat (Korczak 1999, S. 273), Fröbel-Leitbild, Kinderzitat aus BilDe, Mopslied (nach Sturzenhecker), Erbsen-Szene (Doll/Herrmann u. a. 2020), Mülleimer-Szene (Film 2008), Himmelmann 2004, Hansen/Knauer 2015; Lesetext der ersten Stunde (Schmidt 2010, Schultze 2015).
- **Am Wortlaut der amtlichen deutschen Übersetzung abgeglichen (17.11.2026):** UN-Kinderrechtskonvention, Präambel und Artikel 2, 12, 19, 31.
- **Am Gesetzestext geprüft:** § 45 Abs. 2 Satz 2 Nr. 4 SGB VIII und § 8 Abs. 1 SGB VIII (01.11.2026), § 1631 Abs. 2 BGB (11.11.2026), Art. 1 Abs. 1, Art. 3 Abs. 3 und Art. 79 Abs. 3 GG (18.11.2026).
- **Aktuelle Daten mit Stand (Etappe 7, Auftrag 5):** Landtagswahlen Baden-Württemberg (8.3.2026) und Sachsen-Anhalt (6.9.2026), Einstufung der AfD und Beschluss des VG Köln vom 26.02.2026 – Stand 18.11.2026, je mit Quelle; vor jeder Stunde neu prüfen. Daten zu Korczak: socialnet-Lexikon und Jüdische Allgemeine (01.08.2022), abgeglichen 17.11.2026.
- **Nicht übernommen:** § 22a Abs. 1 SGB VIII in der Form des Vortrags – der Absatz regelt die Qualitätssicherung; die Bedürfnisse des einzelnen Kindes stehen in § 22 Abs. 3 SGB VIII. Zahlen aus der BilDe-Studie stehen nicht auf der Seite, solange sie nicht am Original geprüft sind.

## Zeitdiagnose

Gemessen am vollen Stand (alle Festlegungen getroffen), 150 Wörter pro Minute für langsame Lesende; geschlossene Aufklapper zählen nicht mit.

| Blatt | geplant | Wörter | Lesezeit | engste Stellen |
| --- | --- | --- | --- | --- |
| Etappe 3 | 82 Min. + 3 Zusammenfassung | 3.316 (mit drei Plakaten) | etwa 22 Min. | Auftrag 4 (533 Wörter, 12 Min.) und Rundgang (664 Wörter mit einem Plakat, 934 mit drei; 25 Min. mit Plenum) – Kürzungen K1 bis K3 in den Hinweisen |
| Etappe 1 | 87 Min. + 3 Zusammenfassung | 2.156 | etwa 14 Min. | Begriffsnetz und Kita-Fall (je 20 Min.) – Kürzungen K1 und K2 |
| Etappe 2 | 70 Min. + 3 | 2.416 | etwa 16 Min. | Gruppenpuzzle (671 Wörter mit allen vier Karten, 22 Min.) |
| Etappe 4 | 76 Min. + 3 | 2.858 | etwa 19 Min. | Sätze (545 Wörter mit allen neun) und vier Merkmale (564 mit Vorschlag) |
| Etappe 5 | 78 Min. + 3 | 3.038 | etwa 20 Min. | Drei Verfahren (638 Wörter mit allen drei Karten, 20 Min.) |
| Etappe 6 | 74 Min. + 3 | 2.466 | etwa 16 Min. | Vier Orte (645 Wörter, 22 Min.) und Fassade oder Willkür (446) |
| Etappe 7 | 76 Min. + 3 | 2.841 | etwa 19 Min. | Die Grenze (469 Wörter) und fünf Schritte (420 mit allen Karten) |
| Etappe 8 | 74 Min. + 3 | 2.245 | etwa 15 Min. | Steckbrief (28 Min. Schreiben und Beratung) |

Gemessen am 18.11.2026 (Fassungen 4.0 und 5.0) am vollen Stand, bei Kartenrunden mit allen Karten, ohne die Hinweise für die Lehrkraft und ohne das Extra (außerhalb der Stunde). Die neuen Blätter planen 73 bis 81 Minuten; der Rest der Doppelstunde bleibt für Wechsel und Plenum. Kürzungen K1 bis K3 stehen in den Hinweisen jedes Blatts.

Schätzung, nicht erprobt. Nach der ersten Stunde mit der Beobachtung vergleichen.

## Bauen

```
python3 build.py
```

setzt `src/seite.html`, `src/seite.css`, `src/daten-jahr.js` (Etappen), `src/kern.js` (Stand, Blatt-Rahmen, Bausteine), `src/blatt-e1.js`, `src/blatt-e3.js`, `src/blatt-bausteine.js` (gemeinsame Bausteine der Fassung 5.0), `src/blatt-e2.js`, `src/blatt-e4.js` bis `src/blatt-e8.js`, `src/hub.js` (Kompass, Lernspur, Sichern), `src/start.js` und die Schriften aus `fonts/` zu `index.html` zusammen.

## Geprüft und nicht geprüft

- **Gelaufen (automatisch, Chromium, 18.11.2026):** alle acht Arbeitsblätter vollständig wie eine Lernende durchgearbeitet – mit Freigabe auf Ansage, Rückmeldung erst nach dem Festlegen, Register und Fortschritt (Etappe 5 zusätzlich bei 390 × 844, Etappe 7 bei 820 × 1180); ein Stand aus Fassung 4.0 mit Einstiegsblatt wird richtig übernommen; Stand nach Neuladen, Sichern und Laden als Datei, falsche Datei, »Eingaben dieses Blatts löschen«, »Alle Eingaben löschen«, Ansicht für den Beamer und »Weniger Bewegung« nach Neuladen, alte Adressen. Breiten 390, 820, 1024, 1180, 1280 × 720 und 1440 ohne waagrechten Überlauf; keine Schrift unter 16 Pixel und keine Zielfläche unter 44 Pixel in allen Blättern und auf der Startseite; Schrift in allen Grafiken wirksam mindestens 16 Pixel; keine doppelten IDs, alle Felder beschriftet; keine Abrufe von fremden Servern, keine Fehler in der Konsole. Druck: alle acht Deckblätter je eine Seite, alle Schreibblätter je eine Seite, alle acht Zusammenfassungen je zwei Seiten, Plakat eine Seite, Lernspur mit acht Etappen zwei Seiten (mit sehr langen Sätzen drei). Erster Knopf bei 1280 × 720 gemessen (Ausnahme: Szenenseiten). Bildschirmfotos angesehen.
- **Nicht gelaufen:** Safari auf einem echten iPad (hoch und quer), VoiceOver, Zoom 200 %, echter Beamer, echter Drucker und GoodNotes, Moodle, axe, Impeccable und Taste Skill.
- **Bekannt:** Ohne JavaScript bleiben Kompass und Blätter leer. Auf dem Telefon (390 Pixel) überdecken die Linien des Begriffsnetzes andere Karten; die Beschriftung der Linien steht dort nur in der Liste darunter. Auf den Szenenseiten liegt der erste Knopf bei 1280 × 720 unter dem ersten Bildschirm (begründete Ausnahme).

## Schriften

Lora und Inter, SIL Open Font License 1.1 – siehe `fonts/LIZENZ.md`.
