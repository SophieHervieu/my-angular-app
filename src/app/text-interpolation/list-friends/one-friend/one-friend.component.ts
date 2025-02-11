import { Component } from '@angular/core';
import { NgStyle, NgClass } from '@angular/common';

@Component({
  selector: 'app-one-friend',
  imports: [NgStyle, NgClass],
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
  oneFriendStyle: string = "Off";

  // Méthode appelée dans le template
  getWelcomeMessage(): string {
    return `Bienvenue chez Lumon, ${this.username}. Passez une bonne journée !`;
  }

  constructor() {
    if (Math.random()*1 < 0.5) {
      this.oneFriendStyle = "Off";
    } else {
      this.oneFriendStyle = "On";
    }
  }

  getColor(): string {
    if (this.oneFriendStyle === "Off") {
      return "rgb(243, 168, 183)";
    } else {
      return " #ffffff";
    }
  } 
}
