import { Component } from '@angular/core';
import { Composant1Component } from './composant-1/composant-1.component';
import { Composant2Component } from './composant-2/composant-2.component';
import { Composant3Component } from './composant-3/composant-3.component';

@Component({
  selector: 'app-parent',
  imports: [Composant1Component, Composant2Component, Composant3Component],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

}
