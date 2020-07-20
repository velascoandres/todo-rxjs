import {Component, OnInit} from '@angular/core';
import {AppState} from '../../app.reducer';
import {Store} from '@ngrx/store';
import {establecerFiltro, filtrosValidos} from '../filtro/filtro.actions';
import {limpiarCompletados} from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  filtroActual: filtrosValidos = 'todos';
  filtrosValidos: filtrosValidos[] = ['completados', 'pendientes', 'todos'];
  pendientes: number = 0;

  constructor(
    private readonly store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.store
      .subscribe(
        (estado: AppState) => {
          this.filtroActual = estado.filtros;
          this.pendientes = estado.todos.filter(todo => !todo.completado).length;
        },
      );
  }

  cambiarFiltro(filtro: filtrosValidos) {
    this
      .store
      .dispatch(
        establecerFiltro({
          filtro,
        })
      );
  }

  limpiarCompletados() {
    this.store
      .dispatch(
        limpiarCompletados(),
      );
  }
}
