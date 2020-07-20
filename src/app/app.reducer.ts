import {Todo} from './todos/models/todo.model';
import {ActionReducerMap} from '@ngrx/store';
import {todoReducer} from './todos/todo.reducer';
import {filtrosValidos} from './todos/filtro/filtro.actions';
import {filtroReducer} from './todos/filtro/filtro.reducer';

export interface AppState {
  todos: Todo[],
  filtros: filtrosValidos,
}


export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtros: filtroReducer,
}
