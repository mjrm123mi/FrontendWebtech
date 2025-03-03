import { Component } from '@angular/core';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [LeftComponent, RightComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
