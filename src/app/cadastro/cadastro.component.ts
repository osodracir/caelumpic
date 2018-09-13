import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Foto } from '../foto/foto';
import { Router } from '@angular/router';

@Component({
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
    http: HttpClient;
    roteador: Router;
    foto: Foto = new Foto();

    constructor(http: HttpClient, roteador: Router) {
        this.http = http;
        this.roteador = roteador;
    }

    salvar() {
        const URL = 'http://localhost:3000/v1/fotos';
        const OPCOES = {
            headers: new HttpHeaders({
                "Content-type": "application/json"
            })
        };
        /* Se for só post(), não vai. */
        this.http.post(URL, this.foto, OPCOES).subscribe(
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