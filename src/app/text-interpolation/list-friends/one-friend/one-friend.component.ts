import { Component } from '@angular/core';

@Component({
  selector: 'app-one-friend',
  imports: [],
  templateUrl: './one-friend.component.html',
  styleUrl: './one-friend.component.css'
})
export class OneFriendComponent {
  currentDate: Date = new Date();
  username: string = 'Mark Scout';
  status: string = 'Lumon employee';
  age: number = 39;
  colleagues: string[] = ['Helly R', 'Irving B', 'Dylan G'];

  // Méthode appelée dans le template
  getWelcomeMessage(): string {
    return `Bienvenue chez Lumon, ${this.username}. Passez une bonne journée !`;
  }
}
