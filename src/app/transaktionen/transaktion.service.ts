//ähnlich wie backend service nur mit KI

// transaktionen/transaktion.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Transaktion {
  transaktionsid: number;
  transaktionstyp: string;
  beschreibung: string;
  betrag: number;
  kategorieid: number;
  datum: string;
}

@Injectable({
  providedIn: 'root'
})
export class TransaktionService {

  private apiUrl = 'http://localhost:3000/transaktionen'; //Backend-URL

  constructor(private http: HttpClient) { }

  getAll(): Observable<Transaktion[]> {
    return this.http.get<Transaktion[]>(this.apiUrl);
  }

  getTransaktion(id: number): Observable<Transaktion> {
    return this.http.get<Transaktion>(`${this.apiUrl}/${id}`);
  }

  addTransaktion(transaktion: any): Observable<Transaktion> {
    return this.http.post<Transaktion>(this.apiUrl, transaktion);
  }

  updateTransaktion(id: number, transaktion: any): Observable<Transaktion> {
    return this.http.put<Transaktion>(`${this.apiUrl}/${id}`, transaktion);
  }

  deleteTransaktion(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
