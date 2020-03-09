import {Component, OnInit} from '@angular/core';
import {ToDo} from '../../model/toDo';
import {TodoService} from '../../service/todo.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {
  todo: ToDo;
  sub: Subscription;
  editTodoForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl('')
  });

  constructor(private todoService: TodoService,
              private activatedRouter: ActivatedRoute,
              private route: Router) {
    this.sub = this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.todoService.detail(id).subscribe(next => {
        this.todo = next;
        console.log(this.todo);
      }, error => {
        console.log(error);
      });
    });
  }

  ngOnInit() {}


  editTodo() {
    const todo1 = {
      id: this.todo.id,
      status: this.todo.status,
      name: this.editTodoForm.value.name,
      description: this.editTodoForm.value.description
    };
    this.todoService.edit(todo1).subscribe(() => {
      console.log(todo1);
      location.reload();
    }, error => {
      console.log(error);
    });
  }

}
