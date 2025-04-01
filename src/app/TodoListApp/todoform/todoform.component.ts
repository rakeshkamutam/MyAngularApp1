import { Component } from '@angular/core';
import { TodolistComponent } from '../todolist/todolist.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../userservices/user.service';

@Component({
  selector: 'app-todoform',
  standalone: true,
  imports: [CommonModule,TodolistComponent,FormsModule],
  templateUrl: './todoform.component.html',
  styleUrl: './todoform.component.css'
})
export class TodoformComponent {
  todoInput = "hello";

  constructor(private list: UserService) { }

  addTask(){
    this.list.addTodo(this.todoInput);
    console.log(this.todoInput);
    this.todoInput = "";
  }

  reset(){
    this.todoInput = "";
  }

}
