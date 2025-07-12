import { Component } from '@angular/core';
import { Auth } from '../../services/auth';
import { LoginRequest } from '../../interfaces/auth.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  model: LoginRequest = {
    email: '',
    password: ''
  };

  successMessage = '';
  errorMessage = '';

  constructor(private auth: Auth, private router: Router) {}

  onSubmit() {
    this.errorMessage = '';
    this.successMessage = '';

    this.auth.login(this.model).subscribe({
      next: (response: any) => {
        const token = response.data; // GET TOKEN FROM `data`
        const email = this.model.email;

        if (token) {
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify({ email }));

          this.successMessage = 'Login successful! Redirecting...';

          setTimeout(() => {
            this.router.navigate(['/']);
          }, 1000);
        } else {
          this.errorMessage = 'Login failed: No token received.';
        }
      },
      error: (err) => {
        this.errorMessage = 'Login failed. Please check your credentials.';
        console.error('Login error:', err);
      }
    });
  }
}


