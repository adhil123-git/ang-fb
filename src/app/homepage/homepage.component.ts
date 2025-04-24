import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-homepage', 
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  username: string = '';
  constructor(private router: Router,private authenticationService: AuthenticationService) {}
  ngOnInit(): void {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    this.username = loggedInUser.username || 'User';
  }
  
  logout(): void {
    alert('Logged out successfully!');
    localStorage.removeItem('loggedInUser'); 
    this.router.navigate(['/login']); 
  }
}
