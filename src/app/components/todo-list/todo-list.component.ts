import {Component, OnInit} from '@angular/core';
import {TodoListModels} from "../../models/todo-list.models";
import {TodoListService} from "../../services/todo-list.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  list: TodoListModels[] = [];

  constructor(private service: TodoListService) {
  }

  ngOnInit(): void {
    this.list = this.service.getTodoList();
  }

}
