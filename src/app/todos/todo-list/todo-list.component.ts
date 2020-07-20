import {Component, OnInit} from '@angular/core';
import {AppState} from '../../app.reducer';
import {Store} from '@ngrx/store';
import {Todo} from '../models/todo.model';
import {filtrosValidos} from '../filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  filtroActual: filtrosValidos = 'todos';

  constructor(
    private readonly store: Store<AppState>,
  ) {
  }

  ngOnInit(): void {
    // this.store
    //   .select('todos')
    //   .subscribe(
    //     (todos: Todo[]) => {
    //       this.todos = todos;
    //     }
    //   );
    this.store
      .subscribe(
        (stado: AppState) => {
          this.todos = stado.todos;
          this.filtroActual = stado.filtros;
        }
      );
  }

}
