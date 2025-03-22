# Finanzverwaltung mit EasyFinance

## Übersicht zur Webanwendung:
1. Allgemeine Infos:
2. Projektstruktur
3. Beschreibung der Anwendung mit Screenshots
4. Datenmodell mit ER Diagramm und Konzept
5. Technologien
6. Verwendete KI
7. Anleitung zur Installation
8. Lizenz
9. Kontakt

## 1. Allgemeine Infos:
EasyFinance ist eine Webanwendung,
die im Kurs Webtechnologien 2024/25
unter der Leitung von Prof. Freiheit
von Maryam Mirza entwickelt wurde.
Das Backend wurde mit Render deployed und ist unter https://backendwebtech.onrender.com
erreichbar. Das Frontend ist mit Vercel deployed und
die Anwendung ist unter https://frontend-webtech.vercel.app erreichbar.
Hinweis: Weil das Backend über Render läuft und Render nach längerer Inaktivität einen Moment braucht, 
dauert es ca. 1min bis die Tabelle mit den Daten angezeigt wird.


Die Webanwendung wurde mit Angular, Node.js und PostgreSQL gebaut.

## 2.  Projektstruktur

Backend:
```plaintext
webtechnologien_backend/
│
├── controllers/
│   ├── kategorien.controller.js      - Logik für CRUD-Operationen auf Kategorien
│   └── transaktion.controller.js     - Logik für CRUD-Operationen auf Transaktionen
│
├── routes/
│   ├── kategorie.routes.js           - Definiert die API-Routen für Kategorien
│   ├── transaktion.routes.js         - Definiert die API-Routen für Transaktionen
│   └──root.js                       - Beispiel für eine einfache Route
│
│
├── db.js                             - Setzt die Verbindung zur PostgreSQL-Datenbank auf
├── initdb.js                         - Initialisiert die Datenbank und befüllt sie mit Beispieldaten
│
├── .env                              - Enthält Umgebungsvariablen, z. B. DB-Zugangsdaten (nicht hochladen!)
├── .gitignore                        - Definiert Dateien und Ordner, die von Git ignoriert werden sollen
├── package.json                      - Beschreibt das Projekt und die installierten Abhängigkeiten
├── package-lock.json                 - Speichert die exakte Version der Abhängigkeiten
└─ server.js                          - Startpunkt des Servers, konfiguriert Express und Bindet Routen ein
```

Frontend: 
```plaintext
webtechnologien_frontend/
│
src/
│
├── app/                                        # Hauptordner für die Anwendungslogik
│   ├── header/                                 # Header-Komponente
│   │   ├── header.component.html               # HTML-Template des Headers
│   │   ├── header.component.ts                 # TypeScript-Logik des Headers
│   │   └── header.component.css                # CSS-Stile für den Header
│   │
│   ├── footer/                                 # Footer-Komponente
│   │   ├── footer.component.html               # HTML-Template des Footers
│   │   ├── footer.component.ts                 # TypeScript-Logik des Footers
│   │   └──footer.component.css                # CSS-Stile für den Footer
│   │
│   ├── dialog-loeschen/                        # Dialog zum Löschen
│   │   ├── dialog-loeschen.component.html      # HTML-Template für den Dialog
│   │   ├── dialog-loeschen.component.ts        # Logik der Dialog-Komponente
│   │   └──dialog-loeschen.component.css       # Stile der Dialog-Komponente
│   │
│   ├── main/                                   # Hauptkomponente
│   │   ├── main.component.html                 # HTML-Template der Hauptkomponente
│   │   ├── main.component.ts                   # TypeScript-Logik der Hauptkomponente
│   │   └──main.component.css                  # Stile der Hauptkomponente
│   │
│   ├── services/                               # Dienste für Daten- und Backend-Logik
│   │   ├── backend-kategorien.service.ts       # Service für Kategorien-Backend
│   │   └──transaktion.ts                      # Datenmodell oder Service für Transaktionen
│   │
│   ├── transaktionen/                          # Verwaltung und Anzeige von Transaktionen
│   │   ├── transaktionen.component.html        # HTML-Template für Transaktionen
│   │   ├── transaktionen.component.ts          # Logik der Transaktions-Komponente
│   │   └──transaktionen.component.css         # Stile für die Transaktions-Komponente
│   │
│   ├── transaction-dialog-hinzufuegen/         # Dialog zum Hinzufügen von Transaktionen
│   │   ├── transaction-dialog.component.html   # HTML-Template der Dialog-Komponente
│   │   ├── transaction-dialog.component.ts     # Logik der Dialog-Komponente
│   │   └── transaction-dialog.component.css    # Stile der Dialog-Komponente
│   │
│   ├── app.component.html                      # Root-Template der Anwendung
│   ├── app.component.ts                        # Root-Komponente der Anwendung
│   ├── app.component.css                       # Stile der Root-Komponente
│   ├── app.module.ts                           # Hauptmodul der Angular-Anwendung
│   ├── app.config.ts 
│   └── app-routes.ts    
│             
│
├── assets/                                     # Statische Ressourcen (Bilder, Schriftarten, etc.)
│   ├── images/                                 # Bildressourcen
│   │   └── logo.png                            # Beispiel-Logo
│   └── styles/                                 # Globale CSS-Stile
│       └── main.css                            # Hauptstylesheet
│
├── environments/                               # Umgebungsabhängige Konfigurationen
│   ├── environment.ts                          # Konfiguration für die Entwicklungsumgebung
│   └── environment.prod.ts                     # Konfiguration für die Produktionsumgebung
│
├── styles.css                                  # Globale CSS-Dateien der App
├── index.html                                  # Startpunkt der Angular-Anwendung
├── main.ts                                     # Einstiegspunkt/Bootstrap der Anwendung
├── polyfills.ts                                # Polyfills für Browserkompatibilität
├── angular.json                                # CLI-Konfiguration für das Projekt
├── package.json  
├── package-lock.json  
├── README.md
├── tsconfig.app.json
└──tsconfig.json
 
```
---

## 3. Beschreibung der Anwendung mit Screenshots:

EasyFinance ist ein Prototyp der dafür gedacht ist, sich leicht einen Überblick über die eigenen Finanzen machen zu können.
Die Idee ist einfach Ausgaben und Einnahmen eintragen zu können und mit Wichtigkeitslabels unnötige Ausgaben direkt zu entdecken.
So entsteht eine Übersicht wo leicht zu erkennen ist, wo eingespart werden könnte.
Praktisch ist, dass hier auch Bar Einnahmen und Ausgaben erfasst werden können, was
bei einem herkömmlichen Kontoauszug nicht erfasst wird.

Wenn die Anwendung weiterentwickelt werden sollte, wäre eine Registrierung und ein Login zum Datenschutz notwendig.
Zudem müssten die Daten verschlüsselt werden.

### 3.1 Feature 1: Transaktion hinzufuegen
Um eine Transaktion hinzuzufügen klicke auf Transaktion hinzufügen.
Es öffnet sich ein Dialog und du kannst alle benötigten
Werte eingeben. Für die Transaktion gibt es ein Datepicker sodass du schnell das passende Datum findest.
Zudem gibt es Kategorien unter denen du per Drop Down auswählen kannst.
In dem Drop Down Typ gibst du ein, ob es sich um eine Eingabe oder Ausgabe handelt.
Ob es eine wichtige Ausgabe war, wird automatisch dann per Icon angezeigt, sobald du fertig bist.
Du kannst die Transaktion auch abbrechen, falls du es dir anders überlegst.

![](bilderReadme/add.jpg)

### 3.2 Feature 2: Transaktion löschen
Um eine Transaktion zu löschen klicke auf das Mülltonnen-Icon.
Es öffnet sich ein Dialog, sodass du die Transaktion löschen kannst.

![](bilderReadme/delete.jpg)

### 3.3 Extra Feature:
Per Hinweis mit Ausrufezeichen-Icon lassen sich unnötige Ausgaben so schnell entdecken.
Damit erhält die Nutzer:in leicht einen Überblick, wo sie einfach einsparen könnte.

## 4. Datenmodell mit ER Diagramm und Konzept

![](bilderReadme/ER.jpg)


Konzept: 

Die Webanwendung ist ein Prototyp zur Finanzverwaltung.
Die eingegebenen Daten sind fiktiv und dienen nur zum Ausprobieren.
Sie können von allen, die Zugriff auf die Seite haben verändert werden.

EasyFinance kann mit einer Registrierung und einem Login erweitert werden.
Damit auch echte persönliche Daten eingegeben werden können, ist ein Login
sowie eine Verschlüsselung der Datenbank zum Datenschutz notwendig.

Die Erweiterung könnte zudem noch eine weitere Bearbeiten-CRUD Operation
sowie Filter für eine detaillierte Analyse beinhalten.


## 💻 5. Technologien:

* Entwicklungsumgebung: IntelliJ IDEA 2024.2.4 (Ultimate Edition)
* Datenbank: PostgreSQL Version 16
* Backend: [Node.js](https://nodejs.org/en) v22.11.0, Express 4.21.2, JavaScript
* Frontend: Angular [Angular CLI](https://github.com/angular/angular-cli) version 19.2.0.
* HTML, CSS, Typescript

* Server für Backend und Datenbank: [Render](https://render.com/)
* Server für Frontend: [Vercel](https://vercel.com)

## 🤖️ 6. Verwendete KI: perplexity.ai
* Backend: Controller und Routen teilweise mit Perplexity erstellt.
* Frontend: backend-kategorien.service.ts teilweise mit Perplexity erstellt.


## 🛠️ 7. Anleitung zur Installation:

## Wichtiger Hinweis
Die Datenabank wurde mit Render deployed und ist bis zum 06.04.2025 erreichbar. 
Danach wird sie von Server genommen. 
Es kann dann stattdessen die Datenbank von ocean der HTW verwendet werden.
Dazu muss im Backend die .env Datei angepasst werden mit den Umgebungsvariablen und Anmeldeinformation der ocean Datenbank.

Das Backend ist unter https://backendwebtech.onrender.com erreichbar.

Die Frontend-Anwendung ist unter https://frontend-webtech.vercel.app erreichbar.

## Voraussetzungen:
[Node.js](https://nodejs.org/en) installiert haben.
[npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installiert haben.

## Repository klonen (Frontend und Backend)

```bash
git clone https://gitlab.rz.htw-berlin.de/s0591690/webtechnologien_frontend.git
```
```bash
git clone https://gitlab.rz.htw-berlin.de/s0591690/webtechnologien_backend.git
```

In das entsprechende Projektverzeichnis mit der Bash wechseln:
Beispielweise:
```bash
cd webtechnologien_frontend
```
```bash
cd webtechnologien_backend
```

## Abhängigkeiten installieren
(Frontend und Backend)
```bash
npm install
```

### VPN verbinden

### Backend starten mit
```bash
node server.js
```

### Frontend starten mit
```bash
ng serve
```
Sobald der Server läuft, öffne deinen Browser und gehe zu `http://localhost:4200/`. 
Die Applikation wird automatisch neu laden wenn du die source files veränderst.

Wenn du das Projekt nicht lokal starten, 
sondern direkt über den Browser aufrufen möchtest, 
dann gehe zu https://frontend-webtech.vercel.app.

## Bauen
Um das Projekt zu deployen muss es vorher gebuildet werden. Das geht im Terminal mit:
```bash
ng build
```
Das kompiliert das Projekt und speichert die Build-Dateien im Verzeichnis `dist/`. 
Im dist Verzeichnis ist die fertige Version von der Webanwendung drin.


## 📝 8. Lizenz
Dieses Projekt steht unter der MIT-Lizenz. Weitere Informationen findest du in der LICENSE-Datei.

## 📞 9. Kontakt
Falls du Fragen hast, kontaktier mich unter:
Maryam.Mirza@Student.HTW-Berlin.de
