import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ToDo} from '../model/toDo';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  API_URL = 'http://localhost:9000/todos';

  constructor(private http: HttpClient) {
  }

  getList(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(this.API_URL);
  }

  detail(id): Observable<ToDo> {
    return this.http.get<ToDo>(this.API_URL + '/' + id);
  }

  delete(id): Observable<ToDo> {
    return this.http.delete<ToDo>(this.API_URL + `/${id}`);
  }

  create(todo: ToDo): Observable<ToDo> {
    return this.http.post<ToDo>(this.API_URL, todo);
  }

  edit(todo: ToDo): Observable<ToDo> {
    return this.http.put<ToDo>(this.API_URL, todo);
  }
}
