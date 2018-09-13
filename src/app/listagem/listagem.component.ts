import { Component } from '@angular/core';
import { Foto } from '../foto/foto';
import { FotoService } from '../servicos/foto.service';

// Decorator ("anotação")
@Component({
  selector: 'listagem', // Notação CSS. Poderia ser #app-root (id) ou .app-root (class)
  templateUrl: './listagem.component.html'
})
// Compatível com ES6 (2015)
export class ListagemComponent {
  title :string = 'Caelum Pic';
  listaFotos :Foto[];

  constructor(private fotoService: FotoService) {
    fotoService.listar().subscribe(
      fotosApi => this.listaFotos = fotosApi,
      erro => console.log('Erro! ', erro)
    );
  }
}
