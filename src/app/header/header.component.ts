import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeToggleComponent } from '../Dark-Light/theme-toggle/theme-toggle.component';
import { AuthService } from '../AuthServices/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

   username: string | null = null;

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authService.currentUser$.subscribe(name => {
      this.username = name;
    });
  }

}
