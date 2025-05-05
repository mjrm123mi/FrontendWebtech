import { Component } from '@angular/core';

// mit der Annotation mach ich eine Komponente draus, wurde mit ng@component automatisch erzeugt.
//Unterscheid hier zu Springboot ist, das ich hier noch genaue Parameter reinschreiben kann.
//von Typescript
@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  standalone: true,
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
