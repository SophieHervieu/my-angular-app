import { Component } from '@angular/core';
import { OneFriendComponent } from './one-friend/one-friend.component';

@Component({
  selector: 'app-list-friends',
  imports: [OneFriendComponent],
  templateUrl: './list-friends.component.html',
  styleUrl: './list-friends.component.css'
})
export class ListFriendsComponent {
  isDisabled: boolean = false;
  inputValue: string = '';
  defaultValue: string = '🥶 Aucun ami';

  constructor() {
    setTimeout(() => {
      this.isDisabled = true;
      alert("Trop tard ! Héhéhé");
    }, 3000);
  }

  capterEvent(event:any) {
    this.inputValue = event.target.value;
  }

  changeText() {
    this.defaultValue = 'Ami ajouté ! 😎';
  }
}
