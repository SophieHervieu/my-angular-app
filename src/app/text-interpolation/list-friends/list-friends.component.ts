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

  constructor() {
    setTimeout(() => {
      this.isDisabled = true;
      alert("Trop tard ! Héhéhé");
    }, 3000);
  }
}
