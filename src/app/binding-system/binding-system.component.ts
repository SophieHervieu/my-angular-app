import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding-system',
  imports: [FormsModule],
  templateUrl: './binding-system.component.html',
  styleUrl: './binding-system.component.css'
})
export class BindingSystemComponent {
  inputValue='Mark Scout';

  clearInput() {
    this.inputValue = '';
  }
}
