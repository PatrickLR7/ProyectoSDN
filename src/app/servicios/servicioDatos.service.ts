import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ServicioDatos{
    private getDatosURL = 'http://localhost:8080/datosjsonprueba.json';
    private pruebaDatos = [];

    constructor(private http: HttpClient){

    }

    jsonServicio(): Promise<any>{
        return this.http.get(this.getDatosURL).toPromise();
    }
}