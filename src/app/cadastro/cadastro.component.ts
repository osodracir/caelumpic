import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    constructor(private servico: FotoService, private roteador: Router, private rota: ActivatedRoute) {
        const id = rota.snapshot.params.idFoto;
        if(id) {
            servico.obter(id).subscribe(
                fotoApi => this.foto = fotoApi,
                erro => console.log(erro)
            );
        }
    }

    salvar() {
        if(this.foto._id) {
            this.servico.alterar(this.foto).subscribe(
                () => {
                    console.log('Alteração de foto. ' + this.foto._id);
                    this.foto = new Foto();
                    // Retorna para a página de listagem.
                    this.roteador.navigate(['']);
                },
                erro => console.log(erro)
            );
        }
        else {
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
}