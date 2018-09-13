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

    cadastrar(foto: Foto) : Observable<Object> {
        /* Se for só post(), não vai. */
        return this.http.post(this.url, foto, this.cabecalhos);
    }
}