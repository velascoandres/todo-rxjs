import {Action, createReducer, on} from '@ngrx/store';
import * as todoActions from './todo.actions';
import {Todo} from './models/todo.model';

const estadoInicial: Todo[] = [
  new Todo('salvar al mundo'),
];

const _todoReducer = createReducer(
  estadoInicial,
  on(
    todoActions.crearTodo, (
      state, {texto},
    ) =>
      [
        ...state,
        new Todo(texto),
      ], // No se usa el push porque estaria mutando el arreglo
  ),
  on(
    todoActions.borrarTodo,
    (state: Todo[], {id}) => {
      return state.filter(
        (todo: Todo) => {
          return todo.id !== id;
        },
      );
    },
  ),
  on(
    todoActions.completarTodo,
    (state: Todo[], {id, completado}) => {
      return state.map(
        (todo: Todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completado,
            }
          } else {
            return todo;
          }
        }
      );
    }
  ),
  on(
    todoActions.editarTodo,
    (state: Todo[], {id, texto}) => {
      return state.map(
        callbackModificar({id, texto}, 'id'),
      );
    }
  ),
  on(
    todoActions.cambiarCompletadoGlobal,
    (state: Todo[], {completado}) => {
      return state.map(
        // (todo: Todo) => {
        //   return {
        //     ...todo,
        //     completado,
        //   }
        // }
        callbackModificar<Todo, { completado }, 'completado'>({completado}),
      );
    },
  ),
  on(
    todoActions.limpiarCompletados,
    state => state.filter(
      (todo: Todo) => !todo.completado,
    ),
  ),
);

export function todoReducer(
  state: Todo[], action: Action,
) {
  return _todoReducer(state, action);
}


const callbackModificar = <S, T, K extends keyof T>(
  valores: T,
  criterio?: K,
) => {
  return (
    state: S & T,
  ): S => {
    if (criterio) {
      const valorCriterio = state[criterio];
      const valor = valores[criterio];
      if (valor && valorCriterio && valorCriterio === valor) {
        return {
          ...state,
          ...valores,
        }
      } else {
        return state;
      }
    } else {
      return {
        ...state,
        ...valores,
      }
    }
  }
}
