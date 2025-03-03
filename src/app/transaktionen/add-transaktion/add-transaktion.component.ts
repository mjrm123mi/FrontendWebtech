// transaktionen/add-transaktion/add-transaktion.component.ts
import { Component, OnInit } from '@angular/core';
import { TransaktionService } from '../transaktion.service';
import { Router } from '@angular/router'; // Importiere den Router

@Component({
  selector: 'app-add-transaktion',
  templateUrl: './add-transaktion.component.html',
  standalone: true,
  styleUrls: ['./add-transaktion.component.css']
})
export class AddTransaktionComponent implements OnInit {

  transaktion = {
    transaktionstyp: '',
    beschreibung: '',
    betrag: 0,
    kategorieid: 0,
    datum: ''
  };

  constructor(private transaktionService: TransaktionService,  private router: Router) { } // Injiziere den Router

  ngOnInit(): void {
  }

  onSubmit() {
    this.transaktionService.addTransaktion(this.transaktion).subscribe(() => {
      console.log('Transaktion erfolgreich hinzugefügt');
      this.router.navigate(['/list-transaktionen']); // Navigiere zur Liste
    });
  }

}
