import { Component, OnInit } from '@angular/core';
import { ServicioDatos} from './servicios/servicioDatos.service';
import { TablaGeneralFila } from './tablaGeneralFila';
import { Router } from '@angular/router'
import { CompartirService } from './servicios/compartirD.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 

export class AppComponent implements OnInit {
  title = 'angular-proyecto-sdn';
  private pruebaDatos;
  private clasificadorJ = require('./utiles/clasificador.json');

  public tablaGeneral: Array<TablaGeneralFila>;
  public tablaEducacion: Array<TablaGeneralFila>;
  public tablaBlogs: Array<TablaGeneralFila>;
  public tablaDeportes: Array<TablaGeneralFila>;
  public tablaVideoJuegos: Array<TablaGeneralFila>;
  public tablaWikis: Array<TablaGeneralFila>;
  public tablaForos: Array<TablaGeneralFila>;
  public tablaVideos: Array<TablaGeneralFila>;
  public tablaNoticias: Array<TablaGeneralFila>;
  public tablaComercios: Array<TablaGeneralFila>;
  public tablaMusica: Array<TablaGeneralFila>;
  
  opciones = [
    {"id": 1, "name": "Pagina Principal"},
    {"id": 2, "name": "Tablas por Tema"},
    {"id": 3, "name": "Grafico"},
    {"id": 4, "name": "Grafico Circular"}
  ]

  constructor(private servDatos: ServicioDatos, private router: Router, private servComp: CompartirService){
    this.pruebaDatos = [];
    this.tablaGeneral = [];
    this.tablaEducacion = [];
    this.tablaBlogs = [];
    this.tablaDeportes = [];  
    this.tablaVideoJuegos = [];
    this.tablaWikis = [];
    this.tablaForos = [];
    this.tablaVideos = [];
    this.tablaNoticias = [];
    this.tablaComercios = [];
    this.tablaMusica = [];
  }

  ngOnInit(): void{
    //llamar a pedir datos.
    this.router.navigate(['']);
    this.pedirDatos();
  }

  onSelect(opcion){
    if(opcion.name == "Pagina Principal"){
      this.router.navigate(['/tablaGeneralComp',this.tablaGeneral]);
    }
  }

  pedirDatos(): void{
    this.servDatos.jsonServicio().then(response => {
      this.pruebaDatos = response;
      console.log(this.pruebaDatos);
      this.llenarDatos();
    });
  }

  llenarDatos(): void{
    const body = this.pruebaDatos.OFPFlowStatsReply.body;

    for(let i = 0; i < (body.length); i++){
       const match = body[i].OFPFlowStats.match.OFPMatch.oxm_fields;
       
       if(match.length > 3){
        const tablaGeneralFila = new TablaGeneralFila(
          match[match.length-2].OXMTlv.value,
          match[match.length-1].OXMTlv.value,
          body[i].OFPFlowStats.byte_count,
        );
        this.tablaGeneral.push(tablaGeneralFila);
        this.clasificarDatos(tablaGeneralFila);
       }
    }

    this.servComp.setDatos(this.tablaGeneral);
  }

  clasificarDatos(tablaGeneralFila): void{
    let flujo = tablaGeneralFila;
    let tipos = this.clasificadorJ.clasificador;
    let resultado;

    let clasificado = false;
    
    for(let i = 0; i < tipos.length && !clasificado; i++){
      for(let j = 0; j < tipos[i].ips.length && !clasificado; j++){
        if((flujo.ipFuente).toString() == tipos[i].ips[j]){
          resultado = tipos[i].nombre;
          clasificado = true;
        }
      }
    }

    switch(resultado){
      case"educacion":{
        this.tablaEducacion.push(tablaGeneralFila);
        break;
      }
      case "blogs":{
        this.tablaBlogs.push(tablaGeneralFila);
        break;
      }
      case "deportes":{
        this.tablaDeportes.push(tablaGeneralFila);
        break;
      }
      case "videojuegos":{
        this.tablaVideoJuegos.push(tablaGeneralFila);
        break;
      }
      case "wikis":{
        this.tablaWikis.push(tablaGeneralFila);
        break;
      }
      case "foros":{
        this.tablaForos.push(tablaGeneralFila);
        break;
      }
      case "videos":{
        this.tablaVideos.push(tablaGeneralFila);
        break;
      }
      case "noticias":{
        this.tablaNoticias.push(tablaGeneralFila);
        break;
      }            
      case "comercioelectronico":{
        this.tablaComercios.push(tablaGeneralFila);
        break;
      }      
      case "musica":{
        this.tablaMusica.push(tablaGeneralFila);
        break;
      }
      default:{
        break;
      }
    }
  }
}
