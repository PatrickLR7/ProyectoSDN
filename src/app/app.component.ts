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
  public datosGrafico: Array<number>;
  public datosGraficoPie: Array<number>;
  
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
    this.datosGrafico = [];
    this.datosGraficoPie = [];
  }

  ngOnInit(): void{
    //llamar a pedir datos.
    this.router.navigate(['paginaprincipal']);
    this.pedirDatos();
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
    this.servComp.setDatosEducacion(this.tablaEducacion);
    this.servComp.setDatosDeportes(this.tablaDeportes);
    this.servComp.setDatosBlogs(this.tablaBlogs);
    this.servComp.setDatosVideojuegos(this.tablaVideoJuegos);
    this.servComp.setDatosForos(this.tablaForos);
    this.servComp.setDatosWikis(this.tablaWikis);
    this.servComp.setDatosComercios(this.tablaComercios);
    this.servComp.setDatosVideos(this.tablaVideos);
    this.servComp.setDatosMusica(this.tablaMusica);
    this.servComp.setDatosNoticias(this.tablaNoticias);
    this.guardarDatosGrafico(); /* Se llama al metodo para calcular la grafica una vez que las tablas de cada categoria estan llenas. */ 
    this.guardarDatosPie();  
  }

  clasificarDatos(tablaGeneralFila): void {
    let flujo = tablaGeneralFila;
    let tipos = this.clasificadorJ.clasificador;
    let resultado;

    let clasificado = false;
    
    for(let i = 0; i < tipos.length && !clasificado; i++) {
      for(let j = 0; j < tipos[i].ips.length && !clasificado; j++) {
        if((flujo.ipFuente).toString() == tipos[i].ips[j]) {
          resultado = tipos[i].nombre;
          clasificado = true;
        }
      }
    }

    switch(resultado) {
      case"educacion": {
        this.tablaEducacion.push(tablaGeneralFila);
        break;
      }
      case "blogs": {
        this.tablaBlogs.push(tablaGeneralFila);
        break;
      }
      case "deportes": {
        this.tablaDeportes.push(tablaGeneralFila);
        break;
      }
      case "videojuegos": {
        this.tablaVideoJuegos.push(tablaGeneralFila);
        break;
      }
      case "wikis": {
        this.tablaWikis.push(tablaGeneralFila);
        break;
      }
      case "foros": {
        this.tablaForos.push(tablaGeneralFila);
        break;
      }
      case "videos": {
        this.tablaVideos.push(tablaGeneralFila);
        break;
      }
      case "noticias": {
        this.tablaNoticias.push(tablaGeneralFila);
        break;
      }            
      case "comercioelectronico": {
        this.tablaComercios.push(tablaGeneralFila);
        break;
      }      
      case "musica": {
        this.tablaMusica.push(tablaGeneralFila);
        break;
      }
      default:{
        break;
      }
    }
  }

  /* Este metodo representa la cantidad total de bytes por cada categoria */
  guardarDatosGrafico(): void {
    let res = 0;

    for(let i = 0; i < this.tablaEducacion.length; i++) {
      res = res + this.tablaEducacion[i].cantBytes;
    }
    this.datosGrafico.push(res);
    res = 0;


    for(let i = 0; i < this.tablaBlogs.length; i++) {
      res = res + this.tablaBlogs[i].cantBytes;
    }
    this.datosGrafico.push(res);
    res = 0;


    for(let i = 0; i < this.tablaDeportes.length; i++) {
      res = res + this.tablaDeportes[i].cantBytes;
    }
    this.datosGrafico.push(res);
    res = 0;


    for(let i = 0; i < this.tablaVideoJuegos.length; i++) {
      res = res + this.tablaVideoJuegos[i].cantBytes;
    }
    this.datosGrafico.push(res);
    res = 0;


    for(let i = 0; i < this.tablaWikis.length; i++) {
      res = res + this.tablaWikis[i].cantBytes;
    }
    this.datosGrafico.push(res);
    res = 0;


    for(let i = 0; i < this.tablaForos.length; i++) {
      res = res + this.tablaForos[i].cantBytes;
    }
    this.datosGrafico.push(res);
    res = 0;


    for(let i = 0; i < this.tablaVideos.length; i++) {
      res = res + this.tablaVideos[i].cantBytes;
    }
    this.datosGrafico.push(res);
    res = 0;


    for(let i = 0; i < this.tablaNoticias.length; i++) {
      res = res + this.tablaNoticias[i].cantBytes;
    }
    this.datosGrafico.push(res);
    res = 0;


    for(let i = 0; i < this.tablaComercios.length; i++) {
      res = res + this.tablaComercios[i].cantBytes;
    }
    this.datosGrafico.push(res);
    res = 0;


    for(let i = 0; i < this.tablaMusica.length; i++) {
      res = res + this.tablaMusica[i].cantBytes;
    }
    this.datosGrafico.push(res);
    res = 0;


    this.servComp.setDatosGrafico(this.datosGrafico); 
  }

  /* Este metodo representa el porcentaje de cada categoria sobre 100. */
  guardarDatosPie(): void {
    let res = 0;
    let totalBytes = 0;

    for(let i = 0; i < this.tablaGeneral.length; i++) {
      totalBytes = totalBytes + this.tablaGeneral[i].cantBytes;
    }

    for(let i = 0; i < this.tablaEducacion.length; i++) {
      res = res + this.tablaEducacion[i].cantBytes;
    }
    res = (res / totalBytes) * 100;
    this.datosGraficoPie.push(res);
    res = 0;


    for(let i = 0; i < this.tablaBlogs.length; i++) {
      res = res + this.tablaBlogs[i].cantBytes;
    }
    res = (res / totalBytes) * 100;
    this.datosGraficoPie.push(res);
    res = 0;


    for(let i = 0; i < this.tablaDeportes.length; i++) {
      res = res + this.tablaDeportes[i].cantBytes;
    }
    res = (res / totalBytes) * 100;;
    this.datosGraficoPie.push(res);
    res = 0;


    for(let i = 0; i < this.tablaVideoJuegos.length; i++) {
      res = res + this.tablaVideoJuegos[i].cantBytes;
    }
    res = (res / totalBytes) * 100;
    this.datosGraficoPie.push(res);
    res = 0;


    for(let i = 0; i < this.tablaWikis.length; i++) {
      res = res + this.tablaWikis[i].cantBytes;
    }
    res = (res / totalBytes) * 100;
    this.datosGraficoPie.push(res);
    res = 0;


    for(let i = 0; i < this.tablaForos.length; i++) {
      res = res + this.tablaForos[i].cantBytes;
    }
    res = (res / totalBytes) * 100;
    this.datosGraficoPie.push(res);
    res = 0;


    for(let i = 0; i < this.tablaVideos.length; i++) {
      res = res + this.tablaVideos[i].cantBytes;
    }
    res = (res / totalBytes) * 100;
    this.datosGraficoPie.push(res);
    res = 0;


    for(let i = 0; i < this.tablaNoticias.length; i++) {
      res = res + this.tablaNoticias[i].cantBytes;
    }
    res = (res / totalBytes) * 100;
    this.datosGraficoPie.push(res);
    res = 0;


    for(let i = 0; i < this.tablaComercios.length; i++) {
      res = res + this.tablaComercios[i].cantBytes;
    }
    res = (res / totalBytes) * 100;
    this.datosGraficoPie.push(res);
    res = 0;


    for(let i = 0; i < this.tablaMusica.length; i++) {
      res = res + this.tablaMusica[i].cantBytes;
    }
    res = (res / totalBytes) * 100;
    this.datosGraficoPie.push(res);
    res = 0;

    this.servComp.setDatosGraficoPie(this.datosGraficoPie); 
  } 
}
