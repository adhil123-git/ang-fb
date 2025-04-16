import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

interface User {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  onSubmit() {
    if (!this.user.email || !this.user.password || !this.user.confirmPassword) {
      alert('Enter All The Fields');
      return;
    }

    if (this.user.password.length < 5) {
      alert('Password must be at least 5 characters long');
      return;
    }

    if (this.user.password !== this.user.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const isRegistered = this.authenticationService.registerUser(this.user);
    if (isRegistered) {
      alert('Registration successful!');
      console.log('User registered:', this.user);
      this.router.navigate(['/login']);
    } else {
      alert('Email already exists!');
    }
  }
}

