import {Component, inject} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TransactionDialogComponent } from '../transaction-dialog-hinzufuegen/transaction-dialog.component';
import {MatButton} from '@angular/material/button';
import {BackendTransaktionsService} from '../services/backend-transaktions.service';

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

  //Objektvariable bts (backendtransaktionsservice) und bks (BackendKategorienService)
  private bts = inject(BackendTransaktionsService)

  constructor(private dialog: MatDialog) { }

  openDialog(): void {

    const dialogRef = this.dialog.open(TransactionDialogComponent, { //hier wird mit open der Dialog geöffnet. Die Methode gibt ein DialogRef zurück.
      width: '500px',
      disableClose: true
    });

    //hier wird gesagt was passiert wenn der dialog geschlossen wird:
    //wenn der dialog geschlossen wird, wird afterClosed().subscribe() aufgerufen.
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Hier werden die Daten ans Backend gesendet.
        // backendtranaktionsservice bts muss hier drin sein als obejektvariabele (in der transaktion compente)

        //bts. ruft save methode auf.
        this.bts.save(result).then(() => { //hier wird mit bts.save ans Backend gesendet. Und das Backend speichert in der Datenbank.
          console.log("Main-Component: Transaktion gespeichert.");
          window.location.reload() //hiermit neu laden
        });
        //für debuggen console.log
        console.log("Main-Component: " + JSON.stringify(result));
      }
    });
  }

}
