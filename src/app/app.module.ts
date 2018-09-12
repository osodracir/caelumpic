import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { PainelModule } from './painel/painel.module';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ROTEAMENTO } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Coloca o módulo aqui para poder injetar.
    FotoModule, // Se não colocar aqui, NÃO VAI!
    PainelModule,
    ROTEAMENTO  // Importando os mapeamentos entre URLs e Componentes.
  ],
  providers: [],
  bootstrap: [AppComponent] // Este é o módulo raiz.
})
export class AppModule { }
