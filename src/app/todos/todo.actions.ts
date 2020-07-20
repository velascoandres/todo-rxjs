import {createAction, props} from '@ngrx/store';


export const crearTodo = createAction(
  '[TODO] Crea todo',
  props<{ texto: string }>(),
);

export const borrarTodo = createAction(
  '[TODO] Borrar todo',
  props<{ id: number }>(),
);

export const completarTodo = createAction(
  '[TODO] Completar todo',
  props<{ id: number, completado: boolean }>(),
);


export const editarTodo = createAction(
  '[TODO] Editar todo',
  props<{ id: number, texto: string }>(),
);

export const cambiarCompletadoGlobal = createAction(
  '[TODO] Cambiar completado global',
  props<{ completado: boolean }>(),
);

export const limpiarCompletados = createAction(
  '[TODO] Limpiar completados',
);
