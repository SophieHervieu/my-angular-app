import { Component } from '@angular/core';
import { NgIf, NgFor, NgStyle, NgClass } from '@angular/common';

@Component({
  selector: 'app-directives',
  imports: [NgIf, NgFor, NgStyle, NgClass],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  displayText: boolean = true;
  nbArray: number[] = [];
  textStyle: string = 'blue';

  addNumber(): void {
    this.nbArray.push(this.nbArray.length + 1);
    this.displayText = !this.displayText;
  }

  getColor(num: number): string {
    if (num >= 5){
      this.textStyle = 'white';
      return "lightblue";
    } else {
      this.textStyle = 'blue';
      return " #ffffff";
    }
  }
}
