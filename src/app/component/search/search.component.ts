import { Component, OnInit } from '@angular/core';
import {ToDo} from '../../model/toDo';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TodoService} from '../../service/todo.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  todo: ToDo;
  searchTodoFrom: FormGroup;
  todoList: ToDo[];
  constructor(private todoService: TodoService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private route: Router) {
  }

  ngOnInit(): void {
      this.searchTodoFrom = this.fb.group({name : ''});
      console.log(name);
  }

  search() {
    this.todoService.search(this.searchTodoFrom.value.name).subscribe(next => {
      this.todoList = next;
    }, error => {
      console.log(error);
    });
  }
  editTodo(todo) {
    let index;
    for (let i = 0; i < this.todoList.length; i++) {
      if (this.todoList[i].id === todo.id) {
        index = i;
        break;
      }
    }
    todo.status = !todo.status;
    this.todoList[index] = todo;
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
    this.route.navigate(['list-todo-rank']);
  }

  detail(id: string) {
    this.route.navigate(['detail-todo', id]);
  }
}
