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
    description: new FormControl(''),
    rank: new FormControl('')
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

  ngOnInit() {
  }


  editTodo() {
    const todo1 = {
      id: this.todo.id,
      status: this.todo.status,
      name: this.editTodoForm.value.name,
      description: this.editTodoForm.get('description').value,
      // rank: this.todo.rank,
      rank: this.editTodoForm.get('rank').value
    };
    if (!this.todo.name) {
      alert('chưa có tên!');
    } else {
      this.todoService.edit(todo1).subscribe(() => {
        alert("thành công!");
        console.log(todo1);
        location.reload();
      }, error => {
        console.log(error);
      });
    }

  }


}
