import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthenticationService, private router: Router) {}

  onLogin(): void {
    if (!this.email || !this.password) {
      alert('Please enter both email and password');
    
      return;
    }

    const isValidUser = this.authService.loginUser(this.email, this.password);
    if (isValidUser) {
      alert('Login successful!');
      this.router.navigate(['/home']); 
    } else {
      alert('Invalid email or password');
    }
  }
}
