import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css']
})
export class FirstcomponentComponent {
  constructor(private router: Router) {}

  logout(){
    alert('Logged out successfully!');
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }

}
