import {Component, OnInit} from '@angular/core';
import {ToDo} from '../../model/toDo';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TodoService} from '../../service/todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {
  todo: ToDo;
  addTodoForm: FormGroup;

  constructor(private todoService: TodoService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.addTodoForm = this.fb.group({name: [''], description: ['']});
  }

  addTodo() {
    this.todo = {
      name: this.addTodoForm.get('name').value,
      description: this.addTodoForm.get('description').value,
      status: false
    };
    this.todoService.create(this.todo).subscribe(() => {
      console.log('thành công!');
      location.reload();
    }, error => {
      console.log(error);
    });
  }

}
