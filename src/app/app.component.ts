import { Component } from '@angular/core';

// Decorator ("anotação")
@Component({
  selector: 'app-root', // Notação CSS. Poderia ser #app-root (id) ou .app-root (class)
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// Compatível com ES6 (2015)
export class AppComponent {
  title = 'Caelum Pic';

  constructor() {
    let i = 0; // ES6. Mais controlado do que o 'var'.
    setInterval(() => {
      this.title = this.title + ' - ' + i;
      i++;
    }, 2000);
  }
}
