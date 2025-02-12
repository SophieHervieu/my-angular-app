import { Component } from '@angular/core';
import { OneFriendComponent } from './one-friend/one-friend.component';
import { NgIf, NgFor } from '@angular/common';

export interface ListFriendsTab {
  name: string,
  age: number,
  email: string
}

@Component({
  selector: 'app-list-friends',
  imports: [OneFriendComponent, NgIf, NgFor],
  templateUrl: './list-friends.component.html',
  styleUrl: './list-friends.component.css'
})
export class ListFriendsComponent {
  isDisabled: boolean = false;
  inputValue: string = '';
  isFriendAdded: boolean = false;
  
  listFriendsTab: ListFriendsTab[] = [
    { name: 'Alice', age: 30, email: 'alice@example.com' },
    { name: 'Bob', age: 25, email: 'bob@example.com' },
    { name: 'Charlie', age: 35, email: 'charlie@example.com' }
  ];

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
