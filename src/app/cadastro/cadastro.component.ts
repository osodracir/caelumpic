import { Component } from '@angular/core';
import { Foto } from '../foto/foto';

@Component({
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
    foto: Foto = new Foto();

    salvar(evento: Event) {
        evento.preventDefault();
        console.log(this.foto);
    }
}