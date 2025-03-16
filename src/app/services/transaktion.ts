export interface Transaktion {

  //Typescript Variablen Definition:
  //Attribute von einer Transaktion
  //das Interface definiert die Transaktion
  wichtigkeitslabel: boolean;
  transaktionsid: number;
  transaktionstyp: string;
  beschreibung: string;
  betrag: number;
  kategoriename: string;
  datum: string;
}
