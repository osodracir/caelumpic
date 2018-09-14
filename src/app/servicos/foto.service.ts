import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Foto } from "../foto/foto";

@Injectable()
export class FotoService {

    private url: string = 'http://localhost:3000/v1/fotos';

    private cabecalhos = {
        headers: new HttpHeaders({
            "Content-type": "application/json"
        })
    };

    constructor(private http: HttpClient) {
    }

    listar() : Observable<Foto[]> {
        return this.http.get<Foto[]>(this.url);
    }

    obter(id: string) : Observable<Foto> {
        return this.http.get<Foto>(`${this.url}/${id}`);
    }

    alterar(foto: Foto) : Observable<Object> {
        return this.http.put(`${this.url}/${foto._id}`, foto, this.cabecalhos);
    }

    cadastrar(foto: Foto) : Observable<Object> {
        /* Se for só post(), não vai. */
        return this.http.post(this.url, foto, this.cabecalhos);
    }

    deletar(foto: Foto): Observable<Object> {
        return this.http.delete(`${this.url}/${foto._id}`);
    }
}