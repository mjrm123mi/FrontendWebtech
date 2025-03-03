// transaktionen/list-transaktionen/list-transaktionen.component.ts
import { Component, OnInit } from '@angular/core';
import { TransaktionService, Transaktion } from '../transaktion.service';

@Component({
  selector: 'app-list-transaktionen',
  templateUrl: './list-transaktionen.component.html',
  styleUrls: ['./list-transaktionen.component.css']
})
export class ListTransaktionenComponent implements OnInit {

  transaktionen: Transaktion[] = [];

  constructor(private transaktionService: TransaktionService) { }

  ngOnInit(): void {
    this.loadTransaktionen();
  }

  loadTransaktionen() {
    this.transaktionService.getAll().subscribe(transaktionen => {
      this.transaktionen = transaktionen;
    });
  }

  deleteTransaktion(id: number) {
    this.transaktionService.deleteTransaktion(id).subscribe(() => {
      console.log('Transaktion erfolgreich gelöscht');
      this.loadTransaktionen(); // Transaktionen neu laden
    });
  }

}
