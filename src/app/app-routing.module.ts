import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailTodoComponent} from './component/detail-todo/detail-todo.component';
import {EditTodoComponent} from './component/edit-todo/edit-todo.component';
import {ListTodoComponent} from './component/list-todo/list-todo.component';
import {CreateTodoComponent} from './component/create-todo/create-todo.component';
import {SearchComponent} from './component/search/search.component';
import {ListTodoRankComponent} from './component/list-todo-rank/list-todo-rank.component';
import {HightListTodoComponent} from './component/hight-list-todo/hight-list-todo.component';
import {MediumListTodoComponent} from './component/medium-list-todo/medium-list-todo.component';
import {LowListTodoComponent} from './component/low-list-todo/low-list-todo.component';


const routes: Routes = [
  {
    path: 'detail-todo/:id',
    component: DetailTodoComponent
  },
  {
    path: 'edit-todo/:id',
    component: EditTodoComponent
  },
  {
    path: '',
    component: ListTodoComponent
  },
  {
    path: 'list-todo-rank',
    component: ListTodoRankComponent
  },
  {
    path: 'create-todo',
    component: CreateTodoComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'hight-list-todo',
    component: HightListTodoComponent
  },
  {
    path: 'medium-list-todo',
    component: MediumListTodoComponent
  },
  {
    path: 'low-list-todo',
    component: LowListTodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
