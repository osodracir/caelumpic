import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FotoService } from '../servicos/foto.service';
import { Foto } from '../foto/foto';

@Component({
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
    foto: Foto = new Foto();

    /* Declarando-se o parâmetro do construtor como 'private', gera um atributo
       com o mesmo nome. */
    constructor(private servico: FotoService, private roteador: Router) {
    }

    salvar() {
        this.servico.cadastrar(this.foto).subscribe(
            id => {
                console.log('Cadastro de fotos. ' + id);
                this.foto = new Foto();
                // Retorna para a página de listagem.
                this.roteador.navigate(['']);
            },
            erro => console.log(erro)
        );
    }
}