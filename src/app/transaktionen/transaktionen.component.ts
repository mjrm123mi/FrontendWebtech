import {Component, inject, OnInit} from '@angular/core';
import {BackendService} from "../services/backend.service";
import {Transaktion} from "../services/transaktion";

@Component({
  selector: 'app-transaktionen',
  imports: [],
  standalone: true,
  templateUrl: './transaktionen.component.html',
  styleUrl: './transaktionen.component.css'
})
export class TransaktionenComponent implements OnInit {

  private bs = inject(BackendService)
  transaktionen: Transaktion[] = [];

  ngOnInit(): void {
    this.bs.getAll()
        .then( response => this.transaktionen = response )
        .then( transaktionen => console.log(' transaktionen in TableComponent : ', transaktionen ))
  }

  delete(transaktionsid: number) {
    
  }
}
