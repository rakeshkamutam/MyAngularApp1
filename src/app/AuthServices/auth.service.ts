import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Example: A simple flag to simulate user authentication status
  private isAuthenticated = false;

  constructor(private router: Router) {}

  // Method to simulate user login
  login(username: string, password: string): boolean {
    // Simulate authentication logic
    if (username === 'rakesh' && password === '123456') {
      this.isAuthenticated = true;
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  // Method to simulate user logout
  logout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  // Method to check if the user is logged in
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
