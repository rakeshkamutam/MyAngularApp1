import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UserCardComponent } from './usercomponents/user-card/user-card.component';
import { UserListComponent } from './usercomponents/user-list/user-list.component';
import { UserDetailComponent } from './usercomponents/user-detail/user-detail.component';
import { LoginComponent } from './login/login.component';
import { TodoformComponent } from './TodoListApp/todoform/todoform.component';
import { TodolistComponent } from './TodoListApp/todolist/todolist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,RouterModule,HeaderComponent,UserListComponent,UserDetailComponent,UserCardComponent,TodoformComponent,TodolistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
