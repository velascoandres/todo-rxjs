import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {crearTodo} from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;

  constructor(
    private readonly store: Store<AppState>
  ) {
    this.txtInput = new FormControl('Hola', Validators.required);
  }

  ngOnInit(): void {
  }

  agregar() {
    const esValido = this.txtInput.valid;
    if (esValido) {
      const valor = this.txtInput.value;
      this.store.dispatch(
        crearTodo(
          {
            texto: valor,
          }
        ),
      );
      this.txtInput.reset();
    }
  }

}
