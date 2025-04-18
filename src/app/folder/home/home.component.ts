import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string = ''; 

  ngOnInit(): void {
    // Fetch the username from localStorage 
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    this.username = loggedInUser.username || 'User';
  }
}
