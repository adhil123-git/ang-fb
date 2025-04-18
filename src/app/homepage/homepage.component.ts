import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
 
  constructor(private router: Router) {}

  logout(): void {
    alert('Logged out successfully!');
    localStorage.removeItem('loggedInUser'); // Clear logged-in user data from local storage
    this.router.navigate(['/login']); // Redirect to login page after logout
  }
}


