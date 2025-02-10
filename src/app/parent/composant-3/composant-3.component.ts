import { Component } from '@angular/core';
import { ChildComponent3Component } from './child-component-3/child-component-3.component';
import { ChildComponent4Component } from './child-component-4/child-component-4.component';
import { ChildComponent5Component } from './child-component-5/child-component-5.component';

@Component({
  selector: 'app-composant-3',
  imports: [ChildComponent3Component, ChildComponent4Component, ChildComponent5Component],
  templateUrl: './composant-3.component.html',
  styleUrl: './composant-3.component.css'
})
export class Composant3Component {

}
