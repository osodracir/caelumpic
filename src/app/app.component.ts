import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Decorator ("anotação")
@Component({
  selector: 'app-root', // Notação CSS. Poderia ser #app-root (id) ou .app-root (class)
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// Compatível com ES6 (2015)
export class AppComponent {
  title :string = 'Caelum Pic';
  listaFotos;

  constructor(http :HttpClient) {
    const URL = 'http://localhost:3000/v1/fotos';
    const that = this;

    const stream = http.get(URL);
    stream.subscribe(function(dados) {
      that.listaFotos = dados;
    }, function(erro) {
      console.log('Erro! ', erro)
    });
  }
}
