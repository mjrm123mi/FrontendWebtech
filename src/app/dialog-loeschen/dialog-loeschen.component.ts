import { Component } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';

// Der @Component-Decorator markiert die folgende Klasse als Angular-Komponente
// und konfiguriert sie mit spezifischen Metadaten
@Component({
  // Definiert den HTML-Selektor für diese Komponente
  selector: 'app-dialog-loeschen',

  // Importiert die benötigten Angular Material-Komponenten für diese Standalone-Komponente
  imports: [
    MatDialogClose,// Komponente zum Schließen des Dialogs
    MatDialogContent,// Komponente für den Inhalt des Dialogs
    MatDialogActions,// Komponente für Aktionen im Dialog (z.B. Buttons)
    MatButton, // Material Design Button-Komponente
    MatDialogTitle// Komponente für den Titel des Dialogs
  ],
  // Pfad zur HTML-Template-Datei der Komponente dialog-loeschen
  templateUrl: './dialog-loeschen.component.html',
  standalone: true, // standalone heißt es ist nicht Teil eines Moduls
  styleUrl: './dialog-loeschen.component.css'
})
// Definition der Komponenten-Klasse
export class DialogLoeschenComponent {
  constructor(public dialogRef: MatDialogRef<DialogLoeschenComponent>) {
  }
  //wird aufgerufen wenn ich auf abbrechen klicke
  onNoClick(): void{
    this.dialogRef.close();
  }
//wird aufgerufen wenn ich auf den loeschen knopf drueck
  onDelete():void{
    this.dialogRef.close(true);
  }
}
