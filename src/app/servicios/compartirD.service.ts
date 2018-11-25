import {Injectable} from '@angular/core';
import { TablaGeneralFila } from '../tablaGeneralFila';

@Injectable()
export class CompartirService {
    private datosTablaG: Array<TablaGeneralFila>;
    private datosTablaEducacion: Array<TablaGeneralFila>;
    private datosTablaBlogs: Array<TablaGeneralFila>;
    private datosTablaDeportes: Array<TablaGeneralFila>;
    private datosTablaVideojuegos: Array<TablaGeneralFila>;
    private datosTablaWikis: Array<TablaGeneralFila>;
    private datosTablaForos: Array<TablaGeneralFila>;
    private datosTablaVideos: Array<TablaGeneralFila>;
    private datosTablaNoticias: Array<TablaGeneralFila>;
    private datosTablaComercios: Array<TablaGeneralFila>;
    private datosTablaMusica: Array<TablaGeneralFila>;

    setDatos(valor){
        this.datosTablaG = valor;
    }

    getDatos(){
        return this.datosTablaG;
    }

    setDatosEducacion(valor){
        this.datosTablaEducacion = valor;
    }

    getDatosEducacion(){
        return this.datosTablaEducacion;
    }

    setDatosBlogs(valor){
        this.datosTablaBlogs = valor;
    }

    getDatosBlogs(){
        return this.datosTablaBlogs;
    }

    setDatosDeportes(valor){
        this.datosTablaDeportes = valor;
    }

    getDatosDeportes(){
        return this.datosTablaDeportes;
    }

    setDatosVideojuegos(valor){
        this.datosTablaVideojuegos = valor;
    }

    getDatosVideojuegos(){
        return this.datosTablaVideojuegos;
    }

    setDatosWikis(valor){
        this.datosTablaWikis = valor;
    }

    getDatosWikis(){
        return this.datosTablaWikis;
    }

    setDatosForos(valor){
        this.datosTablaForos = valor;
    }

    getDatosForos(){
        return this.datosTablaForos;
    }

    setDatosVideos(valor){
        this.datosTablaVideos = valor;
    }

    getDatosVideos(){
        return this.datosTablaVideos;
    }

    setDatosNoticias(valor){
        this.datosTablaNoticias = valor;
    }

    getDatosNoticias(){
        return this.datosTablaNoticias;
    }

    setDatosComercios(valor){
        this.datosTablaComercios = valor;
    }

    getDatosComercios(){
        return this.datosTablaComercios;
    }

    setDatosMusica(valor){
        this.datosTablaMusica = valor;
    }

    getDatosMusica(){
        return this.datosTablaMusica;
    }

} 