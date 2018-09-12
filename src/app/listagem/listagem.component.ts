import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Decorator ("anotação")
@Component({
  selector: 'listagem', // Notação CSS. Poderia ser #app-root (id) ou .app-root (class)
  templateUrl: './listagem.component.html'
})
// Compatível com ES6 (2015)
export class ListagemComponent {
  title :string = 'Caelum Pic';
  listaFotos :Foto[];

  constructor(http :HttpClient) {
    const URL = 'http://localhost:3000/v1/fotos';

    // Type casting em Angular?!
    const stream = http.get(URL) as Observable<Foto[]>;
    stream.subscribe(
        fotosApi => this.listaFotos = fotosApi,
        erro => console.log('Erro! ', erro)
    );
  }
}