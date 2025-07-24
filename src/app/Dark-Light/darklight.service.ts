import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarklightService {

 private themeSubject = new BehaviorSubject<'light' | 'dark'>('light');
  theme$ = this.themeSubject.asObservable();

  constructor() {
    this.theme$.subscribe(theme => {
      document.body.classList.remove('light', 'dark');
      document.body.classList.add(theme);
    });
  }

  // Toggle the theme
  toggleTheme() {
    const current = this.themeSubject.getValue();
    this.themeSubject.next(current === 'light' ? 'dark' : 'light');
  }

  // Set theme directly (optional)
  setTheme(theme: 'light' | 'dark') {
    this.themeSubject.next(theme);
  }
}
