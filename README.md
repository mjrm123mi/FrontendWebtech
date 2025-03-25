# Finanzverwaltung mit EasyFinance

## Übersicht zur Webanwendung:
1. [Allgemeine Infos](#allgemeine-infos)
2. [Projektstruktur](#projektstruktur)
3. [Beschreibung der Anwendung mit Screenshots](#beschreibung-der-anwendung-mit-screenshots)
4. [Datenmodell mit ER Diagramm und Konzept](#datenmodell-mit-er-diagramm-und-konzept)
5. [Technologien](#technologien)
6. [Verwendete KI](#verwendete-ki)
7. [Anleitung zur Installation](#anleitung-zur-installation)
8. [Lizenz](#lizenz)
9. [Kontakt](#kontakt)

## 1. Allgemeine Infos: <a name="allgemeine-infos"></a>
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

## 2.  Projektstruktur <a name="projektstruktur"></a>

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
│   │   ├── header.component.html              
│   │   ├── header.component.ts                
│   │   └── header.component.css               
│   │
│   ├── footer/                                 # Footer-Komponente
│   │   ├── footer.component.html             
│   │   ├── footer.component.ts              
│   │   └── footer.component.css                
│   │
│   ├── dialog-loeschen/                        # Dialog zum Löschen
│   │   ├── dialog-loeschen.component.html      
│   │   ├── dialog-loeschen.component.ts        
│   │   └── dialog-loeschen.component.css       
│   │
│   ├── main/                                   # Hauptkomponente
│   │   ├── main.component.html                 
│   │   ├── main.component.ts                   
│   │   └── main.component.css                
│   │
│   ├── services/                               # Dienste für Daten- und Backend-Logik
│   │   ├── backend-kategorien.service.ts       # Service für Kategorien-Backend mit URL
│   │   ├── backend-transaktions.service.ts     # Service für Transaktionen-Backend mit URL
│   │   ├── kategorien.ts
│   │   └── transaktion.ts                      
│   │
│   ├── transaktionen/                          # Verwaltung und Anzeige von der Tabelle Transaktionen
│   │   ├── transaktionen.component.html        
│   │   ├── transaktionen.component.ts         
│   │   └── transaktionen.component.css         
│   │
│   ├── transaction-dialog-hinzufuegen/         # Dialog zum Hinzufügen von Transaktionen
│   │   ├── transaction-dialog.component.html   
│   │   ├── transaction-dialog.component.ts    
│   │   └── transaction-dialog.component.css   
│   │
│   ├── app.component.html                      # Root-Template der Anwendung
│   ├── app.component.ts                        # Root-Komponente der Anwendung
│   ├── app.component.css                      
│   ├── app.module.ts                           # Hauptmodul der Angular-Anwendung
│   ├── app.config.ts 
│   └── app-routes.ts                           
│                                  
│
├── styles.css                                  # Globale CSS-Dateien der App
├── index.html                                  # Startpunkt der Angular-Anwendung
├── main.ts                                     # Einstiegspunkt/Bootstrap der Anwendung                        
├── .gitignore  
├── angular.json                                # CLI-Konfiguration für das Projekt
├── package.json  
├── package-lock.json  
├── README.md
├── tsconfig.app.json
└── tsconfig.json
 
```
---

## 3. Beschreibung der Anwendung mit Screenshots: <a name="beschreibung-der-anwendung-mit-screenshots"></a>

EasyFinance ist ein Prototyp, der dafür gedacht ist, sich leicht einen Überblick über die eigenen Finanzen machen zu können.
Die Idee ist einfach Ausgaben und Einnahmen eintragen zu können und mit Wichtigkeitslabels unnötige Ausgaben direkt zu entdecken.
So entsteht eine Übersicht wo leicht zu erkennen ist, wo eingespart werden könnte.
Praktisch ist, dass hier auch Bar Einnahmen und Ausgaben erfasst werden können, was
bei einem herkömmlichen Kontoauszug nicht erfasst wird.

Wenn die Anwendung weiterentwickelt werden sollte, wäre eine Registrierung und ein Login zum Datenschutz notwendig.
Zudem müssten die Daten verschlüsselt werden.

### 3.1 Feature 1: Transaktion hinzufuegen
Um eine Transaktion hinzuzufügen klicke auf Transaktion hinzufügen.
Es öffnet sich ein Dialog und du kannst alle benötigten
Werte eingeben. Für die Transaktion gibt es ein Datepicker, sodass du schnell das passende Datum findest.
Zudem gibt es Kategorien unter denen du per Drop Down auswählen kannst.
In dem Drop Down Typ gibst du ein, ob es sich um eine Eingabe oder Ausgabe handelt.
Ob es eine wichtige Ausgabe war, wird automatisch dann per Icon angezeigt, sobald du fertig bist.
Du kannst die Transaktion auch abbrechen, falls du es dir anders überlegst.

Ein Hinweis im Dialogfenster erinnert daran, dass alle Felder ausgefüllt werden müssen.
Erst wenn alle Felder in korrekter Form eingetragen wurden, kann eine Transaktion hinzugefügt werden.
Das stellt sicher, dass keine fehlerhaften Transaktionen hinzugefügt werden.

Solange nicht alle Felder korrekt ausgefüllt sind, erscheint ein Hinweis.
![](bilderReadme/add1.jpg)


Sobald alle Felder korrekt ausgefüllt wurden, verschwindet der Hinweis und es kann auf ok geklickt werden.
![](bilderReadme/add2.jpg)

### 3.2 Feature 2: Transaktion löschen
Wenn mit der Maus über den Trash-Icon gehoovert wird, leuchtet das Icon in pinker Farbe auf.
Sobald zum Löschen drauf geklickt wird, öffnet sich ein Dialog, sodass die Transaktion gelöscht werden kann.
Der Dialog stellt sicher, dass nicht versehentlich etwas gelöscht wird.

![](bilderReadme/delete.jpg)

### 3.3 Extra Feature:
Per Hinweis mit Ausrufezeichen-Icon lassen sich unnötige Ausgaben so schnell entdecken.
Damit erhält die Nutzer:in leicht einen Überblick, wo sie einfach einsparen könnte.
![](bilderReadme/ipadHorizontal.jpeg)
Ipad Ansicht mit Wichtigkeitslabel bei Sonnencreme

### 3.4 Responsives Design:
Das Design ist mit Bootstrap resposiv gestaltet, damit Transaktionen auch vom Smartphone oder Tablet verwaltet werden können. 
Damit die Übersicht der Transaktionen lesbar angezeigt wird, werden auf kleinen Bildschirmen nur die wichtigsten Spalten der Tabelle angezeigt.
Die Kategorie und das Wichtigkeitslabel sind nur auf größeren Bildschirmen (ab Tabletgröße) sichtbar.

![](bilderReadme/addMobile.jpeg)

Transaktion hinzufügen - Ansicht auf dem Smartphone

![](bilderReadme/UbersichtMobile.jpeg)

Übersicht aller Transaktionen - Ansicht auf dem Smartphone


## 4. Datenmodell mit ER Diagramm und Konzept <a name="datenmodell-mit-er-diagramm-und-konzept"></a>

### ER-Diagramm: 

![](bilderReadme/ER.jpg)


### Konzept:
Die Webanwendung ist ein Prototyp zur Finanzverwaltung.
Die eingegebenen Daten sind fiktiv und dienen nur zum Ausprobieren.
Sie können von allen, die Zugriff auf die Seite haben verändert werden.

EasyFinance kann mit einer Registrierung und einem Login erweitert werden.
Damit auch echte persönliche Daten eingegeben werden können, ist ein Login
sowie eine Verschlüsselung der Datenbank zum Datenschutz notwendig.

Die Erweiterung könnte zudem noch eine weitere Bearbeiten-CRUD Operation
sowie Filter für eine detaillierte Analyse beinhalten.


## 💻 5. Technologien: <a name="technologien"></a>

* Entwicklungsumgebung: IntelliJ IDEA 2024.2.4 (Ultimate Edition)
* Datenbank: PostgreSQL Version 16
* Backend: [Node.js](https://nodejs.org/en) v22.11.0, Express 4.21.2, JavaScript
* Frontend: Angular [Angular CLI](https://github.com/angular/angular-cli) version 19.2.0.
* HTML, CSS, Typescript

* Server für Backend und Datenbank: [Render](https://render.com/)
* Server für Frontend: [Vercel](https://vercel.com)

## 🤖️ 6. Verwendete KI: <a name="verwendete-ki"></a>

* perplexity.ai
* Github Co-Pilot
* Backend: Controller und Routen teilweise mit Perplexity erstellt.
* Frontend: Teilweise mit Perplexity erstellt. Z.B. bei dem Datepicker.
* Frontend: Hinweis im Dialogfenster Transaktion hinzufügen mit Github Co-Pilot sowie Fehlermeldungen damit gefixt und Layout-Design.


## 🛠️ 7. Anleitung zur Installation: <a name="anleitung-zur-installation"></a>

### Wichtiger Hinweis
Die Datenabank wurde mit Render deployed und ist bis zum 06.04.2025 erreichbar. 
Danach wird sie von Server genommen. 
Es kann dann stattdessen die Datenbank von ocean der HTW verwendet werden.
Dazu muss im Backend die .env Datei angepasst werden mit den Umgebungsvariablen und Anmeldeinformation der ocean Datenbank.

Das Backend ist unter https://backendwebtech.onrender.com erreichbar.

Die Frontend-Anwendung ist unter https://frontend-webtech.vercel.app erreichbar.

### Voraussetzungen:
[Node.js](https://nodejs.org/en) installiert haben.
[npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installiert haben.

### Repository klonen (Frontend und Backend)

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

### Abhängigkeiten installieren
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

### Bauen
Um das Projekt zu deployen muss es vorher gebuildet werden. Das geht im Terminal mit:
```bash
ng build
```
Das kompiliert das Projekt und speichert die Build-Dateien im Verzeichnis `dist/`. 
Im dist Verzeichnis ist die fertige Version von der Webanwendung drin.


## 📝 8. Lizenz <a name="lizenz"></a>
Dieses Projekt steht unter der MIT-Lizenz. Weitere Informationen findest du in der LICENSE-Datei.

## 📞 9. Kontakt <a name="kontakt"></a>
Falls du Fragen hast, kontaktier mich unter:
Maryam.Mirza@Student.HTW-Berlin.de
