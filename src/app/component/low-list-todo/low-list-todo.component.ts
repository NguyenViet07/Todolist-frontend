import { Component, OnInit } from '@angular/core';
import {ToDo} from '../../model/toDo';
import {TodoService} from '../../service/todo.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-low-list-todo',
  templateUrl: './low-list-todo.component.html',
  styleUrls: ['./low-list-todo.component.scss']
})
export class LowListTodoComponent implements OnInit {
  todos: ToDo[] = [];
  todo: ToDo;
  constructor(private todoService: TodoService,
              private activatedRouter: ActivatedRoute,
              private route: Router) { }

  ngOnInit(): void {
    this.todoService.low().subscribe(result => {
      this.todos = result;
    }, error => {
      console.log('Loi ' + error);
    });
    console.log(this.todoService.low());
  }
  editTodo(todo) {
    let index;
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id === todo.id) {
        index = i;
        break;
      }
    }
    todo.status = !todo.status;
    this.todos[index] = todo;
    this.todoService.edit(todo).subscribe(() => {
      console.log('thành công');
    }, error => {
      console.log(error);
    });
  }

  done(id) {
    let todo2;
    this.todoService.detail(id).subscribe(next => {
      todo2 = next;
      console.log(todo2);
      this.editTodo(todo2);
    }, error => {
      console.log(error);
    });
  }

  delete(id) {
    this.todoService.delete(id).subscribe(() => {
      alert('xóa thành công');
      location.reload();
    }, error => {
      console.log(error);
    });
    this.route.navigate(['']);
  }

  detail(id: string) {
    this.route.navigate(['detail-todo', id]);
  }
}
