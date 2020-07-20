import {Component, OnInit} from '@angular/core';
import {AppState} from '../../app.reducer';
import {Store} from '@ngrx/store';
import {cambiarCompletadoGlobal} from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  seleccionado: boolean;

  constructor(
    private readonly store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
  }

  cambiarTodos() {
    this.seleccionado = !this.seleccionado;
    this.store.dispatch(
      cambiarCompletadoGlobal(
        {
          completado: this.seleccionado,
        }
      ),
    );
  }

}
