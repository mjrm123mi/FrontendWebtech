import {Component, inject, OnInit} from '@angular/core';
import {BackendTransaktionsService} from "../services/backend-transaktions.service";
import {Transaktion} from "../services/transaktion";
import {MatDialog} from '@angular/material/dialog';
import {DialogLoeschenComponent} from '../dialog-loeschen/dialog-loeschen.component';

@Component({
  selector: 'app-transaktionen',
  imports: [],
  standalone: true,
  templateUrl: './transaktionen.component.html',
  styleUrl: './transaktionen.component.css'
})
export class TransaktionenComponent implements OnInit {

  //Konstruktor (Angular Material mit MatDialog)
  constructor(private dialog: MatDialog) {
  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(DialogLoeschenComponent)
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete(id);
      }
    })
  }

  private bs = inject(BackendTransaktionsService)
  deleteStatus: boolean = false;
  transaktionen: Transaktion[] = [];

  ngOnInit(): void {
    this.bs.getAll()
      .then(response => this.transaktionen = response)
      .then(transaktionen => console.log(' transaktionen in TableComponent : ', transaktionen))
  }

  $index: any;

  // löschen Methode:
  delete(id: number): void {
    //console.log("löschen!!!") //hier ein Log hinzugefügt um zu gucken ob die funktion aufgerufen wird.
    this.bs.deleteOne(String(id))
      .then(() => {
            this.deleteStatus = false;
            this.ngOnInit()
          })
  }
}

