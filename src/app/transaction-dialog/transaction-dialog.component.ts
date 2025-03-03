import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-transaction-dialog',
  templateUrl: './transaction-dialog.component.html',
  standalone: true,
  styleUrls: ['./transaction-dialog.component.css']
})
export class TransactionDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<TransactionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(transactionData: any): void {
    // Hier können die Daten ans Backend gesendet werden
    console.log(transactionData);
    this.dialogRef.close(transactionData);
  }
}
