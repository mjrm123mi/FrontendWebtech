import { Injectable } from '@angular/core';
import {Transaktion} from './transaktion';

@Injectable({
  providedIn: 'root'
})
export class BackendTransaktionsService {
  apiURL = 'https://backendwebtech.onrender.com/transaktionen/' //hier basisurl vom backend "https://backendwebtech.onrender.com" mit endpunkt transaktion

  constructor() { }

  // hier wird CRUD read umgesetzt
  async getAll(): Promise<Transaktion[]> {
    let response = await fetch(this.apiURL);
    let transaktionen = await response.json();
    console.log('transaktionen in service (getAll) : ', transaktionen)
    return transaktionen; //hier wird die Transaktion returned
  }

  //Methode save zum speichern
  async save(transaktion: Transaktion): Promise<void> {
    try {
      const response = await fetch(this.apiURL, {
        method: 'POST', //die Methdode POST wird für die Anfrage zum speichern verwendet
        headers: {
          'Content-Type': 'application/json' //hier wird dem server gesagt das json Daten versendet werden
        },
        body: JSON.stringify(transaktion) // hier im body wird die Transaktion als JSON-String gesendet
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log('Transaktion erfolgreich gespeichert.');
    } catch (error) {
      console.error('Fehler beim Speichern der Transaktion:', error);
    }
  }

  //Methode zum löschen (aus dem skript): hier ist der Pfad: this.apiURL + id
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
