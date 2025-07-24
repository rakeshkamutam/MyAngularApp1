import { Component } from '@angular/core';
import { DarklightService } from '../darklight.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.css'
})
export class ThemeToggleComponent {

  currentTheme: 'light' | 'dark' = 'light';

  constructor(private themeService: DarklightService) {
    this.themeService.theme$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

}
