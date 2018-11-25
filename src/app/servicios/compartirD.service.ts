import {Injectable} from '@angular/core';
import { TablaGeneralFila } from '../tablaGeneralFila';

@Injectable()
export class CompartirService {
    private datosTablaG: Array<TablaGeneralFila>;

    setDatos(valor){
        this.datosTablaG = valor;
    }

    getDatos(){
        return this.datosTablaG;
    }
} 