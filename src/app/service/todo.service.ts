import { Injectable } from '@angular/core';
import {of,from} from 'rxjs';
import {Todo} from "./../model/todo"

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[];

  constructor() {
    this.todos = [
      {
        id:"101",
        title:"Learn Java",
        isCompleted: true,
        date: new Date(),
      },
      {
        id:"102",
        title:"Learn Python",
        isCompleted: true,
        date: new Date(),
      },
      {
        id:"103",
        title:"Learn Angular",
        isCompleted: true,
        date: new Date(),
      }
    ]
   }
   getTodos(){              //this is to get all the todos 
     return of(this.todos)              //this is to return what all is available inside todo
                            //this is a observable.jo add hoga woh deta jayega
   }
  addTodo(todo:Todo){
    this.todos.push(todo)
  }

  changeStatus(todo:Todo){      //the above true and false if change karna hai tho this function
    this.todos.map(singleTodo=>{
      if(singleTodo.id == todo.id){     //this is if todo is complete then change it to false if true hai after matching it
        todo.isCompleted = !todo.isCompleted;
      }
    });
  }

  deleteTodo(todo:Todo){
    const indexOfTodo = this.todos.findIndex(
      (currentObj)=>currentObj.id == todo.id
    )
    this.todos.splice(indexOfTodo,1)          //splice is used to remove 
  }
  removeTodo(todo:Todo){
    this.todos.pop()
  }

}
