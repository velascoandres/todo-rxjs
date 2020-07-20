import {Action, createReducer, on} from '@ngrx/store';
import {establecerFiltro, filtrosValidos} from './filtro.actions';

const estadoInicial: filtrosValidos = 'todos';

const _filtroReducer = createReducer(
  estadoInicial,
  on(
    establecerFiltro,
    (state: filtrosValidos, {filtro}) => filtro,
  ),
)

export function filtroReducer(
  state: filtrosValidos,
  accion: Action,
) {
  return _filtroReducer(state, accion);
}
