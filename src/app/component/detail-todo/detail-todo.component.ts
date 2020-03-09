import {Component, OnInit} from '@angular/core';
import {ToDo} from '../../model/toDo';
import {Subscription} from 'rxjs';
import {TodoService} from '../../service/todo.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-detail-todo',
  templateUrl: './detail-todo.component.html',
  styleUrls: ['./detail-todo.component.scss']
})
export class DetailTodoComponent implements OnInit {
  todo: ToDo;
  sub: Subscription;

  constructor(private todoService: TodoService,
              private activatedRouter: ActivatedRoute,
              private route: Router) {
  }

  ngOnInit(): void {
    this.sub = this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.todoService.detail(id).subscribe(next => {
        this.todo = next;
        console.log('thành công');
      }, error => {
        console.log(error);
      });
    });
  }

  done() {
    const todo = {status: this.todo.status};
    this.todo.status = !this.todo.status;
    this.todoService.edit(this.todo).subscribe(() => {
      console.log('thành công');
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

}
