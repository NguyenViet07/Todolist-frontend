import {Component, OnInit} from '@angular/core';
import {ToDo} from '../../model/toDo';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TodoService} from '../../service/todo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {
  todo: ToDo;
  addTodoForm: FormGroup;

  constructor(private todoService: TodoService,
              private fb: FormBuilder,
              private route: Router) {
  }

  ngOnInit(): void {
    this.addTodoForm = this.fb.group({name: [''], description: [''], rank: ['']});

  }

  addTodo() {
    this.todo = {
      name: this.addTodoForm.get('name').value,
      description: this.addTodoForm.get('description').value,
      status: false,
      rank: this.addTodoForm.get('rank').value
    };
    if (!this.todo.name) {
      alert('chưa có tên!');
    } else if (!this.todo.rank) {
      alert('chưa chọn mức độ ưu tiên');
    } else {
      this.todoService.create(this.todo).subscribe(() => {
        console.log('thành công!');
        console.log(this.todo);
        location.reload();
      }, error => {
        console.log(error);
      });
    }
  }


  all() {
    this.route.navigate(['']);
  }
  rank() {
    this.route.navigate(['list-todo-rank']);
  }
  higth() {
    this.route.navigate(['hight-list-todo']);
  }
  medium() {
    this.route.navigate(['medium-list-todo']);
  }
  low() {
    this.route.navigate(['low-list-todo']);
  }
  search() {
    this.route.navigate(['search']);
  }


}
