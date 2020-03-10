import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailTodoComponent} from './component/detail-todo/detail-todo.component';
import {EditTodoComponent} from './component/edit-todo/edit-todo.component';
import {ListTodoComponent} from './component/list-todo/list-todo.component';
import {CreateTodoComponent} from './component/create-todo/create-todo.component';
import {SearchComponent} from './component/search/search.component';


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
    path: 'create-todo',
    component: CreateTodoComponent
  },
  {
    path: 'search',
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
