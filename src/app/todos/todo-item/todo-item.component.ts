import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Todo} from '../models/todo.model';
import {FormControl, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {borrarTodo, completarTodo, editarTodo} from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('inputFisico') txtFisico: ElementRef;
  checkCompletado: FormControl;
  txtInput: FormControl;
  editando: boolean;

  constructor(
    private readonly store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.checkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    this.checkCompletado.valueChanges.subscribe(
      (valor: boolean) => {
        this.store.dispatch(
          completarTodo({
              id: this.todo.id,
              completado: valor,
            },
          ),
        );
      }
    );
  }

  editar() {
    this.txtInput.setValue(this.todo.texto);
    this.editando = true;
    setTimeout(
      () => {
        this.txtFisico.nativeElement.select();
      }, 1
    )
  }

  terminarEdicion() {
    this.editando = false;
    const estaValido = !this.txtInput.invalid;
    const cambioElValor = this.todo.texto !== this.txtInput.value;
    const debeDispararStore = estaValido && cambioElValor;
    if (debeDispararStore) {
      this.store.dispatch(
        editarTodo(
          {
            id: this.todo.id,
            texto: this.txtInput.value,
          }
        ),
      );
    }
  }

  borrar() {
    this.store.dispatch(
      borrarTodo(
        {
          id: this.todo.id,
        }
      ),
    );
  }
}
