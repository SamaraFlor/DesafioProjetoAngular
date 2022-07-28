import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders,  } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class CursoService {

    private baseUrl = 'http://localhost:3002/cursos';

    httpOptions = {
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }

    constructor(private http: HttpClient) { }

    readCurso() {
        return this.http.get(this.baseUrl);
    }

}
