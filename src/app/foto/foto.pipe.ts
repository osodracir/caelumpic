import { Pipe, PipeTransform } from "@angular/core";
import { Foto } from "./foto";

@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform {
    transform(listaFotos: Foto[], digitado: string) : Foto[] {
        return listaFotos.filter(foto => foto.titulo.toLowerCase().includes(digitado.toLowerCase()));
    }
}