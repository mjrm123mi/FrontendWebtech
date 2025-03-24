import {Component, inject, Inject} from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogClose, MatDialogActions
} from '@angular/material/dialog';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatOption, MatSelect} from '@angular/material/select';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {Kategorie} from '../services/kategorie';
import {BackendKategorienService} from '../services/backend-kategorien.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule, MomentDateAdapter, MAT_MOMENT_DATE_FORMATS, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS,} from '@angular/material/core';
import { AbstractControl, ValidationErrors } from '@angular/forms'; // Import für die Validierung
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-dialog',
  templateUrl: './transaction-dialog.component.html',
  standalone: true,
  // hier das CommonModule hinzugefuegt damit Hinweis sichtbar wird
  imports: [
    CommonModule, // <------ Import für *ngIf und andere Template-Direktiven

    MatDialogTitle,
    MatDialogContent,
    ReactiveFormsModule,
    FormsModule,
    MatFormField,
    MatFormFieldModule,
    MatInput,
    MatSelect,
    MatOption,
    MatDialogClose,
    MatDialogActions,
    MatButton,
    MatDatepickerModule, //hier Datepicker Modul import
    MatMomentDateModule // MatNativeDateModul ersetzt..fixt den Bug mit dem Datepicker
  ],
  providers: [
    //Datepicker Konfiguration
    MatDatepickerModule,
    {provide: DateAdapter, useClass: MomentDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true }} // {useUtc: true }}  sagt wir wollen direkt Utc (Standartzeitzone) Zeit haben. Das ist Teil des Bugfix.
  ],

  // der Pfad der css datei
  styleUrls: ['./transaction-dialog.component.css']
})
export class TransactionDialogComponent {

  transactionForm: FormGroup;
  kategorien: Kategorie[] = [];
  private bks = inject(BackendKategorienService)

  constructor(
    public dialogRef: MatDialogRef<TransactionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // Initialisierung des Formulars mit der zusätzlichen Validierung für 'betrag'
    this.transactionForm = new FormGroup({
      datum: new FormControl('', Validators.required),
      beschreibung: new FormControl('', Validators.required),
      betrag: new FormControl(
        '',
        [
          Validators.required, // Überprüfung, ob der Betrag eingetragen ist
          Validators.pattern(/^\d+(\.\d{1,2})?$/), // Überprüfung auf Zahlenformat mit Punkt
          this.validateBetrag() // Optional: Benutzerdefinierte Validierung für kein Komma
        ]
      ),
      transaktionstyp: new FormControl('', Validators.required),
      kategorie: new FormControl('', Validators.required)
    });

    // Manuelle Markierung aller Felder als "touched" (nur wenn erforderlich):
    Object.keys(this.transactionForm.controls).forEach(control => {
      this.transactionForm.get(control)?.markAsTouched();
    });


    // Laden der Kategorien vom Backend
    this.bks.getAll()
      .then(response => this.kategorien = response)
  }

  // Benutzerdefinierte Validierungsfunktion für den Betrag
  validateBetrag() {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      // Prüfen, ob ein Komma enthalten ist
      if (value && value.includes(',')) {
        return { commaNotAllowed: true }; // Fehler, wenn ein Komma im Wert enthalten ist
      }
      return null; // Kein Fehler, wenn der Wert gültig ist
    };
  }

  // Methode zum Schließen des Dialogs
  onNoClick(): void {
    this.dialogRef.close(); //hier wird kein parameter übergebn
  }

  // Einreichlogik für das Formular
  onSubmit(): void {
    // Hier können die Daten ans Backend gesendet werden
    //es wird geprüft ob die Eingabe gültig ist
    if (this.transactionForm.valid) {
      console.log("Dialog-Component: " + JSON.stringify(this.transactionForm.value)); //Zeile die beim debuggen hilft falls fehler auftreten.
      this.dialogRef.close(this.transactionForm.value); //wenn es gültig ist, wird das popup geschlossen und ein parameter der closemethode übergeben.
    } else {
      console.log('Formular ist nicht gültig');
    }
  }
}
