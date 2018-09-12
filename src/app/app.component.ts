import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Decorator ("anotação")
@Component({
  selector: 'app-root', // Notação CSS. Poderia ser #app-root (id) ou .app-root (class)
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// Compatível com ES6 (2015)
export class AppComponent {
  title :string = 'Caelum Pic';
  listaFotos :Foto[];

  constructor(http :HttpClient) {
    const URL = 'http://localhost:3000/v1/fotos';

    // Type casting em Angular?!
    const stream = http.get(URL) as Observable<Foto[]>;
    stream.subscribe(dados => this.listaFotos = dados, erro => console.log('Erro! ', erro));
  }
}
