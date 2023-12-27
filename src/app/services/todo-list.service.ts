import {Injectable} from '@angular/core';
import {TodoListModels} from "../models/todo-list.models";

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  getTodoList(): TodoListModels[] {
    return [
      {id: 1, name: 'Item 1', date: new Date()}
      , {id: 2, name: 'Item 2', date: new Date()}

    ]
  }
}
