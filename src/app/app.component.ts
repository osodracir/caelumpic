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

  constructor(http :HttpClient) {}
}
