import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTodoComponent } from './component/list-todo/list-todo.component';
import {HttpClientModule} from '@angular/common/http';
import { DetailTodoComponent } from './component/detail-todo/detail-todo.component';
import { CreateTodoComponent } from './component/create-todo/create-todo.component';
import { EditTodoComponent } from './component/edit-todo/edit-todo.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchComponent } from './component/search/search.component';
import { ListTodoRankComponent } from './component/list-todo-rank/list-todo-rank.component';
@NgModule({
  declarations: [
    AppComponent,
    ListTodoComponent,
    DetailTodoComponent,
    CreateTodoComponent,
    EditTodoComponent,
    SearchComponent,
    ListTodoRankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
