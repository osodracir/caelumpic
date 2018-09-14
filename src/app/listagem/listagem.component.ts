import { Component } from '@angular/core';
import { Foto } from '../foto/foto';
import { FotoService } from '../servicos/foto.service';

// Decorator ("anotação")
@Component({
  selector: 'listagem', // Notação CSS. Poderia ser #app-root (id) ou .app-root (class)
  templateUrl: './listagem.component.html'
})
// Compatível com ES6 (2015)
export class ListagemComponent {
  title: string = 'Caelum Pic';
  mensagem: string = '';
  listaFotos: Foto[] = [];

  constructor(private servico: FotoService) {
    servico.listar().subscribe(
      fotosApi => this.listaFotos = fotosApi,
      erro => console.log('Erro! ', erro)
    );
  }

  remover(foto: Foto) {
    this.servico.deletar(foto).subscribe(
      () => {
        this.mensagem = `Foto ${foto.titulo} apagada com sucesso.`;
        // Serão mantidas as fotos com ID diferente da foto apagada.
        this.listaFotos = this.listaFotos.filter((f) => f._id !== foto._id);
        setTimeout(() => this.mensagem = '', 2000);
      },
      erro => console.log(erro)
    );
  }
}
