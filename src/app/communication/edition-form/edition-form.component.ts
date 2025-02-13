import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edition-form',
  imports: [FormsModule],
  templateUrl: './edition-form.component.html',
  styleUrl: './edition-form.component.css'
})
export class EditionFormComponent {
  name!: string;
  age!: number;

  @Output() userCreated = new EventEmitter<{ name: string, age: number}>();

  createUser(name: string, age: number) {
    this.userCreated.emit({name: name, age: age});

  }
}
