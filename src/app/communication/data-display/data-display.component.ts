import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-display',
  imports: [],
  templateUrl: './data-display.component.html',
  styleUrl: './data-display.component.css'
})
export class DataDisplayComponent {
  @Input() name!: string;
  @Input() age!: number;
}
