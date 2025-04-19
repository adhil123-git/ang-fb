import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    // Initialize the form with validation rules
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordsMatchValidator });
  }

  // Custom validator to check if passwords match
  passwordsMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if ( password !== confirmPassword) {
      return { passwordsMismatch: true };
    }
    return null;
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      if (this.registerForm.errors && this.registerForm.errors['passwordsMismatch']) {
        alert('Passwords do not match.');
      } else {
        alert('Please fill out all fields correctly.');
      }
      return;
    }

    const { username, email, password } = this.registerForm.value;

    // Call the authentication service to register the user
    const isRegistered = this.authenticationService.registerUser({ username, email, password });
    if (isRegistered) {
      alert('Registration successful!');
      this.router.navigate(['/login']);
    } else {
      alert('Email already exists!');
    }
  }
}

