import {Component, inject} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TransactionDialogComponent } from '../transaction-dialog-hinzufuegen/transaction-dialog.component';
import {MatButton} from '@angular/material/button';
import {BackendTransaktionsService} from '../services/backend-transaktions.service';
import {BackendKategorienService} from '../services/backend-kategorien.service';
import {Kategorie} from '../services/kategorie';

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
  private bks = inject(BackendKategorienService)
  private kategorien: Kategorie[] = []; //Objektvariable die ein Array oder Liste ist von Kategorie

  constructor(private dialog: MatDialog) { }

  openDialog(): void {
    this.bks.getAll()
      .then(response => this.kategorien = response)

    const dialogRef = this.dialog.open(TransactionDialogComponent, {
      width: '500px',
      disableClose: true,
      data: {kategorien: this.kategorien}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Hier kannst du die Daten ans Backend senden
        //hier backend service save methode aufrufen
        // backendservice muss hier drin sein als obejktvariabele (in der transaktion compente)
        //bts. ruft save methode auf.
        this.bts.save(result).then(() => { //hier wird mit bts.save ans Backend gesendet. Und das Backend speichert in der Datenbank.
          console.log("Main-Component: Transaktion gespeichert.");
          window.location.reload() //hiermit neu laden
        });
        console.log("Main-Component: " + JSON.stringify(result));
      }
    });
  }

}
