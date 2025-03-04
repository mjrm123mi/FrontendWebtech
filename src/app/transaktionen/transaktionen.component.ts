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
  transaktionsIdToDelete! : number; // Id die gelöscht werden soll
  transaktionen: Transaktion[] = [];

  ngOnInit(): void {
    this.bs.getAll()
      .then(response => this.transaktionen = response)
      .then(transaktionen => console.log(' transaktionen in TableComponent : ', transaktionen))
  }


  // zum löschen richtig?
  $index: any;
  delete(id: number): void {
    //console.log("löschen!!!") //hier ein Log hinzugefügt um zu gucken ob die funktion aufgerufen wird.

    this.bs.deleteOne(String(id))
      .then(() => {
        this.bs.getAll()
          .then(response => {
            this.transaktionen = response
            this.deleteStatus = false;
          })
      })
    //this.transaktionsIdToDelete = id;
    //this.deleteStatus = true;
  }

  // confirm() {
  //   this.bs.deleteOne(String(this.transaktionsIdToDelete))
  //     .then(() => {
  //       this.bs.getAll()
  //         .then(response => {
  //           this.transaktionen = response
  //           this.deleteStatus = false;
  //         })
  //     })
  // }

  // cancel() {
  //   this.deleteStatus = false;
  // }
}

