import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Coloca o módulo aqui para poder injetar.
    FotoModule // Se não colocar aqui, NÃO VAI!
  ],
  providers: [],
  bootstrap: [AppComponent] // Este é o módulo raiz.
})
export class AppModule { }
