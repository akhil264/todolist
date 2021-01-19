import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
todos = [
  {label:'Pay House Rent',priority:1,done:false},
  {label:'Pay Current Bill',priority:2,done:true},
  {label:'Pay Milk Amount',priority:3,done:false},
  {label:'Pay Dish Bill',priority:4,done:true}
];
addTodo(newTodoLabel){
var newTodo =  {label:newTodoLabel,priority:1,done:false}

this.todos.push(newTodo)
}

deleteTodo(todo){
  this.todos = this.todos.filter(t => t.label !== todo.label);
}

  
}
