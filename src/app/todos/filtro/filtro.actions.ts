import {createAction, props} from '@ngrx/store';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export const establecerFiltro = createAction(
  '[FILTRO] establecer fitlro',
  props<{ filtro: filtrosValidos }>(),
);
