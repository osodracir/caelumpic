import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { PainelModule } from './painel/painel.module';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ROTEAMENTO } from './app.routes';
import { FotoService } from './servicos/foto.service';

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Coloca o módulo aqui para poder injetar.
    FormsModule,
    FotoModule, // Se não colocar aqui, NÃO VAI!
    PainelModule,
    ROTEAMENTO  // Importando os mapeamentos entre URLs e Componentes.
  ],
  // Aqui são colocados os serviços a serem injetados.
  providers: [
    FotoService
  ],
  bootstrap: [AppComponent] // Este é o módulo raiz.
})
export class AppModule { }
