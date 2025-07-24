import { Component, OnInit } from '@angular/core';
import { DarklightService } from '../darklight.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-themed-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './themed-box.component.html',
  styleUrl: './themed-box.component.css'
})
export class ThemedBoxComponent implements OnInit {

  theme: 'light' | 'dark' = 'light';

  constructor(private themeService: DarklightService) {}

  ngOnInit() {
    this.themeService.theme$.subscribe(mode => {
      this.theme = mode;
    });
  }

  //  toggleTheme() {
  //   this.themeService.toggleTheme();
  // }

}
