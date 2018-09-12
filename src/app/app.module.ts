import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { PainelModule } from './painel/painel.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Coloca o módulo aqui para poder injetar.
    FotoModule, // Se não colocar aqui, NÃO VAI!
    PainelModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Este é o módulo raiz.
})
export class AppModule { }
