import { Injectable } from '@angular/core';
import {Transaktion} from './transaktion';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  apiURL = 'http://localhost:3000/transaktionen/'

  constructor() { }

  //read
  async getAll(): Promise<Transaktion[]> {
    let response = await fetch(this.apiURL);
    let transaktionen = await response.json();
    console.log('transaktionen in service (getAll) : ', transaktionen)
    return transaktionen;
  }

  //Methode save zum speichern
  async save(transaktion: Transaktion): Promise<void> {
    try {
      const response = await fetch(this.apiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(transaktion)
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log('Transaktion erfolgreich gespeichert.');
    } catch (error) {
      console.error('Fehler beim Speichern der Transaktion:', error);
    }
  }

  //Methode zum löschen aus dem skript// pfad so richtig mit transaktionen?
  async deleteOne(id: string): Promise<{message: string}> {
    let response = await fetch(this.apiURL + id, {
      method: "DELETE"
    });
    let message = await response.json();
    console.log('message in service (deleteOne) : ', message)
    return message;
  }

  getOne(s: string) {

  }
}
