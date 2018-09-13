import { Component } from '@angular/core';
import { Foto } from '../foto/foto';

@Component({
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
    foto: Foto = new Foto();

    salvar() {
        console.log(this.foto);
    }
}