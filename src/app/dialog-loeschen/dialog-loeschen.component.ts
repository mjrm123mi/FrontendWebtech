import { Component } from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-dialog-loeschen',
  imports: [
    MatDialogClose,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogTitle
  ],
  templateUrl: './dialog-loeschen.component.html',
  standalone: true,
  styleUrl: './dialog-loeschen.component.css'
})
export class DialogLoeschenComponent {
  constructor(public dialogRef: MatDialogRef<DialogLoeschenComponent>) {
  }
  //wird aufgerufen wenn ich auf abbrechen klicke
  onNoClick(): void{
    this.dialogRef.close();
  }
//wird aufgerufen wenn ich auf den loeschen knopf drueck
  onDelete():void{
    this.dialogRef.close(true);
  }
}
