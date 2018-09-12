import { Component } from '@angular/core';

// Decorator ("anotação")
@Component({
  selector: 'app-root', // Notação CSS. Poderia ser #app-root (id) ou .app-root (class)
  template: '<router-outlet></router-outlet>' // Passará a usar o ROTEAMENTO.
})
// Compatível com ES6 (2015)
export class AppComponent {}
