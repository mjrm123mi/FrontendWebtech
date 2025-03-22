import {Component, inject, OnInit} from '@angular/core';
import {BackendTransaktionsService} from "../services/backend-transaktions.service";
import {Transaktion} from "../services/transaktion";
import {MatDialog} from '@angular/material/dialog';
import {DialogLoeschenComponent} from '../dialog-loeschen/dialog-loeschen.component';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-transaktionen',
  imports: [
    DecimalPipe
  ],
  standalone: true,
  templateUrl: './transaktionen.component.html',
  styleUrl: './transaktionen.component.css'
})
export class TransaktionenComponent implements OnInit {

  private bs = inject(BackendTransaktionsService)
  transaktionen: Transaktion[] = [];

  //Konstruktor (Angular Material mit MatDialog)
  constructor(private dialog: MatDialog) {
  }

  // ngOnInit() holt sich die Liste der Transaktionen aus dem Backend.
  // Die Methode wird automatisch aufgerufen wenn die Website aufgebaut wird.
  // Init steht für initialisieren.
  ngOnInit(): void {
    this.bs.getAll()
      .then(response => this.transaktionen = response)
      .then(transaktionen => console.log(' transaktionen in TransaktionenComponent : ', transaktionen))
  }


  // Die delete() Methode ruft die deleteOne Methode aus dem BackendTransaktionsService (backend-transaktions.service.ts) auf.
  delete(id: number): void {
    //die deletOne Methode aus dem BackendTransaktionsService sendet
    // z.b. eine HTTP-Anfrage (HTTP DELETE) an das BE
    //um die Transaktion mit der angegeben ID zu löschen.
    this.bs.deleteOne(String(id))
      .then(() => {
            this.ngOnInit() //nach dem Löschen werden alle Transaktionen erneut vom BE geladen.Damit wird sichergesellt dass die Transaktionen automatisch aktualisiert werden, ohne das die Seite neu geladen werden muss.
          })
  }

// Dialogmethode die den Dialog öffnet. Die ruft die delete() Methode auf.
  openDialog(id: number): void {
    const dialogRef = this.dialog.open(DialogLoeschenComponent)
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete(id);
      }
    })
  }


}

