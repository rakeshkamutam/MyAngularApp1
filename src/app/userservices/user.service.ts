import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users = [
    { id: 1, name: 'John Doe', category: 'Developer', gender: 'Male', photo: 'https://randomuser.me/api/portraits/men/15.jpg' },
    { id: 2, name: 'Jane Smith', category: 'Designer', gender: 'Female', photo: 'https://randomuser.me/api/portraits/women/71.jpg' },
    { id: 3, name: 'Alice Johnson', category: 'Manager', gender: 'Female', photo: 'https://randomuser.me/api/portraits/women/74.jpg' },
  ];

  taskId=3
   todolist = [
    {id:1, 'name': "Task1"},
    {id:2, 'name': "Task2"},
  ]

  getUsers() {
    return this.users;
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  } 

  addTodo(taskName:string){
    this.todolist.push({"id":this.taskId++, 'name': taskName});
  }

  deleteTodo(index:any){
    this.todolist.splice(index,1)
  }

}