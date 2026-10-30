# Family Food Planner – Migros (Version 1.4)

Kostenlose Web-App auf GitHub Pages für 7 Tage × Frühstück, Mittag- und Abendessen, frei wählbares Wochenbudget und Personenzahl sowie eine Migros-Einkaufsliste.

**Online:** https://mherfurthhtm.github.io/family-food-planner/

## Das gesamte Migros-Sortiment statt nur Eigenmarken (neu in 1.4)

Ziel ist, dass jede Einkaufsposition einen **konkret ausgewählten Artikel aus dem ganzen Migros-Sortiment** referenzieren kann, einschliesslich Fremdmarken, M-Budget, M-Classic, Packungsvarianten und regionaler Produkte.

### Bereits eingebaut: manuelle Sortimentszuordnung

1. **Einkaufsliste → Artikel wählen:** Zu einer bisher generischen Rezeptzutat (z. B. «Milch») kannst du einen beliebigen konkreten Artikel auf [Migros.ch](https://www.migros.ch/de/category/home) auswählen. Gib die exakte Bezeichnung, den direkten Produktlink, den Packungsinhalt in der bestehenden Zutaten-Einheit und den aktuellen angezeigten Preis ein. Anschliessend benutzt die Mengen-/Budgetrechnung die gewählte Packung und den selbst erfassten Preis.
2. Bei einer Zuordnung wird in der Liste **«Manuell erfasster Preis»** statt «Richtpreis» angezeigt.
3. Über **«Richtpreis wiederherstellen»** kannst du die Zuordnung entfernen.
4. Unter **Einkaufsliste → Etwas hinzufügen** kannst du jeden weiteren Artikel aus dem Sortiment inklusive Fremdmarken und Nicht-Lebensmitteln erfassen, auch mehrere Packungen mit einem Gesamtpreis. Ein Link zum Produkt ist optional.
5. Zuordnungen und weitere Artikel werden lokal auf deinem Gerät gespeichert und beim Datenexport mitgesichert. Die Produktwahl ist für alle Rezepte mit der entsprechenden Grundzutat gültig.

### Noch nicht gelöst: automatischer vollständiger Livekatalog

Migros gewährt Drittanwendungen laut eigener Auskunft keinen offiziellen öffentlichen Zugriff auf seine Produktdaten-API (siehe [Migipedia](https://migipedia.migros.ch/de/forum/migipedia/is-there-an-api-for-migros-product-data)). Private Drittanbieterprojekte arbeiten mit **inoffiziellen Migros-Endpunkten**, die sich jederzeit ändern können; zudem ist der Zugriff einer reinen GitHub-Pages-Web-App über den Browser (CORS/Token) nicht zuverlässig verifiziert. Die Anwendung lädt **nicht** automatisch das ganze Migros-Sortiment und aktualisiert **keine** Preise in Echtzeit. Darauf wird ausdrücklich hingewiesen.

Migros unterscheidet [Filialsortiment und Online-Sortiment](https://support.migros.ch/hc/de/articles/32900760025106-Ich-will-etwas-bestimmtes-auf-die-Einkaufsliste-setzen-und-finde-es-nicht); ein vollständiger Artikelkatalog muss künftig jeweils die gewünschte Filiale und regionale Aktionen berücksichtigen. Die jetzige manuelle Zuordnung schafft die technische Grundlage und verursacht keine zusätzlichen Kosten. Der nächste Ausbau erfordert zuerst eine zulässige, zuverlässige Datenquelle mit belegbarer Sortimentabdeckung.

**Nährwerte:** Bei manuell zugeordneten Produkten bleiben die bisherigen groben Nährwerte der Rezept-Grundzutat bestehen. Sie werden nicht aus der ausgewählten Migros-Produktetikette eingelesen.

## Zwei kostenlose Kochbücher (neu in 1.3)

Im Bereich **Bücher** sind zwei mitgelieferte Rezeptsammlungen hinterlegt, die wir selbst für die App erstellt haben. Es handelt sich **nicht** um Kopien kommerzieller Kochbücher:

- **Deftige Küche:** 12 herzhafte Rezepte, zum Beispiel Älplermagronen, Hack-Hörnli, Chili con Carne, Rahmgeschnetzeltes, Kartoffelgratin und Rösti mit Spiegelei.
- **Fitnessküche:** 12 Rezepte mit Schwerpunkt Eiweiss, etwa Poulet-Reis-Bowl, Skyr-Quark-Bowl, Omelett mit Hüttenkäse, Thon-Bohnen-Salat oder Lachs-Spinat-Reispfanne.

**So verwendest du die Kochbücher:** Im Wochenplan bei **Kochstil** «Gemischt», «Deftige Küche» oder «Fitnessküche» wählen und neu berechnen. Oder unter **Bücher** auf «Diese Küche für die Woche bevorzugen» tippen. In der Rezeptansicht kannst du Zutaten, Mengen, Zubereitung und geschätzte Nährwerte für eine Portion ansehen. Der Algorithmus bevorzugt die gewählte Sammlung, kann aber andere Gerichte ergänzen, um sieben abwechslungsreiche Frühstücke, Mittag- und Abendessen zu planen und das Budget möglichst einzuhalten.

Alle 24 Rezepte gehören als statische Daten zur App in `cookbooks.js`. Es gibt keine laufende Abfrage, keinen externen Server und keine laufenden Gebühren. Die bestehende **private** Importfunktion für eigene Bücher bleibt erhalten. Andere Rezeptdaten, Einkaufslisten, Einstellungen und Ernährungstagebuch bleiben auf dem lokalen Gerät.

## Ernährungstagebuch und Nährwerte

Unter **Tagebuch** (iPhone) oder **Ernährungstagebuch** (Desktop) kannst du pro Tag und Person die tatsächlich gegessenen Mahlzeiten eintragen.

1. Den gewünschten Tag der geplanten Woche auswählen.
2. Eine Person auswählen. Unter **Einstellungen → Namen für Ernährungstagebuch** lassen sich optionale Namen (kommagetrennt) eintragen.
3. Pro Mahlzeit ½, 1, 1½ oder 2 Portionen als **gegessen** erfassen. Ein erneuter Klick passt die Portion an.
4. Die App zeigt **Kilokalorien, Eiweiss, Kohlenhydrate, Fett und Ballaststoffe** für die Person sowie eine separate Tagessumme der Familie.
5. Einträge lassen sich wieder entfernen und werden lokal gespeichert. Nach einer neuen Wochenplanung bleiben bereits erfasste Werte für den jeweiligen Kalendertag erhalten.
6. Unter Einstellungen können die lokalen Daten exportiert werden; dabei werden auch die Ernährungseinträge mitgesichert.

**Wichtige Grenzen:** Alle Nährwerte beruhen auf einem mitgelieferten, bewusst vereinfachten Richtwertkatalog je 100 g/100 ml oder Stück, **nicht** auf aktuellen, verifizierten Migros-Nährwertetiketten. Die Rechnung geht von Rezeptrohmengen, vollständiger Verteilung auf drei Portionen sowie typischen Stückgewichten aus. Kochverluste, tatsächliche Zutatenmarken, zusätzliche Speisen und Getränken sowie individuelle Zubereitung können zu deutlich anderen Nährwerten führen. Nur aktiv eingetragene Mahlzeiten zählen; die App dient als Orientierung, nicht für klinische Ernährungsplanung.

Eine kostenlose, offizielle Quelle zur späteren Qualitätsverbesserung ist die [Schweizer Nährwertdatenbank des BLV](https://www.naehrwertdaten.ch/de/). Deren Daten dürfen gemäss BLV unter Quellenangabe auch für Ernährungsapps genutzt werden. Die vorliegenden Näherungswerte sind noch keine systematische BLV-Übernahme.

## Wochenplanung

- Auf der Startseite lassen sich **Budget (CHF 0.05 bis 1'000'000)** und **Personen (1 bis 100)** direkt anpassen.
- Klick auf **Neu berechnen** erstellt den Wochenplan für die gewählte Anzahl Personen und das Budget neu.
- Unter **Einstellungen** sind diese und andere Optionen ebenfalls verfügbar.
- Keine spezielle Diät ist vorgegeben: Zwiebeln, Rahm, Lachs und Eiweisspräferenz sind standardmässig nicht ausgeschlossen. Diese Einstellungen sind optional.
- Eine Budgetüberschreitung wird klar angezeigt; die Software kann bei unrealistisch tiefen Budgets keine Einhaltung garantieren.

## Meine Kochbücher

Unter **Bücher** (mobil) bzw. **Meine Kochbücher** (Desktop):

1. Rezeptdateien als **JSON** importieren, auch aus mehreren Kochbüchern.
2. Die Rezepte werden **ausschliesslich lokal auf dem verwendeten Gerät** gespeichert.
3. Importierte Rezepte können bei der Menüplanung priorisiert und einzeln entfernt werden.
4. Über **Meine Kochbücher sichern** eine Sicherung als JSON herunterladen; später wieder importieren.
5. Mit **Beispiel-Datei** eine korrekt formatierte Importdatei herunterladen.

Die App kann Kochbücher **noch nicht selbst aus PDFs oder Fotos auslesen**. Fotos/PDFs können zunächst im Chat in eine strukturierte Rezeptdatei umgewandelt und anschliessend in die App importiert werden. Das Buchmaterial gehört nicht in das **öffentliche** GitHub-Repository. Nur Rezepte mit Zutaten aus dem lokalen Migros-Richtpreis-Katalog können importiert werden; bisherige Produkt-IDs sind beispielsweise `rice`, `chicken`, `carrot`, `eggs`, `oil`.

### JSON-Beispiel

```json
{
  "book": "Familienrezepte",
  "recipes": [
    {
      "name": "Gemüsereis mit Ei",
      "type": "lunch",
      "servings": 3,
      "minutes": 25,
      "ingredients": [["rice", 330], ["eggs", 5], ["carrot", 320], ["peas", 240]],
      "steps": ["Reis kochen.", "Gemüse garen.", "Eier zugeben und mit Reis vermischen."]
    }
  ]
}
```

`type`: `breakfast`, `lunch` oder `dinner`. Bei Zutaten `[Produkt-ID, Menge]` und die Produkteinheit aus dem Katalog (g, ml oder Stk.) benutzen. Die `servings` bestimmen die Ausgangsportionen, die App passt die Mengen automatisch an die eingestellte Personenzahl an. Jede Rezeptdatei kann mehrere Rezepte enthalten und optional `source` pro Rezept setzen.

## GitHub Pages / Kosten

- Repository: https://github.com/mherfurthHTM/family-food-planner
- GitHub → Settings → Pages → Deploy from a branch → main / (root)
- Die Anwendung benötigt **keinen kostenpflichtigen Dienst, keine Datenbank und keine KI-API**.
- Lokale Browser-Daten sind nicht zwischen Geräten synchronisiert. Gelöschte Website-Daten löschen Pläne, Ernährungstagebuch und gespeicherte Kochbuchrezepte; deshalb regelmässig exportieren.
- **Migros-Preise sind nur hinterlegte Schätzwerte und nicht live**. Budgetzusagen, aktuelle Angebote, tatsächliche Sortimente und automatische Migros-Bestellungen sind derzeit nicht möglich.
- Die App kombiniert die hinterlegten Rezepte algorithmisch. Eine fortlaufende KI, die neue Gerichte aus ganzen PDF-Kochbüchern generiert, ist bei dieser rein statischen Gratisversion **nicht** enthalten.
