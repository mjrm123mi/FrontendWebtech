import { Injectable } from '@angular/core';
import { Kategorie } from './kategorie';

@Injectable({
  providedIn: 'root'
})
export class BackendKategorienService {
  apiURL = 'http://localhost:3000/kategorien/'

  constructor() { }

  //read
  async getAll(): Promise<Kategorie[]> {
    let response = await fetch(this.apiURL);
    let kategorien = await response.json();
    console.log('kategorien in service (getAll) : ', kategorien)
    return kategorien;
  }
}
