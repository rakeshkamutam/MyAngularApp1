import { Component, OnInit } from '@angular/core';
import { UserService } from '../../userservices/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent implements OnInit{  
  

  constructor(private list:UserService){ }

  todos: any;
  ngOnInit(): void {
    this.todos = this.list.todolist

  }  

  removeTodo(index:any){
    this.list.deleteTodo(index)
  }

}
