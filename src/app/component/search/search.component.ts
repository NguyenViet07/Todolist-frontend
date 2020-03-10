import { Component, OnInit } from '@angular/core';
import {ToDo} from '../../model/toDo';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TodoService} from '../../service/todo.service';
import {ActivatedRoute} from '@angular/router';

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
              private fb: FormBuilder) {
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

}
