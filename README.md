# Family Food Planner – Migros (Version 1.7)

Kostenlose Web-App auf GitHub Pages für 7 Tage × Frühstück, Mittag- und Abendessen, frei wählbares Wochenbudget und Personenzahl sowie eine Migros-Einkaufsliste.

**Online:** https://mherfurthhtm.github.io/family-food-planner/

## Erste konkrete Migros-Preiszuordnung (Version 1.7)

Für zehn zentrale Rezeptzutaten wurden Produktbezeichnung, Verpackungsgrösse und veröffentlichte Angaben auf Migros.ch bzw. Migipedia in den Standardkatalog übernommen: M-Classic Vollkorn-Haferflocken grob (1 kg, CHF 1.40), Valflora Vollmilch UHT (1 l, CHF 1.55), Ruchbrot (500 g, CHF 2.90), IP-SUISSE Freilandeier 53+ (10 Stk., CHF 5.30), Migros Langkornreis parboiled (1 kg, CHF 1.35), M-Budget Magerquark (500 g, CHF 1.25), You Skyr Nature (450 g, CHF 2.65), Migros Karotten (1 kg, CHF 1.95), M-Classic Weissmehl (1 kg, CHF 1.90) und M-Budget Mozzarella (2 × 125 g, CHF 1.60).

In der Einkaufsliste erscheint dafür **«Migros-Onlinepreis · Filiale ungeprüft»** mit Link zur Quelle. Die übrigen Produkte bleiben als **Richtpreise** erkennbar. Bereits manuell zugeordnete Artikel/Preise bleiben erhalten und haben Vorrang. Die Wochenplanung verwendet die konkret hinterlegten Packungsgrössen für die Berechnung ganzer Packungen. Die Preisangaben wurden aus öffentlich auffindbaren Migros-/Migipedia-Seiten abgelesen, teils mit älterem Seitenstand. Sie sind **keine verifizierten Tagespreise**, keine Filialbestätigung für Herzogenbuchsee und keine Live-Schnittstelle. Migros-Aktionen können abweichen.

Preisquellen (Auswahl): [Haferflocken](https://www.migros.ch/de/product/104202100000), [Quark](https://www.migros.ch/de/product/200803100000), [Vollmilch](https://www.migros.ch/de/product/204016100000), [Eier](https://migipedia.migros.ch/de/ip-suisse-eier-53-freilandhaltung-196025001000), [Reis](https://migipedia.migros.ch/de/104415300000), [Karotten](https://migipedia.migros.ch/de/migros-karotten-274502502400). Im Programm sind für alle zehn Einträge Quellen hinterlegt.

## Stammfiliale Herzogenbuchsee (ab Version 1.5)

- **Migros MM Herzogenbuchsee**, Bernstrasse 33, 3360 Herzogenbuchsee, ist als feste Stammfiliale in den App-Einstellungen hinterlegt.
- Bei der Produktzuordnung in der Einkaufsliste wird darauf hingewiesen, in Migros.ch den Modus **«In der Filiale einkaufen»** und die Filiale **Migros MM Herzogenbuchsee** auszuwählen.
- Für das Budget sind die Preise weiterhin nur **lokale Richtpreise**, ausser sie wurden je Produkt manuell erfasst; auch manuelle Preise werden nicht live geprüft.
- Die Software hat **noch keinen automatischen Zugriff auf die Verfügbarkeit, exakten Filialpreise oder das gesamte Sortiment** dieser Filiale. Das muss vor einer Livebudget-Zusage über eine zulässige Datenquelle gelöst werden.
- Migros weist selbst darauf hin, dass Filial- und Onlinesortiment sowie teilweise Preise unterschiedlich sein können: [Migros Hilfe zum Filialsortiment](https://support.migros.ch/hc/de/articles/32900760025106-Ich-will-etwas-bestimmtes-auf-die-Einkaufsliste-setzen-und-finde-es-nicht).

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

## Zwei Kochbücher mit je 62 Rezepten (Version 1.6)

Im Bereich **Bücher** sind nun insgesamt **124 eigenständig formulierte Kochbuchrezepte** hinterlegt:

- **Deftige Küche:** 62 herzhafte Rezepte – 12 bereits vorhandene und 50 neue Rezepte. Zusätzliche Varianten bei Rösti, Omeletts, Eintöpfen, Pasta, Reisgerichten, Aufläufen, Fleisch- und Gemüsepfannen.
- **Fitnessküche:** 62 Rezepte mit Schwerpunkt auf eiweissbewusster Ernährung – 12 bereits vorhandene und 50 neue Rezepte. Zusätzliche Varianten bei Skyr-/Quark-Frühstücken, Poulet, Tofu, Thon, Linsen, Gemüse und Lachs.

Die zwei Bücher ergänzen die **43 Standardrezepte**; die App bietet damit insgesamt **167 unterschiedliche Rezepte**. Sie enthalten Titel, Typ (Frühstück/Mittag/Abend), ungefähre Zubereitungszeit, Zutatenmengen für drei Personen sowie eine Kochanleitung. Mengen, Einkaufsbudget und geschätzte Nährwerte berücksichtigen die gewählte Personenzahl. Alle 100 neuen Rezepte wurden auf gültige Produkt-IDs und berechenbare Nährwerte geprüft.

Die ursprünglichen 24 Kochbuchrezepte liegen in `cookbooks.js`, die 50 zusätzlichen deftigen Rezepte in `hearty-extra.js` und die 50 zusätzlichen Fitnessrezepte in `fitness-extra.js`. Alle Dateien sind für die Offline-Nutzung im Cache eingetragen.

Im **Wochenplan → Kochstil** kannst du «Gemischt», «Deftige Küche» oder «Fitnessküche» wählen und den Plan neu berechnen. Dabei werden passende Gerichte bevorzugt; der Plan kann ergänzend andere Gerichte enthalten, um eine abwechslungsreiche Woche und möglichst passende Einkaufskosten zu erreichen. Deine bisherigen Pläne und Kochbuchimporte bleiben erhalten.

Bei allen Rezepten handelt es sich um neu formulierte App-Rezepte, **nicht um abgeschriebene kommerzielle Kochbücher**. Preise und Nährwerte bleiben Schätzungen; die App hat nach wie vor keine geprüfte Live-Anbindung an das Sortiment der Migros Herzogenbuchsee.

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
