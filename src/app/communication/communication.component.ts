import { Component } from '@angular/core';
import { DataDisplayComponent } from "./data-display/data-display.component";
import { EditionFormComponent } from "./edition-form/edition-form.component";

@Component({
  selector: 'app-communication',
  imports: [DataDisplayComponent, EditionFormComponent],
  templateUrl: './communication.component.html',
  styleUrl: './communication.component.css'
})
export class CommunicationComponent {
  nameText = 'Toto';
  ageText = 30;

  registerUser(userData: {name: string, age: number}) {
    this.nameText = userData.name;
    this.ageText = userData.age;
  }
}
