import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  selectedFriend: string | null = null; // Currently selected friend
  messages: string[] = []; // List of messages
  newMessage: string = ''; // New message input

  // Select a friend to chat with
  selectFriend(friend: string): void {
    this.selectedFriend = friend;
    this.messages = []; // Clear messages when a new friend is selected
  }

  // Send a message
  sendMessage(): void {
    if (this.newMessage.trim()) {
      this.messages.push(this.newMessage); // Add the new message to the list
      this.newMessage = ''; 
    }
  }
}
