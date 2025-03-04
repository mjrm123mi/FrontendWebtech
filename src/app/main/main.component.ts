import {Component, inject} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TransactionDialogComponent } from '../transaction-dialog-hinzufuegen/transaction-dialog.component';
import {MatButton} from '@angular/material/button';
import {BackendService} from '../services/backend.service';

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

  //Objektvariable bs
  private bs = inject(BackendService)

  constructor(private dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(TransactionDialogComponent, {
      width: '500px',
      disableClose: true
    });


    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Hier kannst du die Daten ans Backend senden
        //hier backend service save methode aufrufen
        // backendservice muss hier drin sein als obejktvariabele (in der transaktion compente)
        //bs. ruft save methode auf.
        this.bs.save(result).then(() => { //hier wird mit bs.save ans Backend gesendet. Und das Backend speichert in der Datenbank.
          console.log("Main-Component: Transaktion gespeichert.");
          window.location.reload() //hiermit neu laden
        });
        console.log("Main-Component: " + JSON.stringify(result));
      }
    });
  }

}
