# 🌌 Grundlagen der Webprogrammierung - Portfolio Webseite

Dieses Projekt wird ihm Rahmen des Creative Labs der IU Internationalen Hochschule durchgeführt. Die Webseite beinhaltet eine beispielhafte Portfoliowebseite von mir selbst.

## 🔧 Verwendeter Technologiestack

- **HTML**
- **CSS**
- **JavaScript**

## 📚 Verwendete Libraries

- **jQuery**
- **Vanta.js**
- **three.js** (Plichtabhängigkeit von Vanta.js)

## 🗿 Barrierefreiheit

Für die Barrierefreheit wurde weitgehend **rem** verwendet, es wurde ein Theme-Toggle implementiert, zudem wurde sichergestellt, das mit der Tastatur navigiert werden kann **tabindex**.
Es wurde mit auch mit **aria-labels** gearbeitet.

Die Barrierefreiheit wurde mit dem in den Entwicklertools verfügbarem Lighthouse-Analysetool evaluiert, das Ergebnis bezog sich auf 100%.
Auch die SEO sowie Best Practices waren bei 100%. Die Performance wurde nicht evaluiert.

## 📑 Verzeichnisstruktur

    📦 web-programmierung-iiChristoph
    ┣ 📁 images
    ┣ 📁 js
    ┣ 📁 style
    ┣ 📄 index.html
    ┣ 📄 impressum.html
    ┣ 📄 README.md
    ┗ 📄 .gitignore

## 📱 Responsives Design

Dieses Projekt verwendet zwei Breakpoints für das responsive Design:

- **768px** Anpassungen für Tablets und mittelgroße Bildschirme
- **600px** Optimierungen für Smartphones

## 🌈 Themes

Die Website verfügt über einen Dark- und Lightmode. Bei der Umsetzung wurden erst zwei CSS Dateien erstellt, die über einen Toggle-Switch ausgetauscht werden. Jetzt wird aber nur eine CSS verwendet, bei der einfach die Farbvariablen ausgetauscht werden. Diese Änderung sorgt dafür das man keinen doppelten Code hat und nichts doppelt ändern muss. Zudem wurde noch programmiert, das das letzte Theme im Cache gespeichert wird und sich nicht beim Reload zurücksetzt.

- 🌞 🌑 style.css

## ☑️ Anforderungen des Projekts

- Responsives Design (Nutzung von Breakpoints)
- Beachtung der Barrierefreiheit
- Versionsverwaltung mit GIT
- Mindestens 4 Seiten oder 4 Bereiche im One-Pager
- Nutzung von Flexbox oder Grid
- Optional Javascript Features z.B. Animationen

## 💽 Installation des Projekts

1. Klonen des Repositories über folgenden Befehl:

```bash
   git clone https://github.com/IU-Webprogrammierung/web-programmierung-iiChristoph.git
```

2. Projektordner in VSCode öffnen und über ein Liveserver-Plugin starten

## Abstract Phase 3

In der letzten Phase habe ich das Feedback aus Phase 2 umgesetzt und den Darstellungsfehler im Lebenslauf behoben, des weiteren habe ich die Bilder verkleinert, da diese doch zu groß waren.
Ich habe mich zudem dafür interessiert wie man 3D-Hintergründe implementiert die auch interaktiv auf die Maus reagieren, dabei bin ich auf Vanta und Three gestoßen, mit diesen Libraries habe ich für den Splashscreen einen Hintergrund implementiert. Für Performance Zwecke ist dieser Hintergrund vielleicht nicht optimal, aber ich wollte es trotzdem als zusätzliches Feature einbauen, das es visuell meiner Meinung nach ganz cool aussieht.

Des weiteren habe ich mir noch den Code angeschaut und an den gewissen Stellen noch optimiert (verschönert).



Link zur GitHub Page: https://iu-webprogrammierung.github.io/web-programmierung-iiChristoph/
Zum Repository: https://github.com/IU-Webprogrammierung/web-programmierung-iiChristoph/tree/master
