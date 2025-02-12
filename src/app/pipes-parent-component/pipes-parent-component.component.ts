import { Component } from '@angular/core';
import { PipesChildComponentComponent } from './pipes-child-component/pipes-child-component.component';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-pipes-parent-component',
  imports: [PipesChildComponentComponent,FormsModule,NgIf],
  templateUrl: './pipes-parent-component.component.html',
  styleUrl: './pipes-parent-component.component.css'
})
export class PipesParentComponentComponent {
  parentMessage: string = 'Ici le parent balance des infos intra ENFANT';
  counterParent: number = 0;
    childNotification: string | null = null;


  increaseCounter() {
    this.counterParent++;
  }

  decreaseCounter() {
    if (this.counterParent > 0) {
      this.counterParent--;
    }
  }

  //! Reaction dans le parent à la notification de l'enfant (l'event custom)
  handleNotification(message: string) {
    console.log(message);
    this.childNotification = message;
  }
}
