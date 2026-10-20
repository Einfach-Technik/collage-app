# Collage im App Store veröffentlichen

Das iOS-Projekt (Capacitor) liegt im Ordner `ios/`. Die Web-App wird beim Sync dort hineinkopiert. Alles Folgende machst du auf dem Mac.

> Hinweis: Das Projekt wurde auf Linux erzeugt und **nicht in Xcode gebaut oder auf einem iPhone getestet**. Teste es vor dem Einreichen auf deinem eigenen iPhone.

## 0. Einmalig vorbereiten

1. **Apple Developer Program** beitreten: <https://developer.apple.com/programs/> (99 USD/Jahr). Die Freischaltung kann einige Stunden bis Tage dauern.
2. **Xcode** aus dem Mac App Store installieren und einmal öffnen (Lizenz akzeptieren).
3. **Node.js ≥ 22** installieren, z. B. mit Homebrew: `brew install node`.
4. Unter Xcode → Einstellungen → Accounts deine Apple-ID hinzufügen.

## 1. Projekt holen und öffnen

```bash
git clone https://github.com/Einfach-Technik/collage-app
cd collage-app
npm install
npm run sync     # kopiert die Web-App in die iOS-App
npm run open     # öffnet Xcode
```

Nach jeder Änderung an `index.html` & Co. erneut `npm run sync` ausführen.

## 2. In Xcode einstellen

1. Links das Projekt **App** anklicken → Target **App** → Tab **Signing & Capabilities**.
2. **Team** wählen (dein Developer-Konto). „Automatically manage signing" angehaltet lassen.
3. **Bundle Identifier** prüfen: `de.einfachtechnik.collage`. Er muss weltweit eindeutig sein. Wenn er vergeben ist, ändere ihn (z. B. `de.deinname.collage`).
4. Tab **General**: *Display Name* (Name unter dem Icon), *Version* `1.0`, *Build* `1`.
5. Oben als Ziel dein iPhone auswählen (per Kabel) und auf ▶ drücken. Probiere alles aus:
   - Fotos auswählen, Layouts, Formen, Texte
   - **Speichern** → iOS-Teilen-Menü → „Bild sichern"
   - Ortssuche (braucht Internet)

## 3. App in App Store Connect anlegen

<https://appstoreconnect.apple.com> → **Apps** → **+** → **Neue App**:

| Feld | Wert |
|---|---|
| Plattform | iOS |
| Name | siehe Vorschläge unten (muss im Store einmalig sein, max. 30 Zeichen) |
| Primäre Sprache | Deutsch |
| Bundle-ID | `de.einfachtechnik.collage` (oder deine geänderte) |
| SKU | frei wählbar, z. B. `collage-001` |

Der Name „Collage" ist sehr wahrscheinlich vergeben. Vorschläge: „Fotocollage – Formen & Text", „Collage Einfach", „Formen-Collage".

## 4. Build hochladen

1. In Xcode oben als Ziel **Any iOS Device (arm64)** wählen.
2. Menü **Product → Archive**.
3. Im Fenster „Organizer": **Distribute App → App Store Connect → Distribute**.
4. Nach einigen Minuten erscheint der Build in App Store Connect unter **TestFlight**. Dort kannst du ihn zuerst selbst und mit Bekannten testen (interne Tester: sofort, externe: nach kurzer Prüfung).

## 5. Store-Seite ausfüllen

**URLs** (die Seite muss online sein; GitHub Pages ist bei dir bereits aktiv):

- Datenschutz-URL: `https://einfach-technik.github.io/collage-app/privacy.html`
- Support-URL: `https://einfach-technik.github.io/collage-app/`

> Vorher in `privacy.html` die orangen Platzhalter (Name, Anschrift, E-Mail) ausfüllen und pushen. Die Datenschutzerklärung ist ein Entwurf, keine Rechtsberatung. Als Anbieter in Deutschland brauchst du außerdem ein Impressum bzw. deine Anbieterkennzeichnung.

**Untertitel** (max. 30 Zeichen): `Fotocollagen mit Formen`

**Kategorie**: Foto & Video

**Schlüsselwörter** (max. 100 Zeichen, mit Komma getrennt):
`Collage,Fotocollage,Foto,Layout,Herz,Form,Bilder,Text,Datum,Ort,Rahmen`

**Beschreibung**:

```
Erstelle in wenigen Sekunden Fotocollagen – direkt auf deinem iPhone.

• Mehrere Fotos auswählen, passende Layouts werden automatisch vorgeschlagen
• Fotos ganz anzeigen oder ausfüllen, verschieben und zoomen
• Jedes Foto mit eigener Form: Herz, Stern, Sonne, Mond, Wolke, Blatt und mehr
• Oder die ganze Collage als Herz, Stern oder Kreis
• Eigene Texte frei platzieren – mit Schrift, Farbe, Größe und Drehung
• Aufnahmedatum und Ort der Fotos als Beschriftung, einzeln an- und abwählbar
• Datum und Orte auch einmal gesammelt in einem eigenen Textbereich
• Format, Abstand, Rand, runde Ecken und Hintergrundfarbe einstellbar
• Als JPG oder PNG speichern und teilen

Datenschutz: Deine Fotos werden nur auf deinem Gerät verarbeitet. Kein Konto, keine Werbung, kein Tracking.
```

**Was ist neu** (Version 1.0): `Erste Version.`

**Screenshots**: Pflicht sind iPhone-Screenshots in der Größe **6,9 Zoll (1320 × 2868 px)**. Am einfachsten im Xcode-Simulator mit einem 6,9"-iPhone (Pro Max): App starten, Fotos laden (Fotos per Drag & Drop in den Simulator ziehen), Screenshot mit **Cmd + S**. Mach 3 bis 5 Screenshots, z. B. mit Herz-Formen, einer Collage mit Text und der Ortsbeschriftung.

**Altersfreigabe**: Fragebogen mit „Nein" beantworten → 4+.

**App-Datenschutz** („Privacy Nutrition Labels"): Die Ortssuche sendet auf Wunsch Koordinaten an OpenStreetMap (Nominatim). Vorsichtige Angabe:

- Datenerfassung: **Ja** → Datentyp **Standort → Genauer Standort**
- Verwendung: **App-Funktionalität**
- Mit der Identität des Nutzers verknüpft: **Nein**
- Für Tracking verwendet: **Nein**
- Sonst: keine Daten

Ob das bei deiner Auslegung nötig ist, entscheidest du. Die vorsichtige Variante schadet nicht.

**Export-Compliance**: Im Projekt ist `ITSAppUsesNonExemptEncryption = NO` bereits gesetzt, die Frage entfällt meist.

**Hinweise für die App-Prüfung** (Review Notes):

```
Die App erstellt Fotocollagen. Alle Fotos werden lokal verarbeitet.
Die optionale Funktion „Orte aus GPS ermitteln" (Tab „Ort/Datum") sendet nur Koordinaten an nominatim.openstreetmap.org.
Zum Testen bitte mehrere Fotos aus der Mediathek wählen.
Kein Login nötig.
```

## 6. Zur Prüfung einreichen

In App Store Connect bei der Version den **Build auswählen** → **Zur Prüfung hinzufügen** → **Einreichen**. Die Prüfung dauert meist 1 bis 3 Tage.

### Mögliche Ablehnungsgründe

- **Richtlinie 4.2 (Mindestfunktionalität):** Apps, die nur eine Webseite zeigen, werden manchmal abgelehnt. Hier sprechen die nativen Funktionen dafür (Fotoauswahl, Teilen-Menü, Offline-Betrieb, eigene Bearbeitung). Garantiert ist nichts. Bei einer Ablehnung antworte sachlich in App Store Connect und nenne diese Funktionen.
- **Datenschutz-URL nicht erreichbar** oder Platzhalter noch drin.
- **Screenshots** zeigen etwas anderes als die App.

## Updates veröffentlichen

1. Änderungen machen, `npm run sync`.
2. In Xcode die **Build**-Nummer erhöhen (und ggf. die Version).
3. Archive → Distribute, dann in App Store Connect die neue Version einreichen.
