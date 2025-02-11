import { Component } from '@angular/core';
import { OneFriendComponent } from './one-friend/one-friend.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-list-friends',
  imports: [OneFriendComponent, NgIf],
  templateUrl: './list-friends.component.html',
  styleUrl: './list-friends.component.css'
})
export class ListFriendsComponent {
  isDisabled: boolean = false;
  inputValue: string = '';
  isFriendAdded: boolean = false;

  constructor() {
    setTimeout(() => {
      this.isDisabled = true;
      alert("Trop tard ! Héhéhé");
    }, 3000);
  }

  capterEvent(event:any) {
    this.inputValue = event.target.value;
  }

  changeText(): void {
    if (this.inputValue.trim()) {
      this.isFriendAdded = true;
    }
  }
}
