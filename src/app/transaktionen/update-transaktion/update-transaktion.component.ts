// transaktionen/update-transaktion/update-transaktion.component.ts
import { Component, OnInit } from '@angular/core';
import { TransaktionService } from '../transaktion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaktion } from '../transaktion.service';

@Component({
  selector: 'app-update-transaktion',
  templateUrl: './update-transaktion.component.html',
  styleUrls: ['./update-transaktion.component.css']
})
export class UpdateTransaktionComponent implements OnInit {

  transaktion: Transaktion = {
    transaktionsid: 0,
    transaktionstyp: '',
    beschreibung: '',
    betrag: 0,
    kategorieid: 0,
    datum: ''
  };

  constructor(
    private transaktionService: TransaktionService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.transaktionService.getTransaktion(id).subscribe(transaktion => {
      this.transaktion = transaktion;
    });
  }

  onSubmit() {
    this.transaktionService.updateTransaktion(this.transaktion.transaktionsid, this.transaktion).subscribe(() => {
      console.log('Transaktion erfolgreich aktualisiert');
      this.router.navigate(['/list-transaktionen']);
    });
  }

}
