import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { TransaktionenComponent } from './transaktionen/transaktionen.component';
import {FooterComponent} from './footer/footer.component';

// app.component.ts und die anderen app.component Dateien sind die Hauptanwendung und die importiert alle anderen Komponenten.

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainComponent, TransaktionenComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first';
}
