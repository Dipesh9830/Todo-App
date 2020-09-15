import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import {Todo} from "../../model/Todo"
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-tods',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodsComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe((todos)=>{
      this.todos = todos;                  //the todo in which we go will come here 
                                                //then after that we will pass the todo dowm to change or delete
    });
  }
  
  changeTodoStatus(todo: Todo){
    this.todoService.changeStatus(todo);
  }

  deleteTodo(todo: Todo){
    this.todoService.deleteTodo(todo)
  }
}
