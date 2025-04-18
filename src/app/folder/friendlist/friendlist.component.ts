import { Component } from '@angular/core';

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.css']
})
export class FriendlistComponent {
  selectedFriend: string | null = null; // Track the selected friend

  // Handle friend selection
  selectFriend(friend: string): void {
    this.selectedFriend = friend; // Set the selected friend
  }
}
