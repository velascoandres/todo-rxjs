import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {TodoModule} from './todos/todo.module';
import {StoreModule} from '@ngrx/store';
import {todoReducer} from './todos/todo.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {ReactiveFormsModule} from '@angular/forms';
import {filtroReducer} from './todos/filtro/filtro.reducer';
import {appReducers} from './app.reducer';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    StoreModule
      .forRoot(
        appReducers,
      ),
    StoreDevtoolsModule
      .instrument(
        {
          maxAge: 25,
          logOnly: environment.production,
        },
      ),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
