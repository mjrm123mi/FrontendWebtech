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
  deleteStatus: boolean = false;
  transaktionen: Transaktion[] = [];

  ngOnInit(): void {
    this.bs.getAll()
      .then(response => this.transaktionen = response)
      .then(transaktionen => console.log(' transaktionen in TableComponent : ', transaktionen))
  }


  // zum löschen richtig?
  delete(id: number): void {
    this.bs.getOne(String(id))
      .then(
          (response: Transaktion[]) => {
          this.transaktionen = response
          this.deleteStatus = true;
        }
      )
  }

  confirm() {
    this.bs.deleteOne(String(this.transaktionen))
      .then(() => {
        this.bs.getAll()
          .then(response => {
            this.transaktionen = response
            this.deleteStatus = false;
          })
      })
  }

  cancel() {
    this.deleteStatus = false;
  }
}

