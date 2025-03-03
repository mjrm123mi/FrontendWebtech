import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TransactionDialogComponent } from '../transaction-dialog/transaction-dialog.component';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  constructor(private dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(TransactionDialogComponent, {
      width: '500px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Hier kannst du die Daten ans Backend senden
        console.log("Main-Component: " + result);
      }
    });
  }
}
