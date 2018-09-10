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
    var i = 0;
    setInterval(() => {
      this.title = this.title + ' - ' + i;
      i++;
    }, 2000);
  }
}
