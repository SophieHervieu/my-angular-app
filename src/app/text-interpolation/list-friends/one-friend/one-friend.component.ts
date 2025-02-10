import { Component } from '@angular/core';

@Component({
  selector: 'app-one-friend',
  imports: [],
  templateUrl: './one-friend.component.html',
  styleUrl: './one-friend.component.css'
})
export class OneFriendComponent {
  image: string = 'https://www.magicalquote.com/wp-content/uploads/2022/02/Mark-Scout.jpg';
  currentDate: Date = new Date();
  username: string = 'Mark Scout';
  status: string = 'Lumon employee';
  age: number = 39;
  colleagues: string[] = ['Helly R', 'Irving B', 'Dylan G', 'M. Milchik'];

  // Méthode appelée dans le template
  getWelcomeMessage(): string {
    return `Bienvenue chez Lumon, ${this.username}. Passez une bonne journée !`;
  }
}
