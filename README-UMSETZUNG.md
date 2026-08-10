# ORALC – umgesetzte Website-Anpassungen

- ORALC als zentrale Marke auf Startseite und Unterseiten gestärkt.
- Titel „Dr.“ aus allen HTML-Dateien entfernt.
- Berufsbezeichnung vereinheitlicht: **Fachzahnarzt für Oralchirurgie und Implantologie Ahmed Saeed**.
- Doctolib auf der Startseite als primärer Hero-CTA und standardmäßig geöffnete Sticky-Leiste umgesetzt.
- Neue Landingpage: `zahnimplantate.html`.
- Neue Landingpage: `angstpatienten.html`.
- Neuer B2B-Bereich: `fuer-ueberweiser.html` mit Rücküberweisungsgarantie und Überweisungsformular.
- Google-Bewertungen/Patientenstimmen mit Link zu Google Maps integriert.
- Navigation auf allen Seiten um die neuen Bereiche erweitert.

## Technischer Hinweis zum Überweisungsformular
Das Projekt ist statisch. Das Formular verwendet deshalb aktuell `mailto:`. Vor Livegang sollte ein DSGVO-konformer Formular-Endpunkt oder Praxis-Backend angebunden und in der Datenschutzerklärung ergänzt werden.

## Ergänzung: vollständige Wörter beim Zeilenumbruch

- Automatische Silbentrennung wurde auf der gesamten Website deaktiviert.
- Wörter werden nicht mehr mit einem Trennstrich auf zwei Zeilen verteilt.
- `word-break` und `overflow-wrap` wurden so angepasst, dass ein Wort vollständig in die nächste Zeile wechselt.
- Vorhandene Soft-Hyphens und erzwungene Trennungen innerhalb von „Behandlungsschwerpunkte“ und „Mitgliedschaften“ wurden entfernt.
- Responsive Prüfung ohne horizontalen Überlauf bei 320 px, 375 px, 768 px und 1366 px durchgeführt.

