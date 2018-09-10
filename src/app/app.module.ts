import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FotoModule // Se não colocar aqui, NÃO VAI!
  ],
  providers: [],
  bootstrap: [AppComponent] // Este é o módulo raiz.
})
export class AppModule { }
