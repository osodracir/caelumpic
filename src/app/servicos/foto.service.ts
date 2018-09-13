import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Foto } from "../foto/foto";

@Injectable()
export class FotoService {

    private url: string = 'http://localhost:3000/v1/fotos';

    constructor(private http: HttpClient) {
    }

    listar() : Observable<Foto[]> {
        return this.http.get<Foto[]>(this.url);
    }
}