import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';

interface AuthResponse {
  token: string;
  email: string;
  userName: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private loggedInUser = new BehaviorSubject<string | null>(localStorage.getItem('userName'));
  currentUser$ = this.loggedInUser.asObservable();

  private apiBaseUrl = 'https://localhost:7001/api/Auth/login'; // Adjust if needed

  constructor(private http: HttpClient, private router: Router) {}

  //Login API Service
  login(email: string, password: string): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(this.apiBaseUrl, { email, password })
      .pipe(
        tap((response) => {
          localStorage.setItem('authToken', response.token);
          localStorage.setItem('userName', response.userName);
          localStorage.setItem('email', response.email);
          this.loggedInUser.next(response.userName);
        })
      );
  }

  //Registration API Service
  register(user: any): Observable<any> {
  return this.http.post('https://localhost:7001/api/Auth/register', user);
  }

  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userName');
    localStorage.removeItem('email');
    this.loggedInUser.next(null);
    //this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  getUserName(): string | null {
    return localStorage.getItem('userName');
  }
}
