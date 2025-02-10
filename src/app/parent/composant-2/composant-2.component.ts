import { Component } from '@angular/core';
import { ChildComponent1Component } from './child-component-1/child-component-1.component';
import { ChildComponent2Component } from './child-component-2/child-component-2.component';

@Component({
  selector: 'app-composant-2',
  imports: [ChildComponent1Component, ChildComponent2Component],
  templateUrl: './composant-2.component.html',
  styleUrl: './composant-2.component.css'
})
export class Composant2Component {

}
