import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: string[] = []; // Array to store post image URLs
  imageUrl: string = ''; // URL entered by the user

  // Create a new post
  createPost(): void {
    if (this.imageUrl.trim()) {
      this.posts.push(this.imageUrl); // Add the image URL to the posts array
      this.imageUrl = ''; // Clear the input field
    } else {
      alert('Please enter a valid image URL.');
    }
  }

  // Delete a post
  deletePost(index: number): void {
    this.posts.splice(index, 1); // Remove the post at the specified index
  }
}
