import { Injectable } from '@angular/core';
import { Kategorie } from './kategorie';

@Injectable({
  providedIn: 'root'
})
export class BackendKategorienService {
  //URL für lokales Backend: http://localhost:3000/kategorien/
  // URL für deploytes Backend: https://backendwebtech.onrender.com/kategorien/
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
