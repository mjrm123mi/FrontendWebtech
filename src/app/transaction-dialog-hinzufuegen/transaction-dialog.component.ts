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
import {
  DateAdapter,
  MAT_DATE_FORMATS,
} from '@angular/material/core';

@Component({
  selector: 'app-transaction-dialog',
  templateUrl: './transaction-dialog.component.html',
  standalone: true,
  imports: [
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
    MatDatepickerModule,
    MatMomentDateModule
  ],
  providers: [
    MatDatepickerModule,
    {provide: DateAdapter, useClass: MomentDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true }}
  ],
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
    this.transactionForm = new FormGroup({
      datum: new FormControl('', Validators.required),
      beschreibung: new FormControl('', Validators.required),
      betrag: new FormControl('', Validators.required),
      transaktionstyp: new FormControl('', Validators.required),
      kategorie: new FormControl('', Validators.required)
    });
    this.bks.getAll()
      .then(response => this.kategorien = response)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    // Hier können die Daten ans Backend gesendet werden
    if (this.transactionForm.valid) {
      console.log("Dialog-Component: " + JSON.stringify(this.transactionForm.value));
      this.dialogRef.close(this.transactionForm.value);
    } else {
      console.log('Formular ist nicht gültig');
    }
  }
}
