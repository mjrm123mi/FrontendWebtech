import { Injectable } from '@angular/core';
import {Transaktion} from './transaktion';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  apiURL = 'http://localhost:3000/transaktionen'

  constructor() { }

  async getAll(): Promise<Transaktion[]> {
    let response = await fetch(this.apiURL);
    let transaktionen = await response.json();
    console.log('transaktionen in service (getAll) : ', transaktionen)
    return transaktionen;
  }
}
