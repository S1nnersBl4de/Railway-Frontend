import { Component } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { RegisterRequest } from '../../interfaces/auth.interface';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  model: RegisterRequest = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  successMessage = '';
  errorMessage = '';

  constructor(private auth: Auth, private router: Router) {}

  onSubmit() {
    this.errorMessage = '';
    this.auth.register(this.model).subscribe({
      next: () => {
        this.successMessage = 'You have successfully registered!';
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);  // 2 seconds delay before redirect
      },
      error: (err) => {
        this.errorMessage = 'Registration failed. Please try again.';
        console.error('Registration failed:', err);
      }
    });
  }
}
