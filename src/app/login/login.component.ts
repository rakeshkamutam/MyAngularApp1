import { Component } from '@angular/core';
import { AuthService } from '../AuthServices/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';
  isLoading = false;

  showRegister = false;
  isRegistering = false;
  registerErrorMessage = '';
  registerUser = {
    userName: '',
    email: '',
    password: '',
    gender: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.isLoading = true;
    this.authService.login(this.email, this.password).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/home']);
      },
      error: err => {
        this.isLoading = false;
        this.errorMessage = 'Invalid credentials.';
      }
    });
  }

  onRegister(): void {
    this.isRegistering = true;
    this.authService.register(this.registerUser).subscribe({
      next: () => {
        this.isRegistering = false;
        alert('Registration successful! You can now log in.');
        this.toggleForm();
      },
      error: err => {
        this.isRegistering = false;
        this.registerErrorMessage = 'Registration failed. Try again.';
      }
    });
  }

  toggleForm(): void {
    this.showRegister = !this.showRegister;
    this.errorMessage = '';
    this.registerErrorMessage = '';
  }
}

